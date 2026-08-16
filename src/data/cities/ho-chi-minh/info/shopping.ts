import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "벤탄 시장": {
        photos: ["/images/ho-chi-minh/info/shopping/ben-thanh-market-ho-chi-minh-city.jpg"],
        placeId: "ChIJTeYpMT8vdTERMH8sUnkta40",
        placePhotos: [
            { photoReference: "AWCwydiIb4UkOCD_pVJoTc-MejeWiEl94Hleg5s0Q6urjS5YvUp-9JVRkSR97iQVXw923E1Pko20jyeOfQaVU5hNQgm-vCJuEgfMa6ykWv2lWQIZKtALjvzoPqMooMB8cCg9J2Vx6yqh6dXtA2V7A25f3fZ6i4_AeHcwgsvEZfNVa-XaTU7jZEe1JwqqXbXaQAAz5UF7MUUDsCp8ZOZbJVOQ4by71moD38xSQg1rUw_QNYRfxFSTOJdR1iqkHI_HGPt3tedXKHy879ohyW4MD-5KwLLVBaQhv92it5WPftbhDtRxo5869bMiuapc1YNtqqwWF_AREkPwNNbDGxCrY4Jnu7IIiIpd4LGStECFpuNJqBoBwBCetFSGkIgrO-aoEjFtJU4kBFYwa2FsmCpRpYSMtnKcrqOXVJRSWCQ3Nfu8S6H6mgmo_B080clvhlP0xgiY", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106306651042944810221\">Loki Hieu</a>"] },
            { photoReference: "AWCwydie0FBDK1-hkLTaijklnf1xah3NiSQfe-QJTKCstX2sclYmQMLzw9VfgEkRrMIfLWbrusUSlUv3uuxh9jWtIxvTnnzho9L5NBzmlhkknS_C_G66F204tsS2vY6oRI5u1hJWc40TK-eOfQgOsRD8YAanoIFHNbZc6mUYTarfZO6PkGkb5bVlMw2oYTo56MiWUx7fK8Vno6DxVSS07iVsUQOGpP4S50D5iqvOGQrxSSlJxkxawtdJfv7VyyZabEhrl42Wuaa7bXldhPiraqEFXE-O39tkQUdu7nXyrYadR2SESocrmZSUSUpN08X1eDzqwH9vC74uancmRaEuuHY3qdEh7zbO31U933ysXz_M7K_j7rNoQw6oLdhftV57yL7AGLg5WxmHvqGfjS9UXfr25nTS0JQcuNny5usZomCiLtE", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107569784682529524169\">Shirshendu Bhattacharya</a>"] },
            { photoReference: "AWCwydiNfXoTIMFok8Ba40eJOg-RyQrOTFd266_aBNpaMbFyKFrwDABOAvAJlFr6fQmB8Ql-4f6Tpblxs3vYNbgu5iKDiD4CvZQOisV1SUSUDdTgcfwiji5xAlSR8zPhCgLU6_8UqdsxrBuvpZIflbKgpmU_G6i_poAEwFj4wmrPOdpv0I0S9ZqTnLcCTUff-azofDXZC5xiLLOTQJ40GugMxtYIhKPSkEFf4i0UB0UxAE9UKKe0YJlrhYmdRQjl9FkRaxOhdupnIJvxBMDFQjFKX64n6bfq_VCglRidf9kSdWNib0Az2uoFUydD52mdz5TXS0e8acxU-9yYggKcuHbPk3Zn-EfgLgsJI45EWARdplHpLxAkXer3EOHlOz8dz9-VJcPjTa3hiqE1TJfNPh3-uzyfZ2y_PG9AF217QCJpRjv9tc6j", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109214099733722152362\">Artem Hetman (Social)</a>"] },
            { photoReference: "AWCwydgKOSO3FW9ipW5uMzkXgylIymxX_LqJGp4hu7MdsNpN4B4QeKyjv3JW9MhAw2Cs0KiqlgKApHCccm1NUllFQv0cTBOvgrZ5HEeH4JVpRnx18UDmkWNJ_VXxJTH4B502nfexdTIjdHc94BEcBTrbnofHWovwUCKgT_wHQSIPNeCZaWOpT--sQxSpU-oup7HaQZXZ-f4FlEcz09D6NyU1stW7dlDJYYso21Rci69XQPA03gFrwiawV-BiTY9rEgU4nBiNTsh5c4k26XwpuyDSHe2SRLKR2Tqs8rmwS7-ExNXSmXSKQrWD8Rr6wlQbvDbcfjRI8ubZhB6JRXNN6VHp1A9BJZXsC9jDPBwS4QpvqC-tD_Yl2eJiXOgZC4oqj44CuRuypuSs52auhfDrimsqyAHb-A4FEkqcg1BiJ8Z4aeFspFk", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115882164423593756972\">Hoàng Nguyễn</a>"] },
            { photoReference: "AWCwydhirWJbRq4xWpByrDNRnb62El7JJZKlwSbMBpYe5194viKo1pduJJn5VRDdlkL0MlpEVZs4ByJBLTSt8rSjqhxAb_EVyg9pRw5grvAvQrYSp_X1ytxLBPkp1nNKVqq_Iu445F6uPDqCTlLSFZxV0Wq6XBqxNVxfcf7--N508zQrNipvIdZXcFFuqVnvfzIpRkDt1gdr9Fuxx5K7rbresgLQLb1IoHYOTUsp51Jvw6nc7fFpLcD1TPw2PCyL5Nbq5PrMPokyO-S04Ctd2kHoM5iKXZ8og0ZAJ4nd3IQ4m5N-ExbMhAxdYHyh-esPhH5MF3r3yA6OY06d-yLcmfcyMrwnQV3oz1B5kD2_6Q1x4IIplbDsD_e055nE5jZfirJk-0f4PpqBCbeQ5Nof6OmdWYnYv7fny4wTQ8G_n6Ftrb0t4Q", width: 3968, height: 2240, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111714427432518644035\">Duarte Sousa</a>"] }
        ],
        summary: "벤탄시장 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10190288580948819760", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A4%ED%83%84+%EC%8B%9C%EC%9E%A5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이공 센터 다카시마야": {
        photos: ["/images/ho-chi-minh/info/shopping/saigon-centre-takashimaya-ho-chi-minh-city.jpg"],
        placeId: "ChIJPY9kQ0cvdTERNEixjJGVzhY",
        placePhotos: [
            { photoReference: "AWCwydivaK_lnipabT0QPvPpey4Lg23OnYMGo3E4wBF8BrXfEBat_t8ewd7V8cq3fZauGWe7K9nOrA-ZDay2sJYO4Y1bJEoAGruiEyx8YPJTZhgpemcJ1oGsF13bgJSsnrU6qevEqRWEhWG_qmhrfNzY1CbeUye5XBbKxCs5xVqiRXhIouORyn6FU_P990UH9HfIayyrD4REtSuy9kL9pbjQqcTAbprz5GIO2kFRO1_Z5nQtBDOKz1wEWZp1aWJqkAtgPsqf4H18BQ0BB7DewMtfTvFkOjqnUZ-ZbyeoMC6ok-K43m8_Szh1Hw8teNicZoZ1jXhjzatGBtKY8oybVgcyCToyDl_XLbCuCD4fb_ecHTicp8daHR1eBiohJgyO_XB1WoOhsLNu3e53hrwXHSWXNCvGVNf4E-HO_8Zh0Xv99BSVD0ft", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100766007954868127031\">Cường Nguyễn</a>"] },
            { photoReference: "AWCwydiK7yvBQP3BlNMxC2gDzxZz1v1MsD-4yvATgkIuHCUWL0W9n1Rmpe6Yn_IGd4T7SGJyJO2KtTjONEBS2MSOUTSfsu2Bb0X4V42apVUgKu1WzjLfdvWNQmazGB2b8Ibj0WJr5Y8cJZmPpYFvnNZecd88aTXkPCv1sYBsYr75IEFcvhBguhjqt5sX7wvDNXR45NRn5SVSAIsOz8UKbOz-iEktazrEamVOFMYyLlVmrQcTOdYKE0_n-qz_5gxfLJXOBNvjP588STKOmFuxcqwT0PNkqt3s2l-r8HtTGK-a5fQqLriyPcUmKWp9Ate-LIjAG2S1AALYhVLftvphM8BjoTCoZe-J5RECJBN1PJOe1pX_zLyJ_xxsCyTIJ4-bWJJTBDCJ_hVghIzVQ_r0b3GRqCGprdQfUfkQIWTRaqeZr5E9sg", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113866044420891619322\">許Andy</a>"] },
            { photoReference: "AWCwydiXv54DFfMjURVuw08uHLAD48E29JckBlpV5S1GCiUQ7475nGINLr7LKkeMrKrgV6dh3Wwv9nNSOCbxmtnii2fwLWp7-QIr2r2YxXobPEM4LVLqBg5x6XZjn1rHOGcVIZT-RWtfj-uQiaUAGxC_-WQDKAuGOD3gvhX4HZ-u6lpXjz02lKrt6p0byjOpQyfbRDAcvqiZbOl2dYTWudkjKxd65cUDQ6jj5SD14FN9LvG2BpHa47x2n8Ffu7b9upztt9P8zfUNrHkVj8pb0hwQVtMVS2EZLlzE0SFnkRjr_aG7lMg22nxu_APvUF0vdyhddqsWBMAnlLpRv8PD3pysdAmrCMM8tKdpqTui2B-HG7KPRgqFTjs9wtMRUu_-Q9zd672T2QJv8b-y065ZWmkcbeXgX9UcgSlRTjoOxQQvtPI", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113866044420891619322\">許Andy</a>"] },
            { photoReference: "AWCwydg1CEiT8d5kB9bCYtHA_AF0cbD1jOhMhTTH4whAIjpw4oz0uZwtamCdQHUMXOptRZTDRsDVjwuYapMdydiwEr9bg8nzBhR_1fLMSXGo1CPDL0J3zqY96Oaz6xSB5vkqaBXPMm65Z1BGs2M6HZoK-_-l9uoirsCL8UVD-HGNLP9TmWYb_A4bc9Bd_dxudY8V-kPwLObLIReFEVeHMJ4rSAAra3gcPIRPYHdjBrqRV18bblXdkUjJWMtlBvw3MLw87dI-mYwXuTLUDZle5Uxam0mTJyPkKJpAYtQd31Et_qL-z9LzSOc4fZJSfnTxGEGWos2o2hgMoFSoHSstwik_gb3tpIMm4WG0bbF3fG-GoeSYejIyPmavxYyZEKWr2OhUM4vfWno3hvQi3PoYDh4BiF-iWxDyO6VEreG9yu4eciU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111645635067188295755\">Go With Be</a>"] },
            { photoReference: "AWCwydhb1G2BtqhoaFHj7Brw_lK98Ghn535dLPsvueB2K1Jb_HDjxohd18baaxTOKnLFEnkcdf0HZLTXYgMm9fzBm9_-I6tHnak9QKy5As3PXuqhu7pujzG6uBI75AGxFOQTpWdB70sC3lvg-bMjsFiXmLww6ti8KdI8w6ShwJLuLhD5SqA9oyDPhKNwHzuAGUYNrQ-2DY-wpCxrtMvOratkwOyENjgZBUlfbLKeJzSI1GzJ0Tlk4cJXsWBa4wl8vRQm95qbmUXkoB8WFE141X_HW4sbM3Cle4U4OaCp9wyQ1pMVb6VYyiNZQDCZid0K60J-Pf0XSsOjqgqb3EA7Qt_6zu0PcQ9bMr4Q-fP4r0s-sWnD4YNWOysX-rPdmPk8kSOP9tKvyWJW2C22ivVOG1To-aWE4v2fgGIOBGVw1ZhIpwJb-A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117909753616409153540\">Mỹ Kim</a>"] }
        ],
        summary: "사이공 센터 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://shopping.saigoncentre.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1643415366400034868", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%84%BC%ED%84%B0+%EB%8B%A4%EC%B9%B4%EC%8B%9C%EB%A7%88%EC%95%BC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈컴센터 동커이": {
        photos: ["/images/ho-chi-minh/info/shopping/vincom-center-dong-khoi-ho-chi-minh-city.jpg"],
        placeId: "ChIJm5rCdkgvdTERQiGNZ2iXx9I",
        placePhotos: [
            { photoReference: "AWCwydhNzPT1EgJrRNaB6LRDiA7fSV9qo1CfWe7BMzz_zpPrMbkCiTjYNKYV0stf5kx0Mtu8sTBMsiUYubA5jjeAjAvt7SYqwjfVC0gn28g7X5lq80YUppdfWWZbPaRtFhJx-PWK5vbNy4Hjnbdb4WBA1aRSU-azWlFu817mkEn3Bh0v2QlMOAW_KXDsoykf3L8c-due3D7gGePYZAeWQbTbYIf7LylnCGKLGdIEyAUfBzLe4WHnpSp9qXJBZiPjB_fvEKavafW1640VJYTu7bbR-r2ZGSCATsSEDZmT-_5hR9HBJkkvTEtGByHO2pxYhOjHKR6nkxm1kX1RRRKV73vSMDLcL7S91WmN7ztZewUhiX9khWf7gz_NiUneIm8pTxkD58du3W2tKYEmYMjLS7qbBPg7gPmGdhzkba8n1Z0zwD34aw", width: 1011, height: 632, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111797006812364068231\">DEUK YOUNG CHOI</a>"] },
            { photoReference: "AWCwydh1MclGH1o8PrwB1x11JumndTvg2S9o1QU9EcVVu1nfyqBLoHhBCn6YxiwSVrJDPkeS7kUw4uh5ArutdcmhnQA1NCvmFYFzuhZp7DiDZelj4iZdlhWSnc4rn4aXgmbhmnkf4CrlvEP0XnUEUGBNTtUIF_rx18NDAEcwoRICy6WxS_42Rg-jfnaUXLF_bhtfqbifDQeMnuLH0K2xvZq19mV37GC1kPmS_lkq7MPh_ZG17dkNaspIgxLWoMx6ddJcQLwjbukkc_tQuh8HC76a7IKcWD6xFLPqmQzrq8kOLqLN2yvxx9gAAJgsc0UbNVA0an2Q-FTg9T6WZL8PSMOgRQU-WBsL9OtHRKrkie8jNlbBYvgAgHl1zzhtW8aihK45_K6lVgBg_aVTkFiDS824iYolM9MMvfbt2VLoE-Zo_gp_8wPw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105751490212776525918\">Vincom Center Đồng Khởi</a>"] },
            { photoReference: "AWCwydjVcU-GA6q-MCHg1fIEtKou-9_QKTYReOTvZeYmbckdYEnHy2LuDpaRgLcogOT0s7rJVgzo5CLUrY6Tnto6b-UhButirNrrgg_jeL4EIg-8AYz8fKIpJLSPOVB7yEzqlv4Gm9kgD52GItKZzERmTm9KtFm14bo93qbjNASlL28bNHTTBPuERS3VP7YRi14didlJtShp9ohXjNEeWvRpZ4j1AhCt-1QpE-P_ebCNXf-iwcu-gVIZM1Hk4CoyDclCsFKVtRBCshOZhMq9MnhJ8dS8b_EG2N12KV3nGfOXO2VoglvLXuyph7NYwb5n8xgODo4G1WnBDAGp-Bjl_3D8K4X8z9NfrrH725hKvnzXFC1rT92NkCmt31gsOPttmzHP735LlGaOBBD0Lal35x6rjJ2WqHBdKjNavAD-yzn7SapT4QlzHMyOLL5q441YYnqy", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115338445120156477065\">Всеволод Т</a>"] },
            { photoReference: "AWCwyditTByLiGWZj6aYcoFpKNo-Dj3oZGL0fUD_c1iUEHWn9zSvim_UI8nIqKXTQWcwD0GkR0yadEZq2XVLPdf0uYDmz7yojkT5EHsEN7m-PpsNQAXV5PPuyqTK3MNpcrSKP__gqoBVIqKMfF5_0Nf9BFFtoP7zyiZHmui-OnEiSt7y-cjD6FQjUoacpJsggLhQ44zCi8VmZ0vFcuZyV3rNs6wooxSmlbad0L5-ch1ts3gikrrq4sH0XVjUN7vbLnltt51uzTMacHDDOul_rBD_wR8YffYuPMWJoWDflkxVOXIwhz-w7Zg_fhuNc0cKbx46Ob9Pk9til3XzfxTeHWkW_LF9hf5p-4h8RZ7iBq1zeAtEjw83ir0RLzlRSB2362F6fuvF3mkvlkY1lKfqzkLC-0tBbPrlkUkTjNTI6gFdOgwBCA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105753319884424647840\">Phi Khuong Tran</a>"] },
            { photoReference: "AWCwydjPMNc71M27soL5KGLySnlH-ZCEnOaiEk8Z6dJQqO-mPUwqLf62quxU0W3rkb45VQzmRVyPdWqJiulhQw7vM0kmQlQyakDB7NlKAODSGJCkjQraZ_Omv-T5HkU1X6SQ4CQcqimyTlycVU-QSEY4dC9fkA52_kqdgxsl-2AtOekg9svenMLnz2sK1hBeEMyRGUaIjcP_gDO0xZd1VImxGQ9aNzQUOeTTodRqP5y8fb9OKLg0k3NskSuCirsaguY7jL2gOpxJFtmshab8fKyVpY41Mkp0E0fP-vZEbc70pfNAeG2JgWXsr9aaEKPNQ4NQyYZCwvn5cs2evuYjuvyR72MUy2Iyd8G7zZD4U-VZumBo1GSeHtxjm5sElA_R50Wl_ylw8ifHlUQSn6N-QAbMuXmUfZ3HiNpphsEXSUbLKFH3G6o", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103283130406955098396\">Tran Son</a>"] }
        ],
        summary: "빈컴센터 동커이점 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15188274742999982402", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4%EC%84%BC%ED%84%B0+%EB%8F%99%EC%BB%A4%EC%9D%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이공 스퀘어": {
        photos: ["/images/ho-chi-minh/info/shopping/saigon-square-ho-chi-minh-city.jpg"],
        placeId: "ChIJU4Nmq0AvdTERUijlxbVwFQQ",
        placePhotos: [
            { photoReference: "AWCwydiiOR0JVkohiXC4_S36bv02-G1Ya-Wf2M5aqwqlErAHhrSXIPPLSYR79031MPybPwyhHqv2hwrLZpd6-UkyteokGnkZXSkH9ccjDPVelhl3-v57uEIpJpUFPAfrBf8Wv51YYPddLiSa2W5RvS_tF3XZ-bQdgO8HtYdECyjDP3UB_ge9tZCB9G69ObZ_pI2GXwixaDOD8MviRXnfH2PHwq5i8QEJR4pZMiIuiOj6pBFpP3TdG3NFoNHtrVatTHtfPxrQMARREqJAaXBFb_2w2pVq8Tq1MQS3H71x66gAs229yV5G0-pmKBrtkPLmjK8tTEgFwMLBvFq8OMOtCl2pKRvzd0eE7_FSpk5AAVrpHtPMJ4LRBQsHU5urs5c8K05-lNzHul_9EwAX9fZ3J9aZRb3SEtKJqU5Wn9k3c2hAms_OqbI", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116110839725911201519\">soyoung Lee</a>"] },
            { photoReference: "AWCwydjLAgAOshED8w9vT-bwWL0CyHVdjcB2nV6b5aHuuzJEudzepDIcmFMnGMxo3B-CK7pKcFuCt1lA-3DPQ7yf3FumL7Bi9iYmbYl7zNPeJNE-0WnAlVYppY85ZZda68g0CmldbySYiGEfmI9jzGTN3ayKosg0Ndr7QdsUSrZ4u6-hCD_IMO11TaBFwkAOcbmN1BJLbKWXjKoeo8PXBBftcziKiKI95mLFzdMxlmflhGzPbiYGNmN5FuBGQQRhw4j1zh1EOGjjG73i3PmXizon_uDoajdcLMoGYPGYfOw1y8lWHqoBVN-dC5iF3jY4kgczFEMMdVAoxdxpsNN5iGjz9Ko9bh4WjchHY1v28wv5q1Z3m6b9BfQ0vGqIsYekazujA2GjHBttxgtd7zfDa9XSaHc1WQKsyLclXmsMW0Otk-2QssRv", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116713703535436929261\">Antal dr.Joó</a>"] },
            { photoReference: "AWCwydg0dTqa62gYfUaCrm2CQl2aOWNcPBHnGMTxw90aYh79rhF3ApmKOIyFn7xQbEl4vDa9qISLzj9h3D0AWmvWVfTGJ483TrERxu9yf4EscSym9V_CmzF286Vg5C5_J1FuaMUtjLVIrX-u4AN5QFCDVLuq9iizsjArHboO4jLML1RI9wFsLsgmgL-2YR6LBEjhjE_Dv8GXsdawpiArDRvogRhLzp8n8OpHTG-ZyZGB46e-aFJ2p3NbI-JgKFcd3PYZwj1ukpoJil3gfS0fi1ux1A1uOLNxT_iM_F3ac6mD4RHkOApqqiTlIXuvb-bjWj4p7JMQ1_nHqcKijf6Sgcra4jp19hfBXsQDfOEL15_k97C3fw-Fpw27kP1ualWBlRrH5kBKiWqGd7jfywbuJld_NyVj6lgiqj-xubQKKaRdfcNJ0A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110734025912425055109\">Thamara Kandabada</a>"] },
            { photoReference: "AWCwydjek3-lUzxE31Apvl95pdG-lO8SqRNINxnsDSdsALglgYPrEolA0-VP_J6vmpppuR_XxQB3xtLwdxB1wDvYZIgCXLp8_wmGCJWaE-4eyAG35iv5PBtMcGo3TIl6lATZgAUXJs96_3k14aOZzNEulc7pL-_Apb_BrtPknhzsWlyXJPJC2EZz0rpzfpI-hZNGUPU4i8dJxQ0J0rj1sZ9w1wOCxCCoMP1iuqkXcrp-jkCmghEhrhWyje4HJICykYtcW6t5dcd5bhxamDHHhWkql4uzxDKodrniTCPyOb5cBvBQjMfTHjbdSf86x48XUe5QXEHF2lQOv2skKl7kWs8ph-akwzJQ9tGNY5TlxoZH2tjdZRAUP8UlWEShi81-f_2S3Sk6QuNJTO15uKwS904RZWOAZFVNu3Hb-zriSDBwVWqbwA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102877838678799564412\">羅主任</a>"] },
            { photoReference: "AWCwydhYUmr6XCsc66T91W6uBt_6CFrVQRgzo2onSVnhfZTPEIYIaP-K7E4vuY7nwubGOvPSpMBdzg0G7ZFpAjznEbVd9D06RjobZNCxPAoOVkHIeBXRcVwh0JhIiOk6lQQ5ivYF0u-7YBI4_tjxuTjX5RClNPUXt8lSjcCvHKlypgsOa55LemhdTBt77ErtmML_Ij6KgZzjNbM-tWI-rOD-EfpdXIxDdgOwix-fV2ygJbFXqDF35pubj32ujbI6bz72g1PKkiSn-zmhiI5S2622f07CuOqBEdcKfnZcswRcHJQMl1Q0B2WyAfNqfmuzaIjOc0k5f-klZTcONxZIRJSmJ_PU8ap7eqFqhal5D8Ybjol5B-uJ9GO_gKYIJPXAfReaFV6n9r0YkQ8ysUixbVcI4EiJvMMd0TT1uoC-ATcfC4nhvkTFJVYXve45GrjXTAiX", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108661843734246437103\">狗狗隆</a>"] }
        ],
        summary: "트렌디한 의류와 액세서리를 한눈에 볼 수 있는 쇼핑 성지입니다.",
        updatedAt: "2026-07-15",
        highlights: ["최신 유행 패션 아이템", "다양한 잡화 및 소품"],
        tips: ["기분 좋게 흥정하며 가격을 맞춰보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=294265276674156626", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%8A%A4%ED%80%98%EC%96%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안동 시장": {
        photos: ["/images/ho-chi-minh/info/shopping/an-dong-market-ho-chi-minh-city.jpg"],
        placeId: "ChIJgWWpaeMudTERW4UyjBZPJ4I",
        placePhotos: [
            { photoReference: "AWCwydjLkNHvtOxLdyiMewnWA6zH_jnoKFFmpS3vAMt6TGiNFeGEVasgf8IhXzmCAH7WOSuBu4TEG0L0fVs6HSA_QV2eX5gcyIQC1IOib7eFHrEHMe-3-BWAxl8W2Z34cNmbZgeanS-Py3j9PGMvk8uGyS4RsgROyzqBUKmzD1LSz6MgOZunS5lu1OYpEDKg9YPFnb8ZfRYNAo1jXqEbUE5g60PzUlr2tD5DvP9Nh6hKmzlmEFYt9TW2Z1H8uQOti663yVI3lbWSm0D5_HDvqHMZjSc7Z2I4dJuEqbSlA-5XmlgHYsNR_Y7v7pL9gpHtCG2Xx0RrnTZ-k_rNEmnN0fjM2EXm8scpes1aVfeX0kfBDhd48r6Xt1rAdXW7HxtR83PiPDhYlIVGDgTXC41hANAKX5TO3NdRHRVZO2bSbl6EL8C6_RQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108522475373420743460\">Sorphalla Sean</a>"] },
            { photoReference: "AWCwydiLkmRgo39o3ts_aHXQ9ovegMbn0QhZD2FBw9Jw5e2T7NDMjQjwFUkF5tTeby_Uze0viZD4bxCqH_zs8Q72gSOv5kzZp8A5CP0m2blzi6L8uordQtY3PSIL8KV8AS8tNVYbET9LldaYMFnzBQF6fH-Srqh_rEdlfnxI459RC4m_0b8MOCrw80nGOa-S8g0LyipCAjindnIbZp1kf2Nfv1OcQx-G-aQZvz97y8Jzu0N3RqbliqzSlWXvBFwAu2zbnqu8e0aYEXJBGttjFwdpOWgs0H3Gi1io8WdbP9u6g452rDnqbNDl3ri5sgykarfY0mB1ysPHkHISpYIH8hRFyhCmaEWk0j5CIx4XZga7CQRB8XFrLwfXJRsdj_PPY6QMwfSSFRpR7mD-pz-3Rj3wKBM8e1KVnrOyb7epYh2rmM4h1TId", width: 700, height: 394, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103363236923791174818\">Chợ An Đông</a>"] },
            { photoReference: "AWCwydih7lQ5eFeCE41S4XWz2nwj1CfP1mU-Nl95xt_0moHS0x1lmf4MiwORQQgOzoLOqGmcYlPMs6Yt2hKoWNYAS3_LtelI6Kse8x_Waytgbxm19g2g0l5XmOH0ODY50-CYaigGLFhpnwFJGvdRiVpMseyKeDOa86AdWf5ET9XPnhQZInTt7d7ubKOnIbahy_Mk0ijoyXtHJo0SmdFz_RBjm8v7T3OGpq68JKlgg5KjuE-YrXZeSxGITOY61TSPupkN3eeX2e1QeKZJIQ-IqgClMM5FB55gaa_828uS6zeZbf2qaZyk1KxlQMVSeCvsAP72TXU3N621neggebgoNlEWFe1DXmUxSWIV67Sxw1ymoB8CRiiQtbOMLUT76xCHmUjM90nvv_DtwOa0SI9NxOzFQtbQ-93ohTEN3aDQytZD8nmMyMG68PlBjcM02_xc_VeT", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109960124253288979933\">鄧Kevin</a>"] },
            { photoReference: "AWCwydgs8Siele97CaoXLaPL15mdj1-2HAqnYWffvZSJJQgQbpzbs_GYcWcfoNr8qsjEPrvZ4yxh6aqL7v1tkm9u4wEFy7ZJ-7XyCEhlPlBfrCJTfzYcucdJDSWvBzX7tYrf3ywuwrOHXjTUm1HuXFPWRtMtozT0l_G45T2gyUH1EFvfruwPv4VnZC-dxQBgSoKkGDSRFQKiueNse40NOj7tZMz__QZEv9NmvpqOKs13eqSoHUn0AtticXT9IYOWBQ61C02Fm0PUVfHX8TgCaU1xEQKT_k9U-aaPZy7S2X2Upf27ZALbY87jqTuFHAph6oiu6f9ZAtNNhHRc8M0hAMvlO5bXcAsPNrCBv2gzCnR_qRjzRMhC4pTWr0PirU7pkrOi7jsbmp0gU9QL-mKNWUOVWe0YoGF6fqEBaJtF_jRzGGrAjGLy3P0dZARk7ZOuLNvi", width: 554, height: 524, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105947649673209549308\">Lanh Nguyễn</a>"] },
            { photoReference: "AWCwydhJ2eYENDcbw-y_oFb6fHkrt9gctfuS6l2OMI4rfWOPJyb0z2bF5I0tuL3ixunr0BWgUDKh1ELKbCpfjpya8woLIbUVu5xPRR0Ql5SG4VjV0tMEcVSfSMZyEkcVWnp3vasOvfoxq3JHnV2gY1KZV2NhKHEJhcTRZG3_HCEgejNzSmSRGTPh-oK8fElxuEH5cK1dHDK5ARUoyXsC_ydmNAoJq4bUGi88d9Qam6S6PL1Gd8kuMKEwEzM9nJcSuicEGq7Rm6aX1BqkdtYA5QO_AlKT71XgXX6lTXFX58XKyhj8q9YfrxK9sky5YxGV8iR4sCaMWY4Yk8cDwM-ZG6BoncKPn8YLz1tAEYafznEc7jCaVuQ6cOUmqSGYBXNY15coJrctn2krnva0_Kj7JnqFBctaAEaAVRLXlpSFVyI6N84Wtg", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103363236923791174818\">Chợ An Đông</a>"] }
        ],
        summary: "현지인들이 즐겨 찾는 대규모 의류 및 잡화 도매 시장입니다.",
        updatedAt: "2026-07-15",
        highlights: ["가성비 좋은 의류 쇼핑", "다양한 생활 잡화"],
        tips: ["도매 위주라 여러 개 묶음 구매 시 더 저렴해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 6:00; 화요일: 오전 6:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tiktok.com/@longbanquet?_r=1&_t=ZS-97bOpzSX7jd", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9378551707282343259", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%EB%8F%99+%EC%8B%9C%EC%9E%A5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈떠이 시장": {
        photos: ["/images/ho-chi-minh/info/shopping/binh-tay-market-ho-chi-minh-city.jpg"],
        placeId: "ChIJTQW7uYoudTEREQoQkLAqBzY",
        placePhotos: [
            { photoReference: "AWCwydhJoAIu90zx1pajkf9rjn1mlez_iiaV9COCp8OerNje8ehhCh6dhHMDkQxmGUo4uCc5Bbr7g3O-GQJbPvvuW6YXP6DJnor_q2CEXWnAJitOuaEBQuqyqdDeDCV_vU5BKk3E7mjMQBj6R6yKHcT13onCNQWDi6oj8xTADdgAGiNs5vksO_lNeGGLoq2pMHrkpswkWoa_T8ibKS2sRDjNnzJcVaaQQqUexN1RsiUtRpFYEswafh6qZwvlwAtdn1lK9RkcQee2xrjM8ISgZLJEJ6hcDxCulWf5WpTZUFhDX2IBCbk6EzskIecVaajHVLzfCCvDlaQPA4NT8loWJrDr61BlcQeIvROJcKVvS4DLUBgmZWzIcwicJ2wTM1dmnxlLNcDJoyBTO5HRRFFIW3a26lPXe1X1rkd_FnYYpqCzfk5ZsQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107310539997819270762\">Sơn Tùng Lưu</a>"] },
            { photoReference: "AWCwydj5nUZCOz9rL6UgXL-VHhJmngKu35P3ossg1pXggjE9l3C27j9r_lugeWojKsuuflGGHSq8ZfvHS_mRlCjitwqeOFq4w4RJ4wI6t7N-z-THBRdUP4eZJwsxaOGIWGQvNTmfCSkpprDRXZJ-z2nj8YsqMYGLxh0mUkv638aZyYMtshSFIAps142zteFcgCaLnrTR_R4MQd2Jd6m8d-P0hGxat8d1gsr8LXHURdN48ZuEtCwu34WcFFrpqNM9-Ri5BuRMpcRIS9rF-pxsvCpOJvYd_dmA9QF3ZvKF2E1IhX6lrktmqjpUHk_eDOxIAH-V3zz3ThSeLnXF6sSY2ahdzctP9R6XGW_ZxeknP510T3BK20HjpfD5Dth2uwdwV5_n71yhAa32CWPJBpSlcQDetsxrN-lC7Xm90-XEXqUBCcu0XA", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117203946510929878387\">Giày dép chợ Bình Tây</a>"] },
            { photoReference: "AWCwydgi-zN3OGrUp0Y0q2VWhaFQ5-0C7uZ4HF5nUgb-Tba7jlTJb2xtTuFe2J0d701TCu5fkxXLNu3jlrP_qqhUcgojPdAsqp06TE8gk1d3swZSe2HVebggnW15Hh1aabGmExwnMMnZwrvA1K5FVW1gzuJdvpKB4krskzRBvs1wxaj3PrvwAWeIQ-r5fox-796JaSpZUCiMf5ZYediWRhBrgp9B7kwnA0J7_RO_iY8Rtclr2-K5GZPWzzSROszYhT75n_Uo9uKEBImKbdn1AS6P7kdixFBtlifzRtL_kS3tk20_RayjMAzW2GARZbMw3EF_xO_6m2EpTu95AJYy9ujsX3sZ3iJoCWiAbNbSM2YVCbXQtAuyn82kqyfTFpKBSzeaFpmw7vBVep0Rx0bw8MfVP7mtOHMIA9uf2Iiw4f0JydxpgjjINndkk8Gt6BKQqu9z", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102776580384748924547\">Tuan Le</a>"] },
            { photoReference: "AWCwydj1ah9ECNtI0HwxJzR1CYehZBWTkyLNAPALovMP-c5ruM7LS3FK1JhqJ8BCja3fw_r2NbYLaV9ZDyYEt2IQh-KdgARk6NOxnJPHAbCj2ilbBf7wzAmUUpL84YGhfXrFL9LsdRi_7wrodl5cgF0qUjS1-Cr_Cv1_MTj4o44TIi_jT5ZLl3VoeDIEve3HX1ST4W4INuS9I5kTwmcT5t8gctjBILgfLeskEir1CadQTQm106Y9aXMmmBZVP0bnc9Xu-mF1M7m3ao1bNGkjlIi7Q5jeCAZNCcTTc03fa816QxO3_OOoBxp30En6BAr73DmN3LpldPuuXYKJBx3w2MU5Q5kP6sZJ2sLBycvLzxJa-SR7lb6cJaog91sMjjudgUzLv0eTyT0oMECW9PPgmu6nR-IWkAaTRwSlEoklAT5E5A2qSg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111358661776402728841\">Hai Bui</a>"] },
            { photoReference: "AWCwydhrj_0OCfMywZGmCQrf5Cq-ihZAzWgNUKgCzuCvJismP7RJgf8UTwqukYn4mdJ6MdopCE_BufZzKm8G3OwwRepb8GjMj8sjq0q43zyYn9fjJRVMEbEgYRQX7Cjc-u-2y41tWCuGB2q6-Mq6onrUsuJftu5VUFMI0WajepNacMV1U9-e4i2TbNtD-HNLFy96ramUU_KdwFCDC9EWAJCsFXzC0Hi2v5VEiVVVr5cqx5k9ISHVDSPpMRWnOZYDtfBcYZ8Sqi4bSSBNNVyF7poFQ1RQWNy9miPfXkPgCJX_RICrSCpU6v5MAjKbCLdGr_TeHmH2gf_JnLPrpWJPemTQ-xP5pWS6UwcUoLjX9_axEmJwcZgj8NEV2gLmZI_Zc2t-qn9rG_7vjfGn0Ziep1rLavS0Zv4AbsNMbOeS_cxOGmk49pIW", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104643654550053179424\">Tatsuyuki Amano</a>"] }
        ],
        summary: "호치민에서 가장 큰 규모를 자랑하는 전통 시장입니다.",
        updatedAt: "2026-07-15",
        highlights: ["전통적인 시장 분위기", "다양한 식료품 및 생필품"],
        tips: ["진정한 로컬 감성 쇼핑을 원한다면 추천!"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3893127340704664081", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EB%96%A0%EC%9D%B4+%EC%8B%9C%EC%9E%A5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "응우옌짜이 쇼핑거리": {
        photos: ["/images/ho-chi-minh/info/shopping/nguyen-trai-street-shopping-ho-chi-minh-city.jpg"],
        placeId: "ChIJF6CoPPEvdTER_68dW_JunZA",
        placePhotos: [
            { photoReference: "AWCwydiH5EZUjMIt1tjibrNuJak_sRz-e53no-UEfbqp7ts8qpN6LtYr7ZCPbyB0sgXEU68qkxvcMP3xc_aASDR-CnMyJCyTFQixfTawFbNqry2jmj9Eubn29WQRAzJA-Kjnr1-aTANypcPNyrCDK-MDMud1FzHKTSCa6PPXCHh47WSvnUkujCEshUncsvNoDWjH4OIr_lQBZj9TpJOnszhcTjQIeE-KUXkGEnyVRuuWSEtfBBdBmDXsJdtWq8HIX-0RUfxkJjtGLDelTZYrpkmZO-FxdGwYMYk1b2G3b8zhFBDAWqHdvsrITfQvQF-ZwPexKCYnfJvCWDVScvJLLTzJVyCCND7i6cHSkFQbUaRMRxBvzklDlpWq5qyK5CL7AY5wmaE_BuHB4oq-W4wGi7AZUZyRqM3fK_7lUTfgUMtYZotjNtpQebbJ9CfnIYt1lw", width: 995, height: 796, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103454129274445539663\">RECHIC NGUYỄN TRÃI</a>"] },
            { photoReference: "AWCwydjIh-JLyayoAT-RFkcIgLS9aNqNeycyztlUFcVZ05obEg6ieox_nd9KxdaPtrcqQb-PmCFU8sAurjcKeOIWqk26AdfsC_QF7j5HuB1hJdnhD_JC4mYVHDm_U5noPKQzTQz6ArbIud6zeXuKyW4m2O5szcbFndfjGO94B9mkhqQaKDfsDqL9x1NC_vIjHLOJMH2VJeEiwu7iIVGh2dHUn3c9qFl50X-yxzfuB0YfXpN2jLuz1-iGtkD371ltjGR3lczL8IOrwiZSTcYPKj94LdyauamGs7jwbntLTASJcBUJVfj5HKEEWPVI4N79MdDOTWhvvi0pUPB7obCbCUZgJPLU2W9ySoNfXCVGoI9am5UDy6SRwBQl3uh0sdn1bIB6WxHrjzUIriO5pSiaCuZ1rw_IOfjRWabl5Z4gWTwppZGTDW02DEUy1TyLrxHRyc1m", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105224035110934809802\">Hồ Ngọc Bảo Trân</a>"] },
            { photoReference: "AWCwydgNMZGUt7GKA12FbSBt_BpHUst3bKAgq9RDcxn2fo9DZ0IS0UDSygsgfGXa1nwA4aAUeMop86Sw26HW6ParkGVsTvloX97mmD9l_r78qgJxaiF1fn4Y0r54mUJ83BgBGSdx9CS8kY-RMeJV26nHODLUkYaN88tuveiBe7WxV_P56YSDcczI9CxT386uKvMT6d2mLkSrondJhKnQbggNvhBupR3EgeB7WnakHaTo-G5AwzSRRMVrsaBNcxkLnfI2dsm8rKrAheTWnZDzMdcBr4Z1sVOflIj1YmeHhe_p810hg5lEDr2feMvQTSyJ_q9QdznPABGZmdE7nMJ3ygyn1nuUboWushcEl3MRXaAxnC-8LE4a0EPLapkA9MANNn_Gmw9gk7cGwI0PiKISBywiIK5FA-C-uRQadx0D6BYGeu-zoOLlcznIJc0SHxrRvXfY", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113434878146914191112\">vzoi Vzoi</a>"] },
            { photoReference: "AWCwydgzsbJFMq2odCmrGKtLP_pSAU4w-Em-hEcRaMyztURINMQHqPZE0V_RrX1lU13-KddczgEg64JtmdCRz8J60J1x4vSnrMU3X0aF3AoQ2e7yRxNC7maU7rXYFm9akCrtL4HWQrAMaNAhWaV2dwG7tNHzLYZDVRkXkRENtC7juQpe4mxWGACKeq8v2IyHPlA8CBxXbvoHnehWVxBdXOez4fYBsC9GTNggRy9Dak9viq2iKln3vF_1DUf5RWCOX1no8CCMC-6cjB9SEKqI8Iyu4pNhJkWx85dG7BqRWhxXGiYplbf3x_Rlh9GCUTmXknPpuZcF-E7xWPLHdkDeHOq85rAk_uCg9AfPWfyci0604tATFVObziRarkZv3wM4EXIOK4v1ArymBqJLl65P5jzD9_DzGMh5ZTSUWsvzGPJAClR7VV8", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108806884431172847672\">Paris</a>"] },
            { photoReference: "AWCwydgF8s-ZWiUzY74xunJ5ICvHT5af5dszQkwq65bzpNlL8oZeko-QdFaTAjwWa0AQineYgnVv4phkReoIQzP0DG_XWj1wmk2b5h_4b3VMx2gV-VQxw3GHgnw-U3P-hlXX2BiZvDcUF7kL8qY6mbOPVfKYygThRrnbvW683k0sxm0U-6XrBe11yBban_B4eLH2SOtmenafOUHym6J_ZRTBXGTVSkMhjOgKtxlceE9OWBOPLyQ9gOfCWIbnlvNWp4bY65i7uR8e3CJP0r2E2FhpOmxAGGYISbAgbu2mohPU9O4Tm52MS04IGlTwJILQZjcaa4KUCliaXR-H1Tb8uys5bokDFJi0KXPjkqIGVh-wKqMMhaKHBGj37v8-EQLZg6GHyfBYMFDGD_9Bg802YtficKtkcBcJi8g3-zQSSANpKmpqQ7UNsmZiic3qok1QDrbK", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113059409821699251274\">HERSHEVILLE CONDE</a>"] }
        ],
        summary: "다양한 기념품과 의류를 한눈에 둘러볼 수 있는 호치민의 대표적인 쇼핑 거리예요.",
        updatedAt: "2026-07-15",
        highlights: ["합리적인 가격대의 액세서리와 의류", "현지 분위기 가득한 상점들"],
        tips: ["기념품 구매할 때 가벼운 흥정은 필수!"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:30; 화요일: 오전 8:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/share/16VHYNHz6b/?mibextid=wwXIfr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17017034625842238141", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%91%EC%9A%B0%EC%98%8C%EC%A7%9C%EC%9D%B4+%EC%87%BC%ED%95%91%EA%B1%B0%EB%A6%AC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "동커이 거리": {
        photos: ["/images/ho-chi-minh/info/shopping/dong-khoi-street-ho-chi-minh-city.jpg"],
        placeId: "ChIJd4v1UUYvdTERLoVnpvnPDdI",
        placePhotos: [
            { photoReference: "AWCwydj1fn7wBSjitIuJqVEKr77ndX430yOeWg72oXusmvEdyn-2TjWUwFC669vCgko8AFNQVd5fObcnDnQnpEv5M20mSc2L4Qmk6R1miAuBPKaALtbBkm7CtOs4zIzEIhmgRdZdxjHzEFuR_oWck_TWIomZL7pnfQk7SFgWrV181DhtryHd4SCAOr8d4zPa_l9MyhBf9XZdbXdFNjzmwQEiomHgznboHLESxiqgTQFiDVuyiUildeZoOE2U3sXbIgTxAq1NJ9zhoBDSOL_jlrC1-6lNyGiuXKxqGU4lR8imQ9r1u_yv_c6QYlM8fBDfp-DK-vhtyW6ynxxjiZXLBep6yJTRpeEvONqARq0M-JZQzchhQOLwNtQZGPWTjjKlQ0bm2I4FNxSyS7KNVI6RnmXbowYtMJr6DY42vagUigQA_u-K4g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111797006812364068231\">DEUK YOUNG CHOI</a>"] },
            { photoReference: "AWCwydj-0ZN-MuNMitcZGdUWTL2Spo_wEgRaEWarw3voywogaY6dVMhVvB9WasS3xMkUtkEQC-fx77X1DFGOqLjEPgA_qczcSF2BWxbVVkCMGVu9x291wr5Txt1DEpES6FadwrbsSwLFnWSLlkdqxAOFOgZxopY4nUc-_7yLY0rvv3OgAh3k8pUkQmyBwLLI5yO-6VM9ylH-IN7wOC8uE4DpcWufXchnvupVG-PQ50lK6kgan_BgwbBqLSWPUH7domX_SdOjUCq9NLDoYRdpuua0NyV_KKVsWSHpgMJ79UKSgwdD2Qjd_9PDkEv74_AUhv-EvakAtlZK-OM9fXkdirIQPCuM5u9EDc61BwHap6-HTFq5OTX4APsyjAY4118aeb8XSX-NSZa3_Etqmb0KHGO1jf1ebdIWvHW0SJ5yXJEoFwF5pgFS", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101578239581353597930\">Thuy Nguyen Huu</a>"] },
            { photoReference: "AWCwydh-JrgVC7T69kVnYB6ohBm32UiVgrIigb2wQ4qEOGznukUgqyU61XBbxqXOaXHl7OV2IX31ZZPmrdeq-Y4NoD8dJPa3_jmJDJqX_ZTmByIBd_hWDPk961THCD1hITcWzMkeUAKjlAWo0zmbo-bZQm3-0j3hsZZG_ATViK-LNAVg8jstgj4fAMO02Ryd-cHU0a63Ib_CKdJ8lZW18yPViujhBInhJbUQseguWVn67y0Ud9vdc3h3v4o9pL71G2ERFYZtFiqBqXIDonDLBySU9z8Key5kVVf6acRl9Y12aI-gakxKZQZjbDBccKFvF7__mh_7ZTil1aDk9c5Li6fDNmTRrfJmPRSLvIZVP72IRsKq_DSV-DkHCizOOQSYuSfUoQzVEwHVIqH6X574YRWUqphAAD7Se7OQUXHsSbyvA2pMjP0Q", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114118451392288609524\">Pako Valera</a>"] },
            { photoReference: "AWCwydjUrOQfOXYWytKMtSizQ9JfCcSKyM5aiuIpIoiHAGpEo8iKgaZYxmS6E7FWpbg4Ij_RHwtXFmhim6leF_Ug-Zs-36lAQtfJxS69-QrrOcPObxK-7anCO_rItHv33mOryTwFooi4PrrWQSPjtODhkjeqqymt6YFmv_SW0TVK9iSoqPEIG6y3a0CDIPd9Y2pUl7AYMHUeXsmu0JqICj_0AkU1Ag7DwY69OZDzu6oYmb92X9WgX0HnxLLPZt8b1ftiQGgHwQqU1Ecma5NGENoWFTaiy8frN-jDBrErvVkiHsqA8V-3hXM52Op0zVegR5uE74uBkKcX4OIdPDtnCYWRXBsobT4dPjzA2IIuxf6kSa_2k8v5fWFMQKmjzzPpHiMA6OPtoPY_amLtQ-g8c9Xn5ewHfoEau4l5PtlA7o8coTevZ0wm", width: 1064, height: 793, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111797006812364068231\">DEUK YOUNG CHOI</a>"] },
            { photoReference: "AWCwydjZ-jJu1f0y-8SmdrXVvk2IcfDK0jrnamwATDv9BbQSLT4-6WYB-MBXezH4Z6OjE7Ycuhaq9fbIz2tIcjMC3rrc8cYr6VzXs69GIawG4YDZPuC8mCi-s9hbzG2E78Ooy0NJnquptGFP1FpLHfTzh6EEVxKni27nSDAOQgysKtzD1tPsHpy3CmwASUI31GU0IE-HWEx3IupJGfL-V-WWURV-ZO7Kj79vGT1LT-9q6etsz-hCutkQfUiQ0YN2OFBYW0W8qQby9kfEP_BtPmrJvL6H8KlMvkw_oSmImP3Dpn8MNK1lrvUfhgRV6TeG6LMO4F2xT9EP6fJvrQWf-OFw2HbsAgk59HjOtj10OP2x0GHizu4Kwe3i9M4htbSObBi_Zjr1RTfpvDrDpo0BMxVskjI158RNK_K1NmBXupNzoWqj2g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111797006812364068231\">DEUK YOUNG CHOI</a>"] }
        ],
        summary: "세련된 브랜드와 고급스러운 분위기를 만끽할 수 있는 호치민의 명품 쇼핑가예요.",
        updatedAt: "2026-07-15",
        highlights: ["고급 브랜드 매장 밀집", "쾌적하고 세련된 거리 풍경"],
        tips: ["쇼핑 후 근처 카페에서 여유를 즐기기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 4:00~11:30; 화요일: 오후 4:00~11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.meat-drink.com/tables157", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6577267715894152172", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%99%EC%BB%A4%EC%9D%B4+%EA%B1%B0%EB%A6%AC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이온몰 떤푸 셀라돈": {
        photos: ["/images/ho-chi-minh/info/shopping/aeon-mall-tan-phu-celadon-ho-chi-minh-city.jpg"],
        placeId: "ChIJmQa2NZUrdTERWx3Ui77zN0c",
        placePhotos: [
            { photoReference: "AWCwydiGjeExRlBlIPiIXMppDxHjpRiOAk2ry6I-pPBo_wxQJ-kZOO8kokKqWVkulc8lK17h2fTbGJbaAXMC6IkcMCaj2yGkJVDdvyt_apzDAfqRlvm6r_wd-a1Dx_WpG57nHcvvUAsEioyRcHmkxuiuJKnTrDlG2pL_qqaQQ3Y7344c8Z5qx-JFnrUIbDcKSz7vBeekZqgqbS9uAyTZXr3Cy_T4r0y1eETDa4jDYApPnfYmHGbs5QTReA-zmJ-wZRmY2Id7NAAKO92e-TslnaiL9sNsSGWHw_BGti1EGNy6lcTtHehnROPEFAY2UWcAheNVCpy-mlaxIb9iHO-GMV1lLne_q_S8DCaKOckq_5_uxtxJi9eWO5UG4ibVbwfOdoFLikkVT3zY1JFFy-owSxiAP2iEJVlS8TENfqSyZgXZXFxD0SX0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113642389565832393276\">Văn Thuận Nguyễn Vlogs</a>"] },
            { photoReference: "AWCwydh58yqmnEzxW8sj1Q6Rv6DRhzPlSu4Rs7Dx_vduCroNl7mjWM3wbsdr3ajhotVfMWnZGFZP4ArM3Je9qtMG7w1a_eVnrhKAmIzzBiukE0x3GJXMpNI6dvx7SzEmhKS5IqgRUIY6iVQ5kZ1efNRn_gLO16agvNl85d77ZOSRnRn73W4RhDac5d1EQ9paBnVjIR7p_zpvrbnMIobCuwHA6tY7c6BCLVWybwBbvs-epC9M4NRj8OQoclGBDjWpf23ChMdTQ-OTIugG9RHhCiZXWZiG2S3ZlaecN1kDHXGHxKG48-9lESJOQBo3Ej6wyZ3DOlNtJkPwDl7-mUCW7km7Kdhp4CC23IL_biU4G3HeFhsyseiBLpediusM2GPkUtyQJN1NPkq2U6QXL9nbnafo5rrZbnpuDptbQLipJpoaAj98YHFqaogDAbfaCvAWNefi", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105947649673209549308\">Lanh Nguyễn</a>"] },
            { photoReference: "AWCwydgCzH07OyAib5hajrJGfl6Ab58OtnhtAZH-HVVYYDWLjD9e8w5gvxgSOIj8XeUk89t32BDCN82LZyylFqx7bi56QImgPxOl6CodMfeckmIK_0HslF_kl4qhJ5YadHBYiVldiOflh04twAAfPErolFgyGWW4A26qqtNWq9GgIYGsdqJLCwvg8XrFxY37d9254qxnb-cpVAkSAoriQ94rZccV9yACAPYZ5YByMW_vg2G5UEGHs9q8wCPhdww0bD51v_-_buiJlVGZzY__Ck1u4I2Rb4-XvpTxRlC-IR8U9WeT4X4rAnpmPf7pGcwH1k1Qe3v_ZH3GsTDDlRsbM6yo0JkUM0BNPLjrKSkLRywQWeTzPKoRr1rVghNeRsn_elb94038BlN9_Cm4uX-j0BxJ2VzmPHo7R3ntu8H7Ile7ELrh3M2S", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114150410918627806925\">Luân Sử</a>"] },
            { photoReference: "AWCwydiFof6432i7gV3EX3Pe1o-OE5pdZYrb7Ro64gxok7KLXhDvN3BnML1RoruxyVdoMjk6FqP2nD6kAc_ESJ7lz0Cs1gscwTvjmeHv8s0S4Mol4Q5U1gZxRc78MrbSkQL74n2k7Cm0nDZ7TSQNhzNcoqUn2PxfctqgGCfaqxwChJHeTzKMi0VopDMjU8paqRAn9tKGKQtJLlIXRGA0c3qH3rsp9_X-aTMELn5GOROK-U5VZ6ba7MlrR6PIS3mlUy4VMeNJld1Kwd1mZ9eZ_yVvSmY-s0e0B84pK7tmhIzX_ugeQi6gUjF-VOdWokPre0EN_rgQ4tc5DJTGrpdkeKjNjX3GTrokIvVbLyejxZTNeEbNbLqOuvg9tTmdgM3l8q13z7ukLGc4rNIgCwq_wKdNx5-4dqqAcC-QJReMk765Yvg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114025428144531253053\">An Billy</a>"] },
            { photoReference: "AWCwydhm6xKiAI6JlUvmXPxK1RvH_3KFCehqHxrvsZ66bihGtkLK74zIJ8PEGMyMwMREQBtXY8C7c8F_j74xELwfkgJKW6rfePFrtky81jLKAZNpVqxZvJKOkTGYso29EAmE6nRzikuJdSnNwRaIr4iwmsPhkN38QclXcXFHh3d4pExX1ZbzmZYW7S_CEJ5dbXXPn4QfTYy_1ckckvpElOGXc8XP5euHnjIDGtUNO6KjkD-xy0M9wQZnGaNroiCC7yJxutBhw5isWFo2EKz9ovjJ0eleZyLYAKYJNaG09aHV4PA6u6kU1l5J2rGk04e6GBhOWHwFopshZRYOxE13LtKTJHzEnfno4oa33Dgf2-zNRLgQju1IQIpaiRP3IX_RQsSZLcS1c3hu0tlD9VXPXTM__GoCuXITb6aHqVyB7M_D-l0ftCo", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102523003799292655793\">KHOA CAO</a>"] }
        ],
        summary: "시원한 에어컨 바람 아래서 다양한 쇼핑과 먹거리를 즐길 수 있는 대형 몰이에요.",
        updatedAt: "2026-07-15",
        highlights: ["대규모 푸드코트와 다양한 브랜드", "쾌적하고 넓은 쇼핑 공간"],
        tips: ["더위를 피해 쾌적하게 쇼핑하고 싶을 때 딱이에요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://s.shopee.vn/6AhosrQLPO", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5131838300127239515", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8%EB%AA%B0+%EB%96%A4%ED%91%B8+%EC%85%80%EB%9D%BC%EB%8F%88+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크레센트 몰": {
        photos: ["/images/ho-chi-minh/info/shopping/crescent-mall-ho-chi-minh-city.jpg"],
        placeId: "ChIJG_kgQ4kvdTERvgrON-WYwLY",
        placePhotos: [
            { photoReference: "AWCwydgQPC8_VPgzJNzpntU7SwxWFnxfK0aj3juXzdT8F_gNdqaikQ3dSQrPGsmdSccPN_Vk8Wd2008nCh_1alI1XmZL6mELHCwx7K9di7OID4-C36xh4_u6hz3URGjW4Iuv9CvY2QOwrQZWkp6KqO4ptD11jFFUxHvZHxgxS5xAYW9fqWrm1Yu8RvEj1Xkp0_CIr_cENuFc-fKWpHWy5uZ_tPgxPeHdCv8tBGKq4LvXIMm3OHTXjRE-AXhpV1U5bvMlmlM0IqMl_j4wUIts5eNLye3Sl68nWKzfBwG67U47DmKWpjiyAulLh5NSZCFf9g18Gm5wQWncbiYBkiEKp6P5BNN_8_DX0Yswvvovf0W4z53NZNhIbbyRhWWfD67E7-PJPqNpgBywutUqGZCsFAbES4OT75jK5n11Riqi4O-bqBWKm5bHU5CH53_vurzfwa68", width: 4800, height: 3195, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115166268006793604850\">Crescent Mall</a>"] },
            { photoReference: "AWCwydhoFfERZlDEH7K9SaQDurn5A68ghSYWcJplpAdEVDW-fJvoONWE8aXLBK90dU7iXTwZlNb4H3RYY7WljZvgxb9GETJ5INME2igVOw50ynhFaDy_pOZJDrabnc4RYcMSgRq4_LQUr3pivGVLulPMJcH1-ma5njEfEMI9_kG2_xJwCbfnqrb0oKfg26JE9WElO1yCz7FqAIpeqeIpZNaOQ-M-cn-_4-tytHsJ6vOwDtzGasGc5DXgAgZmHYTdoWgxOoAW7Zj_MK4CJeivYEfFWowM0NBilrGaNiOJUv5Srz737Rt8YnQl60MWS36xYj_p45anIWCEOyiijDj2_dWXxnla98ZpOViP5OHiORVpSwp3ePwOnRNcHWaXJ7F8jB0woKs3C70T_ckbJ2UqYIrH7YlstknP18MxqFaFu0EQcrxen03fVXa588ntViTmYg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105751508859154488727\">Stephen 美成葬儀社 LIU</a>"] },
            { photoReference: "AWCwydie6sBKlnCYQIqkRAzGmwhhJ3T-VMT5ao9Rpz5UVcDLrTZTyIXwQOgygF4g6YHAz3UeTzKuTVdTOv9a8J2gwnlKkFwDA7zhWZR0neO0ItXpxaIKrxg2P5kvuj_8pli09o9f5WCZLzJENzTjeXZh1hlqQEUEIUFA48qGSYmbFEgXChA8vRpn5V0HHHs6T_InyzkXk1u-fsWjif7pPTT7B3M7Jygtb70metcmalewVvWvnZMHxvRNTxfp2VAqi_wUZPyshw_S_jDTC8EXryh3xmoUQku1n-rtcZPFBtFDn111UWiM3LE7OI8w75UemEo0OQ3C1VxZrEoCfiLrYANCsUzRLrXRV1_VC0Z2FpTJKNy-QymTwX9S7vpDqYLK_AzpWIRLx2AOelFrgd_1V2Qn9xE723PJNTjE0-Td44Lfr52VAA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118271046856087101537\">Brennan Davis</a>"] },
            { photoReference: "AWCwydgcjq0PPfWPj3Nypy8gUouAHPau3mN4WyPghPvfL01cX84Y32s2hiqE1tnw5pded-Ji6qUlTSoLzKKfB_o3C72oAIOWI9rLFz-cRzJrI1EQBOrJR0i4rprSX4zxEzgoYX3Uy2Tt4Kxu1euNcjBOF8DOSHJGkGULLEFLfWkFWEfoT5Qj4X41SVE7gFs07mtr4ISKXHr_NtUH_v67G1xMi0JBOJZd-Zz-GT2zIeHheWNnMclW2WlcLFs9hpHFXk3oZo3irBCALVA42IS_9zS7639GjM3kM3kNDDt1shRYqbbjUGoq6_M6Lv2iMEWrgxAK1WG2Rxv2s9vtYCOd3Bt9H0pZveOB5dAeCYJ-yg8Stb0fTAIZdpykKvstXt8yern0kFQ2et4YoDHYgZBYh6YmZU8VWcXImHEJHVCiC53pjaCWZA", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104856352017638145108\">Platinum Guide</a>"] },
            { photoReference: "AWCwydghEu9KlDXiAI8F_8fXrFKy35OseWt7TOubaj8iPI0KTw2CIndQg_zCbkN4I2UsbGnEUuC7YoinryQOzwbzvNnVfnL2FPQKyYi93ki7I8zMJXaeWz0QDbsDb0nCQyfn03VSUx7n2iYm5yn750wRufnvi3SQfMZNMlxe5ehlwjHY57wjLmwcbL7imfKgRQsu8cQacYBcryqaqdIrvSH4c-1BlJ-PhYWvsIUfweGgHrlcPn8pb6SduAlmEE7Z5w2BbD49rVKfcLz9bX9E3LsqjoCYj1FebvdBtN2zbdsBD8j9laVuYzgbnhzfUG6L1k_iM1MCMxkZ-ouMUtt-yucdv4xb1eEkNVusexnephXO5ugdi5qDdObZcDWgQ77n-Q4cy5fftgLweoMoakZJoBt-dH25BlUqIe2xee5zK1aGYdg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114247428987513572592\">Ngọc Sơn</a>"] }
        ],
        summary: "크레센트몰 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://crescentmall.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13168693420682513086", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A0%88%EC%84%BC%ED%8A%B8+%EB%AA%B0+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데마트": {
        photos: [],
        placeId: "ChIJuf9TI58vdTERe86UdaSdtGo",
        placePhotos: [
            { photoReference: "AWCwydhpp7MCbN7wJry8cKgoNs6OxEgIZ6My2mX1j1e2JuyCzqZPQvQZrBZW_BfBAdP66aenvKFM3gnFvy2P3Hrb-QTCJlEv976TU_3gpnSKYgHUeNSnLJzEP1KeKZaXB1wBXHqZ9CNpX_SuOsAhdrAYifU8RrvFBi2dre_gw9dE6xiQ43OOHHSkuBFgNs3wvPy0Q1rb0Oqbmwjo-G16MAggPDHaLNnJae7BzAyLHhoqKV3et7iwMFuWfGv3ryAI14mUZJZkdiEZpz3an_ypvygrrFkdGfOS7yzcksccXlSOjIOhYufsLGkmSlBKAhHJeFCnR_pm92TkM1ttNbnKUNVpOXbUGPXKDM2AViIou6HF7BOmls--vNPEARwndXbWmPOB7Rzywg1Y8EMGxj_UkJRa0c0QIdb1mi6ghUju8GVulLg9-uvOk2WwfKgLnycaydGP", width: 768, height: 576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116952654219211478126\">LOTTE Mart Quận 7</a>"] },
            { photoReference: "AWCwydjvxA8wFcrU3CCOe4NxFDv2_NDImjzblvQ7kVpHVXeDHxXRByZGrMAaUDPMsJPlWzqX6ASrWeHzxqgqAJ0VaiwhEu2VJc6IvcKj1Z9KkCYQeIORKonBVy6Syb24mCKITEAvtqqDr5yjDtPlNY_hDvidpcK9jR0GCsx774W7pWWKaveYfpelkaCHdF65UlOO_KiaiSaYUj28QFHRsndFR0K6gsNSlIdZGiczKGeHZn3u0XUGJrAyX5-_SPraZwIlu3EGS9R396pVxfbMiVYdM_SBmVPJORezTYrrnR4Spd5rx0pa3zgAA6wm_UhkP20l8hcet2mpGCR_w_0DQ5dioxrSI_tTj6OmcSoqREFb5m8nrbq3DMb-qpsuakqIy47EAma5C4yuh76EqsUVxstoV8mUfbwmlutK0r96ejMOdw2zH5Ef6VKOAeXQ9tEL10_v", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107767266783107327824\">Duyet Bui</a>"] },
            { photoReference: "AWCwydgOHATxkGxIgXXHV6ZbcfjZuBWxVTgw9ZCcv7ob13IudwY9qyShGu0eItZJwNt1D5mJt7RvfHCn4lFHDIwDSaB_57RrB3kZ1kvsd4lo8m5lVpljxpyO8XZ1hgg-8vTYuEjkbHnh7z0mgU_kzcJJOX0n13MNHXd3oO7sQapqIiix5te96Hirh2EHRjW5HxYFTB0DsaJHHrQBRNz1GqoNlCFlDRuwPqcXY7MzXK2ageh0jm4FKuaqjsj0yPFw7j2WRVX6oovFXKD4ZbTRE4Po1yieW9UPF6FAJtDAVlqmn0fNaopJi1X5I54BYpkH2QR0goseRCeQl39PQ0lSn2kK6BOu12biNXHBxh27qd0EFl3mTHMDkIPF7VIbG3bbcEtTDL7rG0kCGWNH7wxHfNKx0WEd3RnxcNQ_H85_PuOLMgOVlqkoLy7fua7h-RQkz6Q_", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116952654219211478126\">LOTTE Mart Quận 7</a>"] },
            { photoReference: "AWCwydgsywP7L9xin5pW56GLezZcwFFKsMLVDF3fII5JHkOodbrfOxYdLxjWJyeLYylw0qLokKMN10Ygenp7Nt7_cTLdzbWpzk_vMj4NHjsEFruicu9iln0JoiTBHsN084eTcH6PYiqF0K-fJugeTKchIRdwSMx95BUAMFP9pp0gsf3y9OyqJ4OxOFrCZ-RbP1LNVwkagMYWcI_sGwRiKJ1EnZTiXYkFkBpuU26N2ggMfjcnTTufDJvh-r8me2fjwl5HvprPlOvMn9NwqrFMFPuFr4ZsDTsCrL4OaAN4aaHfKD3A-ZXTh9km5PE6R1NvYsfmt2KDmbmv3oD6lL32vMMnTdxxxaSJp_eocCU14brD8Ceap41QNxhIVpvc9aaDY7pLVsR8B6T6lORk-DZosrKTcs3l38nIWepUqJgc4ze6H-LZuoaylcz2y9GNrZGsOYVf", width: 2048, height: 1309, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116952654219211478126\">LOTTE Mart Quận 7</a>"] },
            { photoReference: "AWCwydg1xSKQc3MadPPdBB0HjkmA7px2rGSoS_ozPV1VwtojGMLo4F0cSgRYda81kObucyn20FXhSCF_4gUwTXze_LVLIoidOW5R6LFqeBV1VPCgD_XwXb84dLs-TsuINvo53ukijGhZ-8WFFarkjpcpDTOqrkM32JQw3RKUAt7HK1sOclqO0mkbqOcFAivCMDgN3gxOjCnky3bAv9VMBfb0GY2-rgejJIR3cOVsXKcCBs8vSZBQ6dULKMfefttqmtpA5YOuFb8QBQDti8E1tvS7qKtDJhXopq_OdNcULOxSsuuWhEouQ1834UF8sI0DybA-5egba5mse6Zijdyhb21USG3-pOjmi7g75R41O0n0ZmvsXv1VoKLKD7kEfmuN1Nu8TW6a14SgJRTUem2cxwCrgDvyvR3DyPcr5cQLEe4L63D_z20lUprWerZb9yXnWos2", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116952654219211478126\">LOTTE Mart Quận 7</a>"] }
        ],
        summary: "다양한 상품을 만날 수 있는 인기 쇼핑몰입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 리뷰 수", "높은 검색 빈도"],
        tips: ["방문 전 운영 시간을 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lottemart.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7688943793501163131", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EB%A7%88%ED%8A%B8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "SC 비보시티": {
        photos: [],
        placeId: "ChIJl32Uw4AvdTERz-IptsnE-BE",
        placePhotos: [
            { photoReference: "AWCwydhPWjyqpDcX3xLQFCewLfinfiwYDEPCDhM2ddZCUdkHdpn3v3KmfDMMEHzJrLlCD5yPT1M_jsEawaa4O2F0TZYCl_nyagPoFiuk5ji0wWjXL-LonJHGtcd06pHgfmKk8M5U2XIB95h1Ot3Od_pnBGQc0L6ocNmWr8YvWpKy8Bi17gsbHL_loQnJmdpxpKK1cqgPFcvwS2FmLDyy41R-5meJdkMhaF1kQfotgOXIORIN_ZovlkUN3sQVvJG9DykXypVBBvtRV13tSFPBfhdFpSMxDdSXVNETSi4yGY8HC1keAED-4-g0L6CHZxV9P9y0MSbmxNNxyLIkSkVbdMuDqZJHWDo3PhjRx1gY3D60VkecoBSREaWUmYMpwAxa4iVxh0jl8MYpjK18v2y_3qhz-Kv6LSYKoVeNIN1sOusUWaPKq5s0", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113114601497214551025\">Steaven Nguyễn</a>"] },
            { photoReference: "AWCwydi4Qamn6m80aoN2Kd3UgaBNcbPJnzX9yhNnbsiC-8_0tDqygMQn4gSqHJaerU3nQ9-2ute5s8l0WDue_4l27hiOorTSgJaVaJT94AJZl4Hcd8_oPqy5GQeKHDCe0AjQQZysPUSm69nzEonuqHoiBuT-0tfOTe5Fa0OjM8CHTd5Jqkk5iiVlgRiQtOy6AmWbPfCi1YJTUpoNdSA8cp7pM0B-clpKWjPXytgq7goK5bVb-Mf0OSVfyFo6aisCYR7veSeq5F9F2ge-cLOxOH0w89LAcHmEB6trhAJPmgbxfk-xfFWCM0zNAereoIsyyp782KZeNP0T8V0OKmxE_58M5NNJtwn94Ca_Zzb9fut03Ta6vDtV1YiCYRlSzgha9EOtvpXZlCGKOzXHiVp37oTM6DjrJ2a8W1AdrYs_PjDXlHgcLTzV", width: 960, height: 541, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101423500175417762038\">Trung Tâm Thương Mại SC VivoCity</a>"] },
            { photoReference: "AWCwydjAwV41co1a6y33MiF-D5GI-kuwZZ-1SijAAxxaZB3mQLxmg-p0f1xwV2hE35HjpN9QS0hICGU2pAIDvGHcUrFyeyObS4HfgAyJ1M-rotgCUK3MQBBi1WZ9TBv6bwLGHG8Qc7GEfmzV96ckOoTYc4P2rlEPzHClyiT8yLvyX7zj3LlLzM3dOfoXpIuobXMjocpD9OFAWZPWwoKaLt3LDOfhnTuCzfAUxGEiq-F1g8i6dGWS_dR0Mz7-no4MwcNVhAiaySo47gGnl4jIZf5ZWnGUt2fWPflPuXZNqIdmUulHhq0b_lvQs0S_WlinaSGUhRS-iL_Q-fU9hBTODI4GrTSRSb4LtyPip83ZDV7B0Xwz1NC5wwhvSalpu2wKAF-R95qTSHC2NRLZHQaoPoBIXg5Nt9vIatuDeN9AInC7yljGJixjye4y6zICjL2xNQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101386250968102876576\">Tracy Nguyen</a>"] },
            { photoReference: "AWCwydg74YwSNyYedHsSThcOo_50VKd1yEpagPbvlnnNaCXvALF-sgkUUmARJ40qyrrn9ef0X0z4ot_spsFVWNh9lZJ6P9koXKzaTbetOfuLcx_Xi7OUB1bMHyrqtydVhRdB315OysC8Sok0LZ1gdfKg8D3IIM_EQ3QcSwZkGnZJwODIHHmgvyKwxsj7klFIxAm9z-AjfRWGsVL69LJ290sW9Vk63aQK2VY6BcDXe2AbW7VLsz6WUev3CsimqCmt8LK22AXH5HvGLHkOcrQOKKFprQAcm9dkh_BZtAtJuakQyRplqXSlB_OJc2bqtvvb5iXCgjWVB4_NoQLJPTWe3NjJSBb7W25-sQ-u-aPW2c-Cj05RurqjjkTorvAVQoJ9NsqqySIHWal8RdszD93vDMFamhfBeP_FNylcDeyRwTFR86LIORFl", width: 900, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113114601497214551025\">Steaven Nguyễn</a>"] },
            { photoReference: "AWCwydjawVdIQhxYb-gp3xWlXuYals5yCcH4EBPKakwHooDaLoN213D8wd5kouiUnHLHo7UJ8VUvU6FEBMqXLTw9kifzlqUBOCCAcFiwP6uxwk7Vyxhhoap9ZXI4hwdZCSFb_OWujKFiW8jBYjHypRTX39aw1htJUAdtdCk7eueKesP-HK1SQF8C3u2Dble54H4M0jurda6oziw7Fc4CF5nRoB5KLOGOXCJy7IY6lLSEJpCc2uxQe5w_G36KzV6hq-ILpziOqIdg50SYAX8tS1wWnx9uHG7LQ5bcxe6S6fUAAbt0r7nLqRqHOGbwBISq6lFsj-X7TGBD4VvcGwpFRAQN4jyeyjfa_8seg6NNqwIrIo6mlxlWgk99KD75bc_NK6TcJGO1M4fC6-04sGUgLnw_E1dtB0byHmORTayravksJqymtgID", width: 4640, height: 3480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116598322114769206692\">Casbian Enzo</a>"] }
        ],
        summary: "다양한 상품을 갖춘 인기 쇼핑몰입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 음식", "다양한 의류"],
        tips: ["원하는 모든 상품을 한곳에서 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://s.shopee.vn/8V7uC7gWA0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1295001263492686543", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=SC+%EB%B9%84%EB%B3%B4%EC%8B%9C%ED%8B%B0+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "반한몰": {
        photos: [],
        placeId: "ChIJv46B290udTER2KNHXwQFjPw",
        placePhotos: [
            { photoReference: "AWCwydiHUsTATjB5lEfmg4KkxkhlZeYvPhvCEHw25Y_MR4xVfjN2RAdJE_YMbZsENtgpxw5Z6P3bGkLO0QyD0xCHZY80aIoux_1ILLOGe6LVrQtpjAB5AAuGolCK5zdn2P4AFr8DfkCwtuioPQlE_wvOC1XaAwKOi8jZnOyCNHauB5YifuowI69xQMjiRFnnwiZ0amkPecKJpjQiVT2PaND8YzxcUkciOeylEKscr8xG0aVVGgYWbBWOsWKWg1JraNWM86DQZR-JoSnxxeDHcw51NhYC_P5y5XXw-l6SJKaLSJeNmwmxdW_brSBicuoYL0F86cHdUYshBko5EMBdanbZUrDwWzhQ7i1CZTUWl7PSxbNpvJCWcwV4Y_32XrVKxojtaM9DDn-eGGFL-YWv2Y2N0Xyp3PBHIWCYdRVwtX2f4PE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108015926043987637928\">Hieu Simon</a>"] },
            { photoReference: "AWCwydjihS83OkARE759kddfF3pFsg_PYqkPRnZqtYzfkZ2V3ukCf6akTFfqcmk6RqCG6U3ZACEDDted-2nFyauJ8EZVIKBPetrDHin1fBRswUuHNjurs-u9hKvpLV01sgw-91CMYPCBcYEBu73ptjqg3ck-iZd7jmPnQMdNtADh1IJD-6GZMLXIZqmDpcsVfQrUqeBwJZuKRT3Wo1_Lpm81Lh1sLIK9Z6QNJ0zEaghK4M1Ay6UjZQQa4_u5Gs6Uzhluc95d_fXhMH3EU5XwCGHCfw3IaFE1xBNfhQEGMlvf6Ts01Hiiqb8sN8XqnRVPgCFlhUFDI9_zqXPbcAmcsh2JsJCqwfWu3Hy4SRV8aqjRj8jXbduCkZsZm7GaB1rg19F_Ioox1a9eEgI5GiFoufT2dBt9aQPfD54o-bWip7d2soNBpA", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113888435647036814655\">Walking Saigon</a>"] },
            { photoReference: "AWCwydiq633mSnCMFwdT0Ie_zEx41ubcyZI8Z3SivXvlq-qgnvdsJxL-JQJwDjbU_NqyilUCiO7NHmM8U2G6q4quBTLM5Vj7TDg9dc9TOApCfQU97nqfzttzB9LIF5X7yndVVsLq6WAZr0c9yMXmFQtmId5JMtxnOt0zT40OYJpi7JtVsUSfTUhBLp1npnAcsgkhzsKSpzLOp5Hb6AH365XnSf6k7_pdLJ1f-JUKBievCaNla-0dbQZ8uQ4cDVOMvz0KGtPuPSxChvpV9ldCdQx8SCgLDv9tndsdKrtjflevYdf5bD2n3GFVaZbY7WKTf6iMMLtORysJHKmEcFfQ9T6HjeEkojX0UnSOCwUfZzrA3gDy0vzLZVP__zHkwKdKXMoiv9k1JKC8CQVyf33dFiKfYRdGEYCIKqfDqXD6AWw3dB5uLgiR", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112886909377205690346\">Bảo Vinh Lý Thị</a>"] },
            { photoReference: "AWCwydjSACfwLj4910BLGIRpyJ2m3Md9uYlatVc1Os-RFwb_nkWTVIddaZYi6_Ia0RZfvmBJUmYblcs2WHV_EU_Vno3HczszJtc3Nkek5JnzjO-1y7eujPzxJvhVosnu7OeAcIOa1r4oFJqLL8ZzQB-MjlTKxkIXsvr005gIlXoIgYNmKyq650vcID-xUWg7ymEjKL57a6RKKsnx9MptX4hOUyXuw1Bc7Gus2vTX3QYOHJ9dDSwxXFg_PxaEkAkBd496NystHQJb66MA3unU3wNIQaZBEDtUFF_v1jCJQxOCiB7fisn4vNwWMQgrfjYYqef1TJvdlebYJlvgO2Fxj_K4SdZYmnliAGF-v-cSsIpqsF2W8iEwaU6b4-_xI7T9NuqIUBzMVINomPxY-_kLnC3rw_-vc15IJHUR323INuQ5dDp7WBCW", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105945796674532397638\">Minh Tuan</a>"] },
            { photoReference: "AWCwydgXDc4T3NX_0Gc-ODd5DHRZ-3GTToLk4lE2n5RfPg7kc_rG1SwKidmt_eW9u3rTsa9psN7Tq6403p4tQudOMk4hMOo8MJ2xhqwu8Jf0UGnz5_HYuC4Mcb-jSuSrrFwGuHkGlvKR8-wc-Y7Gm71doE5bpVnO5a6D9cFal_ZdSH-xX89nuSClSgunZOby89lbGib70Kr-pxDnQuQNQ2WQX15qZ3qbfnu9ro4vUQVROj2ZIpFVfFz0pNxi5OmYhsNobqERKWH_R_m6FRUa9eO-315rHO4JWNIWQuWz1o30wBSkhdDYzbg2fJQjHTyeKWTHYu25CR_ohnq3GyZ8Ts7wzr3rNHPtRNlXylI0Nz-ehly8dig8BWq2q2frRxoell9GUHVclFjdYDkBXrBXFzTzi0QMf9K3wTjLhPOHWPeNgDBu7g", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114596029625182649295\">WORLPYO PARK (Phiêu)</a>"] }
        ],
        summary: "다양한 쇼핑과 편의시설을 갖춘 인기 쇼핑몰입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 사용자 평점", "방대한 리뷰 수"],
        tips: ["매장 이용 시 안내 표지판을 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://vanhanhmall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18197925710633870296", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%ED%95%9C%EB%AA%B0+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "빈컴메가몰 타오디엔점": {
        photos: [],
        placeId: "ChIJndICWREmdTEREsJQEZaif7E",
        placePhotos: [
            { photoReference: "AWCwydjWOaOhJgVX5fppROgf0V4VPn5NvxhaMBfCtT6yzAKAscMESYLuNexM1_q1UBgeG81TA8ufl2GbxurOCmYSAMPi0iHUkNrCyVKd3s5kUYvqCZQyxKwDjvhZD1umfr--_BJynlofrV3nWW1jZbi3z0PGvHlZrjTEBcpzeh5-jf_4PG4s4JdKDeDOx-L2K8Zq9ApNoZl18IBrTHlqxnU9RqwgLuxFMOoRz_AWZB9QQE8r-d5wyAGDdgku2KpOFivH2R0d_zI9zrLpMSu0FOMyMAWS_GqHiXftroQBK3fH2YihZVkHRP13MUAoipw8zlpsi_-okyfsxkqNo7aGB_0jpdMgPe3CZXBts9VfqwDbKn5s5oZ_LtAM3F5F0MaCjaTpxCv0SE7sn5qWHhJFh3pssv9mnJHtIpcOBP0A22yMnfca-Nr4", width: 450, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113015258371248348307\">Vincom Mega Mall - Thao Dien</a>"] },
            { photoReference: "AWCwydgpDaZplEpWDv7ADo3wArfNCd1b6RDiACSLpdtujpnyrQSn4TR1-kz1wcHpT_KxB23iRdhFKmDjoWt84x0yd0AM4o53l2JDieEdm_InDSiUXvjRW5mkV4O0WIZ3AKBMYyoWFqXijdGfbiYmAGsS88ZDa-SNgXHsGM4NLdvMjmoF48Ey0GTgWHVuUGOqTRJJD6uTVGv5phqVHpE_I85ncprlP0HGBfsmv6ib3GveNLNOdD8st0eULPMmvm3jA25F1of0gGT4RaFRJIt8_hDSEF2nAKoD_YxGtxdoAUfT26VEYv1iHLQ3ivQ0AbEQADEsSzyDFy8bMIbN8WzJJM2HNSTYyMXg7aCFhlvgGD7NBmcvnRTKszqPnmInRxyLETzH3JSfsoof9p--COYudstuy8qFIJsclynhVgrB3SEKWGrEF7yPhRhV3nllmHvFFw", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114608078730395078068\">Phi BOB</a>"] },
            { photoReference: "AWCwydiW3uEmYN04u4bmSA58ovG8KK1CGqb0E-RFIlyv-cPK83w2XFwzVW5rlTgktjYCUJiVXqL2Tf9eM5uQ2jkh41s2aUo0_dKJ-bAYQHhqNdFzOYQkjWpQQ_vgycc7wbEjohkiJRKA6GoTr1BZs5lxXp-W3KAHemuM_QfoJBj5qKYH4xIzw8POk8lL5AWZIFVI5z3VtlVkgELXh8_3GnVf-qmt6OsM4ytxr3pnLiC6Mw53_Qewye_yhTnAR866SYZnp44ob7yvanBUOr1e1Uf7gG0BPl9_kjDyJh9mEUQ_kaNEF47iC_1SElxi1Of8T30sOrgKsWmhC2ymtRgJBhPGvMgTLGAtTgdFwOlCL_kbP14rOBHHDGCWBniXfpC_5SEOBFwXOs0Ju4B9rYYfrh500N61RY0HJk7M-udIY0fzb6s", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103776996352983771075\">Huong Truong</a>"] },
            { photoReference: "AWCwydjSGHs6uJ3RUY4W1_mFmz3beIoPfxGYPU9EwkBNhOCziUVx_0PONK43hKTrHUvE0-lVMFf0UIzSGEdEnYlUfTSzZlc-PauiQc9Niav-A1Q5bsCAiFFrximoSjGZKa3FkWPc5qUBSRIUfS4M3V4G5Wwc4xw48U16tUsTfByEFwLDdmyFUKsEXetNqmTlwdbvPPD0SiVaSeaehh0XD7pORSI_vbNnbIL-euJsPMJ3mzR9HSyvP7UvOc9A3egZfGwG_Pc_Uk-lk3D25LqRiN1eqTbESYpUpqe7Wc0gqGSxcbhWEsjNFzPjN_070uM1Wzq5QlSIBEl9wAPvZoRqBuZcT03ugUbkTZJ5ksnXuUcK_vF5Uipp__-o2YReAmZM9U-IgRvyfdt6_-L6xZCI-vdTvS2zdGZY7SVCAH7S5ICiXefx9A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103660558583048586741\">Alex Nguyen Thang Long</a>"] },
            { photoReference: "AWCwydgnYNSOv5lKTNNjU4cXLzcVQgBOYjrzVNk85aO6eh0trIENqSDlbGgozqlNpy6foAHSAFnrOdBsoFoEjgorZRDXaTzwJ3Vkxmi4AWXFQSCX82u104tDsrK5gSPaD3rc5CqWiq4NNFR1Xm7SLuj9StOgdRgiMvjw8PDhCeR8pbCZ2-PeJczSi60CMwiY8_eZOeKDLh2ZLu0X2cNDPxDNidk2x-yK52FJb1L2ztqBdi-NX3WtkEZz2XO0k5HpmlbmSpl5qhlQPEyi27s-c1kMcQaG4MWzs8im1TL5qt5pA7Jd5nI8K7FHWtIjTDDY4ricd5VJtQ-Os6qwdg-rg3kxuqS6bQg0cw9W5RuuZv5WEKHuKDZOIxaqo5MZnjHC6Tcu3fZq3KT96Sh2naEQpbs_EEoWG5EVGdaxWoIj69FlnxA", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113653307200984405220\">Desmond Marshall</a>"] }
        ],
        summary: "윈마트, H&M, MUJI, 데카트론, 니토리 등 다양한 브랜드가 입점한 쇼핑몰입니다.",
        updatedAt: "2026-08-14",
        highlights: ["H&M, MUJI, 데카트론 입점", "니토리 등 다양한 생활용품 구매 가능"],
        tips: ["대형마트 규모를 기대하기보다 브랜드 쇼핑 위주로 방문하는 것을 추천합니다", "아이스링크를 찾는다면 랜드마크 81 지하를 이용하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vincom.com.vn/vincom-mega-mall-thao-dien", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12790120232174797330", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4%EB%A9%94%EA%B0%80%EB%AA%B0+%ED%83%80%EC%98%A4%EB%94%94%EC%97%94%EC%A0%90+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이온몰 빈떤": {
        photos: [],
        placeId: "ChIJ21B7zs4tdTERMUUTqUN2P_U",
        placePhotos: [
            { photoReference: "AWCwydiBgrwxq9Z1WJjpctWGx6PTu-ktT-tjYRfx8GXkNbLVVDfpxZqXW4_QvqpHrZ-zdCbxBgX6HsB_MzEINBF8zrQkZVrm3-09LCotClTBEjIIn-nb0eVa7vhqwikxcX3iwqS5wf95n_SEproph-wjkkL8KT8spXpdXXs3bmXsZOMLqN6MwPzHlPXmspKJW77EnmUEuQC0-7d_VCqfRkfruVgG1Rx46tAsVeR-g2RjFWaL0DxXGqwR2nE-g2sM6lf_KHHUR0JUgIAlBESzieVqvR4WjbsYw6Y6bQL7wyKZ7vN38jkZ7LPHd8VzZZgse26PEaJ4ixy2N27jjjyZ3XbU982StOWO7Lz2vqHBMkE9AuljJk-2zFvUa9qFVJbxEkpy0wZVmu1BdNe_wdHUS0Yy659IO1l52HYCAOvCkSOH42ANwFL-", width: 720, height: 429, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106394988529541876176\">Pong Son</a>"] },
            { photoReference: "AWCwydjeAqd1jzBvZ0dPse_N3Nk68zkyViBgejpnFKjloid_wn_xxbzaR1LFEM1YRwrNRjhbaq2rlZF6I4w4JvsSE-BccRMEHLiDMAsfIDlFaqXaKILWgqp7VVI34OENijnq7VcJMxnuwyAmSbU5bk7K--IOESC0hoAXVE2aDCofP9cfvZ0fdgjFBWnE-bW4I8ayD-PtlG5ag8tu2fq37BPsYXq-k5xncFpHRUSNXWefASRc9Bf1YjF83Y1VA1LJTg2AwhWUSijdY8HUjfeDEEESL1qOBPNk_XbTVQr0BUWwl9NPQBxBd-LCE_tkgSNcXmzGS5Nk0pN2eyq6NTzSbpHYCTE3MNZXIViQpTrDlXMuUFa7p_5GnBNB1MdmRG9y7N-FkL_2-v9VQ6ybMbgJexp2OxWg5k2cNStuqQxnqQfhzBGerMY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105797963187338613797\">Nghia Le Trung</a>"] },
            { photoReference: "AWCwydhAc14Sa6DiXk3jsJgxBAtaRMMzU3rP9yn6JyIfdnmo8XpwJYS86F46FuddxwARDWK8D7nr5u_TKAiJMV8_tJ-BYL3YadOGSyM1Tgb3kME-dKSoeh17dxtVL1LpcGiBkniVdDhWRwTZ1t7-qzUTexF2Z2LFvVZReJC93dl0Wh7ORgP7sNW7zm9ZeLsEicXqAIAs1k-8hvRZa5cG5-51IZSTjk0tJ_i_CJ1MXKh04C9pbA4AhjBG4di3bYI5K3VIPUIVnxxfrOvn8h8EfayX-kwlpUOtpcoNXZCkaXTMd3R5xOVBaR25gigZDdnkOLC-bpP7gDdqI2Qx317UvB6YYukflOfHqNb_ElNwyeBVFpRpVG-Q_-WapYqVUdqzudE5xv9I6GPyBeDS6NkmfodwQCwUz9wlE5-J9JWCgctWpg8yLg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107027850609767678296\">Hoa Thai</a>"] },
            { photoReference: "AWCwydizfrc_a8xN8Qbb25r1wby88kOzn0z5A_ED0FehWIvjq0n6cTpykLOWrKlSadz1FMl6fCpaIB6916JU6YwK8T9u_L_jcCW0jGfQl2k8R8iHmcmUAsvUiP-sjNNvn3X1KaIsTv61313zFr74pAfo2erqM7ogrwWfiH_k8gaqfu1NV5evMnDVHcqHgQUI_MdpA7VNSkrCKxwstq6ld7MLZoyxbi88Vny48l4l3h7PGjc-PtTEXkXQ-PvcYINfbaq4DCTtD5Qfd1u5ZS76DrKDmX5dHXkEVaqMcQsU375NDUZXvooq-TTHwQ0k6p3eURICpf-HXl_JC3dqhkdwpOHjuB2k9twUjjjs9OTKb7wqEBRA1Yny6g90Hjvu0Ua6i-wncdbCv-2-gTIBvnB505slU0EAVoiYasGcnV7PddpQ1Kjh2UDe", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113866044420891619322\">許Andy</a>"] },
            { photoReference: "AWCwydjEPbXlhTKuzmRHpcMMog_XkcOBuVnYpSeunUiCqnKVqDLmP9gIx23_sIiiEvHSygJasirJ8khy6vzacKThAVMiDOM5Yx_e7CyGm8vqYmlaB1Le4FrKW0H5r3oWAuPg8hMkG2Mq2bt0CoJxHcoCELrUhjw3GkHrDhgAemaII2L1NeYpa2yR9jvExBklI8_aU6XVprZk7P_B7RNZZuWg5b3ienE7MD-SoZHBaIdXt3NMGH-54KsX-hhMTEoQ3aUIRh1-uXYiefXcuWghhoV4sSAtwlzo35hjsmJxyyoKbMmzLWWsywKOmxb2BLQTuhRYJYNDeYetKzuzHfGR1BQiQzrlOhU6HV_TvrS_zn50L76qc5u7SInitt7imAWdC14eeRpRWkdSQaGXRETllrXoHVH5IEyqoJrQXK13fjAOfPOJzg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105603533655848904889\">Quách Quách</a>"] }
        ],
        summary: "없는 게 없는 대형 쇼핑몰",
        updatedAt: "2026-08-14",
        highlights: ["방대한 상품 종류", "대규모 규모"],
        tips: ["주말에는 오전 9시부터 운영합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://s.shopee.vn/8V7uC7gWA0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17671973495796614449", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8%EB%AA%B0+%EB%B9%88%EB%96%A4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "MM 메가 마켓 안푸": {
        photos: [],
        placeId: "ChIJH6-CURImdTERX2oCqYyod5Q",
        placePhotos: [
            { photoReference: "AWCwydgS53-L2N6EgEoEbWqfyyoanCGdZQiZ4vw8rPB82HIEEwxElTo8yTTyK7jFjbF1U9Eh01iaKnwgEFyykeze0N3nXUq-mMc0v3lguN5gBDzOmuxH26djI9rrWhOEmsUBp25WJhvzLrD82eDYKBV7eQZdioaOSa-a-UQouihWITpvI3YvKVSe1yZgvwBEg2o4rpOe9yzDDSwlhKwfHRhkPnUCWSbivTZqh0iOKjOe9GHNGFmP4qwvyephvTG-U2HHKLmiHv_IOBxyqvyQxgP8zpM_tRZ58vhWJ5TudX4s0RC5Yucezrjrt5XcrPbspiTOOu4cXHyos5YgYS65NRKOBVBmaowheMBmg1b15E5UP5l-nrr9020LcXKO_5xq1rSmhwuMm2rCNRIIFma5G8xoLlaQZ5wuFEfoyof8h5G-VtNHj1BWWvdg_Q5fS4nG5A", width: 1276, height: 956, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116187382279923811495\">MM Mega Market An Phu</a>"] },
            { photoReference: "AWCwydiNoZbKJ6rMgVjaJugYv_wE0LOgsh9_OnRipBTg0BBkvLu-3ksxEidrZizZ-NTlgDfUabGfR0VsiWwUOwMtmAdmMz21T0WcV4fdxTEh3fL0RYHBHA_-2_tquQ3bQpDREDj6aRQOl21Wsn7ZGaRguxHk7KSmSBrIJHK4I387ivxPGgp0TQGKQ3Dxq0FUSiJpFf5LFTj6JkOWgag2Ce737DnfLIbWEhMJ-UK3Xl3Lr555acNigRvPoEHmSIPSzTclzgtjuGB_rQNsdfoNgmhePvbNHsw72ytcgQtXdLbRfS03Oy1HVBLI-6jfAxzjtsV1RdWBu45WpMbK6oel_voHxO8IThbctk3yh4Cc_seBTpg34Dx3nQ8TjV306gqaUUQIORn9lePViZYFDk5x5PfqGonZ1ewKaS5ozATwdYW88N70C2OlUjAjnITiex1HXwMz", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114622574756518880929\">Vinh Nguyen</a>"] },
            { photoReference: "AWCwydhXYzVZ_wz5C898_pxsCFfoHNXp-nmK_xHJgR2dJ-Z3WVGJrjKdiTMe7bV6q1YjFckxkEwhugEO8U85MPIhkCREWwZXneGtop8y-ucLsyV7utk46z-MBw0gGnWksTSzXEwJHttN2hzqqoQXPif4Qo1NiHRQ94xfjf2mghxgyDemd-HYRl5HvDEippFQu7Z68azn9RelDvmkDhKnQ1TS9PPPIxVehXlg733LuF_SFWepqZVH_kuAylL1jhPpKV4WqTcVtZmOQ1ylqpXwl1HyFLXXwZ2vcns0gFne_xDBEu8eJi9oIEnx2CywCJmtmetMSfQYDU3F81nYcdVnXcQDqwLrOAoClrWRJMiLRB7-jWjtylvenDhxXe8DJUXCk_H4geeDzUvZ9ULcNQHKBQtN4U3I0XWApIitm7EYmUupxR2v6JSWFtJ1P-LfvkrL1QdR", width: 1284, height: 963, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116187382279923811495\">MM Mega Market An Phu</a>"] },
            { photoReference: "AWCwydhz0EX5dPyORNUJcRGI0YCVNhbiOEFgwJwuF75Lk456lT9R_f6IxZYOLMqPFFiwq8IzNd4V_UUU66jiu1gIaIaxrI6zL6uPtmX6LvbUX5hptzLlXG6vE6E-Bf8GHx1SH1HDfi4yClW85tniPQlQKYdanvQeSeZP1nqq5DONXLGfp9hGPF3KNbc6X8v8zL4vIkPoCJA2jIV0QyVA46ODB7XSX4b4vw-HRfU20uvpLh_hr-uq_UsbWY_OSyxEXmXzgdWfD1fTJd_JoE3o2BqzGdogKE_MT1TqR3RS18k5Ba6H0bkgMi_eiYl_3M4-Lh_nF5ZYvTvbcMNO4GNhlbb6fq5XiIsL0mgYhj6Ep9hzw4j7UYMHd8CPLyxhnK1JFXzH4FgqOREGQ2PpdgVYUVZCFVKg2iKqr3uiNSI0Z4XBD6c", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116187382279923811495\">MM Mega Market An Phu</a>"] },
            { photoReference: "AWCwydj83_gM8P4CBo1CzkapJkfvSjivna1OeKxOhVH8rr0h8zsZNPfL62cgsWXkbVMgFoOKpUh6vmBKqSR4i6w9h0sB9Fd7m5U-hL41MiXXWNuIwepMAWQ-wb5p2mEgBronHPwpdRqGKotrrax0Mho_4EEZDliRrmk9hAPLe9Va7oYdQQWh0NYAKlOof6WX6JXstoCxLNc3FpC6-vI5HCm-En5fziS78AhDRH0jcl9c7bVO8_ByGJ3X8arArOUaF5t2jfLrXaDmQHJeif4EXb0liyE2s6BruVgnpXy9kXg4EdT-ODScSsccRRcsqw2YLwvXcy11oqTVys_4cLZ8ujELokzpTOKoRT0JoiZuFbB6j5MP7DxOG_uK6ecAEA6LglSDRDME26t_3rLySnpLXAA4hIdWAIo0KpHRB6huDf1Zr52wbuHi", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116068727511478030499\">Thanh Trung Dao</a>"] }
        ],
        summary: "호치민에서 신뢰받는 대형 마트입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 평점", "많은 리뷰 수"],
        tips: ["매일 오전 6시부터 오후 10시 30분까지 운영합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 10:30; 화요일: 오전 6:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://mmvietnam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10698204761926298207", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MM+%EB%A9%94%EA%B0%80+%EB%A7%88%EC%BC%93+%EC%95%88%ED%91%B8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사트라마트 - 사이공 슈퍼마켓": {
        photos: [],
        placeId: "ChIJ7cEkeOcudTERAMKAMS71_RI",
        placePhotos: [
            { photoReference: "AWCwydj8w9RuCOVoILFQKRqhrkTv_LxnpsKz4dJ1N_51ghjca3198ntzXoKdxMQ-wwUBAhKSL3v6x6tCF597G6rjN18f_dQC-AkhuoU0f4Es_dPmsouPUfdqe_KOISaovuhTN-8Vol9imnx90zSVGaIC-DdSyZ_b52zAZ-VlHKlps9X_hx8GxHq9V29Vs_kYzscGvUz_ATKrVmp1JLh6QdsfuQJLeNkTJJStTZvtW-qRaIOSvY6G4XomfbcbOjyXuRyO8SK1o6cnJ5H2ms-IdC-9L7Wt1M_Y6uNARAdTBolk1oNITXyeDGmY_Umq7tLegsq5zAUThDHPuBWNRK564MR4DbKUkZqeESeRyqVMl3G8RjzTtZRMMl08MrFmuc3HnJbO0wCmZcjScmZ2w1IukBXuMES9LG1jr3HrJYXhYi9cbR6FBQ", width: 3506, height: 2630, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102718324027989289038\">Tru TN</a>"] },
            { photoReference: "AWCwydiU5X00gNaQTyA7nNTO5nN3hGrXAIjHS-Djarg-fkNmMh4QWIrBo1ZzXw76UpsOMe4GhfOWcpMcdkRHoJYLnUvbobIXs6FJ3445gNuWRItr2-hTkc2IaBwVa1P83AkHET_QkHxnjDq0jLBNk0EjrS93i7yu83fm4SlZPkmTWvW6CnX2uDqC-QU4f8EAg9HO_9wZWOxpAT3kmfZwn0MaTRGP7ej4xFKvuuoFEmanGWHJgo47-TPKFTw7BGXoSxJQFh9jtd0mZQt4P3HZ9en-kMCQgL2Y0cYFqqG4vMIx_0HQZZje9lNbyZptKYPGrYwOjD-sE11VxhBlwWxRKpjSdOjc2dhrIofBnBRsCdN0fwbGp1VFvFYVdqpPqmVCUZEXtc3IMIVZ2n7Bdbvt99B5a4HDYU2ZJrx6XkvVXCyll1Mh928", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102890346273919065545\">Hồng Phú Quí Nguyễn</a>"] },
            { photoReference: "AWCwydgHBmoLQ_Uje3ivpOukkPqpkDdOAjOccG0Ki6FCTKn2M80ZUmONfw3iUQ11W-15H8BK0XJbcg_pvxmnLkvEcjllG2rlgcfUUsHmJLTj2tuEQpdDlSQ9rbA0NIDQFp0qac8eUyO1mYz_H1n29TQuWj4zpu8WtiaZrlLplQ2LZZ-f1dnRlZiwFi8zdmGYRMewx49EhuG7VeUNlLwlKvQT5yMc1odrTICjo3fvSkf8FODREQOhz6t0il5wIS5wa_b2ahoGsDIVTKC8tqCF-MO5XsEnXzkBCfO4nqulWQ7OGVfi1AXPzZHGcslgXhlkMhYl8tfaq7PIJhRkrw6E4T0_9KkHL1bZnc0gKdAu-cXhpXBwpeFlsaBazoyIaEAs6mY5Mo0vUyGZKNR0S9KvIcIQw-LinO_V0PoEr2eDsS-2qRKjkg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112190599937977299975\">Wynn Võ</a>"] },
            { photoReference: "AWCwydi6jZQM2GS969DiqqOzwqxG5TmFHKWUKUOPBtgnKwXLQD3qt-lFLFSSgdn2_PfAg4b5lm-VQ_sHrve0qo75yNzJTl4nDPovPT9pMAYH5msfgNjIGocwtG-2chwiytLMJKZWExCdKAFSE3e4h187HM8321P3ubI2ovcxNMNAGOSQHkEFFxvKwlg4x71WLqkjqaPZLlX8dll8xQe7M8-zQK7_tNAaGSjRoNXOshbLe2MweuH9UPttJMI4yDWUY1irZckKl1mmCNS589TsXPngvLOyYHQd93coLeIxlx5iqpy5z5oRWotBm59EbYR80m1gGjpZeIO-mCA7TG6xFyo1k-S_JR1pGPGH_aBtZafQEv0ahKKGaFuftgWSC-55bfGB8U6jYeoqvOlznezSRsj62BE93bnAtMjdlrluDCYUKFSJ7w", width: 3464, height: 4618, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105074808946091830596\">Như Trần</a>"] },
            { photoReference: "AWCwydgTgvg9WOYjyaKrdncPLfYdy9xEot_c7LFbsD-XedYx19IWBjgGxj17wckdOxgnkzX7I_wmfRAA4WxC1WG8WnipcF4TpjQqqbogBv8rTBswxQaozRPRKfrVFaVNlvh0Iq4-aUPDdqABljZVVccK2Lf8bituPW3NOB1Wy2RWdg0-eaN07K-zcbVyW7EgGjuJHroRivSEVktW07wGuiKNRgnQ6foqzNPjK0zkV9UGcFYgsTCpGcrwXfDNYyciDHI3s0mAfEWl6ZRpRsnXXpqIiR8BorAp6UjA262jyq0Szwn2mAP-cUYobq7wyEgiDJVm4goI78yIqQRQaGTsw-fypQtsn_Up1Bu5tD38RgD-Ig8gpyBRki9zt0PDHK1yBIRXk8BGMQx9KDNeAC--FER6lJ6FjYRZ9Z9pJvQ9d7C78opkGA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117865779213512805008\">chung nghiem sy</a>"] }
        ],
        summary: "다양한 상품군과 신선한 식재료를 제공하는 호치민의 인기 슈퍼마켓입니다.",
        updatedAt: "2026-08-14",
        highlights: ["넓고 정돈된 매장", "신선한 식재료", "친절한 직원"],
        tips: ["피크 시간대에는 매장이 다소 혼잡할 수 있습니다", "수입품은 가격대가 높은 편입니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sieuthisaigon.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1368519440538321408", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%ED%8A%B8%EB%9D%BC%EB%A7%88%ED%8A%B8+-+%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Co.opmart 콩뀐": {
        photos: [],
        placeId: "ChIJyypNcBgvdTERQxBDiJBURjw",
        placePhotos: [
            { photoReference: "AWCwydjKATQ5NNgezQwDffIEMZcRs68yEuXSfpYeb17HO_rlOQqnYd_D3bg-qc6E0_H0nPR3Tlb7o6s8l_Ep4A19yr8dBmvnGDCeExvxlH623NVL6ry5kiCuURR190izYjN5oz0kCa35QfIi7iNgUA23FDWbnxYckqufxlaRd07DNNe33lT8onzQ-v6PrUVLS3mJKOgdm-pNj0qFz6zRoZnvCyiR-heOVUblXVJqZNJdGe26a9QtUmYHAAb5MB9QWDhaceFy_pnd7jOlmstNUybVNqtsd_dWozBqSa8DFYEy94FRCiZDCcV1-1Vb3KApPfRT3aW6oWIOVsDLh_vQDoXx-JkmGlwkFI43mHmwYRxNVeq2F8wdLcP-GPOL2-hBBkBox1jnzN5FlpPWoiVQ8Ex_ZbwPzzSpZ0eDj2EPlwhYoYKk0CGy", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102050655925274966813\">Thái Quốc</a>"] },
            { photoReference: "AWCwydijyYukdW_olXx71mLagCt0CT971SyTB9mNfw5Ooo7ARaIbuPCqoAQJcbWS7Oe3sN83yZDs0a-zw7m0R6UumioBbVB-E4FL2_nddR3g-Zg11KNPhrUHq6G-Tjh8o_edLRE8YxfDf8Rl4WYYxP_aXdIbM7mjrkF93SSdPUlO3Da-vxgrFZDtRIRVCErjlRguBUbowljhUEmTm5Qz6zWEYnX1Xxd-jaTinWYRgVzq6_y-Xu_7rlV_c1R9xqRLfRMcVYbsBBtkzh0iLNmvy5I8ygbdsHUXqAEQ58ViAw32q0hpSDkVZaeMSJlY4SvlodSo-3gMfHnNOhaVC25zz-ktK4JUs0C23vf5_2uPyApwWBnVJTbTzHFOyoY0RgUTLHaX1A3q-U213Bj2f9NBFXSE3I8aJ53PEjtq3qKBTqHAWb6v-4A", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107328059561530779274\">Đại lý nước Vĩnh Hảo LaVie Thủ Đức</a>"] },
            { photoReference: "AWCwydgl8fB9SUnbkpYijStCRNqau6P4RktK9qWi9w8pvSMBr4VUlh97QYpJ1iL8rL0yTpzqZTnqAEBo6hoQYqFcnF3PGDU2kMbmbRuQvXT3jq6Iu14_N_MFyoTWrKSP5cD2GDtO19pLd-tQoWU_n6mpwV_YQqEEwIsFR5dZAdG4oqF5GS17D0rOP1JPzSPAf6V9LqX14Ezco4rDyNTCx8mHSOCfUYi3qTb2RvezEzqsvkEEf68E5E7BhWceZ2vxnQvNayLosz8f6Def9EdhvtKImDYnsiV7KvgWgthD5epCSeMkZgD2WhbAyTh8KBL8mUnytouWU6nL5WAO5YhtCMbuONNP7UDETcQ650ryK8wJx0Uq1rH6seXlckWeo0bK1OIuC_tXO4mcf2SOvq3zAQUwJ2u4UAhGUjkpyeUEOgjWQTX89w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111097398661595668412\">Yukihiro Matsuzaki</a>"] },
            { photoReference: "AWCwydg3YkxfwGYO4Ut5k-EQXZ7YGd-ZN9jFYmVA5t0ZT7f1IKrKUfFwHb7dmjfw8P3VRWYxCcSnhhg6uGfQUuXQ5ZWeJM_YQPOTOJTTsOsnXDbtodAw9UsyAk3nJeID4U_ozjaTYZD5_6njzOadwpp61apxJSV6nw8ZHMiJV_ByKWru23dRcypwgep77u5F2kiENfW_iDOYCCcfqpRuuVJztrRLizcN0v6P5Q36Ojp4m0SHPqMXMspFlgY7KJL-nNj6f5Ui-7psUzI845sXvZP1RtXewoomZccbk_BWFmGj5GkdpdrFucqPokHoIuGoda9NJTnKnyutjN9_Mam9hOnigaaVqjHCdh0rVfsismPvxC_LNV26TwoAF2jrYyKngz8D2BpYueZ1KY0uLfIOV571N1TfVP0rmnNJf_FXMP5Usc-Hpw", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101881165420521266286\">Shayan Givehchian</a>"] },
            { photoReference: "AWCwydhavMDzIdkyeGX7TFpiit5q5lyvKDfPPcYcR6pQYLRsgdYTU06flnjv8_myXfEQRY0DGEaA2rT7SMrHcWPANKbybEccr1Pds2YfT8ULxFaJFCFcORayuv4sA3wrc_6Fdp3GKHMG3wCkapYzbn4Wu1RnQyJsu-bqCgQDIxBZkdhZ-P6NY80vSPiB9830A1oTt2_3cJ8W3RgC4H7bO0XvvellS4Dln05feLfjwJE2aOxRR9V1BysgPyVrJp-FD_zXQALvAp6tI6dnef6GARJZ_ToUcnf2cZVTzS2ppQYEJpAVSpG3aimdhnBVRQnJc2Wt5WeZ3RAHOyivA8R4aTVsBwUkuvPiFYuNDWFda4vrq9kssSky5uy78RJgpLUmXIjyErI_wI9FBzcM2qT9GnD_Jn6ca37g0WrDzIjCRs1OJ8_H2A", width: 4800, height: 2707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103198517670193898541\">Chris Tran</a>"] }
        ],
        summary: "다양한 식료품과 생필품을 갖춘 호치민 1군의 주요 마트입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 식료품 제공", "편리한 결제 시스템"],
        tips: ["1군 중심가에서 쇼핑하기에 매우 편리합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://linkbio.co/0988039039", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4343251870383542339", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Co.opmart+%EC%BD%A9%EB%80%90+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "GO! 미엔동": {
        photos: [],
        placeId: "ChIJEYXbxdoudTERmicNXLKNtCk",
        placePhotos: [
            { photoReference: "AWCwydgunVLhrA1Yx7RIvBlayXyQL3IVFSr3DgtADTqHoKINvky9oNyYr_89e5AgqxcFRlvwZnNURadRp2pdhOnPqkFahgwroKOQYs_4wpRP8NSRIaXxnHB0fyfXWxcLF4kDmp1NoT-fvFoVfi2eVtijGUhg6TZhVFQsg-tkSwB-4711Xn4Ptyti81nNcwhYkgHbJbzqUR3bfOy3ZL-drIdSxKJpw5mkhvkrhAM3uo4-vMtQE2TbL9sMppH3Z0Wg9XYJitf9epDW5JxOXJccHSQJ781y20VzMNv2ulP_jc6LzHgR7bOaq-QwfZ4wBPyVVofPWtrTrjr7R5G6ehU13SDy-lrexUL1iOrYsmTa8m8KmS98pXtno506NCag9eOF3wAWxRLRMy2_HcJbiEpUBQpxZ2Irl5DqsLDgRuuBLrHtr78sdre7", width: 800, height: 532, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102819997884297202090\">Trọng Huy Lương</a>"] },
            { photoReference: "AWCwydjnRKDivAc_gNrma_fNlomAcjnjtUaTnaWbFLENmkxx3YRwp_DvCjxW8JdN2udKtEaR7XXvfeaLLiwNHyjqOgtCh3zrR1nZZ2AidyIsMqfkdQ2fJNDjozpmcRQC1LZZrDK4EiFDchJHdxatdnF0a_9WywK6u3MV6LBynRdOGht6bK1V4F3Uky1MMgAsBd-2S3up1Z6nnPDUU0rG3WAiOgnM4BssqDHUlbEoUmJZ2uRaA9-hsy-bZ6x5N3kqpPZ3sTu5C7uikGGfXbYdPOl4yWSUsrs0bk_Tu6XJg7rCl8uDG7hJhMB3y-UIwpD0_TKeBMbdm0LvlhTXf2d1Y8GvQLRbFxDWvXhEbHUKMIdvROUp0n1_ZzxlXkskZOa8HxTRIXie_X31XJceN0HaWT900Zo5WbmPkvlfaR0-GNLRom-trMSnBE4-6OTkv3XuZA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111880374353850126940\">Renee Ong</a>"] },
            { photoReference: "AWCwydi4oc12W36FWVVDkObTmBJBtGthqtTXxnfQk8pRH-6enBFq5gtAi3zu2f9THylWWfD6COcXLvXYZNYuCTzapCCWgPjYyIOCdGaMXpjhOCyyrGJ-058oBIbpZmJINpo6TgfBjCSnTZH7TZlaeWroShmo3OYO6agH_TJlnc2ppQqQmw_9yD-hdydEfrmXss_5zF2og5QHI5tLb5GkIx4Kuebm5Ygk9laeNq5xKdTJZEdqOJORHQuI4gZrLsZICtZsRYP6Bj-Z4zZqqfpXqrMEhJ80f6tX-yQAK_7kGM-YWVeY_xd9K4ZuMDFItvOtZbQ12zkCJFgHTwXqOe0TcglZDJFG9keoZ9tQlGiwDOZRRBYX7Zzzs342ztunSA0tqQg1SWjdj3A61bllUaFseYqRakwmeBvaJ9fRd7XacX-TJ6Pnsw", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101927580121846625227\">Hoàng</a>"] },
            { photoReference: "AWCwydiRKnZbMd2hrsqxcMmdT5izCNjnLSrNQWJU6Vt6Z1XDUZz3GdTkgfg7GmDw93yzLfiuJPpMIjlruXxFUvOwoD8SVIK_2r9aLRDqoQBGPkY8nZ9aiK2JiTV0GIMnutrezhF_s5hG5bXSPdiFV7O6DJ7QJofjt49DsChQIfPY3saKzBpDCoRZmVnr_0o8-FYsfXPXRK4wRoILy2OiEefCnCPpGA_mn4L-2XRg-e0sZuV6bDSQIY2plvh8DOazQhsGBXhbBREcLmAKcIUTsnlp0pH46K7yN9Om2KmR07uRpBocQwG7lDB4lUhaaFb0SqaXfHskgB6xtiDu9qcNI8mXlCm-PDBeBl5w7kx87nuu49XGp-fSsZUd-TjkIx4JbudnBZtuy2CrsQYtyJl8DW8waG9ee8x0B0IMydxbmka5zGvsMg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105492416737407836439\">Thi Truong</a>"] },
            { photoReference: "AWCwydgBxkZwYda3Zt2qgG-zZy9Ki1CfwLT0U-CWnymcT2L_7mL_oHs3Y9K5zMTF-GEclK8lJpk7Fb3p_AnmfGVLZTiDTfqUBI6K-J-2e-H63JYJmBbvSEjDUK554wl17ug6cC1k69Ql_hTmcJ0LBUUTmmHMY7K1ipke7XfvPMV-wJ7oDc1k9ihvBarKXUUbebxlIA4pGsp4TSbHrQUxwU3mrimqQe1t1b0GDLcUrk-FQLMWmiPQC6xWwDjLknP8dFYhzCXkJHAxJJ1SU4CdJC_G_jpiGt2jsnmxNrcdUWSM_FO-qjykUMCF4fNATE8HVSRru9D5U9eycVsPR6Tj_cDTEmh2bX6SFAkZSDhAVkDZL9kg3HlOqRfpUXQj0YUyB8VBDWbBtFdT-G7Z1GVgZgyIvorE7ZPI45Zh87sX5axMgKcqoQ", width: 3024, height: 3735, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101803089271730087185\">Helen Huynh</a>"] }
        ],
        summary: "가장 번화한 쇼핑 및 엔터테인먼트 복합 공간입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 농산물 및 채소", "롯데 시네마 운영", "다양한 먹거리가 있는 푸드 코트"],
        tips: ["그릴 요리 전문 구역을 방문해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://s.shopee.vn/8V7uC7gWA0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3005182648551024538", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=GO%21+%EB%AF%B8%EC%97%94%EB%8F%99+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "윈마트 동코이": {
        photos: [],
        placeId: "ChIJlweTd0gvdTER-a6X0aJugys",
        placePhotos: [
            { photoReference: "AWCwydjSVxNJ2EFCoDwpYTyBKiBq3zWArQB9NIwCMvhBuDcv8wnxzTDw-BNxGgxusw_DU1BZ89tRIx_ksPMGAqJuZcg1pdhAl5IZ15nfbQYM9_4LphvcZbvm98miVM9035ozsbNds_gpfIRihBMVp2dknPlwsAS_NfOtSaZdRGNYk4ia3GGlZyW6sW8V7J6tAABuS6IvXqvs5bQFWuNmleeT80_606WzU5MHA_ijgK5c4WD9rbLfdgDesM8MCB477phI130ODibY5xSN-Uc00rEhKjBJXJAlMlaMDTcKabdpWFF5I8mlwOty9R4CKjjstcMxnfyr0f2kLwiTlhto_9KbNq10uyarefQcXRIXTh_TrwCF51MamiX6HNZl5g8c0cqWJ2nXcFnwIpA89Fbv4343kkbVzUy09qFQI4EuVlLj4vk3RcrnCrcuZXEmQEw4pA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116376245671888623077\">Thảo My Lê Nguyễn</a>"] },
            { photoReference: "AWCwydjOxl3tlDg1Tr_b9BBYyJrWqanWT1K5zcG82uytpFiS6xi6liENs1Y3bdFQsTggLoQdXOI3whz2pTsA67q4ipt-kR8cj2dYIbBTyV_WtS0En3EAgxEc7pJ5Ucb01eJgJTI0hwZHBYbzI48b13DbTJw5-5Tz9dEOwcwOuj6lnbnZ18qQ809hbGCckC2W52aP_KdH7usAHtiIpJoeAhmo6gZ1-GosCf19Y6jOdl_rlkoLc77oxEhhMn7mByuhzRhpujXLL2oCRGq4MF93_hja2TT5U349EI4NV5KQAuGpKlGXkKMrvG1_ZsoyE6YNgUhoc5OTEIuUOSvW4fAclCirUcnDd-4aKjI5zhDn0gFtcv4sncxZqPI9qO4iVKZR3u31IfO9jF6njVM12Vbmt1HGgGqxPR5ur1rq_0lOFxRLlxtNBQai", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105813461580620482751\">Ay (ay)</a>"] },
            { photoReference: "AWCwydgccDr-42YHTePth1w5jSe5BEdAY_8lWbpiGWjgUmMDP6jwXxNBGwki8AKjyx_lt8z4_grIcTcPVN5k34-D4OcWkeMmwk1dHMgEuV0tttMjEIKkKYosMzXyrNAABDK2ZMgerNGZH6oKHkh-kqMpNOUmJ_saErQFaLmAVZwE1icgLadrdvsNKnrHbKJA9LmqHX24jdwRlqbugjakuUMQ59cj4SCml5DvJX_phkZxAxmLA-d7UoK0bZxN-pKNzA0mXRCwVnYko_MsecSPjtYimCopTiNy7A50OsuQhLaPPY4Ug5bPpmHYMSD2NmXNSp-wilqr2zrTg57Rje_QisOp48Slj3PZXyUNktB1OtmASAeRsUK9lreZX4pXzsGZpy7rBnh779GY3DqHeaO-MuDyMp5a_SqDqg2LbIBNl_JHV3eZvQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114204459806338709948\">G (I人)</a>"] },
            { photoReference: "AWCwydj45DKUsBrUziXxu_spr69-KaNschMh5XHWgiUAUcNlKWNpMYBBjUJYcL9df0NPPmCic6WFx3uWkf7nH935PAhVqpLIxaRhFWbDevlnuaQPW9vqVFb-QRphGd_5AVfvJCCVIE3w3iUe3KdqCTKO-_MyYGh1MAP8cZIhlPoD-Cq3joaYkfKZnDLnUrOZNiwn0EgeivW3734aiwKIqyy55IiKWcp8oNOkpprpCD7YyZ0UMHLX5jTL34_4E1gP8-7Tun_GVuyXh24YO-0qEsCeoRw6KR5Sc4Et_V1mcxym1gKIaLjkghgdPTCkLarLySom5ro9GoAb3BLxlzNiXFTgWUiffyj_NfQXx4EE3lkcGrI6LinCpd2i3-vMbg8DJPLfz0JuE3oXsDb1jsRL8IjkDegZT9XPzLtpYBWeQ8kON67GNak", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118119525043286062929\">Will</a>"] },
            { photoReference: "AWCwydj2S1aQA5zLOZFgoY4XD0_brZ0pOA3vXX5Y7Z8dTsqJpLuP40eGTLFpAyJwat1jEg0ytiYkw7qauW3jED1_U4u_5z98JP_C0kj7PwwrlTBU-lKbinD3EJ4ZknwbSbg4E9pQTKICmGYuGw-kGU3wXalLhDI71Mbnw1x_GZyxQrqD6jLhCHPStYaU_BXpSmUWJXLjRWDP-n6aZ2qC2RnuryjzngsL7VPwnGbhdYfb2xCWxSOetpI3Nla9t0QHkiuNlhB8sXnHM8jfrU-xeeyeOKLZjZNFofTA_whVYYefkY5hJzwg2qsFmc0fEmUa6z_HljvZFWo-N8Mu3ugYqjEgCrN2DBng8c6dSU5L7TuCITbgwCi3hqljO9NBRbK7YJDL0VhZldOT6JvN0HTYSce-k_Twe9z2plr6Szw0duX_APb9wAR0MyB6ctfZZkZA5YVE", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105813461580620482751\">Ay (ay)</a>"] }
        ],
        summary: "다양한 현지 특산물과 필수 생필품을 갖춘 호치민의 편리한 마트입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 현지 특산물 보유", "친절한 포장 서비스 제공"],
        tips: ["H&M 옆 입구로 들어오면 B3층으로 바로 연결되는 엘리베이터가 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://winmart.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3135471411160133369", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%88%EB%A7%88%ED%8A%B8+%EB%8F%99%EC%BD%94%EC%9D%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "키레이 & 한사무 팩토리 아울렛": {
        photos: [],
        placeId: "ChIJXWgITRgvdTERulrVJEkm604",
        placePhotos: [
            { photoReference: "AWCwydhm35kwVn8yfkpHVUCdLsIcYLLTYrVP9CpB1OOPDfPVuWauBNDkUAPjuqiMEepap0jswHdnR_hKOaYJfIJyJp1-H2URN_nkbE8Ec4EWZLneH5UCwt-6Huo4aWb2GdgTiWXdGZSNhqeZsrUfwgk0cq_jF3sblDSWfc-g_bhK8rsqGTGQYzWolBW3oWWhzgzZsuWptBj6X2Xxs5V_9M33ELdcJ3_d04GFznSsKZ5uVmTQawCxV6NqzYUt7CHOrySq4cze8C-Ea23C8JZdoMDg3skWpn5s2jErS4SI1rY7kFi9VS7_kB0QtglCwHeLQxmdS7CRJhLtMXVcvoauTZ1n7Zg27p0zsTGHaJ8l1kXU9XRh56KZxjN2OA224Aujix0IaAFVZxogPHD5-M8sjEvePgldwJqohGDTptNQ_AbMPWSjE6K0rKIwfSX0hc5PpTSx", width: 2560, height: 1919, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109220964370035133465\">Kirei &amp; Hansamu Warehouse</a>"] },
            { photoReference: "AWCwydjPHjcZdYCQrd74YNwF0otSc-KpJoer4ahWkR4B69qpdg9rxSetUB0r0rvwCd_IOf0xW8wPdr8W9Th9f9H-7Px957vip5dM3qNOQCBkIPaHD7Bd5NSaUpoctB1fAsPKTnSWwbTiw9aHctItDTZv-W93fGHrMEgAmGwbFisWQGw0QliCOCXHLtvMmPD6u-DaD-Ea0K_gxV_CE5dpv41d2AWaKcKXMw5TWNUr5MydVrm9dnd8VRbSqVCGXIPi4r2EK4AKdMTcca2FQ124pOZrueKD6VL1TyfKTpSZizK4yZJ5KYw6v2qE5J-1s62clHmleDVGtd25VMOiUc49c8AjDjS5WKBPs2DAY6LxJhFdCf29TZBK2v3Ub5XxrK3kBzQqp9GGDkeXRjm9QscODuFI5sDsNBRMZBMz7gWw3XAj1vO23F0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105431614601524849669\">Thanh Nguyễn</a>"] },
            { photoReference: "AWCwydg-zS-a-hFvgPZIiBNAw21oXjFe5wPKGVCnji8-TjfuFHg2lxegR_i9geWEL0vAlnh7a35ZZavMnsZ0GylKDvhAlqvX_7J_U-nnGjVLgboE8zznrW7OebGWASQPjp8Haea6d2BLyXC_PJBR4sbpJSH5mDCa42kpUryEYCZd3emQ1Z5DCYDPXeHLBNJkwJhIrgLSYJQ8cbRyDau6zkpKTI0n7xAHWc2LVYuAZ2YEvwJH-e5qt0PzqE94rZLNE92l08AzDGp84XVcihv9IX10WVHCStRswbAAbcm9QiugP4AvG5wl_VLrZPNmF5Sqg8xaY1pBbf4Wwlo8Ejx73bfLJ_OA50-KVKFqjOecNB2UxPcMp_v2DezmIs30PQ574y3ILBUFGCZF42hNFFVKe815r-90WVeJWJZl0-M-90eyDn5ntb__TEN4N42isQR5kw", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109220964370035133465\">Kirei &amp; Hansamu Warehouse</a>"] },
            { photoReference: "AWCwydhWPs8lfbQBrEYLr_CRMpmLbt6Hh41QHEU83ImgO__y5SM9xo5jTyqy8el5UZqJGBIbO3Z_UC-ucJVYDIAJbhELV4z4uOYa7dMSDSoN5N4L-uA91fhgi-HPTeG8j_OQRtvlErteOaTlcQ92-_5mTuC58qz7zWEsJQgYco7ykCZMNV0utXKRaC-lF4Vsk7YxUtPp0vS36YTA60S4eMLe_Ui-X3FEBopKdJ2LdQrYLSjCBCbTjrLCKwpWSNxEfhLZhVD5MY7YdyiHPvalQqKHAY2R6Erc5VecYobM7ryiZngYKJx5Fa90jyhkgO9r6QfvQnmg_gD2plWkWBpYTPlhvJl94niRqsAEi_agVf4XeVbdRHuomJb4Coy1dLFjFXn8EgFWYAnk2-2ehP1BdRUR9XcomwN1gL6QzNflBFq3ePGhcgo", width: 820, height: 818, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109220964370035133465\">Kirei &amp; Hansamu Warehouse</a>"] },
            { photoReference: "AWCwydgGx1oHRSVmX9OOY9bxI8m1q0EVjONigrh70lw_PdTiDsEd02RWAdKprGlgVV3iOzTm6uAPxSWoaFHhyYCccrxEIvAGtTJfcSYXuPWVEPrjdEcqaX8nJdel3iKNIady42ie7AC02Hucqn4wm4O5GAZFSod6vBzV_bNUroKK3F0sTrytZ-d04msiPhATBlAWOq6mX_1rb1n-p2He8CkoxzdjnplJ56BPu65Nb0L_OOBKABcWsAMCb5QJrT-iaFtyURElNsDLF5BHq7bmbmlpF1LV3mYn2LL0jS-x5eYyVHwLpbl5bvYSQPjSsq1mi6HixluyJ6G8aVrJx8hcBehNz5TEu6WGwInUOHWjE-ffZlXj6ZT1WYI6wCrM4W9a17BUtIuABC7peuU2st7wf5ztOhVY03I_Wo0EP_KL4gqbJuA", width: 2560, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109220964370035133465\">Kirei &amp; Hansamu Warehouse</a>"] }
        ],
        summary: "다양한 모델과 편안한 착용감을 제공하는 신발 전문 아울렛입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 신발 모델 보유", "편안한 착용감"],
        tips: ["1+2 프로모션 등 할인 혜택을 확인하세요", "직접 착용해보고 발에 맞는지 확인하는 것이 좋습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kireihansamu.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5686681050077813434", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EB%A0%88%EC%9D%B4+%26+%ED%95%9C%EC%82%AC%EB%AC%B4+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "US 아울렛 스토어": {
        photos: [],
        placeId: "ChIJV-74Ow8pdTERhjcecmzCRgc",
        placePhotos: [
            { photoReference: "AWCwydg0cxmYsWKIlmR0DGZZoTdoesu35ZgnwN3lRnyPUfJ01RLxeBJjzONniOKPLacarEi3l-PQk0nFyrMK8twmMt7j4AniqSChGgKIMCLImUc3eckirttc1W2F23bQVnKp4VgXP4ujHnRrLJaNGkloBIVUzCRqeZq2tXUyzpISHwLNbjWYRsW44ikXJ-sGJ2rM817KEsaxdRm0YIrIIinXMZHV2aapeTA__m0XKaMMvy1jr0hqSgMC8EyM-9p__j3xEHtUgURPZgqliBaeEiFXUd8uPGko6By0KB8Ph2d8EO52hnbWBlmfpiOYfAB1fOkN5pGfu0-WzqsjkmCjFxDEUNZyRaZCSXWBNSN148gWBa8vVo44RR6h6f31HV40aXil5WjM8lI-9tIajuiMJ_g4kYIiN3qZT7L3_4ZsvZqmm4o2Ityx", width: 1706, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115218626502216841829\">US Outlet Store</a>"] },
            { photoReference: "AWCwydhcSX7d-PR7uQfD85WKsnEH_6wmE13mq6h7MF_asLtRFaTFKxsaxR7UeRo102qglYSPoG00EeI2CJ5xbxIUgAL6auiFNenb0tlAuLlogOTrisyzveyO1rPE4BIToUnfRCa85MhfE7w3PgxEeOk5475uSG2CxAOvomO3vBY8bQXQ5me2zXdROmyIzQWW932zJe-uzWF5YsGdd4RWMt7FZAIUpecuUa5JpKAeo_VY1uru4CzS2bxTBmkuxfKgcHjFjACuxdXwiRU2dhOOgBSDN3zvgJsQdDFM0FSxk9I0vMPaJRIDEZBY8MI-i-g42lQzGjx_nCja_zcXy8htpYNSZkK6lQubDr5vbIoyOQSYrxyPD7qGPctLySZYmLOvFt-wZRBx-8I7Jkey_vdr2BFym0w4TEy54ChRCoxlKIzFDhg6dw", width: 1606, height: 1038, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115218626502216841829\">US Outlet Store</a>"] },
            { photoReference: "AWCwydhFCwvoGRegYIK_PndG6FJvIMHV9LtLSBWToTPDC5-uJJ5zabzOCgwtjXz0beJYnUgnUO3rtybaL_0LK-gFTUkhdAVQsPKG43ZTqUOYK1Qx9ZGza5w454iHn2RykNcfQfCrQ1fpHa87j3apQAOqRmtTLErr6ssB7JcDqTPRhzQLVqir57JZd4zN1etyZJ9yHYrskHUTiBHzXhdSW6A8CHI5AHMMA8mt-AGY2pzUwRCvm5F9Av1clBUwBhdsXwqU6r0N152FJlF5n9sUQsVJTOAEr8w32DxZ3Jp1Dt72mJVfS-VaY4gNPPB1IeJQdKHrt7P7ze91YEYylOMFwK80HqRYL9IcuhoO-o7emwKh9LrmouIIW8PCQvW4G02CSR9Dq47zyUAten4BBNAjzHyFqHSDVo22hP0nECiiwiohiKTrSC8", width: 2560, height: 1730, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115218626502216841829\">US Outlet Store</a>"] },
            { photoReference: "AWCwydirI9SNIBJ-eFaJP8BgrkoC_hY-MoA7c41bNXTiXNb-45G7lc3S3da1oDOjwCRLxR0Np9gdUmhJVYmb62Ek38cRJCP0Y6WbojB4UlFWEjjn2_3wGfNGyBrRi_zyroKyyRlb4EgDeZd1gN0pWKdnCR6HeGfSqNcNPYCu92vRYInt_rf0p5XFESz-iWK45rx7y39IhsIorjTUWKb2tSLOnuRHeJXpdN5DrQHURobD4QGz3Y48vPi8SDsdtZo8OaiJ7S0aj3jEJSN6OPGgqoBJL64YjDPj1-aGolbkluIG91HWZ8URoDN4qxChuUi466OpjZ-BKwmyznnCI_eWbonN40iIsSnU9h7PgPZfEeWEa4xJ_6E5UuH-x6RuTzH_EpfBX3y2fQ3Hjv3aEPIR1FeN_fIL3TnqufBknJcTQ9ejLYs-FxKl", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107018860521355712855\">0903770245 Dungcocup</a>"] },
            { photoReference: "AWCwydjRMhja18TBw7KkI-Nn7Bkek9Qh1roQTBeibo6dGVCN3QMTU9-qKU_qePe2lJ0g2xav1Q24IsevfXE4zkb_P8pjzVJaE7VuQJT1bVjnvGUZKX9-nCycVQZfOfotVcR0cGFRF-vu95a3-nJIm3-vnPUgX9uYKlPBK_TJNoX0pmOjPIGdZWPHjbl2_KZ-forQWNY_RW9MefOPFUcIXVy-7Wki7lonsHUiZ9ywhcOwUmhhMF4VOy22XznUkTQLAJvfdnssW3786LfSdXJwW-pw_CF0m5GlYaurpugHBXIzu5BrTjUuZ0qOMRyqiQNosVbkB3fBIACDvc-j1helUrjWqb1t0WGk3sLq8FQeV8yiUIiXa_a1hHUUquWToupwhIhO41sTMCHhuDJ8C-zjA4OmNHHdQ1qjQB2icoxzOI6rmkeO-A", width: 2568, height: 1926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115218626502216841829\">US Outlet Store</a>"] }
        ],
        summary: "엄청난 할인을 통해 좋은 제품을 합리적으로 구매할 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["할인 혜택", "다양한 제품군"],
        tips: ["1층에는 생활용품이 있습니다", "2층에는 의류가 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://usoutlet.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=524320177662080902", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=US+%EC%95%84%EC%9A%B8%EB%A0%9B+%EC%8A%A4%ED%86%A0%EC%96%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "원 아울렛 패션": {
        photos: [],
        placeId: "ChIJ729ZQgAndTER6qUBzpk7hTY",
        placePhotos: [
            { photoReference: "AWCwydijOSKX3S14CZbehCRxumBmBveBUqKmaDvy9NI2pEEJjTZtapGLuBkKy8YQ0EDtA5OkOnFOZKOMRYFAZDgyU9FekgzEcRhUwZPyWLEGaxJ7QwjN1SRxDCK9Hzalngd-L1Hxcb_0KlB9lE5dknjY2QW9pgWogJrbstf1qrDN3GmYWLPfpkBvN62F0EK1Al9eFGPDQQBYlssALNHz4OelAMjaAFacyOPwBRJMGInoI79NdLokWGLOVjWzGPX2b8MTULiVMQ-4qBuphIjeOnBmcPyEhllMlPCjBziXFn1ddQa5L9PS3ro01rcGgSvzq4k-sY5VIymmr4-89Hp9We6P1HJNJQpSjGpP7Qhw3tbd650TmR4gL-QYEUVA7OcQgqSckcAvOSQZbT0NKU8mKRK0JQuCGYLX4c6XKknbwKAF_Ijpqef2u4rwzDAKTSk2fdEF", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118181902230034164028\">Mai Phuong Le</a>"] },
            { photoReference: "AWCwydhIB3ez6gYWb44bpZb_q4Otrh1wyXilY34S_a6VNlZnpOlaLNH0_JRsYV9-pN-Qkrqn3F-BBx2V7PtRIRkc7LNgW9vYwBxbxbg_NMpwgzNgRxpwWB-pRlPfBJJ9tP3v8zX2dZwkhya6f0UJFGuibLt9PSk31-JUYW2wCd37w7X7dUyOaDRHm_i2BXNXgv2kJ3OM95kkL2QxWMihX-p0xjljO5Ld6kSlwW60QibTrhd9i8YvY2RzCITgSUcZYMt4S3PJr6hMNfflRSfvQOU5IV5oZHbNC6IyABccPnYdoS7CRvDO6JRVfnrv8Owt9Twlg7_w8KsbmMfSjz6NU2cEdHbJzldkJdvehqFTrIeZMbpG5aKULz6VqNn-YQzXOxmLGLpGkmlOZaaSMX5II-k8EAYROW3an44KmoOUb5A3sw1UsET0", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107506986335762818879\">Hung Tran</a>"] },
            { photoReference: "AWCwydjm1g7h2gqhP30su5CNP9IyF5RshoLxo08lsAC3j4oLYhEjxu0znSiRDfnvKtCW5KxqKK-OnJEYgxvGHGXKe3lOzT_EWwKwokcNqgRbwjUkneR_QWxFKJ6MMxyzZZrk5ZgMr5y0hqtWxtkerlDpMSTTetFcvzf-IWieXEKl74ds5rtT3LBt9J3nX_gc6Ko9Ob6Gpt8EehXkNhP4nbqdp476uN_7AHZtPLrOtkTLo5eVE0qF_-gP55XlLbhj7urXSIwW6BXGdSJFyl_vP1Luf8d4htp4pj7J6ih6_0-iESUbn9PivXDusmbD2Ayvtys7bmJxeyMBSrMK-zde65x-beGdr_Yr2pt852VJrHqtMdi1YMtKST1V435IGYJXAE-6yAufeAv3O4CDETuEKICtP1OP3Kq-q2s48TAwL5Zc3MmyemUn", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107506986335762818879\">Hung Tran</a>"] },
            { photoReference: "AWCwydihQHdOtILGTnIs0oRdjDKgmp4nAbpNjX76nSa81kJ9-LtaW4B6Roz2OPhM7VvAPXk8FDlsqceNsp4aFkmp3OD8tSzbtMgVjmqrQGwrmOCToDu9yy79wDGg6UsN959hTkOvjM9DvSi1WjiU2kTryncttjvGama-51QbUYBDgkChzNpcROrai-yhPkW6Dxrm05rW7HpU2TSs7Ic7sATJvShw8NjJ1KQxGZ5uBr9SrrG2XZ-o681OPfBz4scY10GPFO-Odq7davFN8pnqRO-AASfDeaq8GiAJ_vsce6acH6NUPGxaZR4jeRiumJmUg0ScyEqSMuHMP8veP3SPDSp0p_eIuMdHOjRM1cDNiN7Wxd0e41U5kFDBx57xnozXNe0ASq54Tv_ZsDywTs_wfxNsySH9cOzjHHVT_jzE78eQOupouOX9makGavUtKpU3VUXG", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111166786121798502828\">Thuhoa1990 Nguyen</a>"] },
            { photoReference: "AWCwydguJpBJRM1l-d8o2aYpVfUGdLBPrPIMefm7PjFBjINSyZtZoYfSLpsJko0bc9XgAU77cqup0KOWs-7Y5iEuWTjsAjNmuRAobanZJT68mM9zEE00l9o1bXfC2GI8uyuSEx3Lx-j8PBjIvBDRd1tfeoDGe-r4NdGjM63wRtTGS9gm-UNo_4AevPM5ddYIgEr0DZ8lVDo3AEaxJAsGrcLQ8MoueMPuzZW_1elUQDZkHF3Ts1K4UIgxxwxF-SZ9DAMLoCQigmxg79bpaFAKbbt6IYSx7U1IhmdrIHd4d55kUT917vvJJBrDYeJL73nvznkTQCO7PYIDzaLSDnBX4mrFYVwUbeCA262P1fnURtvG5Mu8HHvirFRk304mPly7ns-iQnQyKugu3VFa1C_BRbYc6b4UwTgrwwKROY-ox5hBj2GGbG1W", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106930659905407535177\">Rehklyma Fontamillas Fontamillas</a>"] }
        ],
        summary: "다양한 패션 아이템을 합리적인 가격에 구매할 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절한 직원", "합리적인 가격", "편안한 쇼핑 환경"],
        tips: ["골프 의류 위주의 상품 구성을 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3928611781722875370", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%90+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%8C%A8%EC%85%98+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스타 키친 기념품 샵": {
        photos: [],
        placeId: "ChIJTTELskAvdTERQnfAsp5oDCk",
        placePhotos: [
            { photoReference: "AWCwydjfzj3OGTCTiDT-3x_7vZeJKPLn8TyNLYKicatI6ECjgedT0CBHzCOkzmbQtKyq5vUtILlXGF12J3WlG1PjDG2D95BNxIkHFB9-5VOMb0ivBOvFo00GveXjMeSsVVfMuDCUlV0j3NPZyf3mZSWYmQseTSKI0U_uYgsjlUqZk-xxaG73wzOq-roevQRKUxvJjpqfmkmzJzYannsbx1acQSN5tjI62F213ep5IWb_TOLGJIqFMo32cdQr90tLrx3DBfoGmrd92zhXCvl07nRujqA2jHSWH-QfVbS-sZzuQPfBycwOUq-8dka8gwwpYLeZGuPLqt47NgfMWEL9hHEoCkasUN3Q9-9vtxpJWaB6zNw0kBZpA21BmMgY_Q06Ie16CzHuDxnxZIwme69UrV8OKI0IGf4AzNSamDyjSwy-NVPAAx3r", width: 2568, height: 1926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113360050242086588812\">Star Kitchen Souvenir Gift Shop</a>"] },
            { photoReference: "AWCwydjt3s63JKWDl2uf1uOjNorJvSx4HSRjMOlE4Z5GGfmpxCQ-6m251tfTKV6mM_1G8VYEs_6Rl3cP4ag2NjJ1TydihCHGXGI64jNZle7dEl_WisHZCd3-NsMLqhy7uHBaAcDEDknUXhRhCsy7mZNdLecwIm-xbWOcwTCLtI-bKnkdtgrliNFZflE_D2JiMA_9DLwB3f9sdaXREnWoel6grRtNX7yn4588pdUVPC7wQjVYFv2fNCec_izkNLJjS0PPJYlG2m8O8FMawyt92eANu32RFJycsbb_2BC-rOL8IOkNv6ipbVFmazLox6bPKvsaqk8K0-R-Hearu9MKa7M9fuZIlxDGvdnsZcvN7bh12U2nIKY21w4iQOcaf1mEULHhjLiQQzVj0KH6BMCe0BxV1ruD_iV7qNtwyx3TBDdEkuTH2o3wZT-mlQaKETTPVTE7", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101487505327555838308\">Cici</a>"] },
            { photoReference: "AWCwydgt9TP93klYZJgFK1XDZFfKqdW4mHRSl5TWqGdDNwzlen6OntuEiP1zqjZHQwXYpEfYDgtDrYpT3zX9tWN4mMYiC-0XTJg5TsD3j2oXAWZcxR8CCv-E64h02dF4eO2KXEvrXjCtI54IpW71bML812-HekXSsSRUF0ut1RETK4PW1QiXVVqha_jZoVV-GBP6RllM3YZFwWdraKO9KKG3JwY-qp4UPFc5g5v_ldOCKzSuSIIqE9oqiD4F0qA86559aP-7GYfF40zw61M2kSCYA-ucBMpz7T4KeYQuQ5UXniaDeICh7KC9hu5cFhZf8d4TkRGOAGd_i5uj5RhnXF3U-5j9uWimrlz7TY1nY-07SZ7E8ZXC5p465zplbY6y1d_SbXQ2vvb2pVfT3m5ReXxyDMJzxN_p0w_nWLb4WhMZDmM7M-TGMgRabJcLo6jk8w", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105423551597030451516\">Ciao Tina</a>"] },
            { photoReference: "AWCwydj0qt8CYDRozJZNgFJSXhL-a3qdKw7a_YRezDGjHzbO5zlDrN3jjkF2qCpFq13VTw2zNFf4M7Usda1d7EjXuUolJ4RsGsZdfUvG4okcoF5YaMoB7iaQcG_MtzgFGwUmGkagg3d1farAQQibn9AE8cTSlx0CVwDMOuwYdfOuQafb5k1w_1kK2BngR6eXQZgy_WVumHniyNgQad2vAuZq9beenLKatFsC4mc--buYp_4_3t_QZ-bGitJ8yQaKLnvEeS2OnuBan1um183wKrdatwdmCQhRDIburfGotvzwiTPbE-aUKLti-gtSBI9sRjzQrkgYAWep7zJCm6tCKK6OkGxLoUbC6I0JG2GRvei17E379rxsP4Ldw-G4Zd0PChEk2PK5nV3BqHunofiRbG-3rPP61KpWoLDShJ0YxSK-ceWv9eNiOftFjvXNk8D1qxK8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105605703979034639207\">Ruby Chen</a>"] },
            { photoReference: "AWCwydglN8jjbG5G_zPLNyWuIbTlg9pZSM4T2K49VUBSBrVWT4-uhG6g_Mi8e1iv1spu0w3di0TLhFBZSTuA0q5ekT-1WfbLZ-EIX6gnQ1KmL5QvSUcclFAgua9F2U9bjBI8Oxy53XRjhCkNQVJXveqy6Zi2Uf4YLdrhf1rU1bV8SuaZcZRhggcolq5VTfAmWQP7yaLlU_IEvo7jYbbucQLBAr5_TLJgaTPZK2R3t_fVMSFqEHSR27PEZRMmfA0FeTZzfVjXRyh5LJQmX1NT-dby-5iJQDIavnqqXzzpRLRshYG-L_RIbwr0ZlruYGipxOglJkC96lZW80_S20wxb7r6lmzqzWxV7kKls16NO88bmDwKJjAkkvJfGm-NLpgmYiUVHzEpJEKxxrHdIc81WhQC8cphYupJz7_KSZy-seGS_ZAW_ycDoeoQqAGBU1TYh0O3", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113360050242086588812\">Star Kitchen Souvenir Gift Shop</a>"] }
        ],
        summary: "맛있는 견과류를 구매하기 좋은 기념품 추천 명소입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 평점과 많은 리뷰", "타카시마야 백화점 내 위치"],
        tips: ["맛있는 견과류를 꼭 구매해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.starkitchen-vietnam-gift.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2957854086088652610", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80+%ED%82%A4%EC%B9%9C+%EA%B8%B0%EB%85%90%ED%92%88+%EC%83%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코코닉 - 베트남의 선물": {
        photos: [],
        placeId: "ChIJVfPSot0ndTERALar8t6Sckw",
        placePhotos: [
            { photoReference: "AWCwydj2wSP65thAKDYQ5J5q5oz0wLTVvBEOGu9aUn9BSg75FNTN5-HezudfkT7_C8scqcOMfc2GhH1ksMc9uMNV9lh7PAquyuf_7LDEwKke90dDWDcxl92RC4PhlRtVgMwqV7ZUT_69zbdUoss6GOSyRqojVqQFWmvrEXX5qKQFrnhNq60IixSzIIgp84AsgRNCda0hFzzTmR9EpxxLM6BffZN8FOVDgEuhJWZUeadXeFkoN6bhhRYZVixtCyIlJCEIM4RiEE26IazjAatvk9ztEtk-LX8XTB1-fqJIrkEFpJWvrFx2GYao5p-mw_xxsTmZzUGTbO_CkONo-88LwSHT8xU2CtFY8O-vFxPxYctyQ-sQ4pVZ3taDDEV_VBtl0wGkhkbFRdMXKgq0C5ct4n3C20VPq190U5ySo1O8LCWbKBUQlEC4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108359302663394324295\">Trần Gia Huy</a>"] },
            { photoReference: "AWCwydhBFLbp7zgnOWPh7B_xzVas2nwV7xQCy0ZUiSubFUdWXJldQ6_bB1ulchziAsHaxjUvchVMfiVYL5q5nzB669s8FxXCdxhgZ-xzZBQYAO2DY66o8DbDIc5QojII7Gkgit4E8hCBOfNux_s2A_0ufacD_6g5SZQ79uXLBovpkOLhpudTbW5j9-nYf_bZjEvCC2YCZ-cJwTItA0uGV7pQWM94dI4o3jDuSpAxGbv2jf-2MGxLcFbDOwVs4T-M1gvyYFky9f7xC1a8RzrUgCKMuSxfa8KNK4m7zbOtlbzcccQqAvYWAboMMXd5Fo3SIkTvfs5u5_DOubigEiOoibulTqQXnlgO2TO-3QzpoVeS1s-gUwG4ISIsT8dCpkFi3di__sIn9sn3fvkSvfG27beosTptNb0AfqQ98ylyFbBO_8k", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115459046864695309116\">KOKONIC - The Gift of Vietnam</a>"] },
            { photoReference: "AWCwydjOr1vwOzEmZn32A1vV0jZZveKBXXNegipyFcsUb_E0SiKtE68Nh-DVs0h53xkP9T9LCiDcX_X4WPZI93F-xfWYt8sWyPBAS709lLYhn1hFhP8ljjKVJESLEPAKY35MnjLUdtCU4x6dczLArkf6j8NfqMLA-xtlkzLEPtZbTv0LYkAEmp6ef-DrT8VO7Tq7TMll2zor1XFQPLiDobGUC85clCb8w9ehEv3U79-EQxn19qEqRr7id49jKLvceuMhup4vZfBHD0jz_YFZgvyXqGJql1MyWekPi2sAnjgbI0CzOWyPCfw3HVbT9Hpq4dSeXXTkN0OcaHhebGQANHwktu1Mm_CbfDm6S9kG10HkhsGcRphwq_gUpqHGLpn_DZ-gxh3DurrIsBkl-XnwEPJvGtbPALtvh51OLO6VU6rQVJ3G9P8cnPeV7m5Y1cgOoA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112719238436509921993\">Minh Trang Pham</a>"] },
            { photoReference: "AWCwydgH-Axnq_MTA3CdjB7ocmXwZO58qNYRx-jIzCyZmeBbK-qOPMQQgFRiOh-ObvSta0P-tOGx6K8F9nLKA4BLtlNVPpfElxYPXzpdwRIJxdhQ_VM5HVBjIv1xxjwJyi6pz4oeCbe9p0E1ry-IzYAcW_3Zfc4Ct1RR5hPiVx9rJ0zpavayk2ZrhmMwZudWFKWUw2d8ryXsF6RpqnozTsXMOd-5NrVeHMoXs3tj_eG3BwPDyZ-kJnUhButCu9WgUTJh2uIJfzfuVcq37x-DLx31jNjyqR_wpX6So9F4s9mzegbFESiBl31DChbio-34O7TysMQTgIdTMosnK_QCGBdrOIdVGStVMFPXDxZJ_Hga2KXzTL-W6USQKUQbc4I0yCixvJX31iwftNA9gIK25rpVMFqXZOMc4qXa2k4MZ72JZY8", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117620316653261089881\">Thảo Hàn</a>"] },
            { photoReference: "AWCwydi7zivaJl_-3ro0Ep3ZlbWb0VUCeOHxOhRnf6KivguQw9dRGT-Vzbsq2swg-uq--FAShYrBe5Ktlsh7m4_oIfuI5rCwFGNggGzgZNCFKuPuaYJuCNtWp6RWr9ZgBJjEB9na7I9ix4Lk1JODR9KoLKYiuWjIXnxDDQ_t1MeAt6U8-qfnrhfO0Wx4yhXtklxJwl99NnTiLqtv9ZPZ7ZZJNIk_j6mECJ5CB9mSMShuKIJ9D8hXyyNBrfxc2nRWGYpR66x60o9xZSE5lkWfropXTK-OGtmlKSIJw8U0kernq0EkypADYjVOp-qDKJz0fvaRhgbfS_HgnROT_k2TqrFHmXAMRiJtTooFC4p32B5A--MjF0ZaX_azikFrmFZol9fxw5DAum4OvEB6f5Y3cmdlTQVslUgaNs4iwc2jVYpEIsCOcWvCDeJMNP0HvjofPyMz", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102477496412330467061\">Vũ Ánh Dương</a>"] }
        ],
        summary: "다양하고 귀여운 소품을 만날 수 있는 기념품점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["귀여운 소품 다수", "친절한 직원"],
        tips: ["귀여운 물건을 찾는다면 방문해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/kokonicvn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5508626780479272448", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%BD%94%EB%8B%89+-+%EB%B2%A0%ED%8A%B8%EB%82%A8%EC%9D%98+%EC%84%A0%EB%AC%BC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스타 키친 기념품 샵 - 벤탄": {
        photos: [],
        placeId: "ChIJZ-RSQl8vdTERVE1GDUBAJhk",
        placePhotos: [
            { photoReference: "AWCwydhL6TLCoDutFxrL_U_CJhXHis0T9IuJKkHaDDuKdhxsecBBMxtgTwSSIbrztDp0HErA38IToQG5x1NN-lTWH0mtuECSjJCcegYgvODAyPqr2IFiRRvlwt4ordsYhz0s5xthzOnAPJbzNKRk4vJmZRdv-_AkKRR_wRYz6ulNJEZJ5hC-g0Ioar1R5p4dF4EZBtZfb_1wpEkDsZqmGpfApSte7HSdsocjLg-QDEAtPjWtyilGc8hauYmbWfaKB4cnk0uljgcrRzWtbtlPMA0bvIx5ox7-CfKlAvoFmPJKXw1iJZcOh08hfIsX31NPvaF_HsgMyKXWYfI5rajoHDKcEsGTp70bNrug0Yp4voHLWyIWesHR8G3jw9QhhKZhP3TbqQOaxL-wzsJ8Io34cQkNrg2VORRbNIOBwjly5dhsO030xbD30JJuI-VOcaiDhS1V", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100958768573839001871\">Star Kitchen Souvenir Gift Shop - Ben Thanh</a>"] },
            { photoReference: "AWCwydiE-Kw4N3nj1VcjDJf2VLLg2D-oUIAHLe_mhgwv-Z5gEs1DemGLJ6udPPsTLt-8XtQ3u5-23jnVH7rtK1AEko8o9AsNuL4693z4tnwyP2sg88VjIuyV57zIvDyUkAozI0YjCyQjp2QqOM11KWKwhFQKEGNKviqpUess8aZ9BjpIsh5pPhyTFkpVrk7gwxM6kAJO8CHsRdWFUdybFETIDT-jND2mWGT_awGqI_5cYqqwQTFDYpOG1R_4oqDMM91D2qiarQbnWtVHsGYdf1tGJm6d4fIvVisBhWTf1WrRxsQkHsgGIWEuVFtaLVPN5A9VBsm7apgI_1EvPNnTYMX_aWAOD9GtaFFe5fips4IYGj2OjH0FjI1X5bY9TYdkR410aNtE074aj1WYGU3QoF2fdjw4m3wrWyF4jPXGaq4SJVfF-FMPVr7uXsciEV_Cd_0R", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104495913193501951330\">THƯ LÊ HUỲNH ANH</a>"] },
            { photoReference: "AWCwydgtZo9YdSiJMLznvxIXFiuEy4WIGdQFPZf9J8dOBz2I1rbrOhR_XaWrHs1AvRtqcEUpzkEqwJWOpM6GD-oxpYkKZ1RyJPeDriUN9i9w2z4Jg23vxsX3NJuJROsl8z2EGpe-Ck-Ll4A125BUe4QtiKdaMSbboyd6iiiL0zNR03vfmUVYz1HDXKCNsVRaU9EQp_fmy55yDXoEHC7X_sXCGmREcaNNzuMLZB8Bj9bKFXY34Hn8rcqtvGExCI-n7fm99u-3mzluPqzFF63k2ume5qRpMlRus4oD8c61oRKN0aXGJom0N9vj53ikm4xIi64si_c6iFqS8KlDVr2JprBhAZ0f-B7xzrDRs6_kJXFDwDtfxCdeZ1W776x3TKmVU9gbsGCUfj32yEga-D7PYKxrrEV-AyRW3I1aMEG0UhvEaBPfzwCUA_TieNOiSujRSa9m", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100958768573839001871\">Star Kitchen Souvenir Gift Shop - Ben Thanh</a>"] },
            { photoReference: "AWCwydiUjSp9d8vngdPi1CnfT3ofD_3FRxs6EfL8jKv0vVaP3oI6m51E4Tv1r_-V9g5SKM9-q_7zV7ax76EwhKoTJlHWXKT5kIHRPAqfJ2iKZglFNRmSqbwi-uOjOyQ_vHW0G4MRwbmb2ggrytvZIzxBG5V6j4Mgf-S_9JCkc-lxlR5d5k_VUxvvKsqfZaFal6q10f74I4F0P_YZObZZ-QzioSsH07KD-dN8fiY2MeeezH1fU23IU36d2iLlfnnCpOWzblflmL15CjFcnD7wyBtJ-s01yqAOjAfV_KyYYmdA2HV4fybGHnxP0ceGha03Bpjbu83Dmqcr7Tuf5N9cDGt9bKIQGtag-M-0DcA6Xq_VcSY8S0vL8K9p-f1GGDP6qxfV4XPrucLpGv0ic8PuhJwK5iRKbBxobU44TRYMZq5ZIpwQzgEAbYzqidwDDopTmBaN", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100958768573839001871\">Star Kitchen Souvenir Gift Shop - Ben Thanh</a>"] },
            { photoReference: "AWCwydhrFOOCPOhJqhApncotPR21T2EmeSMp6sQ7b5EhMQvESsyGG7PMnL9nuzLXY5af0GJp58ECeNb9UXGgQMzwcEQVPiIGoKt2YprlrpT0o-Yltw8ej2wzu_Ch4ZXHpgineNwY0yXOFcNsCJoV4CGwgBQsdjfPAfd1cz7m25AWEGNJYTa0Z-BIOwcB17O3phkq2PEJjADP86MjJnMcxTMOfVbxo1bxOcpZcatzWju3_ID1bCp5G04lZnZa-6ljZlnezfVXevZhTdYM41GDU3wswjulcJZxram1xYLluY1Vv71lFvAvbFUO4S_KWYIc0c0yhZ0k2uTEWC4sQ6j3dTTq7I3WUPzL2TacI_IJIXZ1n4K3637I3ThST4EDifTNUn60SXPg4jY-_BBlepHLorckkTKpEpPd6PMm0dv6blzspo_AUJwZ65Y-myNY2qnr2Q", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100958768573839001871\">Star Kitchen Souvenir Gift Shop - Ben Thanh</a>"] }
        ],
        summary: "친절한 서비스와 뛰어난 맛을 자랑하는 쿠키 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["기대 이상의 훌륭한 맛", "친절한 직원 서비스"],
        tips: ["쿠키는 선물용으로 여러 팩을 구매하기 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.starkitchen-vietnam-gift.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1812206543907999060", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80+%ED%82%A4%EC%B9%9C+%EA%B8%B0%EB%85%90%ED%92%88+%EC%83%B5+-+%EB%B2%A4%ED%83%84+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 크래프트 하우스 오리지널": {
        photos: [],
        placeId: "ChIJo9wrNjwvdTERr2lAqU5tS2k",
        placePhotos: [
            { photoReference: "AWCwydh1eJkZ25rLdn5zJzPGF9JpW4LBtM4HoyGG62FUOm-9V-OVrdy_l6JHbofdCgqv6zzA96iheawIddareKyAAj_nKmcdabM2tm0KOU7p3tr3PfVI8M1pb1ohvgjPmV0erPt54m-FtbAxOvnWrxS1TbAPVVDQOiJlYMn4NP1lJrrfeE8IebpTRc2IY-qIBtJnaac-sC6uP6kBqGKuuvT1yrwPUrAGqO1OLgX2xAxWW2GkYX2uc5lXOZPWgdtU3d6qD2NAad60eQAyWlIsxZqnjE4bckSW2n1MTq-pk9lssBNAksSWMpfWThXApZHWI9D8GHmGjPmEkg24R4vXYzYeR_QY7mL7tdN3JsaMqyytD4B-QLgdRF5UKs1OHrJBFi9NlW6tJCFD24zYbOwMKDRXWT5UAaGYok-yORyHpQuDGgIcNVJc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117678983778445109988\">Kristian von Magius</a>"] },
            { photoReference: "AWCwydgsNdPJtt50H5lHFDVkwwFykLA2FFXjGuBKn5qD_GLdY6OaytwjvbrMHI8nCBmyJ1PgUwr9vBlVBV3boMx7TLS98Mdxy83BYLgDx9caKSzsHiUB95GdfyrlIOmbyqJ_24xLngglhS8uwISKqGl5FW1lHd_48lLONwfshiL74BM506qj7vusoyLqff4Bvs73k9mOptRjvo0Iovps6gDaQACayMvFC9UdFrQM4SNc6awk9fDZBYj-ufUahkY0bIouvY8TsoMuCsTAocYdwxp3vnZG89vMwwWejQwmpRZdyydm8GaMNzPhwLVmFXOubpWNMWqfvAzVQbn2gArXEg0t271KxG3YdfKIvdtvCs5CZ9fylQkrkQvDAU1A1kViVixEmVCdwL9iqcPoZEEa2_l0mYsV2aMdA30WZ2Z9aAXlCk4G-5iZ", width: 1875, height: 1250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117168192213792691202\">The Craft House</a>"] },
            { photoReference: "AWCwydjiv8uTGSK2uXCnKLsjU_1EDVVyW62xbBcDMo8t4li0K4ww23fbYGb4wGqDzVXqQi_5rktBD9Grel8C5px7VLrnwpn-KHyVLAc8r6c2Sl3rXvnX5KaOeRRDIsPwLezKwTw9zcRFrbrER6I7DNC-NwIyETyK-hS2bQLCj3XP9635A5ob5poC5KW0PI7idwvT-sX0OWunjI3H66tvhkdIZi3wPKrdi31cNsrjDSN-qlyIeFiPs0hWsJJMeLuSg8foYJrkNn0-urJGdYvRC0Cv1_Qc0NNhgRcQOO9VCjoj8rExYE5GEUF_2lAzuqDc5SrxmuojvfE4Wtmg0FtybFTROjMAneGOhMwzxdyMPM1-b0eH86WtFFT2vDRxrbiPcKlSRXDREJvnbveJ1NGZVeUxLju8JM06anzTX-odFrkXHDf0HE-v2w8mrnVZmUDfRw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112448663719972074218\">L&#39;s News</a>"] },
            { photoReference: "AWCwydjugv1m1wxPW0ZCtetq95Y-FDYzySF4dJWD58A_VPoLZxG_mmrWM-Pp6OUIW_AuuGQEaMOuS0TNPMIFzGNAJrhmc3Bw4wbXMJ4P843QVHwRc6OWqxXkgAboup6wHW5fK11KQrILrw6qz4G5Z54cSoQo6Ntg3oWa-Blo4nApi3_7qbDH3g2MsrME_xriakGoQ-yudwIZLOHRS4FWE_Lq8UhwZxVevMx_4QjwuU_K47Owphd7V1LebOMYtZtOviK0VEOkiAu8QpbGg0l8NY1O_prn96nrra2uuGAsklaeu9Qxcx9wFq_Yg1DfX4sVGTT8YRpqDGPGfLcKzssCAZno-lkRPdijkLp7NVr7DSa-t1N_kttzTn6_YyjOz6ZjPhHn64ahMdN-SI1KQyPMC197tSx0GwdlRDkpd6wfpyA6V63UQQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117168192213792691202\">The Craft House</a>"] },
            { photoReference: "AWCwydiqNhO_0IZbMViU4Q-hv_bx1XLH8kPMFQFUHmHLgeh3AB37d0k1rTtkxKbLtLZUaGkNnPII21MHrB1Eo3lpnZmrrFvCGv1ycSJrAb4LmNehlp7QJsQWNuXSLBAtU21qo7rrSom0ZAvwFlpCIAfcPcgJq8oj_jjw3ho1shF2XiCpx1KgaQhu6s-lWrPGt_UFSw80RuIzgkPeLByHXbHmSnHrAxEEZkcWkeYJM-miMffYmr7Y9JVKQVdD5j78zjnE9r-emvNicidiLbTQG_SqJQo7Fv-2fIlSko7ogARgoZQrAEoYopIfk8GMwCs8etkHd8pA007xz_OclknsAg1hOw3oN_EfvxZCHRsVdaTH-rVqNuKXl7m_qlJV-840C8e0yEkz0KP7qSVqM9cYjBCZ-ZG-sYaDYG6U4Za0FtgINRVW9Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105833382158548560891\">c a</a>"] }
        ],
        summary: "예술적 감성이 가득한 창의적인 기념품 숍",
        updatedAt: "2026-08-14",
        highlights: ["다양한 예술 소품", "창의적인 컨셉 스토어"],
        tips: ["다양한 예술품 구경하기", "기념품 쇼핑하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 7:00; 화요일: 오전 11:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.thecrafthouse.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7587278181850180015", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "베스타 라이프스타일 & 기프트": {
        photos: [],
        placeId: "ChIJ75szOb8ndTER1URarxjn8wU",
        placePhotos: [
            { photoReference: "AWCwydjXDA-0fD37wYjea2CO0_TjVoMOlU8IcIJi2PFRBL2RgWkYdHNv_MULZSY0LL7kG8viKR4eVYMffi1HoTDQZy9YcNhK7DKPqDakdFqGfHdvFJXm3y2UVJgDzVAt37ws_PpBPvW9Qr-EBP5h6g52ZNHk7qccB4O03RZ23I-3DQizuyWmkfwXpHL8IXPsJy05nFNadkzPDaGoxhU5277h7z8a062ZwT-6gpNXvBQlGOZJf1zz2sVgxGTpj5cyreoWenbLA9gEr0mWsc-StFase8KNO0vQy_9_3vVXGm8nizhbFGd30nG9yPdxmIuPY3J38Pl0dM6lDGAUWk4evneoB8V1xkS_gNDY5OqY6v2vFCHXfHvjDu-jQu8NgJPzw_JchFIQpkAsYHKYAMAGAQi_3OpGWsVvEPbtsjhUcU4gnIAzENscdNKoVoSWCijnjSLg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112250846559032201396\">Vesta Lifestyle &amp; Gifts - Flagship store</a>"] },
            { photoReference: "AWCwydgs7osN92oy3Sw7NpPqd3HF34XlAuYuvuyemJe43rtvGoMTTGKPklE6yXadaKSiRzUQpvxkbl4Oo1WjPkTAWsfmhGTr2keQYkLUskcV-t0paJGnEWYVvbKdw0ClVxrLVByJIss_zulnnnou8kBCU3KoF2MbUO4nj6SzsZv9fQJVNVB_7XKMojeJDvroGqGbjRhx9HY3jJb-7YjTqo4j2AcgF18Ye8tkyl6A85qpHn554rsxJR8DTZN-FrT4AdUv4k0WlgZsu4eYnj7Yy5-0tyew5RD54dkm90Dx3Bq9mdY9UOCawFOCJ6V-CVKX8hzD6Kfr0ErjS_7mtCblyk_fyfqREYGINdxHkbtFE3FlJpm67WdAmW6h643VClfkoy_cd-I38r9pyiSD9pcoDljW4ftj1klmL03Od51RogLrcx-TonhIRieVsAFOjJXj", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112250846559032201396\">Vesta Lifestyle &amp; Gifts - Flagship store</a>"] },
            { photoReference: "AWCwydhjxUiBGb9nR0vJpjxzndxwnKpKKcLNdGf66AhJTqjPEhkbRJZTjDuFoJcaeJXTDBU2KDMmXLbl-KkPASIrpInzGIke74AA4Gg_WOtE9X4thdx72l-xF9s1Wo6E4t_L5GAZyjQQUG_ja6h1d_W9ZkM2IOFBRJld7PGRjH87x6ZfQWRUmH945iyqlYT-i0uzHQE5VBnkZR2aPSyrNIcVk6YQWl5JgCHhiZdlqgKTMANMKreiANd7fldUEeykp-HIYlWahbi7HHbcbzld5DZhT0Sz6hVCt3uTmWQ2v-vasF0DUXOnnt4F63PgFcXmNPsClFObuxB7Zdv-6vJSvWn1Ob2PEf7-KSx6eVfzGV7HPz1EjEdnORsUROvQy5eesjxn8W1R03nCYVTdnN0FGezwgeEVcAdAhyUxtJB8cZdeA4PqAUI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105588359503131887740\">Uu</a>"] },
            { photoReference: "AWCwydjnD4FZXY9yNZuV9T-zLUw8kSSVptFfVyKV6bP1xcjm58vPObo1E0LCDBxDkSf2gSumkocQXbn2j2qAdMRntYY4VT0p1vPHV2kwYwqGKBLTraVhITR1h3n90WB_6d5c7soUZJXz7MR44SeixhMPmsQ5CpVoeGlhqXNuhAtQb5Y-geK364U9dTCV4fE9Ag_CIoWLnKNM5z0-4OhIt6Rp9GZfLqL7SeHV1cbYUzHnbr7A-bnHWQlZStbOo9YjiBbQiOnxHgxNVl48ISnzT050Me9HBJMtwBokB8lu_24ng0qHpAfzh_2JZoCjOEHsPWfIL4TGC3FimlIqiv1Wt67y1ZHtE-kQHv78rJyS4uEqGR8HpgMGByF8F5c271H5M1bdXjQPWmwHMCHJiz7gXdXsJRQFIZBv2onsNRz3lBIuEmcXkoX1ErPR-RCVX0DdH3gI", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112250846559032201396\">Vesta Lifestyle &amp; Gifts - Flagship store</a>"] },
            { photoReference: "AWCwydj9URAm5-Uyeme6g-Me_l-TtKj4hRGfwdwCC5TlAugQkX0NsBui_cXacME3Hz-ge8WgHlzxcyUX04OD2O4KTASOqaUTT8TEVlttFSgym6B9mSQNIMCttPeEXsZ4NW5j8QfsDhj7M1RQpM0ewQcuyvMx0NYsUcq7KHcE7yx__m5LPdTT5og2-GfjaIISmfJHcfxOH2ui13Fu5aE3AVC03CQjR4afHjBXmWnizzpBCcYDcuKVLry4h0VRWGWJTK_GeasLKBZLGYfhO-DgmybFje93hdid9brrX7PEfXrHSwUF7CqbLSE5McDM3YHtpsz2-SjN31QU0xhSMQca8Yj5XrN_QOO4x1DXSjaLSq4WC4rxkVWLjLPgvx5DoJmRrn7sdT59pZOau6PCPeQ-STJxi9FzH8rLu2Xi3ubdAGe8HJPB-88u", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112250846559032201396\">Vesta Lifestyle &amp; Gifts - Flagship store</a>"] }
        ],
        summary: "다양한 꽃과 귀여운 물건이 가득한 소품 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["예쁜 꽃", "귀여운 소품"],
        tips: ["다양한 귀여운 물건을 구경해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:30; 화요일: 오전 9:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://vestalifestyle.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=428940482737489109", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%8A%A4%ED%83%80+%EB%9D%BC%EC%9D%B4%ED%94%84%EC%8A%A4%ED%83%80%EC%9D%BC+%26+%EA%B8%B0%ED%94%84%ED%8A%B8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
