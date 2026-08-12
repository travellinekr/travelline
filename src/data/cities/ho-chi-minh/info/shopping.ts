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
};

export default info;
