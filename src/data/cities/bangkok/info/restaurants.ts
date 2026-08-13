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
    "방콕한국식당명가": {
        photos: [],
        placeId: "ChIJkTWS3eOe4jARauzDiBy263Y",
        placePhotos: [
            { photoReference: "AWCwydi5Xf8XeDuuEkykvj7VxTVVkWOABzBF9C__ZdydPbHy5j-CTmDfU7PEpjPvzAf28gLvtubvDI_AAb87TEe5LCJyUwFZYyZJCq20_H06TpUG2blBldoQWbEqhc3GdPfGR0JQFx6rHxf-L4ay5iSNddhAVU_j16HEbqwO_1S4FNpOjAMIdlIJhLJx4ozdVv7h2bOlrL9eE-UV6IhegV6_M53Om2xYCMuQM9CRmisnN27DzS-g2-PAxtfJWU-Ol1vzEpnODfFO2nIh24OVCeAPuHvgjOumgdjHQmjpEFPCc09cPIhAwNru7PuDaJqzxr4RRhfdFvqTtj1_E1m1I7926WUhftH1KOtF7Lu2vY6vof0oGch8dc6TxHL22oYq3VaV6Tbx2SBFMrwsbIuoLVpei390cfMireukQPwcVveJt50spgM", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112169244238423764243\">PETER PA1K</a>"] },
            { photoReference: "AWCwydiQ_udhvnfbhn_tmiFn3zrGMsqxXyg-rjLNSbcP__mwBArMXbFtCLHHnpQ3DpW1yppvToY5HI1B-ikVQZZo6PARUUYUmRlHoj4CRFVL_GS3Yk0_gRits5Q4UKv404yJFvTq9VndypN1avTGK_XWs4kzM3KBqNy99mUzc42MpbffGUL5QYez8jpWb4p51408g8VigEinttQqoTo2SCsrTiRKXNgts9SXM_gVsWKuthw0qXPtrYbz5WTbxd-oiX0c0o9IutKP2dsYAuIbMz3w8ITh3py_PMpR3BGkJBjSj5g_8z8IAG76UGOjrUyZ0mWX-YojKwhr0Qkjp85p5qARob4AcIMr5flbIeTnuPLc0aUuJKLLH8Fa3j6v0qxOIiSvd5wNktAf_3IabqyuMYofgd-BQqK735E2eHvzWrxtU-Ip7CHi2I5N-JNHO9PqXQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102577661647754866813\">Min Jeong</a>"] },
            { photoReference: "AWCwydjk22fkNeABGYqnhZ-Wxd_XsqkoFTLLhuZI84_ZZ_ypF3AcWcLYw2J2Vnb9jHyzbsw2G5TcfNdjFTCdm3gFxQa2797ObZUNFaU5S3dPPPdR0E7Eht-i2w2OF2N35wXLOqbcwpMBPmgzrL4r9Qrros5oaaKpKoBOvxItaI2CDYpsUPfj5C-wa5E6qd8KPuW9T8JVu66vGpCb8bfYUhzCZ86XJ51QutUf4g4OGB9vT0YCph82kyXNC3-Mk3-2FHJVSoVJJS7iK7eDgnBY2onRs_te2JZxM9hFOPIuTxfsLcAa2H-NZA5JZftfmNzzbx6mUfguOwnYeZZg5CvWANK3bzTzydzXJJk4-QyCEVMctr9jwZyXGB1Oqc506rLQ10FZk5nNZ1aJL9UdgcOW5pj36UUGV5rO_dREeWIwDetYs6nzScIZa1UQPN6Enh8x3J76", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105032622679950492495\">Katesaraphat Natsirichotikul</a>"] },
            { photoReference: "AWCwydjjW_IwazxSZ0cbjWwBNDMIC25vuL_o0sr_0qRu80WYvm0b_Nek2OIWD2K1T5h5vFxNV7L0L_OmV5H3NNckg0l560YyCqggBrNTQMsYNyc5nS0nyAUDJt03DVvpTU8dcObvP3MUIHFymgWGN5-J6P1jgEOIzZ1KM2_vDoCvEjukS-8aQKp3PONfFtC7JqtI_Y02mTACrUC2m6pMLeZnVDn5pFuRcHyb7CqDVj3vMXKxwXKfOgsP_EFxOJASUtDqhqp6MSxfebfT6UlKXRzECeDqVeo6E1UKlfCOCMfMRyew44XvQcN4LBhduhZajn4hUPrfRDrAd6zyyesBR0dGDjehqJCWLvnxyudtVQxvlaa8WAKQC__jdW39irUWSXNJnyGrcoaPKZjdwkvvZDIXPoFO2gRda4-bhHSAIBCNIP5Xwupa6kFAPESxCMGO6TP2", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101514942833389456957\">วิลาสินี ไวยาวัจมัย</a>"] },
            { photoReference: "AWCwydhNGP4HRANwZowhlPkfT3y28Dxj8mdT00QGOiis1g2B8HADjzZ0BGxddzSb0Zv9SsIYtOnJACbo8I4kCFyrcTSSuDaDPbYDSYyqv33AiMsrAqKWcrdAUof--8ZzT7spDODEcCz9DtQxiYOY2eFpew-KabQiQuA-wH8dhJcy6G0_7Dg9IV9h2BSR92Nc7sIwaDryhhe1wemdiPMmdb9qyNFmQhMTRQx-9UmZxE56O8l7buLa2Alb46uGn-PcV526_4kD8hGfDDDB2LE1fqILrbJjxYJVjAyKxPUad4mIr2p7lDbfvTNOOP-3N3mqYzN46wW3Y5czf2bwA2HTeBVAgsGtVe4JI9lxn22DXXi6ixeF670o0y9cBaHqgO7cqQp9xX1AsArrCvE9c1yTdTToTpCgFx73A3B4xGaBSOkQs_nK4T_NFYffcn0FzcNlgg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113378640653585109533\">Book Shu</a>"] }
        ],
        summary: "높은 평점과 푸짐한 반찬을 제공하는 인기 식당입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 음식", "친절한 서비스", "푸짐한 반찬"],
        tips: ["떡볶이를 포함한 다양한 반찬을 즐겨보세요", "가족 모임 장소로 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "맛있는 음식과 서비스", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8569142949672381546", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%A9%EC%BD%95%ED%95%9C%EA%B5%AD%EC%8B%9D%EB%8B%B9%EB%AA%85%EA%B0%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "본가": {
        photos: [],
        placeId: "ChIJbY7gF8Of4jARFyzLUFoqsuQ",
        placePhotos: [
            { photoReference: "AWCwydjwAHRNtQSqjtijJya1OW_QPewiOH_AlZ-2PIRHJcEN4cSRVCwe68kRxZSCl8qWc125ZhTWd4VsFEi9pT-NbYze3M5B0JvFrhEUuHScjugOocSgQ6WYrosgLy4e8zmUzTvKvWPUjT6U4i5AalUlCmIW69_E3qjXzeGOnJShzwSltVLCETMih9VkxHMtApUeKXdN8K620aHDq5EB8ZtrxaUIq6Qv9cbEdPUHa97P5GsTo5D6Vc4hONgyKn_z8jVOb2yJlZFB2RNBZfbMbR9MAHV7kxAgutxZvJVCZkYTeVcS7cOl7C4gGyYVzCgJlqurEPBRG-ojLKdEF0fokS3-JzkrlXxoMxzmQsAk06lOCdjK5tpoV263Q5g2Dt-iT95Y9Y9gf7uqyjPFapKqqN9XRDIlhTcSMKxzUA5A1P338BGCSQ", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114796271592868995286\">본가</a>"] },
            { photoReference: "AWCwydjvICKnbhA9IVnaUzS8-URSNwvR1bXbmLaXTiy4D7kR8bN_u8qj9DIa4efAJObzcoXIy_nEx60Us0XwHZgTz4w09KHMhkYG7Trhx6rOuSWm2_IyGyvsZW4DKkY5TWNwaBmysM2ZyXeq4GwE571bqrpuz1MGhXV_AIMePe5eJkRl3HXSSfEbyg_ttElgJdDOEiq0NEThFY4j_tEWQdlVchvZ7lPub5Ag_w3AzZHotoumavieiD90KHvZ51usoYPg4nq-ilvC8qcRpWctOJmsAY9ZNJBqaGmfCbZ2AjgIsfs-CY9fOLKj5rCY1VCk8VAMKDyWE-OHyPzFqhXzD0S3tR5lXFLsqBEeI1rEqZvoE_a1O5-rAzG9QRPTZgW441oxaSp2Mw9YiadXEpGkAaEh9oQF5HmoPaQPMT7BBpaFXnFp0LKoFdJu_x1RaSLHFLK2", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109292060903265947606\">Nattida Chumchur</a>"] },
            { photoReference: "AWCwydiZKkDkCP5RfB7Udvrhd13x1BC7BaOcOeH04XxcP3RFw_wcSOvmaCnrhVTYU_7Y6famytRFPjC4Z7wVSa6ZJHt_h_581HsUdOEcZyyg7ZZ6BFKMKaYYq6FV-8JRKrQ12DMTtWwc2SSdojk9pQdzIOEgnn8Dy4tWK3EIpbdxV8E5F3OpSSlq7iL0rLQVzLDWGwEjyOZk2VS8yGbcAxtcT4kWQKRefuqCKfGWI4TxTkSav34K2dez__P7aV7O8TX8tLYGvpZkNGTp7Taih0wF8Bv0sGrUpTwEZiraSYGxM9YJMLph-7k5G3xeYfqHcFI8TcX3HUXmtt5XOJmYIPEtnwMIj4WW8veOVPihqAi1nsKkzDrTVCvv00ETjI0JVSzkHyVrqico5t8aKWwoXv6b6UollklZchuxipwqtwV3beZWAehH", width: 1110, height: 495, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114796271592868995286\">본가</a>"] },
            { photoReference: "AWCwydgieNGoGlHLmUo65h4HSVdZDPsqF86Snfyt4j3wbyQKjtax0LL_rLQ8eCU8gFbtWFAbKl2V1NzF33cVyXGAkavflZDuIvbtAwFxg-3eguel5hNAAc1N_gt5Be405tbXXB2YSe49fYHpCCZI6TkRYEwnaYZ-bFXjgTSce4SFFG61v-52KgszToeq_LAL3mz3EMOMqwXIN9itGzPvliYI-YpZMbFoXK2ArYD440o7i8eQ_NMXloSN-S50EX_erLh66MGZvM-RNB5BW5ZhI9xVuPALlbMwLgA54_om9aTBqQThztfpJ4VD2vazVbP7A6nOJ2XVwUEratZfehiMGnlWdJB2lD-yZCI_F8eqiwP5qfoBKJiJ3aWXRTAGUwbw9fPGKItNQOHuZ7NvENfeU73-oTanrwaL0gu_2IPS7mI3YA9KBp6izx3Fa_hoWamAEZJH", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116193551837273308539\">MEAN PERSON</a>"] },
            { photoReference: "AWCwydiDPvJGKgEnReWFDucTZSlDDmDJsp4UIexfiquyLdHi1Vsx0073AGheDCVg_ABHXL38Gfm8m_TOssZLe2ocLr21vRVkf2CE5zyoFTw6jWpBj6YmS2NUsIlsi6RF3FVAWRodRu308_g0mO_4pIbr9-kyrogbXGvwvi5R2VxsMqhTu1LyR4pQRpmlhWkY_y0eS5p9FJ8fACdLHWQdvyAxEYJ9MFeqP_wMkeX1u2gULwFyISOFIDi4yVIsPnfrEUezguwlcD0bswCrXGatSsw70GGeML2JheHHyuQHlQr0WeiciOE28OJvFp1halqlhu9o7nTA8DrYv0JQy3J1m86lY6rTpB7NS-ZGF5DCjAsPqDoodtbIceIMWXfWneXFBmKXK7_S6eaQbzmzddrmVc-lzp7mZgaxO6UaWWBl4kiPdrVcg8c9SPUjEgeCpmhKHGdd", width: 1080, height: 608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105756839312184467044\">Papassara Yamkasikorn</a>"] }
        ],
        summary: "맛있는 음식과 좋은 분위기, 푸짐한 반찬을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 음식", "좋은 분위기", "푸짐한 반찬", "훌륭한 서비스"],
        tips: ["점심과 저녁 시간 모두 이용 가능합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/bornga_thailand", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16479280553892981783", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B8%EA%B0%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "만점에": {
        photos: [],
        placeId: "ChIJRf8ELbOf4jARF2dtNc45Xyg",
        placePhotos: [
            { photoReference: "AWCwydio8wp6dJLNoQAKL2prVDplvGm5Rk9iZnX72XRrW9mHuJvlQ4sof4Bo9Jq2pByxZr6ALjTjNr7AmBZABNFe7dsq0DW8sGNQamINqE5_9xxnG2IdPbfK-MQ2Z6o42-oDBR89N6XUKqChyG1LIEouzhftvS35AllRuLNRNJQHRLKfjW6hKcyub_qoC4nU4eUfJq3bXUNgk_3fgrfQDkrYkCR2ml2WqjR4zwFmyLS8Oe5Hw2zDCfBnqA3zLcCXcjdFALBGoCweRPJfSOX2gtslEV31Iu2AuJslQN9C-OHAO3wOwjLibpM-IN07BDOrkoAu9MHDRtMHjiqvx4cpQBLCBLVoA7yH4XzEcVmlXHi4Z47vGDGf2jzlwqyv2I7VaKGlZ_XV6zakVfumqzmaNctg0KX8bQ-GrvW682jI9RPnMVMSf3s", width: 1284, height: 943, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106059572950211782277\">MunJom.A 십점 만점에 십점 no.1 Cultural Korean bbq &amp; Chill | มันจอมเอ ปิ้งย่างเกาหลี</a>"] },
            { photoReference: "AWCwydi4N2EEm3lTKDSShX1VCYF619Z_8gGni1afik-woDyaHNG9KKEk7WV9KObrv0TwDSprDZp-K2UhGVAhZKK_GrnWVK3J4GNFz7f1Axx9hWDIIFOcIMvO9yd6DEp9U57usd8WB2B-IyOnK_vCSjv8Pl4Je2EE35-yMKqE4zhjzVYFGymfupIBHJ_YiIqQuKovuQEkmz5yFNCy7nbfkThb9oq_qUYN7CdOEK2kToMAEk3CGuPQ7AfXqUDdvNfDQx7PM5uZbPxT47gf5TbaH6cyP2aeHlAU79nnXfq7x7RInn9U-fayIORypftWdsNkiPEK-ZstOfhmvlA6nGL_Bn3hGAa8KxEmgWRtiOBndTzWbsFFqnggyTRqE0mGyuz-0vcHTPp50nVooOoZNoHVKbBJYynmGPHUTaa5lO12cBpknDy4UXoa", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106059572950211782277\">MunJom.A 십점 만점에 십점 no.1 Cultural Korean bbq &amp; Chill | มันจอมเอ ปิ้งย่างเกาหลี</a>"] },
            { photoReference: "AWCwydjlDqjWI0YB5v7EPLRuwAe9eekzWjgBiTvDikAjDCk9n782cHcHVYP-OSw-krGCDkU-OAKkERq9uws9iLLKsAdQ2V_49QAJ7QQivVGqAiH0PrydE1ivG-2veNH1-_1bxSDBmQn9hyIyQbFxfz3a0BzZOoAOMTvAVS5vnUhLVfb5HOJn_V_hOcRoE4WRsgiTsP6XNlkbfGAQJLAt-zn-0pgiDJQn2FNs0XeWAvoDxnlPnONF13feXC5uzZ14DnrSDG_WRuAJDJHUhNFZuRVVYerR1F1ZAdtYFUIYNr7nHeqxoXqFY6uZ7h4o1v1i6EdRI5GTYepSjfStEG4pLs9tEFwWFBN4h88TBj7gHlJRX6Tc92TmwYHwvFZ2pWeXmMU6iA1vyxj8FlwU6ahDmP9AmpkohnA4XL14hOjZLsqxvk-TW62GTxxBhcNunJ_-TRw1", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111255708046317017353\">Trairat Santisakultham</a>"] },
            { photoReference: "AWCwydhg6U4f9F6slU9PPFUwPDNV3ZpsMG5WY3hX3VpJX9-y_aIdMd9y_oyrqH02QCWEPAp76yOb1ELeUPCSzxidt8foG24GAdnI1xZ7p4AVz0f1LU2_TMYmL_peoDdTGwDmhYT2eybOli_LxgjChkFVz1colELqsX62SZh876u0YxSX3kz_ExJjtFHdVMir6a4fWgxktMvY4B-bHceduywW-v703ePfcQF6FPNsVHk-TIPxCHS3V74h0QTOw0U1Ihb2xFLHKq9WE9V4cbWhYSFs9lqc_Xvuyx6zikAX__W3WalPsO_AGM7kjXNF8Nex3yuVA17I3f4ityMvlRkIfbJGwmcYGzI3DpQ0_6FdVtctY_ZBjXHRT3j9WP-3esjqQp_y_HHTiAGCbMhY2gEhP4qdqGbvk5L-xgp6yLx33e2w42-ancyHrj5okGsw0wWOeg", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112569859837262258272\">jay</a>"] },
            { photoReference: "AWCwydgabNf-_AxIQeGsca1X3itYJFDrttJlEnRktidf5TMCPcjQKsw21g4xz783KcyY8ST7GGEyZwoXaNV7DTKLU78jw3MepR2R0PB--nq7nmRvSgUARzi-NUfRpnwdnjTNgRk61qSR8aW5TmF1CBIKs_dWkXx1UXt8mIWGWg_QW-0LUdInZhd3zkUdl0JW4PO-4IrNvHj_VwtF0HEaQPr591I1Ql_udapt1IbeF70BsgptMtFCY_bj_tXtUxOxEspDGnWhJpwWX0dO3QZ93EHirePwHc3Wmlgk5cO67TUvMy9RqyLoYnQRnhSg6rvjeENIdr5FsIVrdDcez08BIycAj3-I6ToRuvEeOanzEk5ZtHC4rYTGC40QfEmq7qiVuMNhYh2TSoa9Qj44Y05VtX_1Qj5iQgZZwNQ924CLp1OhXjjhT2tHCjf52a3_wN0e6g", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110170313574399804832\">Nattaphon Thongmanasathian</a>"] }
        ],
        summary: "높은 평점과 방대한 리뷰를 보유한 검증된 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["뛰어난 음식 맛", "친절한 서비스"],
        tips: ["초콜릿 무스가 맛있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "맛있는 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/MunJom.AThailand", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2909107442127038231", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EC%A0%90%EC%97%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "키아니 한식당 통로 본점 Kiani Korean Restaurant Thonglor": {
        photos: [],
        placeId: "ChIJx6JXUqmf4jAR6tmg4xV65_A",
        placePhotos: [
            { photoReference: "AWCwydiQIP7cAb0m_Aqew0tdivmPvCY7ADhdd3hp_0IQHup4zHIj3Jtefg1CikxyV-psbTFncI5WpulSq3oIO1O6ejWNrAHi__PzUoDT--6klTH340aHmkuLinQHqXE2npDpnCOvQyHMpaC-bC0je2aJ73zg4G1ZcAoGlYMToeim-cOsLKukFrzTfUgzGPqsc2eb0Hv9dO81vL3kXiqUNEZOMn_e7seriwrQoTthRUfJaj13usJhgqHJwnFSgJHe0GyKiTLfa8IvlH1tENAzBvZAlLRGWHcsWtP9qGHe7qQWrmrfbqFLbu1mZp7Q3oALG-LRUIFxoYP5aqB582cL8FpoP1L1x7zMIorrfoicg-tXMeLJ8i7tcAlf9CKdiHcfF2xS3rAI5a5H-_bMT8z7l45-9tx7P-vit7O_5fbL5RP4yb4qE0E", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117392240483468092787\">Kiani Korean Restaurant Thonglor</a>"] },
            { photoReference: "AWCwydgiW6iRwqTwP7UZRl8R3hIryYezi_8xhZwXIpwNAuDyj7lh-kXvCkC24prBbNP_X5DiVlWdZayl1DM-n0qczXYOeLqJOBrEwkLsLrjW8an2qRkN5C9-K16cI3dDwx_ewE3Ut-fV-68irW5xN3luPcogU7otYqhlKSB0o6THiDdx7VGRIXYDp9NN8yx2hPqYG6IrGzBmKJbdaKl2uWWyChA7saGs2p8Mgc9MWBaQz1PNcnJjvmworyXpDOTP7HGIx03mntGbvNQjHqbK7fBg0QVEx75x1CBv6C_nbQqQ4Fn3VY9U3Ev6AzqOpnb6twBh28eQcuGztfRTz_TEFmIe_h3VFnAe5HjGNJ-fnroMMLb527R9AQigVq0NIuxuanNokzuBMIR7UjdupfrhHTTQ35ivHy9nC7aOSokFjmjb4km4ZiifHEnCGFtpFGxhOqP9", width: 1536, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117392240483468092787\">Kiani Korean Restaurant Thonglor</a>"] },
            { photoReference: "AWCwydiFdbU26xNPeNDu-CY33KZguKRMCnTAdTtJvLhV78k97B_Oe3IhapShj1e2KG2eum73210aBHTehqYuG46yaMtlBuKDxGQyN_wIuHoQMWq4DSmgPmUDNWiSv27Q2lJ7tj1JyUpAKas_bflw52oG5AMpzznQInDxZ6BcnTmqN30uH42oz8JVbvjS3KpTBr-PD1j5M_yPHS3mraywycfRhPPwAa0vuAr0QazuZ1wA7IPLiprq4A7Tt4wG6pAxPNkmQ58eIw9ji5PxP77ezkAA8nPiXbLwBCvyAnvH4nLW-i9dxKIyi-LUu0RjQb_HbyHYbt_rQm-Hf1XbyJHjrdBNkI6R4F_PQGS-diOYMzrfDikcpvVbCZ80-ykbHkaGKijnwuoIb9T-lQ1MVwpWQ_fhSaJ9tGcHU1wT86DeCH2th3GfB1V9ZZdgCvoH-8dl5IYr", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110439813480708008481\">small a</a>"] },
            { photoReference: "AWCwydic4Vl8tBzOCo04mRbnDJKytbWS5QGEl9LP6RQ0SPS7rOW1CDxuO0h9s-Pmm5wBIXdHbF7EE0xaIOI6LvCS8csVPfuTXS36eb4pvpyLzWV7tijAlwJqCyCUytApAR5RzJ4S22B5-GSXS9WGVh3wLc1AWRO1bSZeOYh9cURwVJvNYrabhemCskls-rrkqYl7DASi6h1K1gYFYHkr2_E2sL6_6AHdlFI5rLDf01ryJ9jDQg8Y7zX9rcBLHJ0pf1wzjKZtw9m5zEG9K_LP2AAtmeK9ChB9Haigmg2lL5nttsN2srEBk71s2hO2OOGmQVgtK5sWNvpx4bTUZvyMDVMzKvVRiVaD3vYOpYKdybtoQEzEWUEAsCxjbkxR8x6N8F0jvLg3608yfNDdhe-ekeyHGZI8lMkOjI55Zjjv4hl0IDSsdrzL9PTNJf5AErLmEn4v", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117141657649907122044\">Natawut Ruankaeo</a>"] },
            { photoReference: "AWCwydiCLkAJoS_nNGkrIeIqTEqahBL_ChE80KmdrmJZ_N3GXZxrG9KcVWNQCxmJ2uOnp9CaNDzkHow3ieUcBHTcf-GICTa5FqntJOwWx4w13yIbFKrJUWdx62zqY60xOkaWhZELnxLG4N7GIOwUV7qe4r1a95pYK5sVo-mo7-P1LlvfBdWQ5L112BjiQ35YX9fZRwr7RAyDv0FhdZavVmOIV7zoWyB6Hgu7H-rQXmlM-IYkhOkImREj0t7eHbJHpQ7KiuGngg_EETdpfj3zvl-GnGcUY9S2qxg3Lyp5VT57EaybMr1vFIhjUnlUmW5lC3eAu1A72dUzqnt-qHALSdygM8GtoVlM3YCqXZ168gtnsk7-Bwql9S09itUMwIsBpkEagrjIPZ62-i6gQbo4Q9CWpwpgiiNc-ae8ysJ3ROXSCuwDPAZWNO8QVeHh7CUytDmB", width: 1535, height: 1772, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117392240483468092787\">Kiani Korean Restaurant Thonglor</a>"] }
        ],
        summary: "바삭한 밥이 일품인 인기 한식 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["바삭한 식감의 밥", "훌륭한 서비스"],
        tips: ["일요일은 오후 8시까지 운영하니 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/kianikorea", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17358977523154737642", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%95%84%EB%8B%88+%ED%95%9C%EC%8B%9D%EB%8B%B9+%ED%86%B5%EB%A1%9C+%EB%B3%B8%EC%A0%90+Kiani+Korean+Restaurant+Thonglor+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "숙달방콕": {
        photos: [],
        placeId: "ChIJjcniOPWZ4jARcH3EvgCD-M8",
        placePhotos: [
            { photoReference: "AWCwydg_AC_mMQ35sYgQKDgsWQOtUZXc1mpzO4XUJkjs2Gz7SBVegMtVs6qTk8grdxrK2HJRvbvIkHwAycsawm3r1cRQxIRXLVxL-_Ibx2EqSG6Sqhkv_xidWio0rMoIYEzjzofS4fRUn-RvQd89wGxOACMu_3sSJgQ2fo1BLSoCEF13Eog-WTOcN0HpMHhqb5hIH2eV7oreAzLvSzRymBE5az1QH8A8Dklc809gQyvOLCIgP5_WNhgcsRGilcOdYxGcTPnzQMBK-WMFqkHzVfMLGg4C5LmVzci1TbZnMFlAErlgXwAu-9wSgcjcCdLWl5hcx7nwlDjoS9g0gUtGOf-2YHnu3QVwvD-7WBwj_lduhMKGBBu7R-pr5O2pGNiSFlZqw4pMwdLRw56Ob7DB9YTJNFhnAdszo_kl774dUx9U_rs7tuBBrRI_H6aKBOpNiVqT", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108381485604829995347\">Sookdal Premium Korean BBQ - Bangkok</a>"] },
            { photoReference: "AWCwydir5uvXEnh1xyflhDA5zMPFmc2PsqffVSrigoLLtUp3qGVU3usYcew7jYCOKZE516ic42MV7KJ2CBBiNhoqcWhJfWL2BNq3YjED47lRh5dQzJDu7txzamyLLFfm4bheavaQf-TtQgPnyKPRktgUgaBWgXJBJZual-b73GVfNtXaxI6TwaOW3V5oE6qMvv852AU2NdEOtwua8gYP9ZF-JUI9aqaUGcc1nH30GHD34qIYVfFnb1MczaOnImuD29E6j-x8xsBZWmwrgEOSqv6y29P4etoEVp5RwXnqjNyCIoTBW0KJGkbDCaVkdtmeSEc-uh7QjCS39MB1horCcXl5BeTP4ufMN-GYePwQeWUYXbG7_5IBilMij_GmFTTyCOd-7QZgOYbgwycpjvda5zIx3J2kOhQn3FntubkO8yCUPNcw-i6uXsPgKGflrrmd_K4l", width: 4608, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108381485604829995347\">Sookdal Premium Korean BBQ - Bangkok</a>"] },
            { photoReference: "AWCwydgEJNW7h2xpaXxGhX3RKFXpPHAdVf5VsptmbY9o5y41iwLrs6UjdVfnbZPgFwJtXH4DPqRHv7nzJmV4iPdxsE2aoVMxFap6wru_oE69BxRHLMph6WeXSQxU35CXYIdCmT4LQOOHSfY38j6R99TsLgI6xg2XxAE5yQHAGArM3QxTTKsKdaUAv5l_W22z2be7iZgr5-Hc0IgDf9B1S1QtUgSCUNpyg3GBgqcUznciDk6yFU_fnIx-UI4F7pDRW1vz5CORzNJyHEQGJJNgkqQNZDhsBpCGWnEhk-Wjjm3ss00Z5sK6Y7GdgwPoNb2eBFtWDBjAKst9IhZiawk-bDh1tRh-_X4fKDlFKIfdRoEfsG-bwVGu3H9uv91B35EYZcPj4p3fb_g_5Lc-AiVIMmuEAjpd2TTIM4Kv0ADezgQV5xykQW2IKxMKyyJA2_BCtQ", width: 2048, height: 1363, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115234993371581821397\">Arj Seriniyom</a>"] },
            { photoReference: "AWCwydipMXWo6VJHkI2iAylTIyvhhrnJmMF5OWx65eDjyr9ZhRZ1E-XnFhoV0be3h7C0N5cIq6mIEXcAWuJVLLRAs3QTdTqQ5jxdLWttTJkkHosDl-TDbLP7KHyV9UZpoqBZobNy-Ot3JTJ8yIC-yiujiPnSzcjwbxC-Y_J6jV0Qj3RvI_IldT2_OfX2GVGcfbLHCIuSy5RlKb-SUiQAFKcdSMGvcG7oVRZTrtGGNZNAGVvIkQ4QxO48VT3HQ8ocw2IVC7MHNHPLV9YD5kYZ8tbFopKjm3YgPQ21JkU4M85q5JKIHCgqYW1_QjfXZdvLdAO4fAj2RMtjSj5umn7Si3Qu2j6xhQ84LKtoB35Yxb3_GmMS1ZZXsi00m9zxhQ2iY0JGO2zSB2AQiFI8dwXgYaCDOQgc8_IjJHqbjJesiQuLswkMbllh69ovE1MWvD1ap5Ts", width: 1080, height: 1616, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108381485604829995347\">Sookdal Premium Korean BBQ - Bangkok</a>"] },
            { photoReference: "AWCwydjBI4vzkMIvdvTYtiCS-MkFR8eFs0pkvgvas50YYrVaO9kBDJWkylBpupI-KVJV6s7F1vveL_AdmR55PfRFVIFcTPBh2AUeNm7PoxHgLN3Ag1tIdSWEdxYrlJ7qi689JNMUvwyccdiZr6BZOWPdd6mBAzwBfCmJrcKIBx12WUC7aahEQrN-cFuYqFWaXRrmP-BD7ZFyTpi88iNOYO8iNWZplifPL9Yd9pYAqtiLRJH_8mrtOYaf4ngZGXLHQQqedrXchn3B3iqvCJprcwQQUOvUHrnd_KRtPsduqRSJHcsdCqLxzch3qkhHwDZE5XM0DYoG8GrQRWIhE6tWjNYL-TErhd_ZEOMB4Y4m6Us0o7jpxlYbxm_2LUtFZWRwazmDbZLTY5mAVOZapQXLOPRCw3ysew9cBoEqShd_CYEN3qw5REatm6E2x5PpE7ualw", width: 2048, height: 1363, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115234993371581821397\">Arj Seriniyom</a>"] }
        ],
        summary: "높은 평점과 재방문율을 자랑하는 신선한 재료 기반의 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 재료 사용", "합리적인 가격", "무제한 사이드 메뉴", "깔끔한 환경"],
        tips: ["사이드 메뉴를 무제한으로 즐겨보세요", "재방문 고객이 많은 검증된 맛집입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "신선한 재료와 맛", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/sookdal.bangkok", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14985871799299112304", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%99%EB%8B%AC%EB%B0%A9%EC%BD%95+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마수 마키 & 스시 바": {
        photos: [],
        placeId: "ChIJI1DS2gGf4jARsNX7SqGCmUc",
        placePhotos: [
            { photoReference: "AWCwydizciW14pkQvSpNt4bTf4AOwwTQRpdYHsqltNmQ4YsN3_IUdZx0uCnHbpER056pUYjni6s_VALFEEgEnnGqiHFBQ0QiVRghevhj8TQFsPxakZ-q7zI0KI6-zh0O6DbAZZqK06eJpGZ-FcxIsqf7kOtqFg3w_wtrKJi2RlLrC6TU80_TkyojJEJmNZ5oKVh-Z9B4mv6XYlWlR66V3hNtP2VyklNyk-_jmwe0vQAl9BSEoartzLOW75daPQfSOd0WYfsykgkzJ-0KcgYMqa7yr1O9HcAP-cBJXqgUIOvvftjfJb7qjZsDjdlgYme9rETX-ExeeU6injyczV_AtBipEbY75hUi1lSRGdzYMfKbhfD-gCpOpXjHjpFVmy5QznyI6_FNNKClR6JgZkGYJuPCrOaWEAUV--ySLm-DGoasDaRAzpQ", width: 1706, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111497103838841918803\">Masu Maki &amp; Sushi Bar</a>"] },
            { photoReference: "AWCwydghEaB75qukjCYaHiSLtt26i_Xf8wKzdmYF1PygjXHVem3cZ7_Cbs5hjZzCzh_gbsO0ROZ7o5_fuxIY9AFmaNNxJKE1k3clGQ2G_3kxqHfIXV3nssNZau2RtYaAes8dP_B-Iq21t-1SH0CRHgB6nB7VVN9Wt71iK2Q2NkC1zckQs_zhDwDn3_6B0LcjSEEWZV6bNo4nINBGr0gtKDyU3AJVZ1HeZzcJZXU5FsePGuYcV0i4lsK59acLUdr6WEd_FCXfS-WY2aO65pVeOHTtxuaaGLrFwL5bwF7iQh80K8stP2u74B6mJcbqiKZ2LmiUN7Uc3nSs1OCMvHHRzuhihAHyWjQCkzvF3HnCqx-Gecvcxak-NIlYUGMftxlJlnJGcWJ_484b_yv8eRyDclRaPkc43S45LcixF7c_ZdOKUhjBfg", width: 2048, height: 1638, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111497103838841918803\">Masu Maki &amp; Sushi Bar</a>"] },
            { photoReference: "AWCwydiHFxQtBSSp25tV7iaPG0qCPeteHUIumKj7-jCT0PP-2ElQgQpjWo4sFH0207_vGUtT83x1iXpTO9Q-mMHax5fZcl-uJCGK0FQdaCL3rvREcmuX48GHl1eXytL2HVCltsTbxxwLhOfcKprw7IzL17hywPto08DbEoEYjovC8-TVuc5B2pUBZi4S6MX8cPFwlRXJrW58mBnx1VFk5KqwgepyejOuBBGIsAIKhVDLivBGtDCwPoeo-XM9qx75_mxqIRLPpLuk_1kOKqBLSVSabnG4Ryr3WyEtT1k7Bice2FPsu2eENpoIhgGJgW6b2rrn7ojqUmni_Dt9TGLO7dDAB0dxL1hO1M4bwyGN6100WW3yYlQJ8okFO2qM3V4eLDh5sWlJu3FwG8yzmG2sFUOiUwGuKVA-JKyMYYbSn7FuMufeBFvstKpAi8r71g27f-DC", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102206548747488309321\">David McConkey</a>"] },
            { photoReference: "AWCwydg0bGdw3LOX6SILXZoAEwrkNpQXM1Aj7h-zvjkSIJK6cFBAXdO7jP_Rev0ASkMrhFBlwFl3_cQERbljWOtfnfRAb1dvRE-5tDAfgQXpHUl4-QI6qBkaRKSTZzVPO9EaBJGGIKm-iHJRWcyxSYcVpvxuLYODNeWBPdiadncZLObtqVZm5woEVX3g0X3yoMwmINhFnxNXvDYqEKTab-gi2UrRTPWjnMuYrp_7AKRpUXyACMswv1zQitsd83mVcMRxXWxzYKX2MFNGoTXOrp8zAk6ZQY3OGJPG_W0lzgeRdab7VltmU8QU_DNoCrbNOAirH2fpXCjjeIQlYnf_RH6wiyHH_VpIZVDI-JFsJ_RILxjZTj1ZkziVM9EeEqo84zdw3ChECzQObsdz7xegghJ1Ypw8dI1iUAnlwy6T5A5oi1EpIuJtPLTyT6zbmLTR65XJ", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112164726479654619049\">Monica Beautie</a>"] },
            { photoReference: "AWCwydhrq9crCWL7M2dea7ORzIchJ1M_6jOiNXQ-bpnm-D7PysYVnqO9B7jL2mZlRV6S4AiUQckPYxsae50TF3x_-DiVTuQLqQ9BfJPJUcn134AH_ND68ocyjzAmtC2Hf4b_CrS0x2Y2f3BdXIt1CHGZoiY0flILzcggg7YfxhtbP_7gV2nlx1yFb6xUb9a3X0jy2WJ_bw6iG-BLJe65UwmnWXN8ZP_llWfc1oremEtEyvXmMnNbi89jZ4SglbL7UsJKfgOcirlWyDyDvCW2F38PgOfY9TKUMek-elixbUzPX21VK4TdUC24O3uipChM-a4wDdUQjV6ZkQP--SFh7Ufj1K2vmoEf3CIQNcY3yUFlSVe0Lqqy5ggZSUv7wwH_CqkmClbmuuc0n_kAJPIHTt75-VsVnlHqI8NC81VvNHZXkWZYpuip", width: 869, height: 1133, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111497103838841918803\">Masu Maki &amp; Sushi Bar</a>"] }
        ],
        summary: "높은 평점과 친절한 서비스가 돋보이는 방콕의 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선하고 맛있는 음식", "친절한 직원 서비스", "합리적인 가격"],
        tips: ["방콕 방문 시 필수 코스로 추천", "신선한 재료의 맛을 느껴보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5159298477388977584", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%88%98+%EB%A7%88%ED%82%A4+%26+%EC%8A%A4%EC%8B%9C+%EB%B0%94+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "츠 일본식 레스토랑": {
        photos: [],
        placeId: "ChIJW3-qd-ae4jARDVL7g9x4vnM",
        placePhotos: [
            { photoReference: "AWCwydh-is2A5yzS_dlW_-8FLZ4sn1kbU0wxz_1Xjx2pjL3ZDBwDzrPXje63WXj0lxO0EbFTjDlpSbZUXNRC_CPB8rFvNHVBPsogqrTk3E92zFkewJ69i0yUlyxbQfE_E1b39fIhCN00uj7uuUOh4FqA0RsvOXgqLO5jwpbe9ib5pBKnqztwtfIYAmUP13HFmAirMgi8oACfLgA1qM7_ti53LXe09LrVq-9KRKOZqznRg-PPGBe-nDyvRcUH46ox0C7iRB4Z1p3XwAICxvko-fUnTYIndiDj4ZTYVaIUu-3VpY4MIltl0lxUIMSkopVKJj4NdrX8FUgrZXY1udhPjSwFYvxqYqqKLMobyS3CbFVTCiuGN3qSqGsPPJbJ5LTWn7gjYrh4Q6KcfNTVisZNfHB38E6cdg8whuaDioMyP1oEE6-ts-BOEjRkKhDg895xnHgH", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108587662086286559985\">Tsu Japanese Restaurant</a>"] },
            { photoReference: "AWCwydgNrfd4Q0enxgvZvCmXcJMOquihgFqnT7Z-KVT2HJ0iVkAFD0E3T4pUDXn_ylZhNHgS5GeTcfD-7ZQyVaKgT8yvfZ3WuWngQqSR1DuoIK4FxCU8BCOsSruxqaIM-wePlG_wKSXyNT-sD8qqkiSv_2pQrz-PyfpxpigNjRFvJOiGvKBHY4lngF5kbHslE_6wnOpquibbDUYhysWbHIKLsnNUf_ZoOA_9gvn6yp2MTbxzAMdJd7OouLvXC-nq_usK2XW1pxShNVTTWtQfWBPmOYNbkkkB8DXQNnTzwePd_haw7nx6zDfiyhOfbW222dfu2tTYelfhPXCHFuDOPMaS5DBrWnOzQNtBedPOilx_RGW0ruuyyYzzcMbD7Dj-JXqiD94Kwy0RWBjDJ5H3Oe3tnHowxzfODgF9rR1J2ogNFCG4Xxr3NFKOSiMluEJJrkBW", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108587662086286559985\">Tsu Japanese Restaurant</a>"] },
            { photoReference: "AWCwydiJavhu_GmxLLG-Oo5eJtW2Z4-eKU8UYX9ll8rG9N3Lo7Hxg1ze-fyCCbGA_HHL_fSjLmctBP01vvaP9HjVANNFBSD24SxuiiTckB5ji3CU8kJTm1Xb2PcvEajWJ4i7WDHl54_-4eQuq1IjmDieucC9mfeBC1bAVNWDUpUzY3DfHydtbUz390_aBQL6hCMcEd5S8d1RieUu371nXMhcxTgbz_759FVHkpb1JGxcTrjYORPzZOOfz0OaSoquldCzRzTxTeASObzfaHY5OCy0OS-K3RL3zt66c_FwodFQiBCtmRixy6g4vJZCzamV3xSDS6GJh73WnYSmgUWKKD2_XI-ywQzlk6UsJ_cSjLf0yqbmNc-LzKAXpOTG1d5vl8Znu2XY9t5gbji0TK4fZNtusBeaN-fJ1t2HR9O9Id8zgeSwa0v5LbLiTHQDxlfXZHq-", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100192202821081961707\">Kung Jung</a>"] },
            { photoReference: "AWCwydi_UxDoNoO6S6h_edXO4nTX0vOpANkwG9QkdRzrsC5Cr2lwfVKE062NK4lsR_HfsfHydXwRgZJ5_r8AShMN19vLKTEhTcOHS33YzEXVIzDI4qx57dpkPMpCwMhGOvJA6ZYzsdUlC5Vu0OdW_84YjkTyVT-IySLy8KLyCJeC19CqrPFJj6AmUUJ-Yog6MwHcvspcmM3xvWbrxECt3-ii0nQoWOw7P8y0av3RxP3gJPnGJQsaIyQJs1LwOmMkf5K5M1JcptkNytqWGdHUaYw3Bxg7JImt_NSjW-dCTO9tzZfQWVXCtfg3wndjM__kqH6EqcY2GhMzDAVm_-gY4l6-vbeAafFTrPHDGl8-HR47Soj0VI0b47CHoikXOJuEJHJEVToZHet58OZ4TqaNExEVTVGUUlf-3CcbEBGCRrgG2vpOg0ZXr877M4ekqGTZG-p9", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105860256036047116104\">WR Zyhron</a>"] },
            { photoReference: "AWCwydiEI7xgJr5d-DYRLz20lT0W-VfU2VmRR6UxpnzAKolQgX-6AsTSkuShNxe9SNKo5ePnpHCzjThoDgkvQXT9c50FyOnbw5acTzv-eQpEuym93F_IKTwcNVj6sjHXFv7uxyJJQ1Ks5X2Ws0KG454j10URgv-5AV8Ztvk6HIQo5DFihPcyfS4h8GAonGABHNNmCjvJR33SZ0NTTFEJj-OSnlMjAV9JOXfkBCwYJJfOooVa07VWgz_yPEdgeviJijNZPZUHmO9vyNxZHaqlmpDZqoFIADLZpuzBWE71bMUZ6p9do7hJtxjoftL6I1pZXq4SBUiOcH7_jqeQqvzi_di1Iivc33jSlfFwtN6XmPsJBzt38Kh3feiXdCyft-EgPESEUJhoOsRN-UP29iNFodhFvRj2lT1fW9xOpDrNCia9qs1YI66dpnGmmST2s9roPg", width: 4800, height: 2684, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108587662086286559985\">Tsu Japanese Restaurant</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스로 방문객에게 즐거운 경험을 선사합니다.",
        updatedAt: "2026-08-12",
        highlights: ["훌륭한 셰프의 요리", "최고의 서비스", "편안한 분위기"],
        tips: ["아이와 함께 방문하기 좋습니다", "친절한 직원들의 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tsubangkok.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8340236448439161357", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0+%EC%9D%BC%EB%B3%B8%EC%8B%9D+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시 세키": {
        photos: [],
        placeId: "ChIJp2dcohif4jARn3uNvezBlkU",
        placePhotos: [
            { photoReference: "AWCwydgq68sYoyhPWWQ7w5Ugx92tuQu69raKJ4s_I1IFddL1iNaWoDuDRDlJfrLngx79sa3RR7FXs8qTXfHF2QDfMMc7VttJUi1OIibJJsO2_6YehBBp9Ic_DQOeWd_NmiLqxepw37hVxZFx3vDlnOpfUCLcKDXlCB2UArqnX2kqe23KR7qPmHXfRE1BLQgSJU6cSZQUL2PcUXiwQa2-52AB9r9cVLjDANDHGvm8VF_6XpBsvbLGd8zVtnXqg64X1fI9k8H-SNmZQvvh8nIInwGQD_4PUr-Y4IpMNXS5dpGOWKN7iTM5ONwdchhoV_5bpa27ExB4zwYpNIpNIeEVclyq9APtWBxdU3o_Oq-nlBlMiT-20YvNjb5ia_el-YmNe38XgLMK8Ul2Xr8Mw94ir0iNf0nbVyTqB_HJWU-OLL1VQdRFjjYptX6HPxpV7OGszQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108166899558977539495\">Ekkapon Suwannasang</a>"] },
            { photoReference: "AWCwydi28uC3G-R7Bzgy045esO4ebhXhceR8SF7d4Jbrr6WshG8gDQ2VF5N4Iqak2xUVbwjKo5K2pAzpxXUnWIRHJ3Rnua8RJMhQnBd-mVHjWJ9ydbpFLY8dtRa59VJOVenay5TZepDqm7FtPuuuKzk_b-TbBYsdwT4-saG9yqmn5bUBvFsj0EABm-q2MHozXT6d9DBrEiSgPeBnrUHeR4X94pqtC2v5qnP1Qb2dEBhwq_0-gmY1Vh5Z7qX0mKWsVGa6qhBdArMw-re4PLDsUEam3Zx5ddxS9qKiQqETpEdOFnagQSlr3UEt1C8w_6iHhHEoUacR8UmBa709osWmuLEPVT0kzgAIC5U3eP1kMh4F9wiiaH6DqeS8oHQXT90kycGBW_ILUgFWUleUygc6ZDVB1YHab3P-Mqmy7mgYCP2Y8eTfYcVm3TvpgCrI_EQDbw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105935402403022127429\">Aommy Dyno</a>"] },
            { photoReference: "AWCwydhHUf5GdmFLV8d4HUVEy99VGdj7CoVaoUp2IFFwNPKX9hCHRSFwbSYwMIwCOT7v8HpB-X88TnRKfAQ9iuxtrXj5ox9JlCbLZB4QiSV0XATn6SnSqHQbeCvRu1PdOGehCt1W08OAITmAVHw5I_hxUq5fRdd6OAJ5TtIpz5xvEI3HGFpZjcgg8cgM4HYbWeIyeLxquYb-xqhw9fwwNA1dzLgk8-z1w4XRtn5Ou7ndzcvhY1BFHQCJTDsoKWWucCyzF5U3S46Hwd3gimN7Hw15oaNAyhQuK2NW3wIdG8kcOxqaxtWQrwDzwXn6Lp70dHYmDRvjFRuIvknHMQxhrtl7e7WRdXSI6em3gDImnG47huP5gdy2G1TyZoRgQsVNEwIOy95z1gywW5V-izN07Ab_Gs3SIXtdxZy6YEEAN6Za4UbYAVBvGt_kc98UXP7Gkg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100185399257689534338\">Theeradej Thanasarakij</a>"] },
            { photoReference: "AWCwydiNDsDd4QDkcNE_ZSD8LYPCXM3jpP5SWmpgnroLUBRROBY9eay2esUBn9X1X3TW8u9PR1fcir4sCdpsrf6JAvhcHQIVp7p5A_FfDDbG2JzVE6EGpkJpt1x6yvTdPWeDfw5tpczJdQC8j4SLTD-b6Qysd0F37C554IhxV9LQjfds7ZZnK-NyULYuOVmo0a0nEti20Jn5MaNw-a8t5FbazhupvZ0NZ1t6FoRX9FRnD_CwwE9vfB3qTEA9tXyT3KB2o3l1_PKJGhgbmwd5WK1mBLUYTZPKoQtJElaRNSh7nKQ9jVypGtopkuqLp4MO__fgvOPNFHIPddOqtPYBSlgBNOX6kE5XeRLweDfLAdUfSpl-Psi0RQZhC5tVbZiRT8KjYIs2ICmGvpRHQtVxUGRBKclFLifpEAPAeGnQRV4qvYwaT53aNZNnh1VtFUzzHg", width: 828, height: 823, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117498348214137309167\">Luca Horak</a>"] },
            { photoReference: "AWCwydiWsd8GQHauKwS1S6oUlVCLwMmtWZXKiVWASkPv3g1KNLMoku46g4LBhybVrIm2l__dk4f3QGu6OKVMWl9hOMljbTouGYFL-orlqK9TXIg3W1_EYvwklwqDhhCMQCO0kKkUKvIlgsV7Zq4y24zSXzFwtpiUpsxMPnCeqw3YTXnkbA79LDM5P8UQEte_Rte3sC0CA-_Eim5oy6JPzlREwIBm7_asb4O2uOYA8IZlq3TyIK76PzOQVbUkfpA_KVclmsDz-gTVJObJR_q3LqlCLGGSIa1Eg-pe0KDOBqJ3KzXLLeuU6V3WsXNWeiXE460sdSUKvRWMh-wM4sqOMRAejUvnBmqiEo99EC-ccyq52zG3qNt0s3-UdvOMnYHbjf5hSQ3QC_PP5UM_H5GH1tLu7FDELUzdNGyUr9ZoTRhdL7mAFb5BElulcFIT-v36eg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113999016393253067724\">eiffy srikanlayanabut</a>"] }
        ],
        summary: "신속한 서비스와 뛰어난 맛을 갖춘 검증된 일식 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["참치 특선 메뉴의 높은 만족도", "친절하고 신속한 서비스"],
        tips: ["참치 특선 메뉴를 주문해 보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/SushiSekiThailand", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5014408457660234655", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C+%EC%84%B8%ED%82%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코야 이자카야 & 스시": {
        photos: [],
        placeId: "ChIJr_ioY6CZ4jARNj3pvl9q5zI",
        placePhotos: [
            { photoReference: "AWCwydjIttMycbsO-yOUBoru2dtAgYgpvi1MrPPHrbHHXk8X29Prb-LnTpQa7qlyLExDxywVldfviLjzZ7hs7STJukZ4dbUHKR4kJzZ5IQ7tkCSGDS8V0V4p_EEQCH-mAnyzw6kj9IfKg4gfpQGn6j68Hy_dzOEkYO7X-rjxEkqaGGTA0YPN-8tOy9P47tMA2KNejbAXN_vPPL3a-wu95_vggwhK_Oa1NuSblcyv_UpvgNS_8b3J6yJ4eCkaH71pGfxbVUBl-t2w62FDpWcpFXufhliNvmm14rmt7mgrxRZWsKYvtJVAIcddoUUsKAIn8GlXVAOJXGfzKxZSIbJqZsCYJ856LBj57ZhAA1vrrUZ_Y37QpjDTDDKIKDBZ4QbIGK3I9cHlPZVgrR-qM52ckYTF-9SpqtVfRAW7xBT47-WG_Hq5MA", width: 1200, height: 676, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105244237355550387400\">โคย่า อิซากายะ แอนด์ ซูชิ</a>"] },
            { photoReference: "AWCwydiqxItr35K3PFmqmwL0KYfxUCc0t_gwwChjt5Hzk4JRZNEICnkEWcbURhk-AUakbSt3Njw_lWGhHqiu5W_3Lhyo_XhS8QPx-NBG8Dj-ucM3mMffj2UfOIk_dooBJcpVOfJW0dK6JBripNpsAUNbpB9Y0udrsiX4kam-ENksCe0LrmdtKXbgjyCupy1MSewbpD5oSgGsYyLSGKxi5ts9g16jdAY-64GLhWaKrj1EBFMT8VL57U_Zb4_CcqrOWgWzwCpoRbaJLsdqCSVWQXNhinSr8-iWj4mouOKcozMCpaAFg9Ufub49EbBRT1d2-0CwC7NJSTV8-0ePFyLOj5fKZyStn4eo6tNcAPGczd9JrPc2yZGmAT1kKlyopqiG7YG2eAFMp-pgBn1CsFZT3JxyQLo8iVpLRt8owRJmCkNmkfxjlg", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105244237355550387400\">โคย่า อิซากายะ แอนด์ ซูชิ</a>"] },
            { photoReference: "AWCwydjNMHIEaydq8Hraz-jVL3yh_7heE4xE2QEL_5L9biZUH-eHJniwMPN8RkX-4zsT7i4Rkr5Bkw6SfyFe6IXoisR-gkrMoQ086Qf8uSfibBNBtBEKnZXbCrj-NXCnPepZ2QLHqWEvTwlxhFChw5tqXOmqb9jGfxNXtzui_KJgDNMqILaeHcjC3k39R5hsn9-TrSlWWV9sZGm3RfNXQiZziT4Wcz_sPQ2bkvm1NLk5D4UP4jkvZibdUkZdqEXMbnQrNQ7SmN3MCLqmMY1Gc5Sr87946qPE9m0DJzo1g6X0DkUNH5reXy1uwSvY8SCQNknh4MJmSDIFYNmrYu_YbnsF6tfGneCAiA9-wrpL-dkKvuF2FJeaPFvLsvjuDPjM8vo0JvM_QsuW2wnGmcefehYWKg3qmzT9D7rbKAB3r1qmVd4fiiAoLnYXrCsM9bILAetT", width: 3023, height: 3685, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101968027239250716934\">Thiamporn Chaichana</a>"] },
            { photoReference: "AWCwydiZrHnQGwPLdY_shvXcDnkns6_gVazDjbv8SBxn7KtwQGJKMxyi1vnhL-ZP1zCMFFOJJpcaZu_dJj8yNQGRXr6qDQeaCnivL-rlzD9oI2TPZ3mrx_NdpqOUiFz6THhMREu7VA_-DPzokpDdnYwovwUdpaboAmV6FBZUrRRriQZ34pYl_jvrPh8-naNxdYbdjEAiUf2V1w7sPwhGMxNHkGu7HHDs9kZXakSHrH_MDvuVCncJ47H7fkB7rDu4LRDGB7ptWcI92TvNBZ9yoiXQ2cz83gqTaycbjAWGFfLlN4P5ypbXlAXH3pTchCPD3HeZ4i_kxS4hTiIdXHztetewkvtb-vlG8uWs9ps-htFTL8XlomXAfhv3BwwDBkGkGyBtxWhMzcSdKeTjXxpbU6vwTnjkOv5BpZyVggj6pi8ImA-DP8Gc77WyjHZa41IFjDZW", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117791914998111868615\">Tokmun travel</a>"] },
            { photoReference: "AWCwydi7vTtq5IS6_uFH1mKvDaA_eB3Nv237cC8T3QrP7dOlNvT3PDLEmJg5iBL7X-kU1Hq_6xW4hSyIXIKi3vjA42N-ybYZo9QCT72fsjFdC8j305RlaWM9b6FhSKp4c4hXlUtBVqEtOvRSlWgYg1NFDUB_9FVjlnF3F9P0uIEvTl4UUzs9dXZS1bHES46gddcJVukFA8pHT0XnVChaaHf_znQSaBHG8Uevrgav05HsnU4UtUY-zknVZoJKA34wsB5JdZQuvJYZAa_NZGe-EU4bUalVjv0PbWCqUeuO8mujubu5sM8tSrkI574MafmRxNeIfXNLuN35EclwnbN-KC8m3EmEBAdP2ycHG3L0FEbQkntaBcNMklWZNViuUezXxmcnWcNcGud_nMsyY18znit7c6LnC__g8hwE8Y3J-xdkQSGBRWeG1qx702jE0sais9gc", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117791914998111868615\">Tokmun travel</a>"] }
        ],
        summary: "신선한 사시미와 다채로운 음료를 갖춘 높은 평점의 일식 레스토랑입니다.",
        updatedAt: "2026-08-12",
        highlights: ["두툼하고 신선한 사시미", "라이브 음악 공연", "다양한 음료와 디저트"],
        tips: ["식당 앞 무료 주차장 이용 가능", "만차 시 인근 주차장 활용"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "신선한 사시미", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lin.ee/Ns2p6OQ", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3668017380973952310", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%95%BC+%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC+%26+%EC%8A%A4%EC%8B%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "텟판 사톤": {
        photos: [],
        placeId: "ChIJ88ffnzKf4jARTs8QJMa24UA",
        placePhotos: [
            { photoReference: "AWCwydgn86orRKjiA7-vEVUIkD7mTj4Eavb7Oh470Dn_FGxcHIxAuKS89kTZ8GX5GTPZnRMKWvupTclStsoTJji4dLHDL3h96VwLPVNoot2gnzydZQT8fSN-kcE0GBvC_MuBhFC2su76rBUFXg99u1OTX4T7ObvUCY_XZ3uN1EQK1hrKhNOpTdzIHNL45XXTnE3ExuFMqt2NtMr6Xq4bDu2ne5k8fS_wFSUBOPfMGWxhchG701BD1vJbEXXKbTXVqCIRqrbI46zcTCAMFD3HEFWPjgKyyX_qrR43LahBfVUeIUiaORVD26PLJTkreZHajj0iPPlD9ODCuxUFMZoYrcRLjlNfAsJAa364jpAyS68O31P26JFaY6SIkiM2O3LMARfHLZWjRnbRIVNKUjudlD-Rcb1Cz9WexVAqNxRZLx_G6szl4-M", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117783907240105910779\">TEPPEN Sathorn</a>"] },
            { photoReference: "AWCwydixWPF_e_jeBhNhGBMjok3eCHN7OZdKnUSR56zhzBUiPtDo-S1RT3WJ1_nSSxwkduzueJBzSi49TrN5tbyc7ZrSBUbe5Ta3JAJi9JkuDuzarOdfNk-_5xz1PGVS57x6bwHwe38AcuHM4zQo4TUbkOXA0GJtAd3M_6SZkUpezjhgnCnH2QxRL_-1bTBMcXa5yheEua6l2qAIiuiFNdOF9SwhPAsJocqmUu99LlXmQLFb4Q1Jl8p_JozMz6enKnXtKEsCjnEtKuleF1a5FYewWT1rcQnTlyI6l8NcMCbmeWyACKRICt9x720cKUOtqvSbIc9AJLvgaiZCaKJj37M11jvH-ZcZDUoG9KE7bp_xkijWKa551gH4HY9DG4AQZ966hvbIeFHnGvFVxuS5PjSHQaOyOoYhZHQrfEO58xGXcA4qqaQ", width: 812, height: 609, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117783907240105910779\">TEPPEN Sathorn</a>"] },
            { photoReference: "AWCwydgixUXFXdfzy5XFeSX993fd3ShKTWzcqubnEV9iCkh8GjumFTLjVzgT018jRDdS1I3vw_oNjZtQsMEOgaalIgjO50BgUXjvp8qbOY66wm8lJFUmr5MvuQaFaZhTpqXOf9D00INMsIVUa3bl4P5pvRKUZ2FLcyFN-3xPod8Q8pZn7SeaIYP9l1m0-0VQagTZmfJmFfE_yOHLG377R-exeKWBHXN9Sb85stle4_lwWzITJb9ZoLeb-T6RabY49hu7ppq5X1SYsCU3n64LO0DVgxaGnzkkAdHiA9veKRFi-noPe9vsBCwoNx9zud_zD4695VbCr9vLp3vT0NuNbJkRiyIyu1AidBCYrkq-_IbD7dNQQH85ttvau4Orb5K7Hx8fY0XmNAbEdXHk2vHeSE5ZMtbEco7e33hOO292H4dImpcrGS1oeB2PnPvXJFN1NK1o", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101180474190586063496\">khwanwong Wongboonsin</a>"] },
            { photoReference: "AWCwydhRc_e01QwhZiP_XiR65yQ8Ux22Irmz3tEnqZH0RA_yQ56s2HiE-AOWgTKtrXG6ZuQq-0lYB_g4B2l1C9jsXV1FEhKpejcUXzHT6HOwXKCbTIc4cbPj4MqJZgAd5-6zL3PXxS2jSHAFEfnDYgta5cW3hh3uW1ILidT4bhx5qvWwFsH0jQGNx4emZq7xtfadKY2qTdFWy4TCbD_9PkqtCdftjZIBnRAyJAEdx4zMOvEKhhBTr6x7xWJSLsYPeebKrbt59tG3Czk7sVBOjBIn1JdPTi0QNGsCxPxr73WdyV3Q-keevw2R1gx5oVIubNjqJmMZUv87HmMy4QhCzUZaYyoZZAAdW2JZj6b7Toy8xckdULDvaYQ91x_6M9Qf-6VvrYUXZc-_1m-7aAI0GFPKggFx28J46IUyz9SGzE2O_qCZ5HY", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117783907240105910779\">TEPPEN Sathorn</a>"] },
            { photoReference: "AWCwydhTh0chkVMZGeQFFEH4-WUKmVipeQsTiyRpk9d4CryT4qp7SzDlVOxkRFWhscpA6aajM4NgWK_UPh1AT5XnjRZU0m8KBWP2V1hUOpUaw8B0AxhDKzIfZkcOKkk3dehuxY81P6hY87H17yzteFe3ZLhIzAQ1Y3s8pVWhtP4OyptLToKbYpMJmHnwyi3P9Jce2i4vOFS4uauGz9lhh_FtXEixTSDvXjCf2-K5eRisT1hFF65tfUOl6bX_CpTkMwp83vCPhgtIjMqQgQwJGpwqQFyR6BhKgRzU70R9HsoSEAXa7CE-aU5fBGxs4_HUVriyAa7YcRMW11cQwigdPZ4X1Guczqa0A-_2Tvdhrqq-SwrhRfP3CW9UseoDYP9xyaOsbKCDmsRqxF6yWH8k73RUJvB8U5eSER_kUCfu0z3ccbnpgaG1UCrs1HIVBsgyQG-T", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101180474190586063496\">khwanwong Wongboonsin</a>"] }
        ],
        summary: "맛있는 음식과 좋은 분위기를 갖춘 일식 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 음식", "좋은 분위기", "친절한 직원"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://teppenthailand.co.th/branch/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4675218850312146766", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%9F%ED%8C%90+%EC%82%AC%ED%86%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Ratsstube": {
        photos: [],
        placeId: "ChIJzZfOvCSf4jAReA5F-MEwPRc",
        placePhotos: [
            { photoReference: "AWCwydgih7dHTr7D4HDA15OJUib-8Yv0aAtAjy6sTmx_fNNNyieejmFc8ZDaGrZdntp3FvgbiZBMs7PHcBfLvhKrE5RIP3teGCM8m430iSVuMaXGdox5pnkVUdiLIUXF0Umc3-gyjJcKr2V0TvZYIEhlCoVOwbu8jICd6ZwJOB-NA7n1A-kRpCOzVy6lPAgxgqvQikMZwEiC7uTIniOr_SOv4Ba68Kdiy8tZjFq0xFExLBVcxUq29nmwZmF2ZZFPKrISHaXxEEz9c4X29f4ypAd40lcGjT_VyJVWxfSJ3Z0g_46p-u70WTwH8KPkaFN4HiOTKtvkFmNMLAioEfpmldGWPdGyM3gbGaOUC5VcxMDt0-QrLU9rXVYZ_CvttI4RUKVvb2vPuQXXLz6CvaUFe0a8E9H5XdwLTkTibGd3wkCAKVPE9Nti", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112621712046246815596\">RATSSTUBE GERMAN RESTAURANT</a>"] },
            { photoReference: "AWCwydhGqsPUaOV_0iZys1aaURTZbARbGTadFbHhaAeffZV2wB0I0QsAkDLe3OAPP-v4Zxnd__5-t6ayDZO24N06DTX4X6C2_ca9go4Ry4iApTz-72kDxYF0A0sLshRx4yKjWHdO2xRbIAf9UuAET-9MkJZP0PoGyjWE_2LhffQBex8vjM80xPA5NbMHHI1W2TimB2T-QoCc7k-hdofll7rzmya4z_flTp3yLDT-jTDwEnL49oD5ticEJT5aeD5F6xxRtzrFpKf3KaJxoXPPVcFa0fx-PrI3GQdHRXgHjixKMsB8StNQvf3x36R-KmAnaKJdxIk3sMk-1I-I1xL7CnVu_dWt6Ir5A05ZUPszOvw6k0FCKdkWR2MovzpdphKiy7zSqsFdax7OUwWLODId5Esk3dPbVgWQgdX19vx-IZnuh1CBtw", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112621712046246815596\">RATSSTUBE GERMAN RESTAURANT</a>"] },
            { photoReference: "AWCwydjMJE8hhqxdpgzCNiM7o61jyWwUTa-k-L80yL0tqdHFyCG898i5g9yQ5JBJZjIAz203OS_tZdTO28q9mCqGn5M57LJn2CdA7s0HLCI_xQtbmXu8s5RbLpbqEPMLCGfo2XSGzBBqAA2NwxFUFRP_ChhwDs4JgXKcbD6ivfkW_0mvuhmrPK1hECe-wWX_--UUTkA_zLy1zNJHeoB1Tbm__uoM4Pa0PykBhm0Th3K9oOMNZBPzvSiIUCtn-VBeKqnpp7dFb4XUrxIeJDifJMTzEs3FswmW0QrsIpfQycxhIh7W92wCBDRJlY9dBAIheyvYf9Sp4N3kRSgX-0U0MRmnGJbLd7BFTdXV4KuTa1iJRL_Ypy7rJg6j-VGWfkF19ZBZHVXBcghMSVPVm13pOuQqx97ainr7e-WKvRHmkhfov45VlWDEulAVsrTlrh9xTp3R", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102764840304082540925\">Athikom Rawd-own</a>"] },
            { photoReference: "AWCwydiP1resIOaBTKMi3cUvIIrUSrNA6PiqAx12E_gK8PlcNg_-zKdpyl_DZ-vgmYHpUy58T8cdx86P2Gz3UxEsOK4FLxtlkMxPxPWrpTSz1TM8WLpBa0QGEgMXU9dGQWUtntuy8aeIzz9i3olw2j4kcQ0175_s47QCM1vyyU6rbbqwbp-jhA5FkuXJz-lcXa7pyLAmho61zLHg1UswNrp5Nruw4Si-onMVx0DWBV_NybbABoxwEtgWUP1r8NPEwXRHTEoSxmeLqq1xFIHojCCofccf6i1qNPJBLS0--0lw3zYomUULa_0Bhb8YcOUMEX3cBT96BB7FsnI_LL38jFZt8rt5R011qHhgm4jq_7MsN7TxhFEg_DUPAZudnF7pVYu90c32L-9vjTAMTw1J5bmuuiWU2euTbycF6_7i48mMeOFBRrxX-2hrXC2XN79W_XcJ", width: 1254, height: 1254, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112621712046246815596\">RATSSTUBE GERMAN RESTAURANT</a>"] },
            { photoReference: "AWCwydi3WTluj2eH3_H3ciFYEPFt-LlLGUeKpPVwH9vaTpu47XRYPk9KRd9aYQjogRElTiXB-4S1pIqJdDgVd949S_AiYgZJtmS0E3mVXb0rrhtx0Qw--QgK335t4JKZgY5SBXNviThWjZWGNiK6EEnbO_Gd-aBgkQ3Dk3l0Ys0uPwinjWdNtLG1MXIabj5ZppejT96lvatgUc_BbfhYO1YHyefZ1yfggDE5egdTdmXG3kXDg-8npepUmZmTSupasXFW5rdFSghc7OHJXv4EokE3C9xzh9VK1xJqRFvH4vrhU_iPPLpFWORcNFPEmdtlIhaUCandVWvusbzzyMgQCmJ7-r60moFgyA82YYnc39wuwHbUPEuzjIZOTpI7PLGSqQ6kb2LY6uLfiJ9W-7P6fonp5uNlLaW4MkaV0rRgkk5CLXwxy_0ol8TCV9VVDEPoPb1v", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115775233963813545148\">Kannika Kantarattanakun</a>"] }
        ],
        summary: "음식, 분위기, 서비스 모두 만족스러운 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 음식과 케이크", "훌륭한 분위기", "친절한 서비스"],
        tips: ["케이크도 함께 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ratsstubebangkok.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1674548246103789176", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Ratsstube+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Bisou Bangkok": {
        photos: [],
        placeId: "ChIJMcFRFM2f4jAR8gUhlUdeXe0",
        placePhotos: [
            { photoReference: "AWCwydjD_qBqUimDBsaskKD9ewebNB5II-MY0OMtz7_7SdfC4GrVtetReno4J49jBU4u0WGE9XfGvvJiltZMNRRCKRBs5ZYnwLsRWQRVZIrWTpcnH778Vd-0P3Ob3Lc_3-RwmwOfp2c_WXhlTKLCFE9wZylRRnWi6c76H9uXX_YH6CUSQgdxJvpPKr1jKxTCnNPF5l01Ji1ksRcPht1jtqWRf8RgyzT0vLnQOiyOLVZESbcMGM0ZZvLJA6YfgHF4-j_2DeCfuA692YvCsaBLa-LMXTd8MeJ5mvp-bf_ESUg_73DgB_6Xy7wVkofvAD2zlF2IaIU_FL4EEAXPJu47_uuR_zkMOTfhzU1txuObOUG2FoZzsk7FSNCKENb1Gf8QW8fqUJr7cwTCBCLpQcv_j-V0D6jCjUxl7YuSN8P1WtIoRC7cxg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109873499676692722102\">Bisou Bangkok</a>"] },
            { photoReference: "AWCwydjrtwKnhLieOHs-gyokP0QLcP0PFXif3p3SyArnqmb1BpnLG-k0JIywruU1VvnmvOWMaa1-I0bvmqowfhwIgjoKrn_NFP_v-IkgahiupUXuzX2I6vryM-4GE3Jn1WkSurXwdrcTSQEmQOmuIc2HgFk-kjSWHZIaOGna-XCBx6a43mYvf8oUb-YwHIUFXdqJY827Y8UVIx_KXpJ6EVNJgvE7YypvTuUiLBxpfKOPftH8stnqB7rFi_ODzDARkLoQy81lyffpH4FMf7Ha_SGqYh9qgnLII0l2GjQC1TFZrxSDWEt3_PfsNrBpszPI1WzGwwtWwmQBVOp6E4AJ7dyowUkB0mbsgW1XY2IR7aKnZrCysng90jrAGuZ8EWPECHw2gvXaTAGTHRdJWQn_SOlXZ8qbKmXDEih6Zh7jfhhKezg7aARuXvHKPEbptDEjtg", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109873499676692722102\">Bisou Bangkok</a>"] },
            { photoReference: "AWCwydhGKkrEHE4tsvVB2gsrtCpiEb5vaDUh24UKWr5I9SkASp343vZsGBGvZsDNr31b1WoWDRFPkuAmICwdILQiJtyuy-lV07NOk6DHHVPS8o9jsjttANifH4c0REjWXMYoxfTaWXZ-8BVQG1dcwAg3SAhiY303qYXdaOo5xYaU8RJDhMl-QhhQ0yF01qJltuhS2WMRPAK23syFzNUc6I7LHDx5unEp6_7bUCzH8ruc3rgx3vW5D45COjTuHMGW4bFpLD2QCiPRIxVnMMsjUT37oxvobjMes8ozN8Hupm7haM8Af4-K8KJG4jtD08i0yAtJJvxbqznUalp7M1jR9DUu4LpmmjynR8HBhET4sjIuHYSytbN4rNFs-OvyMuH_IhI4hSgUk-qFv-3423OA7Jm5pK4OFe-OUtx5E3kgc3bsVo1EBMZvy498u9pq4TKPMg", width: 1206, height: 668, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111514380458684813705\">San</a>"] },
            { photoReference: "AWCwydgEylMsht8XNmt3kLd1VbGgMgzH6g5SD0h2X4zB4G7N82D3B4c9sFFzb7yr22ZyZrP5JAHjNQyrWBxytuPAkmMiXshtDFOR_XEKVEvbqA67TrD7ic5uElhUtQ05p9mUdHrxm4dhBORWcELx4KJXHCIh5_iAu_LQOEJEbC02G0gfdN87ebAdnE0OP_r_hho-POVMDsgMe9EgIKGzEsLTu_-x7sFJ1mYP1b1TzxfccRvAOnXDpbJbIem4_MS6ozuMNc2n1-aBw0rSZHuLVZoKKBG3yCo6dp4u1P_PIvNs1QRoId3Muwy1aXCklCqPXyFe5-kmcu1mApErlvcz3GdsPnMZ71ZH3GV5dLmP__Yk3XuwJEXBPjT5996Vxt0eE2Fy_SflcWFISeLALrLsMWJVzqT3nA7rLo6eMS73N_NqsdbMh6p-rNw7tMEiq7JanN7t", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118050556344246134231\">Rachada C</a>"] },
            { photoReference: "AWCwydjzDQ9_epQ9tmCcZyhDHMh_IKij2A8zAYP5t5Xf-Lmr4QF3zYPsbD3P4gegcK9cdE6GKbo_PFaTVf0U2t-1T2bIYwIYs8PTwDirTd1HdSN6p9AdneFgJ3jCH4USUOjT_27hkQl7jeoGXmSOarPdHsmzqOlLNdS_wbr_dAaIZ2eQ7US1HsetWDknmS-wI1RdzZGZ-QgSTstxWTNigcZTGJFdQ0bpSugNzHmrS8yJ-Z7xBlJ03WFcT98lmcPwz9vJQMNnjr9uUYEPaBpFaU3OFnb6-llenTGqEdHHj0WF7JDtXSks7G5bxuQMmmWo3LxxgStCW5W95ZCzr_BNXkRZyuQPkfaOCmjM7dUNPz9GthmYw_7Mr4vXVSaKmJcbv_J1mtWwYAypIErtx_RkSVMr7XSvKbkmkxQvaTdIYwC24J22_FTDbfmt7a7Grbx0BQ", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105809600501127033088\">ตามล่า Fine Dining</a>"] }
        ],
        summary: "높은 평점과 친절한 서비스, 놀라운 맛을 자랑하는 레스토랑입니다.",
        updatedAt: "2026-08-12",
        highlights: ["최고의 음식과 서비스", "데이트하기 좋은 분위기"],
        tips: ["특별한 날 방문을 추천합니다", "직원들의 세심한 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:30 ~ 오전 12:00; 화요일: 오후 5:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://bisoubangkok.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17103930621360670194", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bisou+Bangkok+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Swiss Peak Cafe & Restaurant Bangkok": {
        photos: [],
        placeId: "ChIJpYKzMgCf4jAR5Uybv116kHE",
        placePhotos: [
            { photoReference: "AWCwydjMb424arSwO7aPxkpZ68qKC-83FUEe49cgULlOc9m4S5OHowYn0X9OOZMX6ezwZOjdUUEz-nI2kS3NF6YI6k484Ap4orHUyaT69pIaoegWzZQ0medkr5ZKOj9DKFgQzVLBUrjyfRDE6W-AW-D00Cxz36-IKSFSyQc0LE0S2-NadaP7xBdHvELSKvxg-nuJUAwt0pzZeLt9zjWt1ugVqr43LyPTNxhdv0WSqTFuuHjdBa_Peqa95MT9UBApxGviRnaR4sRjseR4rz1DdqTLh72Lx_-FNTYA6bCcZdepkPBt01oWwlQmLK1rLZXkNSA367UjRLnyiinwncWIng9oRIvxvtkVa59UwH8AHo_xSypm4kjrwgZlriQnjaaO4hNmcC5wzOJWw2Y7zuQ0Ym6tpYXTuuSiLj_qx5oNxjhUZTtAxz4sEsu6z65ibhYDexf5", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117334252771580430334\">Lionel Bonvin</a>"] },
            { photoReference: "AWCwydiLJUyAbUy_yGu9BRHqig9UYAGhomgYAOjSTNfJfPBnetl9cFhcz1sPvZBDMCR1STGHJZzSJjtDJ8NUEi7Vn8pTGuLuzLd-nsXGnWT-XEFLT18EJAjDW-NeyLtS7ASPe0ST5C3-1B5TkAeM8v1vdsapa6KMzQ1--IQ9xyNMHdsHTEL7Qt7bYvWsGZJZLI7qgYm6iUHvicyQx1HnubObPwRNWnYyxJ_-QrV9NcaDjROUDCKf6GVQerY9XMZwA15RKRuRGP4VITUCAxDSlkvijIl8ZKftmZTL-S39rJ03G8w4WV0EFsgWi2eOo5gTMzq3bHy2ClpGFkM3MvYuXwv_TfrZMk_D8Cpb113IBy-z9S_tOYtyZ9hRB5NXq3_XuOOPLbBzaayids6f2NaE9FNWjpCh0qMhCZN_JwcmhtlD-skfaU2tkNI62ICKWIEkBTiP", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104125146336830159997\">Micke Bouchnak</a>"] },
            { photoReference: "AWCwydjleaUUMpCcVr658eyliWK5cSJSn2Kc8rrIOteVkHLnjd42u8nOTBI3Ux1hchW1f3sDkzGTaidNC98DKJesf971bV9knWIL0KXY-_JRYVNm3LtAWvBP2vBEn8-HGwg9qg1o8Dj_CpVak1ufnNaTgI5KoI4w78VJYMzf52nmCH756JgigjvKWgEtvJbGCSrjWv75F1wFSA3P9oPzHOJlpFs7hxbMuWfjCa2EUfaJN2OZhoct-kYVRnh4BkeYfPwckapEvdMKgK8P_n-F1gbrcLNHeDI-BjhTiNrlp7rBgfLBk2wTrih3EFP2e0dquO2Cm__931WoJMHbnKKeyp9M3nNtLXBmPbqE9P8FtZldASLdFxkebNS42a6g-6mWgAriYWOpE-aYL-QGHjJN-y-OEGNRq7qNShpx3nCgwMPs6OCAbLWqsI5LhbZeiqhAkg", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101751637194921412305\">Olivia Mo</a>"] },
            { photoReference: "AWCwydhtXMTKNKEinbiudI4NU6FUi_PDTDL8BYm9gtBZQQQ2nQZ9_Z_HJGwzpStFnDAThTL9iLG1kDlYhhJDksEcDn2hq7chBUlQvKDAaoJ3iC1_Me0vXDCM6jOf2aUC-8H4UhyICTjrRV10B1MIoPykZM73k2YI6YhAUljaVdECAWvpvtOm5IWBlpestpFi7n0jvvzWfyXZHxEMJBxA9wTSaTICtVyBHqkVXrxj-lZiKynzVp3TPhvPyquHOSfZ7ogZ81bilxOMffq3sjyeRlaTG6q3gjLi40bhatpkSmLqMBkCv_Ub6-K0CyZLEBiKj_kamej0X-m9kUQEN1c2hXknvHM-DVx4_VJK9m5-lVlsqhJeVZzkPTmRs7v9BuQSXcIILN2vOTWrqkjlH3Tp92ebo6DUMganQum9a1HxTE7by95Hk9tXDCExqqXLNXBjmTHE", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101751637194921412305\">Olivia Mo</a>"] },
            { photoReference: "AWCwydj3d4ag0GE8JRpI-K8UDAC-XUyEsjdj_ezHVkcu0PkwWI5a4xPiCkkCHmoYQV6yPFtfFMQBYZGuIaF6Zw23PEcCknow5TB7MHp0i3jFbFnPKnf18Tg3SmEPm5o3GUZZUPDjt67YkX5XItRZuyvhL25j1QlbdRwQaruwo_xqeQ5UuHv6xVgLTCOzNMQzLlk2tosie-ipLoxabUAFT3_IZP6Mk9aBr1NZjI04_-83Mm50OhC6NGb3Ym6B813e5bokMtTTKLJNv-TegLWUMJx5lomf2ZmYGIZUnq3uE8rRlQY6FCKwVooQJZ0KBLv0NITZN3DIGtqOUaSJnRDg3fXgIT8xt-EAXva4Ey_SI9gpzUBSgarfazYVZBz-LCH9ow9o6f-R7-bBwRBQh2l2gyBAcjqzhox6ZS-aZwD-soVnXf1AxTdo7pojV5dHfqvW4U-G", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104125146336830159997\">Micke Bouchnak</a>"] }
        ],
        summary: "퐁듀가 일품인 분위기 좋은 스위스 레스토랑입니다.",
        updatedAt: "2026-08-12",
        highlights: ["환상적인 퐁듀 맛", "멋진 인테리어", "친절한 직원 서비스"],
        tips: ["퐁듀를 꼭 주문해보세요", "기념일에 방문하기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스위스 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 8:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8183175065997364453", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Swiss+Peak+Cafe+%26+Restaurant+Bangkok+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Roast @Central World": {
        photos: [],
        placeId: "ChIJAyTPk0uf4jAR9Rw02rDydYI",
        placePhotos: [
            { photoReference: "AWCwydjFB5e9_IwhJLOVKCaKh4jZfeVLuobXuJ6FUAoLzwfdMhizYeR6ShUVVV3BCA0cllixjjxdMEiZuSRJiXi8aZdXmUthT4Y2CLWM9wM9ClfBzbE9iJ-GBlNe1KXmdfQijma6X80fV69BoMbrN8416Aip2aGE78tUbXtE8ljR_ipZ3zKbv-Cytj0-yybmgv7tHScyYDMAfLK3bNoBZPyzdrkmV8moXVs4ONpDXsfKicbcFP5sm1pz8H8pgiU34_EznQfiIrP_g-_jl3UjRUHUsiaemmXUqL0Z0uezEkCS23_rbRmdOexwvfVLTl1zDGyclZZBM-ajj4vY18ATvIR4AhqEA9-SMlCJJK6n6BTDEAMy2dVYnynVXW85ZAnpVuchjbq3l1cqIvaTBsKJyy5jYJVMluNC9Bu1475OnejpWmYaTwkf", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110124110124978425733\">Wilat Wasinsungwon</a>"] },
            { photoReference: "AWCwydgxadG-5JoEmbkvoZeS78Eyh7Nedrv6PpO9uzsBOshVlwz6UlPk4z8UtZHf-3gIGRn5levd3pK4RLQon5YVhelml8PkovtWBNwO1z0ZdPjzUALQ9M9Vutv0-0B8sSs-forqeiKQr0a_3mNClMAnprzGsiQLqVjqOgdYOlEOuV-ZRjzvDBuMv_eiOrHvKikiGy8OE0EjTmtx_HuwhAoHUkiNKeeFkVgBtjQVXKLwp7AZlyeInvjYzUQPK2s-GYpymItyG0pVb3lkwBSDZ8a26a8kRsXS3OCCoy286M4XcEE736YVlbH3cKtV1Tv1qCtmIZgCoT2crgxhZo05I3o2XtmFbBXR2FGR-_-6WO4qm7GAdB7RENKykr--VfYUW5YVASuwOourInEuMyVApr9dsC4aQJSEVJrfq6Un3TjfFmF0Wb5PFqucS3zQ7TP9q8Xv", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118051707610026588684\">Owen W</a>"] },
            { photoReference: "AWCwydgt02LGpEAKLyXGeVu6FZoYagTVac2BB0j3-5mUY0o7-_vG9lDN5U_d1CkM0kgXIOSYnCNJePF3dPiYwIgYvieNxICkifNd0oQch7KzbkmyD9UmidCPF7G7pVYFt2NXntMf8skWQfcKJhaI-rSHDUoLcNtTbIchFMQUJ6pSYd1EhcKXsMdk6TzMJJCpfrWFgzXOox_v1NvyQxSjsTHAkpPIZE-Ro52b5LYAsnNWNXoOGTVFIWxOoazej1-sywOSt7Tmhk1jt-KvoJ1FyuWS_2Vd1f4Kx5KgDEHZVFqppcB3OHucFFvj3_hwvesdN0hj1kGDPchaHvXsY_MpWXec33Ellhs3r238Vuv3qzC0bCc2SUWyRV2htVCNDgsEwW6pw4SsvB81b_hVcYDmLuEGIfSyyy8a1SkL25XVc1xuUYy1GX9Qfrm4h7yaCRykCA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102838158108398925784\">Sam Lin</a>"] },
            { photoReference: "AWCwydg34Nyhc3Up_2_tjvMnMR94WI5l-R15krOY3nWh9dPvNB6dYVJY68kCXz0YvXSs445E9lh-18r0CQt3W5yIPepOae-ZIh1Nlg1y0xBAe0i-d9E1BT50vyQnSkKeWJROyPXYwMcTg_-PeoUzpooFvcLiil3LtZQ11Z86lT2hzcg6URIzZZ8i79NaI870lxmc3lX-HZTqT-BJiNxdg_y9b8J0SO8Gh9GvIMv1y7ecvdZL9xYcpRoL7OCOmubXQfY89PgTfU-dRwUPjnOFKjwJyT0h33lp8nM5sZlNr-ucC5dMkquv0nNBMY75W6XJfVmWO4sPsQDNb3DxX_quy2BQtuZWQYtbSAMSZo8aI3YGBh8AX-DFKQ6B9DMTkqicWTevvlYTTc6nDywhNwUhOy_5Dxc_10FMnEBU6MdQuw01Dvt1X_h64xTJ7HAZz5LuKlSj", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106822197528181846448\">ehs wol</a>"] },
            { photoReference: "AWCwydhLNdC5d3SRBkRLM_ki8-TR7Shr6CyhqVfS-oZFSmmkhi8d4yHyfGb_A246C-7rqzpwHr0fSHTg8y8TCl3E_BNFhibd7xQOXy2l0wM1dD4VeRiliklSlQvrs72ZKbIqFBnAKq-yfaa98y2VKP90CVKpIlyoTlkp2cj8kbPVbKS4VaKTg1yNbvI-K_ftzLfflX5GBvsA6-SfsQ8-OKbqTcY49M8bwGuKjSQmhMGQJKdtPUT3Y-mAZkqMrnx7kHSairAsqcWEsqdPCXTyCQxlB1LjYJi62VKmsdnLTEjNTu0VwyqmCjisr34hpiTi6fIEHsmMXTuZPbZdXmxBUGPyxbuDoZ1-wO9hIiqmwSPYFe5Yk5PCgLmnW5V8jhsee5vgqOOybWdKVjtBJNaxp68VDdDyljoOCPT3llNlM7LJHqrMIBM10LoifPAPl3PqrQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102838158108398925784\">Sam Lin</a>"] }
        ],
        summary: "훌륭한 분위기와 맛있는 음식을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["아름다운 레스토랑 분위기", "뛰어난 접근성"],
        tips: ["센트럴 월드 방문 시 들르기 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.roastbkk.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9400686638594792693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Roast+%40Central+World+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "G's": {
        photos: [],
        placeId: "ChIJf0ddfiuf4jARDbyrC-xaU6c",
        placePhotos: [
            { photoReference: "AWCwydgx_1UhwXYFAY8xivyJiso-cb2mFHjxdBybSdMqfeDvF0ZHsIikaEkjKEIgT38J0EkX9yCYebNOKh_CXjVp04xuX9hsb8bnlujpVACzsaj12DqiOcyy9e3mTBSr-_im_0HNlW5dTpsD8WWKOeVxDZhj-lzKKSjdKBheuooUU4Ihsm3AaXR4KZ2WLKndidi8toqBx6jEE5GxgWwniy6qha3RX9lLXgrOI4zMic11EDsMoGpsH7ecRSNL5hSjR9AneXLszQXtHHAPQx4kbU-9px1eytFNF10H4-TMox0p0Fzk727om6h77O_jDfBriKhLhWr-cfAU3yOZcM5KYm0UONhAnc1KKzi4CWpiUwJ1FRMEzKimbIe2r8agO-CB16XPQ9pYcNhEwBYQhGOTMCkLPnjnEopRlbeCyD8dQDJj3Q4JjVVb", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117818314604072650312\">G&#39;s Bangkok</a>"] },
            { photoReference: "AWCwydiEej7kxOv54e_pZiZVjgBUJCcBwQ7G7x4OGUAyxsMXK2KX8f7F9n9y-lxJIT5SOJ8bPzOAFaDZFgGHmdTcH9rdJP_CwABEgzYBb9Ga6juvqq4vOV3KCkYirzPzDmOtI0UIgHoGmLahfbksNCAZJJMnfOin78-kyxD9JBYnGHw5nqnkQ48PpqWD63QmZECUO_Q89ZYRXaSDW8cSskEhLmURQV67stLwBOsosaulXx2oQIzenb-d4YKpfVpQyEax6M1rqBS55hraDwY_TKlyDOO0MEsD9y4jnsCV6cay5SFm_FMEJrOIEoyIfMyicALRJVgAANVFU_DlCZirmD9dhvHqW9t5VItzfVQ2d0Ei1HJ0euTWi_Px2Db4ZXIIN1g0iaFJxWYzSzsmuIJEfItrGuXSJ3WPaE3xXXW1c2jdbpU", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117818314604072650312\">G&#39;s Bangkok</a>"] },
            { photoReference: "AWCwydj3oH0aJo_RcezevSJNr22-DFUB-3s0LUQvNIeC55n-kZOAzDseAF8pIWgy5KEoy_Nw2Oan7x32nFAxDDishqZCzDVlmk55MDHmA33kcyk0GVVOl8LkiwFReHzgY1pBSV165CUYJEQ6_ShfY9FZUEsNIChS7xGbU2v-MSr_QayrHpPXmGdCqBkQNwlglVv6ATCmo6C8000aYhvdI7W9SqsKza0fqxjVPWXWxqiCUgNycYa8rTsPpmX9tn0BrhAD0UhntMb7w7qev0CujdGzbgAQXauWM9Z7320fy-ko2du42BvjA572FKcPf0n6MH91popf1G0Si5Rmz0EXOsiyJRv2wjolA4oENxPtJ9pYU-JU40EOpWAe0OWZTfnxIF1LSGOwRDDh12dy-Bg3kHd7rABpq8RStvsILTspWGSl5LSPKCF9EhErZJIfSUojLpEq", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112639376974307714123\">Maryna Y.</a>"] },
            { photoReference: "AWCwydgbMCmR0uLiH5nIPOKFJO5d2cMNsaUDTds4K-bezN0QrtKm1UvV5J40yrrwlfkLx8_lxPKyf-m7KMyc6KVkrt0wBT7Q3OfFcAZLVYCQpPgUu1YDOQdr8foaDxYKsdSww37JMd6w1i_9C-VLse_3z5uzgbox4J5GGJX0I8K8GRf4-C4kV9EMvw9xI1B7RJq6fuytbaUCHTct_f1siWDM1EqnKdM-HMXmQebLqiQDNesWCcPc6T65qP6jx5ehGhCpKGhQbzREfpw3-KGek5dfNfndE5ZBL9bCn-loftqrBG-rzMqLf6XqZgRkS5yR_qmWDO1YwKB-3K4Dpu02yVTJ8rxPgGjsnut353acExaKsBerGttLqhklI26V4aOcWPEAnc9szBWzYKQaA9cKF6zpkpMgCPSLHzXI00PfFocOPOz7th-3Dmk4qEBN13dBLmwi", width: 2778, height: 1632, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108625109017775365990\">John Markham</a>"] },
            { photoReference: "AWCwydhK1aSARXbRM9e4_yUDQnY1JxbxAgbPd2ufUOApxaWhI2uyGGdU_6Nvp841yPpYPKh4YetSsrH5T5yKb61qQWn_o8ZHslsRqAEQhQ8D01tQfdzwmkrQi2T8bkZVWwSa5rD3SIdtHuSrmKszBbzyuDlSjr-TqLz975_n__PYfFBYWtVxeFxPtKrgn-gFF9JiJvSy5MwcHvuiI5N3nnBkZ1CZI5yzMZoIWqylu9xxr8S5ebqhTd8WsR-NPAyhPs-4ZE3VS1d6qLBcwNkWqFpGjvSxNkjPOwfG9S6BWXZ_5xvlPF7nw9C4chJGpplPclOgqDdzIIblA7Go1Fx7riLV4sWDGRkHAXi2dxvyeuDDMI2RNvPfbphbhCtTJCTDQc86PFn89V1FT1fnAFFDoL2rwsdcwqNoGdO0hkVgS-QKLpA5duw-YndmuBacb3F50g", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112639376974307714123\">Maryna Y.</a>"] }
        ],
        summary: "다양한 독일 요리와 맥주를 즐길 수 있으며 친절한 서비스와 합리적인 가격을 갖춘 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["베이컨과 양파 플람쿠헤", "캘리포니아 슈니첼", "치킨 코르동 블루", "다양한 맥주 종류"],
        tips: ["사장님의 친절한 환대를 경험해보세요", "음악과 활기찬 분위기를 즐기며 식사하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "독일 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00 ~ 오전 1:00; 화요일: 오후 4:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/GsBangkokRestaurant/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12057080597255535629", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=G%27s+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나나 커피 로스터 아리": {
        photos: [],
        placeId: "ChIJl0zcc1ud4jAR6LEHnouPOEo",
        placePhotos: [
            { photoReference: "AWCwydhAWaNO13eXAt5OUk2QV1EbqSUKMI-NeuupilrNCG0fKXon3ENE0r2WnhOFhmSHEf43dDKOLsNYDgoTTilGX0Fv-2IBHivOxxn7MbNRNmg4U3J6tNVXe9Ida9rtYaJAo1dQ09W6qYiVNUfaMUV29uQIELdvozKKZXAFmUUpt469pyiahNkCaZ4vkGrIwgdkWFstG9WAc9O6QXPj7IpHcCXqL7Gy1H-STrpE6vToUGxQaBVcl4kr7pPazcJfP2InI6bqEhWigwIMBSDtyQkg7u3ELV4rhadhzOiZSwZOVH0pgB30Uy9_jEJYoKNtxJ1XWgsMQiEYDSGh1pQlzcKXYFU6tiX3zNJUhTU9uIRhrUNpOOQ0k9W_IAcw3Wuyc-XLvNor1u42hhn7PDAw2NNRcps3pSLSi33r7n9lhsDgcZ72UNTt", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118263165015087823322\">Tan S.</a>"] },
            { photoReference: "AWCwydhXDMEji2qcgM-m6kYYwxFTCl1lc0ZlCYWF_EgY7E8nKQEyjj6XHlQh6UduwJiIpeaay4kpBovMG1Uvkw6RMhlWlB2dXvAlBDdE-FrgpUssRwXy-EgJdMk_PNAcAN77pHM0eXKuZbd2WX1arGz8N3I3eRm83Ug2gfposI1K5oza6anSVwW29QZ1WHWJVp9XJoNjr8-TX0G6WgqMIqDhxtbeqa6VcS-Hz6b_qzQGkO3UjI-dZ-OYwXR3A_rqafdYZM1ad_GwUlcXz1SRVGYVbsGsPDtaxvd5OZzL0RWYv_-BskadENtT8gPEO1ZWhBgJHN88kSQ_nijlm26AM1s37alPqBbR4PVScPhK1qI0FTNw1Auw8iZ0icdYUuDwir9nviIJce8QLXnCE2yryJoxaBVMGCG98-9oiifE0MNoI78wbhtY8a1qaBkmxrD6qQvh", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108862646621979589911\">Henry Goh</a>"] },
            { photoReference: "AWCwydjhBcUM0mUMLtJcC19u4XRoE5JlrCgpCumeeWmvApU9gfSlj4OnGka17bu4FH6VRCZHx1MWsphOWLkDTnBtctnGGpP5xaMZI-Cwcdwi0tKFjY1Rp4setbqXJqYb7yBrS-E6YR0hS1fIVZ7K2tZXbtiV0jRSRkHZ0uhGfzP3510WUv_vqt0r6K4S2VQJOcJse4w6UU_pr0bBub9syYaxHAYIbJgxejrNMO7VtBa1ZITo2XqWbWxbItJxl25YJyGv0tWF881MVRu0r7KG8shY_jPJgrNdBrRZm3jgAgfMG6dglIgMPnGyOtPLg7TuX-rFKPOc_rjCocsUir9_31CMR1Vs0FqX5_6EHYNTw20r6UAhyeuYrxC-cU7jgmM9qwPMHu-r7_hwd11zZpYSaetXfsyuPS_Ym9A07O_inBgkd30", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100445546824013658220\">iannn nn</a>"] },
            { photoReference: "AWCwydh8zYnZCE5zqAA69-e_l6guudm6y0U1Uh57x1qC4FHKgqjnEqSemvHrd0FhTbYy5d-s5Xm58xfGP4KF6LJYQzOvu4EmJZYrz1kwafG0cnWmu6kVQQEqXcs-kYjblY-0V_bFxXEYfWOcZJnmieORIDtYBxH8QKBX_Fe8q2r_It-4_7ZVBUig3mCCwB6C4QynZ-IDQYAu3WF0SoW7kIbfmwELJYPQfbbmDPbPiGIY7Me3XXo4t0Py7Nw9hjJYvgaoU96H_xz_M3hV6bO35__70AoZVtaSu9l1XVvPz7N4Rnd6a6P61NFuricrQ5uaE-ZsrXDFnwwLWHmUb8zV2YfGxdbifvj0tRD7z1U7KQyRF6BiQaXvjw5qVcIskiGXwvrAP0vvGK7WQPU-qMi2gQjd3_JDrrAFc3PliTtVjddTk21egONPBSQF_PDBGVenE9Mb", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108862646621979589911\">Henry Goh</a>"] },
            { photoReference: "AWCwydj037fJENjA1VrUyWFKkVgyc-aDTzJc-tjqAROy-8TwRdI9BL3rh2yPO0Ua2zPwjQQ2w2sGSwvnR4VqkAZosHndp6GIVHcuOAdPzWQaJw8APSRgpJ4iiHwc5EZI87NZkbqu6lsAuv_z1hsgAaySbYOvZ0_ufghvLXn6Ki2hSuTVRp00rcN_eFxxb55CvwRdG4kzTcYRxKjKszhuvwA6cjnLWuEVPAbCNBbP0OmpzDv3k88Uy2ddg69Ki1ci7xl3Z5xPFxAPnGuzCEujn4e1V5TNXOTtN8GOg8cEmcXze8osNQ0qpxx9nSTErkcNlk5TY4T_qnuW3Stb9_KKPaAs3D3jVnkb8v_qu2UFUXDrxGz36q5BYctgzUPtour04BKTlMmr-VUJarKW7W3jt_5nqcXxSDbOpELYyNCmMNTLakwrN4AQSuqfzEPgwX0D_ptr", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111047902276008553095\">Nikki Lu</a>"] }
        ],
        summary: "다양한 메뉴와 훌륭한 커피 맛을 자랑하는 방콕의 인기 카페",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 샌드위치", "훌륭한 커피 맛"],
        tips: ["쿠바노 클럽 토스트를 추천합니다", "스태프가 추천하는 커피를 시도해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피와 샌드위치", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.nanacoffeeroasters.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5348182387316994536", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EB%82%98+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0+%EC%95%84%EB%A6%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "RISE COFFEE - One Bangkok": {
        photos: [],
        placeId: "ChIJ931sDQCf4jARTtgGPfel9-8",
        placePhotos: [
            { photoReference: "AWCwydgtU6YMP-6_cdjPMkg3PduKxBq91DEGyW6oKySNhkE7gc0FEZBQSb3lZaaIbB_4vtB2w8AnKz4_XDZGzVzWKKiwGbEO6QOpgv-WIiLLV2ITMZhwomeFwOZXfmioS4yk1uMHgjZ79DGT0CGYcCidF83cJ4156CgmozC7S5Ks8Gl65aCR9orpWw7KyjqrXNTztpYoQPZj8asfBZt5y7lElbz9d_92a37BL7RbI_TY-xk3VyRTlKJa-9r5SKSkeRBhr48pOM0YEbXsT3fhEi5FWsiBpS-TdmDOBcllWPsosjaV-Q08mOhxdUf4gVF6fThd6LXVa_PLZwE5vDho3X8kaLhczNiIuBdA9hK2nXvM830hMNDq09ZQYjPSesA2izRtn9-w5Y18ug3nph8bMMVxkrtzqqlu_0c1TxE19muUUx2gzMxevtr8cDY4OnxluTBC", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106658125945533002904\">RISE COFFEE - One Bangkok</a>"] },
            { photoReference: "AWCwydhXOJMYZ3KwHgdFCbSdB-co-4eV9XqqSQztdtPzif_bD2HQHc_eFd_34Bp7V3i3RiS8867iiLUHTonJGt2KxnivnI6rpGD8kcCXZ7zyx6SC7erYtO7b7Ftq0i0Cv7JcfxBNQUyNxuHehfIeEaz2HOjYTCy0IRZGLwL5ZvGgcvq3wKZ56Ak9evzhQCI4-OrEC-22NPY4hISXQ_wkL7aV-Hr7MTyZYlKAWDPwhoja9OEdnGb54l5mEtsorWMJA1JDULUHidSXB2QQMi9YWV6E8YLf3yw2bKKlqvYYChIdB3nBz_9UVG8KzNBsvR4VtJAf62FxvgxJEDfjIjAOfMhPbcTrx_J_hPtuoO6SifFF9oP0AuQf34uTClcdShZDzMFVUorEPiP4-ct17g8ZHbx86FQuPmDlIuPX5EiLPP1-h1I-UxDxmdPzA-16pF9vsz5_", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106658125945533002904\">RISE COFFEE - One Bangkok</a>"] },
            { photoReference: "AWCwydgFuZJlyY-RqJ_hwCaaIcISVg1iXpv7WnxNgEOW9In2Naiagzetd4TmMNNjlUCsuhI3PkzU7UIHo0jcv4jCja1vPjgEzuDvBxzzcPfQC67c0qavDH3J1i11SF0FVfSpdteCq0CdqlCBHj8v-PCVMtex20DCAQCAF3rXJHswh0jW4xAow7E6J-A0mWcXs8QGqVoD2UMLAjnCqFcssckw2G4mcKyyPwOST1o4oInUiftT-KXj0tEWc1-1edv9UKTBNX3bw1IDZG5xSZMWnrtF5SEjVAOhHJKNv87mPLLQb-93yGQ7xgPO5UH-_qxWsUzMkJ8FLZnzjMQiMft2XMDlOblfY_sxDQXtbHRm5N-4pqv13tqzVRiK1qIKCeDBc6qyLm8d6V70RoxhE7P-ueuIkdbt4nHIZSrXLYciW4S803UzQwOAxUQjc-B7PpKVxTs8", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109253360858384867527\">NNchan</a>"] },
            { photoReference: "AWCwydgMIvI5dabBcT5OHax1o05XvPyiSk4Jo1xraQMgGLTwWF-EclXcKvSPpKfrlRCy5YdmpuFCL3OPntRx81QV88ZGiseuuVzPO04ADq5zXUojjY-ZzUzudbqrrqsRq-mXEBks1PkzUIy9W7-Tr8Vjb4Br85VpkN1UsrtIy7nnSTWZDowu0ADRX8DZzybfH1MqHJ47UJRnG47iEAQ6lJRSlMYvF74-svOnL3vn-RpBzsSAbN0AaibaloeqD6V-gJUV51--Egn9uCjqLlMY6xrTk_xtiOa67n4kSKc9KMwzzWRvLke11W-5pSYV2SAWUaa6RlXtY5WhElbWZ5u4_2oAsGsrlDapQ9-olxIV_ZfK2MrvJsuycxn9RZ1ONtHACLQX2gSzyEDHdVNuZBYO0dWVP2tgvUbNk684mpTcFZWn3WP-mdBvXi_8jmzNK_CH7QmZ", width: 1996, height: 2661, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109323909754822996181\">joe loveyou</a>"] },
            { photoReference: "AWCwydgu132MQMVenezhEYenEutt0pqLE6G_cYk94D7RZ_ExJgiQlW9kI6O4X2SP0neUgWDNxgYHMGkPKFAvXS6Uw8YS1G6oIRJqDhWmyNzfrJZ4LwKrmmN11HYWVFMqcQFc3GwHBrUxSb3fxL5CZ6K-GJPwBZ26XHhuxjKdYuxARcFnNYvncJEL0BW_Ol6bzoGbk_06M724856P6Mr7sMTYHqTUoLlK2FWlWrzFrJ6Vr5pfZpnQ6ZaWe3hgB5M_4M5wR3VT2hz-f6IK9HdsloHWFNG17rA68dvbxEeoCC2Zle-KxJqTa-G72RDEYCozFUwTDucg0f0aZRvWG_CgC_eQSB9_sOsrFsAWcdK6KjBlwEcpwAKZWYC0KBb1Ntg6L290UVNH9LZsbPU1Nwa_djT4OLExlTK06vck04s4bWegBS492FXGufMo9FxmB_2n0Y5j", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101160699770769581127\">Danh Tran</a>"] }
        ],
        summary: "높은 평점을 자랑하는 방콕의 스페셜티 카페로 여유로운 시간을 보내기에 완벽한 장소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["세련된 인테리어", "친절한 직원", "뛰어난 커피 맛"],
        tips: ["디르티 커피는 젓지 않고 입술에 닿는 온도 차를 느끼며 마셔보세요", "식사와 함께 즐기기에 적당한 양과 맛을 제공합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://rise.coffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17291471775611672654", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=RISE+COFFEE+-+One+Bangkok+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사니스 방콕": {
        photos: [],
        placeId: "ChIJUXT3NL6Z4jARwh3cJq_bkog",
        placePhotos: [
            { photoReference: "AWCwydggJF2T2wkh5Xcgh5nSymh7fV03yIm1UkjSqv-_Pe50WHf_GvsID11H37YJ8DrV74Eyl3xffriGq4Yiu0gh_euGN6yeUiIYDE7JbPWbEwJdajtTdCsWVFyaIGsxx6wYjECzZD-GoOcqxEFhNuROK9oJ-rT4H0uX5BPYLBxuaqhdhTQWhLgFWd7Zhj9cg9se3PD4HlPW0B6GXV85F0qHxaAQZYO1urEYsSzYP1mBndeYLnLaLPOJpIzSpN9hLs6Fm15L6In8DF-kKYDb62sHlQGfVdqprTzQM78sVSYC3HlUwiaPGTOKCYtJlA896nehNQz0iz_mjI9TpCWsyOxomJgkM93AYxcuNrcCnPfhul9ReaER22__5cHODjMKJmlVbOCJqfosZavCEV8613OOcPHGw4IBL1HGHR3YSCd_nNc", width: 3326, height: 1872, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110403447202396477160\">Sarnies Bangkok</a>"] },
            { photoReference: "AWCwydh3dGnMgL3u0oq8dDfZZjDy3OMeFGpsOVMaprCKNFvoOrAb-IcKiyLTsdcrO6UfRzGGmEVr32gIhoWAFL20gn-5NoMyYxsyfxLdWKTAS8qOJvRRRV2zttwdSLr5UrAhYhrXeAxN0DsA9z62PgwjoFG4e5XFul3XyUL2UoBtVbewJLHKRbqJcuXQRuVs3Xh1n27-GZkGYnVmbfIZ8E_SQhvCVEbhpWe8MNnRC4Bj3dwaCj3v-blxeiGSARCynVWECs7HZKdVtBuZ2GCVBeeNM1UqeqVV0HN3VDG2scRs5eq7HB_hoI-RwtGv3l48RY7e4UQ6-rt-wn0W2Mj9oyaLMNNKWQq2m3ZeDNSLCA28upFKTkWVpbRAgSDFscMU_85f7ElBP5HkDcGoypQm8kyr-vZFhtOQNobpDvuvpXuljOq3EQa-7o6LFzLxI19jCg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107758724683509870137\">Solidly Dubaian</a>"] },
            { photoReference: "AWCwydjti84y0UbPARrV_JvapUzVEbW_AgQN3HS3LUk5K80-cX5WGLMvFcRakkCrUMlAS2j492pRfw_77nZROW0Q39sF8NkbiAmQpctwW9xPUWeogVNzf_FBmXw5m0LfVOVOq5By6lsXAALNy8zkGClFewdmAiK96_Gjz6JPsp1NxAnL9Uk1vF-aJ_SE417sUf7ojeB4zsyG0F1PZuByHEGdygKBYpAZyq-PNQ3RPpbaWqDi1pVGNzPNQpm9X-nkmnaxu6ByqAmyilWgRTTCM9fwXWM0eZqntV4KxhhO5YpmS_Pv1m7ee1FePtGM2xggmAA3TdI0uTMC5pMJw7d7EdUSkGeiOE0e30TNF2P6gRFh-H0xPsM2GgwaxlyJBb1vENVOEqYKi5eIq9F_VlYBDtg1EBobYdiJsS01ZylfLdFr2Erd9ZI5_iXmz8qH-7JH6uMP", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108775617690260028041\">Josh Kelloway</a>"] },
            { photoReference: "AWCwydj-v3qGj7ST6FHgn2LY_Q5tl0DjClJC_99YuTrd2ZhvzxZKBSD8YYymS6Ve65nk26YHFzUfPEcBqYANq2BauWy1wuNS0dwQLj_KZ5QBlasG1WNDjwiJ51BAPSdQklQxLXbFxmNOwl30QcZhIpoHyugHBLPCqV4bY8ljEIuOvh-0hhixHDiO68kqPniHVAOJwrKrfYVY7p-FAY7an_-iX_qZdJm_WA0nGalAC7ZSiyivvx9-qhMdcafarA-1JxirOKNJc2Gi4QFBiIc5R9BPwcf5Cu8marl9SUS3VDoUFDXETdSP0RBpBHAm-XfvD8u0KvO08ywhi5m0Z1tWZMIpj2zcMI9KQl5npPP7f-1kvA2YA9bghcTffq_k2ekRVXfEsb7TsiX7Qe9qMaRdkhLNgYm5168la4x4da9-XRkycDgRuI02nl0JQQ6A6QidTfAQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117881478928569782432\">Kurenai</a>"] },
            { photoReference: "AWCwydjmRWUhG1kaQy0vvHX6vbJ7F-5MdZ_zruP4Yb3g9-bApfAv1vFgCu5QXTNKYbtkv-Ta6X8s9e8f5vaRstJ-yQEs8x_X4v7rC8GzBFMMA9gmwKoATNA89k0Hdqf0jiZq7d2Vrq6-Hhhfcaz35O4Im4u_3VDgigxgsh1ItuYvRrDkAHSgTB34us8dH6sym35SP9XSORUoRdXUXVKDEIbNY-xa1Qnc1wEL3MPNtAxBK951h3Quz7SVXe_A3DAsmAyUFNwcohKnBRJ20l9NCNn2Ump7-h4oEX-b_FFIBJrcwkcslKqMJai-QYFzN4q5kY3UMXYYAcbrPhDxgmpN-KP-VEPrBE8CHYl5tSVaRaOKVijJ5mNsaDtXl68DKNwrTRTVv6uUjqbbjU7ekxghRYWab9la5kbqSuxmw2sPDcbWHMrXkV7na6DvKeP4N1R28Lkx", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100949892509444108005\">Jeanne Cicotti</a>"] }
        ],
        summary: "역사적인 건물에서 즐기는 특별한 시그니처 음료와 독특한 분위기의 카페",
        updatedAt: "2026-08-12",
        highlights: ["100년 이상의 역사를 가진 유서 깊은 건물", "강렬한 풍미와 향을 지닌 독특한 커피", "트렌디하고 특별한 분위기"],
        tips: ["1층은 2인 방문 시 적합하며 2층은 3~4인 그룹에 적합합니다", "메뉴 가격에 서비스 요금과 부가가치세가 별도로 추가될 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "시그니처 음료", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://linktr.ee/sarnies.group", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9841169681075674562", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%8B%88%EC%8A%A4+%EB%B0%A9%EC%BD%95+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "팩토리 커피 - 방콕": {
        photos: [],
        placeId: "ChIJA-r3h7ae4jARcgEibgLyJyc",
        placePhotos: [
            { photoReference: "AWCwydh-Y6h-FNQJIQRf2n93sz77oPmLs6kUuiFLfRGqjT1CkIgN88ZJ0xPLMKwUMmKPPjJSnbl6YLwgA9wA8i8sztS1MN15gzm5OAWaPMN8FVdnA-CNGvwv69Oir6SJiMRq2lcIIeTyA50QaweBPqIPpVz9RG_KAPjR-1fuwVA3YzDu-jedH-CcAsXwx91_1I5-xiATtrnXIssj5zvRK7V70fWC7gCGWbVTRbTeETstL0pNUSoLR6LYKrQBza_Uu45hfBOTnPu_zJO4BNMKOXl9IoZIp3lvALJUBA33nY5_82tbRjltvstCs9XgHN-gNmKgpXLDlYtJv-vYo4D1N19GPMssGmcDbWHxwfvO9AqmPyB4OUoniDOnC3cUdhSA478_aO8foQsI6iGOG51DzIYdx_CYbepJVDpoVb6vfKcnHxYWig", width: 1080, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101345121450048029866\">Factory Coffee - BKK</a>"] },
            { photoReference: "AWCwydhvRd4QrGvPmEnIy1vE_tpmySIIrWpE93P6rq-5rhYjxydXDpS5a-Tzlf4hHrzmj9NPF4knbDxBl29S7EyW7_m4JpZZx5YwcKCOtt3zgEwBn_-I5loO8hifz70wvq3L0iCp9Bpky0Oc7Jxwdbirk0ChxSepVhUN6tTlsL6umWYEtdRuWRYFA3j-zlWvYfkkiULxTe5i4op2aC97SEv9DCnDcHL95XAQdTS2vJxrSDr3gk1Rv7yjOvwSPk8Ld_Yn5HU2hbJEBKKt54aKA9cLc4gVwT4RaJTI-CA0S1c1qH85n_Uge2L9WS7z-JPRtHQgsmFAJMZsTMgsjehGQcKhPIjc0IRcgPAFxsVOICslQ9Vc_eHT8IEJP-uw7PyBabmSk2fDGAukG_ILaWhwovUpntb-9QHhDnshI0RhDsYMQHb52D_XX-q1rR-rt3Ooqhtd", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111360586022436485457\">陳米兒</a>"] },
            { photoReference: "AWCwydisaieOiRGxIsrqklp6kuoX5JXrvsA5yF-xGsAyW8wmJvxehe0RWCG3gxFFoln3kAMJxQKqSFCRSidSQvY8mvCWSJAWvyJlT_vYtzpdpUY24gLy9a6PR_ueH8u4tpYDOa8RjVnnqEc3-lbQLtNWAT2K29SReawJ2BiI_xg_oXz57-kvcXPs2DPqlX5rTUF8q3o2Kuam6DLE4zd-crVkU3WfHY8ibn8HRCTmfgbSKKUbZjkwZb0Ae3idggGPYN8Pnd5sSWxcAJoqp5MO70FplxOdPNNX3WF6wdHEir-zlvGArMPHIlURvO6PoT9dKGJDE115D5YrwUC195liSH-I-p56ZkRNBh8IEPeyuKYx0PR4n1XSm6-zwJz4Z2ESgd40JKotAxNNdR1Fy3JGtOQM9iloL7lyu3z9DN2BC9ccghlm3szQ3rVnZKB2Q69ry8bk", width: 3363, height: 4484, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101345121450048029866\">Factory Coffee - BKK</a>"] },
            { photoReference: "AWCwydgZqs0MlqMhb6bQ0MTyr-vofLDYs4nSLSlApcRLc_jvF8nYDTi5kMrXMmJgrRpD_WRE0ooTEVRceCEK78pGutSYdITHppax9-xKXzRif_K6hKletZTGfM6Q0wQgfJfbu8fLoDJg7WtekJDtGmIdazSqnOmgSGnebfUdWPOXdmmOMqg1OZFCVmDJl3NgDlaDjWk6Qjr2lFohZi6CVGNf9y-3mL6b5m_vVDM_-LLOjfZqf291NMG_mRfsZkcMGnDQWgq9VpJl8psZtbW-P_nMTbexhO7lGzFvlJmLDmcp8lT7eyCvu2IMrI1bcq1_sKAhrEKuN5bs0ERRsuC67zBl0sP17HMlKpPTstkNoyerj_goo_fadCBZMAobyG4BTiKs2ORwGb-rBriQKKkvI9JycGfXFBca4K2trfuljXUNxJV7zUyM6agZtJNl_lsZJ0Dk", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111360586022436485457\">陳米兒</a>"] },
            { photoReference: "AWCwydi1dtIkxCceus0UXjsQBzzEriLF9ABpxCpBF86QNVFOK6rMFnv-ws2V5RdaBQrV1tThY-u6JTbIjPX5uoIrK4QycOqZ8ejHD2uUzPRFnuailkmK9aTmt1LXGfdpGFg6u_ltC7f72fv0HJiezQ0GZkYkh9aaH4DSNsaN_NqFRPR5-QdcknETIaiSeyLBYjyRU92C-qDoUJJv3Y6Jk00Ay0KgWqEiy0D26B5HehbRoVOI4X5CygjwKUlhHmfPQw_8Aq653tbrkqVpgmfMu1gHjGnMN_CNcdlDJSUnyo5PfUL4zPDwLfdyaCzmQHKlN7rFhwvR1AE0ytKb0c3sNrLGAawm_d2sQwjZsoy0DrPH2aGCeJO1nePELSk9btW3zYOBvmqQhk2hCJF73beFt5rBVDNe4pDcggkpdK_omYUAnqG4D-3Y-edXvbcOsixi7A", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112528643098112145119\">Very Voonie</a>"] }
        ],
        summary: "다양한 원두를 취급하며 현지에서 인기가 높은 카페입니다.",
        updatedAt: "2026-08-12",
        highlights: ["뛰어난 원두 선택지", "방콕의 인기 카페"],
        tips: ["오전 시간대에는 대기 줄이 매우 길 수 있습니다", "오후 3시 30분 이후에는 테이크아웃만 가능할 수 있으니 주의하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 4:00; 화요일: 오전 8:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.factorybkk.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2821489783822483826", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%BB%A4%ED%94%BC+-+%EB%B0%A9%EC%BD%95+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "HAGOW Yaowarat": {
        photos: [],
        placeId: "ChIJg_OawsSZ4jARhar1F01_csQ",
        placePhotos: [
            { photoReference: "AWCwydiHq-VQYJLOBG--13GW1925qtummUkz0wF_yhgi84sUcoH3GW1MnFQpd732UW4xDhlqiR8SbUsXcDjyXf9hSlxRdqyjzsyKGVt2g7bqMfVOTwQpF3huAhDYuGUzmJmdOJBB65a7Q1FBsDoT4Hm-3j0nX94-R2b7zLI8T23N9n4sMGEuZaEdd2pKk9bzHkANhvKqSuEPSKQ9LNEUoEzBx7u-8YaoSb5YK6FmmmULLTpfWcYx3Cc2wKGFK6iX3hXWqRPI5vw4u_Q41MQRGDQyuK73tBShUtbUQ3ZGtu_rMnTR8zwnhZr5AX8WFKuADluc2HKiEnv3qGmTwErmwiFcFUjdw6OmEJi5JtOA3iPOb4XvqeeCwLiVIBaOnjIz0hi8gE_1q1ZEroHienBABPkeBm1Lc3ebvtWroFYuGHxVb9JKfEmofjEKYfV1asR5VRtf", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108473732027144767621\">ฮะเก๋า เยาวราช</a>"] },
            { photoReference: "AWCwydjO7rJtXzWVlU1R__kVOU4qX1TO9gRPunNkpN7vr9KmeA25vHrGWkIs9q7h0MQH6IsK7HAkCHrtPivniqOKfg06eFaNgyDu6u1gF9UWIT-dNd0lUrrC6LiqyklvmCdzzwEfQg-suVcN97hGk_4zZ6sWyJhR52z-u14-2JIaeW-igfJMNHHUQeNcjILkUzrYVOmpOb71lAtonKBwYBcNKiRrkOw4mheFH-gnmPeARHC6R-QPEsybkHaS1OXMUUrufHkVO1xrUuihbtJJJg6uNHBPJomWndsMvxIu8gPZF0JG79qO1hSEKcg6W85yhtymiQBhEYjD7HAS6Rb5MY7mD4su9xxGkI6tYsnmqktly_Khj4JmDJc63qELwxhMAUDmJUVzMH711-hrGC0ktTmDTqcA_8_7jg8nplqT7onIgppc4To", width: 1019, height: 575, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108473732027144767621\">ฮะเก๋า เยาวราช</a>"] },
            { photoReference: "AWCwydju_boX6qlW91udMMPWm04B7J3482GfR4GkdZsX0jFI-UTefmMdXSPWAqaBXLsaNZe4Z0gQAdhjpQ6sKY3bpa8QUN3-DhqiHeJfiyWvlAOoyTtVm8LvBb5cCIliQs6q7vCpK9Hgcg7TdToD86jriEPp2M5__WgahRCvALOMZqb_NevGdarE3kJZdUb_5a913Bofmf061SnNrpTYGM_yMeqgoN8QE37mml4xQR0tUeoda9tmaChSjP8oBJiwGYuXeWmJND04ESFTJqhpj3LUvgY2PC7VB_6OM2jqWVcGRaHcf89CaXlMuxKHP_ru41T2onJgKtE7AMG0BKJZ8TpYC376DpqZNUozDfcosCw1SYcg01VFHwlRk2C1lz2oT5HG5CN6IDgrTrICwvvD07j3F_GDP6oAdleBk-ppUJ_JGbrZQ4TscuUKNEeO4ZOmubXw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106535322922720456985\">Jan H.</a>"] },
            { photoReference: "AWCwydgFV9oyJAN7ZjSyj0ZOc2dGBs_83ohnirsTpMwU2UaBSgmKyRaZazzlsIbPYWgPO3iFpEZZnGPK4SvsEYibuGZCZ4gmuGo37XNHUnYy3A2GcW7AHEkzqKP25KO3HQx2xIgCN2eXRWHD3RTm5x3RaPxUW3v_kayZ2prkhHHfQ9lFXhjZKHJjjY5d4_PI4uTsVS5hIrZ1o5PiMilvGMHOnGm_f_Lyn1pxRbABai2IxlZW5-BfRpIyqtZbcZgdST9Pic9jrTtiDWbfGofXf_kpQDdO0bj4dAXPzlyAIeKaTlEdhf3ZRcrwgirwHyhrAXoFfkgHYvKrFa65sEWoxPLz12J2JoXkMQ_3RT2xir9U9dnBRJ_7FluZhdv4bJODXBQFs2uqhi9bsKR9G8epZJt9Z25oG23XUu6dqC4pjChv-3Q4ll4Eg12MR2mTHYcsK-XC", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102367775081028375568\">Pale Pale</a>"] },
            { photoReference: "AWCwydiSYyldoyklojx_V2bSJQ7TPcFTkfi-xQUZxJ5ZBBwxYqFrNlWjY9MJtIsFEKwejJdVST9YH_5YS2Q7s767gFOKxd7SvsELY1MiZHwG9v3O-V5Loe0eM2i_ZpKoTMDBmzrTs0peHXCUYEA2TTlrlIdKo_2caEwvS63akkHX6tIw5pevUdKf4WO_KS43yqmg3yzoGHLQtdvQCdxQiqBDykAZwgoHYALtJhP1_DCABiaVH21vOh9aUO198Xoqg_lJpF6gadEInaVWJlTvVj_kRgIT_JABiTBrPOr9v_HjiFia1zTnjK09dOQhjsyNKiQIQAIlZymMYs8MDOEWcDCdjDhaEgMa6sN3N9cfmm9Ttg-RItLUXtxy9s-OJqlFbEXNL763yuDMN_y6hSbUgugvRWgdtsVNADC8NB7dZ9Y_YLTQrFWPjKlo5AKd8qYRBg", width: 2706, height: 2570, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106025913890511250761\">isabelle burgers</a>"] }
        ],
        summary: "높은 평점과 풍부한 리뷰를 자랑하는 분위기 좋은 중식 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["고풍스러운 2층 인테리어", "뛰어난 음식 맛"],
        tips: ["오리 국수와 시금치 돼지고기 쌀국수를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/hagowyaowarat/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14155516547870075525", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=HAGOW+Yaowarat+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Din Tai Fung Central World": {
        photos: [],
        placeId: "ChIJZ5q-5s-e4jARm-5GkeA7Lw8",
        placePhotos: [
            { photoReference: "AWCwydhpnwf_0L8F_FX3P8HS5pJfmBazG8YUj5AmSLDpsiZ2QJpCzOX_7ja0b5c8PFVLAmoPJUEGquddM7K7UF3nw_raXQLy02nItjHv3IpO4et88MwOpxTpbDxmP5OSAdEBDW4sDX9EzhGvE50VJu68rYp-Z7SPCIwNW2PuEWz3PF9jUNifGOABKs3KI8iEOygo9ZbOVWL8OBM6zDDPRIjFl5fOhI0FHUks8rjJXZRsYJRGLW1LOwMX7oZUYlmxjDCv6jBlW2vQ8hQ3FlhCAyOpBT1jJnCONtHQi7Fi0zuCse4EcNOuvTGTUrexNytzOKyhl30_wOF8OuAIThCy9lOocOzVdh-CT6qMGcfFjToH8MBf-QGwz5CKn1z7OQckk7kaJOC_vvhVPGxHWXrJnPclmEWQ5GcMJUaqAZSVMPIT34gPmTSP", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108129066607438501116\">Din Tai Fung Central World</a>"] },
            { photoReference: "AWCwydjch2hvknXANt6JISBvu7LgXbT93r_RdeJgFds3TcsCqFK0Z7WzNmRGOt2JdF_tLed-27yDdIEJ5tm9aJUncxaR3wgj9OxyCx-egv0b-ItW424mSTuw_KKIaLhwg4C9bdX-3PY7WQHaghQv9eMUCuA0OsAwKPLjkgyTlIIf4idolIDHbIdRWg4OwJKHfJQGQluT7aNrPh6G6QYSGrHevwj1Tq7l1yJMvex8Bq9ly36OOmvidyfsTPlkFo8eE1pCQB-NJ7i_JaKaaJpHVL1dwfLk2Gn-VZkL9wLtym8yYV26SwWszizTF3OBDcdqc2-YffWoHCf66mHCuBH7Bd7Nus0--pADAA4DJQzhfjpggDtuCLLQ9qV9p1XgJ73JQmo4xlzgq9V0G9mZmM_O0uIwogG2WT56yXOw028AWiOPau43Zwpr0MuUZ96KfZWxSw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109004726064552570027\">Sung Taek Chang</a>"] },
            { photoReference: "AWCwydjFigcNnUteelKk2ZNKms_X7o-p01pc6FxqqDhSr23VoTHTDFPLQ9IxSOT5AMVzFKnH59-RynxyA9wpkqnGlNtAjswn3vz_vkJlBpV1Ph5f6RdIrUK0HHjrRg9_E5nA1ldWYTpjRhuZgBeaKurf-lF-YFDonUVGOW8N3x6gzoCPXSq2yhoDM1Cz19g63zJb8JI3UK4C5hqfK4vXj00wj2HWSLW1SEqmTYCjDAU6ULTX8dWMX0f6T7u27v71zRewdai8435QcOtcIASaXZK0jRkNZ5fqUTBTHEX_72WAQ7goVlIilmUt1NT2YjZ6-pYA2Bz7SCipwpPEqGN8Zb2yn55P895kcB_bU51IqOnYTtLmhcmyyIWfajFv-kmICZrPQf86XMZrrI2NeVxzui-8-XTm2q83e76kXIO620btCHF4GA", width: 2048, height: 899, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108129066607438501116\">Din Tai Fung Central World</a>"] },
            { photoReference: "AWCwydgxe59AhvADs7vYmi_v_fKtMn62mNRYP6rv8hRsS_Mr-YJghqqQghiDNBSH8ybT61n7HcDQxb1JWnvGpy8yJAMV9ve6ToQY_1-PzbGoOBO34lZ_7GbC4OGSYTEW99bfaVfarmlD0n_2AyTvxbjTGi7-LmSqQF9Z_r_u9luwe3JaXuQk0UMsfR7Bw3WMrG_hI74cEMRl_yf-N_QGVc76Rsxk1Lok0nr3KpHYMOV7KW5G9Fwp4xHz4Zqbjf4WOeeqXczIFGuqXjSO6IAF_t0hVQszAAfojhDIkkeIXyvr7Qh-fYsBdY8qKWJT3d6ojc9KpTAwu1GE5tJruw0Sr-JkfE1H8XcZ_hUthWd6IbCRxOUshVA8uD2vOyFlcY0EUZdVtGQOc4tZsE3AJ6tyVWW-mlkBU0g00cn4ZSwEyKGYPISmsXVyDgx-143ccyc5v55n", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116339176662371671858\">Juthathip Jknk</a>"] },
            { photoReference: "AWCwydjslVHndmkikoHEue5mZwkqwhmJ4mRWWWRrlzijJcX9LjDT1Wur3yvWFSHlUXiiZq6wbtObbNPYrN21vp49ie8w48VeArWGEQ8qzUMM80EEfjS2jBtPvqZ9JComX_g4tVg1jO5VOH34SCFOwtsHmqX3dnSTQ1HGcYNaTu3tXb9t0jUgQSs-H7_XWOpW8e1PU3lZEIpnYt4A6Oz_0KF4pCfUiWr8ziMLq25eGHL-FtMY2m05KKagcwXqDu_6ing2GbTws7PF6ZoEAu66iSAsN3I5-NzhM_wkoBb66zDjGWPqY8CP8UY2PRQm4mn7uWiXaK9PqffGmo0P4Wh3ovrZIE6t9BaufvH5zp3lGuSWh53ttoDKpVjPcFR23Pwih7by_XjEsjfLZLxAUWQgLBC2-KwB8HiS0Jgj15hDzcsUX_Cb3fcl6yCXL4hmy4pR8Qm_", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112756905744145261561\">vikram mathivanan</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 검증된 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["뛰어난 음식 맛", "마법 같은 식사 경험", "친절한 서비스"],
        tips: ["서비스가 매우 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://linktr.ee/dtfthailand", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1094159070170377883", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Din+Tai+Fung+Central+World+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Man Ho Bistro": {
        photos: [],
        placeId: "ChIJsyQRppyf4jARs-QrUPGEHBs",
        placePhotos: [
            { photoReference: "AWCwydjBincMS328dAPx5aQhPL2WqK2ZuhdJo904x-sQWaBr8iiUVRJUOwNLxo8e-zUCcgmkSsXxw3yoF722Bu_zpS5dskoUNExIl1FeuWFU68r7xLUhuaJ90GD3ZXr-M8efcU348zIHBPEk4W5RkEKPhufGn2Qve5Bd3imNRAhPvyFDPLmwjA311UEy7caLlKgiraBdb8qHUAxTWXnVQUJPe0UntSkrGT8mjvhcYde-tv2TIJogdfd_2KkaXfCAV4Wvx_Qo-M4g0TgY0Nxr9_NB4-JQj9eq_vqaIvXelSgcGr7w2gx96yMN3qyDHt9sznBlZUrzL8SFqoJCeQjzrm6uoub_s_0flE7SaHW31AD9u2MigGoi7_4FsMIfrjTFT5ef1JwqqeVMPCKYc3aZcXXTPnkEo0P9yb8-NlwPnOtA8iMWpfTP", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106247615898203059916\">Man Ho Bistro</a>"] },
            { photoReference: "AWCwydj1fXuACG1H-BMgNW9pCfmsPgckSv3a3B1K4OJS3TiLJxPide5knNs2wU4MSlVufsI0fuGbpWr_MpvVDmItBzxQprgocZlwrI9y8pouAcLDRMZBo6BKOkMgNEYo6Hy8KGBZ62X2uKv80tmfvau5yNTBHdAJRftAmxMdpYKCL1VdEmfcDvkQf5LqNZn32tShAHU9aeh9i_T8SC0wlSyUuG96Pph6pm1dFIdK7kA7oxHcY3Ty1tYm3sAAJ_0OSaSBRiA0qab0GXFPs53Ghb_qyoXq4hYQzK5_dh6ZlW-3QIQvjLVJUlvGj1qaM7qGRfYqpmy81j0eW0dMw5thTMFVaoz_sTVT8pzlOcqOIwr9cw71uxquDUvnAdc-7Nhp6Hld0w5x9DnW7kMS9L3gxtCQ1lnxWPfK-IrTpaqDl9sYZ0XmrIqzZU3jIR6kyeMKlefw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116884806560036229646\">Eider ThaiMaSing</a>"] },
            { photoReference: "AWCwydiHVAWZpiKijKxY7sghdB_a79p_9_9Eq0MjVCPmzXdbC2WspAha_b-sp41SJ_fw2W_YPQSkucyox1eUyj1xq4x6neJmO8BZgjxbNSvPUrg6yacMRxiY22jvtpKGRE5PvjzdJQOGM5D4RR8tCkKptS53uttR_TN6lYE2eNLpv1buCZeHT5fpZGzyOndJ57XWQHjTzcZsV8X0Ld7Opk-XxLRI3eX2qdVoNIwnFuQWwpJzYCwd5-bS7AQUg1njLu7ILj08sFvGseygu80u07jL5NttRYk0OVBAE7G4I3Xb1Z7kgS3ZufSpAr9jIsNNYWcvtO--1vQHM_-wgLKhcIyCzAuZQ4SE02EnK7u309wjAsF_7RClYWU8Yu0slxk-w6URUAUiKNjzCtpXLUUWz1xD74xXbHV86XD4E7LKpKfprkXcoA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106247615898203059916\">Man Ho Bistro</a>"] },
            { photoReference: "AWCwydiheVBBKQPGzaMxhNQwZT3P1qttbvOYtUtAuRuBIxIX0faduSnlOx_c4QEw1m9e0inJTlSuhl4k4s_GIcMUWjb5sVpf8JVKlEsaWB97BTyNEnx0BEgC7P32MTsvOPn51tK83VCA0WJJ4_VGoWa4NsE0EpcmSii-_MKnW7AbLLvVodMDxsGsgXdJct-VjGrETuazwX4E7G0MGLjvQNOzG7dYZcaJqt8rA-y7KzeD7aJgvuIuJJyunMtWlC5UIfN-bUjWVMmcfwA-eAvQCff8SVJVzGibiIo5DZUUvfo-P8aciJ2XYySmHUvVVQU75gf1F727Ctm-RqXR6ASg5Zu9D8rq5IEsu5Q3V9frBlDeIXtxwUvvl3phbXNFyk2R7mYrnO1gQfdI-6E9Gta57o_alrKpr7edfcOMbb4SJNwOVhIryxUBrM7gV_akl-r3uZfF", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109024512089277937612\">JanVick</a>"] },
            { photoReference: "AWCwydj1JMrvtm0hvrM32pCvVaucyseCg1l-VRQuzxT3oObWnw0DHgDRacZmqayPPtfpt-pWLDBUNhe4F75wExm9zHvXUB22Ebkohu-BlrHwMiquZSuJAiQyOg8U-c00ZBXp7OFSRuZCbyZHQFDplBKsVGijK9wUYDiYNlzSFcYnJejtp5O_GRhzR5xl5UR_8rjG8I-JbbxvZdRoyUekT96pPsSmjpDck8Fk8dpe5_IcM-5jKc16xOthEpEU7eV2YwFVmC4v_94VbYxAB33LDhhbLY5bEsFwo2BayFzro-vZAcS67NexTRZF0TWJhQ9-6qBDmqFwIOxKSAadxLqUDQSQsoXnuy7_qAWZ7N2gpUepkzmU4MW6Z0_Cg9tjK_RQpheG4Bn3Flq8gDrrF_UR6j772r3aITaZrsIli5SBWz-ZtaKx4F6G9oG14BfNiPTgLQ", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117977238251514431372\">Erick</a>"] }
        ],
        summary: "최고의 음식과 훌륭한 서비스를 제공하는 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["훌륭한 음식 맛", "친절한 직원 서비스"],
        tips: ["개인실 예약 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.manhobistro.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1953582510338991283", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Man+Ho+Bistro+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "만호 중식당": {
        photos: [],
        placeId: "ChIJ0cmlNuuf4jARBw8k3T0PAmM",
        placePhotos: [
            { photoReference: "AWCwydh2O7jR4q2y-BsW-N4Tyt3UeNL2AUhitrA-rcMitbReE-HPiGrtJkoBDn6ILX4OSfxup5rY64md5YTqhAJCClxbTL1bcs8jwN6OGoPsm08Bko5bYFsSpOoMd7uysShtvfOkSR2RY1bMeedalbwWMBT9MXsY44r5z5IIpgMl7slOHBixjLON4s1K9sQ-rAinPJCe7XQ3Q1JXvYYl7PTPG9UYpTaKkBGWT_wSGNxrM43awPEdVj9DczRGH_BYolhd1Hdy9-KHp_UmnXslWiObkAeHcvnKjpXucwARjNSP7PYDH9iguys4EdISkM4oycivCmJEd1HArLG81-lKjQQlfYEQgLvLfmJpk02snUyWUyN_4Cy48fWBsNKTuHTbuIOQWlNn6L5mgbm_ajapO5g7a3PxCyRTtUYVhHn1jSyafW4", width: 2500, height: 1668, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111313821869858820173\">Man Ho</a>"] },
            { photoReference: "AWCwydgDgohhVOqq5wW7bMILo_KHmiqnZeVhEL0df8UYcWiexnRhrOkib-c_Ul1HPEa_45UVlnoUhJ2zJpWgaZJqAeQU-9zLAxo-oaJW_LJ8i7MV7G94O9huU_4SgCaKH1HaTorSoybQM5ZatYr87dKQdbE1e6-BBS_8lJRaVLeDeh7FRM2Dq35688pQ31SUViuhFm5VbgI7-1X3FYtXi6jIhadpMadxpUjWAaoVYBGAeIafd35mrtDfIew8mlp_M2BLhi35L_JLPY6XVq-7PEDXNyPxNIJZIvsojOnE0y8-cCGHihWwDs8PWVrXVJicE1f_ykrb8E0UJvZgOGDqdIjavVtvNxvpHmmERyu_A5y_FJac-4djR2D00JjN4o7azgB23pv0XOGdWaVHZtiP7XIN_D9Z7Ds-o7b2GFTaWdqYRsImE2Dr", width: 4497, height: 3598, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111313821869858820173\">Man Ho</a>"] },
            { photoReference: "AWCwydgod7S3dYytAPWJv8S7FS2-aq2DParBu9RiLd0SNMAu4fqD-M1Aik0VYPgtl5ipNzclablEVTwGKHHSjr1vkGE2fMDx45cTNfiaos79l9ZPKBFkFN1bsEEItT1i3UDquE1GABtYDQ3v4ydS_9g0n7vBfSKkVj2G7Og9ilDsEyPWCdS2tkwgGs_iCb_YbSnq5ka2ZX5ZhPGaJsmsLlElMag4MQtbYq-bcyBohysz5kbn-UV7V2xSneSLQ_8eJl9nBDKYR2CXijJARhriZYscoZ26xHQ1-C9VpmncobE73SXk-d-wQD9t6xgKOYK3JcRUcNwp5azVynpPXskSd2DBJ7PgcyY1eXXWoHpF9MtQmk0txzpISeq5DtoI83OtpwNlZibPXYUejJ6_K4mqsjlS1InxRmSfgXPlca_3vzq1UTBo4jWsc33LJLcbj4G5vg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117125836800135460603\">ศิริวรรณ อุณาทรรวัฒนกุล</a>"] },
            { photoReference: "AWCwydjKYKR9an5Sg4cAOZRYwrT9JwJU0YyRmLT09Y_3HGqVHEUKxP-4D8jSx9Mc08I9v6DBTJl-Td-jpF50IwHFB7jwMi06sKVfgth1BZeYTlu12by72OTiy-Uucc5iB2TQ94g3gFkpLEtKuJU2x8FPLpG4zSqn5BW_JpcXkxdtyVn_ZfAWnMF9vplIVMvQv9HOcVipWbDkfNn270TzUnf9hdI-vgDaj2ThpTXYVJolwlJZDgcCPhf4nHZDbV6BPZ-RZfcgrbGwTGZgCnMoy8uZdeu78ZJLhfMPYLSdQY2iUz9kxPoP004DY1F9yoeaAl1MUzKHQCow1F-JXWyDrqaokFIOECV9ah2I80XEacakacifZaKpJUa7wA2cj2KqX2dxWg_gVdLTojduRsryIBcSkrWEUzy55cnZJM99L-KtaQyVRZ1-FhLRQ8NDUX1wyXmp", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114004403455365169049\">Hyejin Kim</a>"] },
            { photoReference: "AWCwydgzeIY6iVuHyWfnTNCbXzHwcweWrNFH4NvskOB1eEaH38Az3fcx9vAAmY8pG-mRTBzryLZV8LBmvWcGazJA46SdVLftQLoqLa2pCn8tTNSoDy_Bp0Xj8YIYA7e7kvm9leuYhLGuE9hC3_XoBx-h38Z0CRN6RIcpyOzfoOUW23y1AT8XZugD0DPVECVKeXwx9RFTHuCzSNNlGkq2gISfI1PjkURwrEhOmQv5eqE1pHMHuwHtjomJ78tW3AVfH1Din3ZqSpr0xyDWLAyoh-QdhCyBzS2Zgl_MyunSKFZk83OOJbOuRAxthxwllqDHks5K6PwstBL-tg29p_wTDYxosAwNj4MILsy3ofI29rX9CqhZ4hCURsxy73G_SCHrZSPhbkBUFdZXCe45vm9Vv4Y-7mH2jUk4k_NDQueS5Ovt82RvB3ZC_7YVoGB5xdKUQ5X8", width: 3207, height: 2639, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113662630896237250701\">Henry Harrison</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰가 증명하는 맛과 서비스가 뛰어난 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 딤섬", "훌륭한 서비스", "멋진 분위기"],
        tips: ["딤섬 메뉴를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "딤섬", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/dining/restaurant-bar/bkkdt-jw-marriott-hotel-bangkok/81587-man-ho-chinese-restaurant.mi", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7134281518085836551", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%ED%98%B8+%EC%A4%91%EC%8B%9D%EB%8B%B9+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Mott 32 Bangkok": {
        photos: [],
        placeId: "ChIJseTRs2SZ4jARqaWre78glDQ",
        placePhotos: [
            { photoReference: "AWCwydhknNcSMQVtodgmZHx5Rbi4-ZIlFn2lTwIrOMfHhw2IekDA11F22z4bTD9opLxMJBSdkR4TAHjm-V8YkRH2Z46AMhFDRLIwPNJmzeXAXYG99HxU7qTpJLLI84I-z1rxp9IuxrbK6njKoMOI7cLkKD2kV7nZq0vd1WNN63Y2jB_IK03d-p0PHiGH8w-vPuB3KTZzsyWPBzp656l249BVX1fxz4d-_OW08gFANA4wbYRMotxVm_LusvsVsahj2_gmUEd8HwhBzMASdWJ2AeAda-JArD1K1mrCkV115jp_BoTO4qU5tvJ3J4dzGNuFukZmseYoTWyhPLOT-JELDCpxXOSLPtqqy-4D2JREf6fkHHky88Fg5KNOdlggvt1q9DfVPiAIBR558uFnDbVOIIAbhikyEf803iSacT0e46SdZP_4WA", width: 2569, height: 1655, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103699225747792439285\">Mott 32 Bangkok</a>"] },
            { photoReference: "AWCwydgmF9ZL4_ygRI6BOMrYICl2qN78tPyMrUB_tVxcxmDaNc6mrA0b6ZfH8vRfDwtZHL8p8SfMvIn8illMBGbWv4oupWXzTRQufdo8RnLteUFo8fuDlWFu7s5tBgMirYvvVlxvsLKyOGRMi3OF_eUryV5TqBwksdF8Yghh72vf2LMpvdpiQY3I5HaOux3DgHNoyK5zI5BsHbctNTe2hF697Iz5JtP6e9ryPc7zZu4QPwh6MGE0RU_SP7Ww-0ScDPUyudb9aiPje1ultrJh7cTTVIuBmOiMKvgJoHj7klwLAY75wH1JnUve8Qu5UmERZvM0vXnWuxaWU4nQmDdogN6LzYwRmFWPKSH6jVx2NBopuZd-2zMdH60Ne4CpHXZsdNv-iRowZis874YSIGwrG2py664GYXuUPgBkrhe8WajDYoBCZ5RUTsmfCPOXP8D8j3bK", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111069346131931667359\">Peggypoop</a>"] },
            { photoReference: "AWCwydgTtqWaQ3WEyrJPD3-wDc2GUFGAJzyIYoP6vLOEciUToEoFYEfOOpqojm1FFQoDmjt9KyHNvQiYmDWKXibq13jnupCgJKSs_TFDtblGM9yDecv9NDOOKEo6gkul0bHA9AZywh4E5Bpv5Uxe1Smo9yC9rwUqAHiyP3ZyxtiVIq3N3Cj-7b_9fFr9wMPDHnaTDKuuix9T_Y6s7BU2ghMRoVWvEJFnIrTixLpy1_HRXwVYJAdPOeTaAKIaHA6Etc5mFZ92BMafcCbj6UU8I-wo8kbTsbyJ1VVQspSa_MFMFfyDRAAIU8g_hkwK9rN0HPNEBw1InMxL2CLd9H5mcdO5BMiWzRXrNbdLre4csWa4Okput3MXNBVQBNFtsdtvW3i9aR1abEpmDISj0WrnUbqyb5M1Jr-O2a9I91JPB2Ll0Mvpb3E", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103699225747792439285\">Mott 32 Bangkok</a>"] },
            { photoReference: "AWCwydgvFlB7wfIuqWqoP4VQElDyQSMYa2c1PhH8l21F3CrGttQx8fnqqU5B91Em_btHorZAyGJYjLgby1SC_YSvYoyO-iL5d8MXVfUcts1IZegty7_8AkSkCLPIen44NcAWfpFsLHEcpectlOFcmeTPN3K1ceW-HUZ04z8YXjgPK4uK7bgliFnMFMeQaCtBrI7ECgfxkdnlzpozQSvZ6KixRDbdjS8d3h9GhH1MuEMc03pMjuuHcyeJnuItG_wJ8Dk85AfTA2rKWVKz2i7Wyjp-Mgf5YsV37ukvRS_4FZwNg66kO6ckl0x8OGPd8Qh25fzXmP2ID7G1PwiNSQeZjWixxhjo5WOUBWqjDCmFBKPGikG67XxcqA4sXEFCbUVaIxX8Gr69-bzGSDuCyvTgdZ0RE4eDDpUeY2EaptOem1pw0sDILMMZKn26wPU32cYzPwp8", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114155275278443147772\">S.K. Seataphong</a>"] },
            { photoReference: "AWCwydjY_mb8N4yU99Y_T14Tp5qBjp0r1G8Rr_jVPYzNsIXeqZCLkqzT-T_yo6nlJtgiBhPu3CXTdUZQn_rwJsZdpF_isi14E_ECoogX2nwR1xTlad2HVxc-1Rle_zuzbMdH1UiGXbCQK94ql38YKBuZhIpEYlfq2pY94INRojLgoYNzpGPstrKZR8y2aH9rFSTwmbKXkRnFnr4ECK7stdT03Lq5VkguXlqxoqHI340CzwQKvUq--8jHbuXu4BShThPKd7PfN4Ctb3wJu-bwy6EkcDnfX2FgWYnIvnM9vXHB7VqeU4tUjpUtu4fs5JuoBSVjdG0wVcsvD5X26iUOrWQLTyNIOSOK1XC1dwZf0wpZNzZX0cBb7frqCOG5zCRlszp69ZbP7mq1oIInR-mTsemMN9OBNd2qCRM1GbuEovjjLouyY2NNVjc4ZobtyCxAgA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114155275278443147772\">S.K. Seataphong</a>"] }
        ],
        summary: "최고의 서비스와 맛을 자랑하는 프리미엄 퓨전 다이닝입니다.",
        updatedAt: "2026-08-12",
        highlights: ["환상적인 서비스와 친절한 직원", "뛰어난 품질의 음식과 칵테일"],
        tips: ["Peking Duck과 신선한 생선 요리를 추천합니다", "Longjing & Cantonese 코스 요리를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mott32.com/bangkok", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3788689193311118761", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mott+32+Bangkok+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "콧탈레 해산물 뷔페": {
        photos: [],
        placeId: "ChIJH1iJWACZ4jARBRpB7RhmN9c",
        placePhotos: [
            { photoReference: "AWCwydj-RSnTOYDdxDoVw7wHc3uq3gNZvqpf5g5k8GHc5kJgMOGvP-yX42tOuVpIJhwBIr91r0FNsXpCobONOfJ4sRYeRSry33gHCAKpgES5sE90RfCOr7d1J9CaTCQ6O_mk0vpHEV1ljxssxXu7MHt266g6_Z9ea5MHiI-cLwTlGiP7vAUx3peZ5yVsxLq7q43m3h6Cl0D0xa42SzprEmUKgyK_d_QjUeFIQDue9TlzFf_J1VmvjSlsoxsqPSJh-Yk8KMyQ-YPH_nDoBkPRJUGc2LvxauTX4v4jVF6rOCo0d9T746d1HmDhZBei250gpHaxsJ-un1HbmdnpKj1Bo_1sroxrXVkPQZjafbhHJt5751PtNa7kUs1E6FcBR4bWbUyod3mErXDeMQQEpgvcLwLHZXp5GCYYWvYmNjMU0Mtnt70eaC_cdcGAL9z6Tv0BI6c5", width: 4080, height: 1884, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100626821008334935916\">LE MINH PHAN</a>"] },
            { photoReference: "AWCwydgmkXi67GO7bIiW_n9U8F_A2-aXvjmnWqkvn_2DGd7Sr8Glrh2JqSLC3aNYvcVm4vK1SeQxMgkxof2svxYFr1r5Gy3WbKkkBeFMPY4FfiNRDxCZb7M_2BgGd7p1UVCyFU42VGeiisF3iMkg_73w1D9P072DxuCpeSHB3O6vKwjX1c2K6XE19o9kjoDQ7HrPizkvF8Pse3zox7a4LJut5PF_k-_ITsTvAbg54m7EBTax8kr72iZdjOMkcuaiaMnIHwB6SqPJSxHhybvPbETD_xvi03DpD8AQnQJzFL4yP9icGpf_JKqUC7dlP-iF_xKz9Fpg1qUumuf_TstZrHv1y97eyzMKSYBD2w9n5DTHWHmYGCddgZEf8jrlgeJtgvwHNHcllN-H24ofWmbfOqyuhRWivZRGtM7-BC27ymIuDny_GNEnGxDxbiDxlI1fDJ3N", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110890461809511853264\">tkmonwz wrll</a>"] },
            { photoReference: "AWCwydhZzxddrzwxiOUaQJNQ1MLRH2kZV_CxY4dyEXS3zLWe7poWiYkLX41qid-KGZVLlzQduw7bqs9UJaaJXYUjnhVgCJp5XVyoOGceQL4ikwiUpl6_kU2JDYgvKOYvqENScaFk7F58uVslH6fpoLD5AqiJE4mdPxP8N_2yr3ac6PWhopmn-kivqWMCwypO-NZcoFnKO_xnwuU_jXJJcC1XZEMAEclUaSE8qnSfmUzT04ky0SUFrWmdGygm2moY_Eop8MAgK_ue7M29L5YqExyWaOEBmIgKz2mZWT-2FhWj3txSV1kwIMHx9LQPNbE1bxU2UqaA4P8GxkAlNpnec7moUi57Acuku_yVH7wQZlhyyS7WfikFFYnEnLeBuI878S15VTznu2kWcT16xPPEoqYGlqX_567a-7QAUWm5-Zl3MJOGWhUMknDDXc4XrNFuinFJ", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105182731055954026090\">โคตรทะเล เดอะ ริเวอร์ฟร้อนท์</a>"] },
            { photoReference: "AWCwydiUQgPSgroHK9nHWrNHdLRBlXPNNp6v4zd9oA70VPSdYK35IW2vXq9gG2bj_ShtHl-Mq7Xegd3Gin_AZKqKXMb-pu_D6v8I9oo7pq9KQGS75HA3RUbntP_MF9q4o6aUb9UOvVQtb_RzxcCh-g8lpy4CqIuUZC3PYpCJ6i4Ywk4l56xVZHZlfO4tHei-WjGzklyQzZp35P7AkOwDMJTEGlzcVMPELBKO4O6rEopqBpE-I-kriAux92GWHQ4YqS2SGYKFxk2xuNq9gKYTkL2VbtDnDwFE2zuXLNsslNhZ4byijGnH0mqD20Fxngvk-tO_a46-Oyo617lO4zSEyQ09qe-NOm5Tg3DhhW-trSGvVST0iHgtFdsUTbvVBFBATohIxrrwu9SFip-Qaols4kdxJTPy6845Ixs8NemfCvLKLyOLbp6NeXXureyv9B4KoOil", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105182731055954026090\">โคตรทะเล เดอะ ริเวอร์ฟร้อนท์</a>"] },
            { photoReference: "AWCwydh2stDScPhniSjkTwvXZZ3fN3EoKqylIdBJFd01itlzsSdVQ-goSVmRcUQ9_K_dHc3Z0wsHumvqLjFYqJU7wpuXlK1-R_QTXik5k0W6_0aISIHb_0LPLR1t4es_6-GHlc51LBwSRMcPHbAO9auV2DVxppqRbjrGUzI9cD-6t3W4KNr-ms0mRQjGdOMnMHeld4clNf9ofvGSrztRPKot0KqYZcqaz-qgPSYDzj8GWoBSZFXf5Hr85Nu2FDtQ-mkeOr4t08OplPQjh3hDMqm0f0MAp_VhjibSHLLDJQhTWzzJ2MC02pbQCbMMqiKjrAQYkTopUo4sqaR9kBIH4Ancek1H7DwLvT2t4YtuSkGbexiVEM8tFQUWWwsbDy5N28JDCDJSS3Ydm-y0RWrlBQoqW4yY5zH9gJ55fja2sToZoRi0HcAtQkP4ZfP1pGeNbvic", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108564558292075199098\">สุเทพ เมธีกุล</a>"] }
        ],
        summary: "높은 평점과 방대한 리뷰를 자랑하는 가성비 최고의 해산물 뷔페",
        updatedAt: "2026-08-12",
        highlights: ["신선한 해산물과 다양한 메뉴", "가성비 좋은 가격 구성"],
        tips: ["현장에서 직접 만드는 피자와 태국식 밀크티를 꼭 드셔보세요", "강변의 여유로운 분위기를 즐기기에 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 뷔페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 2:00~11:00; 화요일: 오후 2:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/KodTalay?locale=th_TH", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15507976099119307269", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%A7%ED%83%88%EB%A0%88+%ED%95%B4%EC%82%B0%EB%AC%BC+%EB%B7%94%ED%8E%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "낀롬 촘싸판": {
        photos: [],
        placeId: "ChIJrfiORG6Z4jARSNgY2uztUlM",
        placePhotos: [
            { photoReference: "AWCwydiuTXpbW_FvKjR7AO4UnX8HBXNpk2uzFndC0feH6-FsZM8aDvlts7W-hVAbsiXtqV0msMbC0zXH0jGt_odi6MZ-u1PNl5YdVZUxGMf8ZYZ0Y6vSZc3QIU0AiFlm85Y1-9vkaOk8c18QbCAN8o_DMNbEBaiWJnXYOyPSSgFjVNU7p_eYT0X10oRusP--wlBuExSl5UWYwjd7l4T4tLwHSUClXoLcDU8y60axZS2ta2ZMx_dB7_XH4EAnd3u3LzyCiomAhsijZonJjDl1teH1oqGfnEreEqKaTKO9vg_6zxmUAvkznZXYQ4fmQpfoDQBY54o9I1qT-f39ctLv_9teMcL7xzAlzVskf_2v8i2NwuJYNrhagzScEPhgbq2lNL7pgC0i3cN3FKnB3znJAh6rvd9Tf3CzCKMuy_vCGZiehZw5fGwrH9Cjvk7VCAdMVQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104951968786395178110\">Bas’z WTK</a>"] },
            { photoReference: "AWCwydjADulkcHrdMGQch-g3IrBVuQLrkjuKj95hPEfJVKctL56oy15aZXpEfvvOcTJKb-zNRKOm5YrjJwN-8lz_K4rRWsBQJiUPiGHA322GsRsdS5rvh9e9-dvdWjG40pXKl6tkCoyRaVYCjEZtq0F_f7uelaZTqGqOCe47fuLuQZyExh9OJUV6u_B8OFXpO__ZwMIvmKThUpQLEAmoGWzICvuVL_8CGNn7k-XrGMLf-7Ms7PkqMInD3zoi71h0RDEs7yEaoGfdlHIrv2EsPDmzmUVajuEPFae56HviyLc5as6NP-fbQxq5X7OnJVqCpHVA1c_kCUKMW0aPK3Rw-8hEF9VnkNWSg1VQSoqXsIK-CICZsWFIP1McyJ_ZwsOdaUIUUH2nOcGe_Vo4aDs_kzkiBBijdQ0ttqoVWYb3kRGSQWE", width: 1969, height: 1969, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118019100368952126305\">กินลมชมสะพาน</a>"] },
            { photoReference: "AWCwydgbmjMuNXzggEw-MlG2dFDVDqJD_hsdqGAofdFXq9sC2tOTuZyyouh6m-A1QjcvlhpHPK1gKjoDul5uwpw5vvgYLNF3YGDnvOHWmE37Ge_yE--_xtbGepxe2fhKW2ywBJjQQ9Md4VgbTrjqeU3Hs95eDTjKgWYOVY0VYTk_PidCKPa9t7Dmn4CuB6yONjVG_FDxBu0lNtvGpo2JvYLXbHL7Twmi-ARVqYsFo3P4C_LIPVE_xT0hc-63QbdTe6o31zb0akesyuoKPVfslR-T78UXk2bWHOrlXzLP03PZZZWfBZHd4sCs0Cap8w0KTdcL6L43RSoYZrw79hK3dIKV2b8eNWdSiuIvAaMtK8J9RHRc7FnEEbIKmdBq4VD1oeL1Tk9CbSa5ENFn1Ipj0DaNwf_Mq1nN2zP2p6NysT3EkInmOI3a3e3egwvnBaKgyehC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109062345437012152292\">Mintra Thummakul</a>"] },
            { photoReference: "AWCwydgiVORK-iIJTZtIhfRWuHqSAjk6M5oABTFCAqZ7P_PLIlJxDdDs4DTmEG2740l3IWoGqngsjwEE2C8p7nYYuGyiLkFukSp8WFQPKr3NiqnoP7x2iFPjHYbwY-TztDVJcbdUY4wDGFNfoC_rF_5yyIefnejA_PgF4q8C1ZOFhVEo9VPvrX6IY-rJCPwWsBlMTNhSuToWE1Ejb1Mhdcesz6YiLbXh0O9dUY9KdOVyzqzKjDUfTOcBLiWRhzyObE8HBnJsiskjgAvLzQSEaaLt1BaXhV8H0V_moH2IDsnsRW_q8SSn8fW0THFgY65mFOIIXj3lyj5oPbPQM8qZOxa0Nw8U9knnQGz5lO1rSYI3beyN6uv2sS0rZH7kdNG_12Q9LKvCA7GttowkmdVb3bj_SbHCB8zE2J5KL_Vm0aiLzb2pQJAMJyc84hOXbaBMZw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110867015612018686411\">Mu Phanuda</a>"] },
            { photoReference: "AWCwydh20GUeT6FF1_XnueZLf9qgGqsK5hrbDV9v0Q7UldAZouiSkZgn7ydkYoGlT5pkW5aC1LdI3vNnIET7fPsgDjf-y5RmlCHIQpH_vE2nwzTU_-fVQcwrCjYjtd7nXOIdk-r1VrYj26GMlm7ELcuwnY39Cw-rhaMdngrnzFMTerTcOepnDREJmKVHiuNM-ksA0YkQiVmT2JiRrtCEMTzpQtxbuGrvPA2cjuutz1h0BXorOuXxVHr7-OaywkMF0ey8ehs3eQRNKwbHhrN5g6ksBJLVdCHZQmHI0cl3P1HlxmPs41elGRkilFgtzEWXggtxutUUqfzux4qNbUnzD72CP1OaPobUjj3vmP0EbV54QrX92Xb25nQrKwNXV4sJiLGx5DFSuFSDg_BbCSUBBBCoqSvd7rw0xr4iuFf1mSaeYBVDsR1ZP3jM_5G5z4hFZixs", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108593867263570837535\">WINNYDREAM</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰가 증명하는 가성비 좋은 해산물 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 음식", "친절한 직원", "좋은 분위기", "저렴한 가격"],
        tips: ["가성비 좋은 식사를 원할 때 방문하기 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Khinlomchomsaphan", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6004122854765418568", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%80%EB%A1%AC+%EC%B4%98%EC%8B%B8%ED%8C%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Mungkorn Seafood Buffet & Fish Market": {
        photos: [],
        placeId: "ChIJt9Ku2n2j4jAR0cRVm2iyi2Q",
        placePhotos: [
            { photoReference: "AWCwydhMpl7woKcyjkYB0GJL1Fx9OUshgz2EujQNLPQMY3hca8zft5J4xLp3JifJinghvHIeY8hQq1vHT2KRVsrgZ4ZZqlpZ3fdyQyNMvHdRL3fEh4MlFuukjlzjBFuUttNUy3JG0XgZRUjNC_HLURZwjK6Jchnbq5OTQRGu-UxtfG_LM_ls1T4Z1CBld0V2se2-tflJOyRqii7MF84X1iecWpXu385mWV7pwn_TZym88ihGaQyX4eamTzZC95MxxWmFzSv1kUu5e4Zmok3dXWoCAY6RadUKahguUinFY0ktBhnSf9nHvLOe5CtW7nR83GtI56Cfq7tl9bSjwiHIDCWklbpWezkEgLBb49mhZgtDNAMcZTU1QuwkolmeFUbiex-n9f5W28PVbWwBJa-tMuUMwwDNh60bIorOtiZzySk4oUWfxjpl7Bp8o9x99ZuAGWyu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101608151635986601151\">澤Taiwan</a>"] },
            { photoReference: "AWCwydi0Y5U4xVhsInnunW6U9bdDmjd24fiXoPVkcJAqucTiTmoi8BI8hHwJMPYrchasn8oFxS8NvUpCMaj_j3_jyXjULwfWbxSoxjNUemXj8a1dgKsuMy4T-MetOO40sdX9kQz5hExXg97MiO4t_B_dYtlYvp3Mu_UfW2zC5WIU243bTrSlgHnnwKiciRGwH7RSCvgqNyxtJnL_tTWLE0ZL5bRXAK_BnJw6s3-nqarr7tc0TCe2Bz0xunbYA6nVCwBmznTkKYDfXpnyHBvTNkUPS5n3LneW_OQWIiMASYRjPlXysAlgK_8jX-d_CU_eMP_NLyVT-R3v0AADC66KNKwyqQ9tqCKzwd1JnKLjZSyB_SkhkbtPpC2ZkdQf1zZjU9blXT-l5ZUpfeWyKC3KdPdC36w_4ajsfnCmCu-Q6l1FVNoNEj0o", width: 3024, height: 1702, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100991750647401079678\">Mungkorn Seafood Buffet &amp; Fish Market</a>"] },
            { photoReference: "AWCwydj1XNQ86asrSERklDZ71rjvTjnI1o-rGW6_bpYQXxAFNYkfaMFv8-4wpFx4ve2FIPCvd2HtC7UmaEw06kQ4hMNR5jew-y43DQHIqogjaXZNKs8AQxBVfWmofyoUy_ovIkiYr4Bn51FG_CURQTEp3KxvuaMiMTxjgNywSwrOUr78sqMfyJFx58phZ-X1wKavxu416HOYzZWw1x4gqzXPSN07_uYy6_AoHKBhk6ufap7cPqBDHbnBAVUsE1vl6KB18ItnohLTHp4qvHuQzMxzqOqa3egY31ynczRcB1LiynyB0PMOSyu5RAcvbGFYRTDZGoJjvsWhQtw3YJ-TGN8-7q3YLMsSTjO4PBTaey0p0Dub1SM3gRngWYhETxTcovJpjoi7dVaCWWDs_8a1ZMUvsvSwnyL6p9YBymxrd_paU91AOFquX0EG28Jz-yLbXQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112515830874513534015\">Thammatida Kiatboonyarit</a>"] },
            { photoReference: "AWCwydh-Tgsg7FQ2CVgCjZqUGbns5a0kM6Hxxxo5QNYSaNXjdJ3kzsfXEhNIFsDFHuveXUpYX464x19y--VaSCgB-KgGslnOIyRoV7QQsk91OuPOzIP5xKsdwMqsLftHj7E5eKIupTvuEisd4vC1tADwDLiuvhWwuBWDMtzmGSC1D4baXyH0stxb7DpzoZCMSm3oQDGOj1FISOMUrLEYm64DM_tF6BRYn73hTKjaso5AUl-12N0uFCni2tZCyK-XQsYf0zP6So86vCTP5Lns9sraqSc7pfkMmJ9m-zQUh2JaI0bxDBKPlHsALVLr7aG6X2U3T0BnoQfNaO4-VFsQjCQ9Ekv3HxCMzOXVtoOFmZuA386C2fCwswwyy0FsnueYs0SFEBei56LG7EhH-Y2NyC2cnkK74QeLgj7TClYBr5oS3d1pz7BVMHio4EjLAwIUCk9D", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111863907247559195028\">Pongthep Pinsri</a>"] },
            { photoReference: "AWCwydheLnVtRtOLTifuNJmG70SUCXca7ZXZr3En5UVUB62tgUvAi5OKU_ddfgsR_enBLjjHVvJ1E9AfcWyx8g0cWXpC81iuMp7Ogvgk7iiA7wxbOS9eGehLFg-7_WXus5ZKVTLrBkEQwBqQZZ6Zhlfxcnk3qVOIi5j7PYMa7sDr9acF40j_ky2gjzJ5xLx_rp7Dx0fJPOGPArivK2BBAlkboCgv1QX4N1tVyiyM_5phGz_eWZYg6NJXi8Lb9vqIpFy_808WLweXRGRsVahyBb6Hm2ff1or--HPV7anS6DF2U5MPKyhjxXsS_OFx1FbYB8PtWAuyLqv4sgKgXrHgS362TZPZNXUjpSOeXfnk5BPkoMWnOxouLm0Bbujnhkr_LU2AMpJcj8NvNXWMVO1BYLqAp5CbjziP4KzwPCUer3FVLefoCQMgeLMmHv1RzqKXFf-I", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104975815950870080617\">โย โจ๊ก</a>"] }
        ],
        summary: "수많은 리뷰가 증명하는 신선한 해산물 맛집",
        updatedAt: "2026-08-12",
        highlights: ["4.9점의 높은 평점", "21,689건의 방대한 리뷰"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 1:00~10:00; 화요일: 오후 1:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/mungkornseafoodbuffet", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7245080587908007121", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mungkorn+Seafood+Buffet+%26+Fish+Market+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Kodtalay Seafood Buffet Sukhumvit": {
        photos: [],
        placeId: "ChIJ7-W2gG6f4jAR_WjfDSPbAYM",
        placePhotos: [
            { photoReference: "AWCwydjME25X2q4gzpDs5RiLPGhuKcj2ZeAqOJAU82WKRYwkPIigVLJnveALHaVRWVYTuORklPsvAa8syGc1cCFH-trgjIgDcnOhU1RP2A4GgMZb4zh_GzsEuTdYggPXD8VC24JHtVGXYC8fNEjcoSNAOw_unj9w3QPYpGTNy9KE6X5q5HOl9WksjLFWu6MKpVcHLiwJqgFjtGCceMLSZ7lKKmA6avdxpTMafzAqVCa47HWYUsBPwWPFZwVwlWbReVlHwOBXkF96HxZTvJ5fUDTCosQYl9AgMnzMcaeABR3juaY74INpmGRVsB8oMzYM0ihZ7wHtLeyWK08N5okx9RDscyrNwj_2jqSUyI13KR37e4Z6k-zFrVyc2J6m43Z9jitTf2tiYA8y-m-iF2BGturYDc1dKpC7a74X7BldZ-Wm7c_6fQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115270758830752990711\">โคตรทะเล ซีฟูด บุฟเฟ่ต์ อร่อย</a>"] },
            { photoReference: "AWCwydgqw_dZ4H5kOsSDG1kxKA6mwa8hrotlz65-Xh5BoXqvVvRSFYFjMoHOmPbYwUCLEBawcvia99zXQ9j4ur8yCIA101sF3oFWrnU0MTlj7_qXR356_Y6ejKBonrcyecP6mRH7kWon22ooLDALey8b7Kv81zVA7EiCyT-_EDrwFNMEi5chP8eoDRI2n0pHwcDOF39krYH-4Qlk6Fd8B5YIBca-Fq08cs8CIK8Os2O3pBTMcatelTCKaboAWWA-pLSG8XlM1kLK-454LnARVZPx74aRK51BGcJv_-A7NQOT8mByHfpdJMaprX-R6xkjQtRdFSOK_p7FdgAFdTL7a3dW8f3cSH07FLLffM2X-eHcjrbatFu-jn3VxsCfBXdgCKAgF5hLl0qOhCnOCVYIB-iyyF9axfvZ2zVOzqDmgyPIImG40086aaz4gnS96dkXvz_y", width: 1290, height: 1620, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115270758830752990711\">โคตรทะเล ซีฟูด บุฟเฟ่ต์ อร่อย</a>"] },
            { photoReference: "AWCwydhzbZ1y9FWGePXtyOrSqJrGBOKd0FlKNZPqmDgUh6N6zq0cr9q3VOIvC2tZgtt3nMa-jCOC4II3QTtxCr2BW6PkHrv8zc4ry_J1ElQ3QOsMT-IBWMMRkwCW_DlI-VW9AwCI4HxsskjAlKRgKgsJdZN-01kOBlzwqaxDB4uW_zuQK-4R-kT_42afqWb2Y1GdMO7MdKPhNPSSyJcTlpD2auuxgC2GDHh6F5uxxIqds02mSJJCvPgu5SRkO17G0Kjo8WXcvryIiy7_R1cd2vaLVyWd70i1n7FDS5REBhTM-PNuWLW0S5YVE9RWT6mN7A11H_jxaI0Tji3JevNtT2EZTG2QU5eNkDgM6g1Uxy543J-F4P9YeF5MoM6hjXYIrP25QoY6i4tKV2_7iG0z464_pFUocC-4VNadeTM8t2Ttap8XWiIn5KXno_9rqgNv48An", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101158575587727624726\">ธัญญารัชช์ หลิววัฒนากุล</a>"] },
            { photoReference: "AWCwydhQeNOCTFBZl08hmcxIaVdfg_SCMpzIneEA2x5tAXx-J6-I81vxzdHmhyU6JedhVoIdhI6YEktl8-1RicLht-96LXUmNdAb-H2Pq5WMImxfOLr-znvIqAFA9WW2X0Bja-7MkSWyApzKksDiw45XCyY-TiuC15bEn9fQyLOShzwKtU6EQ_kVjpn8nfbLFIf8j3_YFe5QbQH8dtfnuX25se4SRcXXdN8NOSVwPOXAECBlgVN5tuBOU7955UZS3yguRViCyuxr1b_FdGLiZhUiIGOMn0TMjr0tw55UidWc6rBST2nuAowoFDly27j9fKUF3XAwkyA8oYfx-xkcnch_dZp4EiZ2OzZuM5sJ2HLm6mfgI3VpTdTqxDcEcHoEA5IeMyVYW7fCPMWyXWJNuOdYYB1vxjG803Gz-EVQ7V5NVoDFlQ", width: 1088, height: 1507, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115270758830752990711\">โคตรทะเล ซีฟูด บุฟเฟ่ต์ อร่อย</a>"] },
            { photoReference: "AWCwydj47Sc5QPuKrvT2GZsH3Sw1sVjiZvqF3oEBsOc1McEgqU9IK1u6WlmPOlHCk0oLZm387RmrYshvidCZJ7m7_pBwRvAZn9xhmvU-_jU3ZeiFRuBpceyJRbDIk9aKISvfjpsoytKUgdpn14pYVD-KdkpOvHmubb4K0u-43EzPxz6ZW2Cd1q8NvhtkIDJqezGfnvlrnY2ol-VJEU-3QAqcxEk2kUrc_slRgrs1jLnwH_2sfiM2PbEipul8CylpjSWVog52Hys_gjyF897pGZxlwSAmFAferfDIXxj3-H3c8Dz1rOOXCy--BRU072SRHj4Mfwx9Jj6gXdOIeKzNvNAGsviXbffz7xKVTlfT6v-4PBxcs1DPKsffn5bV5pob3j6Xg7RSrS-6JdQh8paDc2xJxpHfiFKKc7HQngSdyfATfrUvWd13Uluw8v4S6Qj476UX", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114731356532363612604\">TW Ying</a>"] }
        ],
        summary: "최고의 해산물 경험을 선사하는 고품격 해산물 뷔페",
        updatedAt: "2026-08-12",
        highlights: ["신선한 사시미 플래터", "다양한 해산물 메뉴"],
        tips: ["최고의 경험을 원한다면 사시미 플래터를 포함한 메뉴를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 뷔페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/KodTalay", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9440067237548353789", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kodtalay+Seafood+Buffet+Sukhumvit+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "SEA Bangkok": {
        photos: [],
        placeId: "ChIJReRnXaef4jARh8acmdEgBaY",
        placePhotos: [
            { photoReference: "AWCwydjtqy0rR9dlmasVqDeMMzhvEYb1bzp39ONSSreDQQc_ErPBjUp0PzaFv6iwMmhqEnSZScr5ZAKtoPVsN3WEbmYAJvKospNlj29HBcDHurvp6mzYcHiTeapdOPxSQdunGmtdv5R6dn4M6HMM0WYWd64D74rsB5uENhKqxu---_EiDktMte2ydDTJ6a1jjhh9PCZO-LlLGdW3A18VjhHjm_-wnr85VtDSbHzjimPwi_DmhfdZFMdohVE18gL34sqfhfKU_BY6b9wijpfvDiPGm0tLM13SeZNHC9u89Yztui0wng4KYHOguukHmjLOBol7kpBM3nyuKzSKNHWur-sYwde864GsVnA6F-x9sNCRDXO35CaEOI-6D_DWtvH6JhF2_jHttznvULR74NcHL00_secqUEUwvOn_yN6EdJbjaTA9l0U", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108801079294180694142\">Seabangkok, Seafood Restaurant</a>"] },
            { photoReference: "AWCwydhHtwW0PEZm-T9m4Z4h3ci77L3S--2ddPDXgR-uByx-iuZZa3h_pORwg7UfD3Lzi7B1RbwcMzG8lSliDEkztQZfCmioE1aHSRETVSWqG2Hdl6MHPEXJXsDSvlOEr0YswqD5xVQLwm8iBQrews9O88VotRerBWEgjpkzrNfY70PSDnj-xpOwQQwp8Gm--YN2tGnM10N-vXAeHnBQ9ddU2Z52fCZELjnEAQyP3pPrITviqJdvRULHA8SXyJRjz2oCw1CDNjoyppMV3UDkcFmT1g0KO9nxgfVEY7oGsmDCXCOWuTrvV_uJIJUdGKXpDTstn08rhbEic6w7gm9smbUOOwe1sMFmUcYVxllDaSKHY--bkpoAvZ1xdlPEw-Q_hrhbfT0-EXnJcNsRqnkEIQwUG7JzpYbDoZdHicmk-SpTNeLcdA", width: 4064, height: 3048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108801079294180694142\">Seabangkok, Seafood Restaurant</a>"] },
            { photoReference: "AWCwydi9MVWzyZt1D7QpndHOF7sPWnvbVKZwHGxeusBFwFUPyzbt8r9j45hgkkGpA0jOtqTUe0QLfVHS6QH6_JmyKKdATGw4hpmhMlb2tMVHYtC4buwRWxxCpygvtGJzZfkAzNd905GE1WinhC1Ady1MWppjcB4ahILlGjPX2CPhm4gv6D0xIQ-I5Yx47c8uxwAGnJ-WaNgNxZR6a1bRH2JAUviHdjbu3KR7BcZ-8A06YD5mtE3pqBq0CoHhHEdLX7i7n-g2CyUCo8OSM4UHYwTqBlRJf6hnKDD_Ceepkx5zHIA3Ds_XR6VKD5fnc_Kev38pRAUH7iGklaDrf82DYUkeJN2cUsn14qpVITHebpDVhuFOOQ2IG6vGJz4LmkOAy02h7JoPjsZiESzpD6PpZMLtnjMKUVV7I75Ap2vsM43-8FgW1YMC2uaJ_Q1cGpCNCQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105804276602570126861\">Sill Kee</a>"] },
            { photoReference: "AWCwydj-uA3I_p7fzE3A9mkM9usFnZ9m8sRsZUliNIf-10lGC3ks9UVrBkUD5A1sY4rCA-nWyxKoPH6EAIFjLBYsk89PYbLBqb8IZ7fGv8HcaOdkwEQlJzdg8X0CkuZxSqp2EzGKpFONfAquKCh-TKONcSEO6ctDsmRD75bfSGnDxo5PTZdlIqvCw-tS6jV7HAsoR6WNEHwDkxmesS3NiDXhEZ8SogIevvy8f1aet7gRAIR0m6bZdg0OBCoGlgFm2uxkl9nRS6oTC8QcleOAXJV2PFXZBJGXTNEeYOO4vas07wIlReuqMgAxIsiccBwe8TfgiwB1cqCLTqPF-iJ9rvIv0NTsejOX6nPKj-vkWCAeq5abKTzo-Ldo2hXLZqSMcturFJzPgzzwHzJcfKc9WCWEUbzLSKKvPk3LCT31gIBKH1-9_XyScvRiqvAgYTduRYP4", width: 2833, height: 3777, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108154356243444240822\">Ken Leem</a>"] },
            { photoReference: "AWCwydg0fB7-ISAtB8duohVB5k0S4hukmHleyIWueNp8hzwiVLDy2e99FazR0hTKEeIyXxitAhfuagkX9M0JLPilqZUDeJ97SCquKnbH_9jwi6G7TfSj1KIxoPezNK8pozgoqNcu8zbCyJnMdn07Lirv0M1Rxf0Ga2LTnCLcPL-Nanw_r6ERK4Wy9AhnJO1Ev1USNJG4rSw1LUnnW0MAuWlVdVpW1iH8nD35Xgl8I-F2soAnpq1iCLzGjLkJN2Y7CBot16Yx0-3CPkCblXauxiIQSJf1Sa9vyaELH3t0ykmH6fhLKIyDwVyCgsasLbpnTVwfp4eoV08et3u1yuvuQ05jbwLISLhkpCiIg077fY2f_q-ZIeo7UVKkVYun1Ri-g2S4u9yavHelCaZc5sLNlWT7CaF5I7xebdjDY_F2bVIB_b1o3LRyQmEKwPeWrkDbJw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101413373462381644041\">Thidarat Tomku</a>"] }
        ],
        summary: "랍스터 요리가 일품인 해산물 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["거대한 크기의 랍스터", "훌륭한 해산물 요리"],
        tips: ["특제 소스를 곁들인 랍스터와 튀긴 번을 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "랍스터 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11963004069777032839", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=SEA+Bangkok+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
