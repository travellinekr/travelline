import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "라자 사테 마나도": {
        photos: ["/images/manado/info/restaurants/raja-sate-manado.jpg"],
        placeId: "ChIJQy8-NBd1hzIRKo4_7aV6BEo",
        placePhotos: [
            { photoReference: "AWCwydhTX1p73vuV03VqAZK_gCFXkY39HAHXa-U9hMhul2EkGhjLpxzZUyAM0mm1FuwkAf9KzXGbl853oFZMI-SiOheuLxfPfsgFjLUMo-mQnt5cvkwRGeaW_yPmgoi_mjI-NSu2tbeLLt1DTj3rQYHt_oG6MrzU2GCZcULAsGGL14YgbONjuDytmYwLEUX7lxBldOq4EDrhXz774yxfyDbnXM_KQoxQpHHiO6aW1Hx_UGMEfiT0i1mvl0VOc4AC3ElEUqkjvcmnmuA-ZPiqnyMSQ22tIDRH9NgCZo1kuLW2dHywXVNKPKU78jyFnMc7s37qVBpsrcWz2aysiS1ebY08ZLhuWw9GI6VEEEukk6-mR7guXB17qfYz2lmfjGMos3I0Z9v9PWSLomULmMB6uBLemJJM5a9HhjAKP8Y2rsI1sWc", width: 687, height: 515, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103131096268153687063\">Raja Sate BBQ &amp; Asian Restaurant</a>"] },
            { photoReference: "AWCwydgSDqrxFor2dVnQD4eiyeEuqN0cctULQNnCUpKWVDVBgq21ZPzGIBS4r9bXriVc8NQmrfVLjaSMSdj-i7wMThZGgcgAK-bSVz9oSnEYbO8F01b07dt-PMay1CSuv7Lg3mZPP-9j937Oul9l0AdBHlgLRSx_eLWBxPlQ0m8MyGNKa-XMYFc4ReLSp8qTCPTq71rIwrzYTog_fvy8K_2u1Xg6AbS0cUCJbNoJboZEVUpfbByGM5uCeomjVOO212Vb_EWWoPcxQtD1AxF3vL5LqP9j81c19C4ClcOMJ48YncucfWCGU-KwCGuiYdIw1y3COsoemTymYkqFBUcujSeubq-AwSbufFZdiErbjuXKvlV7kZcpe_Zix-Bflz05YNR9FmsY2Ylx47OgBbYKn6nPFKwIzaB8DXYUlLPGBtfjkZ0", width: 1032, height: 581, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103131096268153687063\">Raja Sate BBQ &amp; Asian Restaurant</a>"] },
            { photoReference: "AWCwydhbzJNJEOqzsWUVtFv1sJKFejkPTDihnxwlUAGjarf_dGJ1VFQFJkY4j3cL_ce6BPkRmwBEYWBFUHTcUNAuybgknYmArZJp3YR4behexCycUc1vNzoy4_nElqHQHppB_wK7Eh1x2sfghE5jGQpGIXyM9tTPzLDqiE0sYfZMeCV7QwptOplAkKfLYHasicVZSUMFWddP3WTvDIMjbKsabLrbiu02aNsybeJfR2LKRoiJBajUFTrBnaJQjQZ51InHqQvjaHUMeM3hIo9gOI3MTYmkKt-JgtTaIYYR1IPGzyYc9GpDk0pXL3-dubxvVHTfm8IG5JD9DVV-M0sD9XBYu8CimWaHNHIkF3KD6IDBF_Rj-6dJokzSag7L9TNMd7SsJz-a45rAoaTMmI2j8GzYy3W3UdqGHr2OV0Rjmp6uEY-y1-8oXtG4_e9WzIA41Vvn", width: 960, height: 1082, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydguxF_14Id1V2l4Y2vtr6TGGaG3FXV7QZoOE3LUBHCc5Y1L02uqhkMSv62ndbE0j7amN2qvqanrIAKVdQG7zW0odpsKDPrxBfYWa6r1MV7WbqjwxLXwv3PxnCwUqLtHSBx0MdxQ-ogQdrki-aD-24EbF1NeObFOl_bgL3HCqRcpjCZp2isoLGAeoG1ibigHr7FYin11b8libKpPWJZrqJ1Gfz3grQvDB0YBB49IzdqyOlutkmd0-fLSl7nMP8ZopCPucRwvcBiI0LFEeQNXUpy_FNqhdg_ZWTrSvzQULg1QMr92W0LjAzplYQwqYz3efiETCz3aiejPXTNEuMnl5gfySMjvfbMWrF4CJ2BBTFALAYxloGInOkhAEC6AmuslJmiX9vH-3sKrtKECVsPXC_qkQ542m7vUkaN74sZrvj34eqjQ68U0QW8z4AdS0w", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107142265199464179026\">agus hermanto</a>"] },
            { photoReference: "AWCwydj6yS0ptDRr9rEJE2dxfXhCef068iWywvGsNgnclDGJV9-ckz5Pg3tlQD6-o5cdmfUQ1U53MjkSbdofl71vl3FGCrkU3rzvuRC5pcUjhECmr3FulSSWOucmslgeO5zD6UNujDEAgoj29x_LwbCMA-4fW-B4TnzdXvwoxFJ8TTdI2W8kSBWkp-OFstgMtL_S4Wi9z9gvr2Sqew5Oo45r4490bprZVDeBOHdesFEtN6SJcfrMGQ-PseYs_Kvrw_kAud7YCnx9SI6iqPwxmQmgyYjMSpo-6hXfhxhGigZQ0aAGtUJzgU2xHjIDnto9MfROiNifQpX9-Lci9QiIrRRnybMJ-1EqtBJmk4YjeoIp2_6TU9cr6Ri7X1Uop0m1GgBPI3__445hiCEEicZmO5uD-OglpSpqq5aTxeo_9j1T10DsXJo1a4i_TWjcQAmOOfOO", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112528013820353432865\">Remon Klok</a>"] }
        ],
        summary: "사테와 다양한 그릴 메뉴를 전문으로 하는 아시안 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 사테 및 BBQ 메뉴", "다양한 아시아식 요리"],
        tips: ["그릴 메뉴 주문 시 소스를 취향에 맞게 요청해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "사테·그릴 메뉴", items: [{ name: "대표 메뉴", price: "Rp30k~150k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5333522711782067754", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9E%90+%EC%82%AC%ED%85%8C+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "시티 엑스트라 씨푸드": {
        photos: ["/images/manado/info/restaurants/city-extra-seafood-manado.jpg"],
        placeId: "ChIJ3VgmkZ0KhzIRIuObdRfuvbE",
        placePhotos: [
            { photoReference: "AWCwydjVRXbr7igaYP1S4JaC9XOmmwRQP_5aVgDdgj2ubdYH_LzQWIpheF5B_EhIntRf89xbXLfy0ho149mtOzOjoip0BdRtPakx_r45ZeNq0gmfejr7_9ep-FKKWVttFvPEvZY1D2d2wRCAzoc4W-1JeZlDMkyN0nAiDC7luWygftM1YhPfVuqfF7vBDqwOPNuLV-wb65tHWpTvHZwySTmAdnPiXnOurAZJrTc3EopnqgOcRtZ7ZAkXMYkDhVKnLF92BnotjV-3SCtY2y8j5V3QvMSFmTujWXxmKXvI1uPnmoGqbLbao6Ib2Z-PQzCzyI-KKAFogucFeAW9sqttkR-mAoXfr9bgK6zs2ogRGiUKpp4znoRq-YM0yzlwM8JYU17rDNOeXEeVxAkRzaCnI8qS_rfQ3rfCqPMt5gao-_O_FlcQUD2kSp220OKRDa7zFaAJ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117523727105099040758\">懶貓</a>"] },
            { photoReference: "AWCwydgDeYinob9vge3eKKI6xxjGkaoeeQeXPhKEE8b_qsAL6VZk5i9O-8vRUVXGqF6pKc4AgEJXZPxNwgOP8I-5-HD1htBrDXYqQGzW3Vhu9zKccTNJWL49ms00EmcBkAYhcVl2xo4RuHNZaGQQts50ne4_LhfB4_dCJrz_MpJDngS-ggSQ9KrdsjYWoWtkc-fJ0JZ2_-0QXQcbu1xinLxUsLLINp9K3UCBLPP8FrJ-QTRIq3CP9APyYhm8_pw5i7OmM5MDDnbEA1nmg09a2N3NITrfIuccVj-5Rs1j9bM9LBp7ioHxPpraqKM0BvQyFnKGqgf_7i8ZSFmvXoEiR1bu5JC0pZFA4xf-_1ZUvQTkqgHmx8zvPw42a_U7KDrlwAzy6sOR0WBV-QxrFENIGmZLofp4LK4ofz_VXiPB4JStY_nJv8QW", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114077198167780222372\">City Extra</a>"] },
            { photoReference: "AWCwydgMdnfwv0jgqkEYv5pDmaKo28Ot5io73Ra5Ox3Dm_iQKLY7SZg2UWfHkMxwxtH_1FZwivvjr2ytvlEsoSLECAsREyWW2IZW-UdYZk79F_qqfUtqH6hmiJYg9LfhDPzInlu79nAWz5hJt3V5CWpoCBdNFOvZF1kMPQ1h36AYvaOVhg03d80_1uLYLMYBDEt6ZRQhFrj8qWePEFbgX378OGd7GYPMC8cx4t6gVtSllW9OoTENhQa1OhSS9OyGEBaaVMNL1op79sP62Zhn2aPxXOrcKQDYuEfj0UyJ6rJfFFJnGPOsWpvOXMA25ZfgQU_V4F84FtHIyM6gmGMduHE9xqn7RlxGtAknjk9SUee1ydz3a73YiXOm-tuj4KMS5nJYy2Q9nwaQFx6af9qbzqhptNBMKfAw-gu6j3ttMBhrbraU97qyzzaS8z29aGPYUN8G", width: 960, height: 1075, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydg28giYlpf8ufPh0qV1kgE6mvdCsSuDZplTZBz3MfYK_5G0BrG7Zg1Vw8leSr8BiPeguCJH3MD0Kbjc2lyDObpBZeenjNsV1wv8GIFFwjGC5simheAHDZTpVuGL6dB6K2rufuAC1L88hC2z6aIL7RQ88j7ovWvG7M4OXaXSa04dfq3glNvVENqlutONA4i8IXvcAzX3--rDR6_QKVqAsWUjU8lGCmXliFFLwLBwvNuLU5YKNnzjc7_3skqObxAduJaqifxSR9lkLtrLQwu5drW92K2uao3ELcg0gW-g0x3QtvKnTcHTHf7uvtD0b9MtMgAY1AahmeeHatdeB-dvwaTBRB3EUuzvCZOYdv8xQcVHCen7h3I_WJ2b7UYiGUrruCv1wsUYOhB6POcTBKP5lrHk-rEoXQ_23rLbzzfE0dSFHlk4", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112557026172715961915\">Linda Yapira</a>"] },
            { photoReference: "AWCwydjZPywCM5c4kJwzeK6dOtSuzl8Y8aSrw_U9RkmnuyumhzzyGaETqY_92KdOgf7vetvnUdozDM_BUh6FJXNwIHzyk3He8WdBuGk9HNOFYKaa6YFW2ypR7Fxkf7MfjSWkZnI5NLmVMLbczDT9OO_aD8_vswiXec1VhF2olQRaC9tDsf5pwa-WQLw1RQnxR4R7KeGzMQVh0dbsGMotCXkKypallZmRbqNEUOE_HgLoFkaUNBhTzX4QZFCxC0VQdT3ExtwzJcVoqKNxlkcacz1Dpc9FPUl-OZckeXoprIKVwGOqXrSjs137tiRVR9TCBpU4dli4t7nLrtadq-y-W-ynTPOyJuZCryjS0NUNCmTi5RLxapDz7PdpY0Pl9dtP-GCjrU_Dwl_XALspxXuU-tJ9dWnIitTZawRNnWA2U9s5Pgw3Orc", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101215533760815230863\">Erry D.M</a>"] }
        ],
        summary: "아름다운 바다 전망과 함께 신선한 해산물을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["탁 트인 바다 전망", "신선한 해산물 요리"],
        tips: ["전망 좋은 자리를 위해 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "바다 전망 해산물", items: [{ name: "대표 메뉴", price: "Rp80k~300k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12807654699836367650", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0+%EC%97%91%EC%8A%A4%ED%8A%B8%EB%9D%BC+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "위사타 바하리 씨푸드": {
        photos: ["/images/manado/info/restaurants/wisata-bahari-seafood-restaurant-manado.jpg"],
        placeId: "ChIJ2coc8PB0hzIR_XoswVHfP9I",
        placePhotos: [
            { photoReference: "AWCwydgDAuYYXAPTVh7aO_yj3Ju9mcNybPfO8NT_OSVVpXKMnFifej9B6Z-B8Yu-LwzYxUEaCNhnch1QI_qxnEV3j8gBsLb2U-2xT9suDEbKXEwKlNDG-_LLjz8HI8kn-Am8qwB-4Fc_Dcyad0pg4tLr9epr6SNYi8VHfY0eGMPMqpSAZqNfKxiYV5VaH3Y75-5ig9nhi15FWtr_oTIiesL_7NzkRfG4lw9mMYwgYJvHkP1YS5wj-iUKe1PhdDgeadyiaK7lqFSyVrJgVhuK_m8h6AV6F-gK7pOe6s2jNKEGPlk-Hn0ycB3AkH8zPHXzJdws2EXc23BShCvqaEqDr3ScY9o6CfvvwD14yvYTSjNRbg5s6jpOp9y-_Ja-Kzm1N6kr3GhR6IIrwbUfQl1neYZODG22k_MWxQhOT-NGNbIq4rGxTg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118194902889772203601\">Edy Milala</a>"] },
            { photoReference: "AWCwydj6SQ6556aGxWp2OEFyslUByiRLiMKcw-QM3HWSkZ8JfiE9We4guUBM-rTvcTEwvD8PoRBeMGAUGJMlkN3NLIa0tpMmeN32yXWmXaPLUyMcDY68HRObY1fqewIia4cFThfQeyE4YfILh7wIG7Dn93Iwl92IF5HK4ALoGOaoilyOhpmGiUeydylY2N8HPe1fiHnImkXozbyi0zvHMxUyKOkVhBaq9ISm3MdJ_c_z4JwzGNDkaOJvjcRMpxVReWj_f-LK_wGkq60d4dpLDXrBHIOf6ZdjKzTMD0YxoD_buk8lQE6LTlOxee3iI23cMxzddka39Gvf8F-yvuuMpsoq2qMKvtg2L8pXSFwF8WPkwN88nNJGqtQ_VXLh3w0xerNCsiaM0FRt9b1xSOeOV_6iop3eWy59smYJRkdrqfyNFikWqqo0", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100747985962610948134\">cooltour lee</a>"] },
            { photoReference: "AWCwydguhAOm_7Q3Cl9DDFPWQC7H7wsFUNNkCqDRujhhrwlTKo6pvV8RypJSyGQldRn5MERdGAzc65SUB7ZXRgIOkV__fafMItt3OE2vG3O-HABDZIyCW3N9DzyUUWGav1KkRdMPLL93xDnDUnW33oUPpjUWJkErOjGNCeiKslHqaDw_lyc2mUaKVVYABHHgTBILELYhUYGexv9BByO_i2mcvOKe_dSMGe6jK9tUS0gLnBOcJxeCs_ZgjZwL_8pn5UU451el6HhFEC1b5FDjXFHKKBdRpe9rKAqUa60KPKK35XlDUGbfD1pYhIjDa4x4skQ2AmxV1gOp6BQl3ZjNm2dW0ymORMhUpqu0-302aV_dwtO2-v7NFmcxIoh9jZne0SNg7IsEA0aYaYVQxNIuHhlsPc7h69ONGWe_Gnr44vKfBu3pWPhTJwxeVPPQeDOvscd-", width: 960, height: 1070, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydj-vnSeo7zZHwTIf97tc-jCFp_GhOZ-TGWxvss0mqf1Q6bVX_uL1PU_KbHQ4gaSMCx8XE4giHI6Xw4SpYKIvIau7DKVKXN9DC1AdcE1KIBQ7j5Ja2IifqxI1TsHpWMJIdLH2_26Tbdro4h66cBf4WrpeRYlhCHp7_esdnXo6GcKxHAfhviUCw4_zR-zpBxW1WVzK5136uK2BQKUMY0cocpR528a3ywUAmKLL8AZem460lJ9nvQELl9xAz6F6aX68_06TiwH4gMwflw9ocd6MKOlTtosw5G2S58hP8_EaWlMI0F-Qbxt6zc9DXPEoM4xCtbUUYe52TDHJJysNwk9YcEBiGWpyFHey2X6h702D2LnGb62QNpLqrVYqpzaHMwRR14EiyDSyLDVhT7tTmE1pqBEQJLsDHQm67vnz836F-sUea709BpF713vwh3Y8Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116545021150683934634\">Lucy Eni</a>"] },
            { photoReference: "AWCwydiH0lQ1q6P2U0gPD9bvE2yyypU-0akDw-zd5i7Pd4vsm59IkLtQ0_JMlWISgJX8AQUKT7u1ICrnutdKVZQxoBlgdk1LQXpVTdLHPLOWt85lfQp35a32dEex-LZvvKZ36uy7CoTfM3jHGmb9HmitBe1xDUy1du4H2wx_lR5fO2n9ItiU_emtCBXwGxzVOufgUlIAm9fOuzAHAj8BqNXyG7jNIi_z8CLHl9AE24dXZVCnb1t6JPD79HIXM0qlig35DZgGMvRGw5Ceu4ATtwC7MVdDVUwEP004QbJiP8suVdCpbP551frvsaz41d1Ud_NqiY8DZgam1X99hLur6k83vOSHN-A9_EuQgIObnWdEUs7K_YIRlBQtF0TXOHc-hcsvdAU-nF-T--U5dxEOSx5U87fBWQARFz-bzIJzd0SsnyYi8BPYXhAgcwlcNMYvuMFg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110641163490009368965\">Anastasia Rintak</a>"] }
        ],
        summary: "신선한 생선구이와 다양한 해산물 요리를 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 신선한 해산물 요리", "직접 구운 생선구이 전문"],
        tips: ["해산물의 신선도를 확인하고 주문하세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "생선구이·해산물 요리", items: [{ name: "대표 메뉴", price: "Rp80k~300k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15150073213723900669", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%84%EC%82%AC%ED%83%80+%EB%B0%94%ED%95%98%EB%A6%AC+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "그린 가든 레스토랑 마나도": {
        photos: ["/images/manado/info/restaurants/rm-green-garden-manado.jpg"],
        placeId: "ChIJDaF2OhR1hzIR-fbm9-w3qq0",
        placePhotos: [
            { photoReference: "AWCwydiyGvuZHKOE0GOZP-2HSm5t5b9VFH9bgnc-sLYjxMPi4XnsnELf8DY41BjmZTCFB3B9czkuTeEwvImBd0BokwB5cFKPGIEiXZAzT2attIs891-qep7sbjU_6daiPgxUnNzis-WQnCSnR-sjsC2R9yqdqKpDx00rL5kNEmMFKuzT4qoQPqybQIRX_GxSvx0zVsyvmGwDjEV-GRQFvFEMBqSEU9Px8axLMhg1-uUjTuccYYeWdicIcrKLkz-uyTka5SpJg9RAcgO8vMfvKL1IvIrf3YslOFrcuw3qOWs8nxQmWzvMzZcIJ5ALEeNUf62GvboksZ-BiBy00ledEQjW-y8mtEOW3EdlHvkK05wE1sVJhR2xFGEjEp8c97wWEDbXEjzXNM-1cZDVSf3NAcx5p6PWICpC3mJ1JKNeI3n5vOUIWA", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109458979838244959566\">RM Green Garden Manado</a>"] },
            { photoReference: "AWCwydjQTmofpj8h_x5cMEI3SOr6S83EPigWxqJERMJB2GzqI4HdRnSKkIhwBUFERQYM5wayAqWE0t3F3uRRwQeC4Jnzk__7CRd0IV20fPfCVU2avyoJjBQys2UJB6u1WeVdogwj-dbtz5Tfn_58QbsaIeEzT9muZTGj2mBnKstjmWOjx9V7YzYZwYdWnEdBVKuBz0YwtPM7Z0Du3urrr4GGWHlcwd6ktAWFwv3VmISLgdwuvWqmz5ZtCjU5vms74pMhac8JS-a4namtUq59L3eSXYAnImJfhOV4s5G0W_tlz_gCy1qxZwXAq5_M7HDWpyebzSD5sOmQ0PNag7i7P6LQYw0E4lTAJEu2diCoA7HHdlUzl0ZTM_dX7e-qC1_GyPuO2X2nUmAqHTEuJdw2WH9vb2F8SVsJxF471poKZHxlr6JSNM8ufxeBzWTfAAKRApHG", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108839720653357983606\">Thomas Hsieh</a>"] },
            { photoReference: "AWCwydiByetWRUYSobTLfLKiGwmTdMZ31L6q8GGw1gRgsU09eYqTliq95bLVJQzEIE0rgCFQWONwCLkOIIgDwxnFC7cTq2-gTBAWx0-eD_GYOqw_-r8Lu8_sfctb7_GLpePnmSxCtZjw6vu8SbUFdlyLAPOp3YFQVnd_0eB5TPPgisk-zud3bC0N7L1ZAlwSaktcTjRSbN2j6WNNJtY0tukZ-gUhOy7aYz-Kj3akFKcBH1eoiizvIV1NsuYgi9iRok6LGUVhlJd2-yufV-7Xrzd__Pl_SAqb25VAKLkLVce4xMae9CAzoH7Z1LAi7xMuBMEm4EZonAuTxVfNzLwKfNg7SpSlXv9tZEF2Y8gRzbCxei8-47KzBZ38K0tLd6yz12GMtj_EuFF3D89hqcKACKkyuFpKG5TCdiM8oXc0bNk7W4OtTg", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109458979838244959566\">RM Green Garden Manado</a>"] },
            { photoReference: "AWCwydgmnyD0pIH7CYx3HJuGI2vjWCDuOs3Kys9tu2eAYuqHQQ15-nbQVhDLow9Ag-LQRSHd16kkAxVjfZ3C1_82AD6Lr-wBfh4bhavAmwGwBb8UQruWVZMGoz5HvwSVHtL5YAM8WBbrt5dkMoh85IExGh6AZDVHmxSpsZSsnHfw1oj_LguTboo7x5mM7BbNodIbq3Prf5-LwkskA2heAuInREb_OpgBd2vLaBqzW6ttYBUgc3ani1JxnpbjRvILjfmQ2_r6eh_u9q3OmtkbmQ8hODhNkHya3MWFV3dmkI31RG5xmZygUcujX4oHofn67qI3oAoebY5_JCxaYgNhJ_qU2SHZPx1lPMzRjnvQNXr_BU5XEgAhFKQx3OwU5wjJXxvyG2KUqaVpl1065BQ6H594DJWBCw2NJqGlR78lHFv_MgiX6ORmpYvnSsO4lkjLWw", width: 960, height: 1101, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydh_fzGTYG6NV70fRoRJCA878o4XdGJwsAGBCNdx6_5uKWVzBV4IavO_UNj3pJJhqO0hoL3u0qzMLLqpTnSc2vH5H41fTxPtW9mQSazmqOTweEpDF9X4lz2atnykFtoXYoSlUqOoaWcAtzl8lsTPKJSodJ08ZvSHctkA03082Gg3n7UQ8qiz5OwqpkvKaH6x96dzUSOiteywBBh7QU2LgF61CTvXDD4LoGvBPeJ9-kO4igHK-N7sQR4iuui-lPrdCA_6Spydfsp2XhclE7FaqRu1R9t5zdF0N7Kbo4KvFfVqBAF0rYVc39VKLx_j0LG9oBkFEoXbjl9Xj9wkbinLygkwXlZUCca95NHn6ghqzMndFcqmvlZNf-bodmRbmEcq9nz7wPUyiHww7lnJi05_09L2kbJeVI18Z7ZdwWcv4GtWRYLTAXSSW3Grfa-l11kr", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108839720653357983606\">Thomas Hsieh</a>"] }
        ],
        summary: "마나도 현지식과 맛있는 해산물을 경험할 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 마나도 현지식 메뉴", "다양한 해산물 요리"],
        tips: ["현지 특유의 향신료를 좋아한다면 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "현지식·해산물", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12513876005513262841", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%B0+%EA%B0%80%EB%93%A0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "다부다부 레몽": {
        photos: ["/images/manado/info/restaurants/dabu-dabu-lemong-manado.jpg"],
        placeId: "ChIJzQ-vRuafhzIRatQMu9kprv0",
        placePhotos: [
            { photoReference: "AWCwydinzramYNqp8kznl4VYRNAhlnbc_ZXpIzdIrPm-OrZ_evr2VrphaB_o3xryrPCR4_7S1T3C5AeluJIVKxu109Z0fFvfqfnLNUR4MrSf_pEJDg2_1y47KHx5iAWC5d1pu4cE6Oqzdv1TZ5BIJw6KAw89QYzXL5986Fh37lORLdTUOGJIgNQ1H7xiyE34RzsZstk1__Gl24JSeUbSqjQyMS6ADt1vLs-H6lWoC1-QmYD7tddG1nsHDjktYm1bP7DfKMS2iW9sN7procfNF1br_8Sclv5x6xBNxCLuhx7LI2BnzlL9Fim6cFkXsXOvV9e0asz_R8-CqNKYdG4dg91GOkjbRPTetl9-9_1kdnoHybe755y3zJBAJcqAQWwUuK4BeQPBA544p-P9oWVnNjtMFrdRJwPjBlqZYY2l6hgGyAcVmQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104255439784803379584\">salma siti</a>"] },
            { photoReference: "AWCwydgzpqLzh-e30HtHYW5hUqtPrLp6vrSoQ0-LJJ5J2mNr-EipnhmaFW0r2RzsMzjDIofJhU3jYvqB_p37YDUyY1hze0QUi7raQU55Y5Igb1WH8xK6bM5pPIYdnxVUTQP1cmCy0lrjWV7_De7YwmEH0fs14h9m8LnKKj_Bsmq0pV1SHsEvPSSHaTkh_2gMnO8UCeeKtVGKsNd9REohAeH_UvHFjNNIfivTzLWNpNE2mIzUC6-FnmI2JWAuxkAtwdd5btFgqS-ZajyvVGbBX4R8fkjgan097Ft7HSGBo7mjx-fmxpVAyoIqz--2aYqweZJr58_-qjyNTYObWRu23A3OK4-J5bGscoyk6C3almSl6r3Q8PCd_LU8sTwBT0nS-yb7sc2JsAUETQ5tVwzgqX5u8pujzUOYafoYeRaBIPjPSX7fst4T", width: 3120, height: 2080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110983801389217604211\">Dabu Dabu Lemong | Ikan Bakar Khas Manado</a>"] },
            { photoReference: "AWCwydgiYSmkqH9xmKeEAj7asgzXrbej0smS7P_gRfO0kHai3DXzi45WbkqIg5DSmRU8W02GchVMSNGUYUJNPDEWPYEb_uH-IsORdKowZlswiKLJsqIaGD2QXH1n15j3aqbNUwdSIAFW6h0njWDmsQlDEQK-CH7frVs9tjY1s7d90yHKM39xt_2awGZVWoY2_WmPr5CY6zKdwTuohdyiuBEWr82ZFv76v00HQ4QKj7cJ_xR8eAl9FGoljNYIK6V6ldnZWV56rrIczWqnZlYvYKwU4_bRUdtZOViQIcMKwPcJHRrma9fQbtASc8VUKfyEkrmWkyRiTbdbcL-YsG1Ucq_mJRfIiS7Bx6KiQDPK-kVzx-A-3W3vHvSTCswxG6AP9o83qDG8JR6mwvAvf_KnTDcapR-KMdMAeJdGr7bwzwGSalGWykC6SOkXlsyQO2ZsdwHY", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106486379955202826003\">감별사</a>"] },
            { photoReference: "AWCwydjmHmkAE4fdbyNdQsblUr9m7CMe9Qoi5H3AtkL08jw2_XI3gqobP_KNe27vcPA9EvFCSWTt55dwVQKEJmE7aYUaFaxywybmp91LKF0c491Ek1k_M9JdsrFx58IFqU1DAmhq4XzVJYEeucT3OB9XEXEgMs21pAotGi7z4mT53TmHjkSpO1RiJdvXmE3phg-rPNYtosaUkgQftiBfhQPMRuveh-eKphrdYQCLGcwpElPyFe05CZKAmqzHPbfM6QK85468x4pu43qciwyEPVMAq5DlsPLVCLCYCrxInGrCk4BouA24asOIwaYvv1shLuqTxYbEIiCDd-766C8_nbAh0FWup0a3ymwG0Na-4Z7i3Ef8zeD6dYex7Ho7ih-w5EPbj5Wc55bzA1jXfI6NbcjaANlUAsdzXRMSydA4IUSL4OIpiO4_3fE4waG4PNTley3h", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114142229514550947442\">Setyawan Diponegoro</a>"] },
            { photoReference: "AWCwydinXDOt1384vh9tU3S0irEdJntj0aJznk3nydwa2MOHt31uU_3qSuCIq8Mbx4h23INnB0Y78xQ8HfJcu8jB_tBrF9KNuWuEAX319JAncq8f6p6VBgK2VZMTH20J1kCa-bW5lsn88paAoYwnm01XX5tg0cRQzkAT7IuZNn4jdOXxXC3SDCcRWFws9tKTcSdW7DqVFLzhAbaCOxaHU3-5RXw9WABT2jprIyO6JQ-009KPxsdxOaEQnpBNM2dCqeIiV-eO31YcHJKwuEVfrz4tlhVPnPicuR75GC909OmwJgHfM9aV0Jem80RGKG6EcZsC2XVyHwtxQrlC_o81oco3OF7DNR_C5Ryja6ga9CiveYDfIQad4IVjgokqTouhN483XIE9n2R4xWGL7lsHlw3IwfpPwEXYP4moUaVwZBxwTbBtDxT9DCJ5k1meDNiOjw", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100404569461527555105\">Tatian Ken</a>"] }
        ],
        summary: "매콤한 다부다부 소스를 곁들인 마나도 스타일의 생선 구이 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["특제 다부다부 소스의 매콤한 맛", "신선한 생선 요리"],
        tips: ["매운맛을 좋아하시는 분들께 강력 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "매콤한 다부다부 소스와 생선요리", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18279593952666244202", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%B6%80%EB%8B%A4%EB%B6%80+%EB%A0%88%EB%AA%BD+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "와케케 티누투안": {
        photos: ["/images/manado/info/restaurants/wakeke-tinutuan-manado.jpg"],
        placeId: "ChIJcwcLdRV1hzIRDjeq9FUzEU0",
        placePhotos: [
            { photoReference: "AWCwydjmYUsp3TaKAaK4iRfYngKDHJz0IJnWefrUJxmsqAR5NYRiJXou2RFEwhcbg00uxuMP6W1H5ZeSyFn31YtWJV0vUj3-zpppAGVS8fW3ka2D38T4zHdv8gdE9xEsOz_3W3fdxItVrWqBtYlzSPgfeoo1NKHta0en94sATd8qJ96yPp3Xg-YDER8JtVAZOD8IZZcfE2uOaDlvM5nIKts91x9n77Gf4axo8u2_uy7CYlRS03_H3UcSDxMAICoouPNcPTmylFcHH5JIV5Seqht3FFpUI3vjKGoS9UMJJDo9-Q2gwB2uUU47DBMJ97vykZ1RyxmmpfZeuAqqXTIyWM2MGCiiHJ2SDgQPnKFs--X1YAc7dq7qFTvnIo_wQIF1Ic0PuU00MFaMlQQC8aWLWbUG97z2EkhoeuMszRo_MDBIHq-KBbxb", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109554163721834487526\">大仁偉</a>"] },
            { photoReference: "AWCwydgyZ107f8N7USUQpaeUD_NQr3EI5kl9s3Eh5eULnn8PuKLUv-UMxgmq5xnnTcwL9Ah2b47VbANsfymrU1y6iviK430JI5LCfqe-uQSddLrApHncvSrfVrU3U816VfWwb-zHWelWgG8YcTivECAU_K03gUZyKQiyvSEOW2dhQ_Vtjj9PwGfEMh8OmL0yAObRDywlBgVNwSe5uDAd2IGy83CYM4Jock5x_nz9_9-5ST01RnG9z3yyhbouxvb7r1g8zr1QHIDvcLLdU1KjewFaz_G5ItK2tBRyHRHbDY_9cOpkzW90INPtjuFzmZPiqTvm05O7CwGTQRgN6FKGW_SnPadXqLIzlno_fwtTAoG3PP8zYazV8-tQa-OQhv7LbncbjF4rR8ycn5oL5RHyQfDbfR2LRsJGTqjprdy-52axhg-lgbQyCsnoEtHYZKRncw", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111701438110127311884\">William Prayogo</a>"] },
            { photoReference: "AWCwydiv-Q3clfoUyMoq-ionep38phV2R3-PzlDoiyqrH1MR_zG8cy1853L1awV6UWlLdDwyCuKOUMbkN-AHEnIsc-MVA7KbCx17f7gR5jHlYQYbZy7syrtZvE8cBydiBowCDYF3Ome4-I_AsWXGDlMqnHKRI1_1rPOjQA5VSHWJIbMvKnbNMey2-2pYOVpfp9Fmpe9GXKOfPSzuShR5FJTSGsAAghaL1l0sNVIaqY2E1Hmi08YZuFTyvPjhPuJBKikr-Vsi-K_B56J5VMLiEn68V_CRc9bQNI-UGdQiCLwHib-LV56HSR0R_ieshms-S6HSWctFWmOvt-KzyvQy07RZfIpcsQD8dZgNsjJezXuLbxZDZPI0eL-u9w3s3l3wUEX_cUsYECR2kzXElH7h_55JlVTHPEiN7fn6mZKMyaPV38fojzTm", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111449316414843656670\">Dicky Zahkria Iman</a>"] },
            { photoReference: "AWCwydjhEq1QLY6eXjPkJNyTw7prICUOCcv7lp0QzLI1nMEz8WCBOQcR2dS9_omMYipL8Z8tp1J6IUy34f8q2A7i8yGBVF3ZEBSkF4jr12rApcOfUYPf9h85pBLhlnY9WYtyN6CA0xpHyA42Z2FjRQju4rBj5eUUeTGsVSNPirx6jrPpA0AV8MamwVjqUjNkFQ5vuj_nC7x0Jw8zvNo4gUtsEBQaLhNgE8yMaJWI70Bw4yd3i8vRi0MRKHTEn2qC1loRd7sj1fmDX-pkR-wu19pOFuRHl8Mxx4MUdr6QLAy0C7e8bH9W9WOfZZWdXMqyt2UiU6mb8WGZxqU6F6cpclLJ2rRx0gRyu0JhOPKFwrnHXgL5Lmijibm2ja-fCFA5ic3pu6QuWra3i1eas-uUQenEL9Xla75mHpOi-HgmhtUVdlypekT7TNfsvp-5b_kt0yuf", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111701438110127311884\">William Prayogo</a>"] },
            { photoReference: "AWCwydjEVv9vCd7lG7rva4ENKw5RtAWAvr8gaiRLhdSk2iPgP7N13KFC0w2cqGXLXAxVuIi07i1qFg6Ilvi3ir8mH1O-MiF-BO8ZIye3w4AfTrad6IVIdIBWIXuchRezOnvH6VVrU0emVlI3FePjPGQbOA0THba17rMjD96EC-TVgqblmc3VAcHlXtgpjEldfltncTotus7bVzvG9lH94VqtQSZe9RTcai9q8tUr-ThCVTStVGVCP8L40fG89RptxC4jeUGQ3q9t2xVIAYra6GV_AnH37Bwpj3Ju12WP4BtIB4YFS7fSrvT1n__oOV2Xb4mD0vlEDxRL1MqPV9X8pEURgylYgw4SpkT1PzX64ZIe3DTRdDEU6JrDxA3pj64pVtmAOtpeYa2IkvauM9-4dFqOHIdLR6yYcIVqU036-84qFPe9zgNt", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102914466900933551509\">C W</a>"] }
        ],
        summary: "마나도의 전통 음식인 티누투안 죽을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전통 방식의 티누투안 죽", "현지 분위기를 느낄 수 있는 식당"],
        tips: ["든받은 아침 식사로 즐기기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "티누투안 죽", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 1:30; 화요일: 오전 6:00 ~ 오후 1:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5553276259794564878", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EC%BC%80%EC%BC%80+%ED%8B%B0%EB%88%84%ED%88%AC%EC%95%88+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "나시 쿠닝 사로자": {
        photos: ["/images/manado/info/restaurants/nasi-kuning-saroja-manado.jpg"],
        placeId: "ChIJ7R5qtz91hzIR7BZitT-125o",
        placePhotos: [
            { photoReference: "AWCwydhmmUuCM_srp4SjqVJFWmolgxAxsbMKgOhMl7HWSIblW5pOZzGX9zKeTBF6WYLli0vB_ynPkthO5J9sKCgj93O26_d_yQrDp5BvIYEXsgdD6y12diluuejRWMTVGa_MQAB7XMqQ1W_2VdfdOEkPQznJJ1qhZL7N9tBGe-mZBJbZSv-3GDyvPxyAZIKb22Vm0ALQ0sPLqFtyN8OnXufMaASDIQmMvEivb_tmaYt1pPdGR0J8UlzgvmzF6UvzeSgkK09TJqtnqD9dJlAvZyR90b75jGtEP9Lb0z3qEMrjk7PDW0mM6wNyowq_q1k1VlffwjcJiEFAL-amwOjSHxgfmeGE_MqBFXxRORhz6GYd3_qms27OEqMQXjVpOEve5bgY4_SZEfKICsEGZ_Ksxxmwmtqb7785NktORCHNIu4QBhB3dx6NuHQ3nadGBme6mo-T", width: 2048, height: 1153, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113749246643784289493\">Lucia Roly Prihandini</a>"] },
            { photoReference: "AWCwydg2x5hMigOppsXfRZTSY3mb267T5040DdtaMOgpcCxdUuzV6lIv_uCnUemfTEbT6a7VdhNSVGQj9BG0Y6-V0WsMKTfW5_MCjW4aFSKX6Rtnk_iiTL3pf-QKdys9ZRiUYkL6I_zE4ERo5USXoZcn0-bS4OyXJYWCva5ZBJv2uPo7kuwiy5jfStUnkvim3dCRgmCrH7qXgCht1u8tY4obDI_UOE_b3Cz2lJPQqjcjPJBtLzjPajfsLJPSpe7I8S7WW9zFnl8v9g8HkDFWYxgFm5pIV6aQG77jhxp5qYJIKi8qUavRws2daNmPCu6i3NKIvS8zex-wLda_6x4hqrTd16xW2M-6ELcGFhkvwcJJW1ddoehohID3Ie_KXz5-Nz_behH51fPSCvN7JyXNMqa3g9SYDKv5TO5SORn6uwe1pVY4lhw8D5nW9PSD_EAtOA", width: 960, height: 1066, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydjc4lT-G_uOR01i-VsdCKtezGDoRlqtn3Y5CQTy4E_APkrPp7_6bnpVOIZxRyxji7Ols_Ie5ifib2nMEo5B0NiEwYm6OhISJMsQIx29BG70c2H4cF9x6LtkourxjcUCRP4ssY0gZhupfEh7uC74QWpgTVu4Maqh9j9izWcTas_On6qS61-H-EY_gduCR_GA3a8HYC4ipKwFmh5EB8S16prdT7jZfqumuXJTga0TAhD9BXNKjSaxJ6x5w3dtL1Fl9uV5kfOCDcn7bckncSvvCZjEZfbh73zVmrDSoEsCMfdeWd88B-n3PPBx4jZ1rUcWhr9HqjsVfzvw3Atk3k1ZlgEsPOpFFIKpiimm50akwma0Vs8NUMG_uWhvG7IdVd5LgLVXChkSYh6zMwJrUunWYxpMU7WtQAtmfLroWWUR0StRbJVOVcsiIiq8WEMOGD6l", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103889668511383299051\">Andri Yuniawan</a>"] },
            { photoReference: "AWCwydhqp8bdGO7zVxn-c616fXuDMJGvQEmOhK22Z0vMdd0lBmjj4u-VBWuE-SpImKSiyUoAgAulTnKNUD0YIm45FGmkmfHzVF_XhAf8Tx0YGuAPIlu4h5kCXUFPYBG-AiGkN0KJqw9_M_DG8RJhlsWszOuwjMMUPwyQZlOY-Ufs8KfIABQ-DCD1dgNzfk5Yqr589giVK90j1IbolzbFiPp7d3bQ0NqmVt6brFxDCYyjR1JSsQBNF9y3MwblU_vJ-w3ForGQ6tWN2ME8G17MonM3XEsecuOzz-tRpIZ1VCmIrkHPK5x31tDkq5mDA43KV4-dFyDqv5rfCukCMp6_eNerwgWpgRsy5lcEsu7LpG1VSk1vd_RcZEjDqOLoNHTTcrb-Eo5h4t_LiCkmP1SK-Huns4JnI4reXGvrJgY5u60HVw8MzrGMnZnXQZCaJ3BA0w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103889668511383299051\">Andri Yuniawan</a>"] },
            { photoReference: "AWCwydiE8Fr6iHo-FfG4YZ726T2WdeC6JzLWzzqLxVbj8yX6_3RZCZaQLo6V_RqdfvmlB99d2IdouftElyXMQE2VkoJ09IXtDeFhMXd3Wagn0CbqGW0F_cnCTyjfCAiP3eYnbw1XLMHA-AfOfOweZv1G2RNt4Vlryvwaap2reOrIVarudM0OpLnfXh1isiMXYzwwTpxX5O7J9br-r1mn_7kuCpfDK3wZfXj9LyWxuZD6cEr16gWqBnRLEAOL6P2aj5DFLjpZquiNN3ioTwQvQUh3ZUJIdD8j5CsiHuNmFIPwChi82x-7Ug7mOkAt2314EjdR1VKL2DFD2nUchGLkZ-5fd_2CPfKqYJ_ZezSX8r2RQMS41yY-0gOiKCVbkOjXyOkQSW4tR63QxRnK6acx1g1NWLIexz780dD6IJgY1UIUnzRsOFkYi5o8epEbXjLqusey", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107484346454623915601\">Johan</a>"] }
        ],
        summary: "나시쿠닝을 전문으로 하는 맛있는 현지 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 나시쿠닝", "현지 분위기"],
        tips: ["현지 스타일의 정통 맛을 느껴보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "나시쿠닝", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 5:30 ~ 오후 8:00; 화요일: 오전 5:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11158711786971207404", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%8B%9C+%EC%BF%A0%EB%8B%9D+%EC%82%AC%EB%A1%9C%EC%9E%90+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바카르 리차 마나도": {
        photos: ["/images/manado/info/restaurants/bakar-rica-manado.jpg"],
        placeId: "ChIJjYBuczh1hzIRC5EfWOW5HSI",
        placePhotos: [
            { photoReference: "AWCwydh3c1R8JRCVDQ3-x2fIOZ_9wmFCqZLaHy7sm-GPUw1ENNEIOFBjK1bh06f-DC6HJAIhDLusAq-LStaaxcv1TJ0GpJMvdsMFvaP4kIg2JPueR84p7LLQ9JEGuPMwuAzd_UztNYvXVR51qLLillpKi7peXpDOOZinivDOdM3R0okiLU0UmPMvTCtdRNzybh7hKVjFaWjmQRUin9Y_sYsSnzYfP-Rh95tGQuLwArW-kIc4jf-Qd71VdKbEoGqklTo3hWRDPPXDtrfmMhbg2bj7m_iUlCnrBzMR7ahJsqxmaY31BQKuojx3slMzTYde2sN8m2ce_QwKAxc8xIIXjsQhJogRLv_ACTw1QJ4mldr0ym0v0WzwrUKWgB97AHRdWDhdDRFimII6RSf45eKtSzqR2sljJ2r9mdNeIBDmf2r5zRcaYKwi", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104867690749383119532\">Aulia</a>"] },
            { photoReference: "AWCwydjEJyVTtvmqc0OKY0rZtmclhB2ShTB0M178fAEwfgV1kM-uS7tvRQzlSaA40IoolN--_Ulshb3CAPO8lo1-UaCqUEk9jQcq80zDT_ngRMxMcPHBGuruqyV1rlxVJpliPxZXT2mhMAIlaAnJW4rhZ5vMwfsD94j8FvYuPVGv6_v2iqeTs0DaonIh3nZL_XpkQK2pQbw4p80z8nCgV-UBA5bdnE-Bz2LZC5anPmKHbkzl-16aUtbX6z0bNZRv6tO4jDa6eN4XmKhIPQ-rkImMIv9A9xO-q5JzWsRVyeTWB6jB98mhCleBJfSGgTOv8GKsi-KWw_P2hcKWOs40vvG45DCXMZHGIZSQywO8b7NVeBu3i488994Eje5nMlPnRyymiEsAajG1s3BCzYKbimRNRtQM7un2--AEKMCZBkkenDOhARk", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109687642001718471249\">Andi Hermawan</a>"] },
            { photoReference: "AWCwydjzYkIpfIGQj84L6HtGYeVoq4jY-M-ZCEpcpFoiTdla3pY0vdTXxEUNnJOqE54eyri64fx8ILHCQql67ohAiFXvNFg6ahcFvkwChMSP6-622F_A8_x9NqjzVC97YAFD3Dkv18C55Hr2ZB9jOTN91Vd3zMJiCW7p4pz3HA-SMLKsBTS5pba9PDER0cA9LypwFjd-zDhOk7JIKXOMB_Vlvb49R7Ok4QLcrbCaXH7COz0qqiDyiLDaKHphtcOQ4TqWEI0ZP-J2JmR4JFtaSG3HQl20uioa2BuIIBdUSwv_6mAjeoHwRFNODM1d6AHk6IKJbD2L32EJelpS0-7zut3XN5Lz4hJms4OrTsCvrN_rD4sDTKTfTc5bCCe7TigCxrVtvxT6pEtDRzPT7l_pVMZiH6t76CFWWvjVZwteRwuYMif8DbZg_Vwiq8Uw97WktA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102224516579981925232\">Rayhan Ardiansyah</a>"] },
            { photoReference: "AWCwydi6O3Yy_coSZvs5MWW0nkW4s_Gi6NmZ0Q1Pf5Ykz-BS7Ng5aQED42QliT0lzSnb2T3ecxbTlXvyKmK86JG62NhyyPCWI-tHWATfqSLxqzkvwqNXMewA0m6Ln7uY3R1ov6PGq5jVAzuwqdi1xJaKpkSnR0gNI_1qP76aaP_rWO3b2hyk6nQEEusoXMnxLCqodC_bGiNEXuS9S7gP6JtXBpudEyLLRAMwRVP6_J6_30mYyFfAokQWbzfE8xJelJPxoKUoFbiLcIkTcGjiu7zg1QVAmjO5xo0iXagUc2oMNsd-yEu7rPm7hbolzBQMCGKY_bQalGH4KEidwovwwdM7FKDZJ17gVzv47DZVyeCqG6FvbbLbi8fNI5OAMDLQFyYe06qp8Ie9u8I-itEMtvEjnFpsV6lhK2lOPmrmumAHHuxJ2Gpn3Lkgd_71afAsLIAh", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103786927521334490558\">Teguh K</a>"] },
            { photoReference: "AWCwydhpRLK1IrEUcOQn2x5jF3VP7FnBG1gS_S0YG0On8KLwQhTQqTOxxduw8h-n7z_ZED2fisQiamQukogrZehW6VCTDvSeZT4Sr66LKqnZllVUhcse00nwfardY4U8CnuOzt1o_fQTQJ53-C7Pz29O6lake0RuimQgK9HroeU-GskvRw4Cm_S6Sgzz-I35ijdTx-04ipYxVCwIq9BE_1XHWZaTdZKrtwYFAcm1G4vRzO-XPOv0oB0zqHai4QS99wITdHHoiGG64FWmxALFI55IYkIznP0hIJUnD09KSZix-VOkPDVaNXd4hp4_C9NhpBeRMbdHGVhjHNKnMY64arXVe1rPLQoYb4ia8DEOlj_Udkh706LkRjKwmKVWEux6IHNRouglaKW6Fy2m8Y2TY8dXiRRia4iQfux2S_vdAWtm5-OnV_WNgXjtXTG1WgxCYw", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107267475144642135079\">Nur Ifansyah</a>"] }
        ],
        summary: "리차 소스를 곁들인 생선과 닭요리가 일품인 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["매콤한 리차 요리", "신선한 생선 및 닭고기"],
        tips: ["매운맛을 좋아하신다면 리차 요리를 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "리차리차 생선·닭요리", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7225620323004938148", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%B9%B4%EB%A5%B4+%EB%A6%AC%EC%B0%A8+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "밤부 덴 블러바드": {
        photos: ["/images/manado/info/restaurants/rumah-makan-bambu-den-boulevard-manado.jpg"],
        placeId: "ChIJvaym7ht1hzIRGuzTXTWA1pc",
        placePhotos: [
            { photoReference: "AWCwydgWVh1KZlleHJzf4yQWfgi8dDBX6OiL52ew_PsfQYDsXvFnzSRDExy71LLo2grFypaZCh72CfGqlWoVmsyb366rpf1C6cYRYrnKnh1qVyfHLxeml_dVjXsd68w89_aEUYCyKoQRveBUoYt-HRSPnd0C56AOSqXP8tTTYCerQjo8XTyjiX4c5MnVdLW1n19XhO7ZuAjvAgdKHGYgvYCv6R6W1VbhFW5o5W_EuJDHknB2D28dekhZHwob0_ibKK44llID0zRD2Xf1q9KK-DhtHDSYS_OE7txBmKNAfn3VXppupqAVY3iJmj1Q0xWmSKy1PRYsDhj6mw0nB97UjZcJhez6UAa0JjkOxsWR-HM_SKC69GC0J0PsjxgFFMA5mql-GEAN5Wi3ysVIVXZBLTuVFFeJKOhqhdcLZ9NR6eGkvoE", width: 1616, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114907177541316493467\">Willie Soedewa</a>"] },
            { photoReference: "AWCwydhr-xrIAdyNyzzDp_8LNsCVtDw3o6gsyJxptofxaFDkEHtMnoSSoXW0D0nxHQUBWguQq6sjIHePnyEpS8O-3Q_lvD7GPxGb8S3UnsTFrHquImS8KzhQ6ofesQsv9vI7uQnkvzdLqValw3TJfsvrSQsGkZ0OsXySOrnqI0nWM_m1nCe5PaaLlPrukaQqiMLGcn8-Cks37MqioNEgI8zA7isQ_mTB48f2FPTKltLEVYU6iLKEqQzAyKHoXKp8NoJP397WbT70XX9wvVJ17HZaka0PUpBJhyAvcKfUTVcMB3UBWX8sLU3sCXZvULPnYYvxqksLPhp52F7y5guXscY7CPmw7oqFLbfDbT82npM0v8lSM3mEE1Qp4G9n5_KCmTvsCiTmvM6Ysd_4HL-V1hZqDwx2WTDo-3XKm5-NGVNPy34", width: 1616, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114907177541316493467\">Willie Soedewa</a>"] },
            { photoReference: "AWCwydgeGDZLTvW-msQEpSwG_d6QfL80JuE2ZtiEETsUvZcfmza_4EiLwXsmyXnSoijbBhCZ1KYyJyLn2ZT7ueYNb9hXn9z3dy90vninwToLLdglacHgUbQGpDVy-SoDJBF36XGOjm5vDyhIhB3s_J565wQIcgwFNaI6WRfCNcUuN4-a3w5UFnyvVWNs-RbzH_onPb4J9lc6BjS0AtcUK6S7F-yr2jSe6RYgOB-VPqZd9---flPH5jXwwBH_lUd87vfpbG6PoYsmGxyAoOvwDAH3QRjabC9oCtLU4pHsBqBgALJk8RYtseshbXYycOlDoh4I2xgLJWyi0BHaa_xiUPzHbhjm5S7IBfLYKE2c7HMX5f9nRG4zCs-O1nMaTurRm3-sgCfcY7Lj-ItaVx0bzHQDSXwq_pwv3sdFhimT2VpWCFA2ZQ", width: 1440, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102347220324154520648\">Everdineone Kambey</a>"] },
            { photoReference: "AWCwydgZ2-M13nAF4zpQX4YD2v_ciN2-ZINrHT1CJWjIy_GimoDnhROHMXj0BVku1rnAnm0loQbizx81JwVrmm9cJ0STjt9aewIieT-IQx-hHT1R-Eb8r6tdQoCAcv3Xay3Jh8CkxH2G7Lg_TPUQ6-JDgNafp5QdRAt4chHFFLVm0qmD6yYPI7oW0dXstYwN9SlFHwDHfFNQRa_vS0ASqGzmqmTEXQoT0lMoAh2fCqCfmf8RqoaPd2Fqoxn9EEVUsczcT7P0Og-TZEJSaA-2KZLd3QPi3FoRnb7q9vQBWsMaJKGmb6ApYiNrSR_sDPgPO2_5id50rBwZ5KxvJ8oLseLLRWy4SwLlQuMIxzLZxpieK2MJ-bncgTOXbfOpd6MiDTsveS7hbogWbF4XsftA88JCUlEbjloL-kxOlIeHImtCXrr9LA", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111869222926489135221\">Ganjar Ratriadi (Ganjar)</a>"] },
            { photoReference: "AWCwydgPWLT3qA5u0gPKtL5yKU3S44Z7JeFPMavDnhC8jYsEpSv2hRV7hzAo20m1mc2bpTZXSI5TVYlwjcyVlXOcftbw5ZzcqB6KrAXmaZ6FbFGfCNQaNTH8AbZ37XEHSo0hRhcE4fh1lvXgzmBTPecUzzdQGNcb5Je0s5pClPw6pSQy91QbFPmqW2Lj5rmyPGnQow4tsY_Z4jSW4HcvsPXXFEP2Wv4bsP67DFwlUGw1s0Qolt9T-q65g3G1ZIM_AY4axAM2yOF8_DQxl8JoXib02ELxkRooMxAGSs9tINfKHYHzA8Kf1S7gRL00PpWxLrhzL4Fea-z4vg-DzAhU5OtMqCWBEXUqR6Wp6s3lzwQsb-FIzkSdyub2XlXjRuknBRTJHdU_LliAhMt_iRUP2wUKkTSKFfWmQYF4naK0sz8QeOfN7s0", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113093537973461530911\">Lauw JT</a>"] }
        ],
        summary: "신선한 해산물과 현지 음식을 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 신선한 해산물 요리", "현지 느낌이 물씬 풍기는 메뉴 구성"],
        tips: ["Telkomsel 매장 옆이라 찾기 쉽습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물·현지식", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:00; 화요일: 오전 7:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10359887218872485134", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%A4%EB%B6%80+%EB%8D%B4+%EB%B8%94%EB%9F%AC%EB%B0%94%EB%93%9C+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "폰독 히자우 레스토랑": {
        photos: ["/images/manado/info/restaurants/pondok-hijau-restaurant-manado.jpg"],
        placeId: "ChIJTXVk-8GghzIRi6Zm0WXFru8",
        placePhotos: [
            { photoReference: "AWCwydj_au94G5p2Oo8KjSX_GP55mpRws_LHzqASjclunQ3agiMcare221BhT4chuuRyyNwYcDLAPx05Qq0AJE08P4sohEbhBcw-rnx64dMgyzg_ngHJTIHaWQrwzoE9clGI8O8Witx6UosOW4dFaUR1-ucW0A3JCqNxshsrDkKZqP16jrYQgTq2vcd2ChGfpviU4GRkeOaGwAlx2Iz3flgQavu4w_aRpNuLgGvViUN_gUIYSE6Y9tCRg8cOMVqzIwFxD6PSqRp59Ks82StxEIAiK1y0vJNHHtmsq6Uuy8JBfvFzuVKlKik3HOwnSOvx4KIL9K_hfDkL8lXFy-kQ0qSC5Hr4g496y31uGcVRLsJH29g3iP09R4OXeP6fkcz8aRI-Qx-pZNpWxb_tK76FNJ84N-_tslSiMwKm2t9sq-lRIWQp6_OOuelKdoJ4d3F1HKJ4", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108627712688092940892\">Guruh Heriansyah</a>"] },
            { photoReference: "AWCwydhefyEPSWaY74W2jlLQu882dxe04kjAS5np_QgSqZ_r_1NR1u-hTupyO2D1tiljgMeXLvR2flj0b-gboO9bT3u8LSq_t2o9TFWOOrSWXaGfOh_lc5EMAPDP1cfVwLssJyESbQWXfnttAJKJXSUHfca-aet0bjGxb5LOxjgJxGre2GnBWFY1zTklMXKTJecPqt4V8TsFrim4P7QzeMIvLGQxIJ3SOg48h9fB1Lj9Q5EVeYh0jMKFM_BegA9-HGdPVLn9PzncLuOYzTsj9YbACzhQSiiqS34DpkyAq2m5XBKVCLh4e1W6mnGGMwomDW8NMc2NB0aO_PVZn_tVDu1JIK8u_gafoP8-jgwW7RZaHBF0tNZT0w2XORL-IgipA9rSPo8I98kAIh4TAsntwXMhfgln4lOfZLb0sOxolko2klZoAIbs", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114149587229776810336\">Pondok Hijau</a>"] },
            { photoReference: "AWCwydhCMxwubz-IUM7wtjjxhn6GHJ648Bnh1b5UIStPnq5vaz60SSQBnXMQVK2aCQjoF8PRvnsPvkN-W5fakoDfKQlnpX09pevWqD8nZV1ywY09elmx7WhidUECVMUHBl37LO8YS3YZ-abKGnp0lAa7i4yrsHPP1OwZ-dflKnd0xvc48ogBhAnv_0yEf5eM2uSFhAxgPx948d8pIMvVhzDViXThmJXLoYUYdmynA68uNa3wOVhdnlTSVCEkxTZQdydRa4hYIDGC9SP9kD_2y31_kiPoz9jFGyLFj975w5ICkCu2ow7MACgkbBgSeH6qpyUdaoXxO11J_rwvTLvU_Jj5N0ViIRYpXEDzvzbpsVnEggMwb3g44a65A45ig59tW6SyQxhMJ5ehqitx6fW59BdlVUyz_bV9438qvcg6qvVnuYx00fcA", width: 1515, height: 606, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114149587229776810336\">Pondok Hijau</a>"] },
            { photoReference: "AWCwydjIwJbM8Zv1LZUqpGRWT7led-UvOoGIogfMUwsdN_gkQDMocCHhumAk9FYQOUjUF_tNBxkAce-gRb-uvBFKWHNl1_hYPUOhoK3dyLUha-peOw81Kk-1gYK1amyOK3HeLZn-fzQkA9qWOee8MsoOgDoZrUSX66FdBwyd4D_G4iEcVK27cPAo_cJcg_wayyiNcqaNluuExMpwqJaoVqfyRELLGWbvlDkhFRqmVNZzlxQvBvoRoxv4_Cfyo-mF6yx5fVQNhTrZLSz49nCnQoAxhCShkKd-MUbLip9vWOzxo54kz1W2zOxWm8foPAjys2l2vggRQ0lzq34zxybEIQUBi9ZaiQ-QFEQjsk-t-hymHbM3dYorDSrxeAzWV_utjn9S2uvEvR5RuVLd4L9yJsnyBGzI8rEGGDdBuZKj2v8SmRZrLngbwJdtSBZC-a_C0Q", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108627712688092940892\">Guruh Heriansyah</a>"] },
            { photoReference: "AWCwydiuNTrhxNVSUHxO9ZKQ4xCiYNsTgUdZO3UK8JCT2fzwWZU5V8V9zDUrKsb4s8PEBr44V1Tcjtz0Oldz1x7I19BUbCUslmhlDcWxVm9dqk7skJbVq0HdiA1xI92h0jadUta5wE3wxEFzju2Q4rWIbTvFyZyBJSTT28yeJ2iuUSb9ku3LDuUArCDY9A4e1KmfqHwqynRHR75hh2X-xq1xuiQWf9e58oxqHOddHWrI76ugLandiFjbgoOWbfvtETS9CoSGxp_LkQD5TAng0M5lGIQqztmrUiV1z5RxfWFiUd6WAED_OHGCP9X981D9rOI9ynPjx6nUokOfctD3H8LS1IJRRq129F0fjBy9auN46iKGnPwuMc9WwPJSck39Tq5UXhKbaDh4YuXN_ciuZ9D1SOjRUZpASMWLZFUbKegA6l6jHwqiY05yuLXvQBph6iij", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107782417204810940241\">winardi Joo</a>"] }
        ],
        summary: "가족과 함께 방문하기 좋은 로컬 메뉴 전문 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["가족 단위 방문에 적합한 분위기", "정통 현지 로컬 메뉴 제공"],
        tips: ["북부 미나하사 지역 여행 시 들르기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "가족식 로컬 메뉴", items: [{ name: "대표 메뉴", price: "Rp40k~160k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17270958662107965067", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%B0%EB%8F%85+%ED%9E%88%EC%9E%90%EC%9A%B0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "넬라얀 씨푸드 마나도": {
        photos: ["/images/manado/info/restaurants/nelayan-seafood-restaurant-manado.jpg"],
        placeId: "ChIJzVzCiSN0hzIRSu0N0CuSbkg",
        placePhotos: [
            { photoReference: "AWCwydhtH3V6lpL1nk0RcSZ79ydGlLwO0cQ6kJmYY8bfUfXTr1xM3oXb7Ydif7_q0jN6rAUpMBBckmNFzhGRyRuw2nKW8zJmSO_mu0ha1D0gXh9lbeAjjPpMIHN-7yvbWYXLQpg58wB3bBHro0ja1xckueTBSoE27tkqfSrHZmWkHCBgfPBIeivJNMOvgjvTEVWMI2hkgkSqPptkRWq1-JiINfuBRj7ATRaeTPcYVAdu8aNozcj7DHAVho31wY9ulaEYumECZs8J84Lh-AFiQrcZOIeIf0ui6xm9QY43Z-O_8BaTGcQ-3s9GeEJpnVd2JELLZ2se7XvRJH3EFT-aUE0sVMtGwQJLf9-gQC3hQj9oSNPyEFFHN_DXZb03HksifhWrV1OeGBAvC4hACJampSvzAAzfk4ELw6mV8kZFhe03Pzl6wS5_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111656545439752445488\">Nelayan Kalasey</a>"] },
            { photoReference: "AWCwydjNZXVeGDLLZJgN9LRoRB-r8H1y0C3ViVcrju37Xd88rmTswvLgwzPTzKl8RK_A_awiBMO2hQLfZGMjIbMakNo63hH2kP6GZBUE4NPkamPB02Nr4wPBaCFQDA5dPK-Imi9OfTVG68tFm54bhaF26uUU7F-KaVuaJiy4M7p1VxeYhSdMxrbkH3CS9zalsjnL2IIRWmORxRlhi_zuyIu7L6zpGcHnQDEuYBXwFCGWtiMcNpINowrS7Jl6WuKk3HP8ROU8KzvQKy1lLCLLH82KIqx1bDkb2Tof8yWnyYQE93Oit8iLwgbHOh_AYDzMx6qnQwMV3K9phHdoSYufnE-1N8qc6CFPdhaiJ2i-uC2iu8EVM9l6DWFFaJzJ6fOSbu0dgRSzrhFgCxvjMuPzJZC_4RKeU16a8GomR7EiFXtie2O2f4Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111656545439752445488\">Nelayan Kalasey</a>"] },
            { photoReference: "AWCwydinF0B2GdgiZcdDvuuMnBn73F23ludMtl5rBrzgWwr7wg9DOW951MD2p3IJSuOh4fn5C-QGb4QmfgdAI0sO2XSkDSkm0oPmjbeWPlSMVuAWRDM5svde6szJlC1ETNuRfcYAhf-hap79Z8WiCx0qI50paHfqf1aIhj9zIa5GsfyIoopO7UYqm__AOuZtWyyn-Ql3wtjq3_oxqdDNyf-mwqov-j9JafTYA-8aiuz0N3tX_yp6-9ABsogMyi3E01AuqlAq1XpZiG4qRAVIU9KUY9zGJkLOy92FvwAtzCp70ItmCpaKWic7dDHKwTcRBs1NvT9OvO2EoSUF8SdMCIL15SHlW1rNOv5INfYT_WaXFbs9vrctHbBZtbruLxesWV2NS2oS9NQYh3f79Gm2X6q22RVdXgr0tnrwUNqGMaKVQzx94hg4", width: 502, height: 262, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111656545439752445488\">Nelayan Kalasey</a>"] },
            { photoReference: "AWCwydhEwQmCI0mAgfWQci4JGZ2wcpXm5xAxCTAhnx-Fer9nmROs-ziprP2mf2mwFH6A1ltYT2dq-4lQlSwWGH6F3Ga9qN_ojMAUywoLFMCCw-3Ck5LXgILfgYVZCl-fdjk0am03TdtyvJKs-jdSbTha7nN_CtHvkIn7MhzCE-HHH9NgG9RrRgsLigrbJRTIqcBwwMiSgtJAu7jm44aZ_V6TRSzrvO59NhnyyhJu9rJsMsg-e9EcwmxmoRFsu9_tHOM1Sv8Y7QgfNubJHGBCC1WHO_Pa6HOVHCQyVatsDyD9tYxb2jRj6Zat_IGWJ15e9oerYD7fRYZ9hLH6-EhEtXatU6rG98RYl3MkNGw11hcvklC7BRgb_OSnPZ5M8-HkEi1fmEgaopXEA4jIyZH9Sx_uDZE0N1pb3u7wmE-MO4cExr04lEle2uCMLhS2qWq3rEJg", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116237987109569099589\">Yolla SK</a>"] },
            { photoReference: "AWCwydjl-duo-WeHhdmNc3lU4kiZy78eyEKWfaV0_40SChUfuQqhG0GNjtK8WtzyILor3chU1GlVCqVagFDVno2EJWtZ-PIRrvHUlN8r-liOUWqDoFanKLg14GNQJ6F_eXDMEi3pZsI9b8w84m0kEJaqoZT8agvywPqNbaRjEHNmNASUiuVF-_qPizn5El5uZ3zz64oLnP1GgJLzRRHctPa-HRMHwXIH220MtB4GjUdHjwds5bA49UO70-Sr1RlescCBoP3MHiveSmhM7j-r_WsGRc5_RvGLuUnG-xtdm7fDDusU0Y7tHY8441UaKpgGGPT8R6VCCiKEoEcB8IcN5rhB5dHoNyRpEUzj5CqDj6tCVOouRZv6jRDzPv-8zERpWkzLI7FatD6hv6IpnOfgsVhmS58y3K1OUwRQ-iMQbbZFkguWmlRYpd_-Tu1osiCiGDt3", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116237987109569099589\">Yolla SK</a>"] }
        ],
        summary: "신선한 해산물 요리를 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 신선한 해산물", "현지 분위기를 느낄 수 있는 식사"],
        tips: ["해산물의 신선도를 꼭 확인하세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "Rp60k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12905131485170895414", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%AC%EB%9D%BC%EC%96%80+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "빅 피시 마나도": {
        photos: ["/images/manado/info/restaurants/big-fish-manado.jpg"],
        placeId: "ChIJ5Q6-pPV0hzIRaqykMR8OT4c",
        placePhotos: [
            { photoReference: "AWCwydiItjcwaF-itWCZ_Ohj5BcWU7OJXknIDWvB9Ab-cueqZsObMYVXD3DfOEXHC6mOdEwxPJWbLoijW8Wmh3BESZFDpy4bE3mduaEj6VdVy1hy5JrV9lxekja3QTzlvedYVhDlmvCvsds8YnTLMBV7N3F99-HECjoEerB8p1tu27VvjJTV07eYVgEHZuhB9RvzYhmEZWUH3FVbUFbo4NFjZyulLq6OUqHz-CaTFKte-6q5UnziN-6dop9ZVZJdstLw-TSYyAFpCaSF6CsmQOpCB0490ZdCAaYcNzC2FI0Pa5ILPQJMCfu4AB2aW_bROKoANJ-7bEtJBD-z4pwF0uuvvyT4f6Kts5AxgaGd7AH4rNka-emYZBwd3myfhZCOemeUe1XfDXiOibOWo4iDX3OQItQ1pFlDtXK4NdqCbS4uplQ", width: 4080, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116237987109569099589\">Yolla SK</a>"] },
            { photoReference: "AWCwydgidAH5vHdiUnfdw1Yvnm8lXMJ7_j9_gsBISpzcMrJL989BWKaP-9ZRgKMm1-EP6wc17sKA1H2AMybcNMI0ACOvn0-bMHqqzZVAOpAcYcfM7wu-UPwmQwHyMbWZrsN33UEL9pjubD-FOQH5AazoC6aDAy9eZHmNcNUeA-WOp1wPd5ATTsHJyJJI46boeQQDimN7cUYzW0f21P3vH_qB74lZkOIIpTeuWx5wrSuMHWkDGN16IEL1IsTz7z8IdvU1vAoGaJ2bEJqQoofu6gYyOrkurdKVOoCUyavU81frDXyBM_79AYG7riAXHuFFGbUK05zUk7I68PZ8ITEzEmsM-GGIuwh2XGaKMBfNJ89M6ZE74v0TQzw1LfsgUbXAoV1Z6Ox4_mLTW_H5iodbYO5o6w0BO_bsD-jSWq4_uc9AxjcFCQ", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104144542761900408899\">Techno Phone</a>"] },
            { photoReference: "AWCwydgrP8v2E9v1xT1dTprVogvdNsgAxw5_wsHeQkQncHJGk4cY1EZYcNwuxC6dWVDa6QESTibSHsvgzvR4i6QOmPKjV0ltHOaoK3-a_1GalpReUzoS2d-fqib5SrSW7rjFH7ElXaWAGluyJsaDEDZjQOcop1WFLdv7xFU7X-FrDm9VKkQniZhDGJz9OWfZ-mCaE-BYeHWnnjk3oETcJDvW0omd_TMSqMz-WQ3NirhMeMZ_76voqhBfx7ZDVB0Bt1JInaQiiE2aRbBNDS_bK6LVfGNgxbizPTp52rzoNYqBUSJb2_Ac9Zm54ZtvMQSUsnVbK3bVd5SXBly-BMW7TwwNLM5Sn-SupZw3XE8dgyQhFULHvsvqNPgv32hvMDMTo60zFjKhRweK89ut5tYGvIKcScNOixMouNcDwWN2JdegiyF4SmIj", width: 1900, height: 1900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111651315492659361836\">Agus Setiawan</a>"] },
            { photoReference: "AWCwydjHNNEQy7FCqy8WHdfEr2UAKV5PsRj_YflxHn_AhAb4vm-yrNKGHrSsTBAHSJCT-CtoBJmj6803EriY7UIVJbROaM185N4bVeAcnYFI6g_j7Xh2twxWbNzHzCwyvNqVinkLumDrEItyUQg1RFSCpMrkZR_1bibXTkevmP1P5x0NB9whsFUQJCeZkbuGCJznPSz3AgYTMdzcKwevz0V1G_8xCjD7EtRel7_BbTUa0JhtkmqlxyDR5uVbWqjilG5Sqd79MDHQuXeBw6mIusOi9uC_peKw-1Vlm_8aGuRK2oOLhoHFWkBFNeb-SYaqHci-zVcO3prXAl28pPceRfC2mqI0nA0-xqEeTrrA5uqKD0ugALlm5kT4ksry2meOPcuQ0OWhQIcsMw8x8BdiUprlJ7Hrlv5SoI0NfWgLCOPE6JzWmUqCJeE1qYZhufR9LHoe", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100710066899256194972\">noro sadiro</a>"] },
            { photoReference: "AWCwydhTITXEHJ74TBIgEkK57sR2pDXPuvRI7vRrPCkRay1uxsZoaVthQjAAcA7G4fiCmzWFfG_X5Jhs6EgziU8DmJX3rf_17J-PlTS4l_8wt5rAaCT4Yo5lx7olFjFeuTxZSV93Nte4DNFCODF1QQqbMW6JTaEWwRD7iPHl0J7NbJpZOJCcNz3c1RD4OpVgjiGGQF-hwSMfVfhzUt8yekFHml_i9qel5Rs5SRerO6Fwx2IAbAjMVtjRywxT_g5Uvn5rIgoKQzLngMqiM9gzC2M_v90hsg1sm631i3NsvgGYazIqGZIKfEIWYnPDaeklV9b3ZOC0D6UV6EnUXc0GBL3aUXVKGDzm9RuEqVHf3LuM3WPAlcxiG1TNxz6OyXjwEZYInPWaHbQvuvIaqUb0jTw_IkvbkCaET3pyvq02pixL7AB1Mw", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116254131290015724688\">SP</a>"] }
        ],
        summary: "맛있는 생선구이와 다양한 해산물을 제공하는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴인 생선구이", "다채로운 해산물 요리"],
        tips: ["생선구이를 메인으로 주문하는 것을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "생선구이·해산물", items: [{ name: "대표 메뉴", price: "Rp60k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 10:15; 화요일: 오전 9:30 ~ 오후 10:15",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9750027245420063850", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85+%ED%94%BC%EC%8B%9C+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "키오스 펠랑이 마나도": {
        photos: ["/images/manado/info/restaurants/kios-pelangi-manado.jpg"],
        placeId: "ChIJ9czMaKWhhzIRoVsGq0NYVCc",
        placePhotos: [
            { photoReference: "AWCwydiXDEMkPGAN_7f5K1uFOmYQZb832IXq3h1nDnErk3rar76oThpPHKsX23ffU1Abu-99POtD0lBDE-uBoCHSQOnMkAVYtEB4jEWSc_otXUWJLVKge6Qlx_1dQLt7a0T2tLQkNlU_wPpYg7eVaBpNAanfoy22eAWQyp_HRzeOqeY7Vw8cvpAF_p10JiH4xX2CInPCMsmNUWIZG6SM9Y2JK-T5NMN7g1nYFjqfP-w8m-Y1nXRpeVWjd25cRndsgVHbwWbtVqjlIQrcam2DfX2dd1O6YIC2iVnDcQVBvdFONcaAJA5bLtA-cI8zmxDJQp31zOc82J25bYJVPMDT_Ih49zxIE9C9if_jmNifV-Z2V4t0qTY2nV1Y75D1dOUKCVaGqTek0WsAOnqEwUSAyM32ymxgavfrFDc1QtVum9RCI1mdLY4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118194902889772203601\">Edy Milala</a>"] },
            { photoReference: "AWCwydjdQqXASc_66jdkdIF9jTTj_XEUvNeMkk1GA0aZCCw1IUawRADh9zLqFxYlohLqRNYRFG0Pk1dY5S_mKD9waAEZNuXxBZgL_-fRHJkRaiVJK7lRUM121v95s2rqV7G-fH5TBeS2MtNaFN-gmP9iWLfr9XQ4Sl6pU4_ypEJNnxo9jEEBeDIjYIEy9srQWQVfAW1EB7vaurEH3I82MgwrAT0fTSkSGJLy-GBCK8OCrjlIMSTXIGeuSlH-7RgJPQU6uSIE_CsHco_MhAEgV86OUA0vPOya97nejb3edpMj6KBrfkyXKOXJsrUyuY-5TF6gigA2Vn7obn2OkJsP0H-svb_V8lDAD-z3D7FyLzULkD215zb7ETHkthz6PXsyG53RSGVmFb0qOelp7AbN-oCYyJEyNLliodC2I-540PFRHitkSrH91aYWvnomiR9iLgbz", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101660883818047794331\">danny widjaja</a>"] },
            { photoReference: "AWCwydhFdFUh6WzcwlReoI93IRgLSLeE88j5WcipNKJxMBH_8jxmHdQ1d0DK_7UyJQ1Zun-F5od_INUbYDrchLLG7XF0a8-7nil6ySvA-nInTEKn-rXtHJupUepRttuKI58cECllSFwarkMJR-RMk6iQtWOMpwikLIQ-nCD8s36sgasQ6dUR8HECQM_mbDJ0Z54MpUSxFrjsUMY4DVB7gWhFn4M_aEtCMGUAZeTu76sxDo-MHnzELMFCdtKEK3IsN1-67kPxoKpYwqyKFvE8QyDKcpHjsVRwQigaifsRkwtGF2Gqs08JjYRmGYqvY03j3stHy4e7OtksSYEt2D89ACqjBlADNDr8H0vw6PbjunDCd4pWVMoAwDZ2P-w5aaKxJ1vNOPF-VOpNpCLqqkAfIThrDgJN404w7uscN7Izt-OH341vt-vYXb17lmHY5tsaPmZy", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104795113554489049217\">Ristu Margani</a>"] },
            { photoReference: "AWCwydhgNbwP9W7Lx5UJ_Ft1gMaxgkUW4Vpe9nngbqFPJ3_y2re1LkqYoPF_56jIazFZit5oj34vbNrmkqBbtNfWnZfguO7UgvJ3srIX_-KoPJB8aHTzsU-IBucfxnHOZ1qhq1MrNXN3RMm5dPmU7Wg_Wx4_fz3xKVi2RI78Gcad1f_6GVMRt3WF1aXVtY-FlKHxkZ32xek8QbMUgoLEX67TnvHma7Wtktn-RnrvJVuLvlePwc2D3f1A0_EtFGvtdbTXbwFjt-r-1a1VtVh2tB_37U5TuNGv2Zo1EW6HoRyKIyTMqdU2pdbjdp7U4fIUhSaHaBZJB1bHHT8vSmgPGwGr_jNHCFGHlVHqkMTu2SCT1Tz2n1z-062IubCgi2t1pu6-N-yZwF3dLCAiilFTM9HuyyS5CdFMYTy7x2dhTbz2A80fTfP0QSNHbQAJuCYDdDe5", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104795113554489049217\">Ristu Margani</a>"] },
            { photoReference: "AWCwydihRA7jXTWTrJSD9NZhrRVlxB5786KaS-GeL-Pb0zhIzBO_tYOduFGsYAHbBgTbmYqqRm_PaKfO4LIu3r28LWyp0kdGXABHbaRwXQJIzU5KyKuFlktJ7PuOm-RiHoqxIC7K5DeKiCtyNpWglnfJMPeZt10vOXMfqM635MSzkxw6w8Fr7k6vGcom5g26nDrTZ2FrkspjLuvJWtVArlxaS3jDl0aDe-HZ52dMVjdVjOzpHeRVHPLi9UwPEtO1MNi9UyHHXLlL1qbd6o2GVHT0VVALw9qLb6nlk9Z4v12C4j9uSzAPMvoRH-i5X4JQNKeFjv3CU4JClEMjzDxO-kV0PLSKHiKtC6zzxtCkPABwJzcyy2K76QcWZHQl3y2oD0DVRnfMrq46YkbrwNneFKN7gPhDC44r1R1hpjJneTYJhLTCl5L3isEiOqpEwcSEdvlx", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113506048572121291899\">Jajan Nyok</a>"] }
        ],
        summary: "마나도 현지의 맛을 느낄 수 있는 로컬 식사와 간단한 메뉴를 제공하는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 스타일의 로컬 식사", "가볍게 즐기기 좋은 메뉴"],
        tips: ["현지 분위기를 만끽하고 싶을 때 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "로컬 식사와 간단 메뉴", items: [{ name: "대표 메뉴", price: "Rp20k~100k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 3:00; 화요일: 오전 6:30 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12428237008260630141", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%98%A4%EC%8A%A4+%ED%8E%A0%EB%9E%91%EC%9D%B4+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "와하하 포크립 마나도": {
        photos: ["/images/manado/info/restaurants/wahaha-pork-ribs-manado.jpg"],
        placeId: "ChIJv_qvmBN1hzIRFrIUH9vtTcw",
        placePhotos: [
            { photoReference: "AWCwydgn0s99u0gcbfee2ONBdKS5_lvDa_OG6rDG9Evs2a_kw1H6oQXEmd_kFb9jl8nJmhzTK-NKGK6Y3IGXQjluVqVG-FGmo5oQfRCYL0gQVsYBZz22nUPvE71aj6He2YkN4-_WybDuh42WeTivoPZntkfm_3EIrlh7YGpuJfpb5rYEbOcsdYB66A4ejbhvHzKCOhrwOWTUT9rkGrg0gz6xgAmVcPMEKergm141Th5R6PpyC52bMKzdoLeqtsgD8ZamlEpMeBfPNAUNeJqRUdFBGqo4w15NSe87xPfSjRCHBk6Jy2R1qZUMp-OEUVKWKNgkISglGGAAVKY5KFE9fHX5XaUKBMOhU-YbgqjQPWWt1G_N84vTdpx6hqJRr5dDvcfM0jdcHfB1wYHD6BA7uUz60iwk_0ES__k2biIucfPkznJOJA", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114142229514550947442\">Setyawan Diponegoro</a>"] },
            { photoReference: "AWCwydhz77Ffs07qGhg_3uCGOzxRaJugIqCkDWqMThlsUEf8Pa1yOKHnY873mmInXkJpdHF1GXEpAQjrqs8C02QA7b-iKh3CCcuUdai7mqJLeZfKGCGR4uWTWWO2niS76B7oS6VjXddGl3Cd4_NQ-ZbXtiWXISf3ysS3MhyqLPQabX1h3Lj0pC7hGPw5J4WzkXe_3reZ07w0M84MVY8RJYZcwbAuUJHBQSAoJIZ3GhRLKnufTmX2ddFq9DbSbCMXLCAs_U4Hnws1AfzHGtBlul04HGWBLCa_OlD9BPFz05vMBTJLCX_HxcaJQXQ95Iv-t75U3cE7_gJpwrPc0-vr7PUrR52Hh4L9bRvXMQXyP65p4hJR6aIMMgFYPvt8CcuVc7K8KBYLq7i-g5kuXuEmnNIiDTwi_1p7TQ7lQZ750yLPWeVpNZA", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103582118514972434246\">Aju George Chris</a>"] },
            { photoReference: "AWCwydiV86fO-ZlbBQqAgmRvYg_AoctSUgCJC0EPfsuCi9blG3775t84-IFOFDCfN3_9AqywlVPiV_Dq_px2LUDV_dEI9Rc-lho4YxE2-1tihFlS8fpiR_IUMnlbPHH0S7uwzV0ZyzuTkz8G3cRRRykdElE5GhZnYWIcDSR1vPl96ieWWXud0WiTWNdma7t8TbX-OWeyn7pQ3CZwUOeBFOvIeXYSoKT-7CI1TTozIdHmnv087OMF9fEtdJkqX68dwSXES2zL4jw09M2DJ_fu-BjJV-NABnk0RSQH8cqqYLsbqu_EB7McScKWXt206bIEG4YbhXFMM5-StmLy5jz49KNNco5T5u_lbkQgjN5pkKgMOwjAXk6N29Jx9xWMP52yEHYsgsDpU6YrH_SoQM7mioY83eg-4GiC8Xj489XIM37PL8GHQlKb_RPT13Bgf2e2", width: 960, height: 1083, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydi-pjesterOECAfErrOggPovVGrS5ZTtCPpIrkyvAO8bxL1zE1phwwe5Ml4WY40QP3UndN-OysMxe2DUuoUNhh6iKTguOrc7immRmZVCifoZ1apTWhVCfoDaZfPyNYXeqczjR0vY0LXg2SVcdXgmC8mlqdwy5EsHnC1lQmssBjonrCY9oCaOjcsqH39SWrS8JzpVyLZ_FmmWqXlgmG807jOYsNC_5Ms5WSEWQZ-Lc1y1ZmpyK6BNyKfCKPSxpAZkYangWVwTPfN6GDg2UpaA-LYyPDH_O2FypFyZBupyrBPEzAEHWnnk29xG0wbZn4Y_c-GpRYN6ktt0mg2C9EeycAb-bZQJdCu5HJx4eCbyJv_4q1b3ByYra0PDDzJ0romNFq-V37d-IwheI9hhEI-6A9nMJB8WvhNVub_cTNAWqtpCtg4", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103978779007526786534\">ren</a>"] },
            { photoReference: "AWCwydjTJC04ZxbKaZWY9rkwhjk4boI5EfgK1vSf5zUHISbkYliFsd496P2oz1CY24531y0N9WAZU2XoYqLRD1G3YWhOg2XGo-6bpKPdJ_Cp8y40OfUMFd8OYlIYZQDnZgHyFfIOxwN4j6p5j_wZpdxG5x6caDnnzUNtJFShLLvIaTEaNV0OmW4Ns7n5fV0CerJx-WtPkA6ImF6-T3Duy6rWv5sENzycolH6HaoGk_uOxgmMRp1s__vGaO0ukgaoYqAPb41VH0hPOvRZuLcHhr0SmbaMo8Lyvzd5CBxQlJxRK-sJw1AyU0r0iHCLRq-ykJk64XlMSbY0s-JFgibUwDMxvTjFStr92TYxJKBTNsNpIfY-juJiZo83Ub0ItfSq_dgldyZk40cE9Lp0_nVbelVKfwyJyWGfcxWeYogl2Un1I0aXTTvDa31EC3ke239irpBN", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109383705891355670212\">Jun</a>"] }
        ],
        summary: "맛있는 포크립과 그릴 요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["부드러운 포크립 요리", "풍미 가득한 그릴 메뉴"],
        tips: ["그릴 요리를 좋아한다면 꼭 방문해 보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "포크립·그릴", items: [{ name: "대표 메뉴", price: "Rp80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9372691570032778739", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%ED%95%98%ED%95%98+%ED%8F%AC%ED%81%AC%EB%A6%BD+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "엑셀소 마나도 타운스퀘어": {
        photos: ["/images/manado/info/restaurants/excelso-manado-town-square.jpg"],
        placeId: "ChIJWQyb0xZ1hzIROHxjO50UqRk",
        placePhotos: [
            { photoReference: "AWCwydha5wy4Y0iaCRTnjXKNJLqF_2QvgJJEbXRQ91EULLmvVVh8IjJvzBYKaCZHraQc6nAOlSrZmdwXyhlU7z3DaeqEeLeOI5DC9qnYlkssSSfGyFdXWXetREPUBaMEPzw8Otv2GLA56RjxBMcXvQn0NPrQUKHyy1f3g1IcMs8qU3wIM-vrzCZ6OY7ZqlR5LC5nS8oH2GuLp6g3obNMS7-F2I8XEyTMgyAj6-BzaPiu4SNk6CvMtgiHxfWOk5Lb37Pv_wddBPmfF8IzLeP8vB1O7_vg_nYvVjZdgkij3Tam8FIFezY-ewP-ERCcXu8U1Sq8v6ayYicwnddY1E5HBZP29lLk69eHfqTNUgIohEOZ2RuL8VB_PjosuA8gMG9k-rRVTD6qGjOHThE9Zlk3eHAMOcbVdqBuF8mK_mB2mTlwN0l8sU5q", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101563009871228548056\">oLiv Walalangi</a>"] },
            { photoReference: "AWCwydg89feCqlo1JNZdZwOz4u0gFQHFYdx8oQzi6dBVbTR0OqOOHc5QtGZbcOSlWJeJlH6FtG4ehznWdZ7CI_GUrzCyKsLihS2W0yMH1rpI6_n5JdR_xkBfQvPV-BVjwsJROfnPx-sVr6QTGhHzisQC4g01X_vHf6IUP-ucLl1aXSUVIHoRu2u0-A0ZEmaT8Fg68H1NXdGQbQsXug8PIbBgDAJBzRQWdCqDEPHJwNCtRJ2y5-U-_wXhemo5ERNj921lKQ-BwaXD3VszeAB7JyYGBMqIMLVGM2oA9i4m81h1eWF002HYe89x_1ElsjZegCNLUQVwXcOhCeR3qeJUqqN3l2o7DLGAO93GYeKLldaOMNGfXpNKm-qJnbQCuGM0PqiVSoG3NMR1vpQID9otsXb8aqe2bOZW8Y7Jb7gMXy939MVe2Q", width: 4048, height: 3036, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115063470019062172450\">Marlon Alexander Ngantung (alonalexander)</a>"] },
            { photoReference: "AWCwydhfwwdDWEtMEir5NZ2G8rg0qNwgVe82AaXRPd1B5lRqN98JLA6WKkYxJmALik_MiyS8zya1EEIjSnMKOUEAAMIIYw1iO0g2OenD7QgWFoNdL_KfIXDIVQWDuboBh3wsG1MNqjsgVFrY5GUDX0ldss-YtXzHGRmcu3St7IwSYMkOFrv6piwNg0uXLdPZ2O44Zl_vUBMUVUvYQ4xa7kLUDsxnmN7ScQYOY7iZ1U8ii4dZVyNzoNg_xyyS3L0c1aZmkTdHTAgbkQZXngymMjCjhbGKM-Rk5F2chov5_heh3gySldf0Axy90BL-2UJpfSk7zxfMX1DlbslZeYvMBs3w5Hw8VWzO9vHDkxmOCahmYtbCVNUAtaBySEWbaVjUrLDbmqSK7kedPQMpBs-dO545_FRLj-9WhLGUoqIEE_ra98kzJQ", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111289441344884487436\">H. ito</a>"] },
            { photoReference: "AWCwydjqHQJ9WPkpVhoHCfSjNB8YnqVzAXPC8NuL_qTpAqckaOfQdaqRPRa5R-qy_gJNgSgipLRxNeqkcljNIoaih9cX-9rpZCJAyL4PQ7XXtC5BVEyKLJZbqhUK5lSfca5EhNpovsW4RG0xU7L-n7B3ZP3zZLSepQz-V14mHjrp7KBrXcHBEkI7GVlxpAjm-MBB46n_PM_8LqHObNi2R72OwRYDNYUTncsobP27t3S5pBqKP4tTq5H5PbkANJZg10XZ5PX17hZjvh73hp9Hgx3BZLQEIlm38tZDa5NpYU8VSlHH2KkUBWpY2ICFSoR1ozlG316fo0LXETcN2DMgM82LkIgFHEJDam_Yi0nfCCXJhifGirFxCZZayg5Ei8T9WPS-US-DVp3QDfg1jGCpHSVqBQzpEB0iH2YNQXLTAkHQ-jnuos8aMYgZdjZu6oLipnVh", width: 2296, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111238153590770840225\">xtinct77able</a>"] },
            { photoReference: "AWCwydhApinBRVFRFHRA4d5_CJ7oF_k_05YPtbk_83RJL7dDy_Lwd9uFjpKTQoB9I_NrEZySiPNLcHBpBo9g08hnknMmLapjaxUTzgJDCYksZMdNhhrLako-cay2b1TVGNoxHBQxN1079NMpCbCpeNesRPeqpWGRdTGaY5oUlCNi4_y3y077rZtTyv7K5_PZQ77c3W-F4ZLDmGrNkKX6sEBEgxLS2lDXVz9Yq-bPFkCZ0c9DJrQPFoZWIa84xWaXZD7EeDCTNYIQ9Q9L-aU3873DnEHsFyHUlURfZeL3gMTt7_VTwLDQKLRmRLjyaHS0lcp0N1qzAzpIwv06nWjgRQwjaCLOiwXftsPETO95evWV8wf6XUTTfXbO43s0eFD_OCQVEzcvz5ICWZr2RvRMdZSs4iMrfyjf5msn9SHBGnTwqo0utw", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112300802283560000498\">Yudi Makka</a>"] }
        ],
        summary: "커피와 간단한 식사를 즐기기에 좋은 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 커피 메뉴", "가벼운 식사 가능"],
        tips: ["타운스퀘어 쇼핑 중 휴식하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피·간단 식사", items: [{ name: "대표 메뉴", price: "Rp30k~120k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16856556687777584381", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%91%EC%85%80%EC%86%8C+%EB%A7%88%EB%82%98%EB%8F%84+%ED%83%80%EC%9A%B4%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카완 바루 마나도": {
        photos: ["/images/manado/info/restaurants/kawan-baru-manado.jpg"],
        placeId: "ChIJ8fxL7eh0hzIREnwaNDs-ZSw",
        placePhotos: [
            { photoReference: "AWCwydjmqF2gPSvVuOBjvIUJec0_8PPw20n84y6HH4vlPMOGhgvyBgpe74a1pcDaSSSF8LDLIeOM_jRNKSwTbsrrfZX2jmO2jskEBBHyq1VadtNWVUc5lNYoXoLu3MpckcGU385nuB6boJYccbWRzONLKns_AzAPlfZedMip8DDY3M3Rz4-nZ8X-9gTUZc65xmBcbAFQgQKpXAGWgYmqtKvR730zD3ubtu7jBbjAJuzz-JcYN0fdz3LXktQdUqa9YsGvW4oWQyWaRYy8h2IG9b19D-d7rYqZsA7esM-mWBfpSN5HSFYMAFvLJhlfTXD07Z_1gZdjNd6Lewr1_7vH-RISe1B2xq4t5us-MhBKA-dmlb9YDWszvez_nJw_s-rP5vIV9gmTVOvQ8p_Msa4rUOa2qgl8BpvQ3Sw4GVbCa-7_Ai93zWGK", width: 4800, height: 3194, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101883784326771595483\">Kawan Baru - Bethesda</a>"] },
            { photoReference: "AWCwydgAYfH8OT-LEAiy-Vs_RCge_amY8-c00DDFejjC4uMNa5wWjPKz-MYcfsbRiNS2aWxRwE0HsAvtLuvnpi_cNpKZTBsY427XxNYpS_mBQpaozSfIYoyYXMwhxoPoVb-EBmyWXGk5jcIoEVDCp4d7LxMZOHMMgDp6So2FTZV_K2WHfBUiIuDHTfoYouDJxx8Q8VhIJ560gho1qqSVPuNIMSMLt7CqWADoNRkGkDlJT-dyaUJQJprg6PBRMv6ntwN949WL7Mb552TLo0u35ov5WYC70Py1IPEJOmLioYUspjY2qp3ccAEo3wo0GH_i1jRPrRkEQeCp1Ntg1_blku0nuQf4dldGTCgFguwz81P-DMilfVxqLLUIpwotURi0Q-w1i1oaG39U4SoWmpg7SFGrHNOqIkH06Ix-RwE4cw9oYWCpYjh9", width: 1064, height: 708, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101883784326771595483\">Kawan Baru - Bethesda</a>"] },
            { photoReference: "AWCwydh5qakvJd8gChm9mdGmjrIfXNUKz2fS9JAN-ETk7DGpSt7Ra6zMb_i2cJ9DLNBvrKdHYCbdcN309QrMjCUl_ZAgxnxkvyFGKXLiUTEN0q7LltmJX6wOWQ4_raFrb3VLTuSV5sASvxWMnjdhmFC0E1gMGKCcxE7W5_zmjmx5uTe36X_buArdc41EhvuIXqpK-gSCXzTvt82aOxecDVFj5zbbjgh0miO0W1G9uVTELp9PkxjGnYfC6O_jB8vgOZpE_3uskcY2WlAWU8K1gSmDVRwJbddwqd3e94ITtDz9WhATsUBD-4HJ740E4OJ1QIyOEbBb-m8Hsjo7dAEw93nB8_verV6O9_cCRFPuPHTOJkjgW69LBMg2eyaxwIzQBz3duAnW2xQ9mKZkhh581K4pygehYJFOVvm8p22iVPd3pG03Ow", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110279567604957637156\">Tomat Asrm</a>"] },
            { photoReference: "AWCwydj9a0Gh9DhRx6MiGbRP9PPf6hIuUNozlC1RbnVUoEadw5tfsHl-oOVL4CsG6zt3KSn82W_qa4oS5iGTOdQqzulkg6hb0exW1m8J8q9vTjlFNc0duqqqIv7vl94y4gMEw5YFU7LlHTiVesFjst_Kn8O42eN-7mybavfMHqDq18g-NaRrl9zqcBOg0XllfWO101JCVCz1LkSC0F0Exr1ROsRkDyE0vuxhzcNc-ApoVe_NBkbZLweua8Gbc2KpVjM8GuH7hZjt88cHInkawLIkIcCFHfi3RgL9K1VQLcjVZWHVK1VA3CVoWaQKK1HdJrON0s44PJoAT4hWdAKbbFVxbFxNkAqw9vWkGfD4GKILfnPPJ3XuyDNp-hXYgDk4OduhxWgnADc_i_izjtEQbugu-nDhIQQDzBl78an2VOpHMfyzmA", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100164130894014694113\">Cat Lovers</a>"] },
            { photoReference: "AWCwydg26tUcNNY2gpUm8GxBgv_qZwX3ajFWdCP_2aiv5Tt5qqDWlnHlC4aLRR5cW8LGmzPlhCW6KaMl3_VLyQEHo7GxtB5bY_xUHXs__4gc4oU8m2DBmLsvbJvR-_obJzJd-NOB4rCB63zetycx_j1pzZjaSWc3ECvSedF393jYYrmJimB5YW7UHL6WHk3H_sl2Jy1bO5n4NMROLXSGt9SYTDdhykCgJnbFb9qmKmrHKyKEkZV8zSqXXdvvszEpMGxsReBXT9xok24w9H3I0-xZb9OMVieTnoo6mNsHjfCc6dSUuqhGApBz4e6vqR5nEpG2HjmwRWeU65R7T3lAsz1sib81HwLGYsT3xvf7DylujIPnqTd-ANqLoCRe3VKJ783JCPNnJHVZCmb3rFbLsgyNdJrFQXdrfnAJ6iYJB1oHy7LfWzEDRHQIREBbvFMcFWy0", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117062465042324103083\">sissyanti Kaluwulang</a>"] }
        ],
        summary: "현지 분위기를 느낄 수 있는 로컬 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 로컬 음식", "높은 평점"],
        tips: ["현지 맛을 제대로 느끼고 싶을 때 방문하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "로컬 식사", items: [{ name: "대표 메뉴", price: "Rp30k~120k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://kawanbaru.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7942744666450264789", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%99%84+%EB%B0%94%EB%A3%A8+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라투 오치 마나도": {
        photos: ["/images/manado/info/restaurants/rm-ratu-oci-manado.jpg"],
        placeId: "ChIJxUz9nj11hzIRTQRU0jUbkJY",
        placePhotos: [
            { photoReference: "AWCwydizfAUP6Rh6t4QxRNSQXnDov11oquOFl5OD20USabc7I89c8i6ApkjwKhUjKwwr2BzqXILsQd6HMSaLvYeHV3fKZlzeR8mGvLjCQegrrnQOmzFCMhuw6kCqmJXfDLuBoGpgigtnNV8LS6fJzPm3pgUzp8bOmEgrRFPl15fZq3vd_x6ltqIamgy8z_7BopfWKgf56ZvVUnR8kpgr7CYcjKizyO0tUbq6YVr79hfzMD50M6zOlDHTN-Etxr5p1XNj8PEP1sQ2eJH_leE6KnjrlbgMuVXTa7Ayl9ZCEif-8z3tNDnCOL72tqUooKV-hi66CJ-sSTHFGXs5uHnGM4hViWcGA6q1dDNVKl_BgfA0N9ezXodoDLsxf7H0VDtOsQYHbTauFxoxginUWggzAJDi9Wu-DTOkYMZXS8bASz9DQaw-abmd", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116906772978348321326\">vesca caren</a>"] },
            { photoReference: "AWCwydh6OiksIIiwUGv4sDuc1Xy7cAzSz6Gk9JE76qFOIfhXcB1g-weVqmH5z8f0lzev5p3WaqlGCQo6vliAer6_L8qMB6ce_oglZIVMMEv6dtZykycb0cIGjjnADoYX-HGlHUyuPqchH5swJU7Pb5injgLaNaEDsJxr7cy7JM99g487AntoeqhAjfDlqxzke1Z4ydBM4d0Qur2Ov_rv_hWAN1kGjP9I5nv-S08_vRIhqby79mYGc8Z41RtgRu5YrTcZo49XjH7tkRqCByS9rxUeK1MxzzQlkmtIebMveUnxZPHus4Wsrk9p8twzqe5US6S29TsCJjQDCrBn1M7wpNSZSz33T9D80Wkrqxk_G4F8QZwibWFiE5vlQzJ89lEqHHzCHIYNZixXTOEXuYGuULdy-zCGqGABgIuW6dRxdnruleSVKw", width: 4000, height: 1840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109717620222268313606\">Fathur Rahman</a>"] },
            { photoReference: "AWCwydhpKZjnye7pK-szK2ot6mNyZhRZ04k4zu3BR0DreEqIBd8zwwNELxiwXDGhUI-0kEb-r13kN0eCKhK_K-DgQ4aGed_74YB0Tv6HMc1oUlVp6xt2wbUARw5T1xmmbGpcFLUS7fQYvgsqF58SjF_nNntc5WYnSOyhLuxFIAjDY85EKwdwLTrYAeTsL-_r2Od7VsEAScseWp2gStHB0iZHPVrmxPNTiexlYODN-EgPxfTQscJWpt1sTSLgQLdi13lacJgN6pSVdXB8WP2w4FYqAD6i746uezy7MTxbYo3Z-cbDhVHE5JyFzbKltWhh6rB6WKxM9anmnIw8B5qvAIGz-uZ6Gpwmxvjcg46I4CbQPEdoYz_DQY9HDxZ3gqmX5FKgGWD1aHlQAmGXcA4FXlp9sWmBbGHEPxKwk5nctDZguohewOQKY-YqcY5g-L6h-w", width: 960, height: 1085, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydhJi6EwnX66hex2lDTOTkXfNx0A4iTZGI_ZBX68QK8G0qoAJ2o5Oy9sf-WM2FLv-lKeDfKCj9w7EigwGOcvwv_G1P6MGABYO7cB78RfgbMyYFXflZm2ah2zHWfAGvjMgTV2z_RmN5jkdW827bndNN6HPGjY3he17zdUULxeCFlqrWEKc1wQ7NyWoPizFundAANP-p2DETft5E4bAnLQpoJpIAiSW5keBPKq9iLZtaGbZNKpqb9yzJDnIworbNfLQzhUN56bmy0gFCEGST6lskGyAhdiMqWRIr1DZURYZSxBohu4Wrcez6kKywqNuqIxqdDEEcFXr5We4VMUui2GsLxUTBZFtJS_73Y_VgWsaImhDwrTAS_bEzDaLMknJMNXqz6v_cUb2sPNZVpqBOv4PKvH0OhWWnDmVyDlvcpBnaLgXxtCDi0W3_PhriLnPzys", width: 3280, height: 2464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114730725437970626312\">Robert Siby</a>"] },
            { photoReference: "AWCwydge-VOS74R_Qgx9392NOdFIouUVgQ8603ve0IeMsqhSocH2RQepHWolVuVsDUN5ODeyo5vxeKli4vvJH6qQahIO5YSDt9wvqDhqRWHgdD_WhxDbZQKA8oysobOubI4krRCnnN5bMxZL_UVBxarBNJ3VFZToVPuaTrmcT1IyJRckEZm2WRCg57FTPuVdCVxOAn6uToHaerdknkJVQqihx7ke6hFeoRliMwa5LcKur7gYOgyPWI9VijCbhSmlhdCWV7ChhVARvvZkPP6xR990Gqcvoa3-Mt4hop41UD2fcBS19AWVBjCHM5PccWrT2pntmE0RS3I0ZQogHSVjm-i07rcwxfpMjVmEOtfATkfp9GaY24OqTHNppykkJtFDhbMvL6H_FC01YiOv4kUXRTHVdggWlksVVbnURPX_0IovL2S8l7ocSAvsci3MryV4nL8z", width: 3280, height: 2464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114730725437970626312\">Robert Siby</a>"] }
        ],
        summary: "신선한 재료로 만든 오치 생선요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["오치 생선요리", "현지 스타일의 신선한 해산물"],
        tips: ["생선 요리의 신선도를 확인해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오치 생선요리", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10849201420311462989", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%ED%88%AC+%EC%98%A4%EC%B9%98+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "박소 솔로 마나도": {
        photos: ["/images/manado/info/restaurants/bakso-solo-manado.jpg"],
        placeId: "ChIJIRcmsBB1hzIRR6xutelWAXU",
        placePhotos: [
            { photoReference: "AWCwydjfYV4KTv99VvAnH9NE4qCxTfeNg72HLHctEIMWdyNIOLxSYMMC7JY5EuohYYfATJ7NNOEqWMFZrhyAWVwiRRTicjS2TJPvwY8uvYRD3gOwsJa7VR4ugIh8NH19JNlBmf_R8aKZUX9RScS1Mt6i8s1Vk5AUHR8Pejl92tjBrTX3DIU8BsQLkoYsMrYMGjjnz4_DUCFZ-aBxxVBr03YGT3lQ3RhzbG9Op88OwqXjZSo7EsRuYPSs2BXoXLI2tWZC1YZ1IRDFjaAavVycBHnNHm2oKFLTLmThIx7sO_cAToC6Lbxuqob5Kpw-LsavYW7fz3hyq3bU94gTMqoQsen4jSCjNwAPHek_tvoV7vlOW86Qbq1JV-KQOL3C0Wi3XNGAoYwiWFDVmlFR13TWfWIXs46spK1HuAMecZQJesluxwo_Mh7VLmEFo0oxp46E4HqK", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117968910834669102069\">Liem Hwie Tiong</a>"] },
            { photoReference: "AWCwydh2pF8sWnUDFeVpXFnVCMVsUrlvq7xICdkc01hX3PsfQRP-Z_J7E5d9xwRwCkN6SBoUqaeFk-sYRQ_2kuM-WMgPv0bPltAalyGBVTaBHC3CMJli8rj-PCWQQDMLPBRA9iH-M4QfLFdj9aWPSVilSILPHDLr0DpSkpwpu4U4AEGwJSyD7raE7N9BJsc1uDzqEAHYOTfAvIpFQtNZU4JhDtV4SRGTlNH65NNDvIzv9C130voZBMYEzZwLjsDdVdBLOM0g0n498zOfbnu02tP_WEOY_poBdfV2d2AGm1Pm8yA4O3slT9XksTf9S8qfmoUDbIQZrH8NecyWIzooI4J2U_ySyJnfPXPELF1SqAOs1mrwXuz6UQPbsJeUR5gU3H186tG9m6jO4fpyx7HUHjRQoNEVoGc_wn2GMBejQbJ6RlHw4Q", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112965984821995936313\">Herry Susanto</a>"] },
            { photoReference: "AWCwydiY5duyDoKciI7Dne1Pev28JuhoMoeCqE6Bo7ciQsW05oVbYeXZORjGWdQILAr16ZVsBnr9cYiYhaMCLPbLn0gZkH2mp_CbdXeUBzDav2BDPyGqJAwr3eCXmr_V8qLVGrLEScGBowPnLcB-9b1ZsSHikYhk5unJT4OYY2Ga9Sb50AepbuRLAYBHabG0Axtc5QUUFStcDwU1zLXhOAokqju7G1bW3KlwuoNad856mBI9KGwUUZ2Aku1DWEEDjLNS3AuRTphklIApHtd7veZSeBC5_FpotZo2dEpSmkRzD_f6Ae_LONh7SOWU3lEcKkFckmqrCO37wEofOuAkv3nlYJx4fgfsejvPGgwgY9UiGGYxE3bebSIYq9ATdD162sT1mj5aICPbZW2IOIHNpqUWppEy6MtSwaPbr8iHQEyoIjZ8zvvS7YJNWF0ivE92yaRN", width: 1848, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107618134922186424532\">Bara Aji Bramantika</a>"] },
            { photoReference: "AWCwydj2TROneBxWjyxoaRxJUTLU5bFxP2q3dOgYMlJ1hk12kvKKOALqIjSxEUAofuiraOBPdC9BKpzZidYmWpobW0-XNUlamPf65TLI1Q3KNROhcHfIQQPSTnhmuWxi0XwC6IrohiNHsPFTZMqRE5sV_alKTQmlv3xYOXPptVxhnVNotFn-D7wSMUU6OQI-d3TDR1ECim7qeFyXm1NALybm8GjnQVDus4ph9bCjILg14ZhSnivTG-4To_XejRH5txLalBEzyvk5_MNVzF-b-XBCfLaLaZF1SLErER_EfAwCa0Gidaj4b1pzCP_L102E1F49mM0YvhDqrJnEKe-GVrJcksNcXf8Y-CTI9Q7iMrNSUpCc5BpiBlDeYNRkCkIdgiH7C5Apbo-BjPnrhxOcaK7eUYMJMqzorHOdPoh3Y2frOhu44wXnBX_3utVGvVZUqnu3", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114535419318695342567\">Edy Bakti Kiswantomo</a>"] },
            { photoReference: "AWCwydhVQ0pY8p4eiiJBP5eS1ap5QIu7JPj7KFVcLDOOgBznBXUtaT01-E4P-mAaiJIWFVzffF3sWQGSOI5cbKzoi82KsAQMS_Ye3zp7wJCtRlH0yeWwAtfCOaPK5oteF4-b4z3Jj9-Tcs82HB2cy0xeWwqTOxVCThAZfuE27d6hgmW0B7Kw-LC9uFS8R3qev7b0zaU36MoewEjC-jiq7DRZOWYZxYvx5xAFrP0do92rGpirM2tC1KWB9fimuNxPeGBPJrjEIWfPRbJfalmLPch7PlAVt4e4tHMgtjnt_2a5PQ5sVChlYktV1T9xlYUVHfgQ4wkVwKDI_o4FLsQYr0jIN9L2t8FqpDa0dR1sDVs2X2zWTORJLEbXUmSFqhr5d8OVE33M0Cue1lLWlSar09OVzXbOjoiOJu2im2yD2U2zCzLqT4b_", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100404569461527555105\">Tatian Ken</a>"] }
        ],
        summary: "깊은 국물 맛이 일품인 박소를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전통적인 박소 맛", "풍부한 육수"],
        tips: ["현지 스타일의 양념을 곁들여 드셔보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "박소", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8431115539185577031", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%95%EC%86%8C+%EC%86%94%EB%A1%9C+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "루마 코피 티칼라": {
        photos: ["/images/manado/info/restaurants/rumah-kopi-tikala-manado.jpg"],
        placeId: "ChIJ5fCxpUd1hzIRFMyov7XEEDc",
        placePhotos: [
            { photoReference: "AWCwydjDSh5Q4HTkJY7Asqm-L4nzoM9O2JTEeA_RHh0PmdK9MzwwrwL94PHPrZfz3lauto8oA9uUg9-hk2IWpKynS3Xg8hQyVz81EdGC-lukzZ3ub7Bw2MTgkH2TdKABCz77sVt8nAYPVZWnLyjJqgFNXfFOCG4rkPBeqLvkS38iA9uFtNYFiL7vEUVuXwTCuFzozP-4hcUCsaQ6vqAqyXFlsWq9gsqY36LjthjPnpEOuaXUIyYjMtm3iseJR_nf8xxnKJlMVmpuoWz4GwIz-KH4YBzoN-D6GiYJ-h8ikVnkDYby_DlCczSnRYl1fv5EOxeCrJR_nMAUQKo3L1zP97O8OR2CHFJ6_rdqKhL95df-J45nQWTsJ50sHEmNAkXJTSnQmRbRe4h_MdfilbmDWnYrBtQTElPH890lDJb-jAKRa7hN-Q", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115000552314093973410\">Fajar Adiartha</a>"] },
            { photoReference: "AWCwydjfwJ7KSTMsbSD07KB4LtCTe1DLzHl-fnUG39WM9EoS9NGwRmniYqLD1d5bYKXCirk_71tf-1zgzDr3fNyxLkLWYKQFroVWTR53wYy-GYUjIar9iRFxH3ausZhb8cYWAN-extzD2WXz6EnUlSQmhxamEjNP_V_ATngxwRvzdfCkn77PW29E4m1KUzwe2rwEXsh9WRfU56tAOGUJz9M482rfGDGUWSjPxIRqyCY7YxpgY8W5MMkWf1NxgpDRhjjFkrrU96_IZdqW3tEudxe3XLKBZPWnkNK0d4oHxFMygWYKFyQK0KduenJ_wFMTaTCfNyir9CCMHy_GvRtWntyf0-Lbq7P8Qpx-Ppq8Ft2nnFce_TgfHO5B_7ePf3hC60Dm-08eTJTA49IsP8hpDvaqZouSW-fMxwaPo3ldnu1O2zgRTf6Hz5aBO6viMGG2JKSi", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110645237274426057089\">Indra Gunadi Santosa</a>"] },
            { photoReference: "AWCwydjIcAY014k35SuZc6jQsek9mz-mFxvNNzlHwuSbbjqzuXXskj5V1NCc9XM1HyP67VIIDccX57fzZRq_EPjp6vDz-eFjB6N9_-h5lnlgsmJsso1RNkg9s_AwqgYzaxdEGk2A1zIAmQW8kgsq65wJyiUejNd5Br96quFrD9G5ZH7QJIxTm2xxLq2co_e2weoI86KYWgSbG_JhwEvYnuLv6nHnss9H-xB006eujLBDWLZuMAm97KUp1GXqUo7K3rJZvu_Fm_qjHmdSRHvX9Eo_qpkHWxsQ4L4Rra7BqYlDz7g3ezneAjQpFkydgqTi2CFAhfTW8uumTPR-_i65ls385UxcR5t5KNWj4tOHpRah9rNfMTYB3GCJE7NqjZlJg0vNXbz0fzy2lbDVWyLRCt0_4sIoay4BfFIrvIQCQWlblr-znuLnGwiUFGSqtabKsw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110645237274426057089\">Indra Gunadi Santosa</a>"] },
            { photoReference: "AWCwydisH7566E10XW47qQkJZiPqZ3nSPOOaLP4VKD73YeW5Dtfrda3Xxsf3TIueZ8KjSH2DmJrCl-ZfoYZomVXs-06pX49yEgIyVs3HvITOhK5iY2O6cD8owpgneWFlY4qmHihX711gZTIUnM3HGy7gRa2Grfr-VWwfjLu2FrK1fXoNJ1PMCm5YQtaXrI5kfANBmPCCjkhWqcmvombG0WnfD8HDzFIxT_k1s0SmjCNtlQopyGvECX91-mBkK1BKwrkxHRFIXaKQr3JZnUVJTITGv7d_JpVlFQpelRaxNIqK9jXX_Ojs00eOUhu6w50VDLfz8QjDw-GilBtL_bKwAQc63Y-mbrQFm1pGGjKI8ZW1BsR0NcRCRQl5Ff_14ZQA5pEvGO2B3T_Pe9gKCfDgCVhwFJvZNf6HSVp6VCf9exw-m8WFF9Ljj72sQaJ1CZMd8Aif", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115890527261942180827\">IRV</a>"] },
            { photoReference: "AWCwydiNbokF5YBFXkD5tL_YA1M8wTNS773IWhl9G53_MG4_P3zOpotN1UcOMy1lyUuUujMwUjdJqNvrZsBAXh4utCKCAJ_M4CJNTz3xkF8cKCLEbc8lwwdtDQen3d58wejiYgq69E-LaFvovd-mD3e7MJz8GTh_6C6BzUkxcGtDmw8grHKB5P5J7Qedf0ZXnWDX8h5eOlQW8XFeozsJKAXmo3CauDXhS3KEeKU0V_r2gajUVrpNGsLwkshnau-LZUk3Q3NQ7xVAj9iMCicEBMEx8WMA8ZHKIDwejXTqPBCdoue7z83R31WR553cbhQhu8O2fNpu9uY9Jizt6Lx-4GqoexBZLPQVzc6VDARLS2V9q1eny0tHL_ZjyK-0ENq80_PkB9wHJ06FDFemXtjle0boM6L20qF4mKuTGyZdi46i5U5OqtWxo0PPPtV5-yK4dyCr", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113732044924169881325\">Rudy Siahaan</a>"] }
        ],
        summary: "마나도식 커피와 다양한 간식을 즐길 수 있는 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 스타일의 마나도식 커피", "맛있는 현지 간식"],
        tips: ["여유로운 분위기에서 휴식을 취하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "마나도식 커피와 간식", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3967887556597042196", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EB%A7%88+%EC%BD%94%ED%94%BC+%ED%8B%B0%EC%B9%BC%EB%9D%BC+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "미에 바 가루다 마나도": {
        photos: ["/images/manado/info/restaurants/mie-ba-garuda-manado.jpg"],
        placeId: "ChIJ41d6mhV1hzIRF9kbI_uK8zw",
        placePhotos: [
            { photoReference: "AWCwydi3PV6jSHyQOUdVnb-PE_dvR2IhXIZxLV2hE0n8KjsaKr-K86qWX1SjgKaFBMNHL4B2yI-F-LUa1_n7Gs1W_2X3X6tst5wE-vpHSwJzu3zF4aXoIQPHnqtfGzpxA1hYfWCNbPm-Y7c41bY9DUbfmi_u3DmV5UaryPdwYJg9BREiOQI3cQfHVaksLOzrrbc3hKZq3KJ91nXxeeTmN7bm3VFMsY2RuWkifluwsUkemgb2k4p9dkuNidTIojhqGZyApAVLUyD7Q4QxM_oMttzr9nvO3ZU108-L7gD2P6NMxL68qopPsUkyhh-l_kZtPvAEqN8s16yCaD2KPKPsK19CMFFChu86yuBU6SlzZmEaOODVXtl5Ikd-fJTipDXxoR02GlofH68uDoCfVh1CPPrRul16UD_WylLDDr-aRez1XPOJpUEg", width: 3360, height: 1792, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103231523600222220001\">M Gunadi Henoch</a>"] },
            { photoReference: "AWCwydi7Wt1AOV9IGijEz9TVVAKZm3mlBPMCMQh7o0davU7EomaGwNzkL7HnzvYyBSDIQmimC6xvDaMFGuEAQyYzA4SBoOrrTUvcgt6kEHb4KuIYa3IAHZJD4VT5_JNBPvfVZLhu_JpxvJDIQTNRO2QZstMW1xmKgtXk3kmJIBlVm_yH2-tmqrtdY6S089rDfs0l2QyOfk3tSf5G5RY-UdVX6PE8f0XE5Xdm6LvDDeFCPFl-RMMquUG7OaujQ-MkQA7QaANHDQJRqb5pOeGOJrCWFKROHtZpE6RTpf1Q9QoaYhkFqefy4nQtWpjBDSWECbLkWxTssEDHvGEyoi113g9wIyBbU8CZmZtyYjP8tiGTz0lAeJifrU5ntCs9p4bQ7QbhG0kOx5Kgz7QLn2vn-kaFcQe5PPBMNzWbcemXlPBYXGI6JdMB", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117792748194938734667\">Feby Andarius</a>"] },
            { photoReference: "AWCwydjHT1X7HYNHxHMlvsWkeofRDoXxxoooxGk7zP9YTSEa4iV4O1t-hRCucwsGfE-D6qvo9JDBAtlf3iaSZ-fb-cm4UJrJpXq6SatcteFyRcNHO7ktcAyrDUuRmaR0xwlKrxNYlc7Ar02GvPxdu14S8fc7mdleUjGecEniJv-xDokxTUVV-fiEq8qZlIFcEP1EzgRCUNIoZC4lp5q0DfGIv-k5hmDl7R_H7E8k2ZmTyCdnJqP-1LudvdXOtZNOUPSJ3h6aaik76kMoHG4CC8P0eQwJlpOy8r0gmzE3MeJengj4gQIHet-UVKr70bXBKs6DP8Shf4UzmqRSuPj2zkD3Bg9ZZHz-uJGTAAFvKq-qnAawyCPEqtXjt8jejTdIwbDVTP7wAVGHfbqtO6mbtG-V5FlrFXHsy5EB70ef76rCWDsOXDE", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101794081110734181025\">Filya Dina</a>"] },
            { photoReference: "AWCwydhqnWPSoPJUA-DXKtw3261Jg_B7n_lH5BNsPx3fQfQ2o7ePi38onlpfdq_nO0278cZc9yPWhiE2fSaHBITe2zJd7hLaGydggaRPkNjAa-WmW3VQ02oaQksimSM6048pu5iqR2GVt11zEFYzV8yWlTr3rrVGyWN3-nlA98NDDFSqFAiGQ8BvNEq9nzEMy-bz36dURwXH7igwWWR5MY_bELHiaI9QwAdsMJ4wfBByELBe-8O0mfeVJ0xM9B-R9em1bKYa-n2OzgIApRRrrZs_7Dcu4iD1S5oeRtY5oFbNdiBoRjtIOEgZkhgOHRaY_q-JaXj8zV0jkSsjgWpVgJfWQ2hjkco_iBlA330egUUyjiOEX2_ZLFC3Menu0Hn9TO-FuHT3d5V41VNdbUPHxK2AhqF0dJrLIqpEql8-7QPI1kI", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102615082558770696386\">Keziah Tuerah</a>"] },
            { photoReference: "AWCwydgO69FETx2b5jDkYI2VXfMgOSOEX555tMCU8DgIanW0nVWklkTRQ6Xz5tmFoJVlTit_FfEvHk0AClpALpBlxkbL5HTNl_LQi2olGv9ao-3QaPKcfG6TP0rNaWAkURpQLFPgMA1FTSBZPR-bfupC4j0Pp3e0sc_5x4vaHoV1MXPV94zecCKIRJ-sI7zWSbktigF8JcLvofjNub8Hp_1gYlOUAKU7ZyyS2o9KqjAzSsfMvGvOLGXXqL9IUqP6NSDilrcTBRD3jJcaNtV7zTCIr5vU3tZ0vn6pFpqr2boIikyANNlXajxbp7edPbU9xBARvNKtRvvK5vbMUVKD1IwQX6wTIXzKdm1RreazT8D_U-7BXioFcQYivIY2TN3tbveYRlsQscAJVrkEzyLNa9O1DU5nf7aToSq2iD9A01zUdMqL5hd-", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102615082558770696386\">Keziah Tuerah</a>"] }
        ],
        summary: "높은 평점을 자랑하는 미에 바 전문 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["깊은 맛의 미에 바", "검증된 현지 맛집"],
        tips: ["인기가 많으니 방문 시간을 잘 확인하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "미에 바", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3451451490697757294", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%97%90+%EB%B0%94+%EA%B0%80%EB%A3%A8%EB%8B%A4+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마갈 코리안 BBQ 마나도": {
        photos: [],
        placeId: "ChIJ7XBCC7h1hzIRHEc-leiUHNk",
        placePhotos: [
            { photoReference: "AWCwydgS49FOaYbMG-3uoXNOH0A4nyA5dTu6aj2S8OcbNjkO0g18DLgzdm6R0QkvsCm51Xz3aqwS7606sjRJgcpTlNB3AC5D7CxT-wleln9Z9ICMrfsDyDPAv5vqxVAFuNiThgD1oflbR5cfDdlCTyp7LCAJNfAOwKa1RW0o2zZFPCrnsGPV3t-ZO13zJIxaoxUNZF0ZrNghXiceu4gZ7oJsYikNsqNvohCzP0e4F8iTpQI2Q6tXtbmjtxGZbmx2FiG1Ei8_pUQvz3ENm5iO5zEw1L365jTvEzvc7yJHVRdJN-Ep62HF1WOP1XRsyH0xOIhthMjVAZpcawUgRfpb4uTkkhos2mKmCZsLP8R-M_npX0usOePldADCvMQrK_pSe6k4YsnWIXoZEzx9NyUAOlsqb_3hVzvAn4Rr3Az_bqDGcekwj8IH", width: 944, height: 536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118419976783435937370\">Magal Korean BBQ - Manado</a>"] },
            { photoReference: "AWCwydhpFxZvG1HKQbETcrR7EU2FwMc5oCmnsPurhaIf1vQHuR9Dqc-xeGXlhslJtfiA1AQm_PuXOpUxQN8s0hUQPSat-3MqgfB6WB5o2HTADxHTSkNg4qBimJ5RU5SXSYybYalgb9BAQNePnIJFo46qYoxYCOWJksyVIYHGpAVeV3JMgDUX9P1vukh1ynLgmYq6cGTDladh2GJeusQHiV0be3_rSqFVWvnXF8m89pEsYH7IvqxVpvI9aB0cXMzXkHPs3fILBSCs08HqLVCYnHOEAvjbeYA0dqE1VI05F4zCSblwDYT1PKLAkVvJk2ZwbtOyXX_ibYS3stPw7Y5bqT25CtGj9iuhUS_Bl5_ym-HWVsxFKZyRC2uRVB-UyX0tjnKUH1FzLeJflJ8xuOWCq3tM-ny6IDCrbqeaB7wjedfIIWucvBU", width: 500, height: 500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118419976783435937370\">Magal Korean BBQ - Manado</a>"] },
            { photoReference: "AWCwydh8L3HWaqGrLS-ZyeNL4DVLMir8IKqaYihvCUUgdaetMWNhQNtgnA6uFjg75LcLHblW47wN_XEPQ9-DamImRU_jyrMuvRM5B75SLjZKRK8Mx6Fb6qfK9NESVX2tdpKawjy0pGQNKb8N3DI25bz4ZEcJ2uhCfGPeojJnSiZ9LKtg5qepAPYeS3kGu6Fo9rXqXlLJfnSS8_vcs8cxxw1rcVnLQMwj5qiAAGJfpUxdL9kHfCiPsIIUHcMmPvNXlfXd7c4Pq5uXO7X0MER_seHSyen9J6ejEbZfnz1Bp6Jdld-2Lyxs295M_GDvF1WdTApsHShaB7AkdZByM66TzPX9XC8C1C21p9mpRnpd-huhUXRh-0vRobC_IY8kQoAscmwSnOhLJV08rEoKGkOaz5vCDIPb9cr_7JQXs-o3CunEHLSvCMKZDHYc2G_gBDZiR-hW", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113048843837674853543\">febe amelina</a>"] },
            { photoReference: "AWCwydi8487REmYfezb3iD6Poik4GENXn927Q80y2aDZj2KnC5O6kr99_eNsEJK9Z3caIpIBTA0KQNRyLnJhj3GuZFECpmsbpp-JYX8YFezlYiKA_C0AmKQGEA8ahnMyjv_0QWWqTkQrmBs5k3ld1cfDdymLe_uUsTxdYjWSLHLT_Sa50aFvQcOGBPBetv0VG7Q1SXRjwijmdu4SBcS19gN8xKn1CgTi4a1XxEcSq4CsvB5ZkDRoivh7NVKn10bqOOqbSATjYa1INPvCrO1SX-v0SVyhmJeTMh2Bnixc5s7xbRtXCwVupH0089pnZwBh4Uf4f39xQfl8P0kRYcmT5OG2z--50sYxyYEz8lZRHD137KXrIqh5HJY07NUzGBantE4-z--hcRAAv9ACLxrPkwvQ2q-w1M3AZvaNzvAzMEWTJhrtKRZWzj9KdjWZ_-qiqJRW", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111405261198862171053\">gabriela sasuwuhe</a>"] },
            { photoReference: "AWCwydjBtw9wXgyw5U3A6ERl4bLJNSAO-9KkvIhGnaKQ_FxtsV4HMwnsZSEP9mzT-LcDT2vKB-8yHKFgk46t8FpdXID2t1KOJXv7VE8CXeshJX9FwvSRKX88w0PBl1HJ1r4lN8Mvuz9NI983PL6mBMyKcLAvMDn2Ap48ky7Pe4EwJ8vWzAbLXeSd_FmHoIR-4jN5KBdRv6cmIisNfpTqUCFBizTxz3BUcoS9noK0pwegMPt-bNwTIYU2RcTu3bvkSAHpcsXdsSZWM_ozx_UOV2PUjiJjqRiIS3qZeJgJuXLRd8PPehCq5X1I5Fa55baDmX1uY8KlLD4OuayiSsSKRdxfOmKAZmFljkbXHCuKH_YSRlYSqIfG2PGx52U88XKnuKSxpN93bl3YDp7vYOTVDcZE3LhWnLmBteaTZVn8VvM6m1pK89euB8HQjWj5Y5hSe0o0", width: 3827, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100404569461527555105\">Tatian Ken</a>"] }
        ],
        summary: "4.8점의 높은 평점을 자랑하는 인기 한국 식당입니다.",
        updatedAt: "2026-08-13",
        highlights: ["높은 평점 4.8", "많은 리뷰 수"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15644542932235470620", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Magal+Korean+BBQ+-+Manado+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한 그릴 프리미엄 코리안 다이닝": {
        photos: [],
        placeId: "ChIJRVQkGHt1hzIRA5crtdN7Dnw",
        placePhotos: [
            { photoReference: "AWCwydhVud5m174xkqTwXMbbUHP46TqV-pKkEsnFELWdhUrBsz379az5BZMjMWgFtj_dinlT_RqN2RaHq5Pr-yZRrPKx8KNQwwTU-gmyYHOmxwf8zOo4DiZkykJg0UjYydRoXQgMOsQlrZQf_VYNdTuYFy-UNFkCNXaNZXgx1r3WYSbdqOpKlit0E49TpPKn_IBbW-hMMuoPpnHIcgYWBFg0ipO3gDy3hq6KE4tu6FDTdfza4xhxKcwUJ4LZhOpilfvpMc_-zyQUFdo47Kk3NpisrouqTu6mkehoXpOl3HAw3K_s-fpZV_No76gQVNHdinspikIv1EOhxCy3cyKOzSUchN5-Ja9KVAfrH6GfQqmBnDsfFWItMnotXfcGENJmDxVmUcekskSXusiwY8hgpnrCA20eKqG0BH9by3GcnliqVmJcLaI3spkyq6P8B4eAGQ", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117091979243273523744\">Han Grill Premium Korean Dining</a>"] },
            { photoReference: "AWCwydgybQ5BRBrC8uku1Rh-60MQSVymJNZdjL8X36gvGQMuH8U6AYboGTJgxB9G0TJilkdViqWf0yzN2r3BNLZ5f-lyziPqwnVlA9VfHjgAPta_jnagEcV0oc772nmUB0v0pNwABg8S-WASNziH8L5Hl0WX8CAakUIhYwkOuzoZKFm2BhBy7Wa60VfWNKdM8ORglU8frh3_o4f8tBd5ytMORDxdj7IBz3On9FosRFAFmBBWyjXbDxK2p6h22Jr5wncPD5F50Cq2z--FFAwMfSKEnmJuJM6PvBVVzq_B15zCXZLRxVBXwQ2JGQC-4Cw3fpjCiTpuyVub_XCXjH13lqKGZTATymrP4t_EkzkGvNM8mg_cZIzNMrmjiyE2CGUTSRWkat-0jFGxnTUBUQQem09fjjg-mq0WVcr0SZv3KyY9HjmbgTN8Ym5xg_42sYYjLQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106473383374648843595\">김미영</a>"] },
            { photoReference: "AWCwydjdWtMcepNVGn9X-joIVKvUk72e2y7_ofafdDGN-rIUdxm6c0AYe_vFblYmNLnVyT6BipKQQbr1rEqCT8xUWMH50szTThhRNnKAKHEfcxXf5tPO9DCKtIq3dZNTWh_w4wg1eJtvNlcP281U4phQy-mF2uI-WDkeC4T8X8XT3yF6y96d_Danmvd5rJ7_zHzhnYw9sgbUXO63_rUeBDw7mxHnqrVtSwCes7xKVKyf53q-J41IGv3TXPEH4HFvhPIPH0DvNkf8A9LNiMooZfPoLKMEThbo3JUM04BBy0OebnBqDxUhXvF_JQgduc83A3m9iURK0OGJzfdK2xR5m1mjBtMNSqkWnolMUhxPsxQHlWbu_9zuISMHaG2hkqQMG4aCFEbXwYs4K57PnCGQEB1ZSuHEAPUqVYvnVswBUn6fYGgSAjLUJoUuKkOAOiPFcg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106473383374648843595\">김미영</a>"] },
            { photoReference: "AWCwydjDpnhaSL1_OgpZ_wMMN_SNGLH4-gTHCMi1kQY0iFAj2ZlSdE7Ya7qVt25T0Kg083xj26m-Sbfqv4lQflsvXmPtaT9A4DxpSLdeODNb7YW1yQK6Wl5baPXqJ4ULPdyYxVFfBk82Jdi078msBbSHtdBcdLTV2WgcFoOaZENk5AU0v_FC6cwfMuDI2sUzu7ObDFAgmdvix05rWYprws8EmCKL1NlWNNMBR9y83xEYNYYL8f8eybIdaWk0bixIWqBTNtxmpZsXxRGkoNzS2oUzW_6AGF2L5VkvvkzjaplGANLSq83hYcFwe9ui1k6HVqm6Yj8AUgFLIjNicgxpidtljTbbpmMa96rrep5U5GztGhmxY6yazXSJGfh6Vzu-2Z5Mh2HaSp3Sgo9jIxdIoEx-4dGiG9f6vX7ODa-6gblL6O0XaQea5h2aFH5iWr0vEMLD", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117091979243273523744\">Han Grill Premium Korean Dining</a>"] },
            { photoReference: "AWCwydjadrEXSkPF1LX5c1IUcyHBOmywrDSjs40-2fJUO1x0voisYZ1yaLAQ8qOTS0C5HP19aPP700zT6Znr14mLzIAvMzJerzPP7sq6HJj712Q7jO2KGACM7QHQsW8X_pYbMCbkwv_ST8pKqUOp5HlFzSoiW8ZNuv020McKTZNNz6tjmNAwvGzAdRW8kKUbkIaCq-Y6SBhWW-YELk-wIEV34QaxtsZWj45zsGNMMdfjVpMfuPwoFDqOfga2L5be_fKq4jyp7Gag2ZXIlz-y7n1rjcWzBOnEmboq_xWS7UGlxvrL88c5JF4wGqiW6Q83PoVWEe15DJimhFh8MBRzubPDTVtjd8SVEhlP-MY_Hd-GDpZXlWei2d-_i8-nYKrXizTWkqAWgoorfsy1X5xHIw9U3vnK-6clqZKSXBKDjiCFCClcu_00lp8gvLWxEGOLimTT", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106473383374648843595\">김미영</a>"] }
        ],
        summary: "한국 분들이 한식을 찾을 때 만족감을 줄 수 있는 식당입니다.",
        updatedAt: "2026-08-13",
        highlights: ["프리미엄 다이닝", "한식 전문"],
        tips: ["방문 전 영업 여부를 반드시 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8939218459584861955", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Han+Grill+Premium+Korean+Dining+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "대박 레스토랑 & 코리안 바": {
        photos: [],
        placeId: "ChIJM3Y3LMt1hzIRKBN6URe_rXQ",
        placePhotos: [
            { photoReference: "AWCwydgK71aTpTJuKFMmfWUzj9S6FBPNRmOvCe0r2Ugt1iS96DPy9RF_rJze2_KJS3Y1TOT_MbaWbV6Z-oQscvkMrkHyB0s5AXacT_pN7cweXw9ZeWo9tdcTxk4ut3axShBXSwNt_hR5TjXbhlE8tLxY9-1kHQbQdC092S8xGqWmfxv62trSqWis-mBuf9APWhk1WeSteuJASFyDG-C7ZWaewGXJsGtMDcsjoTOpeTdKboJMmz4SrLSALUB3Nkl1WaAUJucYF-jsQSexoYvGxLtFdf2z1Y-6edvcx07SRdF9dIgE3tjD5CsS8Koej00NLIRT50To-ROj1MIk66wqOVVPyxhOrxzEHBryqEfvZ8abjDlNN_Ehu1WX5zdUTisDq2g93_OwOjpMPbsoq8hTC2gDh_6jamwnJEnWL9dNd2RTSU42_Ec", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109691862235321593240\">Aru Rangga Raenaldy</a>"] },
            { photoReference: "AWCwydj6YqATL_dQ_i7CQ70_m1Gk7HVOjiaCO3NPCrswhStv3G_3vs9pQj1c5gUVYAF1ZyEoeA537k5jl2Ih81pfW8Lc_CULd9DpCz14b-6UZhvI24D3GF9B6l3hQA2__M0IqI2AlCLhiuOizpnU4f7bZAxLmZHImhxYg_zt-93o-oJgedRsNaoGsfUeT0F9boR8tcWxQodM3mixNqr6A2dLSpNdDWfhBqVxCXUQxBrlpPw_hej4XwXF3HNsmhFmVfdZlzukQo5uKoFtXNtmvVAlyXTW1enAgb-rG4H6TLfXFoEv5wVL0le3h60Aw3iB83Q5u0AwrKObiLJ1kYrvKUVLQ2EgeoXJ-yOzIUZHJEScgPFtZCr7lb_gqrV_1ENoZN3jjQsQI4kEpxybWrh9vfR1FkcXbh0J8ypE5pNsFW9_W2bv0RmI", width: 3000, height: 4496, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107611739071034228276\">Daebaq Resto &amp; Korean Bar</a>"] },
            { photoReference: "AWCwydhMh3JWv3E_Vn6XoJ-3GWEc8MB-NvqLb6LSOgqSi478XMypsOspfEG66GwMtSuOd65vzyqTl8ra9BTyu0qtRkm3vdeTjA1MBvOfWuYBxInDWtzai7D4yDEoQPue51caG2ot06o2ACs49HuITgvkJfNgb_VbeWH4Mu6M4H9Sy5lVTKR8UknNFCIlF-NFCk4LTp7cINXcjlnJH-WoId7REVSzDvyCNrnZonjzpd8zfMUYPpqg2D8PcGUQpgJ1WBJ5Ec9P6v7BuEyAMxlnqliLRtGNl-nbgeeM5hEHN31B1Xl_ZI22HpeyVnYb7SyRVSFUD0sSxW57767j-0KUYSIj6XpOmWPj3rqzW7vTTKQKT9IY85sN1YEjiFag-J2o8igUjoUtCyEjIOb7pMuiFPufM_k9wWXyMG_2oAyIZwBunfb1E2Pe", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105551899045583128964\">Chimogmog</a>"] },
            { photoReference: "AWCwydidKkLt14YeNPsAGJXGwsLX2i08aILVWkonhOKkZWvZi7-qfMLHDlFEOpIC1lw8hCy60nJ1u8CzOFx9cT9Q4bw9AxQ7ayLhToCZ_seuZSfExzNc4Uo615Nd0NU-d0v4U4fX9ex3Pwv8WqtCjx7Uub6lNz6Urz3_pmpGJyScYJnDG5P0bo73uQpMWWs8jLbmcFhO0wwac8VfcmiwvcML0isgEUqcYAqI5e2_e33mn6586R-kotLTJhsHVJeed8F0CD--SQPoFLmzuJ-wnEF18mEy5R5f2ZXsGP2XmpQktmsrvVI270iVnyLc-nwJtJxk8uWpxFHe4RCSgFMy9Mfiznc0qmjV0ZXP6SCAX023uQ-5MOnU4Q7Z_qhsbgDv74zjXA21ZrqWXbs_bK4uemdOPk7by9YNtIJVeaq64DM-uTiqMQ", width: 1080, height: 691, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106303636197841749639\">Syahril Butuo</a>"] },
            { photoReference: "AWCwydiRp0-wn6XzoxQI_FIubKBAxBkmsO4_PBc_A5nIp_qWMlU3AqUHOpcPHXkWZ4MTzycubIazodB6TSZXXnll0PSGr4O5ry6MciamdA18moA9y_HAC9ajV9pQeJDIF7chn3tyBw_sxYkpYfPj6-L3wRdjekgEAZKpGuNM_PlReASdgRII6A_31gLO61lBf-_dLqL3gAUM7QlWPdyd_AZZ9vPoVe6CbeRz1924tS2ywqxPf1wzIlSOoYUCHopx10k2Pkdic6HAzPX8UE54jfq9aQM8O5nieS3xrykKO16QxtFZ3xG5dHQ4tegeeBDzBjaE_QednqbVmMDcVula1qZZWgVD1xQrXYHRMvOW2GO-QeeYAKJpWYMdzabHv-_gqBgRnSnWUWMbbcLRvoqgsE5vgT7R8nyEPLgzjqsr1_yMPS5YXC2KD5HUDzrLFgnZUVLV", width: 1868, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108101726457210277251\">샤라with</a>"] }
        ],
        summary: "정성스러운 음식과 친절한 서비스가 돋보이는 곳입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 음식", "최고의 서비스"],
        tips: ["메뉴 주문 시 확인이 필요할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8407586186242691880", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Daebaq+Resto+%26+Korean+Bar+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "소고기 샤브 & 그릴 마나도점": {
        photos: [],
        placeId: "ChIJh1CazxN1hzIRYLgm6l_tyM4",
        placePhotos: [
            { photoReference: "AWCwydj4lx-COKqcWI4UtENj0G0w8a1xNtbBmdUSV7BFnym-PTTYMIS2Fo_-cUCbNtnvCc-DT8iof-DmoYPOcQnVXKQhks60OZLMCrwZFWFE3N8IzG2RkruMeuNsE-CkxxRYD0SYYDEpgBMYYrdtFb49jUt1zAILvmENRv4x7RY-tRH5aU-wEbLLZS2ifKgrLTIMKEk2C94boSr6FN53APfQNVO6PANSOqfKxgOUlzJ1zjQ0O-f1QwZP_67slaAt0kNd7pJRJEvEuhbDzz6Ti1J5pgqVooWFXqNNIm2DfBaq6n4YV210rgMortvyrl4LuI590r1FrOWcNsSa67A8dhOwCzoY-kZTOtbxOptxqJ7hZ6bnQG_FFdsegE5DiHg4WclMXqfHt_eVUHWrag1nI4wB6Ed9_olwqGypGezsvsnPenpRHayu", width: 3378, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114935261049983427518\">Sogogi Shabu &amp; Grill Cab. Manado</a>"] },
            { photoReference: "AWCwydgrxv9j9y5cVa6xY1ADicL4vOqNJqM4ztvGTm61zVsBRZDdrQQ_IHOaAWUyesnBAoNzbf6HjdEw0engLyosJwJ2efxg3P6DZoYGQGG0YJEAQOMIGZnSd4RdRDCchHaLPmeZeD6EqZjMX2m0P9Ph1j5Oom_9fegJWB0eSumwJqzvUThqvlkRojETCOMfUwaqsr6p7KjBrVFncikNMHG8CrE_-XwokCLudatQFk4nUrYf93HgFJG4lSohopJuaWTso3lLXEhkeBcPxtRPHpI6zJptUmkcMX-YfSySD3Bkhbltt1C1mnS1rv7CGpikN5ae4E638pA1Ir2MTdOeJzxDujC4PFE9F3KMINKFCuAVzmfMGE0bWe0URrm0a-pqeY1OECXdhWepBO87ey7iUiy715_XHyGuYxLbOllx93uDuxCf0L2Kqk_GncEM43Pxdg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100768109881274480613\">_ mam</a>"] },
            { photoReference: "AWCwydgFuNkIrwdZ9vVzof4V7elz5GovWTZwPwedgKwqepw-hrfeOIl0FeSnkOcHIJh7XTFH497uNY2XdN3zN3rcN9LkYkTDoT1-gujW3i3-toXXrWHwHI8L3O8kl1_FlEoe76BeXR6JzUCtct7amanEJj9nmnQ-b90L0nYn7vFP98dV8UZiQr-yLQPp56lQuy_WDePhHSWvncJDHf3UJ8aAFb4YQRJipxPrBhkyPMrn93TS704NVktOkDp20-_r7IQzgJ95hljwsY6Q8SnYayzpHfLmiDVXCnifQxpePx6Xwl4zpcQUG5ABoDT_gKePFw7Y4Zl_fU2A3lmEG1RVqw4ZgB5u5N62a2EdXEf-cZmd0HekIpK8PeGY-HyGkhiKdoHzAAAUC3LQy4D864VKP574IxFMljLXfhyce9pQBBgHcPniGFGzlkdZGAa4YuGDMnig", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100768109881274480613\">_ mam</a>"] },
            { photoReference: "AWCwydhmyMpXggns5Y30sl63W61VtsxlNrjXjDp17dFKShkN4QfEzV1AFEEhwLgjZFPQgYx_Gk_tJCWLJ9nEDgTp6EIasczSKVvkMWypMI54Vygm9AgckhzsDQw9l65asUC60xzxXfZFRwEfB5I0LDSkXCVMGUHljS124UE3uL1XIXHXq5C1nxwkLC5Tx_n7gOrAF3SqoJXzbcz5ZrJTmRvBgVeVnITGg9hGN71Yhc31flNFkj9zHdATahLCbWT5Ky20-2kFmD2hRo7eysNH7B6sFVeyIzolZ99zxAMA3Jx2sMh2hI0v6txc1MoR0hrXLu8fsgWzRR56tV3Fyhv_p_axEaNbFamtTfutvEOCX5PVaMvVPxXbggu8-gcNKs9pOpxqUoxiD59pvDCH2e3f6srmkODz3pjTqgRXdT7SnnxnbXVhqsyR", width: 3264, height: 2174, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104500737981555687526\">Ricardo Matheu Palasa</a>"] },
            { photoReference: "AWCwydg-UujjiCsovW8DN8wGNejNECyylXQcTvZUrcMJOMW_pNyh4xlFWw_qRTQrFWTrWpjsYPFmkA0AYPCSFkSxp7byfwlFXKkwVFlxqFGx_Zx7SEzHOPsneCqGYEyIM9UClIzoS4z5rWGoX86gt6Jsv0w0_rXCMNSRuplfaJRgUlZAvM2R3DGZbTo6C6vrDpJo1BBfC6L0C1oPCm7okKsCSPoZ-ps4T9Zd2Gt9YggEi6A5K1O9O5CFCq3GyBXehhBTANfl2blndupALs5It6b935hTC8ObbZ2edh27jYryRB0YRDm7cmGNPkAIsamOD39BUQP04_OYKn0Ky685KY1ViNuYhP7ghk4Fu95uvFibxVoF_P7BdiorWvRaiBgUKdj9va7KmJO-eHuOAy2tk4MZl1S32pbvkX5V4VIPkl7qYg-BhXtsCwL3QasUqqWhHMX0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100768109881274480613\">_ mam</a>"] }
        ],
        summary: "많은 리뷰가 증명하는 신뢰도 높은 한국 음식점",
        updatedAt: "2026-08-13",
        highlights: ["4.3의 높은 평점", "400개 이상의 풍부한 리뷰"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14900420363361368160", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sogogi+Shabu+%26+Grill+Cab.+Manado+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "상단 코리안 BBQ & 비어 팰리스": {
        photos: [],
        placeId: "ChIJ3axDd2Z1hzIREuezKXZ2D0s",
        placePhotos: [
            { photoReference: "AWCwydihXX6We_fD0TgAamAL2hgP9sraidIjFRMxBkcEI0BC92mC3i9s_7mOLUKH2uOmXe-li5W7ehAOnDHHfWOG7ttZ36JcoQcU7FJHkqwRz9o-26Hve0A_8szRqMrJmP7eWad4payoVt6Q4OavRjWp6tI9_wHFLjX7CU0mCpoRHXpyl_SvDPyxIOruPUVCCmrArYbp44y1DcSr0bAfZkYhUBaGKT5DkSY8HVJs333H8PTBJZqrel2zHpYwXMLrO1ie_Q8-TT7XmAwaHnY4yFnn1fBSMXNggRXZMUTjIVfINNg_QDsIihUvLix7sPFSCkPT9D-ZDkgEWjU7SNni7oLEe7mXKoC8XZ76Kv9Q-yD6d6Iu2h4PHlMPxy5js3BfJNO48xpW8erqiBlWhRb80HEmrHmMW2SpyLXE7sqid4bLxKHZr98", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102970359567740831778\">Rahel</a>"] },
            { photoReference: "AWCwydiXfPUkPyg2HQuzHqaLC5BJHYMnXMZQJxvA800uqCxiVwKGKxcvw1muUP5iFT-6GQz2sKaweHpgG3NMYLJJb_enYwb3P5PEuTZArbdU4o7citqQmZtEZZkev-eimaf_A7IoH2wto_pWBqZs1hXsfADEmEmffkUemn4lNiKTVN8mNIx7Htn_lH2glToSNC_A_8SpfP0zth44NXH8du5vgzs4_wHUx04roieCAOAv4vyBxuDXgbnkhkCwVv02RHMA7BXygUGA_uHqrN8tSJZTV-QhJnPt9mx21a1TZPMrSJnq5wnhzlEsgpnwhi--J5jMPOe2tVPsZDs_QJqTnaCyNsj5cKGFTQNssXmqGdShIPj3TEiXIOQA5eLIVb0nXgy_YfxRnw2ZLKQ2OMA0wYR-N_RZ-rLnYMTkFLI27J1UcnA", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106073740400288380975\">Adides Gidson Simanjuntak</a>"] },
            { photoReference: "AWCwydhTOZR6CoK1NkXd0jZjB9afmbtDAZppV26ymJnvNYcgLAB-YNxCatl4blkDg4hIRKkBkIPJ7CzJ0ge1DPFGZBceqxEwGU8huRTsXXoa4hCPi7X8uI1tKPrUxPhkY_ms3PVQBusj2X_FnRTPxBQ1pOyg58UGwAtn9ZZvqZUeqZxf4LK-ybVe-w3Cxq9yCioRS8QH9mAQoTbqUI-QpAOokgemo3HvRHKFicJmuM01HkaJeGxQzR1VOipFh4wTdpZjBVAmrcVERkjgD0ffkcY2u8mfIVzKbEIjnd0sHn0pxAlyEv2B7AwmGaTApcx7CYC_OhpgqjKnXiA8obVNNsiM5hL04g9W2ADGEaSdFo-4ZjnHhuqVH70kJlqq7O1z_msQKKyn93D5jfBmf7hp-AxUlZIyfwlfCAu5L-DZBXLby7Dwjj7j", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102615082558770696386\">Keziah Tuerah</a>"] },
            { photoReference: "AWCwydhbXlLRXudI1U-Ubjj0r-WqdhWXKQtV5MwUlkemvn19M3GrrFSKjsbNtKhbmGKmhnko4QBg0gHf4aaXk0pLMz_Cllj5rRk4dmEVs15t8K7T5fWwt2V0-to0jhYtSO04G2ehpGs6VF1QUcSXgPxGG1l2ZeHw02eZsOwtTNP8TdN5gI-54acoEZuoAQrxHsK36EUr6UnleM_2wrcwfaC9n4S6o5d6iow-GvxJzFv_ot1aD4pTmlbNqvuFEVvLGBaUPEJGEBpFbGBwNzbKNY5bb5jgelYNe0UNVJj0L7RbCvSdT5wboBS_fXT1jJw-Rf8erSSlHiP1aaBcRJSAT-6AhkRaNWi3ErLiZrV7Jnp-p4jmwCcKqWpqgORoIabW6v23vlrmdcvY0z9wydSzKXhSnaDMRR-Y8YvzgnKOFwbreZBkuQ", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102615082558770696386\">Keziah Tuerah</a>"] },
            { photoReference: "AWCwydiaUTDWVUwuDTyEr1nrdQ5KTI4pMKtnbSR8H1UKYG6tQGXiM2x5SX8EVKX09XkvusrhdM41G-HwZANyHLls0Z2U4Fj96H25xN0GHfOBmrABgRm3WHg3xxKBPYwlyS3vYIqdbkzAgE5FpuH7Pq22PJK43u9ArdFyZUypcVoP1cYmeemdod1Q7mLCJPZd1kdBz19u6p1-eslDfMcMjEIVG5JPRg1y39e361_EZwIa3xdw99xUkLPcqXrqwyl1y2dlApxJk2L-7teABs1oy_Nn7RTULpHDJcHlFQfezqi5HOzef0A758QcdiQdxR3YdUf0zpVaC1zfpzw4c0V7wpQwpYjihHlNHM34vM9uV4g5vJlYaxTcQmcwVYiBjuhy9CNjsqPv9-5fL_D9VOL8APoN69bcJDsykoi1cmknlfI41bwC22FB", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117408813426854046382\">Stanly Maarende</a>"] }
        ],
        summary: "높은 평점과 신뢰도를 자랑하는 한국 음식점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["4.5점의 높은 평점", "검색 상위권 노출 식당"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5408671927373129490", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sangdan+Korean+BBQ+n+Beer+Palace+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홋카이도야": {
        photos: [],
        placeId: "ChIJt6TPo_h1hzIR2aprEdLTyRQ",
        placePhotos: [
            { photoReference: "AWCwydiPg95_JUs0huDaDCFcR3zKRCHB2o6dQD7G7aIsLZ0WJFcrugLCjpNcwnxoXYxK8y0T6Z7vViilDIRCE0O7pIQEFRTUG4IGL6mKpnnGrKWu4Uy_e7tKpuiTqFV-NutXdbLV37wkRXADftKyZsr6e9KJWR8xteLEhW36cbFNP0cVPg4yP0yw4Nu9iiMQiBHo84ISN5Eu8EzJ6kS-Rc9fIP0t3dTUgpu2basUbfotcpmCKJmCfHkl9fbMdrbtSmhq-f59kuz4Ch9UWSaoXM1LIJ1vMr2riI08cv2JYBeYg7Hlxfmrws9bqtiEoo9ewMu3W8nLDoGIsjXRjr0GpCX5_X5vr1x78-gIIsoLERWYnLtOpGsMsUWUc-tWoj7KamlMQ3kBHEQnuf0uD4IMzfAmtkU_SVdel4U081omX73gHbvT66mi_scmZmtD250GJQ", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103487386857415513557\">Paramitha Simatupang</a>"] },
            { photoReference: "AWCwydjL_Aj_mQO5z1q5H1PutdYTzaTioFIFo0qJUCgpvt6XYbNBuw7vm0QZm64biOuSlIiDodFwwXH5Hy_j1gZFyjEWABpqbOvqGlrcOoJHh26PhvC1-0tSl_hSGNToqgDsylJPdRVqX8jWEMp5XwsWisg0jsSocpCR0Ghu1zqtWyLVPOlCn8Uzn6wBy2-b6hga9ZrJqh3zyfJFU9f7CIxpkQDdt22_DXIbA8GniF004ulPrzJOxuiE8gWcNq4T_KVEnJe3raZsUFmUdKoAO9oZDruWmSTitL2PQS0hUOPbYHGJh0cnJBkqLG9E_nMDjFnMPHbn8Z7ZLvhiA4C8nzGho4AIqfLFBwaz0-sMrHkgaHaeXiR1Mqtmk5FJ6DcZHg4zmSaNRnnN3Pn6wazrWiU7NaN6iFNTEAVG1kb2KbvQxh0Z44cCYY2L5txrAYmFfL1v", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104254125931761031348\">Nungki P. Sutrisno</a>"] },
            { photoReference: "AWCwydhBhipmSfFDbulTW3RF9B3U7SQCkLUbhUzEodkqnQLG20QSncB25U6W2zEW0Qz7rT2hY-AIPeuoofsCCUJwEVvMrUB2fCebjugTvKikRK9inr_5s4rm_leKa_hpNJ8D9RJkao0dAV0kRdvhXFk0lw7gcKG8szmGxyklrYZUJc9hShg4qI67X80-k1H9kbiO5d3FMq4tX13AS0TTGu9yjHiAypGGFrVTAheaApqwTs4CUps0Zbe3Pol1IBklzl6vOUXtzWiLGNiFcp1t-H7WOsJB60XpneJlxEp_UHMzmDEIdRTRkMxdyd1oELFOd9gxkoebCqNnm0fnoMaPkexAqwm7kuLkX4QTh9KVlwRCXD1V48K-yE21MnccpHEhGYik616jz4I_3QCKBBsRdvoJxSJYI53hiuUjlei5s61V22XBROAkyWt22fYMV1rI8uUt", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100639664254371290366\">christin</a>"] },
            { photoReference: "AWCwydjP83u0VEgtQTm1ArSIvYHbn62a2njtN-j4XOl4IiZdQt8UhAKz7C1nqR9H-ts0gxCFu6AR8BaMHW8PHV-XuyOJ-ojCkzglIa5ifJLOxTcUXnmTIPbzNiw_EPfpboMeRcZhhgOommgb4zGesU1YCsZj0-lEkxpZhkc-f3CTUwJbXNEpEzl5F61jbG6QLLy44tf8bRrm9ZX3KXeH4re5iQf1Li6sKDVKdX8ajhsLNGJhXiKBvJmkBe54x2M73MiK9wq4CmCdl2_ErxpmIs-OKsi9b5cprlI4wHLDmktwnZ6-UB4fWDm0gAgdFr5hsQAzrSXAxd2lzGcxqpTEnaSh42YmgVJR8X2curoL0isSv-YMaY8f9KAIB2w_RW8fb2J4tgC1hKzCB-IH-A9rwMJ_K30XJYUlRz-1S6GJu5hR4P6o9vPqwsBPaXC7kMpWUMta", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107311131168856362601\">sumimasen</a>"] },
            { photoReference: "AWCwydgbcYohobAiWQEo88kpb4A6ZZIyXwzUPGA9IfPdd96ORjDQx9d_R7Uc_Cyqg8IMnx5xEYGwWTYqfPI_cBlI5ttIDNEA0ni4rzORoKR8miAMh5h7kan4i6QSRqdyasqguBsWzHEEW1W5YVp3Cru63jqrC_BgI09E5jaX8B5QzY-BnczzsHvOBahcv1Y6jElJdOoUxzPYrsdSBXt4p8POFYEiY1vrsEwX7YLZADwOnzWFKOpTPESRJF3_jph9CUES2K_25reT4lFDLhMioW94DbXtubDKLEq457GZMHjBQ81jP03oKsEMaVy7S5ZjXxaBQYH8l7dOwjaSQxm0z8g_MTX8wK86lNRojOphWma132MJ0WxPtAMGO0Bqlmtw_UHmPLRKcjhIYavzBVx8O1NMyvUqiURJHiROScChhf74N9M604Rca4o9-cih-oTt1eUQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109662054085429311369\">mei wulan</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스로 방문객의 만족도가 매우 높은 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 음식", "친절한 서비스", "깨끗한 매장"],
        tips: ["자주 방문하게 되는 매력적인 곳입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sushitei.co.id/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1497961250266262233", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Hokkaido-Ya+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "김카츠 마나도 타운 스퀘어": {
        photos: [],
        placeId: "ChIJYd54UPB1hzIRfq_nZBCoOyo",
        placePhotos: [
            { photoReference: "AWCwydgm2w9cSfyvZn9motrjo762WsRTRoZwaWeX2b1kufCEyQOPMqtSoR3rb6EJfvS_cJLqmTNiUQd2PFReJMiXSRHxJZpmwW4B5xhw7SCFQiZAC87aT9WKbDU_O1o1FZKh7VHzlIsHyNHWDaYKKxbbiTtaBU9CnnvZE6AVycQBNFoyD8aQBR3v9-S5ud6eWADAMJ5zEJZy-DTyH6cTym_q-UrTg84VVc1DFXTZDnOthYY57H8Y3_Eaaooh_6YM4yD8tmT1ob5djUCD2bqL3JE7HYt6ERnz7HD_TMBDYeRYoELqejXgte4qXwm2fqkGnKQcSKY4XDwoR_vP1GrwFozS0wpoT_bpYFO3liF7i8yLrsGzBBi_vTmKBCiJbEuPg5Brj8b6TZoUNLGXUDf2hbt33NCCfXJJEDprl9NMWt3dAfRJNeOQHZUof7ORa_jD9crZ", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116226129465971557470\">Kimukatsu Manado Town Square</a>"] },
            { photoReference: "AWCwydig1qNJw5BU_s2bwMZNcjjFDykNH9geq4u9AMcLPYqHbFU4hTXspR7lGd0JOPiFm5SfJ4SQju7KZz-A75hwcpC093p8pZvEXYFjMK9g9tYySKfBUcq97l_ZD8GBAs0a-_RoSVuTC7oTOGbFxSoQZcC-ka-Jc4tKr55Sjm-HmXPwL18nlnlmI68X9fSCwygvkXv3O0m8JakXRM4r9h9Gc3oJag9DLOiv7CiWx7naIMD6sRuzDjx8gAotdpe2xXdGKFgULa617h9SmydqfWaYG_x9mv9MSaxB3uuD0-WYm71g7PwIRXuCtaOcQF978mXk2ABCSQpRjhbZdlZrn8jbDDvdaeCsqCjvDPIWr3VlDyruH88peciT3c63shusLLGax17CZCaNF4_sCZju3P6pCwsXVmE6mwLgEoMs8XNC7v_PlC6QqWW0LfeUXSKuirYa", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108915083835141581651\">AYUNI SARI</a>"] },
            { photoReference: "AWCwydgCgQfF7LdyZQNt8IhBn9jkKqc5qduHX7IYsfn3-9XbHmihXpUstbwZ8b1twl9sGwQvJe7bJZFTiUHqkBOr4p2uDzAFEa4vf2tERCmXHv83BlHeJaZGmktEamqxEpThRlps53uI3TQXwW-LAPFZBGMjOfyZDP1RrwzBz00M3yADePr44YZNYVcfpqQtkgJWFElVuFK-Jev_M8clgmUOQu_KU2QGbQvitBwRiWsZ6_F8OC0pEV7w7vJrkN-udYLJdNXBwNyLdiBCu76whQykpH4Um9H2rt4XMkqsi0Ap_ax_tF7-dnS9wO_HI9uEK-9ilLdeYMDo9umusHfFLThL5cLqyz6anwnrxkUVi0on7_PGE_YQ-ChUUd2r9FOZjVN5-eKxLjVVp4IpgWXQayGI3nOIV-mncdL9ME728EYVvXRJqx9K", width: 4624, height: 2604, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101446367406206799401\">Michael Hardi Jani Malumperas</a>"] },
            { photoReference: "AWCwydgbNRGIQEh2bueVexdp9NbgMjrqV6oRzFbOnDkB2EPoNbFn7CVdSiSGliBU12UARb-SctT4XhXgNqHeg1ECwSfmLOwH_nsSda9Y39YnqdCWWUsk4upyv4LxJmYsxXj3fEqF8bQCF2-jjjb_u8a1o_SoRApEiMs2BXMQzJhiGWdCMuTnuQAFhhalbC6aTzLWuTEYa-92FKqBET47LHlHROA_brvSt3SJYFnyIauJanU_41ypdslcaIu2imiLwaJce8QZS8Hp4qpB8LfuR34z2mbL8a0sWQdi_eO07CkU5MeGGtlRf0rfEruaYNti_5nDrl-JveOYV9_25QS1mCZKbL3DujM6E7HdA_vWLJtP3hhYBejhmsObqnmetZybTbkq76VcLf1f_CrHbZdIUOcJXotSTslXjr1lbGuhrYuz9DtWKhL3kD85e1gYw7Wy1Bk-", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100404569461527555105\">Tatian Ken</a>"] },
            { photoReference: "AWCwydghxk4sv6nnbS1aNnexDYKB8hu9i7HSudMY7LMA_FNNqPpzEEqul4VqwzOnBJ6nOw4iZMTVV9UCnkmlklxMryiERLraswDc2LkiMXb1-aOG8-5mWO32C9eLy7jvnzg59_JUt6gp92wIibvabX6wWnROE8voY7PQ-2YVovc-unQ3-Dy4ZpD3Z22RkK1PnnuDPpogmg3d5_3EwcaL0mSaMnBR_95uAY-yOS6C2qd4pZltn5jy9aGSOjzTJbQ1OwYdERRZLgEQJ_ZSpVqucZ-YpoP660Uo2AtbwAB87ebsr5CV023O79D4hakdIVGhJsqMqpKloAwD1F198WZ4-UaP_z4gdhqnhzvZJAiOVKVVylrdEp3ZGUg1WoQzQN_1jdCIubB6ieaF0wQBV02eRoioOPMhnbqs5XwpvNhbleMZXZxjn9Uq1bXUTJQgCMVy8w", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100404569461527555105\">Tatian Ken</a>"] }
        ],
        summary: "압도적인 리뷰 수를 자랑하는 마나도의 대표 일식 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["최고의 카츠 맛", "훌륭한 서비스"],
        tips: ["인기 맛집이므로 방문 전 확인 권장"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "카츠", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lokasi.kimukatsu.id/kimukatsu-menado-town-square-japanese-restaurants-piere-tendean-manado-565438/Home?utm_source=locator&utm_medium=googleplaces", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3043210761584750462", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kimukatsu+Manado+Town+Square+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "페퍼 런치 마나도 타운 스퀘어": {
        photos: [],
        placeId: "ChIJb9GfgOJ0hzIRbijlCvwSjns",
        placePhotos: [
            { photoReference: "AWCwydj35xhm1qfPEZIY1v9Gu4uZlMVmVOSUcpRfqrtK4Il4QyG5KGAGUQaSA5p4sHZwitNiFRcSiFgGR2hcAUlglsWrF5YV7Qsb7Ly2ogVz1LhXkdgjNnEifllqamZNsuAlO9CFpeEgMWdTCO7sPvW2IS5yUu3svrdLXD2L-XuNC_HWI1Gsgtc50H418W9_Go6cSFbOStpgXN6AJDuqmUNxAD4SOIbQxivrRBgYVGIg28hZdV93ML-HqdVCsVOOLwoOWrUvbFBfv2sctTtd9LhUd_2zIhNTNFyZJV_SVFkEg1bNZMZ1x9JhcDnO3c0YrYOcZyDexRcukyu_zTB6ApFT97PUs1PDrUATZOfWDaRUVLPnLvMC4iDQ94aPno9GXhat_-kKD2ZWECg_rIoYjfvLYHKIk2WOZcjJfWV7ms4Os8n5XQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118194902889772203601\">Edy Milala</a>"] },
            { photoReference: "AWCwydiCG9eVCY3UVIehfZDxnBqXahRHowcz_uNADjlY6s8ue3GH6vhQfkjDscyGlforuvItefsdZUr6vsBLDkSyTLJM57V86kLHTVT3pXs8-P_bb-TrjKSI_7hw91q4K0O6O52lyKsLPJf6QLADYQKwUrJkSKBc3qSKpMN78WChcIkSe2iNlZKNaaIxvsGAAGz3dsAB7D3yfaiXdWyT0B9umP57s1YGK9fBImm2ZmApcw3mGIXR7V75Vb7H8LSJGu4e71f2b8DirUUsY3xUKOs-njQ7Gc1QaZlIJd8hWD_5c9wp7-9XqR0iKNy9eaSgFebnE7Q7w3k3CvN7ag2Y5d9n_awpnhQymAy5uBU_sGdqpNZys7vtCdcQYL0EG5dFFqMpBYDgz0wqF3-ZP4DfpMwch2J8-sbV2MHIOlCrG6NNzSr8xFGnX_1cZUvU8uW9Cw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112043689007864825815\">Chintya Aldila</a>"] },
            { photoReference: "AWCwydiAuxplipFbdI4ZnBU5ERh98IDBHZfSj6K-rXH2fimC_aVrtvhnYDvEfJHpJQyDLKsn0a-eoFFIVdO9a5xAFyWefdqm6RxvvOEID9FHJ30MY0ecVj-XRd1oE58GxUyAuKOW37LBhkL0lJ8UQjy0a-iUMVeDAT99dTtNYq2O3S7xnnjKNjGSAi73Vv-p3Mi9Uv3Zigi7S0FfybGcswLj2376Ga6nGpjfcFFpbmQOnmKEYmq3bXF_egdWrPVcagcDN7CALVR4AD1OLSRNQ1WkHbAMtaD2BvoOfLgFcOoSgeCNZU74NvkpLecxf8Fpvp3aB1e2Il7QBkBXtslPg6kPF75md8cvA5AdnSL46AYohQSOQFqVg__cOIA9GFrvy8bEzzzF_JcyyzG9Qyy12BloDk2rjzw3YtQ4PMPXugyGYZgVwRL-v5XV5ns5EUk5T1bj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110741434627082890715\">bernard goni</a>"] },
            { photoReference: "AWCwydhsUKezG8mtVyywbn79UxUYriK1xWrItjt1TrMrCJ3M4yquyeSCdN1Xj1nMItVe2NvLi2pO3pbb7M1NDDBmRN5tfnR0wbjEsfi_Hv3t_-nAofNLIJCZ4N4ze96YW7fEgzLpFlxKQJT6qe2gmZw-Ef875frx0Ne6isXu_9TSQOw_9DUPubee9PRbXt4l7QZsIiQ32I8LFJk4Vsm3nurH4b_NA6pKg7BxHb9GYHBy3eInKIA-KduIDEqk2tnUDpx021z272gXkmzPsuUghapAL2GVDSVnPae05P5n_iCG-ncweJAPiyxnmMpVgITi-spGmuLuZnivZyFuM_wK1UkwGVFTJ5OurxosoGG--QoYqv8U0Qyc9juTTcz1x3h59ocVI1Epv8MQelz-TolEEFU6v8qXu_wcMMVeBvlPMBlN958RfwnSGKVWbstxSfm9CA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102473625932954274028\">Veronika Fei</a>"] },
            { photoReference: "AWCwydjw_XYhkILf_zn0jqRY3bBy7OYSbObY00Yi5oPX9VCBk0EXxim71Exun8loiYUzzAMuy61-2Ncw9lyeiOtHDID4lc-arPcISGue4eUS3nA5UlBBeVNBuCJ3Gye5N7T1GaHvDdgrZRMf0d599Jl9L3ihSRzUpXlg_3T4i4Ik76_riYwOxzUvV3xdIxxWBtlsOkWUoga1sSDNRY6MSZp5TlidQXwBZocb70-7XKlxyq8FdFO_3MoVKmQMTVaZ0QCmnPrcHlO1Xvc3liGaGEvdqF21pNwOwSmRvQt5Bht90FV_TtrYx0LbB2KDEBCNtVBxSjez3kh6ZPJ9BdLqBLE-o78AZXoiYsz3iabqBNK0zGqvRmBT6odXwK830NR5i3T3TjMT8eRm6VV5djgtXJfu6BhVj5QuDtRvOkjuYERKRhhx1IiD6zE97ux7vR4azhuS", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112043689007864825815\">Chintya Aldila</a>"] }
        ],
        summary: "높은 평점과 방대한 리뷰를 자랑하는 검증된 일본식 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["평점 4.9의 높은 만족도", "2,500건 이상의 풍부한 리뷰"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:45; 화요일: 오전 10:00 ~ 오후 9:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://pepperlunch.id/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8903074387081898094", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Pepper+Lunch+Manado+Town+Square+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라멘 1 만토스 3": {
        photos: [],
        placeId: "ChIJ8XVezKp1hzIROsF1nlvwb5o",
        placePhotos: [
            { photoReference: "AWCwydgCNKBEc5FChXVS5R7FBfMEL1LwnlaTObyWWr_CZHq-zgGrHVil9vlZJCwHHcLnLpfZ9nSZtKWKDXgpw8pVTqc3btyh_xr5vXUufTNr1cnFUeAAH6198HE2zkOvAN2DBgaPqMqOE2KMYDbUu3s5ffC9_c7P5TZG8yXxjEyhV9x5z_etwKNHcC9DWRwidYZD_mS0h_IB7WD7T--Grt6d7PwZFaqcLjBOk-DVB82oM6sX1PRqqIquTP0_WRBP48SxYOSXZF4rUFeWZ81rUsCuf-r2oEKVRGqBjSZSgl4q8cT1OWr8kafljglln-D7g7dYNGDuhsEtjk4iSzClKWoIAFM5g1gyE8QeD8OD_Vu7VN6SSbk-SpN7Fjt_QydW8I7lQDyP7-5gmA1nxaW2HN8fex1nT-ZcqxAqB2erTuOvcN9EqTFE", width: 680, height: 306, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108613467463879998908\">Ramen 1 mantos 3</a>"] },
            { photoReference: "AWCwydjjTsEAazhCJwK2YQrZLwiuIfmEgqX5pVifM2_Ycgbh1GSl3UZEeFa-otADcFOWNTnC54AHy9B_gyNTKFKU9Y5YTTe7Vh_yXCU7CQwL3KAoJKsXSk566LVTxRM6dvvEVjgfglChJhXOyVNSYZHPY8-IyFQVWRrxOwe4zh4DV1VTMYzdLvVv2LW1P5u1QvpaAHTxzgjDdY8lVzVpqNgYnwMXJz5S6kn8o16p6VUToRgkX2MHv-mWdXFi5S5HGsvhGDwcCvZzAKrueg4YxA376kHt4KkCKf6aPL9NA-OokIBMx2IB50nZCFBLmvonB7QyEhAAAXsuG-F5JAECGFjrLfrtmPOusubIdkCoDl3ClAAuO6Huuxmu-iUxEp_PpKoEyN9BgfDazbY5hubCAGExpLJ7vJthqi9mt8Qi9iB0CsAkmcwY_0-y4HqrhNE71bha", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117753084016268249822\">Nina Agustin Juita Sari</a>"] },
            { photoReference: "AWCwydj1-HsSdrb3iP9U0vkPrdbYscZml6GRJNgvfk_UuxgIm8n8JefuI5lPwa5Hq46gBoG8fnC5YsBhoo-p3Qk76LVBo2hvvI8j29gEnAlpDCnwWzLsr-12fevdSscRuCeYfSGY9pkPCf0sb0MnflV94yYQLtdjnKiustVC9ukw0sxwjyp6hREZIDg0a5G5HH_0Fo4nkM6rCh3Ztb6sUfhNQoqcI3aqQ1JZRPPkUUdXfAAhjaOvjt0pc2lVwydLVu8oNqTRrcLsgBY3drglv2wGVv-lP4piduBRLShOqP_wPB9ihAluH4fYRit8Mod3kRSeXURdMl6qeZovxkd8sXObszyg4j14YLpda2AEsj_J51pL549xd04EJSVggj10B1R7KwhBs5rDQNq6mbKTTa5nYetEDUxeKizonNyJyoxQu4No2s_OidFkS1IxNq_TOA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106902671642282850282\">vallentsia mitchlle</a>"] },
            { photoReference: "AWCwydh0-iOKZqlhkXRLNSYJ7r8cpyIKeYzaekbCIfrzGTGAtjcfqElepW3TiyiezuzRubpY82rZFUa8onPzwmuBFtqVj5ya0RKdzHDrh-9d_Yl1x-6aAd9s3VgJNehtuYWRH9ahfxyg5phoi7_GtOPcmZIYmigWBft3AgkMSLgcnXjfkKE1-0cA_zlmMFJFW8RvlqEHGYuxmyCLpMKpJ8atCbsv0jD3haRTDWLNze8vCtpAt54wuIDNWa6oZqLLuZpVfTkZe5tK1Hnw6JKDn9SOa3SfaZlnSN4rCEnM5bS-4n72K2eVXjcUQy5Urutz4rjdmXf95qB_1MpOJT4kNm-KG4O3ayyEGtLUZcqmv7aRsSl4gaMk22HwS1xIHh6gSXXQ7Dr4xWfSSqtKnSXIFwv7XmWiDygnKabCbcdoGUDmyqjdKNtT4zL98pnp7kLkmRdx", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117062465042324103083\">sissyanti Kaluwulang</a>"] },
            { photoReference: "AWCwydjtRLua1tQTfFVi-ROmbNyPPx45783DaTsju5X7ISxe5BuJ7GcwK5inkGy4iuudDqL5nsC_6z_f9DRlCBXwlhqehiyoZa0C4MUbYICwPz7y5P8Xb2nErDEiQo69-HbJoCIxgPkj85_jJDOQePmoGKqHDNLphjOASrGgYrAHpZjD00criGDz-O5LXK2WTWcS6D8UOoUW0ASeKKlJqMSNSgCvbtJqS33uiChiGO4kkXU4FoAzfxTsrdsTDFkHfOGgU96l2MeMXyezeUlfVYrzOdmalek9twi6Yv0xohT5LB1JmKvBPcPZMmSikCxcDdNVfknVm9codR1folE-TZzKQQeLujwwjiN_zg_mjArKuDo9DIVQZx2c8SOjiyBekV36WBVvlsGzBh0Mt_I9nGccZb4SnApQtEeFyt7pPwt95SLO51W-SRShas3Lc0nJJiQM", width: 1512, height: 2688, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115552804255226934373\">Belfa dalako</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 자랑하는 라멘 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["4.7의 높은 평점", "2,600건 이상의 방대한 리뷰"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라멘", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:00; 화요일: 오전 11:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11128377480546992442", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Ramen+1+mantos+3+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카나야마 라멘": {
        photos: [],
        placeId: "ChIJh_keGQALhzIReSb22qDLcOI",
        placePhotos: [
            { photoReference: "AWCwydhk8gZnEl3wi0Mbighy079-5z77N15YpS_xY95QpTNeQbPHsgFFCvJSOPGdEcpd29kgS2T2QSYit1oeOzuuZKmyfCiaGPkLoNRoumnHOX9iDB8CwgAPfjEluDlTzbnKlLIzQzl1NuQrUiy8y93SL8taNwAAEGlgAc9AtIQiI859yi-Dj7yJUeIy7bRhMV0uPWgANEuRt5Gld3kVKeohm6runsRzEkNJxknnsdpysAECmEu2HqPymUmhWXTMLDEMGBBeB9EAlptPfsvZ6qC0M_MiC3CmHbUFcF6ZPTmcv4WnehQGgsdn-bwkhRzgHQSmP6xdAb_swrHEAQm7ylljDvGfxLXrMcgxZoZDhFgBzzVAg7QbNXGQBzOjJLvWxo8KnYr6wYk0MpmFXOvwJn51GVZBmcLZKz9s1K-pBoheNg3Ydw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107484346454623915601\">Johan</a>"] },
            { photoReference: "AWCwydgBplcd6JT6hLVKFpodFdOLDsTdf6tmMAQ-d7d33frfoTOlhU2UhQ-ZMLBpXYwU3-xkNn7QdWP6Noy3zK9u7yye4PD_yOgSSKiC54L_41M3-eWLm59ulmLjmpa5lxZiKCTeLaEsYDCS3iRnyw5fXaSXV5OiLSD1GzsXCNOxJi1mZ7kgnm0XK91GDFDr19JSl6YUXHhdUxhI5HDL8P-vdDx2TYb2LyooGWhmUwDNWdi1SJH-s7AiOXcogQE-CZ4NJhH-Awigtram575pnYTjSRvHVeFF0J7dgKmSHUFgckZtDVCGxJ51MRWIn5qAXgBV0gwWA8enolqcCpMb78vSbAURxE5RWAbcTq7cUSxMt4BrXZ5-iTao5ppskquQHMeSUuItvoTrU_1K2udQwlVqkdAflwtY5NgwPcDo2iGPiAs", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100052101023982490694\">Roy Kalangi</a>"] },
            { photoReference: "AWCwydgR9sOtIQ7puravW_ZcHj7yQawJr2K27u9MC4F8Frx-MN9jkBa-Oz0ouhHj3sOm3Hrw71HXDMELd63Y5jEFsAcX7pUzrqkMD42vy11mI_LWt34AHhhjtfUF6MdTqlGzSbuwxlhAflwXYmVuKoqMBL-9V779X0EcNmUTGl22OYFjvB4DS_31pD8xEVYrzUhYU8a9qF466TwS0hSYmF9o3TKoD7FWaZf1EqSB7I_6WiFIvwvSMjThxTXFCiRcrCylfUWSuut7dPTjX4dwKYkgA-6Bc5gBhveiwF1zKLQbjAT6HlxzHDNC0dMsvgWvscexH1_X7GLxt8bvIksQ84mIOj7SxZgX_pZD2PQ-FLWnNtHF7nsg_7Pn6lXNI0ZHsDR3aQCDMjkyO7j6nJm-jw6pV7Bbq0zkGAbCVo4cSs6nhPERDPV9UCe-zUuc-mxWORQz", width: 815, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105946559948834687765\">Benedictus Manangka</a>"] },
            { photoReference: "AWCwydiqu-MV7rf6VLs64HzzDfJ52KbstqaxTzBGkHw2U9nDQ3Hy5VgPS5tIRtWntr3PTRBUBcqiFUCreDYJb52ZbnhWK-5D8sIrM-FQVysGXVtB69Cw5T18dUV8qTLTBO9oPFZ781lAtrG23bMdm-3bXy_Z_XYWe_pJo9gSrbDx3X2aX1hMdH9gU_UOfR7-bJowkOMDy-1jFH-u-mLt9L13IC3DwDeoOi2lti32tON1fB2XZXakFQjR45eTfK_1uShmgBKpbiRx8GuaI_7lQYmHMc_fx31b5jnySaMLveSSkBzDnNN560XNn49aS4KsUMFEu9V9ol3ZvJQEybBS5g55hjdPkrksonpH3MGr59rB4lC_kgxo2W6XwH99E970EmeoeTAKT8yFv6iyKKzJX78FCVql7NaZOf8ilQUJ-Eqf3i9TJnJiEvWuuNcU6MZGbUFc", width: 3072, height: 1728, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114950635837986160361\">Tito Poluan</a>"] },
            { photoReference: "AWCwydiFiDXpIBniiCC6mNvAUaRFOzXFJqNfdPNIUO9kBJUdK5nAOt-Ptrpk_1RBFT64rjMJEdBNh1mV9qgR45OH_kGKTC1w9wCHu6oUrTt4F0LYP2l2TXOT99CZjuf2y38FQ9nmti4CTrvHZ5e5L5qAXShlx0hytwohU-EDdaE903Rt7MSSjSp3535ug439p8lp9WRWayisiBC_AgAILiM5Sj3PxOjN3YXpvujLAI7FwjcM1iNgIz_cevaUits_ysSXz8mVAD061ai9UZhYEgDWMDU66_bM0TiBM7cOESptEi46ZBBU4_cqyeEwj399SS0SyL0-SHzBVzHDYeHWbq6rFWKUbe4w8nf-B5cQ7zN5HPzHqWNC07MxcuDnBL0wTKakSxVlvlg4zEWjqPD_PB01Xlf3D_BXoB9CzB-B2b5fr-TU-wrnEWQDisHOfefivqy2", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106528200836082567902\">John Robert</a>"] }
        ],
        summary: "훌륭한 맛과 분위기를 갖춘 고평점 일식당입니다.",
        updatedAt: "2026-08-13",
        highlights: ["모든 메뉴의 뛰어난 맛", "좋은 분위기"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16316765341692077689", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kanayama+Ramen+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사토에 키친 스테이크 비스트로": {
        photos: [],
        placeId: "ChIJxxRz8C11hzIRSDG0tfIw2QM",
        placePhotos: [
            { photoReference: "AWCwydgFvMXHEBkk2N0E2jcptxLmn4iYyLnFipztDbAAH5pfo8Lg6dKDWCCAsOIWhPgK7ql-T2gR3GlPDBLFjaSySmjL9Ak6hV9nSAjBWmvlYalV20AHFAqvgTPEwaFbwU1oPiGEBxt7b6ku2xiaD0hneF1Ue8wIKViAx4eSCMlwdheCh2kMjyPK471DD8QBkTKGZbH9aSb3j3pCDxsdGwtpYn92-yiCqCo-oa1fmsGlcdFBM30pTICVFxYAuE2Ri1rjxeWbOKCeABiocbpSmYqFgL5R9BO1AcFWx1ts9ExG1S1LYjlK5HcjZ6jxf-dSuFUBctXVXvk2Q3GM8T9h_F6O1nV3bWJqdI_g7Wr8sKRWUkOIYCI3w_oRQhhXm6ZldP_6AzC7xi0nnP3wVaeUmp-2s_wUkkYM19mWQjVKAR9Nd43lJV-k14Mi9UQQF-5Mdw", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112643659446869733176\">Satoe Persen Kitchen (steakbistro)</a>"] },
            { photoReference: "AWCwydhPDiDYNYLlcB5NjBCbunFi6XUWCJZq_4v6ezNbXIBurH_k8Ja_JyeYaL3qVDecxbhx4h2qILbLCaao-QFc3r8zqPoRPdkK9GCiIB9PSQVGVfPXkAhROs04azX8mzimAzSs38IRX85_Gpd55X_tRQ9tO6Sgri6aX9TjQgXgmEUuTSyTOnViM6ugHyDmyqHFNgNlsbtcwoVhOEqPD2neRR1kcpr3arW_wYNpAcB36r2zvgDUl7uq70JRo7NQuvXVdWoWyh_q3PeCUZMDNj_XRw4-tTnS6U2AT-BgI0-zc-EmcP0eKxhf5HZL6nj2MJfWU1qBobSh2tLMIFHH8H35jwCiMDlev5OtXW1HGXwWULJmR9koaq-n4Ddhjlb5Jk0c7Mnyqntge6KJGJjlYcnm3Gqgg0aEkqqNAsmDh89e8-tnMl2zhMCWn68vS4t7qDFp", width: 4288, height: 2848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112643659446869733176\">Satoe Persen Kitchen (steakbistro)</a>"] },
            { photoReference: "AWCwydiPk8wSH3dIRrfPfILkkog05D8151vYXJfkvYTRRgyuHv5rT1bGMa_YG5v7PxNXvZhmWA2ZoqbTsZGR6mOwUXEFxMPOIWeSkefJugPsxBzpEnK3thsnQwRA96EcGUtOys-TLf39F0Bmy2JTeyCVyDuSXObo2MdJE72x0Unxd_NP1vOG6RH3bV-i1P__eFQORHBYP7GinMGXrLIbNrqc0dYuH_0MpeIKss5gy32YQZcylJ-myJTN1mYR1skJoLcKwIyIqpFcat4lkuywZ9u0kpp01Mzu2eaRPPT0zgi7JOQdsDRMB3_8zT0fC7J2kmq36mF8Qc0NVLDjLvdGuatGvRxN4VjuGF5Ts5YXqDQXsHLAqOHQACATDwj3XJzCPYH00M4kPbuIXpqG9yQns7YaW1u_10o21SOvbTe7c-mpVjk", width: 720, height: 406, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112643659446869733176\">Satoe Persen Kitchen (steakbistro)</a>"] },
            { photoReference: "AWCwydil8HkCuJvh9YSW6wvwNqqEGD-Rj6MwqCS-n3bEnm8P83t-FtrzEyn6ddsl1Vi77PKFJvNEnC3gcI_6vKxSHxQsKB3FatxGEdhMZwkrXUpSsysU5VyKP7-S8DUoh1pCiUEncB1OOp7EcTK6eNz8fUZy8Oc83Cg0hzw6kcIx7a8Brnj-AXzFnhN_gQq4gaLSJ5ZccCEAEoZ-1V16aZzms7TG9BomZT918n4P9KL0Y4-Mx1Z3uHQYq1nfwio5CdeLy3SwL2EZM6XCBrV8KEAPZA1NwQBRbNvRaKXto2RClitMsI6QMWw2bXOaUqz6qYT7Ey1QKwwJ_6PcIp0gE9PipqbN-8OAA1KEJCU6ZHST3Cu_5IYfhQF_aU2ZbeZZ29IBtooz3UnPHSY2oOGruMGPponPeTop6nQgiKIUSFKNdMNhfi5tBsfaU9Itrt6auuTD", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102684328008589482612\">edgaras brukas</a>"] },
            { photoReference: "AWCwydhZt7pL1d45Zgx3AWvIKM7m6mXUI5wT4PiDrqdZRyhiRMcVYzVUNQGAMwsV0emuMDGpihwUBGL86rWlQzMtoLPLDAH8w6hEOgYzYavOEEbn1CsvT3liMiEsSdmL0ELirLzUyPQYVmwjv_hKoe3uTFHEflZAZwJHcO8EwWDhkgQgtKHB4GfBJVS6-StuVwedyPgw8s0pOph7cYO44HfQ-WWIpYoczpRZlqqSj67gTkOpG69xkBFmHHfW7yzAprMsOQQuKv5SzhjWe3YH66A97ug5cnqLzBcWADxrNsnf-WOdBh9EkYjmBxBJs2BCDknc-L17arfi1hSGx2Qg5l9LLdmIzZcAwZV6stADaSIk6HXd2QbqEFWNVslGmVp5ihZKIvKRGwQgQTSEcPd0-DLJSNm3Y4BCr5leP0nibRyoNesWrRxs9EfDaga3NKx-1w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102684328008589482612\">edgaras brukas</a>"] }
        ],
        summary: "훌륭한 스테이크와 친절한 서비스를 경험할 수 있는 높은 평점의 레스토랑입니다.",
        updatedAt: "2026-08-13",
        highlights: ["셰프가 직접 메뉴 설명", "다양한 스테이크 메뉴"],
        tips: ["예약 후 방문 권장"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00~10:00; 화요일: 오후 4:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=277306671048700232", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Satoe+Persen+Kitchen+%28steakbistro%29+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하파 키친": {
        photos: [],
        placeId: "ChIJ_xlCbaV1hzIRI3yvr1AZmJ0",
        placePhotos: [
            { photoReference: "AWCwydhT7sHmWVENF4nKphQi8e4j6ih3WqCrlGgQ9tV5PeCT9PgMci6RQvR18zf9J1VFC-ZLuIHbNdIINIYmTzFxZR4r_TtIKsvvQayfPv_UquPjP2NJY9449JM0p3LJK2GgtQidXX3fRli1wwhjSGrcpFM0ecKmtDdD6mPWzp4LX954ZH95VF0at-opQY_vLx41ZRShc_OpSlLLmqInp2MEvXyHdzQN7s9pKNgLvxp3fly8jCgXWNfwhyHu5s6RAdc2jDnA6lmBJzP_cmnZb8Gx5mE0CfovtJ_7TyMXL14cU_xqPEhmm_iCOXtLJ5yiSvv1qzhcWaveeBw2n8Bq25td4aSrBLdDKn3TZjj_Xc-rbCzajqtqOEo3VrMGv9hC_NrWRqDrQ_7I4R9oA144KpxBtr1mbhHJUXC8Hd1m0GCTsJIdGJpa", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106191893781117966931\">Hapa Kitchen</a>"] },
            { photoReference: "AWCwydimHlZZOSDa2ScZOK7f_hu19yCjRSI1Q501ZaHBpMwkgXdCw4_Fs3U8fW8tIhteRECylpnEVJzkkQdtMV9Hk171-m-7WpZ-wXfKhJ9EvN2dpOLZ3RXj41GTj0MCb2CZTMxAc2VU6usm8nMpiypcBjQsgcjTG9Vi6j_MTuwGZdmHDaTLXv5w7DBwsEfEzT6f3H_aqCUnn8aIR85YjA6fXu3T6mn4mVpAtl5J0CTBKbvdTasv2Ncb__lbvvF_mkbwLjjdpi4CsMLXKDt2I3qORUKKwOeSWsXpiVYuHgGC-mj0R9FgEYu_9NVdWAVxra6IULwtadi4vcrL7vjwK3yTwmD7ZzBijpWBQ59iS9zcxV79Mp9uGZ6H-QhjtKnA06JvFZDCjduAvrkBXKm7jJGjKM0sv0mBOfNe-9j_6HqRQjn6Ng", width: 4032, height: 1816, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118194902889772203601\">Edy Milala</a>"] },
            { photoReference: "AWCwydjC9K7EVfJOnU6gVmV7kqvma7OaZThgYmnVV_uIsXUfZiQ2doddv5Sf73HNewgb0FD02mWt5jH2yPe5bIsSBVFPajf4I8mXSPb4g7P9z5kWZtKwmkLbmULVDKRL4BzjbvN3EC1bCHYivhkvurhf2Ii2HWw18_akEzliOH6gcf7O_5dGk_sL3UXqWD1UfaIMNPWVckGkx1sEDogALbSAXh6G_yxQhVGs6YU6IGz7SDB5gAjQItFejnuMeBnLvBjwS9ZR3Pw9lwOmJ6G8qSMeFDjCpbdHw0Dk2nC_xXMJ0dQOq7PSvvDIzA5tvlc_nggizkObtf1qIIt_ux_2BpaRKgEg9CevRbcpcdm-m-IhnU7yseqf38063bPQYUR9DH9txxR8wkDh6KgSBeJ-gdiX5nqIvU4rlhd3vIpc3KKxa60ECJLMsO6VAAUz8V2po4rX", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105192970480061425883\">May Leethanachai</a>"] },
            { photoReference: "AWCwydgEsUyvVDUu5xhZif4gWhfThoX59aaqfndOiHIk4T8wlXp85dmvny11EAg8V7PY2wjW8R3BwB3UMJQnm_QiUsadU0nnJwW2xob0_ammMbhYGxGREgDeJi0a79XZ1tWq7ITFn7jnYi61VOmQZe7M072Dun-9bsUzUcSkpjMudZwXw_fHkNrIEUw719k8sJhq0Mz48Vv9NpDKG0_i5IelO81ie6fvsqet0Z4wfZkEMkHlKebZLgGFmGKQpH-_epu4htB8GOJNlFO6k-LS6hQ4T21bLWUOSR7YqD1aSu2149azOH9TqEDA5AbN0nNfkQtwZcc8J6PyY6mW1Y_LQfPiCV2KQXe7DpM3qBEhgEBNxoW_eHIjwmjrLxOmBQSnTrBj2-XQUIZkcCOpHevDhY0AK1NUN2T0Ddtc_tTCqCQth3-OObWJeMiR-ImNccM7Tg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111019592817433839535\">Guido Silvester Adrian Christanto</a>"] },
            { photoReference: "AWCwydgNVSRSZyhRcWZaZF8SJx9_TCH5dy9eAuUYwA5zdiAwFlf58ipIvIblgqpSLF7KAMdfq0sFCnH2SUXysTf6ZZNyxvUnBFZkLVzalKp_GHdZfqWvUk04gWHoGvIobOLk1VRPPB2934f2ZcKeNAE1RpvsWiJqnJMZ_wk9U_bKooLGHt_7YMgVLlZ2Gk04jd8ouu2pd0GqH8LfvERM8O33K3x7poOIReC_A1eoIGO0kAvXAVJm4ID2QiJ8e4ba7shQH4i08NnmPY6b6J2t1M3KWxa8UUPkJdsm4irFBhxuZP_BpLofdQc9cRXNVgmIawuEl7O6fNz34ALYI5KOM1UJf9MqZRutolLleEo8DmYF0x8GY7aer_65Wk-jYx7XLGjqM1og5LvRM_v3ak0qWdQzrcOjJJyMmkWiYjJIXk_0lq8hQLNNenokq8lJUwnZPYd4", width: 1280, height: 958, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112756305200346596849\">Ms Mey</a>"] }
        ],
        summary: "수제버거와 파스타가 맛있는 서양식 레스토랑입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 수제버거", "다양한 서양식 메뉴"],
        tips: ["포크벨리 밥요리 추천", "볼로네제 파스타 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11355854294750297123", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Hapa+Kitchen+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "알랑 알랑 스테이크하우스": {
        photos: [],
        placeId: "ChIJHxXAgql1hzIR6jL1ANvEUSo",
        placePhotos: [
            { photoReference: "AWCwydjbo9rBE2fGFy0k6g6wnJpMlunB9FXlQ9Eo_DtEOIBkhRlW2osfrLUiM_7p4_mseXsH5gAdWz7G04O9Ft-nZcOVtXNlfwKvjTONjOx74At5U_k2QwsZ6LDYdhiSZ0NNf96I5Cxe8gGeWCq91KLOtZ3gL8KfOzl3O-x4B5P-4Sswmi2JUpKBej9iCu_FYZlyn9a_pf9TeSuh0hazWLkJKZ-AS-HRqoFgYLqSU81NIzyyko428QOw0c_frMUptvcN9w_9kpDrvh_pO3dhGQT4j3LxLJXjzon12D7lTXEuHjU9YBzM7ngNK5cLGpjvxD3LYFhGhkdwed8MxtaBNMgKpIsdg1VqL-ngORfyBO2iY-vvDtWrH1KIgVJBzis3oEL7WNx5m4muk2u1EpzrokgPPzk4ZXHQuGCU_2t7n-d6Urg", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112974449848865314795\">Eduardus Bramantya</a>"] },
            { photoReference: "AWCwydiqsXmWI1oSFX_TeJC8QbpqyTA-WZ2mstCuP3yj7TObb6VJouplVhj4nVo5F_Bh2wmW6mBpnskYSITtjN3TG5tcTEaK-3Rve_flfGnchtZt4xN3CRZOmRnQM47KZ9xwK9kjE-iMEaf8QjnqBwBXaF4Gtl31s8mamegPdT6xJ6Jp6tt-STc0jFpj_SCFG7PcDR_vSe-eCpYOQVUBeLMQY1OnaCxnXTniwy9bTo5SOIuZYosKK9LFA-CFL1SKGBVQY5Hf5eFEjMU6Qm-ce1Cjr9iSaGe5-dUEYrdVA5eCuzjOvhI8tyZz4W1Ij9WbtkinPXdhi6CjE_7hh_kOUnfzXeA_cF8inTaYgHji4q63_R23jWdpIdvndK8G2bbJHeioiA5C-P6V_q2RgKIrIOmwUhD6k5WlIgcACTB2e_wAciSMYaug", width: 1024, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109078842618120780584\">Alang Alang Steakhouse</a>"] },
            { photoReference: "AWCwydgZpFVB6181T1nqIguk5VcpFaX7fEeLbgOBBy6ECYwl1W7QOuh7oZ27Dp_z51WuiqvXQdL5lXxvodk-kYi-wQOormXokUNiHqRvgO_bygWTYCvdLvZzlFJ6-mmPb7jW61dgap2rhCwU_6RcHM7ZbKeFhdzr3T-4zXU6w9YEp8k_uOoPIpiAX0jxnEnhv9k9XX0z6Ji82BhyA-2AAUsPy_tazbZ55JCpyNnTu1RcmTAXV_sORp3FEw9-E_0fLVuM64182vD6AxOierSvMor2wMrUKDsioDszIVWdiW5S-7cCxVq8SrVGSdrURdPWDdQ-mSR-5MiuWSKV4viu7J967DwzeDJ6zAxXpj3HxrFPlnzCk1qEe6KRNeZbqdHtnDza-HLcsYqUNihGAZkmXq4LvJP7fvzi_NJpp9wyghipQdPWoWTS", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111215342984760898427\">Jenifers Juliana Jasmine Paoki</a>"] },
            { photoReference: "AWCwydhwuJnw7yvdndJ9GFVVNzwxSTn1qCJ8TR3vr0fb8HIGEhLt2YoZ2iQRECnNC263CYsnSk4zEFDN0OaTqhQwELeyF9nCcd5BKFh6ts22lw75tAYPe7m26dnYGBCka4PB5LDCAwDB_PVXQhwW_W_NpfnqL5eVm9yPBJm4vsDnW4v_qr6bg_P90pWs1bNE0Lje15hKCKizuWkDrpFdH8JLFn593lQMXMQEo8XtEiV2MQE_1p2MwauqaBVH5gV0rVVm394mMgmDJ4gbDaYW1_LUPJe4kHwDWzLXzGv8pEAV9J7YcFM4wVm2oCbjNrZGR8ksa5btXTxFCMs9KrbJRiEk4zL6A42XafQlMVcWFOgw0UwMjhMA4__JhOYqStHvHGQnT5eUjh9sHwvZrllAublQa9GcYO62EfK_UAtowtl-lnEdSJs_wmDAz7fM4aIxvA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100163350648718510917\">MINCHUL KIM (PCPINSIDE)</a>"] },
            { photoReference: "AWCwydjg5el4sE87NZ2Pc8lbQdVCHBHhsVBvy6t1quZRIcesnOsyYofh0CRpLrojHhfolKt_dQnhfI0_jhYNx_PyAhVOXyXtHKEuqAsHIE5OHNZlao0rZyVrqjGOLugvW3B6N_60c_4vPoS--WPgEBQby5xttb64VKPQaHg1--9uBahil1GT7J6d9TxFR4PtdsJTNiXQclLbmFjFLa5USoq4zf4-BImotPqcPpr5eYrlc0Il3qE2bAoTzI4ec6Vevvo6vEcxjZOCNVvugG3AvAG_K_AkA5OuNjqUwsW1dy1qQehU5jaYDZY_sj6h3lxheDkJjeRgLqpeSVg6KHVyHW3tvnHZo1dRtt1ldW_Jlv5vsfjliEXZb1XgSGhl75xCbSiRrRUcvLRb68n_VGkXWtmXErBobcWLS-mZKh34JthranJGAJp7VffPojf5cwAFfCxj", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100163350648718510917\">MINCHUL KIM (PCPINSIDE)</a>"] }
        ],
        summary: "와규 립아이와 나시고랭이 맛있는 가성비 스테이크 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["가성비 좋은 스테이크", "맛있는 나시고랭", "입에서 녹는 와규 립아이"],
        tips: ["나시고랭을 꼭 주문해보세요", "대기 시간이 발생할 수 있으니 여유 있게 방문하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크 및 나시고랭", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3049434867599487722", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Alang+Alang+Steakhouse+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코코블루 바 앤 레스토랑": {
        photos: [],
        placeId: "ChIJYU64KiWZhzIRFjGhbj52LnQ",
        placePhotos: [
            { photoReference: "AWCwydjZzYMz7nn8CYULfweSkEXS13CP0Ed9GBwRwP-pvh-QTw5MxsD5S44YyjXycpJrQldq-oCGyBpv_frDLQrCFQXGfZf94_Fla5wYgLchcrjRvT_dfA66nPMmjJttlpOFwFQszpJfhb9z-ha_WsiEjBRF9rF8H3TGXwLLuAbS3ayRtSmpdZSlfDTbF9lnRrF1BvuV4NuafsULalXXc3wiXucis0xZOJqTM08O8EBEoz6uQhEcbUldZaquUoGurw3ajLYYddyfmwfC2iWPCmW0TOtrkR0RwSfGwsHhNhPRfFEIaO1t82gHmDEXE1s_omJcahk0QZbaZ5g5ccV18XdkU0XcjqKRvWSqSkTMQlP5Z6Rb5K38f3TQbVP-_wyy4soIdoVrzYjJPEbq-eRRLscOsDSf70WOgj6ZohRWk9Dwl11fpHlGsfoj9AK32MpqFg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102038318466497733180\">Niklas Beck</a>"] },
            { photoReference: "AWCwydi1DTqHSfsw27VrAh4vL3-rvXxpQi5g2wXPX-_Fl8bNfIwG1RHvv6tSfNFMeyoDq3JPgBKxgxI4MZX3QLC5OMeXKuE-r8FUUORVQm2N8hoxPDfBaVUslZvDRj9WGu-ZgMrByU0EGEv2KIk0uhQbMEZekTcJSnYI3MD2orrliBdND2Q8XHeeXyXYPdWHrSsuKZkBuv2e9TZd5GFdgFvfGkGy52RZLxlfCbeqJU9hcjBwiXTkdyFeNZ5uC15oUPUz9wSGkm-gnvSvRAmVyc3Kuue0-NynXCnLf9mRymYro4ie02kVbw-S4dyEGUFf7um0skhJ0PFPklZETCGEmGuXHZFuvn8NGOtJyCMso0aMxe7WiFxR7o9BsNe53XgpHwwbFjrEyq-YtpigBSV8NyYYfioWL3Os8JwRMv6esws0UK0jWE5epvO7OCkROss7nQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110209056036524626857\">Katharina Göri</a>"] },
            { photoReference: "AWCwydh2tb1G1Boyj2CB2gu3AQslo3-0Cqs2-Ae7DVm70kHPksL5-k76z4hRFJVv062pEVh7Wylof3alm6V6k1EnbkUU1QU5X18yNrUJSocll6OMqYSdbMGynM5V9D0xoZgwPUkiqSJI0MYlZAACc7Jxld7Iuw4xBmdrE8d-Jdv8q1bg0-REyjFCktJIPWgY7uJGFn9oP5eB2btk_55YZFl5wRDYDwZJqoGOeK7MU4pq6FjNaojFGM3-eD_pKsMTDstqTMCb1AXMy7kxweCb0WDEZD94sr64qnY4g-sxBu73GBXrtMEmgEMw3dBB6cLw-LtHocfwBuKSeMq8QA6o0ZnIPARqIwYbm49aWFg2Uar_dS2ztCZPF-YMwo8JOGjerzS8zvbQ3GXmgwDxrCSTNXbi3pu4pG_yPM_VjHzTwE7_Kj3MaI7LXi3q1sZMNWd2Nw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105121635436191975399\">zofia harries</a>"] },
            { photoReference: "AWCwydgaDIg5IAOxz8-QkBoy1fkrmKkqzHLOJg2Y1UWRmrQZuK_hiOzozOkbOP7oNffUkDu4_mOdYf__a49Y4nZU1z77ktU8tIDC8cQjwz4UxQvJnKBGIXPwYUL4g8OeIB5XDQVs-ISmKs0uX6pJ500JslZtxooU5TrrTMAkJg34ea7GAHAkrlVMWKte8YLfvVkb6C1XfmUWMfvSIcUeOFN346Wrp-wxcYRJBh8NiSnl75cR8LvHw8tyn7RGZVqb2fxQ9xqK51yNNYI_EStRBSTeQyizExC1uzq4OPfbRCEP38_0CW76HAwEnYJZzF4scOH39J7Te4gBPlmPuyyhNmPtATdz-I1KxcnWIrttECLMyyHuo7oomSrxkoGYMdAenHBkiakCXq5CG5gr9nUtsXXwkdPBweDO_IxWFRIddv8S67LjpLaEMR8iXIC4ECHgLQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110526619770419093588\">Adhika &#39;Coki&#39; Himawan</a>"] },
            { photoReference: "AWCwydiZflXGzAo77V6SDvEyBnGy9ZEhRpn5EKjC9C5At7wA7X7z0stYbnqYlrn0PS1NNbpMzdDQz9iYva4meUBKnnWjQAlzLHcbk_EgQMjIfbmBaomefs5BTlx7A2S9OEa_Cxw-VsWOMBQinLe_j8G7Ievu2GgFa2FmbN4ucMLVWqVRBUUsO8Jczbz3LcwADFYhu3S2NtCfcZR3cJZxw4zdnyiNFRf0iZFAptPsVZLBdx9XT8nEHonelSqR7YdQ9rjIKa1GBCaybEZESw1t-BmOR6Cjl02XgYxIa422rcHPWTOOu4GExd2uEQlfGpeGrt8qVblmHHQgNhcycERYoCIBL5dGLQql_afqt-CjjKfZq6VnMiVAXqtavZtTFNOmkiXQCcRcA-8Uwf9sTgFi6ym7UubKZRmBjn7Ka2dbbtug1awuZ1J87l_dapxjA8P5ub35", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116198494785774538737\">Thijmen Gerringa</a>"] }
        ],
        summary: "뛰어난 음식 품질과 친절한 서비스를 자랑하는 인기 레스토랑입니다.",
        updatedAt: "2026-08-13",
        highlights: ["프랑스 스타일의 아름다운 플레이팅", "부드러운 돼지갈비와 풍미 가득한 소스", "환상적인 맛의 구운 오징어", "시원한 잔에 제공되는 맥주"],
        tips: ["인기가 많으므로 반드시 예약하는 것을 추천합니다", "저녁에는 바깥쪽 테이블이 바람이 불 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프랑스 스타일 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8371758767844438294", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=COCOBLUE+BAR+AND+RESTO+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "세컨드 찬스 카페": {
        photos: [],
        placeId: "ChIJ404ShuF1hzIRbEGIQgUpBB4",
        placePhotos: [
            { photoReference: "AWCwydhUQRTvg-SXc87T-gZPmFh9A_tfuhlk4seqoNN3WGgV0F3DUZtKrcUsqC9e-gGqlCxMW3pJF4klzmZbZwOCB-Yod2BEUUC9t_4iNhI1x85xlya6bpIY4A31p_f_-qlgXNUnUjNmgD2gnrZv1Zt4z8Rwp79LznLmRiVmRcfqX8nQFIPsY6RkJ2V-sFOj3wzKxlEIfsd_m-NKkewMV4Fjxr-L3iDARlrvZdGHzRd9bSq3jjOQRl5bcwFsEKZvFtSx-TnA82cbLAVugrliki1fpYuvYfLjlBqec61ol2ogVC6YwFlTFWYHt76Fr4-HTQv7hruLgR1QE09dpjwI76poGetA0manBUGV3NkDujhDT7_a5OfJ4qI-Fyucy9RoC5zBi8R-bKoSFkDO_eU5ysj7vIYp4e2vej13hKNpQYKJRy4", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101443137007510172195\">Jaco van As</a>"] },
            { photoReference: "AWCwydi3gRFZvG59ItWksMAXZaH0nwoOxI1ZoVtru0U007Z8UDlUZeWbVnosPBuUrbka86KA4PDSBbMWVwxF96aIoXcpHekTwwsVNbGyzm2l6ToPUnXTkOCiFx60M8OX31oGeB8RUw-xsmR-7OyqVLEaAj8q84RDOg9MMGjRuzrAbUYhQ6KjB7WMOu7Rs5oxJc-Ff8iKqJJstdO5D90mZKoVGzBr36FpzykWwDrvKgnA3Im4uAqLN3AsccHTN69wsQT-DZjIZVguRtfS8_mjJccfdC8_JpOtIty5gBxjyLrrrkbg1l_-fL84boSnjfHULfc_5GG_tZAXMx12_gJ2UNVZn4lpKZ-cnVuR2eujctboyAAbHaoCQMz5kn0SrqaxXXfXLnYHIVyQPHruXBkNgz_k6GYY5sR8o5YQMo-DBXGOsiLKhyGb_0_iMWP1iAna5luw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108401362990349459429\">Stefanie und Christian</a>"] },
            { photoReference: "AWCwydga-d_c2isB4VI4rEZL9biqfff0SwNQPsUgf37k9FZvtjgNQza84qsjVK3u32_rSojleHF8N__rH7svUH6LUKDb6Of8Nxc61-vQlmD1-50IjclBlMrsLcFb9Pon1pCUt3-HsDQgoHTjuhhhwMu_5ECFXUrDNjPxwuDKlomUcfb2_Bprx8L-j6WFCKQlEnO7MRz8MbqBVJ6oR92QCa1IU2Skmb0SB8i0vHRqFjMJpMUjeK-LKBxrkLz3y1ibzoR7_nnj7650PjvuMzRSw0aPiyqULi5qCUrx141ydRDYP5bVtc5bwnO2fajZs247kNvA5P7VLWOXorGUlD9GEJuD3SeKpNVYRksrlvIn11u5gV7ZiPX-vge4vzP_VNeeRermD1CLbpshfDDCNG8OY1oEAfEx_WjAAg6GjaVYYY77LCIurA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102848067593155198622\">Praja Lim</a>"] },
            { photoReference: "AWCwydio6YL7h_avUoLmjb1A4f9yN6G9yz0Ru4_2mPf_SxcHLpumdIE3a-urmit2BOlYaEorG-cGzJtJErs7E693hgWf1Pfd10nWX5Jytbk34si4jsF3vP9JY-QkqyQRhC-b3-ePaMUvvLf8G_YgRAjE0sKUynCIVz-XBJYxeJ6iSv1itM8zFFir-MOpZHK_m6mOfgiVQt76yN0hpkPYXi-VSKLsBNYr55Isvx5WpCOvlKQ3Z-igXk_q4elSbm7TFF1U7q7B3BA8ECuzriG4hrNp-5ZwIgt3B6H2SvXH4cWgDwbzgg8wBXwdT5Z1yC0zoLTyMLHOrHgfPOtjo8mb6J1NuwrGjf8LnJyXirpNUhmDv2YpIevogQCQ20HCpvq_eWp7aipkwbva99wZQuZSumF4KdTB_kSWLRMsb01x7te3-Ue2nQ3d3tqdnkrLEXzgAh-3", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115850145721928024866\">Mohamad Kahfi Ramadhan</a>"] },
            { photoReference: "AWCwydi1HzdZ4WiKmc9xtRiHh8tQUOW2uz2UK205ciFDPXgH3zGZlN3VnGlIzmduuofHJ7sGI-_-QrI7sKJEHPl-T_NMj4-G68OtAZuAEZuxDQ8a54LxjP4xFm0K40Utts5bgZyTHlrQmYSjwDx5xmK1Imo9B-OUhmV2a3kmxMiz9ho8Fpzf2hXASa75MjdH6OegLa8GVrhOiz2QEoXrmp_n47sbB3B3vsOS4x-zhjy6HbuS9zr44G6F2xNgtEV6IESeiQOa4_MzewtOpNTUYCzzg_mLoT9hjrYkTG3VoXF3OzBJygjY3_uEl6asfr_aHI92BY4OC3_jmJc7b1dXo8-EejwJYMVYrb1XKWejfLhr5dCPcJAMb4e5Mw-zy8TLUeDLQYPSrt_OGWap28sts2zYu9sTW1EIM3ymq4gAUINOzzs33uNjRiKLd7lfamjaT0Io", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100259716286034916704\">Renata isabella Taalempungan</a>"] }
        ],
        summary: "사회적 가치를 실천하며 아름다운 전망을 자랑하는 마나도의 인기 카페입니다.",
        updatedAt: "2026-08-13",
        highlights: ["아름다운 경치", "맛있는 커피", "사회적 가치 실천"],
        tips: ["마나도 방문 시 꼭 들러보세요", "사회적 취지를 응원하며 방문하기"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2162898823612481900", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Second+Chance+Cafe+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "블랙 컵 커피 로스터": {
        photos: [],
        placeId: "ChIJj_MoSeV0hzIRCOm008EIiIs",
        placePhotos: [
            { photoReference: "AWCwydiUJgLImQBVMEQpIRXmcgjF51ZuHmJsb-pF8N-WUF_mDUu_BRHFPLAcS8Xj95pjScq50_cu5ahKZ6WlmXCs_OpmsvBLU21dc3W5_Y92KlbC92cIk8w7LXJxv0zPrfhiWolMSJSaVi8Gfg2vBPWNbZgIUaoPhTNA_faeC0bjvmBqz1_kqxZMkD58fTthEaHBY2QF-akGL6vuyoW7aCgJzXPV5ggZA_a2-l53aiTImtMvZglCA7AdrPrHI-MVYiczDxgL9yg8Ez3FnEcEPePZzuL2VdH0iLfaAq1RBu45aioHHvbkkJ5S7rzMoMsEOTNVsqg2PuE8PfHLzXLM1LfYZddd4EuFksTk5N5lTQt0bDhJSS_GZYNa6EeWvTd1nWFJWomjvzoJbfHiljbOM7ok0pU3wUwCEKDrZcEFBxYZS2ZmGWnsqT3pN5gWVUVV8-It", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115699701633466828199\">Frédéric M.</a>"] },
            { photoReference: "AWCwydie0s02-MfFj0Jekxeub3s3FS_z1ty1ujQd69ZXt-TMOU80Wpj8TRxPwkzBP8m12cncbLazl1wnyWmYXT3W9v4do7UvXdUgqI16VovVAvUmOKmvqXnIvDIcbS_HBY0M1n4j9VTtdKlqbckYWeBc8IDxzaF3nJ6Ij35NJXAqb2rp_sVzrLQf8LOSifSCZavQDcYbR6m_awCxUTCDRVPwgihnX4yz856N9Om-eCwDLaCCrzUCAh-jvIs0LuS6Xqj8taWbJ7d0ofmDs4l207Ym2Qtfap0fHjS0oPztzB714eINhpYG_aqGPyy5mhL9zPTkq86MnEYiz-7YVMZUC_MHp3tpiH_DWjjh1edwbiMKbVBzRMB2XjTNXvWtA3BDX3S_7Ep0wmBM7hCddlLskNHWanNftilIFmavCDCQ9xwVmPE7DA", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108078129415260565990\">Rendy Stewart Wajong</a>"] },
            { photoReference: "AWCwydjCP7hCX_1zHrIosz42urgTOg4I3SRaOEd7ESZ0Fd9ukadBWqUkWDM7aB7xnW-y6NB3wjSIdpPWJkYyQCRh8YsLnU6rirEkK8_ceA0voalzHeoG2znVfxrNePRhMFvBvJSfvqBYRO5AmzGLTTd3LCuO80lg6wWsmCAl0sp7hhbk6M0VSj-t12WzrHEHyg3ErImYYfOQ0L-sahwuyNGjTsL4Ycx9TYIxdzfrQPE_K1-mrwVcEJ_V1q_bMbKOJHY9CD-LVoJwCdSfFkcWE7-Jck9YNtRyQbGOj5GEQwQpotUbjsMhU5CyOJ7G18gLd77x6kr_P1GpudfgW7RCdMAr8WHhj2DUHqPtYTB1SCHQC2dIAa0a8fcLwevwxH5LLplYevIQzBteYEL0RTNyqXtbk3OX1SBO8aZssgNwzortHTSeKUQ", width: 1184, height: 1184, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100752629670634817281\">Randy</a>"] },
            { photoReference: "AWCwydhTjAw9XN7BlK3wWjIFtH0arvDsh1hFoJmInBDdMImmX8tPotaPGf37ENi5X5aEf0mrkkKZTJNvVOjXFZPFWtC5k5KAMzl10cH7V6dsG-zDrWisQQr7UlznScWL9Wifg1phX3nZKX9ujxdUekuQGlTdKZ8xe0Vyrgz_2G7zL8TODuoAmg4fL6c3wZU1CqhMuCliL7Xz9vRlD4zyQcgqWNEW3gWlbCm6c7mG6rD4cjCCGCr6Q6Xp3UVZzH6ojxPrIT-4WEZe0WSeKJMUVTh5aQ8a0GA66kOm6SmPjawl9QMSbFXDT7gGxNwqeXRUX361nJFgfwIZxqXENzb0Hjg7Ybd1X7PVhjRmxW1F-QOCwu4vEHxAQk_-TRQtvxaJdNLxwHAnLoFx1WyTXufdybp3zeMiblaTIjvoHKny8NQMQ8E", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114809434536951864211\">Agung Febri Wibowo S</a>"] },
            { photoReference: "AWCwydiR9DJXl-1WnDJGDMfzO-e2FVAPbE4l34hBWPII7In9UpNi2-hzlUf_bhop8a8XTYestVn8SkLxeXgZIPMpB5ud6jB4qhK1NT4NxGObzIIRXiq-xzmnKfLTFi3lxzPpONeY5pwOnLA_0u6EtHzaXmcs8a-OBdZRHetY1ITliiiBvXqm5Vr8_9GRi2TVYekX6_Ihgi_JVkEN86Q2_mbhRgP3znOkMrm23Uj75wEUNyqKXUPqiL1GB3KntbFK0bu6d5f_OLlRwyB71ieTvAYy0ugsj4U23CvWWJNLtaiV-R64ebsC89zTCz6IELWm9tfUP_RMgIAbtMtlwZ5v9M96eRWqM0BA3XhjrHwB4OuTIin3RQkV2Fn8tDX4YPosE_22JjYcF1po7uErxDn_aRhr1Y0uD_1OxzsST_Dh3v3LB0L5sw", width: 2604, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107434919393553702953\">Nouval Rantung</a>"] }
        ],
        summary: "깊은 풍미의 필터 커피와 친절한 서비스가 돋보이는 스페셜티 커피 전문점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["풍부한 바디감과 플로럴한 향의 필터 커피", "친절한 직원과 아늑한 분위기"],
        tips: ["필터 커피를 주문하여 원두 본연의 맛을 느껴보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10054295796678191368", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Black+Cup+Coffee+Roaster+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "알루어 커피": {
        photos: [],
        placeId: "ChIJG_vTs4x1hzIRFWgGTjHMAPQ",
        placePhotos: [
            { photoReference: "AWCwydgukd3B_C5_uhOyEbQ6BD4YLBhw-agXgaTPJOfKJBy-iQCOBo2kqiSRiew8-e48hYrIzX7L7tAh3zpATWLiPXISUWW3QswdF44eBf4kpwyFIYqieDrxlNNqe2JdciVF0LYabWDfhNegjyt_YFmc8OENufmrh0ztbri9Pqmnq8fDZJUSTjqfh5YOp2gAqSo4Gd2HnvwwgjnOyhz7m8pJaEMagAd12GCBMUkLGXgu0fVLCDAVRfPDGF9xfVVEDZURJ3W4hnRmpyRp8VNGRt5ZwnYC4dKuWu4viRPFMqQZMjyC6Zitnpp-9MuZDV79TGU-ZAyQMBqYKXVW0anJdYxFjNSW2V5fLm4cb7MX6TE6BU4G0bzy607Q-CCGYFzCjGJHj0WpUuzPwhjnCVbKs_2KsgJvT5VRE22Bt2MD6AA_AwmlQlDfmz8a2q-tZ947HQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100328238232830117406\">Marsheila Palar</a>"] },
            { photoReference: "AWCwydhgvTMVyeC0eMBafRQqRREwYC6PXZQsBRYbb6u8Jok7jMrdQ1uk99oy3FEJ1mqIohHhVEoAjNgG5wN6BUyDWHGatwOo-_A2mrBPu5LeHImuQuIPl3ERoeYZ9rO6-omBFdcr_LKsSNTX97P02Njc2vP2e3ktqLhx_PULED9QUmad5lMls_82ZaznhaMY4FfFQp_ymedGVZrXp79aPVUqE9IPWAyhjTYph61Yk6TN1Bp7xUZIn68xKfcz0C6ovI5T-NFtbfD1expXOLArZ8jthXhED3lfcPUdO6TWzFE64FRlsEYUdHnzdKtLpg6JtLLLW0rpC26h6pCUOWmBboBQkr7VLM6kCtXOUM0MdhBgomUEt9cFv4AmuhJvZa2E1tlh5G5ZCcB3gJcjlOxI_qq02ZurZYX1NZU7LB9s1sbq7TKC_nFw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117335759194153421818\">Allure Coffee</a>"] },
            { photoReference: "AWCwydgYoJb9jJxgF4E4kko1pWojx5xyMSByOEnAXkCfygtJNL930mleD_yx3JMVyvetiXvSGyQlgbyS2hTzUZJXSt33dNkFeYj2iM23aybsoYUslmCkocwLi8jRBuFzbZNuvrMamUZnqu0UMW56DzlIMqRkLIh7e8LKUtsZnBCOb6v8dkg8NHsDqztM5t8x_0j0kjg0XA8nFlxi254T0XfcGAGPdf5JPQjm6G4w5RjZ80S6Qbf3oaghgrEoBqn0BsWcVy4zUgQNYsOcLq3kPviHnOmUj9SkxI1mcJlblTz7cBtGlJWXAoGaTvNvJy_loRkXcPXfm2VrAmWxrYCXoC5L-sdnzrb5cwroRWVE2vuz338U4L7YHm7OKrh91CHA613tHAXYMgNHznEsvJRLAjV_jIZJWawlQZVcHq_-1QiA74MHTPHJEvFPSDGuHElPyQHn", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114724532217529380589\">riedel tryxie</a>"] },
            { photoReference: "AWCwydhy_AQjITU0q1U8TtPQCfEp15HkjMV975FwXXNNs4COGXLoMM63q5YGG5wZIWGx41PBtSCPPyXXixseoFXIzL7efPLGbdTf2DKFIJ3ThQesVP-d_8ISedcfsnklUhHxtfav1Yiko0VjQ81k66qZOBFaOYxP3CfUge0XWUzhjfocNr_kz36V8VqZsla9NDQGkCkqF5mbxnsItg5sgTDtXw9vVAlXNTNJrLQbUbZt_6bEb9rb1MD5hBnxx1rDtD8DY9KwcCXhTY774J3CP4UcRP4CVEY_ASuli-Q5lZBupLNyeaHVFeDnhTFIvvUUnVLR3R8ehwD51Zo9Pwn6BXf36JKdiDsSWX9BQp76u4oY2otpFmEtz29_h3DVmLkBqUP7PDLIK8dJRiZkoLYRqcPhktTYweB727tBOfiYgnxNBs-zNQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117335759194153421818\">Allure Coffee</a>"] },
            { photoReference: "AWCwydg_oG6cp01eUEocC8JrmQUEufkEe2KlOtMOZfLpfZh0X2r5Mr6jcFR1wz7zvKxmgX2I11K4wJBEjcVmfPZG1JWx9pDJGaVx_w26IM7If0nQzM21oYOntoKY_6CernHnBH9XC72QQv2GEFawSF8a0GRTtGAe0UM8iTFqnNJQBGf37O-YRJMZ-e-m4xZm--3D0wWgr110JnPi1c6bpymqVXsFf1CTd5uo3Jm3-eQbU-uOYD5P3UGuTLRMMKHOgwXXBcC-GGNV7n1_G5KExi13SZQjM2AT-PiOPI8hNcQf6yeDA9mibYmQl5Sy0IBcqVnYWqjUDPsLXvsEiFYjJZ0PaQFqusoMOtNgFXukYGemKgGkzJp6pC5GytrzA12dpyP7chETOLBVMofrpoFUJvxplTekYiWqS0Xa8QvEywNHJprt12o-3KuyowUqbaYhM84Y", width: 3048, height: 4064, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112690935261679482826\">Butterscocth</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 매력적인 카페입니다.",
        updatedAt: "2026-08-13",
        highlights: ["청결한 매장 환경", "훌륭한 분위기"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "분위기 좋은 카페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17582277457388922901", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Allure+Coffee+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "중식 나시 바비 케찹 마나도": {
        photos: [],
        placeId: "ChIJDbT_cCd1hzIRvlu9Cl9Ld4E",
        placePhotos: [
            { photoReference: "AWCwydgbOz1UIRDzTYBNdbSGDAlt6yYcPTbwj19NvPXQHFd_m9nhIlvMabgKbmwMwv6MULRMuZByO_F90YLZuG6qyTUbyid82FESbH5L-KS0oTnI1IshDOcfiGuUdj1fvcjLZsUc01wTsSXkMLO51mjfsr9pr9vFjgZRin1IQgtCTu3vUYguIfVwJexp9GOjZy0L54sn7u9oN0nIgMlIDbYRTx1s7a9S_RV50ohFTG9rQ_ts6ud1KNQMXpGtkH1b-SDfax0VCz0uPADlLMmhfoVOlZKIaqvOH_Nb-chGXKfBNXH_ghKaGFfCPzOOWCXqfdgzqx8ovgDUjZnzX0snETiNhcw2bcn1NyY96YPKVC3tFroYfFkzy6SzfatI8IrZ-xSH5hf4jbDRibr4LnD9JIMsc78G0g2XMKte4rc_2fFdfi_AB_E", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106960462176285727272\">中国私房菜Chinese Food Nasi Babi Kecap</a>"] },
            { photoReference: "AWCwydh4tHsK6GU000IafQBwsuWBIiT-ffAxBprJAUuaRWbyNvdPN8TljMMaHETEIGx6CnBojtNzZfUnsk4hk2HcQOe7wUH0TURVmQq29-AWE9uPUK4Lx3CIqj4Hr8FxI5aZRV5gWxjPH6FlX3dds2jU_fGbEZ42Lg8tKaf2z8TcJPp7IDXoh937sI95HNYEj0KKBL0eI4B8oPm7wLv8dAMcVSRvRqIeUHtwYGuOwQS6iinWqDHqe-bu-4f6jUpuBOI8CibbxaJoJP2qw6qVzaX8FXUwaw4QQ0ryBz0Qp28NvDZ5mAVqJIcwMqvIS6s_Dg67GRALSobLXRnoj2DLyYeUoLhTcRxO58cMIUzioAtuYMlWNLYfl_qC0UEuujgJiBBJerTuAVOjPASPOVfDMmHpKBpvndN84Yg_hqV1JsZOu6I3Ag", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106960462176285727272\">中国私房菜Chinese Food Nasi Babi Kecap</a>"] },
            { photoReference: "AWCwydhEd8DPGMQy2D69Ams37MBQAwNGmZROOKGwn0QJdChMtwZDMiVQGf8uhzJpxJVAlBqej4n0UDEERNeb44AzKV2QKGb3eZItydttaFRaPXVd_-Ql1liAXqFUYwW2E2rKUGrhJpGjT8UOyUu84m-yOf9Zi1k4CRLjh1nlllVs8Wwr138VPupNDL-N2060taMzZZssOfeLz7aDN8utif379LbssRf-dHk-LP7S_lohFILV8JCXM8Z0bfT7HnD7juS5rV0IfutyXveYxjVc9LEFkukSdOR0CEr9mXYdDbqkrwndXtkm7vl9GPd8ciIO218jWQFAQSqjJqbLy7go4JqrkncpYV6WxyaQYAi1l3kuAsXgTU_LacuAxZUJtweOQj2lhfgEIkisb1_yiXb_MC2Wr6hu6OCSbSwgqpa5YEjjWUuIIw", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116175285388130423661\">Lin Joon</a>"] },
            { photoReference: "AWCwydj8MmUoh6waOMuUiU2GdVViAXUITZ93Qc3iyg6K9dD3dLMEVk5mVclHBzsUMXiwFmIW9hT6YHMLKQELMwEQt3KWs0fT6ZR08JX8vugblbrxwaeYTbaxGWFQsRVXOLGgKX2E-68jGTyZxFvBU8j5Myy_N9T5nI2L934YdVdLQgaVkFnINo-ikJlE1H2Uw_oP7ZWa6wRzCjtMUnxjMaD3gftNzuEJfwjcw6iI0WW12qY9XwGiYuvDQEwfJmcfjDK_5jiVrrVSjZKbc4x9HhipPO9epSpjjSlkLK8unqyzht54G718ZsvJsamnQul-Xu6WY8qGVaKY_bcYlyajFWM5z1sw4iun0CTy_MtszMSL6aP4fGBdIkb6kjmV6L-INjbFaZA4KRWzwHh_K3-_94NHeEtDasvripAjR3_669oXr3xNa68w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107463127156243026760\">jossie bee</a>"] },
            { photoReference: "AWCwydiUPvRFnX92Xq8Ek0Z4bndJ4vzUwRI8EhXAjmN7kwWV-UnRRW4FVFxWVJOdtz8dQiWXlnqcMWUP_f_2KgI3FWuLfwPVwMVsc9tg19zF3GSyqfys5dfSQu7_F4nu7Qj2BwwWVURVslhWSBAqJN7-w2seF6PnumCqBuTb3tz8GmaL51ms3ELqPJW35oEgi4gCXocwEZheWqoIsJCFtA0HVM-CAfsERstQAxlt5eB9BjzG7jn9oyquQZf9gyBZBD0O4K3Y93sdPJ8kXobJjITqgaEDzVxqxRJSwuCFxWe7qYiG487ej16_we7G9CErcvktAp5tvsXik1J2ZMVLMMrC0RnvJ7Csx839AOghYNI3oEPQvemCVi7Nco0RDvXs3VWB3K70sT53floPqX4QEXJcCe5sjfy6_we4Yb6hR8i6OU8BcxYEnhtTMOG2fe2HIbn_", width: 3344, height: 2508, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103734622573271449339\">Lily Zhang</a>"] }
        ],
        summary: "부드러운 식감과 적당한 양념이 매력적인 중국식 간장 돼지고기 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["입에서 살살 녹는 부드러운 고기 식감", "중국식 간장 돼지고기 전문점", "빠르고 친절한 서비스"],
        tips: ["추천 메뉴인 간장 돼지고기를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중국식 간장 돼지고기", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 9:30; 화요일: 오전 10:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9329008024695430078", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Chinese+food+nasi+babi+kecap+manado+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "RM 차이니즈 푸드 콜로케": {
        photos: [],
        placeId: "ChIJTYbLYkd1hzIRVpUxKcE3V74",
        placePhotos: [
            { photoReference: "AWCwydjKi6T53dd48HdkDvlA8lC8Qn7cyuuOr4ZtB3l0XB3to0Ty87ZCRTPTHovwDCfEgVL_pFXI30WFUchuTUKEbOue2rUlgTxFq7-Mziia_R7jGLYeybd_LgKlvNrfiI_iLBnxn9bNu-d_zKa783dY1-H7fr9PAv3ysmQt6bJ4dPNIZMB8Oa2Wypx3PoSpN2JJR2NJlV4G1Ivbtq51SpXywDwmpIt0QnAZJsrdwtzRvA2NbFceRgEblQmqiaW-QHRxxNhJry-c3hyHuHaH3-jitG4cBVrESFiAlZcXPZHYvEIup-BeSTwlnSd8ZfWemo6VIovEUdz6rdnuMNWiV-MSl1fdQ6UGnvQXpj4DxjCMyqLQEKOxgNZHHz2MwLIBjy5a2A8Bh3mJbXHka_FDpgMsx84lFQYErS-1UwgCcmUbDArG4cb3K0DTtomqUCsj-Cm7", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109443444498546758493\">Andree Neru</a>"] },
            { photoReference: "AWCwydhp7r63eoX1p5TzACVxtd2lNn7Gyhg2i3epwsCgiWC--YW3ZWAc5oqgAS4PALwhnCYZU7I_ItVz8zsanzF64biGdz-e4ryyYeUVKcKqLHKHfsk-dA6CSShqGiRbUxeJriIEKnZXD7AoIcAxyw77jjE0OmVbLHi4I1225EsD6hJw_kciTgTWupIiKoqLFET3eONOoJ4INy0DmewGUuZQugCo0qRVeIVvCe5HfVu9mMDxW4vp8pvyJCff-BQVtrZSJ9uHAPUFSP22M0thsfBI4dLvAXT2iqSL4jG0v9KXAZ_Gpwtpwl58nYbqcU3O23wCzJoaDOwg4UECo6NDHgO7OrHP3jIIKX1z34kO1MTsXXLf9k9I3b45DstEOqMXn9s1nktgAq9aADM47Q0MLxsu7HZxf4ZXk7nL4uznWVtSe1UUHFdU", width: 3472, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113106446089493276115\">Theodorus Vincent Rau</a>"] },
            { photoReference: "AWCwydj6XXDAOWoE6L6yVcafV3LLp799sDA7nWJizIDGjCpUtA7DG07wnG1BzGHiVne6fY-GwucL-IKFphXiGBHherbSZFtJ6F0lujha6E7YrM_b6ri6SpIEuLOEK3aCM4godeqJIhe2eQ5NaX26USegmprVUS5yFt8jd5RRlFRp8apC79yt4roMKjtVIq7nCSa5qi_sOHUszItLD6M_T4mcbFTXAiOAIqDTVKI3jP25XSNNt9vuLGDJurpal75XQXW-Wh3XSS5QkmPGMvCXceE8p9DIbX0uizLDfTPSjf6b2yLosN8aGKt6yJokTK5tBZsZc1nHMfraLt0hYXjRt0CvsjH4ysN848x26nZODiFHEIwpKU7Au9EEyfbN33hTQNO6bUC8LTTh47tczpSR2XbgZsl3yuJFF02DX4B_NbE-gsYb6bJ0Me5a6l10vcVTZQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109443444498546758493\">Andree Neru</a>"] },
            { photoReference: "AWCwydih98hNUy6PBbklxazMsSzPilH9gcPMlwgCPt-TXXj0Sd7ReJDC8r0MwOFm-ZtuYutCbrkDwQeU9FU86fTl6NmXixlqp0zUF0t8MKNWWDszjAZBOzKTc91OJK-xjowRpDYcy2rb-HJYmDyc6aswT5QrZIa6R1PNzYfgvUr_HpmSJIb14my-EO6lFr7jo8BGjW2aF8sTZOlPtD-E1QCjbWGxcv3rr6o2H3LzEZMoPgCQr9wDF8PNOVqWcqG3c26FRsemvSmeT29NX7_Kvg3tL5uuYkhyVfLwfOrHosyFpAaLWmMsYB8TAC_Vu_MohyltUmmRIOyFyZ6-WNN9DbYjZHNWxFB5p8kzoQxjKDPzReXjUJq8PnmFKqxp_kmE9A_nPlkQatrkcIPkGQNlJE-8tgknB19hDUEUfwPdm__JqTyuKxKUOuJer62ah1FaiEhB", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113481484988603224052\">chanwoo Lee</a>"] },
            { photoReference: "AWCwydhDU62GT9_5CTrrJ6nZIt0Qwa13XDiy3wbkzlay8qnkR0QK2EC-Vg0xbHwwFkzF50ZuvNltieBIk2rbuz2ulvxuN6bjlpXyER7QvTwfqDHJ5LVoZbvvcfCgyY3d_QbtufBuiqWYcSttcsNkfJ8kGZJMOOEILyjvk1_N7qKIp94AV93MxFvJh0vqd0IS-zT1TwE_N46bQ7AC6KaeokHTH7cI8drQ8vzrw2faGtItRRINWzle8BbV8FhmWjiivdTBmiXQKF7Mkq516IzAvZvOabQKiJuyssFFgZMeY41ft7Rk5WwolBENeoVI8qfcGwMY6CJN9InNznOI92J4BmF9nV-3WiGHwP0k6CBTkFV_m8S8EDH8AXvnF9edsqyNkfxK5zhqk6Irqy0PEbqr4KE3798EpTT0uCDmAqH_ZTIV6kyl1Lj_", width: 2088, height: 4640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110395500976629212049\">Femsy Lovely</a>"] }
        ],
        summary: "오랜 세월 사랑받아온 전통 있는 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["변함없는 맛", "전통 있는 맛집"],
        tips: ["주문 후 대기 시간이 길어질 수 있으니 여유 있게 방문하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "콜로케", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~9:45; 화요일: 오전 11:00 ~ 오후 9:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13715492492939466070", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=RM.+Chinese+Food+Koloke+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸 킹 레스토랑": {
        photos: [],
        placeId: "ChIJqfxSExp1hzIR6ghPll8QE-w",
        placePhotos: [
            { photoReference: "AWCwydjeq2oa1rZGIr480r6aTTPcPmQGEYhTS25bwswWH9sVEn8rw8Q-yCt0S-IpneDN2oj7QzTLu1A8taFGk-t0v4HYAYl8W1ZZi6nx7oyHYFXKBCMJOOa3dXOxhyDYv2xQnHV8Xaxo0QCX5vMUK_9nCUTZrqQ8MXdBTig2eK2UxIppa-PHc-GcaKLmJunBAEq68CGBJCPvCJaxgiqtHUeQFCKJQrcLG3qfNjur82KgN7yHo3CdrXZiB9ZSR0Izs4VqK7zV2AFtd90ykplvHZAtxqeq96DguL4p3OXFdaHGuouwjI-3kSYGi-IP6PWb4mDW-5Kw51dYH8h31TG5eg6OLW_mvcv-qRr5r7MgVPX_SwiG21qnCNbeX7XaZjA0ZA36mkojA_XRlIG2xrx6VeNSqmRSgjMeSJd0oOeHil3Zg7Ywzg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111332136198730356498\">Gede Yudha</a>"] },
            { photoReference: "AWCwydho6YWOzxORGF3P-_Q8Qku5sfWFjyEHFS9G6bYh_tB0F1pqrYJdhtJyKv2WAUHZMERp5aiulm38ysuLDBs8HHYefZwYLgQOef79MFD6djgQcZ6atm_vaB4IdHNIBhIUnycNS3v1yhx9COpKFVdKhZ1gVWTZ6Z6Nir5NWnBJqxr75fXJsRy2TiA9sYTjGaF1D8yYMjsmhf1W39vw2hYe5HnYoBzkjuY4PMa1-lFjTQgqltsoMzeDG3UCAFFgQaJAyqkfSC6EXbXLi9qETMDYIL9RKNCFOM-SMsFuln_ta-vCjRaE53WVFxxGpDtsIgJGbH22p6u_6kc9EUmerJrc0Vgh7QB1qszWOTXZ7fKR9EdzavlpWTusCZHjCsA5W67VVgOTDmJ2T9McBUPsN05bXIdfFGyMLOl72ul2D-EY6SzpdxOK", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100167326959351135992\">Shieby Arantina Malo Umbu</a>"] },
            { photoReference: "AWCwydiLjHnYsv80HSZfHkKjJmMhtN3AysmO91NHeX3nuJaZhTAvH4qFIi10XaCGJ9jwpAtayZdytQTIqvnOVI6eN3hJkiRAMxdVXdmrTEDB24X3BUrZrtHkHlDXf34ym4Y3wJcYgERmBNms349YWP5o6TddvM_J8yCk2uPqoF7h0ephmZO7udTHy80-BlRLQLusuVKGAd3kCZ7FeLhfo4yJzqWv58oMpmuNQzvH0_4xKu7R5w-oInHeBiFYH9uY9fCBmJ4tmW8VWNG0gAAiBotRTulWICncwOvdCjlA5sYydschkRXmL5ZDK-hsDtuWyBo8MOwl9c6z85P1QkxXbw-LvznSQnO8drSaGZJnFN8MVJCxoTFio6t4Pm3AzebO4zMHZE3eJiuLg1hf_xIzXgoZ5yGI4bE85fQHfTYApfFlboOsYw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104706300880068144225\">Thomas Djauw</a>"] },
            { photoReference: "AWCwydif-gDtuDx_z9eT6nLMdUX3HC5-eF9KKuCO_JzwGa-C5I1SbPjFa0M_172wyxOXThBWFnF8MW4Bs48TSVkpAmr77UN9a1tswImoOPx0Y3pDRdu-DZ_-fJDEHruHFohgrRszIr2xsFQN9Io8ZOmVypP0t0fi5LoCvQknpQdtPGxl3k9AahdHkEPJvtRVWFO1iteHLBykGgkNv2cBEO917TwT8yzBvscS1iDnW6cMLzP0jP9UrvY4yaTgxuMaxmk4r1tettF2h7hk-Uv8qtp7wL09549eWj4EpVuEO4aIvC9a-IQnMXqOxSjIwAkPBkwfTeez4RyJaOYT7QTFDShYklRubyWPC5CozMO7Zy9wkY8dsoZmF5cDBkaKmhJWdYneyYNHKDZQVxdABjUgOFaQ3HpDJT1lzEJ3FDKm9Bd5BmXYu05Piom__vqyx-LvohmS", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100270554036328341130\">Henry Tri Putra</a>"] },
            { photoReference: "AWCwydi8XoFYoci5Nb_WwikK7HZo_yEdoNNI6lWVucUDyyV91slEYkOqnunILY7PaRPJtRjIp9X9MmU9L0L3xWjbMmEMfGWr7lpExs1o0rxXV7l-T7xgkohfgUBducMXSY5w8xbIznaIuZEW2-QY_TJPHg7AqxGZnPqYY5z_lWjAd0nvPX7_k57QlPJFlS6OALD_gCwz4mv399ohlntsIieKZApQXpNzo9KyIjwdL6gZHxMOXTHxgBUghmfYNAMw10vxLgeu0hzRofHgKvbdsWsat76zbQg42z-HaNa7Bpg-9u-5yLPPPwD54uHRVQBCwzsaaRNq1LbBjO7jzeI1kQDX9KyODg-VEWRclp-6o6nb72rDd-CbjzOFEI0CN6J0r_XMNATDNUawAmM1l6NUWiYPgYS_05_sIEyzTXluqasNxKs", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118337077406018629455\">Leo L</a>"] }
        ],
        summary: "식초에 절인 돼지고기 덮밥이 인기 있는 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["향신료의 조화로운 맛", "입맛을 돋우는 돼지고기 덮밥"],
        tips: ["식초에 절인 돼지고기 덮밥을 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "돼지고기 덮밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17010958220238194922", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Fu+King+Resto+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "두아 라야 레스토랑": {
        photos: [],
        placeId: "ChIJTzL-rEZ1hzIRx4fUG9INvw4",
        placePhotos: [
            { photoReference: "AWCwydgXNTTDucov369hSVzEhI2gTntTwXzsz2_yc-ACpWwFhobAQbVwrgDzYHjQ63UlvMCgopqzi7NDWlDyUDf_9R3f_zQg1YQv9-X_aSfWM8CT_KSxbSV3UsvXeuanDPUd9QVtOptRwVE1tm4qWjGQ87kEAA-daAASzR-OanXtPfzsXLhYvIWwxVjxMixYD1xsUN67txfDS0fABJM1jQTSPR4wkTmRytD6H9aUtL4AuQiATcgmwmhUmbE2ZCu-_qgYAAfTw-xLwaD4p-2Zcq3TzyfHxQBLW8c1eJR8cULYNXlCzmjFIh5K64dEDawpztg4qaHXQex-vwA3wN2fC-6LZlh-CXzy4IoWKb4aEKUsZzDYfKnrkCpVF1ddqsdXSV15HeBRxlZ4C4yo01FfuoYyUO5UpmJdfeuu3SpodmqTB5ag9O3a", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105551899045583128964\">Chimogmog</a>"] },
            { photoReference: "AWCwydh0I6syG1KaNBP7bMV8p_8cRgUSeXtdbude52V5cD7sv8K_DWPJAiSqpIjjYPEVgbLywQsX3zSsk-Ocaz_hHQtigXa85GgLmEf0ENBgJAfOoZylGJxlS-m6AOx77NVz2Vo-V9dwknkXiydJzpgciqjIyisZ7VGeum7dnxF8VncQ-6nYS1u66cNqs0HKEhCxuuNnFBzmq_na9jf_bzffqCpp7OSeRmNFuI0a8o7I9mRJegVH5_fsxgEQj8bTp7YZJdwPAwjYaq5C59Dm9uag9dD4sP4crv_m1sNcvFNFipuoir4mf3BkyK2N_6_h2mVC_I3kMVi5Xx_Eoqy-Cbi5wX0jr-H00Wi8CXMs-iBDIMX4u2m0w9Tjh9f3sG7bk0F1otWB-M5O1gIhZ7ULNE_tsSADXjz9tdBlw1V92IuZO9obXw", width: 2604, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107328463514198550284\">Septya Kaunang</a>"] },
            { photoReference: "AWCwydgSZXOWrcB2kBghSnGgYxRuWQmSuT6bYyPOqH_w1NKSJPYtS6JnFWKohCc57lyLnATr-Bojo5aqZi762eFEH2tCwDqrNpTp-DRXcTcy7QAlsVorpy9u0F2Z9x7cIjcSRLVy7ZfQwRvVY0Ana7mqQfTgKvOZ0Tn8GOeMcTInfNqN1Y0pFZqwCOlAhClULVPwYV46jCZhsFYC8F1fqSZJX8hU-EhnlxLOgqXG_SZiaq9nfO9hLkfeTwTbhp1CQgY9Sn93EQA7NHjhtPjhIEh9wsuiPo8CoJKUEnVf8jT4xVOMtVVUdE_RNRIR8Igdw1O8DHRHYcXr6MUD19mEyMitvvlEUndT4j6Beuhohg5YGq96_-ExfjtTd3BnrT55hUOB-mO3Xi3-imCAYZPAmJ6bom9HnyqsJ3j2B2T9PlkgJObe9NSF", width: 1620, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115079969019449488238\">Theola Indri</a>"] },
            { photoReference: "AWCwydjWrOAoo3fngIdRyAbNrfQw02tSegKKfpnY0rDMMb3vCnVUJbsa7opeQNbSh7QSzs0--UnCb46dxv_9hfiA9cqVUvlBaVGFiKMi_QhVeVZffl9plf-6OOMaNp7O4fFX8FEK8Ny14bOqyXa3m_D_4UxiSB-JrRl-bHg2EIfEO_AEkMoCw5edOyyMbT0LnioZx05pQ6vE6XYnYgkfEWDHaawsztlkg4oQJZ3DSs3YG8VoK-hK-gDZMCJEj2xQ95dEbDKOvAA5bLiKq86VlxzDHegx0DmzuH2o5iinEZ8XUGTBf60BbYScUJu-OSv48yvX700JywS2hIDT1Dr9jR_1NolK7u5IG62vSqhjmg7LUrpJGLhsMp39gJsleK-nrYv31ujMLcZ2PlTZ10VnyN7desybd8c3NK0ql98Djib3YrRmxZUh", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104058450766655244933\">Nurhasan N</a>"] },
            { photoReference: "AWCwydhYmn-xuWhBhPgrRL33RiCZQNOIBtN6D43dUW1lsa-TMou6vh6oUesK_I9zf9n1rLjS2i11-hIFSKti8TaqTbxoMaIVs7Y_8dY-CyLlAnwntPFvo16aY9VKrWk76BNK1rSmAofzBpZry6QoQZ8UTAPvxOdQQzYxuKXmgtkTePi7xoSO_zwPH4ZHNFfM2zg9h_90rklkbUwMbBg0OPqkuitLsbCFYx4mFk8JdtuDI2GJBqpyjoOCjDWWdrc3dN4kOTvsPEQpfCOrIyPntlMy6KrW2dddSjSsA6eUOCc0OtMX6_z_zdmePso72YNhxaKY6zMnxBqgY2lPSpD2U5E-MmyK7uC8JNhKVZkdjp_HPXuioUUHR0YXNRrGbEPd19tGwHfkuphwa2dxhXWiNROj9NXp8tkGmXjunPUQwa8hXVNp04E", width: 2604, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107328463514198550284\">Septya Kaunang</a>"] }
        ],
        summary: "가성비 좋은 맛과 친절한 서비스가 특징인 곳입니다.",
        updatedAt: "2026-08-13",
        highlights: ["가성비 좋은 음식", "친절한 서비스"],
        tips: ["엘렌 아주머니의 빠른 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1062583233143932871", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Dua+Raya+Restaurant+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "북위일도 BBQ 차이니즈 레스토랑": {
        photos: [],
        placeId: "ChIJjTjtuIx1hzIRaDjaoAJjOgE",
        placePhotos: [
            { photoReference: "AWCwydjfw_iL6UYbYAGv8xKhEePxta4weArhq11zASkncgNxGfUTpzNrcf0mTAkPBoCEkMYkCnD1bNawuqPwRIyAtgVlNvHE11UkmmMGHtZjme9VbirP_CjBeKzyuKGX400z21wObWTMixfYC2fYRal0wCRrpk_pTxyn1QHUqVBugUN8zGokaoFQWHdZ84aFmngCJkvmncQTVNtmgao6cJd9R5ry1Nk-znhXtZxgSYDYc2VqgLLhe1P-b7U2NPbzXkVnmqC2sP57VT9V--xETM_D_tmyNOYgQr_D8COGQBrLJjoddMLQyBJlnbgQj66aI7vlG49nyO08dheFAYCJ4ro4zPArbOLKBBuPRwPFj4rXYqfqjJjdGK5Uc2ISVGwsIqVwg5ZZcwPqGRTlONihrBm8sdQ8M5oKw-jPOGonjODaHI1EGsU", width: 2291, height: 1747, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101763468743989183928\">Chinese Food Nasi Babi Kecap</a>"] },
            { photoReference: "AWCwydhYsxLg4NzV31EmcqeZtBAtHigzVlJXeVErFXsfE_ccRD7YnNz9lw5nuVlkFmmkFfBeEmYlL-V0oPQ46LG25L0noP5dpbpLzSPuLxXoSEasd-HTV7YBrvpZmlUwVxw8BhpP8OAy-4Y4QW5ozNS_5W8KYjpD046hgWK4pJS4EAMbX8nAGz1rpArKv0arazEek9Gh5iaOvdncxM_9kZGi9bP28IUzF0tQ4ZaFzcV4dmKQRgv58F-fAufIhQs6VgLFKbRGxjxoDuCiYgio4a90Okj6snUokD50XM9ZDQVJ4fGLDXmMKYdvEFQXJ4r8Ci7mU3zIj4ZurpwvYaiA4PHYjzK_w7hnF88tpbkVOeQuIP3JiJ7Eo2NEHslTVA1W4mS9nRGg1Jw_3MJa4FJT0r2w2bL2EqvnFvOQFjiyagVUVNluWcjJ", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118267970013565190827\">Lee Maggie</a>"] },
            { photoReference: "AWCwydgKHfF6eAhsoAMw7NrmeI4OGqlh8MT-ZPkLvDIY-JNxAFNaCkEv4lXP1MyYE6_EYQrcH8GK4LZHtr1KB5k2gZ1zsfQccidsCOWvJ2YwHECmdPjPhPe5RFOgkJvncDKlxksAgUdUSg3Wl8FqfgNtSjryeKSegpfAnD33uBBqAD1SA-XaoiYCqNG6Ca4TOecIA8SQ3yqf877PIoBII4260MHamWJTOgqXzTG2ClaTLdnVCmhOqOd_rXn0ZSjfFMCOzBEjZIDb1dp_1Uso84k20hOKwfGbwMbTQ37I9_-eonefik6DTLRgB_rV0ure3RrfDxENzOoQWrIQD2jziWcu9EkllAsYr1A6XYhtqtLxkZO5rfkPEAWsCt68jJWG4vOHF4QOw2l3EgCbtxpBSVVMrkl8ovNZRLciJcsAXDe0d_Y", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102854079145024673384\">Hz Liu</a>"] },
            { photoReference: "AWCwydipbsdsEqmE_8raYX4hkKYxlTIwj1oiVFv8MgeuGZ_hBxVmh_r3AlGodoSzSNZszakKrtgNlm27ZLW-30KlmwU_bgY91WEgdTvee_1tGRgj6q5k3vJ5qN3XBL_oX_-n8JPwrmlfRYevRxJTGh6Nuee4AD-u4F6EqL7m22DrLej2LK9iXfOz-GxodkfPh5PDGG5uBR7jqOcu15EUKmJbugl8M11MTgeODhNs-lYZhuAbxYCM1AW9AvWwQ13ZS39nhnoV_jCaZDVjo2ZGVx-IRz9U22fCKrtie2RHHr1o9Stj0KEW5kLlaczDP0B_-kxN9t6ODsVXWytS0pkSofgrqy__PsdrlvmPg-K2pMIh-OlqPjkU4IBe8hU7Vrje4C0CJS0yRX9pzoXt0dRzHgG1F7LoMKyBNmnIxF-GO10y_0isjA", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118267970013565190827\">Lee Maggie</a>"] },
            { photoReference: "AWCwydhWqMyd2CsO7dgJJN-LC0Da5Ibh9Cu0ckpubjFhnE3JSXm5BKu9ljg7IK5FGnLYJl5uqOYWU1WSFKJ9xqIezOrE4C7AknoDYzcT0EOvnAhhFitHzdmeDnw3igZ_v0ZPjby_tTBvtQB-evlcjBf31dtq50ixChxyr6qvTeWiS_Omhy8XPrMvq0FXWh0o72FfI_FQH8Bwhcegw7MTTbnri8nt978gUOYPa7DSHbizD0JGgPdv3tobGOQIVBVyOyEJryTAUsZzjJro0H1AK_m6Y80jHx3UpJhDttD7obWJeOquYA2DFBA4sQltKG5yeO3lBmSARmWZFSDUwnhGNte_H8OOt3vdE2J2sS-Yv5NNBAYrE-jjppBS71URxAt0sRxkmWkbn-fd3diaFAbCMtF9rufPZXA9GWB28aEwN-s6329EOw", width: 3580, height: 2370, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101763468743989183928\">Chinese Food Nasi Babi Kecap</a>"] }
        ],
        summary: "매우 높은 평점을 보유한 고품질 퓨전 요리 전문점",
        updatedAt: "2026-08-13",
        highlights: ["4.9점의 높은 평점", "우수한 음식 품질"],
        tips: ["방문 전 영업시간 확인 권장"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=88492005626886248", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E5%8C%97%E7%BA%AC%E4%B8%80%E5%BA%A6BBQ+Chinesee+Restaurant+BBQ+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "RM 이칸 바카르 사리 라우트": {
        photos: [],
        placeId: "ChIJuUauOOafhzIRRiMyqjOso14",
        placePhotos: [
            { photoReference: "AWCwydj3938L9SfEIf6mmrnxi0sVH1iUWiZ5470GkQl2ErkqYTnG8yEcqD9QrHoOM4h6N9B1qr2Kf1ENty27TLK7pocoq-VJBXDdoRYYUt0tHo-E7F5BOgNQxo8kKXJZg3taXanymG8JNC75FlqNbU2EAVHRsyMKaWIhPrbGopRDV8IchkAEczlJnFQlaiwP_xuhPKc_hw8_h2W7e4X-onBSxitkq1XLVlZDLfjpjmYi1IErcEpq9LpuKcfSHujsFDIhj7zpxKUsI2YX1TfFNDf2V61kk79AMWAbs7TULe8OQnYjRa0HLNPwQh0kfFvzSSQwWn8rjSSqVpErYj_LEOU1j1sMtjZRI5YF8WYpky7JLmlrK2yr2hHLD2712NxtB6fOhhk6YyGf5vP0yigr-FmbdSAph0LYxJfSw9G4sEGAl_Cl2w", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113792803790498529570\">Edwien</a>"] },
            { photoReference: "AWCwydj1u5s9RrfZ6irn1pjqIdAWdVRzavsgE74X1kc-FX3Y8Iz5l7YanC0bnYuxs9DDweW8MBOC3EztWIHPPRmiID5GG0qrovobJMkXqvHR-bvZUQMMWCXZl_IfHso37_0iJNPnxOljuK2t0X9f-EPdLdCPx8eHktlxrnjPaX_Ih2W8IKlBBQyGa7vLcoqJ8xmabwHdYiNGNiJB1ele_Os4be6HyqfzOmE5XUY9O3E3xozeWO7LlEn5z4nxNSB4aX1VF5bfQVgdKMv5SpAdmr2zHtmHeznZ5nHJsscoJOgLfDsxjYt-nN-zVR5VjZmTbyADZDNCsT36-a08LDUqF_DbTt5Edoe3Xd6UEF1NKT8U5z4WQyh-kWId3vCXn4CRSfsnm31tIGQbdZIXdQz5VwEyrIDuBBEDcc603lLZbnvQi_4--lnX", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100081822704273152881\">Mama KK</a>"] },
            { photoReference: "AWCwydjry2iaBopikMSfDjT5K5MwTI4qZgcKkUEKeAp1zBDR2gk0Qnuf9LjeL-AJo5KaDM2QOEK0iyeMkUBU88tmi2ziXLJcGVOAvcXOrNM7Z2At7CYH9ltTfB_XC3dkgFoLHcOZ7gZ-YskDU-wMgJCDpLdq7F7q7tdUsX6WJxYTC1OTbYUKgp8sj2h866WqgVaFREVcAwdGUM-CQfUvSCbaNosWFuvfSK7YgkKC9LZ36o4aj1GwTSbumT7O1fvf6SQ5usozMw2_46J1yQPZfJeMC8gqzL4kZZQCDIDeWhqhR79RSbZDsP6YlccutJcc0U-scUNPP_UAItzMU-E_VOEJ_r0vz9bQ-_qGmfbMkbz_P3nsYVDkA66IIJ9Hf2ILhD3Id7UZCMJo4VKrgfg7dFnraDhqXDrYqupAPauQjx17zsYI0uuUC4N58J0hrDZ3Ks8l", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107381697941312290467\">Reza Worotitjan</a>"] },
            { photoReference: "AWCwydgcf60ykgifI98jdyvSoUAb3jh_WWv4kRAXyABZ7eVuev93kmKL63JssqTrSNLQIjeNjXD_wW3o40wqiRu3KfvpA0bYvNC1AtKS5Gu8oRSk4snJ5DuBSu0TMriGCKpeQJAckfbQwuDgyKc8AeMzhjKRYj8aX-OSQyD7yfjEeyGcaL-NwwxTadO8k2GOKZwORJWeVxWdTGJyroxg3r01tTcgXsTdiCmlJm0qH7S9QGSowotSSGCb2qmcx1a6b8mVn0rFfI8SLFb8SuXFut6Tt-3fDS6HlMpO3XwU3Hq5HiiPaRzq4a2H5oRvGa5SZWX0I_F9Yq6FURXPpyp8M6LWaBGXbmxlAlonoj60oINOw7lSrafZXzZZj7RZreX8WDdqkZgbBUw11CYdWbF95CJPmhd4dNkNC-R7LZVUTIIgGVN4K5M6CD3X-P-rUJMxInJ3", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112997370791595781106\">B3ARNERD</a>"] },
            { photoReference: "AWCwydh2ogw9O3QChx8xbP_-COvn0-COO7ZtCzp1oHNV3wBJ6p-QoFRmqZYir0jKjd2-CiFfJwIiZ3Y84Zv9p0nZMeDUR8rL_ngPcRc2lnh7smKM1sonGVCdAAgCgIdfBte9P7oF6RG9y0BCL-WVqc-0YZnL2-Kzyc6TlyuYVWwnjuR0kqDh-TLqwYz8LIXtIUMSfjE7bx-iQ0mN80-Gcq_EyvJTCY7VcZXFk-8QK3ppkv4wPOyqCL7yl59pik-u_dWVOj2eAe4Nq5TTX0S3NnXzfC5oT_OVFfX29hS47_sm7a7YfelRDt6TAF2hAy6N8w1fmTWl9l6lcjMLvY_FLaalW5wg5aZl97S8hVxlZP3xFfV8OO0Dg3KrTe2N69H-nrjXHlj8ZuHgBwt3gBOjhumrznnvsTQoX2Xlv43d6IFotIdY6Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113828868633663836290\">Gabriella PS</a>"] }
        ],
        summary: "Manado의 인기 해산물 맛집",
        updatedAt: "2026-08-13",
        highlights: ["Manado 지역 인기 식당", "다양한 해산물 요리"],
        tips: ["오전 10시부터 오후 11시 30분까지 운영"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:30; 화요일: 오전 10:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6819483598667785030", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=RM+Ikan+Bakar+Sari+Laut+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이스타나 라우트 마나도": {
        photos: [],
        placeId: "ChIJW0ODrmGfhzIR5orn9DhzlMY",
        placePhotos: [
            { photoReference: "AWCwydjdUtNklizUbXJ4tIKnSROmCpvNJIfIz2bn-119wOZbbF197KVedF3b9H_OxXiUxDmwDhAfI3Gwxr1WGdZgnK5k59VYclN1fXKsqPKzHA2N6xzesMiELxTO7vMeZdZ8bynTCOnhX2bDgoR3cllF_tay_oLXFONTqiwwMTzG8fXPEAJJwgHwR-GZEe6hbezVSHidb-6Eq9QTqXghscogdmYKkkOOcj0sjifMTmJj4FgJC_TjRQxYKiYJDd_HP875a0TMhVrcXrFUK60krvwlu6S1KnJYuIdJlxIVZPYBdxIrbQciWQKn9YHwWPddLY8DHPW63xqpsJ87mz9sSO8iEHNBDmvgSB2O7lLX2h34GKhjyluFvxnYGUgrG6k04tPIG6z1DyX_evZuIIdYtnx4AQxCEt0_cZrsBU9O15Q8sxEk2PM", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102107138437279141483\">Istana Laut Manado</a>"] },
            { photoReference: "AWCwydiO3YJRBHbzGRnJGkK3LW_hx01e3fHHlNHImoGcBqSg-DO1mVu5ImDHIUtQRsSWB_VTdzmR01aCgSM7vq6334U4C1K51Ni_b8d2BJcjgndS6YxMsQ-nEQ79hglk4cQapZV92L6sC0cMC_Eo9bRFeKudN3fq5Hufntdm0ryxgIlP78_x7oVL_CPeKv1achhpcSU_W0S5DCHYD88gsWBqVM5lmpm7ecEtnQ9K8Yyy3WTrtE6nNI1npFP5VJKEEKXIhvXWwEYblb5TuCAeYSmrjZtn32u7Iu4Bzn0VycHMxDwkGK81aMT9SKIlQUnsNkjrxnlDMrU46csetZduRR5Qq5lTrMdTfPxzohwWGSUkqPcTUwB7Lp6SeulGqxQzhMHp_Ly7-H0PfXr8wkLkcaX4eIy5tdhQQ7PeqVXa1VUG2FyZoRfx", width: 1000, height: 1541, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102107138437279141483\">Istana Laut Manado</a>"] },
            { photoReference: "AWCwydgxDitimk5uDWfcfxTaN2a07r0oonhyYUQ25EiZwdOMm6_b_TTI-Ng07aWXxzQ5UgbaTMdlDfyQ1HWaMUbuJciq7xhvtjf6MVokdtu_v5K4o6lYOaSKdwb2vtC9SI_Djl_5jLhuUmBiOoq820QsKuetBsv7_KZ6CEnYgaCa9SJ4pthCDX3FCF9gFVfxaXw2-NCWTKQ9Rr1WRYCakcwCwzKQ3SEioCaWfuOPEZVBsWq2ROBF4sb7UDKoU7nSvoG7SXUqqYKAJ5S_xyllR6CsLvQjtyQS4j7NijKMCKaf6rVSmck08kna-fAotmU2BMVTaTZPaWnuyQniksSQ0L9vpgJzzsbderCzHSxxS7yhnc2iI605SzVwkJca_BSp_UvWqYZ2aU7dkXwiQ_FOeJwAaEL2hPsbkPlxvd8V-bMgKklfml1b8ii79hEjxbx4iI0F", width: 960, height: 1093, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydgz9aIBJKSp5qCZLQGpGNT8F1AmQlCaIGHB-tPKNECFKYObI-t1l-gkru6f-L4_MxuWTuNegpn-vZun1uuyj3cQPlcgrLbfNozt4A4iGCqrmybjl24SMtnoRUTMtETfUbtR0sFo_XGetsZvI6QGGh40UJwyPCETkpTLjNSD7S0DPSldhyy5HRKcFZuNPUPN5JdatsJcmxQyQrStAPYgerwVC2uQ7-n2lBEW-_ZTTHby80OT5vQsH1sVGAxuK0TWdteCfKT3F4092rML5ZmMyimLVR6BJ-4UaleLGdrfNpGievQeYp8r48CYr1H6uiYWDrqC__OMLOvWtpiZKrhiMZgUIt26i0zc2Fwh3JawuZ9YfE6WqJP2xYcDsSqAO02c17jtu4IpzJ_VLRJIUior6BtXrFC_3un6D1AGzX-INMvJeSgsIqgQ53qrjWRQnp1P", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100045155115090899105\">dwi puspita</a>"] },
            { photoReference: "AWCwydjo7LDr93F4CKdF58MDBKL70NilTtWfjIBwT2Kz67X749MVb4c9o9cftKUaZX0e3M1ASPrvJfKh76ceJ2kwo-7vujJv2SEe7infKntkWllEe4ICd8j5hwk_qlV7vHDQRrMHKaIXjMn5jGPrfTiyAMKY3PjbErWp8zVtC-y43NHapEEfCMNad1fRgJ1SFyWGlYEea2IHgPRCG07HgoYmFW0XTqu9hwSZw9ym1V76KF6_64pBHFA-5kZTCI7UW0F6iV8onw4ReJMuxbk6zcl5YDBe2FmupBtI_IC2IZEmEd6Iudnk271UQgOMudQcHzMJ3Ze1S2FXw-Amfaxfnf-mLmPzyhBpJgu3lDVeVNpIoPQjGeSBimKFBa60sYNicWp6-53-SkSjla3CXkA_owJdeIRACNVx3Ynextet1ciz-WZiD_zF", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102107138437279141483\">Istana Laut Manado</a>"] }
        ],
        summary: "맛있는 해산물 요리와 함께 여유로운 분위기를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 음식", "좋은 서비스", "쾌적한 분위기"],
        tips: ["나무 사이로 보이는 경치를 즐기며 식사하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14309188604527086310", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Istana+Laut+Manado+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "참치 하우스 메가 마스": {
        photos: [],
        placeId: "ChIJ3yBQ4xB1hzIRQX5zHIp9p9I",
        placePhotos: [
            { photoReference: "AWCwydjmhFNIRcW4xuKTXNHaA2ohZ5DFQxhiTlr7ISc7id0UwLUCaWYqKWuVeAWqCcphhD70ITAb2omsKGDPDYJtGCP2hffdEvInjQujQxyubGqERHmTYg61U4uVZIEhjJlyleTo5BNTxwhRGK1NW6ZGnYIE7gMpVpwXLyZO6dUfYhAjYfYMJeGc51rfwi-HbCpARUUxLNwfjLCPYdIkMwuX9kVsuT4icaPfKVuR2ayWo9rUsuyhqKck4LYwYnOGG-ICRpK7MDvDD5ZeboF--PWPMnohbj5aDiJ78N2o1w-yet36rZz2bXv7XxvimffwfYqppIUdKDlCShd97LOhPGV7ugzJN5OofAsykGFWl2K_TBJcllG73F3lV4RCpY9Sa8R2zExdSfTnPQazGiZwUXXocLmV1zRPaeYSzxi2Ua2bexHJEdYUSZrZxMku7V8jMaAI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100396681330229520849\">Vivi Wahyuningtias</a>"] },
            { photoReference: "AWCwydgBhLpnWg4O6TWxOdU1axpptTV062134ukAV1WcxWAH_4OvDkaBQ2Ay3D2ZLTjrco01QRXPkbxRaSck3AnyYBmajHWC2474tVnxO_gM5sx11gZPzEDvBbYNX5WYQUeAje3lCOuSyN2ID30527xbqoYxKgzSHbQaVBub_6epJHaDFz4GdAW52jBik8Rp5E1JLwbXD6-kJiBGH8BRAF_wbZivk-slnqh1hV0w5DTNdeM4y0UeenQLXrQG-TbBz4vYX4aymHbFn9KjeUPQ3bx33shwanKJ-ZI6PkLXiqiLZI21_WxaLhzDPLMJdn4tAUMx3Xm4fJwYCpvieEL12virkEBF-7sx7B_PMbPO4wHj8QSjbPnpPgiw5n64eSBcdn4QiSswSuu9NAxRPTMJ70X_Tzv6pdI8iAm1hl7WdSXoh-6KzoCx", width: 1280, height: 614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115856125249529297676\">That Girl</a>"] },
            { photoReference: "AWCwydhWaHVxVNi6EL7wYgXK4NTsTNrLRTVx2T86_Sgmji0qDa6qay2qdTmcR_K91yWvUmWsy1hMk86YyBoyPmwdMSwLdGFOeFQ5DlhgAnaCus3s5mGMBu2b5kD-PFUr8gYGNAqOxty4bIx6F8nvEL6-LP0407UcVX37tHoOHAV2tmyXKOtO3Q29otNiNG6_8p9Mutuy8XjlFqTdbaxdg_eXsAOeWBiHWPCsaJFPCZXkBNm6Ib2DM9SHFan_uVoMgPLtZtfeJYJYFjUigdmDiWy_ziPEzHUwSKaW-cUPAuJeEitYUjWhRYl6_neHjMtoGNBlWcCT7dayB2yga_2_xk2Lt86PYh8A_kFamlFvB4UOtIKl-kWr1QHZoQotsLMG3CV2fsFn6AdnCS0fk4XBMf-aHCG4KX_IBFELHGwvlvl-lLyres4ZzXiSisHsxCdWIw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107267475144642135079\">Nur Ifansyah</a>"] },
            { photoReference: "AWCwydh7fNkD120BtO8LafuU1xflLbYSZwB2QcUwMAcZzKlu9pnD1pgm8tDEuukaSKwTbS8bbXt3hZEI6_gwV2xAWhO4zXOJIW81fen8sBuBfFEtgPJT4Jwpycx15dkQPcm4QMz_Nw5DThxCRAYVf4iJcFgCcTUQiAR_OvwCxzjswkSQCLI3KlVWddB_a5I20cm3jpoInPPlnyy3tBA5QXFiz3CMkN1Vtnjg_NkzmNz23Ye4sAbeDLIV12dAAZpCL5hMa4mnExafrQDmk8JVHEXK1MHQYyR1ZiukpzP0-2W7OiRHAoZs3iy0Idx6Luv_wBI69xhkCvO-ynHEZUsnDIyThjZqZTNBwzokWyndJ6VXMzgVRVROgfCgXXPyqhKunl_KcQNtxPmA_Php4HrSMHBpVl-DZaa5kOM75W5_udYOttBov80", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118409965300103308387\">tuna house Megamas</a>"] },
            { photoReference: "AWCwydijZiOUmdm_-FyIUeYyzlLPskd-PzmddNba73KXwTtLTRnSZhcJ5jpjVnvVJkc-Cis9sWKk_GiL0w_lSrg20nREa7YV8M-2mGKi8VbhCNc0Sj1x4EIvp8eVo7e-TddOGK-69pwxNc67YHGGjv9S0xnvltbJIiN-udjCjBQtz5Ph32GEzGt0mU8sZId8kMtF-mrpaC20V0Tro1vRN-1EHcq3ObP5deqdLUAYtm8KQXByGgMQXBAS21BRl6HrdkZeG07-Q1VvhwvZL0EmBE1I7IBI3Xr4qCh5eFXr0rwxb_b-01-LTHcNFutJlZPlI_qOMtavTcekRQifHcig_UTnjxiib2IAmZn3dFEQvl2GvukA5M0eJLiTsAdgac8RQ0O_XU8Lw9zQc9bHTV3b4E1_1iieoOVldm_ME-2HQjpgNrhH7dpun7vBogL4tCKNUsSf", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117835838295203231314\">Joerg Bergner</a>"] }
        ],
        summary: "현지인들이 찾는 맛있는 해산물 요리를 제공하는 곳입니다.",
        updatedAt: "2026-08-13",
        highlights: ["참치탕의 깊은 맛", "신선한 해산물 요리"],
        tips: ["똠얌 스타일을 좋아한다면 참치탕을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15179239101211835969", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Tuna+House+Mega+Mas+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "루마한 마칸 테피 판타이": {
        photos: [],
        placeId: "ChIJRQPxr8mfhzIROs5o5FpPdbw",
        placePhotos: [
            { photoReference: "AWCwydifFkkkm_WhdKSvt3OGvdVughPy6VdHI3agoBWKA6TrP2OG_vR3fbYXsiod-Y7DRFILiy11gNd8JzuoGRRIm_4MByx4uo2GYYXPZSwt2CPM_D4HW_cAJ6vLYBoMzJcy0UvQYJ0laEib9uWomdaBiV5B-F_gBH4ZmpMHAlNP2xRURIl4trBYgigpdyPRtgTWSZg-flg-hoUYkdB-KuZ58MdEF__L9s3UNYm2MZS263AqukAdVEkWHhcKBYjiwfDSfPx3uB6LzK5FudxZOjQeVm_irOO1DQfcv6t80ci68ekuf6R64oSin7disenKXzNdFKV_w_V9phUp7iY0NAKUg-VN3MEhPD5OwvW2034wisN6uFST5aab_0CBQmWJvgU-KHSpky4aFINyxK52U7pxDhI3CunxKz8JgcllUWe7RejTplE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102564218782590748246\">Rumah Makan Tepi Pantai</a>"] },
            { photoReference: "AWCwydj0HHFygTmFaJ-5feM5h7UKBlvrg0t0tGhB_FjwOdy6jz4-UsZ2bUVY6xQmAzvAzbJcVt--exC1aH90VZodVMQjl3A_dRnG-a864tAJ_gxuMs5mzIYFpT5dLvBdqIpvrQ3Y_79y9WTK6Zqwe6HwtXuKoWT9A8fHPpWlAn2jqRSKZ8pap7V1I86zgi4j4vxgGsaA6naUcMky-n9qqcpxff3NyTfCLCbKTjSuC97gY3KsbZN88Vqob1O-P5i36gmKdR2U4FbtzFskOpS7Klfv9aBHUHX50tVNCIC1R6iNh7oAKXKOjHlGxbmgNrOuCqc5KT5nD0EsTwx7RO7X9sD5-YuxtizySDx8jfFRGCJbgDS1nw6Gf4cKxTioDqr3Zl6N0FjE9No91wP9Y0TsrV-YOkhBGJ0PsQiDlzI-ux4SCVPtGau9", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115366357658933054220\">Adi Prabowo</a>"] },
            { photoReference: "AWCwydgMCeKg3t59-hP-i_l6xvAiPxxu0MY5UDeH2FR327rMGKgWi8TswQmP51EvbolcLjhVZz4iGDN3EPEJiUfHT5VLd6_yRf8OSJb1hEOCjVSXJHQNaVNOg5IMGF87zfzG-Wbl19nIQBBSR4hecZb62Ae5JSwrJbc9KzRyy7qu5H57sIuFiQoZcDs_mLVfXBS3sPUGJFQVYKHIf8zCIBZbsNmVkGW5IaJw2G4-cr7Mv1jMVpmIWoW5Ht4DZw3A72HPQymbOsMxBgA-eJptAPxgtKaqBelAg2IZW6_o5Ay5ePoidZcGQiBj2wukPfElmpTUB6GBiIBe9EE962e9YfdDldNPBrgX3EtBh1JH3ZaPfaEZlyprJpverQtAGSFpVqbl1YSLN6Z0VTJVvniFlNNt4q2WbJFyk2vnf3Y1dOzcFOztPhItW_B_1cFM_MqcJg", width: 960, height: 1023, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydiPt4BR-CloOiNxF4ElYU-ctpXkixQZBiHXT322X-g6sVHeej8WtfsOQPdZUy8Wz6g3JwN7pXUDP0BD5GKbBPFCfse-qJsPYugu2cluZfq0nY2Zhl_vdqA5lJrSZCdQ9NTuILQ0qj-lqHdhXiYGgevE4uqSk9wQO2-p7BA9RrcYpWxdz5FWU_cpeNEJOBIHSN5j7JX5HWAglRKElVPg1phfner0CxAORXb4bXaN80fZWdnp78RRL_7fYsxsG8bTu_vzVFKRs9S4Ud_krGdXMGL406DP_SjAiLv0-OEq7HZZmJPyn2-XKsPOK20dUapEpqRYwBe69PcsikevDgWQYH27YyecVaw-ivGJQU6rFhsWFtmgfLa8zirwqfrKBysA4D-h1SAuN4RKaD9hAcub1y6ptHcBLfEt6xMZkaVjp6Jir5UYldYsrg1bNcD7mM88", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115953451612645841581\">Tiar Mahameru</a>"] },
            { photoReference: "AWCwydg9Wr2Ugyl7FALLmE2KAaf1_SxP5pa5J8BP4O2TGaQ-YBqpC24X14p54etzFEcN34XeWU_c8eVee_d2dDLSv2gBWGzytic43U9_LKTQg6UAuSJGy6ViZUpuYQicYKZdujUf_w1YMdgyf-VkAgVJykSRIDULpt0E9IiTxo7eU6JLTxDMeoMXqchDFwuM79HWE9mTjy9bRcwdSqZSiAHnBPD3ufsyMfPDX12iBbS-RYvoQIYHem64JQ1ZqhAAZM_uNyj20OVRYOEgb82Ap-YC3-uM3CdvqpiA_i3KSyf7Kr0kAZoxVfarK8Hjlj2sc5-W6D234Av4w0id52P11OAM2Vve6JFMnEQqUapW0DTotJHZO0EPZtbn7QcZipU8dq10brT2x6h9U1Ao8edaPOsb-ljQpgsY54s80OvUDSyKTUhg_W-SGpA05XbEEFZWhQ", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115953451612645841581\">Tiar Mahameru</a>"] }
        ],
        summary: "깨끗하고 친절한 분위기에서 특별한 해산물 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 음식과 훌륭한 서비스", "편안하고 깨끗한 분위기"],
        tips: ["검은 오징어 요리를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13579847503203323450", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Rumah+Makan+Tepi+Pantai+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라자 오치 레스토랑": {
        photos: [],
        placeId: "ChIJ5x5vwkB1hzIR3-wVrm3Cbcs",
        placePhotos: [
            { photoReference: "AWCwydgxr-T_ymhSB5pQfq64Pwe3XZlhOwYBXWkMIsb6oO-XKUPD2A95LrJoIWpB6qhBX2mnh_I-3dvVHu21PPxxcMFzRv63bYKXwe4IMZguX6A-murWP0NWmJLnhfkEwjO60mocBi5dqOxgPaSVSbB8F1El7TodMxszOkZFGj0y6JqtCRc9MkNcgMfRR7Fv-mBPstk6ZQRFEcXwtCdDuQ0ZSVXANxkOwDtrhWJ5fu2DRX89Jxd2ddlLRJRPDBHhwK_7-q9Bhz7xFnvurFx1eqI8ctJThjeB6N1Oylvzy5ztYzuuMu_BtQpJixjoOLFjrdPABENcv5OECnbLh9L90hzs3-pwc51YbIkL5zVxF0bIWi-fwayQ-nyDB1jkWCaszYj8qOQlcB5-1anJrCEDfXis7jY47LSbZYwEziQf6XIYkosK_do", width: 4624, height: 2600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111558807312151652438\">Wisnu Wibowo</a>"] },
            { photoReference: "AWCwydhf3U2wgWYQtb-L2VGai4XctIeD4LrZZFk5-yI_NRVDkrLdCUn4EtwA1358PVrXNMsIaCTtstorH8QO2CnWgwwn8lMgvG2jm5BbSiOtrrjtfs7vbziQFiiE38B_12OdImqTudjPtavN4AtXiKLhexUwzJIyrRkGiDgzwxbyqDphRw9nqUclim_1iMbFZ4JL3SwkneaYgqosos6L0fb7QBFbYnMkGMkcVpR2q9rOpWefp9be3MGB8LNivVxn87MlKq_Apc0DzFnKboqmATDxVxedwHhVL5npbM65gvASa28X86kYQMMfW4srplsp2UWjcwmGGvIXlpkarCgI4ofaOo1vqjs-N8w8kaZ845v1WaJVPpz_uSmUk0GnmGVnQMMiqi4ST0mI5bkDuQKkylUiyJ-t0I6ZNJzxMGBicH586FhYmQQ", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116210930755510430327\">YOSHIKI</a>"] },
            { photoReference: "AWCwydje1AhO_FjIFWKbguGjGMPpl5LOHvSJjcrSlpJGaGHN0yysuxBFADPsSbXevG1RSJW0RYPMekRjaKW31re7MHwLPeP-XSY-mshxGK7CH5UV-ewecpaSRCckitsArvdXBggkf7eH176VjepJMMHkwGiif3ytgEgc7_p6E3AYzH5D4L2n_7LUhfaC_w2YjKK-R_a3cm0asz0pMzy8u2H8ihVteQq-CvncMuwoWu3J4hmMIn5jktvQMPqPqB5lXd8xiqUVnGekpLqccVWfP_GPasb3iRYfpjh5I_0bcerheb5mdsfIrzUp7iyEMjYRoGpIw1Xsl_1YZ1PeV8tt3x_T552wdXxfzBjq9kF6fYOfGmT1cQqK9r6FUb4-yk0sgKFrfAuLWea0QJnsKdoq1BwOaX3WCZZYSe4ThLM_V4pMSTLTcX2SnQheK0PZQSf6b_HH", width: 960, height: 1069, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342202187381198691\">Wwerner Surryawa</a>"] },
            { photoReference: "AWCwydi59IRiyTTRh3fVDIbxqHMflydIkpqx6pUmMrAAl42vMchW13yfu2u9xTFx2j1HWgtsVl4oRFB5zDzZqSW5iwC6tugLwQQyHuw0ekB0R0lRI0J1jPcEPuqgRTrA1Eczm04bk-r1hrnicR-TErGIMFFfgdTfi7SGMoOVlVegf890NnCdvkXlVyNXlO0HLSSvY8F8rUnWQBSvO1KnYQD2TTx5AlmH2q_RAQNWGxtG3eR6-UKHwQu1Lku_ZM0DK5VVjZRBDnyZ6zHZSma3AWZ_YakcMJBlARh04-9H_hPu-92RE3j4v0vZo2sDT3P_Eqjoh02LNvynK8NEIHmrqjyIUzeGYbPftSs12RG9US2DInMblSpqtYFgcFOWrI5RMEw6f6tKoMKt06vMYtNIvB5AXoJ80IZaxHd15pw2cIMrBbeCI39f2lDvbGdhEr-spy35", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114808811993618688116\">Dwi Sendi Priyono</a>"] },
            { photoReference: "AWCwydgegOJWWYNrfoaYvrNxWI8iE5iZ7onUDRllVG486aTiaCDLvx_kQha95rxSmRVlGHQgkvOnCkXPBNEnzAG8CeS074Rb34wmSd09tRr8x4SOV4XRSTN3KG3AD-wOcyhbpgXjaqeODv0VRb-3ff0nLCOPfA43peGFnk8804_oGvJUUfz8Br4C1GUsJyoMhWVlPVJwGin3CLklUQgCqoWfvjY_d9coi_Fj6pHgEW01BhlK7vEx7mmgZFSA1S5OEr4VlgR94nZ0z9iicqv56svB10rfcoIJNPqPMCMaR2z0dXj6P089gQslo1Ez-eoIN7ojpdsaVppjxFjf0Uz4BbZ1DYeLZ7C4Gd_KlGqC4kCx2qg-UlrRCZGt48oS2QV8noOtsgTKMBc8lAjsTpfwoouuJgCinjpMrzy6PS6wgHveCCDHACpRixMRK-mW4gj2oySc", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102306558829934825673\">Drew</a>"] }
        ],
        summary: "마나도 최고의 해산물 식당 중 하나로 꼽히는 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["시내 중심가 위치", "에어컨 설치된 실내 공간", "검증된 맛과 서비스"],
        tips: ["피크 타임에는 매장이 매우 붐빌 수 있으니 주의하세요", "참치 소스 요리를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14658586138488728799", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Raja+Oci+Restaurant+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
