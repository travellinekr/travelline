import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "방콕 왕궁": {
        photos: ["/images/bangkok/info/tourSpa/the-grand-palace-bangkok.jpg"],
        placeId: "ChIJPzZsMU6Z4jARQUzvk913bCo",
        placePhotos: [
            { photoReference: "AWCwydhqfoc2F_PvGKxLNpCKdqaSMEvr2Ny2gVRSxjiJr1sQYsEYWVBByZAjNVq0rSsQwIwsHwGdKCoPlPBdx_jINJ92kRuFoHlW5Guh9QDsj05VV0NxkIESHnliLsj3R9y4PeA4Sui8USzqiMGecg9oXgQ2NVuCqhRJJpPXuleEj_5k1qH2dFNzx4MAn7sMBkPrNHdWu1h78gknkj1zkvdxc5dyKgi4y81v1yB9ewcQeelZ5B4-4jNYX5GWxsCW29XKDdVMHMQ0mu6MujjIBxTQtaLKBZErbgv7QSzmqFB9OC1gR9FDwIEUyViWtTNuYI66I0423WvPdMkuJM9bTU_K_IH9zC11-PdGdGfJ7Mm-GOoQNrVKT9WrzMOvza8-bslMB--d8c2Vt8hY89Y3T8DGrLgp29VKgDcUfMplG-lR2bYUj8s", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102862128898851095867\">Kardelen O.</a>"] },
            { photoReference: "AWCwydj0zaTWnKrai_4AENxY2y8oep2GLQ94D-LAEkRIz7eH0QYZZOaGHycSui_Q3BNEzJJV6NyEGgCkqNinfy0RcD90LgyvWgBS_qxCbWikNVW9zrTZziDHjUSjcfOWRS9KKEDCGABAb-N-RadZtFrbCUguo6Olw6K-kgt_xJon6gHhBYl7dzXY3rqaQGN5o_sWRZYvdngfXrBCZb9mVRMdLnZQ2PkcRlBnJNu3MLmmZaCzQGms0ANi15U5IWd8LqcBJPlDluurEddAj57KEl9nNh8t_EFXqBtJVSS0w0mr_9Ix_fTBuKYH3YF7kfSjRlualO9RhkI6z3yCCMaQHGRbWKUhtQavreAGBOO9mNOP67rswkJsyLz9e_X8WyrWs8H0iD2gW8lpp4xbCeVaMxSlug82t-88vAnZYdOQzIqyczaxbwYbkT1PxKpOToYT4RBE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111444250773136827044\">Bharatundiscovered</a>"] },
            { photoReference: "AWCwydhl_Ni_oTB8PlGrjbGa0cWRiLN91HenrBMT-FpJenEhQEM0jIdjQLZmrHemClzxx8rqqG0Wh8MJsyvk0ry-Pq4IQ2aa964j6hH6ACgSqpUUeh8w-SMEQ_vDHxYLOeSUmpaozG0Z_2q7I53IA1n48sOpe_aDzrLdrfCZPEyRlrc8maJ0RoccWB3nkJX5LKovFBXs04aGjuhy64RUsiOl5lpwP5T28E2JhK7vcY0OsqHhipFB2xXbAkAWifBKzAewIoHkbE-Voshwh1zfBXe8oZRO9fBI24insHRUSVsy6uvAd0u9C_18Z6evqwHP3dC5NuHvqhR5OBV2ZXrj-lHz_VNTLpShXzYTEZBN-JWwAlx-2ZxOl74D_WKQB0JXeFsomYXeSwHWHG8BzetYiYrOtiBDHwtof1cHOSxM_nDREnowH8reATMfN1NPvI9iXybY", width: 2220, height: 3003, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103928146630405020043\">Gianni Ciotti</a>"] },
            { photoReference: "AWCwydjPTyfsBdI9UG-KiE9pmQWa-QLdj7HGIcgumeSAgCkhLyq-c7Do68tQeK6q6_I8SbTHvWJEkoBdT3Zlvb5jgtxyM3X9NUpkhzPdpqzEzDrXoDMutgmzDglVdIt7Xq920wS63zLtr4NNS_JQR6ddOPyPgAu3q5EDrDh_aV-p9uVc-lFPYEioHihNCEJkbV1OYMB_YA5A6X-mCONnXeuk08q5MCuUanEob_Si47WIgtY91qZ6dJEsErItQ2Rh_NUgxRI-oxMXtyBcshMbmn-tuWRvtfNuEtmWPplV5JOqptAMOnff-jNHXagPnckvjSS7MYKh2lLGZ9JjKoLAnAcyEzLwUFyLoga9VySXyjg2KEcynjPO0sZrX6ECr2cj8H1nMKGsBB1ABMMp3Sz60grgPK7cRUQCcTCqXAmCd3wDdr05gSEG", width: 4080, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108585388936961445093\">Amigos Singles</a>"] },
            { photoReference: "AWCwydg5Iur9Gsn2Wd9P4XzbZOPlwVBTjRyGVzk47oOD5_RTP-zyhZYOXK-JKKlOYM3IBXPvc3uHkoB6pLT_9kz0v3PQycQVs24xHk-_ZpVLDimPYRwR2NAhwb_Fx9ORPJAFQcvqAKdwx9zb5vOlNwGK5afVbvUAydyuQzhMU2tgEJEbda8c5ALQtdABiN-1LObfGw5O0Ap9iqbA_LEiyJwt5fBuiKIXykgOIjwBh8QE8-3gYNQmzC00CRxFQWFVDpU9jIAtKPW-e2eyoAeqS18-rlabLZVMmJYfofT7gtQ2jnMQLnmHkAiQru46XUKve0okQPTaZ6kTO_cNOvPMH228SlcriV8uj4ONZH7qge9CtZMZEuL9gWPbnbH8oWwUmG4T4oIoRthfQNOZFCh9TgLiMDi05jY5DF-ZaNKZUjT4Cj8", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110534381115301308410\">Rubin Wang</a>"] }
        ],
        summary: "방콕 대표 왕실 건축과 사원을 함께 보는 핵심 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["방콕 대표 왕실 건축과 사원을 함께 보는 핵심 명소입니다.", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 3:30; 화요일: 오전 8:30 ~ 오후 3:30",
        duration: "2~3시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.royalgrandpalace.th/th/home", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3056950040631135297", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%A9%EC%BD%95+%EC%99%95%EA%B6%81+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "왓 포": {
        photos: ["/images/bangkok/info/tourSpa/wat-pho-bangkok.jpg"],
        placeId: "ChIJgcxFcQWZ4jARLsIR9Qia9H0",
        placePhotos: [
            { photoReference: "AWCwydjGZueE8--Fvu-eui7wliRRiu_2geU2uz0VQ_mzecQjDSwr51tQ3HzEGO_FLp-35tA2OAdO_lLfo1aw8O2tfJthoHsNwmUB6c-RPTPX4ksf0dIOKwAf2l7Unbx4u9Mdkz6PCGzk1SkefF8azd9rRFnvlTsP2yQsykCe2h4PMJYIXTZmBppuDhJibB31-iKDkKNgIbFT_8T8Nwb7h2saSMOrd453SVBCGayiBSGp3uVcGYFjLp_glr50wGq6CpQqeahxoc78_1Ipum4rTqvvZBdAROk7uSVAQwAuHCW310Gninsuenbtb15wrWp0b7DudwWiCwyHjiNArCPa6CMA7OLN1miGJey3npcajUzPkhZ_9efbo76_s0LsdDL6N0NO_SoiCd8OIASzucBxvJrdk6V1EG1AMDsu1A9hruOqjEzYEtoJ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106953098731327339311\">Павел Антипов</a>"] },
            { photoReference: "AWCwydj1-VY-hQuCOg9yozECWuynCyPG1LRioBVNRjW8D4KoxzeKRWzLpMORdE0-XpEvzdI91hccYIoxTt2m8miZuYQchWvYdNktmbQkmgy_ekrmtgV9SZf4dlB-NTBXWRFzjn_P8aHCnCkkhwmdB1USfi5VTC24d9UYu54VDQRnG-dWPUbhsLacaNh_RDU8QrTNs-novo4xgUmbm6zzq6l1H9poJyzSVGgbxf9EuQlUdSnxHi1FQMOfZIVJYQIVGnPFReSMwUHYDQfr7IheDlWU-KAJxYZAfYdCmOUf4M9b9mP87KaZJAZS9rWy7xDGyozhNF9EmKDfXFSBR4FW3mFta4yP6AZWL89Seb_tURjDYPDqMxz5YaFdFWLZqHIKOw5kCsP6e3vyskYwqK22V6ZnQnvwDKq147PMb2wHXLPz88BADwI", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111444335915743642688\">Niclas Toussaint</a>"] },
            { photoReference: "AWCwydhyqNhlwcX6iSadgOioANzCPUy9t8hWYg-7CJu2LQLJs_Su44SU9HDVs5jqhq2Q9QdD3d4hz0ie8MUylONDI7u0r4h424f-6qI34QexlerpwboIEOsixaQw87oTrcm8Qnt_oPs76GiQwMATWw-ioDl-f0QTzh98Xj9Xl-AYHFEDTczj4La03kDYfMpLiyMt0cVEH4hMTCZ9xmspn7yoMg2HfUL5J6F_ym-S57-vT9M9mCkfYh2WsteTKmg9UXSM-Swij60rLh2iOPp6dwaEAqDOqmfZmMRiV0RrzcGeEdKk_EAbSbZsvX-6oWIEZIfYbGzetye69pLpLF-31KO8QjimcVt3bC_Myv4Gag_EWY68GaRfXVvLrtV8NjWeebUau3evNibtNOMEkIsZJJt1m0137xpCxOUY37M1i2scrABoUA", width: 2976, height: 3968, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100164633036445716589\">Gabrielle H</a>"] },
            { photoReference: "AWCwydhqeGe0whZ8i77oG1y-p2WR8KAWpGD_d9Q_iJrqVPJekeRuAz4r0vrCvWcDI0fzpe3HZmFkv9Q3FpPDa2x3fOtjIJN11Q3RgwBZD5JKPV9-ls0aXdViTvlZTXRwxNaGdF5P3aPRlGLPw-ZDcVL_0haEYAJN43Yt2Eu4EkAketPVTyla3U7ghmpEhANcxNkLnkzJpos9JdJocB6QOFG2UY39sgVDqkH99nV9r8vO3hJ9Ss3hyaSL6jVmsuCeZqY8cflOuiQePwD9ja3s6mDFJU-_dAT8gubdox0I84baNyM8VmtyfkuzLrP39xZcpGrimN7p82wDFiZ0124H4UZ-rAankSgly-_nph636rNgo3JQZAGpwdWIt2qoIge2ALDRF3bMTOPSQGKX7gtsYz26b6vrz7YFUn8xkr-64w9e0-1_pANn", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115945333086424277213\">SHINOBI XMIE A7</a>"] },
            { photoReference: "AWCwydjrS0auW_YT9f4ksD_3lDat7cFQAyLMCzqQ0X7PDlcyalU8ifGwZsOsdVtZ7sn03ktvbdEHPHXXiKv_HN4-Nzt8Fk0_U8cPva1-OnInwXLkFklO0bNmPL-TrMDkFKP4C_f03IyTNDrsB_KWwC8z1UlAUhn_dcSqQpdTFBVB-S4PU2aB9Q6IuZZoyW-Is1CautCfsSuUxstwR8qzqMLHgu492LC7DlP8Pqb6zGCQ_9miAPHWf7SiVYFfFVqiNtwwnxt-Hx-RmRykBBkAMAMLzKoihurQqQDyFABBzVIb1KAAQHmeQ2WH4ZPThyrEaXwOSRq1xdU6QpJalGFWhk5lMqgML9khkheAJCucyye4-i6JFqHrEz9zTeriK2pCc5VqQQdn8mKRZwx2524Akpf3owh58TZ1562-9YuKkiNkDnT3Lqk", width: 3598, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101916781999120964839\">蕎麦殻文様</a>"] }
        ],
        summary: "와불상과 전통 마사지로 유명한 방콕 대표 사원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["와불상과 전통 마사지로 유명한 방콕 대표 사원입니다.", "평점 4.8", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 7:30; 화요일: 오전 8:00 ~ 오후 7:30",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2 Thanon Sanam Chai, Khwaeng Phra Borom Maha Ratchawang, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.watpho.com/en", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1664761078418654335", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%93+%ED%8F%AC+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "왓 아룬": {
        photos: ["/images/bangkok/info/tourSpa/wat-arun-bangkok.jpg"],
        placeId: "ChIJaSv_6gaZ4jARnbiUVn6Z_YY",
        placePhotos: [
            { photoReference: "AWCwydi8aA1m6leVx86-Avm3fJQIKjObHxKRb7_nQKaPBWDWbzMYk2GyiE1OSLfAMu2eDSJTjOedcYGM7blLBD3b0IJ6UiE3bU9xtH0jeJOoDfynfZ1X3DE4W6zzq3UgU0STATc5enBk8ohnmEH4rkFldVmrIAt7CYQ0KBKI0kPEVuOGyyWWxFC16M4ylICjHwScvcJTvd2uKGdef4Gh4vMLvOB7HHGwTBWcjP-xZxIxoh81_KYwfwNNiFemdnU6zXOURHArfoKFUq2zMH6ZoeQ1EJU9H2xe6lfl4Ol6Vqi2p_6i8SvbTjyCsmAPDmVZxm5BtXrvWPCSKOWezfBRqk5Fuejs_Y4qFt4g0-Ki2u3aGXAXc6YzIze7Zg9R91ulK8iQJ0TL_FFpHkRd4NlVZ2nw4onpVPLKWkF3bwp-MZ-baeG166b6", width: 1089, height: 1089, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112653554147218489961\">Manit Monsur</a>"] },
            { photoReference: "AWCwydgo6v_CefQnW9xP8PgKIdMKOehybqhayEOpHGSYN1v7R3cEFEpOH1-VxvI3Zkd5k6syk2hkskZfmCkBLkevBg8UVKEHXZ0i2DtOEq2fuQl-uXD4ezgZvBVQ8ftDDd1jbMuDGRwCK1MPtA5sFgddtMLZp0pHxxG1XoQA2pl8gWSI6p8cNSJsBgqFSoAx-ebm0ZAeAubUzNJFfXedx1bX-YiYO1gHpH30aTfxKW-MwhTHOAwpxOW-Q7PsVqDPIfFkdJBHoKvFHqnoeGUosRYGsdRgaoD9HIkWi3bx8niwAOQ9bnq3VP6FkGgg7GQHdkoykvMW_jQ3usYoL83NuYyknulWHyURFlwxs6VVT4ee8yjBXqr0Kp49TrIpkU6poB-LrnS96W7T50ys1BV6Cwv5cNfg8ipHVHkCzTmAKjMky2GqABY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116144323703593042149\">Lochan Sahajwani</a>"] },
            { photoReference: "AWCwydjU8WoQMs0OFxztSVkSCwWDrKy69Hv9WOYnmgnq-lK8lw1JTfICka6FhBhffv2Tz4uBBxyV_5DAmQfbYMNVyuc8mfO23RRoltEyAHXKMaPHQMW8vKSpjURQ-S7QD1HhZuY-sgYhuaKHHTrMHiricpF5X0m_fXPy6zpVrI9DWQt8Y_cMVgRu4-NSk6WvAFJoHX_Ee7rzUuSNhI1xopi35Z2FzLmXRueQGVhBNuiDhBMfUrObhVtr_XGDy27uWjXNE7YGXAVbS3iTEH0fh2kgToXNTfgz0GQR_BThFytUtJpHfrWgbjvkLCk0O5gLFjrpJnrY9YJDx-9qUdCaKcatKQOFNqhZld6RPn6mWi74fkgoKEvka5gGsGbZCxYVnudBVR6FoFeUHLcpMj-HYNtzU9tWQTBwZ-7_1mYmmaipbqenfg", width: 1080, height: 715, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111488197969035632768\">Даша Тараан</a>"] },
            { photoReference: "AWCwydjjII5Ff302SM2Vl-StvsUGP9GRalim1qkZW6dz8h4mY5R9cyJkrCtBadnHqsHGVkLbF-od1SViAD-Qn_y3esy-eZEpz7nGJf2jk-1QvXYPDq1ZVwMcfsddKxa6vkyYotmddT6z7M8evHrYlEg8N-2bLYRwfd9Ip4Bz7mi6VwTxhMQtI1kGC_nAJO4pBmnrzLIIvscgMqB7uZErgjkMFAcT3O2QzmjTVqY2ldnR6hH5VqqtU82UJoU4w3ur3DrpGCBbaRq98ocL-j8XiMMr8vmYGvHIYqEB8vwvwjmyhkoKCqAfMlWJqnFLSqKXD-L7ezVVmQEOJwE8DbfGxWCLXcBla7bOCNgDlv-Ll8npfGkIhQm6iiCvU1jQ3LUMdW8UOrSJ7IiMPtJslqy-W6eLcAhpcjzVujaCbBI2JeTFZkoOg_3w0pe6IY1V5Pd6hw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101251444186133371801\">Bạch Hoàng Travel</a>"] },
            { photoReference: "AWCwydhTWZ0Goo00qpcGcJHzKOWxy7O_Bzp1HluZ_jirBjKRDpw3mk1WiHXd-SC2HVqk2QCSRP3j3c4mos9JKz13Bs5kY23d5_BhE3PIlDMo1n8z0DbM3LIymtz6fJY7dQ9RhhusAHBuwUyu_LqX8no4NuKZ-7BNKW9Vzi4Adv19Ig3jMHnbeheNXb6v6EsR6GVRuFtMxRyWvl_Th9kBq5tl00g6z_Cd1HxBdPBtlxcIBfwQtRcM3aZyOkvj6XTlKJYHOam5gcATftHYdSxpIPQDtYv8mX8mzufD3PtW964aC0WI_sxp4nmIFt1pdt-kGFPc-32hR1_J0NXJsnwSQCUW_KMFOOkSYFX2i_8z6rSfapD8Pt-9hddtMFPkFJCVEljPrkFtoeEQ0y_m3oVzFDOIMLHYO3ooWyqgDRhlWSbVVYrS3cpB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111915074902124900183\">Jirapong Jairin</a>"] }
        ],
        summary: "짜오프라야 강변 전망과 야경으로 유명한 방콕 랜드마크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["짜오프라야 강변 전망과 야경으로 유명한 방콕 랜드마크입니다.", "평점 4.8", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "158 Thanon Wang Doem, Khwaeng Wat Arun, Khet Bangkok Yai, Krung Thep Maha Nakhon 10600 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/watarunofficial?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=617771626444791750", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%93+%EC%95%84%EB%A3%AC+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마하나콘 스카이워크": {
        photos: ["/images/bangkok/info/tourSpa/mahanakhon-skywalk-bangkok.jpg"],
        placeId: "ChIJhUnURACZ4jARwb3dT5UiytA",
        placePhotos: [
            { photoReference: "AWCwydgiy_91Au2kauRrBKS67ExRGoJStEnnm_iDvm1q4hphxHOZ5WyUHNGxPR6MpWYti_j7CBDEZtbTHLtoxbQ-H8pZwO-TIe3bdk_7bXdh2CThwMWp6zsv0sbNdSqxcAy-NNJ_SS8XmCyRzHitEAvg0zM-kQ0LukC3klwYbE5HMRYPJ2-78HAAzxAG7yr4y0_QvuaAvGl3w2p8LgN4NuzovT5lalptFVuy1M9xSaoelKNHR1LqLiD0821X1bVwQWIAg3Fly0ec93RK7CzasIbtfXm7kNJkEPScXljGQUfE7uYrKTCKv2F8LSiwq7avEhlnULmLRcISvTjS1YOx4yR-JyqXUGa0jb7BYDPDeH0fjQaR1tp7P8fyRr5KsV4kRe9OxU1LrX7pS0iYo8hYH8AVaXjQJGv9BrX6qe7QSm26nCnvfQBgwa4q6K31Zzez3lA4", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110377176960061889756\">veeraphong jiraphanphong</a>"] },
            { photoReference: "AWCwydgQDUMbKOLTtwuj2DvSsXNggppNCCC_o-aL7_apxWLDYDK9jSVldZ-W24DDkVV75UfZNuhGyQ0wp3mPJrIf1mMa9qGliF5dU7E30EI227kn44pL1_BoTy0CaIb4QF-HDmubECQ13LnGPQCug1axymrKyI9uNP_RFrGQhC3MqbIzCEGQlKZWIfrPs1cfL6KtUKAfMTLYEcdx3jQ8BwFHWcf-j2jfK11tc4Oux-xS9IR24TXMCBjtobh9jwf6zUsS_dpaFqo0scBLYAJ9DxD4WphSF_GMINgvSSbKnUFbTXfQ8d9_HKrwhZS9NDK-mg3zpZ9K7EvF_oiDX5S5n0_z5gKpvFejhxKvrbkcB80L7BktD273Ib7CvwGrQxgPSadinGmeiHQ9aMgiH1HnaHu6wkZQowhVaLqpKVwhU-Go_kmsK22wIdtrFAUr3OJqJyRT", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106804006453182132521\">Alfred Ferreira</a>"] },
            { photoReference: "AWCwydhmfTv5sgzkO9HbFPbhyVXPXW7Xb7ewnwqpC5a7bCBn6K_0pPIBZhi7LVRhJpr_XhqzNRkjtvWiUgThYukB7E1KvzBZPQzUO1VDMeuR8ItNcdX1nQZxeWERT6c8eR6lNKSmrqi1TMRQdgZ2NBqrDjQxnElic3trkKjn9uTZ7NRCrBMFvLVw44UaKCNL_q2Nkq7ex3zgSHWtqyyPRhZjRZ1G-fyM0KgjZ39btB_g-A5CV0llTbjGSrFvrmjN3b1Gycq9c94AmOb3s-WJXdHxuJWZ40vNJ451XFKI-xetoIxlm9PYqk1k7nNQw1lNR9QzlsqmxJSlkNNipgqajhS7fWAoNzle387hOm2kj0zD5d3T1YMbHlnopt20EIP3nbiBKKGT1reylr5u4jfMXfwAiPyXtuNf-s90ipP0Si8CC-sqe5HOd0WQWmBSeeq9R-j8", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113581733856193074434\">Manas Jyoti Bordoloi</a>"] },
            { photoReference: "AWCwydh1q9d7oR9p2PaMFLbfA87NVp7kchQUqBQ8MD6j1m56O8bKa0ZltoT88BjRvthU_pmMEGbgGAG-A5vYfhD9m4Y6nD1JTTfP0yBC68PGduCRnuz7ss5pcZ2-cyVhNFXq28Zby5P1qdCzW2lfH1uP7OAeyKsIRlQG0G0XF_6V4j97mR6BHn0jqouJ_K1Nadxjsc6KanWWYK7lybpeFJp5SxfCFmWfrz5eB-ddfHjZ4eLj85PxOU4aibCLP3IpnrDTSH91iWo4iKYwA8tkpD36_WXIJPyNuAGkZQsoEOF8gsFgxJmUVq1aAEE_sNDTsorC7DxUGaL0CQ3b2pA5AOXyTtaG1_zBPozAcERaZCRZLKsb8IMWlSEJxHkicgphtp_WISX4grtv2-XSqwIrIkefi03hZOTGsWNuux8gDpVadSjHrX52L0N2rxmAOWxAm3zr", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102333069097391169450\">Aloysius Yap</a>"] },
            { photoReference: "AWCwydgIiFId5CsWB_tG1ZjhI1P7bXwQp8TPhq4ABeqXKN3FFPs7neqm9Boq7H-EcZYUOlyzE0t3qALaX0CR6Z-zicLkU9bejusJDm-t0DrMV7mjbj0xAlsPHvaTHH9QMA6AcE9SLQPElSx4EgS7J5mxw4r9VaTr2dtGw_8HaaoetlwRFqw1T2fM3bz5Xw1jcgZP2IHJB8JOrRarWU-dPEDN7oltwal_7JJY9WfkXIBUrIUKhnoaI_BY-mSRtZwzkcrAATllFBgai7semb6_EowETu_3cUYMoqjNpVvld58NgRNn3vxNmWeoe2ZHY5aSv1NX9QctmMvt3rrjhL4VWpz_4dRSOQA0O9-ssBA4vadwZBRrDK9_7Loqcmq_EiVWGUKZJHkZGMW-fIqiF8e1vVdez4jl7VWgrPMtSAo3C9b8erW9eFOeg3KBCx1uxL1KrK7_", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113862256175074242039\">Marianne Poot</a>"] }
        ],
        summary: "방콕에서 가장 높은 곳에서 아찔한 유리 바닥을 통해 도심 전경을 감상할 수 있는 전망대입니다.",
        updatedAt: "2026-07-13",
        highlights: ["방콕 시내를 한눈에 담는 파노라마 뷰", "스릴 넘치는 투명 유리 스카이워크"],
        tips: ["일몰 시간대에 맞춰 방문하면 환상적인 노을과 야경을 모두 즐길 수 있어요."],
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "114 Thanon Naradhiwat Rajanagarindra, Si Lom, Khet Bang Rak, Krung Thep Maha Nakhon 10500 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://kingpowermahanakhon.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5665740806921291380", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%ED%95%98%EB%82%98%EC%BD%98+%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%9B%8C%ED%81%AC+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짜오프라야 프린세스 크루즈": {
        photos: ["/images/bangkok/info/tourSpa/chao-phraya-princess-cruise-bangkok.jpg"],
        placeId: "ChIJDW6sQpOY4jARb3IP4RHvang",
        placePhotos: [
            { photoReference: "AWCwydhmUiTctzVJA71tv7K8aJpkeh6jeCm-lRyi00hhMewo8MIwQfjeGyj8Ytz4Sk5te8Fuywuh-aMNu0m1jn0MbIVsqy9HAk7gW38ePNmOlQ46u4DkY5jNM0rKipk9XdUh9rWX9zP0QUBfy5TuaBFwGgMUgKrYFMBnVS7KqkjjSVYh-ltjtrZw_pIxaB6XbrHO2Y44au7pgp9ivrXwyP7rPRPw4FyLxcAuLpgyR5byQPQsYIL3VYANCrP78FSTOeh-DpsjmyHUKmvPiXbu-SR_e53iEsEnTH_adopqB5DQ7OpQk0l0J-LKz0jqWGekSwdQdVljIC0Q0I-OZR4YB4KGVYeePBe4-xshxL9SF464VSWDR07xCR6Lps9QnK92UiT1IbP2dji5aXO1-o5qlI_SGh3rs4WvCexqNQuBXu4Zds98SQ", width: 1200, height: 628, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104326017894154722223\">Chao Phraya Princess</a>"] },
            { photoReference: "AWCwydjydcWNIP5hymk6z6yn1cnpN5Y6HCVSBvNlKNSPrKxnyDq2xrvqP-RCLpPlF4E76rmkTXkld57PGDi5Ox0k23S1iu8HrNtmXHvzz4PI7o0zqKhpQjKXP2NUIE9y9JSzs5W2NX1VCD03c5t60CVXk1V4haVTY3ZVIUOhTUFiPfuG6VCTANj_6S5tflzqT-EGc1B5flQiF1nv7wf6ScbS5-AviLTzPcPYs3DneamUlr7qeP8uyWWKiJDfCCQ4V0R9PertSWsdaBTcFm6uyn2PNKXT7QAS8mw4zRm-6dj7QfPGar5Kt7LrQMdKe2S-H7svpdDd3xJEqvz1ZB4HHDrmjEJIlITtku6L1AxvTfLr66kz6DwtLflruyMmkAO9vklLDKvuxDi-5Nw0lNkKiMgViHniw8i1qVSbltl6S8aIYm0rHFmg81izdu0vVGLSnA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111410925535880323819\">Frank Herchet</a>"] },
            { photoReference: "AWCwydizOINEAINB6AgzkYsF4etaJi0r_cF9-vG3RxFAk3MsdtJtuA62Q_Y4VK6vz2YyB7TGDAjUfXJ7xOCEpEd3f44OEIB-nWtK7HWp4Psnqr75sa1jzyWKEd4fNd87K1RwbqiC6_4p8T2bYR-BJMclKl_XjIQdJabBIwCn2OQdzWFOsiichkfj4GvJlzEgcw9gDrMgSx2FVzSva0VL1nK64RzyVCK8UJjfo9Vn519PKDwbl9zs8yJ6KEBrnIuR_VlelDqrv9_aB4uIWxtShtqy5r-HtB6HktiYWut8h_2CHcYRkJ3UWDHEFdp_65sD2thc20L-pCQEAL-8-lxPybFUFz43B5hF1K7SRUppbsGkiCkD5miasvqs1IzLDhNvQmyilQvMG-K8zjDez70qMUfUOjZZF6fng0mso74XIDnqims", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112800472157604709917\">Jan</a>"] },
            { photoReference: "AWCwydjXxDThVT_GwJX51jQ3VwJOORp2fZl3W7z356Yzj0dEuVeb7zhcEdtpz71a6jul6i7LUJ80wCFDKKvh2Vb1OpiWbGg68aV0GAmFE3FfwJ4usFgqRUp18Z_S9d94cOd_Hzm0G-cHxgQwBYUfN8C04pUqvtUmEA4-4u1SRLOPOb29NRFV6MYBDPweYwSo5YQnHKlfSgJuJbt04owZZjfW3yIsUtB-4g2f30vWXCDcTsa-wAvFGoBwaxMnxSj0pl3ddfAbYcun5iX58JlQFMjPIOEHnjayKSiVWdS9evVzIRQSint4qsNFH-kJnbUBdBA-Jh6J6IEiaqXQfpY6l7cbhQ2R3aYTnHmRCwQ1x3HZvlqt48NvDwh9VNunuKeht-U4Qmxx1B_O0eK9WyOM69eozRDZglCZrqhwHfzpv_56GQ4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116585614877993483182\">A B C Traveller</a>"] },
            { photoReference: "AWCwydgj7C9qHvdsHOGO-QlA56ugXgToTlvRuHj7OxwOrx6iIm8wIWuyZ8r2Qd1iMn8oQBSMe-XJejagFvYeWjkK5KKake4ZasfybsSQ4hBrIRCtbpy8325Flvoslg61XUpwfgx9K1NLjfCJy8bu8KPCxgxF2NPTuYGk8IiY-XdOO7SbMgnLzJMaUoKcng7luZkR-lUK7rkIcPwpYt89hxbYb0voSemQMjyh1_iYpNyg2p7ZjcE2drnTuw0FHi5wo2PRxo9SYNpk9SwfJkOJBj6If8VrPe-MXjlb2Km3X2ldLTZosZq5SmO4y5Rpe7kS74wPcCp0t5l2GFKYus3eeoWNopBN9RH_wF_078jJumT4O3m5PPxfw8EjUbZdcA5_kjLWPlDmtMbOJq65X20rUvB7W_2bI0H6t2lDY_1vSsxkjJAgeQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112360716340001548819\">Nguyen Van Quyet</a>"] }
        ],
        summary: "짜오프라야 강 위에서 화려한 야경과 함께 맛있는 식사를 즐기는 낭만적인 디너 크루즈입니다.",
        updatedAt: "2026-07-13",
        highlights: ["강변 사원과 도심의 반짝이는 야경", "선상에서 즐기는 풍성한 뷔페 식사"],
        tips: ["창가 쪽 자리를 미리 예약하면 더 멋진 강변 뷰를 감상할 수 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        duration: "2시간 내외",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "ICONSIAM (Piers, 2 & 4, 299 ถ. เจริญนคร แขวงคลองต้นไทร คลองสาน กรุงเทพมหานคร 10600 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.chaophrayaprincess.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8677010492152050287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%9C%EC%98%A4%ED%94%84%EB%9D%BC%EC%95%BC+%ED%94%84%EB%A6%B0%EC%84%B8%EC%8A%A4+%ED%81%AC%EB%A3%A8%EC%A6%88+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짐 톰슨 하우스": {
        photos: ["/images/bangkok/info/tourSpa/jim-thompson-house-museum-bangkok.jpg"],
        placeId: "ChIJWVT7hDKZ4jARGJOhe21RhOk",
        placePhotos: [
            { photoReference: "AWCwydjjLCASxFWViQri4nnZAJcQaxVoaOKDkeVDLx_B-lVcgP7ZztexiadHDuMTm2-vC8Tal9EgbBKnNUWiD-CjUy35fqbv0AlLzKrb2wZNSr60Ez8LjxSVlO-GWAHZlqb21UAk6UtcqJrnnaqCIx0Lp24G6P6n5xKat6GyYk9f-irufCbD8ejAe6QivD1s6ncfrU7f3jCltgiS60pEML1Vf-HC0AOox8cJXoZTbWLZ8XYc2euYds6MMIz8xUlNYnaNsCp0iXzHeml7YmWZUGFVkWYE4p--HTDwkk4EGHgF0rqxDXTzAMlaggX-VSywaS84teKV8vTdoY1htfY0xCSNEIh8MbxwjI43_9YpQtXZz6bViBfpcJQMUViYB0GXyDvSz-rbOYwkjQqV4SLDK8qr0EzcdAODwifFnP6pxMOZH_03Rh4", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114332345573544911646\">Ivan Teh</a>"] },
            { photoReference: "AWCwydhIvm9xntSHddFBmVX0UOYggeLhFMNINHB7b6LacPdwP2T1oHAC_1Jp-UIYfX2BX3cTIxWhSH_7qTxu96n2eTuAOuP75IXyo5nDCapGdZ5CzwwnxJfXUJfjrSXeVjSGHd07qK1bJwQMSGZbwiOczZK7gRelT642JBPtllcXW0pEHQH8eGqEj6K7w06xxIKAI8WZK3qS96mPQ1RxeZbudmhS6cuNMU9pIzVwPyWgE_ltR_4bXK0D-Kfcd_x-Gz_tIYmGJI8ANVYsgyqjnZ2lmq5lWFCnk1NgC6kqYqtOTDhrgVvgIKu-KtkcrHmvlM9G3P6hcRj50sPsh6P8STq8NeEQAK59xwMOkzoTpsMjd3wwcNxcCjB9eHy_Z9oHqDq7M94D8tyADQ5BzTymwsUijCjbdAN4ijqA40ecAyvGuiY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111366381113503623221\">Sergei Kotlitskii</a>"] },
            { photoReference: "AWCwydhnaL9U4xQErAQdlhXVVEMdFeTMXKi0XXRlUKsJxA9XKcgQiS9z4NvXtekeebZ0O9RTaH0d6e1FPbumeR0JD6Szgmu81UjJ5IK6m9sviyGPdmcl_1xQINS_tXsh1B89SZ2YiujLerUjpM0NPQKVCENGevoXpKhHSEcAoDdpemi5nJk01Bz4yj4VVmzmNgE3IZtwBddkzBlPQGVt77zlS2OAnpha_z7nJjknS2TuXdwR2rVFKwWGPmbAHQcMJSJ8a6ceh5VA4K2h8MgwB6NbUHG9pwbO8dZ4X3bKtXthtJv5pWGNIxHYzictS965hJysalFC1Lqy6cdRBczAs9oRVEgTLWQ3l6_KcVbwPqonFwhJKg52NyR2TlMYkGYAZ2IlCpfyDMlRG0vGWxIwm_B6pShThemA7olrgKqmiofNtjxREMFteMKUI2NN02S_C8i6", width: 800, height: 640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100288852313827917724\">Sayem al Fayed</a>"] },
            { photoReference: "AWCwydhacDENkqOjDCIIU9aj3AQHnIZ3_XFFTGmppngxnZMrcWOTVLSF3F_oRK47MKo57RTu-DCPTcsUYwIeAGVu5VpfHx_YlG9DOCrPUEi8zC3UueC75TdQnK6Llu_B6kL-lh5gxEMTp7OoHy40PLLM6ChWrXSCGGCYHj_2hkKHfCesFaVzqgY68Hu3xrqA1u3MPoJ5vCkh1IRQYnI6tEESa-4TV6EfN1eHq9DeIPEHAYFW5G75StAP4hMS8-208ysVJaantJr9dHo_YCYwd9kO0E561h8sTQPVsmkWy9aR_NitKxh3oGXomun7Ewm16p_f4RHu5x3mjGeQWmOp17YwxEgziRmVEVmo9VMOdj9t_J4KAdpD56NRAkWwIUj7QYR6KwpbJZuXVr6s1RMqhqP3j48BPEahYI-itHIIKez-Aw-G1ALn", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117380989453852358580\">Chaya Manob</a>"] },
            { photoReference: "AWCwydhOvD45x5muNg4EhtdIPvY7tlN2RP1S5VVOparJq3D2YRGCsn-Jqh617nlKXBvHVtJuisAhCSgN7HejQl-rpIA2E9YoVVKeWudJV469khvsx0gzYn81lt5LyhHT_mWflZT15Aj6y-VMjdJ_yXz3ZyUpPnJ_T_pCGdoFOedNZZwzQfVD4bwbhVfzPJjARIlM9X8pb6dQIjmABR_TbOwN4BJdiQN3_YzCRvHQ-2q-ybCrNHwqEFsVwpmdJRmNRK2qZsKifqZZEGvTXN6hkxNIrwi3DQmrKseCBmvudUQ5QAcHj6-c7F3BNEj_E5Sx8s2QVYID_czL9m4vV5yw-U8DXrTWJsGGCQXjWBCQVRHc8uHPSWNPMHoewqFOAM5veqqskgk7gkaTcdYZ_mW5SrzEZS8aKRyGFwnaGIg7AmLUEoJtcaTwTB6Kp1YiDNiawev4", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100715546503239025754\">Cc</a>"] }
        ],
        summary: "태국 전통 가옥의 아름다움과 화려한 실크 문화를 만날 수 있는 도심 속 문화 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전통 양식의 고즈넉한 목조 주택", "아름다운 정원과 태국 실크 전시"],
        tips: ["도심 속 조용한 휴식을 원할 때 가볍게 산책하며 사진 찍기 좋습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "6 Soi Kasem San 2, Khwaeng Wang Mai, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://jimthompsonhouse.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16826663638430487320", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%90+%ED%86%B0%EC%8A%A8+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렛츠 릴렉스 스파 통로": {
        photos: ["/images/bangkok/info/tourSpa/relax-spa-bangkok.jpg"],
        placeId: "ChIJxdzDHHuf4jAR_5nQztkr9Nk",
        placePhotos: [
            { photoReference: "AWCwydh2Xm6dq0P31D8Hd-56QeNeI0mfHB_9ll9pdpOBbucQFveYMt6j4L9rCPUka4UoXUi4PSEKVs7dgHvIrlxtXpBDo-dz4pT0TIV8NRc4-1Y_rPqG6ZKrc_mPBB4CGUeShLzXQ882sbtRtq1wa6zs8Nys7UDxLFr7Iui8k0aZN-TpacjM1IWG-52iTwQQd8T_NEAQHLT4_d_9JLQfXkdZyq4kmLIiHXebITa31e2wHqp_Q_ISfp6OIoiXmQEwIhP55msFX6Xg_qkFBbPTPMUcFeZEIKNZ0OLIz2O5Z0-rDV8CsnIgRW2k9JGu2ddut5VtYD2z5mZhSGR7WEXz56Ax5xYiz43jr1QfHVHYVkF2vPpJUaECYUHg1-yYKPxRcUsH1L957-CRBEMZK7MOPkKwb3d8jbQyjURj_10NN5HdUMtL9wrU", width: 1568, height: 883, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109940594328321703566\">Let&#39;s Relax Spa - Central World</a>"] },
            { photoReference: "AWCwydjWtIGICzhn50cQG8_O-OJuPF1fKErpWywu71UsHkQEI4-YB9zjW77FV7AH-46W2UoKiLkDZiDqegI38U_Cl_RCW2CMEZW0u0MK2Xw_q2zIljY9lr2R-VOC4b6MqsRYBfz5F_W9i8B98FPxSIVLCDVTg1_u768fDzEyrMQZyDg2D3pN7WFnn4MpZe8f6_A-Ya1HlF8Uz4P1KpLBBKixdTAmsf8xd-ROhFO5MMttyOPN6bfAlFQ33Ua7gCdPoE00WFz6LQyJlJSVmVmZ6T1qi2Jdl7HwCEJyWbYlKbA4HLJmmtBX4E4OvBN64lIs0XQdi-FWsOOYm0_gw61A8vr3S-iqOmHM7eD1D--TQUiaql_jXOMwtnaorwRWF-RH_RPoqhI50iEO3t0r49G_Gyl1Rvlat5OEHXC_rWBbxK9N6QM4AQ", width: 3000, height: 4336, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105649350810228259136\">余孙慊</a>"] },
            { photoReference: "AWCwydgrdlu7Flz_thJUCDqLt7JLh-45ia7EqelEyZ8w3AMAVgKvez5LJUqzr0DEthaaZAdcT_KhlbzpUVmVfMoOesVa9ZIT4KakfcfZSFRjeSOVY4QiLrbzdFPuEm6khKBTY0bjSSNLYQvgBiV9YOLOni_YQa0WX_Vngj6jAENDAOr-sSLeC4RN6XKi1-Lj3hFqwQ5ERenyvpNljoEMsz-LFl9325p21IcekQeQ1w4yrj20pCM1IiSPXDbgJYpNqcLi-Uc4KcT9Wnpn6XaAYWt62qad-Px2jaSplYKL_ejW4SFThkCAQaixnfRTbcAXoLIiWIPeoOEear_iD30matNQ8YVt3-D4dT-OfSIp5CvxbJ_ClbzJ73E7INmxEzIEMoydWd5YwAYYnVkOSljr2LWvwdXOSe1q_MLTtRxwkPZtuNPMtA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103639160666499954304\">apivit saibandith (CHE)</a>"] },
            { photoReference: "AWCwydiH81akU4dXsJte2PlC-0IAFs8WSh2AjWgHHGvkTt--uDWn7RZQtSvxXUD3FYGDH7JzkSmtMilQKahnYi6137zBMqTX29zewSV-BznO9q-BA0CIm_H7O-BNexvwXKk-TMM0ffMbtXJUxDpTKBb8Jlmll3yDETcO6qEU-UXRIOr1dYX_yVncNTFKoYi8E71Ltt_Hd6F5wuf4kKwmCcylG8MCXnyejydTuh3boCRVQY4lp4SdkrOEFDSuVkwefltIXMGMTKGGS7RO9oKIn_jFxC3EAR0Hfsl0hkHp-nl2F7e8SM0kwczhHDsO340k7nP58yMriKvDD75FtGp4vM9kq5K_aR3EQ2Ef1MoYwJMvBICMMQATpKa5EHpf5neSUBGwDRJqtFBnCk1VVCtw-8i8Prqyb6-gJBTHA0oG7WAms2Y5vfu8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106954512366849351257\">Jet F</a>"] },
            { photoReference: "AWCwydggr9j_7bo3ell0iUf0qd6WJHiKy5Et3lTeOwSi9Ra2M1AE3l4ZjRZd8_9PYeBod_5spn7PhxkeZ0c_2LFiqOKnJctW-EPQlafCVYDQSy4K9FHRN85qjj78y2IXctd5GmM7wvuCYY5herqqV-1qB-0qFkyqTw3WA-S2iNl3Kcg7KAU0kuqdjg7Nm2fYyRAFwRsU1lsH6miUQMRSXcaJhDtQbeBTP51z7hBqUn-dQa_7twVkagoru1bYVagRXVWoAAfHRNwK2b0Fd2whdmFzBJBYZEaZGBZyoi_3BH4AaV1LTWaoAE_XzfXHGBiItjAS1DgkWE9J6FFWNjU-inwTPn58nU6lw5RCn4PS9FVVPYOiospgtVcte_FqNSKgLOhtxvz_AY2QgTgpKL4ldTCLXwTa1U53jHa3ehd_zEX9vrnN0r5G", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112332327090748122912\">Amina Ibrahim</a>"] }
        ],
        summary: "여행자 이용이 많은 방콕 스파 체인 지점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["여행자 이용이 많은 방콕 스파 체인 지점입니다.", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        duration: "1~2시간",
        price: "코스별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "27 Soi Sukhumvit55, Thonglor, ถ. สุขุมวิท Klongton, เขตวัฒนา กรุงเทพมหานคร 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://letsrelaxspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Let%27s%20Relax%20Spa%20-%20Ginza%20Thonglor&query_place_id=ChIJXfVlTHOf4jARzk976V-2bqI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%9B%EC%B8%A0+%EB%A6%B4%EB%A0%89%EC%8A%A4+%EC%8A%A4%ED%8C%8C+%ED%86%B5%EB%A1%9C+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렛츠 릴렉스 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/lets-relax-spa-bangkok-bangkok.jpg"],
        placeId: "ChIJbR0-0t2f4jARI8JTZ9MoIpI",
        placePhotos: [
            { photoReference: "AWCwydjWPcAmTquEUxidyWKlxwqEuXnLmsU3QKTIDkOJY25e3vRpIZzmqlfJyZs9Tc-2Ka1imgEYcfUad5GhMAs-DhbfMFs3n56Ytd8NiIdRr25iyNR9GNkhX8QK1BVnBZ3SSexkX0h2uxjcSwvdw8UUr3u9bU-VImPmNwI4c7IwGcBoqlrjiQxCygpwe2QevcgmvkXfg33FvA7Xm8b--Xd06KdJRgHln7yn4virf_cEz9vANesRhp0VFsNNYkMFNGyYireBtRwgDZ7fRX3NEIQg7cvpV7gRBQwkuMeCxB1U2hIof6ZzcAhNZ0FUJIBSCjRpihdBRDEeOeNNuIpapd9K9G2oyyfhMxuT-BeCGmsMLBBZSnTeNP2U7OBho4SDYoAE--PhtDrzvejD3MjBK0rl2eF_roZnNKYMI7LYg2twvt-oOw", width: 1536, height: 2731, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102805878620746833971\">Let&#39;s Relax Spa - Sukhumvit 14</a>"] },
            { photoReference: "AWCwydhxw7dJJ7FmnsbHUJVvrTO0NdXP_QpAd6SZ5xO-hQDXwHVnc-1uOPGW0TYYCD_9CY1oH1DVuHxnDtE3XX2d7PywQPftFwVKz_9p2ZW5in7jexkKX7KnYi4ia5HQCZdtpoz-ASs4cBuui2522ym6vaSEVXjRJgSfCXa-hT_Lg8y8PRq61IaUvk136jV2wAZPBzzC2Gh9vXi8ov0JP-cTcDdyEK0vm9cmVeszuU_ugb02tH5_JJlqw0ObMbzQqxWZLwq2I3_LUr8iLFl2MR94jyGcWlm16Qrhw2w7AdZC9p_t_uq2AW1zBXBhu64MKMq0CHE1qcNqHAb2iOGN2yrgZDhjQ87UohMqOr6fm77-5ApNDPiQpJyA007YELlIiWx-bsnLnosuJaoxZPh_ktiVtSO882PH44PYJkG3Z7NtzrWeJhs4emL6zk85DPoGoXUP", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101359415585431987325\">Una</a>"] },
            { photoReference: "AWCwydgbpIJrf1vRModxZIbsxCvIIF_vsLxlwN7usY5r0RBFfQTNbNGTy2_AJ6SL3cD3UTrT_wRUts4jJd9afUpfgxzuyu4Rpz2XNB39d3C6plLw3QO6eZmP_lMhTK911RbjeXHokQyDGNValLJA5pOooDtvP63kf-yyMbAljQ8aGYIjkUPxiP2QcUPuhlqJg2t_JbLhl9HSI_oRik46JYPACMD8wGiKvlHAlReEQc3hl9XwA1NQsOrOM89Fuz1K-jtQzkYIOpOA1uwWmeJM8LrdA_bq5KKASyNxYeqsPiok5GtraKujI1fzOzdn8ZGhz2lZxplVdxgm_URgKysVXZkMv0AreJTc0xaBoAUus4dBx3aPjUU4Q8lsDzl0zcvE6mMI29v3d1wpuQk3Eeei2jVdc3xTENGjr0ScZ1SaMsRWyJzvJajpcxkfjpFMgcjtbxEV", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100930036597713767450\">Weifeng Yang</a>"] },
            { photoReference: "AWCwydg5d4YKyvu2Gna1IofScvOlnSFFTUInTW-PuKeH9sve3yLuh8Q9Nfy9YJPCTdbKG_i7zEZ5H9_0iFNJI-dSUhH-T3pqBpkx2tWDYgcquDTMoo_PBOJJoXkH4fBfgxmCcBkesukakGzYkIkyz3PssMwF01hEikHvRBtPJOEcpKV_XpBU11rRzKElP5klsR5aL0EcN6rZEDk1F-0Y8wLExoy7Wo9Jnkj00K0qV4IVlkLnb4OJQNAoyURa0ecXFvfjuG3Nghs17woFOeS5eE8QbUQ79iesouF4ifucXtEFXtPMgRjMTU4uJ70Uyx4fu7-dJBOROpKDl9st26JSJY4zBEhwhjlfSDMHdGERUJ4c_8fPJXqmmXlV0--3fSss4iEY7H-MwUnJ3b64eosQNvSZzYlBGJ92tO3T1-g6QXR-pDRbiKXUBAOb1tjdrxT-5VUM", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114169554020714090522\">S Q</a>"] },
            { photoReference: "AWCwydiP6HBPwoEb8mwYHn0WYiofOyzSbwZ4cH_HWzDGkQJoxhn5ttIh8QDzMk40SZ_CDiIkEyCfhVTaIgEdkxPS_Ujk3AhFNNLH2q3xSROeryHgYBLCgLh8FqjRNRHtVPU1NhLf9Q9GEmD8SXMTQHrEQNDMrim0PWOGTYMejIHFwo3XbojCKKFK5CRy5_MdrsK1ztdB2fyJEpJy9NE7L-FvzSU-kanBbmE9MAcZMfbS5G05sPNCdto-_uXXDranlxKvUTG7qchWacUlMK40FmcCM8lLmDqPKpBI9WBDmQQSJ75o6hM340FiF2ZmMlWI9-Usk98wkx38cqtmtvCnAsh5Tavxm42SbJCn5Hj07GPJKymAi6fIFzVix8v0BYKCI-yaw3otA3ANPe-a8qN4WSJiq1KPXZurSpXpipwpF8dof4wnVijcbIMyXRpFm6uRQg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112229673181215794417\">骆静雯</a>"] }
        ],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "300 Soi Thong Lo, Khwaeng Khlong Tan Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%A0%9B%EC%B8%A0%EB%A6%B4%EB%9E%99%EC%8A%A4%20%EC%98%A8%EC%B2%9C%EA%B3%BC%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJx1Gw3Kyf4jARbN6fGLcSEyE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%9B%EC%B8%A0%20%EB%A6%B4%EB%A0%89%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "헬스랜드 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/health-land-spa-bangkok-bangkok.jpg"],
        placeId: "ChIJNz1Q9OSe4jARTFpSkCWBabw",
        placePhotos: [
            { photoReference: "AWCwydh6NHYpr4dSXcQbJbAEJZ0Hhyt_XZqNFAFJpyx3jIT4TrC-DnKwWHrRjEhd448pnxJc0JRnwd8cHOhASayZfy3LPMGxGSh5vD8QfPq-atqY1PUnku2iqvQUdShDVIPktf_Gxg54dC3x0ZLw5kWBddnG4X_4XV_wZlmF66jz-7QnI7q6xuvErXEQQ6S1eVxSyQ57zsY_-Sl2X7h9Out3PfkxH9ei9-L7ykUwZmy8xrrwkdas060SjTesvxrq4625DJKgX3PlS0N0pSeovDPTgzuYN1RePsHVa30CDUitHww3Zp3gSjKsAIFDyys5jRGCcnfX35JyqXr_TzQkKTSdJqti_viS0EZE2OPXHYPqUM3_ItW3gjyody90PWReyQ2xl3jyHAGsTfByafbccm8zh20884xz7wtO83oK5A", width: 1000, height: 735, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113070265661795547645\">เฮลท์แลนด์ อโศก</a>"] },
            { photoReference: "AWCwydiYRodGPG-jcF0q2Sh_dPQviHiZO6m0JtTcPUICpM9N9cJK6wHfdlJvNLTGp6HEKtLtqB6SWDb-6TMqvhIk4GVZtaih9LnGeCyZJFuR5l8aztfbeM7E74oRnYTKvrvSZDO7JtPvYFdEW40T3Uk5haBNAwTg6fRGS6JpgrrDhnRT3rgzM4eEXNr3mANbnycpkTkSM6C5j_xgAvi93gjjAW2_GPg9RzfTyY3zZt8WFyjJSHXttA9sj6uUYVHOz5Rgjg2l-_r1KsUlDGyEO8iM8qWsE8jhIxGyMmbOh89vVLgjuHcEcwTBMEeWR4XWgbNAGWXjsVux6Px5hOhHVHX1HBz6sXl8yd66hos_8la3IFTuVlocm7tRLVAmHHvDiG1VMHZ09adA09qRAzAP4f7wHrvYzaui_cpRkLVgLsN68g_E_VTh", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102862151057991748261\">Fersativ</a>"] },
            { photoReference: "AWCwydimy3ccQLlNl0zamQvBK1LlTePLhAbsoTgW2kHEePFSJaLs8W0TdzZlTmCHKQJn_0x_pwRX8xdAPJygs2cQgR8FDp_8bVQUZjMnTkisB559ClUg8dlByROur-luQQkTfmzNPXYyTpq8mGt99y9Llji9bXHFJ52BbzfRXPIxeBgbJ7JCARzFXvrNtRVqgMaG4OLz6N_9_bnP75ZdAGN41NdEZ5odzzGxenBdfmfoupdqDQIxNttb-H-4bksUZeotEnfeWu3Kv1GWGkHVC4WywJaggX767-mcjb2Z7kA99yVkQQhMSS2aNjGoQbqxKPlqO2_4RmoOIkkUrn4oQNbGRiXcLNAZT0VFEhafbggaJ9rELK35WrqfXBCQFkCQvmUT7qPXByhjlgVYyvEDypMmPkpOKv1qBBcxaoMlTBHrZhuYt3BQ", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100796978647196078569\">Chan Woo Park</a>"] },
            { photoReference: "AWCwydh6yX4ZtnvNxq06mWhdOTjByIMBOxhjd0kepvVapyhUw2uVy3KQ9XbxLtK93jGNKlXCn3xlIDZE5CEOWAJ4WMlRK-RO9LF619xPYrH-zhs0SEnRZx4tDA25UbA9cCZNO9akIbDVsdh6BAVxFw2DN5o-746XL0kgOVkbMgLB7ptYF4iogPsawdAqvAIq2aHBBFDpYDbnsDDsGyK1HqJcwWKL8QR2NGBtO50mqGMJFTdlzWn_eaPmYyWS9m6VaZTRQ3_WTh5zydJW0JeW4sZzxBIxd4BfCPPtS6KXHeqAwNRblUj328eXlbddMYjMwJ4CsoTw-v7yNMbT-srDOSbij3u6ZqZ5I4UkxfxESFD6IvCE0YjR1fs8ujVZ3sz49bFKKvNU0X_111AQixbPEgwD-fmAZfQN4JVeC8AhIYo1pAOKrMI", width: 1170, height: 878, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112334930113410046682\">Doris Kao</a>"] },
            { photoReference: "AWCwydgr3VrL0CrCVUvyBE6Hj4ztxxYhdW4CDhT-LCY9UAIgsVAp5K6BlPWba_zXn6kUNU-D3h34igD9MQHSKEdJQtyIp9YmvefyuPtTt1Ix0rlb_sQB3GS7mmUE51fbnkl3ldJjFWA1H23_YFWUAl2uEmL4jRaUTbNnqkRJjmG9_3A9lpghFsZvbxVg_JGdA-AQd6DViuWnhKxflHqMso-DbefCDB2-z6Do9oqQJuWawUEsmRmqY7K792tQ74XcNvmnRx4gmyA4x7NABftt0xzw8iTgTDf9j6BkL3PwU4akeucbKMDMz3OwrxdtwENB61AVjH3ispPRVugZJQk_gCfpmZ5aAuwFxXs1p0GSqWgKtBmWvYRLvJSJzpwmjk_9JhSd2NVIGI22K0jRWmKc0w4qslq7k6Zf2QYnTcAOhQuQVzdeAN0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117165080485426491631\">Mikio WANIBE</a>"] }
        ],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "55, Sukhumvit 21 Soi 1, Khwaeng Khlong Toei Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%ED%97%AC%EC%8A%A4%EB%9E%9C%EB%93%9C%EC%95%84%EC%86%8D&query_place_id=ChIJNz1Q9OSe4jARTFpSkCWBabw", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%AC%EC%8A%A4%EB%9E%9C%EB%93%9C%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "디바나 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/spa-bangkok-z4y3ojwa.jpg"],
        placeId: "ChIJbUT1tOie4jAR38N7M1cRf1c",
        placePhotos: [
            { photoReference: "AWCwydimsgTaW2FAoT3KXbWBB0XIu7PVjm4YgBCt-Y-BZUTrwAZpxE9FkOgZbdaoxeKG7y6TftShTZDUSbhrU4UHjuTb7Q7m5mkKQtwr2TiOSGfQUmDDmAK6VnRSnbVcaNU9Gehz5CDmZYvvmsukeG1gnghYxYFaH_2_bvIIeCfB8AeNjgiuSu1J-suVIQtUT9wbA0SwcNVQ42FkJG3pVxYE_vSMmQxFFQGGfFL3DWiGgnrNAF2uDH06Lg4oFc32FN_qePMYaPmsyh6MgThZ4mMEHmnlF832rV01RPzJtWpAafmjp-tCc4IWH3yvjhGcsiYvbDSwdA4oH5qrxnzheSrgwsPQwRg6TFap2ERRpLXjdiLUULVyMCHadYrpHZNWJ8J-9r_fZTdw5e4w_ScsevOWbkigKgHnTbl4pCGquIrcNgup5VnoLrhmdiQcxw6SpeWP", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112577999721851307137\">Lim Lee Chin</a>"] },
            { photoReference: "AWCwydj2LycST1RQbigKsa2NSKEYb9cNJOFamtGRTEJR_6yvprl7OIopXgRHkEESZdOaKyuBcuqGJETFaoC3cU4fMBnXEQ2zVL8JUXrpNXVQbPoL53YZOrTvph_hMODfjZpeOIq5Rki3IUturMRa9IWtuLMSKzxeSR4MSeYmD597cVxgitvluXkZqVKh9GOs6oxMCeh4xQqvPqgacwOkZQzS9ooVPsI-lO-ZAs-7RWW1it3kd2Po7YwJ1aBJP5pAo_UhV7wKz_mOIvaRd9YUBL3ARnVOKOmRcF-hPNcgXwPhMfbdgt1Df-xgca455nGs2I-YFws21BJD4cyOD95O2gYWZWk2GkJCa3Jw7SCSV9Vmx-9ymIE7gYEaxhM6UTkd6r8eg9vLA1x9311LJS-FwvQFg9S5oyqmIjuE7LfyZqtWNI0cFMv9vQ3gtqcAHiz2fA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100464187757853423802\">kuweenie</a>"] },
            { photoReference: "AWCwydjUBULFlkYl4PqkhFNOvzrImM9vvCvBxZQXgoYNw4PxWVVN9iaQiDK2y5haZ8eKkliwjoEpW-KHWD9uESiA0_v7L2F0v7XkZHU9vUKGvEEZXHOPN58o9ZQhrPbNlfZUWOghgST_nnN657fOn7TzTCzkUJAXFcdHtnuJdRLvlvg9CYbIUbmQE5x5eyFwlFoZAggURqUQEUC90J6ovk4zGlEaod2R3HwWEGBcw7eXdIthm22aFxG6vu9N4XSgvGaeGhc54WGTQWIIjiI1gTLfD71uN3tiyaP2fZdzGklje_iHvu5sCCWKZAhSpNcM2TMW6bHeBJkIfgjVtSBbUGAw5cgyhVFyFbsp6R_teTIPpzTCoI5kS0oDg5F-3j7iXQ3fxd0mbAb-K8-s-8CsSkeXk4eeFAywqy1GjvyuCqKVGFV-mfs21K0R4s1g4pGE0g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116350663828201814218\">Yixuan Lu</a>"] },
            { photoReference: "AWCwydihgWBkMXdJGL1bwFdLpdycDgBRASact2Z_OZpYCJRJsvPMqykkR34GZxodN7B0hj32L7o9PfeAmUBfltabAQ-5RZ0OKZi6lGKHYAVweezzUyawNXhphZ4rKf71_TQCo2wMSndBuxELL0NWJd3wIJzWrL_qsygmmCOCo5DJSFTBLPKJ-b6c_T5LPOT55Mr8FN9TTdBJ0IqOZW1Vu1pPUOW93eNxG485-cpeXZG4owjQoJWYWQtsA2FRZVy_5O5LQh7-jblJ5pvsjLCvtCCFGjbHdioEx39JngN-UqQoK0LPkV6wCJkEXLmSWdAVKSnbmNLjbhUb4qFU44ZBHWvL2i0eagOR7lhr7Hr8TyxVK9cPB6vqa-p0shFgw3cH5jNt6ABlTkjwbS1xfLDd7AfElN89isPyzvhF8NAzYqNXi6wLp-0bl03C7htjnm-An_lP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109395269202129911299\">黃敬軒</a>"] },
            { photoReference: "AWCwydggO6FEM6aObdzJTJuMj-2d6GSqtk4zunzKHej1VI4Y9R9D9z5OY1RN3rtxLTETkJ-pkCj9RRbn2LX82Tz7JA6f1wBNqptuNToYClVNvUsCB4yHuFx-6Bdg-NbJ7kEoh6-a7LopzS7G1z0YMqSiOi0Hz6XQ_Jdr6wHfBGhfyg5GUkwnQF5i8bp9Q2BSrix_cak0QYUVr0Bi2FpG-ubLtJSoC47f_tVqO8qOS_MP1PV9mjT3vkdFEXp0Ve6MmuvBI9LjmafqPcOn9cwNUzZlzAyPhLs04cI2ILxGinl2EpsGMajrMsyL1AhYjQv7ahtC5UCgMGaI3jhGZOAQ51S6YidzrEDjE1Ulu7SnEFHJGfvZbpBUErGhFiiUw1-cxmg_5hHR7NBjKIVB7HQX58EUWOm5RqYcpTyb84xILF_Eu_lLzSSX", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117217489624572764867\">SEPT九月</a>"] }
        ],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "16, 15 Soi Somkid, Khwaeng Lumphini, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%94%94%EB%B0%94%EB%82%98%20%EC%84%BC%EC%B8%84%EC%95%84%EB%9D%BC%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJHbMoLP2e4jARUM_z4y3OjWA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%B0%94%EB%82%98%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오아시스 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/oasis-spa-bangkok-bangkok.jpg"],
        placeId: "ChIJx_Ufxfue4jARAqAsjT-w07w",
        placePhotos: [
            { photoReference: "AWCwydj_yqgR5ysvfZEGaeRf2PwP9vgdw08ch02_2IVDatBGZAXokNpZ3gg1nZ73CO1O6Qsb38Y904RBq0Sn-1Qcoxib08i2W08Cyi_IUfKrBeFq6y-S7Dqe-SckazCMTdNjug-njylgWz2xm6Z_vrS-u4mSP3wBcvGCLDJZZJ7sknJmIxX9EIfxaBDmWsxnX66p8UcjEtUDAirJlb4od7VbLPciY3upr_9IxvgD-1K6YDX93xPjqzSzXXDOEg3bNJ9myR1j4w5uSUrkllP2UHJm6D8HfNMk4VdSwQH0P-sHZugKRYMbzsw2e08MegnJ82M5Sof7iXrssR9WXn8JwBKbt1MfudrUwfQ7a6A47CPR0VyC-aTgH9w7WzcfgxMbBBpCREVkiuMe3R49x-LvCUqNtp3zxMH4PkiEhRK9_UyKRkpJod24Y4wXgs0QcKfQVw", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116987456684319078429\">บางกอกโอเอซิสสปา</a>"] },
            { photoReference: "AWCwydhqKZ4dhQiPvE1obaclkQVDmMLAHMyu3HTLBZSGTJGM5lec3BMLFkP9VuqRSNUKOF1NPAVMMdgQg9jeLWlKojrg0UkKNEGxax-BUprUZSSEOR13vzS72wCR4mMwWZUWGq-Nbe0or1mWZtq6x28_dCYQCXI0oHMs47Je1VY72-IYxKo09axSUJG6PxcKQtGF424GX9rk96A-2qHgIxtem5BiJDGf5B6Z-dLVzv4eiJtoS7aMwk5WRHsAAJCBWuc5zFh_DJCyyMXgZQ2xl07SgYpCp7euOytMhPBqlkWYYWI9YiuXhQr7m0M8vbWn_jZF4ubbO0aL5F-BBr5j-7AyZAkAXZ2UVEqkMuIn8yT5y__A7_cdkIpkQnG_mGdnezqA2eyZRyJ6soeQbi3juwZO3scZ7ZuB7C4bvuP9IjsTb_A-9A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101541004976637925493\">Macus Leung</a>"] },
            { photoReference: "AWCwydhxi7oDp6zDe0idG3iH1L7LmQsQw2tXh0ms5wf3jeodtMaB73CGCtR-tK710gI3BryFi36PQcsk3Y_kzhK8jIz5-W5i7WkSfWnlDscE4o9eaiZWcCg_bNPIqIwrEfX4EzgvZ_wZ0EXOKz2oVSUqPUa7XlKgN1-S8qjDAKzuRqe0BzByTp0hMtAeFUhMBmKw2j4fyhn5Dj2i9PWHhLxyTuQMWoLAERejv3qJ3YtYd7VVz8Em5FUZgA4FWyh_yMIrICRslkK8C2-Rllt0kQU-nDT3Htdae-HXQtDz4FA2_PJcwEQCFa1WdcX3EpgeBOh73bZX69dcAfBQPMS90xZBNNe6LahOpnkQVEc_ew1Y6AGEh953BHGdeslE-BECd2EoJS1617R0fV3tFr0stt2Nxzs932GhfMhTsM4xxZNCS_lT-eK6Y2EA9AH5F2USjPBA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111071665240471963892\">Elaine Kwok</a>"] },
            { photoReference: "AWCwydhQ4-z09r0PXxj-vYdvVIaxbZT-PtvWJ5APnkaKvqbg9NqT4XQIZu5u-Y1sFg2hleCs0ChMI-QyiL-z7rFNHAb-1FoZs62DbG5lR6SfbaoPTI1-x4cqL1quUXHQt6kvFdaY0OyFtCFdP3mfh46iH3IxOI67L1PRck7unIcSeD-SOwMRnaE-KsPf0Hu_AyTMCvZEo2E1rRfHork2wOVlp_Jmy3zsTX3ijnnol5m0gYkn87FUkhTy0TogOU2dSjoLdsZlxi7aUoJKVktjuuQ0yZz-Sdr0tRrqJrmyELEZiZeur740hJX60AsO0l2jrmN5SaK5m61EOAljLZm5BrV4-LVtcuB5Xs4mbi5QGj-DsR6-baDw9YsPqcS_GSEYcUNbGfz4idUXpeGRhSGTtdBnQpDxP9PyhUa4eip9YCQ8EaZ6t_bQycebPzeTqrzz0A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112629360989664308026\">Yuyin Chen</a>"] },
            { photoReference: "AWCwydjKW4Ekdud4PQSm5SrvCW9fspP6h28au7EEjI4vQiaOrbPWrUEeIcd4GD4VEnh3-OPBLiCz2CUNXBu7R9fIXSX6HyVL3ity_PDWo1KkoaaD0LBGSOkkbySb-QYUlGNQ-a-fTSCZ0tZBBwG1Bn7TnpDTYTKOql6hBhtjVRYZ5LGzHY3At-4_2pEk6Dn_i1nnEmdXOXeqX2NYvTJCuK-wuijNh_abO_r8TafOk361B5fp1Iurcg1QwMwZmavo7SlYFUPtTfhws8I8-BW2Qk57qHyZ8CXoCYArbL0P8PS2eOE9wfvddk5TeFgS9WzpNW09NmMrkbrVBHB1_otJLJUeBovKmcDCc0hWbMFMx6-MzwAZFrapderpu1e4_AM8dVx21W2AfEQhZVhTEZr5zVlzcysYHFBSDsMV9yU2-w7oMBUAsA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111182285919316782697\">Mandy Chung</a>"] }
        ],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "64 Sukhumvit 31 Yaek 4, Khwaeng Khlong Tan Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Oasis%20Spa%20%28Bangkok%2C%20Sukhumvit%2031%29&query_place_id=ChIJx_Ufxfue4jARAqAsjT-w07w", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "바와 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/spa-bangkok-mfv16_z8.jpg"],
        placeId: "ChIJr33MEgmf4jAR3hXmfv16_z8",
        placePhotos: [
            { photoReference: "AWCwydh2fqsHq0H494xggoG_ihbIvDeYgqvwXaDtENzh29G6HjmJg8Z8Gnal_0uHa4pKVcmnTZUKEAFS02blW_AOLfcEKYbG-r2qZwpfMwWm-Opbfk5SE_vZuMPVhGBT6MWMqeMMnFHFSFG8UmaLM_f116WmCP7Hd64HxPB3hpTzvDYbmwX31KaogMVwK-b8RGEqybVMddw-nvN3F4OqiKNLO9GhdNOXk3Yk4GloSW5Y3SbX1UqRoSwICnWD_RmOgyhI41E0DvG8BjHZzAo12gi_kvwWthPikkgPxKA7HCGgxAPquEgmpxbCxrI3Hob_EHDlMwBnmsU8OUy3k4x5e3ED4XAC40J2W9ZRvrem95OJ1A0K7hNdiGCUFV5r7sWC7ujK6uFw4BD4UKCfanz80lWXf9dN4CqLBfIItJ0v9onjrw2Ppw", width: 3000, height: 2001, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115875725321193806153\">Bhawa Spa On The Eight</a>"] },
            { photoReference: "AWCwydiN8kMW4rhkgbl_m7uzmEeLvc26n4qTFeKqrd2Voius8eCPdwx5YMCgiUIuLDv6UxOtKeewQ1C_VFoLcRaRngL95G83ePo35JsH5D-THZbV-Vw8zHYFftTWQ7TZzmWrP0yTx6tWdxp7BdYbolPHPugMBZVr7Kp6kWXwLKFybKp1j5epBt4BUroh6mtNlXp3qaz5kWrT8goyS2PovR-y8PaCsLVILUQdBXPe5jO70Pehuv3Wm1mmAk6lCcKxt0lX3N9snzwBH3oHYoKuVfRyFUmIGeZt8GHp-lni7W4bGdAYqOdGnB2dgcaGp6j0NRlOqJGQe-VOBIUiqOKchpa_ReEFD5PzvYj7zmtabHZTcO2srjETu_MeCrroPb3nFk7H_W56YnaQECcqXmHzq_q5A7g4-MrBQvOA85ej79IqHPqI0w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106837525945848408249\">박찬권</a>"] },
            { photoReference: "AWCwydiIxo07Eh719Vq6fnn8DZ3LZaw1sEa6QSQasNX6PPFZa5fkWuHR7z1DadojLKcGY_wg60cJ9X0DEOpRY82F34Ws24eNdqtIeJ26HmdGZxuNKMa0q5xZmpeFLpJGcobAcnGjG3uskbKUAJF9TlU8HtwXLJEj7RyWIVc1vfBL6jW7eewfzMVuE5R4QhaqH62598IW3RDDM8P-aBEfummncgwReBUjZwFv1q3Kx_O22SP1ap4T0xYcpxeZbfDT58Tof_GBuIZH0ODTKjVok-dsfiMITczJcdZ96i-pMnlW9Ybo0WWnjLkDZTw2SlVEvAHodhiGsPuV7XeFCBFHdKDM39gUu7dPYbBM595erq4wdzAgYuvKH6gYtu7NkhHMmOg8Mt0Hjb70j3hTUSySW5ILyUvEyWNEQDPyj_059lAm76OADMIHqh-SoF4F8CjJSjnJ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118322761238085467160\">Henry Lin</a>"] },
            { photoReference: "AWCwydgZwvFM2OzvDtqyg3rcKztdr8_iJ4YcDXIHyMJYE-RSZNjik4pqb7vzPYjbUb-GkUwQG2CFOLIviDVgxdrxtoRDzinMXNAZLqMjygjc_vtiCj2t_TRXdX9XPllW6kKJyAYM2IDMjyobL5OoEGcwE9W8iLgoxygCOWKdq18JRJ5p326CvXcywUBk5r8wdXRTFUr9wXptdN026casFYuPAMkNmcBaHZpDWkd0Rjkja2WvLL9afiqDkfopbjjsgb4_9UuNccGMM1suksi_MJHC3F-gKrYmJIRJKY5a5s7v8Kb0-KkZP4-Of1Ksx_QvlWiKFcuB3g0sjkf1hmpli2dfoHgRQrdZ1PLrxoCI_CneG5-c2E8K1JKDYpTdYy-gS8i5XFDvyutTOoQAgxOlKnej8Uy4FIsniMBcm7cFQzJBk7BsiC0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106283162237563464032\">Samantha Man</a>"] },
            { photoReference: "AWCwydiziy6Z9Sjqjv27GeMNfxS65iE7L5Qkolr8O-tm8g16Va_L8ZhbAQFkiFirMP0MceHzqxR26STtT67NGliq-MzJASbK321IvpGTtNX9DHkLvnlDmfYqrCKCdkIIESelLlIU9kdKOyX1tEi3A1q_TakX_A3Fo-elqRRMUNt8xiR0aoeglECUqyHrh6GCuzT72TEFmPFyN9URKI-PPxxkELjb3ImBMMzR-aQFhS1vMhzVssdUJ3GTbLX3YrBvklpWeSZsWaaR0sF0o5igm_Xzw3y4VguJUKF-pbVY0Hb5GSkO3Agi2EloHwQ5XmZkYuyYJVJd9215Fudiv31VfDTHfKyf-V4d4MuAtbAvSghkBNEyxk0Bq2vDIZ24TqWPIHoy478psWJwdAGYsUeD2K9YYx6ovAj3m2oK3eiXdcT-UO8", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105377077729700638027\">Chun Fei Wong</a>"] }
        ],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "34/1 Soi Sukhumvit 8, Khwaeng Khlong Toei, Khet Khlong Toei, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%B0%94%EC%99%80%EC%8A%A4%ED%8C%8C&query_place_id=ChIJr33MEgmf4jAR3hXmfv16_z8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%99%80%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "판퓨리 웰니스 방콕": {
        photos: ["/images/bangkok/info/tourSpa/bangkok-bangkok.jpg"],
        placeId: "ChIJ54pGWVKf4jARB9CilWy5VJc",
        placePhotos: [
            { photoReference: "AWCwydge8hmvuHS9RAW6_CjxwHYGwPgDmOfZeN67FcKbBIKY7X2uZhkEpO8wCkIUcA6WvteNUs_ir6nEH-jaUbkbxFezu6RlyzHeH4miCyQjhyNPVCqIdkqv2zSTAwaXwXyNKkWFZO7FMxN9y0XaqMOQKWEfrnzCAhREM0M3Fna-Suuzv4FumYblH4prPi8zP35cvZyEkNy1i8Nn9LJTxV8iq9pjXJ0LjL6A57KlUsWHMr8VX8Rd_b91Ndnbm-B1lyZr4ul7vyF8Ix-hvkNhCneoyxGDumBR0HEJKkqEqks0bI0Buw1zIy-n8GEwZzJD9m_Pu3kQaJIuVbFDLfnasoA_ZZoOuQueKfXcFfs4z3MfLAaNOu-1BA6SSQlD-lLl3tf_46SyU8Z5U3dI4WMFh90FUR4D1X4kbl0p_FLAZE-XiibFRgdhmHyGIRqBXYme8Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105112604126996642472\">Monsinee Thaisiri</a>"] },
            { photoReference: "AWCwydjkaj5muIRxHG8ChedYAVNYsAFhLp7-iJ8hW3ow0DVSuyMHzaA_FiH7YKxeHB0roEqFnuivT89q71XbcABO3j491iOemP2TbE5i0eH13qzk0MMeIlsi_wo9TnweSVeqW0Ycg482Eja13QPfRkF6qFVPlO6wYe24AFMXfN1Z0YtnP0M-VRbroHkDlh1p7QYAL-WFh7s1S3Ra1JJQOOntAxir5R346jUaO6usge5Sxoxl61dhgInk1CDxC_C05DPphIq4kf2Qtz4paCMxh5dbY08DERezrVPZnxU9TdcnrfNROKKSY4-HkMDL2hhrhp52ksz8xEQ9T5qm2tppLdwqKzreJQS9-Yj4yT0d2Go5anFW7tPsHLpV5rIvjWH8mttQBvFYMl8fbsOjDiX-IQiKtVYn_4dHFyr-POX_VlJ4vLI_OA", width: 3727, height: 2485, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105217931752949236547\">PAÑPURI WELLNESS Gaysorn Tower</a>"] },
            { photoReference: "AWCwydgBZWmRXtpWH5fW3lIovyK05KB460hUGivMpVREu89SZIo50mXeI1lSFdyGBbfsyCa8oRcv96-7vTGG6pxQndvTJVitYguIiz-9efhSGnBqYoHy5ekSsrrrm6LVnGwjuQHlGH_NUdkDtJcM6JmMfjOgMZJvFDE7tJiSo8bXfENQKP4ZRNpcteUU41Muja-_jxpov9RrnAnyM2h7OOBODlGnEAE0xEw6Ma9kkR0VHPv7o0CtS9g0FHQbJ838-EoJ6bsqzBhw746y7Yn3UGD-geEV1QEnBsian-uHwVDhKuChhQSMRNiThE1C1crHhakryb4YEuv0FOOF2K_M4-5haSh3k5qnKmGma-yUqOABU-22KzrH0zTl2RPQiXXPt78l03QqiVDOFH4uDiLHb1hInaWtSXE1yYE7szIv62eAj94FiA13N5muoCamsdInAoeL", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112307903297690552027\">Ssong</a>"] },
            { photoReference: "AWCwydhAZ9DIUpsZw3Ndz6bavtxW8Tvwt_2tzGNaYg3WSHb6yiQkPU_l2zzmABffRTXdIbMx1cjeOYkDM69Wwh_qJqfGAfcOuPEPHehcQBp40yuAquFLfXnKKmgsCxBMeizvmrZKGWR5gGiw33qYZl1vUqO2Rz9qOAPB5c-Ff3o9cAJSp4G5oexzNLj2Ku4q2dSkxg_K0lpLQ_ByFvDjTOaBB17eX1FLFZxfqHTfVWjtKghdZevusNa-ZURQ7ZJzEHCrOekeIJABhgIWB6gxY3K53CkhlF38uJHQi3LfC6nbJ7JnTsDjI_jNhyNNFfB0RwhcfRsOFfH1bildSzoebPVPAW5Kj7aDAI1NNS4mZqzyH9Jp0zEWUiQWjHgRPcyJjVc0xzQjcMuEDSCivF-iFFYQYkaCTFyAmDq5Swn1qx0BLbLt1w", width: 2013, height: 1342, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105217931752949236547\">PAÑPURI WELLNESS Gaysorn Tower</a>"] },
            { photoReference: "AWCwydix-AwvbCGEn17HkUpCuNJJiG6R7cEFmQCZgom00P91R6w4IkOkN9XOKW_R4KFaCNaLxRTOEoPX20Epqt4AkIsk5QVIzPMKiNTuJ1COMHXFceimP90ofzjSG6vPOzatKRhTkD5NBSo-bc39QVeW6Jc7BbgD7oq6KNOLhkMstWN8tRB5U8WXo6HGFP-gKeulOwDI37ouvtPpOtkzPI6JQl_Agosa9PbrACd7aEuhkIaHKXEvgkk_DmVhqMlqQrU8QNmSqGTZif2UzugxKig8zhHVikAIYsC0ZTBnaVmiWwuXXEn-Z5uf75BPITHL3NVR_UNCTC3hW6BS9ADbdTmpExh66nSLR1L9VeeQkkyVKpH1GWc9spwgA0i3r0SEdD1HEk49W3GeDfUhMf1td7DhPlC90YCZVZmJ9daXuPNl9_54vdE5hXMFSrgFAqXWuw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113250841963988314234\">Markkung Journey</a>"] }
        ],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "12nd floor, Gaysorn Urban Resort, 127 Thanon Ratchadamri, Khwaeng Lumphini, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=PA%C3%91PURI%20WELLNESS%20Gaysorn%20Tower&query_place_id=ChIJ54pGWVKf4jARB9CilWy5VJc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%90%ED%93%A8%EB%A6%AC%20%EC%9B%B0%EB%8B%88%EC%8A%A4%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "어반 리트리트 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/spa-bangkok-cguluzzu.jpg"],
        placeId: "ChIJEaFCIZyZ4jARylpZDsHOgw0",
        placePhotos: [
            { photoReference: "AWCwydj48xSwJA0pRXOtpNPTvmCmgpsYLCLKXtWg935fIOPHXoSR9JeyKGt_IW4vDdODHBoVxNnJ6k2-pr0IjgsgSwunAx9u-tM47jTaUQG-zn-0plhgLExG7hRC6pdl3xLw-J8rd4ZSh73tNWTjDs3f28FAMpZeo_L0KN11hmD3Pk59lGLH4knOCRAasfWZbk7Wfx26uWSbLwW4F0dvQ6gtrTdag0G7S3rjRbv7nshYsKcRWX2J-HWjtchwm2Qnf1NmcPzl4jU0nMTiSzxs6KoFjDTYZ4m-D2LPNgxcMHkqPv58fJ4-tLiMSFDRswsuIyhUsOy9TrDMx3qozT4eXQQYs2oRHgxf7VpoKF-_jU1j4c79ir_56eMvyIfpNXQ2oUWW4EDM-X4-5oOjnRiEiRsEnp7pSawU58FXgG1NAJo4jdlpf9VLfzvW1bx8s8d67ugi", width: 4000, height: 2667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108815333091479276549\">SO/ SPA at SO/ Bangkok</a>"] },
            { photoReference: "AWCwydgO3vSi7KCGPIybW5SLbqZPtAdFtjBZmGklt38ujxDJifhrIE34VTQx4blSa7l8K3iAwGyjijfdnPgA8JZHSFCeBWlvO0e5GwCyfMkvC7veOciHQMcjC1ouE5EtkUhPWFR-_s_KhblPvsnbkvxLkCuETk_3M9Q2Jh79SRIkJi_tY5TmMyjbg7dp3T9D0f898gASXXibirOvMMH1xxlewdFMT0PRUxoDj-KxE2cvWtBNBINVxQ7-oEpGkYanS3WMIJ1AMQUUVRt-PCRWshgC-6ExSJszpVliMPvplpS-YUN-fJ--3wqfsmiTnz6-Q1USK6IaYv2bPWMs11edwbdlZbCRJoxaQmz77L51FEn67dM0QkEMPHmIPL30f4CxMo0QqI4Pf7AZxEoiSQgC6UBQZwIX3wzS2wBMSR48eiKIv18-1RGyLdSb8G_C_MSzmgki", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106244952659619755849\">Plakao Kiew</a>"] },
            { photoReference: "AWCwydgC3j3zd9FDvGduHSG1bs_C39cDKHe6Gjar_-qMEB1xFMiCJbJncUaqL3u2B2yljEadkfLab5KfZH1LvS7Wp2L3B3W2lzoqEnUPswPe7kKd7IO-KT2GTouPWJDZoiCnBxwI1dwgTuwwHE6lgO8kMNDEFovIfmX5svOmrtCWcap1zuEGP2NP3C7yVY4zWD12kgH3y4-gyK8XLW5TT8W1sy7ePpHjuMRrElP_x6vTvkLyS-xqWBjV0I2D4RwxMX1s4t6_OivTW_bwu0ZQFkLjV0n4Hxjkp4y5577QZn-sYM6MmDuZ5JlYxd-mnnnvpg12QvKWWKidL9x17uVXlD5Ntgre41bU1mYB4ZcwMNevRoZMuFFXxg7GRLnWWKIuKGy040k0MDQ4ltECET0EdRNn6CJD-XqcpGUpt8m_XlJln4IBsMTbLipYroOArIDXjA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105400519638072099203\">Kang Thai</a>"] },
            { photoReference: "AWCwydhkR-2uGnFKdXdReUxKf9UHhZ4b1yffiC_hryCzcbTPtK2EUyB_y-KbSZUlr235pry_GxE3kvxhOW6i1i0poIeA4EHmQXmz_879lrKmrfMGoTQPv3BJJlISAwyeDAJBuE5UQKF23d9tmNddGfE8cWcwsUs35SBGjji56TEm1HP3Dgf-Xjl0RleHTIPdwvBJQzYO5BAiBjgUKZzZiqqlx01pCiHHpQIGWaMLQ5yMk1HlePYpsh5xUEtbRWZWSM79KtyFF0MEpucfB0ZkOP6NLMpvZdn_7AB8h64OxZlkLvBvhzkg3k7YMHrls2_3E_h5bEGqTfr0OuxRB36alRIlFgIkSqTgLVC02pYLjPlmPCBcgjumWH9cKxB4jqha5E29NYC4hkO3mlGN2xHU09yRlJslVXbj6lSIjqri9rBRQ8zAJtaj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112750539903197664818\">Junyuan Feng</a>"] },
            { photoReference: "AWCwydh-M1CYiy1lsYXN93H1n3MbTxndqHjcHkU2OdDtdaax2CNcbFZmoDN5NeFjkat3VZpRgIsbC3nGtPvJF2zxfN2SiDLK7ce4B6zp0aLydGE-C5Vj0Rk73Ie_7b58LqjBeoKy6bcNWwae1AkWSTFVZjiKH_0PG7PhuE0afwtqi20Pzm4lvL05I9TNWXp12hs0jG5-u5xGiXQ1mmAszxXA-4X1Dlxzoe9pLUbHLvoJPZA-KIF6fBDEf7-IxC1uIq3joJ11poesmN9BYNvoy8hD2ea3klwjbqJ1mnDvBNE-L6XdZKLnnzeuo-SDEJw9BXEDlBhNGqybyW2M6Oi0x0A4pigo5FmpidIBe6mX47kQKyGVA-xawrHVcj3XC1NhgQTiXIVlIhCGNzj26Un81RNYG4QGFB0_4LgXkooWvz7Bx9lVaHHZHk8mFXUUkXojPW-E", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114599829902939401392\">Eyal Dalal</a>"] }
        ],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "348, 1 Sukhumvit Rd, Khwaeng Khlong Toei Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Urban%20Retreat&query_place_id=ChIJC8cLAeOe4jARwoXcgulUZZU", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%B4%EB%B0%98%20%EB%A6%AC%ED%8A%B8%EB%A6%AC%ED%8A%B8%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아시아 허브 어소시에이션 방콕": {
        photos: ["/images/bangkok/info/tourSpa/bangkok-bangkok.jpg"],
        placeId: "ChIJOwsnQASf4jAR_no5JyVXV1s",
        placePhotos: [
            { photoReference: "AWCwydj3uCsPlPYCLSTGFffIpjbsWu07R9AVdU3B0umOXkQZXkScwrFiRF_Fx7xlm3EDKP3wqRK7e9WhPWv41F3GWNS-iGrmC__Cr8n3_0cwcQ5T5CuAWd1RPMKLHsSDesjV4j1jrnv-1rlAh5vgL-f4s7Syv8q9Xkp2Fd3TbVMnwqijS8V1BAoV2Ia-8rwJhcadpshHAGPM7H2BaKw3dxARBY0X46KmOqF-hvFwfSClaEoPgvFnYpp4cSAgh-y0sAxHvtueJBAQCfADP4Er8snbKzLrj6UoTM9skbYLZb5Ev7ezb-r_-t0A_hMrnaeVY81uFPUjYOL3hHwF55Qk6IsPME-J4sr15sRWSPSSMrsjh-DTEeiC6OwMnfp6taUo8v2C_DejrSsRQMh4cHT-BnNR54wFKqtS1kx06ZAJXh5Ye3djrA", width: 2048, height: 1363, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113558382969243795124\">Asia Herb Association Sukhumvit 24 Phrom-Phong Shop</a>"] },
            { photoReference: "AWCwydin4uYfQb7sTneilejs7b5YP1QDyCdPRUEjGxa2B17HmAoY72pRhQHM15vs5Y9FLLMXEaVFzJuQfVafqdOXHjaOaYi568SBIw90Z3vrFnnTO-XwSEEPlH9_9Mv3UA1nJ6tPWq3biGfR8zru_2Wmsh7gj38_l3GA0LutZKPo4BODJxDS2M6md9wsKLYnqff7PZvxBzxQD-iOrvfQZkNCAmzdiL9YzBWxbnta3FhVqSDiuoRjrMK85suGN3iFh7DZbFZf7vTjY3eTRTacnqrihP5bh4uBDSfC8JxYaJyTA1AB2MZ-25C0CgTb4CEEkdpNf356pXx0F6tSYfUSWQGMXRvc4jFF6wlTFgIdQFOLLHRzfH_KvzMbP5qQBVuLgo6L8xIME4PwffRo80tURMFwfld5OB5Ddk4RflTRphitdqk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104973669149643793795\">Nicolas weng kan</a>"] },
            { photoReference: "AWCwydhmOkR-Sr2W9sniG4y4CQVdn_vM-12k0LvsnWG96CuA2kf2dkVAQ5PDu5mvEu84OdK00ScDp0Jnpt4cBROuwQOdciknf09zV43ja3sigsj37hyR71jAn4O6G7nUN8TPSmGTQ56H69uwdgWUiP4wKzwkDSGPssVq5MFx7NobaQaumGe_mUD_AcaHd_-eqplor6XTNwgTDPWRMmNuLG8sseDeapRVjuVOxyU4aMq1sBO0Yd-GOv6J5g4iAD4YWFaxy1vXsK1aHh8GKCvtdQHHN-9PItHJr1oOrOQTlEGBBwCRGp4QbxbYKLGEKFrITCJyJ8GaqJDbFueCcXjtxr9vXSxJcH2veC9PCJ8wafnQk_w9yIytR9m32fFibYHwRXmhrk2Ud-kHuuZh1XXclQVGJE6y-YLL6pcvyh1JmF5e2k7Uuw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110054666181530133737\">Jirapun</a>"] },
            { photoReference: "AWCwydijCKuQ0z7nT0dFDTqqgUgotBhVy3bgzDjYjYDT95kDQgra6cVPR0JGCNUdDa5DALpyNXU9ufD_554uhBScsBvzi0ftycET7LMlHa8LSUMQr3_VyG-Pi69K2yvEfmjO3g3wLhYVCAk-zkw6eE4zIdKYAdagvrh4RSVlO3H97mOaw34tANPntTlQQreMbkJryxBN2uB5GNvR3cmrYB8o1SpHNZIiB9myBz-zCCC73sp70csTeh4DflA8Yic7LA-Rf7hG7Pq5OK98bPBRKzMMxNgyChhLQa77SbHX3qUa_aQ-k-szQJIqjMuNZYOOrNyGMQlXmjnsahQNHRxM_LGVHywSn0Q6j2oD_5gSrV0ZYAsdacEh2u_5PB981KCiwm7fEOQvO6D2tgoZr98lU2xwcUX7ZPPQc4ZJtS01ScGkgXY", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114261385277411766258\">PC Fong</a>"] },
            { photoReference: "AWCwydhbn-s0klk4-0gQqbGr187iZqIaPTy-Nbe-baGnoBAEhLuQ3EkxQy3DjSXKIoG5Jysgxipf1VTDzAj0BzSZBdApIM1oXwb1gX2xqOyNpxxZKPk95QhZO-q5hsW5mS8cGk-1G2QoYq1Ga2OOP_1WLmU7j7xYB8_WH8xuKpEz8GiDwbU1l1gXyb0AroQVw7QpOqYMyl_wKnD9CdobeJzxnEZz3jkhGqqMueQJ3W54TebmI5t9QWshzrp2qKc60sJj20ohKWzbAPx66qgaZlfcY_4gewkVZ1O6K12_E1lYhk805NwBQjzojjmhyMsOwkTzjQ2wiFzXyQXEoX6gfJxZqMphXE0OVh4tLCCdW7XhfHYf1rMcC9FtZSzJ_epiesL_Tx01k6qFUcPM5VZNU-XUxyle2D8jlDefZyis00J-4TYB37QH", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118235696902618937400\">RS신화트래블 THAISHINHWA</a>"] }
        ],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Soi Sukhumvit 24, Klongton-Nua, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EC%95%84%EC%8B%9C%EC%95%84%20%ED%97%88%EB%B8%8C%20%EC%96%B4%EC%8F%98%EC%8B%9C%EC%97%90%EC%9D%B4%EC%85%98&query_place_id=ChIJOwsnQASf4jAR_no5JyVXV1s", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%8B%9C%EC%95%84%20%ED%97%88%EB%B8%8C%20%EC%96%B4%EC%86%8C%EC%8B%9C%EC%97%90%EC%9D%B4%EC%85%98%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카오산 마사지 방콕": {
        photos: ["/images/bangkok/info/tourSpa/massage-bangkok-4koogx2m.jpg"],
        placeId: "ChIJuyqmrnKZ4jARi2a8OCGgTgU",
        placePhotos: [
            { photoReference: "AWCwydguYwQx5un6jVu2BJkViAVfqHHIfpdgWTwNKGeCQEmwIHnG8knoZ0BvV2b5vlRMT6F_2BMkZoqUL09SEgkJApFwoO615FkBZG6ERi6ZllNakzjhXTVNpHGEELqSY5EVsLEU1Q_vrIIjfc9dFeuSw7zs1P4dnLqbDqstf37PULKWbItX4f8jBEG_5Lxxy6oBqA5mPZycPYINyj-Y7oUeb4B5kPREjnF085CfVCxckkKxQwdMXfFdF6HFiZdfHFTR8va0Jfbto6iFPkRCCdloCdKiTs5gRAd1xofn4SecstBnUy1DN84QA8fRElo-g0rNGm7cgMVwDDtR-SN4RBdxe5Z0ggj17f9NizGB_YVG_tu-qeMtZg2n91aP5nCN6zOCTT-3ZIKhQUvAJo_PzkzyU8ZKwmZtFW3REqpCgCW0kL5nD8Dl", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102725861223308482014\">YOM YOM</a>"] },
            { photoReference: "AWCwydgvQaNiH160oZqmQl1pqWZZYAQJhvjogcnk0roXJTniDrRjndAWpq7rNSrfISyBtdVnMGDvd5z7bmmFaozIDtr7msR6_J-u8-Gh0Fx4S5hRMkU5UduN13TcEMO_r-0J3vOa-Wkcdc2NRqHHfCAqMIjT-yQgVG9ZwwFi8SN5100n98_Q-G-v44N32SsWR_AV762rf7tX2WhlVQjDXmhBAJAJZJM68M5pdzRZxDtJAvtQ75sIlGRPAVADIdu2pCracNz_US_XSfPzEDhAWCwymcLqRFfBS8nQ-e3Phy6V5gHP7ex9BNNT_eHjOPCl52hA9lCzVJXI4z5sLDg40gx6E1ffp-44EAB0aoIsp7uOtEBVF4r54aBhehZP4VgUTumykbxZYUBG9N8Razfq1SH1QjbgYlebKSwUJQEaow3UMwq-Fw", width: 3456, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113067024375358960461\">JH</a>"] },
            { photoReference: "AWCwydg28TFHIWCIAwhU2_RCUrTpJIAGwUpmgbqKW_fTFmjFd8bUZBSQflihYEUqGnOL2N-Z7_UjIqPkX7tDdKUS-ANMww7hzR7pyh7--PH7dMubXbGOKqr0wWPRLRheqdhiPSYf-V_j9oz7LYypP_5kfrc_RzKEGFSbuoJYA0LtfMFIo-iMoDvRBc9TIgjztN-gnuiXpr41VP9JV1rsvoAtM11MydPtdVUUl-2vJYbQc9ppOWyqe13YattrZVlWgPy1Zi8RPwHx-VtriDNjOmKjnVe1_ITbJkE2xLDRmiyAD3NPP8c0JeO5ZfZeaa-F2L7fFB1mhN3mbEzBF_yJQuvgsOXMOOVdfEa8nyfgoIMZwqq_iGnc2n251EnzIUb3gCfOBAP6BzamahHoQymhRtulKpzlzhrYqPPh4K_DutMGM3TrFtq18LYC6RwnW-GjCA4g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108299642849406319609\">이지선 (Sun)</a>"] },
            { photoReference: "AWCwydjUeTb3iJoluFvRSWujSufNZ9UlkJXGxY3oDsitHPCZOkX4KwcwpKY2Fqd4FooeIfmFAt0Als5ZI8-aYWXeeu4PzrrpMEgiPjRO05L9LU38qQ3_eL8N_Bo9vYvLhjedfqi-7Q67Uw_yefDF3-1_Jr_hvIqQ48OXl4sa3Ror-6eDttzGi9u2QdZMq5OAJpx6IfBHDxBcSUDnvybw5yAhX33KoxtCMv8-mQnkYOIkGBhNCqaCtFBi5eyHsjkGFbpKr2qvUwaIwrP-xismK_pNQvxifiBr-nYs-QEzmKO2J9YSvtsc6eqNybCQ05zBSUrl2MTuiL0E9bMSJepB58OFpC5nyqtrR_rfSkVxF6j9Kl2MYRLIBr8g9eIaoVhFnDhFDzt0Q38TQwrcge2eyeTphfk7PXaGUkXj5lISuwMRe6MmQ8at", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102396922129965113402\">RvioletB</a>"] },
            { photoReference: "AWCwydgomj_C_V8OfvMWUFfq29xBPBqU1s1CUh5Bn0wI2zTuSSYzFYjNALOVIGAsb7hjHYjnzTExaVXrb0kjKQZQPasUop3LjjWPK6lKaSIPDLGsNNIm5NYlH4VT07sIfjkDsZvanvD0FaJm0oLE0X-gyVUeSkNZW3ph7IgXsPJuTJ5Ymf8eZXFadk6ws8No_tCK-ruf57ysr8hblaiJdn9mkfYJaefbAAEYzsUdum3lvS_qxHiPh9xAfGzsZ6nJsdaYO5ocsEpq-OBGYSatUIQHhxJ3GusBMDjJhWNjuarCpXLcGoGunWUhhyRnF0Id09d_5tsyhfXbO7fAToB979E4z9rgyJ8WQrg-Qk6NawyZ88OemslP_FfAfeMnnLgiFYZMRT_J3Z8SUqhfZxBvhoqzFM0IQ_mR9E7-PFlxus_wI_qTyw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111117644336050134273\">GEUMIN KIM</a>"] }
        ],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "110 Tani, Khwaeng Talat Yot, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Thailanta%20massage&query_place_id=ChIJkaeHwtqZ4jARDEo4kOOgx2M", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%82%B0%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "매끌렁 철길시장": {
        photos: ["/images/bangkok/info/tourSpa/maeklong-railway-market.jpg"],
        placeId: "ChIJ10pbl47T4jAR7qFFA1HY2Ds",
        placePhotos: [
            { photoReference: "AWCwydgDCh112GNuS0qD51Ns5tka3DxAzMsVGBnsAp8zJdkqiSfOWd8NVdPpNaN1mHEzLYwQ2wPgXZidNwY-YVG-O-ggMGF8ikVzMoGFTMZVMXQrVr6dGi0aPI87a8WNNb-DY_ZNrgxWLVOPpAFoOqcP3VHOJAZpofHy81RvXJM6VXjbEfO9sSFIO2KznVbIaXutXmEhje-Nr1c6SDDtdPRVqUE6jJAutxIf6QE5fcaSfpZwcnOJBJ3ScePSoZ9r6yTEvdiCOIw02bKPOrHvP7OXxiJnQCKBOGIhnPTVB667ByXIEWH6MUmiS6RNqKyvAfUHylS6lyrJi3n-G9y4K_dBi3gNpIj_h7RLILnPi5sK0rZD-WY4PD8feoO-yoTTJfl2tutjbwOM2db_-aMFHzPDt3YIuGlFoWpMBefwEMyZfz_6pg1sy8IVm7q0VKIAL4N1", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100024097638984226996\">Vincent Wong</a>"] },
            { photoReference: "AWCwydhz0RIlHOl7UJPBoqr9faBRJJcjIq6f19V9iatk91vFufo-918qJx6HeTyaBf-ZhpzyKCRQyoUVnAzt6CdSxGMtYY8pyFiqeyZ7k9y3wf6CxUdp0-4SoVlbmsLMjC7u5UCZHGPesnZxO2vWRf3Qvx5Nt1_8S2eAc_CXQXs6iKxK8gm4BWfeqlHDZJX5U-VeAUlBbgFzFKliXPhx8CQpS0Pe-JVeeTPnfoOUje7-cG7iXeY-7Ebuc54i7gFJJa2KDcEsuqd478La6BAiXNFuJHEywT5mqsP2c08Ue_h2Rd3_mwBYiOcEUhGtBr4atZQnhX5zwfpeFhat1SxC5WgDseJGm3IoUeHLtOloJhTHNPDg8yq7zidDXp4Y6VD6UZCcUrnnPHHN7Ub9lyj8QZczt8Ol05TYSlnUudYce0oyDnZMHo_noplw7Ia6FCkfgjjj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107114952769532430090\">Corinne Gaillard</a>"] },
            { photoReference: "AWCwydhBHfmHGG4nkWELzEn1E1C-Kw1t7IltF1xNPnZjcGuOe7-1hv9w7J3nQqKYhf-kW-0w8Bi5YL6aFlBwzuxPAnPzNeyFuJ1AAXesxmf7WCOyUQT_Lb9unxT7TwQw8WIZGNbeS444wbJ7Gb7VP4c9fAONAKN2zMFCNge-H2YiB0pq4Mfqr4DTturguMiKIaxc825HxW3AW_bQYt_dEZWKB40kEdQRF650yCyCMBEXtGvENqV4wOogwcS6JYtneA-1i7aBK9FOOsAl_b4zeFU5L0UIbPKZXcOHHXsQoWeQ7DQNwWIhmbEqlXzCkmP-ZS9YEA79-2z_JJhZ43x8fdNUEwRd-QqBmPRUfo9ktAEIM347mOQsahl2V3tDVb_H2FsRChU14YaPsYcqjYbR1g712WbQLJUdvRVKwUS5sW4jP1hGW-4l", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107497663945212120427\">Oinatz Menika Sarrionandia</a>"] },
            { photoReference: "AWCwydg6Wjx_IMiAwSXKn59jaa_NXaU7EKsnf4-wqTipY48NhxygU0aG4zS_yCBtZ0IYEtAkAdK3dhSK-Rekb0x0UbOL8vI3LVfKW3E1bTdlPHL0VbgBR_4ud34jUsb1h5wNUZZkR3LD1Shf8PjFV_yATVLWtjPJIB7Njjq2AWHmkO0UoUA19CcDcvSk1Po07AAPWU5HFoC7Fcak1TKv2q91DOkf9dxVodSUe3T227wslsE4AP1anCOIFmYpSE-YTDwN2hIH81_lZ0uh-VsUsFXTd8Sn6dh472L5KHLJiPf3t7wBpFUJNEvPJ0DGN3l_taKQD25X5irFh9rzQs1BrMcoVfZL3RaeSQzMGVbDwJgTQKOwgwKK-PwHTiWqYISr4D_y261qtATnnsby6hYqbaI3VGs935luPgfP2qW72K1Y54BM8Esl8yRoMlzvJAZ-dg", width: 3926, height: 2944, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116815362199731834060\">Ip Kennly</a>"] },
            { photoReference: "AWCwydhhxijy4LcLfVAliO5GP77iGX5yUJZfOOtlOugQN85FBLa2ig0JE51IKsVwLfrm2zfsfrhJTHKZ8R-Z35c2SlQKlpUDmiC6mnfPnx3-_PtczatBQCkjsrZS0CtTblKZwwPRdETOmr2en24Rqg3B1k9oFVfNp_1ohYWA1HHSixqgGF3_EC3N8uXJ3NCfyr1z-C9z1t5am2JlBjnoMebxmzoJxa3vcWI7eLoZYngj9mYeCPMsVxZvhIwZpthdNZcPcvOcjtOUAThcSpB_tohEOZ2Xwavb7Dxd1rtLTHk5EbZrDnGPt7qRztQtes3Bzz0ST7WiyA3eXAqdzzD64Vup0jA5NIDRV_OtyqbbxXw3CzbLea4fAbAS5VY96_fbwSN58fuJjN-OzuosyrtOLIOqU0eSZe8sup6Xvo1MlWs578kHiac", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103139177536779253335\">Q kwan</a>"] }
        ],
        summary: "철로 바로 옆에서 상인들이 장사를 하는 독특한 풍경을 볼 수 있는 신비로운 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["기차 통과 시 펼쳐지는 놀라운 상점 정리 퍼포먼스", "신선한 해산물과 농산물을 직접 구경하는 재미"],
        tips: ["기차 시간표를 미리 확인하고 방문해야 퍼포먼스를 놓치지 않습니다.", "방콕 시내에서 거리가 있으므로 투어 상품 이용을 추천합니다."],
        warnings: [],
        hours: "Monday: 7:00 AM – 4:00 PM; Tuesday: 7:00 AM – 4:00 PM",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "공식 사이트/투어 예약처 확인", note: "근교 투어는 이동 시간을 고려해 예약 권장" },
        access: { area: "Mae Klong, Mueang Samut Songkhram District, Samut Songkhram 75000, Thailand", note: "Google Maps 위치 기준" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=13.4074289,99.9985032&query_place_id=ChIJ10pbl47T4jAR7qFFA1HY2Ds", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EB%81%8C%EB%A0%81%20%EC%B2%A0%EA%B8%B8%EC%8B%9C%EC%9E%A5%20%EB%B0%A9%EC%BD%95%20%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "카오산로드": {
        photos: ["/images/bangkok/info/tourSpa/khaosan-road.jpg"],
        placeId: "ChIJDR23yhKZ4jARdqd5AHsct0A",
        placePhotos: [
            { photoReference: "AWCwydjVrV1W_WkeD-a0Qn0Re5EL9SItWIpTawX8SjauohPZHc4mef-LtCi3jVeNYIRJ6JBOixD7KQYhVbJveIp5fitw2663U-RaO42AMOer91VNtNee21ZkmbLNL-MmBQRkDLdDo8CbL_6LPjM77Ov2KklDrSMV4TDAtViyct4WTrEmoJDT364CesTQUrnQ49xYfYK9wLsgj1DLknwlzL_huSlJezXpxuqHMGjLT-tOYXrJ4kvA07vdVpKkMcTRWD_hnFUa2FsBiKK2ektjGCJpbJadZpHz7yCQ-L8arJb76y9t0NxcMv7RwJEajn7aeEluhK5T_eE1ezPEVqry1RHvHMRpiFAs5FgKylIdBjVBia2xh05JmU6l17AOtgq1EN0bpf7XhWeJtEvxUhbMUY1Hxn7NamOvypWudVBEFsu3ntYLr5NX", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115646543392387933554\">해운대똥바람</a>"] },
            { photoReference: "AWCwydj3JbpVUpzPKe5o6k-RuaJIuHTn5zfiMd7p4POHztG_DfmJYihljDwzgwKEzfQGz41IrKERWfYpr49a2Z1HKwVfUdpZ6FeCzgeMY8N_WwfJjWjkAYC4wmB9IHjhsINE92ZQc3hX90bC14aJeOOefILol4cYCNmrZ4EXu-YIKD1fZSKx8uap_JnkkykRcUIlbeoDgyUBIAq0JQ8goPy65PMRSvtzRAx0_m74jD8uueef6UORCsZvkrDno9YJ3wfTRWdMHM6sAqr2bP_I8AvGHcBR8FcJUlx-CnOYjsmq_xARGYXy6YNSy9U_xjcCZPkcR-iBGm5mXCSxYlRu2cjxijI3N1gRBlPr5H1cuytdq_98-B3azBs0kNouQ6vUMY53OEwppshGoswK1x52Yqv4n4O2QjSbQTt8Z2tOI8HOvdIjRo8", width: 1024, height: 682, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116703097277670758559\">Suresh Jayasooriya</a>"] },
            { photoReference: "AWCwydhuSnUAC8k26r_ug_5A73prHBl3yVIIGOnfo41BvrtMClE20fDZvw9tgEahHAq5TiEH91L5QIneiW5IzbVJ4vPmQ2bR7V9izC-nH2T-2EQU4BLs12eh8DgLF5B2HZgtoAndsXKk2MqdX2VYyVbyUNcm3RrETL394Nj8fQlMouGjwN_5-9BF7VSJTiotf7cA5Yg0cW78c8wHswzdbm55J4-1W3muIHH_pomyrap7tGMQfvivfhLi1lUFXvok8ERr1BWbkW8_Ymfo0gHx44Gs7RXOPhvorv5G3lDbwpvb-X8upDYpwxXCWJOiTpQ00qjyI1YPxv0hyXhbxgnEENNtoyPQXzdqRSyeYncvxa8Ql9ojmzSjLKHPJVkQpPcmdDMe2d3nRtf5v_7xvt0ffCC8J3lrFCSobESGPAITbuQNE8UcUOCY", width: 3641, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107394099774520322926\">김미숙</a>"] },
            { photoReference: "AWCwydi_GNzEhfTs-BVDU1D-5PbSVZqo5WutNdwfbiUulzO5M4wDVwFXO-GSYqPq2S1XVv9zhAA3IQKO_RbayvVXWavd1uGJMvwU2Gvprl8UuxDMpQVLW431POvhAvNkPAdPQyh_WCVxaGlG_dBExsQx9tXaqbEMwTrij1Px9wHNAq2zwp0ogG1uTmtn2YDMBWJ7bIQdNjMrbGyPkCTyqp_c3RBjG6GNUvRHR9kwcE0Yx1z2HoBOjlTbiHHVvTD7ZjpG8YjRYWFPHfTTxr_gK-v2QQlbQdVP1NsRSxpksysLpCGKf-jxbgPCDBZYJa-xP3FojI49gGm16Y3wqjdY5Ntfajqqp3aHnmV6EJShMHmzG6Wss_YvlT6g2jDx5ClUaZdkM_uInJeXvYspZxVTLjW2ME-ePuOY2I_0OnUZf1MarJ_PRh0", width: 1170, height: 896, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103741781414111595015\">Pierre Januschewski</a>"] },
            { photoReference: "AWCwydh84fY3vlT4nmjn48DxABxf60j_-8dmkEMkKyaCF7N4wNPlpcgV_o8inosjwp7fGNZHaZqka9LF6MVDSP3Ykm_Xc8eicaqAFd1DC9iXV7HKQ121kge5-Y79kD3fVQhA_OQsvRwCSMd0rMIC8UJkYOERWQANQkJbj5Zzk9jrmayyItXsyw6BX9fZ_UOISnpLhh76dTsxL1s2OWGXHDwZp420RxZLzfx4W6jYTP2kdCp41dNcsy0sHGgM_ZkBnseKFO667aB0oOfoSHMRfjCoIVEih2QVAQonlamxr-JEcVBr45LjQXg2erK9HC9_n6u9NdqFcbmQiXc6XTntpsUw8bjqF0mavkXEtuArFRDmpTy875qTppjUSkhUH6fMflvPVho3BtKIOTBov14vwwBFvm5pmi0trpiCS8sTZAXRb4Y", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112872585673444297567\">JP R</a>"] }
        ],
        summary: "낮보다 밤이 더 화려한 곳으로, 활기찬 음악과 길거리 음식이 가득한 여행자의 중심지입니다.",
        updatedAt: "2026-07-21",
        highlights: ["길거리에서 즐기는 팟타이와 맥주 한 잔", "전 세계 여행자들과 교류할 수 있는 자유로운 분위기"],
        tips: ["소음과 인파가 많으므로 소지품 관리에 유의하세요.", "마사지를 받고 휴식을 취하기에도 좋습니다."],
        warnings: [],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "무료",
        reservation: { required: false, method: "공식 사이트/투어 예약처 확인", note: "근교 투어는 이동 시간을 고려해 예약 권장" },
        access: { area: "Thanon Khao San, Khwaeng Talat Yot, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200, Thailand", note: "Google Maps 위치 기준" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=13.7589206,100.4972578&query_place_id=ChIJDR23yhKZ4jARdqd5AHsct0A", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%82%B0%EB%A1%9C%EB%93%9C%20%EB%B0%A9%EC%BD%95%20%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "싸오 칭차": {
        photos: [],
        placeId: "ChIJX49VWsWZ4jARwEYBM0MDXnE",
        placePhotos: [
            { photoReference: "AWCwydg0kqc_j9UQYju5G4oIV4cmNpRLYSDk83F4swKGVfwvqwt1Xqxt1iXhV_4dvN5WWi1PffT-aqlykGQaf7KJ8rv8B5BOsJVeBvskA82I5Abo4lCdakpoaMLIEN7Q4JITD8_3_iLAdDMuP_h3ro1rdRKMxtEWUVm19paitEbtjL0LwV0n6S0IXvzmVrRDdOyh47UCG_f6FA9WCZ_YvoBIu0upizfbbgtPDJcCYB0fip3TxcPCVeZGmjRHo6bK84pebkp_yJx4H9YqdihsB77MqEPBmwJkDnAslN71glwzDzPGSWJIJK6HE2gEaQxqiruW1fJNkRARjnmZlF9trstv5Qv503YVIlTiUOftTC0T6DGrG0wsKQX9gk9ZGRVYgNUuQoCygtJ2cobFEIIvC1XsN8kXEEh8_nCPkiRbQnp9hMvc-A", width: 3000, height: 3694, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115338107768284538652\">Jeff Teh</a>"] },
            { photoReference: "AWCwydh6PraDfx0XW-GVrQvH2yty7v2a2MANEXkiPDktRCmI3YN8xMyQow5A2KTdkZE4YuWqqRyXd7ZYEXmwy9M5O_DO60HYr1DE_3BnFIOeF1NBU-OLCbH8Gdzbtc1o8YIpr5cZ5ApUDR-85vIeE-a2xuyIwBR7UR1WjBfPidiBSLsdBOKCNQsiR7-QVe-rNm7Hreo4yCHbPNc_vm4RBJRGCN8QJ2YSnF-bsAC6pwhg11VKQVacNwVDUp6OkQlrWBXulixrlLbcIboNLXrJfczsQYCj5M4RXlqUpmOtQIARqYs1pp9lznHLMcqzFi0TBM8oB8AuENec9eXKshnMs1_yll_N5w-kPG181nxQx1Ev_OCEcA8YbPX1RM8MkfR-YgQ5aRHkpjwHIQ9sp9B4F8OblvQOmlfNLpCfEeqdrZslZR5fkiqy8LRYZvIBKHJEbOUg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101422165844497584813\">Golfmashare</a>"] },
            { photoReference: "AWCwydjwaEwa0jg3w2jQ0gtvReiU55bN-S2MAlIlNlmMTn59QpzMtCvEUAXPmPHu3gtln-F9Ofnir6oG2zm9XkPYPfcBK9JY8q9ebJB-PSwS56L855TPp_IwUwi4scueqrKtIT2AS_O3x__47AAcir-lLzgKA8fC-KpK-nJLsgqwKZ7LUIM9miZzV4V4pWQYA_yAVoqp_jbVfaJdvBDnzQE8upBULeScS35T0HBH9y9ThRxDn2fHHvfatNdveoG_0alv8O5v-PujVlZby2kKPDocqJVQ3DkuNg6kKjYPFyjpiuri6XoNaUtuwyfK43GqUVDQmtxrupiJYOO3q-33N3K8b0YgzVIKjU9eA87xj3x-r1U7AdL_asaKa-KKbAYp2drDpKWnBBfR2qMt8EyIGN-m00PstnDjnDOn782qniiHSmKzxc_s", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108832926416052020476\">Bram Heils</a>"] },
            { photoReference: "AWCwydhcKqnk62L1iA51wsBR32_JoiImYQrhrSSqscJSDswKwBGoGAq0TGEQHLnKTfNanrKPdjbjLyA0Y91ZC64ALCIxRz6Tj7gXLTYu0iVGhLsPfwzIYmdLLGdcjE1faFvlRL0d-sHnuHg_jpGtvLq7rQvPp6vQsrI9c2EQdM-rhsY0TBaMl3nudNHt3x7wfF4RaAMzgBlbJGfsgF6t_G8WBbqcmnytmjxDT48jToRy79-On_7ipIPHYslT5kJYLfgizP5q3PVHa7--2iLv4-4mgXcElm12C1XJedPshbeHCdV_tz0fLNX8SWOP0-5vphpe5AjnqLtFNfLXThkg7PMl8hDJXtBqNVJWAce6Ekytcp3puSQeBkLibIeisoyQNpsmwyRe_FnL5bD65sk0gWO38AApqdMSxlucA7tJMr8iSTrquiI", width: 4592, height: 3448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108500161472810060511\">Phonlakrit Sunthornhon</a>"] },
            { photoReference: "AWCwydi6o0i6MRsibhqD-HNMDrL04RATGh6u3021wHL-f91EZ3AL8Uk_4UMTw0i_PnGe-Ecf1wnTnJrs1kLV79rc4fZR45twpEbjRrAHMjqHftOYE7RxkRzZwDKgkjAf4KVgAzCMyAi95mxFFYGKkqMz-2g-m6cBggn-oI9Psm2S7HOW-uECYJXSmbYMGTypljlQP1sCTzuySKEdqjl8XxOHsotjdVjQ89OQAc0u8anBG0-HtNKo5jDry2KYPrmBDowo-sssRJqtmq57YrB4Njj9UqGUXiH14ohPDtcsBiPNgN6HcWhENId-NjyPEkTI5u2RKjl7FzVp9ccor7590Qnmgxlyuz1kpBx69iP-D1Sff21nQOS2H1WqFIky6rG-qUirGeo2nE2eGZYpg-FmfZpJGsxYO7DoRlz70VFQWGkZ7XQq4tF4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110615668420153789839\">Pruch S. Diary</a>"] }
        ],
        summary: "현지 맛집이 인접한 왓 수텝 사원 근처의 명소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["왓 수텝 사원 인근 위치", "차이나타운과 도보 이동 가능"],
        tips: ["인근 식당에서 푸껫식 꽈배기나 고기 완자탕을 즐겨보세요"],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "QG22+PGF, Dinso Rd, แขวง บางขุนพรหม, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8168970361250072256", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B8%EC%98%A4+%EC%B9%AD%EC%B0%A8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Co van Kessel Bangkok Tours (River City)": {
        photos: [],
        placeId: "ChIJV0YZRNmY4jARhoPwJOh_TgM",
        placePhotos: [
            { photoReference: "AWCwydhYIS-_doMNp-nBdgq73SEhHdl2ez2LuuqYNW_WOMQ5_KGo16D-nYvAvkG1nSyBIgJKcZEjhQDg4rwmvl5G8OQiHFRMZlDyw-A3qXRaJYX5b8F2Q0mAm_HgKmqCUZGpxruJARwKaXC1wOGHTWsI1X3LJMvau7eBR28G9bQupyvM8ol1yqhf0s32P9ZAlJhOSqvqy3LxKIylcI3LNkhaEIjGTFcjotffjBSKilc4RHMdMb1g9Mr1rwyNRLbBGtpl5eSmr6bSoorcVpHT67qZ6W3aOe6bKZPYQg0dGRsCwt17IFDpQLC0gTVWPZp0NPjJQE96TrgCv-uuej9tHmRMvO-Rsz-oJWTxlF9Y90Xu8U6nzom-wC16gWZHAzDxLf9844y1Hoc6WwM8gxMBRRp94nF1lG4a2joU0V23Dr93dEZuRg", width: 900, height: 506, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108022378067561607963\">Co van Kessel Bangkok Tours (River City)</a>"] },
            { photoReference: "AWCwydjczqNrB-z1_FbHbo2QuN0qoHAQhMR0PkP12C9TP4dL6t8pjCb9k9Tia5KCTSDRSvrKx8kXFLbmGsLocrsU1QUeNxdboznL1lqtReJNymdPowyRch7m2FDeh3bCHbFEY7oviPfHyNNhAV2yO0Wf1Y6N_tn7K8Ge1WsH-bq_UUnQyP-XlrDrS15W4rPViiBzYujMObTvdBDcwWfUZfevMTfPGXJHWs-i99Rrf05W94eSf9knjMHukew-FQBA3HtIYxT_N9pWUDBgbsO2pUrZYEhRQa8zjdTP4m53UOltVy5zN_aV2upSq_wJKQ7iUOh3aGgToWhObjJyoEGLEfD9ZlwLNkr5V6e9p6iOzfPHy9AZze8ZX-zHgH4t2c6L-aAnAPPTUxFKOblydHgA0vGiO2P8lfcbOp6e4LR-jNVvzUW1bwxJe-3iThF6caYhcFx6", width: 2286, height: 3048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115696904774962917564\">Charlotte RM</a>"] },
            { photoReference: "AWCwydjJeMB7CduCEr0hn7dVIV7lXrGDKzmA3uyuCyIp_4P-CV-740RUMtNd1Bluw6ns0P9unkwzojEAi27e2frL3Uuk3ukFpaUtJBQTf_1ORRD-wUZn_ScQ4fnZkmGS9xJkm7OFpexbdxJ9yPPVXx7_41tqi-Rf5zylBQYdgtGPLfXmtZkAbMueJatEbGJFYy-z5tI7jMgz9FZyKw2u3cz4D2KpnyFZTIh1szivBAGTlQFunJxlJgoSzhmaPanIzYoim6mvX8FcudSETvCZUPshWAn0mej1gAUczlRKwT4fG6VHzWev9IpLe8LLlsyZXn59JEvtt-CI2VmCi6XvrlZ8dBPRFdphprG0iF5xa6OmvFF7VSR7mGz9CroaBHJMM32lhaahs_duqtoccM383Can3U7-bzwhaqHgnoY0WPVbHAgilBcM8IS4qj1915N_0g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100241650673862611175\">Lynae Christensen</a>"] },
            { photoReference: "AWCwydizQtaFU6zCg8F24CKMtAyyqLUetcdyJ881zN3Ek3NDFQOh3SVSABonBWmJf2gxHVb99y0hJTZPezr5sSu7qvvFKmgONJR2aA1pK1KEUf5CP75djUCArb8QOtWDrzwgljvVDaDl5P2XlB1hBoK0K-jIf6UmnCMU_f3BSNsZryVY5fZJFBt6EcSzciVxkNpaJYrSaGbcga11B-rtkJsGVul_EAVbhXOAFqxoJNec_nD9I1NeMHgva8MMwInoJXdKwMGJM0t2GlUPo4TX--3dx9-7mJkby73vHM0A5PhiI3KI0LhdwbMhsgKUBYHDtFD65P9TshYP9KfD_W2VSaJN4kSaSQG2Wn_KFFdSx_RMlm5wNnR9SKw8iLhAxLydPEIjjHkraAmKXZJxlOgI9hzxAovi9L9CeHwx2YyfBvJ3oMn8u-d55brYQrKA3Sxpt0EG", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105615313022400296154\">梁磊</a>"] },
            { photoReference: "AWCwydiW7ht4ijWQJLzqNT66f9ODCOCId3tJujKi84HTEtuo-H_Gym_TV6_4rKJEHOx9SkJnMx4sy-nm7FwaOtYwxclSaUuDV1WAKyYQe7RgEvJbGy5rnTMR2CPcWn84pnnjdgVgjI4cLTlZkAtiBkc_apqpNE5c2cmMXVzxMs-74G0FtuRCt9qvTMgryX619Yo6mNxPhdwvhnhWuRccnCKr1U2ncXBome88L7ZGO5yESXsjaL0biwKau4l1eXzMsjJkI7JGU5UrnhJ7OTiF11V_yxnlPmf_29iBTt3FTGLGq7oONS79y6u65RvLLINA0m_vqGwFFtX5Nc8emJ7PxDhushQfxcXyiim-3Vd3FSkFMcXnWcW5Ho-ZHnseLgNz0ZhdY1iO76GZYvKCEv-Z-fWyyRk0pF30aGe6RWJMqfGUD7FC75bd98cdQu0svuatFr8y", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114214030058798290621\">Winson</a>"] }
        ],
        summary: "방콕의 골목길과 사원, 시장을 탐험하는 매력적인 자전거 투어",
        updatedAt: "2026-08-12",
        highlights: ["방콕의 숨겨진 거리와 시장 탐방", "공원부터 차이나타운 골목까지 다양한 코스", "페리를 타고 강을 건너는 특별한 경험"],
        tips: ["가이드의 유쾌한 설명과 함께 투어를 즐겨보세요", "다양한 시장과 사원을 방문하는 코스를 확인하세요"],
        hours: "월요일: 오전 6:00 ~ 오후 7:00; 화요일: 오전 6:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "23 Charoen Krung 24, Khwaeng Talat Noi, Khet Samphanthawong, Krung Thep Maha Nakhon 10100 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.covankessel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=238268465326097286", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Co+van+Kessel+Bangkok+Tours+%28River+City%29+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "드림 월드": {
        photos: [],
        placeId: "ChIJD_Ph9PF-HTERKo_7Kxa8k0g",
        placePhotos: [
            { photoReference: "AWCwydgzltru-8plTAfJDXFnA9coflt7CgV8e1KGRpgBwy1MVG4DayD03damw3JBgunK6FJ_sKr9IXIxRHzGZVVi-2ech9akLCbA86GCt70URuYlHQnzORZ6-BP-B9h2mdsonISHLepz4JHOx1u6O5pcSellYyqLYgozyVt0_o6Si5keRcNzrtv0V4kvloX6Ho4sxIEVRKRBUA-zJgEG01xXoX0exa1VAHaXiNHfgwL4vzdtijnpGNwi3rSqpgYG9NYg_dC7t7XIzmcyGxQZ1WEVfyvo1qhwP01Em7elBJluMFxQ99rglWdT0Wq9MrAhYcZuRpYXLDAkBgRurRH5YiR0r4ZVPeMeUFsN5Ng3CAQy_SrqE1ABlqtXdCIDQEP_mzRfRHaP-_xMFrCTMKgq_WbD-oN_thnnWNc6FISdMNM7HIbh8A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115011277531309341173\">Валерия Крыжановская</a>"] },
            { photoReference: "AWCwydjUJYBLXjfO2ciOtey3XI_HMtD_1caYSG1eFDv9vEyYMqR_O1VTgQ6k9wHqnoSgnDbe0DjA66CG9jKJQyC2boZmhuQ8Cx38GDThTHo8o_KAvohzimIFzrmEG01I5RzX0pJ87KzR4qR4QNqLR1cPiEwmQkju3aCgl7Z-wtGMxVt1XkjSPLEarW9261dUBveOOaJ5sgAWBCYPQI2GJoy-Yw4nnqN_eFma-9HyIPHdv_fqlATyIVGM2xvMLmL0vdHcQR3INE_XDCPEL5qJLuqZLxTNU9oAPFO8rEzEgB04dUGHID8lOoucpfOuX2kDiIeHmTb1jqkNcTwyKhBZ8c26d4BK7Qe0z1P8qquzWSeJb388z82IGy5h5yQvkf953TAjBEwXKzaNdxmQNgUtHEZTgCBE8XDabMr0A88t1px4SSwXOA", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101055383617333641997\">jian xun Li</a>"] },
            { photoReference: "AWCwydj1GLx8IniGlP6kRRlknydhexxuJ-XgtNJyrxYMm8hwC4u1AAVpToGQd7Jm3JmyDWCmfmawj5IV2Z9h7jnc8RFvUzMwIUTmHdJzJd6YJtSDFrhgAJp_mjc1X322jKfybDPEmTBjPZfjJPV6rxcFklpVqipkMzJks-Fy-nEB5tIsKn4Xvi23uDlA77d44038U5jTdVhxVIRCEiBnJuEHGclPmwP9R87fOckU_C2nb5TR7E7H_umzhjz8PTYIV_WSUsfQ2j6gS3fgD40OOG1EVjErB7P9YITXIrwzJY2-z9_LLtQm6mTu7OZt6QTOpZck9MR6xvltalksJUWbvUfHcAsyEn3SLMGR9Vv9QzDzp59ltDJwczeh513uH9VkU-n6iINiMpcXWrueRHojtIb6BC55N3W4ijzVvdYbm2POukyliQ", width: 4800, height: 3270, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115996544643480385921\">Rakim Haque</a>"] },
            { photoReference: "AWCwydiM2PJtWFjdJeFuPlioIlLWrH_SGTVWy4nTSqXiqWJNk6M-oJeLE2_gE8DXr804ToyICERbjaFNv1-51TqezOcUysstHg1yUMohibpDmiwGpnK6XRQDrrYbWFlHnvppB_KrEwa6mU-ZT4hSHeTc7hDhUWrHMbfrSYHU9nm8FPB46DCRr8m_zo5_AtXRr1iqvVjbiWa865WTokBSzErqyXcwe4uRGlpOu5eap1BXBmUflLJh5B-sWuuFc08wxRc6_BFPKHhHMiJGda1GC6DhZThSZLr9nzgzyHMEs7LQF-K7-A3zwB3z0R7izbX5pbLExIsGxmCrsojb1l6fl-zXfOfdqcVXOh6sP_qJFd6p3GfczGn37wPAitoDlhpyXa2qmbchOXY3qGfoi_iXXk9EG9TMvteuTjwrPVVeAoFVJF8J4pVH", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117476179446780232255\">Nimantha Dissanayake</a>"] },
            { photoReference: "AWCwydhyv6jIWWaBO2MpcK7W3i9Wbf9HBwjTzXtFbqzW2Zq_vTy4-H4eRlQx49ciCEsBSN8exaImtS9snnyVv_3Z3AJy_CnBVL6_dhwhTopScoQDqVBqlU2V1ps2sXbccR1uK5H4aGqRZCJ3xjcItMAfxglr8dSPD7USj5KzeWiDoqbAG5K9CgR3KeJJ5LB3nBAaMgMquaOfeinrehZetcYxcRR8FAy4D3NwBO-2WMk8L3AyZqzKW8XmcG37U28tiS4_2rkYPYH-Mwpy65iSQeIqMic_9FJycrK5O-n6HASelWDg3OfXq-285Q3qRbkQhUHTFh0u-6uSKD847B5MYxYZz_crN8AmxtsyhlfoztcABIvW9kogY50LBMXYhNYOtdvPkSldT1gPpoqN80rVFHKfgIaJm69R7GOS7qcpVM9x0j8ZrQ", width: 1900, height: 1275, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111428824511099804989\">bhupesh dawadi</a>"] }
        ],
        summary: "높은 리뷰 수를 보유한 주요 테마파크입니다.",
        updatedAt: "2026-08-12",
        highlights: ["풍부한 방문 경험", "다양한 즐길 거리"],
        tips: ["운영 시간을 미리 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "태국 12130 빠툼타니 Thanyaburi District, Bueng Yitho", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.dreamworld.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5229730395720486698", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%93%9C%EB%A6%BC+%EC%9B%94%EB%93%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "방콕 사파리 월드": {
        photos: [],
        placeId: "ChIJc50ygA1jHTERbHsyFbmUFV0",
        placePhotos: [
            { photoReference: "AWCwydh-2CONWIi_WnAvrpaFFtyIndxNruxfPe-D3nb4KYvAqEA3pl0WRl2URvVbqUaffAnhfuQ6sfdz9dBg0sAvpAf_9-Wykn3n_CqnC6hOE48ww8NXpgzc0C5lsowZQEjS2WWp6J1F1nLpQ9CC34naiS8EKKKyFywcYl5sP9EryiPkUoMjSqks_-XnjVajze9b7GnTV3mKluaCLa3PVkSWutUKRqU-FAvCznljQ8GaDqyyXmTYiFng446ezekaP7185Flj4uR5wk9UGSmCJ0PAQZCpAXtbnR_3CpFHi8i0JddA5VFXX51k4wdDM-fJIWgh-fOJYl9OeSiTss5_B5J3fXEsmkOgzwE5EaRwBRmosRKDvdAe5Ii1dWxirSzxXmnd8oKrJsA1QehkxBApLrd4_b1O9Jt1qFOBaHYRE5dsdjuEcon9", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105690493131763549065\">vivek R</a>"] },
            { photoReference: "AWCwydhxuhUJeYSIqAXkphvn1KNyTKkf8WJq1v9ENofQrVXT3PthSQi8OlIKeZQFY8eKq0-_faLl_0KjldtpNBtf_KKxuuaFOMqP7zcA06ySKQ-K8bZyYfimVb57Q1TAeSRqoSKFZtAuapd-QlyQAiYS2Sr83i4afQg9CJgEHxrmLqMMAgVMcnn-iLEU4za7YtEq5NDjiUhRc9zR4F5ayCVnHibwH3Dl8C2E1VmwATbT8PgTPP9cwApyz4wMZhBC5AqWoqP4iCkBgKzmPcuh9ZDhHj7HHmrCbiSgmJrZmnvjIBolyYQvZtimofu7F3ryOQBsEeSGKnw3C2nzD3lrLmT3UmskMXSzWNcpKVfdyecHwQRcVP8lTKn4qhmYl6RTWhcaKpCzQV1s4nsWUsXtG0UPNhO8131LP4MEtwSFCtbGGlPosWXA2Yr6VxwJEAPgkagE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102788181733668776466\">ชิติพัฒธร์ ขันทอง</a>"] },
            { photoReference: "AWCwydiRTYVn40-YARAVkB4UZYF7tklhHrtOoDCUspqSjtmW9BKPrZZF0pFCqohUg_2s3fOSfIXnx-Vo7gtOsuPBVX_ctp_iP0yQyHzuY9PAYULiBxY0Bucpk2vOrm0p-1W9qiqTWzn0QEWuKxRvJMg3_q9pl7PYIsS54CcKXh2bVmvqXpOzw74xVQUxMb3OZKeRIM82U48knQO_I95SACoWONV_XfnF7RtEb_z5X4sNPwrzRmvilzyzudXHb17ql9dn5xyxlhC10KkvTslc482dkppqsNSirsnFpoEexMAw5dPGZN-6aq9Xx8o0lVooiLeBgzdNaaQb0-2oMlVKM7opgoXnhGlmVzW_QnFT4AQu-coKo0btyXXpCF4gAhtvpmjzD0VfN__U4sYOYmdZcYKS_bMQ7ZI736T7kPV7FJrLC8ZEWcvh", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108697087304832952030\">Pritam Paul</a>"] },
            { photoReference: "AWCwydiOgUabFxiRlePYIbLwXxMI2n4l-KjLdYKRLSdly10L1b-V-LU1Hab9Kv4HYdSw4UPwP1MLJ76K787p5iNVfu5eWx4pk2I7_dWa6-OmMEIG9pTAmyFAj9XrkPDTFVkG0ahgh2ZpgKDnHB1FFOHadGl_wwvH4c12iQQ_qKOYD-bUd6_zbMgkxCK-tNDdbVY8gMVLnd6teKAR0SwSunbgziQMFcNAttUamP8weqDZF2x1zdYhiqISlfnJ9h8Vmtq0fYYZQxLTBKgTIuLcyCLGELKyduiHzJ3pLhdcDN7YthcqHkjTcweU-0oRw9_XS8694DXeP72sdyBgDyh8VX0CpY_Md-RzjibF7qkWfxJExsq4UO7P26VAb81XBx5Ivkq4CZUDhifEndlFv0GK3U_f2RKwfP-pNar9HbHeVT6OgI71fItv0ENJXbQoBooyMQ", width: 547, height: 365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114680301085613412169\">Shahzad Ali</a>"] },
            { photoReference: "AWCwydjBZVq_X6Q51su97M4kU_fMqQjpYlFYKsQRYYYyCBvTk1a8-3Mg2bSYhjw6QhtnojmvYjK_RAGDV_TicdWdGH75LA75d10dOWyncwLuN6VTkLoXIX5hinqJOr_RblWWjjbnRsPLp99CJSHaj1RiPiSbG8CG7PymO3_-cU8AoPMwkV_iyJrugZsE7hptHSLNAq7ZC1deVZz-UoosIWnasbdSPcrRWN3AUymCLKd2J_s_II1vEd1oq1PAT_c3cxbRCXp7e17oOQP3xRsMehw3VdWTBkJkLRGcTXBK4AL66kM4of9iCsO7XKJlC9kzJ3qTuDpwA8aj9aZeWzdSgI0YNM0Qop1CGO76vsTdbzP-M_v87BbEU0eeOLbnt4YJdxiS9Uvkidd8sumVWuJzBmX23C5lKlAtUQU2TW5bBq9DUa8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101219014979433858521\">Anandu Shaji</a>"] }
        ],
        summary: "높은 평점을 기록 중인 유명 명소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["높은 방문객 수", "검색 상위 노출 명소"],
        tips: ["월요일은 휴무이니 방문 시 주의하세요"],
        hours: "월요일: 휴무일; 화요일: 오전 9:00 ~ 오후 4:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "99 Panya Indra Rd, Khwaeng Sam Wa Tawan Tok, Khet Khlong Sam Wa, Krung Thep Maha Nakhon 10510 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.safariworld.online/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6707430742683712364", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%A9%EC%BD%95+%EC%82%AC%ED%8C%8C%EB%A6%AC+%EC%9B%94%EB%93%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "씨라이프 오션월드 방콕": {
        photos: [],
        placeId: "ChIJH4I85c2e4jARUMYLeiqfBd0",
        placePhotos: [
            { photoReference: "AWCwydjpZEVJfJqYKYkcG2uXts0a_85LwCu7_9OvuSWym6ORxScMlkQP4qJKXHgX2VizaxyeRcQLozcNhK6r0F7GD_ceT_8x5OxpRBVWv0ZXQ9zND7lplebM1iogOiums0TSQabi35ocSDv_8Yi77LkxWk_5t06P0yqSHIQM9YK3i7S2IFxvZ5ygzurgq7QuhY5mpngUODJzYAa8MgH7kNT5lM7NiUmhvCRY-vugOprooKAeEQCjRIBH-89C0KWrAEBkOZ7PhqCxVZifyw6-8Jb4DgVFiEYln1UNk0YR8Q2p3L1jvQN9LlvjmgtI23JbJPmpgJyKk6EeFi8g_Yst4Itw3Gm3AVjUYD_J5Hp6S5eJMqgBYJBTR5ijTlUXuDGch0SLl9eOv1tyo11Hz3aPiZd1P3Vs3ey0_Lc3TWzu-2uVvoxOLw", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115310611705887520812\">Bank012</a>"] },
            { photoReference: "AWCwydi7nTS6svpddK66itEI_1rAkvx2uVxW_gPNjPG6fvakukakwLjG4BNMEy3uREVsaImVZxq7SEiuqcX6W4YLKT-4fbjdSYc2-kAEc-hInQBxTdy4AYfEsv8R2Ac4MRn4coDugPfjZkIsCdk3z8DqlWaIItjPBoZDzkw8Vq0UNz-s9dEw1QhNTjZm7dpOTekQ-E7zHirNi-3Nl79wRKlaqG457xxD9QjPoLoQ3hau9vdV3jBp6yBu90X-CEomWUjKzAaOr34NOTqO0h8k0SCMV7swWRFNrlOOks_YuXmfJrL0QqDOgNq91UJzKNvpCeEvFrRmjsuH6yI1OjzAu2kOrdL6Tl8ugyXQjmvhHrTYTqZIlEIuH68vcXfJ73ao-y02DLq3XHNzwWqZj1A0-LV_EIa7tvBa_7hiIbArq7DR2bMhbsB522KCIr4L0l-54Vzd", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118272948067367732742\">Nian Chen</a>"] },
            { photoReference: "AWCwydgvbeCihZIel4vtQk5JDmDHY--SK2gR0QIh6s41ZAcpZa0HBoyzVjSZivHbO4Khw_UjNEAuF0G-MDhXq4Y7FDUIxPhG6JFceRzryZ3WBBR2Ygss9DCjiMEEyE62pFnv8H9vL-vPKHrUmodBxjuWvGv4z_40o0VO-jUK5M12H_6JHy8eJemTZ8T9Okrw-Xsz0CM0cPiuGXR5mrOZkT6lT0Wm42yjsq7H04jWODt8geKgkCQPfefktmErkipR0JAXSSTVB7sDcJ9JtZ9nD_bMJjEQd3hqehJD5hFEbLpBpk3rwu5Il3vlOZ-ved2zDAb26l0DEMw6yBhgMTSISSearY3PYoVNYTQfMhQRojvBk-HxXfTM757CtLtSUFqUJIiR7e_KakLa-yrNtCI4p-9EdBJSIAORycLSknZjRwKsDnWuaSM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111425531530118747407\">Billy Christianto</a>"] },
            { photoReference: "AWCwydgyHR8mc2t7isUIIvxxQ3uJhcgwCcriSkwISomwNxRkGrt-A0uqYNJShVP3zhkIpwDrK-rAKuTFnqUuoEevtiYm4Tzl1rlIXqrYMmm_Pdi7Us_eN0Pd2K8eS_TEQnwA6R0JNNl6ZBc-b1SlxP6bH6EtmZTFGJx4JWcPIr32GWuJVfk-vroaae8xKUKYcvrBagJEHYhUcowo7OEpc5KQdm-xoOtgKNJ3eY4zZ2uSbozj_1AFYgPQvSU7Qf9N32UVNwUCq91TOEDAO_Ae1MmpCKrkyucK3XiAzkPIx-UWDYG9doox3Z4IyQq2KwQb1P3rJiB7-KWbddBZaioGzUr6U9mj5Zw2MwebpwtkjDgeAzA15H7z2820vI_XlsMp_OCE9f41N2wxOPUXL1XSwYG02DJPdfUH5EsMgOBXkRxr-xBC82j-fKVRh56lcSlBEsby", width: 650, height: 433, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118192846124462845970\">Thi Nguyễn Ngọc</a>"] },
            { photoReference: "AWCwydgylHP1bJFweyQafIviNBE4h5Ee0vRujqdEDytte3QJVdwImx28lnj-BEElV5Jf-RTQhgPzDX31xm6TV0PqvfO_TNJ71vY-GF9skH95YQknQ7pc6-nM0uq_3GmPaLvdh1O-t9TThFj9OyomDRXFUYZ3AWcZuTuDqeiE-ihX-ujIjvITHNRRERp54IbHLzhYGsmSqlIRjlkXKv-6ZWq5mUTlAil4JEEftrTMYmBRIzToDq0xvDIFp2qIGvF5vMNfwKpOauR8AEwBL1UDPpOTOSYPgSUYjeFD5Yapx-5IW81b6VdBQB8KTHg9xAiinAok88gMxR8HGh6Ee0f_n21SjvwYt_a4PMwwgL2snjoTquMmCW4lz_7trMlbimpF-SWZ2BOlA60xxfi9momf3ngHUpnjbaAdNhe2o2VRycEGJH2AcA", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107534724889252811614\">YK</a>"] }
        ],
        summary: "가족과 함께 즐기기 좋은 인기 테마파크입니다.",
        updatedAt: "2026-08-12",
        highlights: ["가족 단위 방문객에게 인기", "많은 방문객 수"],
        tips: ["가족과 함께 방문하기 좋습니다"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "ชั้น บี1 บี2 สยามพารากอน 991 Rama I Rd, Khwaeng Pathum Wan, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.visitsealife.com/bangkok/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15926310662050661968", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%94%A8%EB%9D%BC%EC%9D%B4%ED%94%84+%EC%98%A4%EC%85%98%EC%9B%94%EB%93%9C+%EB%B0%A9%EC%BD%95+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시암 파크시티": {
        photos: [],
        placeId: "ChIJrc78zJBjHTERdLG8EciM5Qs",
        placePhotos: [
            { photoReference: "AWCwydhyy7Z0TkUyzouLAzm5mxxX8Wn9Woi8rslJMQoJ7LmnKmUykKeq-PkFB_rVWXGlkWE7sVeo-4d5wAs0nl4pL60F4haFcXu3XabWs3A6TWELyfNKuTJFtx3RAHUeFvQn65XdCcmZw6Tu9J9cRiSMBOZeLamS7Egxdm57fhNCJY92MBQ2lsEAlancyRuG_Je0WVGvh6KAlTKkhKhwtMafwfl36myCd0SuhYH62z-y_7F7L5MgPDkyc0Y0j3-B7J_ebidrTaahiKnntAFBE-HGzr1nTc3SQ_3eODUdFW_w3k3d-3KPk3xCpqSmm0TdmNVM53jt5JpsVjcSHUdw4nLy7xmVEeHnFnSQ9d2JlsTgsUIMjZSiupmjCc2iFvCW7paXwUnk7qt1SHRq44Q3vLvlPgDkjb6kOsQ2jHYXqmYOR5094JIwaOwagaOOmwRHneQL", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108680208378188249180\">malsydob Jaengsawang</a>"] },
            { photoReference: "AWCwydikLpJuXRbo_vpPMEyc8sdbcp1DYjjc5pcbqqXkP2Hpsunhmu9QN80kM7tbl7aapkfpVAcYBNHcZaKw1Ercn9YK4TegpmSXGyBVkYxzvrnXxVx7WeHAMhd9gYnHDtxdAoYQFWWe8o8-Ip04Dlqv_9qFV226ffq3yq44kkEh-xRdM5zM6PtIKppLoL9oLQs7MUyarRB6bXGONSoGk9aq5mmlgG3e6FEQFu3NXDUPD0CqkpvkwuKduzAj5w_KZKYLugAyiCf7pDejcmRMnoU1gj60F36TbmiRl-tTibzdU5iSJ71E2sFpVD1QTcS77aOiLErzZn5MKmII8zL4cRXVcNAmUMIikF_iGtH7pIrNzt6e_NXPKjMHw20jRLVrA0FiZrhaDUcvFtPzHFau3NMPVjvzvWCdLEHbhW43THoCuyIhmYgOjDIBOhA0pnWlqx4n", width: 400, height: 300, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113210597566031687381\">Carlos Alberto do Amaral</a>"] },
            { photoReference: "AWCwydi4fhEALmwhmOBh3SB-bsYdq_fUUb2KfMbqaxpR4B2xKFK34pNLtKz2Suo0LPjgeg_Hyrqo_9UewHaN95qIp3drv1HugbCj32zChor34W81jWyfDNpjgQ8XPUqoE7OLo93mkPZtCx2QRa8xf2XZoI7CkehW-11BPolOd4Na5nU50b33_7rW6OlWQkf0sVgqd-ChjSWsrAGLX1erOrRJ7Vj0BbUgQLeufSsviAVWsk-qc2dkJdni2d-qfZHteqynWdtCnU_0pEfjiSkUZ3UqMTpt8bRoNWDEYUL9dA32XtZDzJBonPEvOCWqqkJa_JnFYfkmWTYhyk1dgEUd90pP0OcrdNrnV5KyAhPHjJrVjOxBVK1Y8WgR3M-Vd8xu7dnPDorbWsn6JdHDQqkoSqYO1s0rHZyEOiKlSYwWG0CSbzZv8g", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113313786680371302143\">FooK aa</a>"] },
            { photoReference: "AWCwydiSYrDsdh298nZZjVMr6Y8j5V3NlUURJCowPzC1LWt42DkElUehwrVifm42xRc1h_cHiXMjpgKyw2rvYEFZIj5Ra98_X3yHgN-oEyP1pkA5wQok1nN9LbW44WZ0f4kMlmDode91CiIiXjdk_ZpKmrl2W7Ti3yZPwrvqRrFjk1jiT9kcZdTLg9OPAcjCfycdrWpl2osvf01GlHLrWpql1O7QGQ_dY2zBfqhOGDUhzJ9Tnx5MSQYXWAHmDmo77F9QQ5jAN0RxoD4920QDLURcHPKn0wAB5YzB8IbFvBWPsGMa1AiQYpXm1nJQ1hdBVDed6T-YYIYnINZNPHl7kSZsfUWjLRKXcSmTiYukIK4Jqx5QZALWw2KFzOXgO4czyFCDQ16Ky10TrurFVA5jw9agIBoM2468C1341FOg3BLwxkwzcYLRtygw8j4FhR_ndwjq", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113210597566031687381\">Carlos Alberto do Amaral</a>"] },
            { photoReference: "AWCwydjDyOnMm0HkzZsQQyl8G2YyIGfKKf8oeys8hnYejbxXXbVStABwHND9NCpOzg4Th3Qs4xgoTXlBujVyBass1th58i2xW-DGsv8QVmVvjHm8Ohwakd0M30LQpyNPO7ms_Mn1dVzMSNRmSWeE2Lhbg9Yj6xzCyl2PgMbbfPxqJ-oobDGQaICBrGBQE1W7o4TddLrxc6y8P4v3v5M8yIOTSf7vGmQmR9nArMv8tyT3JAmbQzLdlumtJ3Wsxg-2dIF_dcyNGvWxBNHIIhgf-ifcOB8valvh4S7rwNBLgY9P4ToSmTK8AfbegVQRy7TBT4aCpZdBdCkwM_oHkHYAJ20y03IpSgts-rwYEdS33Aklg4xwglaiX_MhD6ktcNXPurjVLtbgHGSjbtfz_WXPtz2LrIjc5gIcGUSeMLJjkYG2lAZXMQ", width: 720, height: 507, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107357688576297040315\">Mohammed Umair</a>"] }
        ],
        summary: "다양한 즐길 거리가 가득한 주요 테마파크입니다.",
        updatedAt: "2026-08-12",
        highlights: ["높은 검색 순위", "많은 리뷰 보유"],
        tips: ["방문 전 운영 시간을 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "203 Thanon Suan Sayam, Khwaeng Khan Na Yao, Khet Khan Na Yao, Krung Thep Maha Nakhon 10230 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.siamamazingpark.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=857246095002874228", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%95%94+%ED%8C%8C%ED%81%AC%EC%8B%9C%ED%8B%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Snow Town": {
        photos: [],
        placeId: "ChIJu1aM1vp-HTER1Ci84u6kmZo",
        placePhotos: [
            { photoReference: "AWCwydj3rqFG-NT2h95Z5mPlnT3DBteqH9_F1aDfsednDOYjuIP73Uo6jy4GtukoIQ3yaz-j02HSKxZpWXWSrOzYM6hTC7YqF2jsRgxhqjnq5K1HwW4kd-wYPSD4TzZ_LDHo44qOFoOtVn72mj8P2vtsz9X2KphN3ip7HMydbpFjeXOkPBTnfQmFOHQ6B_sqPsNQbgzUYi9esiJEnzavHbhwM3KsSLuCrw2QjnVe4IwV30GDG-L9azxPZMGkt3vEqmr4eeBWiWrAsRI9meYmQc63wKYy-4SUZSmuqeQMm1wo7ZW4XGb_28AP9Q5Ix1FHkIuVpL_n9Sd8TM7fi3JXmIf3wfmQG9bJXCdvBFjEEv1hIvacpzGHB2ra3W-PcwZgybIq37kj2pkJq30QRuG1d5l21r76RoIpD02tNwC08Bv9ooReUQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114977060484228766296\">lin lin</a>"] },
            { photoReference: "AWCwydgIsHvgmCNMLj2RImz0nrGiFzXT-mE83JekyXiQh_4dYZlHWIuCQGxF0EncQtr0R9PTx4X6PfLKbZ_6HWCYJ1qIJhaApdYbm-0yJYj88_7yflgjJT1u5NaSQefZgGCMnYd3uglZi6HQVsj0JS0U11fZIPSpkLTTPnkYrG2jcQ6Y3O8ItdNfqRK_TtacPQ9xTd9x_kFeNef8uvRepGuVtzJ8VYihKUQrQqNRFeSlth_YGxDLDXXQq67EtJmGT6HAEcXO7RrdvgSy2GbtX8JiGItFcGHkunvTZgV2ae3HW23lXVgEpaOmX-C7qlQEXL-FFkUEWP3rhn4O0Ete4QWtxMQxRyzCkS9Rhb0AYGDLwTCnpXfV0bYc1TGKoz7DelFXjGEYBy4blrxfhcla9MqyeZ32WknafenbMuOqi6YCSXQ", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105687437632037836997\">MaxTew</a>"] },
            { photoReference: "AWCwydgiwETS4A-kEStxfpUoBoSdjNQt1nrUVDNyc1XfDxh0HAwoIcPMLvWPLe6jZe-sw_RdH1-0QeigzVVTsw25zMKo5fYrbo1i2z6swZ6tLA5-XYjozkYCTO7I5Zg_fg3cFuTWvEhOfhsuzeJVbHpcw3pbH4jk8X7k7OaOk4Yb0gX2hJ5gRuySIIKPLwHLDMThZr3YnKZwi-UudKUc7Z1By_58uh_7bT64wltcijSNmhGbwzbK6SAokkh1WXyC4YE3OIaXSma85-h6OroRJ1ZrayUbxIqzu4gF1BjFInuqqPcqW42cpTtQzzH7_bmwrwCNYKmMlUDC0UXUsr296uhncZA1bXyD7Na6NJ-IpRGOs5XfmJVsFXTZadr_EWlF07ZBEb9tWWTblpijq6h5du7ujWEfQ5V38qHFy_FD2ODSick1DEt4", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105687437632037836997\">MaxTew</a>"] },
            { photoReference: "AWCwydgpJ5subfFepWCQ7qXU8BQ6fTlUrDD_IFhsezo7pgYnTLesWcLFMlPFGLEvRU0I4MNlml7YLNGXk6P9sEPBAl1DtEOWhZQoR57mPkbq-MQZfV7hv52uSTFj0h6U2HEkqq-QJEi-D9S5Vbz3mf_q0GounmrjHqC5-GbVSl8NMx37F5XqqhbTJvvQv9RE-JQw5VFeGi3nGIw3cK75SsMUYeYcxI9ei4xDfgzmQ8ZjUVN1z2fYOIUv-xu58y3-TM7MK7VylD0tIxLSad46joF-eM6fp5bfL5O-9XJxPB0ZDapBOAYT7H8idTXDF46EpxcuGeM4Nlh7nrXVb81l-Rj7-Cz2-MtioM1DXMom9pKvRo-RQOOylqnesHwVh7lI3FrZnuUCnSdLMvizxAALel6vTmTEj7_rj-7ACkzBwPqgCU1dLBMF", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108929132850180586712\">Jagath Sapumal - Geography &amp; Travels</a>"] },
            { photoReference: "AWCwydjTNHFJsjpIuLjeqebnGyo5FFc9aoSl72eNYez14vGKle5dbTSghxvoFxvzyjHfP4oYT66_INPJbAO85Py_3h8GLRS4OGFocLyorVMtMqj8RjecFBI6I4Qsb4wYwi5ABJKS3aM5XuB2omHTZOE2SfppYYrkzP3g9P0kX7IFSrK_r6BVgxvqz2-hyM5kQI8x7YknX8hyykNd5BUA3S4QCm7t37bOi2XaiawEEYPzM4EVbOnHJbfHpXzQBwNBOraYC1vyxr6ef8tTO-D4HLWAvpPuQxXVAXnzkIwh1yXLIjNK7Zv3lB6I3YcBoKDJekToLr-lkDQrufJ8tIXGBHHK2vhem9SeZwdGTBeNVInS22Od-xDYH2DdHmyuigQHgDc-c0hKgVqKokAqtAeX1t_thikYuNN6oHUaK6jr0YeIXDAlwsP4v5fm_EQ6UHCI-f4s", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105426544348456490721\">O YUREEWAN</a>"] }
        ],
        summary: "다양한 즐길 거리가 가득한 테마파크",
        updatedAt: "2026-08-12",
        highlights: ["4.4점의 높은 평점", "다양한 어트랙션"],
        tips: ["주말에는 운영 시간이 오후 5시까지로 평일보다 깁니다."],
        hours: "월요일: 오전 10:00 ~ 오후 4:00; 화요일: 오전 10:00 ~ 오후 4:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "XMVG+J7C, Bueng Yitho, Thanyaburi District, Pathum Thani 12130 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.dreamworld.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11140116499190786260", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Snow+Town+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "솜퐁 타이 쿠킹 스쿨": {
        photos: [],
        placeId: "ChIJ20B8VtKY4jARtecC9sLeVng",
        placePhotos: [
            { photoReference: "AWCwydgQygosQXGsbnuUeYnp8fl0s7O88uBsuYvp7ktc_fyIQDZ2S6QvkvP3uV4aEkkJVLX_0l6EjaefRBan2QGgV2RT1QWzuuy9GQtEgCa9vR29UqaVd3QOx1WNjHEVEmGw43uytYC1tHGIh468pzesr3IhxqAK3y8qVqQJlKJOSHrwkJihlW7yw207qiQaTikmiNu7sa9yX8ahERSHs5JZzNALkvoF4Y5JCTaRNPZ-r0v5xL73RwDli2vWaZ8FbFELsvgfuueZbMVQmFhf9pb9mMj4MMSWQTbuKdfkWmx2jrNEnJJRAX_vj91f203Cm27Fxief-oDDSJ-zEA_t-Mbvty-AXokJdfiNck45OgPovtWZhHfYMvVKuSeDdvU8_z6YlGobbOpTLg43rz2mqQYPiS3VymyJfHLyZtw7QGLLvbSFireA70pgrC6gB7jn9A", width: 1179, height: 664, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108221902828255414479\">Sompong Thai Cooking School</a>"] },
            { photoReference: "AWCwydjvY-RktUn4IARwhnJmnrIeM_wIE_nmpqpyCUqAgKiPknDkHn-KCs1n-utmZ-NefGS0VhUX9wjHkA-mQCBXg5ZHOtPElr52c4KfbV5fsIdixQ9g1EzDBTib5_QFbTZNydXhWe_skMhMlMy_-XbauTaKtlkRADbGiPh4YIOviaiFdtBj0MdVdJdX13xo5Fp9xWa9EgIyxpUphuRNIR5rwoVCcUZgjkfd_IWKOuikHwmyrXxQjr-1048j9gtuxNA7u2JTsjYxCGA5l-41pXaUL_800gpcs_JrRuUm8B-uY7qzVXViqgFT8uBF5WTbrFxUB11V-pWfl1gZp2S328lVxPYq2qLbdQHPnhq1-OIXS772PVhPfnAzmQ5yG7u3nmYN_GBOMT2y5ATp6N5yhRByAYrR7iz201k8aaTn_Tp4MINVrKfo", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108221902828255414479\">Sompong Thai Cooking School</a>"] },
            { photoReference: "AWCwydibcHAAvRtYE_Y7TqAkhHLW_bZ2_U0_d-iQprHSL1HDzV6mc_YylLzotqUFdT55Bh1AC8NMFGjKHjLY4QdreIYC1I9B7iiWVIsvqb4-yy5zAL_vJab9fWeBTkZ1nOf4rr2yPjhZY3oPJGU3hbAUvLWwNGB6IcGgTGFIHnczazgiRvFsDL7K9l9caePgYR55sKZblJHhklZN2cUyKHfDzBxo5EESYuNglflDvuFyjPc1KWwzzx85phl6fwuGjxLy4j9dMx9ttNyKXrkr8Sz31-UlLZ17DSfdFovYUkRBdTMm9qHxxd1aLin6kWemYZWoTl39H7kKAZt7Jf95eyS1O2aRnKanx1-21Cg7QVcOix0qH3vE_xsPygh-Zl6gx0Ri9ZZD_kJLBt2Ir0k7U42Fh4poIK8XvbULuGEgXuK7KYNjJ0DFO7J5WdDO-9BiQw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105763923364285257160\">Nathalie tsi</a>"] },
            { photoReference: "AWCwydh3nD4leaf9wBZUENkphGdK2tYpxFiM_HFIv-zY1eGZnJzX_dCpRgL0wyCgeHLldSaq842qhcySBOxQLstthVqV4m-xZ3dWSdQ2sBEJBII0ezUUQsMbo3WU93pihThlPyZM1Z9MqYZz2-xEKi_KQxLnjJm7ejuYopfr0f_mlbC0Mf6kQoohL1TS6DYKeK3RX6jn5SBs0ZsTNe0e4B-rnfbjVbHzzZYS59-YnfXdJ44j-5prr9RK89BXgqBcpC3rUFQSlgae0Q7yAzma7U6JQZoPhMMEreY2zjrJsg3E_dLoShyweSYU3_nTgz3fr02QnIFNIiEqQBQyvfWsHF4MUXlnPaIH6HlaFjq-eKIPCRHy7UNjntZKvNf-faQtszzQEZJvmQ0nJxi7E3FWYblha9Yz3curnuZit2Qkz0TSb9NBWINJ", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104040761724265592108\">뜌블리</a>"] },
            { photoReference: "AWCwydglG1FOb5tQ53eQo3xeADfjeWG1ThtdxFa0lEoauBj0bIdjaq0sN4qSiWFI1E8nE4FGv6_RpMIQsougrrNvQ5gBquG6Oz1LCKN1wbqNhrJEEOkezMWQH0chs32wHLfOyVLMkGXoOpjiN1TdZL4mCG1MFy9cNej9tXTBrIpchwFAVgkYc712B9-TM6plILQjf58BHsjce5ryMWP_RlSvaoqxPqb9gzzycLz07waRDtlQ1BUgpjDuq2LIE6Zq6hluvqXGoWUyC-nuHuVRjd3NQ2x1qKG7FDW4XJApg_PjxMz1n64NwPGtDx8KMtnJ-ohjS3aEKTVBRltvqc4P3-FMwTMkz7V5FKuWM9YzyL9772SK5mKq3nNNtCU5tvIEtaqm36Zu3-4yJOdNFZqc_g0DPfVMur9kOLWBUdDzNS7gin5dwG-ayQA2QDvvK5NDTscW", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100220955741629206465\">María Blanco Garrido</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰가 증명하는 즐거운 요리 체험 공간입니다.",
        updatedAt: "2026-08-12",
        highlights: ["친절하고 재미있는 강사진", "맛있는 음식 제공", "흥미로운 수업 내용"],
        tips: ["매일 밤 진행되는 수업을 추천합니다"],
        hours: "월요일: 오전 9:00 ~ 오후 8:30; 화요일: 오전 9:00 ~ 오후 8:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2, 6-2/7 Si Lom soi 13, Si Lom, Khet Bang Rak, Krung Thep Maha Nakhon 10500 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.sompongthaicookingschool.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8671363061480875957", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%9C%ED%90%81+%ED%83%80%EC%9D%B4+%EC%BF%A0%ED%82%B9+%EC%8A%A4%EC%BF%A8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "House of Taste Thai Cooking School, Sukhumvit 4": {
        photos: [],
        placeId: "ChIJj-u99g-f4jAR7jxddIUq5Hg",
        placePhotos: [
            { photoReference: "AWCwydjaIjFamo6vk1kuGa0AmOmdXdCFvLpe1dfoz8IAj3ML1jTF3fwedNO75Hc_LEf0h3EOdb-Pp6ridOdZchXoVPHAwyMZhkv_wk7TdbX4LpS4xwGw_kY0MjLr5cERofpb2zLfEqqTq2X0oEyzQQ5LHAnBPu0Gbcy3eUuiU8-laC7mq2q-kHnii255R8xUNml7RbrODDFzAj2JdyPTnNj6DV3ZGGN-dxtoY2uf9ajy2At7WBqcCXiUIe960cOdI8RGmk1IRH9vcagkKaHFLyGu7MMg0nS6tmrv_-yNsl4R1_IHjwhEH6S_wHRIzBLH7bdPJKbviM4baHqvZbLsKRfRLUtSaBWZpmfw1M8S4WI9537nZoRCT4m7X7a33_hzmuzeA7ygvZoQE_voWO5zOgLsIJIAMbBZ8oerzKi0hsRmA269MWSYk5AFJwcw6_gH4swc", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112222708593713283389\">House of Taste Thai Cooking School, Sukhumvit 4</a>"] },
            { photoReference: "AWCwydhKdJmEe04K65qJZhOa1thTFldrymAggMilXkk75IxyrE3a4E0Qw9YHRPB_1EJfS1dQ4fcj88-6tlCbTtClmmUdFaOm-RqYj9ELYZuf7UFlpa1u5QKpQpFxJPozPk4hW3xjs-bZjbrYaCYAd_HhXlCJBybbkCCxHCCwegwDttrfHHpK0CtSDC7NB-Sut8ebttsawzTSC9ChQJULCymRirk4VaeNVO6wLBVpWFYi1CznVYZaZHA6sCvJfrVz62_UWA4XSsALse4GNT7lICRNqlmvLgYgE8dvgdNcTTPDGT2GhPUS7m5QaqEq9AdVGRxaEb08veGhJ-RoUArg6gJjB-TZ6GgFk6BY-78k7GWi5cQO8AXacn4dTH4RKS-VRD_6vVu2yR-QBDUBWm16iC6oholv2dA08CD9AHtgtCVHCylFVC9gtiebvDgnsMK4J_n8", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104175695714925387105\">Charnia Rogers</a>"] },
            { photoReference: "AWCwydjsQVbzLuJZV6fJQdWahYSrWTVle-d27UKhli4XFtx3p_ilarKbLEvRBBrzOwquf1m8p-GA8djaOV8ERKE-MfGNISdvNcqOdfsHvHqb50TXFZB5-Rrh3wfL-5Zryvokf1P-hdo510uGCUutHczKE13CmqNHyBeGCtspdq62-dmkjXQyvxmFVfUo4pc8SPE22jWnoLU-hKJOELbPWRTLO6PkQTlBw5gxuDH-LSRZFb2BHcvxx6cvM51-3GBEFv-YBwn_rFlL5AgRLe6JKC2N71OoAGhc-hee2EBi6DP12qn5S_yHJkl7WVoicBLM778D9kwAfow9T8YBtscg_OSAowPPCvIV5ypaA7WZMSrnO6zvVyTXvh-09Zy0dUXtAD3vkBT3guGKN_Dx2W4mGydJFNCP2lX_1C654a5DFiH9nkq9t9yRJGMpUgUIX9tDdQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111319962890058405588\">Oli Carpintero</a>"] },
            { photoReference: "AWCwydh2uYiip0U4uezyziSINKwpCR_8SmUAQ0JGlcSSisJRXDJQ9eUBr0mH5a1UphlSNOZdaUi0aeA44tHG-Tu2-ea04uRFfcwYdlJzVFxHCYJKnqPC_7nMf0NTkSkX-4JXpAlWIyPfOLwZoQFs8BMhbBoe6_zgnpMjbGRX8KnaDMuNW_vgucBa0ZKDmHQ_4yqVBFxzzy73uCiF94CfSueEwnFo8mS6Z3Wua61dgCAco8qCxvLPGmFLY5LIgOeldznuhQjLKbDybMWRhnMfGR0a3o2qa9i37tgJT7DuP7gQpZCBlDwbnzrjUYbnA_ef0iYrqXFHZElafw_Rzdq3viFvdbaXBxz-ohMaQwVQXUgQKs3IPlC1r82N9FmH_0oY572sbsDzRAZejOQ54-fWmmKf4Sxxc23d6dZPSfrF3MdroExg98lKjwD1HM-vYjKxtaL6", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115389588155655112985\">Manar Alteneiji</a>"] },
            { photoReference: "AWCwydhWtuZ6y25gPgi-j6r9hKDh_P9nsbR5VbIeivXeEUxFfOGx7CfeQcmQfPGu-XRYabTWbO_vjmYJMT_MT9dMrJEBSetow-A7CHGKZhaSZgacp0E1pqP6eCTHr_YC2GTjKKZH7zSHl0HtP1WQE6P6IrD0DpBefsDfFXoHgY2aDu7psxgkw80MEZIFKuzCvWT8zxXy15eWZVIlF6552TbOs7sVhUaKIbUE5KjcaGFE6yjKcjk5E2-Q5Idz6egj0ns9HAo7wo7HDHJS2pvyBblxMhTk3jEzcWWVDl9OSd42PZRuaJ2cN9xHbP-ws7jXHDqvnIwWfZyZSsZuC41rpKSZfeHsBvZOe0DOrSyZ7kHXa3tj1kHd90vwk2fYpXr5A1CZ8sERFQQq5-SiEjTwRldiUy1SroWOR0LZr6GGR2xmkisM2XxIIUO-sJP3OP8xkr_b", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109420294069046606114\">Shivam Patel</a>"] }
        ],
        summary: "에너지 넘치는 강사와 맛있는 태국 음식을 즐길 수 있는 최고의 활동입니다.",
        updatedAt: "2026-08-12",
        highlights: ["친절하고 재미있는 가이드", "맛있는 태국 음식", "에너지 넘치는 강사"],
        tips: ["태국 음식에 대해 배울 수 있는 기회", "강사의 열정적인 수업 참여"],
        hours: "월요일: 오전 8:30 ~ 오후 9:00; 화요일: 오전 8:30 ~ 오후 9:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "147/4, Sukhumvit 4, ซอย สมาหาร แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.houseoftastecooking.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8711134331912666350", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=House+of+Taste+Thai+Cooking+School%2C+Sukhumvit+4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Tingly Thai Cooking School Bangkok": {
        photos: [],
        placeId: "ChIJ25g-hISZ4jARhRtwhsfC4HM",
        placePhotos: [
            { photoReference: "AWCwydgXRw25X9WaXz6WFLzMqupnURAGc8HiZEiWo99RGZfpqNapYW-_rL8eNwidSpTa-0PB3UByNbhyi0BHHoLt4sTBqxDeEhNpvHDXfSKe-c27HgtmHrMNupNHyCq6fElkkTDumTHuZWedyLDNVSMBukCCPzSOBizURwMUtvwXLCBI4dh8ottimr8A_VE7OaWtqHkOej5bzM-rXkqsflbXouHzIdxb_ePHnWXl-nS9I9bD_f_cVI82C6fhoytczpz3Tn6OU5XyFMNJ9dsfAkYsgkalN1DNZmAPa9zd0WX_aTSy9B5vAx9Y89ypn0RWIYpLfFkJLN_HBowiEfCLNvSzQGENW2kHDOEPwIirzgtbenf9GNd3udB_0aTQrMk1dZL-JuBPeglcnbMkr3jZhLBmbfA0g0VJbzOfzJYzEyh3FME", width: 2048, height: 1153, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115892979234629440600\">Tingly Thai Cooking School Bangkok</a>"] },
            { photoReference: "AWCwydj1hohipEEjW312bfs7nFHuEntZf5J3OHA3yxkbbPlQDulkiYttRZyWUqcRnKFzhdoOOMDruM9yY6zxSSvhaRxKNmxtfOUwY6axJoKdyaheoG98Cx5ZaEKXb0nhaL6DxHMws1gp9ZoNv_yu43RwRjlmJDSzVCkJzv9g-Dt4JifaZj0lLpFged6XkWQCoRU5y7qUEkL5mWFbAcYk2nhNCDZ3MEu7x1gZqq6SqzddbGOALCEn-Au8_bYCBiki6kuYXghg5OFPe8vjQ_sh6LB-rgM_m_EfwTkASKWH7BG4rp6aukr5YwTKii57fAEtkaEGwKnv3phY7hDYqnxrEHAOnHqzOFEzB6ujIy8HX7F49NsE62OwIu-XF4PegpcHjMCu8tIZNIleT_tn5-v5Ou32feSGp9bmIS8m7eadkJSx28IK2i1vCmoqvA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112483492466049879536\">nathan bailey</a>"] },
            { photoReference: "AWCwydh1YswLcG0BGPo_iJT4orhuQ9IM7TlXbNETqqmNbDCkTlU2chEAxIE3GUTV4wdWM7kgsus7Wcyj7rSqZkjEpW4CJJOH7cfU5ogwHIN7Z-Q0mIMAryX0Kr4V53hXTMpHQ_OpXjhTj6HZkpceLA4jo2wgL3_XUJpCcxr_xshk9pd4wpqu6yHdTx36plclqMb3wnnSk5oeRDBjwOocOANuhzURdCCMSnkDPaWdKnpBw2cNKWH8D9AYnBq_6nUeo4_GbUKOi7marIrmrEw96jSamNCqUmC4JJXQIgC_IYp1yT9tkVoloFZY-ussKK1HwmMKGN1fhTX66XRT0d-woa5P17Ct8yygyJx0WZHLeKnfow3RudT8ncNqYdVXhV1c98URu3fJZO01cTZ7iUA0ijYB_N1x6WVQD4A81r2gOjZd_8Gm9P8Faku7U9LUj6dhhjZv", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112353846866581082106\">张竹</a>"] },
            { photoReference: "AWCwydibgDmHVuUgpQOVuoLUUnXdTzYHz1mjDjy_lVs8QaAE3Eb1peh5J1eW8Z6dgMPD5eELfbWb-dwo-Hgee5Uln_XJllj2XyixoIaNRFhOc1tfJHpKAZecw7traIebEnH-gy2WATSBIPNgpGyXZaf-y7XTM8e3GCe43Kc0yhZBeCT1hKQWTc0o32WKLFGZqOW26DJFhsqUeES2j0pZVmmcMI-dQ70sEwXjt_GIbIs55PwRiPohiq0rTV-qjLE-Yb7XYaZAKupPXymEMjyiRM4cSCKOIAfsIdmoOLmjK3Rrs6RLZqKEhpSCgvdIKRWKmjqroNdkvIWPI0BKRn_jNVohGxcJFv8r9pk305W_ad4QLZqBQPxRegvE7M_d7z3I84wcabnmOwWwQMKrSmBnSmM495Jw6zfv9ZePhxKDCJaMQFq4MZW73epiXepW5J7_Qkrc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102814356921010877406\">Javid Abdullayev</a>"] },
            { photoReference: "AWCwydgKDkvsn_Un7JbDcrN-846g_0xskYmx4SmPU2ODu4--Pp5QHjYuh7Rb7b-G2ZtLrjesrtMJWWZF-D25F_ixBhwbENByhkygdmaGUwj6m8eyCdC12HMonWHx6kZZEBkyRRTSpduRDs7ixQiXVoHI_TkggAgbVEZ_oBvK5Q85OjkxE8MKQ4gvyQl-EgtjvOog2GlRexhblH4piJ2Svum_9eFHut3TUZ23p9J3-CtfUKhzA9yEoVLAOXzPX5-5B8eE86d5vYAr2XTLNuEGc-ulUjK1RV0ufzG-8lxPqvv7mNjtuIMUd8SRz407NiCF3XH8IF1u1kLPpOlsh0Kn1HrCYC618sYD8hi7RymrsRqSV7KOiZv5-LAskEB6sDnpP69HZw8Uaz8jsthqhkYtc-xIz0Jy6EchHq0Djpznmuj1oCjeoWE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103674208236131240900\">Godfrey Ma</a>"] }
        ],
        summary: "전문적인 지도 아래 알레르기 맞춤형 식단까지 가능한 고품격 태국 요리 체험입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 식재료 직접 선택", "알레르기 및 셀리악병 대응 가능", "전문 강사의 친절한 지도"],
        tips: ["알레르기가 있는 경우 미리 요청하여 맞춤형 수업을 즐기세요", "직접 재료를 고르는 과정을 통해 요리의 즐거움을 느껴보세요"],
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Suriyawong 17/1 Soi Prachum, Khwaeng Suriya Wong, Khet Bang Rak, Krung Thep Maha Nakhon 10500 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.tinglythaicookingschool.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8349887871354674053", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Tingly+Thai+Cooking+School+Bangkok+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "White Lotus Thai Cooking and Flower Garland Class in Bangkok": {
        photos: [],
        placeId: "ChIJE2p4AReZ4jARY4KCfKUGRPk",
        placePhotos: [
            { photoReference: "AWCwydi_bppaueafANsBOcLK0XoJr5ZKu3BK0WlwNXEiudd43wynGsyHTTOv7qputZwp4oChSrf9hSJHUOk07qxTn64RZbRo5895LM6srxflGFMb3yYP3fiPBRb6no265emPHVCeDgVP1VJWDLDZNPMoAVhSKR3W0YBiBDGi-SWtN6utStTWyDHCL_vNyvtnFDii4G4SgQONMrjccmqknUlqVflgw7pQfLlk8UoQZLQ9o_-1t9olJ9zdJGexLvmcaERbKcNj7x1oLMQEc2NjhoX_Mma5H5R7u6yhYbULX7bq7snSGNz8_e2hi2JMEOIkX0RLwcwmhC-bQLHV3tLVMF0yL9qukJ3Lu6g3TaojFXM00-DktBBZeLt4YoOzDkgW9lklF9gIZe-Agji2G-h7xrgbehMsojenKeeh-FOG1gMOtNQKzbb8oKA10f-L4zVF-hqV", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104828859823464833205\">Pierre Rouchaleon</a>"] },
            { photoReference: "AWCwydjinAQJHHWkcBemZ7xbl3uu3bzsLl1HT1TsCox--JfN9JiKiRJqlBu3XTN8-uwRPWAo1LXLOhZDQhQdVnrP_9o_RmjhhA6PjFQizSx7Wvu6JoD1qL96dXvl4Z40O1aH-I046FWDVCSYM5Bq6IylJr-xI9P7RACYvYH4z4ssTLWyWJjK2gXNG0uizDBjFuxktPB5pG3p_gVlfPO-qskbqEOYzPuHP2zy8YILlnPWXA-yIMo5WZEp6JHpX3nn7gzkFvhkEiL97b1bQe5ylnoJ2pOZ4z-E-hF_2fFRLpjXKUgIdsHBmGRyorYEmpehsDreDExo8hrqUHntuqHw6mPJAQWc9dlnR7rfruexENB3PWyCTFsawBMMO0yyMoZHoSHBcLFeSFmZsxZl-VhqR5AnU5-JzvUEOuI8-ZTEYb20cQRIBqoqU230hr_3tAUhTg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106642030664323687351\">valeria ballarin</a>"] },
            { photoReference: "AWCwydjin2gM-7RT_YPXUl8ajvHT04wN2ACObwpf2qmyzDVdkCVtcYX4veOm1SRc0-YEH7B_u6EFJI9Z7m7hYWl-2Li5UlpWcUqlUpuPt3JOQRlocwSbEBzyTltfjRCpRL5H5MK-7lM696FYN8dP0tNjAQP9fabVQylNJ7NohkATqsRdIfZD9db5V-9aQmdIDn1pVPALpFf056MN1iT74GALE_Sea0_zBfaR1eoHIUmT_K8ztInAdd2jy0rocIfrA2eKWtuGor2iILKzKpiIp95c2UpbK3AmlaTooTXtAp5IhIdna-xjwgG8kAdZqpAqh3NRGBB45QgBrdVfx1AuTmwgy6GSpl4q94U8ALZNA0RYHo57ffZRHZnquzATU8pibmbXl0re_Hn1BG460AAxdejX-AkkputuCRTXOBiE1TNdw07edQx_kAAKLgGJ7SkVsYeH", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102802549825911617013\">Spaghetti Aldente</a>"] },
            { photoReference: "AWCwydhlZSnY8XnFaQdH0L_cIq4X62ih2DjmMQtUdRe6UTXyqdyVs5ofdpSvJeJ5mZd1ZsaPdUN87czpwjT4sHYXYZiNmkcCBdaHFoXgN_22A2LK5lzqChi2qInsterDwvK-4UNlWsdakZcPHAGW81i5esyIJ13kYFPXMgZFzl_CMdODznFBRgy-oODya6kZljYGaENIQB5MaEq-IFoP3jAhs9hvL1FfByFQTIS5TvxHB19NOnW51LCSmRfSR93Db7zERDz4M7lPVwKdRd5ifL_slRQZjFM8FAYl2KgbwALHonpCGMUnhVanZnEEwPabzCMiDf44Zy3D9wHzgggKh6ffvHMKo26U3nMHhRD_qigNprwW0YmzKlHacJTjwgSv_Tm3fIesbAcOAPtVYfEVDWzgBCOdOW70EXCcvM2zCsFyvWDfRIYwWyUeLeImRJodMA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106734992559114051787\">John R</a>"] },
            { photoReference: "AWCwydiz8nTfaiwrQusHRqETmfvvMlhkIy38WdpDunn8X_Hd7vitr2FoAp_r14HN-Vabf4QPYVNn_P5pYp8IH4ghn0e0f26W5ZgrfjUJmzcVribinGCM1gW6YDJRwbflXUdPsiJcU4VHXHNLk85d_lZePZt_HFuevcAe9lgIJjRikiP6chENvrzIAcPZWKt1ezrO5jPG9c7XfJwGrVx-IXto6Ks2oCbhGGmKD8-Ypo-_J042rIozk14f7fma7X_mZM23ru3t4SUvOIcCla-4XvOE7dc1K6B6xSkfUVRKTQLekUntzLcs5hYFXDoU5FGt0bZdI2Z41GY2q78PQwvdQLfwRNm6yBnuuGAGe5vHb-jcvrTybTxfud4AA_oHw-d3w-IGetLB1R0UX1tgkOW-nHYccxXkITZfyq-uKTpENmcQlZCb2KuClQeWbFowN-mHOA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110119530158163900747\">Stephen Chua</a>"] }
        ],
        summary: "시장 재료 구매부터 요리 완성까지 즐기는 태국 요리 클래스입니다.",
        updatedAt: "2026-08-12",
        highlights: ["현지 시장 재료 구매", "태국 대표 요리 4종 조리", "열정적인 강사진", "깔끔하고 맛있는 음식"],
        tips: ["아침 시장 투어가 포함되어 있습니다", "똠얌꿍, 팟타이 등 다양한 메뉴를 배울 수 있습니다"],
        hours: "월요일: 오전 8:30 ~ 오후 9:00; 화요일: 오전 8:30 ~ 오후 9:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Pak Klong Talad, ชั้นที่ 2 390/18 Thanon Ban Mo, Khwaeng Wang Burapha Phirom, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://lotusthai3.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17961488521688679011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=White+Lotus+Thai+Cooking+and+Flower+Garland+Class+in+Bangkok+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "실롬타이쿠킹클래스": {
        photos: [],
        placeId: "ChIJn-AoPI-Z4jARtt9oYpx6AXE",
        placePhotos: [
            { photoReference: "AWCwydhTkmvwX-veJgc2ONCkKhNJu6FIMAfKExx-0BHgyRJu_d3J_IsI_guW0sWhqvDSX_Zi-BlCe0bvs7jfYmfwyD-wnc_wJaIzl4vmez7q1ScAjduWKgaqeC1NWHpshINk9cWFDWVl7uzPYON9neo5BdPGJBeDPUNgE8inJqY9lLaJHeHBwHMIgSnoE8PViyH2OmnT16jUn0s5_7EFh97byA9MNyghgu02gSqHkj4owfzpn76ZIrJx4WlZnDjPbYFKUa_XLO-HQtQfd4WvjjjD0BTbqtwm-36bgh30qcFeJ-xwv_MPXR3HoUJXqsnaATblhnUAX1F1--ink2UKQQ53Oq1w7WY3cmQReEGWrhv6VKUFq8nrn7wOAm-L04j_fkusjgnh541kLUwDOSDRuCIBovaQpSDF0ZxmItMKfEM1WfcpaWYt", width: 640, height: 359, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116358421534887738544\">Silom Thai Cooking School</a>"] },
            { photoReference: "AWCwydjZLtcwPNHTdUd4yi3H9HwIZ0u4jQpE0Gb8qNXDOEpn9qXt54IUcwjRxUYK_xaUSB2wCkqaEZ9GHX_Ao4wWnevph5fWqEltCxnZBGX45tNLMHee_hRNJKNbCDA_K0_jlNy2HBIxri8alDJUiz_FM3s_YCet_cIFjahXnAih_r5q8y0ySZfd3M5qXdzYa9l2KhfLYFawFcy-Qvo6_IJV-wAgO2mmA0hTWu3kqnBgXMEU2QVTXvMK8tqVw3jyhAU5yJr6GngtswmZiR5eSZv49xcmdR8DwtnDJt03VhBPKcrEJ4CA3EW86-7dpZfLoWXIvnZwY3ghpKZEJ2FsUg8X0afOfA4qZXQi0HSxNG1nENGThE8qZllWqb60B8ZwANQG6oGL3s057EFJh-wR-0TZ4Nec-5t82sX6XyTPLKL1Am8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115674050904072947701\">Youwei Teng</a>"] },
            { photoReference: "AWCwydhIj1fpYKAyPeoD8R7gCdy05JSpgWQ4u3on0K-rpgyS3tndnS_V7mYqPTJk3luNqieZs4Fhzg5JUnzb5DOMpUhUp-rV3gkbD6FUHlHwPs3Szjcdzik-OCrh90CQEj5yLNQ7OahdSS09EUYxLIxJSzC_9SFoHgZAG-j0S944vRgFaHYvHRSMFdhHDBcpVN5YIeAE22DW5ylry7xVrWBbMCOR4n8YiU5YD7TsbgZz5hirlMO2Q1flOeCf9IcWaX00RdkPAFnDsjYx7Ps7_3wl4px_sLg5z4mKfkZWszy7dNSl1JzsJ00TAhXsWF598_AS51Oo3gOn_HyCi4C1cOCMePsAWtb3AVIsfCMAaxrRaRKZ_4YutUQ0mHNMJmatOe01ZfeIo6xIfLxtQQu7xpgRYyL7IVMjHrDollqabX2QLP1CKA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103837016195844902067\">김현빈</a>"] },
            { photoReference: "AWCwydiU5ez3qShYCSJ2G_GfpTRFY7rz19yRgunwT08mEu_EgJerKWvQHlvjN4ZApJSkFTpXJO8Zwb9780k2e0YiDR2JsbeAehiBoKzN1PUPIkaYKwB79tBeFNyOllx43_qit1Zw8gv5gk63k9doMDtu6LQWbyHq4Eu9Pdkv96ZkS0V7_eo5m-c6MzTPo7Hu7ezElU-EITO-8ecowmlxzUmwbEAsg10x_lgZldjBGkRK4muxxsSeW56Y4psa2N5RM6mfXbNdUPP8-DlpAcqSEkOzfmOUfWzaUCFEQkV5fuLh4vkzl7JpWN2za3-XOWM0g0dcu_YayyRj5mU_EVBSDwu7-_Nbp-di4kXeG7FWuo1NqczKjgrQrlimV88NDHcxNj1kmJg_TyBr7P5mmtoCumcyQI_oLLIzFl8c6n35P2_bhoQ", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105472589096454516548\">Raluca Gavrila</a>"] },
            { photoReference: "AWCwydiIYae5pvmTThExEMokkzd2b1J0SZj7nCPl4-p1w2f2rrLCmQO1fhmS6DGhS0czgNeklUuuhJkhdaMIw_Ax_63R-_2dKuqHs-aOwnADYVKPh1reS-0YiN-d_UtK92ebzGqsy01aBt1ihcsmX_s72rtlMgbNlTW81h6e6wB5a5YuPe_f7dkgEFAZeAT4eM6ad-K1DaHaaisS5n8DXIkfu2x2GKk3Pk5mOPgwpe21HWOA6KgSdPfoNt1tdjGcwJXFLJPOF4zkb5zdnjwnuzNBrw2mKskyqEAtnTtFx4lgO1MDlSU7JblQUIAjdpJ2YyhUxY4-N59P02QPNfxyzO5ZCgVoutFaDbjxDOH9ofNd_3wuaf_4uLahhwXlGUTcHX9HdNPD6vAHv93VlWKWCDUKlLIrnub-IcmPlTKOfAbVatBsA8e7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107267837311844825374\">Chaehyeok Lim</a>"] }
        ],
        summary: "친절한 직원들이 최고의 편안함을 제공하는 검증된 장소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["친절한 직원", "혼자 여행객에게 최적화된 편안함"],
        tips: ["혼자 방문해도 부담 없이 이용 가능합니다"],
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "เลขที่ 6/14 Decho Rd, Khwaeng Suriya Wong, Khet Bang Rak, Krung Thep Maha Nakhon 10500 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.silomthaicooking.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8142924413347094454", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A4%EB%A1%AC%ED%83%80%EC%9D%B4%EC%BF%A0%ED%82%B9%ED%81%B4%EB%9E%98%EC%8A%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "방콕 카바레 칼립소 쇼": {
        photos: [],
        placeId: "ChIJC_6rVr-Y4jARvCOE1WrWCKU",
        placePhotos: [
            { photoReference: "AWCwydj4IoA1-NoRA_uc0rTXOux3JYrmB0U4n7sfKxFnPiJV3Plpy6KoP7sHJtkBA_JZ-U0ZC1AJa67X17zLGc9TTVpNOVLYbiHKdVfvFAV4zFJzhA8vsLhpfWWJ06sJ7t1Rx5kXLOnRRxCu7npKw7x8TNr8jPbPk12n1_Q6Bfce83vxM27hJM6Ht_o2DyZcRU8eviL8wEH_HK0XJjFoHWlncRvScnBhx33mOjO777QK0jVKR-h4T434PhwrPQ5MlqEFEEsbrqco9kKZcjCcqPwZ6T6A665KWWAdAC527sIxQ-ucPZAiljxOpFB7-jtxvCbYXSZ6Tp7ye4dDwIx5rvBKdmKgwNwJlGsgcsM3Ybr4vmvmiYbfRbu3R9oUiiuEzhGAJBWEfKtaeJqfz4w_m5gCnpI9_aQ0K4mgloEKE7P_Qia9WQ", width: 750, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117589214298690899426\">Aakash Sharma</a>"] },
            { photoReference: "AWCwydgiqchRwJdaSgtlVX90OvEyCCEbMTn9lu--jk0MVycsYrA0cLXWHTBcpkF8lgJK3MmdW5GI9VHwMGDEcKZ3DgSdm8ZqY7Bo5jfq_Dng53S3l8xpvxI2YrsXr0nk2PnCi5kUT1IBPg_tA4GWQ94UXhakC9zqarZXb79aW5GkwZ1-H1IdwVjeDndimLHEAW35db_-OcuIA4nuRGb7WtoiVyFudHck4-ReosL8tk4HZ6SIh64KOrRgFwmKFHuNNzw90_Dg5WXKxyrh5BW7UVY-Jxmm3WjVTC-B8FtMJz61qPFlVZW1cmHvyyuKpMo88FtaoxmeeNBDWvJQJlNQRrd_CNOkRwxGdoHFhSExBrdAtU-LBa9ra68kGLF2mXtWKWlSenHwU5dTGFLVqCbSvE9qwVeVTx_i58QCI-TD9LGIS_P3qQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112411343963568940525\">Christa</a>"] },
            { photoReference: "AWCwydhUzCZxVzQrDzuRN20_BQqBGzo0crrtL5F7d1hehsCGn_tL0XeCYr0nTr1k7S4RK1c-N5uAnkhasClDy2ik3Nv3Qvr-wllXqBfmOv3eeoel33wt4kUVso02bXGJKWzDOIFAcohU6EA-3z3LIuHm7JHdFyAVIGFweteHxOeFpiQzgUoZoCzZrKSazrud17uOfmchJfBYwPURUQCvMRCoPw3KSKSt991a4bKnx3viLizzXdYSpjeiHsQESprQ4K4Qw6dSEGXH9p9CN24scCGxZNcXFkMwtem9ixsb_W4zCxfOPTAs3GjZy0BqzMQ-DFWz5KqQ6KxE1tGRYmfESdPlN2pg43qfMisL52Shbwr9ppt4iWJDQiRTAi3Ky-D5VrCuwvhbstO59Q8Yu0qMQ4x7RfHekTMSaCnWNgS6j-otgm22ZHtthztmdXoIY_OvHA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106330727060652516557\">B A</a>"] },
            { photoReference: "AWCwydjWKlLEYdkGx6xNU6tNBXNrIfLHadZtsbEXN-zG6rYnbY10BXIbuwZXxMpqMSJZO19dD6SxdQCNMyJYS2iJuJi1to71r5XoROdPQCpbMz7dZxoIei0PbqQMi1FYv-P3YI0LUETcZj6C72-rnX1cjG0RPy8H5L8h6DiThQYgRUoGqQusd4xRSUuSFZ7pWyhULFpWFGNwj5wMwMJZEhJdej8S1tf5QQipd8JPF5kDh8kdB8dqm-CsdzrzplNWK3Ygr62Y7ZCI1jhQfDmhju5Q8cxhC5GdA6IhiIJWVwQcsSRxwSNgdSUNxr7yAfXLGRNnHISjfNxyF5WJCNPaH2412e6GdgZZ-G0xh8MBAi3V_E7qlXLAThi4r5udAS-OUMq3_MI-OncB0o3Sw4iCd_Tlgy756Lx0rTVzrIxKkVwXqFobYVr93X7xU4SCl6x7iuBx", width: 4782, height: 3290, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105536450950843905978\">Steve Long</a>"] },
            { photoReference: "AWCwydgBRl6TAwAsqtKp_RmXAgnKIY432LKqLXJY2XHTCFrKLdwjWWhtdL9MMg1V1-HVBYWzVDN9RO1JGYXz0l1p0Zy5CbbUtAkAazrDafHKSxMMIhPenXVArihwJUsj8QY1n180_PxXgOqM3kwRA41aY1RSjt4fezfMPvbFAhbRtTvV9xhnK_kn4EKWRFbSi8QEV4FZzVBTl3OGoS1Wp5qyP8kcWet7BMQ9bX04XgzUOeKKRWeCpQ8niQWBaEpdnK-cF2gXSOkDUAS0T4CWrwz4y9jBJiv0qljBiS_HbGJFLFl-57xeB6RVWdlKuWxuy-8U5oyMjXbJOcGZEkJrKepNqYX8qoY84AhrPb57J5GE88RDAgNjGEBvP8fV4uzKIAz0LUKPVAOBgrEj4inGRuBJQsWQ1NyBgnm5f_zKJiagg07ZgQ", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112337513787425164537\">유우종 (이과형)</a>"] }
        ],
        summary: "전문 공연가들이 펼치는 화려하고 즐거운 볼리우드 스타일 쇼입니다.",
        updatedAt: "2026-08-12",
        highlights: ["환상적인 의상", "볼리우드 요소 접목", "전문적인 공연", "모두를 위한 즐거움"],
        tips: ["볼리우드 스타일의 화려한 의상을 감상하세요", "방콕 여행 시 필수 방문 코스로 추천합니다"],
        hours: "월요일: 오전 9:00 ~ 오후 9:30; 화요일: 오전 9:00 ~ 오후 9:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2194 ถ. เจริญกรุง Khwaeng Wat Phraya Krai, Khet Bang Kho Laem, Krung Thep Maha Nakhon 10120 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://calypsocabaret.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11891990570408879036", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%A9%EC%BD%95+%EC%B9%B4%EB%B0%94%EB%A0%88+%EC%B9%BC%EB%A6%BD%EC%86%8C+%EC%87%BC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "쌀라 찰럼끄룽 왕립극장": {
        photos: [],
        placeId: "ChIJeR-fcxqZ4jARO_rS9c-yJ_0",
        placePhotos: [
            { photoReference: "AWCwydh4k2ztclolklZ1efhtkEr3joQS5WMQw18o6FXFyl-P5LdnmB4XAW57JotccH-Hl2ctGZrVYCrA5Ptm5RrryJm_GknFzkJc9wSwHpB9TpUu01Vw4OSsdAcaMMKxvAdG95rsf2edjDhsi_8TbEKjRvOC5HmUX4Q8oCbw-CByaQjExvPlyfcnRHyIxojEUzCZq-3iCselDebtTvJGwSO550tmfWmsvJgWZJMLOPw01iMZqiCGTI46j3obKNxAvTc_Uefk236asziuabk7nUHsL8QXAkThjbs3PBq-gxTc8B13iZBOGJawhQPotSljKivewEpmRLuPLO-qj5jPwF1tSNGhV0k_2LIgzwP-99fC9pEKDdraxBInasn5-ndoN7B6igRKpo-JDgsSEx02r7x2uu6UCBO2bSns2dF10Xpze9U6y539", width: 3000, height: 2314, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115728372314224986331\">Aey SrirathSomsawat</a>"] },
            { photoReference: "AWCwydhVW-CjIJGk3we2gvDdlL_qi4de9huq2SnW-ZJzR1Ozp75z1BW-tVWwQQKaGgGY7upd2XzS9qnL12xJ-9j8uxvr33yob9PRFKy67-fjQ5tmMCUbV6Jg9kVIYakeZen8kj3J_gufj-TcymLDjpM9Pb7H3q-Uboc4YvLgWYzk9pOKaUqRaJ1Fu4cv7X2lGE09HQ_xVgvcPbD-ZmxerDT3lhioVgKROibtOhaqCVM_3jSsvk6r__u2D-i8B_dGJZ-Ep2qxRFahelHUKme8_NWJM2_kmre_XYMAD2tpbcidkTHclug1ufIBr8k-fpBUWmSYr6kVY1qaKuC_iVYXXBUuWsOytgUtqQkaQDTr_RPUX-WdddAismT7d5Pfpufd80XXKCtmi1gzZP1Jo302KbgbRsTQ8cwKe09FD4ELs0bM2iwIRso", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105740770023487636796\">Lisa Baker</a>"] },
            { photoReference: "AWCwydizEraapgnE8Jl8opiSj1nSa2ZiL1G6gNubOXBZKzdl4FnDHx4gw4f6GKzp9GAuLjQWwM3FZ6yh_mpsmFjNRlZHf6aa98UMXIZvol1zDCWdUQPBVf79dNDlAHLTx5tr3m_Ag8I9UAh5qmH27CNrjg6WAfjwWjzdVt_ZXLUYZNd5zo6Rs_GjBrX8hxqeyWXzk5m5rSW-_rbR-5zBZsSyh_wZDHW72Gl9asa0ntQ0tspcHEDPv026melHIH2yPpewDwEWCRfWhNktTzd6cnXixC_Q5kkWEMwmC5x0vNXsgDMN2ob21C8ZmhewFTyM9PwJLFsJIPhyBfr_YQ36EWhLccIJStPDn5YAF870UlYwUFscPx6rhkJC1X8PtGbS1_2NvWAVIeLTZLlkaty73dwHzjQylAprRvi-uzc1wFzLsBHw3A", width: 807, height: 605, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116311997732393207918\">Himapan</a>"] },
            { photoReference: "AWCwydjvu6ZlDg7zwGmpX9kAn4JzpYfLeecs2vSB4MtfWVtYQMxjIWcSXDtqxjeMMCERo__oV5s84ihwaiNacy1f9IuGmnQSRuwh7lLDHFpY27BKNZDhMigJuy_Z050whan5aeCnwa-YncGii7q8q7-0sflHC84EJjsQb0O_6Hp53BoTbVh7L6aGeLKQbfIfMLPfFFas7rZcRFbk4CX6zkauNEGaxvIhaPJXPJM1vcoaLYhvAyqotpwB5TNLCS0Du9Hptbk0c8_EI6RhKJ2mLT4HCTE7i0hdBd_TL32TyrV8HNRrW7EHHexDynNFpafVf5-vyf_dmhLcSaQk3lP6sZJaOk9cfVlhgJ-XRESwp3kEWh4Sl-z5uK2MDvS65nProUBEUw_WOJ0DAz-JvKF3vRCH8ifhXJL1NWamHhe2kPUPdDm7jkDkEAF7IwQGZ2z8KA", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109076098331425505681\">Phach Tang</a>"] },
            { photoReference: "AWCwydg078Ue3Qb8XwSx6xeRxsu_KIZ8amzC_mSdk2EaeFgaLd_NQatPNHYPFB5zlmECIyF8gGMgwhVSJ0cMvoVBWPrzmB-fg2Ol1Swe9bImHGkEoh5-anSTU85ht-1GFn6_ZWHJvzi5UlKzE5MdVCYTJk3dQAU4f4JNujwIjuQTpV664ZqmN231HzV7-NrXpzGv9JnepzC9hRfNs79bnc6WVBbsBCjJC6bUNyzLfaYGfO1wy8ZxBtq3pT9GbZMugqRt0PLIglvJgkz96_GhDImUTCch7HnTttpJ7AKCHDdxQ9nW650DGKX_f7JbYUC4IUkolSgXsLE9A7dqI8vr706WaqCUELKmKaFMIWPOV39IyWjnrKx8vUnP-b3yIG5a1r-k7_Yz_82m37nykSWOar9YYPc2mHFb_afb1Y67R1FwPwwS_5ozMmm1dQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108400904194768016223\">Unna Channel</a>"] }
        ],
        summary: "3,500개 이상의 리뷰와 높은 평점을 보유한 방콕의 대표적인 공연장입니다.",
        updatedAt: "2026-08-12",
        highlights: ["웅장한 무대와 음향", "화려한 의상"],
        tips: ["언어별 스토리 구성 차이를 확인하세요"],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "66 ถ. เจริญกรุง Khwaeng Wang Burapha Phirom, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.salachalermkrung.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18241745421939702331", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8C%80%EB%9D%BC+%EC%B0%B0%EB%9F%BC%EB%81%84%EB%A3%BD+%EC%99%95%EB%A6%BD%EA%B7%B9%EC%9E%A5+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "국립극장": {
        photos: [],
        placeId: "ChIJ0Y5O1QyZ4jARwRjXvzchHsA",
        placePhotos: [
            { photoReference: "AWCwydgk9v7pyeOjYyOxMmnJRU-E0f5hxeRdxi586jtU0b13bVOJYVM16hXrrBsBJxl_cROso0HAd5DDFlHfojRjilMe2SpcAv4G4hu_cYn1CqKL5nZtjQIAF7mbGax2thZEqEAVdtUYC-Z314F378AaHuhwB9_2OSHNHfZ0_aYCVo5wJrcyx4dkJdp6vOonpMmd5byhF_T23FiOnU5NU4ZAwFRMU0kp4YmxDaj7XeWaAN6wK-IyjJkQUST50sQwWQXSPlml9fNlQRNjaPbO0RAFhOnvClFbuzD7v4n7tMsjc5igRftL76i6ODCI_GTH0H2cr_6iRDqeyIT_JF58Jdv8uyQetDhQ1yQ72NO02-pltcDF4cSsJ1k2BWPxtqnbsdAOO9rspQq9dWD4selmGQVTRbMdLr2Et0mxQrJan5XnKhuGhRK5", width: 3000, height: 2003, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115728372314224986331\">Aey SrirathSomsawat</a>"] },
            { photoReference: "AWCwydg2YEwgZdz2KorWCdmY8BJX7fkvZUgKOgit7U9FFKyOdgz7FZkW-nySlRtLhcLHnEf64hbIJMDY0_ev5Gb12GTZvAY9XTXMgoqSSwgj_wpfcREl4ROfR0EpmAydjkBnEP9c5ZYGqrUkPoIOcUo-KVORpOoLGXcV_k3p9lia-zdL9FDoPCTuvJYrcGTyWBSCQ_QSlvzvPdNB3G8oeaoVOeElLQWeBjdeH5gn3QLJ0UJ4crqIYkLxEZQOsRclxuq_zwxmfLdKglkX0DXPK0WM8HG759LsHV_UEoofwDcbF2VdKkCe4ug9_7cb8Q08t68-bC0fMwjpwKDuyIHLHHaIcB6Yv3kCWJwN8Vbr7fvFpF8JvtzS5ORTCkHkOmlE4WzTQYozKsWpsptzsu0vtvc01RtLnzjYiFY7Hb8RBbbYs5x5Eg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104324476371490691076\">Buffet Chanin</a>"] },
            { photoReference: "AWCwydjaAzv_904rKzEz-vIeKy38buhw0B5DsFJXX5rTJpoGOx4eHk3qNI5Giuw7ZGTZPdTPIM8h0JxxhJL7ieD7QvDJNMjLlBIovT1IhwRfoobS3nNatketwchCDhUpvB1ZdY_4s1Y2jAYuD3NKtNQ4AWPTMBN3UVJI1kfhlWpDHfLlnFjFK-Rbe2f-n3XLe6jKY8iqNU2k3wPahsRuGqGQZEUTaUI0qPpJ2KL0tGeRcaWK_9nlWOuoxBe3yddSiVXRbelm56EHqoIL30JXqdLnNnYv4tB2PaRqX9OEWELB267p05Uf3cTdzkvqQaXwPhKoLC6LX0mhjL3aLtBMNYJBr7t38tH5YOrjHM4aEth4KHVXEv91eVSSu_QAFvKtCXNMEqIR7M_BI5awb8OyFZ-c8HqZfTqYH4HGG110zYVlIWHu2p0", width: 4569, height: 3046, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101796861001134206408\">Darryl Hobbins</a>"] },
            { photoReference: "AWCwydjbdpURiaxz59mPlxW6GY8R7ZEaVQNBjYSBeC_stZfvP_N9wOk2sAExSiIEy78vipsSX8eo6fMpMSpItlFkXrY-6uho7lUJJkp9NXgqQm5zvqs319vuYbacqXUOAKjNj7YVpPo9eYUHVcfI21i6i0500rm5l2lDrhvPsEqwUMH2g41J1IcS9rafzLtC0FZw_uTM4iJAeAcZVUvrg3IBZmNM22GLA5wh-LGiui_20NzwtLqyIG1EArSC9BR9Wfw5FzCgJad6RDHQPnhaf98fr6G7aevpUNm7xqo4FIfh5EC1mxE1b2daWznYftMLha9NxbQKDs7wJ4Gygy2J2is8hbdxZUm6TOMx51ry9vGsbnLS-8zKBhaceEUXlzkBCtKh0X6jMOFD_7EN79ThHBw4sAmi79anmd0lPpeusyGNL23jCtEu", width: 2934, height: 1956, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112738605546046578709\">Yury Kravchuk (OkoGuide)</a>"] },
            { photoReference: "AWCwydj7fo4D5tJrwmo2v2Frhh3_X_SY46QW4Z3JfTFiQav_bYDZeq9ycv_bfaH-JI7MmYUr2Q8HwVziG6H1PeB3fcObqplxgFkmIp45xTdkRsAZsEpHKDlXW6WsoKnUpqLBS2CLzj3p5i7hlmymWwcYiQdcxKyvGCWR5fMw5u6IyduOGpiJ33GnIf1-1qkwVG0sEgGrH3JIoR65bMMfM8HeXHcDq-UI79NIUswzFBzT9PxGpgz-Vq92cwQIFcKeCd7a_MzJUI_9N414Wdq7VPxrk2dv5mypK7t263osBKcVQk0Iq71OmClu-f27cdvWUOazmaXjYOgsAnl5yehd4pdtg404pF0NIpbPqrSLWPRa2JeN1ySfEzhcowJ4iueic-jSMygTeeVPknp2ZVnSBKGlp2691Q54KzcNjuLa7PgbptAOmA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101588444792502134779\">amnaj wongyara</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 매력적인 장소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["아름다운 건물", "철저한 관리", "독특한 개성"],
        tips: ["방문 전 운영 시간을 확인하세요"],
        hours: "월요일: 오전 9:00 ~ 오후 4:00; 화요일: 오전 9:00 ~ 오후 4:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "4 Thanon Rachini, Khwaeng Phra Borom Maha Ratchawang, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://ntt.finearts.go.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13843538827908946113", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AD%EB%A6%BD%EA%B7%B9%EC%9E%A5+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Aksra Theatre": {
        photos: [],
        placeId: "ChIJ33mMA7ee4jARRbcTlCLdEDs",
        placePhotos: [
            { photoReference: "AWCwydhO3RnivmrCcOeHla6bJgjKokE70wHTDDj1EvhhMFsdpfxGhE9or5im4Ru6ybzZRKaWkr2NJCdkqUCP44zcbTCIslbwAiaQcgH6414iNQFeFgv5GkGxsQ9OuTwJH2H3rs3V658258bugkQ2opAqcvk94Y6djxNhHLKdZQ1d_Oy9j1lQohRvifGs9AME-tdB_Vn_DAQFoXPwlR4vtOTUpTUCw-lJIouyom2G7sphMe2yotfohxJ9jPPsxsuGG8SYJObFkKXcf6EYUFJYQL7koVwPNFoz49mjF0_Y8hVXYbkklhWaLBZYL1XB8_tQuUvgQGR40q-dtoNwmI8-RZdA6OyBXgtK843FP72TsRmrEMz2zbXrfmELPRtwlhMrzpGUFGLbiRyHhPcmMxxPJT-9gaPON2HCKAJYtRdIykSvv0gUB_kk", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115728372314224986331\">Aey SrirathSomsawat</a>"] },
            { photoReference: "AWCwydg3rqCNrfpmFoGtETTptxqZn4uXsUvKdLC0zb8DBl3wqVqztOo1tQEzYCGuoxy1LZkmAp3A8h3t2KHKfbpIbvapg8IecPn6BARFquVnUfHsmjbyAhYJnbTeE2p8YXDQ4R7RNxZGQG3MbKQXuZSJNXkq_qKWj5CSNXy09zkCDlOyEoCZoi_67UeeD-xsQxDdeveuB9c7vXziDxpZQWNEQPuT3z2GzCUvaKOzZQTT_xCVLH6BLO3bKaN4FRn4fqrOiNWBjh2FolU3ajik4Ii4AybXGKmDuLrwJoLRDP-ytdgfqfFC12Upd5BVj0Ovn25aINiVdFgz_EELoibpX1kBspa3VV7eVw61YncHlKVSCoxTKSg59nZTbIVRaN7EkyvPMH425n1WP-2APPRVIpM5EFt2SlkcuqpuoVnthDh-z0AV6q3JdmG4hGCj4stWPg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111421658597968477053\">จักรพงษ์ ต่างเมือง</a>"] },
            { photoReference: "AWCwydgcGH5nkzVNXciaTkybJy7vSWNMEkjGv79aw63ev054MgDcxJ55mIHZavyY3KKisjvZB2ylum8C99Y_8hePd3bB_yKWQeQfUvUfHUE4Fcgqjyz466Qm4iObCIHManp2mOTB0qwODxmcKw14G9kswhf4tS0Iq_tb7hZi_XFCMOYa8bPYxqhpcVdKgvef1cCl6YbJug7wp3KuLKJmqr69VmmTh0BWAWlP-rHyGSdIrSnlu-Cn-3fV7C6cBDIfccWOidZRUOZs3TvF9q1OmdWlWp5W5T51dc1DlM2oJpx-zfXHW4Qa1sxLYE0QDAd2F5Ooe7USP9TvKNeOZbORvO9tmKPDUtdAe6knoU2Ws3V4UvpGddQ4IeY2W1akD6udnLNb5TlN3GX_3aW7dLElMEzOCKMk1e_662j4mVdsSQDm2lPx61IF", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115004303638094859180\">by us modeling</a>"] },
            { photoReference: "AWCwydjSH2wNgKDgg8c6u2W4PQeVh5NbR1BO_WRMU6AVS44mEDDuh5pwXcqoyks9SkW4wytdF0WmaJCKiHfHSHF68ljo7FMTIg50omTKCyS11t62jJ8PNT44ri4omi444rmW5TdAxN9b0gvCf6jd7uwMVpKIacNA_H7ozzs7C05khXIxJpASjSOPOu_juucRo8ubBH0UUAQ-MFOjyUtkpdBJrO9OO9GZe8sWcMnRwomCL6edZ1KiCrpHmNx3GxgRVJMVYPlGYteEAgIGxCzbWsjE2_ZuYfs92Mimmx8cbd6nKFpeK9lMEz44u0m7hEB_yL7bXHjV5IQXEhjMiRmP2JRfPJ64Ml2erA6YjDk_1fyLUuBa23fA5nJvurwoc2EsujZOYnnyDmTBeembd0APK3hfJA68XS8Q3nhDddvRQxFZ0vGWgg9p", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110675387454808468772\">Kij Thangs</a>"] },
            { photoReference: "AWCwydj7QHyMts891s0Kf6cVBNp9_hq6QE331CIAlLbtZwYC4jecR1pUpSi2pJIDPCM2_xi4Xt-rb0bhNnEWY1g716l3uDwAlqvagEHcLUNDFfYu6ZQ_TIlPjvnkf5JGe5S6ZB5vS6qA6Y7cvu7mMJH2twLWsPvrRZ9_Lf5J_WZaoaf2GDEoenBKTbGeCJeQOEbR0iIrGYOW_xnUfQbenh4B9QszpRGk1Ig0GTJ8cY77RoK4t35eu-6pj6nku21zBFy5laOmXsw7Q8fqghiOFcSbqzI4Q564Y9RwGXKRCR1ZjHVlUO_kZFW1H_2cS9kYoUl6X8eKoOEm_5Yqnj4A5Vi8xToHOsQit35BJJox653ZvLxi6u_VpiG8gGMWU8rRGcLE9MH7WALvtaG1l9tc_Un3_xdcnR03xsvXCJ-LmLAGlSVwZA", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102504083639173938325\">NJ B</a>"] }
        ],
        summary: "높은 평점과 긍정적인 리뷰를 보유한 인기 명소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["4.7점의 높은 평점", "긍정적인 사용자 리뷰"],
        tips: ["방문 전 운영 시간을 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "8 Thanon Rang Nam, Khwaeng Thanon Phaya Thai, Khet Ratchathewi, Krung Thep Maha Nakhon 10400 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.pullmanbangkokkingpower.com/th/meetings-and-events/aksra-theatre", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4256144788448065349", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Aksra+Theatre+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "SiamPic Hall": {
        photos: [],
        placeId: "ChIJ6RoVE9Ke4jARO0eibuS0dfs",
        placePhotos: [
            { photoReference: "AWCwydhW_AbF_NgLLuqgBEfwMk699Y1A9VMIY0rTOCRVqXyw4Aju8GVNyvxqPeCbKP7RviYy-K4KVSAj009oxu4CVsD_ymxzsT8-lAQIUkqLxOQQ-dVik3dWIrzIVU2ch-DnOVomhN6r61HzShDCIG2RcTscxjOdJ_o5qxjobIlLrO-eBE18LlXuzrxQW-0Fat7Cf72qM6jLLu_jzDyBRvz7QNFVTDGgVCYho2xlXe23NgNwpkRmntsMMb1eEjdL9Yz6hT5yQZEoBpl2I5Cfed3AbnIYwvIwMNOoFa0uWTv4hqClD3a1ZzavNO2c8nS6my2q6x0B2v9mOH16ZSNjtU6M0zqxmTCqugFpGNoACk2quOUIVC00wZDFFA_XFFWK3-n1Vyky_NY3MhkRW4eskD9kYl1vF4YXgCxmterJp08qKaUnnw", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107499459063522625033\">Chairat Wongkitrungruang</a>"] },
            { photoReference: "AWCwydix36aBZgArdu-cFyZ8J9RCczCo-TRAHeNZSUvxQVOQIHIZAI3S-KYS_otTy3BRIYN-XAez0hX3vojTyW9VtkGU4xZV_rWTb_yaSj7HHLht4YNZicQRhqnRI-OZeIK-E-zmAs-jhyN2t-mmZ4HvVXPU56NMSKOe8QjEyj_yzTZkYpdQkV3Rg-OkMOc9iwr7ic75DBEQgZNYhNNp4izstw2mSpLyXSf3mB6qZD5IwOW1c8x6fhwefxxBTipFiPcnht84umXhkxzXWJhhhLUPazzZO6AgNGSva5_jQvi5DEDz3C6e5CoKPqjwpUhSoTc2bUtsEvQ-v0yikY6B2xSbRWEygL2ySBoY37mHMbDwWz6pLiRgD00hL4HM_JESoTorUeTBIoWltQiZKefd-m_CSqJn2BQGCa8B_q6MCVYbuMk_xpbV", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106806103575457667208\">Kritsana Chansathit</a>"] },
            { photoReference: "AWCwydjsn6BTEhKckIgRmKz1RjmDsIZ1Fns3s3Iv5MxAgfzxEuRs0areLP5aoTizFdVSw5vcc_670OMMc2KyeMUJQWlWZC71INWLK76shPOSawvzUoj2xPDPzDnhK6EgodbTDBNw378ZjvyUm1LmhRlzHCTXWKOxWK7uJIpw_ia_-Y_HuZL59LVpwKnwpB-QDeMUxDJ8kOcfTniHE6syCkRi1_dBnq2lXJg5w30biyyzdXeHCrzCSIwzEfgT2i5z1VjQRl2KK70q0YFtoYoTELLF-Tw0bqboKVsdaZF2Z5KH1fKsZ7FbWtWhwhaCBZStk9l1yYlvQ0RtMblsytMnFb8B9UyyXZVg3iHMR9rkR_8_vYlYYLQ3ylxTvz_cOIZWfzeFK2yyYxpUHfoL1tBlfTTcVPJauhwf-LdrQcTIeVU4e6YaaA", width: 4800, height: 3203, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114300966083337321764\">Chatchon Suwanmanee</a>"] },
            { photoReference: "AWCwydhRQIlP5I78bd4yEU_CZ-4337jeanjm6bRKMN25L32xT2QmXPh0F-ij2FjVYSj1lEOQkaQ_WLyQoqW8fYcHkin3XmnWr5TkyWUSb5qHYk5YYmkI_Dazs9X7Wy9SkEJ9jUYZqyT3_01RIOrgtD5qzqyXDFVreRyezPl6F2F0UesOggKrG-ROA5--rBa4U5SPf7kMn5lt0NFfVdrRGX7DEDZo3q-PoQHbS0w7KdA6jbqNgOu0zFToubrLlN3ySz6Ak5zryCBay3ItNqMOdiZh8wK_PHTVrTcGWmnM-EhMTMEjh8duHpWDJXXRE2N_mw9ga66-JSi6TEruckJd2YvRr9r6Q96fQqHNhBpZ-Zg71lYBVN5d3EAehaf19sEnmV2Td0ixUamsYAVvnspB_euiVvPseQ-ANCE4KY1lHlAWhgR38A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116724585388708404495\">Piyanuch Wongsongja</a>"] },
            { photoReference: "AWCwydigDiC5yY3Kle_3LkI551jeAov6-YeQoI_TxH_wSkJfOnUIrBmjBbOVdremtJdPU8hFX2nWFeFhMK1N66d3eV8yH1VlidRqSREE3-Mz7rA80_kApdVxr3NtrikBirZEZA_y2TCzm61Ody6c1nfzcvBsRGbBMZM93rxd0N5UcnhQA6VR6456T1lggUdxKOgFHXIxS3LifWV_Q5wC3BgFyuQ4zGQRFK0O7aJe7U8b8FDhPIIKa1APEWIKK4dtqST59gfEe4-L13hx367FdOPrRXMGHR5DMajMgNCPWnBGChcAmvBOaN7Ogqw9c4NrneYUJgrFDCOc25ue29kznXrL582fHKag7AtUwk38jss9hT8fbZJ8GSscyZ3cwx1IJDBHT3WS-z-Tvo4W4LPSJ5vZa_NaLCIM_8TBrsgN4XN_DVwUaA", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104621886086625995214\">Joop U.</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 인기 명소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["4.5점의 높은 평점", "1,200개 이상의 풍부한 리뷰"],
        tips: ["방문 전 운영 시간을 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Rm No. PH7001, 388 Rama I Rd, Khwaeng Pathum Wan, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.siampicganesha.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18119587568996730683", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=SiamPic+Hall+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
