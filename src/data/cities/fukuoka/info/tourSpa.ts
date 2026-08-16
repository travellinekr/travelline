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
    },
    "하카타 강 뱃놀이": {
        photos: [],
        placeId: "ChIJuZ6WbgmRQTUR6STuXJiJkL4",
        placePhotos: [
            { photoReference: "AWCwydjL4hgb6IWyLvpPvy9w2a3vFySTdUg-Cte4UyMXBQhrXfy9rKeD6DT9vy323viMwLvo4AZ-_ac8qeA8ZwUiRXuWhOvfJWPZYxldnLd_g7LVrZa6YOoopiuizBbp6GEV6iqq3tZRHYp4b32LzAk4QGtjUJRL3c5cy5yyy_pCjblA5UrWrELcKEZWSfoEO6NEho5ZyUvKt09xrubZzOoiNJjghncG6PgLzt0lOioNPuyZLTu1IwQXfsGKZGoQNfpW9_jm8qJbPvNOtfohtxAikep8nPSJ6Tmd-3w6hx4Q1MXAyWWegjqZFK-AUCJwY_LLoTnsQ57R4ABtn9ATORY7IYz6ZTq7VJ1quNuRG-ds9po5dDYslY2jwVgTuVRE92fZ0V-TJW-1NBjU77MTdlxH5_W8dZ5NFOrxjBR4PL7duJIaElP1D2tH2KMohdSDcToc", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108106906304361306221\">博多川下り</a>"] },
            { photoReference: "AWCwydiwooPci7xqtAWLlaj73rLLducBWkzuAg_-i1--sQZg9Jp0Sn9KsLm2iNeBdyVzeQ6PmPzVryxvickRTPV-MqCidIeNy-lNXCkjmxxJ3YBj5ANDm2uYWteby4vzOZvHttBic5eenlnqm5vxnyAma6cyNx7HI651D9V0hHEYXdByQSLXxDogi8YcnUzuo2lUzXReuZzBCcczNI7GYS997Pq6O3ib_fQGoOnB271zYIQ585JofNOCgBgPEHP3Bxe1ic9Uq-Ghn1yVUuphjGpuiS1ivrmFyG7Bdo6xhxb2lXzyXi2whSKAuJy6UVO4OVBmvGkZV89AJifWITxSqJ3C6b2plOY-NehTnGY02ggIWd7a2BKhqJg8zO3YK3l7Zkky4jJs6WL4IAiodwzUPdsUN2hxe8Kz8xBEN81ecv--wxwLJUJ66Aiy9bCbwVpm3FOF", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102612724047223564041\">田中宏美</a>"] },
            { photoReference: "AWCwydhn-_VrY0A22asTmllK5t7RY6M1kQRw46WI6atBkJedCf-pvjSx2VSV72goMu-0xftP07kUwQ0una72R4_biJu7QO_28meP5GkerEbC_BSUWVePf6rtdSTY2DmheD1UxHVUubn7Xq3pN_cfYUkZsJAe0XkPfq1TkcgQoc5YEYapAV79MFbNhzPEO48-GWdUNey8QlYvboXl_5hxMGcEO7UqNp1r7efVLEonoVhQHqhPciYWfeqGGA7SicVZzJhkn4VtR9iP_YQV3Ypi3ShuKx1QmOgmJsxG0KNutzrAU4AECllPkJ4jpVTzB62jwq2Zh4j_rP1Hjxvk6aBdHxMIRN3JvQg-pajAw60us6eemrQgQzkqKrwagrJZiaTOOZDIAFQ7Jw7cZ_XnfC25XKi9RyTFPdx4c300t7tzZfnWpV_phU-7avqE90SjLBmjiz09", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111773847427338278281\">小寺若葉</a>"] },
            { photoReference: "AWCwydjobMynyNxUucTh_v9CnbaOq2LI6fDCviQCUAHtroC2esem1xCfcGZlS0X1zMNmW5A_zIk2znvsaEqLvTAzQBpJTzV5qriXNKJYYSFQQ2rPBQgg6vZogMk7vVatI4_ymZQr-QdSJ9OLeO6N_P4TqGanjC2d8epEaowU5UnrV-_DTJkrR6EKWDl7B1reUK-CsW8UzLdubSFdIo6fg-t-JwBhPcw4E0jlT0jXhmLxNHONxsJRdIaoELr_XFD6JuktMTwwKMBtHLJUd--zzlmmOR0jJ7S3kRlBjAl9VWKnarg9T-RvICiIkJHjvSoFntAvpLjBGux-P3k2Qu6mRIo9-AgJ0qwqgZttVqPpZYDWdaulfNw1N4cNrURHc3ySraI0YH-ka1PG7D1GQ6HTJS0qjZBRSDJLj-aaXyTgJNwkIhKDslAey77iuS5syw4oVw1Z", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111795114414417612467\">Black Sheep</a>"] },
            { photoReference: "AWCwydiLvMMYXfkprKBNPzBZsYDEV3e4tAn7kGDbHP8MoUFlk7cvH4K8PRrP5SpC8GaHUAK5yls6TdJSc0NgcDA6k3t6u6nXG_6opX20slboFwCrdeMDkSqQ_dMO7EIy5QwAW6XQI_nRt6D9ktaNNzib2jFcO5ij4wU9cq6AMPyxEe4e5smsApbL68cjUolilab9neMTFlW4hKCGqOUElVeLp3b2XihX3nrVfVM8VeX3LTk8u0kqAniT-MoJJ_YFwhVM1WM8iAbP2hTUe-DtSzmz-aV6jT9Di3dihGuxttpjspLCrMj8EodyofGszFVDZiCNv8cvhdrF0wFuklVW4JAsDVeXsYcV8CKY4TrhxjFi7yU6-FM377tMEzBk4wnFZVih4Aqe50ntfNWuRdyi_FPey5X_EIK50s-Z2UvUnNoTkLiYkX6R7WG8AJhyHHw_vg", width: 3472, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109270370522865980191\">matsugen</a>"] }
        ],
        summary: "높은 평점을 자랑하는 강변 풍경 체험",
        updatedAt: "2026-08-16",
        highlights: ["멋진 해안 풍경", "친절한 선원"],
        tips: ["풍경을 감상하며 여유롭게 즐기기"],
        hours: "월요일: 오전 9:00 ~ 오후 1:30, 오후 4:30~9:30; 화요일: 오전 9:00 ~ 오후 1:30, 오후 4:30~9:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒812-0027 Fukuoka, Hakata Ward, Shimokawabatamachi, 3 博多川遊歩道", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://hakata-river.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13731626551339787497", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EA%B0%95+%EB%B1%83%EB%86%80%EC%9D%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후쿠오카 오픈 톱 버스": {
        photos: [],
        placeId: "ChIJJZaIxpGRQTUR7Kpo8fIeGbs",
        placePhotos: [
            { photoReference: "AWCwydiB22rIo0LIu1-bVlGRhGmeOUuv-T-TRor2FjJZLXiELQTzPxD1YKShO6H1tm5NZYvFPpLsQO3IxLLgl_xFrBx3ynWJKIsqV-vLuZeE5ZMD9ALmcE7FLyOTXIZsywe1bjFoCPTj7jT2zZrcfvXcHLlLZmlih_W8a5ZBAeais5LbMUhy9XUQYFVQ6iMuVAxZ4UpxHEVFagNoID7o9v99_JoBfLwOPYkxTHnM6NvpX3_pTrYe_xF_FZuJ3pH_AZp5ly3WwBDAY_UCW7J06iyZMB9S7zQI96ujCvpgpC-ZirTxTHJoVzLIuH72b6bfk1j3wkARs2rXbML4cfaYMqp3hGyeYz5ckOz4v3crK1HE3fxvmGfwDkMNri5RFdt1jiSHvmt0PIliz7mc8gtcLeQJ28ShM-GF3S1Pe7TbWAFr3a6sduF7", width: 4123, height: 2748, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101025232280347038318\">福岡オープントップバス</a>"] },
            { photoReference: "AWCwydjrqzb173PppXRl7Ex_4N6dqSNGzl1VfV7p5HXV2rEXYx7oti9NCeU60C2pwbPp7BKwezxg9momw3OW-V47n_sdxe_njh76bZt1ro8M8N7BEyaZb3_YoHC_yyeAeyWVT969dZeKOmbcelpBDZ0nJs00ybDB-KYCP6EZnYNc45bvA7ccDtAqa3gyGYfdAmigW_mr3iSuFX5ynaFsTdSlAFt9oxR8h-_5fxVtPACq6Se5m48KpLxceRrUSpkiCuAMvKE1gxgLY-BLwiKrAolxpU7R-Y5qe2WeyuQ9wJlfnKklyZidjDexxHlkn01eGTCSEsRx0ASQgEtWC4yU9FINMv3sr6pbwlc2IVVZBrm_UM6tbOkLK6OYtpVNfFpyolQXKhLFwEwWb83vGTjlSPMBw6-Ugnc5AqEKyM9vDmqIGrElXwaOze-Otes-h5FPzQ", width: 4186, height: 2399, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102224933916158964693\">SYS</a>"] },
            { photoReference: "AWCwydhoLlJF4SqJlwu3H8ltgbkDhb5GdmRK51VRA8bKGvI2ikL3ppy6QhO1Vvb3oCkXBtsCrYJ3jUT2WHQtCz8hbCBDvfzBAV1HFW4uA_0QgIxj1EjUWGa7SyeSLX2jf-VI9ftSCrQk_iqwQcZ8SvVz6qjJ5ZzvmH7aPSPIUZUwtWpxDz8ZlbxLqqkyzvwQBKdD3_FRyseC9ZlMvURIY4NcmyXP452NXg5tlqC4n7_icmCmtPE7HX9DUymt-BKcnQd55soWWIxAz2YkTr4nPH52fwF7B6JdwO4QTCvGJvgXIc46d4hMyknDm0r_f7rQ5XYbxj2NCAHJXJAM4gUqKFVo9iTDiqJ8C4Zk4phB0F-jDnvUWjhjPZQD44tqyL1vKG1QWTIL6i90lI2rKIz8bZjK210kKzR1bG9HCVPTc7xLtbft6TMi", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112217362075835904302\">A</a>"] },
            { photoReference: "AWCwydjSobWPUDPfDgqON8xGsXlXXN2Nzy6R2_E09M2776YE3N2SQOAd_MiWeLzRvSdzENKbOtZsqssnDO1wmfTr_wuBnvRJViJyH9wLgTArL3m48RDYpAYpotMLB_ruUT6yWg2aiQvttuQdrlnn6_o2FEThSDSJ0P8Sw-xP4axZn_LS6JYGOFTTUlLCfbMENrBK3ylT0yLe04BWC4t7WrUNOKeYawyxGrkTcwTtO0BY5A3YRQh6CeAMtdHwyMp2EE0PMuHGxN2yrvxW8_tbugX3FCMJIKUOYnJZ4TqOD0Sc_ZT5aS5l5nO_f8uzo-7eX2s-NodqW8ln--eGZtcXgDS5VBTuXn70QRoCktTy2oUfSG8c_Msq6hXeH0zydowlp5iVEYfQ2D_QfwtSycqGURmoMCGMdqRaYQ6Bc7FHrni9sK-WsA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110402161325748038780\">Tabi Bito</a>"] },
            { photoReference: "AWCwydixgDwxgMvSxdNhl3INrZBVv2xXPLsWN6etsU3D2IKMNmrVqwMvXo2m7l-y3KSQ1J24tdW5KIS-tGIrlwDpbkcIpvwuR7l-uWF6NgsHtLR6vDMHuiLpP6TMUlttoOMa2qcdp7iCvJQOQ4Gt-FKoP5miOSvHKgRQwz4naccJscK_3I7BozRCJsJXRCDw2qsr1mgWHAdL7AAO9pYTPp8DITfMOGgR0l1DwDd18Lm39_D_UFET0oOHuW_KN1lcLDNR6eiU-wCIis8feVdQszNnlt9xMD12N0ruFG96Klpxlza_TayilZLYtQCJr9Sk6Z7brpcHsRYivvI_lxYllCBhXtuf1T_EcZW9oeUygStRW-Cy1tmeLE5BDD449DP1596m2p-T4dwKjPXj_KIQkhYKESXJoU_vUiN_I5NpgH8KRXnWsajEu7qdWEuchjxnuQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107300284704965834940\">TONY falcon</a>"] }
        ],
        summary: "바닷바람을 맞으며 도시와 바다 경치를 즐기는 투어입니다.",
        updatedAt: "2026-08-16",
        highlights: ["2층 오픈 탑 버스", "도시 고속도로 주행"],
        tips: ["바닷바람을 대비해 옷을 준비하세요."],
        hours: "월요일: 오전 8:00 ~ 오후 7:00; 화요일: 오전 8:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-chōme-8-1 Tenjin, Chuo Ward, Fukuoka, 810-0001 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://fukuokaopentopbus.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13481840988291377900", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EC%98%A4%ED%94%88+%ED%86%B1+%EB%B2%84%EC%8A%A4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "킨츠기 스파 - 스웨디시 & 타이 마사지": {
        photos: [],
        placeId: "ChIJvyRfDRORQTURIGeV91rIStI",
        placePhotos: [
            { photoReference: "AWCwydh0uNjMv1BCQET_4SowV8gNZMHlr1NTdCkzw7H5ar3VOs-VJvt8GP1uIDejB3WpvakNVW8Wmm0Yzyof-sL4ppMDodPRyeBcIQ6X1TqF3otRsrgp9lFcQO6e9izuhqpoKEKCz95a1qiEEIXk6uzeje88NQ2t1ZUjXVQuBiJK0vgslJTuwwdpsNdd883wHYk2qgIOriZ4ag3mjtVc9whLPXZtw4_j6cWUQxyqNkkdNxGgYVQ9OmSjA1bLSO_cMrqwEeWtx_ynkeFAtvm38H9265nLw-CEYrp5nKip3Ouz_9UUuvzo7apxFAkp3oWhGIni-NIHs6pYl7IwxTSEFcw-4-1SUBYX9glNJmUhoroMIHTDa8Vq7GUtd-xHATN5q8xkPOIAg4IanG6xQErzZXCBSgb7--wZqU-ozzjsiOmI7npPyATXIStX079VQE8d6MUs", width: 2048, height: 1153, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111809434507831772043\">Kintsugi Spa - スウェディッシュ＆タイマッサージ</a>"] },
            { photoReference: "AWCwydjlqWBd9xqDVKSmfIWI0fR2rfROhkbzUu31cbA1bf5cZbiJCMBZBkfNyzcQ0RFbm3ilOp0F67leC0D2Z2sTzUhJHv_oWwdwMdknUsHnXRAAqMWDFBxbxo4JTv9lUbjg5TQBkYF2SK3grZ84BNcFReR_WYdpjWiPkhI1EccNs7awIMQJAp1OB9NG1e4M1oekZqXPsqHUvMpWlGYe6qj1aQPof16IyeCWDGcDpPIjhtKd7R6pU_E4ySkceaMs0ArmI0Yxx6m4xUpVIGXSWsxG02sz75mx_ElqWoYU4AvLDpgN2Vpb9SBVCyI8vao9P34stDCaNjdE28ll2lGp7sJleomES6ha_6LD853vEzgEU-6JDlWGHvvTTnVa_X-ZCSont31PKNltlVXtzFJVkHkRhEktmuD0BPvs3y-5RDgE3skvXOiTuwkztk_iXUq-e0TH", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111809434507831772043\">Kintsugi Spa - スウェディッシュ＆タイマッサージ</a>"] },
            { photoReference: "AWCwydjYW-D0PXTKzlfeUVAQNNAXohwC2VcNAsmMWScJWbon_K6TXfvhBVN7bYg4NuDodYEopxYm7IXJx1LRO5qZq3AaGTUtdxwL2tLdraqM3pvUGoqhIkbwdWP5Ql_ZQpdhPUjIgVDjTM7UBnbPkYpeoHykHXUNLjvFCR_ABSIknhLP-ExqBv7XViuLnJsnojtr1ipDttKMIsWxW5ZxJ7EufejGUQIwduVhepdba4M-1_scdb5ImWB9K3FZ2_DyZJEL-CJVHoEIDz5Q6SJr6dXyh8mQs-L9gchl-zD82VoaPLtF2YadB-HRDPdwAVD-GkhPUSb7IOO1mwx9f9ppNybtyCF_zjs3-YB-9XwxbwfZNWGuqm22znkgJDjEPcs86qTTWCcTi_VUt1Eh_WnNRcfqBOkOPnDfLy3NNubE9TF4m45ll_B4QB_ccCAE6Y2v3DRD", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101114996939353021413\">trisheezy95</a>"] },
            { photoReference: "AWCwydiLvGgTIHIx_VTReyGJUHdxHxdI9Ax3UrOSL6iKOFydgQihWUzu0tPmDreku2hdWZ0huccsIDlDwYR3aG-6a8UL3NhMjnfQEakhr9-qjV6F4cJ2YFSjvf2wOB6OiaxhNibmKkKxmqXar3l56KcqCjbP9O05Nlu6JerZxdveNQT2SeSeSnVj-ZHjrhNJZNbtHGrlvUWKEWtReJDCUkuakmGWroA33XPdyr_s1SDnor982GEDf6L16g8BkN9IkWHYs_JQg_sGVL-HeUmuZnsvKgknLNYY3tRDQVkEcOl_QOLGLxHdB25QBOqerQBhdio73gebiTq34Y-4CNd1SJNtMB0ygs7B26NcdRXHDLelOX9hgOyFrsRmkuHkS5In8J9YEKq3OlIF1eqLFDMv6cPqGx-TCzPFDjLu3baOjC-LwmIB2hSZGmoILOO700Jj0iau", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101114996939353021413\">trisheezy95</a>"] },
            { photoReference: "AWCwydhQ0WLKjuUCFPkFtSenfwoQw6HH1agbJEWITT0zJrs3lkNEK39GNcQvoi4SMgYgRWTDcJMo2N00BHMlHI8L6UhNtCACXtQ2W7-p9v5ide7qc2Gapznmugq_1qIDa6jjF-cYBLFtBn5YexoenWy-fxmt0heM9wlZwATJeOS8xebUJyX2nXjMHNCJJRF-KImLKKuZPjMm6TnDC7t9-RUOp8J5Kd4ZqKH9VXxlLcgQxy8b5Oudjoi5YJsAkVTVD-4p2zkPfDnvzDdrXbnvsp_YvbOewtcHkOwP6EpYLwh8tMw_pyUNTxHU4fLPN--KS7vtpsa38KdSjsbBNGEUK8aQRIxDOks4gT3e5bQMxa4NbdCJIu9Sm1FzoKx6WdQU4I3GPmWOIkau_J5XB5dR_aLT1mB-XmX61AjTTfJyduSHh0gRou0lE442cjeFX61fxreE", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111809434507831772043\">Kintsugi Spa - スウェディッシュ＆タイマッサージ</a>"] }
        ],
        summary: "높은 만족도를 자랑하는 전문 마사지 샵",
        updatedAt: "2026-08-16",
        highlights: ["적절한 압력의 마사지", "확실한 피로 해소"],
        tips: ["목과 허리 등 전신 관리 추천"],
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒812-0011 Fukuoka, Hakata Ward, Hakata Ekimae, 3-chōme−18−８ ブルク博多駅前 Room 501 (5th floor", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://kintsugispa.jp/english/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15153144189267830560", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A8%EC%B8%A0%EA%B8%B0+%EC%8A%A4%ED%8C%8C+-+%EC%8A%A4%EC%9B%A8%EB%94%94%EC%8B%9C+%26+%ED%83%80%EC%9D%B4+%EB%A7%88%EC%82%AC%EC%A7%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "켄라쿠엔": {
        photos: [],
        placeId: "ChIJnxmGkTeRQTUR6-0XActZEl0",
        placePhotos: [
            { photoReference: "AWCwydhp5JEE2-qQuE7U0R-YSMpEGzjLQpaxvDyQc9cZnK2VtBB-31mc4RqIg-OfAsB2doqKBrbpWcqssiX2wtrNORPG1AxxrnqrwZeZOmG4WQPNFDY4wqoLG4zuPS0-h-c-pC9ig3pL0AGlaiUGjlGLa-7wwm8UwNEeKwNx84MGgmhCftUxpEag1xrcic17Oofn7dTrND8pHzmYY5hjasijCDkUYOW5YH0l6z3by6we0ggBHz01TWS4SzfJ6v7jjJcF_veFrMxYTVHzb43QU-NoUlm5zw4VT54EngYBjAd8NiTmDPsmNTUAyw_7GYJmuHlOpwhDvkdfJXZfKTNQl72uwOvhRMrLb87zelvI6cHAJyKYgdV5-H3QxxjcOgf5svXXfc7p2kSRx6DLzPWJDY-7trS2Y3azaCv0GkasY8saA8hXqGOL", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104962889339946767374\">kasumi tei</a>"] },
            { photoReference: "AWCwydjS4zwA1fNVg538GJ1Kbhm9DaGgRdtHe39tKg1IEDDCFLmjdIB7PFMNPqu0N0XlHDgY7iZsi_S72lv5yqspBs_9wVa8Pv3PP2nkvvEOH4QAfypiE5fKa82Urb1vQG_juGR7Q0ck64DvcvWF8wEPSc7E4oAElKtLwqI4V8a1MDfKPsm-ZWf8rLX1VK1o-n47ShaG2KVoxp2UNbxwANUka1J3b3XMWkG2Abyb8UnUDX0PRHyQhkyEqn6ciq6B2mLUJsbmTZiTO87-i5J5eo_kaynWbJqLciCNim-sobSPBbHl2AyZvNY6efZ9zfK7tuG7vxQRqWZMredfJDnalP3z5AP8YuKN7gQkRse3P_vILBPcWodLyaFxmjG3ipS3Iul5sdFxV6An9ITAQ8nf_G91cizqysCavNDnISOuhQmMufrn2g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114222596721846617537\">Joshua</a>"] },
            { photoReference: "AWCwydix4l-Eyd1hwdek8gV8dqqgcucZkoAJGfE6veWbNGNarFo7wpFHfMI80JUUhlrXejOSeqcPI-JyR2qGsyvTz3OEUw7abLVFh8Il3wtXbQ6LBS9tpgsSpl0g6uko8uCXKQR_GmicQE1CK8WhRvqIYmfxUz25WpdJqMquDEuz4drOGLQfIpXandtY8qJbp8wfS147ZW3Cjnx1edd7FipFdwQUX-r4P7zlX3VZ6d8bhDmYAb-nJlFrYouuo0QCyv0ZAfrbxQUb2abZx1hNk6-ZwHn0uFjHHCY4iFUmXS46yVmTCL2AG7Y2nqZPr3oR_2TZGyKNR5xyEeZUxxvC3kjaJ22Hhdt3fYLuy5NUzx6I_iMpz78Ex5l7nmFUUR1JnHgyv7D7Td_IcfxW99wmrNr_Ef3mRKhlRAax7r1oWV2AHzeZpEA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108332271093027704593\">健楽園</a>"] },
            { photoReference: "AWCwydjEDp2PpO5_yxvhlgNMmMIJ7I61Bkan3h-WiUmskN21kW9x5oZ8jxJ9B0I8-RrXEy_cmVpoDfQx1NLsqIcKC4z_9MgoiLI0zMf2koi-Z8WBim7eOwok-Gv7z7DTbT0dfrFeZenZ0_0UWOrGBlvkywlw9AWa3a_gARVoJ75ysZ7TrSyWAjOaRLFfhwnolWkEEmCdp4Zu3LeMWLbOW0Pc5l-tQ1gz5HWeP3F0GmeCX_2tvbU0GA9GHY6_YpuQANAdy4VL5VpWPBllO8VObmzeW16UUTGzDmzWvkaYSk3dEBvE7VsxWwcEAsl9xEeo2bnh6dzBEbkOFkLK6MnvyVbODGwEjTLnhmEZXmCCXrlQq3n8Oz_qMrYyfjDn4Jg8CxhPntohXmaloDPDtZVTMkAyhscyFj_BPIrGr9s0dO-s0FtfJrwg7nU9xtxDHxsW8IeW", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100913596443051733828\">黄玉鑫</a>"] },
            { photoReference: "AWCwydhecr7tybKm6MFQ_wazA_Hg5njgLHw4f9fT73LAShEeqpz89jSVUA5tGd8fsXbaqVgo_uTvX6xXuusRIATp0SSvOSGTjiNSlX7B8sTdp1qHpfLiqxJLBFZMAvH5uWimlTbgg6nmtGFk_ysGVkkI2Q9VNO-PLRncqKpvsNJKILTsNYwBPO8Sed-bMOdHCuv85KAL-i74kqPgCAO1L1K853UE3KoG5LZ8pidLdP6yZdvqDN5Ivm5TXIIlbH19GWlCZ83qvBxfwwQ-dBAvjhCz1VXzIDvksg1TUlJFPDL9dnsh27q7_qjLYxvcXaG6sfciV4gzF1voHvklzRO0rI5WzuimN5imPUNN8Rm5U2bkvPCLsP5_mhqXUSax2TrbrSzAjOo-P6tOroR5gjrHQruTLopo-ke9xhQEdSEyb_kKtcQtc2w", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108332271093027704593\">健楽園</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 인기 스파",
        updatedAt: "2026-08-16",
        highlights: ["저렴한 가격", "친절한 서비스"],
        tips: ["숙련된 테라피스트에게 예약 권장"],
        hours: "월요일: 오전 9:00 ~ 오전 2:00; 화요일: 오전 9:00 ~ 오전 2:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "10-4 Kamikawabatamachi, Hakata Ward, Fukuoka, 812-0026 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://beauty.hotpepper.jp/kr/slnH000591139/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6706521523539668459", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kenrakuen+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "포 사우너 후쿠오카": {
        photos: [],
        placeId: "ChIJi4RKyMuRQTUR_0LDwe7hDJA",
        placePhotos: [
            { photoReference: "AWCwydhNKOm-C2EKPRfN9J7Yor0QYaibXMdUIEK1YmXzL24JGmmsnuex4bwS-W9Ef3DXRX472y-zNCFrIIJngL1kgpblXE1IWAc8XL60cfjHNXoAFk1akyWpKzfq6hcnEBXKbW7YCz0PxjO42BhxoFitnlOzfZYO-Fn-5UjGHauzRCBN-5LM2TbKTmzy9W_hh-1yQKwj56nt8rMfiHKoZwd1tlDj0F1KHg-FKdUOz_X14bKTCUzEUgZiXwsTxcgPG3HGuOwGnMVneX8_nlpnVboKf8gGu11x_AhAoLOeHvDExQpNxYOczl0DazVON_LDx8oVjw8TmEDasqmR5FZ4kUbNlvtFRgPyJcP-bWwiAOodTwIQna9tveh5Rl8XWdxxICG6FtL5fmyw3ruwLm0a9fRXow7352bX-l4JvyHjSrHm4HhfmQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105623063343023464440\">for sauner（フォーサウナー福岡）</a>"] },
            { photoReference: "AWCwydhWnuPLbs_FheRYC9O5-Nu1q0uUd5YK_AUR5iSUmPx6iOIpy2arqA7jcEcMnzsQ76wiL_MQ8QN9FEaKrE9EDWWJBn96ETXWx1J5zrx4hPfbQXz-EaU4bvg4ww4kY-ym0UJwSPkYsDlJnLiaAYsmTeUdJ2MKpzLeyj-BJjvQ8aO4WEspqiwJk40hPNQPbwyjM09Vqqv86ZX17PEMIflc2LIa6mOK6V0Da8VlZH-fi52jF5-YEEJ7mF-Qk9u5RWb04cAK2GlY_bzr6t6o6pL8XNmPl1A1sbUVIhdhmMCFovxusTarBNPfp7qBRFHobqzqXXI-Ho5llop0-AP7mbWWGhWdFOEaAaXY9UvzJEZk_COiYO-tvwef-X_CfmbeHrRXByPI_xEabfQaOfrTSnthcZ0wpw1HdJiw_IKHELdw-H4", width: 2971, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110335985894279563221\">かいちゃん</a>"] },
            { photoReference: "AWCwydjbV2S1NaHjpSjcrBr3LmLirEfKj-iX_nSNl7RqRa2BRDo6Hcy50g84HdwBb1y7dTpydarbrbi1xjPDdLyyNFO3b4HEXVvbWQUfb-nkkfig68EfdvvV4kjbro3XqXmw8lfxo4qDIIivpsj8LFCI_m9DWdZ_KTUP7-bDbkxn_lvATkINXtVrUpskZupsIkp5WmOpDRfwct7f5SfKBXOazHQICblXK78MZdytj-Bqp0-qehnSuFVhY45kDzG3kIqRxS0dpIS8wCyvK-D4VM_VtBiceGGR14696rr6uMdaUlR6tDZSOGaTblSW1aRILHG2ZingaJ8uQYxP4tI7ZSIffx6wjv4xN1insT1jmEpknd4lzm7J2dPZnHxDARESy9JavQ_F_I4foDQ0r2tDim-a7p0teKae3XjLRERuOErsqFo", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105623063343023464440\">for sauner（フォーサウナー福岡）</a>"] },
            { photoReference: "AWCwydjJ5Y99w4iMW9gInXaDf-OWlroFp_V-0b4OvLfyyPvpFTMzXr-AtntiLRQMktfT5Csl8f79zGvM4dN92FCntV4JtOSpLPLNqYlQ0WqYm9bxIK4XtgmiqC43KIwrAWsdwEqoKa37hdkTel3vwA1tZ4FGPjugDsBLya3UIkKc0YULBeYcWLfgNJy1MV27oNm_UQG54QlNHm1Au1-t5UbDgt5cqqOcBY2CrJQWv6PWNwLgOVoX-zKz6XIzYo5Z8YzQ0VGmVi1W16T2EQpvnC7L507mR1Hh9IoGae1NZ6VoFserozDhoJB-7bPUVjHXwjWdLpjSU9g4e2IgShItd6xq9PJ1oXqfzXB7pZKN1ctEFuY9gIWsplJn2BGO2Cvlra_SMCX9dvi8_Z9tvEAV7eg42KLzcra8PDCYCyU9pwjbnF1Wcxic", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105803652112622164983\">Ysk W</a>"] },
            { photoReference: "AWCwyditPFF45_W_KoLA0lDOa9Ft5xVoakbt9cJ0LEJZIKQV6yprCsM_4JT-PQ0YoM9-QRfU9SBVCg2ALzAwB-BQlvgkPvs7ePhU3QfHTEEbHZCFKg88LAYswxBfimRUiFB-9lzUGtgjeBEcuBV-v5zzOddhxtFsB8Gs7AxJDBnVQmY9FZQQQKPLFV7oThtNi4lBv4EGwTvoAGuUOTG143VW2FJJFtWcNXVStMbs1jUsiCu5JMhoA5lkLPSsVqVcyWobhA5YbvMx18rFS2qikIwME42y9E3J8Df3O17_3hmWhV0sGVhzL8oR4O8-YadzF4DqlGZ5xE_ARahHKhgVKiZksq7mwOLWl_n0bovm-bD-ucWHMtI4or2CJslYkhqn8gof3mzNHa4wNk8lS4Ukzok-GhUpuF8jd3fIJPT_Qy_Q6PDqrA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104927662887810103402\">M M</a>"] }
        ],
        summary: "높은 평점과 정돈된 시설을 갖춘 후쿠오카의 고급 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["예약제 운영으로 한정된 인원만 이용", "편안한 리클라이닝 의자 구비"],
        tips: ["정기적인 사우나 이용을 추천합니다"],
        hours: "월요일: 오후 3:00 ~ 오전 3:00; 화요일: 오후 3:00 ~ 오전 3:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒810-0002 Fukuoka, Chuo Ward, Nishinakasu, 3−６ 4F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://forsauner.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10379919656751416063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=for+sauner%EF%BC%88%E3%83%95%E3%82%A9%E3%83%BC%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%BC%E7%A6%8F%E5%B2%A1%EF%BC%89+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나미하노유 온천": {
        photos: [],
        placeId: "ChIJtYA3dfGRQTURBG0df0WDEWY",
        placePhotos: [
            { photoReference: "AWCwydjed6UM2Zgrka4fxRRm7yP9uth7wLI9XhXPp28wcSQgSK5hlyXaMdO1v1r_32iGtM7UCmCcNl4t1CvKXcP7WLHgltqBYBkH6-ZZG0TFzVlFcbhj9Tx8Nhl9rNEGMkUUio4eEB19Q0QIo55V_XXoD8-kOUU5IYtYCKHPnWsHgW11rYWgmqDgOghkSwiImwX-NaXOwtSqP5gMHF1MFCyUEghYRkdOHZ_y1o81k3qkxnkiB_t4A6XhbRK33eU81NOjS6UCIFf9iCwnZNxY89RVJsxIHOCc9-wM9gXj6J2JVUezWlmRH1tf9xxx_JV5syhQza0PLwr-EPXk0Iau5IaHPgPuQC2ZQkraThCmFn5QbHFtf5kEAhXQq8LbdNMqqpJYVqLiXJkZ7YcphMZRLsNcCo7CdKfMllmARauTcxdn6_dj59fs", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113881617983501603908\">seamo15</a>"] },
            { photoReference: "AWCwydhm4rMBS30Jt4gScck6x5u1dDD0FENFGh8U3R5CwkMrSTKNYeu5YeCRCRkfhlnMlw0akdl_ozb9ERIR33VhpG4KmtR_5H1PayhSpC15rs47_0Ct52FDdIBx47E2lyJofAroMETAqAQPizjRXoXL0TDBM1OmcYdEy2AQJTNUhHOrPc7IwnHgycEmPw0BR_nty36ssXLPRQkk-JSILaRLCBeU7p4-6VUlE9cPFNsFDfSlRHVdQcbo9OjkXN3ePW9TVEnUsPW_uS4DetOb_RD5mAiPgU4aBtWOHhSWPv-yMFWwyDYvqX_wluAZDz6YthVGrY5iw2KFr_cgxcyto7BUNhwBF5bAXUfJoScbc_BhsUZpkN0_crcUIPxCVVefcksTj9PHqK6x8rXdv1ahiGy3DwVF8bGK7lZU90kYwodKOyR41w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114325260140239001543\">최솔</a>"] },
            { photoReference: "AWCwydi68EzfZ6D9J8kQ414HsQJmv1x-9K9ZmxCjFl5q4Tm0UfzoOOnCpOaA4Pf7sJgxTYWw9Gu4EIxVU1O3iv51fb0BaIX1psPGq6vUP88CRNjmFGsNlfca032rhecpS0qow5iN1ZxEpUuMwKY5srqCto1OgPTG8rKvtgaUBPeLzIzAq4O8hV4TBXcRUh4kb8jaInEy120cHTnZ0Np5IE5sxpGwSrlVDM-_pZiGxgp990DBmniYxwb4nGeddswgOZ6USiVdnhNP8SbnODzT5LGlIWB8p0nHPTcrOnAlOiDw_OAV4kCgbx1wr1kqzUgdM2YAyaMPFTxku3chNP1bozO2Tvll0qrfkRcr_whI8pHBsjvXurtidkkvY4DimT0l1sOAwzT68XVUpeylF4zsirSZ_-vEyEMhQY-fSVtM0dsdzDvO8g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106495548096255238683\">Jenny Kim</a>"] },
            { photoReference: "AWCwydhD-FeNXA0FsqtMaZxmf1NXHgpfzWWXDSAEhB654TybO8O-to8KnZDpXbUrRzorKf4cVx-b83ChgpNDNBQz1-X3qndctxPfaRHNis1rKAa7JRjd9_KkmsF0Bf2TWeZmN24sQZDOpZpIQnEHKizNIIXiCxVLHJwhyG8m7xJ9vX-XNi8q_hc8Vtw1R1ffvzm3J5tdFTr1Ywi1Le0jhR9XkzI-jR4mN-e9ReXxe-Urep7dKwBuK6HOu39dM14zTBzqtlWFoGfYyo1p1cCNBoWVsT6YwBWrIH_oIy8IyleNeqpPUQV62gLrQhj41v7NriCSIb7AakZUWaBTf3CyWeevI6JVy61kNjTHGtmwr5GMyR0dUSUKrGM9MeW1LUcqqzLG0ut0HfzeAJSW5iUWy9GtTqwcjqjH5RYpjnjtoZjndD06Hg", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115739063899883980923\">チャッキー</a>"] },
            { photoReference: "AWCwydidd0I6JMMUF_UvsqcrUBOmkFD7WBFr630JUxL_V4ZE2vt-bhF5nbSnWmSjjKYZLyUOIpr2o84PuOcSDiwj9WMB6FQxvCXIkK4Dv3sJu9ukXlfm71OdRMl-Brc4JUAVlztsp8KJe-1WUg8VRlRTgIuifV82Sw9ULsqIJ4vzDOJDPndIcc5sjh6LOMQP7W86EIAMSUkwKqT9xKKNZiTbcHi9_pZAyin2aPX_cGUPEjnb7LgNhE0dJg86uIjzLRyMAEMG0lea_pULaX6J4DR3Y8PRSfsl8GfcYxi9Psd2u7jU7Tm5VqJnj3wA_GYigx3ojXbbZTlLNJVRktpqUA6xKHT54TzlfK7LxFvGiPWPlaf-pRueUfzagtO4GBzbgCEh0w0zWAX-aC2tdk6N4rYFx-T9v-58uP1oTj5B5UxwSwMNVBe1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100101582792704367303\">Takumi</a>"] }
        ],
        summary: "다양한 온천 시설을 갖춘 인기 스파",
        updatedAt: "2026-08-16",
        highlights: ["풍부한 리뷰", "다양한 온천 시설"],
        tips: ["마지막 입장 시간을 미리 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "13-1 Chikkōhonmachi, Hakata Ward, Fukuoka, 812-0021 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://namiha.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7354804000981347588", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EB%AF%B8%ED%95%98%EB%85%B8%EC%9C%A0+%EC%98%A8%EC%B2%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "타이 앤 오일 마사지 반락 하카타": {
        photos: [],
        placeId: "ChIJt44ziv-RQTUR2X_Qv3XjUnM",
        placePhotos: [
            { photoReference: "AWCwydjgCkxkMEPp2QQpjybbtQ4kA8VfgrRMgCx7Hv7GmkEuOt5Iy9HTVCugnkkx8Rh9f3pJQesF2yVeTim2WKSEWRE2nl3gTM1aDd3E7QMgwWLetuGIaArBStg3O0zh55PXrT0rtvHyBdT2hURYL1L_PHRTGFi8ZutrtocRZqOtO5ah4yyu5lu4gmy0odksHuIibz0lO1bKFHx_B0vmiSAlW0CthnRKzAmC-ULs2_MEE25ZaRqmTDl1PM1or4J5172X8_VFxLLnNh15T1lFmAp7iaBd6ECeaqASYKiZpcgumyEE7Hi0HSfhTLYwFM0y4Go_KHkC7INHRAevWoRpwIn1tbaW2NEMuOcTNetd7pIsQzvkVOHAzPHSpunTfbcuoVe2v3daB4d94zeZKNnNuHKrqkleaj6uV145E9uASR1xYz-eT9TS", width: 2000, height: 1414, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109259448921975967482\">タイ古式マッサージ バーンラック博多店</a>"] },
            { photoReference: "AWCwydj_POGheYNCJQJ4Q_1oOgf0MZUZth1Alg_aDQQf3pfoUs3NHmEFIfOysrOOiLhNzi4PAOi_yCsVEGF1YciXmLPrAmCNY3HssB5lrbe7212A8nz4DM90eFqwPaSkC8CEd84w8WcNnE_ro9YmIytDzzMvD5VyQDU1zMbXCeYqlVslhku38KEwcTM6o8GP70B0Dyuv37tsIf8SlK4lway_HJr7V8Bz6XyM3iolKPJcFyj9bwW-wtX1s-w8ogMan0gUvip6yyZz2u9Saoy47VOevL_bUzsmQ1Ohkr4ASkHdKh3aWea13GnkWJu4sVhQTLjDe3nlCuQfXLnrUL6jKYrfco3wAZEAjogN6bQW7jGNS6_INEeuAwYTvnC3KFXgXKEx7SphJBKHEsvnZmr_CC4klO7cVApoWU7W2n6qLiE--fIXTw", width: 4800, height: 3393, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109259448921975967482\">タイ古式マッサージ バーンラック博多店</a>"] },
            { photoReference: "AWCwydjCFq92frH2Z37e7TdC5QjIPfcYfwVT2v1w9EXCm5_Di_jTbtlKYxindNJlMMNCMhcll4hSTcpBMe772dePcBx7Z7JIQpT9oXaltO8wRTy4QnaHO-ZK0E5IiaJnmPNTZpCLgTG34iJ-cbjiAOb1Yxj8cxxGOk7PnCQOZoImdYr7nsFWp6Npi2tNkEaoxUtOH7q_eYmRFC_c0Du9rrFvlKYkFbx60bFVRAWaI94eAkmAtIGYtYVP4jAcKs595Phz1PAmkJc5G4Wn6qlEFtvnIrF7ZHKi3SIFDr4B8Ti2Skn8DGq9IqlRclriXG7dfTV1gonS29_X4jfAWgkZpdq8llSLRzBnSLn1k18mg_PgeqlBQIONEm9g5ijzR7Cx-OEU3aTbu9FRLXTy4jns7XXUd9MWeDRUbXNLhlrRLgN_cVwkjio6WjVt-1taEmU96ClH", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109259448921975967482\">タイ古式マッサージ バーンラック博多店</a>"] },
            { photoReference: "AWCwydjyClBDzPWqdzTFZsvs0LLnYnDs44DLrlptxZPVcrW-PjuGznvKto2qxQ1SAGW4tSwlRRp7hXsRHJqk-D1H2yQjY0fwduGfSI2ZRwcpqrQdd9RzItH8j36wPAK9rWw7KkJgGRmua-YKEakN55N_X9z27k8Wy33zE053-D-2N2kOaiKjL7JgDokQdYoSAtsEg8UGJqEH6OrcqFyFfcwa3Tx_iU6hwApeQvUYqG97OcTSfgd2qecCLhb-31FQtWk4aNHK0IM0oOW_qgHtm1JTNrxqMJQ8L7ceO8xTQT4yjW9x9aaQqb9sQ0v0ZyeceAa11h-_0486qEz-lO6O8qQrHMHrGL1Zkm0R8pYSgpagmywXx3qTRTEBdAF3-7H28EFCPwzDmL2S30oCaqYDU6nr2v7H7o-t5rLq6c-EoCYCIORPMA9tvgaJZGwv4sSJDjkX", width: 2736, height: 3648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101875504614048441258\">Ivan Wong</a>"] },
            { photoReference: "AWCwydie2_0CvL_-GBHEqEqE-PUH9qUFpvwvUqZZYfAFR3wyW6kUesiMPlmAiT91PT6_IT6XlHRi8s8EAztOtHdo2Zn8qKzeKefraGm8u0qnpKo2U6E7w21Lp6aeCW86LSKHpeVSyI4rZjyr8qe8k4rwCl_XBkGjRQ7jwbyx2ZpKmnBfVKJ7hbA9wAS3P2QYhDqSvc4kYJb_S-Ke0RwrobZSGnSXJy9ID_SHuqBZDVDBYNm7qO_rFCqk94iyk_5RUXJOYHvXX2q76JOnu8svOhomoZoeBeKdSqRD_NL9k1BGGj6aIZnpDB83j6jyQdldv1d7Y5e277JN-CjwyOGREcjrY6HS4pKS0wn76QnytfLS1AKOmYVr-Dfh_IEifMP109aYfrB9UUYQHOePrrXA8JJiutvLp39FePMWaKQoCCHUe7IA5Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109259448921975967482\">タイ古式マッサージ バーンラック博多店</a>"] }
        ],
        summary: "높은 평점과 뛰어난 접근성을 갖춘 마사지 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 서비스", "편안한 분위기"],
        tips: ["리치몬드 호텔에서 도보 5분 거리입니다."],
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒812-0013 Fukuoka, Hakata Ward, Hakataekihigashi, 2-chōme−5−１１ コスギ・１ビル ４F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://hakata.baanrak.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8309954357320777689", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Thai%26Oil+Massage+Baan+Rak+Hakata+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "플루메리아": {
        photos: [],
        placeId: "ChIJReaHUI-RQTURTzbWytofBNE",
        placePhotos: [
            { photoReference: "AWCwydh2mzssNfTJ-5oycCiHaO0-5hlXF1brITPF-F0MHl04HoevbOEl8jfSVrrLauAAQ8vbq8VqYudBkgOp2LUtoejQsoTQSJ8wsj60xzjYMpe3P0zpD7CDjn6ucDmcmY8Yb2pIg28OMbXrp2z5Wy1ZgVevr7LPTCxNQRWSuWvkk4OITuV2eEmYWgm-MHOpadZcQDEXe5B6S9PjsPHAE3np-fWY7Fylg4gdOvapAtQmCq6IkJpeMH24xI0CXilkmWsRdH3EVgE79sHvV-w2gAVNZQkmu8QZH0QE7ySG0u8tgebBNyBJldjOZMW05NWCzIBNd3NWo9E7129zlwx7D3vUXcvRYzAYUiwwWd1ns0QO-jd_TeDeFbpFOT1tK2MpQUWE5Inhl3FBIEzea0cY4byLnmexjKoKXAJIheoD9VLn6cZbwx_95OYHsmsfqInbqw", width: 1414, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105330765547019347843\">プルメリア 天神西通り店</a>"] },
            { photoReference: "AWCwydjlB2SFDBKmipyKFQOQizCpkjn_5uBj54Ru2Tr3O764y27DkdadRs-X63jcfb1E7hf2GGnc6gWFyMYK2Bv7er2D84UQ1RQwaUM7gD8oLlpL35CHdh2BJPaKV-Z9vmPlBzInxoazgtk6rvApBdDsKwhcA1W_5YKYuQmw9YArMOABwO1wUjp9de-DSsNAKyseEBjspzLR4Cq0TmAl4HcF3-ziLCIDjTkm38gMSW5NjIokgEQVbBTofnjjyCfsFOreu2mWvE9BGUFLQhzc9Fp2K7HFK_ZRIuFJmwU1oJnTa1Szt51LJ3ygmO1PmNMxlFGdw40Je_x3oHadRb8uc7_8TaNiHQ73JTyIZPS6JA3AbMnaxX5hpgzDEJiq0fPFeEFi8Le4GRcl6t-J4fePvIsG0b1TzDNtdadX1GGx3WXGWJ1hMQ", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105330765547019347843\">プルメリア 天神西通り店</a>"] },
            { photoReference: "AWCwydhc37SWMThD7BUK7lpBNuirwIe61fhREsNQSyYu02LBxlapWZ2k0VKLNZmqQ_vJdbBe2KjjYxPz2uMzBTbbxMMn6SkHPWodNWP_6ktKVlgyIp0hs18MSoFD2if5k06YVrU9ZCDnBNssGLNvahpeBTxJBUjiZBwyiPhYmJ6yFKhZvUhYnvLK0XehLin9aSAO94f6laRseJb5Bdy5yd1JJOfBS-q0PnRKw40rcm-RhTWIxA3CD9gV77gBntAZemifPrdcP7tCVPntk9Lffe82VHTXX2xG09MWJo0NnamgVVhthT_nPcX472vjkntsY_f3LlLwQihsBbbhBa8wQWIC7wgRZGqMEkaEwFKfdxvNyzpjX-PylZ1YlTRbA_d0kB4mmGJQK8DJPJ5IoWDM6xOysWv-uMyzl-aLk1WIBsgdzFVIT-KFeO1IyvSxD-_PfA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110141964672929260087\">집먼지</a>"] },
            { photoReference: "AWCwydg49xeLEZ2VcEWhWuuFWElPy1Rnlvk3o1cp-hRU4rOtmksEmwAU9tZ1hMYpw3fDu88q9PBrMVlfffeTLEEc-Xw6_TIf7ohZF2rQkGnHSEB5209Q1g6mmKLom2pgBCoXSpDamRf9ADBQ5n78j33c-llMREhGzYHlWKnZg5wc1dlli-Tgswhy4c-rqr44_lkr7STll21tIgoJG5vgn2JCTEqEcGGIklMRrrYpR1vSd5ke9jFpx1cFIzJwwi7Zqsjdl6ycfJzEfqr9d3p6Pjw-fQx9DXmQUh3Ijt_Y_JVCXG1O_aGEmQqleVARAx9QL9fthkEbGRmYS-_H-uB70u78dVMH67k6xt8OTdz28PRDU7q_sgwM2ZrF9SnCIxWryineCmJJmsa8Ftgcj_TVzwDAJm66vMJT3MRrBKgZhafqdKkOwpXS7GJMx7gTC4FaAQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116089773802381229485\">RM</a>"] },
            { photoReference: "AWCwydiWo2vHO0vVzIQqruofLNPigKmf5VJz82vRJdoWQ1e9eWpEnQ2aHzV5a6xX6IR_3Zup1vjM76KbzInvZVkA8FPBFn4PbwPN48j09xCIzn5P3tq5-SwScmfEN1fi4qSQVDqwIKfSIV35RqcxqfoggWsRZyM4C8A84ZbuDGWNh12zAlcKuiQuZ1iyFKXsEJ4I6CjR8xLzOwU_BWwuHogm-rJVuvnTMPSg3vakXmtoFyTgE71_hxm5lWoo74gnxwbgruSW-yDbeof0jrGSzUTr5Q2TjucJwM0Sc1bmcQ2QgpQk5l023ihsWZ_m-MhsVDiqheJV1LA_wwp82H3mLQo_1mSHHwsaP3Hn75_u-LMa5A3Hq5_G1KcdwjpP7BiU3g0NG4ix64vkYJuGwoQHellXxHOVN1JOwQfeumHpcul1lHLnXLq-TII8rG0x2hPUsA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108935261287894323471\">Camille Garcia</a>"] }
        ],
        summary: "높은 평점과 세심한 서비스를 제공하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["한국어 DM 예약 가능", "임산부 전용 코스 보유"],
        tips: ["방문 전 인스타그램 DM으로 예약하세요."],
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒810-0001 Fukuoka, Chuo Ward, Tenjin, 2-chōme−7−１２ 2F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/plumeria.fukuoka", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15061198078400149071", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%8C%EB%A3%A8%EB%A9%94%EB%A6%AC%EC%95%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후쿠오카 호빵맨 어린이 박물관 in 쇼핑몰": {
        photos: [],
        placeId: "ChIJ8wPpVeuRQTURV9A2YODh9Qo",
        placePhotos: [
            { photoReference: "AWCwydiup-Wb4NziGUst8O4bLCpAXWat-VS18h-1UzV-ViUqLbd9W_M0NVTs4a6uJrgR19n3fzcUtDjfmA_DiaR2fsXY17WFLhZhju-GGmJvmXpyc8B2Br38TLbLPTmFPIL3-Q2zjikY8tMEPxQ5pU0bAWWrGxgTw6XxpccUBSHqprmhYqa0n3tBa0xbOaR7iD3blgyyMZ9UQ-Yp1TNuEl4v3XNgrPt9cs2jMAC_-8tjm0Zb_Knl2BDKabzVgULQwCEC486O6cXreGVDq7nzf2eYXQsH33Fl-tqp4KIvv9TtbZLK0xb7gaWPGBQtMwcaexmkAjEqUb4k34aVuxsZqMwsLi_WD7RvJyF7eGOHkjcdRSE-j3bXMB-_7WfWJ_49WlLt2ziC9N5Z_r1cudvAiJb-yuG8ub3Xp_zwY-ybCrNtOJzHzrAyMTG6sIFBKFLxPw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106669007955747609003\">KJC</a>"] },
            { photoReference: "AWCwydiCcY3egpcwiS3RTyOs-zqw6QrmYcxKu9gWXpXL3u9T5t40TaleV2NA6XOaD4fcw9N27dIKAX3z73MG0SmdIxwG_dulyZOxXCCKNvDZEMDDHB9774GUHp0zcbUIv5J-q71IBqHKiJ1LfoyY3ijc_CFWYdKS2Cku5mywfz0TAOefMa7bqYsVgJeFeUfnFmeiqxGeVYHNd-zPQfGYRINRXP9seSShUOfFqu2PrQSI25FDdx5zyZaswy5TW8bQ9zssyiVfxUpMWYQwAlTMi95oBGuQmRnoFNjL7x3OlpixdHQdjEgtZWUw6eLbYzFjE1oYuVgtnafbkQ4zonu_Sk9jeV29HPmKZN191Ijapx59KoiOhY99sRYuImI_F_qGKsawl7SFPD2mZgVHXoJlSd7sWDDL6BooUqbLv1WwS2b6n84", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110079669747245841536\">Jacqueline</a>"] },
            { photoReference: "AWCwydj--LjQfIaOaJuenM3xAbO3kYawOnzL6cqErTSeqy6kqHoZU1BGBiJ74MIiJDt6UqntUqVNmZQom_itdGsOnRp3M1KBb2rL_HocfMLWPLQxenpX8QlKIqdXKgO191vdfQBYqHpXogNWAy0CTBxmiQInS2wZEzeRA2-LYRFa81Y7j1DtQus_p6xvKKpBGeTolHi478BD1WRY2WmTGwcQUqucP6UcPDZzfMlsnzcBpKMlJSJjyHANsSehNkJ0OyKzXzLq_X3Th5oI4mHPwp4-EFHxSiNMYjNXJCchtvGf-EqGNQEwoozohRxCr7oVbO7aZpziFQ4b9fZ-nl8qgVFupaMzmNFjhoByKD22fjazqXUDdjzNe9gV0tXPwtg5BgzVdcLu-htT8rKJhfCZ8rZRQmVTmgUkv38FFEJ0853sKa7_b9rixWgjPG-Vm8SSlw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110306942012924592081\">凃桎華</a>"] },
            { photoReference: "AWCwydjlScSlKa1yCZXSm6S6LeRHmJkbJBugqOQadIh5ahH4z70AgIcKOHyjFowTPreKrluvv_u3dXwmGWw2L2fbo72eAmwi9SnoiDSu1XuBg7IUEgrBlbeAxBcDontzIhfotcefL9QdWvsIM0kYhbuLYgFllsLEfHfGhJYfpWiIRjFEBliECsZ9COAjnhnB7vxQr0KHfPj-cKObWKM8snesXGZlmPieeO2CabUXBQPJTmjoYVRDQR4FA719CBXuAN-Gx9uk2AgVQslxMdLGtILeSzuG8HGMv8gIvNc1Oh0x1TIbJ-QLrQsRXLObQOCsOV5TP1kmf5HU-9znR27sBa1pIiwI5ysV-4RH95s5ifRGBYjLvXzprtkyeiwG7TnNW-hm46ErCzxAyazXrNRCkYp2bnInQgeg3aeDN0alZAhxvbnl_V5s", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114721847328416333913\">江口史洋</a>"] },
            { photoReference: "AWCwydi1YfA7OcuL4DKtvy0LOfNWUyMjl39QWokOCXsQ5XwCWfFbj0VO4bRCfTLSoL-1Vf9IFTcty1DwbWUuXbov8UNeJnaqF-wzJNfRKmAj5chPyKzt-w15KwPcuHQZHS0ZGbF9et-DXfhuHRUCx9jfWVfe0b9jQCLMUVuQkdEJ9Sdkt_bT4ZRik4tNU4WWRii2kcaub6P4POui5ha-mQ6djYrqRFQ9fHW75WEenIHFQNtFeDQm6Xv1va15s6evkCZvKju-I_uHox6IqwSseb2uTRl6wj2zIteF_vesO3KREVckFPrHjK8fNZtiKLb5QE2-6xE6tpm-LWp64W2SSgRrqlVsmbc1FQgKpXDer6yG_YqzR_sThoHeXmERAJiM-1P-Gg0xlZQjF7oentH24B_VxlmDuYSFiMmQktnEIGWkzKcUr8EmymXflcYig4VPIA", width: 1179, height: 2096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117066204029244913563\">CL</a>"] }
        ],
        summary: "가족 단위 방문객에게 최적화된 놀이 공간",
        updatedAt: "2026-08-16",
        highlights: ["악천후에도 이용 가능", "생일 기념 이벤트 제공"],
        tips: ["생일 시 인포에서 종이 메달 수령 가능", "식당에서 케이크 이벤트 가능"],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒812-0027 Fukuoka, Hakata Ward, 博多区下川端町3−１ 5F-6F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.fukuoka-anpanman.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=789785663476518999", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%98%B8%EB%B9%B5%EB%A7%A8+%EC%96%B4%EB%A6%B0%EC%9D%B4+%EB%B0%95%EB%AC%BC%EA%B4%80+in+%EC%87%BC%ED%95%91%EB%AA%B0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "키자니아 후쿠오카": {
        photos: [],
        placeId: "ChIJ9ancA5qRQTUR-dpsgnRMEYk",
        placePhotos: [
            { photoReference: "AWCwydhZRyozzVgVTbvpxvCXVoUkk7r8eU_3lB_XQgZ9Ho3YERnFR07PHGWEIw6nYSFDpy6crBscIi-Jg8S-_XT6O8RFWhLlfXrfeBmLa1-kkYtiw-VjpWvbsVYMNoKE-XxDfwD0fJbv8V-XtZGlvaYDKfZh-xD9HemNNiXvPgk9gnJuqNbtS_m5rMEcXgtWTytR8bBsDi10mkVIzpv8q6Q9q3-JruhNtGgaJ-QdRh3x-c3fcYyEgrlWyWSETO2dltsxI7EEf1V5qySYkoRhss1esLBgCJ58ISM7ge1vaSzGz9IHKqRrBcYlSwAxWfm9LY_fxJU--3LlRWRUIxuUpwqLsAuCIUm_wqZnIFeu66fw6jXkmTOFxYjZxA61bD3mYat_SB0s6Fv8HtMwJ4_vK6MmDEGwyhX4by2h7q6g24vyBOYEAZAz", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103165328079155589001\">M Tan</a>"] },
            { photoReference: "AWCwydhRYRlF6Zlx1Vze2oB3eHXZjfl2X_CfVatUaqcqOBTqM5OzyGxJ2jkOYC87nlnmhE7n0G6A8_U1nVr40kPl3FRNEMHzGjKvowkEI4vFsqHVeMAaYivhOtoORTYUp27CJQ_9FdlTN3vIpdNMlnFlG1Bb24WDQ01G8Q7ChsRXwgc5QbacxeqfDi-haEvLQrorJfr5FhDgkb3fIfFcat1jP_Xc7XQkA1qhIyH_nJ7yca5Silwb9jIO5cRouN5KlPgRDdol4jv_S4kM79F6J8h-qvSAjC5TGuWmVXHm7HvMY2Woe5oLEdhRQFrKJ260787LLeawWRB9SnSUwY59EGf9nbpMuoudK1LuxoXyxb-7lTM0GlVZIpjXs5qTk8282v6-zWM1lMYqvgTnKx-Bj3TPneubaeHLGSBQ86S8f4oEuPprim0yXju4AqSzDS9nUJXg", width: 3000, height: 2002, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103984456997502699133\">キッザニア福岡</a>"] },
            { photoReference: "AWCwydhtzXcIvIcLdmJccAu3t_YA9Rciyr8h4yPm7BMnp8trNYlZ5oJ1AxPSmR9x1elVb5jVBX74KMDKk27pNWE6zRjPNj-EOkcKpCOeNS-cf959pNiJqiDKJ2ohAHLQH23doYCytaswktvrqHPs-eXE-PORvwkJC0mrlccUD3JJuZZmDF52N_nP3Rap0udPjuGiumF7TPSlihJ3hiFtGiDwdRpmlE9KAyCQ2E-5vC00tiGpcpYX-vrosDxY9jsC9iL6qBdy0Z0gjJfq_mvV52ZWt-wSLH9MTLmNknpd-XlXUbv58V1dFPFliEJvVz8J0j51yzP4rXr_lWOkK2i2G0qTNGaJxbaF1dusZQ1ZAgbbINevvOt-pqCtAiMDHvZeSz_b6nRU0_knS3yLYbQa9d1ylJVjGmtms-15QXCpG7U8MNgFApsaxvF8NBczS-RKhGRo", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108579779904062559965\">志藤忠久</a>"] },
            { photoReference: "AWCwydjLDp5d7WeMKoPuaNhs9dLoQ5HyIUp7xgTI4qsp0OqA5wFA9erYs29OqzFdFtXepFGtEYnWhscJ9TwFKzK4kJd3vuA35X2T-TpdB8i18P4Very2lzBeV1ZwKVlVXxqdzXahmZemuybitIhjAF4kqBIJMSHScl5U10PSSQdX9FIJm9iYHjN4TXIP7het72k9Ua-vlBkqLd0efSgUHhE2sxrfB4VdWsz-MLJ17tDmAtx7u_3cYolpDx4hiFVVPtcTiFo1LKSgI4HPBxrAYrP7FnCtsaWFJyQmfdj_Jz1mWu4Gf97mQIwUxKiYcng7q5y8WNKTcRuCU2ti04BB3AmTtcKT7mdGqUSuHyGPleaYfBohpC0keU7VkNkccz87XS-Lunbx0rVeuOQFL0KhHf-8P1_OJjjTmgfVstUQyOCVxSYLIw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100011321959029614937\">Lap Tak Poon</a>"] },
            { photoReference: "AWCwydgt_ljQfZuoaSSSTSqPVE4wlX7KKI4NFQnOuHBtICv5CM38wY8cEml2R5SxTfrqbiEmvv2nMpvrUJ_H9MteK7Zj2ymgKK5L7jAW3-unfPJN_UELc1sBp0gW-oEYHIcTkNukwbw4ptTCQRIKOED2NsxvLyIkw232Pw8KbRZaRbiiyrub1-40u5pRg3AHfC1ZYf1aI_JHOdxEZtkJ1gbM1sU23V7gN7g_GhFTHMsX6TpcER_5NJZFnVb4TDYfdkw-N7fAJhwX8P8x6ZIWq1_OhK5wI4qDbaPZW0uf4KAHV04VMeqy0nwfB_UjSAacMEL7JH5MM64yyF_AEcqG63_JqC4BzhIyCtTQhm4J3ZrvP62NWpTc0larDmbQiHvtBnJcZYXVoZc1P_MtUPr5Rg-8tQi64aM7j_xTWkor1IQcdkoXNkVEiQ5qLmdKBbHjs6I4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107875057879399371408\">kevin ho</a>"] }
        ],
        summary: "놀이를 통해 자연스럽게 영어를 배우는 공간",
        updatedAt: "2026-08-16",
        highlights: ["영어 활동 프로그램", "쾌적한 실내 환경"],
        tips: ["아이와 함께 영어 활동에 참여해보세요"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒812-8627 Fukuoka, Hakata Ward, Naka, 6-chōme−23−１ ららぽーと福岡", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.kidzania.jp/lp/fukuoka/?utm_source=F_google&utm_medium=fukuoka&utm_campaign=F_google_230620_lp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9876759521088297721", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%9E%90%EB%8B%88%EC%95%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후쿠오카 장난감 미술관": {
        photos: [],
        placeId: "ChIJxfMJAgORQTURcAHioWIHVAM",
        placePhotos: [
            { photoReference: "AWCwydhsQudjKpS9wGsf7Gy2uU8PIxIQ1MlH59E6mizOyo-VRrNbi18Z6oCa15ajB0uq0sKqEhRLTIIA2IBS6LuVvjfymJwttaGwB3N3kuxH5Sm9jBib5705N9iiQq83q_K_PNMEKJpbjGCE2rWByuNpbN79n3rxplTMu8vC9KW1dm2haIk40wxTKvzaw0ipvTYoyv_vIqowDjmMYaPYnxarVek3JHYe8Dn9dazP8SqRkZGXTlJZRWrts5oKDSuVHaOdeOJ_AuGFeBnP360J6-ReMfrqLJl2OJH-ML4WaUo_BGU0abpIyMjFg0fk3T90cnWDKSwExCTg8BGGB9xjw-66GgHD5NVOED-EsGcylbe9lHbzPGWpO0HJKoVSB2ql_mNAMHEHL6nhp5JLI_G7KJ0vgEZJ5Eqz8L4hOeUDwDvDt-Uinx7LEYGyRGxZ5YtUABv6", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115442413126994248802\">Fukuoka Toy Museum</a>"] },
            { photoReference: "AWCwydjcbURc-JOdtcXd_gHdjJqdRXpRDF5BkKthff0vdxxCa4oa6jiBvEq8AzIu3-VCGyFvl8KQVITGjn-W-V2LDlNfOKA6eXw8v3ymK5AA-49tsGmPk-mCxId4YOEOpOKCDaE6hlkHBYS5l56oPB0PYSdHuxA_P8M_E0U7GH4oraA1_WIlkEZpzaMgi-UWZw-Puw2zWLB6k-DCd4ee5KE8NJXHq6gHOBV9KwlVv2iB_pKQffprn2RYbZqh92BUXURNRkpQ4mp76-eFiolZ8t55Q7q_F_HnK4fgxqdD6jQmWnToGkRymBZgNG_UDYLhB3zKTjtl9FMnOxYoliP_Zi0O-nTpObwUPz7G2YxFuRBdFJGZqBHlaCuBTKwrhoC_mwZcOsXo9uoMOD3zBgL4WE9qFmGABMwv4C2GsSsNQ6RID3Rj7w", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112860986625333145109\">Lily Kang</a>"] },
            { photoReference: "AWCwydh8fBWkGJldoYHTCe0x7L15GcQvATGWzS0HsOLk0f0QJf_62iQYNOjIpqbs4nL88RzZedPtwcUst4vRyE_gHalBTF5PaVWTPI_QUZFdWPvmXlm72h9_34Ioid094K2vxOTgrqZnXrO-7kh4OAuYDwN2kuqqBBUxw_SyI_z6newB50kCFqWDwJmgfumfttoRx6UI452Ij23eTAY0GRlPN1ZRgWWIJ4Gd9HHh7UgHRAnLQQlOLYD4gzg1ix4ql3BuX1lD1XpFSa_vwDftf5OBcj5qfdVXrgDRYkdHZxtjBxum0BAAVW7J6TPJ7SCsCgwC4ee7nqp9VFVGFVLiWrEah6RH_8pFE3FvBQ-9bxihQ8E-GpOgMRmUAUWHU_H2fcbj2FQiLn0NUq4F0XjbXW3CVF-fjMBOGQ96Uji7wcdUWpLoNGc", width: 4196, height: 4196, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108551250194780448141\">SungJin Hong</a>"] },
            { photoReference: "AWCwydiQnwwaSqRyEhAXfXq-GJWa9OLM_-zaUQN1vqU-Wox4TrJ5xl66RlwzUR_Zj_QxGkDNHz-ubmW39yNO3SLeLrHGo0NDtjYlAbAmsl7cLW_IfBvSVCKuibtO9YCSKjSYIwtqh316PvQFdNs99yCDwveTU4Y-u7Gw1ap72cRRCN0aVZVbVgFcBA0uFIUabcKrxpSoajTlI8zU8R9c3nLtZVIP9xM7iJ7qwuHk6E3kEABvI22qWI4ouihTFhN_k9JNub82JgmOdh48-IN1jTXQvqqsMba4BYMIXF5E4YJSTA2cSvnc5_9GfIC0Fg7LY5hkbh3mfx-jfZwGOYJrfq6uW3qxG1sCwAkn7dqUbsHYNa_CTIeZyeatQAWjhjdtWJ69bfD6qZ3Nff_gBkgNwwp_7paChJnbyL_6WK6RVmA5lMXPRj7rDPPrbJFbHzBYm-gk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102811954977054677603\">Cerise</a>"] },
            { photoReference: "AWCwydgefi7F-fG45Ch4sQPZA-duZ76emt_D9JPf_xZzPYHlWE519MyMmPLVSkK6FOMrKKOiO0vI0MFaR0vXzAVep0QEy30dd0XILdYpPMBXqlzmUGVFc1EtUO42Cb5h-PM3NAsQWSMu6T9HNaREliIb0CZe4Cd2mdl95zmyLTH9XJ7LqfnGczpVOBhVtnBeW5Dhkobtj3iV-LCmEz6kXgtzSrwRxgFb6_IRiBA8RXpqNOPZaUpO4LJNcdWQTxKa7fIBo38FS2NoTXuzt6wsRIShVT3a_wqz1v95btGrNENwElg19W24xA6Vjy5-cZGoukOSMI-E6XbwxdFZ28aMivB_XnlmvaZfTxSUPuTkLbsIb6_PyYwNqI8Uju626VhiKFp__zuBEhnIei8aNc6ghcvRD8F1KUDvG9wN53TXbOAJZQmRDo3N", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101901649245281121943\">0724 kiyofessional</a>"] }
        ],
        summary: "원목 장난감과 다양한 놀이 시설을 갖춘 곳",
        updatedAt: "2026-08-16",
        highlights: ["원목 장난감", "친절한 직원"],
        tips: ["아이들의 창의성 발달에 도움이 됨"],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒812-0893 Fukuoka, Hakata Ward, Naka, 6-chōme−23−２３ オーバルパーク", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://art-play.or.jp/ftm/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=239824800361611632", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EC%9E%A5%EB%82%9C%EA%B0%90+%EB%AF%B8%EC%88%A0%EA%B4%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "포레스트 어드벤처 아부라야마 후쿠오카": {
        photos: [],
        placeId: "ChIJofsggOiVQTURhUTXC1ZFPsU",
        placePhotos: [
            { photoReference: "AWCwydih5EyIPJ5hRIbTqw4vxLqPRkYxNlMLU0PTiVPApGFH950mLbKcEQAiZpsBbJ8fUVs-czfCFWH-re4xwGcFk1VW9p2BKZGvM8ivdpmq91757FNQMiaSLY2C_PSbSX7bbvbQdl-x5nZloFGj0ftwwCiVykOxLDycW-V18JbS131f1gororgxbY-ibbt3MNta-OIGyF2kWG4wB7ubMNI_fOtyIOT3T07KmQEULYb_IjsxY2PfiyE6I7oYBCuqxUreyvf-etKKlswLOl25yFLjLAbyZjPhHDwHGmx6GRwHyvD7d1W8lEtwwNRJSzmX0LdAahyjE3k2btMzMCxjAW-2ekqXPQZxv1UPoKNPzmQdGOHhzQPkT91Fe7pbx_lf_egV3RkiuoowewBKe9RZ6JoYupV2OhNYYYjxoGzthzIQSLkPHw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114925317911582750403\">フォレストアドベンチャー・油山福岡</a>"] },
            { photoReference: "AWCwydhEs6x6gymZCQJtwpdefjtdNcuBwXCASqp3WGLFqC6CDFw0uUTpe0xmelY4zlGlHFvb_7Sh88WjWcm5IUw8qzV2wskWcJ3r60LhyiJ7gOinm56QcF793-Z3hBgmRdYywUbKkc3Q4xF7aflA9YJ7Wqxn2Dequ4lgCt18JKzwqSUgBxF2gzhU_KUEgY5qfQ7DI-CKSS-W7L5emPjrCh2lKIy-U8YvuYfcvHv8FfcQOJy9i6nxhlQ0lOLGPx-fikC7Qru5z4wL_tMwJ7dcTTmLFBXJAftSRSaXxWI4apMApMkDBD4XbAxTNhX8YKzTbsP9fdW54N831wgIbp6MYP31RQf9ONwqANfEHbXp6gNXlo52vU1ebaliKpFlG4u-tzvDC3JZv8QUFnpWRfAktnSX9PDbpfhAmGMqSLoQF9b4lq7MQw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114925317911582750403\">フォレストアドベンチャー・油山福岡</a>"] },
            { photoReference: "AWCwydgaR_MYJAjkjT6NjbtAMgfYovqLT90PzQQqrZMyZJadEq6xkBnGHaTt7ZAyZzdzdKEE6zaCkIt5sNftGCo4CRLXSsPqv5IHKXlmOV_IfJJvoN-Qi3XBIw9WdmdyLtT0orcvZgmGqsb4NEdgZTHFWaf64QwT5Mb73qGLj3RbzwZunS2LCa7TgF8yWykTtR8VK7RJsIpNGOUfG6Lfhp9Gw0PEVIYqPXsQkocUIljA1yXUxMGzynC87jzecoWJw2AJaqFstt43Xr99VFzeoGbywVaKAz0y8GNymorm6AhV2V_fyX8hMEjjEGKI0CgRFOvNuL75S43LSqFWU2pHDRc6B7_t9zqIbb75Czzcor9QlRZrpbbHeCEmyc_1-rhFLdVzJ_DZ0UzlPNhSEryPG9u-5frDfo69asP5H416244gXTQ_CNcNCgN1fnoCO-sCqY8J", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114925317911582750403\">フォレストアドベンチャー・油山福岡</a>"] },
            { photoReference: "AWCwydjbxABnZtbr_IDyuN4PADGgLLzFV3Uc3IWwmiqDyKNu74JE9DJmVm-8OrE3-4xbUjKtdaI1l-fQwlZZoW6VU3t4W2EsuENtnFIJnIxEwCpQDpB2IVZHht8JFbESSZFPjTyRlBz62GcJrVaF-RV_-8IxjDXCwUkJZrd0j9TW_sGAlxN2qJ_MvCXJD36VSowe7B05uyXIIxFOOR7Ph7xFu5-mea8JcBTvDPzTRsI17vSy-xGQBB0eg3O7AOxVX958sf2oH6CMOnY-4B__NyrRmEmgkVh_NYOrw-Y6XoEclXBf-PJX2ymW6Zdww7WyEYPcNQuDWhrnMDybu-bjZLUC_7A77-7teKAsCbSbeDYFomDiwzFciXQ_xRj0X8uyFXgULkLQmITVHHWod_xH8U5-Hu_cWvTEJ24LlJRKgbMie2Bz0TPs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114925317911582750403\">フォレストアドベンチャー・油山福岡</a>"] },
            { photoReference: "AWCwydi9ZFjNoiR_3VaLzvhPkq7hMvNl4yOy6Hf6Y-8fkziVfOKSspJzuAb25FeG9XN3WTnbSvYC-R5PAE6_dEwofglV_cfwlEtGuhm-LUa9NF9KPTmFsvWBNX8oBwQjJwl5bC4sRcFQf_eE8ShBIUws4MI5skneZQ-V4otVJndkTSAkzpqQj0kVocYwQhW10h21vQFzlPxSYtmTIDK0a4zZmO9bHwD8KxpXee4I8q9HQN6UdAM_tAStFFn243eS1oCIJyNY64lEneTxglIt0W-pg2NM5MseXQrHEUgcf0GCTNzjii5pOIGqHXtRHllfe4OoQ0qFqAmfY0FMWZ9WUpvRMVFjc1MaS9mNBIa0Fgc133FMKJbtgOsN_W6gvKWuEHS0uOzKt-eyXRsszD2LgGSdpfZ7nJVXp2h-LfzgEh-sPmujxyXwQWc1OxO1Xjni9ok_", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114925317911582750403\">フォレストアドベンチャー・油山福岡</a>"] }
        ],
        summary: "스릴 넘치는 액티비티를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["가족 단위 방문객에게 적합", "신나는 액티비티 경험"],
        tips: ["아이들과 함께 방문하기 좋습니다"],
        hours: "월요일: 오전 9:30 ~ 오후 5:00; 화요일: 오전 9:30 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒811-1353 Fukuoka, Minami Ward, Kashihara, 710‐2 ABURAYAMA FUKUOKA内", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://foret-aventure.jp/park/fa-abyfukuoka/?utm_source=GBP&utm_medium=GBP&utm_campaign=abyfukuoka", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14212873709896025221", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Forest+Adventure+Aburayama+Fukuoka+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시 드라군": {
        photos: [],
        placeId: "ChIJ72tjboONQTURr9HiQ2EsHCc",
        placePhotos: [
            { photoReference: "AWCwydha-PBFdit8QQ7X9qsC23wHV577LmjVH92kv3JW0U3zf-_CWg3Pjc1nGawLUwk6aBSDb3d0dW4aIcHJVENIHJ2yeHylHFOHhT1BLuHH9IbvqsjcFw4IUmtvlnhw_P16bvUAxfIk_4idsQGhFc7lJ9i0_0R5DyHcAW448DY-AZWEjVj7wSoA8vPNSn2W2KwP_ikpYbfmn7-E6v3LgJPKjLJDKvm2veNwju3r4MugpRo4CZuZhcvyUTrE8ivjBeAzuE21KxNdfG9Rfd96VYE0CpbMXgPy4-Qi4CkXPMx8TBE4jQVDkyQQMjfyiK7F12tqADx4RiQD1761EtBYDTkcYbjdSi4MiBdhnTjuTk-qhc3R9W387Z7d3hnEsiX66G5FfMXUcpJGGsoEIL4vLoR2PqrX0TAcYAYkfpIgdngPOUtLRrhM", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105358707589490993761\">シー・ドラグーン</a>"] },
            { photoReference: "AWCwydhe2KUg-e3cWzH92kTwkpKH5ZT2zyZg7bg8kA1Z8007ZkFcviUzMr2H8Nh39BlCIWlCdNzYJjDiXzMYyEbHKO-rd-aiYVtgoB80yXvPdrsLxhLKNdhhxusIMQUAHb2z_evMho9wLCqJkCg5ekJ1C1IuSlK2PtJe8spmVt2FFUArqu4rlfiin92QnpXtqyEUIPWGJ1qt8_oRIzQUGp5IbgRpyDuHgAoDPZZy7_lZRLL8dCIWEmKBxdzLUNgNGUvRp5Uald3vN9k1SKhXUAWmvsoPmSlfiYzay4nsO6VupNyB4eeNQ2x3qcJD4BPT5XcQL4WwME-rB2YN11EqXbJDROfKtNRRPLGhGHznSNeKsk9SgL1W2iEgu1_hHEfN81xgUam9y2renDuBfYDiUlJERJ__RTxebF6f6syTfPV3BClbOfWNP4sew5bTJfUmNL3P", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112930677415729706257\">WON</a>"] },
            { photoReference: "AWCwydh27p4VWIwMxZvYGJVt4ltPMWr2Hgwxsfz_xGewgbFb7s_kKOdq3bYHM6AG8ylN_hd0-ITCEtCGEZGbAXP6Wupq6LdaPxnh4lePOtpRr8Nrs_O5Gy7DXnN3aFLIWqZDExRoA1KNZnaauzsTJXrkxj8JODFbA0Edsnv0hkkka89RaFMDjw2JC_NHBh_nlIKgnkQoFaWqWol_ih1c1L_f_cpb64a4FUcnQxEqxTVDR6dTDMP3_P_pIotYwvXj0SXKgtHmzBAvMuMAiUJhPE2RvK4JYW9Y3_tVCnR2MuYhMUhsgL19k0fG7HoPla1qgAL7De2uCn3L4d01VBrTBJu9f51jCVg6aeou8zhbtBF8ICJzc3h74evAFV5jvTkYSndWfhSM9zy-rfAuI4rh_iEMJxaww7NRm9gc64aaRQc0oeN8MKCW", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105358707589490993761\">シー・ドラグーン</a>"] },
            { photoReference: "AWCwydgwYK32e70CR_rPOclmzr3AJuc6zWSTVYBvzTgMCUdNxMUxNUhqcbY01kO2bLY-Kd5BO5IBvuRda1LZxLkecXsKrYWZwzsgu7NAELI3WtLfd23M1hlrBbZIKUlRQrm7tNsa7W_zRlxecYDY6Anmzjvk1yqZmUuGRNCQL_1BSl__XpfqEhpCt-iHGcIFOm7t8t5LXvqX6k_zjnpRK7S3GuXYc2b1ifsTeALCgMqthpZ2Tn6KVDQURKdwP0NUQVvGfFBvz8CIwOwZRe3Cbg-jONWOo0H51OSAXB7jNnYYnfSj-toUCSy8mONnxmFsaCQebZ6QkUiwG8jHa2h3HX5AO6oCUzap8Cvmlvk0hEZNSM4RDwPgtv8jMrutU4uBZ4ZIfTpPrafYYEhBLOeOBfWfxtN7RFZZAZMDpfA9gmvTlZU", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105358707589490993761\">シー・ドラグーン</a>"] },
            { photoReference: "AWCwydimCnM04ekaZQhPEkKx_zKAbsubgmvnGNCeTMKC5_wInI4i4iCT5Jmvkorw19TQLNiX4h-QW8ke7Lo1BYgPVASjZsDjH9BAQ-T4Hy1ODBUo5CIG_8QN486_xuFlNIRP62QfHuXFNFkQ8yhnoYUF71GwU2W93m5YTCgyrP6cgtt9TkCIp6Ma8w0RtCn9TPzralvdOIoHJ9ukjSWUYsukalLrJpzLYvO-it2ebHJh15mih_yobXT9QvByEBjVaFznZZZ4ZvShPjkLs4B-S192wKChsfH7r-DNgLixZxJB0Nn17MbKJJuUD8H3efn8bTwBxcYjLFNXI4KbeJi3kB8U6lPLrb0hm3EUlW1v9-XM3UPMQcskAEdz5LBIZm8qThb31xJV8ArmObxAWxP0gUWzwuE0ymfEZZrra-TnApPfa5M", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105358707589490993761\">シー・ドラグーン</a>"] }
        ],
        summary: "평점 4.1의 테마파크입니다.",
        updatedAt: "2026-08-16",
        highlights: ["테마파크", "다양한 즐길 거리"],
        tips: ["영업 시간을 미리 확인하세요."],
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 휴무일",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "18-26 Saitozaki, Higashi Ward, Fukuoka, 811-0321 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.seadragoon.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2818176263089476015", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sea+Dragoon+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "산리오 캐릭터즈 드리밍 파크": {
        photos: [],
        placeId: "ChIJJ5d2eEKTQTURErERRD2GP8E",
        placePhotos: [
            { photoReference: "AWCwydgzFvIZDhzTXBYhj86Fu_sPqn7E8crT3ACpeYQVFhvHv6b-7ArYq845BpEh_A0_uXKC3rAE4a3zmSxdnaTnrILbsdSXhrhZEMgw8qs35-54Zx2kf6UI2nwSE5LjuPFk6qtu5WWj9UC1wX24je-AwQM_2DjRuQY3OrZoMIeDHcb515aWJxX3_jOzwths4QlQNDbVuR_HwDzywMVoEeTFZLGfo-odZa43F7Sx6OxDZgMjuUdujdR0mMMfYD2sQ0ZOa8VPiu-5LTMqBHKOTNrj8-YE0KxR4_I6FiicqmKm8r4kR0BSuSRFDyx6RTUQF8XzijCO-8oGIJeD1mj1EGxNyxl2Y1y-jclhe-Qfcri6xW55-jVE4SzWOGQZ6UOJMkJLCXJD_6lJoAjFgBsS2kBfhuftM59HZVukWqNz7E_Ej2-OZA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108466892172697739825\">A.A. A</a>"] },
            { photoReference: "AWCwydhYwbNknxl0FeE1-6raxcGUI-wvDCwlh2meQcn8rFZNl5CxlvkBdgU8cetfR1bSS36ECOog0GLEDSLTdfxCsxdjYJOupdHGRdYQxFJgAINjvKOE9ZzvWv4oNSefvv3m6qII7V3ooYML4k0GSliXJwU8DERoQ5BWnwNzfgEka8ep0A0cqQfxX5nNtudXs6z85wMo6WgdXFZ-QDlx5r3ODhhSJen6ArKKeLnpz2w1reQcleZDoe4z7CUENKPGiWLqANC4sjZXlTqXF_XyglDMnPGBB70pkl-KleXBlDwZkryXDvJMBGl1wCM9kVUS7MCKyHhXgYprmTTZzXL3N8w1LZqL6_x_Gx1VFcRFOpI0Pdk558VrlAYOPc5cJ25v4vTYfWu-u50TJK-QdFCRiKZk_yAvStYFDkXiktY_mmuaYxy3Mf8", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109888989176213060749\">サンリオキャラクターズ ドリーミングパーク Sanrio characters Dream!ng Park Supported by PayPay</a>"] },
            { photoReference: "AWCwydjbd0GbmJpAoi5iNg3AD5W5Yl31WXCK1fSzuEsass0W0ndWI3R51o7FyBDN2YPaJln8G0Y-5R2H__bFMavUi83Ri7JhxMNe_VNrouxuqEKI7-so60GumvnUVNtG-GBBmhQAsxU09y3QOd-ZHiGqCxh3iTM7HVMn1Rnwz-bTTIZ3MSaSgshcZkduvnBFYaE_uUs_gFznpB05pnK53jjMCRIUVevSV8OPPKPtH2CrbnfWhTl6vpjaHfXv-IYhq3Ffxa682nWF1dEDxFTKRuvEEbJZzOVC5J4azbf32bUweIaXizybtuPSBX92sHBAfbtAovvEzzCX-WjqHv06z0qdR6JHiXZZ94VWxJubbPwL66QIAXFtnGBI67ef2vF-DUsG--s-218UcAs9xmB-VnkGvCeWfgisZk2nh6zIj8gUiF8", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109536577057252022800\">IEYASU</a>"] },
            { photoReference: "AWCwydioxDAHpOwbWE2P6nex2YwQ7JuC5JSq4FfG1EjjC6OlRCJUWvH5HR0oXhq5Nv5mR3bWHq7kdynzlokBKSNub5_wM-BsN6w2JGp7bgBY3opKdtXGGQRkMu0EWNheo4AjaZ5lc8Ja_ShZr4a2-HiDx9NiOK7nYP8I1ChaaXT7MAsybyfuIqus5OYkJsUF3yTvhgwJXUid0hRCsPagSly9Z3z_xPcXDYbxyxBNxpiiI8emoEoqsk6fC-w58CW4u_1a0P_K9OhrAdGynDMEmhXtJYvu_V-lZ_QHpI5eMe1Fp0ul5Zg-G_ArUmnj-xruHYD7Zl0jCEakzBSAmJxdZrdhheg01pEbFLP2AZlwgxpYCYqpCz5fwluOFZtv4i9SdB42vF78ep2inoPcqgnAkX2Iunjn16ROl6mR3mJETn71CLo", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103708403798150245019\">ルミ</a>"] },
            { photoReference: "AWCwydjBnOpaiwIo06FhWt5PxPn4ebQn8IFAl_FyaQX0Sth4hnAy5QN3lBj1oQB7PISHg-xrf-uCUzCwxZS_ZLlCXWv_MJNQv4uDGT3NaldnWtzdugB7QacxPeOXB9q-W9Nu5RXsqBNxguHkDzCatuDqUJlohSKbzT-q43HOh-H939pwtW16QjRBG6LitO34z1D8AdLWlTLe8kZjD71keu1VLeNpkMWFKuBUHOndqntmRHbKCC02JhlqnqDE5awkGt3Vw4lHtDLqcU6BmAbULXrRwVVNe5c0taSg1P9mAsYxdbXKWkueagSaoedBcZc0avb7_j3rfZ1PpGXciJy1Wt5xLE3nbPkhMfOJ0o5AFoeFFr49ZdbcRAKHzKUPBNGyZvZqQ4ihyC1n-E3qVf95p-XjMf8Hjkr5R1OdxVtW8-sNO--jd1Xd", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103708403798150245019\">ルミ</a>"] }
        ],
        summary: "아이들이 매우 좋아하는 캐릭터 테마 시설입니다.",
        updatedAt: "2026-08-16",
        highlights: ["캐릭터 테마 시설", "아이들에게 인기 만점"],
        tips: ["아이와 함께 방문하기 좋습니다"],
        hours: "월요일: 오전 11:00 ~ 오후 7:00; 화요일: 오전 11:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒810-0065 Fukuoka, Chuo Ward, Jigyōhama, 2-chōme−2−６ BOSS E・ZO FUKUOKA 7F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://e-zofukuoka.com/dreamingpark/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13924996170546000146", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%B0%EB%A6%AC%EC%98%A4+%EC%BA%90%EB%A6%AD%ED%84%B0%EC%A6%88+%EB%93%9C%EB%A6%AC%EB%B0%8D+%ED%8C%8C%ED%81%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카이멘 베이스": {
        photos: [],
        placeId: "ChIJcwm004jsQTURi5LYBmcEgiw",
        placePhotos: [
            { photoReference: "AWCwydhDbZobyc-DXzKCYX4bjMOIT8GudhKCiKJvVZlvlPiARyE9itiYg2rnCSZYDC--sc4-cbDxchIxTS3okRAygGcVp-JiH6Zcysf8PhgO99O0yh5lZdIKrF7wqPVlESbAvaWlTWw-Al3aQEuhX8aiN2lfUeU_BP9GadjdhRPaiALqDlf7RJE8iNPY44i5xR6zjxuqusrRQIBAoG_qqgtSl8byBlnebLqe_YX0mSPvkjuicciG70epkemQgEiWONKWHcnjJZbLKFhRIfkCG7KUjR2v4MLbpaXf7P-1Iu9fm9VLnATgzKFzsIvKRnXNykJ0iBQ1Z_iTfG4TB8iFqwJpcHboaOeYpNeV-hKEKMSVV_jHwoAa5F8rhi8JKWJairwf4uD5F3SJqXfkd4K6_v2JC3nrwKujKj1Qu9MJJeJBaIIgLlMb", width: 1800, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111160038379969746564\">海面BASE</a>"] },
            { photoReference: "AWCwydj4qQKuqZU9aRarsRUgXaz-OhZim4SPJqlruJdVBfFhGP3SsBo_dAhUSUv7AkdQPoPWK6D84SYSkJbtTIb9wV9OfNlLK2UazAdVlnLdLeL8JIm0Jqd_hfeXG_DOpCzpvv1Pq5nQ8oQKvoN9LlbS6W4eXrPfjPdRihQXXsGtYWWjh3fi0QjU0ZYsYK7lFoaiiLpx9gUodWgqFUWZFDPtNJELPeE4YDS0QY7xZtAk6OIU0AY6K6Hxy61d20XBpvpSyg93u_zULxDUQSLU0mk7CMucFWlFV6MIE3wLrx_mrgfI7NdOwimUD9H9-MWlEoanB0oRl9VlOwbFCL2yFcxRaPJ--SRXmNtHc9icQ4VyRyhCnQ2PALLD9fRrnztquueb2h9kFGRLHqmYCc5nCbbwmi7VTdQhPFuCBDjl0SXLEhs-IE_U9R7WI6dAA44H6Q", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107716943480365097727\">brawny rooster</a>"] },
            { photoReference: "AWCwydh3bYZQ-Fxs41SNHaT24yVwenNk8PR1fhrV3uunUvfISP2hbKLC28PyVQe1c7DwWxlkPZY4XqQ1ZDdcSjjwgYvaLhBAFi_4J-sn9gXkEy4MLt3MpwYdeV1bdnSgEW1LZhIxH7dQ7jkkoxxkqhP4mvcxH9YlZ-Tb_eG_esnuGLZitD_q4tsgUFTMytYTLl9PncVIWtMOD5-f4NG6khUeWJD5nN6Kmej0MsTJbLE9fsQMj2ZTradP5H7k9HRBkBmHAcc2lDF6iHbZFkKAIFXPWLgQJUPCAhzaKjeQEFSdB4sWMiuftNU7Odcb9CCMPr2-eSHVPZ2qkSvhEYiGwxE1VSewh_x64rRONzDaDlC7ik8JrZLz6ryJjDW6DBy4Bd6RE-mSBNMKm4F_-GCU2gpHy4C33EsggaZcgEyZBt4T945GxUIRe1_cK9spg9OdgQ", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107716943480365097727\">brawny rooster</a>"] },
            { photoReference: "AWCwydiTuBiM-sE3xrzoeXSqVVS0lL33c6TDdgWBeYewgM73_d7FfEuzvFmL3XsGahweLKYRLr6M5MIKlultVXXuyiNo-kG0vgLPFRiZaOUfMTlFDYBL7vEcC0R57TZBhcq3u_z50cHvB7wb_75ZDfZ5kzQAV2JPYPpbuGcEzoBle65xdXuw3nTlrb25LZfnT8VC2kVY_CzaauUlxhDJQQAgzhXK0nAEC2-7JBgzM2DJBBgyHDoAxkYjGzlo_AdmtOtsNqSCx44SE7LIK_5tsY4Ef7c6GpPxuJZsDibLwH6tM5ZX6ucIh8dIoFGJE_3VMpIHpcYLwUdP_dHE_QQF4iuhhEb8EZWI3jgTne7EVYnsgPLhBik6Zx_0hCnffR6FkZeAotKDrihSOh3w4JqFuHfg8zZH3AT3x0gt4oMbBVJh6LE", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118387797604734406438\">Gou YGokay</a>"] },
            { photoReference: "AWCwydg47kWg8zyGmur_1Dq5BmOOT8FFJhMBp_tLMKqyfW1-EUBi_Xl9NdsL1I4rpHwc1JOqri4juKxw5N3zp8voL8Pips7lhCB9_Qqz0XafWNQlCbI3TSnJeHGUBGTmqz1mwGm1_fWcTDa03X6OdT57RWwXGd2lP9FPBSrZIkrgIo-XWGYUKG1kekjwlfAWkA86kmZwgfrZLR1RAMmYAShSxleqZI-l291Kx7MaNZFbGtYMgleXQciPK0pXK7so7ymGoIPD2IFnVfBL5-d8e2Fzp7g_JrbdoOQOa9So9dE-3eOatJADK3jYJpALRgxJxp5hdNN1vguY1fHwsW713zBXKZFRGjanZiNAYBWwoBTip6Tthl2iuhz_E7ugjflb2vYTPk_g6nyWcA1HvKpKP84FsjoU4nGzlUOcF28YuluPGX6RVISn", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109940872032957969247\">Masa Hirata</a>"] }
        ],
        summary: "카약 및 SUP 활동에 최적화된 수상 스포츠 명소",
        updatedAt: "2026-08-16",
        highlights: ["카약 체험", "패들보드(SUP)"],
        tips: ["활동 전 안전 장비를 반드시 착용하세요."],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "535-1 Imazu, Nishi Ward, Fukuoka, 819-0165 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://kaimenbase.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3207130725184213643", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E6%B5%B7%E9%9D%A2BASE+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "세일링 서비스 후쿠오카": {
        photos: [],
        placeId: "ChIJwesejFCTQTURgwLyR3uKFVs",
        placePhotos: [
            { photoReference: "AWCwydh_oi7-8V-h8s5S0j4t5mCMbbFJAYNK_YtiRWsLbW1t1t6v6cCm2VzSvwxwpF62mybzaQ3uqZG2L8XAo8dh_7Wr1kA8rjSQDIAz4fs56IXnf3PbexI69o_YupjN6ed9vlKDEUzf6V9c44qhd3nBGjAYzOTMhgJdqKvghZ10AmviUi82VGy_8KMlHX986Diz6oxZLjz32SPWMpX20ivjRpXSmfimePcXkqL2AOtLQaPhBqsxiQdE_UT1wWxZ_G_4NB4kINWydBo5iashsmZYqTkyeqWd9SP8Vt42Qpmq5r1-oa4rLNf427O2_ukFu4YLxufhQf3vQuvOuwyDI6dEKNFvkwp_8sMecKcGrJgi04ZMSUowHIt5RuOWwo9DI8qYIK5uRjPfCXv_-i-fkeaIsUJkOiO35HBLjgj465bMpTZ8S2BN", width: 1574, height: 897, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105060398119263180554\">Sailing Service Fukuoka</a>"] },
            { photoReference: "AWCwydjieBSslq5oSD45xvpFb-edHU6K9Z6oCa10Nq7M6eWBh-k87fJgkbUSz47IdyHjQiM1w231Ja3oFOQRUVUQIZlbDYeZE-yVvaUUokPYFX5F-nmRh9oNYEloS1SwXd6-HlAfx6BXo41BGEWWbOPtk0b7q2WMUHNfpgP6sG9WJ_Z-fDxAnHJXiKe9R872J3yAtYckKhvFlFu3dkmRc5gDTOPSGRi_3In6XBrRvAp55bizMSnm8WULEcpoIyt8YLY7bnxmPUkozNop9qrJVIbYSflA0k6SToHYhLWgeCeZZshhI9C5uua9fIfmdo77dqilCDReWoXxVy-lHfhCASyfCZAuyYZJnpl0KCiz3qKh8j7ihpQsBGfIjlYuTg7xVE1XrM2Kr3vQe1bpArjZXw6H4RrXJWH0eccM49yRa9lCt6sWFQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105060398119263180554\">Sailing Service Fukuoka</a>"] },
            { photoReference: "AWCwydigEjEbYEKhWoaeXVvStBmdnUonSFXekLd_1dRnjo8-OMr7xP63gcSXDYeHDlX20a5v-5_n3WsTyj5cM5IJ6NLWpGMk40bbqow_VQNGTwsku69JjD_icml0jmhUmwJ9NNdXPsByAyrAI4Zbq2_WWbUQ09ZvmB74qfHd0r_0Gtg-AwjgPpgYkXQnpiFB7EurqzXR4ARiJRQx2F3GYDEr-Hh_rkXow4kb3eq1cJSTAs38yJdr5my2xTkvjJWOmE9XFMV7tEMWxU62W2CmgbseMsUJW2ogyusL_GcURYk3cQQkCtlQw5XvZUVzTPOC63UG-G18KtSopGELZyUocbgMuYvSOBnNPiXdCYa7WC9-_rTHqFa_p85cq487Nm1lItBRTddaN9O9yHanZsagID6Xw89j1WGnzr55nHeOq_zIHKwmxVNl", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105060398119263180554\">Sailing Service Fukuoka</a>"] },
            { photoReference: "AWCwydi7gZnuo4UwIgSNZYB8ShK8PiefELWvks93CdTJleMNgXBNEZQmdA4ArSmw9pHA4ULZ-CVGX6iqkqTNBW4UStqE-dkd7xOdwmwpgX36aPHqaDV7D40iSYVnELzkH6ZHCwfjjAv6DQglbCdGLh_Ia65f_MGe_DCq0axmaadutCroOLxM6QCtXCDzkQRJWkQExO2KkQ-Kdtk2WCyHvfXtZ7boXgDdl5nmWiskyrKHiOuzYOM8mR6m9dNzutD1LD279OEyxf0zn-xJ_dzyubtalHRzpKpB0JehCFK9sDkn3jN_1G0dlXaBGRZRbLX3HNUCNDV1XagGxp_tZPwA0u-qUAGDGkZYTknMBv3WpTQ9-IkwQ0Bov2ubKzynk2oQ2-Pi1JAGlCmTpmq-xBBKxmit7JxmuiDElO_d2l8TCDVppPOoobU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105060398119263180554\">Sailing Service Fukuoka</a>"] },
            { photoReference: "AWCwydiuKyA2hBPDYy6TpfjJMcLSNX1R_IcEJVsJjW-LtVR8rAZy2VrnlTo-Mz_FfP2tXG3N4UjMUoFib-XXao-FwNRLuk0eKllk28Z1fvfeaMoAIhyc-JOHOEqeJQirIlnlcZZDYA71v-g0-e_TxQva2OgNEwIkrY-xpROql_ONDdomMha5ONN5ckKUfPAxreiG0Ywg6dpjvL3TEH6M7cSjU-V7MLXpjSkpmfL872YT8VJUPHrD-GsOCHhotGXpD96N7AZMC7_WH5s6PMO6Z0vyWXcRZnQ9rMyK6Xa8EB1ufS8j6Hml1nOEclIlkTDC2dIyVWjwdqn0zq06G9tKDWy_ZiPbKGns59yJb17Hquxp0b0s99NlnYctpUB4uNZMVcK2qMpK3HadBYvHRiyq4Knw6i7dfjIfCva-3DaahmgZ_yGamQ", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105060398119263180554\">Sailing Service Fukuoka</a>"] }
        ],
        summary: "높은 평점을 보유한 수상 스포츠 시설입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 사용자 평점", "다양한 수상 스포츠"],
        tips: ["운영 시간을 미리 확인하세요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒819-0006 Fukuoka, Nishi Ward, 姪浜駅南2-chōme−26−９ E603", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://onl.bz/p92F5ud", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6563304294055019139", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sailing+Service+Fukuoka+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "도예 교실 후쿠오카 코몬도": {
        photos: [],
        placeId: "ChIJAQAkF4WQQTURH5dv99Em-TQ",
        placePhotos: [
            { photoReference: "AWCwydhqzpBf78bzysaSmMyHBMBK_e_wlDxbEhANr6d_OaQFMqGWGNUhWWle6M_AnGmba4hrpZ67qtiu9Js4VVv_g_My7pph0-F1YYNcugFMPP2nsx-K9nhrsWJoUEo32duFryD2bJtCnsRwY8hL8tWJRsgL5fYWVnhKRe-pvY-VokVzR5Ova8lOvEfdxFtcvOGIHURazQiIyMsXueC4pxm3-rr_kilh2WfAiNoZJcJnpnL-MjtMVFSiH9oVdtUFmtf6h4Tyo-Bq3780UIwlxQ_1tTa5aMvGFgbaNwqzdvMXBVQxghE3Lr9WSbLwUnkEDRodGhypAa1fLFmWyEHO0qTAUqfRSn1Y7IBZfFV-Vqxeo-jN4QPzw4GKNCTBCOJCdzfaXsYSz8ClA9bxBW-0jRulz0Fa3ONWutkVQ9SqF0U7X3nbPWM", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114877977453675541132\">陶芸教室福岡こもん堂</a>"] },
            { photoReference: "AWCwydjz1nR2fnz_cIbqlNWGoURcvd4e5H00RFt19hetokMFi_7dPWlJPHt7NqTeC633hyvU8OHcyZ85D5pH4DDM85KSDRxD1wxxkSQtub5UllP5gm_HI1PhmcYfuyXwkll8velEa2eOn-u8ufr1JZoSp9Y6rKzlPpkTSOCLvjMc1g3LeLajFpZyET5ljt6ZNRXodfKEbQgoaw77sExX5cjQ4syWCEHqD4pX20l50qUjMZdcoXUcICcC008t-sjFg57eDZnVlfXMIuElkhEPWIrCck7WDGOVI26q9SCYzxhqQDb5zdlM97h2RIX9Q1iddXdmWY9xPo9l0X1gvHCiOx0nJox0-9l0lekrZiy__9nfg3DE5wvQ0VGRlfE7R3qkk33a724KIRjiQ8JrpkMK_g8k6eG3dyNohdNAl2Zn6yd180xZLtDm", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114877977453675541132\">陶芸教室福岡こもん堂</a>"] },
            { photoReference: "AWCwydgSnOe7D4SIRvekG16MkkULEsddLf7RPO75mJZqfAQaeGC3r3i0Za4hG-jtAlGO-ff3Lqb3WL1QCPnxY4jLHuqrCbt-Qz3CR0iJEHu7JSOCdr4CJi7XeuL1yDnSAsq21t9y4I9vQliY22cs0w6hQAx_y_MfiZLylTMwOos0WDHLIIs3ZPLrzjySD8shTls5rxfeF6QFrBI6s5qTpuGW-5PDcQsDDONqJ00YbaoEWWFFS0LQPz_TQ8ACJd_p39cfCeOnhkaCYWVdCmH6t3yoE2Id0La8eQd37yHdLYCb6PLAtxlANWU3o_gXk0y1yysd6jYd9-42KP3wHQGtM24HfbbVtpdLG7VEuCwuZTfb4v4UIq67MvbWOnu-I9L_z-VQlzXU7szXu4Pyfefp0FEcal8PHzYQ-L-DKiUT4-Xj4AIpAA", width: 2268, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114877977453675541132\">陶芸教室福岡こもん堂</a>"] },
            { photoReference: "AWCwydgq7xwygsDFP5I2rdVcSOX8JY-AMidzfRRlQYHudt8Z_LmqAJXLr1hYeGNfuzdhjY_NNWhih6FmZj5UAHEuSV9VEIs4WyRs8oKvfYy_wEeNx9boh3AK2Epf_oQ71t1eGrLCMrEWYT-kBQinGzxXSG3VZSaykQoxHV7PaC1Q7dkwNl5FZBggYKws1FqfIOq5CKwDw6G3EqqQ5Z29dbicjWcrK5lZUyprow8zGoiQHQ1ArtN-fgsYfI1fyHK4MwcVnPdljVYoC2f0WKNVkcfWES6bs1JQmOhP3WR4k78QicjW5Dv_oE_7K6IdcBmmwOSvCLABNu5U-wUnvqEFVSYoCijOoC1i9XNHqpc7HjTkImvyrUuOtXEH2XT3Rjr-mRJxhFWTLMWiRWeKG612fDD_xfw1hpuEizSIFFAi0bL2WS_5eBRl", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114877977453675541132\">陶芸教室福岡こもん堂</a>"] },
            { photoReference: "AWCwydisZX1TGhQiuflf4J0S9Dlq7iU07k0J8lrYgKrooxXbW6ZexnfcqbusCLpRuNxSDiIZ39my02J6q9r2dlBDfQ7okbjKHJ0vj6vW0eaVgl8fQQon-52WaqFiEzpMzY32KcH9HUnS2tIxCNqi6m33xrPcHsGzDG8zE_oRj3uJQys78U5GXxincwbZxL6juoTtGVvD4Yo9eVBLoaGJMacZcigsQGn-qfdWprrtpJucOGurw2ECCtrmGm1AK0ZHtCzbXg19GzaJ7J2X3eU0PjJgMqIzsEkwi9G-ANlmrVcGNG3KWa3_Y4JvFTHUDqheTY99bZ1LKL2LdeONa1hFxVmMFu12m0KqySv6e5zxP1tn-nsWo1WbFLB1-xf2QvpSuwYtN7wEHIlSJ1hTz2H-iA0ygTYipHhCtel2wKXCAN-DKmwyvo4X", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114877977453675541132\">陶芸教室福岡こもん堂</a>"] }
        ],
        summary: "친절한 지도와 고양이가 있는 치유되는 공간",
        updatedAt: "2026-08-16",
        highlights: ["초보자 맞춤형 지도", "고양이 점장과 아늑한 분위기"],
        tips: ["자신의 페이스에 맞춰 작품 만들기"],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2-chōme-1-10 Gintenmachi, Hakata Ward, Fukuoka, 812-0879 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/comondo_studio?igsh=MzZrMGIycGxvbjVh&utm_source=qr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3817124842414511903", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E9%99%B6%E8%8A%B8%E6%95%99%E5%AE%A4%E7%A6%8F%E5%B2%A1%E3%81%93%E3%82%82%E3%82%93%E5%A0%82+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "노노마 일본화 체험 공간": {
        photos: [],
        placeId: "ChIJPZezGMOTQTURWwB2_jFW_oY",
        placePhotos: [
            { photoReference: "AWCwydhdFD82JZ_sUSM5hFO622kC8JGRMiIJGq4Db5JGce_XexG6e4Cb70aR0UHZNcWOYTUyTt7UzPjatHGVR9l9dxuEFqcG6_gZDtH5zRJ6IfADiF8miIUKhpAPOl4RQFMBitjfg5T5ExTKST4ivVQXhmz7TC2I3elHZ2j9Lq8G5ym-TT4ZvE0_qhfRE_NkWbrpR_NNmIrwugly3v9hI1AwgCApq3hYveKRXbJ9clx_ybFV_ojJ2IR41edK-4PB1lSmuJ58jIm3FJ4tOBZOiYmL1Z_qk3SYgIq6SnyMRiYeLLt1fjiD5sBpnpLIN_TgGUji4j9rEMQkWgOq1sYFtJB1mhY7ws-i4lshxzrPUC7tV4g2x7zJeLEHWxd7MnYOHkykwHFJo6jIedGGTigkbXdN-YyqA1-zrl4AJjAniJ0n9Dr-RBk4eJ0w-QbQCKYD3k-t", width: 720, height: 389, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118008678051656799580\">野の間 Nonoma [日本画体験空間Japanese Painting Experience Space]</a>"] },
            { photoReference: "AWCwydjvOLVF1Qgl2bnxZTkVNnB_Zr6RSFe-4Hv76AWcLLgPy-KfKmJr4dkpOF-_l_-kQlM66vuozHtPYYx3jqlulVHz5TOypsu2Wg_DL47iwkJJA7oIm-0CIIG-J7p-vNCz9_gCLrGxI88IdkeTEkKKGbmiPyczWL5m85TrdtJbg3tnfELX0O8EWrEfQtFBce3ZLa_jmav0IhZ57jUG4dVFLI61dB9uWuCcU4FzGoWTLL-nQPgtM_AUSNo0jW7128ZVbvOO0ZzVap5r6NF1ZQqwvcWdLN-0_QcFW_dwgjCZMA1qt-Spwc7qgOcpTUr5IrJ8CKenknqXbH0bH3s0vXZZoP5DpOTtZQUnNZPBvKkdyxZ7j6HAZJuypMLGhZX1jO9qm5XFhcR8pKJvy6AOsdsF3-iZoNwN_DnV3YklHDjQMw6Foy9AcVNmVDx_HPxl1Nom", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105863166720261830448\">Megumi Sakurai</a>"] },
            { photoReference: "AWCwydiFgSlx4D0y3zoXLsujHCe4X0xKlY1iGyjJbXpWGBqN1fLa_D9LnHt6-IQkt5FvDvTTR1OmKAGD5BXpsPCkyn6L1fJTkkPRt2HM4b-Uc_v_wl_wSApSrdmXY6KMxkhdA2epxNq5nGE_QYQ980D05MTh3lswX13-j1ZJ8jQ2n3mv6RHShhWaL2PtL55WTo2gnWNxCmK_aIz6j_ZzE3c0leF4EV4QsCWYNGqft76zKOIesn_EJB8w1Bws7KKRNbrPUL0VnU4XC3FpSSEdYOovSONAyIw0RANp_ExPN5yAs9_0pHXDD8qNt4PFteNssLtBqHCBGJ3TNmvUO23ft9bhp2AjC6UoUO9tFRiRQhYH2yjldmWAeFTd85V_W_vlYTpZy1Hk4WqzFhI2mlLP_LuacMKuuvH4ntuPtm35zSZVzTHYpfL8KIbyiivmEt5zUvBo", width: 4800, height: 3157, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118008678051656799580\">野の間 Nonoma [日本画体験空間Japanese Painting Experience Space]</a>"] },
            { photoReference: "AWCwydjJ7ZOhiA2S9gZqEpxMqSvTM-qUxjElN4G8XM-N27DSCN7OO6TNhGPzvp_kYT5q90UKdtmzlYB5oUDLYcgp5s7GkVV7ZBPlJnCC21Lc-kiHDDsS1RZLQJIXGa5vnXcEiFeGil8KYtSZU7KXt3ORfKKildYd75LNmHh54b6XeXmVnAWgqqhcWAcrumncS-XVrximhQ14x862Um5j1_rAvAfBfu7xcCNPnzwlHMc200Z7_7H7VP_m1pyn9QyT_jdQP9xhbku0kiRLXzW-3mBHgBdQotyw8IkQRigEfAGI12ich9By4unqyF-C9o3_9-UbQc3ARQWUAX4VtqIL6aj_PyjthnYUDgfJu7gEiPFf6nBbsRziww-ZKCb9V2EFbQEZPFCgu6iXlRyJMklhq09dZBqCcSJ-tMrk5H4BIZ0TqX7UPcIytPJA9Alqs1fIUs-t", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100956804997786797873\">北原万紀</a>"] },
            { photoReference: "AWCwydh9Z68idvmv1fFWqLeCb-hLqv7tq9VivPmLvGcNhUqtp2bYtR7r6OrknqqRODvaLljXcyWk_lIsREGW1sB6NCVwn1tPIwuijRu03g3dznfCpa-HDHbm9Qr7D2-bQLb-27ruRfLXMaWSwVhSCVXwMtnz3CqrHzzC3H_-KqDll_dneSOGYur5VIdD-HHDgjcyj3orp_xDQiN1apOAxDrwgpIoJlQuIi-qouD8FQlbNJA5cBxD4PlKXypdjZ1qGTl2hGtvIdoMfPbEPbWGYNLXXRTKI3s5UFhuGgonJ0LuuuFtTiLq7n6Y_l473MU_JS0wDstfFeusaLMGHt3NybRKc-ATq9zvCu-PpVCAEPZEGYBGHAyVnt9puwkkhUE8U3_QEhWvkk05WpK7yqNs-1XoXu0L73SBghd4FwQAoCQUoX-O357V", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102607416513908705726\">Celeste Martinez</a>"] }
        ],
        summary: "전통 일본화 기법과 천연 광물 안료를 배우는 워크숍",
        updatedAt: "2026-08-16",
        highlights: ["일본화와 서양화의 차이 학습", "천연 광물 안료 사용 체험"],
        tips: ["500년 역사의 평조필 사용 경험 가능"],
        hours: "월요일: 휴무일; 화요일: 휴무일",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-chōme-10-36 Ropponmatsu, Chuo Ward, Fukuoka, 810-0044 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://nonoma.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9727307017889382491", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nonoma+%5BJapanese+Painting+Experience+Space%5D+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
