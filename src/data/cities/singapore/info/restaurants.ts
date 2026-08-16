import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "티안티안 하이난 치킨라이스": {
        photos: ["/images/singapore/info/restaurants/tian-tian-hainanese-chicken-rice-singapore.jpg"],
        placeId: "ChIJ2ZDgUg0Z2jERXUJpEsR0Oto",
        placePhotos: [
            { photoReference: "AWCwydg3SL46OcHWaM7yW4sRS97fUR4K6iOXGiVXX00ez0nodP3oDC5m0hSQgsI6yCOq6FGZVKi_Csm6CCy4p8Tc6YEWl6fPL-tTlTIBamAMhtRWygXkWDMCWYZ3alCJeurre6JPfPkvyzfWW5QTsJeYpG6Ck6tSL8mmJG1Mok0A6SQy2A-XN-1cVskZMXt_S9UZYSyheC6AcxmqQnfbwc9Tki8YoruxQthGzvNi150cb1ikQOfAa9lBFmjx61m9etP8HKtKKFI5sCmRegYq_jXPUZkG66eI6IDqJzcl1Biw6Fd0tYrKWLKzUDg7wVNmSzySKBZbLb-17PL243CzPzfbQ3gQ_FVZzsQVuAXXwVsxcvfg5hsV5VSHyDAJvFwNEKHe_iytzjdkTR4Vzs0W_xXDo3jxW1LQeJXfQYqn-jUbCfLWHqmi9w-PZhAVjNLp-Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105609615234864361610\">Junel Nuguit</a>"] },
            { photoReference: "AWCwydgUTcsKujh_Wmy3IMEz6necr5-76RR1h0Zf9C3rEod36JhAuJIESFESQ2AxUFlIJiuFY51md6LoxnnYyWF6zuglPZxlTZAT9Mj8TepYOGm9ZVoX_pqGZEx34j8bu4chg1KG8GeDfZWzomv4_ux1ePCtugwjIYUfeG9evduuRkt9qWjb96Sf0-jy0yxg3SDGf4BUM7XHWs2geSsHW2uxyn0XAsQAP5uvsBMv64KISr4QjJQsClwkMP0F21OGxat_3Ihzfx4qj-93rt7rIaMBVC8GYSrlnucSJf7ohVOxvw_LCyi9AM2dWRNVxqC-V836cTFu7SQgHjsKBI3KgPZiuWjwznP_P7drDJ7Yc0Lt6RRzWdgEd5ozLGzaNdRJIyad4eyAe9bAZZF86jufUyhDmdPULhRmT3gjHPf4vAo8ObQUQQ", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115742200769259092474\">Brett Kwong</a>"] },
            { photoReference: "AWCwydiaZRccQWwY6rLQAg3gR7DwxQoRzAyJgRftiaLNZT9r00N-gJaQzg84f6LmAMRx1_8ScllSKuNtK2obgO3GEKa8jtY3E_EMIC-oDdkClLhsCDM1VLAcn2B5ZHkrhePG9kHM5dypOz97F88v3NBVQD2xKkcM7zok1N23epMXOuGKapLwU72ygPE6q4ugEADuWO2XVOZjANol5dzH1t_HdWa32HzCJPwHZV5tSXvPgBW9Ttr3IABwboUfNcucdSR9YmPGGuhhADBVxEFtJBqSdWe2gZvrNMVLylMafq19HVYgssjTHw1ZccKGBSQ8mJ6CVXJwpoiRW2VkzB-34JLObRpHUVd9he4SF5t8Up2xOBbUTz8wtSho89QUeTf6rhcrIlSsUtOm0GfbIqod8mE18QPFMXijjhis4En8rlks0ihGOaf3i8MFVhWlRjpb3E6L", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102731227535332248305\">Yui</a>"] },
            { photoReference: "AWCwydg4xoNvkNz08hWAZPtoQJ51dW6nj8lCL8a_xa_itHp-M4iBH8bAFrWWaPqe8QcpD6QSZJKom2N_NiQ9X1cXIWqMP5k9eLpqtVBNlljTDTqCnOEV96w0jfC6afugGvczxBzd-Qnv3E-4FFu6z9OvlfZScuBahf6uXqb0UlvCCurdj2vo1rnVKyEbpsAh-cDL1CHvR5cWro8kPa-oLATTgefBeZwmrq8HSOZZ42IfmaogiFDI1YYrzjlmJthUV09eBkF6r-uEmMYJWXvCb_a1say1f3-G3wmQLILfNAS9ccyDQDVyIit4Lb8737EJLxq1S_4iAe8hu5gagD-ZR2ox5d3iQrHTHUqiqsXQ2QMmMzTb7seasB7JIIo9yhVdo5U2i80ubkbN9bAXcYbI_Brc8e8PvF8oOKJ4eroJL3FPhjPpSCnajSP9Bg9neZTlJA", width: 1600, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104359179065960023450\">Tian Tian Hainanese Chicken Rice</a>"] },
            { photoReference: "AWCwydhYxaqQyhiHi0iKnaU7_EQBW8VMgoFGVWRkJ4GqNzPtWg38q7NbSK9MaBKKLSDIPg_W2zR_2fXIJbGAPUsnQ6OEkp-eODajpTzASvcoOlG-Y6HtrSWIX9Snu1yhPpyyBodmnkgZEX8BKDtS80QCl2nZPna-xG7-jXS2HbTsxfmMStG7EVGPOYzJLpVtpbH_lMQ3jH-QK--VIesyke7Lij-CZi0S9bpwFQTZ4lCuWG7hzFTRnHvC3ilAzpBHBQY0KTzQW24_56nO34suHjZPZsmfRhY3a9eOO-4NZ3FHlRKx4wVGMcvGlQ1cPlslfjAT5sVosNBDVHWeKPjLL-PWN4cblBkVQ9dO9rKPW6GO9DQ9-U_IU2zk1SWjZlGtkdc0fNMrkXN_8nOYSc7Q7i8H-srYstwJtYkxux2IbK0M6txJmLifFXMt72qGnmhZoitP", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107130733578817480750\">Guiping Xie</a>"] }
        ],
        summary: "싱가포르 치킨라이스의 정석을 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["부드러운 닭고기와 고소한 밥의 완벽한 조화", "진한 풍미를 자랑하는 특제 간장 소스"],
        tips: ["웨이팅이 길 수 있으니 피크 타임을 피해 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5140166299448514331", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8B%B0%EC%95%88%ED%8B%B0%EC%95%88+%ED%95%98%EC%9D%B4%EB%82%9C+%EC%B9%98%ED%82%A8%EB%9D%BC%EC%9D%B4%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호커찬": {
        photos: ["/images/singapore/info/restaurants/hawker-chan-singapore.jpg"],
        placeId: "ChIJ2eV4E3MZ2jERSJO0koIx8GY",
        placePhotos: [
            { photoReference: "AWCwydhxxsbX58M2aJQ9XnTlzkWXLIFB4JNyxBjqaBBLZHq0lAk2jgkbzu9sbaPQW_1L0WFsrN3-Ao120uGw64UM_pwJhCaAMEuqMkKtHP2YRs66CG5C4spMWlIokmnfcqNBd_L5TUTpsiNpTQcK24h9PmuGe0blMa4U2ohxutEfPXpgFRgs7g481Wi46zOykaqS7Aqe1TWdBWVsCjsNc31e89efLJsEeZfpLvxMsGCv_CoCUKPYprfdkmfSFniGurCrV7__JUp6NWWFFCSj0zyy2CmC7Hy4MLjd_GLqTzLBeJ6fmEQfkrb9rhup6NfgxEBZ1afh3sSMoSMgSEMX9YJdoCvX1zmvRlbRxzbRCBncoW52zM0_cgC2oKGlMsvuv7NZxnuFzU1mQQ3zPI1Ia3TV342XpDQ_ppOKX8M-hDcYYrkZubjxJ3JUrBURhX4MJ4UV", width: 1182, height: 2096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116777285606288232150\">Liao Fan Hawker Chan (Chinatown)</a>"] },
            { photoReference: "AWCwydh3a3V5smn9ViGrCNtSBHrDbPIc1TK7nsGXmenH2QQ8cTJD51PTBH4g_a4BfCaYKsoYyPzwz5nqVl6G44zj1HVwDvR2_UcmnUmLKFsoTaUGRwO7UoZr8y50qixo7KXv1bP67to16PzyykBajNlaXddJXdNA54ul_hAAlIWCwx00_eflu3CBhcy4g-iO7HafPnChoyqYlneeTMBm9ndgudQD2iFIN3jWgeYZvzd4GYgrPlxEUSR7IAV6Tw8VWZ6i3o3iisuKVcDYNvStVvsICfA0NHfNeXjtuMT9JAxHDBe9IVGILyOR7ViUZadH_23uV08IRVZn7HiZwbfnGEY3s29dQIkl5oYrILw2HCbHr_jGtc9gt985q6GGW-bL7uQtXo1XOe2QQngEx7q9-dBv-SwJxzsnMb-t_rH6Ie-kZ5v1zdfhMTyTJrFZpObHtSIa", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116777285606288232150\">Liao Fan Hawker Chan (Chinatown)</a>"] },
            { photoReference: "AWCwydiyfie6GzBuqnDfzXgGjATtgURIG_u4PtCRedjno4-a7DQq7Mm2wFsBZoxa__RtEqs6ryaBh7714Of1FA9M-ZCU1N96psgvvzx7-S9XtmsLoJ1onHKP0tndznj-adaR4snaojhPtGqKTQvISSLrgrbJVKRdjyEJkLAmxWoHn1TS1z1zUEcHNLSP5pD2X2GjhxsZFOBl2qAzfcE14SZm9bpdFbnOgbuSrcy7qAzW2AB28jttOwvnktOD8XjqW3QMyLl3hvWtJzrZrgzzCmiC8qZZzs75TtlR1Q4SIxeNg837dvq7ah-pEhnC_EI9SUomD6A2zZB2Kli3gZx5kHQBRPRS_dK3YNXYC9ZUnq8HvErOvvwoDHBFt9yUQhg4dAifsS_Ub0BMmupeDGNeG3YREvwJAAodRYGW3jbhOTcGZpIO_CfOcpV7z9tvkDc6WWg1", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106829916796749129937\">amber</a>"] },
            { photoReference: "AWCwydjclD7dCcDXKNauS32ri_ZrbgamvPLXF-OE02QAJjEIPKKDbahknLHcWC17oA6ccZiJNxw6PpeVE6NkYkn-sDdr-aPppts7brPp9EPy3JCu0DpfWBm2YGPTw9ECbJE3NYT5cKYQRGELwWvdVXWBcR8fHAKkflVeYwGWbskWMTZLL7XxzV5obw6WEF_ohgh6v45Vnj47gUkRT2AC8848Z2VXCt8BbOz6OjQzn9tLV76nOFAkoSDUmdQEhP3hAiM5knyNjDf0zoZz-Ru_L-vtGa3I1q6yGImmftkViu2Qp8RG919SRdMJfzfsAoiV2ntC3ZrzW72ewUFsWurTLjWb5b1Jim6KXsECw5ym4oKqC0gsSqXXdazofRnBp3yup9Yu0Uc3B8bEcggRExdGhBvtYDPFBptg5SV9atAtxK47Burp3B5-MB8tKwRvWWbu57SL", width: 3390, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116777285606288232150\">Liao Fan Hawker Chan (Chinatown)</a>"] },
            { photoReference: "AWCwydgbW4dc_cTo0xdgZs9lr-gU_T5hsYHGSQVOSlAKGw7TXctqIH5zmAW7uLgvAUWRlhzxCsUoCflItbe4N0-ZWvpUthBRAt3ClQ93vNjZIN_gsI7vMcC_7_UG4JKyf9_fQKTM1cOZUlC8uOoOVvCgU28oVdp5Wgxs561yLSqsbDZgkb88j65GzKzpiw_BSTUdEMQeR6HZ3IxAh-TEnQsC2q6K_SRU_Y8CGS6iCghpTpRz9XJnFYOf4ilCyjLkRuhGKYQcmfRdvoagXF7EShujpMYeolr_ZnsUC3SHb3jmVU3fBfQPJUor2CppoWKKpx8hT9r8J-CivxyPKyIrvb2KRTFFJxyYZG7EAmpun2Bz5_8NHjgrN-nVBsZh-goAcNOZr3WE3mvon-WBWAFB9IMY2NZ5DrB_D_-VI_q49B4vN_Va--e6gB3GozVT0MbtnI_F", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106599538059055317401\">小林緑太郎</a>"] }
        ],
        summary: "미슐랭 스타로 검증된 가성비 최고의 소이 치킨 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["달콤 짭조름한 소스가 배어든 소이 치킨", "부담 없는 가격으로 즐기는 현지식 식사"],
        tips: ["호커 센터 특유의 활기찬 분위기를 경험하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 3:30; 화요일: 오전 10:30 ~ 오후 3:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.liaofanhawkerchan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3674368111285686568", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%BB%A4%EC%B0%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "점보 씨푸드 리버사이드": {
        photos: ["/images/singapore/info/restaurants/jumbo-seafood-riverside-point-singapore.jpg"],
        placeId: "ChIJ5T8-VXUZ2jERMpGzIj6L2ts",
        placePhotos: [
            { photoReference: "AWCwydhTGiXQNj0dP9PIYEGFYAsv9J772Rt4s928YeWF9U2nz35mYQpqLNEQoJQ1p-5uJYZ3brGPVwgED4UmPBKDFCwhPewWsfhTx8kdvGTK1CGyqPFh_4dWJux0uFxc1pxnvPqz2hWgEuqAh2Tv0-a00Lrcf-bS2wXJNwTWyV9uR8Khbf56jOEprVhms2c5anlemJiTAvk3T7p9Ptnoww5P45ItoMGY1JZ9D07gxMAuA5mUaYR4kXwi-tfomzjdSMSBbYoC4PhcI7MqaD8nX1uA9IHKdasCaxLurLpntzLCjb5LhRMnmuPSgTJmsK-atbjwuudNWbpYFFnBkMDgv3rpoQd1ep8fxffBn8qA4hXnSO4GL1N-CCXQazaNkG_C_sHHzSaTzH2p6_bhp7mGHJObpPs4x9RlUuu4Npoiq_xnHNb8i9Wq2LUdWnWoUSepkw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107558219061063688410\">永田FF</a>"] },
            { photoReference: "AWCwydhBft7ayhYnot_AhePtvBTw62wijA9XIQd0zkegB_i5oTViBmWXQiilgXx3CjVTzFHPUzgeCBoG-PqlxqGfJIHAuCZujC_Rfca7oeoJSFFI5f4eCaqfKyKHaAn-1kvqUwQRE4gqcBeRSX1yLvHbKYWDb_PTeg4c5XOrmk3PC1NIlmGGFXLqM5CVq4smd-87-0_g_dlQ0nOfl4nAbOnc83YQfbfxq7v5DoaYTkhaUbWXhY8p-Wgul-xkB8bP-tlMk9nv4GEQlOfCsQ6ucJGRES0q0mKEsIi0Cw9i_tttOXBpA-xImzpOq7wL_TiALKf5bPleLDTSpPfJ3gJNHDGb3FE1R-W0kdFJtWNvvCZG6mvC9k6ZUY9OfyAbNVIyprvkLbcx22m5xiyETrpPjd1-a4y2AWUnY_9RLIit_rAZ7Qw", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115814884659948951545\">Ana Quach</a>"] },
            { photoReference: "AWCwydgSk9HKlSWmMCHHSskS6T9-WJUbB0E0boKGStPive9-OAz1Lbj-J-4OtNV24YrkdiSt3aFs6h9yws-7_430SF1Pss5Qk9HchI4zdBWgP1P4Z-ouW95YMUOf04KObTakmd0YZpSy0b7zDnDaimBZ9q1ne7DoriGJtjokxHMoIEonOcYLu5rke8G2bCMF_gZwZtMbOb47IhPG-QzQ8QWaFmA8kI3YK39T6fkMq4F93tppCjcWIb9tSINdqAspIhOT5ntlFrYHj_lRAVf7E8fy_Dw2BjBmqix1N1O2WyTwM-W1JF897tn7t5km4j4cVCCbDObHe-VT3BR0NcRwCurNDbpXdbmz67oVQQyh1V-kUxr84juEwZlHMsEh2rFNSvdJNcOod9Hl2G6QviRqU0mMQURgkr7ulMEcSB9oeub2osXspH5-AboXWSMpYqCS9Q", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115590828614653290885\">Chia-Chen Ho</a>"] },
            { photoReference: "AWCwydjloUa0SkvyQ8bBHMWWc3VRdQeguIWmc08IQPUtFPuuZW0w-RC2JMlE8tqVdinSisijpO_asxYeq6pN9rwHI6Pxqxc7oF5T2YOie8flWQUM9oqqpXanLDme-PJ9nOHbLfV-weByN06FQpX8G9sJ5nZrvUKuFM6INSIJl-a_IdfNmxH2m4KrZpqc_OmE3zb2LKhHE7iV1dGF4C1SHHXMgHJ4nCZkS0KVkVlCGmAQrjhPSllk_Hi7a02YVpofhbrJFFVLPNWtS0zQZjgLvACbR2BNSCj2hvnxbYEC2PUSImZvu9MFQr6kYqlcDu_PYQYg0tqHSTTalWG-Ruj_44PJqTdq5vERsAAsNY1ErM1V3wgZFYoyiCTwHlLz0kKnar9_Q7nSbMLMjAkmt0rj-x6VpPXve7H2HX2mybq-k7HqLHsls8xhqwPSP7ADwWt64vAV", width: 3495, height: 2917, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104912565915825421772\">Janice Eisen</a>"] },
            { photoReference: "AWCwydi37TNEcB66j5SULcMXMPbdCQTKySg3SqNpMxkHAh41Q7ulYjGjLy-_1UQL5qPRugM2jTPO-pRvI4GAxuZMkGmXJzof0cvt_gbZz-Emt8oYLAnFtL8hrYYvHLrEdMesevCO02oVHhRXEOQxaH62gS-UoVQ8j-zMaynz-FXnegZsArTVzzpl9tbo7D_IIBu0oJvyKvl4LFGE3v4heWkecvzYlPTmJv2QwkKUQ7tAnUfjtAiQgXbVukiOMUPixnwh0tXQdQNfBSyu6Gf77FtIJSjcOYTtWFJ4iZBVmU5iYymFge4-Nl1UJSWLsKMxdTyKz8WzClE837ymSn3lIlPOSvBbwy-dqSrILaHYXbcpitEzXMwAwG4s0K8KY1dOalVWWnV2fmZZwGFMbr0ZzZa4KRNekHZOA2A2K5A5lLCfWZhZXotddRZdmPpHDjPp8t9v", width: 4096, height: 1888, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115344688445632031417\">Joey Chou</a>"] }
        ],
        summary: "리버사이드 야경과 함께 즐기는 프리미엄 칠리 크랩 전문점입니다.",
        updatedAt: "2026-07-15",
        highlights: ["중독성 강한 매콤달콤한 시그니처 칠리 소스", "신선하고 푸짐한 해산물 요리"],
        tips: ["인기가 매우 높으므로 반드시 사전 예약을 추천합니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:00; 화요일: 오전 11:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jumboseafood.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15842127738215567666", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%90%EB%B3%B4+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "노사인보드 씨푸드": {
        photos: ["/images/singapore/info/restaurants/no-signboard-seafood-singapore.jpg"],
        placeId: "ChIJvTyrzTsY2jERoMU50NeYx7k",
        placePhotos: [
            { photoReference: "AWCwydgFKwV6MLfGgFTqq2BCkrbk_4JExmG7_zYTYF_c56H1rDb1-qnCdgqt_u6mXh4fmykQUhiDqtIU15YQRjIcE6_qm_XorKa6VgsKkCZNKn9mGZUphzq5SKEzjmKc0FHXpL5iflcFDEKFyFOfSonRYqI4unYeea2XI1pkPiCCdYNVrT4TUVO4G-iTWUAIDYnGgNAELkzcj_IMDi0D0DradHIJg_CnYvFAy6OkzgXUTbz-BWHR0nQESG0gCuEbvnVJ5aVqvZ1JXD2LKMc6qa1nI1FX1se-tEFjOMImfsGlb5HZak5vgIBtfnuhvJI4JSPpe6W3UEJuWW1SwTMadPcoz-blbwF3tHNXMhmgj6wonhCuN7VfUGogHTyYWejLQ0JJVZN8jslDTVJu25BSRBHE9DeaMASmoCHxdG_FELw0OjFWOWhX1T91k_tDtlPR1caQ", width: 3264, height: 1840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104914637877287319247\">しらまっっっこ初号機、発進!</a>"] },
            { photoReference: "AWCwydgx_DHwDjhJJzSw27l3jAJD3LOHjBJ-SJUKs2ntyG3EEz5S2sXIPi1O6E0boF7ye977Z_aEEywbxLr0Cu-sJKsUZ1sHhxL3fDQaEEYFK-SGpIekaaywCB6qNqVafHRnTFYn6bS2CDfM5kCE0ply2RfL2CU42IWtGWNAM-dwxM3DE4TllnJgMeSnP7N1eSApHa-sRZ7iVke4c8r9HEUo-K4uwSt01fjeaJC1_QaU4K3A1BNLu2-vzET2VhYBLyM0if7HrKqwjavdbFwPG9aBgHUhS1XYJOBfdwbuwIj2Um-7ZeWDGAEiAwrXkS1986FowBfRobBUjPjnnguijRZbS0p3FMETk2pi3hrc87VbmaSpywlaN49_0aYmVG0Fg_zy30fddoX0VuCrS-r41laNS_DDgnddg-eKFMmeb9h9FQ7nM6rQTICFhIvQN-Pl0Z-d", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112131102562048677323\">Sherry X</a>"] },
            { photoReference: "AWCwydjxIPS_OlUl4JhWWAOIvO2c6T-_Kq7uD2HbjtVkeKu5y-MLlQc0qTHlQBfZvHLNPUri1t9q3rWgEWJ6jVi28mIJNWbBoaTiOIlkVab7dAXmF35rPrTRbqOkciBsBPBpDS-KruoSzrBQ6gG_cHJdt5h9sg9w3EmKGn1_gkm84UvYwIRK6XmlS7mwDfKtR9FcTqHqdl5NNMzeIEhCE2Q9sGgcunsuWqogLWRLqBKL2GZ9tbk0I_r7iwRS75XOWB8VfgPK7HUbe0uFTyrFZ20QtYlf6zkQ0k4U-IWeYiNIOPm3orgTnPjpuNZVtWulRu8lJClyUeTpmc96dDYlAcCCW_QIhdSW8_1x6BeqjOsBHg0pQd5UNUgxGYnh9XSyerEYa0eSw-8cRrOJFm_BPg0NXLhObBIJPuBC9gc3PH_O_hLy7dKXrf42JWQe_hcFRThI", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105220731723088018702\">Timothy Yeh</a>"] },
            { photoReference: "AWCwydhkLwmOHqcxTeTF1MAQuO4L0N1G5T1uEi0PKq8xMsUmsuQqCwXQoxAI9PAklQW972Uc6u1VLeTnRMQf-mpXVkP5_6edok-bbMdx8ZbEpZW7siQYDHnFtz_Ku3rTo3rYIakLa0G4hz_YVP96-pf84UmRWUG-o-e0zrqtq-GqIqQ5J9RLpM_91z5HINPe5_Qw2BYkmLbEg0ys6JdFWS6LCLBHBEk8mcoj82M7VZWnhSG0jI-iMNvx6TdrF3a7VVOorBlsbB-2OhGZwMCQVoBDYXoBI5LE_v1q0QWqOhgAppwUB87agoxwVWTA9SXtZsGTAcsJcfKFa-J15mwgYdrLfiL1sTVG6t6ayL1_hSHy9HtUWxXsg-syPp6Jr3-Xzm_NmUPCMiRV905Wcg-G7rQOeh02sG-Vuofvv3Ywh8EAB0SPrWZrVFfgMOp7e0NL_A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113866575805435270802\">Jackyfromfl</a>"] },
            { photoReference: "AWCwydj-VMZ8lshXjlw58XBKjNdSaqP4A89kF7j8NJnjBMauQfH6TRs1bEwmBO58ZCEYoHREESYg55vgXk9GFOoE-zaKPmTIOC6VIaKXw3BuZ-927-c7H8Xqgs8qvi0ht2ixjeNbNRo7cnCirmyZn-flX9kSZ51C6oQ0ohHPpHj02c3cEYI-u9k63yP7lEH00GL9kQs2GHo3wrijT399eOJciDbqQZXh43W2FuuSp1im5OMjBSKNvfcoajQfbtnSIEaDHUysZ7NRASHOhrmDXdKvkaM1h5Y0asNkc8qqm9HzDp5RBwtjNIuJPG4kmPeh38kz47z08p8cQUwXYnriAXfnJGP0bCb9MQ3fBBjkjLmR1Dt6rrEmVI9jTem2EbT0zfREFoS6dRGWMxQRlc9QFsOR-f64Vnf1CQcPvIdHfXeOGoFhxCmrKFUNpPD_sR0irw", width: 576, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102066726351509054147\">Sharmaine Mccarter</a>"] }
        ],
        summary: "노 사인보드 씨푸드 @ 게일랑 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:30; 화요일: 오전 11:00 ~ 오전 12:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://nosignboardseafoodatgeylang.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13386836470060926368", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EC%82%AC%EC%9D%B8%EB%B3%B4%EB%93%9C+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "송파 바쿠테 뉴브리지로드": {
        photos: ["/images/singapore/info/restaurants/song-fa-bak-kut-teh-new-bridge-road-singapore.jpg"],
        placeId: "ChIJP1jDgAoZ2jER9XCcxNoXvcc",
        placePhotos: [
            { photoReference: "AWCwydi_mH0YuI6TA28cXadkJlmUoBics0Y1cJHa8nPQ0U4A16fMikHFJ3ZtO095hxvGg2PClfEkMN6tp_2KCtr-WBV4knrp6N53OCuosEKdJikWOaSAFTA5Ugy6xycE56heu5Tj93t8rjsdodBXQNUqCfi2Odw7Q5Jcn8d9fhv0whRSjgV9jjn8x4DedMiOI-M01KLpe2GYzmB1lqej4dJIlQY7mWM7PITnx6ukwM-ED72CEtujnZI1LK1fETOIx30giNFeymRCFO2j4aRKXntB85X939Cgydo7uD8cggLMtobzAR30AaLL83IV48PZVEZESGkwEAxFp8V956x4VEeGkcQLIFFsaptNV5MPAG5bVGudTlsx99BoCxhQEnf13uiWZeBsUZYeXdkRQFiH2prGkC7kmUwfTfbS-LM5mLkYsUg", width: 4800, height: 3195, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106362871060918624413\">Song Fa Bak Kut Teh (11 New Bridge Road)</a>"] },
            { photoReference: "AWCwydhwEiqVHZu8Ij7kFGzYdLT5TBOe_m82WYYNiHeNtMPIJooIJg6j1OlZTdTNt9rQbYEKxoFT3en0Q-5mj75RgfRbYqOdPVf48IZ-HSWSySpMLM4SmXZc_CjgLGZLjNpFwrddU_DjcSUxkglRKrEOEXaMxmkn9uZRlgGecGgZdb8xF0VLGkq_8RuhAI3CRqlfLjKPG-GSLZ5LzQERU4XzLL0momXCHajLuMnf-X_O455tr-eMEG8gK4tl9qlPCJvLuY1tTKSTbxCMwplqk5tfIGJ13PCcOk7mp3iQMsb_3GPLgowQOnyAuFkp9AiWARY3QrR-H0BSps-RXAjoIG_OusLfKIjiDrDDzWfFVvj8n6qxmiMbAYZqkAKkvqQWqmFFlCoZZngBieK_NzzrP0z3ViTpaDIaVxcr-L0fx7ZxsC8FtOI", width: 1200, height: 798, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106362871060918624413\">Song Fa Bak Kut Teh (11 New Bridge Road)</a>"] },
            { photoReference: "AWCwydi_e9ODd48eWy_DJmFh9xrx34H3cqboXoMfWNtjHcaytwH3flL8By-0xKWEwmpQ6GO_vyYKC-jlte439HbaCcRIxs0nkfH6wLNZsjJ6SJiYoximdS8uoi--gavEJ0aeqkwgZacw_9spj_pjulW-95xuz8Z-KmmEIFo4ry_xpuVmB-OeQ2NjgJc-USCFBHJKqReJ10RUfG4Qy4kKC4O7-gz7rGVC7g4eLzH_omVdBXCZBXl7FhCxEekrYNw-z6zeTf1-H0ELxcsMzwVwJ1_k7FMO_-zJICMFooCbykw3ixo7yqz_hw-c6FkR0pUBOpu8hStYacdz0cXCZqVnQqOhFweK1OQt4qP0sGN6t3KmwFqwGRV-b6Hq4ahcX8ZWdtb711ZNGk8mlmii46GknaMBsmiTtbCdfKd4SlYIUCei3N-TqF4ol0qyl_88onuFoo52", width: 4031, height: 2267, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114424617708270044307\">FrancisP</a>"] },
            { photoReference: "AWCwydhhm_Xz_oNvIUJsErEluH3G9IGiLCWGl3negW1wbdkcFBYk2p3bSCRoHJnAMzCeqlFMPlVCwEqhXz5XHkxwaBsvquEppR4wkL7eW9alQIWgf-Ul4SxMYIuWSb-WrsECkTf4ftLQa61KY_d7TqK1B2_5D0FrxY0RO1t_rLM27Uz64pEu5MYWLlXoJ9BAu4xoXhmzQm4rl-E8v8nMtXSqklWvmf6z-GMpxoZJFXCbslX0Ngv2jG9YfGzVnlx5t9QGCw-BKV0g-_v4n5elUohHYnegmapv7V1Wq6DYsRJ6PFv-SueA_QtARQvMfAg37ko7bkCW-z6OPPF4mNdrkdMvhA4rtaC_ObsK9-EvNMT_IgEdueQPfI4kKjcaYvnCnLPq0JMqUoN2H13CIKWTkVCiOIg8wlSDsHYlO10BCg9qJaORy7tHwCqA0nt1SnA6-PnP", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112990316887856174177\">金星泫</a>"] },
            { photoReference: "AWCwydhoJPt_WJnmI7DDU4fEKt5MUGKGWg2p6iwozjfCAEYqtsaidKUZYjZh7cakoJXLOGo4XfvNP_PUj2kkPQbnQ3KdvfMp75P8oDG-MDMNv65Tc7u0gnzkTAd2Gu0alAjPUYvxtikdOxXVIDUegiPY06OjSa6wbVFop2EDsGPi58ix14su4w9XS-sLx-Cgmqaji8N0M1xx-CMmbX5IVMh4kj0Rvd0I7Fk5nOwIKVcAuhMW2mIQQIWR9n3h7B-qfba0Lb-OTIySq0Ud7PsvaCIjjHZQ3vgjRO8Hc9vqdcteI5alYl2QY-1OyfPXZFCpLbrvNvxMd2wn7IpStzk3IgMmgsovpXPqvkwIeWjpvXeqguA4s0G30-vbXWiahgrdxIOwqG6_WyLsfoim77aPYu-fUkGw2uhwg1_yrzlr0kufCLW8LsnM1xUn9XfwNNC3y--h", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101422844442681857131\">Jobeth Martecio</a>"] }
        ],
        summary: "송파 바쿠테 본점 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.4", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.songfa.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14392686212514869493", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%A1%ED%8C%8C+%EB%B0%94%EC%BF%A0%ED%85%8C+%EB%89%B4%EB%B8%8C%EB%A6%AC%EC%A7%80%EB%A1%9C%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "328 카통 락사": {
        photos: ["/images/singapore/info/restaurants/328-katong-laksa-singapore.jpg"],
        placeId: "ChIJuU6afXIY2jER21Ir01uoZUY",
        placePhotos: [
            { photoReference: "AWCwydgwBZLYZjJf921evC7bbi1xFTjzKPiaiR3gok-GrDlWWMx1sS_vGjmQ-vWgjmO9oKCKUhct6EpwtbOBX3GjZvthkDGkQz2HhvpsLG6-iN2T0k9PJoFi_l1t6xdinyXvsBumy0mj2A-TLIMUq8Kgj7s9K1j_ax3blOcPaZL9m5gZ4HZvIrg2QbkXe7G3jm4jpv2EvnFAu12HSQkEtLj_2AbUDzbgptJtxgZzxLcmldOz_PFkRN-wZYpu3r7ZCEwtJrcV4OOkhkM9J8kcL0cRjKnrD3ru2tczzMK5iOTCLkZx-klEjIi_005u6Jxes_KVC3_PXE8Eg6_lKyMDkKubHEYWckiwjQmjF_qLS3SScpHepNEChlLWgd3G9_QY7CWBrzQ-8cTZTWMl783Spjk9VB2bFTxCrOT5xHkZqfb-7_fXBFAMo6xD3tTQxxdcaTtZ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111569334602685672625\">Crumpled Nomad</a>"] },
            { photoReference: "AWCwydi7zF4UiSU0waQVDue6iNARTfW1noaNVEojOvmbbsWpfACVCw7LW-DIWV8cut9NfQBsOAc7VmKQe2IYV031anScFlls3GRCL63qr3fgJCbdwHdI0bu3xrv0cSwpeUMMFhMmcQo0R2ddxZoeRoc0HSkVb0IL_SpIOrAmnr1qEc1TkqEhm2BHKJPDf-V-5CY9M00tnqsHQtUlkCcYZFUnE4qYjjLeBQpK78g8-UJ1w0EQ8sdaRi73ycEwXn5wy9nnwNaxgybLrF2Pk2HLsG1FqqNZ7Xo1v-ATukjJ6mkQ__8Pn85rks5O0Qv9RsdOkLFW67s8kGA1Ocavcn1dkjnd7vnHsp_EJ_m4iIEJx4jSfao-W6vOR-UKHnHqxZCCBSH-4Ck7bc9Eh4ZpPWJvsQSP6Rur3w0UVQ9Qjf92j-U9NL9FfQ", width: 4800, height: 3195, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109190737284966091563\">328 Katong Laksa</a>"] },
            { photoReference: "AWCwydhz0srrV5m9mFV3jG9T4VavpMYkOzYoNtlFKLDLfTPurPtpXbkXB9gcsnKjdRDnvCSOKdg33LrqRBKR4CvcTs0zlfB5Qt_U5SFgjlm_NP2nwNx2x7oPVOo8R9AlGaBImocsvLLqLu-FJ1YiXyV9Xph2oCMn2uzzCQU2qXpQc5xG53_EVjEswfvIRflUXv8_5_dddnbcdiayxeF_hXVI0_v8h5WlqmO6VaBjpC1-MM1htct_ct_O5arKJ9LHlQmFKPShBF4kx0icFqRqZvibpCNszubduVXnSIBGva9r1InMiAlhZ6-vXa84W_BfU_LVuN0t477kslxkabKmfj2qW0bTHpB8ukblaxEUmoMsxRfahr8m83SBik93iV36_VgJQRFfSzYSt-YkrMuha3K54Iqey_OPoAp6epeWrPpdyeIzpCRPIkUd5NzB8mUskQ", width: 3416, height: 2939, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103416280168777321979\">gargoyle</a>"] },
            { photoReference: "AWCwydgxsoIs7XRokYRVV3gixYOrW8dxC7XPETwIoJr7V79NGsTCfeipu3wo3lJo32DxlB43FSw5RHryctfElV7A-9rz3hceJkCH2uTU_WIJckNt2ZkHN6thdio5rnbs8L8JRuXriF3oVxicZHzdHJkP0iDHy-bjHUa-UNFssCfhrYIlVqD0RbcgdE4zyezT-SdP_lGBgqEuLmuj_8by4y7OwG4oq5vGwz6MICO_fltpkyCdFW9RPDQGBgPWxDc0Wv62ho7wBdS8i44g6uEoU38ELv7_Fr7aH5cM4NzNgxZ1Uh-0MHl5vrOlBenugmB3sleBKzw7L91ock_iJqpGnxzu1Pv37UAkp6MIVWtnsqWTC420ACLQgJWi4cx2wVD7U-_NUrU-OXAqX27udoxN--VaZpyb8Ppi1vIIOkcHciZYU3i-w0-MjFqDKKArCTh6cA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107183346603892240225\">EnE</a>"] },
            { photoReference: "AWCwydjoDL02MXQ1prpKtlzOIbNJO3dvRDHNirxqdyYUnnBshQsnER8gek4ZlXoUrUCUXS6Of_ZSw3QA0pQY017cDrS60B3qEIySS8Z1_e2SJbOqZgHbetfgAS58bZEASHWB-jKOnjKwkw7YkjfHmL2tgA3EyQ1oTv_jvavwB_meC0qAypNpchCrXYkBCfa-FSIKwX566YIMFHxhzgCD6uUZIaG17CxRHYzwOQkcDcMINJMKFqdqUHstRguSSQnCDPV3KGAYAQdUJmCAGXwwNkrC7q48uCEsbKWn4-Rp-HsILCFpJsWc8p4Yk0VlpNR0Rq2h-w00XyoKamZwi5K0ndk5uHSOX2HvWciLVD5X1Y7rEY9W2AG3PucjhKDVAsgrYW9xueSKraSMn1o5mDDRcSWksHaJ51Z3YM9fo2CsDtJvSOht7U8c8rCMd34UNqYBzQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111569334602685672625\">Crumpled Nomad</a>"] }
        ],
        summary: "328 Katong Laksa 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://328katonglaksa.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14031700179242330380", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=328+%EC%B9%B4%ED%86%B5+%EB%9D%BD%EC%82%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라우파삿 사테 스트리트": {
        photos: ["/images/singapore/info/restaurants/lau-pa-sat-satay-street-singapore.jpg"],
        placeId: "ChIJcxFXaw8Z2jERMXh3inxmsdA",
        placePhotos: [
            { photoReference: "AWCwydi0hmGwbIdLoALKSeY3p1kkGPRIrx0lhZiFzuhVwDqAVdeVd7PCbnSmh0in-xM2ynQ7taeQnczDOcxsXBFZpGVjOdpj_Fvyo73-3NUZq4-R5WKcsqT_FnUryWiysVvrwdLX7OAC1pQ8OL-AjLcfGACWCmkJTnZeUPx_-c47pSJnjtfiDjzUao1wIpsVvitjlO1EKJk4RtJ-6iCHEtIlH6SW5XdwB9SOUeAiWV8wmYrVFaq9TMVily3udWyk2dr3MfpEEID243pw2_NjyfYVDysDWzpYboYD4Fw4i0JFqA8ncI0-TvKUuPKVFnja-LOHZHd7AZiRLOdFOID5XYgLbHwZmA4B6BBmL1x5mb2UwaDETXXZZ2Tz6PqKtACjOc5rsZykKJ4nubQ_v3d_WYlLYZNq8BrKjgujMru3aFRyPHMqTxad2OvojLCUt3I0L-XR", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103195914751484980460\">Michael Ramsay</a>"] },
            { photoReference: "AWCwydjGmCtPlMMdT64lcpqUIAi9nj7qEMng4l82VxonkNXJ1mloyLawfgAiITyGnpV5UVkvE_J5tZiwmUk5e_5hrNZhrwdgdH2X1mV2euaVLNcWG4NdLGGpq1DHBYp4Tz1r7DDGttT3I2-TP_5xvViFxX1MquNhMkvc2H9n_kZJ5rb3cav_Zrtwb0ovHSkYAsySMy02XQe9qDx0cpQQMWPT0h_KACHtzOoc8yY449ZbIIGyiITVglkOe8YUHEODbDvy41kAZom_xcl2w4p4mzBXV1i7YxUfFO-Q-aLfAQ60UyqytzkKf2UJV6OUkwv_GFXtadVRI3yAp6jelAVlNEzG9WBO9eqV5H4AhtGmY6aKcq3hbnWX3yJm1y7QitULJ8YDEUijusefpzdYxvV1X9waC78_zQmCTXwqga1ZOksX7vU", width: 3250, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116861028214034324976\">gevs</a>"] },
            { photoReference: "AWCwydiIr7z6XEAKKOJjnsNX1HonfzdjjCxMfgTvEvdr6yDdyrOX5nSwZ2nOLs91oOTG7pCZSYSk-UZrNSSK5-KfxFckzR6bQr4wv0cY5wd_O0PRFhXZF9m_r6GuXNv3LTqgk-fl1Vss-FhY4tPFNB9enK9AgaWCWj1QFEjdKphVhyv24aoOAYu46XewKM3ZMwPFpQ3twAKetdpvABBAu87AH8ws5zLCce2uvCqWUosdUM-DAcOlw8ZkZqJ5l9WsHHGdaUGcHVhj6NdEYtSVGcfyRaqRO2N4Gj9S9ox1qGRE43an29G9YHNxGto8p7H4cJP3Uy533MUV8QMaccJHjgMzlxl5P1OLZqU6aQUSQ91XWIRyohJc2lSAfncePtLV5DjY1e3qjcz9BgymuoOUteghOMJyC_5n1pDhGVRGYiSVNeoD_nXbtDVX8G8_VNFWZfVq", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107075981646543764931\">Aravinth V.K</a>"] },
            { photoReference: "AWCwydhKycHpJYjC_lw77URclf-NP7J8qQTjOogvwXstqssuD4pn4TmU6D-ZSYavI-tYHkTnW2BvXLz60KXYFeFtr8AeHFHjKPnE4-P1wHJGnwZj0VI7Pb4_kv_YF820asnqCw_2PohhfLoVBO1gBbOHTgB4nTyZB7qtqBdNXN9SU3v8Kmq4vVKng2ZIilU3pNmkkBAACd8h5pBPa6XUm7DrRVT1MnCY1dDOksmmw9POMnQy8F27Eo9CHVgtX9-y831sAG3lEyFQ_2Ractrloj5CPG3EGg6-nShM89uwCuE2PPkf2ZbNyaY8wSMcvaViGzEIB1kMEI7VnqQgQrp8SB6WmFXCFcPltO6nJuS75DzYokpXyom6o3Txd1C9aPHqTQ86viBhVVF29XYyjW1sJYr_RssJQ0LHuveBckQ9OaENYGVlmJ9Ys0xHsX6i232Wkbj7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100986278774080375662\">Christine Chan</a>"] },
            { photoReference: "AWCwydh3X79dgvM2GA8DgWv7ipq-9DdQMmhoayZQEAX6fV6SM2n6Z4o1sxZJR4rqGACFUkhPE7X4Shhlgj85DhBkzZde5r1s8K89twaIROwjKGJokLtAgPz73daYIUiApAS7SsxfjMPUCSsdUFnYXuiWNeK-oE1zprOQ9FCEg8RgCMbwuaij5JJ6oM9ynTLpkXSdNFK7szGrle34e89M9fGKKxc_mLciuaSQiTMOqA36iITxfpym5Xl9xeNYhkrR78Ani8ItgZt3vefSXJZQwfZuXteDI9fknBKHTc5B0GhyOh7zSX8ffyJitYqdzNWTb5Z_zGLVMevTLqxpFR-s6isTcYgAQQ5OVimGZfNXHZmRmvWWkrX967OemOq1X_jhPeOnE5bADgl0tP_lKRbq8ECCYCC9AuGR4Rms5a5Yr-3jT_K_PMDmGF5NHWVGjEzI8vWP", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103558128504814436572\">올롤로로로롤</a>"] }
        ],
        summary: "빌딩 숲 사이 야외에서 즐기는 낭만적인 사테 맛집",
        updatedAt: "2026-07-15",
        highlights: ["불맛 가득한 꼬치 요리 사테", "도심 속 이색적인 노천 분위기"],
        tips: ["저녁 시간엔 사람이 많으니 조금 일찍 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 7:00 ~ 오전 3:00; 화요일: 오후 7:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15037913315851860017", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9A%B0%ED%8C%8C%EC%82%BF+%EC%82%AC%ED%85%8C+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뉴턴 푸드센터": {
        photos: ["/images/singapore/info/restaurants/newton-food-centre-singapore.jpg"],
        placeId: "ChIJe4wL_OsZ2jERySoDk6jlhNQ",
        placePhotos: [
            { photoReference: "AWCwydgsN854tgLLjEqOBNQx54wKLpQHlydlSaTijunE0GsTo57IvIroWjyaJVkJ9pLoAPlA26epXBqw4aqFBamyXA-BsmX4svkpU6zWNs3O-FMTbfHQbSZMy7wqI5Hc1hhqjOjFTz_Fd4FNK-xOo8Wsi0w5XywliHMYqlb9YX4DqBGLeWI2x8HnI5pi85_jqK5-nsEETzTXPU-FAtrZF29SIccTlORNHBQiYg39546b2ujdTayf7Zq22AEoGaobRi4or0H327N3AA4qy88kM9V_b4Gk_4eVhGMl9XyVxHYk2NTjwGK1DpTVtlIAFlDr2Re5p7YWt-lYpHF9kS8vb-r9TwIZc2wMXok6NnRDP4PI1qvDD5IXFX6jCr0BNxjTVXAOHh96n7SSnRFbYMz-fVdNv7l-oq3glsXCVwQzHxkOoV5tMQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109171718785728989869\">Rafael Navarro</a>"] },
            { photoReference: "AWCwydjVoLT-m-L2_Gokx-Fbx3Byhu1y_ZsRYDpUaP_v1G3cgz4NFgJPl0RGbx3kfimdQILt2FEDaAIWTphXIGlGft-x0j778FkK_2ln7gVb-cWQNzTWsGOO8jLMvehzlHURZUe_lOlfeFb6AXMqLOf1cZrHY9BbXUEZF5hfB_u8ksO4caApr8X6yjnRZ6g0h9s3hD5U_AO_7rdQvK8j111TxprhvTobMY4RXTnbIXRkfgyerPtH6GbIp5vZoHsm46AsC_GPuPobbY8hjTXRdOqpb5jryp4Yj3-K5xQF1PnoC_U_Rz1KoPtW8ezOf9zyPAZHHpGJFJgow1MgFKJP5HK1y7GcEzf9CHhPhVGdQ_RHIesdNqgNxr9RIHFVPeDiRXAvrOby8phqLiAbNj8j0y7kisK73xlI8OPV7fOCM7agiYPra5_lJwIO63uEDzRl8-ab", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110662767863801719814\">Thành Pleiku</a>"] },
            { photoReference: "AWCwydiicYq0hxJ8NZFmJoliE6LccxoVw61Ztk4hp1C0KBlqSNIS781jlV7ALzRGLIIdOAeyYRpzId9VrbSQxs0fVe8Udy2NUilpUNNF0b3rMW897jBViROdW-kcEblyJ0YWMxG0tg-TyopMP06Dl6GTF6y7bXIlQy3rtT1h44xg9ahKXOyfaBmqpfmVYnMSr3Qh4e2c0TjwA5xOBgaKtPcIeJFaSLs9y-QBUvYgzFpPVkrdai-0r9wZ7TwuhCK2B86LQ3fPoCthmo6tBYOg8s8e4w9ZZO9c6h7VLSvL9B_nYuQY6jKiRSZKlM-9wjzvwHhvFaX90c5_jl_1DUa6T1bN8KlpMR053MRfM2OvcNYSQAb1USSRYkh9rGbGRXxB6pvlREEKpK5VjgJFglyWD1sqUbnjByi0woV86b7AJssaa9ZrM-xPjpTRTEUEO0Br8nEh", width: 1181, height: 1187, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105312430976600823390\">Newton Food Centre</a>"] },
            { photoReference: "AWCwydgfUL-PlXDQepe6RmRZRCxXjup1p5qmEqylvQz1Qq7imRiFwLzvH4ZUGQvQKdR9qkG5DgxpvYel2n18B3TxdOlO-JKR2BsgsJkJez4s6NqyTl-FQevF4ftnHkGY5xrI1IuPTiFcM9oUKglaM24Hf4AM39aSLTIiyEctFA4_TSxdy9GJ-lLtZkhpFWbkVSiVKg7uqRqhCq4F8rEUUE46l8Eb1VEf60DWTjU_xnkT6z5zIS78wjfWvVH_fkCUTqpWoruR4J6M5WNTM5oTfqt6MSLtlPEZkUDPzN-ld-U8Pg3FLxTJMAJp4fnpxNE_i_fiUueNVWwRkzwFBFO3zbrHBnvP4X4wMWYFnFNiU5fV59GLEQNL4Azrf_y6jE0ImKkg0ZVi4PPGS5_aFi_K0FdOM2zXPOO9Ch5kcVwT3msC1LPPNKN80PvPUWU80KuEdA", width: 900, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105312430976600823390\">Newton Food Centre</a>"] },
            { photoReference: "AWCwydhzzQntQ1wGYjoGf5p1AvD0WFsWrjc4bWsT_Mh8YlQZLOhGTW2zqGArc-uVNqvS3-qad0r1Mu52-UL-sj1iBee81iOT4zcLpR7ggnJXzZ_pH6JQi8fc6quxutw08EH_0kN-jZiQcg_6sh88zMJ8o6a-6dhGLwjDB3y-Ph3GsaIKQsVl0Rj8tMhFsSK-ir3PgdJmrvgmUWVwpoJJPVR1jE7x8JyotpzhbFaWPBxiGb7xCnVvBkNrA02WvdWWMRX3dKmcwU5kA_Ccp12b8-FQ9QkFkv4H4c9Jut8i17FpPGmYl2JuP0hj-3OdFcovKop31LhJexM1WoDEh-9kDIATmkleWO7zpapa4AfIs-8NPCwG3ZBZ_ALIVlofAFR092URlpYivIWdjLjV248uuf-9UG0H44egFySN-WP4BItdf1DhseOYZuLSaEIbunhRUw", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103409779499358868501\">Millet Chang</a>"] }
        ],
        summary: "싱가포르 로컬 음식을 저렴하고 푸짐하게 즐길 수 있는 호커 센터",
        updatedAt: "2026-07-15",
        highlights: ["칠리 크랩과 다양한 해산물 요리", "다양한 종류의 로컬 스트릿 푸드"],
        tips: ["현금이나 트래블로그/트래블월렛 카드를 미리 준비하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://r.grab.com/o/b2eQfmau", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15313617145150253769", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4%ED%84%B4+%ED%91%B8%EB%93%9C%EC%84%BC%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "채터박스 싱가포르": {
        photos: ["/images/singapore/info/restaurants/chatterbox-singapore.jpg"],
        placeId: "ChIJDfcsE5EZ2jERrC6v6Okmdhc",
        placePhotos: [
            { photoReference: "AWCwydid8wil4KcXsuSXHFmMDH-KUN5JsImuLu8nm2IgFq5gQ3uPsOL6uCW3IKMAO-w12gmKboO1f_hfaQV0qFpfuGGbTCjR4j93QHK69vu8ZIdpgM3_svcDEQCS94Fp5d2bdxFvTj35oP8SSkakyJ087I3-ineEd0HrD8cfNSCAsw57YtYh5_9xeLhMzt1Dk9MDcGI8rQoQ53AJdKk8X5Rn_9V7e08peyJeS1ySmSDQD25WXiMe5KzyxDDpaeZ_HSoN63mDdm95cHQfOTasmLYX4YVwuz1yDOGHg6AMLxe9zYN_JsEzAXvva5yaYk4btgKVYKrog0sowkFel1OKiv8G3IRfDeej6LzFSkFV9nIl21zw_WNgX1V_RLjYTnMwEt8l9SZR0BpfNW0StT28qepNld7m5lonfrxXwZlCNu-MwyVfPA", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117200768222459291884\">Tan Wenjin</a>"] },
            { photoReference: "AWCwydiAEseJQADWF2Md7KsEAH3KC7ZWh6ux2sb_mJZiPN2pLasRUcjCgsSind1y2gtbzK5Dn6yZTW6MBIBZqUEVhxrZf000NRTf_4Q0-QGnHGpJh0tcML-2PkctF6jW3UprzebCHHv2FWuAtlyjgP4XeeXtrX_Ja_9jldGwvnhyT1VrX7nqUpwGWp2Hh8evRi-J3xGMGmIlkcul2ZA4JyKBy_LlDkDqzpwOCqn3YuNvZZlAK-u7RntR4NDr5myFNWoBjcqnfWQ133aBSSBzVrMKkyTZJYyAeJKL9J5PAY1ygTEbM-R8i3VuLQqkrNliRu3TPxugESOWYZEr7ogzTbBYJmu_yflCTslmUl-xLg-oXSHlSKGxuzpbRQvCfwKm-yWb-gzFWbI_Dj1--gxLEk4vIUoTpmTA3nLp0NDvlvMOuv--1w", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110133908324781452137\">Chatterbox</a>"] },
            { photoReference: "AWCwydhsgPHKbtl5mbPXBHt56UrYQHVgKy14PIuBnwJ4EvUF86IH1g3u5-ap8yacIuKYXammS5VujcKQflxEowfNkCdTLSUvT37ggt6InrKBlByqSlVB5VWbmkTbaVVdUkUUmQd4d7lUdeP8Nnp0wRG7LAFqmI6jPghqXxAtqVVEFcqU-3F2RxfwwlxzNccN9lAKzTwKdrrMJRpxjUfks5XXlJQ04T66usNw_BfcwllZlMNRNy2zmgCdxeSQsb-gFR2O1OWH1dzqKtsqXSlCkXnevsCYOSkwylFGus1hBdpnpUPDZWWVuK-b4aNc0hMpqbEEq3CzgCy1Jl3Fn7V7Xg2FvOkpvrHNmXQEewrwgVhirr6vrTzwKj9lM0tbRHt_fPi7aExOe8BDW6bKfRwmmrIj3hazuVXbQUt8Oz_gt7GFluG9Bf1qzL9gVFDNwU_KV1oo", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100115500761558160098\">ガーユー</a>"] },
            { photoReference: "AWCwydjpUCDfnrCMQyfdWnVZGUZW3OSeA7B8FvwkDzGli1W_dgfDPeGUJ7d4OISmRjFZMw0meOOo6b3dKwNinTc-IXU4SROlrxBMkRNiodgmUo8eyKB1QOKyxXo7PRUN6S8mtUINk6tcWrp5Oqep6q3_-7WG63jkSPY7sELMRCazm_RJs0fNOKwZ5uyIVkKSDq9I6Cx8I-K0-QAhP5ZQps1WTZDP_MyTDiMgVJCuE9FHWWspJypfKeIXksMWdrVJTA4UesgND08txhmyOlA4CP5_jzigl5aykDc0XA0kHxyWkTcceDI0BxqMJtp4zpH_GxCMgTCfOYy5DQ4YV_0zNBEce8Cua8GTgdQF7piRr02wd96O1zrK-aMZ54sjfYG29zT3ehoHkCJldXSUY60Pix5KtWLtChdtMdiALBbO6ViOKXI4zH8gD1uk6AMRNKwjBQ", width: 1848, height: 1420, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109818615346401253474\">Stella</a>"] },
            { photoReference: "AWCwydj4_wBsQxr9Oiclh8fnMSy3hDsQdqFl0JRTly7mNZHrViT9hTbeN9xNz_EE33OjI82lbyt279uu9RVlsT3BdpapgcqNHKa7nhFAnt1buLl0vWCLFspbqlXqGuJ8L6x8I4vDLwYDtw9Pyryu_48QggIiGf-APhXK_9NHcfQEcN-DH1KwtiD7pP2YjYBxGrRqkTGmdKGepTLBIemLz2toN0nVneZjVVl3rlCwL8SuW4qV_ISvhjk4FTYxE4jj4OJvVTwy8Pt0T1UGwf8tuGUYMVUBQ9mzh_slnWuY5ERkGSzTduExY4ohhyU_Y6oRRu9piszTbBTRG-oMkG6y3IFAQ2DABtVARx46KS3VK45oOA4w4BHiRjg0Nu64AahqJ-xfSbHJwaBJMcCLRUblIir-Wosc6Gf4WLb68i17Qs0Vt5xBPN7fXIWX06M3ZGPYWpj4", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100115500761558160098\">ガーユー</a>"] }
        ],
        summary: "정통 치킨 라이스를 맛볼 수 있는 센토사 안의 프리미엄 레스토랑",
        updatedAt: "2026-07-15",
        highlights: ["입안에서 녹는 부드러운 치킨 라이스", "센토사 여행 중 즐기는 고급스러운 한 끼"],
        tips: ["인기가 많으니 예약 후 방문하면 더 여유롭게 식사할 수 있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:30, 오후 5:30~9:30; 화요일: 오전 11:30 ~ 오후 3:30, 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://chatterbox.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10955532395483270586", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B1%84%ED%84%B0%EB%B0%95%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바이올렛 운 내셔널 키친": {
        photos: ["/images/singapore/info/restaurants/violet-oon-singapore-national-kitchen.jpg"],
        placeId: "ChIJ33v3PKcZ2jERNogFrxUdKEo",
        placePhotos: [
            { photoReference: "AWCwydgQDgLHJ08DwujexiltBl8RaAP3jeBcCGqdexZVeanxvs5aCK2Unm2j-N0NKq0AI0NoEBzKJpzeUzuF5wb6fFcpZ4zx4fUfHHDLP4RdCsc7YIF9qUMwmwh2fxLIsCCUNM9wtXDORD0-mQ111NIl_F4Cr3I_ZJo5QxRaTViZf3DlFx3uEIVFMP77UhRxxu4d3PIq-9tdjFIcG0KuRdVFOAXEa4wF6Hg3JNKWvuBtjdK652hIa6jDOFcp7hc44uu-Zye3K81mRA_qIfMXJTOSNgfaafPcLlUZlnGqADqh6rdZhODz9Is--rg0TAoAr_yeUIy4EvXjpeU2PvLOtAB5AcXA-Y4WLjluB-xL2rHUj9sqRWqCXgFOSRyyFlkXQ7QKwKuWijITXydYwpMIEWmTjRsU1YvoJXrnjiFsrvbPCdfCqA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111907893452476697068\">National Kitchen by Violet Oon</a>"] },
            { photoReference: "AWCwydghwmrERsLwGV-q9PNxTqw26SvEWTZgcd_hK4cqyrGmBhWEbfF6ckMHobmD0M3ri_qwKkgPonJCMbkYU5otjIMWEfxULc45KnihYaGTgatfQwuOsuAGo5rwmLkHhl_NrBG5BVImaDvDuky8JYs07bX5C4zgAvCGsXiKpiPINj8xWfOOg-MqDF2SXjPKDsjwf--Zb2LxWOJBBWB-0S0bH8DWoMaZwx66uP0-ZXehf9hTROA_V92_YXehTmesyUWCxBSrxntWDGuEux_HkCs-GQw37xY1KKFMKSlM8mK4MAvxd_cy0-EE6RpvR5nskOC4ObxqSsjIZAb_W8uFpqSoZRTW5ExF3VXqsxCarMFNcZctMxyjH_zoPd4SDO64S7O7KRSl94v-o1IC9gBhrK3daG4WEju5npr_jZ-CxBbaCQ6qgbE", width: 2200, height: 1467, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111907893452476697068\">National Kitchen by Violet Oon</a>"] },
            { photoReference: "AWCwydhPBIE2-BlcFUjf-ofdEYi7Z2MSK9mmmRfXnXmsfKgWTPpa2xnMX3NguTSOK66D7F9urmoEYNtIJUQjxXuh-sIZ8TCRyHgjyiXibOYr8beFJENDbHdRu7_iOEjJmEh5cDPfg7gDi4QTv0efwxHuhZsHtbQLArTEJAVorLw_wb17I6bCs5C2KNUUfnbF1p6PCtTZBKelfb1vUICNrMWxjj8VOcgal3fI4MSu_z4KStXA17Ra6pJIIbE63W46nlq2kPjzDVl-Xkw1ss1qkIsmVHvRgopa_G9zu1O-0uP7bKy2dPN0pWqvmOlsYtwRd9kIlDOTzoKyA9uFr451SWvAp-kY7eOZ1Az0xFyGlTSU45-glbDfi8P6hx4Wkin-l6wIJFcBaTDJKYZkB8d0fQGEm5dfi4MYMkEbPn2ZmjPOa6EQXh7gex043ZBHJTGl5u6V", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113348263694489117614\">Patricia de Blas</a>"] },
            { photoReference: "AWCwydjYlg93wrlFYJJFTlqVw7oPj_IlgqlooeKckwgp_l9YrdgsWhzCkyJOU7lrrNqiFZNOoAPrbVG1Mn_PKxGDzVECn7FWPlqWpMF8JIMJoEepW8SfNDnSppjphMxaz5p214X_bPDbse8799bgPvYKqUv772Da4ogWH7LhQyZJ6gIrJ9lInmWrDGHSLr3jtudl8jcVw7XYgeFU-o3w_00ugsIiuHv8utVg2NTF6nytwYsKsQf1OWkaUVdImfp9sqpJuVpchsCPQjtAiS6pxv3NK-One8Ih4ACVBBZrkkm7fz6Rz3AAdnpEAgRghy20ZWiFnK1DFKvRPyWL4EzmZAJVSS8N9kN2hyA8RJs9cg2NR2eRAE0ceTYn0TkN7k0jP_f1uDrdiHUgfs2eh8ieo4QwWMcumd9c8yXHujJvZWN28QeWphgL4pjgNiBmOHFYuReq", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110579619689633247691\">Anil Lamba</a>"] },
            { photoReference: "AWCwydjzDAi0IFDbukHgUyNfctuKjxfyTfJuSnedr4zNYvwgveS3oA7L_tePIaGnXAvzrXJDDpvL9xM72h-RGjYNY-vSF38VAVtjc3Jo-VjjJoJYB50Q2W7C35d8iA359O_Oq8acrRomRcqfgeM0RT7QpQWsKHy6Zca-bRP0wVXLfsfCBNcPwMuX66Sa3mr54KjutnZwyycRJ01rsSTCKkRNOyzV2dTc9HXIK_acRd6mQvMkaW6YZOBdGslcmfyKKbZXEqAxs98z16yEIz3fT-coqvQ57TiOwV6q8GfvTyrLMSo5ghMhHKCNxyMTNWHankjmvH6YjJfcU50m182og37tJ767p2sibBZ4mvgELhw6Mqrf3DtG-S0Il2E9p7hXWMxl0nHwD2oPK6ZNhBNK5QHW09Cx1d2j3zresu4d7I0VVZ5k1zCsuAXtTGm3u1Z4hDo0", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112262665859805312957\">溫郁芳</a>"] }
        ],
        summary: "내셔널 갤러리에서 즐기는 품격 있는 페라나칸 요리 전문점입니다.",
        updatedAt: "2026-07-15",
        highlights: ["아름다운 인테리어와 정갈한 전통 메뉴", "싱가포르의 역사를 담은 고급스러운 분위기"],
        tips: ["창가 자리를 예약하면 더욱 쾌적하게 즐길 수 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~10:30; 화요일: 오후 12:00~3:00, 오후 6:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5343552936842987574", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%9D%B4%EC%98%AC%EB%A0%9B+%EC%9A%B4+%EB%82%B4%EC%85%94%EB%84%90+%ED%82%A4%EC%B9%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캔들넛 싱가포르": {
        photos: ["/images/singapore/info/restaurants/candlenut-singapore.jpg"],
        placeId: "ChIJ5ySHC3IZ2jERu-xiMMTjAVE",
        placePhotos: [
            { photoReference: "AWCwydjQGxagLx82D3inw1VdwrrGDtLsvtRTk5MbjKsULgzoeSytekQQ1hk7p76m7zyciWub9PPyWon3PMW1qHJ5ZzaKHOOIGT2RBvVIYo7RZHKucghZ3alHusuuM8yGPi2z6BZj-UqfNVh8AK8N4TjAXh8HXGnIrucjvsHNNaWaM0d9dmiiXfSorlg3ruH00Cqek4qe8qTvzeH2yTRqwU51M0gNZo0TAhDnSCXcyTgDccchMd9S9N05fm_b2sHluVkaUwR0TGu1SUgkOjg_THBsaCM-ZzcEymocbSceIFv7oX-zcUZxD3dv3cNNoh-tvQHbcJ_9Dw1INRKcpDpMzXh0M5zI5P_gmrRPw2bQUQHJnoCVAt-KZbRnkJbM8h9s6omNS_b7GxIwNhl6EE2oyGDRxfl65hKMpXghGJ0Vvgxuk2t2gg", width: 4429, height: 2953, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112279495787495459547\">Candlenut</a>"] },
            { photoReference: "AWCwydgXwJttSmBqXoJIaYqLbvf4TpA7rp5P5EAuh1unbT8QtJ-cOxPa57_bGGoyyoGmK5UmnJlEcKZ5Yq0C7Zg6JYNS3e3GN99ISzb_P_KzP2yyKKisg29ij1PwkpA_nwdCH2qEHhK14jheOiZbxwSIgjuXJvMTT4J8zFivEo4A1_LeN1L-doJCon9kLRWWVfGOOvFDFMq3AlMmUX9FRequXjln5GO2cYOyVXAeUE5v1QVuxWyK4rNI-Qi027vTjvrPwr2wfuw_XHPsPaqySqZ3HSmImiaPOEUA_w45n86a_KHqbey66amRHdG-R9dUhkU9X17yzAIUl1y7CeGHjsB4O9Irbl9LWl9pKNTMNHdTJ7-Gd7mb2Hoc7R623xOvQq5FmHTRL63_JnHiRYnhRtS3GOist-wu_hKYljeV_gQCLyO21xzW6LIR_EDGQa3oGGvS", width: 3341, height: 4455, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101511042615871459595\">Loki</a>"] },
            { photoReference: "AWCwydiyJh2Z53eg1HmZr1hcDMyUJDscUINGnITO2yZIc1NoiQWse7-RYLv99zS_ZaS10BZb2GXcXS2wzFhXUff-44xsEjuNgyvA3Wl1RxaVC7JzUmNsYGPhB2ehnAh8lzf3xIwnSIX4qfymUeraBwjgxOh-vncOOAoSuqfmk9ebb16a5hCiEz3YCeaGkuVCURDM7zDy-FIYyzbIntRJ56Lj1n6bhdk83AI7ai4LgAf0WMCDaIasopdw22KFtSDKCm9ilutimUBN9Vn546cgexWk64dVB5GY5OQpbTVEoYs5UsmgIaZ62epwa_RXU0cA3Neip8s353kXA1FghICf_gj9cLV0sx6iPa7Ta2Ag3hAu8QHE0-cvFY9AjBRxFU3_wU4RyLPeaodupf5-z1FgTrQHYHP3CSXJ7oRTEiX0tfjtp0Glsw", width: 690, height: 489, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112279495787495459547\">Candlenut</a>"] },
            { photoReference: "AWCwydjtxKqp1e1ossFEhYfubHpQQRRhP5Dl9w0fXAvuGF1_pyPY9CLBJHdQWtncsGeonvDFrkGqGK36kX1T49DcPNZJLE7LmfVpdJ_cetlwGQXq4Gs1UadODDAYgnb9hGeXE9rL_vW5vYwlGZuiiU66zPYmSAvwegF2j87mTUwnBLk9YPoARl0izsGUl3D-fOFSCupU5YvfltpawowgiQ0_e38V0-m8fFxyj3VCkow261SERbeZvCA8-LySg2h-VMCVoN2QC4rQcgfpAcQPuok5wF5NbeA3CdIhLgnIoQqwlhSK8aruzdstq3WBB_urkdtJnFN1-fEevj21456QvQAGAs6g9PJYQ14JXet8MhK3xk166a-kRorw-L9BJiBVQgSjZ6Bie8l8z-gS9cCQfRncUQAzugudysUryV2cfXZxjG1n-XGhLOlVD9pSRvUVmsMX", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103686986101125387388\">Jowe Chu</a>"] },
            { photoReference: "AWCwydgafVyItn48Kt4Wsxe4EF_EwevVNdIv1yu7WeBOR9pXB6_57wYS7VxqXBpmzHM-aSxzd0lSoJ1PSVhIdd8x7GhGIe0wsE6KYti72JR5oMtLrt3pol7cjgbx9cK6dCLU8NfwLWReYdLByM75BvwVtW5PFsZktpf8ia5dk_V7acBbIcZqzu6dtEXGx_N_VpGiPEoc-xUUQsCUZc6JmEPPEh8DLp5WS5xaDIaSc567LBy4tTG5M1Vulpgy_Op_4602oM8g6AVcWg6539aEojKBR3QhFiJGpEz5ql9pzD6T9lUmfo6yzcH9Sr2B5bC5CXGEOejmtDsMhdMGnjy0Ks2yhNbUy37DIyzyGh9bfqvAtNrJmCTvD34vMF2hUZxPJ8RaZ-4gBgGrektDZkIHkWgU8xMi7nbcRPys64GyEtXSNtA2xuZhtrKXlhseh2y4ug", width: 3937, height: 3937, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101511042615871459595\">Loki</a>"] }
        ],
        summary: "미슐랭 스타로 검증된 세계 최초의 페라나칸 레스토랑입니다.",
        updatedAt: "2026-07-15",
        highlights: ["현대적으로 재해석한 정통 페라나칸 요리", "뎀시 힐의 여유로운 분위기"],
        tips: ["인기가 매우 높으니 사전 예약은 필수입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~10:00; 화요일: 오후 12:00~3:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5837197023813758139", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%94%EB%93%A4%EB%84%9B+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "번트 엔즈": {
        photos: ["/images/singapore/info/restaurants/burnt-ends-singapore.jpg"],
        placeId: "ChIJLZ9DYnIZ2jERQ51Am7WzJLM",
        placePhotos: [
            { photoReference: "AWCwydjPzJhfwYmNZJ7ezPCqU5mh8WhmGPnEih9Hr7mOhHWWcTVyh9I4tPG347EhpPfK_ON7UICJ_eVM9DcS03qfeD3sJq72_kQ2kKTDkZpQXXO2QTEwK-0vXWpAVYcbFcLCPmLPGAUjUGT18xWqMaKjPn6EuYZFi2EchTK9ZjmyRR1Z0AmLw6UeuM9Q84SVOK_xvvHTNlxki7xcP2wWiXArQCPYNQ9V6M3-5O47q8w1aqrx2TMhMKIjj2EKahFQ4ufMPeBaK2LJKxKsZq-WHv6uJ-OQZvYjZi41MokrQE3XnKTtas2s5dNpGQN3d9VbOIFmpiMZuF2rPO9TqQPHOfl6qGPoGiIbOk_Hq0kZSHrwJg8EU29OwHhG8axI2Bj9hOEyK8w2SWRsezbswuVFfj6AQUfTJEWEQuUAlLopGh9AWM4-EzM7L2rjjFIap7mvDS3n", width: 3543, height: 1377, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117823556453662309909\">Burnt Ends</a>"] },
            { photoReference: "AWCwydh_Us56dMkbwPpp1x2ZVEd5jxsCVJTZYXR6eJ2JoOQTYbB54wO63Q96nFoudZzLEaEmnfemgqTgjWt85rBr4DY_I5bB33rdehB8i4d8jV6peDjAnv00TQWurlo4iKBIDkUPnqZ5WuaElDWkQMBMG62nEeVKHXbHKxz1L9wB5vf1QdUdofdg5EcEya5sBveZtLuVAd3Y0QzgbvCGoEVKQGYK30N5vFvXFoju2ucibqp_bNtHxtHiSScJxQXgk1hH5hBN7Zh6nww_R-YWLQb5cH11Fz5-Kc_WWYp9s7bL_HkAsFWR0zRKmTcXFUgkDFJGBTInW7QpTPv9V-jgKpFoFbkHk_sU9Uii9ja77M8ib3Qh_oK-z-Lsba2Ca6YOc7D_QHRkN2dXaO-LwjJ6EypGx0lySTmeiN_DUAxY1fGkE42Owe0LdqOOOs1klgdoPg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109182180981565431906\">Anzu S</a>"] },
            { photoReference: "AWCwydjrphMpgqjKiCHsUXK5fa76wHs0oXoJ3-7gvyyJGy5Joi5-FpWEIOdAeMSEpHUdWbHVXSs_57XgpiSKh_oSBGdiBFgfLdE-YtaR6zAmIenYzzw3ZiSrQawt_ixb4SxGk4ilBMb7_QyN-Iqkc81YftLsQBdbmxLUQVTNifIzQ5HVOHOf_2tyotDyG1r-Q1vhNHGqkyjGfKv4UK8wizjst3WvXKdhnXN46e68_hetTu97BBhd-jKDmipG3ZFX5KEj7HNKS0NkS09QkDSA35K_nc1gMSb4gSqB82TbGZbR2wRE_4Agw5x_4Q1FOY4J1iLnPKid94gHTQtt80Zc1hiWKiKLJD58ieZT50QO-0aT5k6peTNVLCk3IdwRi7aIRUD-z3Qv7CKN81AmwAnck4FJUbgWHIHlFrSSJe6q-t4UlUDGpGmrF3OZ-fURcdADiRs1", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117823556453662309909\">Burnt Ends</a>"] },
            { photoReference: "AWCwydhNvwyXpEXaz-YjYZWihBB7GTJGCa1sAT3nXLNONPGWMedzN6jDjipEDw74T8y9_IJClR_4GiXX5y2WjvjdJv1FyMb51l_JfIVtBc-gYyXuPGu4VHtydXL6fgrGI5_O3Tpy-De6dHbOOkKnymtPjTMhsgNqs8aZW4s-BcPdkks5HQdomq07t8QPgxNxaoBrRDYv6uB7xlr_tSX1iW5-LIcAtgcWo-zguam6Py17k-nR9P6KHb5l2jSDvQeRQ_iNc-BHsO7Xo-mTafwGMKsMBNcE6rRHvVqkDK09k3BmskJj5MjdpLI8bheJqf100we2SXBfx2KejDsb92roI6Fg36K8ePmBYNkmOpohM2pSizw1qc8kybmmcg0lRkOQ88VA_lGr3xUFNtO_OPbQZ6LoH3SNtpYpsALuLF7g_T1SeZxrAtbxeC_8E481imT-TXak", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102314611449740981297\">Kathryn Hassell</a>"] },
            { photoReference: "AWCwydhifyNXqSI1bOmryxZBoaX7Mn0oiS7YQ7ooUzUINiIcXmVh-yT2qMCvkat-XoGIU8WPoGyMhLHeMSSH9eZvC6U2sFWX0JP7L7EqTIbbJ-SQp2jQxMfI9phQK1MnLFrdUDLsp6ZUrgMS6NthNRDCQG8vs8GN-PMX37mAs12-PjPdl0FU_vL9gNN2zyulHL64DlGtMAcUkO9pEYI9Fc4TsMDZdbs4WSeCrrK7s4-4wedfdYPN0n3sMoZv_ta_20MHWXD8z19JFIz2d3SwholXf5d78MIzWlp8U-6gAN4mhdSYozyBuwPmiZHdHNsYOoms_uZvPceHt_btpp5rAm0T-VNyaNo3hBLPKd3dIOlie_96dXLIm4c6L8vHE11TVmfz6xaFAluUI3nbMqD1Rlj_AmST-2R0xRNdLE3kRVdO3FmfGNpJPiC034qbgLDGn-9-", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109182180981565431906\">Anzu S</a>"] }
        ],
        summary: "참나무 장작으로 구워낸 프리미엄 호주식 바비큐 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["불맛 가득한 수준 높은 그릴 요리", "싱가포르에서 가장 핫한 다이닝 경험"],
        tips: ["예약 난이도가 매우 높으니 여행 일정이 정해지면 바로 예약하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://burntends.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12908640024525839683", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%88%ED%8A%B8+%EC%97%94%EC%A6%88+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "딘타이펑 파라곤": {
        photos: ["/images/singapore/info/restaurants/din-tai-fung-paragon-singapore.jpg"],
        placeId: "ChIJl_sOMpIZ2jEROuDbvYr9GLo",
        placePhotos: [
            { photoReference: "AWCwydg2rVQpk4rNgCZIhgMEZmA15Fz9ffRQwgnazzamwXHM-c9KzxVLHciaPEE_dOes-VjsEJhSOQsGuuLdEQhkYoBzkMbdJ5xJIh2Sy1h8JgIErwjPmryCCWUKH6vN-129vNGInZeT1AnbMJZqsowi2Pv7fwAznLamq2OqUtMr6cgmfAfjLrI62pk_0uco7z4JxVEG2v1vzlgdnc1TEuI_m9cWxrrsi5xp0jmoGFqDF1QD-vNwtzGMbG1wnWIRB5A7-D2ztB0-ZsrEJc4XiOQH6KNwy6nclA4UU0Kot-k-fYDT1NyPR8QqWb5B2e0E-7apVs8ZF3GoMk2dGNIlRkHQLcSDqR3wUdX7l5QOWmdTSSlliauUGPrPQAtp_CcWVzt0Tj-j5d6H2XR-mm6sxB6DDxJVMlC0JXqP35g1pGQbseXOHlprnozxjv5b_20ug-Vi", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114569919210654376832\">Minh Hoang Nguyen</a>"] },
            { photoReference: "AWCwydhsck_P_0IO-TusBawJ6DZfRZwyKjoCJ13h-dAvMhRulvt_XV7XREupR5p6FbkM7ZrLbFkwHi235vTD3lLq3G9ubYYty5c2LVq79YphcpNfU5hI32YF5Z14bEU4otLOGbMoBh4CM2FURV2zEJ0k2MAHUSdIiWh93Da_EzxwOq_IKMqmFzIoHAUQsIHnpARkCI8PpcmDA-oT2yCYQ23FDlEwA5EJ8HBeL9c9jjO612Kg9SeP4sx3ZKseRD_kAX8jxy48qySv5q8ZxrVXa98OUZNi2yEfqP_PhxO2Wx7sdt_eMBgvShJ9Dsf7w90XxNY0_ZuguWtlNvSd3RXZulM_0sIOQQ1hyfDeB4FB1ToSnaOhs11rueOQxaqOC8oqhEH-8vRtcPbIZ_QymMJ8CtphXoWqvP-la93ts2oRv7PplbuBgDUfExj_5wIObIjoh5bo", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106463751806817387951\">Wanjin Hong</a>"] },
            { photoReference: "AWCwydiJnZj2iS00-zMIzMXYvtzh-bXcgUmxyOsXIBSceIX6JyHDjkSsxswoIc0dFk0MI54GumFZaqdmS6O_HjyywfavuzmKP2-VOhH5y_1BSpNxw-QpnbfoPJgc_leJcAzSLGByA4mM3WdcQsUjmeR3A_EzHESX74yO7FJwOFMkp7YWeGGHuQoT3RAW_cILwXCTWd1rxlN1qzPg8qqHMs9k3xvgOcHXJ-BrPKXdA2CuwAi1YQ-cPJ2WqPwY71WPiHrGMWiiGKVw-Y9e9Y5QSxXU8j0FNDIfCnNfEUEcevBVSTRCeK3kJNPCHN6l5XLJsyteSpE2zGRYSZmslCTjWXSaVQJmFDqKIYGoHuX-LDh89LD9rtPeH6VgvYa-vJuaS9RzAvS4JzF27r-H6jGNIntHv7Mbclkvb5l08kv70u2eZXo", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115100846747168901374\">david beyer</a>"] },
            { photoReference: "AWCwydg1v7m3qBmyfIAXxQZ0kQin27UvEXvYiJzkjQitpmXDrJgIEK6GtYs2RL2y0UVw0YF5sW9Itk36nKzm_ia-WtHqCJ0cFC4I9xQeozGb9mXOBUr9OrFmZDRROcZesgUIq3c-qRKO2-SVzmTlpfOIc1j6OsknyRpWjPqkX45m7OSjhcTQboC8Y6t0msONTmMZZnKUeLX1WdDAH-xUuT27RY0o8a7VzvGlxOowuubpqJQLk007YzUGDguSeXZwMs3bSpuCelGIIb-xfBAiBckg8jPbefCgV7XnbNrvATeetcQraY3lhLscfISZr7-iI74B6X_crqnCzzm6wdw3uyQdqE54DdH1hKaKOHalUwLNwd5OPjiTicdkgsb0-ZiYBmYh1LliAXc6_GEXF2bwWLX87vac0gvi-Lrw3qMnLW4rwxH7vh41D8NKRPZB8r-zwQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102290834427399223151\">Mark Lim</a>"] },
            { photoReference: "AWCwydhu-hVH7gVudOK40L9UePtXSUk4T2VSyaB1YtgP8xNpTYz23M5IleyxqjZjj41xAwdZRY2yzqF6B4hCuHsEbphHtcBy04jk2qXPWu94d2CKUKfm5ESLvnOqRuYrFq7txfkGaLAG9ktcR3RH6hcLHkoEzhhhDU-TXzmF4o16tkSJVl4Hq8OWCGr45N5Dvrp67wE4u1qZcCg2VfmONnh7OllDcHH98jQSWhUZm_Akl90R4KrbV072c_yTUFpsuHse6yj2T9i5SG9xS0DfXa94sVulQNfRbVD_AH5xqYrafRYcOvrNn0P2Qt07j0yC5_t4mNOicmW_XNrgvqEmvAkcTBgQ8V1aQfrW7B9651sVOuzSCLEa4mCH_5r6sQfjNrWRa5ZxHHQS4uG-C1C7WkjZ90lLwMIprGCfsmecEnBmT4KsgRSz8h4UYGThgDgwhC3-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106463751806817387951\">Wanjin Hong</a>"] }
        ],
        summary: "육즙 가득한 샤오롱바오를 맛볼 수 있는 실패 없는 딤섬 맛집",
        updatedAt: "2026-07-15",
        highlights: ["샤오롱바오", "깔끔하고 고급스러운 분위기"],
        tips: ["웨이팅이 길 수 있으니 식사 시간보다 조금 일찍 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.dintaifung.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13409746662828269626", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%98%ED%83%80%EC%9D%B4%ED%8E%91+%ED%8C%8C%EB%9D%BC%EA%B3%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야쿤 카야토스트": {
        photos: ["/images/singapore/info/restaurants/ya-kun-kaya-toast-far-east-square-singapore.jpg"],
        placeId: "ChIJhcJk84wZ2jERJIEFTw1Qnco",
        placePhotos: [
            { photoReference: "AWCwydgyBUFYIfm7PMgptyZ6zSZ3epfS2O_a24Yn2lWKtNJZ2GF1-UQNSfUSpUoRiWPBT6fnBKQQcgB_gFtvuEukbywdnmdfHcYrmGE0Z8ejWya9uMm21Vw6pE2pHe4ACPUY_SGK7U1MkF46dIoQXSezXeU5tJa7fcgAb92_xjV7LMFBnwRVh4a0OVlklI4p4aXY0lfkjdl7NwfSZ4kqGGmY2OHT7PjLPH38-m-w7m8GqvtAOSMdI6DF8Eql_F5xcOIjDvcBKaAi2UaBi3hTjpyj_70k_Hf4NLTfzN-oVJDRHkZORnnO03PpJYYVQ0WVuo0ETH6mFLMdHsKlJlTo2FE3oFgtveYZKSuH2p3sI3kr7GM63GkzYvpyxDRDgSUye5K5s-845KnFOQBJJ9hCSddoAoe8oApxEUlFelXQJxdC8YY", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100625987334342106651\">Flo Y.</a>"] },
            { photoReference: "AWCwydjlSKk7HIa3TIz1NEMWWbaW495LO-A7SYr5fsESiVqntAmuXSIb23duBLNCYQDRVQ14u2bMXy9IIR-QfW0N33VO4vHOr7u6jzZ64O4X_KF5gn-vO5Y_Ou6hFvgVCMMj4AxtFLZpbE4DivihE6MxnmL36ATy_1zHO-e4zI0n4AKYGwG37VIUwjpRhR2dLecA4vzVncOHkcZ-qExC-Mdju4p7dt-p4F5Aysd1U52i20nLeh90PkVDfxpp5gtFwJ90SYLM12fi_rH3mwtL2yS_js0JjVNNH15GaNQN5y4wwm01WmMbVn-hwlS4vuQMp2MDZ_yANXORv1S-HDjUGI8rKFEpRLrwtgBsGjxp3nfevsgO8Qq7fuhXPaXYbxdkgDHhziAMciJdGsT5M3H6I3IZ58VQACUnocjzGebDomwz90lO5vD4OsBM8LT5h0osGz_Y", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115354582579355188842\">karthik setty</a>"] },
            { photoReference: "AWCwydi2N_23vrdoTv1rMtB1xaI4d4uRJOOncDAlolAo3iYn8WeDTkRAC4QMaij6sVqQy54vaV5bBRV6YcOv3-FNS4BLmaSBLHJ6F0cJxUWFf9Ueni43qhrUp6puO-TdQFlOpg-dpFaLNrTA5I_kwr7E4yLUgi1cdOsxXMXZCgcFlnms-BR8nf6_6BIh9SCpRfwvcmIne-smdvOOhJT0zvVIniwGxfi25Feczacf2FGPTLaqS7bSoXz8JhMWV8rqD61shw_fU2T6VGDry7WYQzets6LCUAkamznG9ZT_k6xAikGGoCYSFg-AaHK0rd5qeQW0FKepSw8smgpuScVOZwutQjAMJyjKnlMqqQEK40W2U9n6OOX-0HfX0-H62KTB3VDVSoRQOA4N9FHXvrWekHilHHuGNEcPJUO0x2IzoX05EZmAaXPIZcqjBBgCQjnbuKoa", width: 2364, height: 2364, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113390777464286562398\">Foodie Eddie</a>"] },
            { photoReference: "AWCwydjetEu3lDRmNOTtSy4u0AkEQ9DlMvedMoFI7ur37RTiY76T7pNjm3A5rUuwjf-8WSTE6eepQydiEHxm1cpGDw9dkv5k7Zsie8nlXGevTbb1WQwM0eV4qIASmBPk3hGmsGUTY7dLrjcCmdny8-WLRr9fnsRWkTnaKo6Unh58fsr2SECWmmmNNNcS13Tvs16M5geqh_aPcYJwZOOXNYAJdChtVJ0g7iQBZDM8uhIJ9sgXwmlYB9CdquKMUxjIpV7X9kSAOg6rViJV6phlPkfZQB17poJSEWtyb9uL28sJ_dNNync41fTP-n78rfW6mUOY-V_bZOrw9bnuR4xO6YaTJ2ox-0ojO7Wo_vZiLgRDeWJN8tzkPK2SGvhcU40WzPx3Wgv0I_NaW31JG2nzt2w-gYlHO1oevfxpym3nQzY3OFJaZ8zvLpeHbHcf2u-Cix07", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114277523082331640946\">Clara Poh</a>"] },
            { photoReference: "AWCwydirhQIGP9CxIG2-794Z8qWEfrgY3o7m9UO2qykpyF4iRFlQHfztcy8NkxR6Zvil-CjZpgvvh6w46XM6hPP8dY9f6C5VWYwKlpqMOhHdmS3_vAEocAQRQ1AwCANRlLMV5hOB8MlzO5DDMD9hd0_eMId8f54kS0jHrzTuxvMzMPrsBNvpeOiSR_9TPTpIAD6zHinekDNHoHI-802HxlrWbdNyUMySAXZi_mn4yTzHzQYGFMVxXzH1I8umR66dSM3gwzQ962VemJhbNGbLjknJ0Hr9ogQeaJBThxOJ-C05Pz3fqHfA0ZKJK1vsIiMhFK7aPdI7btxPV6eRmtCXz_wQBklV4tG1AdEde2sf5RuTztK4NMUfcMUM7pJ8qWIetB7iSUGlnUpAb8I2LZIYSjUp05h3wq3S9YYR6It-zfMbGPtbld7IgzRy_Tc1xpVbqr3h", width: 2658, height: 2658, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113390777464286562398\">Foodie Eddie</a>"] }
        ],
        summary: "싱가포르 여행의 필수 코스, 정통 카야 토스트 전문점",
        updatedAt: "2026-07-15",
        highlights: ["바삭한 토스트와 달콤한 카야 잼", "부드러운 반숙 계란"],
        tips: ["세트 메뉴로 주문해 따뜻한 코피와 함께 즐겨보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 7:00; 화요일: 오전 7:30 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.yakun.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18016420241661199137", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EC%BF%A4+%EC%B9%B4%EC%95%BC%ED%86%A0%EC%8A%A4%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킬리니 코피티암": {
        photos: ["/images/singapore/info/restaurants/killiney-kopitiam-singapore.jpg"],
        placeId: "ChIJ61p5UZcZ2jERq2f3Wv25g-s",
        placePhotos: [
            { photoReference: "AWCwydjY24FmgsE-F50m2YYvirF3D49TZN5rcLPQkI7Y58ytUWccpJAm6D0MFrARi_OycNjRk6vZM9Pb8OOCgrQmleA_cGa88Qac0j3Bm_cBrUzMqlSOIr-IUp3XIHNF6EjLg7c_A4Xdlx3Z2C2FzJBEv_GpArNBsGN9m7f3RKppJUXE_PiZdfNpNURD2cMItXD7eqmpzeOLtx2SbEBMDbuiy-kuuqst1YL6ipoiId8q_trW_O217hyjqrGtaZjd4DSy5v6E0dpjMtMvR0Kmnj9we0OZXH60gK6q0b8MNITn30WvbKndzWpa0qJeSJyUvTyw69ak06xrqErv2pR2QjGcdDQJTo0wofVPXunFgYW_2bL4Lv5nVBGV3AGFYgLJa1t1ZgfqRwTWG-7fx71Eh1hpnYUAhbnxCJAMpcswlumDLve5CQ", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105614221526191149007\">Ke Yuan Kwek (Goodfoodtraveller)</a>"] },
            { photoReference: "AWCwydiY1OukD0OWmu0OsmYPLQ7vPldtYPI4DUmBOK6_9kz7Aj5dbSsB8y81qlcvBdiwd_tupQBT-SqYOeoODHstGRSEqxXOKDIhX8Pm7RQALX-MnKxHATecPB174cf533Jn81yJt-xgvHYwJp9ki-F-XPZ030w7MqNaDZ20u1UwxLzDNhKBxD1H4iXC8ohWAzkLuEFQyYZUsDYKzX-22swI3RyFzf0QG-M7OHwwPNSuHnHxDdIepdf7k4yhP3gtdfzQYrCWMFSRVJEwKnZXGqJj-l11kRdPt-copoyTfQY6o5hPIz6WVkQmdgliEZ5h4dLjJMm5klmXAgLAeHrCZFaGW2QRBVXH_6USR7fsnMzwt3DRI9WUjv88kdlHhKFPUckFy_Q-DyTlPfOnKoI0ArJiqKUGe0wwJCZVqNzrFF1LqfbxALL1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102541173280964011171\">Christopher LaCorte</a>"] },
            { photoReference: "AWCwydif86GGDcr4_RleMzMeU1FdGhydZkC1xTo2NUluvNjl2eASruEmu5FBODSHSP2ce7gpN4m8W14mEmAlw7YuidKB_zXtHc-JtbCxBDvCqh83gVD5-fmz8-LeApwfSrgTdQWMLns-DwZez2M6C57_xpydGVGVuHW94zDsX0HGkyOqC0Ay0BcCnzpIQtOF6BXHWLsWnftwhfTm4VuMgNx14FW9Cx0xfOX1tI2OZrPuSbFMUewQuwZQhuWArGqzcTeeWyFggPFnkWsYX1uw9SC8g6KGh1eLR8KtwKasDUcw7Ovi5rYXfK029St-skiKICcTQP6-ZEmV9is7iHUGuAfNXv5JtU43gONud6qCNpq0XVuG07ijzfD4jh4WrYjpWwnZjbCBrcEtWQeY-LBJ3DS4tv8C4DZE0xToZp86dPNbkDaOFyYb", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110650863930610849542\">Eric Andhika</a>"] },
            { photoReference: "AWCwydgovzbYAFs-DmDqtc-T6omdWVFM2ngWZ3knK2KVp2Dn9Z1UWfBQ2RYSXg_rnVSltTyhqNx0KE9zrgcOswKvszuRvRob6xH6-OOjOJGoOGfdmtgesPD7IHj6rgdSR6X4w_eY4c8IZPXgjNm9wflp1q6_666LTreUHIPz_n6sv6qsnFYeAmZIXw1QYQT97ss9m07oOsxr64Jkm4-8N5Bop2MkCY5D8EE3RKKtKa9Ws8O9SzHDJfDzzlHGg2UNb2puBnABHhT3ZLY0HHhtF9ogDsXQJwGogMaXi9J7ahdugMnWpg7TJFQqOnoZncDWhwHCjqeKpMO9lTKQhoRk3JNb27CM82Z_15I4XX_Uh36oCfqk229WQyhNGO8n2zV4Iu3_sT1sVJqnQXinIYFbao6a0zr9Qr5XsMkagWktSQWsWY9iklTE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105093653013256639378\">훈도사</a>"] },
            { photoReference: "AWCwydj6KmWRuyE6xbeEINp2Yox-ACo7qZtYTF9Wn1k-x5CZDUtcdv83VeRi1CPveXHLgcWjshuChLVCYIXBRhw60Yn2TN2RcLzKDWB5shnxhf3YPtsH1F-8TGrLKT2Eqcjs2HaUK2vmft8W3ixgPoMHIBgkssaqtc_9WpGdKMmKjjCEvliFPjC9yXpz_GC3255rRMSYjXwVhGINNK0VnCSNxufXVctWOzZ5wgcuK94MA2NS7pVj53T__h9L3Y2AnUykxwOmRjsNGuUbX10xW72oa6vKZdI16FTss-HXBvVV_NoAnF-5uc8NOuLIieQKmZ2ND6Rnwl1SuPxllBCMHbOux2aeKVdmOUMHBpffkkgQOTOo3oL9uz7pHhRExn5FGezbbCMNJn-UQ19DHTdMhQTa7c9Sq68exAesa1CV8c3LT94AqblU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107257477085501290498\">LongEr</a>"] }
        ],
        summary: "현지 로컬 분위기를 물씬 느낄 수 있는 전통 커피 맛집",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 전통 커피", "가성비 좋은 메뉴 구성"],
        tips: ["토아 파요 지역에서 현지인처럼 여유로운 아침 식사 가능"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://killiney-kopitiam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11202335574957950783", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%AC%EB%A6%AC%EB%8B%88+%EC%BD%94%ED%94%BC%ED%8B%B0%EC%95%94+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "잠잠 레스토랑": {
        photos: ["/images/singapore/info/restaurants/zam-zam-restaurant-singapore.jpg"],
        placeId: "ChIJbT_FF6UZ2jERsNXpMaOUfzw",
        placePhotos: [
            { photoReference: "AWCwydhNjLzmNv9qTWw3bnqW_ZaDXn4mnItzugiVZLBo2yr0ZW5cNRmM65915p8kNXBu9pfsKm1lYiIztl2lCQ63yK5rvVc_d6JpX6cM2vZZcL2EGwaTSYczLiRKvEs5m2tHVe19ANJ2SyZJfQWCj84XEc8X1u9uezi44dYM_I8hXgmQPL2YUQlrSY_IaS_1jx8c07rRS9i0-lq74I5kAJuSuXMdNZowVTOLdrvhCcFQ4c72WMhs_NgYf26I8a7IxYeTnM0Vwh2T-w0dAtcFeaaBkEoQo6YOrbKw1yerRh3IRIwi8STVvXczPk08yyg_u35WsPgsUlePinPWRX-LsqMn_AsPPUZZjDB_i7YaxsHFpRQB6H2PZtATr5xP7X7jnKp-_NMxuwqETYxx9MzVirKlodgRZfHXEYvT5QP7FiWwWyyVFNQp", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100927945632285263559\">Aris Setiawan</a>"] },
            { photoReference: "AWCwydjbbE8ls1PCXb7FXksctOSbMLXhcBF7ShkGWtqxTbNHutWxG5_Qqfeoq_3__PCnPVPWorKw5Qq4epRiN2Ai1YUJS6iRab2NSOaPSrxpOOi0_By-SD0X-e-jGXoBY5h5NQggsSgFC5m-cOdSpFtrJRpiRV_QzHMNwVH8CelQib9tSvJYDBHvOt8h862jJ6PyBPACsFiyMp9dZzdbWormjVttUGHvNHb2yg_vUYEO94z3UgbwFqdrxb75DC423hyd9Gcxp8bqaYa6X9P01lA-wfZucpC7TMl7zObWvHdNxbqNscYYERPemCuaGekLoYjs-DpU9J6WKGZCV-ibnuDS7EeG-M86YcQKMKOW5NrFG8HEBK5UO4Eg8F-LL-5xSkw6NvkzJrXcuepwpzq_cVSQOLDU11WuWjyskr69EgfBE0bcS6l_pdsdRl7ZwejM7A", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108037876463668585864\">Nurulhuda mohamed</a>"] },
            { photoReference: "AWCwydjmj_zulywtWyVQ67nF7In8D-n_C7mTc4Azd_BdqetIYS6AkVG8gNk0Hi_CDgoofO8VFSDTZprpT2iskpKbMAwyAJeccXE4VVZUCbIVEK2Kj1PSZ1BoFuTA_mqL5q4LAdDbjImMbPy08CUkeI4MvOXR0hMzW0cQ1rEGWV6UgFdxN7XxkqQtG6aQy-a6DW6n1PvZPBJK_ORXlfaMx_fJv5FKTvDBFvkfAltF6N8Efdrry1KEpnEcDXNsHQlfkBJbDzNSHPRQGTnbVfkwlWQyUs0WN0fvv3khMYHqOzuPHAHLibRAjqHZ-po1QETOJkIAFZRR9PO_DTBj98d_1S6bqNBF2E_kuFRFFyGThxOBVhWydgEpDUYq3JJCrG_zty5JGpeU2ZTQC-JxskkRCa1VUsxWvGnDaAIpJ4XHWb6AbSva3Luo554cM8gQf6ku8zmw", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111454174036425521953\">Honey Umaira</a>"] },
            { photoReference: "AWCwydgjPemR69qwRxC2dSbxxYEornytjX4H1CNANv7E2aMPaqFj7qhkQsp-7-m0-u-MrAJo3d4YRFzour9_9Gh_1oiLXbfDHshQS0a0bf_DP9zV8GtFz1tBwU8uM4FIAr0rjBBm6Js8AacQsteia9iCS1epeprqnVJoaa5256pnWaU8z9-cDt_JC54CxZjV7R5LMQAd8216mBamFutfQsaRn3hr5YDiZArGSr0-bIG-s4rAAAQeEsCvuOlwmUyDDS4c9jauhm2MpnR6Oy3SXbuWVGBKLJlPJ3ChtzYkGsD5pdiZRnquyp8FLgYnVF-lvUW99kwWl0djfhpqaUY7xByy7osLqGCPFEgcqdD6nxh5SdaEXPbyqLuRpo_XxFvDOposNDp27urhXICe0kg0Jd2ueq7OOz_kEu0-LH5qstoAoG-eGOvIvrVFeMcS_pYdrNXQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106504944827649057178\">nad MN</a>"] },
            { photoReference: "AWCwydhJ3M4V47HQFcbx0wwWds03Twix5lYL1_vZ0HK0kSMcyCYoCKh6KP7i55t8Q4cLbe9FtjofSuZ4o4BIw6AoMq3etUfeQxLcKyG1ZcYhER15Tb9H3KHCVGudKgW3jlf_5pNbiJzPxhUYvun8HAci_Rv-HXYACgwpjHTgVwmEkD_sFnmA1Y_OfuA-pvkhvNwxhBLeE7-NN6oXUMh7oPMVch19o-pq-4u60hRalqn9jIBomR8k1A78LfgpSC4gPfTyCajjyd7hTo0Pqt_A48lIcZaA9QxPPBFDoa506eFZ8LHKlsBtsgQAuthInNCyupD6JGg6sMgZE1yob7ZWCkAs-CoAGgkTffB13PPUa_VXkmZKP5BBB2FIuPSbXuAFIOZi1xl1FemK-G2eX9TmXEeWA1W2qKWoU0WZZGlVwDd-65Q7OPCYkeY_Zbml_ggGqt48", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112326267553247729974\">Giovanni Trione</a>"] }
        ],
        summary: "잠잠 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://zamzam.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4359366392955917744", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%A0%EC%9E%A0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "테카 센터": {
        photos: ["/images/singapore/info/restaurants/tekka-centre-singapore.jpg"],
        placeId: "ChIJQ0ge3fEZ2jER3M6bSkGnWec",
        placePhotos: [
            { photoReference: "AWCwydhY3tiGjlQag-P-PURhgkYoEg-fIYF0hrmRyR65dHr1x9BNJcCxWLlQf3cuYS8BuZKjZxpouHzhXlO0RfOV4bogQ1LhuqOoy9j9CBJs3z7RPxhqErofIsWskmQx1I_MxGzAi5eW31DVffD7VpKtgUe5RdXeQVl4Wriyww0B1A7V6GhFvlc2h5Phr6Ksfb-0nB2Rh_yibUt7myFjp1LTTIA1C2F8-IH-xohMrEA2aq3BIi3yQX3w106ZkJnT9Os43qhIm0iyylP8gTi8418SB86Gwfc4RGE8MbxEnRFN8rn5qq1QIkdYr0YI3cH99I6NLC2oPYfWi77Ix925Z3Bl-0-M6p6kqqq-c6Wiga0dCGt6-0773fTBWtNanyz5VKzboTtEiTv4NRPnUFpWaLI32fj1hmdGPIB48zLze0TPS0LTRGtI", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105182378233467399891\">jian chen</a>"] },
            { photoReference: "AWCwydgAbc0OJ-oNeuDHOYhPF4H4jsHHs-xEPdJjD60hucBF5Joneq6XSXkINYEDr6O_a9Rc_Dd9Q0CoRndNHpHMXwh1f_nQNskInCBCCG88AqA5ZNqrfYBVA-QzhLWRtlOHFLxh3TmPi8N1DDKuXxrlONg-gaBBKaFkkPp3h4sUelGsVbUSDwhkh4aUsPd4P1-YSOFAhqfEF_H4Oo1ujiO7a2Hb2yotxTTFz62iLI4x2q-sVIkgqv70iSTLRqSr4as3HnmBhXUPDGArfCGL3jSXRrr_QQ5HlzqqG2Qw8-K3O4rXOHVQwOxZwzATB84xFknggfk5yVeeh7fYIPir_cw_xMauWe47RrVYXDcnZmWPERyHnz5sua6wRjPTUBFE5BqM1aKe403lQ6t0LEy_LOZ-kaUA7GG_7slplW0BV-qJrATEz0I", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117737855498130797956\">F Guangzhi</a>"] },
            { photoReference: "AWCwydgevemJ5iTiGLqbuyJwQocvo_9gaRVOhBHHREOHB0y1noOz-opBsWt0SLWkkmemVqknbhjx-BSSNiXHhM-lhHebdabrmIempTEi29matFR2VaEBY2H2B50Auof9SJCPwpIAvW4MVhKR7I2fISZkjiolYG3WDlBWDEmj5j8yVDL1FJwMlGpvReI7nhLU6gxAu4RXkV6xKp9rE7rqa9bMTFamwB8OoyLHzoC65PvmGtUEM_1mofFliEEx0W8WUEskt6CdX5nlUbrZpkHXbI5e8zl9CWIxXI_Cuv99X63Cc8bHUERc10DtJ76gL4Zv_4KWJZfgxp1TiUCJ9JpOY_gKjGnn7u7uhxUIeZSm7fLlqM8G3gA_di_mSDnUeijrdMM42BtxeYWKgsD_O3RNIKpSbEuKoE1yPXC0Xn88brKS8_ecGKggXgG_NEf3P4zL5iJM", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116846819423171323011\">Dragon wong</a>"] },
            { photoReference: "AWCwydgLuhphFaX9GVhV-bWQ83Nfpa_E4VowvGsKd5kOjGsbgJjGWCspyjpMO0IL8pGu4Za4UIaTbLHAYO0CTx0t-V_7rRczeUuwI9qfDNxFj5SN52JSYhZBQfZP_9O8N0e55_uOUszee14T_iw2gigg6c93Gs3LHfTwvQu9pkScvQQZAXUQ5ZMgqD24t0vMYzZi3OaupLzbrP2e7lxfXTh-Q6xv8wfRCRp6GOzTCzBiwX0mkomXeWkOq0gVVuHC0b9u_0hvX4N3VLlb_ML0Uz3lAzDk_w3qRAhEH_yQnaOxguByhwSsUWxiPosymimg7DioVTtSZrt3RlJaNKHLKcO-RD5CNcjmIx-6doQbI-8mwEEe19Zbn8Vdq-8nAfxk_fxZLiam1brB-pruFn3tJIfmEv4YhWQQaA-sAGyVrNPy2bBpA6-AI-PCDCX6nFPzlbZD", width: 3961, height: 2857, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112348698048907176645\">Josephine Tan</a>"] },
            { photoReference: "AWCwydh3RRJopNltetGv9iaN6aQL6Qs92jDA6cUxxILBBy9kzeQ8PwaeFg1KEcV18svDdur4wp-hPaKBzTw9olHxdzs9xQoSs9HXDQL5HgjHmic_0v9VIxcCdBhqU2tY0BSq8huEdA-st62Za5dZtprmaY76KyCikugnmrMBR0MSCQ1FrKQShhI_uqL-OZiJTk_T43t916A_kfBk5KAZrYXQFF_I41WhSGfkY97qcXLH_3h0BwICYhP3k4LKPbwCjG4QGT85hrgdhrIlam5qo2TG-qy0FK7X60ONikFe4c-1uG9sOg37bGplxOkJGwMSh85sbnuHuGXDUfFVUQ92j_JxjrVKQEHBiS5VfJTKoA8KYAwWv9xtLg4PBuMj-Bp_OARgAmlMERNxdnBaf1sn8m5E5bHpzJ2Z8PkkCmnsaKincpWp6ZGDIncof25GzHaN5JqK", width: 4096, height: 1844, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102123129259002733129\">Ah Long</a>"] }
        ],
        summary: "Tekka Centre 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16670539394555039452", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EC%B9%B4+%EC%84%BC%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "맥스웰 푸드센터": {
        photos: ["/images/singapore/info/restaurants/maxwell-food-centre-singapore.jpg"],
        placeId: "ChIJseQsTQ0Z2jERqpBTWF0Zf84",
        placePhotos: [
            { photoReference: "AWCwydhx7HzzAJKfMx_v5n8Wrp3q6FiVN-MViexPkWorOGFffYvLnli535dKIpLiUvzll_WEANwNVPt6lm8NtvB3zLX-GseXYllDMnwLTtRywp_wyo5kxPfGxhgZqnMKHpV_SIEdh3NIYw0D2Pu3gUz0ZZSGZIqssFlkyOSUarP-7yOBkajeRP2_NbUfb4vGC6oDdortAH2h-fwoPkGyar8946T_afzVQfHmab7Zu2UpqSbVbmoDD61UhynwvT3C8jHVijIIffLK-UUpuUJFMMoqHxKH49205gNeyG6NuqpDeUsJOnurAHn89OU9JvyzrR00wLuA66-_E3Ia8c2LiMSA6LzSSnimirzObzGglcQVeIlsgb0ttDPLsYfDqCUPDkfr2B9SkqzyUjL2Nw0VX4dZskjT0GK83pVbjm9M2c4zcjB_WuGhmH0tA2mahC_p7zmG", width: 2263, height: 1702, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111291653184300497175\">Paul Ciprian</a>"] },
            { photoReference: "AWCwydgPILLvMeEVX-zruP897IQR159a8umIRV2BzviL28Ii8gPtV_lai4GJTjMRVnqcaJ4eLrOYpl2rev_0SqxoCDxzJg99Sc4L9ekHsb62iUz0Ye4bkK4yF_WD48-H4mPPef8IUCv99Bx4KUtSDp8khXsGp_vyT5mTdD8Grzg88OMMeyC7ClFvQTVEAaiM8I0quN4st_sipjApow2z3eOEXWuqZfWXZJlT0fXf3eD-Z7RovzBqLLHbiHcnZtPRdTm4Xoue2NGwVyRC4OmqQk6RiYBlzaQ0nYPGbOfjb_d7QTHNivV_VAqjhDnUJhwL5iRqp4LqQVN9fAORD7xEcj_NxcasBA0BJI_TIkuKWeT93zobrFVHlux9Vn9k4n74POJHrC_Rs_t_gLwgrnH-r7jMWnbQOcaG_IotZulGI2ufWco", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112269030725850910724\">Keith Campbell</a>"] },
            { photoReference: "AWCwydicLD9sctOeqr458CwPAFHWpN9nPVSkI4O5ybgtle1GhEEjDfmd5e5mPlLprB7na0ytAeLIpGWTtL6bFImoNx-tUYhfQ6c5SzWEPxINvUSpDXTQxzySleDGQBD-1v8YcRnNFPW8rV8Vkyq87zz-MbiBNeY8XiR9DtP0_nNDHqaNmi4rDQZHiAoeMPldHN-9J1iFxSExhnRgrplyGrxcw984EoFj_0v8lsm_QUFA0mAB6i3VoaPqmK8j4GfaEyFOQaW98lRmr7hkZRbmFht3OI_MuTQIWniUOOGuupO-MuTz5aeO2O7tRERgg6-RKxbsILduWrzGiYm7rVJjP0ijIDbTezKZcdyq6Jv20dSRyquNOp2kS07VDX8FSZcFZx2bkXhShcJvWxn1zbEwxgrINjRHXKdJTgngGBZq5gV_B8IHiGgayR65rrQ4-3HuFg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100852360279964135608\">Reto Büschi</a>"] },
            { photoReference: "AWCwydg1PK5SG1ly0NK7rGuIY6nbIBv8z6gM10qHg9ZvLS3AX1xueYP08LoCMYDHfFK9KCwu3OmFgSKSoqmWHkveGag4O6wd3Qls2QSGIfvYN6IL6v6r6t421rUZJyxdJtJl6wV8zJyrStk9L1bep63_2_eKUgCcIsOvMe2J8drOlIuscqJvcNB_57iegRr_0BO7h4diez_3MDG7ostpJvKnNcxaZtRx7Nn96FZuE3hEZre60Ies344MbcmGYtyfUGcyRp4pK47FLGYf-gaubySP_Fx5dakUhDkuT_NxE33kIGAeetOh9vhbG08tkFpPO0l-1T_7WBsBB4W70Pe3wUjUoVDzyItn6Uo3w-3mf_VmGSAEJ5AWVIEK2SpWLLUvAP0FLSNKyNpsOkyo0_5l8qCix_EcRbVUMEgCZdj-TgoWfYjFHjLcoIKVwylXX1UmtR5E", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109239657535439721060\">Rudi Susanta Rusli</a>"] },
            { photoReference: "AWCwydhmYZ1a-SzkS11o5f2hdHSqc9Z4aeil1Mvxiw9dFbAD4dWCSJp0Mk144tf4HOrhWp-rPfOjp7clM6-nmEVGXSiEjlUi1uS7RNGVHSQpeKMCld-pS7P5c5kP1bqHBooMYnZDl8zmqab2U4-8IfC7wZmEEeAmDrVUhC_FXzk6PLok7aXyIi3_Li7D5mxXq7_wVOa-83bF8y5syJ-94U4W3pfHZxsoiHLQU5P9Tve_RNV3gzOxp8PYLkf2URgeS0ue7lnblfGZaWk0in3tuSbpLc81gLT3h6sAt3M_-l5KdCvadbT3c0a-itpaLkXcJf_31pWSfC7ZIuVBO8bYr0LAz5kKuVMDdMWu0DaOwrt32pdqZuqiD7iTaYK0z2EKloFVF8M7_4UTHsHGcJKNRlR20UYvBLJfvfjgqdz286yCrdqklGLbj-c8zcjB4XWiJxza", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107068906049119378373\">viasna phon</a>"] }
        ],
        summary: "맥스웰 푸드 센터 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.4", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nea.gov.sg/our-services/hawker-management/overview", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14879639582559932586", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A5%EC%8A%A4%EC%9B%B0+%ED%91%B8%EB%93%9C%EC%84%BC%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이스트코스트 라군 푸드빌리지": {
        photos: ["/images/singapore/info/restaurants/east-coast-lagoon-food-village-singapore.jpg"],
        placeId: "ChIJO_QTQHYY2jERsFdaWQ_y_mw",
        placePhotos: [
            { photoReference: "AWCwydhQuMd3OLXdnevSrrD0-5Bzc4_UlNTCHhCEAVdX_80R4NOcCPTbXmPj6GSBzqKU2TfZkDr8RzSn_1qm9PrYPoDwXMZ1Gwop2Kbu9dQNKTMCaAL12ybmWpXLpgDAA80j4SQUmCAVLC160Lo-pXGju3lD8lCs2TsDFzslVLlXwMk3pH4Bh85Go_6enbrmpK3pFFmJ8bnNfB3N257XdWQyGilI-wyKUcBjPGXOJj-warTjrA8b1onRifMU1UiaUu9Tqh5GBib_V88VaifdjzsQVzZP9ywpsRQ1nLg0Hi5X2gDcPI-Q_Ff04Yx7lNphh_nKW-M8kstAJxMkVTppQCzit0M2pdh5kx2iEG2m-1g3DASM9jjJcZiplse3p5M8dmtqgRufBbWHs_uTA0qnwOyB4-WpzRluavpeI_AgfcUufitlnEJIFjqSL6i_ElvA5M_N", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114286709979969643185\">Louis</a>"] },
            { photoReference: "AWCwydhDV6deTeZxH8_v79rYYSgl0nubWqbWlBWPinBQUsOQ-79wpucLXeiopdEI91BBLQHPNlFEDJuTbgjqTaenMrRoIExUjkbZ2tcXppupyvGvTAa0UFpmiO7QpoQS02BETZBFysuHWjaijdzH9MUhTMWrxjtwng2VE4dN5MKzNUW771bop19Y1m8yD0c94vz_GDt0vk_Feh50ZEf7DD87cOxnSP3uAf2Cj9hYJxZWcyxI-Fwr3UuQC-rTf8QkKb7ADx9rcDuJhO4OEZFUoBO2fALRh56ljTqrXO41m3SCfD83QR2tVxxfrU2gO7uOqkyELS51b-P1PZKW-mpWlhvb7Ec02sPgZj1Yufk4r7ePNkUV1tMxWmJN1RA0Mchk5SZT6gSIZEaoydjKMeTVOoWQhc_RiUXWAL6ZBLFIYqIgwx7NvAW3lqVo4hwtRYahl8-s", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112328321967374164072\">Hoàng Giang Nguyễn</a>"] },
            { photoReference: "AWCwydh_EY-I-KKTJ6G094QTAvsfYGmSfQovVjaMY6CPWyeajDVWmdmhDVEH8-Lnx9ihGJgvYaSfXVe-FApaGUnrTxwDuxXplcYdpoPmhTaLE6oqSLzfldnkqokUQfLgpiITqUSAQBqKiTcoeZfhSgCstUN-4_oZqPhCGu3zlwUUuFYG-vKQTUUVgQ3WK6wsiIsKuFyRmxfjNHakVjER2UbyjeZSNgenGF_AzNd5aRu54WfwkncTxy3bIDcQaDcFmAWLSE5ykp4WZa4rbLUaaXQGLhXzuHjeDiBTxaCx_vyt8xEbtWDLFwtsMnuy97Ar8S7KEnlLkOB2cRQi2SEh9UGfnhbdxCjvXkTfpsLmKB1XjeBz-zLkK52f3fu4B9pCLfcMqkU8S4tdBLxdeacLwDIiQt54dXdMniOVvidOPeup_YG_lw5Psag80_bTY8pkfQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109570740034213444878\">Wei-lin Hsu</a>"] },
            { photoReference: "AWCwydiPjhlF49fHByFjq-DI9hZZm-sVt9VAQRJmiuQJipnWEIrZk2ekQOeF5lx5Hg-D39XyFH1K1A5ooSE0pfdmelFF1tw-y8sjMjRMz8i-5rvD4YX5Ma30RWkvivFuVCDvNlqr3ntw_5gExP7oBjgzTxITs77tFgPyTunNz6X2iyXroVLp_En0FJBSQLmZPQlI0k18vMyrp2ClkcXUtjKQ3yV16CoQpDfQYq6drDjj2ldiQW8TrtoGiCttpdZWJxUiGH6xNEGnbwL65YfPAVc9Q0zPn2qki7_bMQ6fXB_lAgQFnEOM8OqKUXdKo4Du7GhwnLFJ0oSroIcrQ-DsrqHw4AilYnZY5N-P6lFUgbOdC1_VHazCaTS3t30T6tRz5P6m6NyiypX48b_SNxSA3Ze_Dwjog1YywIqgX-Z0rddLyiv1amQQlYs1iXGMtD83oq8C", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103278101165480583008\">BBQ</a>"] },
            { photoReference: "AWCwydjyr0Q2tzHJXaUfgLItnWnCBOg-1cPf8oVC-5FnOWVZ6iE4pnT3etqHFzMmVxfiGxa-MwdT132q0VHMtxW7PMwD5gxT6BLFMoD_rUYOBSDI56Ouo5FEXWU_mNrVKeI383KbcOkvBtKye1MFFb7ZvSZVCsCoESpHpu6FDi5Tt1mmmdCm5EeYG7G_5n7rpKR1IEyhTC29Ucgsyvcq_Fumiw4cFeHXiEOI9nlTDRLoTmuL1UX9dZ6W7V6qfcHOlDpad6uCcL1ZWZzl6fsrRNUBKJe-wSghC7kWPzE63khTYkE-wKoPme4_NWdi-YdJbBVxqoptffa9N9-y1fUJb4RI6VG6XwpBSJT6MnRRs5bRwHRH55dLx1fWNuGWAQDvUCIw6g58q5YVBkoAbnsk0U9wDDbYM9fJsy0_ujPwLqD0e0FkSrcE3A8uZm7BYnXowD4a", width: 3024, height: 3458, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116297082486659635622\">Frankie Lee</a>"] }
        ],
        summary: "바다 근처에서 현지 분위기를 제대로 느낄 수 있는 해산물 맛집",
        updatedAt: "2026-07-15",
        highlights: ["싱싱한 씨푸드와 다양한 로컬 메뉴", "야외 노천 식당의 낭만적인 분위기"],
        tips: ["저녁 피크 타임에는 사람이 많으니 조금 일찍 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 10:30; 화요일: 오후 4:00~10:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nea.gov.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7853980947918247856", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%8A%A4%ED%8A%B8%EC%BD%94%EC%8A%A4%ED%8A%B8+%EB%9D%BC%EA%B5%B0+%ED%91%B8%EB%93%9C%EB%B9%8C%EB%A6%AC%EC%A7%80+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "PS 카페 하딩로드": {
        photos: ["/images/singapore/info/restaurants/ps-cafe-harding-road-singapore.jpg"],
        placeId: "ChIJc4rrRyMa2jERC31T5xHBk0o",
        placePhotos: [
            { photoReference: "AWCwydirmUnk6o0X1mLJTE13JpYKNZVbx7Qb8Zad-dWjIeUdTG_qqodZr-cBxaDO_w9vmWcFctufsVX77pPAju5NOhMnu5SQRMlzSpSpNOvWZJKIeAIwOHs2_Wynhtvw-RqD1_4NCDUGsaCrHF-0aPIXfShAbv8B38KDY8GoOuJmaZeJ7Ml5T1SCa6xhjMm-NNJEtTfASPkhSy2YYT_QZqAPV0mU7Gi9p7wi8HbSuh66RV2gXFbUtiZnkC_vp3OabEO7oco4sdAuA6Blmw2TURLxo9TJ0pNkWnxSQFNni9b7X56gyX8IjBbKAswmwZTYtIXXDEC-cwIu70ttglqjabzt9vmIEVyhYinVdIi30iyrioXwHJiP1KefzSjHu7qrZ1nr3eDqgKXCjc-V7pyBFrhwdvcyUwi-QyhNKr-3ZCWoTkaGJ0ku", width: 1050, height: 700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113768634157529824116\">PS.Cafe Harding Road</a>"] },
            { photoReference: "AWCwydjuyrBKysRCj1C20sG9US9P_UAo5qDQYRn6FvDKuz7Ec5L4JmyHpSTApVeTJ1zRuO2GiTlwxJOIKpDaT5te4ZzPhAfL-6EMOJIDxEXWxnbbcw22y3BifnCXNo7_omYFzwR8RIMcnUco8uCe20Vg8zMJm-BZWcSk5nyVNtyx94acg9o5bQZJW-WyUgYI0EN0pJ0hoDgwG91vZSD2EbdiM1aNbZNaUsbYJ0AuhV-Xk8YvS-8ySjxf1BEEqgX77lzP6rt42HleKPGS9ndzuawnpnTsyJI0u5ZKGAzDfBnb7bm8YT7Ju6E-hO-lTvMz4EF6HPSL4_DzHYRzMNwM67WFUtr3KXS6iZnM64K_sBLHouJ4x3kaWuqWsDi3bRypz2gv0cLKa7M4BHZWPS64dqOcAqSJv-P3O90X09aQX94az6-Hlrr1", width: 1050, height: 700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113768634157529824116\">PS.Cafe Harding Road</a>"] },
            { photoReference: "AWCwydhhvd5O3ridUGIvZDErGaJLDALqRhToWjz6g8MYVC1znPybABsNvd8ZXAQ7jbkHzu-GrkFykua3KSTcbAm-pvCmV5ieDFJims2xy-dsS7Eg0ZPF0rXhZ1uVjV-x7HfPywb6LpG4uSTo41y1zA_P1ow84ks9s-DjDquU1vWIpYbcm_45BWYeFgw5ZAD48lSFpZJjxCTxlym4yIbzUwB9LMEnAQTu5aFih7dkOe5nDAblQiRzABxa0FHAQhY3Cdf2X84LzDkfTUsJsa-WZXNLhD2ZImnT24qFQrB-f3a19pKczDtPB67Ab8vmFKWVBBo-zd9vikXdZJCpJGMBMpvs92U7rv0iuhDnVbYjXRb23xo7JtZ7vo-oC-sOPaveVDqndi-RezeXR1Z98sc7Dyq-QQoYyYPooWNFLAwkXZlN18yoMVVF1nl10jVuWMNMUojp", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103601006803638575350\">K FOOTBALL STADIUM PATTAYA (TK)</a>"] },
            { photoReference: "AWCwydgELh6jG_itgQf5q886uq1qqTilLB8rN2JNLFTzYOUKjGFrGYTG9XfSG-_5tKMokHD7Gougfp7YBWqoGHEt7tfYs8IVleywXMczwTD6rs9e7x57QgVdqPbDUZvP4Y7FTR6JSDzeYROSIbe6vqs3XGlGHLyhnqJp0JiI-CZIl0vSUjKTNylTxTCOxhlE6AeM6dZ0BHXaKVoQTHsHnzFA2114uC8tmuLDmRoo6cpu7by8O9VjW-GWKoDkxYkUD3avcEp4yyUVyAB649bW-O8B-HF_d7Z0fekrAhxEU-L4G9wyJPfjsIuvai6m5ffwrdLHNTb9Qd5CcBpR0mgD6XcMoSzeQuQbpGtKcFMD4AjKtg_FWEalSybG_7rM68SQZraZVATpOcutxVaGs6BTX1HjR5csXwceWksTzCHbAnzsCCYr8w", width: 2400, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113768634157529824116\">PS.Cafe Harding Road</a>"] },
            { photoReference: "AWCwydhw5Xbvxw6u7yJTlIZ7zyFjggMmbW2xueT8tqD5ZyXeH10dWm8Ngx1trSkPKcfwKKtQyuk-WdJl5tM5HFEOoikeH28vJOmu3t_etky5SDBsiltngA_4boyqtoZNlCihoriVDSfiyYVMq3HzyABKXTZIUdIIq_TsA5XZLTp_wdlKdXUv234GZTAadaY22ygwlyVy0DWUmXeEDXsJ0WRsn16q7m_boy2v9vz1iYLVZwDm68DLd5YSedUZfawMv5akeZeFox1-hiOmHetNE2xOnPesurd9ub3ukwtBJ7JGMWNn9hW6C-MWtllmO8zkYCRpGFZxYwA23vGMwn2gfG8rUIQMcOjKjjqwdAKksZ9_U8vUcVKJR31CTLWS2_4p83TtBTRgtRIewh1uq1VhUi2G5ncOzX-HWwVzAFrHMXSl04uedXZxREQCzvJM_J99rA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103601006803638575350\">K FOOTBALL STADIUM PATTAYA (TK)</a>"] }
        ],
        summary: "싱가포르의 초록빛 감성을 담은 세련된 브런치 카페",
        updatedAt: "2026-07-15",
        highlights: ["숲속에 온 듯한 아름다운 인테리어", "인생샷을 남기기 좋은 분위기 맛집"],
        tips: ["창가 자리를 원한다면 미리 예약하고 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.pscafe.com/pscafe-at-harding-road/?utm_source=google&utm_medium=organic&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5373851063022746891", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=PS+%EC%B9%B4%ED%8E%98+%ED%95%98%EB%94%A9%EB%A1%9C%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "굿올드데이즈": {
        photos: ["/images/singapore/info/restaurants/good-old-days-sentosa-singapore.jpg"],
        placeId: "ChIJAQAAsAAc2jERbbHzLY1ImcM",
        placePhotos: [
            { photoReference: "AWCwydhYwgdjBNbBdSEQ8fBXBwNQ_LOsUvpGTfYVdIjm6g9kLaf1xLKWYM6dmg9NyXxWmPGrACFj8t0S4VKEvIyagGusAk1q_3jRp9AmjLQVm8VW7iP3f1p0m0bheZuIgUQLNt5cREZEWQdQves1-Qw5EDGF1bSjcZvt9JwjL2zTR-wIItIZ8V8ipLYRPuG_x12gDvQzfyvNqJ3mFBIKEOeWXvoOU_mNh5C_I3PptF-gYRUpSex-HkrGWt0PDxBpYDRedbgbg3E6eBM41hz_coRM3orIbVDOtqJVJvqpXiAGBxoV5hezkUoS9Jx-82QczJV42J1h3DbiZgfqcG-SzuxhVOehJZJ7RiwQKAFUYC_E-krqt0SPMxzFXEjE1zA5_UVJmonHC_pQDTnzCCTLXwtM16wznh1x9e3Pv2juqMZddiqKRIvF", width: 470, height: 300, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102626190336548324709\">Good Old Days Singapore Flavours</a>"] },
            { photoReference: "AWCwydjgyDhiNR72Imy6FLqzQLNj06pBBkaFLFSltxfmVYU5481SUl5kB2PhpTHMDRxwKNxuE2vO0vWwlI4cEitb2rBu-DKgF3RAT3dBH_mvoXecWIJWvOn99ilfB2T0rSfIJo8eKtTRAziUvceuLQxvVTsV2Kq2BK93KUjHOVqakgscKlP5oW4zboVa1YxqXdnz3vetII1PaLGqc59_mgMLCmQoWLuEbL0jzTRdabOh8tyu-ef23Xp-8Wq19epzwjeHrPyGg4iMg7x8onHKwFh4SIuFy-9Fh0bVPd0pVc8I61sx7a3UJml2wyO9r6TugequXMyzU8PIPZZnImRKANKHEGbo6BVCXgJcPvuLVheSCleI9niRzJXGPhTWJqyGMKHQ_-1W0Wq2NflucCKVrblvc5VXDrK3oqg4Eg7nxfL0Hizwu6V7gzsVHx87mrfVVQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114345555265183607362\">CK C</a>"] },
            { photoReference: "AWCwydhUN3Nd4nU77gdr7tIFf67Rh-Zn41Oi4jK2llluyuClu23Q1H3tWiTfAs3uvBs8C5bteGWJ91aGapf1J42saQEzyPbrfhu9917HUa_drnYtEBhV8pPYVPjgDZIvBKnRX5LWDVbKROnskc3RjwurpZH_NmTZiEvOQ6e59-2n2XUM6JOjV1E1XEIm-92rwA8kSX4P3zTiOQ7oiJsFrjHXoe3fxncN0B9fyzryppHUqiWL4hyf-SL3s853wAPDvuKVRX7T0fp2YtEyLmRVhmXPuI72TkxMTCJ6GHDoWpSz8gCvyPddxggKI0IEJlH88Erx-jIdPGNbnrkwZzLi-Mw6FSyJJL2SBUfNFFRvKmpzpalv4mz2yMgB_qN5HoNvTVPpd8a3b2gyx_Mwo0ckTEQ4Kb23cCyECJt9QLAuUhg9U1ceqgk", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102626190336548324709\">Good Old Days Singapore Flavours</a>"] },
            { photoReference: "AWCwydgMnFlUHT-2g4b_UBYDPx4LFvdqB-uh6NQE2uQyjoJ7x7Z0IBaFTWoaf-kt_2L_dUKh9GAJW7zNBzg4rlNesCq3G7N5E3Rh5HDaAF7Q35mZvbX21V5JY4A9Hdpr-KfRzWhYjQHadPyI7AUjUr8d0l1E_wKgYGnfnprx0WHsMRbYCJhruXPYtoncPkcAWwrRv5u2vgEFoFBjOjk2RI4ITpGLJ9fLpLCnHALSSy4xK6BvoG5utbTLj1e7Z8TeXSrycRyP4eaJY7GTmxZH4PJINwenqfYNSadeKbYRJq9yscoghmtr83JQcG2FlWH67bWF7AwpJLI7dtFQXwK0fRqBaaNG7I17l71KAAoTN3AMEI4hLqlrwLOvwpCfR0dBGCmjUV9uEp5pDN6PZan-_Hhas3zeFKZfR0C9i34ol8punGbeFCKkMB77Imnzdc3YTq-i", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116688683924571139932\">Joe Yam</a>"] },
            { photoReference: "AWCwydgsV8_BmVRIWHiCZ7WYWqLIC3I5PPTh4JlDLm4clvdke7R4T2Z4z08fy6WK87d6UxmyYzXqXpetenW0aYerDa4rXt5Q3240D76s406zEioaqvdKt9za2R2XmoGvafgIdRIyz8YL3nGz3eAYdoywuf5oIhFcV9rtpnEx2uHZoa7JaLvhn3x8to8bwwdpKCoKXdYl-CRQgIT4EcNBNgJbfTfdjnMLuUDq4jpVJN0FC7WVg1RM3hLF9z7jg8LLqQmwQOXnhYKBA3gARaPR8-9ct_gGkTdQv4qda3q1TG8SMOBL6QMcywnNTWq_HWY2trYkaEKABUTeJnc1e5J7aaSSqUxYzrhRiqV-qVU4WOLjmmfgVbO4vjNPkroTWZcY88Q2W3egYmwri8ckd1GpTXuoLuS8zhBXdgsxH5YAJpIgiyf96XA_ZDQeEGOztiQIySBa", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100260074810863410644\">Mia Princess Diaries</a>"] }
        ],
        summary: "센토사와 유니버설 스튜디오 동선에 맞춰 넣기 좋은 캐주얼 레스토랑입니다.",
        updatedAt: "2026-07-23",
        highlights: ["센토사 관광 동선과 가까운 위치", "가족 여행 식사로 무난한 메뉴", "유니버설 전후 식사 후보"],
        tips: ["센토사 일정 중 식사 시간을 짧게 잡고 싶을 때 활용하기 좋습니다."],
        reservation: { required: false, method: "방문 전 운영시간 확인 권장" },
        menu: { signature: "센토사 캐주얼 식사", items: [{ name: "대표 메뉴", price: "S$10~40", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14733286010222219629", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%BF%EC%98%AC%EB%93%9C%EB%8D%B0%EC%9D%B4%EC%A6%88+%EC%84%BC%ED%86%A0%EC%82%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "드림 코리안 스테이크 하우스": {
        photos: [],
        placeId: "ChIJ93lInX8Z2jER-EIyCRxbK90",
        placePhotos: [
            { photoReference: "AWCwydhSBO_6KH4twYSpXGl42fdaM5mzwHsUQ7ZvxqCs2c2r6so5jyDWPchqT3A7zimCqb3YnbBv4wThQZOfLNTk_DGcqpq-_VVKcIRIHERqsY8oJYX58MoRCXypY-xfCLVns4za6-SGGqSEnm0MVND5fD9pKILFGSAh4URIb_xJK5b67R8U9QJQtDYPgUbKSxXk8ZZs223h3FQQdDxmKUkKcp6xr5FpEqmdnFf9xJzXJ2vE83puPs7kVPjEyXGT3JIYUNublaD0qnclonG24DqDuWwGzB7Tb_RWjXzq25uLqQImqjyRPW1wWBxsyIg100DG7kwqf82eNsaXdOqw2lxnbnw-f0oyMPUpu6RYZ2k9atxuan84biLGeI65A5YdhbPTyw-vG10ALl05FYtoq0Dd2FyuS1Vgq9RAI2ldQXY7O8ve4T_Sm6d01HV2u6weRA", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117305561492889717311\">DRIM | Korean Steak House | Mandarin Gallery</a>"] },
            { photoReference: "AWCwydjgMuaQ_W3a7WkFvtqzPy0e3ejgX2BElRHYaHO2d75c26Sb1OLZjwn6dOm4YV1n07S5zfByVHbi7WUrMkg1wzim6Wr5nrTIP2J9SDDij_kIA-H0gdsAJktW_nAfGfWswiflKsWxJ6xVAATdVUajuKYaPTqFqWWfUZzXn_EZ-DaTyWpk5a3cDncRVOdWrTB1c_jZBtJFgmWhe_yx-DTzQqtY8REJf1ZWhxJv1cRCt-jxjxZWkql_SRf7zLrJyeNyWAnKYxkslBAPqb0KJuLbdrWM3Vpsk4954jjJDqzlbqYF2Q74zjyxaWodcQ3uKPHjHbIylLkaEBzz_4dxGdiPKZNyxwWkuOtw4-LZjrArM962u_ChFex86HFwXgyVjcI8o17MvU_qjpi_HHlatlPoZw7-x_gmhX2QQ_5PEXQcXrY", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117305561492889717311\">DRIM | Korean Steak House | Mandarin Gallery</a>"] },
            { photoReference: "AWCwydhXt4tIEKjH4u92Uhnh_X5M9MYyJy-79d0k48jSud-BWf_ufhqoCw3XEnMxM6L1Vo96-sZ7evAQQFUKRfCoys-2EL20tREpi1141s9xjh195-X9vE9Atr9hHnEj6PnPV3GNJykxyPSPTP9DF37y5AL2f0v3t2mZ40tcR_lpg9cgZ3_LTgxmhNCnpwEFzw0u3nTLvzfbU6rnBkmN_lhD3vBJqtvCzZe1cvbEDKXWtIgGZ2iQoyzdzaqRDiPs-ZYy-cCnMxmNAiUwnnlQZHezj90p86fF-H6ZXA1s3B83jjrp3Fw0rZPbV2sRqlZumG3tMcc1Sol9VAHyrryxMlzjp1q5Sb_Sgdic0eNmPspshJ0XFQmTdG0hcaNOsiDaOWrA5GxyHwKQPJCy3FnKvGQKTXYHQGMGxZf7EhzHtCuHxEZSI8e2qESl6q_4i1ib3w", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105385113135711623946\">chloe Li</a>"] },
            { photoReference: "AWCwydjd44sOhdMPzF_1ts8V4fSlE30lZea94BULEqjFgPMNSCh-_Cq_Ft-s4mdQDSyA6ISMMvL5Ez63n21fqC2gdjDGVi1VMwp1iDuCE9Bne4zwSjdSgQmzZePRZjQNSxeKMuYx0JwsIW99TWo8J_8g25b8RHOLCyXYZpbnGcNDRGBtD2iIS7_CAaWBZd1lE9IRDYAIptY7iiYZlvuRywgZGraVEoRSt1tCtckDA1I5RKpfZG7DmYQ5XHvdf9cWh8vPRS4RKURpm5KOuclfXxr3pDNQRBUr1saXOfaAUqkR4U9FgYC0eRx8c_eBzQbLEQfnhadcwUQJs_YtLFipHJ9xgmetgjAYMvUBaZ8x1zVPAZ7OhjtLj9Azr7udZEQKfRxcdcIiZdwkMrTsteBCjxTbBLwFd3GIIh7Nz9X53aHO1ON8Fx7M5-qYFTEIPFnPJhxw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105946063594184157836\">Charlotte Yuan</a>"] },
            { photoReference: "AWCwydjPFxQo5z20YIDtYIc9NJF95gu6PhaJMQ2M9qCY2-kqjQBbsruR-2Y0C77GGIeL8Oy4oDZJ58u9_lLtQuMMviiUf-Xkb7wy5J-incmRA7M0NAFm5XWRlF0NUjTayxh_ddTr70TXGNJTekOq8KlVPdZL9Wxulng9iJYNTDXISq2sUARhiGd3hXma2QWvzBeX2QaJY6N-cvk2XwaFoq8cFhJ_JKmVLk9Vmh3QDmL4N1M9y3z2_ssBB_EVeUPSlXX8ZVPS-uhsGpZFECNpjwSMC1Pwj8JKtXgY1m9vEkBbilxftiS82JPtyMemM3AzzBVix7ofJIVzQ79s9037Uk1_7blyNdfszwyoN5W0hnsli3Q7wIjlEmf2O4hXqlOl2t2h8emQSlZeUulKd_iqljjK0eJYBTUIGBtscCEob2wicOofJ58BYJ7674_ITR6pfmV2", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106064948133730250435\">DiMoo</a>"] }
        ],
        summary: "최고의 맛과 분위기를 자랑하는 한국 음식점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["4.9점의 높은 평점", "14,427개의 방대한 리뷰", "훌륭한 분위기와 서비스"],
        tips: ["방문 전 영업시간을 확인하세요", "인기 있는 곳이니 여유 있게 방문하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~11:00; 화요일: 오후 12:00~3:00, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://drim.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15936931882352132856", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%93%9C%EB%A6%BC+%EC%BD%94%EB%A6%AC%EC%95%88+%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "옹기 (Suntec City)": {
        photos: [],
        placeId: "ChIJzVXDQlIZ2jERCrldCg4ncG0",
        placePhotos: [
            { photoReference: "AWCwydieUdp6cSOUJ4_XhWHQucgZ3S_YxrbmRaQtyvrjx_e4H78TP3b9u_tZPzufwgXoGbhNmiRnwh1h_C-F0uccj0zRIPfQt-BgRFoeFSlhe5GDCVjB77CpSF6_Y4cALT8S9jhfCdGh_aLtDF8b0lq8_FqiL03jIxW1SosTNt5UbkeIAqKnJ_spmzSFdi3CMDvQgAOjDGa9A7WRNCjtxxRoooSNxpKoLv5StSUYCeAnOTHj4ZYMkKaZ8Pluhl9UoDhwYOIISGFyHLmRQ2RYbTseSByKjVFUUVdn1McP5_WLHE5_UYgNRYtHoVue-C1ZwENM9evhDhdB_XQnLTIBFnUE1Apjj6GY7qHu7tYthnqPLnTm1eVs5CcNzzUEzMvDyUZKg3Toci3SkV6ea9Z4Ba9evTqUdKS6L2PfmoNx45PtONUM_mhGTkzJDxRuFB_IVamE", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116165025391676640697\">onggii (Suntec City)</a>"] },
            { photoReference: "AWCwydgDHQMSVubtjUd7qjrqFyzQD_Wi4aMhFXcgLVpAsOZhWhml_n3WnWQru6jLJ61cV_wo7-UGppSEoRbkYJz6oRaFEoK0PGsRb6qW8gnjXV9eoHcEjI4GX5lPzHh4KX_a7S3UfxjWprS9gxTNGz5eJaFkiulzZE5qUbhObs7vKUEw3Opq1l6SkxowDgvexGxe0MsrUpoZAekpSMawJQXYFu9WBpuTCA5dS2-yIcdL2h5qNGW6iM8yFfTRK4ZcjOm4haBBagszdG2hxgM6xsSaxvusSTw13p1Nn5RUMNo7nsuP-Ola499S1mCDIA-84peEeoeCx3UuN_jY6M34jrkzNycdMqUscFQJcAEJn4EXR7zfb9Fx6SK9mxVyU6wxtGilHIW_TMHaKeIavqyYiI8CdhasFNMKYesxHhV51Tok6j-9AMU93VCjUumtFDv9IQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116165025391676640697\">onggii (Suntec City)</a>"] },
            { photoReference: "AWCwydjnzVi9gt1-wrNZ5w9vCtr2rAvhe8jr3ayV1swC-k49EthpExCRcBLY8ITRCDxHmY3R_8-CKmwTT34JBKHpFxpa_BZQnoPJyNfJKB0SqqzA78b1rgtzAn5c6U_BpbT2TDGVw4bglraPlUDEd3CDaHXlETUn-mDEgHPcxcTI_-xhmfyFhuBASQ2VGkxOTKRl84_QbXmm4o3QJNSqbtEuYYwA0Xe5vcAB-GVk4OeRQSTmLVu46aK3_sPD57rTBbv9_wf2ZZHVJsb1HrH-miD8gq-rN8Ips5srrSF2cBQmNY0BI6pvvOR_V4qyEoWep5uYHUhI-NTwhe1cb4ppf2Ctt5vekxEBsC4QYL_IOZqsUznxt-Xeii45__ec34aBuS0VjZQLB5Fs5XvJlBKneXP5abBmjpM6E7tLsuNwQjfnii_EMeWaSGwdVd-RBWW1VDE7", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105913464531963748178\">Ugyeong Hong</a>"] },
            { photoReference: "AWCwydhE4ljS0davnNea6KoEokoWtwF9Z7tmJ9hXO_ps-YkF_aiaYpqOZOmMUA1hVnrw2I900LR0AYWwqldg8uQ7vexxvqUrayAED3C5oLOHTBkkjmpaIZtvCvjcouEY5FCGiSRmz84uxVLmbotNyrgxIfAuLgn3GSR_ahrrzdQ26d2q8HTmVq_3QvVh_z4oiDBsBO1OG2cZ89gQ_mBItt7MD2PxQDlekmUkrn6kV-ht2ZVmHeGjA4Eu8P58Xp32HkacMYLI8-XPWLEdyIccfsdDr2uTZA6Gc9bQPLp_Z3Xu3Of9dxsD12TInKcxLyiFVYp7fnDk1qON7AqR7QRQQVRff5L5FpWmI6nzv3NEkXj7g8zqe_3X3YTuavhRGVv_gsd0j0RnxLjf0bpsh8CYX8epq_9he9COtEOJ3K1ZIpWyWwBxKe-X5UdTqyF2q6T5fQcP", width: 1024, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116165025391676640697\">onggii (Suntec City)</a>"] },
            { photoReference: "AWCwydiU4M1uj36m9gbKcglf6w60KEjdht7z3PJtCLXXzhSNGcJMCSi4SmL7keaglmPfm95_LDIkYtxk7FnMFzM2W6i7-7iLDtWTX_5i0v4qK_qUw_ZwRACcL-kS2x2mAcw7-OZMeF1m4cB_p2dyoA3HNRVVPeUR5NPCsPSU6SZz4eCImuGncAAytOJAqRzRbjBwtIWKiPpi5yMjcZbAKvWqnQjdv6lz9YmKm9f059YiGEn7gG0KUglHJROoF5BXKpz3YvjI6yS-u_Omgnxv-i-rEcMggDS5oMa0PYs73UtqK6i52_VfN5Ouifi5GJESxMLw1MSkB_8nZNcjIsuowmrjFyVr8-r87tDdbDDb9q8pFnUmnvvCIQghRY1epPLR58dy7IVvhaKSe9TG2selT1RmvOUpWYdJ08LJemIDKZjIIsdnXWAVt2r7Pg_rE5bmDHlH", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105802754617442407754\">emily Chan</a>"] }
        ],
        summary: "맛있는 음식과 좋은 분위기를 갖춘 인기 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 음식", "좋은 분위기"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:30, 오후 5:00~10:00; 화요일: 오전 11:30 ~ 오후 3:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://iamstillhungry.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7885845888782678282", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%B9%EA%B8%B0+%28Suntec+City%29+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오빠 BBQ": {
        photos: [],
        placeId: "ChIJl6R7OW0Z2jERLqnLPVrqMew",
        placePhotos: [
            { photoReference: "AWCwydgM_-8nuEX2aABvc4OLS4CdrrYhDZ3DDfos1jZgJtJokO6qDa8Nyacq6W57ik3VvLtba_mM2P2n3ckvUVblu2IDqpq5WjCzXRdVQv4vV9dGGDKo_rRAips_h_OAFCVwnuhSU3A-wgP4U1mvkmQ3QNPBMnqw4MJFWdc2WQPHJ0eny8-yCOxqfiDCvbEjGwuBkVCMylm35OrhDJr_5j9o8Qn16I_J_k9Fw4jIcY0_67FCLRes6jk9cxPC_Mgb5dcXqltcdg8u4aVpZIsQCN35ZYohTormu8YDIPtg27LkxQftsTd5PWXBNV48N9yGCeLVFiHGrZ0qC4sL4_A_jAwHtrdbK59y6Dk_qq6lCqXf1UteXKWaDxsLufw_TgxzkTLiGKse4GIedgXAswA-Y4VDGUXUa2PKR0o6f4Ogq9eT0cXShEW31bsY6cWDEEDRblfA", width: 4000, height: 4735, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100792156592265410229\">O.BBa BBQ</a>"] },
            { photoReference: "AWCwydil9muQ75CW0Ntm9l8o04hSokxfmQ6ZP-S6Kien6uqVGdENaBZtO4gYdkuYK83fQ3H1ElqpjSUWcQ9f6XWtAAgiAVKdWE-zrjYt1OkhyM60PBuhosVEoI1_H3MinfQo5MNqwVXMRl48TgPnKzBAB0Qhf9RmSFOEcfUDK5BbwR-kXgeKev_QiOpOSDqLwU6ckdmZVWbCYX0aWkEexdm39wT0YCemE6h-lMguXbOfxlM3BA43t26Eh_Z-w4JBCu9cNv34jeqlOmcZqKbAyJMMBpZJ_Q-T2G3HSuBfh46uZOIJSNck2KZXOZu1vtYyOiDnpYqHACAVIh2PWr9p9OreyoqIaNUhzlYBIVIibO-VZai1nPvsr3muUDpQKK9Sc5XlXJZ39Soto1mTNU76JQ1yzoKWpWiCgurKN0Dok3hczu9Qu0xmeBF-ti_Ar3X7kkmw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100792156592265410229\">O.BBa BBQ</a>"] },
            { photoReference: "AWCwydiAxHXRtp_p4ydsQrhxgJCRiyI5dUWLi-CbZTZ2JLvUcE-FKA986ml4uOSwLjoiqngzB4gmSCSdXZg7Lfatz0aoKM1t8ir7kv4uCF666SHZSDdjWzfBd_qmWSgcU9vG6uUAlTrOzCXMeioAMQ98ZlKCUwhwzn10l9dEL4Tle80T6JDIPTgdML4w_2qhjX95M9nLZeAk175NqlJdKKpV3y6py_3Tyjcc3APQE8uG3M7SPJ4EUMnjvYtWLIaANSU4HSdhj0k6JZ1xwiGPGnlzs3k-b57DNyzog4LC-w2AxAOeCFxIxvkHa2_CXgIJzjiyNewIyPNwUVJNQe-gij_DmXObch_2U2sg9-bATEKHT5BZJzKvjkRrePvvBqMMCheWbsTHeV3wmd_htFsN-24NcYlWWiZt0-yQT0NSNGKfs96C2Hhu7zO_IuKDBZShQARJ", width: 3617, height: 2146, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114643644630835956981\">那个喵瞄</a>"] },
            { photoReference: "AWCwydgjmCt3i-44gL4KMEVz6VBESsKuJf3ooeaihzpPGWXKTkuWLngmgomdggRWGP481JaMeaggA0zDta2___46846XswBzqDEyg1hi0DELQ4QRkfNdcC_32dswvC44m3QSKhIxO1j_PWjkNKuNKKU4WxSKHdYjhRXrcbHyfZsrQnwcZRD0G1vdVa-xN6K0nVh5m-BQ3779VOxZDd9CerzQvcHujRdU_U78HOrp6fYRjaDk4WAKJ3yaFUHLkM4-ZiRX89pe5qJEJD3XUXpDlflV4j0-37pCqjrxEMrNHEtpruH1U6lQwnCgfIvULW6VEPC6q3k6WOGh77mW0yRcDOScJ3afWMayV84VBRXEadhXgO25Pctc-DCrPsdLO3CVdACr2ld-LeZKqiyVUI7Rt3dy_8zhfcGH_MU_a-rZ7KTieEZ7H8623L1_r6EiAcErOz-_", width: 4245, height: 3781, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112785507358374124437\">Sabrina Ng Nana</a>"] },
            { photoReference: "AWCwydgo4TeOPLSgw4eIvfnT61GRwHBraAXJfWS2sMoCmdrmjxzS4nWFLnQyVdn80hqdj9EsCOKuw7ox3zHyj2gocFqof-53tiAm0rI1SX_DFrYOeW9J0S4EOLaZt7eE_iLcjWENbtVils36UfmCcRM0JJk20XoZiGSpFfttEQe0EQC4fU9yGTUc9-5P1qLAPdpIb_qnhw4M16oBkN5qtdZgiX5Q9xdzUvbh3bRtsVFv9_fu1-6MpyNggm0LUMJvRql8EJtSWVQNvQ72iRv_XYqfHZFNsukWMCsCjg-GPAzKVFqaZ4tNbpGaF8tMcQgKOLTJPBY5vl_k25dNvsQL9jRS9F67eizmjTYUnX9jmuo6j1sOS_R7zo-RPBFwuA_wgIf1Au8Rujatqmi9lJJUmLJQBDz8tUuxI4CLuylA9wZwDqHtU_dIy5rVkBIhdwHMDw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104306761065111908175\">封yike</a>"] }
        ],
        summary: "부드러운 고기 맛과 세심한 서비스가 인상적인 고품격 K-BBQ 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 프리미엄 비프 세트", "친절하고 세심한 서비스", "부드럽고 양념이 잘 된 고기 맛"],
        tips: ["가족 모임이나 단체 방문 시 프리미엄 비프 세트를 추천합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오전 12:00; 화요일: 오전 11:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://obba-sg.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17019642140114528558", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%B9%A0+BBQ+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한집 코리안 그릴 하우스": {
        photos: [],
        placeId: "ChIJt2Ztmr8Z2jER9ZTHTrhVY9o",
        placePhotos: [
            { photoReference: "AWCwydjiIndzJsUOiDas7SvtnHH3Lt4MXFKVfZ6pmIX-xiVJAa9aDPgqvXnhGcbsItnPnlQH49IQQPX-xsDgNVud03CSg2LzHRQqRTMzI0Z4MloeGgxqufvedPXi04NLuwvSOWq10KsZKNl0F8siVpymnPaxjLPTqVb9aLERgUJYeeCCmsLUlgpRD7blSLaVCLf-Ny-vr0FQDN7JD7Ivy4ctWP-1DzplmE8SmsKpViOc2rs4gNeXOz-KCeqsjmJO1tUGMJCAKag-PPNEAC1aBdSow4g_Mjm820-c-047ghU6X-HSJfQQf5LlvzaVGRvbaQfuI__kNJfiBwnMrAss_bo834NQNeA7zb1LxDiehQvjAtoZgQSG8NQn01KxuI1vqX5TdiDT89e2kK9BvVpPWadBipvccZQQQ3c8xXjv35KRmFvfE5dI", width: 4800, height: 1726, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110028499601643324795\">Hanjip Korean Grill House</a>"] },
            { photoReference: "AWCwydgrZwICB8GzuU52lMQlAqMAX2kt-JwakTU0_cb89c9vp2Ooax1rXn2iY4JgTvTvikCTHrf7eQ2puIU5vUTlDc5OktP7nxkk8830BGsu5w52w_RtsFEfKNHsryYj-B2YlGaC6YQUjAFHEpel6977irheRMTinsalMtlx0kvWMXw5esmn-zZunqYcRTJcWZ4a8nb9hVN0TTSbmcXVpUkXkpnQpBeY6CqnNURjFwhosUr8G-RiiCgTNoxQdGRRKj-CMuzjW9GdVy929EvpA9R7PdPbVKB2xQHP9vZi2wY74XeTdGf9wgfljKj5YHVx-jzEYyk75oVe2mIeKPrwKT5T-JCBCj-srnWRMqalYSVVa4wtnhL1xzbh0ZgfjzB9V2l_Zo64MZJaGm3C0bmxQNSS1yV5WaapARl3Kz12qg", width: 1440, height: 811, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110028499601643324795\">Hanjip Korean Grill House</a>"] },
            { photoReference: "AWCwydj82GaO7tH5SjhsANJFJbvpYkRzXL5MfAGoVKywFllqdGlFz53tht8LCGip_H__OXOgcBFZO5SAuMeplrpFRcm3H13cAYu5fMJ9uKtvIaKI84_1rXV660ldWepRRCc8KystdlwO2wR-X1Q-NOjEuoYKx6HPcGxPxEsa05Uz2myNK6PGYrhbSvSdbr6jspxdjTIDHFdFTjCrUdeRTlsYGvgMhiEza_wDR9VFN2T80wfTlrUlEtzfKPgAzmxTXbikQTqzvaJ3cKoJEf7SuemtXXwBMcE67mix4YfZrQ8rj2GKSgtwPp47IzXAaL00o4Q5kKT2k98GeHe7VoKaflpf_UP4eHE84PBrxbY6XsEnxRs6V2H0ymQ4Nz7CXR-uUzeISllocBKAc2hDSNCtKBYVMi4MhIz2-gFeO_VK3t2PD8jTur2qgKUfWocieAvaETeG", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102039965735237857725\">Sin Hui</a>"] },
            { photoReference: "AWCwydh87-wWUuf9LYbigG3MoVjN7JRUpe-5IepeTnMYTGEg8M2Y9Gpkf2I8uVd8Q0wVNNbQ9bBsTYvjO7zSfYyX-ZAVs5Z9gCpRgtfOE3zpCuHBo1-vI_FuqzhL6wfHI_c1EZGBbLW2UA6weRckpjrWIqbPbTKsVYamcgvhdm2ad4Uh_NfkXsnaMSygApOpp96xVNJ0w9RsOsIz8I7KCIGsd7fkSKetJYdsjrUIYUW0R2AfEpTavBQXAEC0yGq6aUtcfFEK6kVI3EGRc3IIiX96GGxxqAPsTLTXqoJazNq9-ZoZXvoTOnkUP9k5EO-JObMy4Q3PcrE90lrUpOwaQ2PmZ0f9wX8j0wI42Wuyw5Ewp2YfGA_8NvQQNWq8vIgafojBfXGF2PDgdBFPlOKa-xYoRpOik96iHVSqxlf7LnaBLHPiduxjGczIa7hyGY6_Nrwl", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100412743865443910411\">Lai Yidan</a>"] },
            { photoReference: "AWCwydjJ6dAp2HYmBJ2ut1WnZFU3dW76nKdugShUyFoE38EfZ6sExYseTucX4Wj1Uhjz7uQ3Qkdsh4HV3Kyzo35q13elq-cI3pU5UCKuK-dQpupXQe-r8byKO7FFCtwZNM-ixwJCY55_aUmqHadnyg2MXX9t2XE_0uGrbq5ICCXvFNl0Ujqt4swm_af5CcWLVG4xXnfYiN7L--ZeO9LfAWTEDtrm0Dd-d2B4XPWU6VLO5SrfQeU2EVeOuTnTgfj8eOq_6-ETfnbj3H6WLFmf9TgU-_pjwc76KcET8pi6xLsvByjLrqbUO97IvpkQCdWM6lRY0lKPPqri5-HzxIQC0YLCI0uD9YR4Nj7MmyrKuRA8RKMS31Jb1Qz-DT6GUMV2ZyhkKWvP7up-M3_4CKwFRFNehfGFwx_Pg-PbQwdsDQ8TGMN3hrvmncecIA10UIeCbR3D", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112045682060879164192\">Rina TKK</a>"] }
        ],
        summary: "훌륭한 서비스와 맛있는 음식을 제공하는 인기 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절하고 전문적인 서비스", "뛰어난 음식 맛"],
        tips: ["스태프가 고기를 직접 구워주기도 합니다", "스프가 특히 맛있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~2:30, 오후 5:00 ~ 오전 12:00; 화요일: 오후 12:00~2:30, 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://hanjip.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15736515773046691061", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EC%A7%91+%EC%BD%94%EB%A6%AC%EC%95%88+%EA%B7%B8%EB%A6%B4+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "송계옥 싱가포르 (텔록 에이어)": {
        photos: [],
        placeId: "ChIJL1jSHKEZ2jERROc6O_oTm3I",
        placePhotos: [
            { photoReference: "AWCwydhPETAOTl0F2OjKuDpBAkzszfddT6UqDzOr2ZPydHnxKA6P7F-YA0-knwZmcTo28Sk2KvhPZcaKb2_UEqzOX2BSsdKZ15WJs1V9DdYcIC7jbHA7z_b9fb4BUJ1snRszvcWt9tD-P9K7I1BOGdD1bnMU7uD9kT0UNmQQUMlHhRRF7gA3eXbJPL2lG3L1_DZ1CwbfRFtXhCYFFihMxwntvYiDXtYV9wCxd5hvpMFl8fVpXRHxewP13fri3fXf0XkOprYUZvb5USJBPT9b7_S5a1mzzy16Iv2bovc31aAnmcOIi1Ve7GiwL19axQCn42krNVpqkX_KFY66n97NqfNEUrD0o8NgWL5GO2tSkrfzrhVg3cFKWqnRLrFLng-EM7wSuPS6kd06pP3K8WE1kUHOlbchNsS1tHGInhckROZ51vScajZFAq_UpNsaDAN21qGs", width: 4800, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101963948324676720394\">Song Gye Ok Singapore (Telok Ayer) | Korean Grilled Chicken Specialty Restaurant</a>"] },
            { photoReference: "AWCwydjBECr29BFsWP-V3BXGa-SdEgoQiQlx8jYsjt-i8zq-27oSn4lrC0TpbPkeimDFccOBZKR2u9zACB7UZ2_ScB-kg8kKHye-Wh-03eGCOviuYFCGs6ExwLFYHLtcfia1rESmSgl4oieNUNfHnvNemZo5IQKQ3cvaLxnbbExX4SDUIiLSBbET06K0J7Um09ibSKDt6cTFNfX-VpmXtdppYEEkTgP34SLPI8rqrnEftpYAar0AoJrHs4_QBi8jp6OvazTX2IRW1It60Sc6xLGkITbY8wwaLjZv-RUfZ0qlhmAWLhY0PUWUd9g9TLrGGO09HlJ2vm2sMbxFAT2UFvE4vYKjQdZIPmsdmodFHsICEWWjnrC3gV3c6Nt5Od4BaYTLZT3hfk2AsFNRA61qzkRZhYRRgOOPAvvSR-tyPG2Xn7OhgxpCANvmD7PpI64V0UxQ", width: 1448, height: 1086, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101963948324676720394\">Song Gye Ok Singapore (Telok Ayer) | Korean Grilled Chicken Specialty Restaurant</a>"] },
            { photoReference: "AWCwydijIw6sDQux3RyX6HhccyeNvGk8mP1h_34x-UlvZoQsNPHKJtQdzP3eP_NN8IP3hMpZgzOQ-gbt1_8_M8jN6a-_OqlFWBKlNhTwoCcihNzOIulHNWGRephMhK20uMAtbQVxIj8YlVD2AlFB6b1z485hLdeoCpcolY_v2RV-helMz64oBdbBGRaZtl1aBP55B5p-BMJXr1mzqI_oMh18XuoUK0hE_C-Do0wyaM_KaePbdxxGGvmA7ZZtRwk9YRrANg5zOFUqFtIVkfEoLTe2dOLFbC7gfvS0mtr6Zdgo8Zf_Xhu-rc7v7FuUdQgqDneB213AcFpGyPRcR9980A1zkhMjfjoWnB94_KnWV8sPNKsIFtFDbUbED0Z567OcTDB7Ae69anqhtOrRBb2tPzntTHpHkuzhfeDfZlV2ITOUZT3IbIfvN3VSDNTShfy8FNUM", width: 1448, height: 1086, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101963948324676720394\">Song Gye Ok Singapore (Telok Ayer) | Korean Grilled Chicken Specialty Restaurant</a>"] },
            { photoReference: "AWCwydirkBu_6XU2ZDrfcmBu8iw4Iesxwd4awhHyA8HDCIBq9wQh3EuswF8LLfF5nnN3A0xgV2MmQElksegKcW6GXM6tsKoGEVqbD9OdFCz65gA3uqU0Rl5gVz19ugE8UEOKDLm3EBxwQZsepJpPkoRUVp7fgOrXzURTZE2G8Fk4C7oAP2yBjL-OfvKVnAQHpPwpxcwYPfLw7HUkyZhXS9dFYedt_pc6FO7oY24F8gFVGDw4whtlikCyBIGzxwRPsYwqwD0CGCK3X6REFMY6Il0C3Ibcl-phmZpOXvD4NGCX_VM4-zdf_2mv6RJ6zA7MsRmjVetgcSkYR8UHQ_4W1cxUTNjZe4RqhnuicpVrFMmXoO_9744xgyI5fH4mTu9heflM70OXepRILVnt6udLyiWBNYTYx8mofsbhtEe60XNHt0eODds5CLn6j6n5DMhx9SCD", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100898250401257726055\">Tracy Ter</a>"] },
            { photoReference: "AWCwydhiLkT88Z4r2s3Zw_otcFpaSFsFHTxy8cvSYqyot0C4GZmBidQNl4IupKCeUqoznRFWRq-OS6QAEax0AJJ1gHstQJ2p9Yo43YFJt_YaIV8jay44R9jHoMJ7Jh4Hl-lI6pZpjvkk54abJ82_sAj8QQ08o7VzwE4CPawIQgda8c8P7y1M56XR32kJL8O6gvjTD-3QnEhooSVeIjYyFS5S3y5eh4KZrxEA31aYxF4_4FWzMB1Pdzc_hl-b_dBHNB9d4caFig0I9Qkt_RovMz02AcMYynu3Xyshubfa3Vosqn81NXSuBJ3OyKQBI2OXKuIHMUPr7_WzLGpF14B5TKNs6ccQ_ay3lywo1bBmBOoSZZbFvucMTWesFWTuVHrwN-IA3sREfgOki2YR0AnqetmJW4P0_Sw1nyUWj2sgXr9U3QFEWDUQgJ9viZ_kcYNDKXzq", width: 1448, height: 1086, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101963948324676720394\">Song Gye Ok Singapore (Telok Ayer) | Korean Grilled Chicken Specialty Restaurant</a>"] }
        ],
        summary: "최고의 맛과 서비스를 경험할 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["훌륭한 서비스", "맛있는 음식", "좋은 분위기"],
        tips: ["Howard 같은 친절한 직원의 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://songgyeok.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8258216307170404164", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%A1%EA%B3%84%EC%98%A5+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%28%ED%85%94%EB%A1%9D+%EC%97%90%EC%9D%B4%EC%96%B4%29+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "신라이": {
        photos: [],
        placeId: "ChIJ5akZVykZ2jERuQDrMFBso1s",
        placePhotos: [
            { photoReference: "AWCwydjQc3yIKiSHo68V5LMdOu7rzOhoBzNdzCnVTrzdbX0Zrx7YTREq4z-l7TL9X0ROUUD8p6FnfjgaDXFYscq8wS_ztcOc58whnJWBHn_uZtX7ngqzDfphxCSr4ggE4EfAzzCZyBHqy1lIrlB2Gx_j8LKgx-2uebFkRTLkCbwTAPFB5OfP_c6mhpYmezyD-Yy06qX1QbFycQ9olMIFH-IpcZUA04UAsoi6-GoH09iTlIewK7b3crlVRrH83E_ZiWrdn1rg2U8EMfRPHbgphJQbomB-RgjAULWxfPG_eHuD_tyP1_Kftko4xSsQvNfDnJG9sdDgaFyyiQPNoMwkF3HE_scpgesWwztxl8xwih9_E3nriMzN-xDqvVmreQAfICIwetu8FvohZLqIv5li7hoRW0_9D_62h4HzZAr8eZOEx9oGew", width: 3840, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104846788133144002989\">Shinrai Telok Ayer</a>"] },
            { photoReference: "AWCwydh5yvrYeIxB7mHuqK9vedmcTvZ32CAK7q3Ii_VjuDTefV-dvC44BkLa0V8CdQxLhSlzgEb2iZv3KxSJBg80O0hG5ZWgxc0c1H-b7RHKoX7LR0uPH9HdCBAlQtwzF3TOJwfuMdiJo4VEwE2VdSYAqZe8woagukp0MfpvPO9smmGtarAOQq1oitMiTtPpcJewBAti7AA93-mZqSBs_ELVzBtTyXcqtQGTUTwxVvOgjYiBq0SpXQFluw2BkfIEXLSC1LdSLnAltx2HZuGWyzXOPB9RJC1clH1OHIO2QvqJ8wCl5vQ_ggMqFYymo2x_CMYCg7XY61Hj3azTw4pe5rCmRPBVrPoovi4hTnBVa6mvrVM82pQD9JYk1iEA993-ro2Uu1-X97pf6iZ7Br4NZ8dmeFhnSCP7rSjJACsfzZi0ecZvSw", width: 3721, height: 2790, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117988793492560252192\">Terrick W.</a>"] },
            { photoReference: "AWCwydggYAxq0lsLyBBmtZCPAaLkUi6hvfkOYupmpGbN9Vr6DBPT6yfN2bCfed-3K14KgE1NCfKT6NbKsYAwcdajcG_bSfMLKPeLFbDPfN0rQbwUaSCt6QNROtljcsVPotsxhKY9_RYl4bnuXzDuyVqmwREvGYDC26sBiBUH6gdcC0QAWRQTi-pDAIfLE-4IBssGGqRhREKjN8hn7nmnZtP8Wfspv3z7m6rgRMmN36jFDkwJvwY_M2yQvPFyHLQGIvFgEEsCq40KufaKq7Xl4_QCdTx1okrcJkub3VWM8P2d-YuKfEDc7GaV1L4XWA0q8aDAP0TMm5tn60u2G6jkCgTTgESpnIeG-TLFSw0POn6CYA6aeXU6BDnj8jOTYyz_K4yr6_jsr-T7lhuDmTD69NAeX0A5GjT0T5W0AHwnQT6azpGB2yIc3TaAK6dT8fM_EA", width: 1349, height: 739, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107942982119174473299\">Nick Peh</a>"] },
            { photoReference: "AWCwydgYtwACBSrOivF362EHrKfHlOaTI8Dy79SKnWIpwOI601bSHwm0ClJgPkGYPro8-6AxL_mCQiSXo4-9P5x_lWd8wkPYTFQhw19ApbO9FnTg84L57SSlSThkhNPRoWUbTeHpvHJFla-HldbfWgMHXBeaF9fPtuCxyZNE3pdVOw8tMOsBwy4UC9Hi_Z9rWjMI4Mvl7oDN2kScgI0w6PG95LXAoiO1dor4FKcwDKSCj6MkOZocdC9HI8tg2JqjlOiXIz5yN_MJ-Wobnf_0uP-6i60bbrG1HLJofnL-bGYMYIoZ2WgR9F11-xIMs1kPeAIPTByM5VuY79Dt3uHZ1ii5QCL-7whQjDAlbOO2t9ahPCPKdD-VCkBDjqVtoGxJE5FPaQBSXcbApu-2B2re6FZOrWQXmrGsIShjAi1J21cJPsEGHwgzYfHQxtfB9uzEWsIp", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104299090849639324400\">C D</a>"] },
            { photoReference: "AWCwydh_h5hXDgJbwRP4K2zP2L68MhxozE6_-shobYYW8NSJOUDXFZCwR4lJONTxpHjw0T_V6CPU42xaCQh6N_k4jFjj55CZ1FYIV4uOtS98CzFlgHjP4R18cN9GkhieY6Oj1mQcHXiI64XqEMfft8wIvmaJrD11JgaF66gzS3CBN8b2Hwy18sJ2J0DxeVQMYidkAiqFq1nq-nLPsbUoqVwv-17rfu6HO_cxjsS1cVXlpFi7vvxVun-OeFVTxhRqxyjhG5OHbPxN_UdI-lpNwqAUg0aevMF3g95sVuPGRezWLmHNFRMeCCFi49oW1eXeszBwX_UujXOEEdW5HKWo6ahQ5wmckpbLBDo5hWHiGMuih-lOl5hdFPFzFyr_zqlVSUa_5R-Z7K-G6kXVlLXeXmHVT-KpiqoVvFTzPgdtUZQ9uySU8OYRUlJtjDqrzMhtLDar", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108189918301074462985\">Adam Chung</a>"] }
        ],
        summary: "훌륭한 음식과 분위기, 서비스를 모두 갖춘 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["최고의 음식 맛", "좋은 분위기", "친절한 서비스"],
        tips: ["점심과 저녁 시간대를 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~2:30, 오후 6:00~10:30; 화요일: 오후 12:00~2:30, 오후 6:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.shinrai.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6603240570329170105", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EB%9D%BC%EC%9D%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코마 싱가포르": {
        photos: [],
        placeId: "ChIJFzUYYm8Z2jERs4gjq8fcHCA",
        placePhotos: [
            { photoReference: "AWCwydhZB9cWQyK5LIiZq45f9FdTHeD5Cax837D52iovUXvD0-mHyFAohHT0VigExbeOKRtV_qtwiYVcA4Qazt77YoBPTsh63vwb0gme0HFUjPk7ENEzezSKymKpAe9jcghdanb_MrjgVIFZ92PBnFI7sdeL2R67O3CcM4eQzq67ggBZpIuN-t19elRSVRirG2jLBR9gAV6jHdl8dRN9mwfDZMUUXC6kHNgWRjE0T5ZeQ_wavNbJHSm9Wf6WxBO3R-JHENnHSBts91A4JoYYx0mcLHQR5m-GxX-nvRdbgbYoj8BpjMMM3CPFbrwiFX4dulm7qCffKlPMtMXuZWdRgJ9dxfD7ohXfo7tVLnKRAcQe50NEnTCaYHC63PD3GD2WhuNgWaZgcp13ksJ_me5y8_fxTT9q3aG6w-2e5K-iHhzz0qmyC64", width: 4800, height: 3386, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107123069228849432407\">KOMA Singapore</a>"] },
            { photoReference: "AWCwydhd8M_3RlIP8rJWozxUmgRMhduawPB8x-DgmG9ql-yOUY-ifWCaxvTOuTa0igcBTieFAoCif79KVTVc1l6OY-tJ0YS5TJlhQXGFTstt9TlEPy9a4z-tCwWqHOQf1u61pbEUR8QchGYQr86xD_AnmWJmM5eg1BSYxCsgkgaj86QwbU_t3yFD0tQuwkzjMhnWbTs7VRci0JZxSb9CW2qapqR7a4LN3_zw2-m2vzUBuH8s022L35Ua3FtItolcVKDELkKPN0DtVSQh4WMJ--YGrTN_WvjhhVpMohOA_sbWGHsBQIefoNnp0k3jr3chivxSltMINlT_jNma4Lw5Ql7CSYxPWeSoQBnCipAiJIf4tPhbQ7LQteIna7n3Wrj7hmY64E-LVDRT12Syadxg4qFNQLyLJIIKuYgz-EYQCkykNVc8Au00kaAuMK4YFNIK5g", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105274322337270442957\">joyoftessa</a>"] },
            { photoReference: "AWCwydgSObVmJ0BscJ4QLBvvYGIgSDr3C_64bb0IqCZWVtI-m5zCu5U5UVmhJsY04YOHecFz_lzrm8abRQI-LZCiSzAw0v30L6Gvln3FFNCGsYSDav5RsEje9qnKve_Zu6kUHzNnA-C2bm_zL4QnLiPSMzev9Nuf-tMck0KmYLFHg4YddE9LMuBWm3Qs34LvilvFDrej63Q7h5GEERD4XIHFVYiPil3xd0IqfVfAL6NAoI5_Wi56OlXASGOtv08gxuwqu_lg34sdqu8sbTmVNZm4hpnOjSIyXnSQJU740aDs0E1ljKnwDIUXE7QomZALfFwhUJKbMegTbERRyjU-ZYorfwbNrwPRxBgfa9ky4WOhIlZnyuTF2ldSwccuT9oVJVE_fSDEeJf8rqdz0u6ZEMpC_U-2ONhPVeEXq9JMOK50-q-jlIbo", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107123069228849432407\">KOMA Singapore</a>"] },
            { photoReference: "AWCwydhgSqxXPldV1IJBDIe8LrQKq30Eb095eR4Ip4YDRzjypqyrV5rqtA8mZkkopI0anjaNU0pq-4vI0IrCyvoPHzfdPa5Vq39ut7cTOfilFHjHL4s6p7GJ40EOcSzMub6719tUv2RHeOQy9b_huD9CLJVbgiPBP7W1TDXDlZhHD3N26VcyTML45tx3sGwC9WIxZtBw7p02-elseu8tq08m_6szdPi9POwgrKDw1MhvQoTBFZ8Zu9ol3dsx1hbxfOTcX5TK_PF_dXwfJjp4W3JRki6K568Nj1SYut77jLIPTEWpkKMG_j14hKzOh1Oz_Egj09j5zQ-HPl4H5iLXJG5JyKvGN0aFrnR-XzW8neSBOHLQkDOBygEX5DnN3verixYxLfRKKjJgFJMv8_nKNfAQ3kMIkTRe-j9tOkQnxyD3skq5VrxJbJxqczytLLAh7A1F", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118140472468177914613\">H.Y Choy</a>"] },
            { photoReference: "AWCwydhlTKlX05ns8kIxKT7aqWM-q09cz4dksG_PI_trK3jg1i4-dziQxdpSMNZNN08SWoqXGHBGdwVH8LEHfpAvi9_RepDrP03nemNZB4EFChCc5cqYRUvlb74icM5hscpwxfdWM_OjqIRNaWm1IjSRFJunczsz8SxZqb8O9NCt2ZEG2_VET6shRGCiHemBmAk-Wcr3GPH9btwMLFyN_EK-Xa-KdAxj02p_cg7tUhYFRJ617beQSk2tA8HHxEQuG885aU8zmQk_bKRkbmjx8KCge5mkaE9Nqs_w3esHadZLRlXco1rhXK6x1qUsxNyiRRqlKCgFD9ZNYgbdjSqOImeESCEQs4YRhMStbKxtFlertVyXp9QSC5L2a7AZa77ozMrA-RtBWnauqb8TE1dLn-4seE6SVWWw_RcpLC6KirqOvrtWnyqz12Sx8Gh8jmxrv_Vp", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105274322337270442957\">joyoftessa</a>"] }
        ],
        summary: "전문적인 서비스와 뛰어난 음식 품질을 자랑하는 마리나 베이 샌즈의 유명 일본식 레스토랑입니다.",
        updatedAt: "2026-08-14",
        highlights: ["아늑하고 멋진 환경", "훌륭한 음식과 디저트", "친절하고 전문적인 서비스"],
        tips: ["직원들이 매우 세심하고 친절하여 편안한 식사가 가능합니다", "디저트 품질이 매우 뛰어납니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://taogroup.com/venues/koma-singapore/?utm_source=google&utm_medium=gmb&utm_campaign=koma_info_main", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2313967058689427635", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EB%A7%88+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "슈쿠 이자카야": {
        photos: [],
        placeId: "ChIJc743gg0Z2jER8vrW2Op-bk8",
        placePhotos: [
            { photoReference: "AWCwydh6LCJI1hwdjojbXKLJ_UCR4oOB2pO7UrYoJ91OciiRR89K2FSUoNzwouIlMxveODvSHuGSlBrAkxmvJrGHow9enCibGFIR2y6_hwB6Y_ayIk5cvYu3s9kahWhx6nLLFUQ8kZXYwUU4nknhFqfSEQn-4mXUEfBRZbemaAWATQQk7LfqumIyNDaYvhiU8Z8tVA1th1HdWMFxRoVoT58xZt21OrUcvlRijx18SY2-ztPP-XxCfWZKmWv-xjNn8dafkvvhZWZqMnbjofbOehD0eaVi0SN2J_C-sWfDn5nAZAPdLaDThdm3E5-67rDCHASWwBYM8TlqiY9mOTKTTLd7xpNvgVaCcsTp1anWeRUTJptWQrbEA1bQWoP9wSq98ZlG4HPLZ15VQawYpYTfeV_ZvR6r5YeJobVV27Tj8sZTIYJ8Cg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107835465491120644663\">Shukuu Japanese Izakaya and Bar</a>"] },
            { photoReference: "AWCwydiow5dYrF4Ju5l7v2uF6rc2nP0q2DttXpUKC5YxouMq3i4YA5gYmn-oVtLJTO3a_StKm-mSFrPOPn6tGhdIncN6WxrqpOgLla2MXxiPz7MVbYsQ0Qe9P_TBG_s-h6MuydOVSSP5m-o1x7YjBb46oIdYsg3kb-6Mg1LmnSOznC0hOv3sn775K4RNlXLHpSjyv7NAVScSbFnA32IgQfR5HOwQUBPDj7xEXuoENfLn14M7EtMNB-SOSxFkPzup8L10psiRsojkGpzdCaIsB8UI6gtCKB4XmEpDh9y0Bw02Ej_n9PdCSQ0KcdOLkCS4RJQ2g335BtJry5TDW4acYAjLYjFOjT2UwTdVkXX5D1zVSBbDMZTbH-G0TbpOHDJnOXh_Sjp0v8KbpfEYPKBNhP4H0aXtrpdWRKlym8TsPrdh-UDpqA", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107835465491120644663\">Shukuu Japanese Izakaya and Bar</a>"] },
            { photoReference: "AWCwyditXaaD-2NypFj-KWGfCC89Q0oimTXGJxfm1-UBnsP5BxF5p15d5667nItkDuTzW6shh0cKqJg8XAGavlK27CyTUJVsJdV0_BX8uIUqvyEe_9fHZ8y5NEY2q7AOm13eoSjyNYFYRv-z3B8ab2oWx432UQJlMO6wA_mbGPb1AjuRk6OFs4WO-OE9imT4jETqT8wBqpzu9lhPOo1GO3GLm3ygNgdbaOZDOBBFsJOXSDH72yVB-a1NM84NSslsEX_IPnWOqviYZg5kY9LKPuGjnH0Im2jOMGnb8JCX_ZkP2pdDDZXTy8Ezym_EK35zlE6xrZC3iP1H1AvhTWDvtX9VeRr6tGCVA4IVYVXqIKzZl0pqa-ZrdrxiTDS07YzJv2h5EK4rQCZmhvWwj_h5DEx2N17dvGYtJ5LM9U9lG4qQHwjF1C7zRvltM0MSTKx3n3ql", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117372506880261900284\">Victoria Ho</a>"] },
            { photoReference: "AWCwydgx2-iPAW768dAXSOnjYVTjCeryVF-R5kHe5xEG9wQK2Vnd02RWBKVX9SzCC4KdV_-9iuqz5_u8l3o6DHjmwTG5h_SCTpF0LSKqK0oEm_32jfhIX8T3V4lxpvzHIcfsMkrjcauM4Wjn_44PN2Wx7w0rl_rk1dIQUUDV1ybTPHmakXcoUnYR1ERZ2UYcjBc6ik0MailwNzdiU3NppI1JbFwn2CmQxnr6PSVAGTFaf7bd5Y8GC4sWdsCMtDkXziiDk__8YoLjSdzgPr7TbOZCjLM_pMXU3hRt-T0kpXS_pwr8hTyUDwQC0rg1oLv2Idzq9xbFguzK3A40zHG_9_jKi0yjI6sTI3HAXM1LR8ryWaRG4Fy2BWwa8dTHAS0aceHt5R421VKfiq0j3x8j1dsP9wl7MDR48CDD-WhXNnr1NQJBoQ", width: 2048, height: 1769, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107835465491120644663\">Shukuu Japanese Izakaya and Bar</a>"] },
            { photoReference: "AWCwydh_Fksmw3CZc9PkFsy5BwAvwJMBn61SNvpHjDBtQ4PtFlwPvpEqNv3h7q5AFATMTqyp0lM-nyM8JfDnLSXCBx6_OMJ_gj4_osTZFDw4TmB7AUYGHUSv1MZCN6hpK7NY0RnnKXInCjSP68N89iZr_F_jdksGwhnlV5wBzE8cMFLco6G5UcP8q8_UDWI-L0ulaYid3LvS8DV382AuyDjKhj7tQzLBzJjmXY5ApTday5U7f8Sx94Xxaqfyc73Z02ms7Pg2ZBajp5qIBcBWmCghaD4Lcn7Tc4lKk2Z8JowoDcT9vZGtdGwbhxJzE--rZ8IYJqPhXpNA_lyh5hciIYzedZcsUpM1d7QfKWv-58Xu7XYZQ0iTmYoHBD-5zufApBXKk9uUf28FW8vrwquK201sx1Srpa8F6OvO3qEhCa-fNJYt3bUKX4a60d_tvrUfo3tB", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117372506880261900284\">Victoria Ho</a>"] }
        ],
        summary: "전문적인 사케 페어링과 수준 높은 일식 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["SSA 인증 사케 소믈리에의 맞춤형 사케 추천", "부드러운 식감의 야키 하마치 카마", "육즙 가득한 부타 돈까스"],
        tips: ["사케 소믈리에의 도움을 받아 요리에 어울리는 사케를 선택해보세요", "규 폰즈와 사케의 조화를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "사케 페어링 이자카야", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:30 ~ 오전 12:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://shukuu.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5723651723559893746", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%88%EC%BF%A0+%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "토라 토라 토라": {
        photos: [],
        placeId: "ChIJBUNpgbAX2jERZR8GXn-t9-o",
        placePhotos: [
            { photoReference: "AWCwydiE5t-9eCmJ-9iL2IwPLwiG8g70CAbIMhP7BrsrjosvPJJ995csJ6XrpHC6oLWtls4O6Ti8c4L56nQTiNxPArejqPvBwyMcS25gmMVy7xxVDbb_chyhPDAOppbFZPgkuEQBIm9-mvFdGf4otGiXWKOYHAYzP0PvxRWylvPVFD3kcxZV1YsuqiLyFZPTGhy5UI4i1wpgZOZkqbBBqQXTHnQXJab0S2DXdCGO61WwzEHCbT6swA4IalBky_Hg2CHz-A_JGl5378ydL0J7UblpM-2haqKfo0W8fsc-AIcd6ebUIYq7GCLL-4Umr1jI-hoqcxkS2tqI4pd7KypP3GEWxgOyvnzff5eivw6hNbKsWG0jGkdE8k5g2VxRDztUNWtK3GiJoLU2TS7NiMHDZYWEB4VU77U3KR2Zn_AaMlMASkXS6ceE", width: 2000, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114548377695257120665\">Tora Tora Tora Japanese Restaurant Singapore</a>"] },
            { photoReference: "AWCwydhDCJVIwnLLZ3GAy5BOCePxAxsUVmwQEJ225jOYpZzJfUCX8QPBWGHMDR6XqnRjM01SEhza_OcZQ9aC1BJu-VuGwsg6-a-p0nyMNG1MTaEjgy5ombccckpJhoxWN3SL3ydi-2emTBlr0LFkbpcu7QGG90PiCvqrD8gIxs55ASO8jhSw-sRo8w8JcG7bSqMdBgZ7VBxFd_Na2jUoU2esVKS7XFieF_SRowkBa2H466B3AjwknT7t_OcveaqfuJqA2NMYDbVjgA4Wy5p12_UZBs07bqjSpCX_Uv4zGIpapv8_lDVJdfGcbRioN8kqLeZK-uY2zPVYuNjxKsaI0KnQwKG-u4LElxCzIRJZHkvYg4wIx5A51mwewpX5M8B2XLUnzRLA041QxeTueL20BfIC7eFYUgYAae0L4hhDuZNNjfU4TvMTAJ8nNTRVEibGzCYU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109574307883871552429\">JC</a>"] },
            { photoReference: "AWCwydiSPHUipCxh_Ytp1JIFW5vxK_OD0ru8GzZ0JiCk_WW3QNCj2C7hYkzx48VZqca8a9l2a0clq6qpRio2V1XX1_DW7vC57TVb5o1VQsQolHgvF8-e82BDzELI81GnS5cGKO8o8xPAq59XLjiEBemWG3SHmu_MI5IQSb-C1Z_B8SDJUuZUSxjRXtBB72O2iKYqbB38iH0sxoM9Ge0iyB18Y4AkPENZiF1y_uFFketJA7tAerpDNZkGwpJMDVdhg4bzTuA7uELEsOG6unfXDzN4xc3yOzLw-mDXR-mTjv-ZJKUO2oVORZ_h2huzsWAUI5nGapnf5UEa-UlX6IJxzDTt5s01OhXjq1yfEdofek9OTRAE9LbLV1dD9PU36gCLEo-kvkUBCunh3MGRT5Gm843qiW5jDZ8_TDqQIG3LzUgd3tciUoRl", width: 2000, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114548377695257120665\">Tora Tora Tora Japanese Restaurant Singapore</a>"] },
            { photoReference: "AWCwydgp4PxSrQtpnJk4tp1svJzh9_Jdt5moptSes1Uu4slzW7bVnd0Mp-J2J1jvBtfOy03ovEf2FAXhaTtmB2V2X7JXQ-8YXnHTFmO4MBvEU0pA05sasP3C9XvOpVNAVzMVjNbReIx_1SlwcP9S44ApU10F2ET1J7eMGGw06X3f-Tz3zPV3741bCe5MkKYXGWIrBAKpIi1vz_ouRpgMa21zf3G0Qan2PcQGzimXs0LKik6fw2tpCG_T34CcSky-OwgXK4DGMlpNyif5mp1GCI02_84WUNHYE6zsp7Wmpt3H6_VUVwEFRVLcE2GYpfMRp_wTeKhOzXarxV4jPm6Tj65sBAibRnaMLZ9T6iLKMWS-XGJ3XLz9ulYMS1Kq3f4ppTJypLEGupvWJwnGezBYDELrhuZbARcHjCm9CG6N1FByJPS9kFnyiCn-PzjOJ-ZqhA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115893285862828169676\">David Lim</a>"] },
            { photoReference: "AWCwydhCLuHe_OuMhbI0eSQ6KmpceoM8bpq4Z15Izt6VNdnnz2XTVnMTnVY_CaN0HYN-EHIgmaMtQLyW8h-0p2uzecnm389s5OG0F5xBBxIOzc39I42Avnceu-Gly7BEFyetaFnnMAyKdm_lt_6v5nfFnNfXHSJ9oATsJqfUTdZ6s8hNokRL2nf526KQqvKFVnR_y4szh5B-STERcSycrVWeWb70j7gUb6vuwHxb92SD3EgYfXBMXyJkBOWdEQ8m3hIea0qYmQe3Zcsoupzpyd2vRC1xzRYe2sD0adPB4jc7N-J_goHgYmG6t9fzF69KQDfa_R2gMuwyJG2v3X_kk1_jzTrsDkaYQGPQ3CeK6hscsTneYLWwgf497sOFDnfZCutDkoiJoNbPY3_5wYoW8TDsj8Z9p8c_T8TUqBfMfgKC6immgoUa2OQGsM6FVyWrnT8f", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106702823765787355134\">Spike378</a>"] }
        ],
        summary: "신선한 해산물과 야키니쿠를 즐길 수 있는 높은 평점의 일식 레스토랑입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 사시미와 스시", "고품질 리바이 야키니쿠", "훌륭한 서비스"],
        tips: ["프라이빗 룸 예약 가능", "사케 1+1 프로모션 활용"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~11:00; 화요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.toratoratora.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16931192086672580453", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%9D%BC+%ED%86%A0%EB%9D%BC+%ED%86%A0%EB%9D%BC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미사토": {
        photos: [],
        placeId: "ChIJ09outpYZ2jERpJkALHa70vg",
        placePhotos: [
            { photoReference: "AWCwydj4DA9PfEDaX3_Fy2aiHJ-T8KPp-d8x8uP6jHqVpUfdK3wzXW4u7vL_FiyJtt0HFmsbYdNTI9unNkPDz2CjPXb07-FmGXddh-yJOfxKw3WV17HEGAr0MHpMK65jP1nSx9SUebEg-8CPiUxSNcIsF_Fyp0RDK_Yo37DZ4B9CZMzSEKumFUxA1Yoy-iV15nb6Wl_-IWMyU_vsmboiZ-cTscvBpgTzZ4gd2OtbWWlZf9Ee4CUrEvB6XVTQL2XmGp1MjzCCjXy1w6g4y14aBx6iQ1lHF5xn_h6g-RBZ8B0PYibsH7YThimkrpRstr6rHDuVxnHYhvEsv5kWhv51OD7CxtRm5Yg8-ChSiigUJV4zSWu-eDgcT6gvSgvjkLxrtGB0qMuZzYBvrLALMKo22UunAWFOI13r-7GrHhShEwPLI5cNutUkXSfhHRNqCKrO6_Hh", width: 4798, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113992658114454941893\">Foody</a>"] },
            { photoReference: "AWCwydh7MUZ2aD53zXw1--Y76sFLP9gbMbXD5TSFtxuMlvaBl6CVO8RjFyYZBlrYDJnXSRmy1jk6oFNn6eWuh_EGtw8wEAtcG15S5mBvyPLwSAtzedCn3waxEqjPL8ss1TwHaazSVfKcya3_3RMjjl1XGoV0q4yZR8yI3u9Hw0AD3KUz1DJgoQZbxPTnPeisX11zswfwSHWvOfvvAldzl6btSicCmaxic7jXuMnGIZG6ubZ2c8AA5sx7tjlyMHI-Pr-bYuqCWvq5bdGBrtg5xvQWgeauF2eI8CVpBSkkz3TIA4JuxgQw2J5zTzqDQNnzISpE0ZUaZGwi7rz88gEIQE1po09K6t_DlDDH7T2KiizmwpPyviH4hIxl2ziapaPCXq4MNVSU_9AGvn7xx61mipvxxDf105Qv8zIbdy0fZjroUT55451s", width: 1320, height: 2868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112561806513586994708\">Misato</a>"] },
            { photoReference: "AWCwydif7LT7iR0Hm2JisFzq-bT5r0-uHLN3hc7DIoFBmbJXLpFvTrBTo3vsTac8i1yya38g_ZpoTnBx0-KzdVI6_BusnFi30s-El5WBitLEvU0FMNrpX4n3zb8hXcFEzGRS2uHle_s2-ztovSmD7nwyEbwTG6rXW5Qh1DQ8W9RCDpbR730xJ-p6jIKTd6jdw36cafozH4k3bHxy6GOaLSG-lId6Uz8BsWxbeIF6iBBwVp4WI5zmxUKeqgdhRkVKTTwoTpjRxocgg2sQaOVTD6lFyv7uYCzPjnHQHQqwWHhhGUcZNdsBEpdGOBtEud4nGaLjY9Zsbison1IYZbbzrHpsPA4KYVk8cZNQ75WxtOOCm1pbE1fPcQeB2utnc3tFmGYi8_RL1Qch2yOR4joscBDwKMCVo54IPMz2Zbd_oAErUIqd6UqgEZTDgNrmxVnCwyjr", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102247678323402352054\">Luke Lau</a>"] },
            { photoReference: "AWCwydgsNUfm7RK2pb8IazLiZ2My5nw-lkCLRSlvQ-UghGJmdVkgU7i9UPBotaYHQWJZg2e8WK-k0A3yZVwM8PNvfFt9C7KbqGugfnRuKKe-_puwHOVDRnQuMSGI0q9BU20PBd6JhubayU93bk-fKR6GRUKdt-deeKPRhmedBfVp5QIhiZWzbHYUUja95pc5a80GKtmZf6NvhZ4sn12PEsoD62kZE_fqyGICM86kQV6u4T0gpR2MnH1e32q0b7ykGEIoxqz_I7dGPLiJStpjYXz3LdaL_Qbb5lh8FA0qYNGBRV_p-K5yDEwM8eKCEvjcbg47AOqLa3yzwNKQy4lxJ8pfpFs-FuU7IWPW-6ySuLOLfhU6eifeHmEAULwp6lOhNILB8UDFHPy3TY-hJ9pGfahVmSfQz45vjgwDlfHNl9asEH6ibPECX3F2MnIB8J_t3T1P", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107183346603892240225\">EnE</a>"] },
            { photoReference: "AWCwydhBhSu796PS8v2ensGMPruaR2k9lxwiwFTZgYs24wvaLbP_EgNVMmpLMz-S8KnkKphIwn6_KgGtj5rOFFVdbzLdgPzKaFzMp24p1PzRxnRsik19G0tLCfasv05kwnwcrzh5ODj2Dp6m_OfBrOUjmJYIbVbLIDkrubLh7CFMq1iJgLJLhPinER_Evddvqw5n4_a-m2SIE9La53RMkaknLIRblpBRQ08ma2MksOhCwStCwuA6uBonmXt0GfkBvdrca5V_t42bvJrWMlHnEdy7NTIKjMWfznbYL2GrthqjjrCKuywp868R1_2F8XhYP1ekE9q9isSIANrCNcEK-F8rn3V-nPSsfWDJ2fkc53OW0n-aqa23H2PNtRKMnsRvqToUCyMCOKXmRUfwvHOT5jdF0a2yw4qKSCpqWZOLLqpcsqxB5taB2G83vAHGtYYxr_hW", width: 4800, height: 3436, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113992658114454941893\">Foody</a>"] }
        ],
        summary: "오코노미야키가 유명한 고품격 일본 요리 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["오코노미야키", "냉면"],
        tips: ["오코노미야키를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/MisatoSingapore/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17929599182734137764", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%82%AC%ED%86%A0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "굿 바이트": {
        photos: [],
        placeId: "ChIJUVukECoX2jERljPE4j6MVYA",
        placePhotos: [
            { photoReference: "AWCwydj6S3GuEPlbi57PSLjeFJCnjmdbL4eaddvtz85u5ZXcsYCs6etpnpHqxGj7wEQZTiWQ1e2L35bgu-cZDh6fd5tvf7twcEIC7IQhBDo1VS_tBf6OOYmTvcFFz6ko57Vcq0CMkawHSlKTqFowzXbEL_EXr5ePmrnt--NmfsHzz0-UpRYOWsoNFtoBqJpBBrWaqEQpMTHhlwS-Ji2kMomwPwqR98aLkHUaD_vjBZBvZR-QyM8RDyOiHIdXOl_3fV24TqsckxfPAeTAlcwmJPCV6ZQNQYm9TXDllrg4g4xRX4pQCwhLF2OEvcspwYFXnYyieJ9mCXeO9wMCodADFK2XNQTTCFgpZO4c2CWWyqN5EBs2_ZJpjSkdRsi6dKbRohkerThTBQJbA8-bbl5wgqXfkr31iu25_B6cwLLtgAk_yns", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114779127023210715806\">Good Bites</a>"] },
            { photoReference: "AWCwydi9NI5gL1i9wkR6JB-to9Pe9gILDQMAvDB9a8xJ0lIGWWs0XrjmgVwCthvbpJtPa4ZsAPT3wGzsF7Rt0yGaVVohkztuc9936eor4jkQLGjiKMGHg4dDvKYE6NVpPefTpPQahIkzIBdXPZxQW5Kd2M0n83x8-shUAy393zUhNt13E7RxoyAREdfeqdwJPXnUfu9jr2nrHtFrjraNQ8UCm0idZ-tsKSJ2CHpfVj8MPy4VCqQ786peiiSkzx1ZpOlF341NUAu_W1AuV1r_TytpKPHkYj-umCF5oJ4Odp6SV7MT4zeGacAwvS0F9SozcJ8FWEPYRjCXk730oQp-LLglKmiT3We2UEjvhr2AxOp_OVAsj9xLfcD2P-yJPxSE09P5Pk3JEh30bN9pE9QpE3UF8rCviNfndADKF5PCyMS_j3geGLBke4OwE1dR9MGijg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110827443996369337051\">WEI Mark</a>"] },
            { photoReference: "AWCwydh-JmBoSiwXIcPC3okv8O8a4_YhsTiQoiVWC975wYlM6narVV3_yoilNO1HaiN3Odsyk4TgeioW-0pmtGMBS5jzcp44Q2gEa3oAbuSJTcZDvvWCwjEr2WhlOgJgF7zPR0TJRcnmEQsJllp1RDYwVmQ_Cvk3p2nadc9ppEnCa9QALSD3R-3lWuwr2URoNPMZAHZ4v2mIEjYsXNzljOPFbCdS3fQ3TFN6IKsy2tXYI1hoo8djOCZAhvSQBdWh9lO9eu6LpzDPLv3CKr4eRGIPI_eTTLNOG4t67THJOhw7RCiVpaOaUyBE9hYxORvQTutVeLvKhK62M_dUQyQtwHq9rnEgrmY5SKxFrkjtl90RUp_ELn9DH48yG88mxIU-Gc3KWfw-J80G-OdZ2eaboZOjP4kJc2QK68hcGR3FZx4Ss555XlqWw9xW2i9PMVzGM148", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116566365853240251474\">GLORIA GUO</a>"] },
            { photoReference: "AWCwydgigyVxYhnNRPGoOZ_jLgtWDZlD-bTKt2oNBosUjMsxbS5qi4y6LT8FE9ivhPPt4TgUdAsEY3hrkf3iDOwu8dRA5uls08r4Rn5lxbN_6ILdR2Ic_CZkAlLIGmyDILjVlGncoNlouAh4q985hh_SnqesdqQU97MPgEFbuKKJ9jhba82uZUUY9fgKu6QA-i89beZFByb55nGf3QtsczzEeV5ogWaw-tsN5ioIDE11rmbGJHnGGQ7H-iNafbaxc5ta423lEFotBtYE6GOEFdtmt3StnIcxwr_6tMCZe2WfjPHAv-FP2wHjxCtSMoNlieoayx75d9G346i0ncuEj2OzNemMJTo0-cPNHmBdnWnRlFrqMvU21dyx_2Fm0lb4yZYw-752zmwH5Oqd0u4HvNhoWlnWlIWWRPjNw80_FL1_CQNq0rZvn7BkL1m7zLymBmI1", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116604684195918553212\">NomNomFables</a>"] },
            { photoReference: "AWCwydjkDNHtjFXmsp6vEQ3LNyvGcdHB_0ba2oPKT2HqtfBT4WS7s8zm6iCVuBA6_l3xWLHnDSgbcxJuy76wmenQ4DJ_CpMjbU_cwAsKl3tDl5tx7m9--VuaJRJbHxBlA200QyRC4yYAS7uLi_P4XAJdRt8hBu83o_3JlhIa68aF2aMU_nscqn80RG0demIzbFCRZt05sHdi0SHpKqBzygoMZsCLK91iIiwav8Sy_69dpmNoKCgdoftDeyZwncyvVOXzW5ZwM3oCkMdHV_qPBvTFNOpjO5TmRAj0n4O-LvotM9YVjvKHqulmUb2aGjdm1Y3O6bhB5AhgL0OS-r-VeuuVZxFx57ZW05sQHiRlLKzQMsKht_Qftx_F19qOf0GcXSHooHWx6HsXgkDqi4bk5caq2YMDxOICb6OYdRKlV0kEqxvHqVjaEWPxBN2uGFosfUjN", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110827443996369337051\">WEI Mark</a>"] }
        ],
        summary: "많은 방문객이 인정한 높은 평점의 양식 전문점",
        updatedAt: "2026-08-14",
        highlights: ["4.9점의 높은 평점", "2만 건 이상의 방대한 리뷰"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 5:00; 화요일: 오전 11:00 ~ 오전 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.goodbites.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9247451611595551638", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%BF+%EB%B0%94%EC%9D%B4%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "로소 비노": {
        photos: [],
        placeId: "ChIJ9ffW4J0Z2jER6WDXWw1aM38",
        placePhotos: [
            { photoReference: "AWCwydjWzC5ZnxYs27xrs1OKIUoJpfWx1iDW48bW3cVxqSlvayqNQueOm5TSCsv-SAR-J84VN-5WnAckvlS59wqN27vAGd8bf2iQ4wA1ypl_GIaTftfv8WJFRKFu24T2x3StuyJ6J1gKzH2_JEuUtJxxszlUSW19dwm-zAv0R3J-V6kBo-5dUENaWPgHP3mQESxK5wkI2Zk09dNfes9_iydKc-eQ40ntyNhulxRTgsFGJSgb1aOVTbcNC7XJM9iJdkGy33gTYJaF3WRFJ3dwPgVeO_w6BRT2PsHIvanIBdv8BNEWhjwgZzWQ8qCI17oQcufNUocCIrACkLhTY2TNr5zIfnfS-UwAn9w5AzDOkqw6pS-zZNolScyzSHCXWM9EHk_CtTtIFMeWo3f06ttvmWdjt0PSUXZMC57ROHimcPySceKXH0u5fWuOuwsQSSWy8GGs", width: 4000, height: 2667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103464578598480059866\">Rosso Vino</a>"] },
            { photoReference: "AWCwydg6NoJ_N9d94w9sG6Oa9Lbv-EO922IjOigDZA3Zuex1z9q7v0uI0OYNQSXp0Uff4lmu4dTIUFx5Lo0x1bQUE-BRXSVccWzFG8LY6SeYCKkHOgwi8botpiwhSMrocKhtBGXpSivBp19ioi4ULqRwkJi6ZYUqfZ2X2_81gSDxZuR2c-_1wy_kt1XbvfoiHCjDpln5rZ02NwlrPbjboyEiMhi5dL7zw_Vprk0jQ5tUJzbQzz0lWD0CGw7YigAf3N4fiJUnxopjVobhIZPTMpMjJhTRCzP-K9THDBknxzoUaDoPIdHUq88znObvDpl42FQPyxAYz9Hbmva2vHpjBcoGcloCo-WBiIobFvvwm45qtqICn6H3HQgtpGVj7FEQxBXX5_ratDlkVfVMh-z6r7OmsDXAoyi2DnWLs4YRJP583dw5yULRLbgjC6Sm2hZ81bbZ", width: 4000, height: 2925, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103464578598480059866\">Rosso Vino</a>"] },
            { photoReference: "AWCwydjoDrzphz31G0dg35u1uOFbcsDTQwxswiggJAhoyCd8c3TuzZlooE7vqyhFDuJ4A_KSdjNEngbnRTDpYHKsZbeszeDPikRhY0LzwwxTzrqw9cA9t6GhwKGyOAB2DRJYvQ80AESeOoa6iWivtxs5GrJGonvlwCvQ_0AItvY55Gcr55_SojBV4Ljbx2qnJnQ_aClUFRBGJ7ge9WWPnlkSv50PpFTZ7Tt9NGryfh3bCsV8XorE5YFoj0GHuwxwn1JGFvDKCfXgg24SHMxNZNrO2K25SGhFKQpGCG-XacK7kNaSjIF2HAThrTclP8C8BCUtgKahWT6EyO67wz29p_m7yfmsmhwsuVKxB7dyqD_cxBWuVpkWxsDlWQGzLyTIMuBLcAPAs7pCci4qSfv1vcfp4EMJUS15WHCM9rKLJrbwFAS8hmtR3ocBF_LkFYKHwZ5h", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102123973784118768514\">Anson Ng</a>"] },
            { photoReference: "AWCwydjLxRF4RVUaGAwBvPspkQrexIg5OKwkF9wgyO85iPM0FzsIpKKN_ih019eia64QrnhXhRVqrVMv962p4P9zUypv6OgIUTODi1vfxuIV3xKwugbFVNOAqeWywcweM-gRxuGAsOg6PCWNAxHN2ORZPMN8TsUtI3ni5jizRTNjXAcgjYSFKCjjaOEGm86R0DAhwTd8MstAazL9LoRPSbr_soDXxSXrd8H2tH20VIcRdq76f3HbOLQcQm2MxNDAL8HbTz7U0xOL3E90nzCVMbx1hqUFPnQENSeDN3ioXmHnxjsbiGJx1HSyEZhlQsFecIrmbKuujvoah6PfKNUVvG3rGho_XH-YTIBaMp0seQkmqm-5J9vOAOdlSjFOGW0WNqeea-3KdxStQyWrmMJfYq5g7O0LzWW4I4C2HUoq8HgJ_i98wxnT0PRmJ1ZbNw8aaA", width: 1371, height: 1170, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103464578598480059866\">Rosso Vino</a>"] },
            { photoReference: "AWCwydhdw2HY0m0_f0BskpHrhikeAEDaQfAgzi8g7xssYDYbU-CAsBZdCW50pH7C7vdkD8rHg6N7HMZhpW5AFu5nXdc9BPHzjs835cQvWrwrQgQUYLvP4cYAOYsXECFyrEUlXLpQ_AgrNVnJbiMFPhFZYsK-NMKyYQfQn1_82ryXfDWP7zZl4OhjYXlMyL_hCWP1ocQrNiqjcyORP-vbkTE_EeEPzcxStmaDF8WlKguC76I1eCQqTWD-rzPhPb94tAc-6_z_-_Qbhfw7PRHnLeVZ9tiLSvwxn7lj35D-0eksHMONFmfxvlvmPNQZvHBK1KvfSbyz630BZDBKCaKZfzrF5ldhZOjuk31RZjAopM1xaO6zVmSzJsk5NOl7bAynFkRoS4VCDBCa3Md_elT9vVLbNWoup1HXVvHVWGsVAwVKTiPJhzqmRiByoLxZAQXSpo9h", width: 3900, height: 2925, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103464578598480059866\">Rosso Vino</a>"] }
        ],
        summary: "높은 평점과 친절한 서비스를 자랑하는 정통 이탈리안 레스토랑",
        updatedAt: "2026-08-14",
        highlights: ["나폴리 스타일의 정통 피자", "훌륭한 리조또와 티라미수", "친절한 서비스와 환대"],
        tips: ["식사 후 제공되는 리몬첼로를 즐겨보세요", "메뉴 선택 시 직원의 추천을 활용하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리안 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.rossovinosingapore.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9165768680051007721", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%86%8C+%EB%B9%84%EB%85%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "조쉬 그릴": {
        photos: [],
        placeId: "ChIJ_QBL684Z2jERZuYSd844p-4",
        placePhotos: [
            { photoReference: "AWCwydieyhthPQduvxngWVdM_kbhdh2ICRjJkwci8uNhseGRuWeoEJZANJsCLf_3F9KTswrRxD6q4NcgnS4oTJtLMnyX15BYwLMIVPEZcaP9tzLyqmqjfG-D_uAXXkq6v_Tms1ZoZwyo3S3BkeuTFctvYGL6b_kiXLIEC3g5WowQfzu5YeXcKn_1tDyj9GjjA_33T_Gp7Egjzuxqy9NL-LgwjPxsvyQKva3NPVJFJLonIddy5RcForPe5qFF1zGi4xfIDLqKTDqHg_c0KpMWjw6IdUTfnuDNDa8Z8IDzhElB4IeTuOiuQbNlhGm34R2cKuY0RD0VmeCQAevPx142B_JLOvOwr4iJJc_DZ6WVdfAFtd-bkHg-7jJ9eb9sGQBnvWkiAjXOLcWXhTvGIhxvzaqNph6hhDTw9bevOQj-iXlgS4k", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116579904549113774042\">Josh&#39;s Grill</a>"] },
            { photoReference: "AWCwydi7z_G0QHtQIh7l5ByHLRDJzuEkoUJoCMgaKNqnNRcccS2pjcmPRI4qvWn14gz7IhsM_Z8nuQus1zgst66TMvqI5S7bkr3fEbv5nh7JP5YXwBSSveDy96tIVNm_a47-MdtkUGvjBFxe0LMAk9RQOxLu-jYQV7nqADpI9M36By1uta40lVVDITCNT9jmp-Iv6uzWXIIK9GnvygSRDsMNJddB6jmzllDZ-FopSfqtaljaR_EV0sK2ExUzO1F1D8WL4FYylRQgtfqdTC-A1wtjYoDW2toSb3UTunYgVkQc-r8AEs9KIW2YN_Y9YPIgSCollNEVvRB6i51cuhT8PmemYrVzf13_VQSjI22hHYzSR3uv3eOKFQYivAfSJe7Pc1g05tspNKxU82pApvq1euKnxecOqXqfsRVhB_LVQkm0jKxchcrx", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116579904549113774042\">Josh&#39;s Grill</a>"] },
            { photoReference: "AWCwydilCNxHzjFAhXWb6b2nnxPeKmqiUyVXB8T-krszqKYpIf14Unft0cxL31e0UvSlPbIw57oVHdyHPBl2G3TVGO9Zs9EvEaYRaBxoxgxT7r8pTvNetyVVrDNq4C0WTF5bdQcbIRKXP06CkbLN-UiaPF4j0akf9wWOpkS8fHbujKVts8rOjhIlp5QMIUKfj294Y7cwZx6hEmHXQd2j14XDPdZNUtYYOv4CFCM7Arz6Vjet8OBvre68sTwXwFzq6ukoJ-Yc1r41sQXWUfzp_ZHR_h2OxrNMvn0CQuBHXrZ73bdEGs6z-fsey7vSMZzxXDhycwJRNIaMbHkXO1YW0P4xRjC1WYHysvj7ChYDtd6pGsHN2sCtibOakgSbi_t2D94iBvodJ31UHCZ7fCgCF7yj7_CnbasTFVsypAcFjbrA5phHpHI9NUYZ5Sfe0knI5iBI", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112140728043522095864\">Eliz Tan</a>"] },
            { photoReference: "AWCwydiUIYPL8B25075DHjbeWBOo-4anMv0GM96YEpbHEtBQ1w0BrKwBOD5Klpe8briVuSdU7kIh-V2fcmpU9hRjP8VkJY9zHsVhDyEbBBHNGdGeuz2oEtFYz3P6SJ8F-8n-DFdmD2ZPVZuhehdD1Ov8COylBEb6YOYlWAk9Xq7q3pySnqNaFodwQ8SS-BsJwkDReqAOfPiF3dfWZbd5YPV2HgHCysEeRxF1bLSNUrQDyV5v2EjNd3pTkB9iQv0uO0dzluoOdhTJvUBwnvJpvxQkiLmO7zlIGcnHSMcGKyBpPZ74OeeXe9hl-8V23qeoJBcNjYfe6_FpWrypfVlemsD5cSf58X5JXtEKsFbBOEmjfalcySLc6o4b3-6D72JwXwRr5QoDt2rJ_SXDGPnJJYfShhUgMhttkFU6GLOrZ6q8iiGThnRGgVHIPbAZSlzaakrl", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113406838157524809179\">Yng Chang</a>"] },
            { photoReference: "AWCwydj_GooI3cTjSPS7FkQ3YVo_ikgyq4aRsnhHY7FwCx-RJHMBlnKmxTI71_g2a0onmacyUKLhSyPOPQDsVkiKOt3kUZHkpvlVhgKYdkfmti6i-Z4pH4Gc5EkMgQG3xT7xiGMsfQiqUse2oNmxqep1CiBdmBhAcvnMX4GhUhqFYlym-11CEtvp4FaZd1S8s4jyLcCWwyfkBKYDXG7U2qwKF__hkSDO0CcGSC6h-1AHtwj5mNljWqN_q10FpOtb6-D5sjr0UARStBpGFbNNiFOVxdHR7jlf0oJBHinQ_ebrZxbVnoecF8xmWzaA89U-jUMkzf5FlDfNZ8hge1mZXz0RaUwB5UYex9jO-5YFIcvSKNmrH-mGvlDe0G0LgVhz5H-qB1BtZ_42IHM_ViYPfWMcmDsAIhWQrDxqV5TywN2pjCsFPWM2AH24SKNygoISeg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100661430290790015043\">JT</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 검증된 양식 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["훌륭한 음식 맛", "친절하고 신속한 서비스"],
        tips: ["직원의 세심한 서비스가 돋보입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.minorfoodsingapore.com/brands/joshs-grill/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17196776161549674086", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A1%B0%EC%89%AC+%EA%B7%B8%EB%A6%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "YC 다이닝 & 바": {
        photos: [],
        placeId: "ChIJ487Dp2oR2jERTV1zM0iJNYo",
        placePhotos: [
            { photoReference: "AWCwydjNGXLPSbmilnDoYyU5bQhHcICiq63GvyIxwt14XxZsp15YZZvAGwrEuXre_hftI6-xgTBP8tqxuUTTF0qSJYYDVkk2Ci_9miEffMsD_xRmcKQWX2WZ5gk1M84_OI2Py21j13Q-7xikOSDiDSttHM7EylESicCGdRoazjqV2tv0NdAfMa0KHT184n8dYNNShPUVpbsbFLERpJqXhsfJSJvh2rI85ElJI7ZYm6GH2zCuswI8oxd_4mEgPdas7OkUcr28RIVNh8lPbkFtkCzseAUxFpnBiCzW-f9FuzS9OUNCrO6OIy86QR9drgJZxlI8N1_XU-nLJy8K13tgsfctUsKFIiVixoSveMnG0yEGXAXhoSNx-hamwPN8aYpclV3ZZob2hNgAfLvFvrBQ8RLexnpivrtWbc3D6Gb16JflJBM-Dw", width: 1748, height: 1078, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116450154670107491679\">YC Dining &amp; Bar | Western Restaurant Bar</a>"] },
            { photoReference: "AWCwydiWt6WRpg-RXHlWoqfVu7NBdyzuztvgSjnHRdxrTeRMfXlQ0IY8zVKgG_wALr_LxFr8FIJOg09DZLs5qqc1NifBSVPyWbFsSvIqQsVDdWOXluv6Tcak6M9-UgwBfowWnr5wtH3W4_HYuPXYGy1fcp05EKZ5wEN5jCADeZv5_ujYVJuaShpGpyOBN_dlDTKK04EjzaXcU290Cr3mskUMRnufYnnHBRYt-83RZb8tH1etJz26kTTRy0gbEknIU3lPGvJPU9nbfKqcPW6nymDyrh3gJ2LD3lnfzUIwb_K_PdH4mWIZqd4uktGVqRP-s7a--KvZZV47AcveyF6a2tMGskr_jZAI93C_y3ZozOZrXMS4SpsAf51JR90bJqo7ZVYYmNdhz_PwUIOaSWBwN3p356UbaQMebXqlvZmGcWXQjSg4NvT4X_dA_1pBTHKKwtrf", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107570982339557952657\">Selvagnanam Monesha</a>"] },
            { photoReference: "AWCwydgzeHFdiY4cfsumW8Nb_Muuy1RXOaCGLK7HdMEmwCAop9KLPXyZMptD9QtRQqqlq3sKuXpwRIm_cb57I9hanykBhobhjwbVA915yvgqUFBE9fm9Nk5e8UXFoQwwEce2X7jOCY08MC6uJdKgSnTsr0jdBmWyJiH_f1aVerPpp0CgcmqoFcCNmEvdxRko9roxVahzfXS9PRWCGCPW9NuBlZgxwdMkR9Q3isnNXKJoFEjbsD3Fh2LMWJjUCm4B2-mWAvmDo06gcHt-eRf2IKoC5xlWkrWEiqLJeM9PEkXnHfI2rHfoNqAN6Cb4xq7DwMcIcP4pRSjo3CpORT7WKbF8JezdOPiveamNkaM1dLM4k83sdK9IxfTxPMT4XfUzRvBDoBXUnQtBt8Qn3a2gdtEG2dMYForeWk4S0blG2CQJoGnqZw", width: 1024, height: 683, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116450154670107491679\">YC Dining &amp; Bar | Western Restaurant Bar</a>"] },
            { photoReference: "AWCwydgrLXykry1PgIaeG5grwErKTwH_NHx92lJ0g_y4ndgH8Lg3n11ew-SDtpAqqLntjc0kFRse8htp_FS7xbX27NE6uEgqysRg9q__13iDY4WxxdoRw_-DnFiZt8qAp9VHVuNZgefNgG-Yylft_9YDxQPxT-M3qZCby2-AvbSma5G3HVhS6ny7pUISBAyvPDczWSobUdyqXZgF0vK8LGW3vr2lmEffVeYHgXaSEfSA7QxzihJmgyIAFGEMfq1dOtOQ1PsaPWN69dvvlECCUn3b1qjECfSeffvPQpuCYskls8nw12jfM5DtuDmGAqF47g6O1eXY6wZNolqdG0Qb4uT7Isow2kRfEuWDIQXsOuK6S0qjv1i7os1-KQdgVLrkfFGmJLx20Z3NsDkPWd2uysdttolF2_Gknbua8OtdNcJrbIG_SRfa5qBItu-Qz8vO9phq", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116067066866992352879\">Mikey</a>"] },
            { photoReference: "AWCwydjOOYJzNuv2OAopDZOtuCllqYsapS8gD8M4_xtwlPCE-vpK8pHrCVTTb0yTMLvJdy6FXN4RnOFTtf7xBt3wGQkYfZQw1c7c4DVMJebVanRuUU99gQY8cd_dzYOrVP-UaO5cbtQKk-TqZGaeaaLgxtMYaVJEcWWOfCjPIrDGy-k4BFeZaCZv5-OVhQG_yAkwaCAplpSaDAYqJBvP-abqmDD-9-DGRMhqupS2XOL77kGmuq6HQkIRpU4aKApbxs0eljKiqvfyoBeaP4gteBa6wGgkvjdGLIZI2uI-IGFVKKdlGMvqmP7yN_B-lQJQrF-MWapslAcfR--erHWKUxV_gPaxBfCh32jtdiWYZ-tQ2ng0rCQOEN-N22I-6eioOGPjOD26B6whjE0S3PBnb96zY1yV69t07tP2KfgoPvRSUUw6fQUP3ftpQYSqv1EYBROU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107570982339557952657\">Selvagnanam Monesha</a>"] }
        ],
        summary: "맛있는 음식과 넉넉한 양을 자랑하는 가성비 좋은 양식 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["버팔로 윙", "치즈버거"],
        tips: ["해피아워 딜을 활용해 보세요", "피자도 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ycdiningandbar.info/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9959017094193569101", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=YC+%EB%8B%A4%EC%9D%B4%EB%8B%9D+%26+%EB%B0%94+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "레이지 라이자드": {
        photos: [],
        placeId: "ChIJwRt5Z9UR2jERlx4tm6NgfUQ",
        placePhotos: [
            { photoReference: "AWCwydiVI4jluGO5Xa42Vi1phpcwobMii_RyXJch6RT34soRWEaKsyfSwsybi5JUfYwYSgzMXi1T7tK2p73QU3hZft13aBlW9MvR-_0nkOuWTnwRipWmZ_nb62IBohozBQmKcWgr1Rs9RXcVxaYsMahrHiqKj06izgPPTS0xp6fMqakpWbIZ6EE-7AQPLwSpNTgLt3jiytD9DeBdT1DQzCDrAaznPszrs0Q7a-Hba9FBxG5ZCSw2WtpO_eSxD64PVsZDuLOSaZfzIqyerjeHLuNcZ4Js8oJ6z0d_A9PpBRjKeQropAfnwLIeM3TVH7fITI_m3sxH1EKA4CvJ0oRmg9n9E3GO5VM464lKkfs1d8FlrQAI37MrIdmw5bho-6Dh9rkhYD7UrmWFcHtKyL_WlOlyz1YNOMqaUuArEOPV207NJoEqu-I3Uk2YTFHJI6zWQuxf", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105837276525789991692\">Carine Attan</a>"] },
            { photoReference: "AWCwydhNkswJ0_R4nlON_3iF1F8rNAR2iZrVrAcD_QykNCxRkPh6wfTomU-balqbCz1If-e0tFU_eSuDDPGxaGPdplzVUT3FBAgCrQWf0KTwXE9dSCitIAYjDy0DOv4bnNDKXvRPWvYt062otvBqPN3YYsZGgRcz8vo_a9W4zFJwN7Jgbui6rs6CyBxPQI1MnLdnLvsgtNPTUx5MiyNP62_dWcWY1FDHZZFQnlHos2r81BTQ8PnYf9fAQ28-aXoPC8sZomxoqgWvi7m8MfGIgVScT-vZUtK_USRaPHNNuhBcfRV4TW3ai21A2GgkM0oTSjhEiB6bLjp0N5SqRGWiN1NjB3sVXq-KhVyZyqpxqlq2kTgbx2S89UnCW2eCAtAzOfOrKwrr9nXyEbpFrHwsxhVcvPFw2KXjtqs-NABgYUTtWXwxyhXZ", width: 1280, height: 958, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115692086432270307579\">Lazy Lizard</a>"] },
            { photoReference: "AWCwydjb1ovtZM4Y5TnbJq_LcOH8sxkJXikCBHTu5UzpOCAb1n5hIglt8u4O2Fn91Y57Sgjky_i8NR5F39MniCp88sjtQXjeRiZnfX2SwJcQNpm615qchw6pT727hKYP1dsc3mFvC_bHVM6DuhOUAs2MhHL0mhj9jXXevsXagJa1u6MA7wkSwyUljUcWwiPYcRlljgo060E1sL7ix95BWxofEvVGyhk5IMgaM8cyuKaEDEnJKursQQwePkR1fIDYuJYrTNWydcz2aKoNur5rx6_nwPf9jE0spW8DrR6bdoQTPGvbkq4ngosZx7oq0_SHUC805mlIsb_ll_Q-azNZ2LWpfcmbyQyT7m_tqdl_lAUD8Q2R7F8119Lny0xddm7D6wyPfloUfwrshIuTZw-8lj1B4Iv_LaLPkR9ZD90h_0xu7GoxGC-MtyfWZNccPms_K177", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115002035442512416703\">Joanne</a>"] },
            { photoReference: "AWCwydjtsdYsb9_-qSMwgLyAdk8cwq8vLmoQ9yaTOFbzTg3Cwv0I1Wvv7No48aQRCcZK0zow_ZxsXKFRmEAP7YXpiKP4surY6lpO52fGQ9UDWRhqGToM4fvuaEar8eI-cGnI4zuPoQ7ZureuBEAKBw0EI81i0kgiQrcC0hqm3jM1NGxky9zMjS2rGlISqRnEPPJv_r3sNrDj8fF4DmuHjr61jfmswmbWjkRMMMtXDQGnvOXIhHkcApsZupBb3X3M4fkHqYkFUfb7VO0jcHTbUP_cLd5DeuQ5TTF7ohKJXeO3mYfRbPIKNackMMLN3Ob6MexSyhkCO5ng0HU4tS6gB73MsY1Ibp4gF0c3_aAZmiWHMhoT5Ud22jD1GTpP6gnMbaWAA7kCRMXnS2hBsfxm3cLFxurx2Q42xYMN2ATIVd3dAuSPhz2LikG6s9k27Msu-5PA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114129509289608532976\">fannie wang</a>"] },
            { photoReference: "AWCwydih0V0AVc__nWn4lJ4rPBAkTtW46aCVy6JtbDXXXlpiH4-gY6_j4FUJT097UbzgNsjixa-K7gQDbgsnonEavHSwM_GEg8SPo_CVnekvDvkjOOGPnrn9-J-8ig5iew9KVxHdQm0XeUlQd_ywFw8KcbnVwGStcjvkIXnV1UZY2lQlRoe3yjQHM-oFHgzuzCi1RHzwFx2M5eV4GkqacYM2FLZ3KYHcMs_JlCr81W6AwDgIPuDRV2qFkBEnGCzqHoevOj1CGwHIYkNwk0AHiV_qUZ13Tq2gwrxhqHQj2U26LYscc82yBjP3ranxo2T1NmechEQeSFKkLbBBwbjMW_ZheC1aObS-6nX_IRmhIcuHun-H8NqPrgwMfJ7yJwpbWdOVcyCNKmlNaiRwerytaEMZN3FdTJg0eA8StHZDlDH5UuMzINlTvvyyNyuwVIX0tEia", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104394402289443270665\">ThorPiteh Gaming</a>"] }
        ],
        summary: "음식과 서비스 모두 만족도가 높은 추천 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["훌륭한 음식 맛", "최고의 서비스", "평온한 분위기"],
        tips: ["조용한 분위기에서 식사를 즐기기에 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~9:30; 화요일: 오후 12:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lazylizard.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4935207022467292823", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EC%9D%B4%EC%A7%80+%EB%9D%BC%EC%9D%B4%EC%9E%90%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "점보 씨푸드 - ION 오차드": {
        photos: [],
        placeId: "ChIJLdePZpAZ2jERnKQLaKbaVd4",
        placePhotos: [
            { photoReference: "AWCwydi78tJVadmvXkY1INibVzSNJTkwpsyWRdblKisr--h0PS8OHKc8qYFxv6Lvcg96s-2lHAOV3ca3ghaUCpRUXxRwbAACBy03mq7hHWFaDUqXmG_kxxZ64whj3G3HxGgBvdxL5OdUGOyIYjzivrKqE_mm5d7CPyXVY7rwJ9zmNE8X-LvvNOvFF32ePmgoXHGfpqN1y8rEZmQhsrooJPxFwfXEknJnK8zFC9MrVIei-0luXaRLyejRFxXsFPDbCN6G0MYzNpf5ddwPwhke73_-HYELahcs3OC-5XyGXyHt6fqgAZqaX0Lk86Yf2_88LhaeyymidarzUW0N1AzUy8kmrQD5FqW8lG40iWvJhweRE8om-69iIpu8leVxTCI7VWJFtP4vMFZmrzMK21HNHKRpRSemTxXGhLTZs1SMHlUF44Dj6LAT18mdyZ8OAJYAfwcZ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107290766275642131914\">JUMBO Seafood - ION Orchard</a>"] },
            { photoReference: "AWCwydg9TCRGLIU8Fcrn6C9sKni6YXZIr4NxehZ9p0mNZAq8N-L_7KT08jSJUTg8GJm6n_NGrEJBfWqv_7c33Jaw8vklZZOAu7XxBUK-R46vUnzc2ZvC-kZbhzwMpv_RPZXuRK4t3EGbu9GpEeTMlsE_5nl-wZ1_CQSHsS_57ex7Cow5oPaq26Hkl7hGpIehRTdzGLp4u7nF1GYdZVWGaUOKpTukoQtqSp4k7DUVpWQFgZzwHYRkGxCU9ZKnWcroWXgxwLrJuir29GiVMFc6anfjly6_USL89PwARwpAg3AgRt-a2KIQg7xnuUiRvPk-aabBIY0Xbk07pxPq_KmkvaLLcZSvbILAIsumRcXtY3ApnQbHs95Lax2RuBKStQkz5Ex-9dujsglAncYIwFGd1dUlH2LqavpHEOISldfLgZby3gdDPHr3", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108669249435086670410\">Alan Chang</a>"] },
            { photoReference: "AWCwydgTGdlUBKCcC_mzTii_PO3K9BC_c1AeZPhjVOCmmNW2nHaD72CyWQJIH3wS7VJ9kbBS3eOaMQo3Z7vc37zSOvRxynZFMjXeFqInceddW_kOvbECXW89tS0Ij6PKYZcdQ1EurOJFRFuC0MedT8aGrmcwynw8LDEDr22-75-73ccUPe-MifBpRhY9Wtlbor5WtvqyZCq7LHEfji3LWnIlCSt6aQV9bw10bYsZTrg07VyvYAjf50r3CxFxMoHiPVD_HcwewtkXFKKWFC38rtV1UNKlB0wPfHBpI0R-oFDmBCztVPhJ9J8rWoWinxS5eYgLJRmn60MJD3o2YkgWi1OjCaAhKTUrTkf1e4RcyrE0BHo8LSNacAIpRUABSpO-KYTVjLQcLuKTFnMpyrfBdI7DhLatTYOswrSQX2-DXVRYir5EMiD1I8i9A2kBOjnebCji", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117379950882568014047\">H.C Shin</a>"] },
            { photoReference: "AWCwydiI_yKFIv5y4lGXJ5EOmax6O8o6TFiq5JUb4Df9oqvcWEkGLLWZkeocCpUtGeqAWxmvD3o8XzIjagSPs44TljEBemD_jGlSxnBTFCUNrSXzMTXHogfQCRXJIKLagYt_ZbEnSHLUEcQf7hWlhqvxnsJ_RPj8_1ljCYdKbZlxR0p9o34DNEzySS8AvdP8B6Gw3WM2bMso80FYAjL2QRF7RynCQD6__LI4pEnkBR9GTVLlMfbdDzU7uypgsoKg5mK99aD9mH1xdxSNX0GJdQgSKoIvree8uK5UZAroGVoG-JjO3DI4PFS5QjxEDfxdcM15KN1iZ-SXUCqzddBH74aE-P6XEV-00HKg4RC2XuwXh994b5yhRbaoT32fSgC6Rce1VtBX33UWAqEFNmKJTRZUlAZLzbGDMHdV54FBhE7JP-S2VpW3-PSQNvnjXfCKrJaz", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110878645398655884987\">Daniel Wang</a>"] },
            { photoReference: "AWCwydhOTZvliPuSB8qtiLy-zIXmW0UfPc75Mrvfb0BWFzvAJp3Vx52QPwAldt_PTCd5sQGcdZY9Cb4eqjLzDjY80ZUfz9v3lzWsB1zYI8OA_hkFvkbWkDPJIDd9ML98vCMnag2ml1oO9_BW0B0HdYD2G3lQqToDZZTBYcPGHLv08-tS1BaukIO5R6fkoScGMlYs3zWKPOuhBTHa0-5QMVhG_0RICnYg7ASyqOVZGIKCbVrBBkQHH52G2V6PTM0dwG1GSHMZgz8hdP3bJYgy6t1zg7IHJoE-M5B4QMzjkUt_8BWDDgiPZKy1AiP5JclnUsnoV92T11DLTg3KHQkwz_hLvRyCyRV0djcz-qxrJeYCdkAsiGFM66rN2FV3nJUQKBSmxpPXeag6Vjw2k_tLrNSNesTCEoKRwEO_votcVqyvBQ5zNgpdhWssyWBfI_r233bP", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101868562596766086726\">Steny Sebastian</a>"] }
        ],
        summary: "훌륭한 서비스와 맛있는 음식을 제공하는 싱가포르 해산물 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["4.8점의 높은 평점", "11,695건의 방대한 리뷰", "신속하고 친절한 서비스"],
        tips: ["맛있는 음식과 훌륭한 서비스를 경험해보세요", "신속한 서비스를 제공하는 곳입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.jumboseafood.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16020951657685427356", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%90%EB%B3%B4+%EC%94%A8%ED%91%B8%EB%93%9C+-+ION+%EC%98%A4%EC%B0%A8%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 보일러 @ 에스플러네이드": {
        photos: [],
        placeId: "ChIJ9X8LcVIX2jERg_IH7XlJhDM",
        placePhotos: [
            { photoReference: "AWCwydjmrlHGE8r1O0yTmtKcPW59Jg584zTLeh49WfF0fqw6GeNGDMAr9ECRNVFHePCBfuv2-Loq71NShI3meAX7HHj1OodGtutSSolh0HnPAIF3SQqK46zdFElmp71rBlwO5nr63idse2JXR1fGdbwItb1nlfbs2OO4NsjDjHnC5_vKSga_xcDak1OxB32LzEizUS8g7kdKPDzIOnU8ZJzomK5fyenxbz7Zgs83Lp6fG7vPGXBQakd1DbBXmnav4eHUKrXfK2hbzCgULc4VkL8cAi-uCj3hcxp4JS0KLt_RPRb1j1xAh9gB4kPwDXFCuZmBaYmLsomM9oYJ71o3sc13Xq3HiXUO6-1pKCzm4C88pOe-RiOXAakWNahmnaZWC9KnrtZP9EysyC96oXvYQjgohkcSUDAuugQEc0mCAYkd0ztgng", width: 739, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101698342164774915390\">The BOILER @ Esplanade | Crabs &amp; Lobsters</a>"] },
            { photoReference: "AWCwydgPn7H5FwGg0-dmwXU_0mwB9YD9Lo7VedMWCRmQzO3Of98hghSyI7dfKGrWjKAurAkCR_MSbr2lUCr2sn0MsW_TOM3owFjV0btpNVje89vQYoU63h5zNdAFGdo4YDghntY2MxX9inC3ipXbuATXRRQJdMxtwaRaLFyZosn9VUzdJJRchzCih953I6mHFcp2-_vXImNn9JrJvcgzejMaYvW_Mo-CGPnWjpwelGcsxtu2R5HeLGKKlpC0yk5AZsaqzG2sewWetoxmnPTFth0V_549wQAAePkRmxVzP2zSlsav5vD-XQUCQvrsJZNh9bvvnvz3oHs-DzBqWYDxuOj4QtEsVh7LqNuMqIcj1vYtezUIITOkjIscqmpSM4rHDLf3wEnZPtWhRRSIkD0MTubNJ0dFAnC36ZzxAZhP00UgUyhUdg", width: 567, height: 567, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101698342164774915390\">The BOILER @ Esplanade | Crabs &amp; Lobsters</a>"] },
            { photoReference: "AWCwydhwxiX4AUYAwyFE9ZV1RwuwwsXSOVHr_YwdZ2m_muD2sGqW0wOA81sTmL9JcB9GVU46R8vg5aVYf08KILHhTgvHhnx4pE2ppUTYuNCTE54l-iOrq6hlLzPJEasJma-gIIAwiABrDt2iGXrcQPv9zU3MtwN5H4wh4GnSH2LVZVDpRmcVS1qJ8rSKxthpK59voZB5KDuJKspXzf_GW7mEfb49aVEirRCPCi2-nW4AiiRpH31Fvmqua_QHDLOUCaYi0WqxZ2rxhoc_i0nZ0u0uNadOHMqsi00U9IRcpLT1TTO03iFeKEkAaPKCcSbeOtQZgmJzhM7Ab2F8wk2xbCBWFIz2s1h0XqeUZ_-LmTEKdo25sC5pXI4vjpYCV6AbciODmD36_STKWEWaIM6g_fwvOl_QeVXz49WQrkkN8kDF3kAxgHNzczIMHDZH2K5UF7r1", width: 2080, height: 1171, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114855640767106551411\">Dongju KA</a>"] },
            { photoReference: "AWCwydhEDMeyX7S6M3m2ybhZR0jRe61KVXZBKWEywsyySjmW4EG-i9-m7R7QdkkcLQa1mukjHNvLDzYjjx7qjACqMJjRm2BSPb1CB3-Aw6qrWOuWpU78Led4Jc-JBP2kaz3lEFTPzuApddmAHO8i0XVTTTjof97TpsrQKAGXZdKQ1MM4N5m8GWaZ8PFEVm6YZ0yARRp_c1_KurnHL-dq1UjS0_KIARoUFALeSgo_rUKewcm9QqrFDydqyyBaP8fMuWzKU-zrsqmjE2LOklwN9OETcQ-WaqtKPzX9lVyvMGOxmfn6W1_mxUmTGzVZlYW4T1wPznuIPQJAxL4SsER1L_YlRhfuFqhryWi6VpV3O3_NY8J4KU25_MdZdUbdsUAoG-h9qx4RQgorX_Ny9b2NiWHeH_f2C5BJaMH1_KYM8DYPw2zp91eD5OpC-EpyrAAGVrH0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116909144565959089959\">Clare Lee</a>"] },
            { photoReference: "AWCwydjxAw3fUblrEEtaNUc30psX4qVOPX12BDn58KE02s_fuOCxEemtkx7GApDXtcvzQ6zBzRa5G4BNm5uK_6TeiRHbbwHLbsj3e7THO6JzpKRhzJ83cJ-mj9aEH4dMsNw5-rI8MXlYl9r8AzME6NFPqNy3mV67H64BbS2ociWhREyAUERzU0ACiVKRCY0oOWyMEUNPKWA5iCAG2MWHEaWmPkUu5UraSt5oNB8JwEnQGFcq7pD42B0yyHbS_UnSFBRi4nYNYMFmEuU9NJfja2aTstj71WThniG7oD4Ijw9W5u-eOlaYGxKtX6U9wd1HOSCJKgjwM1Fae6xzW3VBp6ixnAbc4Tlo_uwJhC3S2DC9yiYqp8bBkx34usJhQu1IXMtBXuTS72k-aJGCox-1GhCPcFcLVJBJgG1AbfdHELLkC5JtR2AJp5TBqG4_OeWhYuXZ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104335712924858397806\">Timothy Pettine</a>"] }
        ],
        summary: "6,000건 이상의 리뷰가 증명하는 싱가포르 최고의 게 요리 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["싱가포르 최고의 게 요리", "친절한 서비스"],
        tips: ["방문 전 영업시간 확인 필수"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "게 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.theboiler.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3712172780876722819", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B3%B4%EC%9D%BC%EB%9F%AC+%40+%EC%97%90%EC%8A%A4%ED%94%8C%EB%9F%AC%EB%84%A4%EC%9D%B4%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 보일러 @ 부나 비스타": {
        photos: [],
        placeId: "ChIJB88N2Y0X2jERLZx28Uk1rEU",
        placePhotos: [
            { photoReference: "AWCwydir2fmTthMaw7tx_is5nOgv0jjCdIuvvh1ntIBIxWTXG6s-eEYWcA0XDo4X7FHEyNy6K834k3iQluzdOMjPvwXimEAzmb3BIRfa3nAVAqP-r6B1E4Wl3YbEZ6EenEfIrz2b7LwKwf_Qbnz2VdxqTrzJZb1JM6QF32rwycuoeZT1h4QO3UZN8DpCiyCpCh08zFyOWTIArdtjFL29x9sHSEPMVCnODj9U2o0zNbAi8wX9g3BvWUWLkU8e8SmOAI-8TUCfNFJn7rqqHL9CrIQSiCc0B0fOfZ1WygBlSDbFZ6s92I5ndhRrFvNjVjJmFd1GThPUPuYSmzT8XmGwyfweVZ3MBvzaDtiS77uDILGPINfpcQrFvMkVy8y6LMLhQRYFYArBkOVe4Bgo2G1Jb_9PbiiPacjcZT8U56TB1UPnnwptLtHG", width: 1032, height: 1032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100191469877998145248\">The BOILER @ Buona Vista | Seafood Boil | Crabs &amp; Lobsters</a>"] },
            { photoReference: "AWCwydhO4XwTsYhNikB_0ZwHBUaDBZcdC_ol43aVBFfx0PHxd2_9GuOcd1Tqj54tGFbGoj7tp5o1VobEltwO-pfj05ZZzdmoCD817V0PsUA1IuZ8Ql-BQ3l4pjZOXHK7jZiiAuVgLiPs5HiVtEGbhFUKPvGK3q4M9txLb4gNvWvzNSqjRIkLRwIVO2JVgCiV7txWrINrBpECi2WhWzw8lRvB0AXcyJgK-9J6Y2wkHDLBRfr6m2X_EHITlXreT27agDdk0Ar5LpuubwE49iOOtmdftNGkqef_-fHWFf14UaIaOe35dW32rwT1_tBosZdePD8rYPL_TvpfbVBiVKbUh5uec6bk9Y-ePQkcOm_BrfO9A6U59wlpmKJ5yc4RiRM1z61vpSsrkqE4k9njkOhFtI7HkY7GWVs_dTu-SgATbJiYGo0A66UV", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100191469877998145248\">The BOILER @ Buona Vista | Seafood Boil | Crabs &amp; Lobsters</a>"] },
            { photoReference: "AWCwydgmPLRNceMlB0DXz3Q2J52_L7DP21kX7rnYnNOvgkxlU0WqY_1yUdZWeI6RSUTwKoYWdB-qqTFJ7_2X6a6W2yqLRJt5C9WqF7T_nR-SSTAtC4eFVBsyJ9cKsIhIYvGIu7Bcz-S0JmsG8e4xkmWH7RLgrCVcNqdJFpilu2n-y3yseonk0zleeRZ_2DtLdH-Ute1PmUc5TxrjGXVwzKlDkc3Xc3qU6YjjXsCjVouujeO7zLfbCaqDG1OhYJ21RsuBC6PjWhFfPly_gwnRXNRoVM9wJjie7-5SdMo_Nq_vmBXCVe0or9vKY8s27M874kKSMe_ffUzQLETQTykrb-v5MAgt9ws64wHiDFmgR67t8-z7hknCWQR4QNwXYXNF2AmNd4gNeEdbfrcaZcEJUXfPJbwT7YkAA_oxATYPhH8tcbRFcou0F0RReyzQYtL1j4aF", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118333028580406747276\">哈娜HANA</a>"] },
            { photoReference: "AWCwydjVEhWdQSIxbPia2mFQOZyb2-n8q-FWKs56guOu00eVIPwY-2zOk9AvQsCd_fKIXMdYoiVzvpnMXNmjiGxwaIOrzLtDbeV3a7R1PHBRLsPiYBl8M3gxdhHoCpagTBwmJcAfdJp6kxdmX9dE6zim43XzFEQJFlkSsuGzvVhva5dkVrHhKZK7wW4dwHW26NjV_wLeJNOE2bZL14ytFLeZgPtBjYzMHXwihu6U_kbCpn5mPoidpypgSQ624I1YLoI5-SNizH4YYvok2MPTXmvKLu7yt0kEQsDbajcgDy_AUpPEPjWkMr161qbKd5JKrQBQaxD1r5ShGizI8GrdWAm63CVoBLqDs30LiqU9YLRror27c55EYaXw5ovWP3LSljY5-fPglBpmJ8NqNhk45aVTaDaNUMB2Q5MvSBKbVq2m_hc4aQ", width: 1125, height: 634, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100191469877998145248\">The BOILER @ Buona Vista | Seafood Boil | Crabs &amp; Lobsters</a>"] },
            { photoReference: "AWCwydibTxUIhuGSO-8JNVXgVoM9s5PWWxov7j4fuXMoApAOnqSypsTddpjT0RHJIyNCMcx-x-PBNduzqdnRh7tkHAJeq6Haj5NR-2rXHuJGo9G9Tyr5mg6Z36c0QYaMUGrnL-WHxeuxERkGcJyOt7z9ZIf-XYXILlclyyZ5or9Va46c0zYvY5Uq_2IA1ZTVUUM50Zmgdg5351i1YpoFeZiNCAjzKKw6KVuj6Z8F6eLQ870aCRdVZuXrAl6qCTBRqZYm9-i_BROzfF93DFFDOPOaJt0A7EA5wauVxyGxChlnsNv9-1kOfPYnr7b_3M3YDWbfa4ukhGXI9Zac3swXZ5DKUCAy9NuszPpT0ohYmmqTFyRpvmSK7YfLDiSOd21CUN5fsQjSTyDYyt8gKirofC06nFw_RivwpFm_gsplTU4eaJnsp2nxp0_tVoaEZxA4GNUx", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102015161609870739337\">Jan Allysa Marvida</a>"] }
        ],
        summary: "검증된 맛과 서비스를 제공하는 해산물 맛집",
        updatedAt: "2026-08-14",
        highlights: ["4.8점의 높은 평점", "7,000건 이상의 방대한 리뷰", "훌륭한 서비스"],
        tips: ["Amos 직원의 친절한 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.theboiler.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5020446276311227437", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B3%B4%EC%9D%BC%EB%9F%AC+%40+%EB%B6%80%EB%82%98+%EB%B9%84%EC%8A%A4%ED%83%80+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "럭스 코브 씨푸드 스콧 로드": {
        photos: [],
        placeId: "ChIJ-5k9SJgj2jER8lW1s3h6ZHs",
        placePhotos: [
            { photoReference: "AWCwydjXAa1xJjn4DrqvkqWuld-MyVJq_dEMlyGAykdzVRieTiDg4WDigb4FgFbHNk_8NUjboBPExrME94WR3WleTEsL8BDTYOWVKMv3JZ6xyFlATY3wXBTlaenE9vf-rIZBRoDD0thH-HdliGOVLqDIzGxj7MRHnzj5bmEI-J7I6b3lmE2DgZ_bNfGy5TgI-oc_Fa2CZ9j8ZcwwlVBa2JpahjXV_YDZTxT4WgJV_vOaiQn_7xvUxcWzBWsaBB494YozaKZdsdT7aTd0OhWnjCrWHJSsafVSXPd0kyrFqs2uo8FLUIT27nMWAYBbFpqoNlAj15vq8TzsVYh_lLnf0tZmEuTXdixImb3UwNjQmwLNuwnWBkhMOqVS7EeA4iLvwOU6ocdZQGmeBbeQl98u2zeK_CjfqJIXO0w5Cyx73AOdVzLIUWnad68rqlZb_7TI1A", width: 4800, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111922026214590063249\">The Red Marker</a>"] },
            { photoReference: "AWCwydgDnfLoQ5SmyRGArpg6drUi2-QlK3XCKY0NRBR-AEhrasOwoNr6ETkl2gDDOUD48kUoCR7SCffI2hMthp4EF6xwRh2DTttIZt4RRntkPJ_gm0c2sm-pgC6h-Il18tIa7KGjK_SJTpKJP_uREeZl6xQ_5FkD_GoA02QhS5WRjRYUHgCLNQz4o5WZw9hjHA7FTUq-ccNl9kZDNjB1APFN8XklNB7UESzaA3xMLjerXf4iQTyF7W_V3ncYjUAFTpBesmHne4f70q9ce8t_kd3hQ2bZupLjx1ad1nLsSNN1yagxoR6APWiXH4oW-omW9GL8AaQfiNJWZ9YXiyQecaLMzZQawSlcbb3f76d_KV98ltRfExG9XHWZ3W_wNV1kPT5aaYTHqvLL-U2X1MjXaIjUrUljY2xVPGZ9IvgNdK_iNE-73tAT1pe-zrzpofaU6EVp", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110760628069487486933\">R L</a>"] },
            { photoReference: "AWCwydiUnsWHz4pqJ27OHs-R9oVe0PN4jzBgGqA19QsGFO7QlD0hmGDDnvQLVS9c00g27c_JM2u3yMZogbw1ArJ8-IspBkJ0UQ4KzcEVIIeDRJGQO9kYeDXV1UyQaOhtdsiRWrRBWi6kMdvyGgjXTOfNkJYDg5GxnuDErxIBDdIy6Xe9AARFzq5V0YyihxUutONERXhChNcgrf0dki0SWwv3xZ-aRF4VSL-g3sWEsj4jgsnrQzo4KIOhXZXvT6DRJ7IEcYOPacrGcT308CYWwiISTZrkMs9hUETiM-XQ66yJ0XjKflKXx4YWO8ZOjidjTRswxpWW2OGYnyabkcq45Z9AaSwV7fnNfqK-0iguo04FQR9zuCzXNbrptoGE1wTGUzJ94XlFWMOchBlaKA6-NfcugFUpEBEIfqAczdXCTxZmJaiOJWaGfFEZpTu9Bs4waiky", width: 4644, height: 3483, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115382657795644193769\">Shinyie Lim</a>"] },
            { photoReference: "AWCwydiZuV8b-M5y3zs7qQ8fQQ9CDlNQds5Us3t2Qui5seAQsGQneoNnuFvz60fwAKv809jUYDpHhi-R0UdYV-MJQIhq4d9qNY3piUOcHEKAmJIBV0fEK_IIb1mst7GzgRDP-b-U8x9WwbSGAwhG6U0XyJQkGfuMaPZrYOq1sOaCe4EoR7a2aEuu3ITMJuuBwZLnsQqgpy6ApkIAqbNNphLNy9ESclBgAOCOQGzhLMAixIW-0plkYjLQc2CQmZI6yu319V-k0stp5ItyHOdNtVAocA_JNopOG66o-JWwK03qESXIp5h15F1GjqVWaeNmRvNa7DApDZqRXTdIEkYVVjBIbVTPvmqASwFG-xWqidzXk3ZSTZ0KwPBMjWu6jjI7bkoedky_dgDffjpsaDfg4da6ld8kXIw8eK35qgWZUszvlT9bvlcnAfveDmOikur61KWl", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106256035480616577897\">Xavier Ang</a>"] },
            { photoReference: "AWCwydh3BJBZ_o27rE7m3F5YX5rBkaEyWGkT-fgaGFeMprGl_YrLcV07GXUtuf58SDN2WQFj8EASS6yZHmLy4FZ4bwiuJngDrXzoXswieNdFVDvjk6uf8R0hdZgC7Ie_GHKcur7_iXBMl2Z0Ds6jzr5cZoVar2p_74ewN7L_smYFyXWO5VpFtXFyJofAt0AP1P2rG9qiWfqzuHnbJZSF0tjlJXUYuwlVclnM33zqzfMq58nOPnPwC067SRu6z_qIhp8h-UB8OjFgHPovRx2nwdD-NoPDwHj9T8KqWYS4cIAUMKePfVajZyChqSEkzpzFC1stXRNmOXAlqcvHiQfJeiCaiWwAJ7SZPIm-S-ymPoPW3r0H3c7tnV1BFjkYIcPaXQF46fXGL1CY_5ARO4O3UeH991-Vpf4M-EekPV5kQCCSheMLsJa-gNs7jB6PPMI44Js9", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110006702456977628755\">Evie Chua</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰가 증명하는 신선한 해산물 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 게 요리", "중독성 있는 칠리 크랩 소스", "맛있는 전채 요리"],
        tips: ["칠리 크랩 소스를 꼭 맛보세요", "전채 요리인 치킨도 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "칠리 크랩", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://luxcoveseafood.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8891366223165871602", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9F%AD%EC%8A%A4+%EC%BD%94%EB%B8%8C+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%8A%A4%EC%BD%A7+%EB%A1%9C%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "크랩 셋 고": {
        photos: [],
        placeId: "ChIJwWfdLV4Z2jERjpY69nF2srU",
        placePhotos: [
            { photoReference: "AWCwydh-2alRL7K1TpK8Wpoy4Hm-gvOHeOTsFa_ySIRSPDe3-InUSnoqvtf6PG-hw5IxhoHc-IfG-3gzpmW6qKhKxAWkZyweeD_Er0siDZTOJnWANAjTTlfZTppMfTr_bAxTDTgYBYgxPLQ0PjSHLe-j96wBh_YZcBiDrjI6Sk1EHytGdu7wP4BfJ81OPLdOEJee5Ti84Wuul2V58eJPYr9HuUoFYkja3t5hXc1rKz--inDHHTlvjiHoGWbAOnaMsvYUa2Nq5WjVIhcBGJECxSEJixSoT8CCWKLkOt_WMtJdhz-erOMpM0RjTVadEuZhwRXe1pzsMWO8-COpaXqRBBlEoJf6lK-P0WWtZGWhz8IXlkfQqnhiwdRU5U0DoVC49IRwJEYNKNr6WY156wxaT4UkU1kOPxvFmwX2cW-LNL_jkEIQjyx0CDBsIZCo09L-FKp-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103414009973348532694\">Lennart Damann</a>"] },
            { photoReference: "AWCwydiHxNdFvta6YE0mlQWaTzuZrijGZPVXZw_d8qMFlg6MU01XwuVgyBp-ArcyzqC02g_gtlQQfN9Km39D6olOTX0kKW_pG8p_XEjFeVEKVu6GbVXfEaFN3aNzbMNoApYJkkojP_uYZIKABK4f91_KKdpZtdTjWZHvlR1vnlpsG_u4A_AViIdxmsPllRfLIxUrNm6hQg-EGk722fQtutnXE9CWW96raiKCTmAbe4qYdrpbMQR6gNP1D2AkiwGfcMf63uN3nOvtr958Tnl7uEszu_JKUJjoElRZQXQ4vcHv__z0XkmkIXwNjat0lkgsFrNQKJ9B8SmYfWHXTdX_rBAXjOWnMc3P4oI0E7itaoxKSXjygPTJOjd83EfziFn1xkkDUgDB99nqyZ34FE3HWxZRjcR4w005uZzqdkb7SgqBxc-wYiNXLMe9Jn2n4jiphg", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106535774413473387212\">노지영</a>"] },
            { photoReference: "AWCwydjwZjdm81u5jJIXwoOgIUOFd9o9DRvQiadMBo6AxhkYNCmy-0uQIhGwJOiL5XnjOcl0kU3zL5Q8kG9tHa_i2s1iKPrNBA40-YZMlwxGfbbOzMYLOmYOE5MwrNZaq14fdjd2WKo_BgI0SQpuPri-sne8J5MBUcCTOBuG8tA-lzxKn0v9rOnc3bizOuTF33YrD5F8gnTjQOahiEwVelmXhEuqh-XUwj6JR4QB1WYE62q_6IJ1pVH0NwQa4ZidEftfzQfkX34VG5V3ki0Re-27rhvAz7pG2TmLZobQIrKwCVQbNnbOIaLMUTTgQ-U5CV6TLiYy_ndr8MR3pDtTtSZL5dX5WU6Dx1bwnqKf7B5w5NDRYLAj0I_dvNB2lgaTohijPP57OiIhfSZLclTDCHj17Wcmd1E6_NpF52HWFR6LP5gM6az1gPzQQq7XDe18iTHP", width: 793, height: 1122, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101864560218605319724\">Crab Set Go</a>"] },
            { photoReference: "AWCwydjPG2GJ33jTVPaBRF5AaZFMloEta64qfZQYZ44AUndMuxRLnvi8i7r4BQMRZL9HRSC9m6x7l8b7wZOV6sZ1LLfSWmtAnWRqBBeHUgnwCozklcJauOZwrly8crbShk8VPKKLk_XCLnFr4V_DXNkeyqa7W4-WP_xhHl1s53arFSIbhOALQ-pJntVEeCg1s2HRCyf8QoXTzV-xQ1cfEKvGwoXLW7HOgqdZLRqDIyu8VRQLHRO9hVgQhYIFmRcAzYZCBVVPTTRfLFL8ohCols0-9qMxdjrRX3mlMdebsprm5-Fbo7J_SdBIOqOYgpBVHXdDpZ9t7JJqd5LJ-pAHcn-n-P2N8Cxgd2kaeeOoQzXKO4-jzW4zzvCVeIlupD2LVTzlzYv1snX1PCqqMtgAM2Oh_1D9wLgxOMKO1N6NMjZ4cGJjtxhA2e1JC2a96_olE-wP", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118142459074501471944\">최선미</a>"] },
            { photoReference: "AWCwydiSWVis-8VymuETiHxpmiAbkDtt3BJ49CULp-CeNg3niJQv2pOhV0qBXYrMILPL7ot1Ae91GubBLsbYn0hQA62yGOkAf3rmA-T9WPHO_Cy069SH0VEbbEJEha1HoQ7E0L8Yo-9wD8lOiY2SJsMxwUZ3o6XC9a-TdHAWNzcgsyqDjN-WcSxTJOdPXTZVseksnh2pjzMYRW3Yius2sAGpNjGxDC6ZRo-IOt1jqjajpeAZ22qj7qajMO_dfTyeAYkHUGXQLsYopTEF_KRYUJjhGVditNLcQVvYdwMxv2ivLcNbBqkpw2BpsBo9OQkdN2DlVORP0emn8W9UU96W_qalHvMS2qL_KneoXH14nkdFL8Db5j0WGqBLGAy5rdjxtZ0Qc7EaTbPbzCzRYrDbaqHZiGIXuZtCah5A8m7ZPvW0-AHvbrsUrMCH9fMK6aeSqQ", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106441945695858321712\">02Bear</a>"] }
        ],
        summary: "친절한 서비스와 훌륭한 맛을 자랑하는 해산물 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절하고 따뜻한 서비스", "합리적인 가격의 고급 해산물", "편안하고 고풍스러운 분위기"],
        tips: ["메인 메뉴인 게 요리를 추천합니다", "소프트쉘 크랩과 파스타 등 다양한 메뉴를 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "게 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:45; 화요일: 오전 11:00 ~ 오후 8:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13092657298553869966", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9E%A9+%EC%85%8B+%EA%B3%A0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 포퓰러스": {
        photos: [],
        placeId: "ChIJ40h2uW0Z2jERA_TAOvT0Uzs",
        placePhotos: [
            { photoReference: "AWCwydiSW3ANaJAop2FDkNBEauPEGbbPeZokcC6SiD5SZgzfCz64m7iILrQtRWAVgxCRubtRGPu_4xx1GJIIyVJE1P2V93SgmLr1kJ__eVCPTcWFa5_GBa_SdqyQ2qpS0JPxZGv1_bdRrLe0g8oRil9DJkeF50Q7yS5C2-heuyPt_HncGAUaGNMX_xYGWBhgGDFDI_0recnRdJ-lY4EiYhmCeSP8n5uIoBOqLKwho7-x4RyU4lnKsGETtbXyDCiL-S1PmT1xUMP0Ng7mlhMTxaaGJ5bjubWS0W9oJZeDjXnPOu6ghux8CKzOdlxKudjeYjJ9PEQV0pL-Mo4YO0oKJW8BxE50yAD_YxVmZa9UP-Ry9fmXm-DqATfVOwF2EkMAL6dmX_g-2gRcfL4ZngAIIYyJUWpbqHkfNRp6Al8UJ8aULb-b7dU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107397249362739991391\">Jacqueline Ong</a>"] },
            { photoReference: "AWCwydi3UceoVXnkjPa7Xb6rfj5AjpE3I_OLwe-z6MFBSgrwwgA7TJZA-XAP4zdEJktUEBqcwnh0j4IryJUt34jBpIE84Gxna24c0iQNVOkBL3BhfAlK2w81r_Xx2iORFkmRaPa3MRn4G1xr7Awl9qIYJgrPPWsgsC25UiqFWPhG9H4K5c8m4vMm0_YSiLDKEDXwuNQZSzX-4NkO8_VFkpvUQNqpNWqOIYjYjAhGK3wm15TGCXM0yvXN1KjkjoRerAJbGJ_c7p-uvAg7JHGDI4PqK4zKtVfoW2A8v4GGcVF1IFhBaTjAHqwDRAy1qNPNiUatDWE0WJLeEXAD_JYPnYAImBaUEIzjwNS7Q6cqzymDfDHk2lS13vH3y239hqBUL5YQ2VBShIDK3vz5ifHQWRqgHkWzgGPj8UbSIrNErlZWeHbhEmW_", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113920183814558131938\">Jason Por How Tan</a>"] },
            { photoReference: "AWCwydiLWsrOECbzYkHWs2jXS6wb0aJglMHac9IUXyFKMH3KK-6cJe-74FcTx_xRIK_RD0yI2mZXTP4iMLmcKR26nvbMFpI03JRS2SKPayk50hCFV7ffSzLHtZAQFnoLlejKwg8Wn8cucEJXFFZhP5sfszTj-eQWntV90yOUQD8Gi9mufBQohU7377kSzykXh7XX3k6-UyBN15k2vIq_-ne2Snqln54bH6WUhg6J8Oel-1zlkd7ay8KlZt7ZqyMhC70BIocvgqmgeJzcPEgMev2opcbR2caCJGblKrbF3v_8fYy83TEDd_W-NUsJeR3G_wgkEB2liKLtWCPB6BVCNevgR4y-unc7b6dspLIfnD3qC0nZMOGn_TAn8R5_s5hdVFgdqaelxP05bZ39Hn_FOffCLFopJqwAC015wwk4ARi9NkRrXSxI4YolJGhkIEAbZJL2", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111353505751212189241\">Melissa LovesIceCream</a>"] },
            { photoReference: "AWCwydiIBffQmHlrVWuVXpKiakGTyMGAaIlr0FiWmp7FYBXlTOWs_W7p39cmiNgFRDc1wFxJ1bsk6Qjq5FUr-Qr4S_01G-Cep6g9-QNr7TueuWC56bjmAPnFsb_sMmgJ1opyUOb6Q6RsChWBYqxqsIozEAHRRl2EDw3DirzJZqhe85kS-UKyP6H6PH0bx8rOnUatDE26VDAnHsi-iokheO_0o2avi-JYBPaWvFMBxM8sVIG5xhqKRGMAtVn8GxyWy3bQcc7IUzEpyJ6XjE0j5mzuLsMtx7SNABwo-2ZdZ7k3RuzHGSwcobqmwfctT9wLbq9vPdRQN-pFsbnEvAUM7nS_sAFCjyRWG2D_NLKeRFzWHnQXxGd9R5WEKKa1_l-vHMWKJfsIKL_7MHVaZDzkX7nXiEYqDjRD2QXH1QqEM-AIWk7Upw", width: 851, height: 315, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106825699356754415126\">The Populus</a>"] },
            { photoReference: "AWCwydiHMTH5TRSSHkyE6Oq9y5ywh23VOe-bFkJjuoFJspdmGUhzVIifNaZixQG3YlFVf3zF2odF_rS6pc46HS0Nk0elO4ySLWSZ43hh-AC4vEan5MTB7Iv8QCo81c3uRUSHcYBDCWE7-3WrTEbsopqqP1vDX9LsUvDL9UwPxTRzT57GIKPtwW9V3a6Y25KTVf9kwl2irXaFsV0vsgTQ1WVfYUfDQG6oQD0m0l76K4nFhFWqSUmsMggk5Fo0AayE4CJuFhln2Ym_FuiOqQnF6xAUWUgTVtIRB1Fb4pqYOMhsV_9dZni1RUZiS08-fL4W8GxxJ9QZWHBOiXej7Rlf_QULRgkGklUBKM7Ph25WkHj2T3ov7BoHhTY8CDJVOi9ORWVpaMeZvNJiEj6eQIM-5tKUIxhZ7afoHaKX_S_fb51N10JhG69my1iEZ-yghrK51mfg", width: 720, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114337086136643364684\">Tula Colvin</a>"] }
        ],
        summary: "빠른 서비스와 높은 만족도를 자랑하는 싱가포르 인기 카페",
        updatedAt: "2026-08-14",
        highlights: ["만족스러운 서비스", "빠른 음식 제공"],
        tips: ["금요일과 토요일은 오후 9시 30분까지 운영합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "카페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 6:30; 화요일: 오전 9:00 ~ 오후 6:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thepopulus.cafe/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4275029801099654147", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%8F%AC%ED%93%B0%EB%9F%AC%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나일론 커피": {
        photos: [],
        placeId: "ChIJE7ZtOWwZ2jERFcasWYmljJQ",
        placePhotos: [
            { photoReference: "AWCwydiyHlHqJQPKdIKHw6cb8HA2ansU5kbyV2rrCgDcxAREOKQfsmRqjAi2leJ6iIvRo95qw0qJWgpG_4bzVTQVHCD3Kb1ToGcM-VcVtA7rSuMRysI-6um844rql2rcznacYeU8H9poQmiivDWHCAvdF-rrjSxHF3z83Bueogszh0lx6Ti1Q985vi9872Sk5b-ipzEpK-6d1lBb5f4uN2A7UpyvF8jfxDtdVaOBv0IELoKzD1DmDr07NKr6r2SqufULj59DWlPR9z_j0WQZoK6aK3RQtOUBTnBIgxqjag0MaCJrdkmwf43Wko43lYALAilMf_YErYUIswHkJAJ1v5ehRCvS78cDCQGHdIiyS8UyZpNdFebz8_43QurHjiY4qrRZKvF215hUk9y-xAaQmgLH3htcVqt5WFfyCYnDAqR4ENbWanHHdO4j92hST0VGUTyZ", width: 844, height: 1501, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104310332821424592273\">Nylon Coffee</a>"] },
            { photoReference: "AWCwydgB2a9Njc6DbSQO6ABKrzD2lTGeIYKnYYSzqrkD_KDXTFFWsk00f51U-rv2ixJySO2Ru0a6QZ5D_367zWs3eQwCbuyQ5CVab4m31iTXUjS291c_tuQhU4uhgWHB2-6OdOLhXzH_-YH0J959LpDTktcPB8eVmpnk8MVnLe96BZtq5AFXYowiE646mUAuD6-R8jjhBr8nlD9xe7-j484Jxh23kq7ywwf3_9gZA1tiU6wH1SINNbEv9K9vcsPGA3oKSv-EjA5MBWE9tChc0LZDKfPah1-Gu9uGbS3exQezORij4ubVap2iTj7_LByum3Z67xDmMeXDnQjkkBhOJNIMKDw2eZk1ZdmchBUQcn2_sSnZwjy1EOQ6zHPf2Z2DjGubW0IAShqwLK865f-xK8A0A4FGO2tdWOQ1xSmC1_BPn2ES1A", width: 1776, height: 1184, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104310332821424592273\">Nylon Coffee</a>"] },
            { photoReference: "AWCwydilz5Q4QRGhhQACR4nk1s3M_jEiE1r3u9vtLhhPkrlcbSFEpQaGoWEfMAAmoCHBt_i0yqhSEDl30FU4oYlx7yg8hAoejGR4h8Eey8gY4_iQDUoIChbGKTJiSi1bUBLMSXeYug-m9_GcKUGG7MKNjGo_FLgfse0WnXYr9R7R8S-PS7c8-bWXvEcpmqd3ahUfj5K2Ps-VV93vMR9ZXZ_qY4657qjZzPwSlxwfrcU7JKHTwkwxK9__sQ5Z9JAhi4uALjktOvTV0rbsr8HKfgMUJbLXH21Ivp-15OJjTS1zAQYZ7kPRQWQ-tBUmo28nJSdtSM4tshMd-BcrmjVeMBBFzmnzTb9WFvxUrMqYVIndI3XJILdlG32tp_jPB4v0s87g69jubZdK_G8DewFFQCpwRccAKF_goJJojIGDqpyPh3Wb2PbuQMxgVijPpkC0CbVs", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105951790176773160381\">Kelvin Ong</a>"] },
            { photoReference: "AWCwydgbZgPfEaLpT3SnlXph4mqKvaXwSIHr4BM9_S3GsCkVVsBDjkX3e3AFmFho_zep_7w_dz3KkFDEVYcGtgzbE7Dl22OA7GVr5EW3QvILCtdwAaorw3-JMPXXFENgaHpAPQNOdlVQwO1NYOM9Colx-vfIyfnEhdxpRL4tu72fGBNXOxilqV_ThFTMiwgSQYfZy2hg1ae37OyjBJpycgmVborhBDCmrrTl5Fxt2T7fFgVW2m6G6nGwVVVW_atQOo76K1XbrZtXzXB12Jv54t6v3MrmXoG1JuM010RXA8jVM5QuTrPUq_KSVO8RvrWd7ll5hxBmV-8Zytc9ewOms31lBdOcFXI9fiV0eSoFWyFwBvstbior3e6ZBE8AgMfo2AH-2Tjiw7CE9nR_UfpvGnJ17mfT8qYpLYIV6nRWufE8RJ5Kt_-KtmxgahWsH7eygJx4", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116316977124697175859\">Johana Devi</a>"] },
            { photoReference: "AWCwydi277BZdCJBeaYg7hStVVVS_dZkIjYQn5eFTBF1lbIdxaMqFF6tubpGj_Umz9vIz5hSvFTvLyL7-dTkLckf8xvTGTEISpWSTTkqLbYGqomQglMd796hK6YuyHmCHl136aljcoCwIKWImirkUqNRlZvtIp-Vl1HFvNIXjPp-sW51bvxyhrDfsBaDP1WQmPMERuHU10F7ZPGx7cL-8eitv25oMLsK7g3Sa6KF1heFuJV9pXiLWbUy5JRdE8RZK8YuxJ99C9s-j_f_HGMi2--MN3gZpEWNS4XM6LljcBRHbioHl1U-DB4uX-tcP6Zi80K7I-58sOWOSJKW6iqdqprlrpaTkSd8zCHHVefR8V2FCKYCYKKRW0OSCCtRw4seoaVCxQAitPNbaQBdsebCUejoVnYkWg6gWGldb65zVMldlve1IVB5kH5yBhv9DRyVtS9j", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107696377819147565513\">Priscilla Tan</a>"] }
        ],
        summary: "최고의 커피 경험과 서비스를 제공하는 스페셜티 커피 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["뛰어난 커피 맛과 원두 품질", "친절하고 세심한 서비스", "아늑하고 좋은 분위기"],
        tips: ["매달 새로운 원두와 커피를 만나보세요", "친구들과 함께 방문하기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:30 ~ 오후 4:30; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://nylon.coffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10704112423686424085", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%9D%BC%EB%A1%A0+%EC%BB%A4%ED%94%BC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "커먼맨 커피 로스터스 - 마틴 로드": {
        photos: [],
        placeId: "ChIJT3fdLZwZ2jERJx-QGgPAoac",
        placePhotos: [
            { photoReference: "AWCwydizaWLwbN9ngNNxDpW0YgaPzPNMyannaTzNjJhv8mKJDiEWVZg1Wi0GkiRxE6fwmLrCyeStavKJqk8o6gnXsh7pSaOc6n-KJDbInDfk384fniWJTABeUcYnTGPkLFnFyITMBIuGCXi6iULscFp1HGyXOk7mGuaj__F7xKE48Yve0hxRdFRq2uO6TuMU3uS_x7k0u1jz0reGHdPfqmQcXnfmOvorHYxcTI4afXoGQvdwp-4wbUqJ0Bd8psV1uRM2tqpUnjZVgzFb8tZNRsvqkwmdZjnJq_sB7JTN5j_RuX_HUPOdrXwxhmfAnUP-B8WHKCrKd9lXl-cFz9z8BYZqOCjBMP3LuJbgmjhR5-i4z5yfW4pPa2MBepY7qvVFbFEodMFq0kv88vUfzpG3ZnUWvJpKbjYPtEVfj_I1h7aUCySapCVe", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106156409382294329102\">Common Man Coffee Roasters - Martin Road</a>"] },
            { photoReference: "AWCwydixf4dv1Xdbo23ehbyMdGWBuFCr82TIp2SpoOHGAauc7Q5c7MQ1gwyXDykjDH4rLf2eC5csV8jEFDNZh2R5YcWr3E08HNf8hb9gLiOBMb--q0LLGTj82-52e7bh8mYk8tBbCQmyyhTWv4EKYp_DSKdumN5VM9y5FcfL4ur8ldU5ol5NW_Q4mYRM6_CLFp8zi2cNIamxIMJZbS4bPk05VSmYxmAuBKD2CmoQf-8Gc47YY9c6b6lwXmmIgIX2LnFnHorBaJPl9LTC1MajIF3EDWACVQi6Umxad8LE5-TS12_i11zTNse9tt0SX2_3DMbcnTjKln9Lu-VKaSQX5d6vA5gel03ubb4jMCubyDITZjXo-h5DijToMCy4oOzGd7lWzD7-q1MlQ5WyBhzRlCv15F992gyu5-ysb-6dXupC6LN-oWHGbPW8ZfpTZPlYCQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101391398296811227556\">Merryheart</a>"] },
            { photoReference: "AWCwydh3jGGXqnpJi20geDR7r_JsbLGZDXW-0M1dfltd42c9slG-dWHkgtPEckdBJrc027a8H5eH9Fabu_te6-VRtaDc793nd-J_c6hBtJZWueLcPbGEgyP8LvVBnU_hxGD2xIIA2ulB_PqZNtbs73drVV-e6RaDW_hIWYOQElJ7xNpSk24AxfltWF2bEz3CIwLDVJsugIj8S9pUcLg1psI6vGjhmWWoQRUqmpr86Qw-WfzHv63SWfkEHBJbhJf8PHMdcL5JRun0yQ-gHInwk1AoogsXvJGLrEG93n0FsJmQLhiYRGmGxvt343VBDelonvvEXtT2rrp8IY2uOGZptjIwunYeRg9CCU0FjnWGaCJsKppjJaEvQrTQs_SpfBSnfEceafriNyWDobxncaaGuberE8QoRy-LX46s_39KDJX79_J9Ov8_", width: 1000, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106156409382294329102\">Common Man Coffee Roasters - Martin Road</a>"] },
            { photoReference: "AWCwydjGgMOYGiG-H1gB1SU6pSChxkGJ1kBXIa6ks5bl35ZFXe_kY2Q29j9Ep6Mmt3hL6w7c9sQ-HNUjFFs9EeEYBugs7WSVOsJ_jsebwgZnl8pm_eODvwMeVNQieWNIP9BeVCtwzYSj_qJqchuhZ2nv67WT1sfkuJXVqFP6P6pJWt12IRY_CThxmts09-klz5cb18cGOr_bTtFAcrEOmgtaxx43wLs6HQmOgKMEh0PDua7IUk1wXKNJaACgbHOpy_e767OltZ55ccJpvsPnLC1fkgjLNXCR8Tf9Tk1deC3SgeyIMvqNJ9tH0zd9YiyV3X22OL19DeI7ZWEgqaeINn10wEkTq0Cg8iXZhYPzahvAXJpyKyx5Shw45oZuW3OiBjkWinEs4aE-mL-UG2oR3v3DCV6fNLWijZfRNubjTcz04Dk29BxG1PqVeybxnL7NioXq", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101391398296811227556\">Merryheart</a>"] },
            { photoReference: "AWCwydhCbuc1QfIKAwWcrmGFrrUNgMT7xzkJ_jUFdrj6vK3rFMv_jbnOxBzCkU3xcCRTPvWIexjFI-eTg_8F7THfaMgSKoeWdB5bMBPszw8O2L9nhodnKFcAB6FQItGgyqbsakn-blEMQBuMoFhjT8qo5iJ4rd_5-BatNZpcEJxPZUIC6HeiaCrEgN61-f_Fx6YhOIxwoO8VrXUs4fyG8R3m84zPvN7Bv3SDvinT88DcmNTHUmogB1bQRo9jMHvEW0Cpbg0_yygIkxzPBXPdDxajRgD5i2dBItg1-kV9EPju0hcvc_LTSlz6pN3jo9Q0p-bLG3wQYRNbtw15O4Ik-JnndMczwWYfc1_vMZuI_yqi2eivhjbbAYHbqTWdNndZTcYOWiSYB1bS9TgakhGx1sm6tZPZ2acyMVdlRFoqAFFdUjbUAchZsLUJ2AiYuWCUwof9", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101391398296811227556\">Merryheart</a>"] }
        ],
        summary: "맛있는 커피와 좋은 분위기를 갖춘 인기 카페",
        updatedAt: "2026-08-14",
        highlights: ["훌륭한 커피 맛", "매력적인 분위기", "빠른 서비스"],
        tips: ["그래놀라와 신선한 과일 조합을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:30 ~ 오후 6:00; 화요일: 오전 7:30 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://commonmancoffeeroasters.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb_martin_road", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12079146795147468583", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BB%A4%EB%A8%BC%EB%A7%A8+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4+-+%EB%A7%88%ED%8B%B4+%EB%A1%9C%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "톨리도스 에스프레소 넉": {
        photos: [],
        placeId: "ChIJn21OvQQQ2jERkuv0_a1tY7I",
        placePhotos: [
            { photoReference: "AWCwydgaBvaTX6OBmiyUOSRU8YarVFDS4JOW75QOgsRsJIT8740gz8YfGM3LAP_8dPVvpsyz094vET1EJkFOKtwaGywcKKTX_7tjVq8uPJWFLwOeOvsh90LnPbV0DrCiMKj-RwWPLH6TfubazwPZvChaPQMGk81MSqugX2LKZkYhlchOCLEO4cTe9LDSZcRg0Wy48xwM9n-mem2tSsvTax4Nc-s1hmRy1rcQiPO4MYJeAEiorXsY5a3B7GR1PzAlJGFS7qsiIQaqJpaCYiu4loWgyHcsVJAMO-ZQWpQCzOGAutzeMt88dVAJAYRR7f5kRo3Kv9HoX0h2hKlh6AS_AozQMGXmgP7YCGtXSM0Fhq7kn367wAyXPy2ziwcdWMvniHw7f-Y5VJ64ZGvXxIyZ43bMamkLXMM4cvwOklaB1wgwf8P4vlzlzG-wieFKSHuTDg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118222658759677553836\">Rex Soriano</a>"] },
            { photoReference: "AWCwydiXOCXCb_7OjUB3w7LMVcTdsSQGIJUoyS_sgX2xg0qv_iepg6OrBDil7CjGpio3nnvLwdXetuVgbJy__FVlanw9qwNp6c9GEhIeNhdlkCKOGA_kJHZGYlH0UCNB1ruapPzgFLewv4PrtMf8SDZsCzki5mVCPK1ghQEQsuRb1Dt2ctvP__FEdOJxQ0Alx85cVXx--WftHL3jkWm2cXmUvaP09nGxi7uila9vXgbQ6gJdHKk9UQLz5GIgZQXwW0-BwzQBx8c63dtuTP_LlH0axTGSVTIoKWoXgvVbHdyCXkEWiUsghCE_FWvqJCKtNkZnMdFJZOy3a9CtGHKb1VURZqFGT6JvcGcWvC2Im8oNsP9oxz_-mszHesTO3yr0Y1_DRQa8ELfYBiFPSsjR2Wm4fvqYyxl0YvG09X9RWgSfvleUqdfmbK9JGqUb8Q12koTJ", width: 3343, height: 4179, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110053285043510143740\">Tolido&#39;s Espresso Nook</a>"] },
            { photoReference: "AWCwydgjJ-Bs2NzPZlhmebifMiFSAX3VihyN3_rv6sViem0VoEfTlqxYhqQchTJZpCjXt7byc2L63RVcMsXvispQ_DvIOqj3QMccRaoY-QNIb2xJ63Nhkv_98jXDx9j8gKjdYgS_PJzXnqxYM0zPiYTF-4Jr73ZMlNZe-jOZQd7R19ZOCPOHGOJySn3fqz1-NAVuEChE8S8XFNF881PxccW0q77zjGt_018L_Cpss3gB8lGFC07RWNrwrQ0LdCRonqt-8U89Vfw0etsz4Mstk2wvTfiNSXg9QvdVDpWcSmuVXjBIf8I4rZy5cfUr_uxJlLcRByKr9OehJiY4ctoaLrSGEoWOdO2G06e6b3ESvtjdwPxft7cf1YyiwKQ76o7md-kAsuhM3Os6nGOc7K7xzge-Q0-edwg3DqzRI2MtPJ3lTgNtF5VkBqakWuTIfbpiz3P9", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118003795225563347331\">Haman46</a>"] },
            { photoReference: "AWCwydhVOkQrvRQCGMIXv3GGw-dQP4Cwt563zZS__01n3vu7ap57kevaaY0oumXMDPQFIdbUeFJlYkvuORsiUdWr9-UjYvcL1HZdhf9rvQs50s0GXyQF69IgXAr9Iv7TaHoRH99dwztBlEusJ5WAzmnF-WZ2PUz1lTxOICau7EF7hQhb1XQygmnsvbQjok6fMzRedUiZKdEfrik2uxjlkTkTZUGtj6CXkIwrt9xu7jWHtBHCgTpluHkG8wA4rU2AX_BleynzY_98gseK6MdBZ9Tcs7thCDDDWYfqeUoMmtNWHoXZJj667e0Q3QVqWGL-KUvkwpo3r1eDRy_fR7YoRatyAYjW_ATypPRDrmI3LvmrVX62Sxig-gfUcME8hbTVy5pVYQq_rL2g562G4LZgnhdIEN7V3mVlaoWgYcPKPGvFmGNGSLFeKrKmKzVjsiJbAmRV", width: 2480, height: 2480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110053285043510143740\">Tolido&#39;s Espresso Nook</a>"] },
            { photoReference: "AWCwydhKf-N7TjyRaVYT2D8BFu24c4sp3tzrIVZla2U7fj25EowofwtGH_zOMTGzJzB6wPwXt0WV3C2MmYMlqgYXPKx4I1-QoHlyJG__71oBLgEby3uug0p_U-1PGRnwE1lD1O9_2ciSod5PH1foRFtypNModjjO9mBTMX4UrLUbUoEUleBilQ4LESH0GrdqCnwXQgEWU5n-UycLzDhtmmQBklzeUjevjlQ4kIx5tG8-CxvgwJMrEWA5k9VbHFNYLsVyBXZyJOTSomVv0y1ZHQMJJbX8JwPE4T1-0Y9ivTKyEjLRCPa3KxRbJb25vZhgRggHtOG-g79h4h7O6gSncFVpknJc-uyPk-o1gSONJ8PxRQqBuAtRMd9FpuY0VfRtepan-FV3H-R3UNAs-lTCWBio2FNPIuuVV5kx8cOFrhdNLnMsbAQMtp7yzbWSNwTDWA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113989276641195154173\">V</a>"] }
        ],
        summary: "브런치가 맛있는 분위기 좋은 카페",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 브런치", "여유로운 분위기"],
        tips: ["인기 있는 곳이라 대기 시간이 발생할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 4:00; 화요일: 오전 8:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/tolidosnook", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12854238355502984082", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A8%EB%A6%AC%EB%8F%84%EC%8A%A4+%EC%97%90%EC%8A%A4%ED%94%84%EB%A0%88%EC%86%8C+%EB%84%89+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "킹스 카트 커피 팩토리": {
        photos: [],
        placeId: "ChIJmUOGncMZ2jERODwVxAaMAIY",
        placePhotos: [
            { photoReference: "AWCwydhgr4nyZ3jOygQv1tc5a9t5CS-97Vw2otADP4J3wXpZlXvu3G9hGvpVtRqIGHT83_5gT_bDFqqRAw7YehxGNshnq5yzQyXJOQqX1qtTRrkwUSA7hqJrxO7TpX9sk_ShuIwbzQVaZp5-tjxeReNGwBfoYZzdPktX9FEK3uMhTkiRwlSOIKzSFRkLOZ7YghuUiGFmX0nDzeOL7_7Zp3jC8WiNx00vvrpLhC2Z1XfLXfa9fqWZajVbYv2h0zOU4SzRI2mgAA8gEWwNVmWV9JsitgRCM9rEDABPZd8xv9n5PnwQXQO4CtlqzRbDSvSrz7gVaHEzcN-_7GHgLZcZWD4p6NGQfJABk6fM70gh4YFhGlFAzoZ01MpWL2sqFkAxRZPg_a2UFYoMFdXtmN4vS8GROaqlHDqMawXh0XJZ_13HBkw", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100955908422062051008\">Kings Cart Coffee Factory</a>"] },
            { photoReference: "AWCwydgRV6Dd1GkJjQ9zmm64rFYGm_eybo5dmkvUPd5fscPvYP4WBFlXI5PQAMla7vrnA9mBm1k9FIzn1Ya0YhJZZAyESqTLX6x-4PIhInHhA2bWg33KH3KPo1B-vvnA-obMWiictCELaS5i62e4GJ68AzKtnzQrQLm5rS7hVbviqbLS2d68wi7Qea4Z1TbYZ_2dWK4nhtU10rlR9z2nnn4tfWgIH9iTGHW8LnGsdfP67arTOnWC1F6f09P3n1tbuyjH3IBItud46Zh6L8lhB7wS9hO-GmgTW9hgSQAkRiQMcTwtTGbS6KJyUBn4W8Z3UpUmnDE9hiEF5cPOJrfWp499xj1N_TQCRxw5o_X63B-eiPQQVQ4_UEdU73JvQdnnwMUzcYaRE48kKxXbv5aqRdT6qCoZGcEPD3b7WtyQb3ZonRj45Z1p1tIV4dTu08W7QHvF", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105945200441667414342\">Joselyn Lim</a>"] },
            { photoReference: "AWCwydhQHvZWMG52cYPdXh4-JJvbTuMONaAMUPDkCcC8ODZQHunnkWx7JIlzKMA6J5VXopDl5sqzp_OBwpacSPbso0__9EVtqsc7paFnJ_y-ln4-pRpNu1jNqw9p3YiMYkDQdKkGOXNBqw_s8Orh6pjVOfKZ31ZYUYpPMaVw08-W179gvSRavdPpwtmc9VrDpPIb6TTma2v0XGGpkrlUThOEnPsMy3I682nFTIOwAcOYNwvrm94wneA1RbIe79J4fOFNx3GRk-FWAuc636YMKJiot8i1RYHje91BPXZjZxgaHmjPPk1YtbFSq9ee-ibMv9ntEMpwXtWoFw3xto7QWvSlv2bJaQtF69CckrsKj8abaCPnl0BMtlRC5gYQEd3BByZs0h67C4LNPn_bwvYZjHbC2oB4iXYwWpsH0Dw0lN3dSPcLpw", width: 1366, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100955908422062051008\">Kings Cart Coffee Factory</a>"] },
            { photoReference: "AWCwydguJMEnzhaARIIfk8MDhO2uJoQExAZT5x_MmtDszjrXGhRwR7mWRMk7x4N_8nMF1kWeunru_dAo5cruXfnajjSmduumrt7jGIUG8SiUDQ4dgev7iLiyfWUxKNteHQ91wZ86LzTt0LpuCjCGMeTka07r2KcHnZUaQEeOxKb1U0Ly35Q9N6uf2pK08ua5kYHlVN2vSXLWfT7C7qPJ6cTEihdt_oidqRVdxJvciZ48vY3WDBjlBO0fusSx46RouFTpQ2HDQ3aRoV-lXfGpkk9RmdCfsVl-hXtW43HHglAK05qA85K94EONjV40M2E4Fb48Qkq-NBKVi6z51XPKy782f7zwey17QtfftmLHX3zX5bAP8tiD8hjkZXNi0QjhgaKbzMoEvnxrZUCFeZalF8NcInTVj6P2PGqecmSXHgr3PlUfBif1qKK0No95vmDumniI", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115183547399333688411\">Peggy Lee</a>"] },
            { photoReference: "AWCwydhx8IkLDqRoKWHcTAc_2KF0WLANiBzTFzdNrXtsMoKn7jmjH9oOII2bPa-lI8UWfSY9SHSu64r1bhJwMJT8pv-ashd5r4TsVvMT54r6dXsdHIcrx1jSPTAZ5XTLUvqx66Crn0OaVpaZ6ov0--Ag9TZTSJ6_zkWg-iCzLmVWhq1dsRMzEgIgsf86Xce15fmdYdWF7gud2h6DLTyshZJ910NpnjgQmqM9lGJphukK8V5HMTy2aPiSxdD3fwo3mAzsD7yBg6DU2TVF3FGpAdRAFlmSY_RwvUEB8w239EVpGR-lAXtmhb7anF9dG7wPtNA7274y5tlYW9yz0y9ZNy3zPopoEuVMrUYokziCiGGy5NwJrbtaQJ-CF9c2_2Xz2Onn7ccOfG0saT6TZNc0VHw-2jImZgKQChcKwfHi0SG2nyTxtRp8ueB9zAAWVG5KkJU2", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101140524722275100498\">Kelvin Wong</a>"] }
        ],
        summary: "코코넛 라떼와 다양한 커피 메뉴가 매력적인 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 커피", "아늑한 분위기", "친절한 서비스"],
        tips: ["코코넛 라떼를 추천합니다", "새로운 메뉴인 크레센트도 시도해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kingscartcoffee.com/pages/kings-cart-coffee-factory-1", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9655871561769761848", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B9%EC%8A%A4+%EC%B9%B4%ED%8A%B8+%EC%BB%A4%ED%94%BC+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "포춘 가든": {
        photos: [],
        placeId: "ChIJsW6RkwYZ2jERPd7CCOsiCY8",
        placePhotos: [
            { photoReference: "AWCwydj9o5AtKf8_cpoVkRCFrrIiLuHHXfoLZKpbqg5ogWBYuQEZ71y7-YvgfiIWM2BOgxUOG842ES71OkOtx3CITb2E7LjYAa_3NmFg0Zx31F_8hpT-j1sHnRNhpeU2520J0UdmDbW1OnOH7_0E3SUTk7277fwbzKDxoPCkXwkLXTPIohp54bUwFwbZcSSZDyI08kqB2wllLTLbsyoPLUrvDwW6h7ZjnpDz67RnL4mSw44OKIK18Ac0zKnPV_jueLcBoBLtjnvg2_QhK3nlSnCIYDnjd4tty9SATLsfBLZy8G2q8NVcyivTSNdnhJvlHL1jzE4rqMt0ST8Qe286Mlp_CMSpddxXtRs2lyZtQhn6-f0FobAv8wpscT9IgN6XIuVROeFFLQOwULZLhc6SMax9lHFFrcCdAIjESVN5JRM8gL7rIA", width: 1024, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103936608375648910660\">吉祥苑 Fortune Garden</a>"] },
            { photoReference: "AWCwydhaTPQxO2ND_UEuQpxvRpu9NLvCAzZZfQ5cMYLwmW_KBU-0QVMbUjgk04CDNpzXkgSdVAt5XPClVNHkS0AU5qK1fKBJIZwimYZ25tqQsGGuTT0EbNY6Su9nZDbMYe9cnGAY0M_z2EXYXfUm3CWR-9I3xk8BKxD1CS_D_CEbK77uM6e5o8Vx1h3RKNLWsCyVjo-4SipLbnBS7CPfFme4miFjEBMTjjqELxAgv4Tu7NRosRCRyZ1WYp4-ybwAJJiiXQzjPyZdIlL_FpVuTR2gDiz2YuoatZ51JyWRn7VDkwT4P4UelE1xx43sPmhxlB2aNBU2v_fpN7Fr8ncUjIdLbFL1rDCbjLbUUI1zDaX0yalFm8zpiJxXMqVNLw5XZBJtnTFOL8CXeByqguOOLAPVaySvO_ke2EjwCSF0_UYZq3cj8KBeRc12T7U-PHWDvw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107802288800095074686\">Carol Kent</a>"] },
            { photoReference: "AWCwyditP8VwshtZbhFTKSh35Ebz1uPRseFwThddF3-lQ5ZD1p33NSnCthLwrlGqNdgf8g6W_2qffu7yM4cjMoftD11-ebbNxX570VOISnI-RY0KGxHqYWmJiuIJ_A4QdBugv6RcXb6H4kXcIUDUPqn_5QTxKNCTdOtj_IWJL4Mtz3JCc4pfGppNNEug_pefugvhwmOZss1HEkN8Pz-pWP8FO5MqDDCKE_JoJCQQU-s4vds-05k7xPu5iWCRzsTKCE1dOl6HkaaV4ylbR21FbL_wKhLXBgSm3_3OQDvovp1pm3Kch05unPlj4lWXQPiKzZUhQtu9_uphsn5x_friM8ev2pwf0yKWqgN0GyEbqA2zamxxPW9PEeu0izDcp3jL9Ac4a32e6tw5C-uei7ADtL4Vp_EdWXOKPyv7Ck2hNoaF48dQwpjAA1L8KQxRSoGFM8go", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112181812649256788737\">adrian delgado</a>"] },
            { photoReference: "AWCwydj-iEHViI4ES8S-EDLL-JE4Eyu-C5AUrHYow3aj6IsIeVqJM8-_1STDPpTKsteS7WZePZsV2ZotQkWzoQmzgS--iZQpuZMWVAzDK_CqBl9KFGpkdnW0E3Cwvf5LkHfkPUidGNuLTecqNCKYdnA9XZz6hdLMvyBaUWAnN54e_iYxzOOQR697keN5Zaj5-OTDznoLLwwyL5bA1k6XoLC7zkJTQEt2j1hOmR5YNRnesk48iCkuaAfkS_crRhPaIcc5RhNUZWnWyXqRvpFzqsqPxAo6B7Udxl1uwMfRsnN27eXmlyhEhE4A0OaW56kGJEkLjHqDviHPWnxXVWk1bknFo32Kop6XTGCNd_pIeCtV97gAXa-JT-lWrbjdiO1CGzaTSQx5-y9CoZ9uC-oLvLyP3GxGnmlH3wZoFW66cAMbzsE3oE2y07jAWyouNGVx2u9K", width: 2252, height: 2814, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115873313432359485693\">Kenny Cheng</a>"] },
            { photoReference: "AWCwydgEGAGvgNhTVtFCr-mHLeYinXEogGu926GdvgYkr-jzA8LxoCRvBwreKoIBL7xno-K--oq2aYtAgPmWNH-usbF-OaKRAxPpu1s54V485lh3Bt7c-1R7iDKGzQ0MRb2nHV7KaTCWhi5QNdxpI6y-6ilyzdCH6pLs7pUBeu7LE6Mnw_8oALK8Rm2dUIKSspPoSrLdwoaw_hY9Pf7K_fOzp1xcjZ3-82m0VtetM5aPjvsuQxFqzcYFE6pJm6uXX4foIyY_k0vJC4j0gFBtv3aQfp7CfFA2uBqcm6_4DiTUn1XJQ2OMWM76A7LG0I77maThB09TUc2dUK23uIt4a_61JVFmYTol8auyDlCzX-c7dpZne7_aTfhqvIZnMlHeM2e-rp53_J0amL3g-rkSmNDyBQh5-9oa5k-Cc3nMfvSVeZJgjF-pPMJTZnhzdwCy4Qe_", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117669383997247544396\">Lydia Tan</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스가 돋보이는 중식 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["뛰어난 음식 맛", "친절한 직원 서비스"],
        tips: ["매콤한 새우 요리를 추천합니다", "부드러운 콩 요리도 별미입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://fortunegarden.meuu.online/?utm_source=3", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10306807615073738301", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EC%B6%98+%EA%B0%80%EB%93%A0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "포춘 코트": {
        photos: [],
        placeId: "ChIJtzl45scZ2jEROI93s4raGLM",
        placePhotos: [
            { photoReference: "AWCwydj2NGtNeGARMd6dQovmttIezDrfC1WNm9xtNrMvTh5mKr7E-E_eVLolntnWDKmulTTSOjs1cm5klOI7rDA4N6t_k2uweYG5rOW2YTHdPcYs6UomYiOpJzPbFSr-jGUfgu2vzAqq8r95t_H5qG0aVUWXEuM_IuuIB5xxjf54oTcsYnr95M3WfaZk3UFBtxAa0Z52sBKDigohjCFKlYJ80bOY6nMmdo4sDKw-kye1YXNyiMLjNUc0xs_ti3N4wKrpCGUh1CAoOxQjJT1zVfYkg6braYhcpmDizlu3xh4JYE8tQyjnsfjaEFHeLzGiiZh8BMVCNt0-Mhds1h09OWeecuEDykU1TqUe99HMO5JLfsoOHJSNvUrSlTq70WJnHftQSUHh5ImMfrvf0moM02cNhV0hOP2tIjJzVcUTFeNCxamC7kRhpUnVRk6JLGnhGRuU", width: 441, height: 447, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104290909724801871382\">jerry yeo</a>"] },
            { photoReference: "AWCwydgNKoIwHfjdgMcJCsofG9TYgMOiaHi4XF3OFc4qV1DU_elOGGV3IrYh8cjl84OltpzwARgjRK_q0yFKfxsjySeo1tkYLQ1YvrtZo9AXOgcMDWludT7-Rb4GUyX473NVXh99vmVn6QQG9r7vTJvzj9WmCbzfoZ4VRfL1ysDMQP1d7feVW6p413UWrk0hZ7-HQau91OSgiRLgfZSkA0jIRz4JleAmyM0to41MeQF8dM38HyreyD_G5kXCVam-5FvBjwgJEqEMsvEqAx5GRcyWWoVQfDZPUxBiMAggLgQDyyrBaDN9WGdixBtEth593uOTLBmY9q7W5-v8mRd3zqW9cpP5hvFiZFXOQhlSpmuWNA09BHmpLwCU18jvk8w_oYtzWgXjJDm0vuEzuPN8z08_7a_YrvDo6viXcN0Lw_6-sPLKsqJ3U7GLz8uIZNurPg", width: 2250, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103531709444998287747\">Fortune Court (Somerset)</a>"] },
            { photoReference: "AWCwydjuT9UA2BNwCqwR-fys69dSVnKh5TI1gIIom60bs_SUTAvkLo4oCFz6Hd__WBjPQ1lGTBqT3EZfBY3kavL0Nez0rIGIbI0jKcM7Wg2Oy9t2NBQjQAvgeKMUQCvCYlJjoAVe0kIzZRZNdMoNUIKvitebQ2iC6Z3KXZf1izQIZlFuYFnPUj3pWbwl2HDN-02vLwx4J1ufX2pm0EVchBfpPbpv3DGt6zWdEpIjVFsvA-tNaghaqCOL2a2D3NLD72uBHyPhTqtlB_OlgM96QwXHyg5RQ7jL1QeYLRNbKhGx7Zq4YjAcw5r9apABE7RJbIzZ60VJhcxNJmRWIZkZvVkDwcWq-BCyeE7gkEml0RWRlsQKt9BStOpk53F3VbnhwkPBVESBPgePqeDiwsC2UmlmAvEDf277dmQ6zv014f4WWMVQHZP3Ys1UBTahBCiL1RGh", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116864690562040212680\">Soo Yee Teo</a>"] },
            { photoReference: "AWCwydi6cUE4WsTyDyjIw1sUtDFpsyTEJlxzj6p6gMvR_VriXxi06PZqq9Y2egrU2ET4KzdltwnvRBKBZvYSAu8lC0kwIp6NkMGM4Fcb82CeJM4kwvUV_y1X5TxM1YZ36pOceDibIAwDQ-vkHW76AGxEz7hdllN9gCuNvXAaerXPZVJv52O2z6Sp3AaYeFFYHTnbDnYaBz1RJqeJ7yDDa9Sok0DtzUEwwbxrbxHTBuvnEY_iO_SySDti7xX7XnSYHNbPD1OXjD2wiHJdQZ_Ov-D2AmGQoiNs-OzCUukCiMCKvMYUnLXNetTDa1YKaIxk950g327bg6jWLC8lEcwclxRrH-qkJmwtFaJJJUFOHZwASTVp3ulypdrxTBlpOmmqkRDTEVUYQ6OSsMhUmSNWc4YVsMOubC9Lgx3qpAICQN4pRr6mLF9Gn0AifqicjaKQE-b4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116437591136597008070\">魏家Wee Family</a>"] },
            { photoReference: "AWCwydgQxgcplH8nBzBFRl0SGEnXydcrLa1cANvuDoY3ZaoOkFGihqKzM-EL1srGuzDXSUvoMvwfgTrEuEa8_tAGYLRuQDVHnJH9_f-katWf2nSRic1Ja__C2zrh7ltQ7Ylra2hkogHhGIPMMtv6fFlaUBxipMHAbL_YFGlNSannijfTXMMa0VsgmeXi5cBKWcgfFLKhCKsVz3If-SFBPRmm58bGpEYkFj0Nxszz9rA0irqEupa7ZecpP1bd0kubRVkdQyRbBe_foMk39v0tuZjVCrqIH421H_hySCL_-xdLcDOQg72u-boZGIUqNm2NTCJZsuqY7BP6YxtMHib5NklbNZGYGx_TSyPv8Rs7jR2L09WphEoJtNi8kP8xjBdTunhEPMRT9M6Zns_-dU0iOg0WoIcJem3yGUckD3ZuYq6PtRywAxOhorbx2qrRyL17rg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112747557296150838827\">sh</a>"] }
        ],
        summary: "푸짐한 양과 훌륭한 서비스를 제공하는 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["포춘의 부처 요리", "다양한 중식 메뉴"],
        tips: ["직원에게 메뉴 추천을 받아보세요", "가족 생신 모임 장소로 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:30~10:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.fortunecourt.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12905305021481455416", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EC%B6%98+%EC%BD%94%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "골든 피오니": {
        photos: [],
        placeId: "ChIJD2ws16gZ2jERvHAE7mCsL4o",
        placePhotos: [
            { photoReference: "AWCwydiyunfSX47FCzNcIZzgBNzjRn0C__E385s3baZu2SwCXXwGQ6ZkLisDYlU-KB8bP0BkujL_-ahnkXCoOZp6CBeiy6hv3JjIl7DYBZ4xePiLpm9N5VejPTj_lUwtIQDrFyriR071VFUt5OivJDFfw5xG6wjcogiW9JeAJEPVTL3I2FTyJ-OdNAMLURykDGdqmMDGaLS3-7FiirMM4Cmn7gW3IYodLcsOgSCsxnh3YWkE2EtL8OXXXDKS53WGdk8Y6MSLL2sS6Sw7etJMW4R-YD2MuKMcUCiFmcjY71BYvGJ6kgJBXTKb1PGRHYmZYBxiCq6BTaP2QeTSnAKn6Y6MFvvOjG4gMioRLt989DEO32IIRiNPuQz2LQjdQyV8hcbwOgFTqVy0kc5APD3v7WY7WbSpxMqO7EXXmVkWLNZ34keaqHIfVr4ab8yh7-TFkg", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115097751140912021853\">Golden Peony</a>"] },
            { photoReference: "AWCwydiXUEJ6vD_MR2gWM94XTwp0Sa2LVxa1oP8qqiMJw-xhjrdJaUzgkBuD3N8ilmSyAqTwPJsMaAXmjtCki-JMBzb58SyTGzNGkiWAzhY1BFaapjlXPxGbceBtzLNCuGl1zZNxXssMAnXBDAzLhVy59EWmpyHc9i1vCxdpACjkiVZXoEB6GYR6JNB98FyxlGQolQTHMGJy80u-gVVkd08yPrvC7WL-NMhQUc6xNUuYyHdyxqkul4RsEOs9FkhCNaHm-1F1CdwZ9m8grdrEjmngDDBBBEXJ6bajP7fNgEj_s6CwO93J3QBkuyjUAWhyAQ-6q4fM0Y4B9PUs0EdNbuBz8Iv512CTv6_MhaDIUPgjNEEke9DesO85o3fSxLLsZhM5Boe19Ntn-j7agEcqj3UG_B1bWEi1mFB80REm9apjFyRRU3OyVLlQVE-lqOJh9Q", width: 2400, height: 1358, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115097751140912021853\">Golden Peony</a>"] },
            { photoReference: "AWCwydjJh_TlGvnj46PCe5VAeVl1IgwQrTcLrIFkUxpB1x4oCg7vgS5xygsvMO53ZxYDA4fa9Ety-ojXsvKIc5NbNnlEjUJD0zy9GiqU7mmRtplyT8BxGlgzx9tKsRLipi_12IOANBVqbGNZT0qRhoDWToS-9DtLUY5i70957j-3DDE7_YR1omz9J0ABYz3sd4Ecpkby27TUbchzdScTi5ICPW3arcFMO5hEE78VO6Hao0yZ5-Geai8NoFbEf43OQ7T3SVQJvqYhJ2K8FiBFFceddtmumpIKvvnOHS9o_D2__kJuj8terttYF_Qmild36Z0327TfHsG9iDWRKQzoWKzHwA38BjDb0V5DVnHTKJnicWI0GZndpq3Vf7YV8xFUmVIFN6OKKeIjROrBUqiaiyXeZrogSP5BK2m2dvCcHZw3PLHQmvOUlso0CH3-qva3Kw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117678505315629777537\">Eric Wong</a>"] },
            { photoReference: "AWCwydg8UTAdfOTOnvSRduEOKv2PYgf0ahRyNYunoKzNqGDrr2absn7SBoCE5Ng1n6dJuIO_ixRs2-DoFAGs9Nama3Fs5liW77RbFAghVGoRmv86kzBNWNgYOJsONiSIP-bIzhw0Y9FLoGL4K8QvK9TkQhrocFYlyCukHPhlr-TBdyWnzrxOMvVG8kwqmERCWqJe0_dbAUYnkjISACNwomehokSdtz4y_0ByEfNUHcC0z_pYCMn3vke5bsXB6OT60Rf5iA6xmLLhnn8PurxbjB8K2psCabkQFBPJq2vlLx2pC0JuSbKiF2T5QsQzf8ESpJ34s62QZMF8WAmNCpesaL-BoR1LPZ1EYFkFqSRW_lAMIDz6dNLN_BbmH5lisAltLAhszwrBr2WVcm_haZSHtKLvnCq09eN7EtbMS82M-Dpq_GsvahMBOibiV70_gV9_8N29", width: 2500, height: 1667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102484197990502221406\">Andrew P (Highlight Photography)</a>"] },
            { photoReference: "AWCwydi4LddgBax9DSgg_xv2hAE-U5yMtsrBklOfgAhSw-agwFjDAd40Q0_vAwe-ufvB2jY5ThEZV3dHJOpNSSM4Qc1ENZRWudM8arMWDDu37XR3JTDJZkZ5yWVxIAXEjYXB4Jp1fbrSFrvGStQ4n-PyL6Dv43uBu_oCaCBZCFrJZT2P3ue7pgaFHiZA0hOiw493osYs_CW-ohDrehybY_Ydu3VLnfZBCTCrZRzp3ipdiFsXNg1Fo5XM1JsDNoGRn81F-XYMaz101Y7_pMAmws56mOZhPk9UIuJsMI6DO2rh7pQ8cc5Dqul8VbMftRlQc2clc7DdziaMRd5QgY4ReVjxWqKZW_YWdY0gxdUEr8zyhXsqoLXyNxVZFf9g04JBdO-AlpNr_ie3KAOUvnP_onUbr2NNGLsqc_hEB3CJfyelAXeSXcipdbKUwCL9zCb4nYGS", width: 2500, height: 1667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102484197990502221406\">Andrew P (Highlight Photography)</a>"] }
        ],
        summary: "기념일에 방문하기 좋은 고급스러운 분위기와 뛰어난 서비스를 갖춘 중식 파인 다이닝입니다.",
        updatedAt: "2026-08-14",
        highlights: ["아름답고 정교한 음식 플레이팅", "전문적이고 세심한 서비스", "우아하고 편안한 분위기"],
        tips: ["기념일 등 특별한 날 방문을 추천합니다", "코스 요리의 구성을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중식 파인 다이닝", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 6:30~10:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 6:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hilton.com/en/hotels/sincici-conrad-singapore-marina-bay/dining/golden-peony/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9957366833449562300", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A8%EB%93%A0+%ED%94%BC%EC%98%A4%EB%8B%88+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "치엔 바이 퓨전": {
        photos: [],
        placeId: "ChIJgY-gYQAZ2jER--fzEPyOypQ",
        placePhotos: [
            { photoReference: "AWCwydhp8ElJcNa8tFk-QscmpNPZq9XZcw_S4rJLSHR0YKKC-acMYbtju2Ihn9HBYn9dBmHlwAEBg3HWDofYkZ-YEW2_fvKzXUVyLKSmLohPVoJ9_lYmZvvi3WgaxytyZFdaHSVC0eKi6MRcEjZY3UGpAEuL5jWFOWEWLJPmTzqbzJiu8BvkiEzkPSazGviLdWdymIYi4xDQddLEDxbV_W9sTAO7rH91f6Rd5WGUhHtcEjstaiK3gxXxTgxDarmetIyQ-4EbkVX-48ssBWWG4Me1mM7yop9ro0e0kbJcBERWO7TKUKBvpl2lamIv6MKLzScdMjPK8ZMPwjplp63S9qDfwsOe-mcNo3cXV8VDfGRxETVxEqxCujupfkB53rVybPzbs_Trsyr09qEtwFhpbrjLHIzxvCghyPzsouRxzvqAKyAkSKiQPglk_7mJbSruGpod", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102378426748383087724\">Qian Bai Fusion 仟佰味</a>"] },
            { photoReference: "AWCwydih6TOq8UK3vYwsmaOfQJGOvgjOc6VdoHsFwDBoQ6zYO6do45cUkAHfzJcIfMiIFQlSVXaGf1t4tPuvvK5YYPvChmGBVHI_PreQ3bqVDTvnBIpHyCwWq1I7LmFJQJS5grx9u3MS2EXJkSUzl2wtKcWsW1axAxuTgEokd6Qx7w51YvuQzHjY2idazIulrOKaNrUwpsV6qttYcKSKcCeWJRks8dfyMULZ4Q8vPwcEEyWkeDMyaWwxHb2kxFndZsOJgK0RXPkP_ayQgeuScO0Eq0767oGzBI4p_lZAsTfRNtroSRolIGBngVu3NWn2GQos4Bvb3pjILsLVH6vwubgc8_scsIwyRG-tOrQ9oJo6AkyZmF-DA5QUdfTF-2lhpQqSf9rCybnEpK7MizmV1-ziJ9MQGUGzgS5CeSCHX1TJmrmV5Lh4bcstNN0jwE5kCKSz", width: 800, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102378426748383087724\">Qian Bai Fusion 仟佰味</a>"] },
            { photoReference: "AWCwydhPC_ZUI38LAB408DQvyK-dZh22lIAIcwfN9YJYlidrBc5H9OAdXD5OVBpzOAEhWov3Z8584eJUTeUybLnETDwp7cYiAsIcegN9fTW_Xp_qjNAFzyPVu0zp6VyN8eAkOexKhncwnFGqwA3SDFOwKTFB-17BZ5qJTj9uvJeOelokRrXO8RUr7ZTG4bMe7n4calil0x6LVEt09NPXwH-vRcDekHg56IJUpdG98f9X_Tzm2PCLHLhHOwBc0swYKUH2xkwXZG68Q-P4ANiERlaIbH5NImDjabfIHl9aRWDv-Cf1pK6MVRINpNvhsDcXlJPZ4HDeGCS9vuGM31ug4j3mtTshy7qR4qKKJiMrx_4Obte0IBjKAqnP_l67KmotPYTi2X8IkAzozqKcDmXUaBw9MY34u1IrzKM7eOmYrz6684RM3JFzvSgPJI_UXd0IUu-1", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110865954743511597419\">milen polimenov</a>"] },
            { photoReference: "AWCwydhAwg1xBEbzzOeMdPF8VKYiJwGr7clfb0x_FNr5sbvGOSrNchEbQUSnfHUbvSYprvZu3Z23v6RKPekp1PyStdKdy6GYgdMWXOK6RjXAahwnjG7XTrPpLjvM8FeC1fZCvscjJRSOFl_yh_c8bBVJxBMwF1f5eM2ntIriS9ko82sJw4KNKFmFBGfkAVQqILzFiJBNrVsqgCG09r_TJmRFkZ2fzKbG_X0Yc7RfoIM58OUb2p_bCqBWwQOdKTWDOS64IYq4O95dCJqlneICTiWs3oUiZ_AYMRahflBnA4vf0SDYD9X6dzNpkRZ_RivQPi_yNws2GXn3AGpSbnYfb5L-TuQtyYIXI_nEj9UnhG244ZZ3t5Dudc4tZ92Kpu4QvZMiY1lSgGXAlq8m7QtEsEJicEGamAbaa6I8VudKARBdaxsW8Uis_hEBgYV2qvA_YAvH", width: 1290, height: 901, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102378426748383087724\">Qian Bai Fusion 仟佰味</a>"] },
            { photoReference: "AWCwydhGt_GUFkk1Fclf0d0TES8CCxNDuPzK_-xbYML8aRQldYu9FtEQn7bs9uTH-SlBCdTvex3KB4n99QnXNfVwAoNMgGWao_IfKjg7Uw2Y0Eg_pSzi3sn76tD5u8gkCOx4mhpsvdRi2-QQ7R2kw3H8b7aunz7vNWNaQZuZf469Ckd_f6mTevbYrsRk9Bw9bNrUT4dMetKkCz17fX9qrZDLGHZ4F1FvhQY6kjXTVYu_G2vGpASkdgKqtZ8zPBZrNJsn-oEOk4iYtnVRB31mgPHF2WbMNEq6CNWJn9_Z4kipk6WZ8-56yF7KV-balEPsZf6FvzLTZ1cjw5EEx5kW17IU-vBjKspiS1R5obBY6XTqdaCrgUSn-g1AHZaaedmHWByrFcOAIGE7gjWxlftXjnW-Nr6r5SYd4PNy6wIEenBL_5nIM3r1sl9AxEnNXBMH8jUq", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115648691571711586475\">Elvin Nilay Semiz</a>"] }
        ],
        summary: "높은 평점과 맛있는 요리로 사랑받는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["훌륭한 음식 맛", "친절하고 정중한 서비스"],
        tips: ["칠리 크랩과 면 요리를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10721539076176209915", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%EC%97%94+%EB%B0%94%EC%9D%B4+%ED%93%A8%EC%A0%84+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "샤오 @ 홀랜드 빌리지": {
        photos: [],
        placeId: "ChIJb9sgA_Ib2jERuj9Ozvrwc7A",
        placePhotos: [
            { photoReference: "AWCwydinYgE61VxKkPW1LxMxu-7VUHl--Cg084JN9Yb4LB7Zn_GMcBXIg_lz45PYnluanWz6W8m_6g7aMX-CcWDHhFT-Axknw-k_CHpkduQjaNqxYnV9cF6-UKSeo3S_5qS9T3iQtBsP21CjTAjlx3JC3qalEvcWOKzdcIfZ6jkfNz9dqbuVBtU4LkBBBWP9wK0JArqJKlNZ5m9JnJKZVf0tZN2VWjrcV71DKRoCPD_XZkoqVZfUlUlN9iUp_f1K6gN0b53Zj6Y-PYCg9r_pym1ZUBaxuCAtqGhjJtpUeH6uGc0HHk4cBMA-FFMK3p72mG73iWfCwfXF6LvVWytcrz5hd8aLEcjesRX7NNKVsuzQ8zfdO0JEB5-AEvzOBxZXsM5wrRyXm80wDyXCXKCVApYAJUeMdVKB-5KsXzEhIVSHOUx1xLcXImn43XJsraVWlHox", width: 683, height: 911, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104800577992909905268\">SHAO 燒 @ Holland Village | Modern Teochew Tapas 潮汕小馆</a>"] },
            { photoReference: "AWCwydghoNeJJwEM0NetmjcCcAs182hJ7ZbEpocakQTf63qGofhzzjWym0ByZBqBqJ2UMeRqGzJnKUc0SLzOBZSMemgBUAJFrddLWABeqew39_CqA7oXE-Qs56Aa533GBNJbhjH1b6useGobXzKb_CPTdu08hZxzmyqBRIBFcM2aOWGKSES_2zA81soF2Ko1keeUOH-feLMmuv2-qsqFD-bcStlE4yP1X--fgN6Q6NidAlsR9kiv1h2xu4UuLiBdPmGjyYqKL9Fromgr12a6QsG9qIbGPMKJ6btJCStoYg-g35rr4XmgflJdIYlm2gJhb4O1-YVGTv1qVpjre8aNEHWrVgHTxryQx9Tbpl80ZcbZaeV8Ne_4-_2ZO2e3_6_qw6VQMnRWyE51Q-qSTRKVOb-124zyN-WQ0AkaU11F29kJ-Qsnok6xw9KSSq79QRCl5Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100347121340842971753\">Flyers Foody</a>"] },
            { photoReference: "AWCwydjyi-uTHkc2HYQC_YZbXut0wptpX59O7-5VSRQj1Bs7Wu1Bu6pxri1TsaTY0DmHDVeLdRILj4vGChENvfZ4INvEkmtLL51MwY5-koWO2n9aF82UpIdB_WCfZYd8h566A5Ryp-QxOX4AyCmC1LMzNS3WOUzseTIFiduwn-0fGvGPKFTblWaMGljAu-QMg_aBthJkoG_slStXc4me4oWf8oLPAVtrtS9o9Ka9JBC2VSoKD2bMeF5JuiLzI11zavFaBVcZscRkYSeYGSIf_nBexJd9msJt-T9eY3lT6fKJgjzj6ZH76ITyQae2whHGC-H8gO1kqpqjER_3tBdKI6w2YCluzaKjO-1OcZ_tiA-veptctt-a6F6t3PCV61AtfQ3b5RVrDLr8z_A62mI_u6-OVcrXTlgTWMzxSvQunXP64dRPYhbrafzwCPrCIXeQfvVf", width: 3840, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104800577992909905268\">SHAO 燒 @ Holland Village | Modern Teochew Tapas 潮汕小馆</a>"] },
            { photoReference: "AWCwydgeIUVXltNinKWj7m90B7xqwxhIYtzUbBqJN_YP9ZmuVK-Jfu7OihCiaqVz1FLghLVcuX6CemIQBYV1excnwGDFEDF5w7P_1NCJ3jCiuCXwiavtwpzFaq4VduarTcWpEjxTVQNc11hEdWangtzpSpB0U3w9cB4b8WJLKbP_LR-pETNKPJwvJRG97hgSjRsmSdJ_G4v1x4mdNX0YpiNlcDhl3_xyvQAIYIwcL-Z_D3EGGTLRCV9nDaxViONjpUNgDkI0sTJAifi7r54MINFz4xFCJ1morb9AKswxOEBllAFTSesmqLQfOHkI-uMYPW0s7rqrBvlL5Lm6fu6tGZ95Q75RTDKAzP7buMncTLUgll4SvfJiPBLJtRq4OJH2k5XlR2ROtXXSJf6HEiM1ymo1ov3e-KuSqNYY9zwWxa8Q2metqfj79-n_yj8qJMFaQVLP", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106534596496478378354\">Esther Quek</a>"] },
            { photoReference: "AWCwydipkI7tHC0I2jn2-OKJvHppJkTV5lRKvFHZN1SrkfrHnyYLhlAqR38lbI0TdhmAHWdDKMe-P0phdm7JrHJ8-bpkUZ7AFqALhLbSzHFgMEZZ_-hlK3vl-SLu3iofkuIUwfBTFEZc8mtvCk82PPuteXRQwg89CClPfggm66G6uNyHoZsk0YJ94E9tM88qeUF5i9qZ5LgDVfgDK6YTDXK3U4-BYwnAbJTCxyPClXDLc8h99G2uPWNvchb5gQpl6g1sQ-t5o_d98mvXtK9A8Nzv2XdoRElI2RUIlOkYfmI1tD2ULveWYNeMdS4ai0PWGtQNKt5zi3aaZqXmmLElSMY_zKABpgLtFKwdP6f0i6PAUgTb_CXjW78GBlWa3Jyztw9s7zPh5mKBy7c1RkaoC28gUuvF9QFOLLOj0xt1C-7tb2N_q2d8vG-iy0qi6Ah19Q", width: 2048, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107696053847598005767\">Bryan Chew</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰가 증명하는 검증된 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 해산물 죽", "정성스러운 서비스"],
        tips: ["바쁜 시간대에도 세심한 서비스를 경험할 수 있습니다", "다양한 메뉴를 선택할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:00; 화요일: 오전 11:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.shaotapas.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12714771132990767034", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%A4%EC%98%A4+%40+%ED%99%80%EB%9E%9C%EB%93%9C+%EB%B9%8C%EB%A6%AC%EC%A7%80+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
