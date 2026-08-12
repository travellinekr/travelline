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
};

export default info;
