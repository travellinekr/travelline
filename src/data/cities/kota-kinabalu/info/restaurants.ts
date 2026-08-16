import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "웰컴 씨푸드 레스토랑": {
        photos: ["/images/kota-kinabalu/info/restaurants/welcome-seafood-restaurant-kota-kinabalu.jpg"],
        placeId: "ChIJe36dMZFpOzIRF1hAzdhCapk",
        placePhotos: [
            { photoReference: "AWCwydhBTX66QfK3d3tKcAYsQphoH9ppAhbSTCb_zqwzgp5yICkpM513kfRN-_Ij96kDJ8KnV-avr7kNN5rTHPbpeMOz1jjYaIMrtyM4Zx82Jck0z7YU6W5BC1H73KjVU6bo55es9GvKgb_7RfJGyOIookPiypf_T5sltlJ0273-IJfjHDdw4kEEOtNodrGZN85rmI554av75C_hox5BclibO-f8P-NikV71A_RFBDP3QeQbiKAeW-PusWmc1DwFfQRv91KJI2o6EV6V9rKVtCpI_xkkae5qAdy_1v79pdheBG5hwBbP_CWgDUogFugeyFxazqx5dVvBa0-LHOW6xDR5JhPFxfVjMtbQrjZPvM0PaONeMCkk0k2dxQFyuWLvmDkD-sYuQA-60uS9YN1MK6pin-ulqybmjVdQocsHH3Bx2vXbz-wn", width: 3648, height: 1824, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107177072768272127453\">Welcome Seafood Restaurant</a>"] },
            { photoReference: "AWCwydgTP4oxaG9nuQ3n68lnwQlZFZSNNy6PByWYBwY6Yv2Pscr8J8NbyCbpxpY-jBeeMbbMouYriK-LODD0bFRG44DJ3_p89FkAgNO_S3O-Te-CuGQ3MllzWLFJCzo3jHqHkuYgylPP_aN2xaTC7p_UNKcn3FDgqpHCwNlkp_rjm80CRV7xN4Fkc6uV72dBYyeBzzcodzQcMKRNX2efi_b7FHasJvehKR_SO2nK0j9-Ul2AwF7ynfFuFhLtXeGSSCnwDJG0Uar-4H-JlZxbFv2Jq0YbgLTqFMeCD8yL-qHNR3QL6f3B4FuuIgJGm8We-INbbtMvO4Sj_if-_ioqV2GUiHcGtEeYJBRqonmb98Te2NjGYiO8gt3HHO0qD10c1VcHU9wXCq99cwwW1PIp3s167mPqr9HuT9tpOE-IjmmBLYo", width: 1200, height: 672, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107177072768272127453\">Welcome Seafood Restaurant</a>"] },
            { photoReference: "AWCwydhxjf62-H70DPlMYfjD5WS9nbbFfYW_VXwI8rqZLfTpeYR7D9jqDEvBI9enEJwMf8UcN0gUtWcJWWg9AE03ajnnLNGzDgnv3RsXTMwHf6jWt3VH7Dj0EzIrgGtQIuAgX3m9yvwdmt--HWFpo2kVfn-Etw2H4WnK60gB82W73OB5AQOzDV6YLYv2DPoWkSd3Qr-QWgEsOhV6mFFLxafw2Ifd16UskXBoLeRmlD2L75oSbTdzIE2zVUAayzvacbRC0FVV1OCYdAT2Wpk77Or9mu7R67lp8jpgR2pRuLb2bizhqZRjZaP2vYBCWexljzJGFhDVMtiMQi39GUn4LyQ74eIKz3WacoVHriVcjmWKo8x0HOrrVOlY3VJIlfpEobLLIqiuHrj6I736kQ32DfleU6RrslI-dSkrheN4CJTPWkmYCwg6pl3Nfj0F5DagqQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114680396034748240826\">ショウショウ</a>"] },
            { photoReference: "AWCwydiyDZXm07tlo5isoQFGcSCjR0h1ik-zf1jYpVcD5YFlG9F9mqrwNPno71ouMyTf4iaSnUA4Ixng15A_UOpBZMq3_hUqkSaSg0Yt7EimGMKQ9urbrCgziyPt44EmEVPl_T2tPZLJAYZesNkizAD0PUkMiLFbafowuPyZEZx2aybWys0EGrAWEKVV1ILib7-bE3IZWeR1Zj48l54ice-YDRAA3QnNUJY9fXVF97wedWReqKwctOLGVs2jrdI8Pcgjqn-xK8sPfGJlMkys3SUvGwa8TaU516A-iaqJopsXmR5itllD1KJXScCTOr-tOjPM60YT0DhD1Pb7L-vUIe2wJOQf4nCFvokGU4i-Idt1-J1OenOpbwADCT3G9cOqFkrU4fbL3qSJL7vMXst9gMoxcWowdUcDT24kEtN2-MHWRzE0MR2WdxTHWjxe4nQQNw", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100084092954519439830\">Sugar Tang</a>"] },
            { photoReference: "AWCwydgauS48MEw2xyS0cr9AaV86pUI30iNQqswb9ZaYRhGqoNc18qW8_JHDw_1qAx9P4hBqGGVmMHMogmakbf6lh_DteKA-kgRo7RSog70hTfYEODGwwwVi74oGnQZJQF1m6kxBQIwAZDYj9ttsWz3OGs0rRM0rPRAIluvm7k0OvK6UEy6gEjiIf_OHWRfHQGn7Ht1aDkaqssstarbq7PakfkrWnhk0ICie6tws1jH5gkIRu_HTgSkOkdYIHQrpsC5HNLnixFTA7UL8fqpGiaO2Wdiq7U-jhXldH5yGPTMrnUV5r9jgqoiHvTONHZ4BzJRP1KOtgGgyC6NvoSH9aIhBTSldVWALtOzCkxHNA1mtieIOHd62DUhlDblbYP_Cr3brFElDuJcfaSQHDcXp4864QxNB2FocDeXVIs0Z8JLh6wmAxlaueFNJXTDeQvIpUNsg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117512771558662672419\">Wira Surya Dhini</a>"] }
        ],
        summary: "코타키나발루 여행객들의 필수 코스, 가성비 넘치는 해산물 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["칠리크랩", "탱글한 새우 요리", "다양한 조개류"],
        tips: ["저녁 피크 타임에는 웨이팅이 길 수 있으니 서두르세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "칠리크랩·새우·조개", items: [{ name: "대표 메뉴", price: "RM40~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:30~11:00; 화요일: 오후 12:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16957066962621969129", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%B0%EC%BB%B4+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수앙타인 씨푸드": {
        photos: ["/images/kota-kinabalu/info/restaurants/suang-tain-seafood-restaurant-kota-kinabalu.jpg"],
        placeId: "ChIJB3yKZpBpOzIR1NU4LE-xd7M",
        placePhotos: [
            { photoReference: "AWCwydi4RR6iT5JWAcHwSy0Q7EIfFWDeSMoH9lJtO-CnaZdU8XUbuy5NqFcpRhO0fAgXC1PmuiVWQvWO8pXSXxm6QnexeWOLKyRZvfFyHOuoArhOLQdtN88SS79Vm1VWZ0IDIIPeJY0udwuKwUViQtrVp45NgXh-S4M4ww5BOY3R8rMlGNC22qTjf_T8hmHMHIBjnvm6YRjNTD6XP_0N3idEqpZRuPrXaXejUfnFRW7QyL9OWOe1wpb6T145R-cxcn5lNB36WvP4E-fHz070LpyXhoa2fovXEkEU3_U4rFazFBpmB0E492gdr0RNunpLtNh-kl2Nq8eW6AubzlthnujTb4yVmFVbw1rcjkyY_WJ6KA0LZHxavx_BDvKXe6h9uUTOt-lwof1S3677KcPdqobuZaLVkcuxJwCnVDCJLLkjWqvMG9m01ENlEpvZhbyt4lD7", width: 2304, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114465089205861909050\">Suang Tain Seafood Restaurant</a>"] },
            { photoReference: "AWCwydjsM6I0PMs8trN-SykYAGc9jfWd_N6HnAdqj-1BVj_DDhSs9yeYRrW2pF97mtWg4Kpk_ROEKiftN6pPqnES9k95InM6xouwwub3anSswvrnjP54KEzRyB4nRxd6XdyLwFJauTqimygAVxq5iiAgzVglfMbfU74iXaaf-Ss8eIAKB_djc6Xf2y9ohiJwrmybL3nDvYwLK1RN-Lljr-CdsDUUSEUMegWqx2y6V8i0UekHvF0dpafHJ4rW-tnQREcae8zkaExzOxnqnKkCH3M_ab7-at0C16EwEs5QBVc8UiAI9wS20MpXHblkd6osl68nnDQHI4NY1vJax7PZnoyV8X0fxOo-i3dF92BIWggKFGPyJFVAYThQowD-H-I7mjqmg5Z0V9SmKDgJ7irORCJkuULVn5rgDAGKXB9oH-ATsGUQVVi3EyB3F-t3YYf6ShnK", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114465089205861909050\">Suang Tain Seafood Restaurant</a>"] },
            { photoReference: "AWCwydgiR2jtF105IZ2WVay2wXYmPFbWI2Y7zw1OKUGRbNiMgDastcbK0bHZLeS1rGfwXiafxzWzqVnJITkzJSzyJ3BoIcfnWR_phkEJcGdN4x7NrnJZpmFI0zVe9884-K4K8m-TpT9IOg_I1jzBSpyNxGokLTsYYF91hVeiZ2Q4uqKx2PwmvuiC7nupHNbeXBK6IVB-Kdlxz8pvpxovcn-6Gbg8X32AI0e06GDltLBIZSwUq42WZ2WzwHm5_V8HS_G8TTazmFcz3oFlJRtZ-opw5SoIS1wU2bTTQTkhJRkOC13-BkcH1LrfhM1lm7lhT8s_4MeYSl7dvGEHrYsMbjy-iD6fMnI-UjUcyaFQviASDhJL816CIwBz7zdrzFwfhQH6BMFAvG4L0iv3PAuXp3p4h8lbIyxd7KxBjQ1rHkTyLz3AZ7CgjyBQiroZnwpJLqls", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118002215048660625877\">SY L</a>"] },
            { photoReference: "AWCwydh5jEcgLaKd7valXt9NQK6IsZ4eK6c1irpZhBLxqtglbjOvMUXzahnTuHpnGPUa_BZ_AUmMP5PEzKu8QSMPgSjtUy2T5wnHhe4VoJ6nTyg0FhAjuyzmjKSG4Yp1HmtjEDhW80iXR_dCbCAmnHMqGdTr12HgS_m9wMfU_kDStIUXBxfzhe34HmGD6N4SZEw5LT0U1wwAwJTDh9T9LjrpeLp9lHzg8y2avIcz-cmuX0l6Q7JAQALEFJ7DEVMx-mdriR63LS70EUZxEh-ie4w_7-JcnePWp-tGImIW5geMmFR_qaysMPEWuPTrppg10yfoj5liyq9f0q4npRdhNMcQ2vHlv1txmSNB2Mm3cCjvEQmQVvKgAQ0INRkBMFwkERk9gTuSgHXhwrZ7MrZH1N3It41ApGaabUAxZzZj3rfWSXBK8hbFDPhauRZrbHi_gw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111247954644242515436\">이나경</a>"] },
            { photoReference: "AWCwydgpcOPgEQCIAMgnx2H2zN2phXaoAnYsDot8RvU6UQeIrqa2BoHhIeos8Da-H7dVaPfJf3IIf266ITtZ__L7MmFbokVK9q4kTawAMuWEJ3Yw4dIRBrttp5sR9azM6gh06LhF3KKnf60ElKFzTnqFxGvSMCpt_17gl5qTfZkM0-8evTxQA9KmD7W7QVNiZ1wysD83_9obi_TkQiX6y8zDlwQ-CVE-qf0vprrMLF6SPWzDpEP4BcQRQG8udgLBxz8xZDORTkcwuV3roigyOCOhyUKde4VMW3JO-_LpGir67pl3i4S7S5WAjTNknsbt0M3yUeFJ5sTjIoNDHFYT4YkkECFZpg1S3BX4bQJiaH12cJWj5ga7Cdrx43L4eJ09PVKzGjCk0ihucSgUU7y4V8auAtsXf0g9SKrzUlayJq3Q9FP2TCOXPjzDp1WOSIwtjXri", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103470514807647996828\">Stuff C</a>"] }
        ],
        summary: "현지 분위기를 물씬 느낄 수 있는 로컬 해산물 전문점입니다.",
        updatedAt: "2026-07-15",
        highlights: ["신선한 로컬 해산물", "현지 스타일 요리"],
        tips: ["가성비 좋게 로컬 맛을 즐기고 싶을 때 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 해산물 요리", items: [{ name: "대표 메뉴", price: "RM40~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 2:30~11:00; 화요일: 오후 2:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12931999808620123604", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EC%95%99%ED%83%80%EC%9D%B8+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팟키 씨푸드": {
        photos: ["/images/kota-kinabalu/info/restaurants/fatt-kee-seafood-restaurant-kota-kinabalu.jpg"],
        placeId: "ChIJucv6JP5oOzIRs-CYzCBi5KQ",
        placePhotos: [
            { photoReference: "AWCwydgkGkfXWf_Rj0td5J3izv6fz6OPaO3zcrQjvHcOk37vAf-9WgUyRzx46kQb1J2icpKROZdcwTKMMNw7n5BTkjbga6tYPw4ScgMB-FcnD8pnjpC8mJOJXD3yckYCEu1FrFX3kmGgTOVCAT-txl5yFSELNu6H6sljJNEOi9uLVOyNgkbp4FCczwHE_d33GgZP6Aaxs8FPaBqP9CUNREpggWYZsczwR-vMcmVoRNrSWLkk0deYJJtZntSj47jGIwufexnjyOia00YZjMwKvsb6UOZhBMNLQZj4m9Tgoq5qI3NtC65SdrZAvSMKFFg1Jsnxj1S0UBUeJx8eeYx4M7nG-aToIS4JtVnurlFKu1FjrW5q-ZtSjdzZIcWW0F8zUxdegDglSD9foYGY4muUMYEuTmtdjumT3jbhD80S-fUCoSyK0zTh97iWwJicAlDMNA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114752734918937890546\">陳志堅</a>"] },
            { photoReference: "AWCwydhXzC8j5dY5Nk7YYqm0Ra7UJPdVzWvRp58sjLtsogWH9SsuNYUiyKK8D8earc9W11S98CLaBWvw3h6uq_fT-OlVuyV9JYJc2LyA2PNbesw1aTBi_445Z6a45X9iFvewu0lCCucfPEQKw2ci4aP2qIyp5D6EQymkm8uOFAfk_FqyAVCjak8Kyk2ppS_CIyJaH7LLgEs_dE9FCBhkwz2M7Y2UvBS_mzfSgRKqK6m0jC_KuPgrf4-pof6RH0LSSSNceyn2qMhSUEhIcVmhKpPiyy4yi2Nv1TlQh7blQGRnRGqKyj1hVi0vEt9qB2SI6jiXaGIe_w-cNxlfQveRa-n55Xim3gjJqLwPapB3lqCXMvTwS0P6JpILd5_1DATL2GpNgTsKvaDhwM5WojcGncgnFRreCdVX0HfGzH8ISM59LSawr7YF", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101384485587740462084\">Yap Y Hock</a>"] },
            { photoReference: "AWCwydjP9w3-Uprja2SE49BCi7dSGOpxZMVN1ehPRWyklt3D9sUcJiGgZZ2-g7yItBQJRJLFpvgTKgnF42b5OUIbac62BUTmaQTD6POnJ_zRgJnJrFIam38qZDz753mxGDTB_pC3FQx51Ythkf0CAzXVWjaWpWvW9ed3AXMIcdNHL5R5Sd61Oskw1ok1kktYclZy6MMjoUCqOGwR2OfKIOw-TycMea3OCxU3lyfkpYiVr31TtXianL2XXdntxXmN9IMyDRai58OB39V9e-BGtO6dBEffQjyygvyJVmBBSD9kIKQJ2NaskXXE0jRMG-TQojtRoVSlNCaKG1IQbOp1GDbANEO0I2Nd81nl-5YtfxSvZlYfdprSNS1q_KUNpk_rlBjr42MWXX07qvnEPkP7FtkRpsW4qTMZgEmwXIWW1yur36mi2M_3r6At-iufAf5YLnh1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116908128369355116450\">Oyen</a>"] },
            { photoReference: "AWCwydjpWE4cOL-W5k3Xrtw3PUUDd42RBuxHL4eR-7tzCYDqME0TIpNJTBFR0ynkUK7Y_JcmgTFSRc9W0kMujQMjKGdV50AGADYPPySEBvBK_5BMStvUsqDsJQePr5TCcGPs9JG46pjVwY618amYgE9zPIRfwUdjM8JUXL8R3yJfOB2rz1Lg46hv-M_kKsFqA_5XU7ZLcx5l6VbUkhvFbP2a3ZpzihRk4ucmGU-BSVfpUYMLRTnwQPfpvEGQhzgfeE3nCwa0ymsxJUBRsoUxclb9W0sG3gDJ8E-cQcOsDkijPGL01o7yeYKX_ZcwxyE4oosex1mhjJsqoOPnVznyUtvf-7BeToi8MUpnJ77vYIcSjcrQkaSZlrW35_u8Kv1jwkD_noncBoQ8CTY6_9EaPqdSALXu3AOPMN8L06yeoY3RkRYLjAiR36MP-yPmcVm7-464", width: 3302, height: 2860, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113486937705176360439\">Upsilon Andromedae</a>"] },
            { photoReference: "AWCwydgUTLLNFF8UhaYExTMT1UII4UZ9krBbSq2zG-Tt5aXiVcJD5MKh9D2Ab0_AkNXV0vRZRFYmOOohaszzJGbmI-oOSRrF_ZpptbiWmRoSfgwpBGdxMj0eo62UU2iPse8RfAiePtLbDkCsPQvDCkbdmDoHIzLVpCp45T66c6fwY0hdHFLjXtR0I0BYA5p3_IbfGcZMUjF6smgy_Z8wV3fWQb6kvm6i-gpsh12AKJYuFXl2w5hhcFs-P2cXLl5OdB7u2-e11dEm-bt8ji0viZVwkPL1mEvH69J1k1dwNUZiB1koxtC22LEWqKEwrfwd5WLexFE_SrlRuR16UnivkK1vxOT6mEB2CPxMdmmHnMzyav3uakZwpdfDet9az_jqIWXw4caVa-T6LSZ8j67Tyy5mOnmLeFokpPG--LykyRzW5So0HwOQgdzzGXcLA3yVQg", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116547463600713787318\">Borelli CHEN</a>"] }
        ],
        summary: "생선국수와 신선한 해산물을 동시에 즐길 수 있는 고평점 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["깊은 맛의 생선국수", "신선도가 뛰어난 해산물"],
        tips: ["높은 평점만큼 웨이팅이 있을 수 있으니 참고하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선국수·해산물", items: [{ name: "대표 메뉴", price: "RM20~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:30 ~ 오후 9:30; 화요일: 오전 8:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12506913999026743091", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%9F%ED%82%A4+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이펑 락사": {
        photos: ["/images/kota-kinabalu/info/restaurants/yee-fung-laksa-kota-kinabalu.jpg"],
        placeId: "ChIJ4d6vjI9pOzIRDUVH5gLGGBw",
        placePhotos: [
            { photoReference: "AWCwydhkajfGml6jZOpG2Brh0GhECTvj-lcxD65BF-rcwBCFccOxfDgB5yfkzQmIlQuIloiQUfZPKKahFADEqpcrG0v47TVHc7Mp5uF3VmSaRPtyY1Q3ctWytF0dr8QaKEC4S9QFlMX58LPB88QoVC9Ql1Jegwhdkn9QMPZlkzxxPCTqEHyN-35L5yNSSCsYGEqRruiWIQhRMbslIFYwI7bMvNsGHiWOd2DFiS1TMyG9IO0CLATiColunvNiPu0avTaVdCBujsxj9J_gFTYbY2U4ON2GjRTZjJu6wRpdGyaRc88UBbf3q8W8WRmJHLvkcN87rfAue419Z0PqWcukNeF5qvQInShSz0lKftUzbtBEL3M0PWFI0KNsQ6ljZnRvjEuqmio2pxLrr1wnl9dozgCNh9GL7NCKFyKKaHOA2SMHfGc", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115424834228264075131\">周傑特</a>"] },
            { photoReference: "AWCwydi-f-OHTokYvCv8Zztpj2bhly-5dIq3o6tVAEJkiPv_TVdI6qJf3IcGsR2_kPxpwM9Y2Q1xfSPAKOCSYtaASpk1kpYJLFpcnmm-xl1TjrjPLvAllHC9Azfpu2RttuAZ01Q5H_Y3MVmB9zPGigea6NbL9hMJEBCbgLMjnG5zVIpFHNsTfS1V_U3a_NSLvlKcTMJ9azyQLnBN4Kww_XmLdbvW6OJLq1M66kvWIAfuBzD1ngPejb7_r9aNHuo_g7EWtqKDEI-L93TrwTCoKyBgWbVSctILNArURbyipH6zhmnCHKh6yuxfA7aZBmW6xUabE8sK-2intEd8WUZf0UqfhHZBMzaLu9nHfo_FLhLBNfZxo3gMe_yrZ_WpswGeo5yul0Mj0UlEiiIVRI7okHqQODxyY6u7nlXi04-eK8_i_Uua0Q", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112653968966753901656\">吳拾壹</a>"] },
            { photoReference: "AWCwydjErp-OzlNNHQOGZ4mCuLpRGNl8vWRBmmpJa2w1WCYWEZgzxpVVUl2M00N2rzogesbuV6fXr7_1UIybIILGzSeOOWjIox-GF9WuLjd89ieUsq6Fk3Kk7bjkSKIdm4Dwsww4RgrYUeCDSQqKG0XLiAi6lBwKb96NjJSZTAyEX0CtFQZpEEzC99t_HtmZqy3WtWmA34aCMXcO57cJtJJZwcftjBUNpnFCpkJyRB3LwqJhkfI2VpXggovd4IUQZK-w2RQP3prMTJ7vCU37Z_TJ4Tmhto9KbGSZICLfpqOXbkg-QUzFAhbCtVX3UsH4DejudR2HpZyJxwnMxBDp1M6DdItm1DqlEDYv3rCKdo5_sYyWcdFZalqSz4UrDJpjJk4Yr9-lpBvYphbci_RPxUi-Z3JzQ62ctkpuTnG6cROL2xRDWxywwOMScqfWhxkmAOln", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106983868766976409080\">Pipipau</a>"] },
            { photoReference: "AWCwydi3lsZJyWnorAZ5qs031jylhFJ8Je9M_XJsbPUtjXxfHbBMYDeHK6TRIr6ZLD0jrHDFV3AVCEF2liKevS3iUrdboOviO40iRN37RZE0p6JvBpjJ7tol8p2B9lSGkn8wTiGWOpqJbM9Sr-rNEfNKl5SuASqz5TY8PoRsv7ieH7H8MdEJnUMxKrOIx88I9Fu-jfmhzH-yjlhWdWHmdl0xTOG86bOEy49pFCMvIt-yX-OZQ_igINZtL6QSNE_PeHySKrwTM4Pxzlb6sylDE006g5929CsEp5ve9tmE0RgQ5ygspMR7laZV0jOk5y3qXSbz1ksrHfjDzL5ybjs4EU07DYNxw-L8mX7aCV0Wku8ZWb4aiuzVJ3b4lyPbayAlVHObv90Lzg6gBP24kYokD20H9A11AQ2Q_zhM2DzIdfF_LyoYPHOfVbfPbHtRzrTa0g", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110050598137541083106\">フブキカン</a>"] },
            { photoReference: "AWCwydi2jaIcW3IJYum6H2T41Uo5KDEUUe-b6vhX2IH8CgOqRksS4vMEBqO0Qy9k_qEKGyML68pC3dVuadfImpIdrkmjb-2J-84nRn9g-YFnSRGsuVKYBUXri71BbrTbszf9Ig-i169Lonox84NWavyEtvHylM7NxQiPl_P6ZcSWWNPmcHgj1i_foFvnu57zE1NdD1m9z7hhGMp_u0aExSLtFZUNodsyMf-6BUvBxOJb7QWZlNj06GA0-oX3_G9-tOdrwr7G7jyWM2FCLXZyUXlBp8pIOthq3GQxoXFhnnlKrnjZNQICU5dvCnorEaXKU8O5EAuFfPgiy7Xmzhyzxxt--KBIPsAFX8zD9CnhFqnXdRZEm2cG41xWU3RiAB00fJCrVthR4CSHDmiAsBslG76SxA7LAzpfpc5I0C9Mb7BYk6iDB8niuSz1sgPKqUfBEyGE", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106983868766976409080\">Pipipau</a>"] }
        ],
        summary: "진한 국물 맛이 일품인 코타키나발루 필수 먹거리 락사와 우육면 맛집",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 락사", "부드러운 고기가 듬뿍 들어간 응우차프"],
        tips: ["현지 로컬 분위기를 제대로 느낄 수 있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "락사·응우차프", items: [{ name: "대표 메뉴", price: "RM10~30", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 5:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2024585748258702605", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%ED%8E%91+%EB%9D%BD%EC%82%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이펑 커피숍": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-yee-fung-kota-kinabalu.jpg"],
        placeId: "ChIJ4d6vjI9pOzIRDUVH5gLGGBw",
        placePhotos: [
            { photoReference: "AWCwydhkajfGml6jZOpG2Brh0GhECTvj-lcxD65BF-rcwBCFccOxfDgB5yfkzQmIlQuIloiQUfZPKKahFADEqpcrG0v47TVHc7Mp5uF3VmSaRPtyY1Q3ctWytF0dr8QaKEC4S9QFlMX58LPB88QoVC9Ql1Jegwhdkn9QMPZlkzxxPCTqEHyN-35L5yNSSCsYGEqRruiWIQhRMbslIFYwI7bMvNsGHiWOd2DFiS1TMyG9IO0CLATiColunvNiPu0avTaVdCBujsxj9J_gFTYbY2U4ON2GjRTZjJu6wRpdGyaRc88UBbf3q8W8WRmJHLvkcN87rfAue419Z0PqWcukNeF5qvQInShSz0lKftUzbtBEL3M0PWFI0KNsQ6ljZnRvjEuqmio2pxLrr1wnl9dozgCNh9GL7NCKFyKKaHOA2SMHfGc", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115424834228264075131\">周傑特</a>"] },
            { photoReference: "AWCwydi-f-OHTokYvCv8Zztpj2bhly-5dIq3o6tVAEJkiPv_TVdI6qJf3IcGsR2_kPxpwM9Y2Q1xfSPAKOCSYtaASpk1kpYJLFpcnmm-xl1TjrjPLvAllHC9Azfpu2RttuAZ01Q5H_Y3MVmB9zPGigea6NbL9hMJEBCbgLMjnG5zVIpFHNsTfS1V_U3a_NSLvlKcTMJ9azyQLnBN4Kww_XmLdbvW6OJLq1M66kvWIAfuBzD1ngPejb7_r9aNHuo_g7EWtqKDEI-L93TrwTCoKyBgWbVSctILNArURbyipH6zhmnCHKh6yuxfA7aZBmW6xUabE8sK-2intEd8WUZf0UqfhHZBMzaLu9nHfo_FLhLBNfZxo3gMe_yrZ_WpswGeo5yul0Mj0UlEiiIVRI7okHqQODxyY6u7nlXi04-eK8_i_Uua0Q", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112653968966753901656\">吳拾壹</a>"] },
            { photoReference: "AWCwydjErp-OzlNNHQOGZ4mCuLpRGNl8vWRBmmpJa2w1WCYWEZgzxpVVUl2M00N2rzogesbuV6fXr7_1UIybIILGzSeOOWjIox-GF9WuLjd89ieUsq6Fk3Kk7bjkSKIdm4Dwsww4RgrYUeCDSQqKG0XLiAi6lBwKb96NjJSZTAyEX0CtFQZpEEzC99t_HtmZqy3WtWmA34aCMXcO57cJtJJZwcftjBUNpnFCpkJyRB3LwqJhkfI2VpXggovd4IUQZK-w2RQP3prMTJ7vCU37Z_TJ4Tmhto9KbGSZICLfpqOXbkg-QUzFAhbCtVX3UsH4DejudR2HpZyJxwnMxBDp1M6DdItm1DqlEDYv3rCKdo5_sYyWcdFZalqSz4UrDJpjJk4Yr9-lpBvYphbci_RPxUi-Z3JzQ62ctkpuTnG6cROL2xRDWxywwOMScqfWhxkmAOln", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106983868766976409080\">Pipipau</a>"] },
            { photoReference: "AWCwydi3lsZJyWnorAZ5qs031jylhFJ8Je9M_XJsbPUtjXxfHbBMYDeHK6TRIr6ZLD0jrHDFV3AVCEF2liKevS3iUrdboOviO40iRN37RZE0p6JvBpjJ7tol8p2B9lSGkn8wTiGWOpqJbM9Sr-rNEfNKl5SuASqz5TY8PoRsv7ieH7H8MdEJnUMxKrOIx88I9Fu-jfmhzH-yjlhWdWHmdl0xTOG86bOEy49pFCMvIt-yX-OZQ_igINZtL6QSNE_PeHySKrwTM4Pxzlb6sylDE006g5929CsEp5ve9tmE0RgQ5ygspMR7laZV0jOk5y3qXSbz1ksrHfjDzL5ybjs4EU07DYNxw-L8mX7aCV0Wku8ZWb4aiuzVJ3b4lyPbayAlVHObv90Lzg6gBP24kYokD20H9A11AQ2Q_zhM2DzIdfF_LyoYPHOfVbfPbHtRzrTa0g", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110050598137541083106\">フブキカン</a>"] },
            { photoReference: "AWCwydi2jaIcW3IJYum6H2T41Uo5KDEUUe-b6vhX2IH8CgOqRksS4vMEBqO0Qy9k_qEKGyML68pC3dVuadfImpIdrkmjb-2J-84nRn9g-YFnSRGsuVKYBUXri71BbrTbszf9Ig-i169Lonox84NWavyEtvHylM7NxQiPl_P6ZcSWWNPmcHgj1i_foFvnu57zE1NdD1m9z7hhGMp_u0aExSLtFZUNodsyMf-6BUvBxOJb7QWZlNj06GA0-oX3_G9-tOdrwr7G7jyWM2FCLXZyUXlBp8pIOthq3GQxoXFhnnlKrnjZNQICU5dvCnorEaXKU8O5EAuFfPgiy7Xmzhyzxxt--KBIPsAFX8zD9CnhFqnXdRZEm2cG41xWU3RiAB00fJCrVthR4CSHDmiAsBslG76SxA7LAzpfpc5I0C9Mb7BYk6iDB8niuSz1sgPKqUfBEyGE", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106983868766976409080\">Pipipau</a>"] }
        ],
        summary: "다양한 종류의 로컬 누들을 맛볼 수 있는 가성비 넘치는 현지 식당",
        updatedAt: "2026-07-15",
        highlights: ["다양한 로컬 누들 메뉴", "부담 없는 가격"],
        tips: ["현지인들이 즐겨 찾는 아침이나 점심 식사 장소로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "락사·로컬 누들", items: [{ name: "대표 메뉴", price: "RM10~30", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 3:00; 화요일: 오전 6:00 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7524938471555545430", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%ED%8E%91+%EC%BB%A4%ED%94%BC%EC%88%8D+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푹유엔 카페": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-fook-yuen-kota-kinabalu.jpg"],
        placeId: "ChIJpR88XQhpOzIR5Pf0h1X4YwE",
        placePhotos: [
            { photoReference: "AWCwydgdWrYf18WYvJtinBf6TjiIw_erARnXcnuXqVm6lOJP9HdXyvwvy0xGIt5Cb4yjBq3ZvHLeK0pHNv31X6YFpjig_brus4wljT9FchgsXbCtoLIsiCOLX0U0J7QJvAu0qfAWzfJgm6qeWz8EdWGfo0KUp_w7mqfWaE3u82tD1nSPTf-GhfO2jJL5zzNreqN8RqbCut2lohQjKMccf-jqW0pPZnh8HGD97W_tVolhj_Gt4GPns8P16CMhWtojdAjLQKSUcRO3Q5pCFrDSHeCubuCtgJ2vTITNwgM-52q2fXfdAqTarG6p8-wwElVpAl3DZBONS6XO2XH0RfYAPM7mFPhhBhh_jGhHi4665Hxvt__0YHmFs_Gdfunweni5ffUn5bIdvG2gkuY-deeb_N1lLUtrnNemqWVifudc1kjQiLa43RT2", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106848095612127034007\">ying lin</a>"] },
            { photoReference: "AWCwydjbgDlH9lE0HsrLRQ2ATXQQTyoNvTQITHHIHD3c4AdfbYVQgRq2mtQE2MOmhNI8e5bxiRUVtKc0rOyF7euqfqBqOsGHWVSFi6SFI2fI0ipgCrk2DtfB1ehLeS-tm2y3ER9uh6sPYkvk3nTvjVIIrSn3-J9l_v15mYENtAAJT80N8jvng6mV0Alw7d3FGuwI-4u6kUfNlSzl6Zj7VmJeTPm_-rx6o8HvrfvaSzefp6X0mWzJF1W8zKVtIsk_3Yki-3KEPXQMWMKjK19cTslVquYJ93qXqHZkCPdCrnsFXFejdJfO3DKrO9czCK7G6npeksyMSWl_AlTnESDNed02_-SL5wDit5CT9xNKDXw2XHARZPhhDtykHIjw3vd6Nfzi03aT_SM3IuIxzuz9jpXZEm02qA9sCYCkwOgDbdWHtyiVdw", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107045409256845149136\">TehTarikGO</a>"] },
            { photoReference: "AWCwydhk7UDaMNlzJMjcbD6wIx_k5MzXe1YdqAqgTnmeC8G7w3AZdrakKxyWP0ysWCFwobIZ6Q9wRlUAu2nQHo-yXHsr9RmHR3PvVFjaVuyTIUmaXGypQX6DZBRiMP_iro10n9UUm4WTDpZWenKun2CYg6ANC7ilj6W8PPzUOq90OvyYBFRVDi3_ajHRcva8vR42f1pIkfyWR6-3RJbDTFgxN24tdvyLc8JihfujnVkF8Aoud8Hl9C4Aq4aWcH6nyJId6BdnQrzqe1OgOD4GBe5n-_nSLqwHappgVbqhUCIhiuFmDe4-Y082YbyFpEhNVPWsNrVKCoWtPbNlAUtUbnLQnfpJ68LvkjP8U8U-EsRDXS9FEyL1rwuD6ZJ10NS_E0riPnRNTZ-HHUR2LCRO4EpKRJhybWwAb4s32q3Nw5gYGWF0FUx3eUCA3sGYE2WXap3i", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108041219774493785643\">Nut Mug</a>"] },
            { photoReference: "AWCwydgUOp334D-qlUMmKkCZleAj4l9kMb_GhP23vkNkzalPtKKS0mladEwRV-V8cUHzlfEkOYsLrvxTUuEyx3_04JNOh0oUYk3qzArm2rU52pq67MbFUU_ryXUlzkMB4pAk73vSIWQU___HcNqgq-vc15TIVpM6GTbRcGgo9j9JP5xvb6L2L5uVJgLnI6GVPB_df7gQG7On99Z-175LNLqNvbj32_wB93pOHP0GeMtVn67L2p6Qoii6zJRY7IGd17KM2KHshcUXyxfa0BLuxwzPeY0ppbYmuNZpu8i8qztfP1EpSjhsDcFNKMvb5lTH88HYwdEqoAuU_Az7-YNgHWGPdEjdzaE6fR58HXumtAAVueBgNfMcwfsrcKkeXy_3PJ47aP_yF0PVZlvjqRgKJSsIKggCBrwj1OQoBzIS97LtVMrNGEegFeXIo8mlcSTiP8Wt", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118420987826573745964\">Kim Tan</a>"] },
            { photoReference: "AWCwydgBtsKiWysr4DVX6P2sL3gHDqVdrtwPlyXAs5Jf3qwr09UC7OmK-jJM4eX5uhzl-hySfIMLKu-eQTMwRQXqdIcYrwQPgpIvVjvUnx2j5BJLBYKsGbQaXeCoLsaXuu3J-P-B0wAzpe6uaaWdDPLOLRpa-53c16df3GW2tnhF4A9ERPXQZx3F1WHg682fgVOe-jz9aWWdgoSA0RcEb377f_XQAu-yz9V4HORGrclLFEq82DqxOW8ZSAilKQtWh2bv5L0828ggWHhGeO6kbdbrxlfDJtuz-iMF3H0ftcNxpslRfbwrbKblRdgSTpmKczj69XH5iXbV6hPokG9sy8WF1k4nUwccEdzUA83YPNlcPXmk16Vq3Uiz0OZF1vqsObyXK7J_18xK8Pc2T2yuPYRxkTSACt1gdU2u3dUKSV2HHYGv-vcBFqN_MpScGQfytdPP", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108498297736973400257\">Willy趙咖</a>"] }
        ],
        summary: "바삭한 카야 토스트와 커피로 여유로운 아침을 즐기기 좋은 곳",
        updatedAt: "2026-07-15",
        highlights: ["달콤하고 바삭한 카야 토스트", "고소한 로티와 진한 현지 커피"],
        tips: ["현지식 브런치를 경험하고 싶을 때 방문하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카야토스트·로티·커피", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 6:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=100196662969169892", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B9%EC%9C%A0%EC%97%94+%EC%B9%B4%ED%8E%98+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "멜라니안 3": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-melanian-3-kota-kinabalu.jpg"],
        placeId: "ChIJ7TvQZI9pOzIRbMMWp9Y_t6s",
        placePhotos: [
            { photoReference: "AWCwydhASqLi4H8uwB6z3pqfoYoSPbK513WIDipajSenrDlPzk3zcM-9UoDbx1JMuZuK6DxEnCqJrU-szvg9ngBH-lmcA8t6Yp6YBfMZ0Y6wIJYK2oHPrkZcVcBtLv-rIOQgGwgDuFIzpm_76GG4pB6veubb1S227KWsUpkoNa_XwZJmBd8SMRfj7zwT0dp8Eh1uJHsQ9r8e49d4qZyTU6fQ5Xo_YwSCR6TGVsHuJvMbHdkrQqMTKgUedoC2J8-5gY0AjmzGvczYYtqVNFkWoh4rG2B0_t9iY2EFvXmb9ieEDnIPqe85zCIAFNq2N1jGNSpXdQstU6kvPox8m1f4m4Sz5zOr0swPeOfYU3whx57iO6UV74TJ_MdbOiKpP1W1z2PuIm-ZMUxSa7Ev2d_ZsIpQ-ThE3Wyy75NhdcTEdmssI45jt2_fzqtCYV6w6GgJjg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105165696290501813830\">Circle Chow</a>"] },
            { photoReference: "AWCwydg-cuS9xooj-ztTEjgW81CQ51jhsAgJeaIjwU2hlgdDIydNrXbPN4FoDW_uiXu_kU3WUE5VNqjads8ikJySHdgHtw1hC2ExWBOerbyinJ_MvegXUvDL3IDCc97mFQyb6iEiciimwxdipIirG_SmDlFfezQVi6G5Wln4HwhBwaFWbQy1DIERrHN79JEmRYVikRrEWco236_f7eVeGu1JXpnwndebLwyOBk98dnvsBEzgeZkWWy5y_JDn9Kah-iEzyiEEdVhODM8bN7L3Im9tUtlQnaTwanvCNoFyl8sSkGfkfIjrXzfAsGzS2rADkjt6qnLgIMIouwPip4n2Y7JT1KgA9DFnkkUwiZRN3iVy1CY-c2nwVc70HYCHQWYs_YGEHhNhkNiTpAHsb_GhHeoTyERTWl0uXtbgja2wxyjFKkJ8jrqJdQW0inJJXQnuTZaI", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109281797060472450393\">Sarah</a>"] },
            { photoReference: "AWCwydjOyPIZZFomu5a9pww_JWGWZoz0RD3o4J8OYgnyQv6VxlIPjFpca6ib66hncZr4I9mbUE9K_bVz7MG7mWsD1Pxr82quDdfXxv7XaS1SjPrdSoPXOQugDmmxeoAd6N73wHjed0j6Li-xJmy326LeS4yOhZqrvYpOaMiDJz6VmPgV0zBY9HQ90oSf1lI3cIrwO6BKyQeasTZ4DBzN1YIBICC5VhIsVVGTyedOeAD_nkXxwi4VC40gG_AjmWZl34NX_hgqTvnYzDnRXtwQsQMwkVC4ZoJWZ38ZQ1lglu9Up7aySWmUFAOLNwNrYXT6ATke6-yfM1cQny37UhRnfsIWVpeU6pJ_ffiTxNnXM8mPoR-FjB_Y9ktURAj8IYvu_-F3hNJahhGy_6eQ9cQeSgoBAfijwE4de9nb0NhRE_L2zSYqdjVLKdHL1uZsUCiE5lru", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114181528122381045263\">Christopher L33</a>"] },
            { photoReference: "AWCwydjvu2Y0d1jIxC8DxNPyMkSbd3BxDMEWfPMxnYQR92nT98uycU_WKbwPWNedY9EbpC5ObiV6FFJhs-2bEVuX-ksB_3FOVj_KjXqmZhqRCaGb9kfunZghzq5mCDZCc5c6INPcieCVA6DZQN0DhB0zidpuYFSuQKtjxtnH2l6JvDcrCMFUO-qB_MNDU59oTe-7sjcG6VDYj3SZcMxI8_IWE_4ECJP0kA-Ql_15Xpy-tsCQX-H-DS3uR5zjlzhj74TizCU2Zy5JU39Z60ceM0Hc027ndODR6-gIc5YNB9PHgI-iAAQt5gi6rynUSW54jrs7XrQZEiM2EKb2pFzcLw8EhbAIIj38G_wBB1e-c6KbjhSd57Gq1WnxGXmb_0-3bQNCtMA6liXxI9IIQYXzjVgNmOWTdO85WNfOR0OoYRWEsQC6XLzPfqtZAu_pV5J2M9XO", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113257728405631339033\">Joseph Ng</a>"] },
            { photoReference: "AWCwydjSR6QHZSvcViR0eaS0PMV934yfgbfH9U6k8rmkfQJO9kqMu5oxiisGENvzxTnKwyBFnIPLVglniNhBNSPMlEdAFY5p9BGYKptIJq8Iw2Jbws67qd5jAdVTF4LfbCzAm9_Izc1AHin4KkV1z78p7LZxI0aOrecmBs136Qr0cu-8itPSgZgW-TSPkleaqYBGdN5gwgK0VcjY4GK-_F0nBzU5zoEutqKg4y82LijeKjth1Y5P_7Fkc-3s1cj-K0At4KAC9uCZlUTeyA0FJ7ZAXZU_SY2wLb7LnI2g0buMJjEXfLlnMRChI5NeVFyygGWZ5Jm-Qz-9LaN2SOjJbqYPhVOKTqOkPP1xgblkBIzBr7MboxGZqbsLn8MUMquNDNx5tTKZr3X3ormOY4RMXkDKRnWGjHGPbGA4ySZ9KcEcwD7oy24OqkHnDNu36Rs7rWyq", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107713265152873406983\">溫敬富</a>"] }
        ],
        summary: "현지 느낌 물씬 나는 누들과 라이스를 맛볼 수 있는 가성비 로컬 식당",
        updatedAt: "2026-07-15",
        highlights: ["로컬 스타일의 누들·라이스 요리", "부담 없는 가격"],
        tips: ["현지인들이 즐겨 찾는 노포 분위기를 느껴보세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 누들·라이스", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 3:00; 화요일: 오전 6:30 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/kedaikopimelanian3?mibextid=LQQJ4d", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12373428692382565228", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%9C%EB%9D%BC%EB%8B%88%EC%95%88+3+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "눅 카페": {
        photos: ["/images/kota-kinabalu/info/restaurants/nook-cafe-kota-kinabalu.jpg"],
        placeId: "ChIJkY2yl4VpOzIRJ2zCCINKlqY",
        placePhotos: [
            { photoReference: "AWCwydikKywXvwRx-hyyptxtijs3EcWgT-Z5qar6c-qaf_r58oXOvBAa9NOaT8Eo2aYQdThhfPOR3QXB-YAaypPwjuU-M7BYPJMOZpoIs27k1pnWSYbYCIYE-Aqcc6cxa7_r3hMUBIlBDXkvVYF4XCxv3WKLDmjGNzIw0UymgoMW7VLABDyBerrrWN5Y6VecYn56rb_vgr3G_LDPekcAOKgvpPL6J7msTZ7sazxEKkWeUv89Zn6sESTzkmiOrhF7kpSELWwkaaek2jzNWi-rlDA9rwLeH_lg393vxk_lp6_R81lmisaGWIJg2EOQ8miuuBJP8gjqpotrugPTbS1DyQiJN0HE93eA9YklS7M_JMKnQA71yXQziwVLXp7QePqaJz46_AjxyaiJt4hyy7AANH3mBLqytFRFSUujJzxTDztPbB_FOPDe", width: 3921, height: 2947, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104519355519662680700\">Nook Cafe</a>"] },
            { photoReference: "AWCwydjCM3FzCUNOv6Rl7IEF-yC8uURvUFylfJPZypgs3xQlLxTsKQl80zHPiqP-AWN2ydmMdod5yewCvgTDns8hrj8wMy5UIu9mPr0mwsZIMeoWYSMK_3s6TAfXEoWSWnz2IAfkz7X9Z92UJmlMOD2N-jpzs7R04-doBXEllZ7z7FYvjYt05XbAxapYKL6TEWxdlwMZxXuQCFnef9I4-r87j5gDOpUzGY7EYPAVc_evlJ1fRAnBXQqzbvee0HuJmIHYhv75yGHHnwGzL7aTaLXTlj-3je5hBCq5YKPVHN2x6nJIQXa0co_hkwZvwIUCq9T1zWF_uLebPVEzcuCrCvk-LUnLykzcpvYJC6IgTOPxU9ZsY36JPuDkWjycaLHmfAtgwNLPVGNPEYG5g7K7jxppxS8Ijp3gVep2tzEptimy7NQ", width: 3024, height: 4030, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104519355519662680700\">Nook Cafe</a>"] },
            { photoReference: "AWCwydiyna1KmAGmQiuEO9bnCNGRHaPeW90C7MJjNibat-lM0YFNdBjBVFQAYDWlGFXqfZdNupbGV73GOuHecLimtzz_r2V4IeC6Bq1H3Ky-1oMS7KQmYiRSNwXpw38ryM8ERyv3kt66vJAmIxynoofbaKQkdEKF647TrJ1F0Bo9zsujpgbC1g-1xj-aqkz4nSyW62OSlOOzIB2AlM9GXpWSY-rIBeV_ypKBKO7rHXa9L3Ae5vuuq-1wzkYXDLljH-_KxtQERmAUiOuOi0e7f01LcV81D01uDG8bjE9lCE_m1skhdZqac6TWzWrBh488otwYH_nrvYStE5g51SDaMBtxSyS5ZIKL0_lbPbKAR0iteMOhag4RMYuZBL2f6XAX3TPR24Nxfnmik8vVYLY38OHxhtQlcZujA-bxAzpxJfdcs09_xD4_VS7cd0nGI55dXxim", width: 3570, height: 4761, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105369581096774096711\">Jazz</a>"] },
            { photoReference: "AWCwydjefLkDv5XtAtvfty46NDaPv3hZ5y8n61mtyHmNQm3tro0RJEgyBtKpNStepsW4s0TnrDc7GZES_TPVh3HjbyPDSOWfruOWpZF7OxfAJurQzFag_EWmTYl10Dj-mZ1VYEHovNg8R8i5De_xEaY_gLdXKZ3XiCNjaQ9Cnfa6uDuN-D4Vdlo4O7Gg-uLQRF4VreVMstbaTbj3dqw54gnyyMGrw1K_cd9v5t0viCBBgpCdmptIi38X9H1CcOAStGlEly96un3Erv2F0ya_hANHihtJhpe28Uw758NkoRQopa2eNcJFQ7lfw8hmi-gnEca5SgnJuAxP8FF3mn_PjH8c33hAz2cXzbZKjNsyHsOXlY3ChWDHbrFuTxQQakGPuRhF9I9r7yDqzVE7JrqeOoItqzLm-hBJXRjQjc_3s852eSexJ5CvP-3IZSX3aq96qdTn", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101152091055148685888\">Scott Lawson</a>"] },
            { photoReference: "AWCwydgie1VUGsN4pbh1FEw7Jm2dWryPev09fk-VYmwQF-UjScn56lNyX4jzjJJo0vy42VQNQfNkKTFU0A4kROzECubMaHwU8jnvoEEVGbtruaQuvfhiwISLb8ANhIPFKL6dAI2AzGjtFrm5qrUKQyw6JDorp6DiAb_P0hZBi4SgW4zLE66yEKg-gh7smh1mFWqqfKKswP_6pOpUyrMdE-Pe13ULa8PeITVK9dJSZMcu9k_BlULHx2j0Z8XYDNev68Kwcfy85nNDi_iRuZVXPuq8QeQLiugqwgNiUfCLWcwHfiGasUba_TncKxvEmNxgMgWPJBx1GEggFuWttYhGeexbY3BbFEeITwt0qL8n76CeVAu0Nrp1lbs8C_80KCeuRJgDpHGm-mQzA6MDX10V7mVsQw8O95V6Y0qU2wA7jatpBQ7y4tcnDSyIgGMbN-4qo7YE", width: 768, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114024122583888505266\">ogisa _</a>"] }
        ],
        summary: "여유로운 브런치와 커피 한 잔의 휴식을 즐기기 좋은 카페",
        updatedAt: "2026-07-15",
        highlights: ["다양한 브런치 메뉴", "편안한 분위기"],
        tips: ["느긋한 오전 시간을 보내기에 아주 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·브런치", items: [{ name: "대표 메뉴", price: "RM20~60", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://linktr.ee/look.for.nook", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12003863783450766375", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%88%85+%EC%B9%B4%ED%8E%98+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥토버 커피 하우스": {
        photos: ["/images/kota-kinabalu/info/restaurants/october-coffee-house-kota-kinabalu.jpg"],
        placeId: "ChIJZyoAmYVpOzIRWlmsKDwjA_A",
        placePhotos: [
            { photoReference: "AWCwydhgjXzcxp1t5TLEesWuFcpAH95SKLnGzbg6WnYxzEGDZdDJUKZX-ovsnwxhUNs5numI0qDrTu9F4JiJOPsrjyGEGiLBmVVTWFqhZhTr79JTHWf6LwuxRsNpJdbe_p58XjMqBeQ6beOq1vHQcHTBoAAUlinjoTSXSaAmjf48SAo8x6djh5uXcf8ypiJ7ZFTc7yzu6f2L_uKldzUu2aF8Zvf-eSkzf29MwXv5YvTUb9wa0aWdbQDgpL845TIFANEHaqxVgvkk74x-oH8l4GFnev_K9LQwxYPPl4sF8i9f_4mZh-k8ZoRsZqa_4fTMCLWLBHUtyg5VDSAyExwpKRkMaVegZSmeH_vfTTiT2Inpya_crxN_a-WBoCdAcwHJedjPUfBvizwHSMPGqz0b3pORGtYGMfw3N_CUEzkJ7-rIa4zT85uX", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114969237918619801743\">October Coffee Gaya</a>"] },
            { photoReference: "AWCwydgwJ6Lli1BcEpVi7ChDXzDuhbAJ6Se1eV-2gQT4vl_e1eCmyil-fAKyFy43F2cwa7j3KO4d63gO81WZCDHI5mUqTxSJ9z0e0UAl1BmAhG4srL5uZTdL1Yxzxb3e8CShA-NEBjaYS7eHoG8Vj8TY9TugNlp0SJwc-9AgM4q6j8P3rPKLXHVGPzjiHuEpvUfVrZvFqCyXp2FeCgj_celHZMVCUw7B2LsBODzRWKuqOXoDmE_P93kssBpDNn7dCsbapUpDgTtx5Z_hJfZ-y7rMc1zjTWKEjlHhkf7ACpmx-8AutPWk-zjBfgriuEVhBFdzDuTLNczo9z6QpGaXvgjGyliWgoc4tTG3wJeyAeNqfaR6PCWl8Kww2VFUyEcskqw1iwXlMqGzEcmy69ugKMeegssIedJXYUWqhQhGttTZFqzcs3ZysPuSyJTT42Pl7HP4", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106964315938975329753\">Benedict Isles</a>"] },
            { photoReference: "AWCwydi4SXwrNRAH25u5LW0HbIMpVSVh_IKBUuYf0InSuEwBAaQePl5f5O6Fwh-xIPY_qqWVV5RdfRAfmysVkRzTIcqsm20XN25qSCcp3erkFbAbV0vGERzt5aTU4kOEwgxhziHcftNYE6J7kz3nud4NiM5abbZ549YlC4x3wjhgiJwjVaF4vnwoJFSGHrzDHdQWQggciytwxW05B26KiU1b6_K79VsIufa0oooVlJpr8AStZv8E7mT0Bf8-T2RiGZozM_cYpgeQOabyC2vujsyvtOgeDB_Pz92teVBiuUVcIssphdpQxTG4ViXwNWVv5gzKxaazLI2B89ywnknqmsR_J7DQrph3T8pe83M5xPtPIlnB6mrSXIKjLPYrEujTsE4D0iOcla8pgNxEFNQ2Tpo-SPT_6qCWVdIjxt0iosnZdBmwbBaq", width: 2976, height: 3720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114969237918619801743\">October Coffee Gaya</a>"] },
            { photoReference: "AWCwydjRFnMJcJwr7bgkkZzRNFJ8DbCNpfOY6tCumOO5fuVAG9MaJGaG5anEZrI56oam2QWir52Jy_CSMy3zbRnUXtZS5AZL9gUrlyh7FIHsmmY6FBcxGRt5FduQkT7GIgz4up2wD0j5kePKitx1DvKRfSeBlkGZT9qV6Wz1OzuYxpEoI3sToOESfKyVszvgAHg88SQZYI3Nazr-N_HDcLy_vF8W1C-QA4HeT_iXJWMk8EQdEW2tPNQDumyGjOuRslyuQBvk_TonqylwRzVSw0vhA1p45EhsmT-MJKaIRpT5AgoQC2DNTUgDoLquwuuvfyYCMq91uBCylsKE_a3qE9YKGne_ylLW8jTXRJWwxR8RiPqEnCXoOu4VqJjLKoHquLzHMeOsqwSrtXXLitvu6XAnsfc9-rUTVuQxU19R85ILMDIXvGWAZYEjhEwLVU3ElW-6", width: 3056, height: 3056, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117070577886368060197\">A M</a>"] },
            { photoReference: "AWCwydiu2-G7L5vK7EbbCl4fCAmVUnOSBZjtv8n55e1xoYDOUzesidpdkNXWX849-V5DuLCCMg6jgAFiWnPxnYplMUpzc0QpX-aUCQn3OTqlc-snTx2q29frpoMWWhBeRfMlyWqNSItOpx-SI7soxa5ymIK-lMp1whYknesf7FlF7qi9VRra4-MWjA0W-NsKacUieOUiqBVRdYLJyNwjf60Zk4vE8WFhdvsd2X0lqFmv9YGEEgxfj02rxuvFaS5jiOzdf581AXXl1b6EbMBijHi61us4mO3VEwwZZnL9-oBTth_vC1Nj0o_q5d--YM6vqyjWvCBqbEpA8cMC6eBrMyEYHHqH_eAxDOThOU3-OFSNHAgw4sUIAeqn_Y71dEr564IsQ5hNtBjXign8UYHx9N4UKFDfaqIbF_Uc7RvDT_sltxBalWWSgApJCwYaCFoAkO0r", width: 2543, height: 1907, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111799660325658892309\">Michael Chua</a>"] }
        ],
        summary: "스페셜티 커피와 달콤한 디저트로 힐링하기 좋은 감성 카페",
        updatedAt: "2026-07-15",
        highlights: ["고퀄리티 스페셜티 커피", "매력적인 디저트"],
        tips: ["커피 맛에 진심이라면 꼭 들러야 할 곳입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스페셜티 커피·디저트", items: [{ name: "대표 메뉴", price: "RM15~50", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/octobercoffeegaya/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17294705735320230234", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%ED%86%A0%EB%B2%84+%EC%BB%A4%ED%94%BC+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엘 센트로": {
        photos: ["/images/kota-kinabalu/info/restaurants/el-centro-kota-kinabalu.jpg"],
        placeId: "ChIJzz4NZo9pOzIRwg8rog5sN2M",
        placePhotos: [
            { photoReference: "AWCwydjNzgZ0rSdbv3fgF_sqizh7e1r6jOKztYsm8HmaW_PmsmjFtOlVOwYdL6LqGJsOsMRD30Wfuk5-7unNAy5gBkbyyW3M9WaZU27xlujZbukGFmwIDsUTjfJerMNTJtQR3iA0hiiwmW-PZEN7XP05_tzmd2Zde6OClePVeTlvsLfWvN5KCxtPPls5clK2nFKMlKF3Rj3yC1oYU3QO9cUxEWGY9YK9g9HHCCWSb7QvTox6yliaEJHW1M2pb8dfcNKLVqx-JcuSv4AxnBU5Kg66epAptI6GF1imO5sTOtjMMRehXePa-IFxff-8Bxk48wK1cBjOuvxx6DtWc1H82Go62_RnN_OKkXdqxWTaFqD7_bfwkMW2ODR5Kav2Zn1MDvXD-PIzOcj9onGamYEQLlBs0CWZMHDY3jjaK-iOFjpzvMVGtukY", width: 480, height: 501, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102239972870666007325\">El Centro</a>"] },
            { photoReference: "AWCwydiEXmdWvb9ilSncWMQpONyRDNhP3XyBfi6F0UVm1gXnem5UaVaasdQMzoIHtuK_4OkH9p-zY1cuMTCPhOcMKvOmC55DP_kiSIXC9c0nrJSMsdQLRiQTPteJPiT1qjftVYyOS2GZUan_7pA-bad9cuLXSo22d7VjomrZ1bqpWLiyEWTLk_qq29cZPKu8h-8qutID7BPgHb56l0_cm6b_6axGMLG520ssDj2h5Jwg_XwpL_7xWIH0yCzH92VkSQQiMk2Xun2GMYqZyZ6OKzoaGVtHxYEqfzhZGYQHz7m7SbYZN0pE6Gi6ReIazAWlhuMAVK3gM0K2YKyM4Y4ghRdXGVImalW9OXIgaiUeiHu1bY9yxRj9kdaNFlr3ca0YBy2Cm4pn4n9wy9XkFsFTK3lZmZCK-w6ZqWWBCES5AoCxjSIp8bwOo0SbO65gF3j55w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101339794398503306152\">Wang Jun Seng</a>"] },
            { photoReference: "AWCwydiaKrckLn0gC7sFq2oLCz1-WiJE9fOl9Bcz1yffhPL5WqNgC-hlZUZvBkvnIv8wWuWcBrO_793skMXe6eSMljzGFJzbC8cmkZcl9JZdraeYFiJ4BrjNbxihH7h0NDlQ6N4W7iLqBY22RyNamYOB1ntleePMkuSlg7aN1g3EtYJYn9AWnkuI2GAiOZjhPNcHapX1niSI5ltnY1QG2n8NIMCE-RmSJdVvX6pV6r56ges6_PBOG4wg-AA7_kC372qldsGrzBW4jHDo3mqzKdAXp2aq0Dom6d5IooIkdr8mJlunrg2985PF4sCw-B1uCgcbg-rx9cihcC7IkLAK_dEBtmEDrSAfz6O_NMwrKRdaXPdmzSLJMH7n8T7g82oi6EOv7SsMbPQziozC3sdRNOR9kyOFK7nsueTK0K3ynrCOSt_subHc-X3IbyZirhND1g", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102239972870666007325\">El Centro</a>"] },
            { photoReference: "AWCwydhJCdWTWE3xQ9EHu0cf24aPZSmQs3oSelZPil_qpqUSu_besYGHaKYEOys5SWj353Gddcq3NR5_Gd2TzTw9iEdd2STJhAXOofO1Whewdvq3-v37vnFxAcFRu-JaltyhVqldBUMZ5eoSHGegFtFkkPxJdM_qhuvwuFFf_e9ruOBRNvH5KFAG4vvUC_1GwrvB2krg_ss_24kcaQDgCixhGEdd1eejLlWRvvCJJ3Lu2KvDfWd9VsI-cqhmtFlBgoN87FN3BuwRaFBlAHhUvOfwkPpJHNTOXGj3A4l3BmgdyuE9iUmnOgWZM19yzneyxgzXeI93qo9oR4yImAW_WGK3sIWZWP9Y388OTU7iVX-Gm_A727pWZipQhhNZ6DNXxJ5hYeh3WMjxN9R7rkuu9hcA_nfDo3lmHGiL7GP5PW9a8q4", width: 2402, height: 3202, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102381210948522389671\">Tim Kuo (HA_TACC)</a>"] },
            { photoReference: "AWCwydhnKCnQ0AZXbBNGX8TLm0orin01sWDdSRQl5aHyaWPriv6tp_Et-alQmwg_84I53-Q6yrmR4utq-JCMBKMDDgyTN6ck6R-fzTTmsNiLtOb37QTRwxfAfBXV2Ggc-4TylsOyOw_H17kWyLCjZe784PLZC-Mnu8iHynp4XmK10UxrC0Agme3lSVox4hBFtRSjPSN35-r_UAV41IKHqQMHl64-Z8QavkkA6S238_8hXrYadVvredHUCFVnnAY_x0oP0v3Dkbo8TdEfNrNZcDlyDqj82zYucaKRcEgDGzdX6Jrn0d5LKoAN3-KriZJBM1ioyBpeRyRDHDknh49VnR8FrCnpHdWl8dtfh-LABAOypQOA5II6hkizH9rVJINXhGEA-R40OL7f5_mZjfbksg7O926oseQ0_-0YdyQlbjZFjYfr_VFQcyhkWRdMvmkKW_wG", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101339794398503306152\">Wang Jun Seng</a>"] }
        ],
        summary: "타코와 버거를 즐기기 좋은 힙한 분위기의 브런치 맛집",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 타코", "육즙 가득한 수제 버거", "여유로운 브런치 메뉴"],
        tips: ["분위기가 좋아 친구들과 방문하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "타코·버거·브런치", items: [{ name: "대표 메뉴", price: "RM30~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/centro_el/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7149301743580024770", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%98+%EC%84%BC%ED%8A%B8%EB%A1%9C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리틀 이탈리 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/restaurants/little-italy-kota-kinabalu.jpg"],
        placeId: "ChIJeWjdV49pOzIRsxOxD0zW5Yw",
        placePhotos: [
            { photoReference: "AWCwyditAtVVtAGGDG_G6d4uhueF0NOZMVlz3iHuKrhFkLuPBuDX7NzeFLUSMDjwmVVJ277wa2PR20v8RYjZGbJc5GHJOAmeFraYkQDV1xvjr2mbWwxVAZ2bKfGR7xmXgXcfwieWdUR62ZwRQdaOG5GHVpXqTg_qiukWbqSI_DeR2yoAwi_bMeDEi7gJLAm8Pdd0_Ln2TfLWj9bpLlaCykJD0DWAe3BtDGqGXUSbnxFHyTSiaAz_zJ0d1_5SHNFJtMLch3gFU0Sj9fHVA2E91u02OKPYuyQWIvukAoEn2dBwSd5KRReQFnrlzN1DniElSNvgrdbtJMC0E6foOmfaODyh1HX6WP0V7cTzrmVI1VsICFv-8937UFZ8njZx9rCTkpsPDkMvQD2SYncJa1F307JW4nMVh-hMRZIqxpeYPv3PUNkPjGDP", width: 717, height: 402, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103356248698788854613\">Little Italy</a>"] },
            { photoReference: "AWCwydhRJW9LH-Cj6VpVmMPTiMm4WqFK0Z2yp7eYsQa1P4FyuN3qD_K2pllPtaghEtIzb7c9gXBz6xizyhHxO71fRBClAiGjK7GVj47VldufjWF0aunbKRCbMTmUG0or75NrE5N5qk9yK3egYgAgp5WVDv9LDxy3FEfJxoA5tBFaM8jIam-1kOfzuCYJOAVloa3TxaH2sHBxU3d2Ad1J6pP1tsgzJ6XzVjRTdoG9s6bW5WWUc0MkiZ5OUiGBfG3qsb4-AKwkt23XoJrrVZJETtk-Te_8xncMDsQrO0Z8lL-zbZXAdoVWuG0xbn5t58VWXySSuifmfTK2KKOOkMRdzWH-_kYxHrd5OaZYzYW8O9KU_h5b6F8zNj4AH9p72OP0pAoF51muMqtNvArqnhX5ePLnH-02zUofdGAno4YDVsJO1RCZPVnnf0_-QScGcLAouC-H", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116934711264113905562\">Zammy Azman</a>"] },
            { photoReference: "AWCwydiGopKaj5HA3QsSZUY0FUS8rbHh8Je_OHImt8Q2pQ9py3YtR3pUHzOyLh3I1u8s-3qTqKeLhMmc92Ks9zwBJRNVxmau-CMB89meo28y6JpI2nrhUMOJdXAtWYRS7ZIgsl82m7cQocFMaK0ls3KH2POwuHoWybW7KzVoKc-HJ7izsoIKXJT9_xkGZoCTFXeJqi4VZKUo-EPFhzaFAHONgLJULTe70J0wJigVBJh2ZVEAeprbL2s0AQDjghUkJuOeD0-WqYHnsadB_YiH43Msp-ls36mudn7mG1gi1YHk8GXXABUENd62UVBTTnPOOW94eCVqaZrIB_lqX0BooiJTATFABysUYetFjjRtYulP8LEfT_09360slAAzZ-SUq-5twATqmcFz5mVz5s-dylxRcO1i9ugu2hl8JW-uhhhVpDY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109592220788357392693\">Fionabsolute CJN</a>"] },
            { photoReference: "AWCwydgcc65jNP6K6lS7i7_cNjPMcEVUfwpuLWQuTIB2-QjFlsOQB3Fv3jR8agP7KdCyCFWXgDP4v-T4Qs0mHdAyZbn7YqXOcAdYi-EamQZ9LrJ5FWyl6BA6ajX8ovIkauRXk-ozHZxMdina0u--jmFzE1xQ-qxSYBCPYv2tGAMX_z_3K7Tx41VEEB4qXOOAvtJMoy1vzQhJKIz561T9mZ8XQ-RPQY6dCY5W0pnsr3tegzNLQugp5fsfWk3IWn1IjBwDhxUeeNLiE7NvnwStBqSMGUxtQJECdQbATqRaJg5XZ48uwtyxr0Mi7bKXs5dEUgKeAxvAoDM5rhPRK73yVHumNrDS4V-2rvxrJA8bqZ91VG9dRdcw9mOKh1clxw3lJuu0Pv1wMlgsSon6z_1WB8oe40o021r4xJuxjP0Gwf09QKoVxg", width: 1072, height: 602, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103356248698788854613\">Little Italy</a>"] },
            { photoReference: "AWCwydiBeRxc0NkJCGpCLJ8yT29eJaGbPWVl9YPDLLVTkux_C9pS4uYzmySXDM4CLMSkLnpMaj5LSWXb4wSrrK19FljIO9USLHOPFlL2iZZwMhpxze3x0vu9UCArWizpUdy9UbvKB4ceU3NobLaus69HuaOshZcG6egwhp17vWJQmSqAai8rbogGWb7C4tlE30iMsM_nmSuH5UQ2mdm3r2ShnsAk2RExV-UgymRJZmwfOJOa3MF8WupuLJBYwgyUVrN0Ph84xGR0dpWddHHyVw-EDGYsbqmBjUhMpBpca_m0QdFYPp_eHJ9zdU837HmB9uoxBBKxc7vwauyJzS1RbY8iO9fU3iBit_tr9KB6ak0GkN0YCG5M3TqH_9Sc2SqsOo9w3jxJQhKfqQlfQacnueneqHd2JsfnZxX3bUVCVXjcHzLjakBj8EZs-wypIllezRf-", width: 2400, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100859922279515333114\">WONG TIING HUO</a>"] }
        ],
        summary: "정통 이탈리아의 맛을 느낄 수 있는 파스타와 피자 전문점",
        updatedAt: "2026-07-15",
        highlights: ["풍미 가득한 화덕 피자", "다양한 소스의 파스타"],
        tips: ["현지에서 즐기는 이탈리안 요리로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "파스타·피자", items: [{ name: "대표 메뉴", price: "RM35~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10152756557145772979", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8B%80+%EC%9D%B4%ED%83%88%EB%A6%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "칠리 바닐라": {
        photos: ["/images/kota-kinabalu/info/restaurants/chilli-vanilla-kota-kinabalu.jpg"],
        placeId: "ChIJwzu-ZY9pOzIRWvoLGweqNNY",
        placePhotos: [
            { photoReference: "AWCwydhCYYmwIlK_f5x4fMdKSmV8tN-VPTWP64svSDrlNlwohvE8aOqvvwisLjVUCLrGDzlsETminvAHPp4xg-Aj_HFYuRpULcTEatsf9JWqmpv8841N8ENozBInSXuC84NMK1gGOWSS_HHrh6GjU_JNS-7JtwNuNfEjrQ4kcoDFyR4JKtrVfHFAoAhlWaa4M2dEW-nTJ3XmbMQpvnoUrl5C819F1S-_bJI9QmZ6OhbVufMjtLdWFEyeRJ8wDj61RraLCpY2FLASTBbX9DZA66OojHEdt-5fX24qUoPqaFQ6KwZioWPLa5TopptAW0tyTcOAmvMjc3lg5I7Hl3qY9-55U0hA1cbjSdRt7BOlTSMNlgtrzomn1Bjx90H37r0x8JjjU2NWjOZ3Wu7LQXeLUbYAtD59tBnZ-j1NjMltyuPtwf-v9wy8UtYM4PsIoWFXYQDH", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117990552237698417771\">Laura Worasaktayanan</a>"] },
            { photoReference: "AWCwydh-9FM9PhbH2dz-HZlepwfs1xOoCcnD-K1nHgln5rXotLPwq_Z7mjs_4n2wdH0HCSe5UK4G1ZyY799iwhq74dMbkwAvLlnq9rwnaH9gf3jj7N28JUH4oIq4El1ZGttrBoDp6hO-Vsx7aLH0XBTw1SrewAKy9s3ncUJPkZEYOn4RFJYbkzPDymDJjF4XPdnU0VEgrOS-J2l_8MX8zOIw2LnGaTK_Wi5drWn3EntAmZWPGHtn3chScBxvuE5LukWylXlkOJlTJ0_O2xsPmFD5gF44dp88OVpX_jMMBpkvgn0UVHC6H9QgLjMttau3i_2qFsODg9-TVxdYNfc7F_wPfvhkvmXlSkR37zkRPDG2b2CjcAIvkn74SbZY5XU_rjHulIYeltX92iAcxME6MMIkIv__zbfTl2mm-vXeu_J5bTF9JqsISq6W0BIOBpA17lSN", width: 2880, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109493956034356767082\">Chilli Vanilla</a>"] },
            { photoReference: "AWCwydh45tVWGnQB3FB0mIpbtWupoMZG1Uh08HtYyG9EUstkblFyvmVPjyYazdfWJDWS0elbvQkWxDIRimyleJy0NCdaYQKCtRaxFHE2NXmimiuQEmfa18KtL8Yr8UUO6Vj-fsWR9D0ekoZQ9Gj3s84K-li6fLps93eSqx0WL0JmFePqoZEjJ0p53163Wgf9gGRm5_MDsBOGCZUyQDCibimpwfVHfJaJmaVcqElGzEoNldBpNtHSylciuwzl--C9XJnyt1JE0tGSf4h71D-NSkOUUX4LNOsumXSokO_JpKXiJKDqgaI8pvSV-JElBPvDvzCmNclOZ27_vDKgEnSnO7NTYwQNQyvdLaCUDyA6dNhbcyOmq6Kh_QJ2tE2c5bzjnsX3ia_WcUThYkNshi7w7eSn4PO3g7EN5j6WTabQnuqAMc9-H8DJGVL46Hfdbt5616Qg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115474408549787660680\">Xiang Yan Pok</a>"] },
            { photoReference: "AWCwydgCdfP3N8EaODRvSX4HM-GsUQu_Y6Rn9niettun0b5I67Wn2aXETvGVc_eh7k6GHMdI4IjwEXTuCBVl4cP7aO3Vo9V1XoIoSR44tKFgXcUyPZVDtoEd2mhcY8WZOtxWN8GKiDpxftxB40iVGU1nbgEqOSOewnhvb61w1JdtZWlR9VoL-EjQNs3GDLOZUnyD1ge0DjFSZAATUhjtyUNQof-RBuwAdqLiFoMok6I8X9d28ZFA9IWk1musG2MjjSUMkOe9b4SoqbBwnjQnR_zyKm7gBx3O0cEKPP2fhY2xZB6Eb-B3F7MSC2UVrkLAbIOjBGI-5oDeK-OmZpsSU0VKQsHcmlCUGhzX_2jb0UoOf0x8wK8ibVtOk5eTJLF199h7mJSa0buydU2rg6Fa92191rDNC0ueEF22ERrtTWbcDH8UrIkDY4Pe2qvfDU-2gw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109152125059498190736\">T M</a>"] },
            { photoReference: "AWCwydjtw63y7VPeIuDW2ro6-3dPhUBMEmKSIaM4g4pGWggatXdx97DDCicbvoLpuvaBNbAgpAyTEyjrYxXKB8_0ZZdFGyZoryFoKMX67o11yilfkdP8d0TV6MC5Ku0ZhTyBBe6uAE4w3-as5ZkOcdWd3fAi_vOehcLxCkS9vS1yc6yTLzTH4ZqB0G1y5oS-ssVUtA4oS-ICilyPgTGDVR7122WPCMrxZnTDLrlp7DjJ2SwJHg3SeDMR4lowCu29xcKLEckT-KanQFQpdpf4rzEMkYMSIcdyHAhSZjtvNL66H0wQ3KXjCMgS6TScsvF4VTQ3PjkX325WA8qyJ1lHQ0aKfGV5gVErHyaAj0BJV9ws-v9nzTadJBReL8fe7uOVckBBcAAqQU_1NVLdK0bXriyyrd-BaUqxrb2EiifQW-08B1-rbvNOY047H9A6rkya4g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115474408549787660680\">Xiang Yan Pok</a>"] }
        ],
        summary: "와인과 함께 굴라시를 즐기기 좋은 로맨틱한 레스토랑",
        updatedAt: "2026-07-15",
        highlights: ["깊은 맛의 굴라시", "분위기 있는 와인 리스트"],
        tips: ["저녁 식사와 와인 한 잔 곁들이기에 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "굴라시·파스타·와인", items: [{ name: "대표 메뉴", price: "RM35~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~9:30; 화요일: 오후 12:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pages/Chilli-Vanilla-Cafe/147177555364821", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15435148770400795226", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%A0%EB%A6%AC+%EB%B0%94%EB%8B%90%EB%9D%BC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "어퍼스타 카페 앤 바": {
        photos: ["/images/kota-kinabalu/info/restaurants/upperstar-cafe-bar-kota-kinabalu.jpg"],
        placeId: "ChIJ7VOQFo9pOzIRaMCgHDAniEg",
        placePhotos: [
            { photoReference: "AWCwydiVMMiiFeYrVKQnVIStKNUJ6ygs8HkKrtjBQk0qvTK9W7FoE6jY8votPuY6EK5qsjo85nNM3artD7fHFyupWkjktDp2ZJOTNqfWI8Q5xI3FXABjXV2VQuLJAW0HuS795mbVileNEiv535DsbDnTPXSmwPpoWHmjLkqoFpG_DRFo-nvlI3abTxnVnAdt3OlvERd4DQtqHsfnH6-oIDVt3kkaHDe8pIpwK6gdrR4UjfRTGII2xmEBYjJqPYuv7XoQrh0iZfb0W2GnOtSCzSIkKcQv0bTTxJNmZ23f_dqh0Up86znvD52Abu25WFH0jLtY2sG5D8MtaK4MNjYTOFwEA76FaUPxGfFdHOjlI0m-5vAwWUGE4jFCbX4XDFNnis_gs70bo_vfuzB6kq0lq-s3fBqi67xczMWIca1GRcA9OO0mH6eyw0y2K28xr51fYkAr", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107959074738638447427\">jonbristolbs4</a>"] },
            { photoReference: "AWCwydiQCLGlQK8BqJnGe7Ml46pyn5eCl_2nykD6EdX9_SPWzpjir-9kIL-ReHWg9T8kLHWGWdSlzzcX73YWnJqM9nUCfIIrTY1nVPAlKgYnGmzDAy90BHiAhm0oPoITjNGDtJ0UEBM3uvI7PWqR2YkohrbEOczdkTQSW5UA5q2Ve8DQZsRzqnVUNSGtH_6EiLCr1xoFl2RGEYqN3qur9daGEigTrSpbE4-Dmj1VPZPlEOXu22f0rw3KZMsIZ1V92eAbHKscYKUNacq8U3H2xVyg2cLt9Nfobs_5QWhfAhcRkpbTtHUZ1FH7szzMZD1K0k5_Zy9AYEfOF2_GiBxQS6_kaImWgsyoKv4ee_9cs1dos6yLz1AjNvPMg_69ot9ANY-vR1feYk8IwDdIoXZA77OFrZEeNCpGnRePfB77NmNtLMsdRQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101164313370737686868\">안예림</a>"] },
            { photoReference: "AWCwydg2fEQ5sTPIhyr01m201RH6KgxaqjzyHuNPIwjFLx_hN7zR90gMv7c8YHUPfVkbE84QRQiL5QYOpTutkJEJtIPPZq9iMRn8jW39LoAwvzA9Y04kc_4zVBBDDqoWQyHI3QZxt6u-375xR-vQ_Pgps7W52ASQJ86iXK_p3_bZkyjcWt27yHgB6JXL4cjgmgxuf8Q36VLzt2z-70-zG_1pm-5eskxj4yaZuDm6HWvEe4ACIkSFVC8F9AxSq5uafEy9dlyOaYw52EPNUQ6GwcMylopMmc4VTsjb7SZxYkj6r90GhmvijHxCSZ_RxLoSuyh1prNCommUp2WO5I5tWGiO4SPHrOhCpzUOuzEW6CSaRsHKiNfR-H81P1EKkAP3pcfrG7CQZOTTknLXqY2BV4qm_VoZBDR06bkZQsatbts-PELUVIHPZy_YkTZrCItHMEqg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101720553180737354833\">The Foodie Architect</a>"] },
            { photoReference: "AWCwydjnQRTLZq_LaETfmcX9nqPxo1LlnMLPrtwsSiIciaA7pVWsV1J5ApJVvsEQlVlvHiQ5NHRBa4xrVbl2zQOToTD29fTDND1ClZp5ykEkwIjtcuTMG5bLuM_R3O7L4M5zxV9OjNuyxr2toLMNgNEyuL-Pdn_Xk7DvAFYAkuov9rZhG9MjnbYSpByQ8kI6renEwEY9cWAOXKmVjCSvLr4TjgObe3pcUo9qy3EYnHY7JHD9uL73nNDd70ywTqyknW7P2o_j6WAMOyy6e4D4GjSIiBZX8D4aLY5HK_ZKTOSgclwZrIClQc8dF0PDGyvyscd92HKn6os6iIPu8MGk5bF3WBQY4jT2Lv2I5dhHOZTU-jHMC07H72MyfU-M6lbeyxg74uHjkP_d6MI4e2z4dJ7PkYIg8wsIs2m3IxZ9mY13dS0IkInXyLCFNTxE6-vnSieR", width: 2731, height: 3642, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114909112766698826653\">Veronica Arendtt</a>"] },
            { photoReference: "AWCwydj0vdqZq9RS1EHdx033ef3R59MBJK3FiT-vkF2pK5uPchAx98UIbyLXQCHakYntxdHpQbYZUajon4A6CX4-6epteqCvwf5LMNK7PLwRsmABAg4_pyfXfnpRFr_PorCa5D-fskfzQw-pIYyST_BzUSe8HXlHTJbAVPuVuYOLY9JIHa5hrRU5AKiqX8422Tjud5YT2SWqMdKRe5qDrGwQp5uLWcFQ8Vi325JpoojlqF4mEHuUeFxXgGeEdFx3C8qcM0gx_eYp870lHjAiVOqShJSjX2J0z891qPoOLwjx8kSI3Oj6jvoGIMPAfpWzPXaEtC_Oscao0GeJzc_Zz41CIpEGXIPJGbpeSUEe5WajFSJ6hcPWzNUIg0mOXkXV16urJIDjkN-Xks2kreCOAR5gXKpafJfDXEkPSIvhV1CLnlppo2zsL-MV6epFh58xpdNs", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102765980123352858434\">Jimmy Husain</a>"] }
        ],
        summary: "스테이크와 버거를 맥주와 함께 즐기기 좋은 캐주얼한 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["스테이크", "버거", "맥주"],
        tips: ["저녁 식사와 가벼운 맥주 한잔하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스테이크·버거·맥주", items: [{ name: "대표 메뉴", price: "RM25~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pages/Upperstar-Restaurant-Bar/131621573601734", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5226470455155671144", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%B4%ED%8D%BC%EC%8A%A4%ED%83%80+%EC%B9%B4%ED%8E%98+%EC%95%A4+%EB%B0%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "셍힝 커피숍": {
        photos: ["/images/kota-kinabalu/info/restaurants/seng-hing-coffee-shop-kota-kinabalu.jpg"],
        placeId: "ChIJa4gAw5FpOzIRgP8AeFtuHw0",
        placePhotos: [
            { photoReference: "AWCwydjggZayXlzFIFGHtARA82zrWhFdqZA6hur3_NIbLjMUD7-YhW-UMSzYF6MITEGyvO6ancvndOK8_D6rszipgQ6_HOpr7-T9MV40CgCiBfTVgS-fgzxruGRoo3r_6HnKy3652NKxKP8XesT_Lt1j70y2w0d6Ys7d9fyltoQpz1Mx8O6VgCtokRQqW1T7jL9WzwipveDfrRmhbzU9j9vyHaHXHTGJ25g559v2LbtaEXCPefXjuTwcfgwqu8QUWiAq8DJMoJ3KBQRXwr04M3en1xkhidI72H0NLsQqeRFswwxuyhQvppLMPAdPSE6R5-Z9TwjTazvNGiz4l-74mDHIqDQbiFxNkYhb6ixWAyWLeNpwELyXuz-ZJJKZxaXyqSxPZdq0YSlRWhK9X8ua5jEZAcfNA4QISHN6s8vYJztgpvcCJx1-mb_gEt-F9XUVBuv6", width: 1320, height: 992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114798493019540812286\">Red Yellow</a>"] },
            { photoReference: "AWCwydjS2J5k-oU0DgqT1MK1vyrKfiwIWX8LDGdWlMtj5dCFe4iYq_KuZxdoFZmOgP7rQQEdqSEXkzHJ35FYIHxAIFShV2c_1xtSUtexKJGy8NmvdgNzZc13xvXtOdNwsBvflZ8jBTFH7MJj6SBGLNLVfAMv1WpMf69Pr-6x06VLPN_QKst--rbCn9kSaNuX_fCr9hnSizydvKbxWgjzyzYEvjl3MmhRcszvQFCZ2c6ZfNR_DLypGJmnXnArHH-GzlcXcV3299I3a2OBR6vVmPwhHza5wnmXqrJkqoKhiwedVoI7UXp8ZWhsd42MkJzwxfJBR4KxoksuRm38AH0hcVqc89sNqVj_co4HfuZ0r2UC_jVVGFkp3BuktF7QUjnIQ79FLlxqQHEIi07dKdppSFoIfdVDahGMXze1ZnVWET6cIJZAw3fd0HiVis6s1AAonbPr", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106964315938975329753\">Benedict Isles</a>"] },
            { photoReference: "AWCwydiFqhcp6bXXnu1t9mWslNaQyZ2_RO7-IiOaaebbyMH64mK-OVljItHAe8cdAoj_8LXYjeQkxNy42YJGLIsHpfs0TuVK7xiKGGqFtd3I3cwND2ZJk55G4Hu1VrLCtfo3Lzzs0wdWeRKxEoKKo8fe5b2njhAwUs8S_uQkocMkzK2I94tGPkJdfF7OUCwaEk5C62rRlb6jiGc1O5BQWfVolUo8iafINVK7zAW1fdlxtpljL8oqZWUECKQ57dbdaS370aBYGT71uvKCM8H8tlZcWNUOBa4iKpeIXBXRVfT7LKrwmvUlbqLurcT-89oY2e03s58HqtN9yT9z_8IkkRsVpsoA7wcGGEoqD0SgnmrmdYtWtdKQFy4zw1MFzEpRp-_JPLSebjV2PF2f01gFEGd13j3-tBoGQOhNCMpeoJCp8CMmmFOh", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109150826592755715130\">AnvisTseng</a>"] },
            { photoReference: "AWCwydiPuVmlIPdJZyRoo3NQG396GTjW15P1A36LA-wcPrvRTYPHCxm_DJ208igfGboUttXkpBLhyogs8flM37KmqazT5mkhTTVuZxl40XbChhSZGdXQPdI6ljHdGNuLyb8OL-9CheZE1rUcr3iIXnnUxA4J6ftBrhzJvVSQXf9jbvgzNY6ynn1O-VTv0H29LUCW-CmnY04uLkuC7WtOTUs2xSg1MUxUrccgEhzarnfWs1c-6XaWd1CzNKo1t1WNq1qEZDLbB5XxPR8hofunpGcl0D8TGb6UQWnpbfv9b4ipNROJsI7BDWW7uiTr453ixnnJoBmWZGrmx_BuVCwNZe3ZjLoSkX3osIq0NbW8aCR2H6c8it1I1eDxfz7NIAp-6j-lc6ZRuPnbbGOyY4BzmkXhhVQ4GkFN2YUbGp3AwiS3EHFpqr5ptmBGY3CUX6FTtg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106964315938975329753\">Benedict Isles</a>"] },
            { photoReference: "AWCwydgpb7eHQBhJ1OTTshBGjnF0GJFACTgPFb64x2pPbX9bNZIrPuKptLRHPrEf3fWvLblXAuLa2HBSzkS2au-FAyOqHM2Hel2SnjviAIQv96Y63DDcTuWd6Bc8k5Y6KOJmLfIwgpSS7CJqa7k3mwg1zWqvZcjOlKz-wgZKMZI-SAeyHA_6LJ31HlT4Tw0-TfF1ZQa1pM0CD3t_bvVjenF1Qnp77biKIjq-GW9TO8qN4VJmPRpI4jsdK6O1YO4Uygyh-F9AXvvOuzWSgqklkY5oegm1CP4uW3IlKu20lFBdMbafr9XU2XlQFokTQ_v81bIY9eF6y8YvpzZKfGpEuMd4uCfg9fEGFgBc4h0yir2Cl9GBFZPxaSY608U30x9SDRTkXHkNZe9z334z9SJqw8HPjpLiLmDnEWv_XmOw2rSSpxa7kYGiF3Me6LcnTrL8bA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100727180353979722512\">Henry Kwong</a>"] }
        ],
        summary: "현지 스타일의 생선면과 로컬 누들을 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["생선면", "로컬 누들"],
        tips: ["현지 분위기를 느끼며 가볍게 식사하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선면·로컬 누들", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 4:00; 화요일: 오전 7:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pages/Kedai-Kopi-Seng-Hing/155823381139947", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=945595785905504128", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%85%8D%ED%9E%9D+%EC%BB%A4%ED%94%BC%EC%88%8D+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킴힝리 커피숍": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-kim-hing-lee-kota-kinabalu.jpg"],
        placeId: "ChIJxbzpwJFpOzIR4xIKzL8Gdnw",
        placePhotos: [
            { photoReference: "AWCwydjiq1VB08cTwafGDzoF5LMgb6JJdbeYdQD1vaWQ9vOr32fQugOCwBmAo1Tv5y7cgANCPqi3_Mdquf4JvqIxcFug1FovTYfcdR6DSMWb6vgAJTYoTeghV1ggwxYf1I5aqw5CkmzKkHU9flZHfupfYolACaCJNgjdMM9tAdY_iEF7sZaIk1V3rfC1enlgKhSXC8V93tnW32VnDiwsAn_O_JlRAUAr8jZuYB86xLPqb5hegaOYWuDvokQoCz9It13VWtzXjd7P8JTqU4YmJz_xCKEptVHzQ0Tl0AVPRZZGRbrl084LdDLn32NVTRjxV5eoEGlSJtzyPh89lcYcMFhm78ebjsRPNs8R2uki9rXifVDz7QvHBkS7rYjXCsHxughPN0nijPBq96jgvCUX8s_irNgU5BxxqqSvwpMgK361giWeiw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115992931714022397063\">Boon Teck Kuah</a>"] },
            { photoReference: "AWCwydgwhKS11nS-1W3SxWfCQGkQnFoNBgFhSRiBMXUBdp9fbKADYyvDw_4N2WwNj1J3-9f3XGjR5Zpv9vZEq4IJpPnlQ37F3OwgQngPVvYBNYgb3DAL5Z76NpZ-zejqkq86edMkhBQraiDpW4ckkHm-T_5UKbJ83WyBZIBpnY1rbWQBY8f7TP5i7DcSWfq3-gZMDgb5c16AmuBzcrRAPs0kH5-6PPZwPCkuTlCVTezwvPzYuPkzntGXXlNMb_89whW5YTNwHtob2mCalpDYeTAr7PrAwwfL80Z3Q5af36lC-QoX83vQihGZp3EAa-dbDXsbkjmE3su_ba-EuKYeQUL9KN2SFStRCPbDQF6CI984AGSaSvHrEuSfNZx2hHnJKAgxaHygriKF55L60cybkVHaBG1N3svEmv4IV_dOR0gmDpVbS-lH", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114417248394726372338\">Simon Tan</a>"] },
            { photoReference: "AWCwydgyu34yeHzPbiMYPaH82lHfHVj9W29w48ruMNFYOedINgDTgkiH4zFwRh2uWp-xBomzNdTWETo8mC6cGaSkM7JfYwS4xCn3s6xje3ocH2idHssmGvQJTBcUqmdvOkCGjXy0K9WSTfTdJwAZu04MDl2-hMZuxsoKPQukjtZh8rr0FT2mPqF7PlmSShoB3VhujbLHCV6riNWoxUNDB4WH1ZFaeE7hId_N3QKVg4Cf0Gii5Aebdh_xnr7VnG9E8abW6ltb4u_1xeG4Q5k8_VjKTh83cv9xDlXZGepJRzU9LlnYRGEnbOD5Nvr2LrASbx1bgPaTaiKSH646_h3_licUxCxmO3kBqh7zn8V7X610m08m8prptbXCqrgwSvzEqpJfZM_jiuCUI6lbqcN84-KlGQBYh5k71f3RxeTLMV8TRkCT3841rQsSrmer2udO6g", width: 4030, height: 3022, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108216989045366760707\">Tony Huynh</a>"] },
            { photoReference: "AWCwydi2bmHWMIXgTgK6XRfQXZIzqmnnkjr3hljIUl7l_3aojt_WsZQu07wniB33nC3TrvXyIrAzinETKh-09ooiUasfhy_daH1zbIT9CQ_xN6N7j7fdcU3QlMiiqloLGIs7T6qP6JYJhdeiN7-rPtIRIATFihhtfXPTvHaWuoN5Z39zabrFLh5hHwSinTz3JmxUhTAgbm4HKNlVwkUGHLicYp9HVwqB8yadaHrZrA5Tw--gU0W-vygp_2SnrgrZgOy8y8HKGmWYzHYqFdFZZ6Y2ZXLbrkHVGcsfgToXI3Upjoegp1dgmbbe916IFDvijncUXl2ca8Bo2iA-Tq2PAyWhQrwPHzWEmTQMXZ_pxcYUO_uFfh0H2PDIRQvQ-Lj-7Bq2nFOvRuOezgsYW11WJTTBTGSq1PH7_hTR-I5oOKNDy2C0EfmHTrqKpAm3JHwYcJ10", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109003870362816285187\">Dan</a>"] },
            { photoReference: "AWCwydiZBP_TepYkPJkZsqPn1yE47kZ2ZB_fb0sAo-KPvXL4y-im5brE_4DOkXntmn3Rpnfbe3_SWHA2ZN46looa6iTEfKa5i4BICfa3ixLmhzx0zuYa0Mt3_fILo1NUjtOC9p_arfKPyLXJJrsjGGxXL2-93qrHyfNWKtKQi0vdRjM6Qq2FTYv2KM3KWxI0bMIX5qoiKYOyF1q6rSw4KEEW51ENvx9Pxfs7N93z5qril-UcBY2P0_hYsJSuyXcCC3kpI7_ZQmO7MnXkkLqpwQ7lvZaWbkZEAO4p8dcTvp7fQnvHF5KH39j2xVyabCTI4dHcrenrqs8ciwAiDpu_9Mxet2m8UrgnZYnjej6Ii-D1sb28V5vCXSrxSi6gnYZIuN_HBTjqBHWMEW5nmiu4plO_-uZSIONFnA3Bs_VYq2IjMXvcZwLzl7n6hyXgvU7GEblg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106754218377080074470\">Lim Ting Keat Edward</a>"] }
        ],
        summary: "사바 지역 특유의 맛이 담긴 면요리를 즐길 수 있습니다.",
        updatedAt: "2026-07-15",
        highlights: ["사바식 면요리", "생육면"],
        tips: ["현지인들이 자주 찾는 로컬 맛집입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "사바식 면요리", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 2:30; 화요일: 오전 6:30 ~ 오후 2:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8968363128786653923", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B4%ED%9E%9D%EB%A6%AC+%EC%BB%A4%ED%94%BC%EC%88%8D+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유키 바쿠테": {
        photos: ["/images/kota-kinabalu/info/restaurants/yu-kee-bak-kut-teh-kota-kinabalu.jpg"],
        placeId: "ChIJ2bKG7YVpOzIRef_cTabOj9s",
        placePhotos: [
            { photoReference: "AWCwydhdH5we_QoliRwK56tcRO6AulFEpE67tiuESesy_zehIN6WfxtrnEq9WSx9TQqGKPiW8_s80mobpR9CiOSCM6B931ZviJBXyXISvrYVKomgyuSFM7xsNz6RpcgT1Z7wW3s2ETn8ApWt8dBNikoR8ARK_599G_UXsaA4ucg76UwBqqr-rXXQbG4kmGyw6reUv3RQDjq5yFI7xZ7bTPDmguFw5t759dxbltVqgsvWd5g3u9pCDbyZksdCvJy_bic84e-TbMRqXPHds8OC24wn990j2CCIr3ETl2n4hJvM1oTK-nGcBSeQMrgvT7fojnG8sKj5okx7qWg9buitlEMVcr_mEdXlMsCKKGRmfRhzGqZ8JeGRJ7ykV5mMFmd3B2UIqZuEr_AqMtpr63XWniE1xajTnYuIytGw1fiydF86oRnwiDDG", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111138716085874591824\">PERRY KC LEE (李國柱)</a>"] },
            { photoReference: "AWCwydiBChxtVqDzEegeVvfYDhP6rMF6wyI3vPH1XC4HxlQwCbHw2DRatUm_g6qkIQrevm_Ubmff9RhvFBT6LTw59JhF6pVGe7cvRjDMn1fp9ySwgXdnaF9JPbQZUj6B6p4kMTeNGkozO_c8_ZtWIeK7t5hkJWr7Ydy29UWOa45w1K1mLWKNAaSEGKGIpOnlgBi3ZNCRpoLuZa1BP_ZQjjZcR6ZsxvvuOcKxUgljIh_PNa232hhy2bj5jWDSIatvLkJOT_AU-JOfyg4Y-wnoe7JRc5thGZ6xaDuYaxO7pSqwVux7-HVr-WrYiEKy1gD170yr4ltYObDjunL_4rNpbhnmdWr9I5M5DG-Zc2YWRddChYbX_a1bv_3L9CqF9KpouVWbNitLRh6ad5XMOJaOGJeh0AD9-NgZdxep6iczhyFi6BIhkQ", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110479363020015744688\">Eddie Hon</a>"] },
            { photoReference: "AWCwydiC5gYNpHX7F5HwcQKkPlqX_qOa--e6j6P0hT-T3BZSC4Y2VGSG8aA3gs-DSMUzOdSfGPbYJgE9cq0RgCUmVX3X4k9HZqm1-J8sgspTVNrwtzjTZWdvTf3hDUm5EA6GLFr60fXwWew80nVAEd6bWSf_CHRmnmrkibPxVvcHu3gfETU2uL2CKRVGHGiBJSelOPYI_1lBxdJBbyMHm5_tyothzizNWfDm-WzhdpNSM40HdTjMiVPN9PARb4_hT03ujuUUwnYEF_8_fbLupK-H4pCTw9Hj2ZkQ0yZ2BE7M2ut4b3Sgl11PVL6w6DKxvzCnXc62sbbq6tg1w2_TSAD4ywqYe6snvglisBBr03-H9L3aiOvelNEsNopQfs1Nhmxu_uMtKQ7Efe-lyVGD-AWdx4d7A8nxvOl0KjBQ6E8ptWu-nZf-JYIhXcqw7qRIqmq1", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100337277435936088437\">Juni Chak</a>"] },
            { photoReference: "AWCwydh2dv-uOu3ODYfhWXgCEUO2fISG5TMgeGYEZWAR4mCWO99m-L-dP9jmoQG4umAqoTK5Y9xbyUkTGK_LC8toNOIFtjMU0wioch9rrnfAoC4ySxiE9yGy7ZCxrBSunJwW67MwnVGMVv1THT3grTM8npyRvFTb9o9QuQTLUr6yN5E_UVp0I276QNiZi2wDGdaFFo7gXEjCBhvtm2MWK6iDJTsLhhn3bJ1_iLXbaZcLKmWwVILmRg6xbW87tfvOuXCsA_CoF9lnMHpMzwnW3qp7yh_u8rWk6ZBwU0s84l7sWYeLKv75amehIPmUCMrCxFopqsD8-LlNe0OoRu88DqIpIDQaOQMsXq8GEQOlqwNTASyJHvMg66_OjU8vcIdz8rTg_xb3fxH408pPJdkQV2bngKq2Rg2hqiOkqnlq4za-JgHWoF_Zp1lVj7Myxupwtuuq", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100002035399065594391\">Kai</a>"] },
            { photoReference: "AWCwydjboC1nTXZwknzjfLwHY1oHC0hWzJtxICqT3LKDKAjyOUSK2dAWK3l2SLbux2VatsIfjxKINq6ImKXRp37ejgWubNR2qpT_JjMTnegQz-wmchyfXMsps-9qTXRT1Q9M6PQRl9meMg6Dno2GA3mT2hSavzrejvYlvbZGfVkxAGIdYWD7r1hD7bZ5_7IpF4Z5qYJTGdb1sbhwpH7Tvp0UCUJavxuKWmYJ4zCILfnlO9k02IR9TstqJblmmLvrGw5DoNx2yJFImHr11xDxyjNbWwIWOU8h0FMfVcqiKhjCBDSyP7MAb8K_jPV4ADuRYaCF4KmZ43HlFLyvX_cHiugKujKYAl3IFB6xEBsi5PS34Xzwz7doo5OcNdPCaw3ivS_oiOeswDe5gYYYeZHIlCGa5ObNLnmb9UXXaUQiSaOxWzD1uG1j82n255ohptelofqp", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100002035399065594391\">Kai</a>"] }
        ],
        summary: "진한 허브 향이 매력적인 현지식 돼지갈비탕 맛집",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 약재 수프", "로컬 감성 가득한 식당"],
        tips: ["향신료에 민감하다면 미리 확인하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돼지갈비탕·허브수프", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 2:30~11:00; 화요일: 오후 2:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/YuKeeBahKutTeh", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15821091229642063737", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%ED%82%A4+%EB%B0%94%EC%BF%A0%ED%85%8C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신키 바쿠테": {
        photos: ["/images/kota-kinabalu/info/restaurants/sin-kee-bak-kut-teh-kota-kinabalu.jpg"],
        placeId: "ChIJdVvrYI9pOzIRagSPTUpl29U",
        placePhotos: [
            { photoReference: "AWCwydgM5acgX6CTHXZicZxnT2wYhK2mH7RWKKfV1G1xGk5uQdqtlKRM2pLqR68zS9AKrEGnumvVClB6N4_8eJdjL5SkbpWavnFrnzHjrTAjbb7whowzXhPR5RmWfQOHlg8gDfW2YFYhZSu0btk5QRENo_p2sBNZPz56tuBbeLSAQt9oGNvtad-IN89am_o0G4Kv-oSCVY0cBEf2hysTxPkHmV2XoaIX6DkdOeTMpkmXmSqvNz3C9qj7rgprqHD3w8d09NVPpsTKsB_DChNQ8P4sR2NlkJYZFi4ipl94IKAFvv4Q8uSHcAVZ2CYwtSUD63M_Dzx0x3Sa93sRCiLeDnpZOu0VMKpYlQ_NxsOGm8GL6rSiAqXc_VQ0Rqv3L2Fw9vLbCif7rhv4sRWNe7bPYabr00i-lXCz5se7viEixlFCv29R_R_r_XraX476lJDAX7tH", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104309288112006389923\">또니혀니</a>"] },
            { photoReference: "AWCwydjQbpR-nQjF2-l0yyqa3Ag5Mdqv8sMveZ3iSHCMgJUlTfJnmI8eF6T1EK7IsnIPfxeeM8UATwnUl39v0Ojn0i33OEYrO0NzkFBJcU04c4OLrJK5fqhC-GL7UGWvKPsDkOXXE6VKsUfGIRxlXURMVOIinMUz_O9oJGBUM5I9rx7RcDGt9B1zhh5aylJma70GltlrTSwtsMOmuulwc--EGVU6_xvtTnhaUhO2aF7gI-eScinPBPo49d8k6RK6ZGfoSDUqJ-eBSy7W2SwfomHWeI7ExT0jHp57emzS-TD4HMbnsVTzfsS3v-RQfxoaIQbeRSsBc-KGcSkN7LsGNKnxBZ29Sed7cBdmWR_rVSS87-_v0H1uR8npwcyGGoY_h56aofEF-ixMUoBMqVX3ukzhgLBu5PjhCZlAPIyRSIvbh4lFtQ", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104453032848802335289\">新记肉骨茶</a>"] },
            { photoReference: "AWCwydhGEnDBdXilyZh9EXqlxgOMr34K52hgJb8Hzf3N9A1ELsOzbwdijLrrHLONbl77uDY-n4Uqe_ugAj6D2rYShTG65gvFLJzORODjAIBSLcugWQ70K9EWFXB8O5H-NflTKezlPP4Vx-kkmflxRD_rcdNHue1hzoMpNRHtvOMPzxedmPKFOY6l4v31aeCFpEjeUvfp1qrxtX0Qqh1GfkgSDSOWD4kwn4tYkgCB6y_Ru7Nqzij6KVI_fT5UIYwRXYmLtiCsubsBbaMN6k7gQmFAfvHN-2_ykUVg0IR-Po85w6Od0sq4NT3Zgp_NEROUbbQbwuL2L60QW-Pzf41X3QuE8Hs7e75J-YGYsahsYgGQGSYlV64PImPzXo7DjVKKr6tBiOpPF0ys4iB6e4lmhkPPgkglGQ5HBJEAsyzVcSr3Vs5BNJN4FXFpB8hdaZLPkgC4", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101339794398503306152\">Wang Jun Seng</a>"] },
            { photoReference: "AWCwydgXClDwxFFo2Os-9ED0RUGDFjvuMKFWrAsZ_QHAs-o1WduK87q3BOPZSUNu-LJZLgz-V-PxxsYgDnTf-fftGt6V0cj4_2KnGjszBOlMpiPr1IkKy4kcEBttpSHIrcPNJsk3naa5jwUacYDozUw9RzsiPZV3LRiJ0DQp6mMThuUYx8bhRluUJF5vQswMu3E64-UEGIlEwZEtZoEDArSMFIQSQhwEsAqPU3HAI2QqIoOC-dSm9qmK_LtRBZCAxKOEP-NuXf54vqDsOOLX36rR61bZAiVehqBvLtc8RWtUwfoqYVjzDZyFUL8Umj62sXM0WnBWhv7Uf2SOT_MoeCcw9vrOTgzU9Dxv-cynA1P6xSFd9y_RmTjCONJ5Is2A6v8voEEC1nhMKZAs9gZAw0H-Q5Vi2h0b3OtquVpkZbVP67gcW4a6fpUiAyZmudIeQ_ai", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111131465358980527014\">CL. X</a>"] },
            { photoReference: "AWCwydhQg1y6cx0Yl4nfiI_ZUdu72AUeiC4Ubj8dx9miben9txg57NeqBej2be73BdinZ26VTBrODcy5w-MqC0VfC_WTPMVxbpMhsrfe6phph3bH96X4vXAxGzAd6d9jJ0YACeTZkILKoM81sWHKvlo7eOTI4r83xi4ra9AFCk4FpXvDSmkeUhWk308CjI9xG2DowfR660rZ6n3i4G2Q04TZy7ADA0nt9duOKmOsEnRkNOhwHTYZrlf9If4m0TS4jujJBlfSYAWdualVDgI-r0gQsRqwp9VK5IsoRTwYHCyCYTp_RFvTeBu36RCEfcrAppA9ol85ktPKtQq45uU_FeuUaRi7pznqzhkhWXWnnwkV7hUzLPzHCHclAjSM69aexqp1NPLoRVeQns5-rDBhiS5g73YDZdI9F6pw_gYGcLyHtiyA4yx3ldAXWElUo9W02Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105395249891932348857\">tang weiwei</a>"] }
        ],
        summary: "다양한 중식 반찬과 함께 즐기는 정통 바쿠테 전문점",
        updatedAt: "2026-07-15",
        highlights: ["바쿠테와 잘 어울리는 중식 사이드", "든든하게 즐기는 로컬 식사"],
        tips: ["함께 나오는 밑반찬을 꼭 곁들여 보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "바쿠테·중식 반찬", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~9:30; 화요일: 오후 12:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/sinkeebkt", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15410021919781487722", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%ED%82%A4+%EB%B0%94%EC%BF%A0%ED%85%8C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스리 라타 커리 하우스": {
        photos: ["/images/kota-kinabalu/info/restaurants/sri-latha-curry-house-kota-kinabalu.jpg"],
        placeId: "ChIJFwh2r5BpOzIRttlTaevVxnc",
        placePhotos: [
            { photoReference: "AWCwydiR4PO-xBtwvP20zt7dbbue6N6PsyUGHqrF9Gpe8qJTmG3rFVUoadysZrBeUvRI9649yXUOBurDypXD2n8keWhnDfi5hYeFRqU9ZgYaE0c1IDcqTDAoJRD7ovNDITZXt_6ipSS_AyV792hh09y3OPNX_3Ij1c7FOa6GiQBtltptYFKxI-qqa5Jm076WJYFSkjVrPB8FFM3Muvx_Gtmscp5wB7tV7HseYxuv81--kzS9kdhzw2oDVvENmiboCYgq8RlMRKAwrvaBC6pIj4TQHFSSPJUQkL_XOMouCdbzjyZn3Rk7FKpb2RJyR4MuQdznRC_EPXKHi_dxrbRLrb_kPy0FMI6I-_3tAicxpP_mPOb-DN5A03QI5bKB8b20z7iTvSiqygpGkWIBenW7gKJAx6_Cu0vm134xEOBxwvNhTP0GM2o", width: 2016, height: 1512, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102000999270852918975\">Robert Peters</a>"] },
            { photoReference: "AWCwydiVRUeN2fYaLhLZBNNdIfe1LShlBWn4gwxNfDZcPupa0tj-U0bT72TZEXuX_Cqi6YvnCsk0vEKEvgaTggv6EGX8Q8lAZ0FOKk_Dy-WJEv8rruAondiYvb7oqr1wzM7so8MDnjOxRgEDiChUZ0v0mcnqkdAVHzFWPrMDmvdG2hzdFwNymOGzuMUPanzMPc4zQAyB2nDZx7bc_ljX1Q0cIovySLI4lufCO8KMJXco68LtTWQwOAwlwhXXGwJg8a5N70IkzDo-NDylJUhOQMElOVrnMyvO0nNJUbPEeImXBaC8yxB9MEtsz_PqZZbdvgu8ZHZmEAT3iCqIO1IIfhl4ukO2PeBHdyEN28WC4mFGlmNy-nXMEfrqTM4aCTrAf2E50AwpqMboJfVJrlQQbaOMkHQPdlKDmFuG_AE2lpowqbV5Qfv9", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117806003840008893545\">Christina Yoon</a>"] },
            { photoReference: "AWCwydh7ZAnw2o5MMED90oHpuwV3CnYOH2MZl7ri8URlUW2qe06OI8fAZ2onxCDF_keGFZgmKj7Tz2y7M59yFa2oAikiDWoxdXzDNaOMeAWr2UpyQvkzlM4b9Wh0DiABDPWchClFtLvnC9SVj3QEQi7cCcPj_XJ-dGuTUa_4kXLWFFDh9b4ovqMjtU6YjeTUmyvEouURUcnKKVxPy2NJqz94lGI5H_hzU5s-Hj07gCZ_5PgD5QdGJQogLCH2VeuXoVL1KUF7VIyr9iNR52Ho56M_fIrYp9J53qc65hSx7LBCXPypee-H37twmzBCVYl0VigXdMS5p85Y1_jNNzL6bMPLbv3IlHPRNiKfkfvL3oSs3dzcztOJW95fl2e5dXfiw7Vch-VQ0pSTLHEAsRMUfdAVmB0LMQ4q0YxOseD4JqybEbU20Y8pnzBoHtjQVsfZY4sW", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113967898257533933310\">Pi Polo</a>"] },
            { photoReference: "AWCwydgYgPIemNhyqgzO0EIcboXF9D9pc_gqiHJBlKZL0hOgkK3AZsHelgwJnVrTXjOSz6gtaIR8gaXQQODO5Qv8WsR8OmDYRvbkLTIYfmF3KJoxegcW1CsZ93bE3SIJZUt3Wzyw3uQok4i7rmWsx5F7WIGMbTCZxZDMQNxyv1_FvaGEZPrxWxvLT_SWgKNSJLnwizH4h2_xb579Deli7NzvgtQYmBPafYHHxQX7gKOwoowBe5J9JWRbabxtRMszb4JPmTWdZSYCrRf58TvioHYl1MAVBMb9higlWizC2dJVRZ8zmH-k5UaS7wIY3zMG6RJPG5_6l9ps6ihF-hJnuZkcxWCG1FBwrNthCAnWCxSt0bsuNCMtZSHR7Vf5dbzWUOeyWpNCkiVoHS_YQkSXuKoI4mL7WWugfAMrbf3WN097R0bBxhyEsYvdHiGkHr5y4A", width: 890, height: 1125, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103864401940650158612\">Pat Flannagan (Skip)</a>"] },
            { photoReference: "AWCwydil9eT2Q38KSY1gBWWiOYuKnOM-5FM1DTmdoTosjd37l3CDBLvG_WP8MOAFVwT6GdmCbvReeg9qNOdq9Xkgf2ssMnHfYX7TooYWtCz5hkJYc_3mPikEOk6MpavGAIUeaopA_Yd_A_AAicYMF_n34N5TFYfR1yYJT9CwQQsyfpsr-6w5Qzw8IMnZg_u2-Kgr9GvCNcaL4saE_YTrFQR-DA8LstAeAcHSnKDzEWQs5EK5zUByUU_HmfgqEMoImPoGWzyoTSUWeE9FayREB_W4iWO1adfcIzsWFU2IRymUb4Zypr2depy6Jxg3yQc3ldlOY1wA3r1ZAxOKwFKr9zo0LIKhhcc4rbv5wJvAhhoxCnVhgJfb5YXEEcFbq16piszbFYm3yf4PZpBNegSUb7eVbCCTcukhO9QOjB3aU1SCAVqHmVfpHFG7qx5wvDqKnXtM", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103172694693991670506\">Akshay Bharadwaj</a>"] }
        ],
        summary: "바나나 잎에 담겨 나오는 이색적인 인도 커리 맛집",
        updatedAt: "2026-07-15",
        highlights: ["바나나 리프 플레이팅의 특별한 경험", "다채로운 향신료의 풍미"],
        tips: ["현지 분위기를 제대로 느끼고 싶을 때 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "바나나리프 커리", items: [{ name: "대표 메뉴", price: "RM15~50", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 5:00; 화요일: 오전 6:30 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8630820942963268022", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%A6%AC+%EB%9D%BC%ED%83%80+%EC%BB%A4%EB%A6%AC+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코히누르 노스 인디안": {
        photos: ["/images/kota-kinabalu/info/restaurants/kohinoor-north-indian-restaurant-kota-kinabalu.jpg"],
        placeId: "ChIJDWYlyZNpOzIRFNzoOxSZuYg",
        placePhotos: [
            { photoReference: "AWCwydgM07R-ct7kl_ZIt95hGJ-zys-b0oIdUnxab0JCZbtS6MqPWqZLsJNSjtLi9fNHS02J7fEM3YoWph0Tpn4n34tRo0wWwm7kJRa4pI-ZRXZDD0jXOIQsKavNd8g9osGc-JRUUmQAv3hvZ3HOiC0WY1N_I6M4tqZ-ki7PtYbESxbetiD4xSIc4Y4ePGRjBkgkYqxTmlb5GoJ0saVvOGczZiUIs2AT5-0ajAa3sADEpt6Gj-iLerCioekT3chFuKk2ja9jeIAiq_tvLLsFpUE8AxXU00n3Z5YJKqGNMFP5e9wEsOndKw9vJoLm5IWENFi6gIc4erpQPi8x8SXOCDY8JnYwh30qUbYCIqp35x_u8miB-_3ts9N5i818ok77SaQEpvhaT6LBTKoRVopI5qKhxlZ_Tt0RZiD4zfCnEoTKS3ehiiSszL5z4cQMIlosHZcU", width: 4624, height: 2604, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103133353855310903123\">Kohinoor North Indian Restaurant</a>"] },
            { photoReference: "AWCwydjIOcw9vk6SxydcHorAhCSi73TNETYcIZXdgbl7RffEQDb4mS2KD8jqLd2-2IeDasNj0sb8xztvYsLizYUfeaH_wt8Pu0NR_Owud1ealP7NFDpmTWCvV1V2roH_RnLBTCwAUlOybrj40HbwC1Q8qAznv9Q4dWXIdm0Sy0LOJ7RN57eqL0jxYUUt5P9jxeIxhlIS90BVJAALdzYiZoKcYnBmMLSBU6fmbA3N8SL0YEEfkVGltYPLPZw-pRTki_1bccPHb6MjYnao-JfC6j5WZ-Z6P2-KxwXoIOpF2A1aT7Sg3sMO23WIT6Gy5cyG_A6xZhnaNg3SaHlP6k-Lv0KAePb5J-joBTySMN4KRZrXu6jj3ew8CWBFi4bmti1j2U-QOKeit4KIXAi_hBQbvWO-tSthZLigqvAXSbDT2F9lYY2q1gMibOrmescqYVpRuA", width: 3472, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103133353855310903123\">Kohinoor North Indian Restaurant</a>"] },
            { photoReference: "AWCwydjelmXtl-NripkkJsx-VqncRughX-52hVPrcqEawsS8sJVcCoG2bVTlal13Gr15HirQLxxdQYE0AFNEhqy3W6xy8u-svbrFOOwFHVlL5i8pZlN6D3622InU8VDGQHx0CZd6_f3h0lnA6dx2i9aFf40Gdfj77THz3w2tCyzSItjZypGItBUbr77lVM8hcWjw7zKdGrYNYyMtd2k_Ot3BrrvKf8T-2vvOhZJLctQEWMgu2UmulA3wPVdiOQWdfg4rA8h7KORkEO8X2R-cRrbsdDWeLarLrpDspJgi19zNQJJDbSQs4pkKHwvkoFkb62MsMUnIgROswtb9bC53LJY2jYlaScFI0zUP3Nc9VFmoQl0aQiKZ7L34ZEnYEox_NNuLpJn6V68NnZwCqCuHDBEdOz7R5KR6Rt6hVmK3VhAQqG25V6ql-nBilSAhNwh7z9Z6", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108749336168768328155\">Marc Wernli</a>"] },
            { photoReference: "AWCwydiI4mN4hGk91pSF6yyJ6UayL3VbaJanrXThsl3fkso4wOfwX5Q-mwIQUinE9UZRo6SOq0vFuGmEjDYh-tBC8mOVg4xUv_o-YF5KUaazOjr8if59ytDRYhIbOy29Db8e0Q5UaZbDf5auyKlOhf7-7EdPqFG9_vHrutyOyt4RcLCpOPPDGcIQsBjXox6IlgH6iwESdAjURd-aR3cU2fnj8P5K9c9mB8RNrvOF5q7Wf7JyTjOjzzs0fBA9RYfsdYujU9RCAyWMy7gkE2vxq5XskyJFUE_bFdqKU6j7b_v5AHM-We6PM2lbjb7AFBqOoBqqWEhXryH5XtX7_kpOoKJ4Q1mIyYldjUn_j0UupoA5REEUMDz7L74HgMpU537l00tlrcf94ceHyvb0nW1zHaxp_eYRgsMXVO3Th3uH9JsU8CafoEgPDkJlJxRF8ZLcJw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116943757755663444149\">Ziling LIN</a>"] },
            { photoReference: "AWCwydicOn5E9rO4z-YdA_JfIiZwovNW2Y1rUGUbXo-Ku2ve9sYNkKcXcUaudWvfHZ_lyoAAe145Hjjg7P7QTfUQExGHXf8sCVOZi9AKWKvSkO-ffFnPa7DyOM2bb9H75RVEF70rmJIjgySoT-HvnBcvA9PU9I5DHUwnERGrAzb7ACU0u5YSNU9wCZq0ZwWMN5FILFddWI-XB1SJht_ho5ra3J8pUfXonRkCpXlDUmdOBZdyWz-u36kSERTpsXJTVo1OjfTyHYL7qfI3QyniqAeIDPEanOTNZD59H5XeDF59ZaTL2JUpBeaxH96SqAN36lvaReHIAu_QXHpH-nXCDW1EMWow5GTBAHt7KXAZ29FkH6nqWxTqpwU4HkISFYmtS5oaQ02cgf0tr_Ik6ThEXUATpcNZrJfDnv830I2_zYjWCFIMfM-2Bp1DIGJJ2VQfMzKP", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108749336168768328155\">Marc Wernli</a>"] }
        ],
        summary: "코타키나발루에서 즐기는 정통 북인도 요리의 풍미",
        updatedAt: "2026-07-15",
        highlights: ["깊은 맛의 커리", "갓 구운 따끈한 난", "육즙 가득 탄두리 치킨"],
        tips: ["향신료를 좋아한다면 꼭 들러야 할 곳"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커리·난·탄두리", items: [{ name: "대표 메뉴", price: "RM30~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:00~11:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9852073972033182740", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%9E%88%EB%88%84%EB%A5%B4+%EB%85%B8%EC%8A%A4+%EC%9D%B8%EB%94%94%EC%95%88+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "매드벤 카페": {
        photos: ["/images/kota-kinabalu/info/restaurants/mad-ben-cafe-kota-kinabalu.jpg"],
        placeId: "ChIJKSfniI9pOzIRCuG0vCzxnwM",
        placePhotos: [
            { photoReference: "AWCwydjns-lyQ81Ge6YQWAyZwgAp6r6mjECkAExLKH1XUoE0MZcmTupT93VJ4gvmJcXcqTMrY0-FIU_zVPo2hBOpGNgG8_iAeFCSP2h9FmmdEKls6-C2aPyzxeNDuoD9LIpOnkidFjhNEqIkjSJLi_LG0dSFT2hPzALoTqxnxQo0yICqmoGKuglGVeNlHbzN_NmqFZrdsBDnCO_g2SwkD3qYQCxr_dba4VbgnjxAIPT3pngwQi9itJEOCWn6QAyYfiO4-sAgxhAD_v3754KqoddRwxAdto_Q7Aa5zskDnGix9Rmz16RFdrMyoz8whUGCuK4LwJXB61SAcF3Mh9KGOOaW-Vehw4gGj-UQO0CsI1S6DrzmFQSRmNAGakzDuIYltVvtJi2-UCzDLBJjl0qLKLnCG7JxSR0KkL9Nq2fLwjctwcoCIZTO", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108945349339111009118\">Yin Yin</a>"] },
            { photoReference: "AWCwydh6Va3k4WDw6oIFUPPTCzBPgcI48dJa4sawCTHTkqBHR53AzEvEDfGTskDbfAnoiyqT0PQEBozJMKA3-t4wY38LRVyW7H32dtbW6rxXQ_O0zZJbCf-Tw4g95ovWwGieby7c3p2frbvuwn5-c1vQqffwxwlzDZLT_bcC9QW4wcAFU6xW9ubDJ0hGxdQ5iHVOvAzwOwqVl_crleJQalsa9SurY1xJomMS3cEmfEykfSBuAXLBuDuHYQVSQAhmZkeBKtN_GlP0fHgGsshoP9O1tTq-lRLZimNwFsKckTK-j5TJ96eSSr0IMfpwyYXKZx32KH4XMONINQOu-kAlEATJgHkUQxvdZOIjmfgmjXuJ-XdEt_Y7z-mQfwqq2xUopCILkzo02kbTtjVBNuK_3q7z0lOR8HYeKUuWIq0vDDed_YVWkg", width: 2048, height: 1367, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100409393729525621743\">Mad Ben Plaza 333</a>"] },
            { photoReference: "AWCwydhmahGCpBF8DC2muOaVMv-Eg26xqgS5z89wZRmz8z_vidDIyl4J689IjdAuuTZfNfobosdQAHc1cgnKLAigpdXd-WXEgh6jiyYcxKzvPiI-jkbXvb4Ega0m0YO9e84hA353wO4D92IaVk_epaJOkdcV-n27CWgMlO2WHY0ct5ooyY1bqgh6EKNeD3guuMAvKUsqwGq6BVbyiAX7sq2Xu9LjqMlIU2NA0GA-X7qgrLcWBCIMiTnIi5vkNMbJ485UHQR55j24I-LFp1lfebZUlYJ3geRSuu7qGtHLZ-GVpqa1V1xDpdzSQhjXUZAKqFZfA24isyBG3xNo1OJA6m1rRu0Nv1ybFb2YrpgqxNUg3_RFfeEV3QnOTHh14khZLcCYYhhtZWv6N4G5DqbrAfONMbjsiui330KMtLNUfe3cL-F_IaOsX5ZqVrFi8ZznGMxT", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111606954717783933685\">Jön Ej</a>"] },
            { photoReference: "AWCwydgxc8mtFHJ5XDUyrrpXUo2ipkrd_t6ceNTM_NZtvoIOYgW7ESs5TtAinNzHhlJAvtut4LD_VfcH9Y7x9T48tW9o-Uosc5LW7uIbtSzTjbChL_sl9HO_j7NLOrhq9OzU1R4XVZpy157Otu4lgXnsKlniOg3mR6bd86U0ew5kdx4yEXcpe8s709iVGOWP7FZwuNjKRsfg65sLkXyJI1GmC6ZqzwYX9G4CKYf6uEvMrtUyTLq1QSAFrU44vpSsWvv24JgecWV7vV0yaBMWBAEpmLlgUlWSpAmGdgR8G3XoptimFsaveG9GhOu_X_E4GudgdAqRL0i8vLUGKJg6xJj-ixPxJKAhdsBy5B4ocrJhKeRIq-Nydw5AD0ezxZLcNUrb4BtlAVqipxZ4j-Zf8-sr3bju3wcqnKjGO4N724d-WPPA7KjIXirtFZFSXp0E2OQA", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103778229695445709825\">YXuann Tnn</a>"] },
            { photoReference: "AWCwydioS3Jpz5z9c7PeLMDOpspLKWihaqfIudRRgLtElvRt8NBNM_shumoJrcn_0W36tS-yslA9mQN4IoIpVo_vFXyR-5Q_NhLg0wXPx71mVwYXXLseX3z9Z2Dov3OpOU8piAhCk1QXiLHLJ6xDA6wii9igYaT2hb4Z64hLUrJkXPmol5j1H6dPztlchtp3dwpIKpsR7XGgCsT_UcCapi6W9_fjE1FEuarXdLXduWjw9OJemfmgeMhxp6tRMsPtJ89to9DzGIr_YcvI-DmjYdAp6pduEYwQLEZxLRXtX1_xMnJgbkHadju0OgajDi81hTtURHg8ZCacPlYYzRsX9UyBHbScYL0zTqUvwANF_pUbtdP7shbQ6MlW6We43Kozk7mdT7BMYwG_aPOcrlzyLf9H0HUCdOHhKoGl6t359pcbbziNsty0qM2cgKaBpSp85A2q", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117552169283538427805\">Belle Bella</a>"] }
        ],
        summary: "Plaza 333에서 즐기는 여유로운 브런치 타임",
        updatedAt: "2026-07-15",
        highlights: ["다양한 파스타 메뉴", "트렌디한 브런치 플레이트"],
        tips: ["쇼핑 후 가볍게 식사하기 좋은 위치"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·파스타", items: [{ name: "대표 메뉴", price: "RM25~80", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/madbencafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=261192477857603850", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EB%93%9C%EB%B2%A4+%EC%B9%B4%ED%8E%98+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "비루비루 카페 앤 바": {
        photos: ["/images/kota-kinabalu/info/restaurants/biru-biru-cafe-bar-kota-kinabalu.jpg"],
        placeId: "ChIJJ77sd4VpOzIRUprTaD9UYP0",
        placePhotos: [
            { photoReference: "AWCwydh-n81_pjyWvvHt7ZTZ9R_Q9P28YCCsKt2GYIroYQzGRQoAVWiH-1IwfjH6MYc_zjEQ1Hfbh_PSo3mjfntQB7iTp6QfTsfAJY2g9xKWv8tqXr4qPwTcboK5Mmb4L-aRcTGAoXeHANrDtQOJu7oH4_OWwlLaWEenAMVUYrclcGo0-J_HHsKJHSTz50FPelVowh9oe7OEP4cE13L_CT3XHimsO-Pz_HSxNAliSZnPr3Sp2JZP9S6orgYLzZzGJseVlZ3KdzvrsK_a_Dmltw-e8gg3LnZcPOPsF6e3ZV5Jn5W5eIXso6cMMpoQGYR8a03_65CptJE8tHfdJs-C9F31LVrE1VZElOA73PCcRLQibh5vrIzC8XUjTBKGlSZIeqJqxTyQnU9RjPedXUnY8gCrlmPeTKkwBWosE8uI2sSKZis", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103241004376158775718\">Biru Biru Cafe &amp; Bar</a>"] },
            { photoReference: "AWCwydj3Fu4OPaSM3mmKyez6YAy4fcaTFCK075iS5VQ_ZyYiyDE4jphd3hL8siGc4yjP2qamZirUgFC4cg1IgSEqI0tnTfxc3PBmkLZHKaO-2z9PwQkPR8NdCa4_-5MpqfMAAwfrRriOklgEBBV_Xo0DNBPYjYrCFIWKD1_D4GTykhLx3zq2pVNsOxOILyHvPId5zizfwYVOnz8TQyYIDJ2FNnZNYE0cqAk2-4SavHMvjLeSBVsPdyha4fy0v3TXeTALbZpqSENAbMH1nk3ZXpqn_M8qjoYYSpz_ofP1p_yFLpt_s8VXqpDTHc1xzTAGvHzaGjzfJBf8GnzJ6XMs381BgaPrOcj1zHWtb8nyT4OdgCVZHKAOLZaG8MUg8W3EUGDGgTgAM-1prqmt64o1ugCpOg1SQ61Hdo2ynAqDYqDEBRA5pw", width: 1170, height: 1176, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103241004376158775718\">Biru Biru Cafe &amp; Bar</a>"] },
            { photoReference: "AWCwydhbnMud54IPk0ZMv5-mW86w5GhIZ_B9LDAbY-CKwFMyrgNuq7gNsRia7BOqp1j8fpL5DjQnM4XWmuQqqmX7E27bdWCAUr0jA5QnM7vxJv9_e-obcKcm-stkLMxi6m1bqDOAJzfqioar1_YUyxNpfoMl0snatfTRxHahTIGSCUcjqULOOM2BguFy1LvzHC0uNd_jsfvQzpg8iU6o_gHA--sfw6bpeoDf2Lg5Pwx4DQu-LaeMsbLOwvoX9I1_QERoaXYAtJNIJW8KMY1-VaBvHDwrULNhbJNrDkPSzTPk2pwxmHizUZ1f2G_N8KxbZ8qlxyTUBS_hBQcAEm2CQfdjECKiHiSjUIqKB9YMHxQSwOLtNmaGyE3sodqOg8uwuh32mnlWdWy_HeW9zChUwlgEfDO5kWSQc-ekhmukPQjIQINzEmzyGEdot8gyw-bxVg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115319715697381892753\">J</a>"] },
            { photoReference: "AWCwydgQxSMiGKevO22bkotXZ3Y8zIdXxJGJZUU7Bex-AHxVZDRi-hsi1Bf1-4nMnjPP9Bbx0uG6SIRfQ6fg36cw9wn1qOtZlhjHYiZxjtDjnXIcvbZIgBynH4_51KVS6XpMl4_Tv16FEp5AFh-49F_YaMFl78CS2FXNJBKb0jyCB8s_tBDcm25D9_DQPEhb5L0qx9_2RTGd-QSY2j6JwDkPEXAcYjSHHjLZvUGjAY4d9RBLEp_KVME0vGsaiyElm8Ahs_q3A-giB2HYQ3tPJpVMUubwEfFHNJRU8weYLk-FEqa1h0XhjWqr943RHEjG9cxA2-SNen4dDhRtEH6CDntQ65eDPJ2rG7KRJwvMepcNIu_Jqaj2utV80q2a9NWOuMDKcCkJZPvgQoQtLE97OvudH24TakDF1LHlhvvQnWWlVPsUVxxtE6qUkRWnQWA7yUPy", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115319715697381892753\">J</a>"] },
            { photoReference: "AWCwydj1bZuXBYYY3jAOw4SH-Bkj_9ygBstJ8dS5_1v9mYcIiAqqV8vRioYcEc71SHsSGDEvFO8kTMWFeOXUbWa8AZUaPcO1A51TQPLhiay4Sa7KgPBIzZ1yEId0RELGc1kuuoKbL9Z22XY0JTGCl1WRuEKCD0NESfWHnmWQk9I7NwfhMMC6WM5axR0pBz-5IqKNlqoaeGUlQqLo9KpJvgMLHKAtc1WWQWwNlsD6sLfdKhKbcEC3d7szj1S5gQVgmodi58PLLig256bo3t18PCeRAlaaHPvUKnNUfTDNEzSyX9r2lvyuuby-21gecuoAsZ3CTDa7WirqCtjAYiTdDlM-NPSD1UCzyHETE3PSXDVVavWyyGx5NdNQZ7-KcrXrVRSOdENFDH12Lw_JdltYEA-x1PbvWqsRiB0CRE_JZUI3ObmQ_kIBiYZhGqR-O2qoYLWo", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105207503039835813197\">MM</a>"] }
        ],
        summary: "커피부터 칵테일까지 즐길 수 있는 분위기 맛집",
        updatedAt: "2026-07-15",
        highlights: ["감성적인 인테리어", "시원한 칵테일과 커피"],
        tips: ["저녁에는 가볍게 한잔하며 쉬어가기 좋음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·칵테일·간단식", items: [{ name: "대표 메뉴", price: "RM20~80", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://instagram.com/birubirucafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18257685520678361682", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EB%A3%A8%EB%B9%84%EB%A3%A8+%EC%B9%B4%ED%8E%98+%EC%95%A4+%EB%B0%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안중 센자 푸드코트": {
        photos: ["/images/kota-kinabalu/info/restaurants/anjung-senja-kota-kinabalu.jpg"],
        placeId: "ChIJbWAz45RpOzIRerQvUVtTD-k",
        placePhotos: [
            { photoReference: "AWCwydjQ9z-FGaeocfKiPr3IMsbmaMbJ6u6zx2adQeYHPnF5cpPI2sgfZj1CNtTa_ACHspqTwWnQYdLUJuIk50ls-F5uxguWItg8owUP3rD64rOsnaawUPHK6fx7sMrj_rnCr0QgFxK8WdpcnWYBVT6_lXBaw0m_GAO3YiFCD1xGJctSDO-BW0GeyKHX_odS9QjmvsUHafE5Ndk8AaPwWXiVZHb-Ms_Fci8fySfysFWpYx8OxVhX0Q8mIVgbKPt3O4btJYAtCq2yXd5972PLyOi362C_VZWNMKCcFPDNknKspETHUle179r4XnBATsB6uFsrOo6eKbmDUZv7zUfxS6toYdh1ze0VCuT4WQi5dqauU68h6jAYncN6MfGvW00yPTTwnjSflid0Q1KfaKjsoHR_8KvPmUOD2qMg5t1x1kfcxHadcXI", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111327476371408031465\">Borneo Fullforce Tours</a>"] },
            { photoReference: "AWCwydieniIUmEQmcMZc9BFEJIPEZbsBGgJNG85Th_eMKu6lSHtJMa2kS-i2P5KjHO9hujsU5E4enn_FezKi5BAFnM80vP1zAP2psi-cFM4ZspLQv8WgB0gY_BK-JaszFUaGc_6ft6Hmq0-_KKH-XYQ8GmxTyS8pbMDwVEswgegbI00fr22Sp376qiNI-NHMNlh-Pai0Uf2F_3FAmZE8E0CqIv0mkXmDHfjsxHHyruDGSMFbDdppxyluBFfftn6vCGO-zxN07SvX9i38_iZi4bUX7dOIbPxAGXjVIxQZ-1MCec_JUmmVIxjLI_NIsYTYwQjpQVvXc9_xmAdacJb_9YvGd1Dr1FL5MjX_ISZ0A9y8Gz4ryYHnrQjturww58kzgMVbJYIB5YWuLKqzIdyyyn8c5J_uK9aBHvSk9NA-_HzT4QqHQw", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111327476371408031465\">Borneo Fullforce Tours</a>"] },
            { photoReference: "AWCwydidKRJZr9zqJMGE0WxDN_w-Adamjcwxosdtnxok7k3L1Wi2tOlVEKY6e6ob00Qy_GltMQXN1ZnerSecqU65fO_sDvEaYOnOh8AEJm1tVcHmEO8QX8sA8GgtRJf6GnUfgZWyszwYaZkfzfi6Phi8FzIg1vz0LGD_mAGb1gRX0C9fOyIJ8ZVB0Tpt9-r8-XtvTfMBac1m2E0RgT1IhIJeLFRmGFhez71W6mbzv9vxoV5ssVRYe2P9Te2SOt-YCQBJICbPWsl8UanPglMwKf32kSftQKnJMj66JwbTMNXPHBgAAaORdYJ_YpZ3GZJRKjBdHG_uZNEYHa3fJD7pKL6gQMljgXawRTYYJoTdPjFQC0--H00s7mk-l7i3-n36Ks2_wQpSQ7MagoSTeF9pFu5xgmdxVYZwcjoQczkKN2walboMIi8W", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111327476371408031465\">Borneo Fullforce Tours</a>"] },
            { photoReference: "AWCwydhPZcuvQFxUaxzby4-ay_U9ITVETPDgVNgBHfhSXS0F-fqSmDAKzZkQpX2TsG2ZOz4UKHVF84YXcGa_ewLOS8JZ5g5ezE8qZUdIcvmUIayWq4jrbFBW0HI0rFbEBPZu-bg4G_PM3AwqshE5U7rjm8_ARKW5TSThgXWVRDMdOAzHBDMlVOcoLx4glE_FTRoOPKogjwG1A7e7qxEGsVfdwCtLASypK3_eVepRenB2iwfrSHoh1i64qgohS1MZn-vSyqRV9hZcqLlgqBRk4s3iAMjrCUZLm9OBSC92AQEOxtIi1pPvm1N_keJ8iH3BZ6XI8R9lDu8Qbbn0oBU7IMnjoqBlmpWMqYoOODbf0tsno0fA3QrVQzrP4VwuJ3IXY9-GELMbo9r_aKa5KM8FBnCAY2ODeFmyOh2juhWtvmNWN1icusnO", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111327476371408031465\">Borneo Fullforce Tours</a>"] }
        ],
        summary: "신선한 해산물과 불맛 나는 사테를 한곳에서 즐길 수 있는 활기찬 로컬 푸드코트",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 해산물 요리", "현지 스타일의 맛있는 사테", "다채로운 로컬 간식"],
        tips: ["저녁 시간대에는 사람이 많으니 조금 일찍 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·사테·로컬 간식", items: [{ name: "대표 메뉴", price: "RM10~80", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18093989562983370341", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%EC%A4%91+%EC%84%BC%EC%9E%90+%ED%91%B8%EB%93%9C%EC%BD%94%ED%8A%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "자시앙 커피숍": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-jia-siang-kota-kinabalu.jpg"],
        placeId: "ChIJw9V0qPhoOzIR4eRIEvdnNrw",
        placePhotos: [
            { photoReference: "AWCwydg0AuZJzxC1C0uwHnyuJUE5a-WW2xwlQmElMev3R-GFw4BBDkqXvZQdrV2PA60SnEDJWTJ6ioj9OYqeZXhnYF2420WqGcjmH7Cy782alClVCnxD6kBYa52ZHMtrQYD8jfiV8mIpTfIfuiFzJ7OOer7dUlAR-Fvlf42N0y_ExfpOhW8nNsBXj4DD18_hdDvZVlnm3KXu1phrpz9AS207yYlcq5H1ckaaiXcssx2rAZCZX-3rbU63ont0BL35WwJkOHG3Vq9QqyzacxFQ0FIrtwDS55XjmlQa42HSnWAF10UTj5xJr9srMeZQxTZB-tcuKsCj53eT3qwxQ5tUXkd0SyQdaDcTGtLlx88HtzjMkPywWK8eh3FmyvQarFvz1mve6xB5KSIWYMHQm_qm5dBot-naVf_6Z6PM4xFQLwUjaccXCQ", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102834762386800403869\">Jia Zheng</a>"] },
            { photoReference: "AWCwydjarySfvroqBLBk305m9g5y4Vr-C93Fa97HSRDriyWDQdPhqlJK2aW5dKzTkY6IXpLFOri2VTnxLVCD5F1jjm4Oq5pro2QxY9sjBgdAVC5PeBLLA7SRhmxzW8-kWLViq9miVmVzE1AAUXbKc-eNxFZGp1JJaiEuJv7ciZUNL5WiToAOG23MjEXZDtbnTNUoS6nH32ahgKhzUmi5kKgbJShw3_tQAMYv2OL4oisc44QW7PStx-VLt7V9SWCaB90XR66lH0YiCNCpu_imDYBVDKbUl5NHqhBlimb-XoaVgHrisFiG18N-lvBE8AEZDlmsSQ1CJqmgPq-ge9y2qKlYDUHf2Yka7z8fSHamaw6YmGws_0-SwIIGgdOvQC_c57GSJwjRWr95kwystSkSKb-Wij__FYbvacid57vzfJkahFnVhHEr19g5fggAiXRjJw", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113467061969115611462\">CrazyPotato</a>"] },
            { photoReference: "AWCwydgYMFRtlgDXQn6f6IiwWnQwW2aTrs-1mnNe2aeTiw5yXKZb89GQADQaUQBRxVLFC4y5-GN8ss-KzOuNrag4Ezj0jN8apvaSqUmxQmq2mN02haRQUWSJcZD_LmxUOhfOriTaT8_TQBbmTL4owklrfMIXOQnyesnnuUQfRmuPFz63skHkOBtJo3RjZJh-oKA8EOSEuOhDUA-elilYkc_BhbGFoVkT8GV8Ix2R4QDOm6cfbcXAjH_1RW9HFuPLSQWzmq_YqqdMxe8_4hDcWvWa7E9abQoRd9H2Scjrba3X7vIBA49yJOKi-uHHH3zfC9NGYB9xuGu_C3kwo_4h073OMSNG6yemwpqcSY4NgxfKcWyneu_ZqywdtMQCgHzBXIyVy6SCR_-oosJIk0kgaKyH_PoU87eLA02CmMeSvC-lN1BXKDj_fPrpAo2vSneFyfhp", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102995305993733662290\">Luiz Lewus</a>"] },
            { photoReference: "AWCwydg3LBKzq0TmPu69cnWXH_GbdXbhLALEupsMv4ZXqEokQK4_JHorMAFVx8Mwgt_A9SqLSZtGctYLKQEj-2hWBdVkEFlqO-u0YQEbkzVUrt6_kPV2sq76fA_bTQp227oj9y7ZnDzUToqyKQSNWw-WBOuRhLo9yU3Wt1QsANmVymzy6viAIaO1RaXYoO-hwKm0dL6WBi3fZqHLiF0X1aHDtTcI0c6-pLrdgPEcbmYhCXrtZ4HV5BOOtRBWDEbTZalMSCIVnBpq5rUW1afBfYmIn0Ac58GShd19_R0cScSjluWOirBmdgmJ4nuHZVrLtxOR9qjIND1YFSBOHoD3E1qrQSm7YXrGg7St_pxMxM1I1RFbiPzcID7HYqflR__gH275Ja0_SlwkRIoyAyqyfPIG_QQ_VFQhFXVqOkt_lVf9QD5qZt6X3HAerrPOcryzZBIz", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114712031134697964596\">Murphy Ng</a>"] },
            { photoReference: "AWCwydgPKmfzW0l1VHJzBW72lPLyBfaLzQS-H5DIaWG8XJ9hUMg_AWDdKonLMz1S0PBNyUnZD2hvZ0HWZGD2dGiu6XmzlkO1mxLQsmCEx9mLV_NEvAK47Eb4uyZwX886MdnUM-pBFwpPo3W2v0D59O5cl5GyCb51_AOHVPF-Qh296Bb_P72gAcrfB5HJffYBV6jNvry2cja0_JQzDGEMRrbiTDBn9jTh4ivMXOq0Ael2VJ2qszL1gNoh2rmGf_CCFtdcqIpvCwyKO8H5gzTC17Ov_HlUg4uAC0N_aAqc8b4CatptZ4JuLoLv7o5TS3u8F_dENOVvvQgxowVV522xI7xxYcdFmo_uORpRpvANdHzyYRKqFpQo72WDQD6DG-GY66ytIxVgdYpZr_HjGFknq5w6RN7RW8fUGFKe3OiDJ8i9pacyocZvVg3c7UL_5KoPIfyy", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101339794398503306152\">Wang Jun Seng</a>"] }
        ],
        summary: "담백하고 깔끔한 국물이 매력적인 사바식 생선 국수 전문점",
        updatedAt: "2026-07-15",
        highlights: ["정통 사바식 면 요리", "시원하고 담백한 생선 국수"],
        tips: ["현지 로컬 분위기를 제대로 느낄 수 있는 편안한 곳이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선국수·사바식 면", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 2:00; 화요일: 오전 9:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/JiaSiangSangNyukMee/?_rdr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13562141638734177505", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%8B%9C%EC%95%99+%EC%BB%A4%ED%94%BC%EC%88%8D+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신수란 상육미": {
        photos: ["/images/kota-kinabalu/info/restaurants/sinsuran-sang-nyuk-mee-kota-kinabalu.jpg"],
        placeId: "ChIJ61K3rfhoOzIROpW7MOhdeq8",
        placePhotos: [
            { photoReference: "AWCwydhxg5fOAdhaEzcFkQ_DZsn6EkeslPGxgtza6zekuC39c2pRyuNCg0CWLPgPgX5LoKSVVoGcSrZnDjP06rww3MQQwnMLxEA3ivXL6lgej_yfn8UydA_odwJThs2ys0O9stQWYUJyUM-Vq9SlItNaUmgEYuta5gsuLy8J7_0I4XVi28RUkUpiO-tehKXScucu2UqjVDDfUo-pa483ows59mEGVeR2SMgzm7eiCxdJgE8FGk0MCbCB0okjjaTNkttKuiUrQ75TGtD9wfeQ7nPMlbAnhbN06RmfQ01HQIk8cI-35BU5CPoEHzvuyV2DO4M9Kzjsbdn3hkV5Xg9Ktx1-28IT_nLjdyT3yUOpCClH0_LysThmbJDhUDq7n4K6uZRJoV5_-54HLk6XG7LReMK_LS3zGcJFhc4uHYuRC9Cgi9cb-NI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108811680481566014519\">Ken Fong</a>"] },
            { photoReference: "AWCwydi6dh_vKZYI3luctQk9FRm5OgzsCUQTg6g1A1EyaMCqIcUiRPIGRPrzxfEKzIdBz3bJ99Bdsahk_BWS_R_CwqpvF-xHUrB_cw4XAtDsO3jQrqLvZ8-TxxWETEAnFu4GxSyBoS0AYQEXxjVzILjO-Yn89obt6lmyIyODVAqbCrnVNzh59btObYtaCZns0PPMidODX7-41sKYBHk2DuFwQGAqUsaM6TDDXApQsH0WtJx3MI73YyM80QGGIYYZZk-y3ZDxHkDxwLCIQmth6Cq4PcRJCYutzR1J6X9nY46W9sW46gMcIloPQtlTj-FJIOmFmvQOwYcdR9nKpKK0cbq5RGkh7x-PASHVifY2rWWqFB82x-LnxQzknZjjc_ML_PtpLsmO0rQpc-CdTGoXCErAVGcCyrxw3frwSBXnso-nJ_S3hJljVr2sjFybKoLrOMVZ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101339794398503306152\">Wang Jun Seng</a>"] },
            { photoReference: "AWCwydhQ7yfijbHUcX1NPQHT14yVqewzk5BYzLLm44nsbMkjpMLkjWaknt4_fULNvswFb0dcOT2McIb7e0znH3Epi4fsFzwKObIlGp8ZCGx1SAEwsEsgeXzqHgMhmdgS-9hZ1HGpzi1xxxvUQKM2yMCEyP5WlWdr6FHgzOia3HXTi7XkAGbiJL8sFtfkacANy8TX272fGcuORWXjIfd1iJVjPF5NFVWqagF64TNn8ey9AGYSQKEuU9LwlHIeIDngtLeFd5CB-JnZcvY9EB9_AeceBbAvzbh5th7OXHIuk0WiaqJyaMQEM69ZpFK_esgFE76JHkvza869H6eXcKaGSgy9FyH44j8F13lngXmuecmWJ2umz3xp3gH1w22juLmxNXNOS9d5Hn4xBCndrUIC1H1ZkpT8SVv9KtFgauqucKU6MmUiuus8JF531a8otPCJE4jR", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113947167009355489265\">SY LC</a>"] },
            { photoReference: "AWCwydg7oREBmlYW8Al8l-_pAWPkXh-YaE_jrqcCXzimmJIRaKzASQiplhw_eUPciBwTaglJDRLuQo6CWCy5KWpU_Z2ER_U9Bfi04PlgDWgiylJvvpFQS47kYBRKcqwHIdos869m17kboTEflbYI396y0tgWoRssTmvyKnWSNMJZfZMfxAghFCXDFU-pxjLQ9xmBHQREQfFVAw0XupwMQMVdcuH1g7wBOgjQUEqkjillDLyY2uNg0G6EVJL0papOZn03FR5pVgkdiTwpOpn5zNmmSbZOH8H4twT7xxip19gbiw2lXAW5fip5TArtaWlQvTp4TeV2dpmPZUM4TTdDfo3u63wF2iH1ib8Xh01UVBKWy2sTD2EPJTqji7l4JoErAKs-FB2txRZo9VNLthWuijJsg2nqfm2pDi_E0bGYzgQXFYTIIuHkz1wBerhH-cd4Qz--", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103254766696064125314\">MH Tan</a>"] },
            { photoReference: "AWCwydhh4XLDVL92n580k8DPRxDyGTzCDRZKBX5RDKVVkQ99ksHoe7SwtB6Zu0ZpIQNYCptvRrRpIQK971c0cjXxMmOMMEBwsALWezjMHkuPogYxsUXXM7K7dyw79cAvv9xWLqYN2VI9voc7FAW0z6UPTqtu7CX3j_mO2ROHBfNsMa06MtSw_Y-7b2hEhkTwmdk2i1V6tdo_fayxI4oVZoTU1LiQ0y0__YsbLuB3-pW_Huy_GPft7RGth_siecs_1BORwuuqlE2K9qitjAGH_zSWh_eIIaRbV7Sqq3gcVWoARy45n5lbceF9420PRaroA-ljS9RiyfbaHyBsptq9oLiyvotNCXhWj9Eg6YqGkUJYwzZA2JmLS5QMccoUVeYfNaPMyiRTncfRDwRrwNelk76LYEqSy7POlWyZbAGuxuRjNCluBU3-PAOem16svo8ajwux", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103254766696064125314\">MH Tan</a>"] }
        ],
        summary: "진한 육수와 부드러운 돼지고기가 어우러진 중독성 있는 국수 맛집",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 돼지고기 국수", "중독성 강한 특제 육수"],
        tips: ["현지인들이 아침이나 점심 식사로 즐겨 찾는 로컬 맛집입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돼지고기 국수", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 4:00; 화요일: 오전 7:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=829440453177410594", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%88%98%EB%9E%80+%EC%83%81%EC%9C%A1%EB%AF%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "론드로럭스": {
        photos: ["/images/kota-kinabalu/info/restaurants/laundroluxe-kota-kinabalu.jpg"],
        placeId: "ChIJxYveGJRpOzIRt79l7Z5ecF0",
        placePhotos: [
            { photoReference: "AWCwydgCklqBo94FWAm_8vBMZtTgL5-4RUxKcCRMQWjGNdiKugSpLj9b5qbLQILMlrykFiibCqJoCUE26lOGL5lLQdaqS6zLporaP2lVGEeLKyErRBdWuq7YGNAIp4_yAF6zmj4z5g-Xlz9fwrmE8-EjRiNBETh4GDZKmG1y0_SodbxhtnT3UYsuHEKySBTVVesnyNCIImaYOiyZbQZusNnSk86uF7BH7OxKVJDIqrTvqFRv3RQCQwFJMuo2PtYobGN4JpYqIigkXBJYh7lRz3shmpbHNvShWE4edtqwRmW0vf-2rHtyTId23uXhsyU-ZTta2Ius6OVsVKh-0hU27LWAcNPV42hD5hIHT-fU6lQAb9Xp13ilGqZCFU7klYA00mX3y1fMZgluUNEBEdc2IpxOeH8LfAs-5NaChvMe0Bpn_2JoeQ", width: 3391, height: 2137, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107382242423756386742\">Laundroluxe</a>"] },
            { photoReference: "AWCwydhI4Wwael2oLyfvUAtwoeF3DKBKeqMxsSNVaQUdNbNyo8wVHEDHJDKL-vxcJU1Xs6JA6FvrS-70BBIDaHaH8vHLkEmJUvWFw_alpdqIJ0DNRsGURErlF-RGHTwKFFiLFJ2DSY8SO-bLLZckeb7Ba5IwtnJXzIH_iB3joLkxGRIyYOuO7GlAzdomCVJDxN9zcX36-UVjTutBzuLYALf2F0R9PowFr7f7wMNb0jP0kageVxPXnfBJCd8vYXgrCZWejyq6hWbIlJSNoIOKSxf5Cj2fVpRNny5jEobwweT5txl8JZ6zKJa7t_w-qea5_uDggIgHP0ptTcyOwe83B6AuRuNdkJEzkS81SNTWZeardI0QcKVqdaxq5MXP9U_V62fLiagUoqQG7CHdHqV0QFenXqwKmy0wGxi1IyXIIMfE5FWXs9VH", width: 960, height: 952, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107382242423756386742\">Laundroluxe</a>"] },
            { photoReference: "AWCwydg6DLtOTYPqiFVbr6Aa2rxj2sb_dTaRxaHb7Ltu8s9eLCt6Vp_s3OxF8UgLUxSuwFcG2QGYzPfoLPxyrGQGlVxDFo0QEA3wRofjkE8JGOa7XyJ6yFdKhrevhAYxCEWoCabNfs29LlZie_3aivBZ6PNgY0RdHhJ8CxInZcLSXM5lDtm9MZmDzZLexoFOXF6TzGYrqVFacHnvujNOBR84Nd1a0_8SNkUbPA66EWHbwOr3t0jEVI0BKJdNptwqDWauv16EypAzKIqmR0Ggo5n19Y9W5qDOLxOUBdZrX0pPeQ9NO8a811SxiN4nTCLU9k77ETo-yfeOw00qnHQq1GgMFxF38vmWroigoEG2Ydzkl_y1nflkitqG8MHQMMPZmymrm-OB0UymJXkH-U6KgVPkrblFpf-uz-BEMiSxHHFEDdIDRowu", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109297153631863965194\">edi wong</a>"] },
            { photoReference: "AWCwydj0IiS4VMPNzpMdsqWXgBmwhfXa4AxK7sQ-iAgb3is5zBopg5uOCxEpsJSaUyc2F96bMstnnlITCp9UOVEf0mPoA-H5CF-LZ2P99oPNYE0rwqmTMfYWIGuE869XCDCHohxJms2aISaSjtFpa4oQRk7RqesgR4ALKBAYrL9Jtx1wL-Ownh594YFgdm24OY6mVxJ0fm3jJytFcBTHEE9J-Hi3lgZX5v5m7wqJYJbDYvni6ye0x0W74J18Yz5JRNquIeP1vw9kuvdTLoHhPUZ4AAZv_FR6b1UrP2q32B1Dd2x9j7-dtczr7Z67mGd65nm9MCC23X8DbxtPORySqmUlimQ-pbLr8NSxUik8NDuXkAI7iT_HagjmTZKHLrV0f4kgfEKIgqV8VjlCzPNbmGBHQxpwlgBEN1fqwxI6wEaVwxJZLgkC", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103964948057107709000\">Lee Yi Jun</a>"] },
            { photoReference: "AWCwydgg6pOIqC02SY_p9NLBkruATebyGspr5BJ6vZlyxYwRUPSMAIFBp-MTGcNTFRfuCyS3GkzSBC9hE_d8Ts6IqeadoKsGSvUR_KSv4SEd2DwkcT3z03VsFt99LAcvx9xVvK5UZfAN2gaXavt6FbfcDCvvg3XK_B87FHHUVDw0I_tUolPvaFp2qAgVy7cSchGw-0Tgkfc5ddvUO7pqc4g30JPgJOpDvkZ24qgSGSNJa0TkVRc1jsb1tfPsKHSyK9nUugGtIvq6HEq0kxuqzD0I7tYEsGxHnWYfy2wBcHLStjR3opVfA1TWYwogWrs5ObLDTUWRCtcmmq6EEpal7U6X_QPjx06NUTXJSS8YrRmcE7JMi4gyoGXPnuYhvvyEfuI55JqA9dHqGjCTcPP0OxAQxcAsISPBSrrW9oaCl0yQLXo8Qg", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106384722252095609067\">lee misola</a>"] }
        ],
        summary: "코타키나발루에서 여유롭게 즐기는 파스타와 피자 브런치 맛집",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 파스타와 피자를 맛볼 수 있는 곳", "깔끔하고 세련된 분위기의 브런치 레스토랑"],
        tips: ["여유로운 오전 시간을 보내기에 딱 좋은 분위기예요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "파스타·피자·브런치", items: [{ name: "대표 메뉴", price: "RM35~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6732985479599603639", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%A0%EB%93%9C%EB%A1%9C%EB%9F%AD%EC%8A%A4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우리 BBQ": {
        photos: [],
        placeId: "ChIJ7Zf36cRpOzIR1BoQmqRlS6g",
        placePhotos: [
            { photoReference: "AWCwydiSEcWv1jThhMZ3QxnmQBTjQRiG0_uAjhU34R9pr-dTBp5m_DDGmYdzsV6CXaXYJbRtJj6s0u40l6_TwQnRELHTlspEGk2jb1Crflwe0nIW6GqR-N4quzthMOTqSg622h82AY8PpALL0icCTwlODO7PLUKgizBPfbIJcvBGiFjTvw-SEqVR2anyWw612Cfr-YjFN9Oe3AW2q8g6oKcyQ_jB4FGPr-Ulgt2TX476W6xQo61IqfmFr0MCEBO7GTW_LcDbQQ3f7rs10M4K7R3zzr0GvDhxtxAl2QsjiXYCm6vkanBCTGm1YvgKSB2VcdhoTtYsyTzyAYgYMtjV0xfHFvUBWkqGfqnnXxDFDBr4NujMqoyS9s4VE4mTKOA2L5KaRlJPzBYUNEzI8IcUuLMxgpxcExtiX3H8K_ABcOugS7y5GOr2Mbm59MpCI1xSgA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100137430293026321402\">WOORI BBQ (Korean Food Woori Restaurant)</a>"] },
            { photoReference: "AWCwydgbKQRAsNYbCWqpurJN_JmDKtvqyaVssVtteYkFN2d-5M1WbOwxUWCMh2pufapjWdpPkumEbQIEju3qg68BNQ_09_IwTwPnYyBvGpKo3DMmFi8yY-YR1RLwMjo4BohbZuVIdMN7UJEMEWQl9PYDzU4mYi8oPa-cUzbcb5VmJNdWfT7uQAMOMjC6Edj2QUKXxknU8btAanKe-UFVgexzqUdbYb9Kpgr_pdixs7Z4v7HBohCF0jdK8v5RTaLxJumEsMLVOFMuLpkoJxIXzLyU6TTGIcN1tJn8IWwwcLcvfDNsHJa0HdOA6Ol-pn8-ACIy2Ee-InItMzzgBEo2PUd7tnFS21VyLAMZ77DvJkYU9yssDaTqPrZyNiFfEPMlktmKLpkOnlLJ0RSPtQE4eeraEHCAsrgGOHkjy7MofhRx61xoBQ8ckX79wBbMvN7zZHGj", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101188202346920557215\">Monika Stefańska</a>"] },
            { photoReference: "AWCwydjoZ3NeyWVfPvmXjOY6LUQ3moPcZImNGa_n-VifPzIKmsMpR-qVH2FTL23OZYU9HeeJBmhTVCbpthmtPrvAIXppgl17n_3CHmgCKuu-Y1HkLODL2eo3Z1fPgm3SW5g3XJmZhMifHccsbQlrlE_B1UYBLMEyLoxEQN4LvrQ3g0-1kqX9b_CgFAtdaV2Lsp2Urs3bQ4-YbPI9F6necEAbHvMV92CGjfC_Q3o0g9XYoTlS8j7oxCq5Wdzl9pJE6aeuDGTJQm5P-JmY1dAzDAtSdIzLsaoB9_jFfSyjF0aRlUXh_s_gh5W6VUQ0_2rp9wcDwdEEME8LHC2kY21XT_bvfVvm8Cp_Mjf1aia0AZmG-hI2RIH7P9KDIXkyJGCtlZP-6D8D0goEWwLcLp3ZiQ5vZTdcjEGzerEKYDHik2xHTGfcDQTW9_S8upcE9EcGZ7Es", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100137430293026321402\">WOORI BBQ (Korean Food Woori Restaurant)</a>"] },
            { photoReference: "AWCwydhr6HzMrCkWVXIcZGJ2Q_0O4lKF47yMdvnOCQeLfJ9h7Swp_ty0sW-mQQ2nS1Um1GQH8iuIptgsIbDcC3U-1fjPFM0FBPxGRK5QGU5HcAMTjDl8otTglZ5rfNWoKUrbtgcC1OizGMw2uaeKyZ8a2NAzZmZMRa3TN0iVW6t3S3XiSbazvKwf7uK8RTowQFVoXtEm-4hIO22JK9k85haGQydvDNvKzC22y6cH8FOkB7UdE16jMFjGD1Ldl0wcw6uLuBLfIVFOp8321Dd10F7WnExjD-5ZLZB-zQ6wkQoFdvO4M69JlENsgsAEzqC-Y7gRQSoEM29SHkfwADZ0xtkdXYSzQmbcURftZaMQx9Q1p65m2RNlu-s9NJjgbSRS8IwckD7y609Yc_0vw_QVknCDjW3Pxp7M_fmtAH-Xkwk3Hj3PpZFAd5Pwv2mYiAIURXmb", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100342697162165812325\">Wei Yin Yip</a>"] },
            { photoReference: "AWCwydgirLijBXkGjLQPtcJYjSnN1aEXV2VkjQ8qX0esR9mvLPUJ2ffWLaDXHxyjhiA_MbhDEWktLA6hckGrUVFRsP6aoNtUOH46XE8VyUnRDEgdGH9r79X7D9Twf7WfPVMD2FMthNCa38gnJ6kWIIr2o2AsbOCSe3qpS1RE5XElGMCU9o2E5wQfarEHoRyGFv9C9s0A8QG8z8Dri6dPZj7SMEJGLoX8ZOpqjei3xAE4Bh2J3o5l_uKx-Q-M83avKjzkakrLw75UxmsiG7ywdpBsmxchs0dUOG6gclZQhwblIH9jEIwgJeTi5cU-CHn9N2DrnSehJ2GLCPJ_YUR8tct8wYGjriMYl2-OZNHOxKwNsvBcqPzk8ISKlnhRWwLDGjhRUA8Y2RlRc-QPbqrOWCvJa0uC_hoqV-0z_RycCp0Y2ZYUxo6SM_R3aU_4xI1kbA7G", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101188202346920557215\">Monika Stefańska</a>"] }
        ],
        summary: "신선한 재료와 세심한 서비스가 돋보이는 한국식 바비큐 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선하고 맛있는 고기", "직원이 직접 구워주는 서비스", "편안하고 좋은 분위기"],
        tips: ["직원이 고기를 직접 구워주어 편하게 식사할 수 있습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12126898179258981076", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%A6%AC+BBQ+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "메라메라 코리아": {
        photos: [],
        placeId: "ChIJLcWnF99pOzIRpbC0pbiU4ZQ",
        placePhotos: [
            { photoReference: "AWCwydh0_9NZJav2ZhpU5kN_HU_Eamt8R60_iot45mkfgATfN_a6R5xsH2RfR7WUz4oD7owjampFdAtYKdAC8fLDdsBFP562-Gls6__xc2-CLN6XIs5U6Wbc96DAQDf5ybaWvjJB0q2GaSpCbGwrCQWJ23PTEL-YLsCrEyN0EmMZBtXQSsgj8PpxSRHY1YjXzT0oLKoCl7oDUr-GGjMWcnloCxUYPuBsFNsLzv5rFJTjqH3DQJAvZJYtX0k71ccRALQUB_Fnjj4pfPDVAMzoh0lCJEj4kO98NOgM3ctEJL53K3P7Lmm2F9baCvLiqt_OmNQib45dEG_Yoeam4Y0mH1JAdhXQ6KYNWlWwfSO0sXtGkvLufJ-wBwES_uelK4f_cCkdFz_7_vMCn62hv8jL0_O8n4aubz5FpldziiQ7TdKD1oyZXUvn", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114459395786549141546\">한식당(한인직영) Merah Merah Korea 메라메라코리아</a>"] },
            { photoReference: "AWCwydhXOQ-JD7vFtwZeJtUzGw-mxi5F_WtGc9FwOuvEULXDjOTyTAfZ4Y1jkFx7ZWTS4bXiXT9FkfBoZGPwVzqs0hHH9zlPoKJ2AeBZ30qfSUkWgosXcD_adHW08eLGluEGUdvteoVzI3cLh1n2cr5YSoNAp7VTTAHaqzRchBhfmo4FGSfa1_vSAyE-iW76FxRNY1RaOQumwvNIfhjOOa31wyXiCgnzXDaZA_bDRT6ZKJnDa8ptRDcgkxr5vDEZABZtBjs7zGutzZbltTzsbG988L_sheByzV7BSBfYswnfvm8_rhJynOZEVxAKxnOXoSHo-5UMYLiK9gsviiFGaZT0yiLP3cIoG-vORibIzErS7ZbDB9ciYr20WfLbpaL3b70NTE6wk3nxbf_0x5UGqi2UL7CkPpkz-RouL16M6c7kVk_lBcj3", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114459395786549141546\">한식당(한인직영) Merah Merah Korea 메라메라코리아</a>"] },
            { photoReference: "AWCwydhNlaX_FnIvGAGSG6AXVqBUUvvo5K-a9NFQBHkmp37X-B9IHpfGrVuT4h3hukGy66syd7CTQkodMpuNmSiP0D2DT7D3s-m_eC7rzQklEKqIyeb9PG-xleR3YU2ieSp7OOukK1ggG5QCVdd2ZdoSa6US20zbtPoEqMjSM9Xc6F1lwvUqhlYDL8RqqTnlQ4dTOHZiPJpxdJx31tlHiNoF9f9b3KTMhs_SElJaJxW3gXSse9TaZuk88l_Z0qlKoVMTMgqJqG9LHwjsaiZ9ekkFXFW6DKrSq94WWTJtrTatUEFbiTts80ZhRN-esPaSCLKUyKYAS--iOaKJSUEw0tkstGhvK2GeKHzB80z_Bm4fXiUiMQfw69J_n6OnpuZf1eEsv9vXMJaa9KNdCoyxvIwyE2l7-d8i2QDhnbvS63_lWpVBmSflZIQ7kOkqhLpLAMLU", width: 1587, height: 2245, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114459395786549141546\">한식당(한인직영) Merah Merah Korea 메라메라코리아</a>"] },
            { photoReference: "AWCwydhzWOgS_RK2fRA1jUEu12q4nSfHamnG316YNwvpLnVtKQA274sVaiE4HAcehOMw2L8O6d0qfoTbeyrFGsyCdMN7OgYLIkOzB1wWz0Tpf5Z3Zsyfud5rEcN-twdmvqj_QXDAz-Tdh1sGXeeWcxkuAF6RBjlIj1vS0PJSlMXGSFt3YA4VJ4-cf_vYAeJhjROmbAC_GB83h2ltq2mU6BHrmxk1O4AHAcMULf_n_sZFM9cLor9fu99PFyCW-liXHBl5oqqFY3PqT-WENcbIIfP09WqsGo20kaKJWPxamkUhdQmMQOcKEagTWUNVJaMFVcb_O0HRrY3cpsxqrwQZ30wMuA6TPHtOimtZb_8GqTD3xjBLMVsHYuqbCibiNTmK2NrMbjaVQuA1Iz68-efQKt233JpAJXpx78jz4S_9iHQRwfcEEsN2sFz48KBUtfWW8Ydd", width: 665, height: 363, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112754314768430902787\">Chay Na B</a>"] },
            { photoReference: "AWCwydguk1LgPufSyydl06IkaJ_6i9v2vpWAgfTA538iqM6Kxm2I0Oq-N4B4tqkKLSKkjMpenlIo9DBR9SGAdGYa9LKkPSg_ruWbzrvHKLIu6qLboGp44WL6T9snR2gj1PpGtg7PbRbVBsjzthV5dwBctCalgxRH6Mh9zbnurr2CqX6s3A1u6Wz75jUmmlCchu63lABjDInmOAwAM3xzKUnKHiNMVmNJu7DphRADUd04nOqQ_2bbSgh0mtrkcsV_Zz_mv8pFjffiZnxVBWevzS2bRk9dI8YIhNz9FHKTSAAPnuNtiO6e5wzf3bnHqGwZybyF3deI-GVEw3bJcNVYjg6sLGZoMMiG8biZ3sftgdGdHeni740kCwaI3ilpzNkToZpgiVrheOinHFYLWDYckId7-7Lvcyn5NCRxiHqpgDFnrxF1RlFS", width: 1616, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104486886275274631968\">Aurora</a>"] }
        ],
        summary: "연어 비빔밥과 냉면 등 다양한 메뉴를 갖춘 코타키나발루의 한국 음식점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절하고 상냥한 서비스", "다양한 메뉴 구성", "합리적인 가격대"],
        tips: ["연어 비빔밥을 추천합니다", "냉면 같은 다양한 메뉴도 확인해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 10:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10728019308148207781", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EB%9D%BC%EB%A9%94%EB%9D%BC+%EC%BD%94%EB%A6%AC%EC%95%84+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "서울 가든 이마고": {
        photos: [],
        placeId: "ChIJBfBq779pOzIRLwpMAFXF2HQ",
        placePhotos: [
            { photoReference: "AWCwydh9ZdHLOA5S-KWcSOLrwAWTh_eLR8Wd_rwhpa5fagtecsxS4TRn5pplYcuXgU2nSSiAC7ns7Fn3dcC--1lowb7Rvwui89aiPb6f5aVVY9Hq9TLCiZF7YcYz0CQ6aIqNvaqqUHp4T-wh1x_oVP4c66i5U3DEHveUTiGsNmoN1OAL4_9nmowjw-ArnvCG5Dssgk2s-DmzKU332wp1hDOBk0WdCqOw0mrn1CI7ybNEs-k74h4mjbCNAYqBvAcErT9UmXvOzlyspDT2rgXRjDIlblrJGKlMppOk23ub47zKlqkDbwSYE-6ipYd30lObRPjwcA-3T2QxPGEzUr44_5CVhlc1boHhHLdMBGcMrDpzGZ7EqXPVQIgdsY2qKIwPQ0rVF13B1tWNxx89pIPcTgt6oWdr1pAAYXKGc_sGACVxWV7hZthnTi-NRhp-Tu5480GO", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107567838258635322791\">Seoul Garden Imago</a>"] },
            { photoReference: "AWCwydhvtYbwUUBeNJEY36sP5yCAd9c8B9Hg40MOMBROBY2OTf9qZf2tzBvDaU2-hT8ZVCojhJvfC_fK675yJwvwZu00gAlH26JC7xgKEWW_GJgf7us0ijJJyljl5X3RMSO9jCztvbBFaltfyPmkPXt-Tjl8Xd6n3oZz4SMJLjJF2hLtM3DKwSSp3DtJvbatGfMlj493St_Jz6vOAh8WxNTeKCqtzyNN_vuHvhkk1jFkqcLfWexWytqPo4Y7Q-dHg4hIZYR2lUfWkXA8k84ljyx7lb_72Or5vB_uFd1tP9TjiufNqDyOapX5jLop62ZBZzpSpAzmOJykCfZ9q80xmUoOSDhWi5O6MKkt7RVnRibAEBx7RFbYjt0dHyFJSFwfqeNuBbBNWPQiDTA1Nez-6F3F0TGKB-5hNoXAgcb9lSc-2nwH7IZWz-nG20pKUdfiUe0N", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107567838258635322791\">Seoul Garden Imago</a>"] },
            { photoReference: "AWCwydjLxFaF2odpLsBF9wGyDqckt6ca0ih4xla-h0txT72SKy5i83Xemgc_lWGfpKbgbbcm6qnyKquyW0nBnlWvvGDXV3pR-dzLgAoeCc4DM2eehLJTHMgB55pkLWGPPQwO2zhOyoy7CoY-6d4RoEuuZeFLtjSpVw0OQoFj0Hooj1nDfvHyuyEPDhoh-oFbOdNgyaeQcBfvSdEKjCLIv0oKP4T7m9bTj6m7hy8S79WBAMyyx5iMLsljLJzZJEvBoXZE5rQrjNrNuRNwW2lRpyZ42S_2Z6PUCRqA257IcC5oISr74Cf_BeKABlupFfPdMSBlOzVt9wzqQ8b_r-Q84ogkTv61_lFUf0xfEeRHydIYRbyD6rTIjrA08Kzb8LS02lBWdNwBc-PjC1cGkGYJffS4GfoX1DXmcC2yQGrbEofJV_Y4Ao_0qgAbwbhwOCTjDi48", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107567838258635322791\">Seoul Garden Imago</a>"] },
            { photoReference: "AWCwydjmfQeWdy9GSMAJZ0DxzBG8lTZVzaxyS91bhCY9Ue-6Bs8qk-meDT7Z5XGQFabeSl-7sYORz5u6qU69NZzVy8lyRz_lCUayxJr3cqKRqF-RsFut4gJ3vUbJCfDC_MqfH-U8j7yCl8Ab3bhHtnoPg_bt1qblUrjPqtZnvPjhxYqXXDJPOcy_3z8kI_b36rmer8YPkC09-fOMxAxyJQxAFlAAeWpG0s7FEoY72L06dnucSRJz_P1QOztYE9bx_TDZQVcfR2BRqwWS-l2GJgfB488UpsoIPSoxmziYvzNVCuIIJdRl_kCahxZTGu6eeiVEHhFMOuGg500UubYYn_8EjXwgYmiXsgibuj4IgnHOU3TpOiU-ypN4aEtQbon5ds_3BSiG_ws-Q79t9COwN70CmnN6fQUTl9r6bLGO-gTcvmqqitcIrjH9yS2W-q_hdGFm", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115038180626536539236\">Nur Hazirah</a>"] },
            { photoReference: "AWCwydjS-_hUUmV30YuVrDAFqEYLGOX4DiZAJaPgGxXIeA92q7FrvKJNGSB3pe2WT5y3AP48h9in7IQULrCWHJ7viZGvoK3E76YXRcLoHmXjs_kUfqC3lIqBdWJgs8Xx2TtPQiLci7xwEa89IgITSGYp4TfYkuZq9x_POfksmmC00i4YZ94DF244jgnebKZiRkxW_vRCNRcsutl9opx4flspd2GwGtfCqiu3J4r__ptDu3JofUQj8cQNNR1efTpxS6Siq45McyPptpOp5HC-kt8qNMPGb5engzSnPRUtNkIOLbdPhElrYyRHvQYHmXgw9SyEehLzZ0wWkzu3R9faKIwatL3xFfqGNIUYVajLGcQLQIBwekuMXGPp89YgAcpUiSiLJC8Qlf_c_O2Gwc0QP6mSSSL4N2nl54jN-hCaJ0MceKG7B1VMilDy7W0Zg-MFC6Uo", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107567838258635322791\">Seoul Garden Imago</a>"] }
        ],
        summary: "높은 평점과 수많은 리뷰가 증명하는 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 식재료", "다양한 메뉴 옵션"],
        tips: ["43주년 기념 프로모션 기간을 활용해 보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.seoulgarden.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8419696472237017647", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%EC%9A%B8+%EA%B0%80%EB%93%A0+%EC%9D%B4%EB%A7%88%EA%B3%A0+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "서울가든 핫팟": {
        photos: [],
        placeId: "ChIJf-lamYhpOzIRv6RFQSzw8dQ",
        placePhotos: [
            { photoReference: "AWCwydhc6lGExWjFkEPA7bpUeiafesMi_OOLfQTzoMOmOesNGgd0foIQrU50Xil3hkusRzsqxXwj07IE03NBUKZ0rVAlIJlofUVROVjNu73KB7GTK_WOfYcUm7HPDBqgCO_si30n5TIrLdm9roNdsEC5A5rVZrvMdKMnKAU0K0c5vyx-XysCl1yOGloeM0sTUIl4j8M9hkLQ7R6Xz9Qchwyzc2pekPIVNlx71SOZrXYxlBm9Mii1E_cbRfbt21orXeaE-3CSEO7dEU3fQGX27F4X9WpATxGagcRXYODDwWpAfn1unr2TJzztIvtqKBksZg0qtCBZb8oWMCwn7scO52FZ4d-nKXzFfnV8S5be_5o6oVjiZfJHFIPPyzOyMOCAfk5-_PA3KTkXNH_KIBzrEqbuDXBMClgQFebq3xrpuFM9KSJz08JoNDiExRQOHgwH3w", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106748826063079359426\">Seoul Garden HotPot Suria Sabah</a>"] },
            { photoReference: "AWCwydgt_2vVDYEK5w791PeLXHtRRuGZKDUX_fqRWN3fTJkHQguw0KoEbp6w2ZrYwIoayHbV0Lq8W1UDfcLRQXWqACNMBkMqWn5TzeTllHVZJSB0OY_9eMFkm4LfSkcZaacPebQL1AaZVb5rmiMWWUgovzxTqic6fL0q3Fbs9ShrTGa7fMWhCf1-An5hS0M2_WTYlJy4K5ea-pKw8z--ZyP8BeRJjT_itwHA1MLThikI6ZAhgodyaOmDZFpWDjLV9k8wPxSEcFfBKq55STM0SEJJHJl_uluSOLDBLhZIKECxV0qOHeueYosPK9n2bB7vWKOr6VeW3YBN2iZ495dgAowewvZBAIvZURLL_F-o9ll3fkk6aiz8TRmRfFGcHEXdQ_7O1_UwopA-dqhdydxUVNdqwZKBtBAAXTc2MThbKc7CuSQZiydjWKcyPvDGAscHxxGg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115021432608328639749\">dellrara</a>"] },
            { photoReference: "AWCwydiJW08TZfwB1MVmHOrja9Vq1AXMAOq5aci5cVGYd_n7pQSuvAg6Uq5-3xVq5zqK9j_VXsDZNJtj6r2-ecLm7dn_R0BkQR3e-BPFlh_hsAkt_rDMYiJgFj8lnaYgJo0RI7pJBrFFu6gVU6P4PTtYRvzB1AWJcT6xezPSucoz6W1fQFwnpjLA1TTLvEXZEkbkM1EAcbxmJvtw5lhdYN19qHvbhCc5OCrxZH19OEeME1J4Vv0YSMKQxe8YVYMKZTdjr-XDdLgoL2O5ezyeKetbIHf_ybwCk04Tni1sGMpHNDAXMlfa3bn3FQv3r4DSLp2umMMaCpx2iEVSE1HvvWfmDd1IBQq7YwR9hr24Nsu7zccvFSduijrYJ66_T9x7Eg466oPsaNSyCHTJsf34t6WweUGgqqG-1LVvesfnME1t4cF9ntz8xnX4ZTQU5DOTPfim", width: 3986, height: 2847, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106748826063079359426\">Seoul Garden HotPot Suria Sabah</a>"] },
            { photoReference: "AWCwydg27RWH6SmY8L1dSW5yCyaPtaRzU3LWFj2SEP56y4outS-FePEjnFgoEVnosa2zrFII9Q5xSunKpOxeDbsg9BHr5IlBfN4s_wjd2koCVoHZaFU4y6I2KfuZ2Z_-vO-iALu26x-z3cDfzhDoPsUbam8EAzmUXmQfxR-KA3EggsTuD4PWMgMZW_vKB34S8rdGrbnzLl3d1XYnx0kSiLLDoLIvdbas7gtUhVCnvkIN2DE3GZsU-Ls8MDEzScZOcgLSOT9xtwXIdPo0SplttviDukI8Dbb2_K1XUipYtKEnAqPqiJNplBn7-9oPGJMLbZzIcb1j9oJHjcg0_Rml06G6GCEMYfZuE9kkW3I_V4PYhsCtFfYz8z2WOajYfg-CP2RVlalHgbZHwiS8TITLYlESjp8Fkx96oxNJOtBRbsL3ioUW1e28NLIjJMnERvjq4r6A", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106748826063079359426\">Seoul Garden HotPot Suria Sabah</a>"] },
            { photoReference: "AWCwydjRlxoqybnl27Y9pxLaCeM-mMZctzZJRrJjGHEKqHCgaFU2ezutlpNX6cIDhUgSQ8UpLj4bd6otMPnO-X1No1S3_9fWgZ1gwLaUwHXxnFBwcLKPnxwQtLI6K_wBCvA1mXxJ-VSNg0B9QseWHPlQauPW1siuE29zr9FzJiFb3L3GuUbG1ra8q_gG_cc4iFDjeNBXi_0h_FfGJ1EISwUFMq3DH4iAgcq_WETeg9xxQcG6s1a6tV--iL67mM04HStcZL61K2gHz1wtvPfH-MPXHuUqE9ah_N8njOC08ylBt59WB4LTEoe8daL0FnZIXxLfixSe4NwPRT3sAO0uY7wS_MTM7-g32EtyleN5hlKuGcFg2TDG5eT24H5227CiLMeJbu1kS8bY9XUQ8EKoasi3GsfhMnN3EuGEqR2_O-Edqm2mjD-gD7Rjmwn4_xzzjQ", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106748826063079359426\">Seoul Garden HotPot Suria Sabah</a>"] }
        ],
        summary: "압도적인 리뷰 수와 높은 평점을 자랑하는 검증된 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["4.8점의 높은 평점", "4374개의 방대한 리뷰"],
        tips: ["맛있는 음식과 훌륭한 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.seoulgarden.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15344309478292300991", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%EC%9A%B8%EA%B0%80%EB%93%A0+%ED%95%AB%ED%8C%9F+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "천 코리아 포차": {
        photos: [],
        placeId: "ChIJOa7rv2dpOzIRinA6Ttv2h6A",
        placePhotos: [
            { photoReference: "AWCwydj4MlqMXs0TpufqaUjnJdg1Lenk_pMMmHV_GDQdQ35QOK77Wv3GuO4kTIoc1yVhnsj-66k4O51hbkw11Of0ZZ2BdKisQmcBDs213_rIL6s8z6M5ByOKR5Nhxo5nRRSCEfoqt9OiIeGKU0PBaSpJtk15H8vvhWgp4AYEwJQ8tdGNwZjtaOBBSoRcDW_0BHyiJNUiCD3AkZiF8gFk75GqJecvRs4eQfjqZC4Rkb-QiEADwtMl2iuE31Tv9B_Q6yezdGPN1mbnPoEsrrCt-dhA3ZRIzUWsPWeQ-cqTdExN0I6FEyznBgA3w4HzhjyLe0EPXUFJLsCrTd9NnSZPhFkaFwg_CgWg4qwgH5uLs4XRNWAs1Bl0bn62GmV1n6BTbVl_mcnOWiRQ43NIVhbYAszC0BjA6ScthoisOA9bJicNjR4XlYEm", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104004893293285521342\">풀바람따라</a>"] },
            { photoReference: "AWCwydj46RmaaQbUnNt6ZZFYyl3L0y8khKWKQ68xHzuLgrLVq2MRHgsCm6pLPoPsQJfzCEW-i2xD23pZMGVPqN2kTEyzokputFqA2b-cDDgwGQRTsYuQhijYHYyLkVzO2E5baWdPLWG1QJkNuwufRr09RnyA568aXlB_C9ZJvfqZSQndCrVCREdpj3a_QL4nRfU_GFS9P99IcDvj1RD0mWJNhq1jqYRyvgcOsAp58KpDsJXDhMMeQyDNiF1cWyfOH6RYjL0WxzxAPNoVqdC6gNNENy8R39ysy3Awssxwzj1o671yQTHUn94VggGmjjfeH3ur-BrNpDDxQNt22epanuTBq0uobnGMv8WrKafWSMLXkcP3oWfjip1_uCrgjwrQrnOo0_t6c61I0vC2UtAn-UAIdshBKvOakPGrBsvSVFWct1ejXAvqioR_ahDkTr7TyhkP", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106610486021972329184\">Solar Hong</a>"] },
            { photoReference: "AWCwydjBru23-ETQ9cbHorWCz4xnltV4qePwhYzHf0eB3MuWPitjzSjrXoSiqwEAXMqdOGaehcgDlcX3SBn4axJGf9sUhuzaAnT_tJ3Q5pu3iKEho5ckoOd_jjsjJ5zkrlXpDS_veQwD1VS1nhcP6sNslJO0Y92Fel-8KNkfqJxm8n-YCHl0BvjZhUFzFevvsTlQyQZWYL2P_qulPMcMfDIjJYnEBVmFiSTeJObtGQS9GhcmZraF6T3_53kIx3SgXReY9owRxhrplI6FmJA-H0wdRXkPx4Z-eONzBkLFkfKOjAsN0uQ1avSx6WYB_hZJQ8bci2PLsalTZl2MjXOnom7XW4QEkhM51e7sB54pZ4e4FvQaBF6Z3BSjqKlD_q01lukMwNfMB4aQaX56rlbTLqYhSTVz00RATn21g9bhDq8mlzgbU_v56ShM3Op1CtKKLtHT", width: 2580, height: 2648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117328393867361674223\">류완석</a>"] },
            { photoReference: "AWCwydhHpBKPfBQLYdwgAVRAL4oIGgId1VHYGgTEt9bPmF2snc0REBQ1CXoXcyeLbOlHVsFHFjjLf6bNPywirnNLb8IAvm-SIFvw-xIs0HPeD14rMPm6A7D_CSNeVzjT5Lb1zPTQ17wnx3uthcKjxW73pYavTcBySS0FMov0mmFUl3IOPH8nYDFAK6gcVoDDrNPZiWN6-Akun2u_8VmLyFfQu2qZV3xeoAjYMp4GZRXhmPyJAmXwQF3xOpXVQeOCjeWIarSugEgMcfAkV3DechSHR8xgEC7VeVObg8WE_G_VM3ttz-fg0xpfCoOUEOmQTxkyi4erlYV-SH8RRxXPAGR4Qjor-74XdyVnmQB1UGC_dV7EN8865D_bS7TLAjwgYqK_GZ0fSGCMrQJDU4vXNbosR20tYTwrIblZn60DmlunJu_JV05ftrcGfohhPLV0Jw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104547711652557425718\">One Good</a>"] },
            { photoReference: "AWCwydh7K3VntS_Melbo0Vb72IcP4Izw_JHnlj5GdhBfFQ1NZy-xfEiFc7vv-mi3j5gPycHGPga8Teg3plEqlazZ-dehTSK3kGgDjRdvgZ1bkoYotm_ErWshcSWLQAlOU4oLNzSGaCvGH1HkgQvBu-BQBHCtMrZarPAgU-o3fMzGKgkatlRH-tzA_FD_4wcJLq6d8IqCEswzlR3ZcthOWNDXtSI4AUZmCSx-Do2L3EJ_vSTlLrqa5t940_RxDg5qrd1kiDnX1hwOXVMKkhX4BGaGyVJP3yods-SOUwfIozHj5LKcNj8pNcV9X8tgzMOMj30A00Q5IqClhM8GbUwgiU2dW1GQwphRW_oYMWyJYc8WGO0fTimLwBI0-PqljU3BMcZdLx0skaz7Qrkx1ZpQBWuzLmCxHK7yYuXI4S-TTA43mqeHW8EmNUNLn0vfvRmqMfD3", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106610486021972329184\">Solar Hong</a>"] }
        ],
        summary: "4.9점의 높은 평점을 자랑하며 여행객들에게 극찬을 받는 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["여행 중 가장 맛있는 식사", "높은 사용자 평점"],
        tips: ["공항 방문 전 들르기 좋습니다", "일요일은 휴무입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00 ~ 오전 2:00; 화요일: 오후 6:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11567485589695131786", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%9C+%EC%BD%94%EB%A6%AC%EC%95%84+%ED%8F%AC%EC%B0%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미 오마카세": {
        photos: [],
        placeId: "ChIJQSL8lahrOzIR06yVF3ZNUlA",
        placePhotos: [
            { photoReference: "AWCwydiuZC3DRvFdESISma3ydLWlHykqGcR_d9FFpyAmbAHqTOG9BDtocwYHJ62AWdkntwgvrW0JzQUYKwGsYzfodD45Xupmt_aRvCLsEgkoUy45I8b7EmIr0R_tT65gsUNtFjeAxrpG04z1E2UByBjtyZ-9gXuvnNK3gNFQ8J2ukU-GRhdp1xRyvTNwj9bPqp0GRoczueKlzrzqFmK2JTtEZzmWjSZ2x2VjURlEK3UgcUwq9dA7apU9C7WjHUyd0quKIAw9yx3CRLNXVr4I-pCNxt51v_kIZNAMcHtvtmizjdgaxYsgCLYzA9iVIHiZTxeZwJEs_EfnTKyYEKUZjIDcubTatt8ypLvdrHjroZTn5rIg_Z7grfmUzjeRnBdSgDbwbYyozylHE3khkULx0-Fd6n2-6PfoYSdnl2isNjJe5lhSL9H1SrSBozp_KEKVSO01", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109786531757400252925\">Lester Ng</a>"] },
            { photoReference: "AWCwydizBz7RYEz7nB-zT4CIwxoZKHzY9IbIjFFrEtuWQazVGjq9BZAoeNMfaUH8bKYIS1LcXBHW5RlksjY1U9Yu8ODmr_tJgRU1GeEi76Joz4yXrz0ALq-n_itgUwwTCPFLEEq-clFamjV-tR2fYYZ_uIX0Wf1Xrqj12ekSJGC40jHK9W7q6BEkNH0kgaykejBoJUw_CJUSzpKsS5URb4ggpi-8uweY6KdR-nbq5WrIR7e3bPb2FDJueuFp4Ds_-GlQyCZjtV3tJpefQqSgdC5TS6Ef6nVBSKH4hK5_B5jlmzpAci6CMMXuCKrjT1thICC8JpXDNjtRWZlazHf7ywoaLMRE26Dc3wDbcqj_gJr2sGa8OneKFeDe69CZ2pIwVybIV7e7kFfyCOYlZVxnQpKkaVFrVXFKmfT1lSOG-lqvWJwhHwqB", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110156858896508792782\">NUR AFIQAH MOHD DIN</a>"] },
            { photoReference: "AWCwydi8OD2Xh-CzpMVy7E4io1TH8W7sV3z2FSuywCkTNxlrXvCrpwKr9bSbeyLWYqvHcZQoAYtRwSB49OyvBmJA04JK4QYQO0feXYrwnOfUWEki094Q6qdGx_rhZtk6wPs7NWqG8LYUQkgM8drn4uTxJumMYmi40iRNb8Z7DEUKlcjdHLQXBrToU_30pEyepi5ElEmvUkeHsEzuu8pvjmcawHPikkpPVAevS0t40wpjqCcer1NGUnUAgtiN_1rXOnIY3_BNh2f6OaR5tlnpcavHImd8oUIMQugsVM-mfqLRtjMd-YQwfD4mlFP7MDWB_9wMg2buBSlf5li8_qVwzeYjsxrnQx2ySPHcH1aX2ewl4ux0Rj4rSRmiR-3BNP3mj98aMfGmaaJSUxNgL8TtcLs5fDy8CNq45vnqontbde4MxkE7FBVo11lUMsk4E86xEQ", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104270752456431304343\">XIAN Q</a>"] },
            { photoReference: "AWCwydiFzGqVgIeJF1noyohIjTBJdStjubPx1QBu_DWHjzdNEK0fgTLh5K17SNxRVXFmofjmrJF8KYODyWgzHEwzGZM9MJdvBk6XYipB2RqCVGeLdwGjlWgEHDjhVZ2BoTYS3PR7_YNR_0DMu2fIPF2H9vJ4KtmYkhTSfSMsrmcTuSBBTYbdzDYEYo3xnlaW2hcU82MUqGhygdszzkh9SeKaM1aNSV5KOSMjyBs0PNpGZejBxKCXw0M-rnIKpAl_P2iVJr2hSKxOM7WXkiQcIt80-CvycX7gOpbJ9S174PI4LEAkOVKZQTgE4f4vZEAqjlOW-D-4QO7O3d6J8uiUpm0DCRiy4U_5ozNoJpXEiTv9gp6LMnXCvXPtzTk1-f7Lq8rJ0DPBnT5iDg-9HLlqxmG5Hga0_ETlih8qTDG77WeoGoiooPLCdJ1ekuT0gZF6kDil", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116296286059104170113\">Tina</a>"] },
            { photoReference: "AWCwydiugXa8CG-WdDH7_iA80ddUFoOS_uk1Kbmgx4IytRshQ70jxfUg2Fju4sgyuN-pK07nt5b5llTZFx1idh1C3qzYDVKB_ClE8GOClcdk_E18Zip6hM0BrUJbiej_-SqwacQ9VJHXtQc33A7wfjdKnIYBQEtGYKXXl1T00FTdT9BJVRoaIxl99XqgV06ReG6HQIhnTJcLjcQK9lbuaBqDadIfRR4q5cfG3iLxv7lsFsqF54B6BkGaOrDdsrwfXDTp2PwMZ5Sp_2h4vwp3CuS02japMR9avfOgG6AGTHps8-KgDppDIfSYxiIHXjdDxWl-B12Tyc3nAFUJxpbSSJhA-sRZCfftmAzDxc_9uQBUn4goDH1JNYDOS7XVh6qyDtpI9I7QfYrOFOtxWcMVPRLkbDnI5yvxIW44YINBfawEmozGJghrcKOoGjHoPfSrSNK7", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104270752456431304343\">XIAN Q</a>"] }
        ],
        summary: "검색 랭킹이 높은 고평점 일식 레스토랑입니다.",
        updatedAt: "2026-08-14",
        highlights: ["4.9점의 높은 평점", "상위권 검색 랭킹"],
        tips: ["월요일은 휴무이니 방문 시 주의하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오후 12:00~3:00, 오후 6:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100087936637254&mibextid=aejMdD", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5787773640721673427", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8+%EC%98%A4%EB%A7%88%EC%B9%B4%EC%84%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나루미 이자카야": {
        photos: [],
        placeId: "ChIJS3fvFY9pOzIRyyoAIOwWNiI",
        placePhotos: [
            { photoReference: "AWCwydinIyf5XxJIV15GZnX3t4ipGldddr9B_GB9-CPmyWqvVKbQVRPP6o_OODlV332uKARPmwbF5Y-M_Nt8l3jS4hjYoYsObEyDzwIa3QVE7Zl_wqFVi0mXEzBMCswRrlb0M31v2-o5bo_JfDl6vcRkR_Q7lS2DdtCrzfNAyb1i_DosVoQ_xyKLHZqhqS50EtwbSIcn9ZRQgK3z9UdEztIyU1g_r5DC--hypxRT-n7UP3tt9yHOivEuJFPh5yZu551MfEr3GPNOK6jPYXIlaTkA_wt8hi7OxKhutAHKa4BEvHziXWz9xD7pp1qwGJVwbyIAxIf8aMcK8eRwWVnduVRESOXodxpnJUhJqetN7xQjkSMbUyhuRqDjvSMVK9ERUKF7R096Fq5FH69-TZ_qthFMXyN7MAU__83YywrJS1FeFPOw0iG3XOpVbEMSrDxMJmbg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101928425921477334740\">Tattoo Lee</a>"] },
            { photoReference: "AWCwydj9ZSOL0jcsnZwevup6BhE0i6aCc3c6jnemMcD5MJYf_OqS4RJYllMJOUlf6-8r73VcMGjIDJtkSakiI0KPtZ3YdlERMWkDn_G9ymQPrAIIqZtag8QVwKH-o3aR0age6HxhkJOkSVH5A0E3wr6Vu9ZcD6vdREitXSP6tnv-8zYRufqgCVvEbCypoIBC-cTjEDQhHat_qPUP-71N-ysjR17G9SKrZb2LI7LuVBIEMLi1hx-3qnLBKedcG3VJ8HolY5OL6Y3ol6nsgDdaUhQD2phNAXlwGM5zIwNpfsgDipacewpp1xWZ-65OsDxwOgmTKoTImCXrKGKbxDsCanK7sjF2c42_lOz0OLjUXjBcDtMM9fnOeEMiMqETp1AyF8EXJHSpK5z9QIuMfwoalKAFAZBDD2TH50mdEkoPX8wBU6WppgiRBlfW8pDp_qV9jQro", width: 736, height: 920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104995041496140278335\">Narumi Izakaya</a>"] },
            { photoReference: "AWCwydj2BstUVs0-bp5zVM8gIQZdfp-2uFXRgkpD8knHYrwhTRkkAwG_DjQQdQ-17FJt7bZt507CAdD9qWbCwvdYd7yiE1drF7zDzVqILSL1BpIU_VpRtcxW_xtTxBusIdCseX-j3O5DDCGame2UT_-5GJ_fbfKcw0W-zieqNZQDoSq6fA8hh8SQMzWOiU8ceYARmDbQ-kDleG3-FIf0srHqkrFECzmLBpDnTmp8t4gKAgr3IQTPfg3yTjD616WvTxHLK152nLISpEhDdoCE2cGXTS8a7p8tf9jg0CMLiF5TZTsEUFNJPUs1xSyThK0DRgb8zdbbCemcZAyEjUKyiFrH7qPuXh9NEfsFEb3IXdhPyfKaZK2Q6wg7CSw_vDIKdcpHullpZ-CA9MGWvHM_OhlNM9FSFpdBzRVTU16bpkwjaGvq0YL5kcogCX5B6PaHCQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107184610325437831977\">小郭爱美食</a>"] },
            { photoReference: "AWCwydiYQZNcFFrC5KL0IKzGgwLC3KUAWy0NJBUx69mBYKeJxvD_PGV7VZK7QjEIyUch9aMn-R6oLZnu0tOvxBANx4EW8_C_pOqxXH7iqyDeGFkYCGbBpG0m6XVdpMrYaFvic1SFeY3FGJt6ZC5w2jwBdpVP_jkYqrcBeEjQpz7q9V_7abXRm3dXrnVvCblzRzLG-SPxsh4mngv3CIKmvFeHsHSaMWl_PVwZ0XjNjOKO1nwT240SdTxEmpIBTW8NgCvhQUhc-2nB-1VvkgOYJPHqhER6KKoQRrH0ZSMz-zxZziJpo-XbHX-FZGBNHkdwuV3Y-ZgTN-zGvK1X-3D4mk9y7B-wqw39NVFjmdHVLKUNxOwKW3iCmX3SSTa-7BOATl4O9I2vVa4-fhYwlwEthFrPtqhNxtRcJppdi6Np0ZO2r3V71yiCDfOsqm1EXeL434QU", width: 816, height: 1145, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104995041496140278335\">Narumi Izakaya</a>"] },
            { photoReference: "AWCwydjkYk_tNJFdLVYZij1zzoKW8VGrp4m6xNIJyY_AEK8Kk7dC5BvkD-V1rYpM4wgxDZps5Y3en50Emx4Otaly9B_JtUbU18MmsnkYysaYL9saHB4Pc6dlSVPYT45sgE3tJMO7oMPXByAJSRngZO7paEECSeL0wuwSY73-04VrLvcnXUgG0spJ1eELx5CdTkUq4UFhw5eA9NhxGVljzrCaJHJBCG5pL1Dl0gtZpNemt_Nswl4iJJ8y0U66N40O44RAM8rTHVZTI2SfM5f5-KcYW-eZwxJT-MVM-B7aBZDUVopIr0FsYv1r71nZl-KIKzWHzgqH4LMULC9K0W2g9hgFUnzgC_yTxZHGmuw91gmqh_ovNcWaklf5F1I2arNmwUkZ-n-Blq7h8ekSBJvz2-T7LOvKb7uICFR6eABLAt9QQux1UVTtSgsdT9TFHZNkWheE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106736044299148053111\">nelly ng</a>"] }
        ],
        summary: "합리적인 가격에 푸짐한 양을 즐길 수 있는 일본식 식당입니다.",
        updatedAt: "2026-08-14",
        highlights: ["가성비 좋은 점심 세트", "푸짐한 양의 연어 및 장어 덮밥"],
        tips: ["점심 세트 메뉴를 이용하면 된장국까지 포함되어 더욱 경제적입니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 6:00~11:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2465183049436900043", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EB%A3%A8%EB%AF%B8+%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "엔소 데판야끼 (이마고)": {
        photos: [],
        placeId: "ChIJecUY3LlpOzIReIHntVEAWg8",
        placePhotos: [
            { photoReference: "AWCwydhY0yZcC1HT8bHL6QpqLgW98rZTiOdW3M4aJ4lqXfWJQNgIHcO0O6pGWqSxpMYICFmJ_emv7QF7nUNNgcdQESNJWQw-wS8QIKEGqYSFGgWyLG2DA3UpkWBP0zNWTtDOTsRtHBb_diYyEbzcVIJ8TCbZtk0Eyj3PZPh2RuvctgkDya5dYOcMQN7yu5m1YmtHxXQQu7ugGae6GtnFHtdxfOk7UI94yivem8yYy_VLgX_m0mtQeWjOB06WmrEC-3_lexe6y1Uap4qsZ9btcYzBw8qACxxlzDDnQtMEwYZ83h5xq2U1O6R14jnxzzc7Fwmjixx4WYud_0NEUCtgr6PNJu1KydRqWW5BkN72u260L7M0EIa6jnbTT2Of2f08HWO-ldPIEbLTmmue5j4cpWFiN05VI_MZTAzKF_KNX7A3RS_gKdxf-Al1u5f5U_CN1rll", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113296950238614840306\">Enso Teppanyaki (Japanese Restaurant at Imago)</a>"] },
            { photoReference: "AWCwydiWg05wIFu8gNMecoxuV9nfR6l5MR-KWKBcT0q-NPeD9kzDGXzs1KPD7IeVnq9asCXcSD1ACOr441XC5fm4g8Jd_eTGaqj6EGUxxYHRC7pi6JohkG7zsaE1GbMbtJDSRJW7_kulHdYh9wRmro_l5ov67-6KR4yhbbE9a9YcDV2cSMiQ_jxFsgry3DyDkZJ6zl5llTqtEGNhukHoAJTJwu1vO2MEOP_YYpHzTfcsn9QKBMZEftKDDU-UDQj13u2OGHM2daVYOGLWdxN6HMcHZy4j5voBKs41i2br6JjDukP4iIc2xmkUAxIxsWm_0hXqx_e_eLY9Qehz-TDXOKwIzx6JfcUZeFDvEyFSYRLpFgBwiRdIKoX-ywSnJkkTRB_T7d3B1OLoJaPvwnqQ8Aahi8jmNcTOfSYiPFEPWOby6Nq24cddxNRcxX7U7faELnJO", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117887414463036246632\">Mex Lee98</a>"] },
            { photoReference: "AWCwydhqD2BD6MponXQxKv4gLgp94bm01d9dj09J0K29uFxdoq7Hs4Kgbr6BlJGa0tF_1IzYZjEAzwibIIy1C-8HSw9IVMn4VjzPK8QJY1jGrDMqPKa_2aEBpOkyJNkKgDg9rFAlr-2YW8uib7JKZCjFLm6k69d3fzciB7nyT1Q39EFGAc03DjoyM_EcWqMFc0l5aDE-5jIZIAnwZvfpg4gnWcPEEPgII6Kwiuh7Dp-A-HWd3P5PFBAqVCtDnj2IdwLcs5MNGQokq99pcyQlcI432VhPo2EQUTflehs5tIkhR5g9jhalCa2AyYbpfji1SrESvwugok0uDBF_9_SUK_5dNd2wNH7w3yzzM07Yv7S6txP_tnj0GRZ9khpjOPoHplmf-ITWJaGOGUdhmF54IWlhrZyESW2-2EpKBy5DVjBOyGSawAgeO_t4IUxNX45Tfirt", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113296950238614840306\">Enso Teppanyaki (Japanese Restaurant at Imago)</a>"] },
            { photoReference: "AWCwydhAXNP3-_0_6-XS_E857kM_ZMff28yS7NyN7GrGQrdRMqNUR0ZaxwKAzvNMZ69Jyqx6V7dzSmRRpWKjc9kfZF71Ud_a8pZqT6spKvZrmh_KVOeLUbaGVB6NfbaAecyBR3n5JlAJw6qO8j1fXsLvzKfaedu-JOZp08kSo9pwk_qo5zDDeYpWpMBkbVgRCXxzsBNJhWjCEGLg0X-a1VhXxfBy_L_sefoq6KSZo-x-W4oT7L0Iw5qZEUvTGrVkVibtKokpT3dczvFdZcGPPrBl3ndBRhKS3jUeuy0WtiEkH3cinkmiGQr76duKC8nCy2vuqKYSP-20j6_OLk6s5K0KVKlvJyUZJyWfrFHMqyah0xhdIODXQZum_6X4Neyv4ywGXoZ4_MSPtEVGYGnGgRSXtyS3zwXuoEMEt7_2RFly_CN-vz2ZM3ArWk4Pny9NfvZu", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106078021682137835576\">Mas Light</a>"] },
            { photoReference: "AWCwydhEV9J_h1b4h1SiaHfEPrMg0r3NIcrh11g4zv0ZJNv_HRUsbllCONgISeGXLOTXUYsp2_g0ttvDUXCDi7DbqQb4syan8JWhmslRdKNeW4z1dxOOWazhOWO6iI5NA8dgg5zuef3rn9AfptW4FCssY2mA9CG-pJPiQT2mJXsui6MvH67HY68pa316ryZ_pzlJh1VnsIW9LS9IbRzaECYo7GqVEq9peyRvR-ahZrY5eKKiOKevYZCrTHn0ZMNa2al0lGJUWRQuLoOkRLAMPz4yx0TjjAiCiXdfKvCrKFrZLgdgTh2YcDrxDOqD1Tv9VSR9e5yEyLk3v4NhtwAKBUS8g5Ec-09ybh14-4XExBcHLSM3g6uFx7sjJoiwNMrVVjFn9X9VwnCd4Gr3HHNaU67MPluxGIHHkLCRE08SuXAV8mFSjfu4iFoZnTmNA0FLo_13", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108887084620130971641\">JIYOON PARK</a>"] }
        ],
        summary: "최고급 스시와 친절한 서비스, 넉넉한 양을 제공하는 쿠알라룸푸르의 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선하고 완벽한 조리의 스시", "일반적인 스시집보다 푸짐한 양", "불 퍼포먼스 제공"],
        tips: ["비프 런치 세트는 튀김부터 후식 과일까지 알차게 구성되어 있습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "최고급 스시", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:30; 화요일: 오전 10:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://linktr.ee/enso.imago", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1106197009417077112", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%94%EC%86%8C+%EB%8D%B0%ED%8C%90%EC%95%BC%EB%81%BC+%28%EC%9D%B4%EB%A7%88%EA%B3%A0%29+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시 잔마이 수리아 사바 KK": {
        photos: [],
        placeId: "ChIJ2c68M4ZpOzIRFXQDednSXw0",
        placePhotos: [
            { photoReference: "AWCwydhkVAG5fe-si02_foTA-usbJDozgoSbShBtH3QKPzCXbikng36VNUCQ5mWaMf5EANvJ4kFr48F1ceUM9HFRY1SDTI6ppd7cqcA_qkHcPkd0ooagOB9L8rYQJ9FhlCEqJ3TI-kxL9Z-k28pH7DK_ClJnPm9c5uV9s72CpuP6AbLf1f0rmniOIZOFTmhGKxvBO0Lvxk9znNP57aRpkUoAAQeYYwAZEls5asHzF_D65cdGHlRkGPkfTH689Pmh7gcAQqAprFOUIan1RlPFsy81iEYJ4C39mvt-Yx_33usz-0DFFAqFtf6egXq1bFI6wEoS6WUfQea2aMQVTdV-4GuDJZymZFrTd3KDigkaskTudBL4UqbvWMhVRXkRXSSQS97nDpuem6Xn5GNpSZ-u32-7vcchdcmby2lOxt9yVkCs_e7tK3hi", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101672364565015082177\">Satouななみ</a>"] },
            { photoReference: "AWCwydiCryn7ysc6vUH6zIGEiWMyu7JeiMDRdnbjESLW3dNDVcYhBCV66RxxNc2nv8kUn2qINOEkIBzWieMKMFhx5BmoqIqgqoLmGsBns4UjjLuk4UV7DFlRBIdOAaq5Ej_NZH4T5Pur52xRWgUBN4bIXR6V2I8i2Urnru8NTqwureKhXIB16EQTzGOzQJANUpCkrB66Efp3LEIx4WzNMsNMu9JTTJxJ7GXV6qQmkvAx02O64w8Bg_Ug3iT_l3bTJ472ib9YjRmUD1vc-FkLVUFYDVVpl2TSP9shgtl5jUVK-W5tpygm4_0fCZYyGIuT9qeypmaw-XcVD_9ffQu09833nj_tyj3NvnHJPl2kL_6wMOPvbbLOIEme0o4EHxsJ7lEeMOxJtoC0k5aGnsIfpLc_xSZvg1rR2gFjcVYVda7sQq2jNYSb", width: 4704, height: 3528, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107674392005064861727\">Sushi Zanmai Suria Sabah KK</a>"] },
            { photoReference: "AWCwydifE6NyMMTv5eSnGoYjUGrNFhCvkcYDmUFX11BzHEYyxSdThe4cjx6wxWFt3cAlMTfy5qNtBGfkIRUhVyC2AQeoorzaGJAGVOSxIT867moSV_5DZxdW3hbCuNwUlN5gkzM0xcFVWyLYcqoZycFQmi_MCeq4WJa2g0GuUnUsdgnDHXfii4FxhzdqLrGVPaZsuuRxUftWETRTP5u8VZekm_x1rBnCIEXOcOao9FSLnQACtA7fI1qQ6sU7p2tXL_TmymoVpa5dXL6Bg03vJ96iT4H11NBUyZrr31CdhloTYuz_rDA9_0FWnzJMx1BrGOja7lF6A4Iv8TrEbnS6OsmwhkOeuH_ef-VETRbvJ0ujuoxFaXypVhi3Eegs-vj-xmYTjJ46YM0YNj4GGZB1OzSNQo0kls5h3R2vSilnO0CLtlCnkWiI-tdXoV3KwMYlSA", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104887890411796827642\">Eddie Ahmad</a>"] },
            { photoReference: "AWCwydhL0V1hDJjO2v0GL1zCPrknZabeevwMXAYoK1dPXr5CKhRRUGMNIXsQLT-Pde24NKcFitC8mTZqpmxr1apBLu5aEWph0E9VLCBBlC8NSw-ucCl7oD3BnHK1J_o5jkkLJ3WBWNgfuQkL8RqYJWJXAwFMa8coH-yCLIXLQ7VzMPuZHF8CiGYrpa21vhTHvtc65fMuagI6DzYwRG98bgWtEDwFdv4k_zhAccQOGJq4x3IIRZIMU3ZOmpeIKUjR7Xr_tBb1_ADvsl0vCIpZEz-OdDcFKDAB0m3UieVNGIXpc4_PzFCcDdiWRX-WIrhY0shQubD6ZVd-5O8ZRytsGSfQKF0ixWkhFkunq3-mGBOgM5o6a-hAls0CkUeCM2pupjK3U6I0XSTWzsuRHkAmF1HIDWkiDz-jvW15E9b5U4AyOoAAcqwnkyP1m1neYbduYw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107508758466560597233\">Fiona Chang</a>"] },
            { photoReference: "AWCwydiFo6W3zja8k8w3FONidWnSBU-v_bxl5Kagrod4pdNWtcUnmybi-s6N4xSe58lji3JR2gpiD2TfjfJhi1FZ44QeXwjv4V-q_pajy9f9_xk0sMp5swnXf55MlV2Gwt-QStH-SySV_s7e0q9AW_qQbWbtSCkFy-mBik_QhwzHBLFPBUh9L7eDovNk8lL0O3twk8mi4MGR1Bh518S0qktaVdP-nzwbkXF_dAVHVI8p0qKBdp0ED4N61R_1baELhHU1ZdEn62z_l4RB0NrTzIzyKXxtIsRjawbm28zPhTxPaamwQzo1n038nBt08j18s-V1O9qks5PNlaGcVOlPZmVM5czAHmI_1hrA9oQVYuUre51R4KmJ2GKXZyN4SL3qjOEkSN0zhHm5hbYu8t5-RgLuu8tOZ-UpCh8KDT1BUpZ7FnrJ-ZF2vf1UtWW9I-6C8g", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107453713429701345737\">kyra</a>"] }
        ],
        summary: "맛과 서비스가 뛰어난 인기 초밥집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 평점과 많은 리뷰", "친절한 서비스"],
        tips: ["대기 시간이 발생할 수 있으니 여유 있게 방문하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "초밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://supersushi.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=963720676760581141", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C+%EC%9E%94%EB%A7%88%EC%9D%B4+%EC%88%98%EB%A6%AC%EC%95%84+%EC%82%AC%EB%B0%94+KK+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사카구라 재팬": {
        photos: [],
        placeId: "ChIJhfWLfJRpOzIRT8DS-B102T4",
        placePhotos: [
            { photoReference: "AWCwydh1q3NYJDiWhBXiFQ_RvLQE2bRQm1-2Cpx1DZpW0Nm7YHxidGC8zbG0N4OBSOoxhdBJEKVqCKFncQYqFPc4gAUw9Rxqwl804wpzp7MbNRq-DbW5GRLtBB7UCSYeFvLo6R4QbwcLAbbjFUWdaMOKmWO-6i2ddsRQJh-LM04leWAdxPHuaGpwVygvncni8CJGZo0keygfbatyCYdHTCSPaF27kL_IJmMTo2hGmPwt4XueTD4LsMy2ra8NrY0Fl2PfnVrWqXfWvmJ4g9ni1VmludC60nTtVreMGeHXHDEpSP4t_Z95DRWvXXOriyxTCDJC2bvQIcTtgBp-0BLjfw11XwbcRM0IeobWaV2kh4b2RYXpJv-r36X7bZPckMxDtTkbRvZFmfpsu3FKmpoHPxLcvwii2_idelCF3poGuzGSR-ymQQbS", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107251085569468110065\">C. Lam</a>"] },
            { photoReference: "AWCwydilO_O6RNlnzgst2TZApdnxA-RwPleKb2Y2akjooi8s5L_eJq86fiHIH5y1qC0tHOJSm01jVRXdy9ym3jOsPVUduNQyuHgTk66MsXh8q3P7BTe6cRhUPxzn2GPkENVI2S8zBB7mFEMiO6HmCL5fHj2v6HxJKNzXPr8EWGnpFITUVZnNXwHrVXcFM3f-UST51hZ03Zhu-GtyKnCixrT--9ntmq9GQ7XMb-T710wh8Wo3jLQaK54CTdwpWzEYoTkRcnkWEvJBMC_NFQL7006Na-Y7ZJVMeOMIgLsVeIUwI91hQ4k8VECRW3CkVTSCoC_P2l2MCnxqIuw5-_IOkmT9okSzqE3p1u4S3KHw7_S4k8j8KZbP9T8D6a0jD96rMN71chhFb0YIl1JN-mkeLkF3cP12aXgFyknxNU8mYktCxEgNxznuIC9jULCpRgg9pNF8", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103287186825108455309\">john soriano</a>"] },
            { photoReference: "AWCwydieMnBgq5KjoijI0iitfhZpoJUbPDtgLwEecxSroxjKf-MPlBQHZHu1CrqQZg28EQBUTk93-gPkMlR7Ag_l8q9NbDqPNkXGmzMd0VMDEv941C5hMRZ6aqc3PPtgXzEHQk1Qlx4sOyyQE635AeY8BLl5YRhR7TMpm2_g-77wxhaIS361QSvXtzrcjDdIDt02PrkBmh2D5xMFsokhrfmrHHNFea7081NyUA_629bGy3j7_JNwlEhtuyYeM8XDAKu8KlAy2j2_-2BX9H6ghLeYwQ350gN-bcPC-syUrLpmwaK1NIrnviNRFdGEBDe7wC6SEnZpN4WYi2SCaWLTZ9nUfqz4pTV6e4CKAqqZsnEy4PuNFE3TlCgGUk8G5-gwH3bE-a5mFmCsHcUqeEh7UnL9roCA23OtaCwVeyGQeGU6UIaX3v_wzaHTOrzqs5dGWg", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108945349339111009118\">Yin Yin</a>"] },
            { photoReference: "AWCwydipgUbz2yP6tEjlqVelVNavaqTJzctTlSmSeENQynEb7jmCi71GZGrICTyRax1IbV9qvaCa9JE7LqDZ3_7XB6phssPfwV2QrvenF_Wh0yBQuAga4mgdn_I0OpAlLlF6Nyvx0-U7ES9gtGTwvcgecVZ-jY1jyaP5WuSD1jD28NYT4oIfX7StnV4UdhF3SG3MfPcMuVUVq4ufNdgLQx4XfWJqdzBaVsO2Aq49C7Wsf_uppPl-QGUccU0Yxh4NfhE3O0l7hC-Bu5iKMe4hKRl4EtOSs32GIUptPBS0qqqZpAFAYUthQTSs5xW5-ke1o63QIAklU2N9_J4txe2_zMDvIALmUFNVRMhGxe1gKDBZlLZb9cpyJSwfwAcYQboxtM43QTAJxnF2JVoHa9sZLc3eQ4mpH499XrKEdsEQuI-FJG0yKNHvFcfA4WlIqr3d7mkm", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115474408549787660680\">Xiang Yan Pok</a>"] },
            { photoReference: "AWCwydgFcRag8M1fSPtVhCBEObiK0vJXhw2s6g9mgHgOr28WbArYaoaHXg7n5I_-iArVWVAwEj4PiBf3MFxR0k9YUkl3_77UOLDhGgDw6ll9MIceZQ1igScPAkPpJqaGzm_q2qRMzkN_8lN21VZ1_J4-tOdzsmrQH60WOWg96u3_P0L3HjpUa2pRsWjnCmAYfo5FBKgp1Ohs7uQdh4ZzftpXG4naqIjss90N3KY4KxY501k_K9JKNWyeGiJkNpi-4uZPb_Io6TyTgeHRpL9DcS4W3V7dZfTvFTgnVhQwoEgFZQOYIoBZG89WOQcrhw1pelWPgCCVtZXwpLeJNMlQ_it454IkhQHfffkVZfzf2eO1dQUFiRJpnIMAXUM2-5T1lp5oxLH6jo_vjPIrnLJ7-hEvjXlHTlgNAJeF2NItRhGx3EOqaV2xa8J54jX1g790jSWC", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106078021682137835576\">Mas Light</a>"] }
        ],
        summary: "뛰어난 음식의 질을 자랑하는 일본식 레스토랑",
        updatedAt: "2026-08-14",
        highlights: ["훌륭한 음식의 질", "모든 요리의 높은 완성도"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~9:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4528778572375179343", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%B9%B4%EA%B5%AC%EB%9D%BC+%EC%9E%AC%ED%8C%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "KK 가든 씨푸드 레스토랑": {
        photos: [],
        placeId: "ChIJge_-9V9pOzIRl882DHxfCFc",
        placePhotos: [
            { photoReference: "AWCwydj86B7YJ0rchSATi5Jr3ctxV5lVByhHOWQxkAX_YIl4ZlXVxg828jKEc0Yb-ZHcMS6_Hua9VY5W2hfHN5CKHqQz21XwLV2yZtW6Mivqddc2lqG4p-OwZqolhOFgssbUVK-_QvTrkbYchma9nfANXEnBoIhr-4sc-Hbxxu5xzH0PszvNgnCqhRzNqmjpSOa_7N0ybdKvasmBNVyZJBlA-fiFnnAqvfbwas_ANujcGgU7IknOHxthbfJv6rEkWr_KiIXC-H7xs7v30l9FJyln66WJRiFMoghgwPvVV5aCGy3j8KbrWB1noxtoUp6t8crqxUAboI0piFjWGB2l_jW5-yX42ePySdRN93Liksd3PlWeo5DGv97iUyhPW_DBZvttFBhzNukn0MyVefT2nG48bVc_AqNwWBbyFf2fy5Xqe4t_VVtG0DnlYZ04Sjcl2Ern", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116172567125714054496\">백종훈</a>"] },
            { photoReference: "AWCwydhggLCiJ0kfXuDTXttrNLmfCnWIPI2-yvO_O7Oix1h7Onl-49IMtNVU8mzz_zwW3eK6RSyW7ty2cM-1XsIFFx2501PVkucFXyffKgG7aYvGDfLy223DFWnHbCzvde2jI5ejGrRxK4WB1ExJTwASnNUPAeZLg3W4exMCR4Ko8LKp9B3mdI74p4TTSHkQWpl5vuGgCd-Hl5LAr5Xh9Rhdt-zGCQnAGw9y_Kuprqe6hqADo2MwuxyCpXjjjC1_50BeKOLSCji7zqqPGtB-m1JKTGFy32z4Jie4ckDR9j_I-VB6P4cq-N5sGECn-48L6_NWBnfeADMgpxHqGYigYjUivhRPJv3zcyseJUzXLjyQHhl0b7sGilvhjWnBAwwQ-cDpIAMQha2vxtookSnpIBnfgUmGqlqiznVMaek2mN2hvDo", width: 4096, height: 2303, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117898004636089756673\">KK Garden Seafood Restaurant, Sedco</a>"] },
            { photoReference: "AWCwydiMZVtDn5ze57uekQlXNJ0dl3QaNE7jET0np1WuSwIgAeVRVbP7kZGPw2GkLDg1gdWizpgNJICtQVkzpPN7mgGiCzsrZO3dlrk7jMvFQR1eXnnbh5n34zSRRPLJc4q4iBbAI5SjEjfgSd41tLOjoA39L2lEnxDdA8_TFxihnNucdongeIVcabDOR9TmJOShtLjwlSsNHY3z36DzdZL2YKLjMGEU34ZoYf3wGz4D8UMcdMF5wHveRI8uztBpbRes8AsxB3cbX1ICip4xFX_JW7XoQmoYZGw6oauVR9hQ8kNxiW58VIe3EoYRGwcau7kr11L21tbcR9D15qBjDtTzU7suZozv0l3BoVsCO5QywSSVqx9C_DNjztXaXzE00VwTUgw6no7qGmzJT4vzkEm5c9XHgYOJOlYraRZe5C0vbamWPlCf_GGDKQJKIOfakJzJ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101831944412906894347\">김도연</a>"] },
            { photoReference: "AWCwydjYltCcr_eU5TaPgK2q772egeBPk8BBOUD_klRUUEQVYgQbBYGyx8qAk6yfUwCSIhDzMpux2MaEWZA2qBN8WUJTx_Q8V6srNbaAxseol5Jn6X_6WbUug5Br1wxk0m_bC1YjkzFG8Mlgk941v65rDi-hmglQEv5QpNecIS-8f7lLlq0AULkcl7bqReNoQV_GMVITfJZMfNlJgBOEwik_vDfET8vnjnob10OMyx2CBnCHRD388_xRqmoxTfRBib8QaErAsvUmlMtQsFy336cw0RPp3_BmR_YeUC14TfKVTVAmpFG4mndX2NEOivST0nWXzGqsBj_h4UdPdNyc43PjNfw44TS_EZIyk5y1yXrZmFZArerHcWMq6spGm3LZFZPivESH1wk_2w2dzyIIrhY80TMKsiuk5WyJRHIDVUWsCFL0F_TOaIsL0DOBwJ_szQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104751933600416634968\">Sachiyo Asahi</a>"] },
            { photoReference: "AWCwydgMJWMC69Q_wLV6SMLH_qDExD4wtjX2SxYWyOqLiCZ50YazmqwqzeRyUGLEP0PHmflJaBFEseACO3mWViCweR_H7a0A8iHSk12IVT6lRNKrzeWIqX_27iD3YoWDPy-2AEnbNbkyNpNz_1qj2hi9Ov9Y8zXfkXojCRtlyh65vxJ_w0o8Nm6QVW5F7tXKRUq-1w_Dj-gxQecYgkTMzYIDpdi_SthvjlKy6BPlTKBwnDo3zND2lqKhSX6aRcLltH6VWG3K1XDiNqKxabaccLwbigNWSrg2pxrMZH8Z0GzQQDTjCeAIHgyNcxBDmpx_uukMCcEK7UlWpKC9zn40baBLVrAKkKLHlSTVeRA1Q5LPDC7YOw86SlbVpwP2D6Gk97oCtyE3RbBI_c5RIBHyTYkZgGOswtPoPeRVCaOcbgH3A0r-mTaNvyFao8LBMT1ySwuY", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114273891167498973557\">이신강</a>"] }
        ],
        summary: "신선한 해산물을 즐길 수 있는 검증된 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 해산물 요리", "높은 사용자 평점"],
        tips: ["염단황하(鹹蛋黃) 새우 요리를 추천합니다", "혈합(blood cockle)의 크기가 큽니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/kkgardenseafoodsedco", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6271367467498917783", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KK+%EA%B0%80%EB%93%A0+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "KK 가든 씨푸드 가야 레스토랑": {
        photos: [],
        placeId: "ChIJxSmXHa5pOzIRM7dxQWdYwhQ",
        placePhotos: [
            { photoReference: "AWCwydgGEx8GuTD5-N0PymqcTQlM0tU48s2Gqgi00iri7epUKoygYEo5irP3DYZCeKvYQZ4hy6k8jJgFxKDmT3cJbV5IMbMXqGiNYeod_1dGVK1iJXqIfrRjfoo8z2OxVpWBN-qQ7hqS8qVO30AFk1uDBYdLYlhWFxEQzCYKh7AqSc0MW82JaRs0qD-RUtPxn6jRrsMENIwSnrFnv0vawKp0zOb6dEUX6tTkBLDZNnPOizJOBz16ey-Pjl7chOK5HIJXBikmfPGEaAXEmSaCUxp6Fq7p6wswNUfsLpAA4cXNhnSWoQ_kJJgCLWnD0nuB_GZYsYd0NITsp2cmV65myjUdvGYr4qW9OiTqNxL2H-04gLvIUDrKpFf8xHX-5JtuKykwnEGaVRbN7_h_zepUOsnhGwtnuAIR0fLqwjF9IGkSJu-00MxccIUhrCLt9P2I7Q", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114712031134697964596\">Murphy Ng</a>"] },
            { photoReference: "AWCwydgO6m1wFdSLyKeqYF5zzhpcYXDeUMy92ZtdMlH6R8g6oMk1Q7QsgaQsBcUZtcW6PnGrIUV7oAdYG1GCgOyKnYmjRVsxqCYgMySt7kJwwdftX616FuDrFo3Auml2LDxvtFwS1CAnMRjX9U8iyM55tT7diZm-c1o8XUn9UMrz1i7P70aMXxPFQLl8C3DuB6Got2J-AUFPrKXoZOJYiL3CePT1_zcjMBqCkXhxmcaRD5bWjedoX8pBzKoHf04uWQTu-h4v4gwDJ63AWK8jA6ii2xa3vWmAuX4rY7qLRE6E3TF9N_Xe4bOZrmg1cRAinhiFCWwraHR1O_ChgGy5VTnpGI1yqwDUX15_RVQjCY2o_Pzppp6Nhf-TysMJYySYNO-bXDCrKl3rOHS6KlHrGkB80ljIavVGXhWFzAsrjvRVkQOB4A9AEGdT3jgeag5nWvVL", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117569756418781696327\">Qilah jijan</a>"] },
            { photoReference: "AWCwydjuCacCfp5gYfp62h4-y-WWYxUb7bQO8zhC8lDvDAKi02SiE05aHeMf4YksGXPozDYTb3UiK-ts_pnt5G9IictshS9JtkvVxPXJn45U3l1XV29eFouRRz-uyfqbrF3a_uLR2Qu6zfTFfc4227m6lqupNVfwtqft0Qx2Ge_eH5RWXFR-zrmqueBCyMuxIUdd1v8Udjpt_jclX-wy4lH2EZQlJG4e29rMHV5fO8KddU3tbI5OixoSahy34cfWVuf95WhGSCwoP9cb6UDTdoYlAOj4DC0XxkCqZlKfn4fQTXSzeYL4rkIkhrRjX9dldBEQNSJunAqj9luWcW4Z5IMPHm8IXjtK6ZAreGnK4X0LDQTAXGh_eObBoTTfA_3zkApQ4eYAuSqmSu9Kg2MFzILXlNOY5GPPtCo5vR0nafk0pAHDggyglJO9rEoUSKcjvOVI", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107060636410752521179\">Annie Chen</a>"] },
            { photoReference: "AWCwydi_A7ojKXudMMa-zUS0d0bROrhDaIMEvybUO8w3LB_3uASu672CzBFbbiLPxXwsUxNkhDp0QSI47x8ThLBwT8aY4fD_TKkLWcujYzZh4UhkUKqpWDfGUk18J1UagBaV1c4f2vAEPGyRJnct5DR8S0iGmwXpH4zDLw0utrWoK4VGmLIyFlGazzXezp65kuKQYxBzICexEvwXk6xE7xpz0WhBq4UISfRDYJdSWaodDVhjcrBquA3wxDo7imAAxbgjgFTlqXI0SxmLcKrBeXViHgcZkkujllgeuAf4FloFrZrGsRaH7MN2Qhw_esuhnEfmEXk94i7D7FUcoAo46TE6bXBqDb-CDuCBW_ALvM4Younrg0s1Vx2m5XM-33V94Z_PGEgHunt6b0WEU294rl2AnZLBt89YW4hGCRkL2EgtJLbXpEmCqAeIlvIhT8ouZ-R3", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113363813011174558083\">이나현</a>"] },
            { photoReference: "AWCwydjjAxP7AHO-wjhxwoudU0DIyKa329wWJfRP-iFCfX8zGVgFDEM3O7MUXnWg5suNDY_x97tLFTt0lSab_AYw0Rl8bVMZSdb4-D88mzc1WaPDb2-cd4loAkBmylJvC6emel4Vj67LwJWqAW6kzHGhmXdVzmR3IvK9hW7rGs9TyCIXixTJ4X83JJxvaPHUlspZlQsawzxebaQwVu_qlayuQm7lvNzq2cHPBl1LEm6iAcx8aovnbjfpxNi9YZ-QtujwyRZ3zYqz-v9hwoUow5rScxTU7GZgaEo2eGADEqETVDDSUUD6fbTVGZM6wbRiod0ljfuLwp5j8Juw3PuUOJ1_lK3mhRdfL_Y77flza7mpuHw2dsiLBEujOAjjwTZCz6jrauHf9Ieqh8J5zk6DUP9YOltaL8syjpZr9Drqg8DzTuHXHSRK9iUej-O0qlSatmNz", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113869517380737536797\">Clara He</a>"] }
        ],
        summary: "현지인과 관광객 모두에게 사랑받는 가성비 좋은 해산물 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 게 요리", "푸짐한 양과 빠른 서비스"],
        tips: ["소프트쉘 크랩 커리 요리를 추천합니다", "현지 채소인 사바 나무 채소를 곁들여 보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:30; 화요일: 오전 11:30 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1495855226743273267", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KK+%EA%B0%80%EB%93%A0+%EC%94%A8%ED%91%B8%EB%93%9C+%EA%B0%80%EC%95%BC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이칸 바카르 사바": {
        photos: [],
        placeId: "ChIJ_fkI_D5nOzIRUahTl4CUrXE",
        placePhotos: [
            { photoReference: "AWCwydg9qlkjWoxkaX9vg7V59OUaz34MVOIKsB8vd_jduAgJq6oa1rIGwEkQD8lKCMtPIwqVj72bRSysNtjGOGEOr0uRUBkHMLDXtCc-Frh-GJYv6ItOmusDpB3jUzO_iy9crh5v3yzi510O2rVusZj_eBqCpQE3kTbf5uwdAIlrHVyfMf9n4RsXS_K0OIuVmaiTit2UXImgh07xzf_zJhWQXdaRrVaFVeCkoWna6jYkYkHe1U_oh95FeJHT9QpZcNvsCeFJcLgKyM9ix_VQ5m0L0LKDvFszQ4q-vMl1zfp7dA5JjpT0nZ8-W8_2Iazu4G2yjHV3oUPFvSvuCgqAJCfliqImXCHnMJf4Le1fIJe-Ml3GCITiA6z5r2I6q3A-S6RNTPfijzhoTxvkpySKH74nnRqHAY-g__vCEfJOtV4pP9SIcFFFjV-QxWetUDvauOX8", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104776364202539336445\">Ikan Bakar Sabah</a>"] },
            { photoReference: "AWCwydg8DP_oZVC8pUCUYau5yQjKYCFEBPfyuOqhqy_vorv_dwa31_vNlFNbfn_sMr5tIs4pwPAs9gmW9AUHUs8DAX6pn8h_P2ZLGBtoeb9lwrKVrwrpcGw7kDBFOr5YgOlH3VPRjvaPf-qslwHw0K2-gGotoMHnNE-xSYRtnnk2AIsiWPaRv82OrFjOifKLIV_e2GCX7YjdlGW0E3hYY4VHdPxWyXGrIZ2IRFi-tIQpo2JO8TNHJH25DXTw0Y8x_FHle3BjQtKa7XdUo1wR0csYcNFUIApJLK7wo3BgWV4NPGWhZ80cspVVpdQEB46szewDqJ9lmBes6sIp7O8ll413B8mrh91KPHDPfSYeiarjAJWO8nHAadVJv8nbi7LiSXllvt2lzmZZ-AP1mHczv7dheaifOlas2uNBwIy3pZ3YjxSXivNIW9Vqz1iU3YU9W5jy", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106160083175319959318\">VC</a>"] },
            { photoReference: "AWCwydhbjgr-fsklEeoXrbS0cdi9gQK3deHG8ut17_-UA71NSrh_6Id35HsnfDyBFvBFAF0hQZIE0WJNpfjqtybW78S0bFwiP6PSHelcgk047j2c3u0LZoIGO5PTjvmA1nzjNenXYSEKEjVWP36TkYFhYPFlp9_4kjoN9OrOLDG1Gog5WS3g0Pc6yqZqNrsJVhjm7mBe_0VE8LZv_LptlnsTVxwdZsuLUB5bCHg12GzmJ3kqJpb5sp3iMWeEjJsGtiC2AGZlFMJjCcM82n1ZudZk8yHX2GV4p-xezTol1PkTS7rI3x6vmqg-gJKYsuS8AIl1m0uU5hdY_gX-7-soiwWgIve7IcVnBH09-BkgL_2DdOG3JjXueVur1IRMlhN4b1X61R6cgsrfuDo_4ldT0U4fnLjCzaYRA0nFe-9b6dW-9wfgVw71DY3kEOpkhWpsAbgq", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104776364202539336445\">Ikan Bakar Sabah</a>"] },
            { photoReference: "AWCwydh2rzogbX_OYV1ifSWWWT8oXT98cfgxBRu0Lm2g_p1BQcJQP20JpYi1yBIHXSNjqMdRgBdoc5tNv6xEuVA5jyrhsDf2_M16tn8JIGE_jEuvt_yqxp5HV5xi9akMri6GrQmxJ_xrWfWUC_6sGfUQWMCRUICP5zaTAwsGuqB7VZ_hL6WGtJntvQ35dAqQ4Fy4-IWc9hkCHgoWhw1l7czzwWZUfUZ71gFM8oswKh1f-6JWwIR2Wl9igyZOPwDHXhEPzoP0WrAfRd4ocWJzq5w9RbMPlYZJ7NQxbKuxcQ_l8_fb4BrYTCoyR-FqyDZkoq4gANTOPXnGNUdQl8CWTaGSh3xIBeC2lIAUFuNzhT8Yme6KdR_zqIVuDXwKIvRYLNdjT0hiM1LJS-ZdeMvM8Jb93uGrWO3G5AaSd1q3YfKVB5fA1yosFy4xlmBrCV1TwzRB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107726736555666218962\">Atiey Anndawatye</a>"] },
            { photoReference: "AWCwydg7UXy4Q_uTevbLRvNRFYms2FrF08RIJAfhA7FJnTJrhmWDUnIK4GfLVEpaFlQfCnf2JJ_VGR-kVoy2cnRVRfcIJiAQXtIOf2XKkieeENhbPwS0zOIpV0MZaMjVbBF95vyd03QNP4CY9NXzYtGPaGuXooSpaILugwAq-9p1SdmEOC75rh2cAKWRZZhTycllUp5X5YGPlAytJETV2ptiFOrp0HAeEUAfr8xjIbv6M3CR7tVajNR7t2qAxNUFYDttFTFJ22w3Atk8XnUToZr6TvbfW4o6CQN7SlHoR-YkVW200z8Skl8nv5BTCWuOXsI2vHDa8jZgQ2GZsnLJYeleZziBK-tlR6fo_ZeKIzS1GPzjoi_xBXpyKlYTHdeEku_eSVr9LJi5Yc0vb6WMRxbzoRDj5RJPbgo0tWC6TvuhKIQ636nwweKrCrDelOiXsXzM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114119657998092836804\">Nurannisa binti Macapagal</a>"] }
        ],
        summary: "검증된 해산물 전문점",
        updatedAt: "2026-08-14",
        highlights: ["4.8점의 높은 평점", "7,000개 이상의 방대한 리뷰"],
        tips: ["화요일은 휴무이니 방문 시 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ikanbakarsabah.orderla.my/kk", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8191366577272367185", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%B8+%EB%B0%94%EC%B9%B4%EB%A5%B4+%EC%82%AC%EB%B0%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "캄풍 넬라얀 플로팅 씨푸드 마켓": {
        photos: [],
        placeId: "ChIJQX86LKZpOzIRNIOXUTnd_vU",
        placePhotos: [
            { photoReference: "AWCwydh_aZiESY7Y0GziFAzJYVZaNCDVHruGSfBAonkub7yUSqLkbxQetHUo_bB4Wz9l37OWRdGa4cNMDecLlIkfoY7ZbuEeQgD--7r80JuE5EOI8E25CiyCju1omQUxPZF2CvTIV5ZBGLbrOi1kJKEI5x3N_xHNGiPQD0Ncn2yWaogvKldbB2UEz0yY0PtcKl1wdQjexjOl5X0vg3DlE3O8ymPsZUP8s8pTb0Bu8_1zioF0_gDeFnSZraNex_KgIhowNNdH-S_1QR7AAkED-GrQfCy6_qqQZOgptAdihTxuDNjUuXNpBXQPAocC5KCr30prSNuhiN5iHYvPOQ8g7eko0YGeb_joP_HhIG9d0Xo84fb9-lwqQykGYNniwPUrzPQ2cDhLEQwQj5mHc1XG7Mc_XN6_adE9XqwU6w_2qtfWdZi_VjcOpsT2J7Se0C8LgA", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115600714234248019547\">Arvind Kamath</a>"] },
            { photoReference: "AWCwydiNkVMevX6FAJuFVQA2WRTpZjgfHS6qUfjzxJcfsEBKYN7yYCYBpk_4TaflFKeJyvZBSuUocuc5MK_VmOdycNh_ojknbvXTbgtFpO37E5PoPYXDTwZTQ_1rZJjqGv71hbGEJoevXrJE6__3-K7JmlVw_cbS0qWAvXNWzp-SRJPb85SFV6B7DW2e7d4ZoUptmOqSMgT7U3Z0x9MWz1o54xxzn7RDg38TU_OBeEy_dyKUYkOe4rzsNUJ2NEX2RgovTR9zx1NgBjEC5ZB-uEGDJ6hPJRgrEf06T6G7nyVnk7edSdWTuPz2MsoDJGDau9J8AHdgVU2hA7EslE6fNdf4vsLg2n8hzlSZdR0w5QVqLMgZ-wTosyy63sl5a_PGd-QvMcPeVJvRboVGZtC3SxA8tX104MnD6zMgXsA2zqI3AW9vgMvTth2kirsQfM1t_Q", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115600714234248019547\">Arvind Kamath</a>"] },
            { photoReference: "AWCwydj5KE70JvdLe-W6fKh_fsomp9R54hcBDg6w2GEZJJ1l3TAqK4YWch1csNxhaNlIyfW3kL4URysZBJxgtFXQrN4efrDNNiYZeWnQo0CljvNDleqe2YQC7cBNoPebPZC99NN3c1idKZ3pLcYhGV1aCyjv5Q1HqC4K7yg-BLeslE35Cx-NegNP920lQ0gCwjti6bIG2jA8dqxUL3_kluZ6ROjkPw7OpnK2eN2YABC_etqIywTUR8cPVwHoz6iwhRREJPg298Mn00YNnFyO5dxpuqdpm7823tAt4vNAfiftZIRHq5LoshE2wU2oiGf4_uJhZiaKBdQnLxajR1LJY1EBcPhWmEv1AbNTBZCL-9kA6xC-RKJoWK7z2SNrbZ8Ptgqcfpsu9vSjHsRozO6L39lPWAynI1IV9zbG9Sj0OYDp97EpGC8yEpG4E5OSqr23d_Ws", width: 4045, height: 2275, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115600714234248019547\">Arvind Kamath</a>"] },
            { photoReference: "AWCwydhZiGRIX27wU9_UiXIvWgEE-ziy_LgdeSFZqaHX53E_ZAmhao-kYVN-xsOxBzjWRWMZ_X2-SsHrKdq_W8GjqFhOhVOu1c4xjnEJcsBOXHAgjZbnC2OvnIeeqbkcRMzu0kKgo7eBiajYSJFuFfsV2DdN9dT318gbbbBepCIGL2Qy7rhYKkQUtz3BYkgOt4UqxxvBNa8-DWuweVOXeQreyn-HStmZDlOAzfb_PYych8S9emsc4AgEIs2SciY34IE8JqiwRVdMxx760JHIC7WkImk0DnYmHivXa2W5KObMoQm96VFemKXDIE8ZHnuTK8E9my9qN4te2qBndCeewTTaIvAT5ZN6e59kEju0Aeij60J9zMzYeEUTu_SfgNaYcpqGCfC6nmHag6x0E7pp1vY2Qo6cf8mMFhJ6S8RTNc0oQv4U-ZIhLf54BJcYtNRnxTUG", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117999027989814452002\">Kk Venus</a>"] },
            { photoReference: "AWCwydj3lXXuAc64EewNyuPxQKzN9ujSv-2UGtEMuA7o9kOyqLP12pZqfB5hgG1RKmcGpprLsZj1drVaZu2kbvjNbXMu-faUpvOu1EvW-IFKUL1T__9LiYiaDH45AUAPIhxl-uP0omgwhH0SNgt4xleR0Gq-AT9WemW1KjtSIU65y4zLk6aDAE6tiDq8C64EQNa0lPZAi5o7vRRrHDP_w4nd28trihu7Mm0IQM2CBnoyvm4Ue8QxqTDdyZv4K1t2DrivAM34PFb6uOSoyR5WkXFsipAE7JIwruAcQWwz-zNBXPI3VK_GvnQrF3eiTlvQf2KvVvy2PWrDtMTQAC3CjMpowz-BpgIOsopHQQD1NrdEkkr7P8KOdiN5pNCu3JMJjFN35JBr_V7FRY0oJER8ge_s_ndJx_4dkB7kLtSDEfW4iYdh_Uqn8yhtEdZ_ydemPl72", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111900667695751992020\">Edward Lai</a>"] }
        ],
        summary: "현지 분위기를 만끽할 수 있는 검증된 해산물 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["4.3의 높은 평점", "2,261개의 방대한 리뷰", "현지 분위기", "밤 외출에 적합"],
        tips: ["저녁 시간대 방문을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 6:00~11:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kampungnelayan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17725848421628609332", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%84%ED%92%8D+%EB%84%AC%EB%9D%BC%EC%96%80+%ED%94%8C%EB%A1%9C%ED%8C%85+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "그릴피쉬": {
        photos: [],
        placeId: "ChIJa-TncO5pOzIRTOi5VVyl17Q",
        placePhotos: [
            { photoReference: "AWCwydjL0VpJdYqgaulllLwE03f9-gh5Gn-gqPoZnBpqCSWTe02GJF5bIPR84_fxZyla-2hvrako-yhpW0va2DKUY__piETVtt3hd7cVPIpufrZasC5pmX-8-8szLb6oiDKkCQ8je85z3UrKUIH1kwzFkDKHy3n-fFSbih4eyVyHrIFH-_lMNoOE0P4qTdzLXxcuJaDuDVcqq_l6W90GO_S9NnhF6MCYdeKPSdWZyQyCvKE0k-i9-Y59Zv8t0ZRu-skSZmavgAsRFNjfZWcsBm9FUFr8t81SuNjXt5KQgAH_fXExckzw7PxZGL56jVnUat84UZgCxZVrI491OO85VBPS-yXrIRorWcBDdFa9eFba1gRwj60Nq9YnpF3Ir0RPdkuJMyjS3G-2Am1nBBzeLg3mKZcthHHijCIWV5L49qPcs9g3Q4o", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107045796013731402364\">김영욱</a>"] },
            { photoReference: "AWCwydifywsrcuLpAUzhG4jpXAaP2MoDLW3e2C79vwI71IRy_oPyetiDm4NqLtGQVY9eY9TaRQvgvaCHsbN-Pp5EmqzTOkomPQIaVvPjF5ZKBtWqisBaHr2dnfCyX4RTkxPLync5cOWDRFDM3Px9dWmGP3qJHz5xpyf-RfPSt82QnP4A8FCQwIrlfCOG-vImIwPwWAj0HL76OZZbiWFJK23Pv5VoiuVVzZd9HCm4r64WypR9ebk5OufvKrEQwxpLfDHjd-nbzQw3pQ3cM4RBjFhLXI2vVvdjDGmWVEL-yz9gkG3gBo8qiTbIbcm-b4u0aU6Im_ovVGPyTlcN1R1P2n3rsDIYMBZ4II3BULgB9DPSNpr5q4US61r7Zt_1PUuwkryjEAC6zdZBn8hmThKu16ZrPTEC4BIJqBUzaFKYhHuh5fSVClARAvYJ7ESYfsw7pN9-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102453618398529478967\">on jump</a>"] },
            { photoReference: "AWCwydgAwybstAbjvsMjUK88fCSt1XQrqvygN634Wtmmz3kGCs0YE7qCsND8wm1vopdYS3ef_3RYWnvbgP6jHVRhlLsg5NIHZxMCpU-vA7tAZE1oE99eJNhLQCyVoP4clm5tW_pPZB1rAkan61E9gkZG1G9b01zOWYAlnt5_M52MK_jYN9WB-u6a3RLK5opKHjQZjmERKkxc6H40VZzipnbaG4FeOF0fvpVEJtGgfGQ_WyzsyvhDoNu1U1ckBP5F8WS3X5Ip-OqD-mQG3OsODx4o03lEk1ltog3jDUJXWwwrVhXcAywdYvvtfmWftIO1x1uaKzItGe3GE80Szy58eUNAIS2LQ5QAMfm0keqby6VUcbA4MwrFuCqlAFIg_pdt7tLvZrsOHVF98ydj3OotlOOq2wM7Plb9bc_MVliW069CO8fO-LGlOXSwwITtu2Jtalhp", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102626750779443985992\">Syed Zahir</a>"] },
            { photoReference: "AWCwydhQbz6C-4Zwt2stla3Qxn-Qa4r4l1tehtU8nGjRq5BeaSOB07LPBHMcljkxR0nXn-DfKAU5b3d5NVYjpMv1OVDw6hL46BvWS8xUN9m_H5zg2_OcEZeWC3I1jYvwdq2PkEIK2XfCIdFB_uyebg0p81bQ1oevFlf9aX4L2T2-QpUxLxLIRio_figEIXA1utA4qlYS9uYa2vaxp7sooQFG25OQsBlXt3kbI23uouPeWg4ZLQcvyc45TZURLAr_6DFO_I_HIpnxH367g-wpsnAvwiGKc-SbNSA2EWWvrKvPHLb2g-3OLaZZDrg3xRfAyLhwpARFTk2m4XWHPY4GCw0LkljrBB9V5pGR6RltOhqan2N6iYiEjKzuATQL9HakLQMWP8uwc8eBf4rPlUvaHCqMthXa7zIJDWFMfvWnzGjJOlYsZVv3MOpj7qrVXhvDj6Z1", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102626750779443985992\">Syed Zahir</a>"] },
            { photoReference: "AWCwydj5XPeuhzs9ybzFFct1lw65hxbmuqnrdXxJHZbd7-nxtF8F7yig3dJrcAL13WeMSRccAI1mkw8RRkjmx16_19Psc0g_Rnh8nllgmdtb7svwCth0ieQZxYFLU3G2MM6KfucfN6kV5IdiW9AWSXnimhjMaLeTh1xsmSDfFJ3EXZHW-FrdSwvdrB23Jd69xrd1Us2J5xo2i0kjg8M1TUUD-lciCyW4KBWHMBJCdNVh8rBndtYaT_OMcs1r-Gj4awCgR082gXc7puv5e_AEcq0Z9s3-P32qLiOSSTe3CyKcYp8987dFMMfDLUAunJYHoReIg2C9Wmt96EfnemsSprytC32x7wq5uF9-y-ruOqW-cPcX0Gyq4GSkK0L4ukW9MKlPniu1ONj5o94GtSYMtjbvxtZlTHuKvKLO_kficzfbyBtpEHjgDW_4k-okgnytdQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109234665097916585604\">Robertho Carloss</a>"] }
        ],
        summary: "신선한 해산물과 푸짐한 양으로 현지에서 높은 평가를 받는 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 생선과 오징어 요리", "푸짐하고 넉넉한 양", "맛있는 피쉬 수프"],
        tips: ["늦은 시간에 방문하면 서비스로 피쉬 수프를 받을 수도 있습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13031065862813640780", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%B4%ED%94%BC%EC%89%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미즈미즈 커피": {
        photos: [],
        placeId: "ChIJS-XbhF5pOzIReSjltHuUQfQ",
        placePhotos: [
            { photoReference: "AWCwydhCGN6JXvp7sJWNno4Kq0To2a4qSKI3eGYm48IeCn0V-MFdw1-IDvONtb7SsHxTp0IULYUGcH0-BDwv_XBTTzBSOxASkSXhiWS7llOXFT8vUjNHZgsJK1Lhj3_XjcHShIAa_T6hmwrxArgJrIkL4XONFfOrpk02w5R7KyxxiyhGfP4hGZ33mrYiDR91dhngFGlhE7A5NoDHy2-IVJ1xYfyBgQYWtFIC8yWTkUyPbMQsEvr2jaFZlp_r2uvVuODxGwoIXtbeYOGDZmvkyI9dCjo-nkCVcuVZQCVTNT4L17moktGsR0F7DaUKM-yR_Z5fewurdW2ihps1OL8GmzV6QZ9tBS6O6CoqeJ0HgTa0JTnactMDOw5l9xK2FDaAjeZ_YOlgzoqplte8_XdIr7iRlYkcM3RER4qaxJFNhBy7Rj_ZgA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116999367722699421783\">AB cK</a>"] },
            { photoReference: "AWCwydipgIqhpbJM4LKoEJ2SrQVM0F8zLFPq1NOaTmWQ5tuSl4Oz7UPBOBw5JxRQUJ4YwJl7aWNundOGrUfEnKl9XcGYSBVCZbxDiVslM8aylnvlm1i8g7jQL5LmeA5T2ougbWnw-0SkTbpPxs5dD2fqdeiZvKxnt7gGrzpNxgvoPuIHf_Kh-YJ7eBzeQGdOcolvlr_x2hsf6wa9c1M3celzxtUabDDfgYeCUiFVsthHGf6huDRC2WVF37o9IC4ArWVb3fylpNHiAs8B-5L5Z_wRX0Xaps7hD1xZz0fNBwVRzB1bXyyWmXIJev5yUDSKi3UOHobhvclpElRuxllfWnWPe8FHwcq4tUVQvCznzukxLWsNhCXoTOnI9JIFg8VnN0K_O0umZIkM_Xm5mgLxncgOD-p5orRHoNpSdIvuEiEjkVtgZ1r0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116999367722699421783\">AB cK</a>"] },
            { photoReference: "AWCwydhkqlemBtdCfrhLj8YBt3v1CL2PvpYJMBGdJ5kDt4Is3D079pcwFzlVlZiIlkOVteC9r-BCjLjF1W9a0RO4-laHCzQkWW4loVDGcN-pFoWnSwbAt96BxIDH8Z52PU1vQZIdZJPvnWVew68CnA62G3G5etoN5skPVZVFvpTIy5Lw17zDz4jIVGola_gwm9PpUV5Wp_hFr0tnz61wBDEg7K5Xc3SyLcyCebRRF0I2eIPU9zdF1eIXHfxJWOWLMYomMRF7cbnmsldu9lDiomtxbXU4YgtWr7OwmyftO7ThxpTsUJHcD3NB6dXZ1PeOSLWcm7fT0nxqWa2v5HOJ39OZVshyYrTpTAAxJlrSrqsfMMmTB4zTFNovA0gepG_4ivhStLe472FP6FEzGbxLEU3u1yoS4Fj2p7Y11U7aeSJe1xelmQ", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110142454012860332244\">mizumizu coffee</a>"] },
            { photoReference: "AWCwydjNzM3cEpTRVa79V6fo1rWx8seRFZcc4w2HKXQuhQVyVBlSbJQHA4Zom9kbw-MmFF5QPDRk9BhBsHT1nbYajEXjT-H3v14gUxA-plOvQQ-KeTkNZm4MF6GJV2phe_Eh6wom3oNZb5L6TuCwohb-l5bE8wTk83UxHlhq26NHqmnvUHjoj0u7GhrMtTTH8Qu7xGWEtCSNYjI63x3Cvs_cbRWmGW8SzF36T4PuBiAKMRBH2qlMtTRKz9R0uVD_NDWB9N3SX4YrKqr_F3HxMDG8kO3mZRCEguzCp0fbY5FqB7jXqtdesFM0Gx3ljYa7VKrm78laiNLMRnb2U2W1H3nNIWF3RYuQ-UPUZy3Wkg7NBUBS1BVqUKNMzrLM-WtEGOMBaHCM0WOZ1TM1_A1Gh9cC0R_DiBKGkCdBkSb5QhRvW9XHOsHTSy-oqkF6dVXNK34c", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112932427636959968618\">St Maro</a>"] },
            { photoReference: "AWCwydhdisRlkheLmdgicletF4X3jZUXE9PeXctSH90nt9BGVmy60y3JaLkVTzAF3II7Untt7VtXSs8t1iSbWu47bnIJnrAF95ijpl5Wd-K7Ti7JXF1dSIvsNKWyP4oRipNeH2zVqE43sZzZjo1rhRR6c-_gYdPOSqIbvNObYRUP8GM1JX5HeMgED-Ejyhky_LH_qwJWL7Nxg1D7af1Hy36GyBMslUuWQWN2Z92_UDfThyknchECQTsgxRDmu4cIsXs6dpUvreJRvvwNy_R2nuZjHxbCawQEJiA5OQCDVcw_wcVtJ6422mnj2GY0TSYNZs7LEfXQWUK4ys2_76aYqTiBm6PqMYX3LX-1ffoFq5H7PmwNhhHIAI1nRMqlQzeHzq3bcJeeNsG-DfpAyIi918z5zG6lr9QzlgSwcGL1gYFvHNSymAtuBubTExLgCyNBnQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117635269273268638998\">Deelah H</a>"] }
        ],
        summary: "품질 높은 커피와 다양한 디저트를 즐길 수 있는 친절한 카페",
        updatedAt: "2026-08-14",
        highlights: ["최고급 커피 기구 사용", "6단계 과정을 거친 완벽한 카푸치노", "다양한 종류의 케이크와 페이스트리", "풍부한 향의 고급 원두"],
        tips: ["매장 내부가 아담하므로 여유로운 방문을 권장합니다", "바리스타의 전문적인 커피를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피 및 디저트", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:30 ~ 오후 6:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mizumizu.coffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17600512077777414265", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%A6%88%EB%AF%B8%EC%A6%88+%EC%BB%A4%ED%94%BC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "챕터 투 커피 (가야 스트리트)": {
        photos: [],
        placeId: "ChIJ6TrB3DhpOzIRVh2oeOK6O5Y",
        placePhotos: [
            { photoReference: "AWCwydg0WuQqGGc27j1Wl41c9VVTlzszi1hLlHnIIFfcsJVmgZwzjTSnQKdAx5aqg-PZ0r0MSQYv_93jFXjQJjRX3k4qDvXfrFrfi9F1D861WxuIBComdcy_HZ45TU674UxBW2mkRn_XffPiZ3AsTYg1HOO5CRNnnh4Nbt4t7fJlErN0ZYDIj4PPKAXq6efl3W00X3SM9k3j8fWifF5nl8aBqOg8qBUwBZ6Se3l7dJXwxiL7MazbJqj6o8-W4KsMVHwDSRkk0-AWXU1oiMpyZGOyRRZrxeI6DiI87UJbHx1NoT5BvHRkFMM83VQN3r4Sn2cR_GJTBP3plDstD892ZefeLpZMqKDwR58GKeoRpSGMHVq9Mrq8ie4ZtCe_F5mM-ljVsJ2B7_Ej1hN_5aBvJtht0BT5dnW9ppLeJsgHFDU5FJUOJABCs4-NdAI9Rg_QoA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114056387104060565348\">MEZI MARCELLA MADIUS -</a>"] },
            { photoReference: "AWCwydhjaD9a_F47Huqfo-hjXJIsEZNrQOlGOOakl5aCoo2zSvHbBZofj4qKRP7jqdJyyzTcRq_lCOOiQk-Eg7SfnZ0VjQQAjs53RhO9sVc6HNd1nv7VNwrPM1wdwcsphOgEVrErREvrdRK2a7FClziWH8_9K_FCJMPvu8BE_mQRlw_e_4IVcxVpzH8--RwYFNxK29qkWKRziFySGlAVIfC93RcGgzpZropMaVGuxjpnAXJR4rco6t85FIuWARnOB2RQ0r56ViAfZFf0BzsO3u9UcXcZXxZVA2jN5FqKJDsprasplo8JZkvWrUMR5E5YliqPxxTQH2VkoPNke7ZjpnKpBYDOmYcBxTPDllYzrej9HoC4I19W4nBdRTV6m4tmoYWlWZBJnTFEZyAIStzVp80W5FEQGDNWAnqDUxlsXv08P0kAUq0I91_-yIg5xUIMrg", width: 1206, height: 1789, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111981530151189069843\">Chapter Two Coffee (Gaya Street)</a>"] },
            { photoReference: "AWCwydi8RKlUcyfDjfF0FQSksDKa7eqBi_aZ3yxgEYLrCZm2ZM5VFnjdV1fW0kJlrBkLVP9ZzVPXYuCz-mEOhol3ar5pkSogjYSL10wvOCkOikg3LiKbvR3hVq_puLon9nLORMXPLlEvbWPDLmc_kO1CUz3fU433Y7XB6_JKD2YRu_5UABL8Qh3aNzEc9QpFFu9ZXf6Coc9YBXEwutaqUAT4aMrphFxc4J8I-1TWhu3JahMaATtmi4dhhHi4YQAYZ6QuI28r-Cq0few_iqs0tGO7oBOPJ2YddE62zM8Vz1pI_Aa5SUIuRJO9ebMKfRildipUgdQkk3BrrgG8kW3jALQoaUbFWP5LgQqcjo59s2mG_TfGckFqSeeca-rnBPDKtYaoIuAfzVZ0XLnEnou3VcvNB_ooG2h-p5KBnr7u9bC75IMbErK_lpNwbvuQRXzGHBJj", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108657541934577016131\">Zi Xuan Lee</a>"] },
            { photoReference: "AWCwydhu1fQahkhYrzNdPfhrv4XmGX388YFn0eoeQpmZGy5lPurANA3BYvhKiq4BwNFBixwGcCNKr2sDcSnRq3lwrgEuLzPaEcDgbzlBKgaP7VA8MzkJudEp3j1Fc4e-5TF-434q9Ip18ejUDT5oFUTVNnBj3Ir13zmEVEoO7nuUffvRkHACIlGluxK3yPA_qWtkXp6Aehqaq4lKdEKMTIkaeU47rOPKFtp_iSGjQg-ctTvpsgKENC5ah3xiE42SiABU-rFnDeWcXstXMRepsZLMUrE5slym19al5nKrbwGOiar01mmPR7rd9JkW8v5s-9zR8_1sW0aS9Cvu27_IKLFIX6M4KKEtytTwJid8Th3h9i86eOUMbet-BJYuectzm0vZmLrLr95V79dCcd8dJaUKyxqS7eBT0pvQw_xCAS8ZR9JHwnFd7aJ5p0mXU0__WmkU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117979279635347078871\">Wida Harris</a>"] },
            { photoReference: "AWCwydiCXw3DYGyGvQAmtNjwK_OsBpsdOtDCZWZWY2MIIfISLfbRK2miFldso2Jwu01SdqK6uJdwHyaGLuRwcz3p8YutY_ivzDDrCPp4OjYRI1rbNhiwK9xFhRHvHQ4U-TRkBWM-cnddFRvAfQC1JkvJnEdmqz4BXh20GVRakJp_c04nB2h-dI9ANnXxQUjdBlg-J0H3MPJpKoUI3VtA-BWA4QD-4hhcOJ8ldWUtTcxoQrUKwFkP-lZkW1RLjuVpzdkOm0ANs6HP9frohDTPM88k7kGtKWbUJz9Sdy2lcilPC2LfT8d3PU8DU4Kx38WXGsIOJ18WGYPN8Yrvh2AL50pKHnekbRfsrpLqnm2xcwvrGYIzlVS1PBxN4fhEzt5Lg83gXzByQbN8FywsVkJ1ceBrcrOzGyN8xleCzvEBZoy1A9WrcRfBGvxHL5q4D_GD4oUn", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115355190182812354100\">Nuralesha Delina</a>"] }
        ],
        summary: "방문객들에게 높은 만족도를 제공하는 검증된 카페입니다.",
        updatedAt: "2026-08-14",
        highlights: ["4.8점의 높은 평점", "한국어 리뷰 보유"],
        tips: ["오전 7:30부터 영업을 시작하여 아침 일찍 방문하기 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "카페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:30; 화요일: 오전 7:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/chaptertwocoffee", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10825451611164777814", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B1%95%ED%84%B0+%ED%88%AC+%EC%BB%A4%ED%94%BC+%28%EA%B0%80%EC%95%BC+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8%29+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "뉴 WK 레스토랑": {
        photos: [],
        placeId: "ChIJGb9dPopoOzIRJLR2ko1LE6w",
        placePhotos: [
            { photoReference: "AWCwydjn10xCt1XEJkuuFhtJuiWt6Qg2RfTgl9ldxi_IU1Idra_UP2LjVN1ABhm-DuSV1WNbVxOhu8A6u2nJ9VLreE6kBobYN2x03SuBmBe_HEUndPLuxA-X8WfN9GewS4n2-WxVRSjv6NGUOY9-6fnqVDnhSA9YcTjdEH5K9CXdbsNZMztiqOf2zDJtcqowUw_5cIU5fpZUhyGnaeYLNEiZTIl-XX0en3GiRejU8lMxcOM-N3st-gc8wr5lCyKhHIoqr9W3mVPoUGWzztbtkPK-CuUdvG1DBbxU9-UBYbvFSCPneLtWdiHzvqFjPZOYH7xUVGN_7F00VkZlWRqNDIqUE-9-ga6x-jK7oEyTRcc87ZXUr1XiiIKKnCdUtW_1EJfK5pB44k69R6jQxPYN3YZ5lqzw1qwUGlWijBOdTfYIsY9xXLQ", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106925928385630238774\">趙榮新</a>"] },
            { photoReference: "AWCwydizdW9x6ZOYfFHkEHohxqBay5R3k1WABB87xw8zUk-x5Y6lHF264hV2iwsbX82gxc7-cJDYTuQ98Q9Upz-a9UErtlNoXi6DzxWOPZ7ira-2Ru7Mm-_hGYy6XGuId5fki9_pvH3Y7a-0u3S6U0eU7B2RixIl7dUv7gL0Hwg904NkyJexMeC4B7ofJYi2eQYNBFI5jWMrC87M9NY7tdGTBFVl3owj5LPStQfRhODxcBV9AjU64n9xJ8YV8HBD2I3znki1q71eXqJ1tLVkWVmd4NW5QYZmjIBnKqhY_hfX2s5e_Z85MwAH8yRQb3ecUQUWb6foes1-tCkMHbgEwgPaXw5qYdBsD-7OmSKku8eCFIh9Ju04dECdUw3XHDYtxSVH2tdNYqtlaF2DdNGOr4oxACOzjs3WLsOZ3lrkV4kwGQZ2pA", width: 2048, height: 1717, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106906065102372978545\">New WK Restaurant</a>"] },
            { photoReference: "AWCwydjMm5haonIq4IstDgI4CBscnuQHEqzysCOXvzuqE2WGmjWh7XC-K7FOyvXHojSyy-7WltZjB9Swh3unsKOTfgdYjs-F7dOSXTHIhui85EHp8bwd-F-SjWdxIM6FzqRpCqdZLwAbFfqeNNgQN8AB_KGmdYjoyXAyqUWNJM_00TnlwTksp4ogth6pOcsCt5IXEm0qQLmheoLYaZ_Rtr7BS9Pky4crVY8L1G9dYB1TOBFcG8khwS36FNIuOZGF93ZxWGXycKRrSy8B-wfgs0jvgaG_Lmbxhsp_f1-61P4Syimk3LFixFSGhFCnUYRzGMBX7jxnuBmynUpw09bIhqf_CDcVQvMGotiDrTU3qfpqZw4UxIRdrsYwsCKrLQspAbv0fCildYEU7QN2I3EKoagtFh8-nNhYn6nXEm-ItX2nZiWUdQYpkdfWZeSNCvcF-A", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107230004527202402942\">Chong Min Kiong</a>"] },
            { photoReference: "AWCwydg6vW3yKGTUtBLPxrVrTOFfj3vzZu5eXZpVhhjNpgWr8BriuXXpAH3CbojWxyp1LxdaWf3l89692cD0WqajaRaWNlhUEoVr5sobRcUe0MUChytKw9oNCS8qF1_iJdKbUNg2W5wFl8yKHwYVmd5A9DNZm4TIFNsHOUkn11IFqY9khifMHkLVyCsy_SbPP3xM-P7VAfvnX2W3pnILaBR4qo-fcYc0UZwD2NxP40F3U_uBNUb8_ysnFIywsMjf6-0Rl48WAPVa1DXIy7VF4d5H_v3VXU0zOgiPxvdeZTddU-cbpG0_rWt77kYWHeA3wK8UckS97mtbVb30VpTY4c0uxwI7UdlABHfxkWNeNYeMbYZX-tjbeeJkXCk5DaHGuMwg0_7N08SLbo3Vwlyqz3vZe0MfDOXt09lQAIFjBe3DBpwYc2eI1hJGw4zwTDsySA", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105788896873875268504\">Julian Chow</a>"] },
            { photoReference: "AWCwydg-moiijdtVI-Qtb_Cj9A4FCkMVbL164lJseZyWdKFxD4bqDEL0LZFgGjqTih_nsabg9qZey2Q76j_Lda71AWTDnnA4HJijpND0pbgkc213J4PL1QxwmCMeRAmMZBjlgqIfl7s7_6O_I3UipYkzM2G1KPl9ohwMBcgDlolD13cAQt2MzU2CDggues8CoK9DIk0eYX0ezV4DhSAWf7l-vpLdVuyuQufmLtJM6quSD751AVkYjwvx_JXxKMZc0LinGIgpbqN9ZLjzeLAswzs0B0pdGM9oq_dhq3kHIzrhKNNSdHt29YZhtD7KwX6aXmGL_pYi-QunEFJGCCksftoGSh_y6sVv36x_540A4SeTU3PUHEH5GQTCU8CUL6eE3VmBgSLRNBnSwMJXtW5xSbXyyZvg8vRogGIJZAiJAl9NlbmUkvrP71ZCkOZYVJfIJCQX", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108811680481566014519\">Ken Fong</a>"] }
        ],
        summary: "푸짐한 크기와 뛰어난 맛을 자랑하는 광둥식 딤섬 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["압도적인 크기의 딤섬", "정통 광둥식 스타일", "신선한 식재료"],
        tips: ["매장이 넓어 쾌적한 식사가 가능합니다", "음식이 빠르게 제공됩니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "딤섬", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:00; 화요일: 오전 7:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12399337270500832292", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4+WK+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "뉴 WK 다이닝 수리아 사바 지점": {
        photos: [],
        placeId: "ChIJCRdz-AlpOzIRAMILLDNdFmA",
        placePhotos: [
            { photoReference: "AWCwydgk1SRch7I_0kaSFvDwjsSMLGvC5-ciQ_XnSZ1w9mTU_P59ca1EXntge_S3fy9VBw9UUtEPvYZkXCUJxPBXRtza-eT4L_Csr-3zqmcO-jjNcwvtZe_PvEew5aHDRfjmj41dGOjMkOA2eq0rXSB28L9cXhAudVAw3eiq0VIbIJQobkWDjl_uVnw_rT7O0TXmeRz0K1nrfumM6pfVp_-pJ4f-O5EZNIkfplyD-yKDXDW_5QC9jCgZfldXwtMDosLryWrtOAKUBEsP2IP6n9WmcVQeSewaFRHLe518_F0A3sW6EgUC1bzF1cqJcEKx_adCAjrFBbr9Hu_Ghu9VUFMOMQbK-U5Jd279b0YO5yKzf79Gr420ZLdMXTaWip33ooDA5bl8pcvinOfDow7vn3yZ0wMDc0g7QyzLf_XNqj60q2k", width: 1080, height: 715, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101714065580907678044\">New WK Dining Suria Sabah Branch</a>"] },
            { photoReference: "AWCwydjTXorqUQxb8ZuPbj1mL3yEzZ9DXSoDJqgU9JzV6eELKxDf2ku6Tg7HxOjIy-qC4zrqlBgUH8SDB71abgc4LZA60gd5-_1U80sJ7WQCO7pugYHg4uktj-mBjeuKahJCYPYmuTeWocOwN10Oga8tz8CIUbolE4ZCez9jBDXGWrZYhLu1p_TDvgYHWTjwduH4UK2HcX5zoatBXO8FHxxnIHdz-adEJ8OUPT3gtkoE5ZDfthdp6zpim_esLlHM0igNYXlUrFTfGnM8K2_XII4Iu1YakiMHpulbpnanmPy8qMUKEVlVjArns-2PbxCn3v2FxyhjTfKrfSpL9grN6mFl2rzARb4Ja1vyjAt6xMK4fi4aztXQ7vjMMSL2LCdSj8ztFMH9d9mRZWuiQeCdW1DXE6KU7b6rqIBUx2OjUngSrviOi-rq", width: 1080, height: 715, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101714065580907678044\">New WK Dining Suria Sabah Branch</a>"] },
            { photoReference: "AWCwydjIrhJHNcykBcP-TC9ESUBNgbrqgmMEq3-Knf--hROIjZA5rKwBEpQoK5GRp-eDQriOCqL8fhpgcpapz3_4dsMQOY6D3atikrli2o9FWVLK75PxcDg1zg2CZIi2iLhDCrCSJ4_B9tLFQij4QHr1tg230sWihJHAJJaKNb-e4D2zc-rJNrDlfLPC7McpJJlyeZHSbvbOkeQaPirc3ui0OosUP2BJAe7uPD_oRaF1okQQCzqOZqd-WjPgC2dwOq2K03mDHitiITtKwZU1uefpuGWvYJBIT17gKneOW5O115nW09z3m4gReaRPIlC8HlSlL7n9NbjuoApg0-9Ub-D7d_UiiW8SKoQmWv8OC2xfxIZjzYwWxLG7HHAbS5SYoLsscfs0rTShSK6PEx_xlDlZe3ae3GuKfv15dgiUt7KtlnLVrVBUOCwLrG9PdPUolH2z", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112273682013093819959\">Tom</a>"] },
            { photoReference: "AWCwydg-2-9xaUmmfJ7Xsb9oTkACv3qydWs7Z5evmPxHIql4pvKb6An6YmcQoCDJoQ0iGRQNLQUGjnC3WtdiowiYgQm9AtoXJuewOgrVfsN5EWPOxj004tq8jokFUqaKuxKUZRkKmzIOCnCZLPh98KHjqUPdOR9gnbBaCNvjQaVXOHO6pgFGdl9h2dcyd0c1y-3n50lsHL4v0U20O0fBAPVijOLjL2zagoohFpK73_wGGdhIKql2y_0wv8QwFT7bkxktxZ5yPasz0ucrSJQqzk7iwwFtn3dAsZ9cLtkQnGBAITJeE0FiKTcnwGnrfZHFLS9DOocH8dUtV6Yt3dqaDbmrHKDYTFwANqtV7fI6pxa_oKJNuc-o5eyHSr2IWnjv_qSOWFnOfoV2bzmb_60bk4rvJiCOLI0l8SbRLos3FswmiUUPPQ", width: 1080, height: 609, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101714065580907678044\">New WK Dining Suria Sabah Branch</a>"] },
            { photoReference: "AWCwydjEkF3OMBERBFuE_4AUITzyvtOwQMNetYvSS8RQdZBRt-CK28-MsF8Z39uuitNTk0k3MkkZpLRL_ea7oVU41oZzdHTFgRLoQrKFYeLvMq8MohhYQZfNBgSEIN9-HiC94-3z62NL_V8KvA-Ns-_8qkNJAGs2tFIJ_x9N39SCxs3S-ULzpk6PRdnqFhmdHOh_qqDeuitLADXcEKoFhX9gJyKI9HHB1b1wjxkTDffrh-3yMF5qM3hJiIJkJcOXYurOSdB7fJ2n1d3G0l3ytl8c2xOFiQh6HFSFVeOKuewGggoC-eFiDaM_fiItLLfJKGO3EM2iHoR9MHcfgUuIRXb2onMNgEeoEW_vEACvLi6TvlWEkY9yYoJFDlVX5NOVvQ2VrJRzUonAUK7mvayZzr4gLceALCh3iBrMbE-mMdPZubP81vw6GNP9VwZPVrWwHrwM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112370351025397935442\">Meghiya C</a>"] }
        ],
        summary: "현지인과 여행객 모두에게 사랑받는 코타키나발루의 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 볶음밥", "친절한 직원 서비스"],
        tips: ["볶음밥을 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6923823951492399616", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4+WK+%EB%8B%A4%EC%9D%B4%EB%8B%9D+%EC%88%98%EB%A6%AC%EC%95%84+%EC%82%AC%EB%B0%94+%EC%A7%80%EC%A0%90+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다이너스티 차이니즈 레스토랑": {
        photos: [],
        placeId: "ChIJLa6C1o9pOzIR4cZppBDmyEc",
        placePhotos: [
            { photoReference: "AWCwydh1ZY926ekdNLZn3h_eDDESJcrioIBTxi7tZtA30bzpM3Zy3UWnS5IBATfy50k7LkKfaHdSn0n-i6nofTq3gGpp0s-H1iXmWtfAVLQCNspsXrkN6ZNtx-QEw5x9Fd2216e75eB_4yYzheOPIZAxAXgtiCyRUL26UrHYOacEJr3kaMC7_m9VZ9ajfIq8qmmoBfL6CpxyZEn5khHtGKtcBdfpqOWM9WnEcwpr5UwvcG191L3Zm6CL9AD2W4_ZYRDejyLArqHBIC5uCTyTZqlvGOeYtNN_tMVHrdVGA5_SQZMiz9hXN6-D8LZ5I4ITNCnZDiZoBpmr5_0MoEv5FP8q7M0OL9yayxShOfg_MaX0S2AJ10vm5P3zKTY1SQoDvrz0Qo7_xuSz50rBSheS0NElyh6VSy6XwTO9JSI18497vbcxBbA", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111645097781293977753\">Carson Tan</a>"] },
            { photoReference: "AWCwydiCd6O4101feuky9kKZOeiHuhnY1gezFKLjihBWc9-SssKF0vdJBAzmIhLVD17y5z3Y-LWxbKL46B8cnpY3Fw24Psi84ETPYwQjRDSNhNrIjla2YWYjDYoiyA4TgRM_wGENh3mMWrt4HN1Uzmx6Hvu0jMH7aXhdUGm8i24YEDHORR4yWDUnWDgXIBeLZ39VLP01Xywiz6Hu3l3SIfQgzlS3Tuf8jWA3JCZ3FJbTq534JqsooqcjSc68ZQEFAfsRcB8627IUDGRh48JzMwhBR_zaCy3mLrjDn16W7gEMofTM5KLAQGhFldelaoirwl1SlW1a7C7AAVANAMOojANmwoUFkbRKQX_E4amFvN5IoxiAbORdQoms_Xpkc-y2MnweizKNVyEBxG4xyzrzM0TvJt428SFK6FyE1pTrONXEXyjWuRTbRr3V-SxbNX3K3UkW", width: 2700, height: 2870, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103376598682027416452\">TLLIM</a>"] },
            { photoReference: "AWCwydjNGTbc0MNOaab6gydkSsYOmbO-z1Mtj0Qt1hnms6cohp2AFb_TNygZDhwG0g7eB639NBJFXkf9LYRcQ2IylOjdkoibEcTtv9PSySr3mWC2_Gk0f7md5zxgUrSamlTiP6GxyZOk16XxU0fMuqMv8UxOj9AstHArKInxxdToJraJlWyvyAjmzqhSfFgZI0LykvNm6pcNJbgqmvRcEBLdb0lnV1oEzR32PLTE9iJuf4pAUOcXvF8wIdqW9V8AkrNKSaJivIJyIiiB0FmsNXKxRFISavWRlaXsKvIICgTrbX4pQUAOHJma5oNbD-_q4rhW8Hbv9UV03CsdaAr8nl4TUUyNdxSRzMFoGJ5AkH64u46tQxmCyQsJNGVKjHxJ8VuU-TI01A8X4QdFGZ-qh1cmTbffpG9NTtnVsd364ur9a2vN1A", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100916688796250885157\">김수한무</a>"] },
            { photoReference: "AWCwydgzxyddrjk34NmaxrlnlHkGQN8OwQEbrPcZewknQUvitIwaqINWdgpMmP-Te8rBcIiB_YgQQq_Qf6efd1kGuaW-VQhAcISpbBHHtcKyM4nVYfbU3fMj8KIASoZONt0QpeMapeakecMPWNrb8lh73GkP2rkJgbDlhJTBREMBpllWZHR7ksY4NN4a1He4U8qETgVyw60FoqsMBdsD6KJpFLnzS1qf_DD2FAOEP_uPMpn9WNkB5ChKKqNboAu9aM38bRQ2luPUBVE9-mlUwNIvbJt5bUWm1hOfSA85E8xDZfFdrxWdEh6xAT6j3-jEkdBHJTqDSazWcX3SIsKVs2KNYyn106RWQv2-DEH01WBL9nPV-QQih1Z57R_M026WJ2Q1ShavRtJ63eauE-20GUy_KD3mWMpSnxDSstCVlnbE4nTy0Hk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111474235962732590788\">Atikah Baslan</a>"] },
            { photoReference: "AWCwydjRkw-nJc_URxTom7DhsdrUewUZnZiw10Y3r1uinl8ujyBShpcyxVm69z4pMlQRX9K3bQhgznoHUssB8OdEy7Bj_7otC-yRTnbBSX98yEmTRR9zzExzYMR6hnvlbsJXkeFDeWpkGCKVcBd3_lIpdgAM8ln5MVFjwV49CWhvzPOD2xnm4TjoIgImFV6W1Cdw8S8ybAgQiLWzR-PddGd6pVPz--X5lAqiXOxyfw_tV-B5G3YmBN878AlQxjzNy3hMVre1jTNI8qUsKFvC23VbVUKTwLeV4r1w9P_atslrjSTdbfU3g1VE-XF94Oo1BeSv_hvMnipNdXPWsRElA2QAcUxHBYQMoysglBya9oG4k6ug9uHIhtzpQhCIcyHa3N71KeaeCGX2xAfla4MKE6alHYZHcOfAKCLYrJUaBVNkXHiUEC-NU8iWc7QohNsdC7uh", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103376598682027416452\">TLLIM</a>"] }
        ],
        summary: "맛과 품질이 훌륭하고 직원들이 친절한 고품질 중식 레스토랑입니다.",
        updatedAt: "2026-08-14",
        highlights: ["딤섬 6종류와 차 세트", "바삭한 닭구이", "새우젓 국수", "생선 필레"],
        tips: ["닭구이와 생선 필레를 추천합니다", "에어컨 시설이 잘 갖춰져 있어 쾌적합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 2:30, 오후 6:00~9:30; 화요일: 오전 9:00 ~ 오후 2:30, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.promenade.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5172637131187275489", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EB%84%88%EC%8A%A4%ED%8B%B0+%EC%B0%A8%EC%9D%B4%EB%8B%88%EC%A6%88+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
