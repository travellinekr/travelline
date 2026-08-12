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
    }
};

export default info;
