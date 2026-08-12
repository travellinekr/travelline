import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "제이파이": {
        photos: ["/images/bangkok/info/restaurants/jay-fai-bangkok.jpg"],
        placeId: "ChIJaxq89xaZ4jARQtKhE1uqq9c",
        placePhotos: [
            { photoReference: "AWCwydhyxfIJ0jcfrEnqG189SOHdZIDX9DLnDKO7dLDDvMxinZXoUMl2LddHVYHyuJl1JSweU0v103X3MLdCdyPlVYr93qSgSieYyTemc1EMv2O78y4VQjiRNfyZXbY0rCaN-7lLAjh38bBxHgO0QaxJiCsbT1OCwV60dGvovn2945Xo7ohZw9uxV0YbaPq_Ctwf_f2gZiCFDu54CeGWtnz-ATQPr_-ajo4No17zLSSzRF_kA35OqMPARilaRywxtSgWO4bkuaCOu9j7kL9IizqoZcUn-HPEBXsUqscVDJwmzdQsxQzcKA_9uPW4Rd1SZNpXEnPSLU4dvUToL7n9d6-Hn9dTGPxbWDJ80UjaIXASIZaRlTpxbwRln1qsq5r6zkB5PEAKiT9x_lq4sOk5WX4zeG08kD4joOhZAzSq7E9Uy7ua-jtwx6fPPRbtge4iF0qX", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105298553787533270711\">Marc Chung</a>"] },
            { photoReference: "AWCwydil20rTiPZILu7cC9IIsC8fbZNVNq8HXkDkhEz3qAVacxoZlRKTHjekFvoj_vNpXq_tb2C6Q9TrGvBxKWMo5j73BNSrgNSKrGI4woaLmSgwDnZUS0K3g0I1QKRISKR95c78Uo8kpYA9sAlBHvKK8qnBnejcn0z9YF75qNGuiShw4azmp6MpmsJOjq-55Uew7_O7lTJOuin4VV3NmSdtajbegEYUIlTJhWun4cgyHOfbiYuVymPyeTfph0ZUKFy1Z5jlP9M9ptel0zrwteUzZLMw8VzY1bXfxzXh6DYgJP1Sd0drOQsgy2NrpgKtzl99GxHvTqCmhPESpqj7ZythvH6rDaExRC1jAIqSX4qz508cQMkg2SL7jn2D0FprwCUfNqQ74_czzLNro_BHb9gdrXUo0kTs5syrLYr2y963ZS-RoMV0PZCVclYQZ8fPZQ", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108161139428037703060\">Maneerat Chayapirom</a>"] },
            { photoReference: "AWCwydih4tEJ1_LS1CK5OX3y9O8srD0B2NVlz83LWW5i6ZikNlxPV6x8_neg04N3fnH8RfusgnM1R1jZOdfvwmJWkOYDjii6ElvjieshfluwU7Mxw2qqvlqo0-LkhcImbenV9c6yELlOMFV53r7Pira45Io2RSX4evcFpatCmpG-SR9uLWxoIu2X1yLZ3Ri0Qxmg848TLj4DWQShUm7oiVhe2NM4ltbD-m3X3tqVdFOI7Bkrvo70UkHdPr4fiLAU8kmiW1RAOB8e0rKVJdw6KIoiFtVxDN8GnT41OwPPCGT3qQugGdpC4P5FRp9Abd9rCbZVI-SbHbJ0xXFtdTaQS97zim8VEbyTDE8YSdKEeKZ9P8U93hk_01ut32rICo8KbsNpkMoeYAq8W7PC8aK5Ex1Gg_0-V4IbdlsMSAU6wPg4BjaYISZhwaELKt0yfNQRGA", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105437204380134579942\">王国志</a>"] },
            { photoReference: "AWCwydi8FCB6cqP5capAEhx2v_uDjq_AKBgbTYGsaFYTgm0arJKvfhnSy4ZNlbpZ64NjRMGBm8wdh9uOgQ4HGf_LhD1ojKyJgx3K5Hqk8nK2AYCA5wdyHlt2GZqIU89DGe1Dx2UVlNUReuA8IcS2YEnrI3_E2A0_YCp1FZm6kvRv2kGccd9fjMi-wxjuyFh0TTaXBS_NMu-coHhK57C38-NON0TvBIMCYG-Jc552-opU5KVOUEwnBuUOnoupdwwuBLjEY0k7heVGRP__-WwQbD5zP6NEdxCAiLqAY0zPCgXy9bQWi_W_mH-YjcFhILzhNXXB4OOJb6qxd1tQx7E6jb9EMpEbJJ9Tf3lTKLE14dfEb4ALbpgGZcsxcEiNs9wRGNYBKfxu2158CELw0FEPebV5R8hJxHp7KDzXw9lIlGW248NUnUaDkLYJoDybrP-6ZQRj", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109180290067059798529\">吳小康</a>"] },
            { photoReference: "AWCwydi_iGOLD07fmacIa4xwYEmtWjrk0aBv33Bc5zsbOU1dXhc5WXIwV98jeZmy5TE-7s0SAIYblKzr4gbaFyqoI-BAfSy3yEt3pljthYO5UV10627wnqYY3nyXESKQB6xU_3mWvBLRuwWOgkmsLzCeCJQHlmdaSJLUNNKCsztK7Kya6kn1gvhP64QhenAIzJ20PXtpnD4pCVjaqyUOiznXS5x3uYMjllWEUniyaSOkXRFYYmn5yrLScUqLg_hDGCsAx47qjYS-w3LgYH49kdSCjvkBwppASfy6QvY-tYttYCk2_iUs2aRlfobkamzd9hoKCk-1EIE2VHwZi1Sfsnqu1gZxQQIje98Orkes0MCHPGIwM3CJX-FEJhEbbo8L8RgPGfYOk8DJixU2OqIREvP6TkvJBalQ3x18wxUFqYOs6xhLSeZol1F5DjaQFhozB5iC", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117608325734589570288\">Lanxiang Chen</a>"] }
        ],
        summary: "미쉐린 가이드가 인정한 방콕 최고의 크랩 오믈렛 맛집",
        updatedAt: "2026-07-13",
        highlights: ["입안 가득 퍼지는 통통한 게살", "예약 필수 인생 맛집"],
        tips: ["예약이 매우 어려우니 여행 전 미리 확인하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "크랩 오믈렛", items: [{ name: "대표 메뉴", price: "฿500~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/jayfaibangkok", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15540702247320146498", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%9D%B4%ED%8C%8C%EC%9D%B4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팁싸마이 팟타이": {
        photos: ["/images/bangkok/info/restaurants/thipsamai-pad-thai-bangkok.jpg"],
        placeId: "ChIJxU5YeBaZ4jARvm8EVZYGjGk",
        placePhotos: [
            { photoReference: "AWCwydhXMkU00ThoGzsoNvHplD8ha21ci1-81Ao1fryRsz0eZs-1pOZv4i61feEh6agS4hBL8l2Cp5923jikeL3wn7JSPKZAcBoUWoNzAZ5f6aGzxccuF2Pc6Z-h82nsNKPhPTtsTeAvWhjV2UNq2Q9eQaFVEoazhiTv5sYbHooZy2_j2FVmOwfRO8Nc2_UdUqSfswH2mXuVio0mOj6R_eeGESbcxIv-gptOCU0pYQfx_vNW32e3bxlcyS3QvPdMXXFsaEaUrUTJPIja4CVcFS5mOKcttN07jb_GdMJhix5lTW2cPur7pXtlmhy-greUDv8WGx0UXukx10AhPuD6Gq5ceXOUYT7yn7DlRs0jw27h2Bevp25NwDT9_6rvjz0Po5tWtjWE7IPYuUUgMVtjC627Kx_pZSPhhiLRjCzzAP9ECsLZg2Q", width: 2048, height: 1463, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111421832620725752850\">Thipsamai Padthai Pratoopee</a>"] },
            { photoReference: "AWCwydjjcz-aCwkrNoi8ZgKBWdjHduNaXfRI_KujFww1AWEaO5SdZykyqTUpbDJz3pMVGM7BIh6J3Zw1JwhSC6r-Nq7Bl_XaqAjf20qBatQeaWDhAtXeeNwFZoHbmq6st_sODB7ZnMSQZCK-zd5G-n9gLUaiymotCEU0sVzP1VFhUxMnWrGASXEdiAKSMBx0tqplC1nmT-Dd_OMxSVGXd6FcOmJxdgmUk8rZ6dVaWq0yaQiXJ82IgucfahzP6jEslj5etpXrATEs75G3Rb0QreFLsUguHTLzFSIfWloDfyCL6WyqirrZ3r0Hc6zD04AfMrFYH7x99Jq52L0RNmSG6hjuevX-hLrakm68mFhjrvvN9-nzMs2ZSAf88iH9v1Se_yMDB3iab8S_VFsseBbCfq5F-SWPQ4Hpk5o9al1l7dlKmF9Lxg", width: 2013, height: 2604, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111421832620725752850\">Thipsamai Padthai Pratoopee</a>"] },
            { photoReference: "AWCwydgi8v1G1UqPAyUstvP1x6epxXYiC9HzxYRxwV4VDJtRlQqxApkiRIqiZy74OvNVtf8Rhdg5qgsIxw1sWygRn282ENx2dNjHbYelPbIKiyjCv5BudCLpvkDzclNW6kXGSDEkbQHWzhs-AJNVcPrJ7fEWLUDs-9pde2r8JriNgnlJj6sUsqDFNGd5VQ80rGOKCg6JTOWow6cWQ6TfqvKjgZlR8ukhu1j4GAyZqDiPtY6ZtpNkukFZoXd3XWFpDLQXYk32Z-yYZB8_Fs5tnVuYtHSbshCM-t_TD7rp7MP0kRq6gb3XyiBET6DN5ieu4BEWAIZvqK1-grwpMAYB5mcKzM0MPmiVdMXq_SpYuPE7Pm2C8k8TY7bEa7uPK0j-q9maZ-XqwN6XKRwnGlN8J0a42SHaEcRhqsKLsB0T-bd4nTmNcNuV8yUIQXMesHNK9V74", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117812606193627823837\">吉武秀晃</a>"] },
            { photoReference: "AWCwydiacnqS-lRIoybMlYkZ-A3VdEA_5r2igKvoq0aT2rZmzIvHUdqcSBomZWvK3EELwhw5DQTQiRO7L8pjnxcU6sllFfa5--Zz-ZPwQKrApWyrIM8xVt46buP_tKGLWe7XhPTFNtRLKO99IupWbBmfVIs7FJ87HFg1HR8q4D6BwTTijg5PaOPPi1xtnStfRItI7T2TCm-J9D8lcGzFlWiwuW6TLHaiuqu9ookXV86_HY8Sg8Gl2tBUAFq0lGgKUS_tsJRQ3IIydM9sczPXHqKPWAMa-aCsi2IxRPdCTcGRmJDmd5rLJRurqjkF7Yg0T1mcjApbcwKHf8twy6VWMuQkXl88d96x2qzh2Kr_0ERsxpJZ4oKMH55xUtuBYwjSj03sheRYOdhNtyPPVHL0yX1R7m-c32bC8LsNPOXlsEdLyJa0LzgyrjKDsehgDuD7og", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106792580853183758717\">taka h</a>"] },
            { photoReference: "AWCwydiIOfBcnZqRkev2jvG_5f0lI68RbsHwfNF3yFKWI7-ENuREAGLJiOsL4cQknbASuSGHvCoT3Eq8ElfuQjgvYO3mM25U93JrZ8p6-QEKT_z67GucDufGHVdPbqAKMVqsmWhyJ2_hek8M7mrvHwa2MPS1Gdxep7jSjPEfVY5EC65KUNnHW_lfsCyE6rg3i1w3RfTb9oS2mvlXUtJehM8vZLHoLJGOtNwVEdMLLgRSGOQoBdBXorX3m3tgElRdzOfM-uz0C4tJDVQsv9ct7zggGAQehlyHjJXAwSBLspr2jzaDbGhErPosnaCXCX3U3aMA_1_EeuXAFD4VBDG967KBvpWU6x2n0w_5OnnF_KS4sRG13godV3-AlbhaU2LpYP0wGfvFxoY0IHXQ8bQrlb8hj7KetwhofqivaQw-csyCAK7w-tafWd1N-9ldjdWIyg", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112774820999130077852\">K K Liew</a>"] }
        ],
        summary: "방콕에서 가장 유명한 전통 팟타이 전문점",
        updatedAt: "2026-07-13",
        highlights: ["오렌지 주스와의 환상적인 조합", "쫄깃하고 감칠맛 나는 팟타이"],
        tips: ["웨이팅이 길 수 있으니 식사 시간을 살짝 피해서 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "팟타이", items: [{ name: "대표 메뉴", price: "฿100~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7605461113463140286", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%81%EC%8B%B8%EB%A7%88%EC%9D%B4+%ED%8C%9F%ED%83%80%EC%9D%B4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "와타나 파닛": {
        photos: ["/images/bangkok/info/restaurants/wattana-panich-ekkamai-bangkok.jpg"],
        placeId: "ChIJ-eIsmEme4jARJj2YJYuFOAA",
        placePhotos: [
            { photoReference: "AWCwydiFDAY8XHOw7kBOYyTznTQyBUOS21yFXmNYkUoz4fGhxtuDxYhN88X6grN1IIOxk1oXuAFNnwxGFrsDIwU_-2t6GM8pG9-CzHtKaJ6Vpldcbq9rswifOoTq2ilVp-0pKSs6s7dgn19H7A_r82DWi6OoIwR3Nby1itKdR8vUvcIBHC1ulhweYrXLAUbEn91V7FMObCZJLqWQJWwGXga_yYFYTe_kyUSj8XYQP22tX12RQ2GRuYk5qICOypDcUSmz1W_QMapJPiMU9nYTINZ_AqOFesru9hkqwJFUTFoda_CvYIcsxA9924DEjXHKde0NVkTfLrPHfGZHDguyUtiP3OcffK8kH5KqSDpf3ZYzfwqgiPrHB41_l4rRRhXbsueL1vJZ-B-OUMaVmDAOeSVXM4lzhPZd41ZMfkZag3pQ3rPMRwMlJJsio9rmlK_fjA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107503244371452447886\">Kelvin Cheong</a>"] },
            { photoReference: "AWCwydi0VLbPfXkB8C57dQBvt9-igsQCrCDtKyoLVRNCPTATMUjLsOc3-TLHDTxHllpCRBm5AlbCgal9SnLnDEDt7VhnwTR33hEQakSQz5DFcmkccCn2d_xDJgeJgAfwryOPqXxh2oFBgMsFUXvvQBQlF2RxyyxACvkV3sHvtAaXBtrbM3iGC1Z7KqwQeaJmDUkrUw2nENTsY3MbpuerT58b4KQiraRvRPcFXOhLba9sRsHM_FoodIekYWSHz7V5W4A4VWFTX6297Xl1HrZNYGZ-H0KJXTFxi8ICYLrVN7MS5Jkz-cYjM9LWmYibLPcJGd9DpM2L0Gkwha-oe9TRyz_ljx9bjmGBRcjoVusUHYuHWsXqVMMlR6KyeT6H8Bx3QbxQlSzXBU-UBBU9z7W9H8nty56fu8vYNvXsnjjAxNzgOEfMUw", width: 720, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107628912366096064394\">Wattana Panich Beef Broth</a>"] },
            { photoReference: "AWCwydgNPdQVHFzLcU5GlIv5jUktD9VCnUT9liN3C6RJ_hzw8iK8thgNpUbAexwVYkJfyfOcISKnEfvoLefrJoZ_3QRue8JkhmmjWMxFWRuaSvTqtNvSPxIviZlw3RS-ruDRBs8NwF1vsxR5NazG4iJ3FUIduktMLYNZimSGUWaUjIRTUCkQLh2o08msBOKSS4AupTQhMIPBQmMaGcfNVGaNbeosvOdLVdW8LmaovDn-AcMXRjMABMXTs9cwW2Z4EgD2eDQBx-FQlkCpQTk65UbfyWhfF_99BUQlsu3xezwdGgWX4UMBRPp0vv8Lw96rquC6N7XUN4Nw369mA3ofyVvDT5E84fdcxrxu3hRx9UbMNi_XTNKezyqLQ1bk6iGGrPvn_3UBozJ22ByXv6YrwA-Ksv16oxO5uqmQrQbPtK0YFbFPLfbqaTXMlFnh5V_IO6k7", width: 4031, height: 3023, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108191359421623719225\">ccion cappu</a>"] },
            { photoReference: "AWCwydgKc2heFf39vTeXEg7t7G8cLqFgRHOvwgz5L0xRk8964CWGGXHlQRylEpwLGZ0qE43upd2j-sjpZ2sO1_TnrnNhaGOkt3OzdQEVWEWjoa6uZ_tznCO_chy5HTgUme4waehf3SeilHvo0oT90X8macmJmgqWDyvWM7WU-MC_G3QqtSz3w8GCtaYPjOp5F5CEH1uCEytjOzW1ruKnqjP6_SbI23KSBl2wbq-NAv1pu2WP58OCKH05bP1fNFRtxJulr2MFC9jiN-HQ_ml51g3QfnswH4-fr6ZBrKQawq3ypZNVgAzAqBc2TS72enI2DBbbvofWGA2cnD60H4ER6g6KBgPBDwD2UNxaXk2hbo6jYKBPlvovyhPCzSRLRSYzdvRXALRLU2yhqucXU0CyCmxnhEZnAZHMM0wUTkS4p3AAiV8p778kRuN2J8knw-4YF4gs", width: 2564, height: 2364, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115894256337228945541\">D B</a>"] },
            { photoReference: "AWCwydg9vZa3eCnXphmrc91KoBrF8slbPBHAGBxpQuzdJUaDZWde9HavEDqp8Q_5kkAyeUS0veOk6DnnLNQmpZaXW3WiwW9oc3zKSfQUI97zRmnsbvk6p0xqylTPnf_RKkqPmCsL0vOtkkcMirAwHEP6UYnhRE4l3PO2n345AAmnkGd87PWPOVgvnxnBS_fYGP7gLHvxvgs7fQVw7SC3LvKug4AtHtnOdwWwXVHVYxhK_yFZBePDkGMwfbeF7SSLkNV801XFNazHRVvxvnXpWp8RsuhCrSTc85R0iktnOzEUzSGDNDJ0pq-dAjAPDPjD19YBD_IbFksJY1iTKHCnmFXRsGbFiuXlvgrkUtgZQX3fiO9zbfsIJsXr6xVU4-_7U9ax-3XCcYXKEQCjLZ_1mUS1YloPY3PA51G8Tz4h5807H96QwmBKliqtLYaCa6DWmw", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111249575423650343413\">Panda Wang</a>"] }
        ],
        summary: "수십 년 전통의 깊은 맛을 자랑하는 소고기 국수 노포",
        updatedAt: "2026-07-13",
        highlights: ["진한 육수가 일품인 소고기 국수", "가성비 최고의 현지 맛집"],
        tips: ["국물이 진해서 밥을 함께 주문해 말아 먹는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "소고기 국수", items: [{ name: "대표 메뉴", price: "฿100~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/WattanapanitSeriMarketThenine?mibextid=LQQJ4d", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15909431373479206", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%ED%83%80%EB%82%98+%ED%8C%8C%EB%8B%9B+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "히어 하이": {
        photos: ["/images/bangkok/info/restaurants/here-hai-bangkok.jpg"],
        placeId: "ChIJTUsNVjOf4jARkGF5xIeIJCY",
        placePhotos: [
            { photoReference: "AWCwydjt_ju7ningz3lgrQdsW-axPMivFKcEgeKvgG0bGNaLGsU5VLR5ywwhCNFPC7NIe49c7ruqz4iujYdjgVnOty5O0tql3OD7xzMo44-f3YrhEV80ncEQ4_blh5pQl2gNvSE4gugqciu-RBGvx_pKNifcgXtOiI26smfcf9DEkQGCjltRMa3eQBaEPf7G4ft55Ab7G_X1qYRZVfkkYpXkGkkBkvMktBIK6PlrWsNiBnbysDaIuhRsBKYfmTh8S8MuMBxkZFupgsnPnohKI4tnxlGKlKFqbdjQmeVWRNqViPCUEIfJpnrQUnXmsGSbIP4Tq256gACXdOj6Q2_-BJHhBYxGW7yCPhMK1z005DQI5irIpxQyDDSBW937JiyhFqrPiJdNEacnM4kV7mbr8wro2EWViCzp1B5gtgQzW6urUiKkvVRk", width: 1242, height: 1242, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107497017065644439884\">Here Hai (Original shop)</a>"] },
            { photoReference: "AWCwydiuNmBtUd5pHeCxk9PXLjB8DPWkc_OQrymumzIifnjVUm4JzZEG72I7jis15Y5DnJZtBqZC-eQP7DDM_6oH134wXj4V7UiBurpp33W3V8DCXbZboShwG12eYAnZ7jiiArYCHwkHg64zYeUZ-mNqKtyMroxQ9gX1tS05qyIBrpbrINCED-AYwwxrQXYdTmTnzvlI9wvQ8matlja8F3ozkEpLyUQRtSYWUTc_YEnJbzaUc0Kkn9kPN2gtOx1kizQbwLADwqfDzH33aG0gR7Rc7gCcJJ_nSfJic1c_rRleuBpbIWp0PTr8SEyGJqyJHmY5zi80_zoTvqDMmDuV0VZl-ZcPahdbnaTwlX-QB_4nvqS_IN9IP2F_aN_JKOBSa601Ly83oZVtPNicqvJTLtdTK18rFK4D9W6cks6p-23Psp2475F-", width: 1440, height: 811, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107497017065644439884\">Here Hai (Original shop)</a>"] },
            { photoReference: "AWCwydh1PTeolbPcXAFeDjvWCD5JizNjvcURm4XT0dVUO-09GucjbLUeaEhA0Ji791QQtiPfBCBIbvvPhbzllqAiXExbCT_3Lc1XUfbMGVa0-YCcZEokyZRfv3gQYm2ceEbVrJOsUHvlIlZ_VMCHDtNllbdPgIKjFphIc02XQKdwC02AaPxRF5FK4JKICRdo2AoF2o1GfodkcuSlEjWwAp5LD90V81k4yD8I2_NoqxvY5PPnYaunL08EG1A8kl-0OwWTeQJYkw8npVafTgpKqy7KKlJUZzcD4Qh2pu90bN7iQpVxOCksU02qinYi0HPgtDSpXUjWZQtkjNhMRc0S7NaSiWU1Q7-gVIBbDMxfotkryHkyWUgZ_P43eOJ4PIq5shOcjHtJ888AbXeoK-867z8XUg7-EoObJG82F71TqMkcNzuTDMppk_KznVeaklsoeezP", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107281356034599844228\">Raphithana Panyatip</a>"] },
            { photoReference: "AWCwydjOon1qQUt1usCFMmfNCG2wjUH3R9e1AODuuD-jsKrbjYfdyq81j71-TMge0Vg6BJPnCM0n-Nk4xYM9Y-NH-QVQIzGHn3tmnVIMzH8rMq56rwL-lxu-O8ezxN3Vdr6jF_dVAAIC8VdNsy1I1x2frBTE0EtCbZbBE_jt-mhIVHMIwt5C-556c4k_T3xxoaguywZ3iOKr6jm14WZGAf4tZfAyZy7V5kX3gxLSzmxB8KuyzUCHOGL7VHa9crNzTgLpqHoDhXEZYYcDjgTJQY0rt9x6bvWvohYkyOHeLNCZY1TXl2wFmPGtOxgA3aejTNuo7qJD7hfsaWdxywl0K-_91y3cAMmBhQhYQAUs5WiuHEkhZ28EI6JUCfjcAXo_IbPzssLle7j9SSZIyOoDgDddq3eoao-9U9EaIgeG4ecmvbK0UitvvxQQLLmVbSL4JpD0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103423794085192498700\">Nancy Chu</a>"] },
            { photoReference: "AWCwydjjyRYK3FIQI1lVMJosKgE78yIqvnLy6MBPDuN6oqdCjARpY_4QZV7lZ_-ng7mClsqVfgUy1cYVeHicXiUECcO13MCbxrS7U3rT9vHsmPBqhSr5j2o6v_JqSoGHR5VmWWqCiLdg8Ajfgqye_ecJtw5VQ8EqZLj4xTvFJlOwXpH-QEkFDzevAJeuoN7k9jaoDI6Ylkh9oJcrlmDs-I2gUxTz-_hnnjtXVO20e9L6_PFAtzSxERW0aPgLzfIWdI1KN6I_OcT11AlQHiPEq7suzoyA9bdi9z8QEh0trJWMjBWfzIhK9cciXEsWmoucmoatOljw5IilbbivoLAuC29HDumI6sH4CVB3cWgpybQr-03Ub2rkCf2i6GwT8sJGWskpNcaere4ribbJJhtWBKaRNY5FnMopiSGUx0mOBmEgID8V_ZC5yoLzlu9_RVouBpCz", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116516355161624965681\">Ivan Toh</a>"] }
        ],
        summary: "게살이 듬뿍 들어간 프리미엄 크랩 볶음밥 맛집",
        updatedAt: "2026-07-13",
        highlights: ["입안 가득 퍼지는 진한 게살의 풍미", "탱글탱글한 식감이 일품인 크랩 볶음밥"],
        tips: ["웨이팅이 길 수 있으니 오픈 시간에 맞춰 방문 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "크랩 볶음밥", items: [{ name: "대표 메뉴", price: "฿200~900", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 3:00, 오후 4:00~5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/herehaifoods", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2748471789301096848", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%88%EC%96%B4+%ED%95%98%EC%9D%B4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피어 오르 똠얌꿍": {
        photos: ["/images/bangkok/info/restaurants/pe-aor-tom-yum-goong-bangkok.jpg"],
        placeId: "ChIJsW06FTWZ4jARLILZg-S3ODU",
        placePhotos: [
            { photoReference: "AWCwydjZcI-BuNVJ8sFXRVJl5ycWEBYxpqy7rkMYWEfdzVXlywamKCBFaZ_kuNbOaBy0fpXwlJOMRUm9dXAroIzg4r7G3ONbzmuGP9sNZs64uvlpec27r16XY9X3qmFnwh1EGZMbn88fwL6R_sgqMm3BrVNv0fyg376XRggF3xoeN41vmf7HWUxR-5tJrnee-5LJO9HvZuUcZ2UuBGv0ubFi68J40EhqLnZlSXRsnppucHg8DQw0rmj3V2_X4plLUqrak5NuD1_7TO6j1LpDBTlmZCYsNAnhnhRIkQ7r2w-ZEkg4HKFu4R8BQicko95E62bPVKE9HtRVqVaB74O4hbrJjPfPCqtbirpSUyZA1W-fp5jnkkBbfJlKv9b6OdsTousgGRs2EvqMA029RjISVByINZcnrIP_FrHx6rMKocbr2DYlVI0Th8Q3cQ8AHqONJmUQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115568302362848599422\">Astralis</a>"] },
            { photoReference: "AWCwydjBa_ht84Qwk8wb_MNnYD6kwhKKnLJZ0z8Om6zvCFK_rYmBmdlHmt1DtQY7CJFez4ao2XYWY84OX1Anf6Xi082UjfUWE1gGGXC6Y57yhaSm7kbh87MkX3Met7CYBlMGjDfC9unAJBavvHFH_50WLScVsWSD5rfTVUTugge9x_WmzZ1Nb92GXF7hFQl0goHZ73332db0dgM1r5HcJH72QQc-9N0t4XvTFJzmfMXyfzK6WUZKlheybo49QT_pOiJ6aXMIrR4GKxbygL1kWMRPahYtGR-Yl2CYoyGZDwgEr2CTnR8E9rSoe0lNtHIG7b7QMDO8Fka7gloe7Bc0SA43hHBjULbRpwGhQejJXFaWcjo6_XyEjamamihXLtZBjUjqh5pQzgmQdRUEwGgrdx3BMbB-cAVLqpW7rvRBqJ0j-BA", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111762596382664794353\">ร้านพี่อ้อก๋วยเตี๋ยวต้มยำกุ้ง</a>"] },
            { photoReference: "AWCwydhf_lwI9HmOKvjhgYH3nh76fmkYti1BCGS21ro40EWKLA8oJKdD8Rx3D89rujpX_tyiJFqTMzUPuMeQBQ4tcRMtJSEP8HAFgGnXqgY-aYmaDT2WPA6eP89PbKsabARMrsIdoFpIPatXfbvPfGznMdAqad3vpKzIkB2bSVqxw6qFn-YnZ1kaHWiB7GTxsh-y6MqcENB18gOz5b_pzva3wKrnfM_KkXebz8reJ-YT5OnU4IIZHavOJX3QSyHWFKHnSThAz_1W67d8l5uI8qVEF7j-7s0sWxXOu-SiKXGck94wiSx0qlTFBBYGHyazyF0DNGiWg_dVLWlPtY69OR9DVZgQslry1imZpoj-aGsVFfpfdMDakRw2VLp-Z8pbmAKWss4S2TrN8avqjLJnpyAHMfj7U44jJquWVkl8ddY7Wwi8zLqSt_wUY93RLi2kl5Ej", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109998248048233413914\">Kiddo</a>"] },
            { photoReference: "AWCwydjVDs6N_A5iInD7UKUp-Xy6gvGN_fW3lC_ajgpzNcqsqDiDV79JRY9wD6JnDEzmZNhXzfq3gs9u6KmQhtKKc-mhrznDARlT4w4dFLtB4YRsgoi51NQvfYAHrx0ZUmVvrd8M6tfANaxqeU1qDf1SZW8v1aG7c6IQbFwbapeag4kXRbCBdkzmlfWYLUjCN_w0tIrW5NbTj7OEfNIrsH8_wYmUMmJPUoaaNNdW2bV5kt4hg3jdc-rAhmtslwRIk21aEt06Vr2ZTw6NOb0vFWMV_ExWv9w01WK1IMuDDKMIrtczxE59pzk9mu_IRg5RXVCTx7YS7HkOE7dJVUDdCsisaOfM5L9Tp3bcH8B92LzUMWcnExrCmW2CZvHZ4pNY2oHpaZkQBnV1_xBj-dvH0jws3fjJtUq_0XZAYVn-1AoKvdzM9QtUYZ8lOd6S4YidxjEB", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112630717597557928099\">Ching</a>"] },
            { photoReference: "AWCwydjwj7EBzP0KwESP3wubLt2_Zh3pnbBQ5LtS5-4MfibasLK9nCO4JXrep4DmmG8v8b3lME1a1YpETZjtUDUQoMqdFEcoIFgekwBDJ1nKHe0LtQ5iw-JexsFTiMoDdalm0UBi7eO39fIhYFQKc5mtCyHhQqKvSW4fn5CmKJE0o71pGYIqr84jvw0na4t0waTXIP__3bpLD5xDYqIo9Sm47OwZ34fr43GDPVqt8kYNqQaaFJ1fmu0hgzn7WYIFfRcmOZUi4JJcpMaxlVqDXU9qDoO1_RR-ZG0jXSsJQWmUM_QqkpXrB9Jg3cMRNI-3Lu9S-xi8uZOvFS1Uka-PnduFH-RhOIX_6azvFRwNkJV8Fy9wEhiDB19ECq4qxDFuHMgG6WjfVEguoXKr9H_wJS3-TvMgIeEv1UqmGVOAhILyY5dn4AJ7L7E0s4lKC8VMstuv", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109998248048233413914\">Kiddo</a>"] }
        ],
        summary: "진하고 새콤달콤한 국물이 매력적인 똠얌꿍 누들 전문점",
        updatedAt: "2026-07-13",
        highlights: ["중독성 강한 태국 현지의 맛", "신선한 해산물이 가득 들어간 국수"],
        tips: ["현지인들에게도 인기 있는 로컬 맛집 분위기"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "똠얌꿍 누들", items: [{ name: "대표 메뉴", price: "฿100~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/219511371433546/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3835017274798473772", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%96%B4+%EC%98%A4%EB%A5%B4+%EB%98%A0%EC%96%8C%EA%BF%8D+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쩨오쭐라": {
        photos: ["/images/bangkok/info/restaurants/jeh-o-chula-bangkok.jpg"],
        placeId: "ChIJFVMU6y6Z4jARfM273-HwetM",
        placePhotos: [
            { photoReference: "AWCwydgGjvK40apZ0RAshq9OanCY-U9Dk1O5NChcfQlXj4-2qfSGKWtYdqOV7xCLoF5JWbLN2UxjuKeXDw-K_zJ57YHgI68MU3LXM6czii4YEwYJ6hX2UsosapjZHQbSmr7VFq_iNuY-LrnWs8O9Z0VSnaDxn4vvujq7NrxWmnVyOGFu_GXZtEfdxyKVpnACOXCIV9vkiV5ImnMMa5ZNZTGq5pcV6e2RECVjVXPOnJvdN8hANNoEHE3VSsWRWBRd5-CAqVkt_1y1tDqUT7_a_0TiALOMjCW_kRSzsmXJfLg39lmYfggrw95exwLLSkBJJ9KU-fUqBq-yN8LkyQvk410VCpJ0FTBtM2T3Tg56n8QOLrBAX8WZcpBYQcpRCVmGQkKjdfqZzsyFb0w_aqabbm8PbMnOzY5QgExbkvOdXKSMRR4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110047634308776686749\">Aries</a>"] },
            { photoReference: "AWCwydj64VHtRXFUaUWxBPx2t1WMED2CBEe5DgNrxvVpwaQz7-SdYOaumC6BhBvIrj2YpM3Sd0uwOllPrhaH8tEKgCpdfulVKHa9pBoTJNJ2pbarOCR1jRMKIMNMkQta1KC4wU3bvkuuL9-bUdy3CVsZI5xKcfpn1CfXVqZ_Yc6tky-4THpoP8FaaC-wDqxbHLQG0W0-XWiR0KGBYSbekYz3W9vtEBVvB8ZvNLHfkjPNF6u7FYjnjdms6C7M8PARMKMHRuHsd8d-UWjE0PljFTHl0WVcJPrfz8F3SECM6pD17vGv8R5s9sl4Z2b_kYeugVi-d2emK9JGsGmuw0WIrrlqBBFvQbdPp4hQBkaP8WDvlW2Xtyk4VVH4joKAf9FjLtmG0G-zOW-hVQ6250oFuTFZL0lErB_GTUgAHZ-WTQZ234oKFESQBRyQa0j7JXohohRC", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117262988263210701310\">Debora Goh</a>"] },
            { photoReference: "AWCwydg7FMVHjKZpu3oaQiEwjtswO7QDxEwcqvrGaJohQAsDwsxdGkOCetHdlfRiI5jJ2TIUbQQcihrAe7VQ9KEki-CUjiw9hF9UZDvYPFMJpNPUpBS8Olq69svKsF8Ovzhce-bM63pbMaJAuR4lq6z0B-9Ibbz6cE1Kllzf6kNYCSJOmo2_gJ5GTUWOfnDsz54zuN1h2iLRftNlZIaQ-_Lou7IsYZiy8Xhzw14LxF1ruRC7QtwFPUSrOamp8yZHagUXhhdzy5UNZir_cf3veL-VRWJkOceCaEKCKPsQRe947l7TDfdccPwWDVCg2MK0h0DzK06i7j6sbw8IpougIBGTw-R89WyGsxqaJG9qW2ZesdK2e_8uikPD-mxUppI9fMAWkbmh9jQTXTAMrz07bJvB53rpsL9XU55-0leLTaBwhR9FMhGlGyic6nTug-7TWzgs", width: 4030, height: 3023, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108752668546510735941\">Live Life</a>"] },
            { photoReference: "AWCwydihsbEbwFwR2rDRUiTg7pHfOv6q7yLaR551rELNgN92ATFINII2tqJYQGj7D5e7GQ0I7cv1L8_QiX7U7vV8ryVyQyyd05gC9bilX3D2bdwVfOInwePT52BUIXNKKWe5ocleJt0RTqNwgNTqklPNUKd8PM68OHocKOU9NwfFQWlF7lSrMp9_gdGUc1GBOjkPDWg2SeKa3TaHPYcO7yg-HCOumpY9XnYJBIgaQODhtHiNFRlb0cm5U_c4mYuj7a-hB1yNPkPkTPffF-EJx_C5fRUmHffGSfLp-JopSC9_hpNYECkVIVJxfo1cx-sSlg36E1MVdPfEOnBuahRZr6WcQxFiTSbqb9YmBgf7kNsnqbc8yBJRU_796P8M03gGt655bc2b2tXkGXoCzEAG1IgZJ_cg65mM0QP6szFR4AZvjaR5C5MMkJdA_svUFVUrk1Pp", width: 3204, height: 2423, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118201514016811001892\">Traveler</a>"] },
            { photoReference: "AWCwydhi52uraUThwr3V8q0TgYnSqOdH4x8jD_bDFDrAcPTpJ4hnqXi_BK05s3zTvr78Uc0wnyyQwHE3Oqyi9jVW31dDADaWss21VN2tG5dpJTE6dnt7bEmjGUf15iXwJO4ZqPTCCIVE-Rqztcobvqq9hvzzZycy5VxR_XuBNZRQFY_clRMcEHg6OTQa2Flgz7fJwszYMe0YsQwIHlVilvQG3fti_fEnjinzDcv_F0S0hi1IzWRRgcbntFAl5n9ybysE0xY-40m3cGD4lGNzgS85RV88F2ZIwZ5MZyCpRnzm9-6OOsbOr34X-nxqgZcRhV-fCoVM5C5X7NPiIs1dUbUeeYXaTe0ShEdZ-_4Ag1jAMyiUZP22OsX2dnvjpk7sjVNISTSY-r3zM6v_0_mq2fOxn-pk6yPcJKR-kRVrL1jsO_AkTf7bIEFyPikOYCxLV40n", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106547503578895915440\">RT T</a>"] }
        ],
        summary: "밤늦게 즐기는 화끈한 마마 똠얌의 정석",
        updatedAt: "2026-07-13",
        highlights: ["밤샘 먹방 필수 코스인 마마 똠얌", "자극적이고 중독적인 매콤새콤한 맛"],
        tips: ["대기 시간이 매우 길 수 있으니 시간 조절 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "마마 똠얌", items: [{ name: "대표 메뉴", price: "฿100~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/RanCeXow/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15238757142073429372", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A9%A8%EC%98%A4%EC%AD%90%EB%9D%BC+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "고앙 카오만가이 프라투남": {
        photos: ["/images/bangkok/info/restaurants/go-ang-pratunam-chicken-rice-bangkok.jpg"],
        placeId: "ChIJv11KQh2f4jARvzoyPYOVQT0",
        placePhotos: [
            { photoReference: "AWCwydjvKXJtgsPxMwZZYQhwxKV1_cDQF8lW9v3hiZo-Ni9Yb6R4F3Q5LO5OrImGPLLhfpyx0pb9Lcj9y3GCUCHKSof0RtA7bZcDPgOCsZsU-GsLuG0x3NqZ4yvgtBu5D9WTtMDBwWMo72-wPOR6NImCIQbj2lU38JqC40OevXxcERPxg16jesOdg-2GN13s8GLP0Fc7QCtRtAM42QaX9AFhXlJ09sTIMj3c-ep7wSmr1syOoN8AY6UAws67CGuxY64nv7t0ohD8CaFeN_5Qf_xDEL20XEwjNrgfufp5U0GBJYAcVoPoyvQQuiRdFVTP3M62DrR7f9rEdN7TvwBIyVTkhWK5xFaO87jBZDt3s2fq5JhZZnFZw_fnxJU1yrimQRn9oSCtR9BAFqe1D8Zw9e59-jMhgSfAzPfFasY4MoB5DYRVzEsdGeQw2PZa2V6W_zuf", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111486150411142056235\">Patrick Lam</a>"] },
            { photoReference: "AWCwydjTjZV6umxiO_x53pJQTV5Qu2PzIQqH6Vclv9upLHQcigOwRfHUBRilFWqixO1eg8N0vU3xFvjkMs3eaXSGBwn5ulx_wpdJMy7W_RtdhDKRY5L8jMsTB54OKMyMD5vEH_SrTGBh4_JpPweHGNQO-M1BAQDtzy8_hhjijSCzDGsFWF7sb8cCxWqLMX4FDUHzkrcW2FvIUw_o50Lgp6fZyuDPaZMcYbQL3NMgozVNMgzIl8dFOXkc2oMUkG1BMM04HRuMCxjMfOlB7g-2b4wo4h07lMsI9ElSwa9P1zSpCEy-S0EAqwa2Fptk-Kw4nF0T-EmYfvkDriMINGNhDaUE0ytGVSxzxkuZdbrb7BrNdF-nFvtQ9sMOwu6p6ydmI4Dz3073b5ax9l8v0i8JsOVAAHJfYz-FaEM3MZgi2Xzi6UA3Zg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113592405087644121988\">Tong</a>"] },
            { photoReference: "AWCwydgKjZRLXIqmamr87Elw15OzftXnh4fTOKAQJ_r8fgcCXQoHiNjZSgRmZb6N65D0Jpv08J4BXf_9aoOqMt4ERvovnqU2A7lhtoZpxRuYNiiqvsrBPtol2ysZg8etEA3VsEBmQwGAyI72zF2dWfii1L5Piib2U9IH-jTuh6qKfhFkrIqeDZxQAQn-42xHhFPCEEIQLPK4INDkyZDu6-qURFqSV6Frdq6JkYRaZ2I5Ftx0-7MQsyO9XcL0aaIC_QxjrMGBNpqjN6P8fJGWGgyyhyRinC7c8DA7AgHCXhkIiJrWy3woEZTLVV4Ai31SK51_RB4paM6hJn2nOFltCpKNy9V9-RnOfthLIZxNOn4J3-zqrvBRulafz1NTwuOlZI4HhZStOL_oddOiR0rEcm0xWjzeoUdobIFE7EIzV5gKVk1gZZV8JVkdDi6WjUPyow", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107894101055146850629\">Nia wahyuni</a>"] },
            { photoReference: "AWCwydh7XgvmUBrpcaUdTZWw8IY0QrTFADLacFnsSI3Pkfy0mf-8ZBoA6BjFm66aitO7WWDX5OcVEZvQWnb7BWhiknZTkmq5rA26G-aZx7vZqkg0Mf6fnuXuPm-nX_5SbMcYRhSJeeK3OerhR9OUXlF7vyGAwnsTeOKvWpV3K7tmJKIJd_pq59y6ZbPJvI22SSgBYk4gY7kYAsWh4nnvFA_Wit8T4FLFaXgSFlUkQlYIzyEWeft2IgKBEJbbub6hfXjLfR_hdHpDAeBtYIDnc6eOE55o87-9b471riqwAvYH2JZfFPWupdoDVWGehKXVIWtqHKD-TCCtpFf7eZUTod1dEc6mF8Io8uT83tD8ayRbQ-CxbF_q-oUmlJU2oRWdYpGFn3kn1yQkG5a3j4tRNJwYPt1G53k8fbq7uHf_ysK3Kf20LeOa", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113592405087644121988\">Tong</a>"] },
            { photoReference: "AWCwydh8taZccBamAP0w7GMSV01Y6rnUsBJc_tkrUXHU8DRsLyFygU9EqG4PXT-WKRFiLYTOOf4AHJIHsf-6eaJpq7GwRJ2DZsj68RhEynxyoyzX7wzrx9URxJAAL4j0ZPMqVkf5ToW5wJHe_BLcN3gv79kruofCA_va9e3EQsmPT-7dCHI8N7yJAETlv4tAlw90qB13bvnOcgsIesDrUfNe21tBYh3AcpAMQqs22tKl1dUmGOPy15bU2encHnd4sLrsth2GnJ-H2G9ThGtcXFil8hUW6i_OnIg21bHr_rAq3WjZMarSLmIinJ7uRaCjZRs9FQEKfw6kOOIUy-ZgB9MRdrekaeUNenoPVd4qGwvmZrwIiW83lWoeFU2JFVvGjrfoOHEx7NAmTfWPo7fVxUYFZZ0KpnbBKo_XY9dAwdln7etZk9TT0ofnHqc8En0EIDeG", width: 2304, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107894101055146850629\">Nia wahyuni</a>"] }
        ],
        summary: "Go-Ang Pratunam Chicken Rice (Chinatown) 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오만가이", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오만가이", items: [{ name: "대표 메뉴", price: "฿80~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/GoAngPratunamChickenRice", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14011327498890124589", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EC%95%99+%EC%B9%B4%EC%98%A4%EB%A7%8C%EA%B0%80%EC%9D%B4+%ED%94%84%EB%9D%BC%ED%88%AC%EB%82%A8+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쏨땀더 살라댕": {
        photos: ["/images/bangkok/info/restaurants/somtum-der-sala-daeng-bangkok.jpg"],
        placeId: "ChIJ6fUwuS6f4jARYytUkc2MT3s",
        placePhotos: [
            { photoReference: "AWCwydhrN5xQvkAXqp5gxz2w-b_Y3EgtJn4_E9Km4Z4mmzdLHKG8KOGJLh9MT52SLsSJtvf9tn4pB38y4AujdbrY1rp-CifF3IJVW0o5gaqUXlQ87eGjq62CA1eOwchBNhnytOIiklsGCuxPYZU_v91fcab5OeozAFJ79KEpShUT5KtBF1mMxDB-SC209k4dA7kZej1fxcX8tFRe3xsWN7JARjY_xVseHSheVFWnbiZQpt_QMCbDOWdwocqFMB8y2yVNi9-KY9sNEKIA0564A3-qyIPaPSd1jjOl4raoV9IjNCGleRplOQJKuIZ2gF7cRTzSxGqH2Sey4zyX_V53qYFcbLC3KWOJiutIQqoJT6VaKlRJDXta6mBsYepS_iDkU3xcGK4__LpV_C3tPxIeaK3LWezdRZVla-2Hl1bBItjVMOUnew", width: 1377, height: 924, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109563480962634463314\">Somtum Der, Sala Daeng ส้มตำเด้อ ศาลาแดง</a>"] },
            { photoReference: "AWCwydjXPSZEJbpG9VTmilKz-LetIw7AAGl37Dbd4HIQYX9PX56upcTDMVWk074C3wAXhJQpT4GUbjQW-lPWtZZl0eOplB3VtdsgSqqYYnbnT2PQYY9EmhS4wbhv375HBgqoV_uYaqe8uJkYne6ihTS7iWDJ_Ue7vz53iaKrsbBxFJJUqeV6w3u9ZGm-azabQEk37xhRfikHkMCFALeo89XO3h7MPHdCoIhKYAsizjkOEva-FEoApM6C-2UpXkinLAPlfzBf0UINWo-ZlXtkmV3wvXeABd3ycr7qolB6Vh4idTQv9lmSf9BUgCmKpAaeCt1CamGXNQQafROxtmHHSbGg-B74kYLX_6hQNz5jyaw1gjjegST-mmyk57Rjg42nfD-lGaC2Ptp9XrlEtKSBOG0V8x6VlwXnt1Ah6PduTkXlqJdrnIHKseORwFE8QxXYNWzx", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109563480962634463314\">Somtum Der, Sala Daeng ส้มตำเด้อ ศาลาแดง</a>"] },
            { photoReference: "AWCwydiY4vylK8WMu1VKfh26zG_ikKwZjQPbAxAlYw8N6jWU5cWsBc_cA6ZaLCpizeR2NgsB6-MV7q9mYl2m5jt8CobTnk5m_R3dU3-OIgvkGhHWB55Oc1bhIzZ5UCt1DW3cNFP3Ig_iGXnpwiVK9p_cUjcep49ABivxJAKgPPgH3WsXfAwtQ4i3eHVNOEFLP5F7VIYQYKHZ5F0Wbb2vvv0sLX1JIzzLQa5aF2u9MLdq-DoUVZuVIZq9WsROX71An-AjKWyfZeG3C8KIBjKoayaJDC_Y-RoQe1xBqgznKuZTIICAZyOWXUmcd_XJDeCl80UgXsf6IWvUAJsZzAyPNreCyWCc3nAF7kwQU8NLf7LXzQqCclzfm9sC2p9WMRkQE-K06IbZjCX-E3v1O1n02O4zVvmzrEpfB0CN5myEvMaz7opEs8a9CvipwL19mhaeAXCC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112221453955549644031\">Chris Lin</a>"] },
            { photoReference: "AWCwydiyKwE14Ry-OnhHR2xl57z-ZMKe2C6dUuXNdj9FdIJYteahgny7pBpojmmDLQJaFLrHNl98FEqFxMQOAWXZlQ4qqKJOTSea8PVwYiInRbdlz_ID6QrwxtckQkZlve1nZHAUR-ySCbD2pef78KzjRtG1ZA1Reavvzc01Zx6aU-ETUPxml0evkvJim9ABBji-NDy1KcWtTyiTRYsS1TNshYpaXLQOjLSHXeM5X_kV5HIvt0rPgf3SJ0f2lAjuu-yNb6i-g--3wUYIFZQmsoSdbfymP0Ag5jeNXxYeopxMK9vCAt29xlxQzrTxeV4XiLuJYl5E_3pXFxfi0yfPrhNlWVc7uym3kV2zMTUvxAMckSaFYh50Tb5OY0Buk6_wVtuXGgcksS96lDYoZPD4oqDPflIDeLs9VQ9mkmv53TvNp0T42imC2VoyPSIRBQgTyJ_V", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108523899808870417696\">LL</a>"] },
            { photoReference: "AWCwydiEJ5BSuMb8DL5UWDi4kioz1wR9FuxtutVfdudzAkmkL8WsMw1YRmnPs_DRbqVZIpVAbtu214lud-IB6KUPpZVFCJuuim5Cqyjtb_BY4N9rVQyniljPf_z5G1IUotv13Qv3qp83Un9Aqv1nSzeK1bTqur-tqE6tvTeBuonwPRfLa4xXieJYSvuP3AYt247D7uN_sD8BbHYLR-5cxbMepsdQgX8fKRgLvubAweHg0_XCXVLGnB5AnnvkaM7J5AAgK3vuEGHI_aTLaX_d5pE8olUoFZ2FP1qqRJzPmbFPUSCC6tPQk4qCMuu55GCaEA-BdlytmNSuFM1_BhPt-7Ses1B_8sGfkNh77OiPNzN51jvyvC6jBTjsdKRIdwnk5hKJ3c7mFXq6xo1YK8gVAXTDooVqAXR1CimfXkiQ230_wAhewCNsEYmrLhPWk2PZbN7A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109563480962634463314\">Somtum Der, Sala Daeng ส้มตำเด้อ ศาลาแดง</a>"] }
        ],
        summary: "Somtum Der 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쏨땀", "평점 4.4", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "쏨땀", items: [{ name: "대표 메뉴", price: "฿150~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.somtumder.com/home.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8885475404359674723", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8F%A8%EB%95%80%EB%8D%94+%EC%82%B4%EB%9D%BC%EB%8C%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크루아 압손": {
        photos: ["/images/bangkok/info/restaurants/krua-apsorn-bangkok.jpg"],
        placeId: "ChIJN8lqeBSZ4jAReT6qXHgmoas",
        placePhotos: [
            { photoReference: "AWCwydipvzYx_FWDQiipCy-rSqgtQnt8MViOQ12VP_b4W_9_8FfbIm62z-AxDgYS4lUFyi8tN83tbfW6GuMKcNcWV-KUyQtFQtS5V2X6vs7piqnsmZH3yAUlXMArcSkcFYSUhPWk-Wu9vx4iT4pXQu6tV-9k-wkjs5_r04DGRpMUU59fYLQWuQlTacdAjMSHTJDWfyf1Ed9Hg948KpunNmYvrftlGhVbaEFiyoT5VfHK8WidwAnzRCUu-XjXJIm6fQYXDZCJtvw0RghrloZsx9vNdbfFAkpQ1i-vwaRK-TEv95ynviZncoWwQYdTte8t_xaRt8Y5mHhUHQb3-5FCpru3qfQ3EdFnvjOP0b-8Ya67qqEcZokqMxQm9QlGejDCkz0MgQrB2mGHP5TTCU7oH7Y-tQJPAER0hRhv6x65XmF0Hsv3eHPL", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105433206931051786261\">ครัวอัปษร สาขาดินสอ</a>"] },
            { photoReference: "AWCwydh5Al1lacvlBsvCZMEsi7PFSETCD7YASWo_re7_gdkO30m9EjsxuGjld7TzFePHhL5RkUzrg0vOed_BvQUQTs-r4MONFVdwDTB6K6R26c9uEEpJ1nb4IjcDpq8AhtTal66xfDRnBqsZUjR7Vvvi1Pyjd2OAXyzJGdZo0Jgb7xoRLisMmwXjEBYQ5lQdRKZyq2Zd9XfvP-3A591853vWkFh0Ad86T-Zt650s8PmSIDbM2Ymmuitcu4GXzxEOBmV3LzOicmmcfetx2Unm8rbbOjKfblY0vym4nuKEUyJxDeJvBMoy1cOTh3BqciX7qWJWnRi7c784YrWQL6Q5zAnHdjB_bnV3FB6TthtyEyHFbZLF5hHSCtcBXgfB8kPS0-fMKbAp06sn7lSXpHHB-c-Zl8DAcy0tUJ_tAOdumcr7FOV-vg", width: 1443, height: 811, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105433206931051786261\">ครัวอัปษร สาขาดินสอ</a>"] },
            { photoReference: "AWCwydjr7X4uM1ZpuwIa-F6h1Bbw-JSMgdCCGUk98yWhDna8Z1JldJzOevL_2C_Mqtgqvwz9v1vdLy4mh3xTsfQGWAhAsrSF6GEmm_ACaE9o7KKqHYAEt4al0DyyUvnl9dmPJ-jfUFYugabdDVu02mKpo7CjXgkDaIBW_3U-afAYOOzkzMt4-eza35vk-iVGa22sImJ6MsRp3yjCI92HX3mOjieRz_MfkS7WJkBW0PEQTiyZwKMgXYtjdqgnaR2mObB5DdQRU6l4fx7Fu-cgl1fR1I_utKi_1dlJxpviboP5RRrhUtLxSbSQ2Msz04iZ8wWt0Hlx0JnVfRTGiwIAk4w-3qguNnnu4nc5epTm-FUQ7EKtff4yvRqq0SHWj9PjGyVY-Cj3oz-MYlpiiwdqfqUvPumg5i0QwpNIqHgWpF020vxkLzc1tf2LGS7Hs2Ph223H", width: 2917, height: 3041, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111081558601681539528\">Nuchanart Saichompoo</a>"] },
            { photoReference: "AWCwydg0Hc3Bz7NqGqPO1exD7kD3K1YX9QgfVESRkt8LXHH19dv87plggqADgxK35-jP5INgBPkrTQTGVPptncgMzyriPwVBafe62uTsZYnv67V-wiH1eElwvjkknF5rvpLc74d7WHg8PYq3LpJk427BPqmVakOItZlrYvfzAA41QTgScRSzIyzavGIs0rJ_tFaGhmaaXTfE_R8MmK1RT4VCLp8oQlgpnymGzMhvgArqzAvNH9HMeW0ZJsZdfLslFJMKmw498M1ZbyAHe01mogB3VqItmvpEnlOCGKJe9dyd3e31RlnUFmzWXlKNzfkWDjopszXaZIH40TDN00PkcIuQIiwpkJ82IJogyis5722kvTrDcOCSedwnCCu_MN5SjifTCA_avP6bZhAVKDiDWyuXDndzv02TRwbgATgSvHSKvtmiHA", width: 1668, height: 2224, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105433206931051786261\">ครัวอัปษร สาขาดินสอ</a>"] },
            { photoReference: "AWCwydgPCCgtLGsLuffXcvY4-yCZoTXN3EuVoLxxpayw7_MjkSZzmhJxEVE3e3I8mbBq0PlDGLJfkf3kgVgLHI5Q4jTnme0bFc5W-BJ6wyzoTdYnt_ZnvI-x6N0vQmrLfNX2rzpPc1MaoFulmu0YhE0aDc7Zg5vOgDUO8UCp9uUZrR6sngfXOS0bVZlOmRcpK1NKSmCwRXOYO6fdK2FLDhmok2fGZkoW3JJ9YvcNW9gz3S6t-D2DC4rlbwlqBLMTnJZaeO9GxsjAGudO1CNH77_ATAwqp06INVlJXljIo7o9fuz7Td6Ywb-7hzR5d6C4CYXiNezZQ9pz6mqwaV9HnaGmnn1TSpZ3TLgeGPeVp6houLj6jByQ8yQ3v6LYiuI3sBVb8hpQNcRPxMiODpp9C6n4fxLYKavySmwzEvsC9M2m4hLlO5q0cRykOFQdKPnX4k5h", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117040029821474135465\">Jia T</a>"] }
        ],
        summary: "크루아압쏜 빠뚜피점 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["게살 오믈렛", "평점 4.9", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게살 오믈렛", items: [{ name: "대표 메뉴", price: "฿200~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100077371885500", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10243525738309895925", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A3%A8%EC%95%84+%EC%95%95%EC%86%90+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반 아이스": {
        photos: ["/images/bangkok/info/restaurants/baan-ice-bangkok.jpg"],
        placeId: "ChIJKaihd6yf4jARJboSwdnH7sw",
        placePhotos: [
            { photoReference: "AWCwydj6K7kNh-rVE0MRSKsYoY8tI2TJASsHylWrQFl0Jgy1J-RSSRg6zmaRtHHm4dikRsyVzP4K5shLqwYZlqlFLgzI1gELAVXEUWhpTuS1fkeEK77vyS_LKtmsF5lAvhGidEOWqTTkyMvxhed4FQlTjD212VPsIQWzggrgzCpbCsEU_IHMVUQpn0auQ1khQ9zqfhDGH9wcdNIyeJ-k8IDqwCMLReU5Eplc2T8zKvNBeFahl-h6ijVa2wniK2ezo_UM7tye-ERM9FWMmPOL3tz_v8Kcbhk2edhTYGe4H_q0KJ7oBcO-FIijNTGZxSEoDjQGjc4yYjBI3oOFakBd6eEw2rCaExrSmsa52I261dKcSEZ9FM3JpYsTpVooY9vtacSQzF-ATiZ-F4HQ8fNBsf8pcQPuGxUhuSGM8TLPAhqfCJ693KQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101115728147118850904\">James Lee</a>"] },
            { photoReference: "AWCwydisOMDFKyhj1JnVeFXmEVX0LcBY1QBR1486I-X8FS_yGAa1RagQScbhmaCKyU_NYGv045CIIsRE06VbxIfP9-ejXTvIy54y7zwE43y_4qU7G5S83PiqGV2sz6nt6UHjOvPG7VOkRDHEK3LM16MimAiZxsLWGXeA0Tqy-z6MXy4vDJoAdM7-fUeavN31-layqg56wuW5LaQOI-_u-HBeAkMKAX5F7kfPm5Qq7SeXr92f-9qxlnFKIAfsejhFrakS5jLEa8UFYZxZcSBKrVx8Qb7AsFlayRDuiy05Sgdz2c-SgqplmqukU-D2rksekXLdiyo49ddCs7J-YykfMpbIWLAJbYtc4kck2rW2RTis5NLgDQ1BbZEkj2uTNiMvg8CbgM8PJULiYxbIGU2WfPl3hIhQFKfQ7WhackWwkllyXnkc_ohygRsuMX-mQnEnr22O", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102276913818926610671\">Chaiyasit Suriyanusorn</a>"] },
            { photoReference: "AWCwydiNmBpHhQMJDFH_8bkOo_S3UbRy-1BmT-zeQbS94a1Hi3zSB9fAR9fOjtFQYTXcwC8jQMa2qhFx97q5IcEZb90W3bzVwRxjDOceSn0G8V3WlR42vRLXzCYQkk0ZDY0vmk9vr19Y2LSTNqKzL7ak_r1TagUCIJtPig1VrQHfzHFPe6htDGKtH__seNQ0fGc-dQLboEwzO7h4F3VgEJ4lrnmA2qdR2YVGPjtZQBUCMgU7RRSkT_oL0JtEO-8tk_1vnel-t83ZbqZ3QuhL5ouIXxk1UO37PQmEKZzQxdazfFdHGCRuJcHzzf_1YssVEvsR63vxDXCHEWiVlnuQrl_yymaHjZZtsRGXUIK4nZM2o6WRFMwVBkLdFXptQug_VB6TpaSQnvkfXx4sEwLSmsMNgJyQgmv90YiQ-OTsH_2d1zNs5W_vY484F6LCrPYqm_qN", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114192203851987606238\">Ayaka Amoro</a>"] },
            { photoReference: "AWCwydg7hTSv0H6-6Na0N_jD421CsSYEDRBjsZ9p1wqiB1hq7JmVC1SCV7_wWVGxXXhBVwV59QpUF9PQWdlZKjJQdQwS6krDgDfZDXs1MWCkZJFm6dpyPDQBPrRKORLLSEU8X2VCUcyj6mqq3x-2iDx6Gk42-FbRMojZCxPAhwVJmd7PXuIJIqQzjQ-u36e4Fe4HHrYxAuo83-1QS5hx3rjCkWnrmHO-fqhSp5l4gBygNzBnQqW4xI7Q2ZMBOz-x4WaWCKMwXW0Fyt17o5lE7uwEvrjyGzARfhS2guvoMJk2TkRcZnTxyh9GKqSUeSc_oWhaRv7XFj-3YHPkS0GZXHDhiSyV9ChW-RTi45xpMUA5GK0TL3-yXORc7SoJP-ulRn0j6qMFyNNCNRQIkd4mtUJ7Q99A8f_mZ19QeXRLSBqfaLxYS5uHv5NnbA8vFGsxFV9k", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109079435047275408772\">รุ่งศักดิ์ วงศ์สุวัฒน์</a>"] },
            { photoReference: "AWCwydiBVAT3-nAFzj6s7esfPv2LwD6zmjW4vK-6siFVkmjmOBWiufr3OQPgsIkKuD0npakdanFpK_y4BLvM1C7VdWVhB1QItpOzb_r-mBEvhWcHWrnXkhjI90RRPAaXs6uaR4KBy46TnZ20Ir_djxSqaytBLE8Z2xjxFub-qm7K5_oRyS9_6KDHBQUlMwG5MH5f73KNsuR8KdGGwqHJXuKJRa9qoMkFFM-haNRLI1TN0xqwMc2--3zWcLulDUL4Fmo8yDTpJUnrzTGU0MjgUu-D4fejmF1dIzGHTf_DIVY_WRFq8Gzj-HZ-xe-b-o-Kl5mGynT0vjfQ5oa3ciu9-U41UAIcNOcpxiKgSN0DAIG4VbHTOn4YgoScotEY2sc866HqebRQTGuhnc9EJOezMFqKrcY_FZlz4lJYxpiXoqUTaHJ-UW75d2ZvKxFW-RaHLyx2", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118260860705061661428\">สิวินีย์ สุนทะสะโร</a>"] }
        ],
        summary: "시암 파라곤에서 즐기는 진한 풍미의 남부식 커리 전문점",
        updatedAt: "2026-07-13",
        highlights: ["깊은 맛이 일품인 남부식 커리", "쇼핑몰 내 위치해 쾌적하고 편리한 접근성"],
        tips: ["시원한 에어컨 아래서 깔끔하게 식사하기 좋음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "남부식 커리", items: [{ name: "대표 메뉴", price: "฿200~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.baanice.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16683070918823210731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98+%EC%95%84%EC%9D%B4%EC%8A%A4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반 쏨땀 사톤": {
        photos: ["/images/bangkok/info/restaurants/baan-somtum-sathorn-bangkok.jpg"],
        placeId: "ChIJKyRwBs-Y4jARYGe3Dw40LoI",
        placePhotos: [
            { photoReference: "AWCwydglbtUNORqeDTaz0oVcw9vBHnH9Ts0N4rrto7n4jPth9XL-x8KubPRG7fbInPVtf1CnmEYe5hgL5VtIIGqvJU3kjgKPOHgfRgQoVFZpHLIHCLufY_ePPe7AoHLtIE-_CPBcgfAbpzbx-KtcgzAr6tke0RrDcue1vfhcavTSUtKYz9BTQMFSNsZAVSn3aTFk5sbdQWh2BGOA8u5YxHrf-ld6-jWa7O0CEMTSshkRcLSDLWhgyQWWKmwEPDtHqfWNsBUJKQdiws6YxNP2C3xxs1L4qYNuS4ryLu1C-IIwfVqnsiV5ur531zbTCR4pSdbRV74K4zEQgexKwwLtPS9kwbhKuia3uYXyei6PZ5UIGRMZnKjX9NIgFioEQ2L0tHblgi_e4tFIXTROoS6nxO-6KlB91CMIMoPPfb5vxhz8fi-aGg", width: 2880, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110095668820128357103\">บ้านส้มตํา สาขาสาทร</a>"] },
            { photoReference: "AWCwydi0C5pNcOpgqje84LsI_knB2ryb9yvNI-9dxiZBfRn920BDbwG0Tag4vpg6eML9QkalNwkz4DLGrfHZetx_PgIMKmiW9rsRF3bPPHNErLrxRbQ55a6PJIFP2-Z0geHMKsmZ1lRrjAdGtAyb_K2moS9A3zYi7S10OUUosIAadrYcY0i-3tb_nAdcev0wJsuVeYxBZmsdvU6D6QCC2HEku9oAxIGPe-XhvhCz4L9vPH2nseWBGjmk-p7t6yn0ppONQzQp5m0domnJhDDcObgD2mvXZXMJyZnCJqIZb_OZZm78QSC9IgySCDFsRyYy6I_8jv_11DqXaEntoUwV2w5ZBsZzLIi8CghmBpp4HjVxdI5tYYSMvwrvUSMTDp9lQtkomSZbWIGxUd7f5CGKGIZupX8XW1Ww9u-C8G3YlW5pd0C5EPHdAZrX4CuXqHzRJj8c", width: 816, height: 1056, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110095668820128357103\">บ้านส้มตํา สาขาสาทร</a>"] },
            { photoReference: "AWCwydioU_WfboKvqFTOD4xgWzt4p61Al4kTEEiPnc07emFYRBRhM2u8W9-B83JAyYyY6Xesn1itSW6P_RV-IvvBU5JeAogjlymp8aUspH9QC_qmwX_rzYn6DhrCTjkc-6_wL69OcgSzVDtcZEfPsZUhSjMVhjV_umqWhzNdRfhPw67NBs-BLmRvRAkhauqvEvAZmX4u0ADp4bnzHqTcvJsYCaMtLb0EMcQwtZerDFu97peMP0KaATulXE1urGkLGgqNQmiYuHnf24NT2mGOU8RYWZ5pH_VZ0poe6_2KdGENdnSqXQZdzJK-ItxoB0qmCdAt8AhkkWWp6lyn9EIVGeTzh37gVQvx3165UKVieJDnz1Kh5pXZMlz3f3jJXX7745jYove7g4AU-pT6pwANwypMBZE8xZ1TVL7m9cWbSClgZtE2gyC9-zN1t94klu2yxA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102764840304082540925\">Athikom Rawd-own</a>"] },
            { photoReference: "AWCwydhtDdTmrJOOZrY0RTm1XaRrcy12qmGKkRCRKNL5lrtM4oDGvpyo2oR61ZS_0LY75opKR1oF5sK3UesD6ETJPIDFAEsyk3eshRSAyVjsMtSNWSn2ARVQlcfcvE1ovOdnn8rhlohY6Bpxp35EygoFRuroGPGRGkK9YqoGzKLJE2gPTgHOpRvdjgyI6Ud6_bpG_CI3Hq-dg-2UNkSt2iYQxVsyBgDCjX08FgGAwwXt77-vc3vju3qVf_VUHWcbOrhsdGtTMK2dnL95-xOCN4Tl8MzaIOqg_IzJqJHLUlVXS3Zpwy3JBCcIac1XM14mgtJwIMmbsNIMzzTkNDHjJbEZOQ0kspTfR0-lnGsk6jtgrXE6mLKpVcd_JdHqnv68mBEt0lQO2jzxcXdasZlupeOwqHCEVOUcq4dgCy4zg33Me6xN1YIQ", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110095668820128357103\">บ้านส้มตํา สาขาสาทร</a>"] },
            { photoReference: "AWCwydh89JzFJMiuxSXYmauKdH0E46FifFFxbyeKjavJ6CR4rRYkFMWSvWwCmXS-sZypaubnB0lM68oH_OEjm7c2MLMSK6Vw38di9_oA57si2Rtp0k5p3kqaVUHZOeFh1w5o72y16FFQg8Rbv0sV1HIAJrpfSdpMOZhSzJPcwdQsY9CoZoXn9jqAhAIu_9THK_0vCUC9zrbPXKMI1NxTiqyn-KjAHnWF0bzwog89eq7SReSXv76UE9abHl1DjhS-eQefUuopuZONIKUXsRgmZVi-gGvIE8yHy4kn_9GJ5TGjNHkqxsTIaBMW0Ek1KGNB3_x-FpY2eyFvZA9JXwQHPjylKCHt-vnKONckkV9dmIYI-9IrSxMdZIvlE9YRIo3r4prxmyr_DI0fT3S3G-eoWi-1b6yU2GAqOkDtq5VxhszgjSdy5HMgfLnynVh_KsGm9mto", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107338879375782522111\">Yanee Sontirattanachai</a>"] }
        ],
        summary: "정통 쏨땀과 맛있는 구이 요리를 만날 수 있는 사톤 로컬 맛집",
        updatedAt: "2026-07-13",
        highlights: ["매콤새콤한 정통 쏨땀", "불향 가득한 다양한 구이 메뉴"],
        tips: ["현지 분위기를 제대로 느끼고 싶을 때 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "쏨땀·구이", items: [{ name: "대표 메뉴", price: "฿150~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.baansomtum.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9380492308857186144", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98+%EC%8F%A8%EB%95%80+%EC%82%AC%ED%86%A4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롱롯": {
        photos: ["/images/bangkok/info/restaurants/rongros-bangkok.jpg"],
        placeId: "ChIJjYPUa8GZ4jARi9fgigQOiR8",
        placePhotos: [
            { photoReference: "AWCwydijgn25toY4g6ef3AfYCXhl50GJIeT5GtiSap9Ka71FizHUR-FLHeHbqdA7khl8zKl1RhpaioXemCet32qHwuBm9I-DRuWBs0C33K5W2qvVc2wrnQlS-EEdpEaq0cPSs5lQ90qCwmwwSNpXS7tJxhh7ZDkYK-nvisPrB-6kuwETq-Nh11qeuAZUk7O2SGTgwXJ61x0zg_a_bpYgWR6B9j9UI1yLjkmye5LLHpHB2xL5OD-uOvCvlUzRJ0bZ4qv1akR_W-98o4Wkau8SSjbcW4uR5vX3Q1M77swLzmFp7o43Lx0VUa5sRN2XiEsMK99u4Tbj7anXISYs_-0CyafQRHiudUAXisM0MmGLa8tcJdQVQSk-AzG29yOZ7wy96Do6qztGCmu0Gi-y28R2adkpgwXzyllev-PQTLLFZrmYNoKtYg0", width: 1568, height: 1046, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102289880304734867202\">โรงรส</a>"] },
            { photoReference: "AWCwydjs9Qn6Tz9YODD8RVnGFV285DBSINyH7TScyA43m2vGgRiPYWv1bfq7sl9XWU_fefLR10qAUx16aYPZpB_bcHI0U84ei84_aazRFPf_ISLEiyeOIF48rm-PWXa44kfzt9X5Zy9HB_zE7LdiB4ohFyuTSzd_EcrX-6DrqcqylCV6KDBIUJixD997faLZxdyWNZV5WMWudj7qnH8NRS3ToxjEunSO6An2ojfne73qUZehxY4ZSZ-SWv6dNHI-5BZx59ivGbZ3gUDnLiy0F3JzytipbDWbnsAJ1PmZBXtLRC48LFnlvu-EQPfbn82Ya78k2Mme3FF3hTwSImGJIoJQNyYzjr57w7vY6SWDk6WBXqsPgoqLVz9WbxQeDH9tCTBNRPt8KOR2XdipUE0qkoZodAkMUJXENiO6XndR5SiobSbaXDTV1DKCOUYviu2OGVtt", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102289880304734867202\">โรงรส</a>"] },
            { photoReference: "AWCwydgjm2XkU-f5-RUyCgAEXfvFY-P-GLRifjCigcS-XJYSOSvk0ZCkO6oCfBetWvPmg5R06H4N4V40u5f2QGhBhSknz2Uzkz86dybLILC30YD8Y83HcijWfT575unOp3N9m94bRNSEnMCOl254w9Fdg_B71L20ySkUSNZdVITvHHBxp18EnlskNMI5M5BEEbsyuybLbpIUGP5uatCkEmhP8T2JYzKrBafgqMc4O74O-Xbw4upJCZ6gw5mKVBzGkFYbHa5VKKz82bFCNfcJjLH792SYH5PY7E98-XznqXKaqV5yg6OWEM0PyHfD0bwHbnGYbuiVdcgZvruuSfoJLFgp6ZBo_-yyEZdJcBDN-9v9KknFuGiv45XEmcrAiKUuL_eRemlyTkCCFTlI1v97GWh7jqDJSQpkqREWuAArqoI_xfafpfo_D3rdnYtrT70aECV9", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107715376984553565306\">MKO LDN</a>"] },
            { photoReference: "AWCwydgCHpx-gnvKpJqflgecHr1_t3jS5-9P6oEyaDuS5fhH4HMY9jMU1RRQc4jeg8VEJS2-4OMZtgUi8Ynya3bS7Klo2Jy2YNnKpfmqLHJkaBON4tpUT2VWGzWhP4XzsCoXhigRJSWTJV5cdVFNR8d0rUa4mnqSKQvdPBBSSm1rCVvWJwkQle3UdJY69g37z9P28l1dMiSEUwalTbZdvawJ6mH8Dd60xkiyQWowe2qP92_r684BLaV1V6WS6UaQDOgY9Hn07w7ZbqkHITHuSI1aAWv-63A0qyRPMmai8_hec5LlZS5vwGbgCWE-EFK08eileE7ZkwPWsH_tgYy_3laz4xQm3AsgnsfseF_73yPAOUum7gLArGp0wfjBT8AFvhysORQwtCwVkJ1v4qB6S0LdIpSahwP387J3aleGCPpTv2-UkfxAt7hmYTvIWzaIHT60", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104474874771588854035\">Sandrine Luong</a>"] },
            { photoReference: "AWCwydjuxSgCwTI-NHkr_E40Y211QbGNTedj8SESIRPDli5peWY0OVS6uoZl8Z4CwPJEN8ccIZ2QngtdlSONBRE4p27CnJGyHK2FD2k2dawyaeJjghyGpUBbEd-GER1ssR_4ud8OCuqdYwGIIqV53i8xwxnEwO9_optg4asC9OPgItrpwqLLymk0Zghix4KT5O9Z4aS4AVTf_OXE2pSb9CG25SMYEpLB087gnEWcl5xtevkpSUdY1ZpYkxKFPAOR_UV1-rXucb3Uxv3cfLTLM2zLC6d3Z1va_93VL3okna1uyFom4Zvq-74h6g_cIWVRErfLZCHk3g6sThLaPwn1jbyzFFbBFNm4Rqxk73L0zS-FWf8wGsa0KI28Y7BY81r71M0Pr5s-RfNKzctOTg88-tH3aM9W4dvkoryrabULk7hSkM-Rk99LSuZi3_kJwjimtugN", width: 1108, height: 1385, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102289880304734867202\">โรงรส</a>"] }
        ],
        summary: "왓아룬의 환상적인 전망을 바라보며 식사하는 뷰 맛집",
        updatedAt: "2026-07-13",
        highlights: ["낭만적인 왓아룬 파노라마 뷰", "분위기 있는 다이닝 경험"],
        tips: ["창가 자리는 예약 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "왓아룬 뷰 다이닝", items: [{ name: "대표 메뉴", price: "฿500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 12:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://linktr.ee/RONGROS_bkk", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2272362899657774987", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%B1%EB%A1%AF+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블루 엘리펀트 방콕": {
        photos: ["/images/bangkok/info/restaurants/blue-elephant-bangkok.jpg"],
        placeId: "ChIJS7aN2c6Y4jARp2YilGc2Lg0",
        placePhotos: [
            { photoReference: "AWCwydiqx3z5Rs3h9_zSLwu582H1V8kbLboKlzAIYfYK3dzfwqI3sp3Qg5QlWuZ9zkK1WPR03U7K4qI3kufsAavDw9Dm4BiZE2snfLxLLnZFUBhxTqpTv0qbDcabF-jPlG9Lla4xcxtUywcNlo_P93qYZfXMVVtk-gMa-WGa3vQpltuZaXxlLeuVraeKkcjdYvZpAhUy2YhD3b3y_G9f9r-DDXTqvuC2KqhEudvsH0gi_E54u85VSMi4-nA228hZOZSLLLKeulR0FN_Mk2_gaLX2M2gbagugtYuF7KRILboBbkYoLbtkI1JW94V3ycPCjVqAGTBL5mN3Rv1bNLX4ebymfpp15bbDGB09mUfdhG96wF7BPF1kAfu7j6rRs32HBgVKFVriO1q2YcPoTowjab7Rv6GobuAtYVX0-XcEQY3xwCo", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115056574168084474963\">Blue Elephant Bangkok Sathorn Cooking School &amp; Restaurant</a>"] },
            { photoReference: "AWCwydhBB4_zQoEFJTGnrksMxtp6TO_3c-FYOwxGChDuoI9a7GgFYEmNNz0l4mUjrv2FpAasg-TAztZDx6YykbxK7PhbBQ44NhusGsVVfhstYzdjEpKip3TYxV9qi2Q8j4Zqm3xH7sBK_R0mENOJHQBkUi-6tv3lyQrXDXaAS0FqD0ATKV77MntONFk39r3SrPsII1zDdjVN5pjInQOtUeRgqlT9lNmjSMSIeC5BxINbT8YrGwGHE3HR0BI8IZzzLioP2__oFWDKnWVniLDfZOKy_HhfZckrwNCzMitAHirpDL1ZFKr-RXKcTAgtuRy1dMX0_KuixCjPubXdPi48yE73XnIzvHhWBuBr0pBgSecBECfV2Psz_dzGIiSDgJALe-osSCoHBM_s2odDI50ZT8T-y7Pc6wefCzbREeYfG7NEXmNRozMWar_onS10oYEflc9S", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102612487279831622425\">Prit Swami</a>"] },
            { photoReference: "AWCwydhxagibjplTrrS1QkYTXnoH8_c_qIyCetg4RMmFv_A6CHfz_G62Nahfy0LopvUURe9B9rUM4WSFzgARfoRE4NPdj7qoJQaIZqBgCcIPfjf4inLzcSOuJF_YoYEYY_HnWrQqgBrRDoxcwqnF67DfBdVm7hSDLqkVwlITmdRI68PaR_XcGwrUP9vJOMlBI0f5x9dQWIbpmgNPerYl64UEWTBEdP9-edLPZ5uMuREOXykBeFHaMrQlaXfzurc6BiYgqewxdKLstW6Ayvbj5vVlaWNS1tPu-ShtanPqoJGp8bJ5-c3Kg8CklXHyulZRymNa-up7jwMprIJfktEL6mvwuiG7McwjAv7FlEs8RrCjroR_DkUq8WsLB8li9OPKitG_zxnLcrFEFCtWAHof6wdabThv3JrOkuKetP5L7AkKkIUj5RkcTGuj0xLPpXLfdA", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115056574168084474963\">Blue Elephant Bangkok Sathorn Cooking School &amp; Restaurant</a>"] },
            { photoReference: "AWCwydgwmo1LfqkHlVDsLYYwE9_Mv-A5JT4LOQ9udb1tmsK7MXgz6vueHdYEuXYaMmrlxFsiFOwrC2mgURSkvwUCDFyURjS669cfAiHFClzIqdKFWdlUmedoV1dYDP7LS8tQcxnbBOY3kE5wvAEHfgGa9H53IXR_zj7Sa8tQIkM2o32wdzywsEnxUswUqSAAWZ0w0YlMdHJ1hqsqpn_rsRUCjQogYB5KkmOo6iEhFdj513EdxkZq92iSUoxoT71bocI15hMvsDDBVcZctc_bW5KdubyKQEMo1WH_8Sb5ZLBqpbs7ywzpmeeM16wnEin76sRcNLiOEJT5ewxQJbIS7sZLsaWpGU9Jzqnyvx3jvIl4yRfWPw2QnlQ1JyGsL2PYz0NpUyO0jalTnLsInMFlDxDoljmukXs0s4l7L6pHCe6ax82TafY52ubgoKWxrYel3w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103585597775419413642\">Katrina Dingley</a>"] },
            { photoReference: "AWCwydihsPxbtP8v8p9qbmjZFu9wKqfIDdi-4Uj5cohNALWANmue9-KQJH9KE0F0Sd_o5DX--e2jpq--m9j38P08cJhf0TLThc4AVWLHiSt0QVKGU8AepuBix9_RPFoP1RHV5s_K1-Nhf4WKWwSgMRb5Etsd5l1m0rj7ghXO3pkG-rPvYxRXtYSim4xVAIWjKjPkqABGDnwmriG8rNew6Hjxw3LOcccD7lhRqchsxOwTpqe-3lmvUeKCoSCXa2pIazvVfUTIwWVKgs9xCKZ_VdeBhfutyok660_iQqAm-Hl5pQMB1f3Xn5tIZzVredD1vX6DRO4HBbGY9hIvmeXUxyWl2oIMRbhecf-32aPrNYOEZjBOGhY8jt67MDxV63073-K5rCvphOpNDhq22BQfbFz3nPAtMfpvbaozHPsc-9rba49ZoCJDfgJrCpIfIvSLPg", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114600779321283404810\">Jefinis Lin</a>"] }
        ],
        summary: "품격 있는 로열 타이 퀴진을 경험할 수 있는 고급 레스토랑입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로열 타이 전통 요리", "고급스러운 분위기"],
        tips: ["특별한 날 기념일 식사 장소로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로열 타이 퀴진", items: [{ name: "대표 메뉴", price: "฿1,000~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.blueelephant.com/bangkok", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=949756389916567207", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8+%EC%97%98%EB%A6%AC%ED%8E%80%ED%8A%B8+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "Err 어반 러스틱 타이": {
        photos: ["/images/bangkok/info/restaurants/err-urban-rustic-thai-bangkok.jpg"],
        placeId: "ChIJ67MqRQSZ4jARLVzfkPJOWRg",
        placePhotos: [
            { photoReference: "AWCwydgeJnoYk42TIMAMeSFes7MRzkiWS6T9iiPGAV7GlMn9WtjmdOI4jglhelKtRSiJzvrhadrwJzTTtfgyUgOMvmAKPxP1ZWy84vL7GS1o9WSuQm3f7Ux4lw9JPz9hRz6TlnqH_-OtkCAHnyGSugcpBbWxBSin28ytHAR30ngesfb-snk4RjcFW60CdxOhR2_f7knAwGNKg059a-EIKbrLFc7pLZRyB5qpR42bfd5pdm6yWrHZm4vq4xkT6sweLLpysxKXQsx3vwWdLjcaljSK_UWQs85F0g7gWz5fI4U3FnFmWP_H7B0yTCZ7Pzg3otThJjEYZuZMV2HWYGXATwjETUCNqMPsNkn-Mg7TbGszJxiUwg5vb_Qa_9Fdhq9eRlMZe44g7VTV1w7z5DCKokoDKnKSFnmQtVkJZE3_IBd9IaZkZHObC8H3EuLc_9O2nBXu", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117510200544565314972\">Err Urban Rustic Thai</a>"] },
            { photoReference: "AWCwydh3tJA4mDa4gjSlaPkh_cX-6Rs-Q3jd7RcDo1pPEuciu_v1XCmMpGOKCZCkpsIXNDzmSFQlyKO0IYBuXfQ6hAQAgChimXHfFVjbGrfdHL4v9qNyKaXZDFnDR_c20JrlfRRlm2cF_3fK1oqCJyfIyI63YpOw435lZ5ndBVS5yznyV6wTHLuA92mlgcs12JfFryBbWXBHQjUDkk-xt76jAqFvk4wcgyDApe409RDouOTQ2d8yqYJ3166g-vDSe6Cq8diTgwDhp_ThMcIMhvpMmLkMgZ0UDhyKpHYS_McX757ZR-KL1xLDnix4Yi4CNJEI6AGJGmsFX1btx_Bsy302V7XwT9j-pIVVVhjc5ZfGFLSQy0q3nCb2Z49pZfO9jblXigbWrK3Q4ekY8YUEdsZJGhCDaST0RAPLjpNpZCw9a1zyCw", width: 1500, height: 1001, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117510200544565314972\">Err Urban Rustic Thai</a>"] },
            { photoReference: "AWCwydidusSO12xDe08gIrGShEy1ZUcscOwm560br8h3y1t2BNjjSXBiV6kR0aiEQFyfBXYhEynkERJDO-ri9cZax0CuHbZXdcY7FlEwyYmAj7zCX5PHGUu-8mT_msdSrTTyWOpy0BDPiReEEw5DwlZ9tUAsmBiAUWtPsVhVU-uWOPf1ZhGcrMNkxRwKkGn90eejZE1HwRb7p_X-FIBkGyOJmU6-FCbtIZ-wSpRaG3AWLAY2QTJTfwQ1Cr8l3ITMTVVKug1qTDjrKXTdlXu-UoxRiQwQWO2RewUryahMXLscnxpIZYKo1d7dS0CFxDVMEZPuSfc3tRr683VghT9VWdK9SCGZjO-yTUTFXh5hzitGgL8DUbNQMSSjZNVK5Zmt_hw3lMu71ai2VNGPsvhXfQ1XZmohUAqe4y_dM72LIoLL7aI8NA9wRZEAmVEz-FWyyTq0", width: 4032, height: 3023, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114969742561937842250\">ธีรินทร์ ลาภอุดมพันธ์</a>"] },
            { photoReference: "AWCwydh3C8zmKcPd3sITwNoUui7eAllvtPtx368EglwaoK8M34u1uz_akGKRzMYXf4EsRf8VwayXaa_LsxCOggqUVW-M-4Ts01y0tX5bRJuKRscD7-G9Um47ZDEN-4l3mPWyKR1o-_Q0EbgcQCFLK_uwPXFg8ETiO2AF2wONGwFXyZtyFw761X67RTv3zhLTmmkeeUsyjGkwUM5f4cLVN32GnEqKro2RdxVJlJl0mA_0kXhoUPZfCOrUY6XY9B3pRhWF-5VWgNAvNzJvE5c3VEn4JVNmHp_vslQIZTL-wRa9Njx4imbMj5NvOvs88AC8avdfi9tvQTC1_omtpcFo-b4nk_NMaNUUgXk2izYSwUrp8oz0vB4sC0gee4rUu0XQCcLob0Di7VYHzny3Z_78hC6pmUF8dro3BlrtaDO3dHcDui6ILfJlDQu81hJ4IUZ2c_f2", width: 3203, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117510200544565314972\">Err Urban Rustic Thai</a>"] },
            { photoReference: "AWCwydhP71XXtVUf6bgBPQSiBQXxh9X-qW64ivjJQnuMaV_LP7NyWIJGsMLN2cYC2BAIatbeW21_SGf7UBHfa7QDf0akBcfzMPPuSBD1XD1XOagugA9JHnrDoRmBCAr90MEi6CFQ2e775dFy5xW2cnBOnBuZW7nuV9p30k-bK2DEOodDqhJ_disucCVp127M2OyGT-bdA_ooCMSZG8o_HeqztoEGE4ShAL52Pzdit3kwV7RxzhTk01eLAYqqqkXxTO1GbLQWtg0zLEqvd-GRo9fmM-0bV5fAGxQDuyuShugDnBL1SqAQJotIV2MrH0DtH0YUuc5r1I-gaP7KijGe1noxy8Ykga1Q0MgRaXbRlMcjijn6kU7BrdZ3Igl3muCscOJfTlnf01-UIRsvo76eBl5ZKVYY_wVqP4XIoHOtSTvLVKKo10RNM9Z4bFNtGP8ApfmZ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113142179490594400841\">fairyfood_diary</a>"] }
        ],
        summary: "캐주얼하고 힙한 분위기에서 즐기는 트렌디한 타이 다이닝입니다.",
        updatedAt: "2026-07-13",
        highlights: ["캐주얼한 타이 다이닝", "세련된 인테리어"],
        tips: ["친구들과 가볍게 맥주 한잔하며 식사하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "캐주얼 타이 다이닝", items: [{ name: "대표 메뉴", price: "฿300~1,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.errurbanrusticthai.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1754520333557128237", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Err+%EC%96%B4%EB%B0%98+%EB%9F%AC%EC%8A%A4%ED%8B%B1+%ED%83%80%EC%9D%B4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반 카니타 수쿰윗": {
        photos: ["/images/bangkok/info/restaurants/baan-khanitha-sukhumvit-bangkok.jpg"],
        placeId: "ChIJq80duOSe4jAR1yT4-c-xadk",
        placePhotos: [
            { photoReference: "AWCwydhEIRopRWwsIzJYC5SBPPkKvVuNErCr8gsPk1NMkrau5wktdI2LJ23jqikz6hjspUlaiiuc4mou1nufrhiKZiC3d7wf5EC26XiL9aNguROFESv2JP82cAzS4mVboCFDBQXtGG7lTbhbNEmC3qpvrUThw5IcfyGfagZ50JXy5UaRkbvsvX1UFnw1UBFTf4mR-BXWE7TiPyx4VWRP9OJp_dfEdD7a4YJR_W-0yzvmCzpwvqxlVtzxAZzPQrFFyt8SRltEOPoh0efhCmYQa1MR6ozf4PzOlTVl85e5Y5JBgRQ8Gcfz5-V8D93_eYz59l0-uSCpLe_08cI5i38iXUqJPRhNSQGBUslozYaJ6vywJS3L11ozAJZsOqFGw6GB5ISxgJ0hgW9ypRdf_2VZtJ6zzW5xbbzZRGLm9HCIXljJooQJmg-q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106584626221415764426\">Baan Khanitha Thai Cuisine</a>"] },
            { photoReference: "AWCwydg9AWYTKuiFv7EeNx2BVFAkn5fwDRNOUkV4Pvfg6oLTNMhQB5VcUO3M8smE7wBFkh-DD-SdLXQMnNYurMVJd4Yi4LqivAe9BZz69AkoIpaNcNWYT75aRDokO06DOm5SBoazDLsS-6HXq_o-EVvwWcm8OA2M1y34rhU1m_ux3ifgtyd99RJJTEcNxuSyWtEvVXnXJN7Ix3zoVUWso6JByuE_TVpoNNJON-TF4NM9O8BcgMaCs0har_oH-pCaucFaxQJamulNw_nnmqiRrlWVmtjcFBUKzjFBl2WT5GuFOOZFXHxZt-GERg8Yo4oVVdgxXrEXMuYssmMu9hWZusdpexbH-j3zQOBSwPAEaxTRkV2ln7w8_v_YgYPXF9r-qsaxhXEGAfB6lGJkhHp_pL3aX7DXmiV8DFFp-PGF798BBqghCitMuihAzB4zPAAqOEE9", width: 2364, height: 1773, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101122077014854930510\">Aikidol Pan</a>"] },
            { photoReference: "AWCwydgaonlbMhKxKCa9j1nVmU6pctfJG1twQhEdSm5B_vqWcfSz3XLQYr2jnIgN4MTkygH7-zrHkITwkTg7dJ2bPlTQvDyTOwFWo4aELCRwUwuza8PJFaErJ7MOsuCGD1jc1moxCagN9lAxL2o4NtG5eAL3sDL9Z2gbeMnLmKkdVUEA4oOoIlCBpFneRiaCTLgp1G-rIK5Q9MF17fzOgFfMQM5mJ43UCLXWZ6hPFzjHRWJADFstls5UINM6tPdQM7bKHPFHgwguVctUcFhe1Jzpv8TYgRiPO3TjdYCR1b7wGYPFXYbsT9c3zjvAt5EVa5f0zia20bJQH6FubJ2nmVG-u4p0YbbBiTGeza97xDN1EtDX6bnMTCmQNN3hBZUv0eq31P7rX-rI8uoIpNU6n9mejjKUnIRHZvFpTD6W2878ey7zf_Pw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110470930782063105431\">Jay&#39;s Choice</a>"] },
            { photoReference: "AWCwydh5fI7TSjqCOi0VKOL6F5DKgeMLoNvLmg4UJ_yWopcGtHeGjVEJW_kcsaaVS-A-2FOA8JyKWJY2Wjsr9ty9CQmTl7bO56KOB7pHQ9fcXieLNvzA7W0dpcb04RAWgiMUowwEYnHrQ_xLZjHwvngtNRJ4NUeVbkSoBnlF4Kcz6sj4qH0C5gFHUojPzFHY8lr3JdWwR2YBQUxPYFfOqE5l6XBJAtE0B0mgVVlGhdjfN7LCgjjvfkfA2BkEIs4LuvYQMKJPpmfNR8CdS5gcHJkw7EFvHqICNA7kIEmaPRNEU8B8nUqBhlKYUjBgb3C24uvhfsRV_TXZB5tlthe79iUK9z2Iigs-uthqD0MN0gfeS7fpd2OEqqhAFOI93rdfG8xKOxhZKFFQwFvFn7xjl2kpIze70TLygC-sLJaBj3o8pq_7KmyLJWkaqmKzKmLOtUqC", width: 2364, height: 1773, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101122077014854930510\">Aikidol Pan</a>"] },
            { photoReference: "AWCwydhqA6ITaJvKCGJaiSiYesMZI0ab6qsl2faiiv3W2WcZF7gH5OFGOIseByFaQ0uyyP47KGVLtgjZ9ac9FR4XJzQWCs1Uw7oMUelcr4TrykTAfDnAgpr1_wkAczJt282PJKjvJZ5povKWPA1CsE3ozmrtEsx4jnMvIo5pMXpEEWRPTkcB1XlaGoC56SXDZHyUUjsLDkAbYiR_mG-t8oNcwOIWnRpEgVDUAcRV8PhoBkK-TUe_VZacZ72wNBhYaZgbF-FSZwTCbBIC_53tWopCwWevkbjJDv2mkBz8NJ2MmV2pitHUwGTwcxJeapDY36S5ZBcEKVtPOxUvUw_Zsy3bmIbpk0jMBKajG0M3ls4dWYTUnWT14rwTNdBp-NflAKJ1r1WJNe5f5DhusawKYLVweCh8IO3TbQrZi09STisLOo7pGmRdtnqhOKBgLGbM2OAx", width: 2364, height: 1773, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101122077014854930510\">Aikidol Pan</a>"] }
        ],
        summary: "정통 태국 요리의 진수를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["정통 태국 레시피", "깊은 풍미의 요리"],
        tips: ["수쿰윗 지역에서 정갈한 한 끼를 원할 때 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "정통 태국 요리", items: [{ name: "대표 메뉴", price: "฿500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15666248285595116759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98+%EC%B9%B4%EB%8B%88%ED%83%80+%EC%88%98%EC%BF%B0%EC%9C%97+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수파니가 이팅룸 통로": {
        photos: ["/images/bangkok/info/restaurants/supanniga-eating-room-thonglor-bangkok.jpg"],
        placeId: "ChIJYSgxk6yf4jAROxN8pCQzqJA",
        placePhotos: [
            { photoReference: "AWCwydi2LeP1dBuxmXGjsD2vABudNbVfnFs8lxSuquoKsnlrBAqK05iP9KeeBuumcsAERcoDnlaQxs1vKDyrBb9V4ZidbRjEzSFYz2CDQ2vmAnLvSsLQrN8eNg0YDXHLVILUqTF0bGGC95X8ssYh3zASqkDYPXjAx356AK1tAd-9FoDH0-ZvsUv7eLocSHzAAjDOW8LpoPQ9PxB7TCeis-1IY-X50ze-62lKIJP74zkw6Mz8z24Q3UOIIdAGzZVLiBeD_NRAnbjRqQlfgaCb4b2f_2MzSAvPnChW7K8xcS1ih9FJtv8xcUbIOOMizETYF-0qemiZ3S_t6E4HpfozzYzlGGOL31pTunPREYdE1p2H_CcY5A6ZAZclqap8gUnVNX2rDu7a7ccvlOsIPMBb2gy_NXcXM4KqDvPks4k6M78l6w0lZ7s", width: 3941, height: 2956, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114815317637157919382\">Supanniga Eating Room, Thonglor : ห้องทานข้าวสุพรรณิการ์ ทองหล่อ</a>"] },
            { photoReference: "AWCwydhsbOIJFF4Dduo21kil3Bm_sQWUjEsQ7iQpQVb0LOc0XmdRTirXuNSetrHj6-VmBKtZfVr6WRQnvAIucq9DM54xowl_fAtvj0NynAp1NlsbuFeOQB-pcZOKZGKzN1Mfhj8whcsV6fsva8vc5el3cxetLzWPtdl8Me2eX1N5eExLJHuaNJWzjz-1nY-Mm46nZWQCdHJJu6GlNboTQcmLL0YqH2gA3i9bNqUdjwwgCZ1UlU_eTUiyVUSyXaNj4j0YCXsNT973F0LYhamGl1ioy_NniBNFJqOah6g38r_bXQPfu6frmOeiLZOegoSvNtjN768O_-B9r68fNL6F63OiWcU3XTPxuBkAgm8pbUp_5KX-TMRX0nxTYnyFMfC1yEQq-wQ8OrpF3MkM93JEGMcDgFqzqwtOv9H02ASFMP9A5WsqbIpVBt_QY3ipCX6xfuYn", width: 1152, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114815317637157919382\">Supanniga Eating Room, Thonglor : ห้องทานข้าวสุพรรณิการ์ ทองหล่อ</a>"] },
            { photoReference: "AWCwydjXKOsBB6Ih2I9W_4WlqA3XV-icLlvvSLP2zJ5pbZ9U4MOX9fozpUp-eQr_GFSKg3UsUOz23pBLmDnQU1OwosnuNl9Tc88U2yvOeS7ZvXJy52ufYtnV1R_UFqRfSu56dYyb71u3tCTNGDR3UHUhFCooHO9Q54ScLvdBetY6Z-vjz6P-D1O6vOUwfmtJZMoeZxz00hHkEhF-oGtaZeJcLRiNtCFVjw0j68ZzjJZQ-YXOiCGEk3Txo3Iw_8WWoizFeDglk64U2X0c7g-cbtHJz_SOu48QOep8GM8khffk4Jspgi4YdO21vDX2opjPSaQVOuTT4aJYeJ8Ghabf7KOLz0o9hbDQh5mc-9gDJyf7bQ9rw3ooYpDy_PhuzE9ObxAr5QkAHpwIHCSqp_4mItwLF_ZyaKXqF2mOzuqrU4oLcP6_w_4LoyU94YXRycI_AErq", width: 1152, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114815317637157919382\">Supanniga Eating Room, Thonglor : ห้องทานข้าวสุพรรณิการ์ ทองหล่อ</a>"] },
            { photoReference: "AWCwydiGOUrHHkgecAfxJUDgGYtYxTEhYO1N0aZuQf4eWVMAiPUHCfuB2FXhShUBYEKRdMxU1RpJ1F3QiKC81guOljIAp8aJ1Zay7CgubM4GxH0aUbLt1I53fhSm3snE1cyhEaK6HvQBHFbw4LRjd2Ind6r_R3iJH5SI32OqwmOXB9pq2OZvTYJmlJh8ajnuatk55KQdIeDSXoBri3_x0-fYtgtLdxEGW2Z5T4mAisV7Kf3PVLQxSwIgZa9-AlNXxpITQ7yQ7M3LbydiCHRfeVeTyv0V8wDy8yBFadu30twcjok1vUQ9IA8paIZa9M-mVqdue1a5pBaIlfcqf_UPvGJlIHOS_tuLCKId0MPql1JTVbS2gfSltFQn5bRjLWwd-jogxPNBFax13h-ynj3cn77OUgw4FC8xsM0hkwWwe9oSXg4KO7dQhMYEy8c5sj105FdX", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111200528111578793734\">S. A</a>"] },
            { photoReference: "AWCwydjRrP5CvwnSA2ZIH81_Hzxd4PacIPe795W4YniguH-YefoHIn_lPWLjZ7ks8tXCnE5hiKJHPXLSGgxc1EvfCeBXkp958XAjkjZU2B51rAOZ6LKcqi1rmUupljTuoEY-RFSBYAIlFMeedzfTNO0pPiRqX_Vg_SO-IzUkaTRJXb2gmETuw6EgZUKdQObbeBbNbIgQH3yMZdQzHO3xUMrArrfpTXxqbq6Y_4TiuX7K-NUo4LR5GIVGn1_Kaxo8Qz_qpsnBiE0hVcdSBdWqO1l9XZAA2-UX2IrmNjmAetoLtcE8U07hut7wA-YJxVSuUTsGqSahewG7BVk8v7AhzLWQniNavFxu2wJGivPMzjw8E6VhMH6NnSHtmW3USpbXHjfQAarpNzqOucXNINFeJ8XuYhIEwjH55Lna2m-ke45fJgWd4svvneyL3d-ZRFTlwQ", width: 1152, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114815317637157919382\">Supanniga Eating Room, Thonglor : ห้องทานข้าวสุพรรณิการ์ ทองหล่อ</a>"] }
        ],
        summary: "통로에서 즐기는 품격 있는 태국 가정식 맛집",
        updatedAt: "2026-07-13",
        highlights: ["정갈한 태국 전통 레시피", "세련되고 고급스러운 다이닝 분위기"],
        tips: ["분위기가 좋아 데이트나 가족 식사 장소로 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "태국 가정식", items: [{ name: "대표 메뉴", price: "฿300~1,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.supannigaeatingroom.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10423637570020447035", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%ED%8C%8C%EB%8B%88%EA%B0%80+%EC%9D%B4%ED%8C%85%EB%A3%B8+%ED%86%B5%EB%A1%9C+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나이몽 허이텃": {
        photos: ["/images/bangkok/info/restaurants/nai-mong-hoi-thod-bangkok.jpg"],
        placeId: "ChIJb73JxSOZ4jARHgl4zhyCrLE",
        placePhotos: [
            { photoReference: "AWCwydiYO2U88ZUk2O8cEYx2dInkf-7ra93iPSs8AtmmfgHdZ1gaStA4cnkrIOJW6j-8Eu6ZW9Tbyf7Awe1dr2whBOcNOzANetnFF_MiYMq_ki861_6JuLsVxP6gt1gOPjpl3nu6AdsEFpNIhG1Nli820AATeDj99hNb9WujzsAsHanmuetg4aPUHcH1MjoQ1r1EDjfUrSzSW1keY0Cq_zkoYPvCOcUS7-dba6c5dySuDXJOsN-zsZLY90CJUuQRpOiJay7Avj9cTnqW_ui6dprJZse6b989Rj12_QXYLEphpzKCXLR8fuJH6weAI8RCfGFNgk8mVWq750HSBFRfugsN7o4HaBVEqYgiSKVdPp764dA8NEX8gk6eEEz7lHcPvG80Sh3-HX5xlfLQfjwC6Y4BYI2vQegpvUlfFdPcUFYRtFRVgQjM", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112333755961307311348\">Nai Mong Hoi Thod</a>"] },
            { photoReference: "AWCwydgoDXrH6inwvdFoU2qEpzNKLyrIXDmCuDXXKW7aifLF8DtBZ_0I9Y6PfirdDU8Sq4GEkKdnCdRFK1LYu50ttvYBoMcTxjmsKEIo2IduR8tFzzL6smRIJ35TvwYG_lvMngFuJxw8KjzbUd0tfaSxjgHEeR9CltTUZWowC3xpfJEgE4pS6bBTQPt6OLpb2UuqlUTxjpLGSt9oIFyetJu3s5vjOcR0_Bgra6R_6muPPKxIRyTEcWdMzB5Zd_URSbOAgSxaXrWWjPMlAOEMYG6JlYr4E_1fmU6t5PGut0OO4akr1bpPUiHkCs5D0jAQl3PfgqZ5EmQe54_Dr4wcfJWIDOe6nD00RSypKsMWGYhtfJCqX0dyzhI75GO_nckA2hILc_biRmF5j2qx79wVdvBQne2_0yV7OmwUyEW55vKs62Wosg", width: 4192, height: 3144, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112333755961307311348\">Nai Mong Hoi Thod</a>"] },
            { photoReference: "AWCwydg8YtYWU45o0VPWiCEMaj9mlz4Z_8-av6AZvHpNcUcPD4rvE_4sgjLJbISAyAK_nm2gTCpTDP71daCfQXbd2gIyb1A3St05uNttuoC8ddGvBCL-7RT9HT_XgHk2qQANtM9pp7jdBo256udDEKlcogA-SKmEtoAs-1RSxkwrcu-rYCEB1goeFyKrHFQxL--7krP9QeR6-O2jgjfdPOIQd1JexhYinxK71OGSUYn31dwsLkTtdlCC-_qUnqrphHCVG_cFIALlIafdz1ZY1U1Ia1mwqY9N04Ce5yYo2Hc6xDnUwtIq5OCjE92eR7E-Kus0Nz7qw9N8ri79KDWZI4TKW4S3SqXw2T2FTFvmv7aIoTaa5IH1e91fFCBRZs1MpHyEqJVxAfJ2LTt69djSol_XlAKxkcXoE-BFx62RJgArwEem86QBp8vLi6jpPiUTDbfB", width: 3643, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106303645813966676185\">Leo Lam</a>"] },
            { photoReference: "AWCwydjfAc6lTy5vf9rsJw4polhPtJ1iXOHZ8DSGGlu84NY5b3wWNPbVo58geZScVFwycdFY8X1QtODWT5idC-2E2O3Y55cmK96cplDzaFzbarvGJdc1CgNzXho2WvlvKkm8PwLEeg4T4o3Mio9wW-ufzv3T58L-no8mPKsxeob-Q-eDwoDdRCP2zEG-YR3IKWqCWgbfgjlvF6lhovgX-83dMpJ3OEEofvpTnJPQdsmjcN4jT47MbyPx92IRuHluBewL8tVR7eUh840z6vzDIdcyzGcNvlBt2qbjy_pirgciMMqSU-XtNMmpqSbeac0l9GsMDMjgo2OdTDEW6-Dk03oVALmk2oTqDac9WUBreh9t1EIDiY3-qsQSkkSESybCHK-S1XQm0zWs4M8omWv_514m27-UCG6v-yjpxN6OGmQw6u-ly7EjYazVT_GUJRGLxKsA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116341086186887368823\">David Cheng</a>"] },
            { photoReference: "AWCwydippdA4_by1gtkBTxcei8IiYUZFfCaP8DuivnqSY4oushjPHBngNw4H-mABQsHnED7dsKvyN11c_pefc6B59iYCkC91S9LA8Q8e65rsTqZKG11mIR8FfWQ_k9jJd1EgcWjhdzveg6ZfS5IgU-1NO4IZZA_0FBwx-K9UFcp31XSsEeU5cqiDgVRoXPSU47aUkVbFYtoYkWf5JcEVUy5FNCqFCd0oNFIg5DycqnuaN1hpsnfW9VPdOtsl3DF7ct3SgaBC1foUZ4Q4y7SAYlLH_FZQHr7FKlykHHPoRWFIM0jAAvd7_ZHdTJnubra8aNTaEfTv0YhIY3ZRvaB9M5OinYpi2n8nQBIbzjOcgBmSKUH_AIcZkT7RGmoCh89dVrlWVXCGX1U4fVE-RpQOLW7QU6YoRY6pX5N_kp7EU2qRH8jpZruOByBGRLmlF9bAe7lj", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108161139428037703060\">Maneerat Chayapirom</a>"] }
        ],
        summary: "겉바속촉의 정석, 인생 굴전을 만날 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["바삭한 식감이 일품인 태국식 굴전", "신선하고 통통한 굴의 풍미"],
        tips: ["웨이팅이 있을 수 있으니 피크 타임을 피해 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "굴전", items: [{ name: "대표 메뉴", price: "฿100~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/hoithod539/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12802750900942145822", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%9D%B4%EB%AA%BD+%ED%97%88%EC%9D%B4%ED%85%83+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "애프터 유 시암파라곤": {
        photos: ["/images/bangkok/info/restaurants/after-you-dessert-cafe-siam-paragon-bangkok.jpg"],
        placeId: "ChIJ9cBUz3Gf4jARk63wtqKJMv4",
        placePhotos: [
            { photoReference: "AWCwydhxK_CCffYBiN4VDaquxS6tEAuVJWIih1KnTJmieb6iq4QlDYVBL4cdNotfVos_2SOzF0RLCTY3e_YkIH73cByyPNvuujGTfRUHMl2TpIMk0vJW-ha0h5gUbmcuINpGqxKX4o4jkkC7T3O2mW12l1gdvAK88ECy_jUOCzjaOpPShRyFDZVQBEyirLlrxtV5LsFV_ffhdVZC6_LBsRYY8G4Z4rVyDJFE99-OS39iEIrhyX0IYb4NcSAeA9tk3eZiBn-g5FphOtwi9uV6rmcFqxczig4FLMrfBQlvJ8-XkuqfbSFhYOHotz1Ta5dWZP3UnvptCdu4OiiKQGRsEL8gfOGC6XT3ijhahkhI95K-n5mVlqDb6fei0m_r2RyiEwm6MuNH3clqjGMsrWfRTAR9eprEY94Ii1g6bKs5CdKqxw-P2A6m", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115172033849593303225\">Somchai Anantnakin</a>"] },
            { photoReference: "AWCwydjqObZZLBOlXcifc1lcia5FrJ0i9M0vOR5qnjZFtdiH8Y_RoPx4oB4-UsOK7CssppOVfgsmJbbIbQDYppTmTeYSHBdROJ2cn9uArnBtUJLju8wAZx0MLrjwrcIgvjMDfghmehKzVGoo4WTUUv_EYIqrB8MW1YjOziaZ_KBAhPQwwWi-wqedhy6_yCN-C-zC3nWD6R6MNOvaA1hbfBa_50xBKBebtnDceXlgz64jxCEoy9Iz60iq4Fa0Ii_ygACH15fXiohmsgUQCPAhjrqE70e1uzb5rLsZ6gh1WiRvB9QhfZYX5LMAtgow4uFR5Yoo052Yz6C1bAJQkuEv1PdzKTSLliLEoLHuDpFRZgWJIW6mXDeuYP4KdesVC8vcakmcMW5cBK3runTgZofZdcE4As0LsxNGtL9Mri6Jzj07UTLJxjY", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101078249376194682831\">Ling Kanokwan</a>"] },
            { photoReference: "AWCwydhqP4Jm68i_oJZREAhQxMZDESL72x8yuCx9XTZr8ZhtZIwBodJXOqmuK9HqNdRazGFaKZRtlyB_7EdYYQ_ItCaQK3NhAvoOEPtoEr90mvKy5pGXohDJr6UFqsUcjg6W2MxDrLX4GHhUiQWwnBVpISIw6kWBY7nA5z9wMorWtizYDpR5nHRveBbsyL7eHyoyh06IwCH7t3VdOMR-T-JJVKkdBUQtiRqYaN9d62MaMwB9rYTNHo1wD1eudpdEaTKF-Ohea1hfQEtt_ENSNLK_vWWTuVWHrFR7z3_XtyKFbiMSegQjrQpwXMwjfTuUp11VD6XimyX1uVsoVDWOOIhWCQksn-tyDf7bwTjLJKI4skR7_7paJArNOJ0kDRBFlIVABbRy25paNHO5RDtPqhPlLiLkCw5SN-Ox25cqQY2F5XEKoWXjpan2KJapkEWcHQ", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117517936372375829999\">Lim Lim</a>"] },
            { photoReference: "AWCwydh3pFtby6PESKR6TvyGEpUz6MtRpYUuqXXDg0tS4dHvaq3Y4UGcpR2W7fKfsO8-SS_MTAK9MV--AMMMv1Z9P13FpFZJgQ2r5SOWDXz-EuUPf-NZJFbkOYH4fgwGIRm85t41Sb4i90TEf16CZzmwzMKrKjkIOzlAelnLkCuXfNw4zAOM49gXietrsustAroNzuOVjqDKPNIhfxIjn_hyF0LOcKZDqTN9ADAtGqckmeijsVb4qNHeo1GKEVhp3na61_k8zP3RAHzYkoXyPnfA7VhmwhLOKeF9kZnmADRzTcxWtE9ufwmIH2UWzm3K36FrB4uIN-iOC9M_KguizjMq9abjI5WcwHWQZePwBVLq7tHw6YR6uG_gNnBywMyASn5VB-BswPFf5TaBEtMCvgP09zTUKKcnH1MtI1xNKMKSNz6RuPme97VBH4UnKm8ihgJI", width: 4176, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101720544541053037438\">giang nguyễn</a>"] },
            { photoReference: "AWCwydh2pnaAK2kIbB2ZHUc5B0EmXmacUbuRpE5T7W3GGMbJ15BN8yO_jvkMdUGfvBkhF_IbU-XeJiMAHh-5YKmKs47eNqmmAKvHvIelQFZYPH-orAcYbD3K0lLBygMSnDuY8XZtZUxFjHcVMH-LfarAEKFn3s4FK4VPFX9pHES5bgkbGnDoSlwTPk852MckIHoS8QSG2-FqSn63Hg0uxg1Jos3T8Bwac7SP_tqynuVH4KN4--BCbw4A72-gXNPT482NXV5abTuXOxKQT_VXAa1NZeuwGAAJTFv54Tj32rRPcPHKO2Z3ij_Py8IIACGGcb9QLA9ZWTd2iN9BjXf46tqK-WLIYr9UNy_SlLk1MG9Of0m696JtmtIQ4FOOMtVncV1Go48PDGOMrDgOjAPY8pIOwVhXP20lyA-_VLDuJiLEikVMeuuuJ7NMBWw0SlYxk9wW", width: 3024, height: 3451, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101720544541053037438\">giang nguyễn</a>"] }
        ],
        summary: "방콕 쇼핑 필수 코스, 달콤한 디저트의 성지",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 부드러운 허니 토스트", "더위를 날려줄 시원하고 달콤한 빙수"],
        tips: ["쇼핑 중 당 충전이 필요할 때 들르기 딱 좋은 곳"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "허니 토스트·빙수", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18316853966416162195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%A0%ED%94%84%ED%84%B0+%EC%9C%A0+%EC%8B%9C%EC%95%94%ED%8C%8C%EB%9D%BC%EA%B3%A4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "깝카오깝쁠라 센트럴월드": {
        photos: ["/images/bangkok/info/restaurants/kub-kao-kub-pla-centralworld-bangkok.jpg"],
        placeId: "ChIJcagV4c-e4jARD0HQ4Y1YGuE",
        placePhotos: [
            { photoReference: "AWCwydhoecmNTuKFQ4skXgjbF8xSe6jR2S7UkXgKZpDuUjjtuzYtOiDEfTwl9XQgRUlTbvS_liZmZtp0E0J7AixPBaP8fHIgN5vErfO-RvzNE_Xk60ckKkqjbs1jai6E6vgcOfdZNZjuHNzHajbzQgbCiO9tBxCOnWY8Q0GCB3OVvbNqdemMWBQTVnFJgI6sYg5JKHA_pyHq5yIFg0MrNJ-Axe92thp_0Wp6JJCh2-yEswTWbqMvM8sbKBZP9sGKyxns0RDSzvk8c9oNyOMdHdqWAogJBPMbwyzYIuOntk_wzIja49z-VvuIY-tltTQQcm1FgeNIL8MBR-rdlofCjRJQvf5ml_AEW8r1TkwrA7F_3cTUBpHEGHB0vb_zOWbNwVP5--OQ13lsdu7cPZ8VlqCECBuZsCpZacMhz5JRI6xXcBMwsQ", width: 1826, height: 899, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114170030688589989241\">Bautista Martínez</a>"] },
            { photoReference: "AWCwydgK3kK4JT4v4Hlndu7OjxHKxxGeOOveXUpzEGSvH57kbB7jad2gR8BJHkXrMEr6AoyN9q0AkhzGCTMb3m60AyRpvOIpw1GSIypGGR12WxNKFDTWcG1h5R1o_-zM5sIZSvHloQXQ5A3VECPliCgaPu3y1g5yX-gRnaE8BdmD8cbmHQBqVT__D2ur1NoFcZ7vJLbsnVLjwMAdt1O1tWyR62o5XW5XdTEhbkO-mg00qXqUGivptmv9uob2nE41Ktimz-dBLx4vN--Z0aRTSRVXxYuaVLBqfwW43LbS6jF66cz49I0OqdJCJvfLqNlgdsXpDzv2b71GnHGtru4Ia6lLzwyMYZ5ryjlrGJVXp2In6CjV7Ya2no6dGpJNZLbwok0VHTjeGPXvHJMHkqlxNushZsyol-qJObLNMwBVeL_seAfSLKHNjwZYpxRqcPYFrA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112666628477999532434\">Phen DR</a>"] },
            { photoReference: "AWCwydjZgaOJYMHEkBvBwPZBwypp9zCr06fcNWJ41F649S3lJYmE_CVpAg7rpVRpODO9uV2TnpY-GLiDpMgzAMkFZ4JhtYD0xGOkPNlCWqG0M5QFJh9uwShjwgke_hD3BqM5ZmxuMf_seNV7VK0iwwPztTPTEiJE2SwK-Ij1mjSXRz6onY-EHbJ_PXPq533-tBI_XHXqCRXeLlzYuG0w_AsIRWi2xUh0HX5NSZxutRpqziiTito-9oehrhb4WN-XkCYmIXfor_lr5WsEimIX9_pTnjGBIdOeoRbH3Ld7IoOr_K8GFyd7mNiLeZPDOLJ1UGuKA1_KYcfRUi3LT33WeKKzPbqR3S9vzG90-7YA1RSPFmb9vPNGcP50N7mGGgB8bGZsp_chbPnMJ9K2WW1TWbfg7MfDiM6lSkWpb_QLOjkpsWPmxvb5T9Ur6KNuwaRRcLVv", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102995305993733662290\">Luiz Lewus</a>"] },
            { photoReference: "AWCwydiWNynRh7CE61krXiGYVggbtEHgX8Qh5GHGFGFVCL8N_KNvMq6UhX3FjiR5d0Un5GXhI73y7LlNcA_RMVdwuaHOwT5QZs8edxW-Xmuei1OctyqLTkrnD7I04efHDss0dWSa_IDez9WAe3Aoannp17Tl-Q0WkNzC-MZauf3hx6cyPZS4WEOiCAGP_6D3DfILQHDF-xuo_4dKWBRXPDfAPcNe2e69dlWGlXOL1iibWPY9NiYW2NnPjWYI_tqVf_Xfd4ENNuKgoEXOjgdLiEMniLC5EI7hQHrYvLzeavyBmU0xHOFgxMmLtXumqDdhvFpFoo5M7DDM1yTbmtG70CKoqfZ9BEv_P2HA8s3h9-NlSYzSAuKp1dr6T_tvJ35PJFv6O_aRdcd1J5zSgbAk5OwQk_ziN96ebK3VqxfGd_8Z8eNlJJxxnb_bElwaLXYbUvgA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117324481459968546905\">Travel Twitch</a>"] },
            { photoReference: "AWCwydhayYHfUfMHncapz5vAH3z3faj2ttGsjVaNlI5WXxRDHFAnJnz64hue-Own7m2OBnIWLbj7iuUjKkkx3r2bbkAgEQThyFjDcYUGjQ0TR72kPLMajNr8I_OgXCVw_6Mjuci6GyFi--V7QsI4T8N84LLo3ZZWDGOTqx4lb8QY-8Bi0QANhUEujqzXGdeBSQU0KqMWge3DdIwSM02_38ZCvp8lRxNfEvd8wfPTzkesktA1FgFZITiNHs1G-nauXKDiEwTS_fH8fojGrJUHWtCMNSC59OZYLAVqQ-nfjvpQJI_m_XZdhNtQ5K91tquS2ad0hqCCGne7zS9xMqQNLTi6ZJgrW2WMdsm1RyaELHUt8d_BDoPylprAFJt9ufSgKjVq8ejFTA1eDwMSdH6m7s7I2goiKKQoBx1swbkq_EZm0OWWGqdLKJWsqUr5h-v6cgna", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102995305993733662290\">Luiz Lewus</a>"] }
        ],
        summary: "깝카우 깝쁠라 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["캐주얼 태국 요리", "평점 4", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "캐주얼 태국 요리", items: [{ name: "대표 메뉴", price: "฿200~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kubkao-kubpla.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16220374374330417423", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B9%9D%EC%B9%B4%EC%98%A4%EA%B9%9D%EC%81%A0%EB%9D%BC+%EC%84%BC%ED%8A%B8%EB%9F%B4%EC%9B%94%EB%93%9C+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사보이 씨푸드 수쿰윗": {
        photos: ["/images/bangkok/info/restaurants/savoey-seafood-sukhumvit-bangkok.jpg"],
        placeId: "ChIJd8D2xQWf4jARS6vQxqhE1pE",
        placePhotos: [
            { photoReference: "AWCwydiasYSzX2dBsQ3nBSzxjg2Dzuuq4Zrsj2LABEim45qrSHy1YYD2HomN6cng9Mr5ZKr9GZdGYo044PztW3Z4rF-2VEJisiji9goSuOjnDOBii0g3YfTHmUxJU5Px53bLRY-xqIynyREFJitx_1kCDdZZ3onSgyhdF45KsyUfni8I8hxc9WurFxQNAaqYiZvj_No8WCWNrSfKDfT-FkthLjXjqYLfW-adtsOEbzTNNb7ReOdiXn60Xs12cS7yy9KE3tIfdKmgHWmkbd-qaQ75r8eOIxOsdGZpV3MDSYpvXTSKLyy8gRbNtZb3UmBjJpyeJJrWQNsvG9D5qeUIoZ3FZ6pPmorXO2ZHExzUVibZ6AZf8YNr4nvZBYKKTnikA_iytyGDfE96hrsSPF97dOu_D_I832IsCjm347_jiIqweU0hgw", width: 3023, height: 4535, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106054899615817411660\">เสวย ซีฟู้ด สุขุมวิท26</a>"] },
            { photoReference: "AWCwydi0nsrF1hTN-62gHtJ9YROFmrG821oPnbx6yE6iXBJ49FcV28tE4amfVF3hM2coQh3dvntbIib-0OMLkg4UhdRJrl_hIGh1YaXT0UVPRas1bSazgw8nhYDq7rq2g1sJPNTbpl0XWmOK12R4f1Jiw--GC5CXdFZtQHxdyfovJL50_viR5k9AkWLrxFTLGY0_hLsMXXwJ5bbLApIPi29sT5hOUe03riJn3t7wvwx4UPCHsY5C4nXjnqy9xT71d1HbBBC8hzv4ZWf4lQV9AjxH2wh2mkZYO27cX7vtl9DPTS5LFpnxfK_lQbn6hLshBCEUzIwe9zg9Su-v5prIjQUn-cT7Wqrl-cFqUaLz4K3pb96VT8MyS_XDF3Lv8KT01yxV2qBS0Ssy1DCqRCEeIuYOaG31rCBdRtisVuP88wkBDL8unLkB2HBb0sXiQMdBzE7O", width: 4800, height: 3407, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109758197912045708360\">Skylar H.</a>"] },
            { photoReference: "AWCwydhB6F045cnmvLJXyakQyOS5G8hb6t7SCGcbyeKR_nCT0WbUlgBBFKxk8vCnYaU8DAkGwzZBvYnKN4QiBFo6cptUX0UJl1GHp7Odraq33szb6pd6k55zSnQl2MdvVZpRU9gGuhWVjgqusxWxRQQeMFAK-EO5DgoSD9uUJM2xTpCYzXB377xhpOzR6TDPYKg-tJyX0Gq9laUBeXviJ2rY4z0Zvft6reLr3wMfO45CREFefSIInP4sOooRdC6itGh3J6-O8sSJ8WRwV2G7QTaO3aEhYVAqpeWU8kk3yXEy7BNi0CPwp9TrESY5Ay1t9dTJGEzOWUbhVpa2Ei8lbsPj8qy5xBoYjE5JOQTcLt8lNuL3d-t-JZbLdBFTGS48P6uYa6LpQcyD9BTe2IDJDaheJGqx9t-FplN43eD5uRbbIM3o8iBtWRkm3T3Q2J7QSXBF", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118318157311947548740\">VIvat Chai</a>"] },
            { photoReference: "AWCwydjuziqT-pD9ccuMW-GYkJgMzbAFLorEpcC5D-4_5KuPkmp_5PHLb0RzVpbB3yTvOY6ZArrv8SU1s4vvn4ACvNFz2MSuYZbuP5fWFtx81bPRQIpxl6SKBDOfIMyWqVaQMOf87pRJmeNqM-KTwDjvzZrlEXQ3owsh0N1XoJhE7lmYbChy3c61Xgi80y6sGSeZSQ0qRsducy9rjv-UJCWFdwdQpWnl0ChX0PfICyH6LNwYw4CICM3-Ct7EK02HZ6diuqjHLEhVHPjzATcirUoLC7GESp8D5IFWIH1vSliGZ6hOFePvYoowl0fYjn-pwrW1CAqpanWGQOOl1UDL69Tie6yTILf0mj_ur3kcUDEqx1OJ2tBibpXljLDSLAqqcANSMm-KEQhON2cdtID5lMef5ayOc1UM1lMGZDfHAvbjMW60IJohIuFHKb-sKnw1yOqj", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111569334602685672625\">Crumpled Nomad</a>"] },
            { photoReference: "AWCwydj3_2FX-wfPFaz5hT6p2wRrtt6uC77zXTM8W3EqCVrEBcgwMUAIjWSkeTpDM8j6-7I6OzYOq8yjmXzevDmpwR_w8v2-ch7HasQyqDQhioPiPerk6VAqX0W9ivUEcp5aKIuEOlDgNfxaQEUiqipXN3H5K7ivdvgyFc5qEoJNH0vxCkfJQwyA9V5hu4ObsLHK7J8RyG3gg2Ca0L-anwb5djLWhkqSxynUaDmKLYIcBd4_knFkwcQbfGyurmkovEQ5pEP9wfMNeO_ySo9fGevXvEAD_cYPiWWmbThEvM_xUULN8A7asuwxLO5MrQs4MYC3QbjVBcBQm2DwZO7Vk6CljO8VrdYLzj42KZlxSFRcoLfAPYLOO9ebgcXO1qBMdEMeZTfeQixqIKROqzkzpiByKBadijNwrTmRnZp7MQh3e6ddOd10bxCePzoVcK5LBtqJ", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111918288587820857270\">Allen Lai</a>"] }
        ],
        summary: "Savoey @Terminal 21 Asok 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물 요리", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "฿500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.savoey.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15332943008039788478", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%B3%B4%EC%9D%B4+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%88%98%EC%BF%B0%EC%9C%97+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
