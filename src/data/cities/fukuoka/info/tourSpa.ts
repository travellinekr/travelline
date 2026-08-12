import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "오호리 공원": {
        photos: ["/images/fukuoka/info/tourSpa/ohori-park-fukuoka.jpg"],
        placeId: "ChIJx6TbjMyTQTURmPdN7915780",
        placePhotos: [
            { photoReference: "AWCwydiyurB32c0i2cJ8iwU32JxvI08mlZR-Iu1oZyUxZFtt1Wx_0cNFtrSe859gfy8Y4hqzRYavE954-YeR58hbIv6_8whGm2s4wB8c5YiazLwF9tBbrRIM5IIhnbkvJA6HwG3ju7IxpcSw6AK-EUmPlJ1-F0BJfSwNrQMYomLlOzntlAGO5IYWJbFcGJoUdEYu4oWZXsp-znr4Cn0L4aLmo4kF4qfM-p4labPElK5CD6wgtLBCIjW2JdUhFrGdevlIacMvT-3PzWmNIO2jTuXTN9f6Vh31HiIEl5jhr47FIOMraeEhKkhHY_3ry4whlGqgtdDS5wd66y8qGUbvUDKErgBm3YmhCl_2jJhxsd9_aX_GkEQ0Zl9nqKwsYP4F5VzSyTzPAnMx9aHNG4Egfqga0SttDSwSWzRxfRBJy4eK9drFMg", width: 4800, height: 3997, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104172091704353610208\">Leif Head</a>"] },
            { photoReference: "AWCwydi0a2Po8HwRQzj1ki6d-VSevhBKlHyjjDOacutwVbOzBQB4RrGViPfOc4I36Fe3fas1Mpu7XXYBubRIuDSKyvIro2FtJQuF1ubqU-RNg1ar1pZAfcc1i3V_Se9H92PwB_QNaksIr-tOpntjgM0V4_IYUjOHigBN-W-VbcIqIQgDUR3xm0Qmr4qfPOmDuPwqi95PfXA_R2zDKg2yamCulApG9jKd8_lm0iUQdBEQo2XEQ69MJAkAfdjz7KCXY6KUoqopokiM5g4-Ho-fZoWOif2xXRJc59W5veUV0NtNjCt8cnTmCCPnJ9jAOztT3ZvYSzoGH8-8tfuPYN3R5TTGhnLTtuWAMYFY9y9x7GZM7d43rFz2KxHW4fSLYi_ccKbbd36lvg1nJ5-Q4Kqp7c87iYcGLgGgbveT2gZcpD93SZb2MJ5i", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100562026965587148733\">jin hee choi</a>"] },
            { photoReference: "AWCwydj4SrYGSidAUde9mdvlO_HfVC0CWTUlqPVPwCDTl76Ccdu2cIZ2hODo9xTptwAqaJYQ2K_K-YgXfW2nWGKYPHkJU4oYSFsR1amtkh3eryxGtcpJBdWhWM_lg3XzCyIrWRirj82w_k70lcXNr6jcgPSXkTatWnnZX5VZL6JXEnxEnvWNJOj3bPJqCKhswYPTAQLqxZWOgEIvBce_qzNxU3roURzZGCfyplouSINbWjoo7ffAJcmCJ2juzKPdHtvUThLy4tU-wMt3naSpkrMXPWsOsfeB63c6N18xRsne4NSFVLvlGSEus70O2LDMSpf4zJDrbRzYfGlIaqLIylFszR_l4nYhC1Fr6zO72yQ3UmRBfLO4ym__N_9-dzTMJeSiRGDXMSizpGUoJ9rPPVOVI6iqMrG62GCw5mkr0mZIGzK1UvA", width: 4439, height: 3604, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114879831152939516220\">seiichi nozaki</a>"] },
            { photoReference: "AWCwydhTBrmgGChA2u6cE6e2jj-D_8DeQqCbWRfrSZ_EDTndxs8kuX6MZ7eQSiVOWW2UmyoaEFSanxxZDWi14QsRl7U8hYLBKMQRRLzTmAGwfunShjLRhL-vab7d8f8ndKILhxpU5lsuqTTV9ccUk-xAwvfFnsZFNp4QNc0cMZo8qSigwYk64fPRNnacLjkHQOKkCg6d8SwL_LUtBsoTTYxLLBRj84qpTuz23FAUJ4hTFKMy4CM2ecqAW9FXSq68TmYVPCAr5kKK08l3M6kYLKzT75EoY4hoGmfYWC1naifwTK-WmVwsn_sUvpn9hK7-sYHu2ufYkAfOA0qnXCw1uD1NjRg6p-nDT2warpOYiZ4BHclu4PNmrmfYP4OTTJ8P1OVUYtUasUtGwVVeEvzA5-CVZS6igrr8ewNEiQRAcB3cREZYBw", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105660218456550421928\">美保子</a>"] },
            { photoReference: "AWCwydhE7kauBuZFtbw4y8k4bV9YO_DuBxaGs2w1COLZHd3EiDBZ6igTSwpHUKQEFbLejBx1XBDw-kvnJbtM4x0M24Vj7q_L88m-YIr82IYWXOt2aRkcBS90JzjxjnnOKUHOD5xykwyi02XVIWJ9ENaR4DdvsPWInYWDxq-l88MlhKhcRw3GqDbviI16394xb1DNUextYrbLgBxNEWQnpfPcnBjagiF0hQXdC64Y6r1c9mamjoPr3s0_GwqxUOxjRSGH6-sXTceS3meXdSmOE3lmJQhlkB81INtUGf15kl96a0DIJ6VnuxfzNNL2Faht5lNy1sFy_Y55dD8aqZc85AYPHAQbXaV72o_MvkF0L7mWXFFsBE-WP0n0KZ1EzjeXjkdsrFvt5zAzrKX-eP1v9BuT4L41kzw9V5jkxqnv8V32GdaG1msc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100839911424147579764\">Tarek Ali</a>"] }
        ],
        summary: "도심 속 호수 산책과 카페 투어를 즐기기 좋은 힐링 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["여유로운 호숫가 산책로", "공원 내 감성적인 카페들"],
        tips: ["피크닉 매트를 챙겨가면 더욱 여유로운 시간을 보낼 수 있어요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒810-0051 Fukuoka, Chuo Ward, Ōhorikōen, 1 公園管理事務所", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.ohorikouen.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14839213291318671256", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%98%B8%EB%A6%AC+%EA%B3%B5%EC%9B%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후쿠오카 타워": {
        photos: ["/images/fukuoka/info/tourSpa/fukuoka-tower.jpg"],
        placeId: "ChIJAQAEI6qTQTURLZF6YTY7dPk",
        placePhotos: [
            { photoReference: "AWCwydgX_I2tjaktZrBCvphbjpeQFrBR2f_lya9ygVC2Ezg3wWh-27MeN8LNC1yTS1pQxU-Pl5SLUl4MFX3FdNVfOklmcbxtum2LKmYJRWy-UV5Ybyu1vCdpe3k4ZYrxKiSKgQhjwqvdB1ypVaGamhASIhtxv97Wx4jdqXnvcfYZ3rjl89fnE-K9VyuC7943dH2rA4IkDVDeq7i2qYcrGBIPEwHnleLUEUyqxJVoVhmHYy1wZ7w7Yv_Awk90RW0wV783A9w2X9tHAhAaiisW_g2cqi6D3w6Y2uVqI7WUuwBEgS8CGpvNg2HbCwn_LZyM5oS3QF33msPCiuOEb2ol18QYBhXmtgGrOzzNHqhtOm4fFoqwzJ_b_q48YUwHBbDmqtGpFdxN-VeCAWng5UUnLEPFlG_WZ_FScfZIzE5yHFqPJS0soL-Euj52zlBWkpo0BUqw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101486606476720562746\">キャスカ</a>"] },
            { photoReference: "AWCwydi9AzEaEy24MJl_2-u87tuXF-4q-E6TkR8_Ood-Ga-9sMK_GIcMKu8hU8eb_9jbmjFCsS4fBAA3kdntqS8I8r3Of3jM2E9EtHN7cW3Xp22t_Nk7gHi4cA5gNBNwPviZTA0r-aohqOVYKODcxnAjAcHv_7yFsl6IPKTfmOQHBQilei37giQLGJB_5RUQ18qsJPun6pYGYf031yn9gZhVo8D8vcYgmMwEXbIBMQ2ZEyGn8_ele72bHUx4H0A0nlRwZc9gjds_xedLhTQdtneg2uzRxGQiM9j1Cd0f8gsQ_PzAS55Kq8aQkkEz1tcddcJw0xsW_mlmMM2oE4JP1pRD-P850ZjnQ4GLalvRe8-4xLWWfQCBFa5qVQxiwESXGGA1vFtCb0ZrtvTbBWTHSAqC_lIRppV14Gze8cOhMjT9B7meVsoq", width: 1108, height: 1478, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111022654421786146001\">佐藤</a>"] },
            { photoReference: "AWCwydiz-SMHurVWmae9F688AdeVZbsIvA2DF3zbKMG8yIXUazA_trFrprZcf4o_nKRiSicbYMho9MItqX5Be3xPuZhXe2nomtMwlRvu-lrQuBv-JPMFOJPovMMo1627EIEewUKXpOi2QScVjMLQEQNxM6RZaHDJPka3dp5kAEe6pjz6OJ_7yoGsjxWZSOu0FofpuWn0wa0ayIpDXNDsQ07RS9pB9X1hsnYV0jbP61rzcfwl_tq1V8nVVr8rH11CLrUSu_OJILBOzSB41mmQRym5H1AMOY-bo2bnerjk1ZCZXybFgMJDCdeSNvbRz_9tztumzTKG5i0G-gAfx6-TRQly_60YdY81z_KepapgOvhur7j9VOqODixNZy4qLjee6KN0Uos7btWlWWQH7yT6aT9BHcYGhPHdUj_y9yjHdvRI-YRvsw", width: 720, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118076626025873828737\">福岡タワー</a>"] },
            { photoReference: "AWCwydjpab2WMFdw0tYDY64gK8MKMmRO9ynOU3CLMo1FNpLBkCDWgO7lw3s3qgoFuuGiAensOERHT6N3VsHnGyqsNlkmkqkIeGYOrD4lUeRCGXNqNaZbcaIzKfokfMJy7hYulxwxvvOeFZQA5YCuSHPFvM5LqlvAfCE2ZgQFonf-wh3bdAgQRT4P3gbXOPF0eHT05hA2grtulrzRUSAeMM3usNR4pteTfrrmRb0qadPjsFwOdlnAmXsFiwrtmEne4edkUo6VtgO4fij7Tkv4si9L2eDwMrgVcAzA69IJwvfby04ZOvRdhctmglMKhs6RfARtWs5njrPrx4YvzeVOkUP4jAN4RhhfoQdvfdf6mk6V9sh9FuBdrxMBthl-NIoeKQE0Vw23Q_hRVMbED8L7o_EnF31GkdVT7uAdhU8XjoNcaky3G3H3", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110677890215253555529\">風まかせ</a>"] },
            { photoReference: "AWCwydjE6fTmjux-a79wS0_sacFG2LmTu982XiO0EPS5Vbph5WB4mN4ZfoA9i45ZL-E9ZLiUeEmFz5CdonlGBs9pcec0D366RQ-dDD091GvRQ-Lg3QRHgL5XGzLizT98pzYSTE8lW_eg7EoeDbR_P8zySRx9P4Ldc55zIc8s72DqKjRWcx-8niCJvLyuOCVLkoz6hfU4izIP7Ew-XDopABF6zy5YLK8SXnaqaRlNiRJbPFbgYBqxASMt6GcE7P86gojiiegY79tvstW9-LD5s8DhsThPYLNeCZlTmfAUU8At-vVzNwnConPFJxHzKDsEZxlakRtJzRpHNTKPPWtChICTIBa9BmT_t6TCxaY7lnMkWGR73qQ_qo6vC1-JRoWb24WozNqaufVJTJYBjkID-YI3i0CejJ88YGzERQ4WKe0FsbZWuTIO", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116527827383278927111\">VanCanh Nguyen</a>"] }
        ],
        summary: "모모치 해변의 아름다운 전망과 야경을 한눈에 담는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 바다 뷰", "환상적인 일몰과 야경"],
        tips: ["해질녘에 맞춰 방문해 노을과 야경을 모두 감상해 보세요."],
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2-chōme-3-26 Momochihama, Sawara Ward, Fukuoka, 814-0001 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.fukuokatower.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17975057117492187437", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%83%80%EC%9B%8C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다자이후 텐만구": {
        photos: ["/images/fukuoka/info/tourSpa/dazaifu-tenmangu-fukuoka.jpg"],
        placeId: "ChIJzfvrKp-bQTURl65fp6vRJLg",
        placePhotos: [
            { photoReference: "AWCwydjPrfDcFcwPrXXd5IbdYrg9dE7Xi5KJykxwLrpRjI_A4WKN8ggOG3eQEMUCcP5xS7cB9Dbk19l1Dt6FEc1Y_d2pm2YbSDryWsYYy12yZ3-ovFv_cT0SRZ45C2-wa-YSIyGo1T2_lz6_8TiEejuNhd8dCm_qYV8WFhmEMwVSH1ogevGmNQJiHkGfFQ_9tVCgjZACjNVoQiivKrBm8D2GPxyXYR_h7q8suEOeIohH51NgxKLW3XOjeK_LTAqYd03PpMhRjFx3iMI3rCLgohpefS2MIFO6p593pqNsXqGMAb6QKQ67Hx54zKbhp4wVONqScoqJD7bkXdbjJYuSOjq1lWY4FH6HcxtXct3Czm5FiZ3yBIrLavTxwtyyytdBsujDZWsGmDm8Jkaa36-0BLzM0ihjOO7JAikbs4aLjk2Wgr7EUTo", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102465288720207012989\">もりくま</a>"] },
            { photoReference: "AWCwydhB7F7Oms944AKdfqPYnkBB5px-gBG_UJzSVV9v16o59zmu9JSo9kSbO_y3BZbkKeAIyPYYQYKaKAgTgRF9i9f8bl46pTf1Hb42pj4H5kPwuBAk-F4xQPrM0a8QkH6VaY6-hTWsRPtyYwfxiMgf1dc8HqKKX64An4VklEUDNRS9LBPef8SF6i18YlTJbdknhmlS71LLZ2yN3HLuAokqfdR9dH8jxmVBkHO22yzmATXiCMYSYf-0CTafV9yW6hpX_R6uWtu---5w8SJBTvllysu4v1kP9tUqH10iuoCxjt2x6CgxNkf7IZJ4DZawGuh6goCCtQfQa42y0zrsygG8bIPQVeY40C8izxEXmWPQKxZ5LYOjVVD1Yon9tyvthmo02HPPudH4HtzgwHQSVbsndI1oZE6PgXUAC3mnsurW3MgU5LKqCVfwIANu2VWS4z7H", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100538998969058843612\">仲宗根 保</a>"] },
            { photoReference: "AWCwydh3EWfWoMi3pCpNZC9MF8z_wnpx7YC3Obj3Quj5FmsAN5dbmgyRAvurSTfhNQowTvL_Y3GWUrnxleFaOhE63ZZunROcgfDU2VukBr2yqOYOLCDIC_FVKDkhYkyyV9orv8Qm-FbrlQhwtWuQ7arHDK3aZT62ocpx50VrdPTBBTGAX2hKwMn2pYpQVBeamBCWEtiCyvIQK5Nza-amAHOFKU4Qu5apWk1WSmam-sT13Tnal5LFv0sivdWvDlhvZ3FP3Dit23r5i21SrMM22XkftOSMsi1Kf3QCdqxaq1vPj045uTi1A6tAIYSu9et9-JH7EfkM8_zC9Kesl35z_jaudLwh9N2j1HaawMHXJTvqZY2l44nmnSCVEOScgDuByLbq9BvYobX3aTa3OLAVTGbph5ZDC5r0FiPvZ4W03Fe9U7vN3lfg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115672731749423039099\">Prince Wongaroon</a>"] },
            { photoReference: "AWCwydirdufua3UUUPFkWqD4oZ98xIf969KU1swsPxMLP7eRw3S0yJI59MJ4XY2WWCNwjrVUlYQSBYmRAzYLIXEFVccdzeVqrpyimwnEng4UawW6C8VTA7zF41MKq9AnzMtDyBSockAQ6n7dSRYFwEiQoZlwF-gpUcxzDDCRErAjQoxJAJSKj4ggWcSKX86OCZQEWdheDQmha9GzXAkocOhyL0Cyed0aQZ_89dt36j3Lx5r3QUu6IaC7yUDMbGkCmpNh2796kVHOaKSRFBU4dj-1Htwq4GeBHtgq_8p0OtXnBgR94InX-YLjkCacQ5BJLLx0kl4NC3e3mehMF3WTEDYDL1jxI0HH4DvlnlMdnuE62J9qw25QdN3oRP3vDUydpVc_sSNLvnC_TSp_vKLnDMWNhiNp-osjikNGhdYk-K9h-h1qZw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112505163042277008279\">汪玉珊</a>"] },
            { photoReference: "AWCwydho18WKkHKvYMcsNGzee47BTd1WRGrzpTlHIkl2oHWmt7EwkySSHvKQe6_h8-4qMmM6qustTaBRcovnzV4PXjot-KAkOyl6_MRMR2y_RrWm4dVbAUOItR3J7Vy-wA6kj7vN3PAQhikPzzvZTHTkBRx5BuW4_jLTivCBE_qrYTgLXq1026ky20iGSQbxanp3oaXOzDJYKfil4baZjOeBu79Bx3HcghLHj4YB5xIbJze-b111V3hltmF2iG6NFyIg1U8jsfhHteWTXxoNjJxgiwgVLCCdjdNafqiPx5m0bSjIQUJ6tCWsXxk9jI405UnN48qdPBFXkOmhdAWe0C_m3CmxOLfCE1TILQImE3szIyK4v81TToIR09qcm0jHjDv8h6XvxhoP9owhoP4TeNjpVxzw0Of8_uksKjTsGtnEry5IsQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112433015083014633712\">이병문</a>"] }
        ],
        summary: "학문의 신을 모신 신사로, 맛있는 간식거리와 함께 즐기는 근교 여행지입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고즈넉한 참배길", "명물 우메가에모치"],
        tips: ["참배길 주변의 다양한 길거리 음식을 맛보는 재미를 놓치지 마세요."],
        hours: "월요일: 오전 6:00 ~ 오후 7:30; 화요일: 오전 6:00 ~ 오후 7:30",
        duration: "반나절",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "4-chōme-7-1 Saifu, Dazaifu, Fukuoka 818-0117 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.dazaifutenmangu.or.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13268960937318002327", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9E%90%EC%9D%B4%ED%9B%84+%ED%85%90%EB%A7%8C%EA%B5%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "구시다 신사": {
        photos: ["/images/fukuoka/info/tourSpa/kushida-shrine-fukuoka.jpg"],
        placeId: "ChIJV2pTquqRQTURpI1FhH5siaE",
        placePhotos: [
            { photoReference: "AWCwydgN0drzW-xysbjZjI71w6r6MzUWtKISdWTzD8FvFz9IOWXaXu2Vo3OycTiVbQg0WNWtMaRNx-5YGMEGSUgLJIlH7j0rLeCFcV4nzye-oLsTTOTXG2hk8uBx42So-59NBnMxbKGYoEKk1g8heA8iP34qEFnodbH_IF8YdI-oSrgB7NMdUB5bv1fxMyxU_NtmcqBMQ4TRbFCMwvEDryMFeBw1Ic_yGPmF4PbxjvBTAgK1KwPkd5mYIcN8paASKCWgOVV4ijVmiVq7qGZTTTM5cqqMc-ozVOSIaNzpNs3ZrphumYo1EEHWgb1DJaGMA5NYxCKRiY2OpbDGNodUbZvhaOmTdAEQQCoumHZrjHSbGNebg8VX-UNl96XJEDgDyyIsIB7bK_NGgGt_GicQwMZeK5XjcJQUHpIIGigprInqS161h6wb", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107729070838089905688\">Nattarat Juntien</a>"] },
            { photoReference: "AWCwydgMcJRFEelOpsJfIMrJCYz8Fw2i2zB82JwjTe33n31g73sLsDH83Oew8YOpqgs4a3W9acQnifdUfVFvMVIKgRTkzYdnFXvoF7FnDbXWVLXuXFZHM6KBghwexvgcqG06WC10Lu96kQM6mDeRFUBZs0QU9mGjdhheDxyRwh4uhBkh650-CAFSY4GW-jrfExZOch2NAHxdVSKanFCpfy-UhpVWWgvlzqTI6DaQBj9tBpwhKFNESpSQ4SU8ipOpt0z_pCSkrF4p3K5a2esqpCah0nV0kHkQ3DFO4l8W1zENyxK7_MWcO3RchcJRvWRbpAfbuOUncHrbMvy3X74mdnISf73Hf6AuV_hhZHz3clCJBgaF1gJxxKph8r7GOmzRKZQhB1KY_sxQgpaXI-o7bG4a6_31g3yHiy1iR5PvnnrZ3wfXC48Nmp_v3uFcNqQw17u_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104963730388462700279\">Victoria Chen</a>"] },
            { photoReference: "AWCwydg2nyTQ6UQDDsyBA8_h6_oGVTZgkuuqptSDyaeJE-UK3SDc1m0sW0T20HN1rCc7UnnISCkqhVaRKQ_-w4qTDQGfuAQrzPU_LXCpPROlzNMDCOnaOWbK5bwBFGUYXA3561s9Ug0nA9uy0ke5IYdPsCwYTD7Bszu0aM_uyE4etwBCgSrij6rOzb55HbDgdhhp2Qs1e9IbM7u6PTIxJaxZ2UKvctye79fnzWbQMIdOxX-aOOwksqMEsRptfjEsRQZBY0XRhwwdtauIJSYPTWaTw985B8d506mPskvMO-EgrCCC-QT54FiVkYHV2tsOsyQvr3Ono7v1YQtuOYH0GtPm_gNNT47gO5jeWBaQ7eWKpblSQjVrXrwYADEzvCDxN3l5TLI0mG8kcCZmbdwF0eh_jd3KK2LyudOIZg37FtOGjRM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102670587917365187015\">familia sagrada</a>"] },
            { photoReference: "AWCwydi5qDottj58Ymwwsso-nVPJlX97HyKYz0V6qoiOEzFoTc20M55Ml4WP6CxLDIVbqrCJKMY0-xbtaGBxJ-ZY2vkRIgqp7EqQ6AsAz1eXblzh60rlZpkT7YJjilxBoNeRWx7gFpiBeFD548TyfZM1AhSFykaFTcAAvL409K1KzsudUIEwrI0mPjhUJ_1_BcGfDT-0m6rvihj5n2nlTnv3wIRLA55B-CxWJKMhA7WXz-fwRBO1rf0xrSBEBXZE9krLwMTodH1N-BZbkpr1TDJNMi3X0POZsnLg0O1XPPLKe3wPwZRmJbpQQQtct9LQmaUjbiMEgyOfjS2_ml1TRXm7mctlnHq5J8fxtj8G7XsehbqO7g_n1nsGxjH7EDo3cCW0dkR8RYtByMlAHv7CPNTvbE_F2qa0fUgwdQEuQVYqb29YWdFF", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101379547898419670350\">黃翊彰</a>"] },
            { photoReference: "AWCwydhrUydP_J2xUZFmsq1DnR8_D8_zbkRB-HZUjh7BhoQ-1dldasOrZ0kcH_FLumAToBhzxZ1NSynGYPnoSD5H8Ju02P1ulin53B3lfuOPKG4ukYV0o5ykqFY74ED-T64muExOqE012LE1WYn5WSL3RmOOmL5xnAgL5sQxSguWXypQKVc_qPjKNJpbJrlc2xnQU9ULQdWIekCl1WwENAHXo1tsAz8JC91RvIVoydIADzgsfPBGWsePdW8JtgGbPi5BIXXHybgOVkCF-gMNo-1uLh_-aMlYOFc6Q31-YHqXN95iZ4EwJhv2RR9ZE_DdtBX1u759gmhlBfndzhkrPESpdOTH3NFxooGq-r5YFnvuwpg0uKOrTq60Bb9IImSY5v7kxnXwu-DQyPZ7ynFAqo79l0Z4R3pUn2W53bYYoaCgdqicq5U", width: 1136, height: 758, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103969965449243055308\">葉銓贊</a>"] }
        ],
        summary: "하카타 기온 야마카사와 연결되는 도심 대표 신사입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타 기온 야마카사와 연결되는 도심 대표 신사입니다.", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "30분~1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-41 Kamikawabatamachi, Hakata Ward, Fukuoka, 812-0026 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://fukuoka-jinjacho.or.jp/area/fukuoka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11639954002556587428", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AC%EC%8B%9C%EB%8B%A4+%EC%8B%A0%EC%82%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팀랩 포레스트 후쿠오카": {
        photos: ["/images/fukuoka/info/tourSpa/teamlab-forest-fukuoka.jpg"],
        placeId: "ChIJvQyI9LSTQTURLADawDAPIw0",
        placePhotos: [
            { photoReference: "AWCwydjil6usnP15DM2DnIId5OBJxjwMvCxbXea1s2hzWTyDHXSWmMPxDnp65-SYDDyh9TxKiPdegK_Of1lJWisjF8fPL-zjMXot4xwCcP_hTz_9OvuvWoEEjl3v4cTehd49tlTRsSNLhmkg_LE_92PZd5bXtxrfJFuiu2weXp_IlfV_ERlRmpsRBq-pqB8wpgdB0i3L-PCHAhs4RByraZI237yMZ-FuPH1TDiAmoYDmi6HFWe59SYga_wfVCvj3eha3X1uRcDVeKvblZIJl_F5k5J3Vc1jcE286dQHuz7FjN-9D1-XZ-TG7jGVCIs5XSJ9kKlPIUBEYARy5iXF6HAjNsSpdYvqYIMHtZKtBy1eN4a-KwBxRCSUMjsv2cXob4U4SFgop7-MZL0Ci-6zlV3lHUpAHOaEj51XQk_0EXdE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107419748111272666334\">林智俊</a>"] },
            { photoReference: "AWCwydg-2gTRdHYpkLmCqrR1rJIEyFfKuGUiIQeB9VbQN9BhkwYmucQ93bwYWBtkkvAXk3joPBIQ9k32A85hQlxxDqnXdjXiR4UkgjoSXQwKriwXnPAdWFUyKcuaQVEzudnvuucWGDhiYiwHlEfxByHKfu3LdnpQr0fo6iPZ6-kqm3m53BWQruo4nP87MQaR-yY-UAdUbFBthvq9SGc7fqXuPkR44sMH8DCjknZA41zqA3zo63CDPEqfdoczKoBxzMIH9YaYqFJS_nQMv1B9-evIQmENpa1tQXSg1Wm6QGhfHnbxuVL6mpwit_0VBYzVwE2evno0F4a1OboFf4hQMUfpaE4afc8T4PUgv01lmatc2D1SeWLh_V610Fn81mJQHmKfPBn8fU3x5_UJBvxkPhVFrMuABSP3siPrcNjjYN2XMcnyvZ5P", width: 2000, height: 1251, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110992241769814046563\">チームラボフォレスト 福岡 - SBI証券</a>"] },
            { photoReference: "AWCwydiBBPJWQtGK3e7kZkb0sx8E5pwR1BEkULYu2SgcSROOW-ezzlPjZLhmGDl_XXHTGTPJyHhYte25DVyIjn8PUYXwW_sUldPENSUDkBupTAYM-3MVjhEUyaPnMsIAUXiDeSyGQOeb7u9m9MjO2zS_E2o9_AsfpuPmt_FX_NQdMN79K1aIon112vl5Jynqk-vTe0wVzjhgOF0773IzBLhLA8_dpcxhvU-5dqsYXE3uKLf1xJAKlfeNbRzg6oI4Y8R0Oxo-KeXrvrAxxxTyvcfokV2X3LdcMxPD48GtLdqm9V_t-_mlzcrIA0wpSg067XhacjULVG2ozWuNGqfZSGuU4_MfSZUsdoyxgYKOlQ-0xvWxVDVnS7WWVLIrLb9iVAkQlz56x7lREMF5_1pKJMyRiDiB69xD5bk3f0UKjRwko0h0iw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103212386582220550138\">Yim Anthony</a>"] },
            { photoReference: "AWCwydjPuWY2oh7XhfWY-H1SQgrUu2niXDDlb8AwfAeVhgsdfjtKyvpMskTjzlLo-5ZDKrN6VFsTHpZuIM2mkGDzprymn9qXmAQt3TMA6_AxiFlI5nvzBBjYitCThGDskRRQDNBuCIpIrmutnucVVETirVvdBYKM-buLC4-lbRS4-IROUQqz_RoHe34FpbQimkzDV9jI_gFEELl3ZJdDfWo7aYHLNrYYajDldXXi_p_0UULDF29bZg8VF-H-6Xlktj3mrQpWG-An_7OeZlxL1eke6osHp53rFip9V4hPSx1nzJda3u8bmNXFZ-yxa5zFuS1WZ5KBNO5Yfvwxd0Q4epGnuNxzPByi0zVgcpmREdApOhdAtcqCtdrTR2MRmGsMmb2WHif_M1l203HWeEOQgEnFlh-ijrpFJFpVK4oZqFURTO180Q", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109390003937713702973\">龍葵鹼</a>"] },
            { photoReference: "AWCwydhXiiXiaS1OoVKt0qmtJu7rXAMpm3CTHiJqoA7SmBEt-aC2jskKNAOP8rRw6XkBsTllBLddb-X2tOU_2NmEr56zOQc6azZvAR_pxhwtjfFGIsofwXSi5qhDVLGoBh35jlHHAqcxLhAztAt_vub_MhD2E7Sz7ptiCr5dQXnjV8UzrfeYp4fv7GMHGSZxAS89NuVfxZ1-4Iii98K4Fsgs0-84bGqnpX42NqfMra0C3nG7VfpJP7Clv1OJsvZcoQJQSiqsCBvN-yzyOTWBEU5mTSUzYU1K5QjF_O1ZS3Al6igftgaA9QhnpwBnBwcdR6uzbd7bNoH23bC972C8N7RtZxUNIcbaugp-5t9aoLW8kNrtexQlwYzf1x4CUZ2cjnLWj-cW0MW_xkXu2hX1li_osnsbQdHnSuSsexD5fMN-_cyo4Q", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100594712370553774771\">noriaki yoshida</a>"] }
        ],
        summary: "모모치권 실내 미디어아트 전시로 날씨 영향이 적습니다.",
        updatedAt: "2026-07-13",
        highlights: ["모모치권 실내 미디어아트 전시로 날씨 영향이 적습니다.", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 11:00 ~ 오후 7:00; 화요일: 오전 11:00 ~ 오후 7:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒810-0065 Fukuoka, Chuo Ward, Jigyōhama, 2-chōme−2−６ 5F BOSS E・ZO FUKUOKA", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.teamlab.art/jp/e/forest/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=946617048746295340", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%80%EB%9E%A9+%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마린월드 우미노나카미치": {
        photos: ["/images/fukuoka/info/tourSpa/marine-world-uminonakamichi-fukuoka.png"],
        placeId: "ChIJR4tIGrGNQTURRMLEZ9kNOr8",
        placePhotos: [
            { photoReference: "AWCwydi0vuYXNvEgn9KxMm0J7gTgFqOOjaP-O8ECFIpy1HVqeIEnaOAunroWEX8hMcGBE3QYcubQL-vBspT4ze8TKKvfwanIWZAK7_-uVN1euUqAfzVEjJznNbolgnbFd-X1HT6o6skFj6lYQ1HXJIaoqcRTTDnAOaCKIVUWQWt7Dy6QiY9kJNQnmvYbTkUvlVRocoRVv39jWDtZl8h8t1g5HCMArun7E-ckdCua8iNjjwlu2sypHvHCEXOpJWVTdNIiVS5JB2idL9WLnYpHVo7bs2kv5ouxMwYVmJouGSLUz6vB0wg863JucaSTAhhfdABd5M5G42TCJTv5dPuMlY0SQym9SVXmLzS7g8T9Y2P63hLWNpvhm5shr3b8Il_2xu5aXV-ENZ-u01p1_f5cWoiCEHX8-DAd-t3f8oiB4RUSpdxvRBE_", width: 871, height: 799, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107786055686180741670\">マリンワールド海の中道</a>"] },
            { photoReference: "AWCwydgA31yZOl-Fq3AFzBAzoa6PMrDBV82K0UGteyH2HNqqXjFZiio8RfQ07vTj8sZ8I2kWJOTeq88nkoqgXwUeYoq5nI0Fe-p93jxdmEDbP7pR_1ktmornn_Y8vY6d5Fe9h1t05B01HWV50J-yxePrhIieJNODDXLQzlLtJ53rzAYyXxBYcTgq9clgUPSBn-ZAsR1A1Ylh3qqvIFIZLu8VSaisXF40R6mCMLnfsiaakzwkKEZldF0DVJbHkbMrsh-PoTaRvi3PSbKIMtA57b83Llxh32QdcO16n6oMKymnGmJtJbtAJcY3DWcBfCUNam42y8eZoDT3ti-eMhdqNZQZEoJiKdbXBUEZ3LJxoy5g4KrC_ays98PGetPvNsw7V8a-sUcMegU1mcv5Kdxwa3YBe3Vau_MTL3YUpdJA2ldsep8EaPhVYEgj7NtiMLXTHEqV", width: 3884, height: 2913, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112390574726479925839\">녹색앵무새</a>"] },
            { photoReference: "AWCwydhFMaBzPulZjxS3bhlSe5dmBlbogi-DWnLj28adNzzG26vpU2uxhVNS1I-oivANOtV32IAuvYw3cmIQWslL1MO6w1GhUYGZyDlFCF6Jd9_mECy9XxtwilGqiq899GCbqrQQyHILaaKn4t5YNTxXPyDvIb5YiWcb3JK5RE4vv3GhnRP4DYaTYQCSpSCHLt-xaAe_ukp_O7aKL-W-zLwVsscvn5ae09OVIJ3nQ19HpOlWHX9Kf5IM8M-ZbaeDKwQJOTGkgZktkWyQhHbqIgFRzeduAlS5SbjGqm6ULopn_EnXeSmHeIyDeb7hrOphOaxfHzurRK_5Rpi-Y-jRCDG6RN0mAttC2fKzBV_mppdbS_OBgAPIzM8b2vbZg7I7o4uVU3R6qt2QMQnBUvGcPESLmTRk2vs_-dF0g5UtSNxG5-s6tA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106317974355582560054\">橘文枝</a>"] },
            { photoReference: "AWCwydjURZdAjD3bth-eQVaI515AeOYk-DRIKUkfntzY1IyQ3HWSMQfdcWrd1BQQgF-p1vThF9ODLjLHUJjFPeD4Elukqc1uieWPsUKK5fZH_qhI3JG5A7D6NuxvD5iCzJzJGQKKF4IcRADpL4LXwIdRmTDbTAkEURzkix236tBXF5V1WTZyYp1ctnR-Uy0YGRp4wpxQHLj8pF-bm-mNLuGaUZn1LL4gRIFbsl93ebsRKHNqFgJMZjAk4s_VLKtQq9qY4P8AdEJydZo1GPrMXe87qHywvcNAuGn2RIuAkeBZuEwNk7MvUcmZdDC_vTURb7-1b4GHX-B5ZpzLokd6As_J5KmSw07bVA4YAOc65deK4GB1Yz-lS8xy28M6l3cJ55vxFk3N38AmChSKbxjjPVqoSWBucLIG6QSMNd0-a6JUxVqdKg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102869730728693321043\">hee ssophie</a>"] },
            { photoReference: "AWCwydi6S85neNEzyhVs4PX-kIlIUeYf7PyokhZ1TGCGQy_Uf-QJM8bl6iB84l_tkgJqIbwvzTyzrC5t9Ll83G6ONTLur29DquQKz1Qbht6HgI0bOJzdSVZ-ZJ5P_lkZB3ycEzH8Qq3kU0ElecR5EwpJlz_h41ZX2ZtLNFu-D20KcR-fJUCVuse4pq4FHfsjDwmMX29HfeRLqBqeni49HC81aPnk_byJKwWa6S8ybG3ABw0nq5RMO9RuBfkhGjaPF-VWPES7rw1mJgunuGp9FgUdeIIU4h_lySaLegNRZTvNugFtEdYVu6n71YvORxpAR-f2t9qym2cuSZdx6dMMKyczgshTEfQAD1mgFSvFalwsPw1gOG1hpfgWgIayI3_A13gIcBwDujA_46b1MGC-oVJOUI44LW0-7nmBTdgvZp0l3E5lOzge0aJW4gRRB1k6zdOQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105781767937538877661\">Lyn Na Đỗ Hoàng</a>"] }
        ],
        summary: "하카타만 전망과 돌고래 쇼가 있는 가족 여행 인기 수족관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타만 전망과 돌고래 쇼가 있는 가족 여행 인기 수족관입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 오전 9:30 ~ 오후 5:30",
        duration: "2~3시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "18-28 Saitozaki, Higashi Ward, Fukuoka, 811-0321 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.marine-world.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13779341237293466180", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%B0%EC%9B%94%EB%93%9C+%EC%9A%B0%EB%AF%B8%EB%85%B8%EB%82%98%EC%B9%B4%EB%AF%B8%EC%B9%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우미노나카미치 해변공원": {
        photos: ["/images/fukuoka/info/tourSpa/uminonakamichi-seaside-park-fukuoka.jpg"],
        placeId: "ChIJaQp6H7KNQTURjzG7SoOP370",
        placePhotos: [
            { photoReference: "AWCwydi-ZADyMISxtvh5JUjlLVmYvjdAfmqMcIaXVnuY3j-W4QFUzp-ga_7Mp9MUa6FKbyowkIWUie01lwv4kR_b9lxh3zrSU6K-m46EpPRaJcWySB_z_N-LK9ck5PXqu_5KsPRJBRLqVjrRD99d34-UVzpTE66l0Vojfvk-FeunGhZ3Pj3he0AP5cDKy_5JsGBR3_lauQYz3KjeNQ-v5yh1DNHg3IoImJ_hY--_shQ7YPLxvfAzHAFTanQEoUY0oirA9aTIiASDfQMOYFhLpe3zO6A5ElWlvtfUVujaCbzxLk61y4rABpYyVr1WRUABZmC8zQhy25icqVVCRLfx-NZPB8Oyl8d7FSL0G23KCnsIxoZyFcmxFHGxfTrT0jPNSCZEy-HrUGgyviZWyJlC81Bmt-k5SLJz3ISpduGT69eerMwitv9o", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101223475550616541860\">まろん</a>"] },
            { photoReference: "AWCwydgff99qTggOzJ5VQmR7xAYjQo2q63OLt_6TJ37uA3iwIWQuQ4UD0pJ-ut1l2VhSEnyunc3R8ccYGPd323YLeVZmaU4h1R2FhObRxFHtOKh8c-Qer77_FTwtliHpXh_BK6ohUL8Eyphg-GJiU5lBByKqH4IRYaAgcirqMvSYJmHUPTjD-aeyDXPq1dVFIoBXqy0ylvqICvW4w1K54306dpTZLNEoh5BusTY2AXVNGYeAzQsngvy0MESkbzQjTR0oWn7mMl-qMxzhqa2rPhefIBqYQdjQ6rCcqjdJScHQ3VD-VVNEyfszZBhLiqWOOXLj5-1kwO_vCsduc_L3Z09u2HZL0guKc-1_827guBwMMvpXdAV9Bi_zCzKfGhkD1679jSBhWatGkz-b9A4c2f7wUbc7pMX_IvFuJ4dUxKq9l53mmYgbflqqxeZlleii5ZnB", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101921490510847036786\">ながいだよ</a>"] },
            { photoReference: "AWCwydg_-AGrEzelLMfa8b9qxCFH4Tmj_KcYVRx17Nj4kUY4oeBiWdT-7_K2d1cWlqKOODejNP3BPQMdecYNfvWiqE8tD1Rgw62dq3eCdlOtqU_GAZehgmI1-r5JHNkixtox9KLP8OZi95jeR24k0DKsqN4yQTM4-VlWRXl7BfDyNxiT-cyrgZRRhq87uIoTvN823DaQi4HLPdQASsRR-HHM-C2TdE5uxZQlJN2Z4WP-dmxrFffOSUBp4K9GUR_itvb4CaSsQAFxenSeRUtv8q9wKMWprWYMYuhbFzYFM3z_vCdU6TsoVRDcnxAAySuUBL0kqeKX2NH4hctlNADzluiA1V6cWa9wbfWbTSnZ9vCfX1Fl-85eaxH0Hdkz8ccLn6jD4W7J0DbNO-ID1aUmpVSTa2zTNNnWprT7LUk3cbpfQtv2yGN9", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114712419765357813520\">Kenny</a>"] },
            { photoReference: "AWCwydgUz6FSA_tPOjjgXfp9aGKXBiOoKC_iUvIgC8Y0Ngt40SA7hjA_sX6DdX8kCVshafUNtBGo0gBvqE1J1XbIYRTuDs7MDQ8BjpZnAXNaxiM4fcbturG6XM1bUYJ6Ol6raorzcPhAKC9uQEj8nRLNQl9JhgG2oeumYBZIGXTVTk6CAWUni11jY3kiqBtLp24Ky6M-sNtc6cJffOXrTyyPQRGJK7fjtp1c_75v7VlPz1D3eOCFuTcKix9R--X5NtkNu5g-KZtBU8Zw5zMOhQA1piN8gxi8iqCWyGAgpToVSJxkYWkH3KOR-fz5m7yOF8rkA_uTugsLK0Gq7ajDMfCv2JfJHkA0Z1g-XSETBsaWMn4yY_lukhjKtFN0QojDz2lbkygoopGq1IcyKxhwjDs6eyYFnHit8KMkUaFt3MZndU-gdzY", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112871399149127834633\">Albert Kim</a>"] },
            { photoReference: "AWCwydj3Q-clhnJRczQ_2HiWHZgrfmUmq1vinUX3cnDZDb45GxvyG2ZAr0aXTWknMUenGAVnc6N3JiMqA4NQjm32EtyBD1X0QfCJhNMAslCpyon4pmtJ_x9IIM9fAjMrLWzQjkZddOfAhA_ci2cFK0z49P-JelLRFYyK_xlJR6PW7TK_e3atMSK0SrV0X9LlAN6x3MhB1U-YA64QEDDXM8RWxIHEWoCbaYaCFEQa-f3vvmWU1yYtbCBvk8XwPaq6NAMkbzMI-Z9x1kgrygy7FbZ80kRR_HpTieyVrqTlNT64HrNSu9lyi67kE1ADq-Ab_lnAFRYNKJLV9jIGaE35cbdesp87Kt5Pz9evGxOoJPjP5MiqNQFg4Z2BAFgUsBSQ1Wn_uXq2x8j8RVRx8yYsu_W-y9wepEQlTunbk9YhosqP285atho", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110873445047751904912\">Yumiko Miyamoto</a>"] }
        ],
        summary: "넓은 계절 꽃밭과 자전거 동선이 좋은 대형 해변공원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["넓은 계절 꽃밭과 자전거 동선이 좋은 대형 해변공원입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 휴무일",
        duration: "반나절",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "18-25 Saitozaki, Higashi Ward, Fukuoka, 811-0321 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://uminaka-park.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13681811987032125839", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%AF%B8%EB%85%B8%EB%82%98%EC%B9%B4%EB%AF%B8%EC%B9%98+%ED%95%B4%EB%B3%80%EA%B3%B5%EC%9B%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "노코노시마 아일랜드 파크": {
        photos: ["/images/fukuoka/info/tourSpa/nokonoshima-island-park-fukuoka.jpg"],
        placeId: "ChIJE6u5HzftQTURE9rzcFvhlM0",
        placePhotos: [
            { photoReference: "AWCwydgJ6dvxOGDuRY9uvwKldy3wv2vDmfc5l8WUa8n0-GLXgHTVBM4RlpTmZo7-te3uBu5i1f42rkAy87zYIVUgou6Hr0yXeyElvC8Ix_ZSo02JqHbZX416zjGPy4wMx7oCr9f3fxgJDev8ulPQ7FHnrTFmkE8UaMONimcKg8oVPJzA9TtJdA8Z3-5_r0A_-y1byN2t99trLDC_y0XlHL_FvE_zKUi9H23CT5sQwoi1f-39PgUx60rzuXQJ7WBe228h7qLihzl2bdLfA0OU60jWJvLoHYW5a9vqRayb0wKzXlsgp8WeCTnMSZ16PiXaXRwrKedIV9xS2pqype2moQviTqnFNV_V773mf5qPkEWE4_giUoy8QspyUbpflhFxVJIEcoq1dfADNy_1Nkizsjh_PIjnPbN5uFdQw2DdQXflIdA", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110940558807990580315\">Luna luna</a>"] },
            { photoReference: "AWCwydgnnI4PWwM1-ckim3bBvBoKURmkN4sVQypf8HYDzHGH7javy7E5N2PPcerGhBHRNqlZEb6MwSP1pj_Qn-bsKM85ftsL2a4bL526tN02pqeGIBOVj4dsPKqhh_IC1xqXMkmKoA4EpaKi0Hijqve4AHfdjJ5Ff3XbqJlCUcLGZTNLEDF0844jn-zaj67czLMFvng_g93tSO0H6JzzwQ0TVkIrOzX3j8U9NnWT0wEqFkdfqz_F2je8DJx-1C2kwqF7lvPpgQdd7333DiDBUoI6lUqDFMS1d7Nm6bSPgT7J6eJTpo4P65S0HCu9329bwnxQm3z_PwUweLfxRkHITyPrL_YYm691AhthoCkMt9HHZ7guQgrAxzdnCIq77cbW-_UDRt-Dt652XWgze_8yxjx9c56C2S0N7iyx-jpVE6l6wKcR3H9R", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109328101700450159092\">eriko K</a>"] },
            { photoReference: "AWCwydiw9rgh6aasduLVv7f55U9WrBxUq9SF36uZa7hxG2P3AhwsDIvEPHP0aA0ezPs_v8BxZNvup6vT-2pOQrRo157jt-bnl2QzQ26aF_B4hR9t0k_XWgaeaGNx3B7bgvRDiEEi7e9YkSTQlZLrlhsZsntnBZoujPgCHM5WAu5dJ0_L_lHaVhQuwybIVAJdQRORVyOA8g8QyU7NFsfa4os-YU5JlIWNNRg2mk3Fb4AbyK7Cg1QDY9m8ckCHQRRRSalCCiWRaXETWcDrAA08n-oqXtoBwcLPdmFXU1K2iTBNE04uObAqzYa6n5K8OD7N9X3ZDruXcpQGNWQgZMlwd2_4XmEtvKUVzmcV_ng9wsFWR57ZvehYq7uqRQsUPto93b7M724Rwi75H8TcQ3HBXgS3qC3zyVs9uRUrIj6F6T900B9UGQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100410941667897736449\">KC Wong</a>"] },
            { photoReference: "AWCwydhe-EKfvsP3-oeEZLNCDqkEJI32DgANRV71_KcPBJ64F4DkrwJM9za-8AZUecTx_5LZWClzOKmuJ5SeNUEDIMwAmGkW2fdcrSkf08Dpqg7ZT-uY1UZOlJbTDn8UdkAzUIxIaEhV9qhYq8O1A5yfMnhZgTkaFXiIuxe2c0IVaTfq0reHskGPQKRf5J7doOBUDMXOCzLIvVws-gkIi8SWMLP1N5ASDYSUv0u4M7HdueWIf-cQv7-wma-zedKC1QFjD7S3OXmHWSxzqXVfr4kIZs-yi9wI9lWwEq-0Ync7_jYd7piVprImIrKQJhYL1cPnKL3qVNQChpiAtTOhEn1Mn_zY2H6hIO6mKDyS0dHVDFbYGDnRq4xK4sJdiGF-e71NksjVN1M3y419wTIVQN5vHfmBBQ_SrAVoEWUd2y8_CaaTtSjQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111352096430578607811\">けん仁</a>"] },
            { photoReference: "AWCwydiEQuqIuylG6y11tG3ZO_ZUsnQDp8qo1R4leLo1sf_rtiWyEFbOZT8dT2HHu5MUX1YQLFPq4nukg6-b5W0_DaD2egHma4ZxGAFfgsqZWclt-syQHkCyjLahUiDvwIKgrIV3wcBfmmOVHGvv0LG-r1owbdutsUPFZPK8WIZfn9S7cT1Zsu4ruQEldMp-Q9XGn-svX0VNYOGhumE-aWVu9x3nXtLDtdDkKb2qUgl3JrdVTl_Nnn_0QwUFUh2d0eLc1Cvw-4zYVxOPCBEB6GHI91d7bI3SgWtjIeMmcnZUdY5uMe06FykYIisiLU9XkWPSL_4QkZ5NbrLSyGXQI-T8NaJEtHNp70kS29U3lyNARTgpg8iwAYchl5QJPqHQmadQ9huKwfIGhYmzOv65tXPRhUOOCKziwi5Hj3ZZaCs3TxpTcw", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111964947943279143138\">MAHO Y</a>"] }
        ],
        summary: "페리로 다녀오는 섬 꽃밭과 하카타만 전망 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["페리로 다녀오는 섬 꽃밭과 하카타만 전망 명소입니다.", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:30; 화요일: 오전 9:00 ~ 오후 5:30",
        duration: "반나절",
        price: "입장료·페리 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒819-0012 福岡県福岡市西区能古島", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://nokonoshima.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14813712857181706771", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EC%BD%94%EB%85%B8%EC%8B%9C%EB%A7%88+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%ED%8C%8C%ED%81%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "난조인": {
        photos: ["/images/fukuoka/info/tourSpa/nanzoin-temple-fukuoka.png"],
        placeId: "ChIJ9z8yjuCDQTURfZ0RcNkf7Nc",
        placePhotos: [
            { photoReference: "AWCwydjwr7_zyPNwVIpXGSlO9MDzITm3oR2g3xVZHxH3FsuQW-r8I7HLD9jBoP7jorfB_3z_6x4e92p6NanhFrwyn7veh22dI6YEEjJcq1mhRCRVki1u8OvuDEQRfHzevuxq4FK4BAobCTdlQlCLY7HtGx47n6MyFUfIGOXfZMsLTJCEOK0-trFKMYHNKqV7x3tlZPm4Avi0oIrLoTnUN8dWU9mV2qsDlv7GaZneyLdl3-_yMEQcg5xHJqOQAEnIEMuMZ-ppcdmH6NMK1Ac1OZrX8A9mfgdZPjnjbkoKfynhoNuiLePIkIshM3ue7_B-ZnPNCDVu5AYs4gZTrY7Xwy2FpGoJ7LGNJh3P-UQ2CV4_ecEktWGH5yoClKZpphQG_jDc9o4d304s1jAfPRvYdX-U6Gy0w0OJlDn-XQVU04MvE0wFcgz0", width: 1921, height: 946, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115122524728760146226\">南蔵院</a>"] },
            { photoReference: "AWCwydiuZZVwFOxrvAqXrhGHMhB0BCLvcRSuvjW3Qhz6lmA8G-jhoeTMAvuUJyjDcVMhv0cBJNs3f4ULHeZmcOy3K6dqQ8XtU9F0Vb7kkFveTdCH9ss-6VL7AZN2JjJMsM3yLxPJ7jlLzOTXsCZDn79f8tsnBgeV9TsKv4FDkaTE19cBJiibPVq-SHAJ6f44kAF9I1kuez-yM7RhuDcc5qYjoOomrFoNgi0PbGOFYTdc53odk9hHW0Vu1_6BELQwN3N3Y_6chVZmxer8XG3kBfD0wFPatkwI3khzuY45D-M83sy5MsWwALUY3pQJF7qsj3qAp626YKuPBZgUzito46h0GO6XWfzVFhJA1NDg89cxCTJuAavaIZl_jnRF-VhzdBNCyNL-60wd39_ykyiFGGSBtgts80YY6oSsejIRz1MU1ikYbjOU", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109728965821559140387\">子明先生（子明先生）</a>"] },
            { photoReference: "AWCwydhkPKISy46lKe9hwbBQijqe0-caKim77BPV185ve4j8bVkw_QlwsY0fPgKLD_g0bk6YAFfqxoenXc0E7Q_El5Q7QAwiYlEnTibyFsUxrQj1VMUWnvdK3Y6a5l124zsuBqspNmLYztYTj6QNxqubrn-sdlTF_aQQkQ-wte5FV2nukm15d-c-qndAOvkOOPV2mvdhqDk5CfNPca8vQDTbtuZ8s9oEYh-_F1ihzPQAdfVa0Fguv6vb8neey7Qy4f2FBJhtGypvaGtaPuW2IGdzHEJbFYLbZ7zRe9C5LQjLCcF3qyHeVNVsHnNfe6co5bUM00el8e0lZ7V7v4PmlElOPEuBEI2-nVfmAiUAxJz7O9D0sONQZEvo5kFYoil1diI_TgEOYZ_syjnHQXEF1kfdJzgn7KvbwnVI4iN0s0036BP4GNs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104698286114433399299\">Seechai Kanchanakaphan</a>"] },
            { photoReference: "AWCwydj5h0jT-jykPn7CsT0qRaHD-_N65vMZGP7aVuUeHaJZPAZKFckdJXaoyECOp6-0OseU8M2wg2UlX-ZxzJiv1QLkuyAQ7QZb8BIb5tFjIaXFrzZsCVYTeyFDTP3kjbVPlqPwpWKFoFyI7vtrxl5teShGGdq8mCJmI0CxrovRZxVqWPcuEwekNG50TsS82iEdF_IGpsEV65ES-7pdtfSH8KOGUVSJAzAQqnhJkf4zHguIrh-wMt3TcLc28DDqZvFIUtmdwA9akhlpboSvX_hapg22lJAWUTfN0c4hz3ytFaAa5ITsTIQRb8mL5Qo25tOA6ZdQVEQbXH1IyTLm5uMixaPw0x0PMy7-D2543gAy-VjwrIfY08xJmKNG1grZyboVlnrbXtDZCKx1_7U4wE3jwv4j58A2KB3q_5cRqEjvCJodFg", width: 4800, height: 3603, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115695007798981329053\">爆竹</a>"] },
            { photoReference: "AWCwydirggfrU-0uRkSTx_3aH8e6gZHqvBsN3_K4lxLSOGbMaO9kiq0XreusDU0eQFxS0JyD5HiG7KP_24Y-w-hw8Nub7E1Ru2Ifu1yeqFAxeyEQkgPe0AcS7YrfonPfcmamQCItHJqOUu_RbgoCaxw4jfCgEukj2_djkxGq-AY5limjzIWTrNAyJC7tV7Pd9clJ26LW2rhXhg5W9Bp4Zzbh3Jam7yvPZ5dugZjLB4wkliV2m92ye9WWnC8DA6Gy6EIKMd-pNYna4PsUGcaZdkNFG6ykVUcoa4akKkFV-D9ciz7MlaG5jWm3FTUsnSTq7d7M_vy9oaXY_qKw05dDDHl22bTiEwfUcGD54Sr0xz2nwO4gwxtOYIpIes3FgkJDn4pXWw0czn5jGOJ_shZuKgeopv4LwvRi2ORvqWf8ppTOyK95fpU", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108497465961200400576\">Kempson</a>"] }
        ],
        summary: "거대한 와불상으로 유명한 후쿠오카 근교 사찰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["거대한 와불상으로 유명한 후쿠오카 근교 사찰입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 4:30; 화요일: 오전 9:00 ~ 오후 4:30",
        duration: "반나절",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1035 Sasaguri, Kasuya District, Fukuoka 811-2405 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://nanzoin.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15558845831406787965", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%9C%EC%A1%B0%EC%9D%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캐널시티 하카타 분수쇼": {
        photos: ["/images/fukuoka/info/tourSpa/canal-city-hakata-fountain-show-fukuoka.jpg"],
        placeId: "ChIJW3NHf7eRQTURL7P3E0FS3dA",
        placePhotos: [
            { photoReference: "AWCwydge9F4X-iHd9JvAIdxzUZGzvbM_9Yb7IqnIney41V4SyY8uh22mudz3rc_OkM7aecnAMAEGU5w8T2BZp-cJrfa9byz2Yt7BIzRysoK_Blii-kK8hb71ZKmNz8n-fCkGqhbNU9q2NTN62pluOzTHjhsdBvN4_eljG3QYfyG1bjDPjtcLQqF2X0wLlFk3z23FAJ92_CYqrW9PiQgxWr2_SQBNbB7BVlFXj5en072tywr5QB13I1LkBrcNx20QDDkcUbrIfPmxm3N-QQ-Z-lh02C0tKqm_E5WMr8oy_awlXhQ86ZmgkZJC0gvYwT379wtMONJsuUl7oYIhusfhP_pVs9Z7zf-oOH26-lsTFoJMJCdfpo0bP3MYvtQAbQmsB4abZnobnVv964z2Tk1OAXYiJsSh44z15PhbWxnaFAab9oBE9A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104797328537983104230\">M T</a>"] },
            { photoReference: "AWCwydjr29XUFO_1i-lRKihqIaZBYSR6B8QIgfzBvu4a1tKLB8UiNixniB7KF-Q8W1HfK2NJFVNXbpBXtflr5BfYH7_iqk6KN1gCYsJO1Q6R6BXppQzM3ETCeAwVGfVd0OOsJrLNDG0kNAryreu4Zle3h-w6SZchawmohYdC9epMxBEXbqoCWIoGaTqYZL_xtmyBKAYKIsAEJQ2Q-bbbIgJBLyMc3zupMtDQkoqL3keIvPo91mRCIH0cbPJ8NpinrJmL3Qu1M6v9trrDc2DmO2zoHA5RCEmSkuP6iZsp5VwHAx6UZ_om8JNlcimZ0yjjpnrbaze7h07zbZuQ9KEL_KE3z7ccrPlo6EWFxz0PO1fQ4AYTjcJEIlhmKE-D1wD1l8MErkFF_0NbWRD2R-VqKEgmb9vpc26leJwNb94_PYDk7IfUJ1aN55ycRcC-XYYkcQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101955630933775542843\">武一修</a>"] },
            { photoReference: "AWCwydgIjApqCKgodw4JPe2EQDGicDcpu9qj5lffj1LULz75GidXb2YxPfTa8W8V72OYdZLndYm8u75bMtcgYacNiGtMzOn5BpPhByk_0ytDrVWkDqe2YUGm0HkhfktXm3ZOY4p58NE9DudYD9TC4bsFYMNmqgkf9gdMGNlLlITk2c_meyvgQGYMEB4kfVemg3rqP8hzurQC6WIlp3Sgq2oar6Ox0CPbbctUTPWwCIgiixF6wICBDmuqP-8kSgRCpcDHhnGEiPQMvZNnO9-pGLwezDGenaWs4qsuNwZ-fYXqb-ofvN9EvF81crxjHX7Uy2Vb0FW7p6hlDIEWyttUfkZpibWQnmQVXm6CNOweL9ZwsScQWA_IZTU1PmdUgWW21aI1xJCM9VmBj27Fq-f4Jm-G7PQioihq5iwRjSQySsu15BXNVx-CWXh_ny3vWE1d2g", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112048062880168217414\">김선호</a>"] },
            { photoReference: "AWCwydicuWGLqtXoUiVabnCoKjvJeYfu0GZnKkc1p2asl8YDpgNu5Mak_zdcUtn63PHa58yANAExo9vvYKAYSTRFnYkZ-ppFZF5IcJzInCARgYi10TuCnuDqa2xodou2u07EEoZt5JUNXKO_-BTmBJRZj3trp80xm_r_n2in1P-20Iu2vU8k6xojeLprmJn11ZrnHd5CXrvvBOmnIclltC5skm1cJDY8iGu6ibRUgbo3dOEQLPwRm9JviFmh11tFyaUkGpMJzr9wWZPWBvvUIIPtFoFro_XQWW3mgNalx8B4yxBg6GAi38YOTTRCy1Azmk5GlsXxdv2Y-wogMfqjzBzk37nTHQdq48YwHsmSs6V-UM4fdhhvOblmgg_BO8HzRs2BysZcIZ-JDaDqHus7na5vXFMb-sSv0rPU-hxmoPuQapc", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106186841542173642465\">KK Liew</a>"] },
            { photoReference: "AWCwydgkF4mcxRi_wCpwzzE_8wFbvmHGGNcH3X8plyhluH454zr561ErX8A8jAa8269_GAt5Ew4HEIog-s4XxcjoZLpT2NdBuGglAwFyeYu4UvnApFEPn_671JrZ8q8Z9wpaPFpgLJ95HOHCrhyRwWLr-FaB-dAk5J7zzJKui0MNxsmayZZhqaSJG0NUWKVU64e9yO86gtTzhr8sPj_A_fbjBwPcjhXhR63iFkkOrKt8x2hzaxcbGVNhmY_ccWFBdAf9RdiBj63VJYyASJljx6BpuX01B-L03tlyjTjudiBpT3ACsYAESpyotXEZHHHBi-ZlvfQPCqaw7mB-JsRCmmqs1F7Yx6cX6syDi2jsFYEonmntRsYZFevfwKxdKhJAVqF9jwX0lnnuyK9M4WJmasrtoqR0gCl-LguigY7fDbkfjtM4eFA06694v29XHZA6XA", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105847290519134820181\">Haksoo Ahn</a>"] }
        ],
        summary: "쇼핑 중간에 보기 좋은 캐널시티의 무료 분수·라이트 쇼입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑 중간에 보기 좋은 캐널시티의 무료 분수·라이트 쇼입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        duration: "30분~1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 Chome-2 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://canalcity.co.jp/zh-tw/event/detail/503", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15050275969203417903", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%90%EB%84%90%EC%8B%9C%ED%8B%B0+%ED%95%98%EC%B9%B4%ED%83%80+%EB%B6%84%EC%88%98%EC%87%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나카스 야타이 거리": {
        photos: ["/images/fukuoka/info/tourSpa/nakasu-yatai-street.jpg"],
        placeId: "ChIJRbuyypWRQTURbITjwMeuLnM",
        placePhotos: [
            { photoReference: "AWCwydi3F4NZy_VAPTheK3vOoBtTpErTcJoEMCz8ufba3WE6uvykBgSEX4iZ36rCYIHbBJyiuxsNO2V3bTJ5DHBBhw3b5LSBRP3wpCziXxciApFdxvtyeEWki50PRAE_rbHUk6lWCESviXHpPf1iK26IJrniFq-OLd34Sdn18B9p_d4ply_-9DeBsVrW0AqRK31Tp3JL5uE-Ol5zRiQxzwty5VZrSuabngh92eQH9fd8gsKpDk5KKdFwgTpzbLPp4j_VM1AYTbMYrV10k9RJs0z6kFRwliMyUsllLLBcue_8P-MJsJsGiNirybYWAGQ9VGIXZ-s5L5B7H7njK8zm2hjJAUvloMZ7PmU3ea7UV-Ym9bZ-l1j20QCBjrhHiBjoQJSd0OosxFc5M1yIz8RGTfb4nVQFxorr2uDOWbpSdXWiq9WERLkj0Uy5ucj-GPmJxMmt", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110875282475338147022\">ponpon</a>"] },
            { photoReference: "AWCwydiD1SH68k0tVRbjowAAWVxCb3JKuuKZEScn2jxoKc6Mi5DDs_JmvCOgDLydfU1EaKg1f3fnsbnX_kWlCrbAA4rktOByT3hYRLuCw4Mo3_FwrJwmP5PxrWDdUEakXiF9zvTLnhdkHDU2C6Nopt2r9gNETOAhqov5YVRCSsSNLHWvdmV3qxZyoCfzPIWp7ZgCvzC-CFWSET4xqg1mNTqn6Wn7W38zSYMUkeCpTJoW4Aj_oaOC261Reh3t0XCOHEWv4WpmObBymo_D1Lt60_5p7LuZudmvCHTLotpQvshGwHvWm6fCgYOIBM2Hz93AuBBK4viwMN30H9lclbz_RkEIGv3DXk5Z8qFCw2VDtUsPsXTFyWroCuCp0jKCir2tRHRX-eq-NYKNGHc6TwnYmXoqDNCVAAT8Ss8yQ-I0bxzqxhCaPf9q78DLNdgRUIbzeQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104995218769549942505\">Remy Ng</a>"] },
            { photoReference: "AWCwydh9_skd9jZVdC3O3LDsDQksP5dwSv1VO83F-fExiooOIAXDXK24Ax6HuDLnbo5gsEnHCkWrzV_56eIzzSGrO8cqD2Ic9zSZQaUb8NNEveEOmwZ0UuIg1ZNeK4ne8EiiuWJn6WJ5J_IgMALJ2FBHdb8S8gj1-Mg--07XxITIhbGvjynQDBNdrinRiQkAtQXgjsn6jO-8HTsHSnAEPjD4mbdQKavLT2MeKZ4vI0a_Qd-1zZVAdOuJr3qzYuima0-aLpFRNkOUcmG5XxnRH0FtATU9rebmlD9dXjI9VyV3pQPn0BVZEEZHBbcX3KjFn-4I_LhntDI_pF9eoGLwp_SSKc4IFN76kESKiobYyY8o6GSFGhOADE78Rapl4INwoqetuvtLFiabSBDmvGlZIW6eqaq-6oDsDpXLPZ_LiYcvc7_uDQs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100967484477469096987\">許世龍</a>"] },
            { photoReference: "AWCwydgxPyBx59rx4ZMegerok6IX97Pz8pzvG8V3XQADa1Wel_qljy2lTT_7P-eWUpcEHnyGc3_YSlYmAYSdvlWeGCNXSSav4Z9S5L0_acelqNJGN88eFqTMB-yy0Z7PjVyhL2TwoiISmdgHUIi-eOa8eywP2dWk1eUsAkkN1CfeMx-MCX9qc8xnNaWOUTPwUvSFpkoDIYMxWDkdymUSBHp1_2QjloMVHf6H1zlQRorCSgFc-z1q16F3qDXUeXbEhduvh68TpauLTl7fmg1XDbVGO1DWzr1OXD7KQiiCXBZC9NaB3C3CoW9aRuuiw6QbHmhfDkbusSoan9jwAHk4hnSVh1SeJ6HNzfCyuF2tZnwECN_tsDmef9PoQNyV9CSFNtx6M3Equ-ljqyM-EB2gysUKHdBLRS-6_P_Kl8hhjI8mLAqq2pYP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103368510548692742803\">Ciganomad</a>"] },
            { photoReference: "AWCwydhO28qhLl8L4CLsk2Oz7c4rCuwaqazL47iZTd1NZv3sIcTsqKmuocOX3n0kt9D6I_Y63HEB6YHAuQrF0gUqaWom3DEqdvfOoHf_vyjt3NekyzCSotOpzV4Wrp6o0aPQSC4F5Qe_ggLEHOdTnqfK9QwNWjRutHgXlGHOu35n69HRzPe-bES9gCB6O44IQcHy7SQCNd-28SG3PVU-9ou7r0_-6rlhXKtQ97M4p9d_ovoIUh_xRk-RyMZVEasgFfXRl_Jvp81f2UFBueG4TsQbBo1ZZ2eyCN01jhoSQG5OtJBR9jDxiisHNaP2pu7-4f5fMPEr8Xc6DhNCS0ZKu47eV8kFQjlbUSIvP3U7TRTAkb3vvxoAtmuvPBY_22n0SKnzpNEiMOiJC3U2_pBo2Vj2MeDrZD6OJ_GhKj60689z7coWELajon1Sq479Yeu9wfPS", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117393076859685917096\">Joann C</a>"] }
        ],
        summary: "나카스 강변의 정취와 함께 라멘, 꼬치구이 등 일본식 포장마차 요리를 맛볼 수 있는 후쿠한 야시장 분위기의 거리입니다.",
        updatedAt: "2026-07-23",
        highlights: ["나카스 강변의 아름다운 야경", "라멘, 야키토리 등 다양한 로컬 메뉴", "현지인과 여행객이 어우러지는 활기찬 분위기"],
        tips: ["인기 있는 곳은 대기가 길 수 있으니 여유 있게 방문하세요.", "1인 식사도 가능하지만 공간이 협소할 수 있습니다."],
        hours: "월요일: 오후 6:00 ~ 오전 12:00; 화요일: 오후 6:00 ~ 오전 12:00",
        duration: "1~2시간",
        price: "무료 산책·식사 별도",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "일본 〒810-0801 Fukuoka, Hakata Ward, Nakasu, 1-chōme−8, 那珂川 通り", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=8299763336248263788", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=8299763336248263788", type: "guide", description: "지도에서 위치 보기" }]
    },
    "유후인 당일치기": {
        photos: ["/images/fukuoka/info/tourSpa/yufuin-day-trip.jpg"],
        placeId: "ChIJWax-bn6uRjUReLLmqHrObCU",
        placePhotos: [
            { photoReference: "AWCwydjrhwfh6OtZCsREwezArWIdpjOrVti6mdhQniNVyTTvdb2kIMGO-f9hjmp5H0L8SXORH4WzW1k0bl1-RPS1Uh5p8xjrccxDh3BOPYAfuq7WWHLqBTmyvKUAY2jXllj7zClAO0n0UC89g1Z7mgvTA4b-ZH8_dOfa2sYVgC--gunEzcz8rymvxcB4_dMzVetqrCS8p7IR-XusAGZylpgVXpATUrqfarz-7gxcwjKT-hafpTpJfV8t64d8gNIANCa9Y2Mw4f26h_jbEugH9nhnFGELU1peUY7RFs7FyJO8pQWbmLMbAb4QestFLdW6nvxRs_GiZvoKucchRJG7658gKEVcJrkmHcL3qg-Zz1hSrFssIxo-QgHTYxj3Ls0IUNtkxBjhm5kAHfQHOa7qKGGsf3JAtjCwHNxILkj16zTlZ9kNMiI", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111325228887735443765\">湯布院フローラルビレッジ</a>"] },
            { photoReference: "AWCwydjJMKlZpsJlsxcDNXYdseytyQk4V1PSKiQYw-0N9Ns0kRHBM70EkDj1gcJ8bSR6Lg2-wjKN764rChgx_7GWdlHNudXZans3CeE3BhAztbNwRHhXRzFbte1iWsKR-ZVUZJOsVFY_UaUOblgH6hsTmXBA9Y0mK2c_6x5_wFuT8r94QqeMCZQpm3OQcCJBTJn24yshzHtKgzHnwTQ1nbR8pueiBWejT3nFOWfdeAUEPXTaj_pqdJqv8gtCh64i2Z4GWYe74MSf2XIk008NdQLYvIFcyPH2y23F4QjdNMsycEoXcVbB9b_fM7cWTvPCCa_qrNf-jt7-A4qHADeSChF9nBVYelNdc_sW6CrUj5mMaiHckJ0j7BBqYMjdkFEBq5AGedSA4N-2zEvtCSryAH85IFL-lbIZ0ouSIx_meD_GkT80uUrjIq7frd4QBFeWZ5Wx", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116633967131778402132\">Thùy Hương</a>"] },
            { photoReference: "AWCwydhCkINykpe_m1BrEMQHRLv81wAJxBeI8UJ7lSn5mj6AYtIBkVaxhTqquB8r9MKWY-jxBX5Is0E0Xvs_G7KX9XItMOdRj1iEfSvF4Yf8zVD1j4bC4345X0r1owz_ECT_pRayFAc9OCBBOoI--DU6llGelon-dN2amtSszzjxTEx3Bh5pNTpOQls8HRWW3QalDEN8FaTJNGNz5bGfjoJCr5QA9o7loJNVGgjl2oyQcvoS3XLh0KhygmxrRi4RF_uP0y6W_FfDGGINTWowhZ2qYik8eVPUHO4mThLRTgd0AZyj5Ngkr0lGxy8LPE_CBNPQ5D_pmCbFQltBaK6TymidYsKlcnLQqr6501CyqsQqHd3pt7j66wKpSlMA4l25ZRchQ-vxiTjdj3HezxJJme8SjxBcmGR1R0Xd1JJE2Pd2uHhZ7A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105234619418051514772\">Rita Jeng</a>"] },
            { photoReference: "AWCwydiNB319rSKcRpwzO0aQye-ILR_eekDCYl-kLCkn7qEtF1Off8DCRv7jabOiXijatq_qa4z8YDnRJo0jksV75IpQ3C8lOjEXc0mwLql_h2yfoocTa1sqRWclYn6ieUcPSZaZVAvDWqqX9wa7YKiC98pRiP9_e0E5RlAqqY1Tb87lnM8XdS8-skGdpelh-YBfqaPaVtTUgdpC_EuLhmqqI7ts34VqY6S_hJ9gzR-KSJ9QOGbjBeezzkYu0QDhxRFo-_Jo7t9PZ6QD80fT81NstctECYxxcbYRk17n3SpKJYqHalexcEdhocpC_RhF1kJSiE2i2_Hiv-SPVaZ_OsdrSLBfkBs01HBbRxfrYRslhxm-rbv1Y6LceUT06WsVAo3_7xBup6AqtfrsyRLuA30F-HJrbZ9utMWlCzPm9XGJO85qGb0t", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104980013619438955735\">nyao (Nyaocchi50)</a>"] },
            { photoReference: "AWCwydh9dAcejIDBAG9IaVMfd61UdJYdhIRNr0e94l3-zdApgoxn0ZMAuCwM0koGoqvOg-Telp5xkIuun8lo_m7fVGEAePJHAO_pgE_6i2erLL17tZo5i-wa_WarVIJlcoVgvzSNFgtTAn-vO6dOCL7oICUvjnck66dTpGPnSohIRYkGSgPItOgzB9nWuz-FM8XCYJbZcX0PNaSFdsVTC6IjL1n-q6dy24fr16TKdkAFua-wULBUicEtZSP0TcyOHTabcg2mLf9obuIlYiDVz5Q-Q2JOTOesqS-dWORRtkPK9lcT212dXBDfOl_aiSq66VM6j9sJND6ujuRDMxpJYSWSTBQpdx_R3sOqUyG04kfkIjTilVvjfPjchWP2AZ1n8Q_siRnRrkxy9YNgxE5c7zVh_dPfF-yMSw4rXpv4W9UEfqGwIP8G", width: 3982, height: 2987, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101055537084351649543\">Fang Mark</a>"] }
        ],
        summary: "동화 속 풍경을 만끽할 수 있는 유후인의 작은 유럽 테마 마을",
        updatedAt: "2026-07-23",
        highlights: ["영국 코츠월드 스타일의 아기자기한 건물과 정원", "귀여운 동물들과 교감할 수 있는 체험 공간", "유후인 마을 산책과 연계하기 좋은 코스"],
        tips: ["유후인 긴린코 호수 및 마을 상점가와 가까워 당일치기 버스 투어 일정에 포함하기 좋습니다."],
        hours: "월요일: 오전 9:30 ~ 오후 5:00; 화요일: 오전 9:30 ~ 오후 5:00",
        duration: "하루",
        price: "교통·상품별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "1503-3 Yufuinchō Kawakami, Yufu, Oita 879-5102 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://floral-village.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=2696757303103107704", type: "guide", description: "지도에서 위치 보기" }]
    },
    "벳푸 지옥온천": {
        photos: ["/images/fukuoka/info/tourSpa/beppu-jigoku-meguri.jpg"],
        placeId: "ChIJOaW8YLmnRjUR8hDZNS3N3Is",
        placePhotos: [
            { photoReference: "AWCwydgvkLmJbiglXpKo2K16pJr8Y98U6FotQcfd54HFcR0keARf2h0CHWGTfJ9JW_wOmFbspGg0EqiWPE7X3cDj7p_NZSPcnIhi3wCJwDUJESn409afwJXwyoqQdpOENWWPwavzINKeiXLCQPFas9P6A4-MZznZXkhwRtVv0p2q61lOBEK1XVFqKEiPj1oo3PWl19QOU9IbxLYnQbYNxGI3d5FCdrrML5fsEOtjnvXMe1BIDe6DLkzHibxoA8ctgVJGPpa4CPN8FOWQ9vogJD_TmPq_OlE8UnY_B7w5RGwGSF8vKS4_kGPxzZ4hXmU-_wjnk29Mf0hgitmQztgbpp9oor4Fa4UiivPW_0eimnlY0ss5MkLOgunWZCF63MiKK3sU5jS2y4tTsPNxKV79ieG3SCg12A10u5U7opRYJcWGExg-TmXia0an38aBlrmGGw", width: 4800, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101298358392898647741\">Parkin channel</a>"] },
            { photoReference: "AWCwydhMVn3AVMs4viO8tSlZXd78Qp9vsqYHLQ1XXzq6l54C3u5mV6KsdMA_zvT5ou6QTLj-2qQOru0vDDnm5jpGrprOs2nSfFuy5vYswkKQpSZRlEl9WVO7iDai8yk7238o_qNlNR7TlRjey-C0Z9ZF1iO6q1a95iW95XlHwoGpWcQ2qey0OY0-xZqIBSWtDBl4heUh84KI3QuL6PNh-h9g9xeNcTEBM4fgwzeLC86rG_uT1lAGTPwnzJSDB3jDXamnhhn-ctV90oOp9vfjJiSPVfHXH7t6bNSRY3Mi8HR3QGmX_kaYnGLODKO355x25X2_bmIx8uUZSKpJvHeml3iXw4l3kJx92WrEoLrcxQznp5LJbo5jeIiO7MTvjSdfs5LPdICriWlJQEWRgdWcLhZIgG4YoAcH9X5PQVHWyawsqFrm-u6_", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112137437917105171341\">菅谷亜希子</a>"] },
            { photoReference: "AWCwydghqwq4-IVZ50wJuZZsoPSvLFlOUR4ylN-46a4IOWqb6GYAvxZ0mmzfzFwv_HDpJsb8MbX3Nkh_UfajOWQTU8wdxanF5zxuiys07RHcpV6YNvFrSqR3yUoTgFh0QQzTBL910sM8S28EwLx1YZZ7njMf1G2aaxc-I48JFQc_M6TNdF64mRCHmySbPbKQ2aWIj0CZUq9-G1wXjaHtdvY6fS7y-xXal_oeAEM1rwvGHapSJJ85LuuQEhjTd5Dnln6rkW64Q5ObKgGaLqT8D5y760zmzyGRuwCFLAu7O_i6YZkoWh1dPw-5WtWyvV6Zq2u69clJxzTZLDV8uAFy1o2sKEyBBQSxzPiX4DN1e5ZPcclGn8NSlh3R7CgWIb6UUfn5dy1fwUYq9keBzvDcC2ZW-yzK0Kju8Rq_mxRO4aPcMZc", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106317360367183107864\">Micaël Masse</a>"] },
            { photoReference: "AWCwydiqKuzt-vOo-637tehY4lwnceFj6gGkl6pUO5sPUYwfeVlTVPLYh06fpfeTj5huJE_PF8Ey8kcF5ovhlbZKzAgm0Zgi_yKet2bKXnXXBtTG_0hqGb0352Wsf7gKHwQTy37RsHAcpAzHXqLZpceZ9uljmwDMGVfr3X2edjs_YM1PVYUmkUhyMbLv1JrwIuGftKtRVpIEsdCqC9sYrhDR0wShAoV4RozxN03p2PQ0wt8kSV7y1PsVmx_qhunb6T8e4HN7vCQASaIaWob7drOJjVrVVRcBK3mi0CXrnCifFd0ox56VxorzYJYhVPSUnm5hSL3QYEqb4QZJAT485Omhiy5ESSOwJsY_4JIxG0Ti8eyzCSPnrtlTrZ-MUUYN90Pv5iqLqbjhW2OgBvQJ1Z42dL5QiLHwhTSPjpMrwo0hEjpDCLmR", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105953901349787131806\">Rei</a>"] },
            { photoReference: "AWCwydgSuc6PMnypg5yQXk0p--oarfCiYT9GnNxHRHmGLTVqpFXOP1o7PE-bhqZmQQi4WLQdmhgrrQyWB6wLKDOidldRoxdqIdLlibjkNhaFatBX3SF-NU_Uet76ufQTnwqU_yt9DuA_OEm4gKP9p3MOcZL_X0eddQIl7L2Hav-b4rOeHNd0EGC5TysuOFunWfzACSOitfrDwPaGfSBDUgJvJo_3ZriSVuqJpwLarOkBov_fDc5Sba5e5tWQ6w9BO-bzG3yELneb7_qNBeOy34Po1eu3zf00KDd7kJS3u2lX0Po3DlcmvQc0K9PCn0uHHE4eNezExyiyJkMwwQ5cksCKmWpoePlUWjnqeha8p3_wxR5nBd_n1uq0v7nnrDqrqAqHSdX4z1S0JamDZBMyUzBCLE1pW8hiZJ5GvL1Gnd8DpHtAtUNJb_FViVxHUk-wkg", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108797621351301380697\">王樂樂</a>"] }
        ],
        summary: "다양한 색채와 뜨거운 증기가 매력적인 벳푸의 상징적인 온천 순례 코스",
        updatedAt: "2026-07-23",
        highlights: ["바다처럼 푸른 우미지옥", "피처럼 붉은 치노이케지옥", "신비로운 연기 가득한 칸나와 온천 마을"],
        tips: ["각 지옥마다 입장권이 다르므로 통합권을 확인하세요.", "온천 계란과 라무네 음료를 맛보는 재미를 놓치지 마세요."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "반나절~하루",
        price: "입장권별 상이",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "559-1 Kannawa, Beppu, Oita 874-0000 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.beppu-jigoku.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=10078155660208967922", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
