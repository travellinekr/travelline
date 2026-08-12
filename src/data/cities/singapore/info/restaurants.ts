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
};

export default info;
