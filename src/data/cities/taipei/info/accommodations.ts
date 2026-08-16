import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "그랜드 하얏트 타이베이": {
        photos: ["/images/taipei/info/accommodations/grand-hyatt-taipei.jpg"],
        placeId: "ChIJty1ap7erQjQRWmO-mTv1zkQ",
        placePhotos: [
            { photoReference: "AWCwydjo_oAmKNbNDXouNeOgRKgIYDU2EtXBG2ZVF0w6PfxrSzcZXBUKUVboL3c0RIzK6_0Kv3QcsLfrY46cECzw6GqzHmV-hgTJ-JTPwBe68wzjk2Hgsa1eI8gGsvwAB0nrL7T4WgSILYVy6VSwm3bhpa-Eu5By5JuUCNuOnSYM-fhw71DdmLIs-_sugtiuhmDloDOVFxOyC2kueXgajankX6zTMY-XmL3rP6eC95V6yyein-By-srr6d39SBLRumuJ0ZORtC8bij395blklrBQMiUjQ2xUbuYf-Ipy5S-aOzjtDnmYOu_jbPJoAh4KTJ9Otm4hXxiUsHRHRt2i-M7vaVXuFVPKhNAWCTOJj6YjCp5RkvZ2dR33zYGR9TcFYpAj0_dcYax0Gzqd3ABTwI7aAiOnuxj1CCbWxCooH3iHCWCwpsDL", width: 2879, height: 2218, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116221685949306313275\">Grand Hyatt Taipei</a>"] },
            { photoReference: "AWCwydiWHp2EFPp9sVKIArb2cxKUBpIASbF8pEr8epjZKgXAPuxOvReqKoLUjuvEMn4spK6rIPoij2D0KjQqF7b8CHtsH2t9CQwVIefFm2eWr4uPIiZkwXu6I0RPAvuGH3SHrlTH82j_Md4gbraZD_-3uX1Pgt7QBRb25lI0pexUrNNGmV5AFBt1doKrrOw7W4QvFL57h_gHMjOeP7el3mqMYePtmwVNETqBpWl-dAzfPzyhQNADC-yErQEJfQ8-Prp9dyCu2wxpoCTMb4yaDu-NdwrklyNU0qn3ETSA89Tm-sAyh_syXKSw6pc69XtBrCjcoXISCQglJ_2JacsYP1zaOJ7iVw71zGPWXXSo8nwiOxuN9XyfglOdpSkF6JWjbenEtwZda3w9xJb0oCgF-FoCgWFriqpb-GCOlT1mzgyhMTM", width: 2880, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116221685949306313275\">Grand Hyatt Taipei</a>"] },
            { photoReference: "AWCwydgou45Gozn_2UJEU6qekW9RNAFaj88bL1eWIOIMraQgGL4TkmNnZbbfcEJEWEywhNOOeZiQ0e43Ak6YIIQy6veu--RFLykEmJMGbW6bR7wOtAm5jaUjwWaCphhUcCs3sXnv8S0O0_P0gzIzzGe5EkUwxq95QuaTUpsRwLvhwxsbbJ_ttY2yWLhkP00FS2NUr9qo2R-vcZWjKAqorAsHrqUTn5ITb62Uv38oYlb_l04Dhxv67r11NMif11hJCSrHxQIkrAv8dpw-263a6sjGX2OvGZj4mKy2hLczU0IoG95uX1klMpHHBqg8qhL1xUOaAk5yZpx0hpwydsn7gOxi9BmgK3aNAefeyEizc0U1EG9r5irrmFa1M7rqBYiCvmwpSjj5gZCmK6aJx8x0xiDr6JVGu0U5Gx7L0KHaQhX7N__vog", width: 2720, height: 1528, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113991917064308455062\">Mark大橋</a>"] },
            { photoReference: "AWCwydjwbRV_ZNdBaaCnHPnJmlnIr79_9HisiP4gvQXQUBW2al6tqXKpD5NLcU8BV2gXSpaR-AwOoBkV2rmVqzs_Sg2NjmI6u9KxJOSXNO_8f2et4rYF54vf7v-RsfgTChqL8cXEtHqQC8XUDQshYCCEiadDtuelPOKnsY5S-lQdIWmX2OmxMebtyorhNO_xvhIWc_kfccPlkQnVXXa0J3Focw9x_tP5Ss2itQyuEbca45Kd_wSwEc1JdAe7br8oMMba9LeoiRY8OUMz9xBCX22dG-IsUvUhXtsQa3sV7z3g6Pq15HKDaQ0tArDMaD5Vxr-jLo18go7TnOnDpqC-_nq8Z57y9ecaJpxMDDlT1AdvwJpQvqM2nJ2LuTtrYT9ufcvS0ohnzJGeD3ebYBZfeFPzKTFSf34RnuYiNAlXdQ8ROx0ACw", width: 2879, height: 2159, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116221685949306313275\">Grand Hyatt Taipei</a>"] },
            { photoReference: "AWCwydjVTcRmCDelBd3mx3MgrRt8qE-LOXOvU0O8UJrB3JFaxOig4WsCBwccNMAMWEfvWQXrLZbeRJhymS3bb24vFDS_ldHCozJJW51m2_vEfEG-dp0imc-EwKqtL3xen67xRwstE2W_hsk7uomlsDQs3FNMnO8NMlEI3LGR-tBpwhpjIUTNnykuTcrCxJ991EOzHWi55KO9rl6yJDsPcio0sytGoS6fYkDALYKNIxNRbEIsxZvG4gjbyIjDX6C9sr4nT3c7f67J_aFwJz2diLiKKscqeDW6NvDBgVxRnpb1lUPwd9kETxf8APdzlNsrGc3JZSvHnhNaaec32NT5-C-BS9NQz_lVVBIZTyXYdgZCsugGiVnZifFarYy2hGWYLTm-uOFnJdrZDe5PlL9QbjmlDwP91i11Yp1hHLwMVVvDiWJTRA", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101607713640689789641\">林國香</a>"] }
        ],
        summary: "타이베이 101과 쇼핑몰을 도보로 즐기기 가장 좋은 위치의 대형 호텔이에요.",
        updatedAt: "2026-07-13",
        highlights: ["타이베이 101 인접", "신이 상권 중심지"],
        tips: ["쇼핑과 맛집 탐방 위주라면 최고의 선택입니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 2號, Songshou Rd, Xicun Village, Xinyi District, Taipei City, 대만 110061", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4958169876112761690", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%95%98%EC%96%8F%ED%8A%B8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "W 타이베이": {
        photos: ["/images/taipei/info/accommodations/w-taipei.jpg"],
        placeId: "ChIJgSeCsqSrQjQRZql8DEzsovs",
        placePhotos: [
            { photoReference: "AWCwydhtZsHDiOFdD2KMJBwi_nO5KZg7RWZ8OdICSw8mZzfZTALGTvfpEwIBW1k9O2NISfaGJA3FhzK_kpHNs2xZ6TjZsX2ZXqpDQ-_szMzH348AwPWe691lGgfh53Dc62vMD_4TBrKU0EKNwMv2yLWtIWtNeFG8-nHWuThY_VxCZgEUK5-7T33EgglSzIfSrmEg4eCkSuWKB-zCWDkfXPn6CDnjeLAZwibbuiqd_P7NEzgnD77sGUHA3Lonwt4nppUoJqm2fiQkwIqcJLjcQpuLPpH-uI_maiOGtCynVeUP_SONY6RelPue8kOlqP3ijkrgciOq_ZODy8t1HhzufPaLLf0jKeNcoFQ9Wqkd5SgjuqHWoD-u2RYgaRi8dYsS8Exg5_BxcNDYDgoVmWwilmLpwXzmltxOqL9IWjQy3z4K4vZXhk5ukOk07nIsUuG6cB67", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116693869437482875410\">W Taipei</a>"] },
            { photoReference: "AWCwydg0blCJ7ngXk_giIXitt0U1CSZVMDpLkGj2BBfrAOO91OflGMp9geBlDbws7m-uCd3n2Jm7TfKxqsbShAY5IAl5INQ2PVzQrfUVCwXf7WCThX2hB4y4G2neu1AOTb9nw1Rk4NSuDPLWV6VspbWzI_XwxDU71QVaTx7A5MH3mJKkhK-hHsZh4QtPBvqh7KD0cwUcWoE71nvGmwZVBNetbVz4IJkiLOvpdK9QLOLRIHJIyOY7_6Oy2ktvzdTbjVhKin8TFsK5hIffOJTZi_hBgkm_9RWpxUP26nzPFsFLQKYoKEyUZnPWJGKMCNyxnsrplGrg0HsRL7Gam5ksdRqCjUTtuPscYHdgZfeL9IA_DZLylspTLqGvrfwgrAY0SZfTL0YT5gLvSJTN5OF-BQQkB7HKJwxFmHmwsyrSNQYxGmroZ-l0Zq4U1CyEF_82eNwH", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116693869437482875410\">W Taipei</a>"] },
            { photoReference: "AWCwydhcDxGgOmJQZu2QP6ve_2CGGjtDQ_1oEo-5Ax0MZDZYqJTmcQZcgq061dVdm-y7tULIRtp2uQj_r_b1591WpYE7Z77OMIaXLtfJTxZ7YtBtqzoCeD8H2oWYYJa_EL_JVrdWv5Wcu2BgEOT1P-pQwXBXyUUbldCtz-2qPX2B-HYX7RsHRjFGpV0kFr2mD5pp4F-BMJX6JZAlaEMmdYmJZXlCdLmXJCGBqNR5z3NQ-2_ZqbfCDC_ExpnWs2r0Z9ug7CUOErEsUq9WYIuElrKt3tPh_HI6WEiaqXuXzM3--IdVymeLwVpv39kaPGwMjLVYWYCOTxwGIgV0VaO4z9VQpgFwM7Qfe3ERI8-mskk2Fj2TbVHVnFTbzbxfW9pf9I9zXH31Sf5EaOgJYOpvF2pXXUf9UuNFN2LjiaLFPkM1rOAcO_jZ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109007138532938563142\">郭玉翎</a>"] },
            { photoReference: "AWCwydivyHy6VQAY_ZDwQDDXtJm09qpGOwzM8ZeTeHwGRbIh0CX6mUmWz-wDNoBen9W2t1mL8jyZyog-Z93J8Rdh0U2sKGhKgTkf289Co7S8jCM7p_gz5O3znna60gVHrbkgs0wt0-V9cejVerdowkYS864FlIL109buI_66O5BixIa2Tuj2JtQVUZF1Be2ixgpvNXm3XqagXa47Lpq2Hd8_YU5UCEopk2_VJ_KrsKeGnbOnEExKSRAL_n1oFkAflsXIcPVOcT-Lwh0wN4X2U0MQe-3h5xiYD8tOye9FNmqNp3M6IgurW8EQ2X6Ak7uBLWBFYF6GTYo7azjCQN4Mhz3S5Pshl6yuaDpvqgbXwgrmraPOr4Ekw_VXwTt1FRHt-7UXGNodk5XEpVunk6Le_pKHEmh2WENo1ME5E5Bb7ToNILSJB1nKDSe84n4JlTtLPQ", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116693869437482875410\">W Taipei</a>"] },
            { photoReference: "AWCwydjdmUF4ujlhi8iSyeOr_JcDKOF33hxaIVpvyJOdEZ9nyjvBxX5eKln1IHJG39zp_VnkIYddzYGn0NVA2CZ2QlKiZAN_kZQvIEcdi7D61rO6Xp1DpQt7K5scyB0jqf0VRaH4qYny0wtg2rzOJkbLvfqOSQZZ3PY0Q8qOjbeikpKpasGH37-zaiu0qnuYfC-_MfvTexQcOHqGytc7QFH_w3GPLAY1mkIDmoS3u4-TF4g2BpcRBJKfSCF8pnIT_0FIH-TRa0xeDmfufYWLWu-T_v4BMHxPQsXtGfcrpSxTiO0bdszPokEnc0m24tgJ1MHUijmNd4S9tOXA0NtuY3h7V5iJFg5XHRKlFpASa5nZlSKp88pfgXQUi15RgNRJLIDPGr9beO5VFxVhx1PtRJqOGQv0C2SKzEDowVpAKVLxx5znrAMqHhoDZUTegdVn9Q", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116693869437482875410\">W Taipei</a>"] }
        ],
        summary: "트렌디한 밤 문화를 즐기고 싶은 분들께 추천하는 힙한 호텔이에요.",
        updatedAt: "2026-07-13",
        highlights: ["신이 상권의 화려한 야경", "감각적인 인테리어"],
        tips: ["호텔 내 바와 라운지 분위기가 아주 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 10, Section 5 of Zhongxiao East RoadSection 5 of Zhongxiao E Rd, Xingya Village, Xinyi District, Taipei City, 대만 110", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/tpewh-w-taipei/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18132314861118204262", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=W+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "험블 하우스 타이베이": {
        photos: ["/images/taipei/info/accommodations/humble-house-taipei.jpg"],
        placeId: "ChIJaZ9KuiOrQjQR5lAZcRypzNo",
        placePhotos: [
            { photoReference: "AWCwydjvrCADDUvGHDgaaKrbX3Bn_QdtI9BFCBnlP-6rnJywIJET8-jQQGqyYSmXtvxOt_eJeU3Mdj28wVsG4jt2sUB7d0Rq6PiG9RRxOd_LOvfjj0u6SIP3lhY-UtrrQpgtTF7GAdR9JFJjU2qUDi-C9yG6LmKhNNDzkNA6nG9aTUBrAcZ528i_k-8uAngvE8VvvGYpNmQCsmZYHIhfyWn-XEoCkEPg-b8ItQnRKsZblssl1v50TyCNHAoAgHUhqWP1tADrBJ9Isx6uYxQHkGZ0zv85OECstDatu49BF7Sw7HaVve8IMEjsMAuBgA7Euj_jgxVCVHxkf4oQQSS6-h-OwYfY75wcyAhjWtITD27CsjyRP5ulHn7Era9jJm2ZBj2oW9bKBgrY0-FMlrw-w6EJ8rdEPjJzSnEqdxqnxL5kPU0UVnw", width: 2021, height: 1347, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116852874423616889604\">台北艾麗 希爾頓格芮精選酒店</a>"] },
            { photoReference: "AWCwydif0hbFBuhHOF_Foyk4Z2jePfwWILy01vCa3N06BZ_sfMtEmB4Cyz3ONOg41DHwlrnQ18sELI-EGpoIKsVow1D3j9emCuC-d7tJ2y-oKafttU3uBWNROzUk358-Y7SjGM7c2jpQ_rJIhqukcgmkbUCJ0nZNP1w1usJnIsqDbhEpN-Pm9qgTm1MhZPRYW4zcv8JTLwB5vbGhhs3F_je8PT-S_Zxj7zo00w4pKhCblOFZbpXTgeAuCgzyLxmmnzWQ83SOhRAcy9GNLX3nB6bKdMqy9EPBlCPKfltZ1TBuGqWWt32tt4GlFOf2xlT8MltaYm-6vmTJYO5reUwuJyMRtOud0S2xwCxmahiMxNixD6CzFJy0KzARSb7qFoR7zbajrtWIShkd3cPhGleMx4kQXToAeuboP_C8A6qEr6CU5Bn7pXkXY-9k5kQRx7Cksw", width: 2326, height: 1550, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116852874423616889604\">台北艾麗 希爾頓格芮精選酒店</a>"] },
            { photoReference: "AWCwydi8rWScJOMKRGeqRPxdhswkRzIS8xcPcn7rf0SlG497ruRJZ4qH4ryBWMk_vmUn7heQqqYikBI3QWSTBgVnoi5E2Xuc6Yat4l8w_dXZiuIa_kuPTCB08SGVIl7XHxVKEMXF2A95s8RmUNcoRrzznrtmwgSwk_Ow3TFE4IuLRJD_qe95_INaCKSDel0P0BcAia4Vqs74y3TURmivnr3skd4-nkg0vsUgRrbzYt_EAJ9381CyggNW6mBRCJ5blbvGNI2I-4OdsESxoRjoAmPwV-6pvr59nEKnh0qF93s8oIiYMHkkD4X6HYGNRKsi1n0EcgWHKQV_NwcMvqmUgFV5RT_Ui18l4TMiqKple9XAPbqekGd4Mx13b8vsG00Xxs6DX_M6xL9vbx42K5lMc77uJ1xiJhQds8CIDmqq3jiMYhqFkKSv", width: 4800, height: 1214, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104620915678541976006\">陳健雄</a>"] },
            { photoReference: "AWCwydgxJPoQVxo3O5GeiYe96yWnqzSeZj5BJ_dIiAkYdoMleIE-2bgMbLPx-8AqVbDOEPRWc0bHJdjZDZXZopKGv6Cy0RetL9boelLSv2-wbhSkbgOs2kf8wKByObDYiMJrgfd0NtOqeYCHtjKx2L6HZTPC-12LlbTEqWhoLw7kVn4-VdY1A8rA1tSgSTtfz3XY5-BajCBfRxiDsSzyhJSj0qXe49YVlTkdlFhd4nIvmBIe6YYuO-NCq2JlvKfZFiLcejD0OkLH_YTbPUT64y7EhmspQB9_BsnSa0ztMl4Z5RgB-pnuA12Y8ikR_I8_7du2OhOlMX8jnDtkuJPPxI88Q2KJ9o-jcndiO5mQgZ5T3bDW3vwE0UDNb-Elj6vzSDUMe0RUzYARWXECeVkqFT490oSO_cnri2scFtn8iR8p84MOvLA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108750651574517721612\">恰克</a>"] },
            { photoReference: "AWCwydjMkd1UxurQAo5Uo1Y6_YgwRQRoxNuN0A6a4HErnEEXeozHFeRMTVed2ygU4eJL_L30zKmrFpT6TKPl7ZHRCsGJN2i4Ab-S7sjPo7nYjxnCe6INIKAdBuAIl5mN-7_snbwnl4jx51EHo0h9akxiICUodsQNeTOV1O8WcLIJ0Fi0rX39fTLiNKqU0r0Sm-co4606t53X4b9jn1Rr98miwBTYSlVU72h8uJG6bkzDo9db8HOQysMeDXdxmWN-1juWjvfTUVUw6fndrPlKih6Qy1NScksDW1XRw14U43-qM8_Mbxmd_c9_PRBKK_eV5p2m7SZRS4_AoQoKr6SoR7z9APFE7K9v4o1xb8zX188btABbyFrlWhcRzpH4GCEXW8GQzZaHOb7gyujqvzL3cF4SgojFZ9NxVswPcR-VJ5lXj3RLcsGzJ04c0lB5nR5NasP_", width: 1461, height: 2300, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116852874423616889604\">台北艾麗 希爾頓格芮精選酒店</a>"] }
        ],
        summary: "주변 쇼핑몰과의 이동이 매우 편리한 럭셔리한 휴식처예요.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑몰 연결로 편리한 동선", "차분하고 고급스러운 분위기"],
        tips: ["조용한 호캉스를 원하는 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 18號, Songgao Rd, Xicun Village, Xinyi District, Taipei City, 대만 110", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.humblehousehotels.com/zh-tw/websev?cat=contact", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15766162335138926822", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%98%EB%B8%94+%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에슬라이트 호텔": {
        photos: ["/images/taipei/info/accommodations/eslite-hotel-taipei.jpg"],
        placeId: "ChIJx1lBG7-rQjQRcqXyIk72lLI",
        placePhotos: [
            { photoReference: "AWCwydjAbZ-SqVzB48upd560rx1waZed-p7Gm-4M_N6hcPmQ-8Eopiag-2VrbIsPAKdn9M3b63551WoCM9aEKQaZk5f2gfqNPl0lqLQNFXsLvY5EW8hkH2U13NRy-bNtAi0-hU1X8B_fmiEMbo00QibKzg3cpKg9u_sOGMN5RQPGr8xV8DNH66yMTXC5piwZH2WV6q6EFIowuIqxZ1jz8g4KfiCuXlvWTRz3lQ4UNXwpdtPZmyVr9EkOiejsnfUglhySFlmRcaVlAr_Dhy_2tzOwZg-3nqolcnBgmg4mgvEZZiDFtHRFo5y72pcj-EXfuU7p-TOWOUVYQUjGw76S9MmlMp9PdAsmrB3sEn9G1htMjREiI4EQrwIoZ1QgJVCEH1ppzWg-U_dILOG4AzZ9p3txEPoDZODLfAf0fu9vM8LepG-3z6rppy_QRFwdavCU_xGQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104882195438551326843\">誠品行旅</a>"] },
            { photoReference: "AWCwydhJBYMMIwirOQzxav9eWMFeuWGq36lC4JqJtHwXOU5ncwWfZ_d1SWP3ozKiyT8SqkY8uYjytKuBnGsziEzW_mK55dR1GjA3lPjr9yMtpIdlFojz1B6bqdfFcK9H_Q6P7b2c38E0PnoZE8ByV43bjS5Zhi_yvmTrcRa7XbN4ZYCi7k2fx_jJ4yp1TYQqvXL_GH6I0hwLp1PBtceSXTskH-eUQeSFn8GgCUgBQLH17mpFCRqqST9dG-qZDl9HTVTtJ9Gqa4r0i6u7F91oOACh5TKsRXtqZHa8mH7JwmOP34t1_IiXVp6l_eH8IkwSrEiBHWZpKk4HeKvZWN4309jntca9J2eKKSBw2dVt5le4dkmazz3bJj0cVHT3C0AtIdq-upPlAqQasuxcJsvSa40kkKvta8svT3bXTFR4jGVDav-zQp8yOI-AI0SGEuv_RCze", width: 4493, height: 2557, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104882195438551326843\">誠品行旅</a>"] },
            { photoReference: "AWCwydipqo9bdbXBUZrJJm1RAJ_uCTDu64ThAmvq-9OVTsfWEiU12iUHD8qOZdWwlh-X__hdsX2TiKS1ewm7_BiN8TyVoJESNkvlOF8R81-V9J3T44jWFLMisaYJ_ABIXlypUcLaymvfHEMwyld04hLqhV05MkySwNycrLz4etvFA8Rlv_PgTnf-s8-FfeP13xcGaYTCLVPGpBkHY-Vn4aTR-NmDbmV9laW5hDEpjEezxBAcJIAD2dKx0lUp76Tq5japweo9NLq9oOQWWM7P2MzkKWnQ-0OqDsIIXhlsojKUFkWhOIUuhJ2EMx2dzUQC29h1G3UX45gSeGekEPPD4_zqNfJRA8cfXcWoG6kB10elLrT9tYH315gk3YvvmI3zYSepl_zEq5-j8SpXavPbDPhJb26v_3LtG7IWazMdmbD7BecBGg", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112000627198521497947\">H Jenny</a>"] },
            { photoReference: "AWCwydgG78-Q89G6aezwHv9lI08JvQVXTkPWYdKkGCew1ePS0mCeGYlc2D-uI_ZuI4KsEalVN-qeOGFCAzIqsmANI5aqGOQNZZxk5GxRcdTqxsT_jY5_mQC2FgAfno1rr74zMc_QQ5NR7sATGO4AAaR0ftJ-6wDj_uz-5HQIvuJQZ5vJY-naPQSK_F6vH7-asG8NmbcJTHXl2hQt_OCcPYPUYM3X0dqltgVVHZidXMKSstPP-zqiTS8NoEb8_t8nkZa5XENQOVZk-v_XPkgSTJAHvuNmJgRVyWvWOCXl-j4-1gxJx9SCCp9Tjh3ByPj1LMnX1TNEeFRn31ikm679-4Es02o9UQX3wSs7tdimhgrMFXATvdVsOuT7MDFLW93pAQULoNYKCM9iPvEmKsWfruCXCF6epdKm6ZNTiuBfniSYV0ylpW70pgHhXuGkH5Kzmw", width: 1728, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104882195438551326843\">誠品行旅</a>"] },
            { photoReference: "AWCwydger_O-6Qjnhurevo5HCJe03cCMb38vilBP59-mm4V-6FBfWskY1rUkQdtc2gaJWjCvgrq7gU3gtE4gV7l9fEOaR2d2KWahTqwtM03wBPP78mqSkZIcbH2_T23RPZot9V98mCryesxq-Y66qzxm_Oc96Jv818DnA2M04PmtMpkAznkbjA9Fsd2kWP-7vowB_rRFYu0kSa7h55E4eoSoAuoBjvaPZpttfBnJWkqFxETyA3vDAqGSN3Q4x40KJaZ4x23W4EzA7rNzSPyljF6x3cpqeB-lp6rh5GGzq0N6SbMa0LKnqOQPgXpKSUEVYN2t6pEpCKHBXcExaHSYP8_AEY9pm99TvLOs_M8WWeN2xBg3EalhSOmdjAdIIBgfgh9yfSGyQNTxprSOrpgL6gG1kZyUf7Cj7nJqdv1ZM48SOJhDZe0qDNSzH9DMKt0ck4cc", width: 1300, height: 867, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104882195438551326843\">誠品行旅</a>"] }
        ],
        summary: "송산 문화창의공원과 디자인 숍 투어하기 딱 좋은 위치예요.",
        updatedAt: "2026-07-13",
        highlights: ["송산문화창의원구 인접", "디자인 상점가 접근성"],
        tips: ["주변 소품샵 구경하며 산책하기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 98號, Yanchang Rd, Xinren Village, Xinyi District, Taipei City, 대만 110", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.eslitehotel.com/?utm_source=google&utm_medium=map", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12868180850758559090", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%8A%AC%EB%9D%BC%EC%9D%B4%ED%8A%B8+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킴튼 다안 타이베이": {
        photos: ["/images/taipei/info/accommodations/kimpton-da-an-taipei.jpg"],
        placeId: "ChIJQYzd58yrQjQRMxp7e6xhxxY",
        placePhotos: [
            { photoReference: "AWCwydgHuarKUSPbqXOOrHWQY9bjMt6F921imiKbTp-WL3vRVQ5E38Xvw4-0ddNYfuruFSdRBvJDkasc68jK-zqAuBdqGXyES57qGRP1N8IcIUckCrIurxdqUBa46MvWR14kZ7N7rRwLkqYXGTBwGaZPNqW-wKpSNzjlRDRp0c1jwSiK7lcCLOhl0_YSyp1PKnxa42koaS6FaoQF0edp18LuqxoZI_JLoUDc1_e1cXU3xcXYXb7QMUw6emE-cRebXYXGDoNTvKOW0Gwd5SEur6F_2gb74rqueuHXJiIHA6-3ZtgQ7FhsFBeHJomWKl2A3MhPOQEeVNE9mKhYC3kSwCmH_WAQiE-pPsRNlJLtmlrKAs-8HteB6l61rEpdzJXBmUUD4VA-F3MbILRT5UtRhOBYvDxNrD_rOzb3M06AhxNSv85L2Q", width: 4800, height: 3202, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115399148245435137306\">金普頓大安酒店</a>"] },
            { photoReference: "AWCwydjzzv4PypLtupsU7u1nS_OM_BnBRjtqspzoKK1hmoOPcXoi_8WHfdr-LW2eKyvIuij9oB-Vr97fGzc6L_QWG2IUSSP9MH52QGcLN3Y3dkWbiBf2xfW9IyR0kOTPRC0vNC3PGYv4YfnvP1rBHOVACsIWrtEs_mRkbWPebmmgMsIoerDxe4WQfsDSsn1-hOpdRBJyKSbrCwMvFT5iZRS_SwbZ6z2JIxLNnOOTma-sDf6BsUAq8PenJmBoO4XirmkXIoGyPObMJb37sMwke7s0H-5n_UDq71MJzuXmXTWTOr7Rjc_lhEUXW2Y99QC50VFpjdPI6QBg23bSWLwtoRR-ol_CiLByR7t3PyaazgXn4IfP3QdGBMaH18JnghgYpST-xJlQk7rMCIdVKUh-UHTXX4m1y6Dy6iJdggVmkGHX7RaaSlmr", width: 4800, height: 3067, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115399148245435137306\">金普頓大安酒店</a>"] },
            { photoReference: "AWCwydi3hDpsAuuUQi-bXGos0QKghmTKuz-DjMIuzHk7ttQU5YaNBbvgIgKVDLwz1i9hj-vlorwiY3O77ebI79-epxAfuU9wOjgTxPJl0Nj2zAQu6KJDWiyrbcoN2uPO5mwltfBbMxWgsYvKmeKMYtTZXV4pY-ggAUQ7BqKtqVtsuqFa6g29YvdptjSYlyPxNqKG9NxXNnj5z9vSEmOtNXjQRRQkwcMORd5iecHT0v0upHDEERYIr0Get2WWnql7ezJsKIawHF269CpUdjwg9pFy_RUyc1v0N7gXngqzyXLyE3Kv3uRsgNSAVzzji4IDOki0grusOSBrsgdz1ErpwnKSRiyg5E28rYDOcAI8Bg73i3iJ1kG8-FgK07GjVFiRKA4BihT4K-1twiR9gyuFKxTjdrcnM3qqcQJ_4lrpFd7b7BW3kiji", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105256511194248361760\">CJYuyu</a>"] },
            { photoReference: "AWCwydinQ2Yf5KRNo92nogZmsPQoLFiKLWayY-Zx8mbfjxH6YRE--JYPuf3a_p0AaxDey6NDwJJTdUYylY8zKzspyIl0Wvrz8FuH35QMg6o_8MIWiTVpfN2wEfDkA4atTKW8FaD_aLnSXeFDm9LrAPJI74c1iC5uMmalOhj-PqiqJ-xFOKbJzXTo6foF-8otYdgxNDa7OffZFIenWzxuTKm6h7_23KW5PpkA7SWZrbGua4-rHHQSzb0zzqT65Zy395IvLRyzatp9U_Uxau1kmsRE2gWrLmWlNY2O3gBPLh5fcTZ59rrxLnSR6fH56mg2TZLUTFZZCFWo99jMBG0W074yBgxznaohOPzzCtd8JXsC3i9ax90cxquz5niFJMXgr1zi-nn7LWh2Mdo5xpzsEH4ykwvXyl_Oqkun1tlhoVFkeAw", width: 4800, height: 3177, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115399148245435137306\">金普頓大安酒店</a>"] },
            { photoReference: "AWCwydj8JCZGQuppljTQfeZoUgnKvwtHWIzAf1OYj47YMgZ-4YYx5_WFd88FSkrrTgU_G_MTWYHDjh_UNGrVsWR5fUxfTCFPT_m5OKjH3BE0ucWlWarqDevXNnR3W6PyRzKhgx0Ietbz_dO99MiIOMP3M6jmjZzGc1lgyWtV7_3Qll6fgZrlycAF6lAJrUIW-a9McFx_zNTJU4Zt8eG6Pt5c8W2BCWxRQFgymIM4g0r2g_f_VRQFP7dp4HNB9DrDPh4j1rcElwOWbrtILGh63S2sFDPW6QA2KR99yGODUFnvdrrje95EclvFJQoQKh0N0TutLfBxuGTkvN5pASPvs7k1UnpVYDX3fqz44gZwp9flLg5RVUuhq-VMUDg0FKoJYA3KC4EBASsYO9CGfm7upntrQuvYPF_nAqomkQGw5R03LKnRNw", width: 3000, height: 1924, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115399148245435137306\">金普頓大安酒店</a>"] }
        ],
        summary: "다안 지구의 힙한 카페와 맛집을 즐기기 좋은 부티크 호텔이에요.",
        updatedAt: "2026-07-13",
        highlights: ["다안 지역 카페 투어 최적", "세련된 부티크 감성"],
        tips: ["주변에 예쁜 디저트 카페가 정말 많아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 25號, Lane 27, Section 4, Ren'ai Rd, Ren'ai Village, Da’an District, Taipei City, 대만 106", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1641387982633769523", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B4%ED%8A%BC+%EB%8B%A4%EC%95%88+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 프로버브스 타이베이": {
        photos: ["/images/taipei/info/accommodations/hotel-proverbs-taipei.jpg"],
        placeId: "ChIJsaBr8dqrQjQRI1Mz7RcM6fY",
        placePhotos: [
            { photoReference: "AWCwydibWutQgNNpd4IJk9WyhX9FmIwyV4z2FbD0G6Ahd-jpyYSnmEVIW7013iCOTuFPBMpxGWAeBGE7qSloSUEyEcp-HiIxr9HGCNO4hFp8_sxiLwUujkSrsIV55oGHwvNEOMd_J3lQQ9DPlZoqZB1b97wlRZMqSl5JWohZePDvVawtJCIU4qy07HnuXOGxyAzfTYhGIiIo-KbF6wz5Kh4RRM1J8n6oxx7YEsy66UajiBfC70U2JpjO09UT7BYHTjgG0fW24la0mFEXkySUpisJLfmc4_1Tr7R_qHKdWbGOdAAkeyvkJOqZAGUzLeVijYOkQ7WYi4K47B7QV-1QcYx1CRKAZe8wNnDB7Z5raNoXgTPBhm5KP9wzwYb9sKIerjNaxtkX8AOrV3YUQmM9DanrC4fxaiaWjgOZJlx5BrYiph29vw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115493933738071823927\">賦樂旅居 HOTEL PROVERBS Taipei</a>"] },
            { photoReference: "AWCwydimxNwTgjuqVM8dGW4SIQzJyTXBK8MFYc8_YCGiBGgDXMyVGY-1UT69m-zqz-_cLY84Eaf758p3j49fWUimxpVsEJYwTJuPUh79nC4vxLlp65qQ-B0aB2fBN7N8NLc6yfaD-UBYD-1ubqZbSQpP8PyxzrRyGCbrMNbJTdBSwUR0RXL8fEOO2AmBCejExzrEghq1unlE2JjzJ4JUQwOpBEzfukZv27lGK9CF1qooxrBFy1wFJx6i38kpHfxhJ9IhDd73fQcdnDRBLLqhMrrp0AUL171ld27QuWUF3NpW_h3_33q2FyiApsLjX7V6BK-yWeh2aJ9ZfwaLECo33CU7Uok-A8FrLSNtUcXaZmUWycc5yVFuUs3X7GjqcBZKFt1z1rXvSP5kXEMvUGY9pN22PVQ-TdS5d-Kci_9Bt3koUI7oP4W9", width: 3000, height: 2002, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115493933738071823927\">賦樂旅居 HOTEL PROVERBS Taipei</a>"] },
            { photoReference: "AWCwydj9xsonFCxZ5coghwzRe3HUMQPgStsCM3TeDg7evB3Sa25OnNzouhp8siqerb7GRQCkc-gkQxiz3d1wziou-fjTqNbR8IZTGZ9Qx6YnyIFRYfoMQZqFkEf2ZeAEZak00by-qf3d6IJlroD5mykR4lYLMBpq-jWmZcgs9F4l4MQqBt_U6OTSey5mwTBZBdKLkfuSRqtnz0UcC1dpmIDgdRRQHAIsDnZJo1JqoE18_GeC36ikxgyj9IkYZ-wN71BaZPtHH4dbPhjyXttVyxUM5EgzxRXecWsFtGyq8-jhEITaA51yY3aKU970pvejM6Riat3xvabdO7fpCEtqcdOd10iFFWliT9a8snPhLvHLYWXRJ8oU859QE2feNhMJLW18YvqTl58-0Xab26saKI0GaHxcXVLBdALlgKF1aIZSrLv0BW8", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115493933738071823927\">賦樂旅居 HOTEL PROVERBS Taipei</a>"] },
            { photoReference: "AWCwydgdjyfRcRsHdyXV0TcbCubbOCVMwRwtqhHffF9BcQ5rL6RAOoWk6j1V5HyzNpL3Rq-mbmA9XSI43tvwWXEF6rAA9FkbvF9U-9a1uuq7RMlL_tPKH_z2P7Q1K50dOxPPSyJ8kr39gw18qhC9MruSNjwf1rXQqHvOqKywBMGjTSzkxQOx78P4e0J2czdAkrJX0xXk93zTgNBRJINP-24jFLDpC8RF6Kh9b9519UUR4k76lkX5zRobx-eA1xiCecAb3J0g8FSUV_u23mW_mVQNv7_exO00fdGIl7Y1AX7NFMY3P9eJB5iI83CVlxKqKDvRUpQiaLeJGzh1NSMpH7hzQNTCf8MtxnJXPT2Ym7VZqxIprLhlrKbJjTFhuEsHuhcpq829iFayKqRSPQK6cmPAbG7i7-4vTMMgyGfcmHTB6BpxWXRN", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108306806908000164561\">Anders Lai</a>"] },
            { photoReference: "AWCwydgIJa5m_H8NVznhUiB-jNjS1OIsghMAJnBXpmZtb7xLhs7V4HmY-_1zcNjqCzJ3ZGszv3v8QyS44Q3JOsaphpP9KZH--r22bBX9NAl1KgDXFSJkFLgxnOjbAkfYchxOu-zbQoyH8ZdEgtF6qXxT_e7OJM76yOvj0-xysoJ4wnP7ucs_AeqlhSzc1KM8SkBz_jkpOuWIFFMWwlQm0msdCxXzZOln6gWuregHQLv4_G81F9FbKarCgVjYScg89m-miLxpt9huECCJ43M6HCYVg_DBwDtvfpgEDaz0AzjGh1SswuxrdtCvrISi1juAZdIZjWQsSQ6nEJWga2e1E1-1C15av8-ZpP8FAHY55BN77y-9OTUM7i1LHnjneuI5XPGYlvxALcjdlHRNKDnpb2OrOq1wht-5xBeTv-FSBxEhgzTck5Bn", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115493933738071823927\">賦樂旅居 HOTEL PROVERBS Taipei</a>"] }
        ],
        summary: "동구 쇼핑몰과 맛집 탐방을 위한 최고의 베이스캠프예요.",
        updatedAt: "2026-07-13",
        highlights: ["동구 쇼핑몰 접근성 우수", "주변 레스토랑 밀집"],
        tips: ["쇼핑과 미식을 동시에 즐기고 싶은 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 56號, Section 1, Da'an Rd, Guangwu Village, Da’an District, Taipei City, 대만 10691", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotel-proverbs.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17791765099807200035", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%ED%94%84%EB%A1%9C%EB%B2%84%EB%B8%8C%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만다린 오리엔탈 타이베이": {
        photos: ["/images/taipei/info/accommodations/mandarin-oriental-taipei.jpg"],
        placeId: "ChIJWXlWGearQjQRNEj80OdQoVw",
        placePhotos: [
            { photoReference: "AWCwydj4rrtiuFsQiaMipEfYbJJfrb91iVB3aMNy0W5L6odQUQn0i7i26O3QEWxBPPVc8eILFJnkzhhaT8vLLzcc5UQCQHr6tOlGunzp-C5PKZzpkXfvmfyqPrWin64IRU9Wp4r-l8u0sGnknq2-IBYVU_cXNgbQtX652iSf84OqudWo23dUn9ChiSpvLT93Ic2LHUglT_G6HqN2o1UwfLSCUjBoIOYa88uAWL1PpwErA32HafXnBvhPLVzyGSZNidz5-WY19a9MDtHgkjPVU6N1ARzWu1WI2LY0pZBBGa1O4-sRwqggWotVD-IPE9vBR81jW0rAkCkze-rjNF6QvMWbZXl23bBqPKWQfbeiJuggYgdstyB6PpSp-E3OytAysDcA3xU_kkXC0frQlH8KKVW2h4uptQEGWt8221szm6DT4IjZn5g", width: 700, height: 467, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116818536372059728532\">Mandarin Oriental, Taipei</a>"] },
            { photoReference: "AWCwydghH2e4T310M7LteBlgj6F--1cv1TCHLTO_vPL1Y2RzzSkGNfQQg0wtVN8LQ6HOIdpdbMx8PYdD8EbCZZLhIrfC5oQOywRS-DrOEctp0VIQkwGSujekQbC5TBm_sJ9A_h6lS9ss0vnSSEyHpBrO9g-EqbvjoO_KQhcuarVIHubq46a7LH5JDFyhTxCbQeSHrtFEbsG-y1M7I91CFM-8a9oJDOH-Aq4ufFnThjB7BfgYZLqFvmKMtV8f6J7ZnY8mqNAlTQqu7j7efSgsv3HUmvI4JHDjfpbEji2rp1XpuknFNQaD5r3q99qysJZe8eXstWJ2wTGxmMSKoei0tRW8Y2tRbCDDunCyEkIqi1rDUjfyMAbcxCCo7pM1L_dfS6jfoo-LDog-JDrSAvNd2ls49_s6G_Ajag5KH5tA7whq2HoqdLg9", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100283070455597913586\">Niccolò Fagherazzi</a>"] },
            { photoReference: "AWCwydheosTixjacm1giNBKFoKOHYpVMk2cvJRUWPckJMleRIZPjckaLYjAl7JAudX2lJgD3hNoI5eVaikGQ4JiY9NsdIYD2lh4ZV4NJo1Wnyl0Fg047fY9HsNgYEEDhIelIpYrZdJTBVvZLt9AadQpPbC__gY6G6N3p-SZ90GQMRoobz2Pr_3LAUsiidEWTXijgCtsmNE0D2aufrYpenhMQBkxcqaGnVg4ocAg4kFeq9oT7oGXSkD8Af7mFbF2TTEK_wuS0C2msoMehMAnkCs0RaX09E5SoRRIRfE8L3UsMOhr6QQBa-XBmCvziOiMONOldjgM11GdgM-lnoNX9Zcz44sLx14j_Uu0IvxZ1O5lKPRFgLUcNiINzU_ia_ksqDGIQZjOlqhnUD9ucFwdJb8lAQiNwADZwUJp1DuTsk99S9raYCQ", width: 2504, height: 1650, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116818536372059728532\">Mandarin Oriental, Taipei</a>"] },
            { photoReference: "AWCwydih243Wun0wbk_cDBtnob-HUcAzre8SxY_t10CMnIutCmUSWH2mmc4C9dlVSDsDudoO0hbM6omtRRVFqjJbR948pLnym8CAU1U9VBQrVAJ0x0Y81if8geAs7k7hdfKLUr09v5H4pr1gfwm8s07UAeg6kHHfa28D1c2LLnl59fbEoQkHL87x4L_dCFSkdMWJoeis8uUwxEOGIsfBe_vhl999E4IrBYReMe_WWKYLRaxbtLxIv5FJgmqOG6cchC2QC10Sx2c-hrlUtrboutseAUd-enLkRUQk9DW_mnIE-9Y26GR_KQ6UHnaFojb6xRysGvV6Xss2KY69taMU50wwO8HUjdY8dmFFZL4qMZsfzHOnHNGNMBrfxvz5SOSHTd84oj4NjAJBvIBzs55AMlhsSGGf_zKdCuWXxcKbqk3N1qrrvZ3P", width: 700, height: 467, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116818536372059728532\">Mandarin Oriental, Taipei</a>"] },
            { photoReference: "AWCwydgwrzJZo6CUTtWxEzxP9OSIFq_Dt4dMSVKsfjs06wCvI8_yGi84hKCsKUIkiA4DRnzS0rUS2iY6whMHPLHXxt1SPh_pvDWlGgkqE-XFs2OvEBmAuyQxxMx2pOHNoEHU2nUTGYTVX0VXvIjZVgJverlRPUQn4IGpXBGONPNi6txWnse2UTWK9JDq6Me-dynYf2nLAlVHqEiS0Q-sPwNEFDdkvv82bV6BruwdHz58q5nEYRNHXoryOwzTc5SnIiUKTJaVroV5WCo_P4NqlF5hJCJ9aa3dYKphLuLAsXHELqt_CuybHsTXyHlwMUMVLbB1zG8IVM4KlTeBiETLRqoJvexreJnHTgGQQDxuzqQWXEssSzAQPLwJPlG--l-CjE_gK3o0pmrcTdrM104aXck_6igIMKUKcfKuJCVgun5labmyCA", width: 2512, height: 1517, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116818536372059728532\">Mandarin Oriental, Taipei</a>"] }
        ],
        summary: "조용한 럭셔리 체류와 고급 다이닝을 원하는 여행자에게 적합합니다.",
        updatedAt: "2026-07-13",
        highlights: ["조용한 럭셔리 체류와 고급 다이닝을 원하는 여행자에게 적합합니다.", "평점 4.6", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 158, DunHua N Rd, Songshan District, Taipei City, 대만 10548", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.mandarinoriental.com/en/taipei/songshan?src=loc.dir.motpe.ggl", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6674705079313647668", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%A4%EB%A6%B0+%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오쿠라 프레스티지 타이베이": {
        photos: ["/images/taipei/info/accommodations/the-okura-prestige-taipei.jpg"],
        placeId: "ChIJXyK30WipQjQRDEDnes43KiA",
        placePhotos: [
            { photoReference: "AWCwydj5QYPzEzuXg8qM73eJU47FVSeqBv-Ll4C7ghsB76sC101OqDriAb7deYCkffCNNSxkX4mOCGC2S9S-RX7WM7Ae3QJt8J5PZadZs876Hq2UJSd0QWyuOHJDdqC4jxvJTEuiXT6T-96y6aoUAAG1VJbUmm_MqPK2M5DftbiVMtsjY2goFTR_ZmXY6Vm3Hx76dBzlf9kN8BLfLbqy79rAUc9vNGO5P3CkixkLGOJGZEapUJLuzIFmdhEpuZ1WRHdVoNHGRoN5DFqZy8D6XnsywKus3DvQONYI-RzdXP93aRE_QhDJX0wCza3OWzBxFd7yYkEYAkAYNzOtSE4_47uwsmlW2ZtP7rAUg8v_GKQgPXJ0G5FOa9911Rm5admP883VB0C-LDbia9r_WRgZpuMLoEREtnA5wnDpYla3AnOiFcP3kZZ_", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118372899820424684429\">3億粉絲Google專家-AIBI</a>"] },
            { photoReference: "AWCwydh-oT3qcS0csGZ2pG656WZvLyxkelLbBjo-ugZB2jUNfzGndcxDHMPvVKIS9EKOp4tBF_Fge27RJFqyQgdqR7hQS60kwXBwELTJlJVrCL63BoKU-ed35lzb0bGvJbUF7xE-52rkAemtw8SAquzCOEq25JhNWcc5JvJmaYx6g5B8qR_mMlaypSkEzm3VOJTexCdxzYu7fMOBcWLqN50r1Bpml1aE38KvAbmAlon5m-333EL9G0s1xtxMw9B4_RiOt7M6qwlSZO4kI9iupkd51dy2nPMOT39stAJ3Eblrz5bxaLS3i8dOqbLSeOkDmOw2r_-dLKRsiepY3_kl_nm0nj0oXRRRGWA1qmvvLQXuQapvVQ8I9aLQEBhk-uYJj-IoeU6SsLsokYbWPEdUh8sI-dMn1EdGKYB1ZuuuWKFTT6nhUg", width: 3914, height: 2935, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118359016527736097431\">Suara Orchids</a>"] },
            { photoReference: "AWCwydg4WlVU_zq2MVE8iyJzR1eSSYhEttwfBywnjZJ9zjAH3dPTRHaDafvdISwPDg4Yyid3czlKpYJW36T1h2rylNYpsNt3SNMZ71GbrnbkZJFJmDqUzqgPgkx5wq0_VFZBpGK9LN6-y1zQ4sLEm4UUW_Jvfn1yG1ilNUyelK52sFrJbOPV2gwT6wtLM-f7cE7gTLLt9dvQD30zurutEnvsOKHNNbKZl2IPN6SGAm4e5cutW-V93GdycfIs1kEOT0ON5-6hUu3V3qWxAplrMPngb2U2ccdNRVdwmdiB449afNZzdOPkVFKOztFIW6xx7VQsBEhJRq13Y751QZ0v_gO51jdIyj7_omvSKUfaKO33846AkhhUYtEBnQza0idOgzkWhhJiNIe8hiGw-I_p7DCSsVB74TbKfOs5mNm1uteyFjeeFwni", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110173485828858375701\">Tung Hao WU</a>"] },
            { photoReference: "AWCwydiQTx-KKl60RqXL2ISKx7DiZCeAaNZ-1e6leDllO5KhnuKBZpQRjEgyY4KQyR5eQJIe47VDzx2znsURqBPQ6nkP-UQAKhgTfW14JRFb8F1BSxvv-2FVfm3THgwurzq0YiJnk5m3SbQe_pdyyU1_58RAhGrO-F04xOiJrOMI0wknqyojOiyJsvNIm98N2WoTUlzodp0bViSe1ksNiFH5a_0Ha-xgDoBfhe5UHg-iN_extWAsiUvCsweGTRXCs2RF6_XAp4T5Nc5Sx5wkMPu0XWPBV-dJU9srdcENDSB58UHZpi0bfcHspogeITofpKtyLg76J3N1ClzMpjRUwCjSo8dVvre40ulo59OX8MmvGe8W5NCm9Sn5kZ5MaC8FMDhoYMLVb8XFGefNooCehrHc4MJbGx8LPj_SiVrmErpXiQxRrcUSpWFbW08CQe_CGjsZ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115902780876888594647\">YY VV</a>"] },
            { photoReference: "AWCwydji9rqXdGgGMhbdO4v0Jy5pkk2jWiRX28PAgeji4WP6Tm62F5tFWRM4ioXwOmKzTWgp4dmT0bKmPxvNNwXFVb7eoab52UCWtJabYUZAtPSUQR6kSe8gg4At---8sTixVEa426WXt7WFjlCS6Z-wjNBZG2vfTM80Rrh6khPViIoBT9NGf84xpGL9wB6MEPHlGqtrQG_rPNQzl4hbYgWuUlRVjMWFIK93keJ4EsM1p-3M3o4onGApvvTbxCEuMdNbHP2Z0VPmDMcXzxdNr_uGlMDCrcFa6QPTESd-njwx3NSpcaDOBiab1a7I-papANLaMfWQBsjmSN04XJW9WNBDarZ6yHQaBnl-I0u6DQ7UUExzhnscbcTms-qGd5U3FKV9z4F4m5mQfG-ku79ZfkxwYcPjUSSufK7rFRlINLeANyTV2x7J", width: 1840, height: 1228, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109626450664088960344\">大倉久和大飯店</a>"] }
        ],
        summary: "중산역 주변 쇼핑과 식당 접근성이 좋은 고급 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["중산역 주변 쇼핑과 식당 접근성이 좋은 고급 호텔입니다.", "평점 4.3", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 9號, Section 1, Nanjing E Rd, Kangle Village, Zhongshan District, Taipei City, 대만 10450", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.okurataipei.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2317726318200307724", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%BF%A0%EB%9D%BC+%ED%94%84%EB%A0%88%EC%8A%A4%ED%8B%B0%EC%A7%80+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리젠트 타이베이": {
        photos: ["/images/taipei/info/accommodations/regent-taipei.jpg"],
        placeId: "ChIJ5ymH9mipQjQRqo6WdCNtP24",
        placePhotos: [
            { photoReference: "AWCwydisa22gU315QcykaixZg_GJHelwW5CChR2aTS_uf5SvOxZLkJhiuQ2HQwv5zwQFuqpKevbIBllIKlDkkzGpNNITkQvUzjPQRh4uukPlyFhj8pnvipu2hk3yLZQc_KHHt5P83Ir2oD4KehoS7qaJZUZ80W2aeZqgQmO-_qff16X6Z16gb5C7ruIpTfLqegbjSawoLertIN0VI6b4SBDd-ymn1DZMV75tLGBSSRPWQOVwnbIxcoZTVQPGR8kFICNdIs4XQQ6T409Hjtq0nacWifLCO1_302twBtSJ7XDQBWqUaAV-qmWRq1JbUIT6IWSHHjSmdnZ5qaF2t82BoW0_cTixRn20Wf1YWgCrkI5V1Ouz7I-sQjHy_iXWM1wSXVjRv9nb9fWUP9Dx2IFLkyjm06pKtbydxNkhZGpxw8Fp7YEJrLg", width: 1920, height: 942, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117821057100083244661\">台北晶華酒店</a>"] },
            { photoReference: "AWCwydg75oua6FThzJFNFLQdsXmBMatH29AQqRGa9nAZBOeUh4F8AJbUoVVslHu6WMqtc0FZ6HhBvSLXV199nLU2le3nvp8XaqkaSjlzGuHDYakIkpTRQBsBVvi4uHkS5HE5OmBXToNPL2W0IkQrjQmZMslpVnQufE1hz0d4eKbDD5a-dGFNBUfdepHv4x0P9EqCgDnHQf-99EKbjQWrJ12BIFTmqjfhRQlGTSSY3_xH5SStv3VtxlQy0bfm51Q_Xe3Sm69JsP2dGj4pUFRvAyy05kLsdD3W7134Zk3w24Hs82nEULASXJv3qnPK9gOY_FVT94JFDsQYAZ0oTgrdBfymDEJ-70ER8B7r0ZoM1BytFBSfrIaK9rWD2ngf1rG_FbOLQ-KNdot_RwbBwpt-jUJcRo_hmsuw9w23SX2KU18", width: 1920, height: 942, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117821057100083244661\">台北晶華酒店</a>"] },
            { photoReference: "AWCwydjOSIaF2sYK91QopV0aYwYysbRNmVqm9V6WVqod7ORpASBfQBUi6XmwsKUUw73pImMuArMA6Mr_45KXjEd6cBae8QkZOKwPZ80QcyVsVFMiPZa22h6lgLiGNzWUgSCFje3xAQzjwipzFeQ5dqpIzGF0UQmzvvd4gk6mIOane2-PSbpRR-SYr4JPcm4y11IVzJrG3K9Z_3wQ9DB1yz_ag1Hb0Y4IdlflcZwX4BdURVvTFtMXD7jHStp2t25kMpMvMIe85umYsA4oN2tmGE7ZEt2HeHiI8cUnMrtwRfu780IYbJvtH88XBQImQWYH5Ecgfl5uiVJUA0pP-le5SLgmfi8ubqJ1QxNB8Z2z1Dw6J8h6Qtot9rWRl80aTgMvULypXAuoF8Y835NA19o6WbbRyvohPRpBulJF3I6F9ZUDQ1oybw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113295821719402771284\">扣欸</a>"] },
            { photoReference: "AWCwydjBWbTio1ZqYuqVtreBndWPk9fDFpIGlqfL_1JaJdQfygzCSsCHstyEl46fYprEgNl_qssB-LcnS72Vdgj08XeR07difTaHSW8xlNI8cJtGBQLvvP40sKeFqNWllbXeVT7eVF_poPhUMzEcjqqcVD-BwsKYwn-agQm5Tf76jKc9AoBvu9ZNdXKpuSqVRfYSfcCTMZDEel7OMSBDrC-GPWcWlqH4NAix4p4ll5ugTzP4OOK5w-vza7sjscFsstzGXXa62b-n8msxgdrAcpAN9chKdlwVPiXWyH_0t5hYzFXZq92S2HxSVDvV6awrX4h7Kit_1m2Xxss5nOP-3kIB1o1dkvCSDxSq_zfVY9RmpGW0OEkwCQx-_z9EyEY7N7L_KHKxnXPY5eREv_N_lmgPTN4v3qwqztN3mn5FFCuhls2_uw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108282761107057420423\">Esther Liao</a>"] },
            { photoReference: "AWCwydjREM63Z7R2hI8JzjkXhHnDIt_hxyn0p9H_3AF-az1yG1A8fJ7lIvQCaJKgV_M7lVFf7BhDbLciEQy_RsfFrjHPsuh3pQ4oSRgZCjLJ-HZ4ZdoyYQxp2Yw7w-Y4jzBunKtL91uzqWKAV1ALLk9Fy_VJd2ZoFCOdceFKEUcX_vui3XrE4kGKe2H85oU-rK8PJ39_-aK7GquoZi5QZ_b0F6pNnnI1Iwp67VySnctHBXFWd1hgn9BsbMwjQ3NsLrPFapeyxRxlaCwGk-9D-c8CItLUQWH6HhQd8Qq5F1Mx7iZBiu1c97gqSDZc0esZ_rDKSW56LFRfEUpMYVQJci6nedDyTvB8_j0VSyVUzXHgyUvR5y0cb8osoHacvrcHJUqgh7nIOvljcxDVg3_Kl08NLrFS-_5mxFVTPQT6zvPHiLiq4Brm", width: 1024, height: 632, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117821057100083244661\">台北晶華酒店</a>"] }
        ],
        summary: "중산 상권 중심에서 쇼핑과 미식을 즐기기 좋은 클래식 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["중산 상권 중심에서 쇼핑과 미식을 즐기기 좋은 클래식 호텔입니다.", "평점 4.6", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 3號, Lane 39, Section 2, Zhongshan N Rd, Kangle Village, Zhongshan District, Taipei City, 대만 104", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.regenttaiwan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7944188266752151210", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%A0%A0%ED%8A%B8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팔레 드 쉰 호텔 타이베이": {
        photos: ["/images/taipei/info/accommodations/palais-de-chine-hotel-taipei.jpg"],
        placeId: "ChIJu55KcW2pQjQRUKkzmvWDotA",
        placePhotos: [
            { photoReference: "AWCwydgN8E2x6mvsYgOANpGa9mtDKx9DOgJT6MFdpO3-5aAjZSM_-Eqg34g1c7ReWb2KQpQ3xJES0wfPiPkVdmwokX7x8zNm4SHCezWlhqMZM5VTN5PYkNqMIccwBGM_E3EDdYgC9kk9YNpxxF8xoNG8oTcH5uejXGUV2SfFxRr-92_I90YZyLLfG-nd7KVVxqv8BRQlYEFa6W4YSWbltq_3pfAjnzbu1HYfWgjZWI1-lPGJmBiFIx5E9M_igqmb5ZvEyxjTak36-KIJYz7O64EuVX93fs9AbrccfBjRKphv6gjHGPwxyYarztfZBxVcK73kgdIxIgnPjE45ljxrqs1KRiccztP5e0D6BnirhzKniH2tB-O-nas90qyYtNvGtrvkEbEvFk0puiJH91xmHr-9rxvyFNf18wA-ku79Ar0wo3fk5w", width: 2797, height: 3954, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102155867642737855490\">君品酒店台北 PALAIS de CHINE HOTEL パレ・デ・シン ホテル</a>"] },
            { photoReference: "AWCwydirnut5Tfo9LFf0ApLeqBKh8q6A-KFQMrnH7ESYQl7zUp4q902841gIloa7h9EF4FhHfMSVVntwxh8E7Pn9cP4rQZakDYnVaqTv_F9AnYvxGrSiBrRQx-1Oy8t4t9_N5xYCCekT1c8FAQLHIu2qaQTrhv8Wdg-aC4QEt_W8cWhxLx9KmDhcGQ6HtHkMLd3FT8hdVIEzObBlbV7LAzxQrfU1DVXwsneKSsC2p1e9Rf-u6lJd-5Frgxm011TiWNJVAFYoEIyOHn591mLixSvtC6WsWFDP71g-Ag-QF3YuWc9RwlgeGTIjwNOvS45uHpc9DTEgAANLWFZuc4XYmXTC2t0HXMlttoS-5epxvMumHB8_fTi3Z1nuWnCCof_ITEkP3NMRS4OcXXlsug5WXtxMNwr7QD06Xm8SW0JU-js7j1g", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102155867642737855490\">君品酒店台北 PALAIS de CHINE HOTEL パレ・デ・シン ホテル</a>"] },
            { photoReference: "AWCwydgfFlCOgftDLb8LX9NaZa8ihxEEGGfeo7LqjgBy8qcpJ5P9CcxjlOgZEdtO0EousLf92zdJreHnNGzby0yNEpcxXZB0gC3KoKuytcjZSAoq1H5GSnmK16KbsXookedDS4wexwxNvi10moP2c4t3pO40YRRljBnPfnjnlZf_GTb5mOHwGDLkARGc5IQLOOaRba4L-sfGKoJH1ApsqQi7XrdGXGH1pfM75b7TIL0XimydBT4BQjhH2_3iyY-04dFJEb3mLdKEN5Th5yfUnnoAf1s7HEo-2Q2qHXVfYfKhCf8yTvkQ6NMX8gmfqjn5DeiTZrp6zL2RvM28fexa8Y4uOtiXe-5IVmlD6_ReuGpr-5aAC7e8owseGTb6-UnLTlL_OE_LB9wjBHAYsnrjRvZAQK8kLh8Td8sgVEghbhFzxSzUlHCm", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109341695956274556157\">Grace L</a>"] },
            { photoReference: "AWCwydjdy9VzH2aGn0XjmNO6ZWI93E-q__1tmjBy0PFHFLhEK7zfsNAxcb7paT3HbZ6JkcPGp7q5OJ5ae3kBPcAHn0JFVKsMIwsf_s77WWdsXLorE3HDaSBN_vP6RkZwrIJrLZ8KbnsT8q6GFSJcM1_ph4ur8UocSVna6ieavp9JyoFdr6lKBAgXqDTLWMdmQponEhXCoNe1dfwI0esT0pnUxV-4HGjfFXu6lACGl1LOrpJmTWQa6waeu9cAzE08sCD5y5uvuJF21fm4GpCsA_K6sCK_2-5lw2-tjOAAn8XZ19GU4UTDWBMVKZMX9SggIIg3uoXcMfzw6IDIJwKydeZWeb222EAiO-AR275YjReOIOSq4CcoZ8RtWlikCuIRNjrTHintwpmpSm78fJSoOzKj8KLeM7edldLUGt4yDnZjn1IVfQ", width: 4800, height: 3462, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102155867642737855490\">君品酒店台北 PALAIS de CHINE HOTEL パレ・デ・シン ホテル</a>"] },
            { photoReference: "AWCwydjw_FACk6W0SpRsmi6Kc8TAdIY4Z066zw_ZG6q8DaylskzXPPTHmIMZxxNEzE_4q9aG9iv9GOqC8apw_0nzBDk9OtgybvbYVTocHzg2Y5R_bIhvpY41U4rSnkXvlC1S8YYh2cHUEjqs0dn0Ox5IbFLGNudwqGw-ylheuivuXDSWEOgJvg5iLCoeZtRPDHQpMFbbSoETceZzySgUjTpDnBLFCuXRicRviwW41Z7i2f4crl8zDTMFvxZWcVNLZQQ0b4BQRBJxoSC51qrzrawKShCWcXVgK-xMIgyaKRGyPci0jtaP8fQAaJlG6qWkpI2mSwUI16CQPZmdLBd9hnb66lUKvkdLVYj6z8BEDGN4l5edHXycDu-geQZj8K3WtPcfE2YhDbr0TF1n0ruDA-P08YRhXw7LcEyajydZBG1H1q_hIw", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111225739606308536630\">Yvette Hung</a>"] }
        ],
        summary: "타이베이역과 공항철도 접근성이 좋은 편리한 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타이베이역과 공항철도 접근성이 좋은 편리한 호텔입니다.", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 3號, Section 1, Chengde Rd, Jianming Village, Datong District, Taipei City, 대만 103", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.palaisdechinehotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15033723596993440080", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%94%EB%A0%88+%EB%93%9C+%EC%89%B0+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시저 파크 호텔 타이베이": {
        photos: ["/images/taipei/info/accommodations/caesar-park-hotel-taipei.jpg"],
        placeId: "ChIJWfZUVq6pQjQR3Z-1OU8ILgo",
        placePhotos: [
            { photoReference: "AWCwydgVpr3S7HUYqSk2ZAN5GCMH8rcGxT3qNZS2WFK_mG-VbsAym3euY_Xx_nAg9pFmWjDI6PbZZ2fzMdnDnaJtwJGiMKCKNtfkzi6dRU50Cb2sl7yBkbdfX5o1GWXZYm8fPmXlA87_YT-M9-nHIoAfDpSl_ycUSHkymAOmDqlWNXZwQb82YCWv6xeAvdBmLTXIS3_8N9L7a5kODWV8icO042mkPXxMMRlJSzVbDImUyk6UFFH_1NUdAfA437vkJ7MCrVTcZtLE2LWSRJKHC7ImDdA1U_qWe_4_XhIL1OSzjbv79MV4Dlr61-6dTAjSZsdIAsqOfruFDQXz2RuYqGlSuAfHo_ljzr3hOFocOJm4Bo3jQkwkB663AeuvgqMtUkEaZO4vXVn29eevyfC9zubr54E0_KwkWe_a1Pd4LF939DInMDHMqFSct0sJwaQEUIpC", width: 3706, height: 2774, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116270384280031049436\">台北凱撒大飯店</a>"] },
            { photoReference: "AWCwydhXGgPMcJ03k10y4BgZc_D8eDj7ATIgj2j6FJi9EPsfadIuq_qrqMCid6hYgblpr7THf8wGrBOSd8t_vf5vkJZAgufWQqJsFWYK20NILGDBy3QoC4t3Hcn3YXqf9Gmr4woKJz9Al3RvDFzGqJQkmVRmdN_DdOTDjZH3GViwhSCjWUBgdDzX5vssTfjqdmh9J6kBg4lf0TYcxxxgDL77E1aBZzdwAv72XKksn-hKrRqyr9A37Nfk9XluAyZXKIffWVyxOY85Zjl5hBfWstw_sUmM05M2YYPu1yy7gne1uJFqOboGp2QPIe3dVYv4SXDPe8sDxEhBsNA7DrT_j1Uu3ubc-rRdi0RUiVrX0VsckrnyGnKraUGCz2v-MV-rlXXLWUCbzIL81jG6-5NyV34e8beaz1bMOjXTuMCeIiiP8BAFhbwc", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116211612431229144544\">巧雪</a>"] },
            { photoReference: "AWCwydiYOidm_WyPeeWe4jZbfWfhbrOF5MbLUC1Seoa09pQ78MNurSfAo3BfemJGyXf1M0NpRXjyaTjTELNhkSdo8FdTZPiyeJ0MYtfOZeuRc2NlLhi8yEgFH5Dd_asWZ22KKJeI7u7tqXR_8jQUKHNc811Lt-iYPsg0lrzc9S7q8mJOqOhVMGb3YDdliBChIu0Lpoj71dJdnDyVfl9BUuPSGg5LcW6CYnKWeKGRuDMbS3ixJE4eCkNO_FxXGl6z4X94mDADtxrNQ45foeyjOKaZbeNVBvyGdlxoiN1jMythG9kOBti0ktm6T75WOB4sSZedqHiPE8I9FBv8WlmD_QuIWqKaQNA-imgse1xWmZuKoS518ccTvPBGQSbqj469DCFrIAIVc1QNzyNf3AlFRhGpgX4HEdSUxBSQw9ZfJT1SfOU1tfE", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108816896420548553291\">ヒロ</a>"] },
            { photoReference: "AWCwydiZjAQsi9kdPIfK8LsJ2J6ijo3wbCo6GBtUPCKgX1YdZULqa8xe-XERtJPTxzVY7StZsd1zmQK3pQc8kZ0qFLxfDnrAVPcMRmWLx4vwy9dP7XOJCKAl1XSXmqkDxZ7O74TJ_gwpac3no13wQuia2degQsqoFXrr8-xBHVaxOcee01ZUv2ckRi0iZ4SSVhzyk-1q6-c9bMPjRYg45YeCIJRUq6UYCUMk8QwaaGm_NJw1OQYJhXKVCGKk1cmIF1nGnwONAjhdYEWHOpR5oVZIUSKWZDpfjOGAkxteMgLkiHj-ggUGc2s6P0nNnAoyz_S69prECcsd5OM7VSdyF7ZPnKvwJ2-_pJRPrEfnPg1TYrw3JINmbaaENEwOgVSPwwTqyOKaL-zH6ZWgRoZClrLVzJSYt1VaqWJQ6jAQbKXzw-_0eG0j", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106758345638223161778\">みき</a>"] },
            { photoReference: "AWCwydhe8-gskTI5_huLG4RTz6bonKIYcXksD3GhM5w2YJ43jSSgfTaybQ3ECMXS9XkT13iqu9GDzoFAIZ1EvRnbn-aBLEvbaQuX3hFaWj4YdP6jk64HFLL6ofqQ2aBKre--PoIIcJryKHu9RyIZ1KOwGq_ivPPOtHPLF7UFs6c3oaL2x9C-FPHqAEZIt04lfLF0KMIb_wDDc966z34oR4ThqJgD7rwFwPkDKP-MC07mbUaQRSln1fusFLRgJf2ohTDggPVs1bUqA5U-iTnp7-RbnaERRdfSNRaRsMdCbf6umL9B5kgxMzvUiS9ukQhZPB4n-DEBMeKQ-Zg0YUzy_59chIjAWloC5TMcY3vW5mUkL7g0KT7QklMgkno4xaAe9ZQFtHKWk4d6RbL_cBYFdjwdADtnLybIzJ2NsKsv0CRkajmJ1g", width: 4800, height: 3705, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116270384280031049436\">台北凱撒大飯店</a>"] }
        ],
        summary: "타이베이역 바로 앞 위치가 강점인 실속형 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타이베이역 바로 앞 위치가 강점인 실속형 대형 호텔입니다.", "평점 3.9", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "100 대만 Taipei City, Zhongzheng District, Liming Village, 忠孝西路一段38號", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://taipei.caesarpark.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=733532925671612381", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%A0%80+%ED%8C%8C%ED%81%AC+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시티즌M 타이베이 노스 게이트": {
        photos: ["/images/taipei/info/accommodations/citizenm-taipei-north-gate.jpg"],
        placeId: "ChIJt7zzsQ2pQjQR7sg0Xc2rpss",
        placePhotos: [
            { photoReference: "AWCwydhV4bLWU4TNf30vHjteJ-Rm5SAMnFvNZH5OllyzzIeLsgCRRbLZllPrj1BBIf4dr4m-prTbAJz9Kt3MYuiYeLhh_dmnzF1Q_NZaeHuWLb3U0H6rbG4N3sbyNi2_ciBl7-4pHFAvlU5GHPZXgwU6gKnFA4Fcahl2uEuXCMpr7BNtuHo8hkKG7Zgr8dBdK9J4OQZSSocGiEoDP4082cEFw7LEY1XMYVFRwqyHcKye1qqps1_vJl1pEeZB8pO-h6oPLBnH-yVz0QIpajUwt60kVA6lSd7Wc692CNEGSOUFeYvd987jfo7kaGc1FdGe9hTPUlpfR0pDV2uNf-Y-hbu5WZSDq4LKGD8znibx4sm23svRBfUPc1nUJgDU6DeqxXFo_f6v809W2g_XPcrUewp8DL2zZbpWcGAx00JOA0_pTtA", width: 1280, height: 837, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100493934516348039911\">citizenM Taipei North Gate</a>"] },
            { photoReference: "AWCwydgIRrORSTfZpPwGiHnf8IauRSvzvF-BPum-c8Xsj4orkRxjMeRNNxOyPtpp0V1-NxF9Zu_8KoWsmE56bagwqeYIIChFVaitr_1LXn7RGrf-g-jDaB8bFraYzl-kD4atY_D3G9m3GPZgt0_zeKgHC-q9EY0zBQU2Mt71R7c_-DFPXxVLF-4--mYkFsoFTmBXAgf1Sd4sWyn-8kZbWc55Jv88nwe_O1HRlvgWNV1T4X_9_516YoBZudAJdNleHaSgIG1NJ1UUaJGDLuczFOfM1t7T1sbrSbpjB-E2-sv-yz3OLIGx-BcJ4Pv4oyNynv08o7pJ1N0Z12RLnFOcKhn7iCf2-i_wn61CC15ZSe_lSpEwtuRIt9Mal-Tn-7-EzHBVEd66HFUElxYNGbBQH_lWIkTAl7vq2NQNV3n2svWs_9_lMA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111282962264186354496\">薛婷方</a>"] },
            { photoReference: "AWCwydjt5P7zM6qcrqUL1Ej5ZuRke9GW9J6UM2wS3DYksVT_i4IRI-Ae6_DNHyEMiupn4faNAiz1Jo4ddYgg2r8vpS0eOY1yNHiH5fihMmxpxFSqUC4SVrlGsgz__0jNHjSCkYMq_y4Y6AMgCrRk4lvYrGAOB_nZTEuWauEdoQ23dd-yPEyKOyxZ64UXQnR1h7h00W3wjw7i--2cV6Y2udML7yogJEz3SnaBHFpovv-qvwYjBVEEwzsOKLInbQ1IbKV_o2iZAAVKUCcs_ldRP9YGWNPm9_b3V9MxDrmFNeKBcSJpVJbXDcrEo5W5br1GM7V7jwlAFDWNB0HsvYanMN-C4gI4NBPjL8Qzg69TRA_N1luiCGlWzN8af-RZKQ0MSW0onq_3lWdXNGmApvejqrCWwf_s97YOtg1jk-fhDtpouqFNYw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103167608222413896806\">彰</a>"] },
            { photoReference: "AWCwydiBp6ljpoDpOG-iOnr6stcVwcn1_kfc7KIvzxxj1MhNZb0gctubahoUZD-aTtbwA-4HDUWSnJc6pJK0a4vBbRmRwn1JZmKhZi2jIX24uyQKOJSmvzOzO6JYr7yyGbwp30Wk-agMRDxJ86OWG-4hpvZdStw7Z9gog-zb_WQgH3GElP3XPprkyAinJwC0f5bKj5jXYcjIeukdP-hvySFvdVaTWhuPukTEsA3QfGZfHtehcC-uvmY6BsZuanhcktbCn0B0R7cIK1GUpcp0xGWMlObMr8HbOtTal3pjBg4Y7qo7-n9ZgqNDAzeRoi18qu6huoCzLCZSt7t28dBc4RZo5rT9x_XiS6xf9Pa98wX8ZQwL_DL1PZJhSDkZJ7cLCuy02uAsJXXkz2w49GlnSh03LZGr6o2dSpexo1kPB0nW9xH-_PIC2hCGxx_6UrC-Z9MK", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116155442093873794805\">citizenM Taipei North Gate</a>"] },
            { photoReference: "AWCwydhbAG_bZV5UL799aDdUyDprs2IY6TbpRILXuWkquBU_Isp0Kq5yOnUBsWoiH_G9h4kKS7t4C-PvNJ2_6M_OJfMq909TkV4xT0J55g3G4qwd1jRVlrQPdEiSWfiuaxFZ_d1HRSCogeuzWQm94ADsuUI9GaTYv79Ea-hSX4Enh6YZBPouzOLnDY4rJDYsfbn408dBvMoGh6u4JZOlq2mTUYhCWFKXHS6zEacotTEOZK7HpjnZWyRIOm9fKGPrHMgvq_i5MvIQQ_nIPwHajrHXaBW-_qVOB3WjW7zRjwifuwl-ZTnARy3tdu5KL3GytjcgUqLcEnwPOAwMM50wtmAmiHTcpEGZkqixDuj6Nch9OLrNcG7OVTRQl0iVs3KBO2HlVKzEpgVRGYMl_Z8VBF3jdTHEkCRPxWOpIk5hC4X4qfZF9oMqU6UPBFv8rvpqPw", width: 480, height: 270, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116155442093873794805\">citizenM Taipei North Gate</a>"] }
        ],
        summary: "시먼딩과 타이베이역 사이 이동이 편한 현대적 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시먼딩과 타이베이역 사이 이동이 편한 현대적 호텔입니다.", "평점 4.3", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 3號, Section 1, Zhonghua Rd, Guangfu Village, Zhongzheng District, Taipei City, 대만 100", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/tpecm-citizenm-taipei-north-gate/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14674605334353725678", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0%EC%A6%8CM+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%EB%85%B8%EC%8A%A4+%EA%B2%8C%EC%9D%B4%ED%8A%B8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "암바 타이베이 시먼딩": {
        photos: ["/images/taipei/info/accommodations/amba-taipei-ximending.jpg"],
        placeId: "ChIJX10H1gipQjQRfmZjnra3znU",
        placePhotos: [
            { photoReference: "AWCwydjDucoIYUbs2l2Q2_DcAc6lHF7x11QyhdvfXkv-JGfpRrZeaqg_hA0QQZebwXdU5R5sUIt7TsC5Fls_xYZ4w1gw9V-pBKRgmsxMU1-oLunHpdEXLh4E2MVgFW_75ahUudh0YZ5N9rgj9LX0b2MU4CMH76EeSB_82r2qM8H8MtZEscakW-V8Bdybr6VZBbVMLA1rraih8MkYyQElcuPmZlubYoGx0-5jFZZ1zXx5pjceo-gETZQ7SNZh2GCaoKyptl-QwODZUG-evfXyTnAcfVZAbDux9yFqtWYTw-XuwSSfk2dl6BQgREPeeBqA4TkyEGKR8SFBMW55my4G4t3aPWTg-iGw2Ix-xQ3uLKoqJ8goGYA-Sl9UW5win7LHu2SQRbzARBtbHg-edn75pzEQ35slFQ9GNhBOwHjg9L-tMk156I1R", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107535685777807821748\">amba Taipei Ximending 台北西門町意舍酒店</a>"] },
            { photoReference: "AWCwydgI68nAKiXIHLIbWlxdHGq79EVLkw9qZNeo_8Y7WHQp2_ovvbZlBYEiuKEEhmJtVpS8PIYmKjxPlVT3iW9Kpir8JiQwh2-Yer-D9rhcZAT9mwZKbMZU4sVmJPy15SX2jaKzVM0Fh1e6za3W2uxpn2xAcsen4yENXmt0ORrZMT2y98GiCu6fiIuv7921anmTtsLcvcdhm9GdNKlboSmR87GmPSswLqGWDOICy_CqNzO4PQbBpiMG3MLk70w1n9DRCvRxMzWgozwcGm85Rqjk_xGiEIWV7GkAFOFiHnAZwwG3RTlERZTFuFqwS3L476JmcC-23gdK0KAB8HH_aAGajg4WBpr11JV5-v2yXBJCcHAZNmcNhdd7-GWJEQRjVE_WfxwybPZzV-Yj1i4V2x2H5h1T80A0EfdeIvIO1ewrJ9r0UA", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107535685777807821748\">amba Taipei Ximending 台北西門町意舍酒店</a>"] },
            { photoReference: "AWCwydijqnLyk5W_1OyYC3XUZB2dHgccJ_F-bm68xsylSOI2l06gQGO_obSAr9pGKRl-hLSyx1X-nsXhC9eY09cSIxJwKklJtaAcsyNhGONFwSvfLE7m2Ar6wrTJ46RlIaASQrnXMh-MsNXDPEsjeq7-VTpO5XHmPoQXqX50dyXOHeD-kf4hAHI4txbkYu03mFxRml5-FfLjBYyoGAAJaZkaw51A3thWJUeBsn7p1n3Jq3ZERmauZPCJQobhOJwa3Ak7iEit1PRex4FZCveGDoZQQrd5IE_tjLDCxRY1h8bXCdBAtIyhNVw2mQLHeyeQ1fLYur2G3G55EVjZizT608Dc0xr9uNZ4zErOhqcIL0WdaYVK4qRGPQx0Pe5MSnTPN37GTax1-n1wfI9l05Q8JkhIdrb1TITt26Ix77CK77xH-bnpM9c", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103387956675895955892\">Pei-Zhen Wen</a>"] },
            { photoReference: "AWCwydjqzU1AiklGKaKneK9e-tvYRQygoVN7jVmf2OGS6FPiF3hb7vGDGLaAVMmTiGjDp3G4jRMXEaYgZ753NzJEw3bcsQjUIqD8eolTaEJMwH6UBfsibOLfPE_BDz4IwZfrLBK778WPuB72hsBJk7n0ryywUQzW9tekY7ubHClabSkQ6rOeUySFrIe7XbgBpCIDhiRa8iolN-IGVbNDht0bDoFokUTetLTDXFvFsQFYBEtq61GJvjwiA2FSz-8CUT4p6spACVS81m_9U2tcGDk9hDQwO88VhWbz4lmNHLkyGD57ILAQVPmnVlnr2K96dwYxlpqzkhCpSuXc3RY8v_t82IEyoWsDv0y3yc36BZ3pyWpbAptgOsievWpHJkTWxJFkygn5iTKrVxk85ydwWVbA-2wqLUqNVkQ2v7a2fmtTdpBGM4Ao", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102713073222178647849\">小六子</a>"] },
            { photoReference: "AWCwydhbvI54qjpK586GJHzpQ4itII2SdhdBGKT9xXfr5e6yyHRkoR2WA5a_VGt3_tXBkZ2g9JuWAu7zwlolfbZI8wCd5uU251eBJVu7e89AsJnobDGcH-FFicWImIwts6HRmjczK1U2SICC-bLb2WVYKsvUqrWNik28o3Fozreyk0mnrEN1fOq2KHVQuCMRIjS4zELXj7aYhYZKlQ-R45eOD-ZznHAQB-4XbMQoNuecI_blohqJ-ndf92G5i-hKd9VmHYi5AEpuih6pWUfmWoaIvJ2aVXijwk4JO9KF8_lPCHzHTw34Xhy8kttmJ1bPQYSUjwr15ZAZnMgdQXKx-klsiKntYpoSQo7myR1-s3OEsYu_gOmAVkWuz1JIpjKT-YUTz7CcdvxLmSYpsdPfB5OFDPc7gIOJ-7-8s9LmBc4ftdO4rVE", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107535685777807821748\">amba Taipei Ximending 台北西門町意舍酒店</a>"] }
        ],
        summary: "시먼딩 한가운데에서 쇼핑과 야식을 즐기기 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시먼딩 한가운데에서 쇼핑과 야식을 즐기기 좋은 호텔입니다.", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 77號, Section 2, Wuchang St, Wanshou Village, Wanhua District, Taipei City, 대만 108", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.amba-hotels.com/tc/ximending/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8488924342609208958", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%94%EB%B0%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%EC%8B%9C%EB%A8%BC%EB%94%A9+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로더스 호텔 타이베이": {
        photos: ["/images/taipei/info/accommodations/roaders-hotel-taipei.jpg"],
        placeId: "ChIJyfMgbgypQjQR3I_9tK8K8Rg",
        placePhotos: [
            { photoReference: "AWCwydgJCwbcOjLbu6SQSQfSUXsXyMQla2if-T5FZFhxXLQZxfg87aDz2U7O_cRuy5dIIjcVuuTbZNdXJAHV59bTywXwhEq2sR-wizWxlEpbf1qN14f7yKE-febmMpNpBIBEjdZZuyhdUdftazjVX7ab-jXr2RnUJPGB8jbRGBEEILufbWbSMYP2Z1AlohMYE0FN_ivtty3d24chNjqLv-X8rJci3-gRme-B1GZQZgVxI89XJiJGmfEYN22MVWeSwmcorZPBVzRQdu2Ls1Ffm9Ehn12I00tWGjGCVq8txO0Y_pDuRpzaRJZUTeyzlwZK1fGpRahA1YERw-k6a7lc5Zum7NeiYauIffr_L2qnE2FoI9M4JRLZU6lDgZ_FHVTQyXM_rbGgYA5OEyqJ_axTQArQ3cRHbGFxFErkxp8xNGR8Ervl3gn3", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103341449026653495514\">Juniwarti young</a>"] },
            { photoReference: "AWCwydiyFGpbd3s6fyPJD9Zbp0Yd79ZdBLaXi54-tGAuRDegCsqzeat7gdlOzdEHIbIFCiQGLZszgfdCK8CEeQOvO_-SMhCdPz6Zm3xlS8Vy7C7ztm4_eJHn27p-oKdzyhLlGh8AnL9Qunco2cH55WHDYcxnzyiTpdjaDX8N-0WaD2UIIQwDGSZT7GecZv4hJ1kYDvOp4QYfoXNFr0tZNUmpreuXE9mSMQQf0JhF4YAQdJuMkyDWzFPSXwJ0Ig7DTmjf7WuTXcetTkGNUdGqq9KXLhQBIN1HqM1GvI6IU6oYIKEwDGt2LgBIHdjDCJQ9PQyPl4ahj2SQULmMFR9m1WcQFYmQ9nxbzbU9LmMs8IVVQFV3IV5RI3n4-ZvazwILvv9yeKIJtM9Ng8Yaty2VHghPrnZdNY79yadMLPtZshi7_9Xy6w", width: 2560, height: 1707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104369407823074546991\">路徒行旅 中華館 Roaders Hotel Zhonghua</a>"] },
            { photoReference: "AWCwydhqO0cKp0Lx5g4ecJNpxkEQ7x7VRuZ-m4yxwsjkrCHhXANQDhY2pW_rrqrxxm2V_ig92CxWF_8eChJ-BuzOYSAspaCAKW2whhVfAHvSNSnaqZN0ART_7J8YOL9tUwyBwJ7Zi1V1dPtIiUh0Q9JGE7uw2G-5VmafFwJ6Z5cAKbr0sO-UBqsga8crJ8wfF5Izln792qWRWo-PWdtkZ0KTvNqrV2Trze_xLE7ELhaEtwazmtwI8SVerPDRbXAgxlhLe0GZ1uMMPSkJLyuzHeLESgp26TB0N24xluL3qU44iL0PikedvXspQZbouKq5WUgORVY8iET6syQcqFGaUVfRNuF2eiwsBAu7dk3l2TAdQt5Meh3hkNZxCL0P8L3spPn-Nywm6UMTnQ6lczjHGjzCFT3JtNyerwuLxQ18hGq_qNMdNQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114651393700550924874\">PoYu Lai</a>"] },
            { photoReference: "AWCwydgDJKW1EbdfmUMAqxVQh49k1dRLnJpuYYFO9wTF9w8-T8FQyKTe8J7sFUpNoAoQtsZbQF1nbjYAIetq2f4gjhnuD1V33WG8wcHKU-0hBdUPBqR5Jnta_jF3G-pCubaBt_v9s33JaRcGZ1vI_NpAq6q_BluA0l7B5AUTFqefsQTi5A23qYqOCJiR6ZGQS9wqGdHm9YF-knxgj1lm2XkRZbYZJ90jm6il7QJKqC8Eg_ICwBowR_ZucfttMZ69f5wJjYAAkXHbC16xw1_RTLp_AqUsXRlV1INFpjW668w_LKwhQQeDQkFk9JiM6vI7vjeL0CWS_BCl-MuwQ1nN0sJR1mz-oOEfI6bp1epxW5wC18Sqrj0K1L4QaWG92KCigcDwvB6JSYr-s6ZsYz5jDLZCqddVVLZbV0sFZxqqLlr7s9EX1g", width: 2560, height: 1707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104369407823074546991\">路徒行旅 中華館 Roaders Hotel Zhonghua</a>"] },
            { photoReference: "AWCwydgP69dS4dLsQtOh_A75L3W4vezhv_NA0nE8gbSl1xSG-ZaSV5BEKU-VTJuxpi449fwBlWbhEQMvQYUVxLd9Z163EL3uJBPMN2PV-6uvuG9rMjMwWjuJDCcQZ4EtgXXPNPI9rEmyd2GfZGHoQ-28rSKQpgwCBLrbEa4xZRgjMbe7qJU3B7nFPzDgAWioI7ZWbOwLXs2SkHgASFgDPxQnQRkKznKv5DbOIycFkCsX4x7qy2cf553Ox1zaewU66bldch66uU6xhS7DsRg0n3MwzlyxJXqWQigpxIv4-dTosa7ugk7tRfIc-4widqZpyBIyE078MTvJ8oprB5FUr_aRCFuPLxhBpULGxg49ChLDa8y8n1yaPSUeAHOac11d4w6lLE5X4OKQ41QdXFzQyaNKyal6yaMMS8i26QLkkyy-tRw", width: 2880, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104369407823074546991\">路徒行旅 中華館 Roaders Hotel Zhonghua</a>"] }
        ],
        summary: "시먼딩과 북문 동선이 좋은 개성 있는 가성비 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시먼딩과 북문 동선이 좋은 개성 있는 가성비 호텔입니다.", "평점 4.8", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "100 대만 Taipei City, Zhongzheng District, Liming Village, 忠孝西路一段80號4F、24-35F", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://roadersplushotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14920995906899663830", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EB%8D%94%EC%8A%A4+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스위오 호텔 다안": {
        photos: ["/images/taipei/info/accommodations/swiio-hotel-daan-taipei.jpg"],
        placeId: "ChIJJZz0UNCrQjQRFvEkk_rRa5s",
        placePhotos: [
            { photoReference: "AWCwydhvn9sAf7Ai7laInZVdcc93chtIKyVkr0Q_IBH0gH7HEUoWBgi5uXmYjzXb6tYVABKY_lNMCq2PC-bUaFLQKbwB8mMYtdYbgl_-PSaKlgZmzV4ShHnFPMMxPkNyaL00-w89SyGUDf21YX5KN7n1uSwclTZp9ZXx8P4Zq0NedqeAsIzTOAPPC1h5Xd10xirpD6QqArrQgUHjrwCHQRE3x62KHdbB48_vsCRcYoUYHpvqL7WuFTPa5dphGHd3YwM9Yn3AmXAOoD5uCk5pwk237K3YkiPtUWHH0nTxmCowVwHmUf3PCH87WEdTpxdB3ClSmJLOj4ggbMVEkUNKFBWYnsftEinOqWMCIIRSM_wWv0sRJ6Yp9o-gLvWuMF9whL5Ov46s-kIXYuRac87DgUm0-yjKt1dlEf2sIzIE984f4bI0i-0", width: 2048, height: 1391, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100592858796330693458\">Swiio Hotel Da’an</a>"] },
            { photoReference: "AWCwydiUbI8lVB7BJ_1_fJaO3QQY6TSMXxUtt2opIjxSvfVRGenEJXaQbXGb2EtZ8sCQUktV9Uqsg6NigxKoKFq1fWizMHjmT-KxZLyolXUoQPdAItGh5cA77nBa_LrBg-9BEEA9Aaglap8j-b_uR4heIXsrsN3SaVAoT3Y7rLs8ExylUkDB7FvRe_gTE5T1L41tsfkUkNzW-QPo01Z7z09rHlEjIwTxy3erEfcx9arqu-7Ekg7al1P-NleyGjsre3IPskmbaFjpur-lzzN6_ihZLPVio8MNMsDHSWPYI5tZ34dHf8CqGuwi0--J8dCovty9B_RE24uEtI1fyu4_BXbD2QgrxFvcadfHzTyPRxdXm6Uk587tqmbaDPiJvIgGFBMw-CSInIxkxr0LnXFklnQxBIfGeVmgtWvBTf_9S0KH5VC4a9Wq", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113526647134795311025\">Summer Chuang</a>"] },
            { photoReference: "AWCwydi4xegL1P4woV8qSbKuTWfY88CFc00FYJiv6h3nTSZWgmMk7VoXlgSdXtZ-PYAL2s-YNIhy89xJlywcN4mnTcffmm7uBa1aEG2Iu-ByeTiVI_yq2Wqa_B_PdN1g2cadp4yp2YvWfUR1q-rqbuLdj0xep-KluUIPKL8f7Y6-DtkM9f1e8p6j_gbAoLfSHmtBi43a5Ba11UWSSXqeyTqw1yVFGflocD2VlzQrJImpK0BZ0wkfDSAL6UsV5Zhce9sBu1OHxIjqI-W9_tYjiB0LffcuLpADO0t-Qf_AkSWvvZAaCcVcZJor0ICXhGp6U5cGbN5TAYRSwfbSXPAvs3DhjD2Y8L7vKcVnwajJ_a9Rhb5jzqYJk4PDEmiLkXYB1CaZcUac4Ir38ufs3e2a8jA2OV4jeo1wyJU1fyxr-nMdJN09zkvT", width: 3852, height: 3852, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110380082052480685495\">Shaoting Chou (Rick)</a>"] },
            { photoReference: "AWCwydgM7jmXTrXDclf2F6hfjuNyCZM3K1uDCDeuMf0U6JvoXWMeBRFe4bE1st2aacQn4Wg-EQT77EWjR8vr1hIN3q_Mmh35ULR3TIFjCjZLEuIU11dZZsnnGJBZ2r_NP7RxzUEB3G36Syg2va67de-8bT0VAqjp21MX6Xt1ZO5bjZnda5FtXCZgvF4ireH0RJm0BO5Cka6AavLTCOofCXb2KMqxiau-biLnoh7BitVqMcnIuhlklkgDU4k4iuytNmuq3fcv38AHE_FCuZX86FtDWw0aVinyVehS0nnhivqewBbpm-ASnuwfhnvB5vlPmUyxez64sNOfn1US3IUZUQb7_o1UBtMFE1AtcDhxesAE324ecCj1ma31GlBbSf4coJ-s5Kw1-kgeaN4u2U4nQQr31_m0zzoRy1Gbefzbq0tRSvD6Xg", width: 1440, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108457773647875007629\">Bell Deng</a>"] },
            { photoReference: "AWCwydjVHiRxfNu7wSJga63WTDBssvGQiQzX7ThUZ-19gzdLDKSZ_STOkKOdZn6JR63_7YChId4LKFsL3QWlk14eJ2SUflAb3dtijaZ49fKh_A1d-Pxo2Acbat88dgQlxRHyRUUCexlogLBWyprc5jrHkudoL3w466-jlKl2pvEoV8w_atl7GR9R2YlkdzGE6tGmro7E_GLYlq4FK8GCHJCxnfri6Xom7fvYUxuKwprdGKmT_xo1KEyoL8XAXvoS1bVGm5eDpLCclsmMdGYVDMyVOp_j0QZrrgb7WA3hMzkuDrHSly_w1EUxpPL1ObTOWsfXuQiNxsoKVGXwZ0VUJ8YfF-n1d60aOlnNHJ6hipmpBvUkr_DDMAMjDanungzFNf34iCehxPKEKOD6gFi2l87uvmgx3vdBlC83sVEL4wVdRll4X8pE", width: 4800, height: 3145, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100592858796330693458\">Swiio Hotel Da’an</a>"] }
        ],
        summary: "다안 카페거리와 MRT 접근성이 좋은 부티크 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다안 카페거리와 MRT 접근성이 좋은 부티크 호텔입니다.", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 185號, Section 1, Da'an Rd, De'an Village, Da’an District, Taipei City, 대만 106", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.swiio.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11199275772527571222", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%9C%84%EC%98%A4+%ED%98%B8%ED%85%94+%EB%8B%A4%EC%95%88+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "매디슨 타이베이 호텔": {
        photos: ["/images/taipei/info/accommodations/madison-taipei-hotel.jpg"],
        placeId: "ChIJT6hK7c2rQjQRgAY8k8L5EIU",
        placePhotos: [
            { photoReference: "AWCwydjM-6q-v_zEu0Gr0vJbvX1djDAfY8gVc9ObiPqbP_APClFiMjLcBEZyfzDlSttDAX4t7RoK2c7SF_jlwlc2c1GpOAvExPoQA-MeCV13fp3WykuQMJfRdNuLIXZgrdYw03Y7cOdKavU7HZjaQXFV-Nc-EKFETx0ME7GgWHXZnYriRlSbFnDb94bEPTBlgeI2Y7Snr38tbYal3tTgsg8tQNx53T__gNw0S6sA27yqWwo_6fyCGRloFJsVmsgG3qM_iswIq6x65OUEvZCKv_1iuO3mNA37wh6fAkc6sTlMawTg-fO_x0FoJddqN0Av_AphSiIobjBLhnYckQZiCy2Dt2FE-eBIHWUGXNulPc_UCefnkaByeDPLyy51DX5eBBWhye58BRq8BLkEDnVZjKVZnUl2fqLm86cUfXf0B4f5u-tEWPW2J1YAiy2-sd1c5PV-", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100460630311549605288\">Madison Taipei, a Tribute Portfolio Hotel</a>"] },
            { photoReference: "AWCwydhwWRG7WOVJXPky8jPKBAtCmSsB3Uv07INktB9I4hAlQTbq3U0xMvS-1I9RODtnKpmjYOljNe17zrXNbCdgAhSrSWxHj8aZTdjbgIhNIfAfD1n8Dst6_Yokdj1_wVdj2jPob1-AFsnJFNBPTW6cmN2yeJnAtprMvUdQYLCHNcT9jjAjCltgwEEbtPok-MzolLZoKda_phstPUkgfa5gpmMUDl_4K2aGkTXxUzXo62YD2OdQLp8FMNpvlVZgvCUuzA9S-M7i16KL6xRcR8U7X6LBY6JtbuaTOWnxxcHUsqLprNVh3fvVPCQUyk8AcBfIPso7wu7eJSXMqGnswiMj4rRT3MYIQytkoVlI6Ny7_UBRCGuHD3GXdemPFG-ZEw_mUVREYabNasA2GdEB7I-wjUsrkXwxbSZOTzO_fDFpUmf-GNbxi6g8UneBx9S5EJUl", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100460630311549605288\">Madison Taipei, a Tribute Portfolio Hotel</a>"] },
            { photoReference: "AWCwydhXYOAIKCn8POQD0mlEUyRVBehHU4ZDfdyQCYq3X30QhU4grUT8-26dZNAaz6e-8aycLNSmX2t8W6L7QJ5XgeXiRsBO6OocMhXKO_m0WyN6Zt2Rf7DlWV_J1vRbdJM4O8mS4aRZcmi2q48pAZQu11-U75RsdliSbgyVVC_PDZmZpE2j7DWqS10cmW4CZBKsYR3MY-S_7bOI-imF15cL-0fsM-f9Z3weUBgjoachuafVpnndMo--i0IcsAEh1IzbxIM_t1QujRGXyJGEWqr3dQebALWcqBB2PiKNgVuZXGokrKe_rjYPeyAy34X9IKxM8UVsqMDmaDQ3oHzkioHvHGx_2wxWkPOLzY-l7d8ll9ltfjGDmSy3lsWW0l3gTO2sQbsl572GguxNz1AxP-wELK524Ng3TaAaWx71tHYo7ShjUACe", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114923488946457322639\">Sophie Wu</a>"] },
            { photoReference: "AWCwydioF-SBIYoegyg0CaINEeUgej2SLDUgfGA3TN7_p360aqw1OR0FfS2u5-pSWYf4kjnDcUDYoUHoRqIIiNB2N71i-a4ukaVBX3t4RacP5HcdksCcCQOtMqecwZfpxRZ8Tv6IAyYzmnBVUJAhEMl9cpzJ_uR54qQSLmzaJkdSkLxS1vOGxuCYZ-6D6tbUnIydLl7Akxi0Nbl3fJFXS5Nkqbh_GbxRfc2dfaCo97wqe2Hoa29kjKSMbxm5xu9HaFKzG-ROGsDA01o3ZlOA20u17WwW7nSYeldf4dr2zoRdq9ABDecN1IEg9uBgrc-Nz1Bi4FqxLLW_m7wKkgC0xdJet7EAtAWfmriBF5FOC7CaymKmjhetG2KdZKnnUeIcXni5mh0LC_QSL49BcNV9ayJS6FWoMMcJaX5JTm5VNNR5cwV_yyWI0QKpnkAOd96OrQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100410622396997465895\">CHRIS YU</a>"] },
            { photoReference: "AWCwydjUhPglhXL6UkYFt9upU5PS_vAA5dJOS-GY72CqCZ9b9jALGx7X8Zp9fHXhfeK4BHO3eCqHK1Tc1gVMmdBpBZDTnkEPoCQufYRSfW2sJxB50KZCBH8WSOVrUhLDE76K4cFJfZ8-JCAJCzWYDZISu7v1LlMk_c_3ctolVzUoylZ4o8nEwpaO8Kz1hp8m0r7_2Ih5y76d9x5uFcKTMYF6Hnev01RuCcbpxFVNeenATR6zXd_i3dlL_sg4dCcBQOrKVLEAVDDLayX8wtzZqmMkT8pMe_ehH0NI0gviEJ38_yr-dZjQG1eLqMs7Af4pZ4_e_cj51s5AvBZFC_8c74XDwMk8NMve0z2t9lGLcMo5TcOqwV8_9dSnOtI5kvYaPLI9xv8Xk00xB2kYDpD33BXJANApUAVG-RVSLwJII6RBcoamd-B_wMNe72Ec6GW-vXpv", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100460630311549605288\">Madison Taipei, a Tribute Portfolio Hotel</a>"] }
        ],
        summary: "다안구의 조용한 주거지 분위기와 시내 접근성을 모두 갖춘 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["여유로운 다안 지역의 분위기", "시내 주요 명소로 이동하기 좋은 위치"],
        tips: ["조용한 휴식을 원하는 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "10685 대만 Taipei City, Da’an District, Dun'an Village, 敦化南路1段331號", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/tpemt-madison-taipei-a-tribute-portfolio-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9588438220760942208", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EB%94%94%EC%8A%A8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "댄디 호텔 다안 파크": {
        photos: ["/images/taipei/info/accommodations/dandy-hotel-daan-park-taipei.jpg"],
        placeId: "ChIJMbkdhH-pQjQRkKcQqg-re1c",
        placePhotos: [
            { photoReference: "AWCwydi9K79J6EA-r79xYKU7_eJeWcCrfv-68oAqZtsXBgcaVF3xPX7xfx4velwFh4vRtF0KNlPdpaG3yjJ8leZVB_BkHkTiYjFN8tSx5kvlPLG1NmPXTivs8RoBwuAAOW55szRZXY-ECr6f_XovIh49Xhs6HrMSXCoMSKmQ4Gm9tgTF8Rzms4NFLkmIg9TRRt8L4bVWdYRf-5A8a5W_merxq_zNJdVCh44KtXvo-EVypdrUhZg_WPytN1Tfh0L49pmZhFNVVrU9L_JFyOQc1hqVMcRtBVM1TWyWFZm2IL7TTwiR-l48xn7nDfEzHOIvTdcalGUsBT6uyCKE1GuGLbLKftOvPZxdaRnegZdefzWaMYc5BjY7CBMgmSoVs3jyUnLkotNmiqp9kQODmoCPPEu_r9NvFO1dNu8mP9OLAtDzyw5bzA", width: 1293, height: 1940, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115109637047164993108\">丹迪旅店 大安森林公園店</a>"] },
            { photoReference: "AWCwydhbfe3vk3gv8TB47N9M2GOhLAF5Q5Yk-fiHJ7FiXFjPotTdDIPlXH40XD7QK7zVRPAZBFJivxZsBkD6mXCI3GndOmQIavaEWrFXBfKM1JwnogMSO8TcQucJkkz0tizBBygPZd35XAFyPsm2R77PmJQ5ahKzehmAcxtz448DtAQTQGRkUqLgxSkiADNu9TU3JeY2y4CK0bu4jYxDJIGOveL1RIgd6PgfwwzG-mnR5UuNGdBSVPubkGDvpyYvJ1q5Wb1kehNcXL6HeumPSIzKMI-faj_kX9Y-wIq1VGLkMywICcb-IsAqEPGzr1_0_RHOteRTsyuClwAegZ5naEQDbfw_vjwXnSfi9wLh29SJAXXSr5lGS_lVASH-3dH8PeHcUSF0Xg9D6UWszJF1ZRUqXw2r7SD6JBs_i5rkRecW3WWp-SQ", width: 875, height: 500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115109637047164993108\">丹迪旅店 大安森林公園店</a>"] },
            { photoReference: "AWCwydiTrRoAKZuZtzF4ougbwLn9brzkdEmY4fLc_BfYgAoZipJ7hcDFfGLvEvT016JWfQswZPTjYRJHOv6-4IP4CdOBahUtANnoBFznC2DhgSFBW73hyJqAAiJ5ynFgNWnBadaw_afmpEbXRGspFum2s6oMjz1sNdm9kBOjdcQ7bzFa2ECSDBg4LgUGhD27MA4INlltUeskpkXI9ZvZQrV_wP2Ou90QaL2PRq3CaZQB6PxwiTbT_7HbR72ntju68fBsiO9LDPUczuf5Z8aFcdfkD_os_Nu-q1HOJkr3wXubfsQ68QbUU1ahmDZOPfHWajB4Co7GKwh9HoMqDqI7j9fh260PBHpGkC9OtqQc4c2PYJ8CbNNSUg7YpfjyGMxfLWnXfgnJGCeExMic_ExX-fTV4JUyg6HZB1uXtwUhtGHnaEIue-8s", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104429316759523477026\">Y. C. Shieng</a>"] },
            { photoReference: "AWCwydhJqNO72dEU2M1BWFQUB5ImH9yxob7PyD4ls6-CzrGLiOj46DfxB7dIGTbD7rk8PTSZS5oeoeSKkqlbdhyyrUF9nzm9RGvrRpd_poWvmmpLBqmsg61XTxP3SgHm3NqnzQl_gvfxrqaBInbYsb2t7pWUuDXgyf5acB4aQ32YiST20K6Hyg9ZQby9W_wn13y5hCzkgai1DgZWPgmLOQhvoYX5PyINPOChD1DfAct67Oc32so5fWsN0zfNKFlsqPWvPR5WNLkVCPzr5SWf422NmORpXkpwVgcd_iH-zj0tXn77dM7nAoPttZDicPq5uZP9KH6txnBfrgrcoqGAqAd0QN-Y0Pzu7_u05L0VhV9hdQmQS0MObG--EJmuqUXSfqXcDOsmYNsJZSl-itQqJwYe-YXcM_YLrogC8CXtjEsN5soVUA", width: 4299, height: 3418, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115109637047164993108\">丹迪旅店 大安森林公園店</a>"] },
            { photoReference: "AWCwydiJJ53_4mQhvpWL9A8Sec1QEQ9zCgLkKBQC7s4B7ILT7GWCtbUENHH9sTuQMlwLmsf-5Schr6D56faFf-CKsuNwKyu8ZAZOaBV0VDvLAXbJedJUwvtctT3fsZ0mPKy1fK_X2j_24qH3UV3fNwUiY4vZWrmXsjcljKW7WBI33j_EPHhAc94gae9BGC93sQBPHrosWlPFpaT44i63JYVM8E0bKG39o8ez2xgbG3xA7XORC7dfFDw9pgbV08YzggWpesu-nR0v5e_msJM7dJWPf5iZwevDkXVryWk5zO7nm408Mbn9eq9r6id-mSXCNG1HnDEld8_XTfZ6apsLQKJmdktBWmkOe_04D8ihu6dhAUVOy25iq4QNEcP9x8ZmA5LqaJ-GA4VoXJmGurvv5mafI6hL7Ra7jTjXK0Tgtnb_TFgMsg", width: 2880, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115109637047164993108\">丹迪旅店 大安森林公園店</a>"] }
        ],
        summary: "다안공원 산책과 MRT 이용이 편리한 실속형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다안공원 바로 앞이라 산책하기 최고", "MRT 역세권으로 교통이 매우 편리"],
        tips: ["가성비를 중시하는 뚜벅이 여행자에게 딱이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "106 대만 Taipei City, Da’an District, Minzhao Village, 信義路三段33號", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://daan.dandyhotel.com.tw/tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6303820187201218448", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8C%84%EB%94%94+%ED%98%B8%ED%85%94+%EB%8B%A4%EC%95%88+%ED%8C%8C%ED%81%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 레조넌스 타이베이": {
        photos: ["/images/taipei/info/accommodations/hotel-resonance-taipei-tapestry-collection-by-hilton.jpg"],
        placeId: "ChIJxR84V3CpQjQRLC3zJq_aA8M",
        placePhotos: [
            { photoReference: "AWCwydjKDJcILgHc1lUGgKpgBJDPQvmTc_ym9BW8wV9AcWTVaaP8sTU5TpdYsCt0tzDVCZ9vlAfZr2S8_CD1lQSCTzH6ubteUB5pUEgggdn-2aIwXiLrqII2k5Y0nUjw7poBn3dH3XSt3LCJPW8C2UUX-Fd3rErbouHl6GKR_pXIg4LlACDK_6JUMTln7qNXnsewuoZojpOGnT_WqrmRvHrk7sS5N_IcdOtzzfPtS4F6QnSvzBTNA9AT7AanACOO8_u5LNWChjHp3vxhWLpqKCGuxcCq_PvlLRzGnLWPv1RJALTxgQexXAvY9SgcBFh84sZVLWSAi328_Hli4Hu9dfTizC3m1rVcm9zUdZjvR-XSRipmWq0lGI9NTw-bDRyDQt133Jvg6hhDrlB6g-L0Osb-m3z2oIWx6clvKarSHq8XErk", width: 3199, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105137833997122171772\">台北時代寓所</a>"] },
            { photoReference: "AWCwydj9jY99r_PHXWdTP4A35wQbq7mYiAhZVU-gkATZAMrpBSTyUl-o5Pe62fbwvpx5skOHyI2LdjrKeKVPJBnY1gVHdeX1Ol6r5IQqtdWYVpfl84IauE7E-UfIdfp13_ODrdLwac5VnOTiMx6YRvU-LmSaAEyfrc8qtqRaX3xQUQUbU_vfAhQVxzdeFXZzl2vWDjk-EkP7A1z0kiXpTTtkLtudw0kvNARDvMenbUhXMFhwLz4A-7yo5yERh9o0xwrCQxKZnCksTkZQ8-ZahP4ENq7Fd9ouORtiJu0UerfwVHMJ4xgk4hHopBMUOT6xSGzCYUzPptEs9cXMz4JDnnyOhpkT48msjM1FL5-9DPPRsSO9dtiRVuH4E5NdJs1obkEYo4P3rdA9-FWjORG1T3rs7L0DZqm55BjitXDKU_vygNqldhM", width: 1885, height: 1060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105137833997122171772\">台北時代寓所</a>"] },
            { photoReference: "AWCwydh2yPVdg2mAjzjmc5jr534o18nAcXBZJm-gwhw0hisQVS0eBpZBFBVkpSL6CK3kggGhDOMDDlqHXZ0HWHf0BVgfIgKHmfkuJEfd8dURhxUgOnBvSnTkHqBZJDpa0Mls5rwiTQ-fa93SzSfJrENBdbBzIk1DbgIYzDp3sBNe6MaLlva4oB0rGmhPiIuLpR9nRyVdDWHVAh07YdQGzjO3D9AQJHz8XY2eZPuKfGxdMp6_yvmNtNKDtMJCFFANlVk4_zgg70Kt-NylBpwK-RNHIUzs6Aw_6dSBhvptsjM0N1r1uC4QfZtabOIsuzbH22-9X4t1uS7GXoHvl5BG3RUMFiaVVxz0-3sD30RavcQVGCMivAdw4d6nJoXteW-Ceoou1VL6B5qn6qjrmsCfuMwdwQF9yH4I_FmvXZDLbB5aAbW4Uuqd", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109839127345630290711\">Alvin Ong</a>"] },
            { photoReference: "AWCwydiPqv36YELUge8NSFB7fB-JgzzR4Gw7ztXIOoa8uvgqnLRgIArHKRmgy-x1ktaqTeR5kVJKLcA6VTscda_4tKkF7UDbO_CFGnQxUoTnY-LTgC_lBP3h7CG5i1GUkXgUrtHySuNd-2bSnZfH3tKlEil81cP3uxe5ewCIvGAR6lPbBXiEZmbogjICuiHCLjKSUwvyNbkuOXJpz65D5JzDNmz4mkxr53ytq31G3EzipzRhIqvsruES5nbfm9ll-L7BrwIMejgwXuUESz2qG4raN80cBqqfjEXdxYUoweWIn0XTg0XwESNCVfXTrN8T-r87xAcIqLwlJQzpLIr0cl9iudVYyJTlpjZ3j2n7RMeRzRoQmohpg5QOWqBDFns9WoPAD6CfOMsOttZysYR6tiVFdpz5uHQIadEKj1011PmCNycnLdDc", width: 3433, height: 2289, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105137833997122171772\">台北時代寓所</a>"] },
            { photoReference: "AWCwydglWhCFY0x-z2CPMlsHemq5aHFco9XJzbh7SnhVDL-CJW9_6tij9mZ_2vMqwZnQ-k_C2J4_u6tGQasjSfX2dbhczy5ozsUbcLXNZiA1MWHrhZGBecP9M2lgaQiTRmqeXAcbCL91dadd0rJFa3Dv63LHzB5YY4eJKrWM6WqC5ymZynoXKNefIYynSBJjP5BML4ID3xDwOi1k5cmNk4gG5oZUalNIHnzHk7YQ-33Y9fAhFwIg5RP0Islek80MfKgH2HnQWwGA8IgVYaBRTrq1EnfCusiT6bn4puomFeZX8Ta2thapwdQg_JC2E4glXBsbayOUfvzoMr5bjJZOUAYHBTxw9TPbu0eHP75H2dWGA56Am6H-ewXDYLncxEEor4LgNM2nOqASLpZMoomxU6irzxqAKenw2mfbjZswVJ87MqU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103960326591785030939\">David Hosey</a>"] }
        ],
        summary: "산다오쓰역 인근의 깔끔하고 교통 편의성이 뛰어난 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["산다오쓰역 근처라 이동이 매우 편리", "깔끔하고 세련된 객실 컨디션"],
        tips: ["쾌적한 시설과 브랜드 신뢰도를 중요하게 생각한다면 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 7, Linsen S Rd, Xingfu Village, Zhongzheng District, Taipei City, 대만 100", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://tapestry.hilton.com.cn/zh-hk/hotel/taibei/hotel-resonance-taipei-tsaupup/index.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14052315708133682476", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A0%88%EC%A1%B0%EB%84%8C%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베이터우 핫스프링 리조트": {
        photos: ["/images/taipei/info/accommodations/beitou-hot-spring-resort-taipei.jpg"],
        placeId: "ChIJozGkH0WuQjQRI-kvmCzByvY",
        placePhotos: [
            { photoReference: "AWCwydjBwcuEHk8znKkRyH8kwixNhCabdSeIJWxB2wlUV0fPtH4Qe8LBU9p2tu8398VvXZuIb3-ISBQ3vIv1PlwQYro45ZJg0XRmDeBnkWpF3lCAZBX77BQFZQHVuUMiKIXl5jjK8R83WPDlie3im4L2PtggHdjS_ckyS_5shCvxqm5ZFzAit0OxpgEU4XRTLvGTdlmjkjPMPRDa-MNgAZjfYpvp8SxGj7Y54C6gZIlvyyvMAw7XyWsoah9KtiYHJQMmFyr8Je5wajqKY4KxC_qDmpiXqXwSHZeOYr_r__BHHcZdLNIzsh67tK59VMbmcQ9_2XKHww9bBN9x98ocYWYpnTj3ZVUtIEwsVvZFBvSbyio1wdUFwrtxDjgvwubBjmOE-3KTSDT1j9e2cptfjxNh_9nmJgYyC_eaJIn7gj2l8tHv5Q", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108463002102415104030\">北投南豐天玥泉溫泉會館</a>"] },
            { photoReference: "AWCwydjTtJH0onVtjmAitfcjocFfuj3fYXQmbDSlNBKcUyv89GzAdBh3-jFYEad5UOW96tqCFOeDu1cqav9oy-Ou7qv-cF5bvcUdiDBfb-h7xmXBYGNkDedt3Oyd_yDIL7J1Y1JghYcTY7bke3rOdNt_XNlmPMeAJ88yxd1LsQC5wqKassvtYevEcdqzIM_4ZpeanLFBR2fSRXxYCWlB0IEzKhcgZxaLXPZetVal8Dd3xHmlrB7JJ0MlRqchVHY3dsnwjYsyTeqQw_RvOUXPmVTIpUUDcK-G2fia3GnX_TgKSbYjVSZaP9vXN2vCKvKs5leVP_wWQViRSaH4tKcNWXxoAxonGs9F2xmmlrjotLEN2DdjYboWDp65tqW85uCD9Gx0nez79jIOr9TRAlxyKa1Rciv3pf5v8xVk7Xi3XcGOTRJ889l4", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108463002102415104030\">北投南豐天玥泉溫泉會館</a>"] },
            { photoReference: "AWCwydgjyBVsQomXC61wRlO5mgh7CQabjKWOPBfUdvsb8OM4ytrB6nV6o89U3q81YHxZiyI1gMVGnM4FXc9Y3eurqM_-FwgeMQOVFmszO4PX14J3KzQSXSS4hiL8Sb54biFRUqgHfBFlcggRQbLqIkjidRvI8dd-HT_2_HrpznL3NkpGBIkJg1CDeyT0Rz_k-CAGHcS9oSnu30e1x4V4zMKJ3zr941aCC33Zl-k8QkHy0IksZHJyZXbtOWFDBxUPCJUHEOpJaTDoacuYuN4aSpMQc62FKqMPFeQ8327AhTAsLEivoxV4iN988Ne_tT-H9GclqPf4bo6REL88qujYwO_1db9p4sk_EZKFNYQGpeVgiLNscnXB-H-9POQJkMu5RlJqFqnLOoVRMky5pLBF9MEPe8OuRL41oq9keSb82g2q24wTkQ", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108463002102415104030\">北投南豐天玥泉溫泉會館</a>"] },
            { photoReference: "AWCwydg5Vu1ric26z9vJjDWG828U647cKM0NbluB2msIENBthaF37gFgjEb5E6Qz_yDCMa9YVItZy85mbhvPmb0rXqli7R5xl9QFqgJVWPQxUgau5y5i7khtgRIuupchbC3tgz2FEoeOgHt1KPvp8NFDG7bWrOs0fR5qJGmR0zSMSnfRgyrueykI0FIrIjzHEqHfnEZhvgGVvfkp0qoRgbAo6HKbsHyQEONCJHx9K1a-FJKqMmT6shHxShSN_mOcQE3sa6mFjy7YrxsyHYs2dmGRtIjtfyeZig6CcDwhP2BL8mmyhM45GH3pLNSRp9AGR7cJJLBeA3Dv1uUX4g5CF3on6C72FdGUD0K5MxRty1g2pEfWZEjxA-qAfX2_LG6IwKpqEn5_3az_SoizxI39ER98Zm5eYUBXepF-NxvNptLp1YE2b8Y", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107505463033775813574\">Kaitlyn</a>"] },
            { photoReference: "AWCwydiPJ_mY_kLJ7bEf3W3q2cnExJ1BMEmPPRrmEKIm_PuUCTTpc-SVB7ZoGEeTJBsp1s5IfAFOznMPojeL0HPrqmAr8pkUDHA2rq0i29IvZpxfk_kRKu7ct49W_rtbfHrD2h8vcqIa4GFPxqv7WSKV7fXhWpJxzk1nEeOxnUZ3A0sh6Vn_aBwvQ4jKrfoTGB0RT19D9gBx5hvoa7fmv_M1yqCEgN5uEq8CpgjEZGGv4fCmVRHkH_loww7thmhSzqKeM0AMVoymAoZxItgSXR67JZyVep_a3-9sPM6Woi42kJ_K-NU09Cy8e2BQA8A791aDJcQ6kcXcpAhkDk7zF8DwC3fOBUZaKXPImv_vtNv5uT1WNbnJopcnJ4N7liDcMkkXQAYuJoRlugagO1rzqEE4cl6MAIhRQeKCVbSUIF1LTtXPyrkq", width: 2048, height: 1409, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108463002102415104030\">北投南豐天玥泉溫泉會館</a>"] }
        ],
        summary: "베이터우 온천 마을에서 여유롭게 쉬고 싶은 분들께 딱이에요.",
        updatedAt: "2026-07-13",
        highlights: ["베이터우 온천 중심지 위치", "프라이빗한 힐링"],
        tips: ["온천욕 후에 근처 산책로를 따라 걷기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 19號, Quanyuan Rd, Zhongxin Village, Beitou District, Taipei City, 대만 112", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://beitou.wellspringbysilks.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10739815987437110368", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%9D%B4%ED%84%B0%EC%9A%B0+%ED%95%AB%EC%8A%A4%ED%94%84%EB%A7%81+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 뷰 리조트 베이터우": {
        photos: ["/images/taipei/info/accommodations/grand-view-resort-beitou-taipei.jpg"],
        placeId: "ChIJ6TCF5WmuQjQRm9DanoDx2Mc",
        placePhotos: [
            { photoReference: "AWCwydjPZGK4HXwPhZnAMylolCdjwEkdds4boDsaAYMVX6ub0WCkQkjOZo9Qpy4V3d2ORCgc_I3UxxPby36PtbaUhqYsuc-oFxP3haoXoSDcLSM_sy5F8fEiiqLCE7wQUpexigG6WJKbBfFLvK_cG7n5nWqXjmPcjzwLjNQhk4puUcSNsi0c-bT9LlbfuomU_8f1Fw_hMw28BJ9jJmzbSUxyLb8GdULqSkK_gknuZI9TY3R5Ex_8mVH_u5NH7uth1NRX-YqFm2HspHnJzkLD03cjFcz17WAcekvDe9efMVlPNz91PtZYDGKDwmKqGrbQI1LNTv1wwiBYVO9yPKiCvNpPxP2pEbmVL9no-QfblSCgTTx1SAilyjYYvkFQ4Xe2pfH8jSqvUWxf8KcEwF_FerjYTC9PAow6SQMiQJbdNDs94sQ", width: 4800, height: 3341, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105828063527691998255\">北投麗禧溫泉酒店</a>"] },
            { photoReference: "AWCwydjCw330eFMo17yc0GSbjqgk7zqyiOkhuX8XaWgcEggRjKid5lj63KTbxPmpC-_rtkR7dqGaoibQrYK2qZbs3k4bQNztU_sXFBiJE_PBoRp5L9NUBDIv_XiNNQTrKdWeJ9qa-VBKG9OUlp4n_71ATy3Er5bNZZ3lqXf-WrUhwO2RwWFZqfqXjZWqlcPVGLVizho5QVYIoBKJriZdxRJCRqMUNkFC65KUoPJj-Z6PNGj1Ct3aiC14eAu-hjMo6v38zgXBpNVM6waTvtcWN3BluNx8uY-FWR6V6WgV2RY6KGAX7KpZYGFGWcqK9YXSGDu235H_jhgUyMHwcVy177ZvW1ozv9gK8NmR8THQqsodCRTXE8EWrso4rkcEsLbTa9qtcGwOPifrA3fgZm9NzeMGBlyA5p6yv22tHose_eUPQLq8Rw", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105828063527691998255\">北投麗禧溫泉酒店</a>"] },
            { photoReference: "AWCwydiv2mwbwSiW-dwQ3D8Y9YrTPviLTw8T72I1yMG424f_-YHh6g3SJ0mUcXAbVKp166U_m4N-fj-_DQ2s6n7SshrTWgvqBQlDkTr1VeolyfRPCM7LHUszMp0RTfgtv7WjQ9PZxBBr0kYD_yFIsqHpLEoT3eGk3K3SzqfkGGi0-l7cvNt2SfBPMOP1cejwE5jv8w4h_NL62B29UrUnDnYN_ksAh-rnBBXkFiokdTgp4plh8nWKnqSbiVFZkyHOjr-2fbC80M7YnfjluZSqGVz93yyDbQQ2ZGeOw5CMOJPe75WknAzUCkNOyczy6P92Km67BlfMTnpoSJl5RnZaNGT8RNBXbnGj6diWUdKD9sCrrek5HZHhjM4zeToRXJh-F5bV_IUW1Wv3QjeNBoiEmf1bN3fmmnN8tcMyEOF2zLqQFqk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111606603376227014491\">Diana Hsieh</a>"] },
            { photoReference: "AWCwydjpoXkz_ketoXJ_j7B-FyNW5X_JuBuliGyq4xLxEaf-ETPjo1lXMAv0oIj9UWROsz5MxADmT9Jfh0201hUhleKUQziw8_3OFtMdaAxG_K36WvczlCaLHlFTt705OOshnQORLynXuVpQTXMWLUv5IdOS4kbaac0XpgrEw3NsqXXvcFEGUagHvqZY3KG-uZHmdZau1dyEjBTWWsdWDgDEHFehtjeqOI6SwUyHMlwYxscPa-gjj2LjC79_Ol5PcO7eMxbwMGhSv5ATCfR1kqEE1V606VcdkrE2aSSllLa9s05CeKUYn8aQQMq2AAlP8kr9gkkw-GAXgFXl-0NaeuB9En3DTOq2msGGQvL0IMgdVPxHlTfLmY4RQybb1DuuzJUfwOSY0mx7UkRYdOjJeYyBnlCQHLOrLGZNGpYkGw_Cfkqu3ttT", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105693303040373004628\">許達達</a>"] },
            { photoReference: "AWCwydg3G0RhaUEEe6bj-cVwHB1wAMw4q7esr840LV1gyPTpocaAiKRRbhqeWcAwkzkdgYwGOdKE_LY4hCieO4sfQGA0IVT2mcXgkZ6gfG11M3VSaCPVH3k1pCZNeX06a4jd6OcqpY-FOAHchzjAWTk_jahARtVV0HihKT6M9OoZX-kjsdhXwL6Iz_SGSY3Y9T4PMLCxYqLatizCaCFi1GcnSGA5qWByC4FN73nGH20Vdj7e5qQdQM3tNgCRFs6WZZ30YmtTg4xgA5CBGwWiebH-YBGv_Ir1QKA4hJfzx8MDrjNTta4P5lap9GvjO6IbaPrMVysSKJkpxYHj8oEiYIgwX0OxUluqlVGlsGzpF77NIfjAeetyAuIgRrcQSPSABd_OlNIp91R12-7ZQxiYnKObfng6t61Phe7dOnxNeqjhQ7w", width: 2048, height: 1354, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105828063527691998255\">北投麗禧溫泉酒店</a>"] }
        ],
        summary: "조용한 분위기 속에서 럭셔리한 온천 호캉스를 즐기기에 완벽해요.",
        updatedAt: "2026-07-13",
        highlights: ["고급스러운 시설과 서비스", "프라이빗한 휴양"],
        tips: ["조용히 쉬고 싶은 여행자라면 꼭 가보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 30號, Youya Rd, Linquan Village, Beitou District, Taipei City, 대만 112", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.gvrb.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14400525343240409243", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%EB%B7%B0+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B2%A0%EC%9D%B4%ED%84%B0%EC%9A%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스프링 시티 리조트": {
        photos: [],
        placeId: "ChIJFf35ckKuQjQR5sXfjE4S2RI",
        placePhotos: [
            { photoReference: "AWCwydhW6BRRtnNH6k8A4VBZw55y_leTcofUf4c4IuHrU3IHi9eDnmHC0gUaW7mxsW1bKUQvx2L3KS7JPPSsyWScE6tnq-ipiTL4z_eeBQpX-7nZ_2Y4qsu7ko5aBZvqOZYHnOmsTcMiFSX2xYsZx6kxOtUKLIrfJbzIE_KvksA9ZS-65OY56WylwGQqP6Y_sosL-fFD1dLaFw2GdylG0vGtzp3EpuZqWF-Rld31cshPknGwdZlb-p8P7D7irAb1E2TM0tFrBo5lXS3-l6HRPktEVo98y_UOGNnL7dRhB_sYqXgBqkloqd5uaI94cNLy3XCW8ZawXVTyLP9dw_GLXFevWsN6BdrCnti1VOPbVQB8YrBrenuSQOMgedA1pJPHygYhfLbJSeNT8rttYmjxIsEEEwuh0JjFj3A2JpsekNysxNc", width: 1000, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104583253988179531127\">Spring City Resort 春天酒店</a>"] },
            { photoReference: "AWCwydhss7f0lRVSwClmH4wZhgK2BMHV119R_zFr6DqGfUeTUwl8G273UPre27X0bE3p87aonCovF-0aDaLjUCQe_UUYULIMAtme-Bkz6sBy4sujOFWuLJbTFidakwDsFH9aWmUW8VehooM5Nmj2fAIBHmCErnt9waprLLNMI-0Rot0jV1AkON15xdW4J1CCfitqYVdrDnfNlqjwtwJzVu2YiOwSDsdFS42xFhnvqv39Qnx7T7xvc3mvwdkyjMGTbEOb1NnnrUP92ihwbw2g1RgKtdLDPhd3R121j3IL5bAxYrY192Q7kSQR9U-3zc0fMdq3QORr1ODiArjCcrVdCX-br0MAsF1ClEFZD7t9m01fM-jhQiFkFsYIdF_U4aIeZnsXI5h0aEdVLoKvq6R4UASqo8xNq7YU7mSZy8yAXYL3Dl2kSg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100437393035853958012\">Basel</a>"] },
            { photoReference: "AWCwydhcdnEdb-saqWnHQ7xGv-sJe8-ufg2e6-geFdtAjv98eZGUqidmut88-Igqhyq91bruQl1Xq5FNaXGfLbR-b-APiXTEPqkDodWhJ-YuEiAFGnG42UEwa_UYB8zXNXRiTP9mLUIw4I_dTG5EoFtV2e6no9wXma0ACwAre_tsEQpMbL5GDUnH1UL9vSQkAwX_pAjbrY3bOZ53ZjdOJ-zZ0_U2Wr0rpAWrs90bi2Wl4HEZ8iJ8QeqFxvgRx_eHZwbUyI0Ked0m3TKxhsvXMk6Ut0FVaEWgRjPX1r4AYrUd6Ws4lk3ix74BjAtoHISaVh3S8ndr_lxdsH0c1dw04BCn-HkSJ_PCfLTfMwcMEDHAhBuSfGsXbRJ8SDtKbx4znzvC2ZXb_HzGgW1bgGvja804ldI90mX078p-c3plmnRSboDWfGIB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113339884296500061352\">Kay Chiu</a>"] },
            { photoReference: "AWCwydg6dAk32HArg8AQZy1MqJAn_ST5Vn_iT_cO-LWeXneSdJLyo_pXjwKq_ZYly9FBZ6FioE9s8-0vFqEZ6WL_2KE7HMjhRU_ptv47z3YBly5CA48RLra2Ysc1DNPBVHaYSkaXgJf3pk9jXvrQ-ZmRZ-kYSpnQq2uEzl_0CjBvCogJm3GHbsTGidwGDAqWd7_qa6AX7P7z0_yQJLQaS9unzdnhxB9vOnqRvepJghHmudsqotCllPs_BCCkYzKI1fKHGw2QNQTRaViUlPutwtfz4-ib3_2MPQ1j0kpsjSPPVrexJXqq2QeptZv2JgeilT0frodihc9hxRsQSOUvHIwcRrrxzZ6fBW4BNoVfumQoRI_UC-D_EEubjIo9cYScgiZdXqd8OOuQnSP3GfkQrUwU2Dstfo1OiH2SKg0ISqVixAcytUyk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102295017230436973144\">Katherine626</a>"] },
            { photoReference: "AWCwydhMmv2hHR4x7jtVrxbmJkJQRZ4HFoQsywjyutlPuu3jp1cFrOcHj9a3jVIZP6cUx4X-WNcFrR5o92isFyK5bjrnOfguK7AhfiGWd-091bQp6eO9CD_oMFJlv8ZkK9-sEjslAQ0W612V7Odr5tdxzDeCVLSNiJkLih9_TfWsiR_UffyyyOXJf4lBIpBmsfVwa_dv4NQpxgn0TCGxspxz7sYicHnOuMzF2e9m0p8Tskxkw-bgjp0X_NHd2fbeDo0euUSxlae8kxuEy1zgYkb4eunoxc71wwNifyCTux5RJSgm24W9naI9BF4nVkgBmjV0MkznCWasV_ZpuCIpNTZEE5BsxP8iBkwBRXpCYRnQwbV-Q-i3i-9NQeLyG_aMeqF8bn-T1JTA4vE5wc8dqdDy6Y5oaCpu43R8C6ktDTKze-jomSA", width: 2048, height: 1405, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104583253988179531127\">Spring City Resort 春天酒店</a>"] }
        ],
        summary: "다양한 온천탕을 갖춘 전통적인 리조트",
        updatedAt: "2026-08-16",
        highlights: ["남녀 공용 야외 온천", "베이터우 무료 셔틀 운행"],
        tips: ["수영복을 반드시 지참해야 합니다"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 18號, Youya Rd, Linquan Village, Beitou District, Taipei City, 대만 112" }],
        location: { landmark: "No. 18號, Youya Rd, Linquan Village, Beitou District, Taipei City, 대만 112", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.springresort.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1358136891209139686", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%94%84%EB%A7%81+%EC%8B%9C%ED%8B%B0+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아시아 퍼시픽 호텔 베이터우": {
        photos: [],
        placeId: "ChIJzUPpv26vQjQRPOO7iWTzXp8",
        placePhotos: [
            { photoReference: "AWCwydgeb_fxOwYPDB9CWQTOTAsCypJIWMhJwIqP_f7JAXGG2s0b9zIqeCiB3VrDs0s-93o8nKN6d9jl1Do4TFgjhhc0AYeBh0Gtij_i608OdgpgJWKfm6Lmi1QEjXlSZWyyBvGMdk7gd63orFrZQNNowm9lf9yawdnTmk3OEx6mq0kqD5I9W2XtlU12pC5vVFCCJcPzd0RJ8gharr5l-26NzYdmoOMlYIoaMohtUET0i58WZkEO5bxXQjrWYcyc9WQdZHxLLojWmdVoh6i9shGl8GO42kyPUZ7lmsO5xCWMnTg7uPS1_xoVwQkbr-4U6XgkGSwgxgH2x3vzs37SUP9xNVJnK5T83MigdDBhTPP7Tb2ZXp0CbzDxPHn5FWX1fhJUKthJrCgDp8zL8x-HfJI0zzz2L5ZLkaCcV6DT2t7VaIBi_A", width: 1200, height: 801, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107297579940701067285\">北投亞太飯店－台北 北投 溫泉飯店｜台北頂級泡湯｜泡湯住宿｜旅遊住宿｜會議場地租借｜北投住房推薦</a>"] },
            { photoReference: "AWCwydiZSOnZSEA0ZINne07jYTva948TmHw-zWaEyDz5zN5Jnihe-wOK2w2s3b63cz4jxQwsGPrLIAVSCtYkQviCHJwKSlEYkntV6njyjVUz11GqUVxfdIsz0c4pooK_v6x2e3wniRasb7ZpdAHQ7Vv6jc9ZOfl2dE66yzHwSpEeaRm8i2XjyYDV9z4vnl-XES5BFnAC5Xf3E6ySLjptODDZ6PCVuDPboxA0vrjxKqIjCsrXJ04ssvw-RiEaq_6xQzs69pO2YJBZdaVzcvVZttNCjGDRRFhxcFmYUXooP3gwA7uqGrDiIXlTOOnVKBYLY60UU6dkEVeNcXr1D0J921CSHoMgHGpEpRzTNqEGnlVCNpPJjgTuH7ZMaRSYWYoHO-CnalkNTt-vfJOdcKyfm0DSF2CG3kUqNXKx2PZ9BuFXT-MmxpI7", width: 1772, height: 1181, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107297579940701067285\">北投亞太飯店－台北 北投 溫泉飯店｜台北頂級泡湯｜泡湯住宿｜旅遊住宿｜會議場地租借｜北投住房推薦</a>"] },
            { photoReference: "AWCwydgFmMW8sxi9Skz14Zzjp3DxQZUCctmNbXfxKtINfMj0OnX7kTREi27Fj3iwziObSfOwtgCHToaHHFp95MdT8YVspSHzQVYZrGGmVTW-S9ucgebvSSph-ykl5fshhg6_3FXOBzXZbFrM9pAK-nZtpFt0C-jI4ORStkb6RPWsE9pTFfDhXDfQoyq-QAd4jnMmknRWS9dUm9eu5gtWY9C9_nTuvnAN2bGsbmRpOA8KsOHVI1K8ho6vdviI4K1TgHOZGECNHXDtfo8e0fesgvHl-ZCLI3dukHPl1xq3ModaSc40o_0vDbnqQ20PskIBvw19-bB-qaUL1Na4lqgJ3FpAezVHMcUhFQGkt4K58lFqAYpOofJFGxh_JUveZX8H6UCcwcBJCLyW8C5-vbB8Ur2OFYZBThPTVmnz29Tl4EsuxP6Siwwu", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111640435379194156688\">莫清然</a>"] },
            { photoReference: "AWCwydh0NRyComHjWQ5YGxnA52Pzn3fr7YTvDJffDXSthAZwpRhPlXudLvMgoa0IvPJadDzSn2K8Ce3u4qa9863TaxzMun7jAbxePx6mkwrBZVAOiipKtiFF2irMIGbGvfmWborL9QhfloUl_AoMQCbo00bCQ8dTGx-NWxkeVWGnpIiix-I40f-vkw8Mr2Ua87J1ej8jRQy_YMzYU-SR4Ffyast7KcPZvZlrjKl3YJ6v3t2pgAKNI_NZnGaari5M3eB7SDYO-wV3Q_yzOmNzHueEJirVj22_Ki6V_lzco3Np1EQISYd54ob8jXWSROYMkYAg4b_4_BaDnAlwnSeyznTpFFnTkW9sifVt4pZxb7IRSt5i7WmHm4JnPLYb25NFHtq2eFTrblgKAILotRHptHvmL2w652NcQWl9T3-TWVI9HwqXUQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111640435379194156688\">莫清然</a>"] },
            { photoReference: "AWCwydhrRaWFsuZyCgZ2VheSGP0Re4-2R9js4TQE5GJHz0B_OzoHel2sGPkD0JyosN_tZ4xXld0nIlhME0SD1BC6FVdcDE-3vbtUp9MnJSAvMQIpVE63p0QrjZLX-fpqf3brRRN52Uzu3-E5aFEE1BL-wWc3vqEHsD_Emzx3udvscfMb2g3_Z1FJUQYx3yEf6LCwXaTwVr-m_h0bA4EM0vmYlHPAnVIgDJmfiz87eGC4oXQzKbKHyQV2N-lpm6hxuf-6ZnXjXzGXuz_vCqZyBcqLCFT9xZWBVaom8K_2t-woAdzhWvd_tJ3q08sOwn7ZkxOY6kjLfyT8HZDSY2TES6DT8M8nRGasotpJNHqH5hWzGqK_fXnz9G7_O85acQFfm3Nk1ykWuzYqyAXx-8E2rdte4lwqkfZ0WdQXhbyx939k11_NKA", width: 1200, height: 801, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107297579940701067285\">北投亞太飯店－台北 北投 溫泉飯店｜台北頂級泡湯｜泡湯住宿｜旅遊住宿｜會議場地租借｜北投住房推薦</a>"] }
        ],
        summary: "객실 내 온천탕과 맛있는 조식을 갖춘 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["객실 내 온천탕 보유", "맛있는 조식"],
        tips: ["객실 내 온천탕 유무를 확인하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 31號, Youya Rd, Linquan Village, Beitou District, Taipei City, 대만 112" }],
        location: { landmark: "No. 31號, Youya Rd, Linquan Village, Beitou District, Taipei City, 대만 112", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.apresort.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11483883712974414652", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%8B%9C%EC%95%84+%ED%8D%BC%EC%8B%9C%ED%94%BD+%ED%98%B8%ED%85%94+%EB%B2%A0%EC%9D%B4%ED%84%B0%EC%9A%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 데니즌 진위 레지던스": {
        photos: [],
        placeId: "ChIJlViyzYqrQjQROnBoAHB6rRg",
        placePhotos: [
            { photoReference: "AWCwydjNLh9POjfJDWCav17s6F5CM-2jHRzCTp9cr3T-YAkyeWqmc0g0XHInPoVG7E9Qo_jB9Uq_gnz-wLKo9lHNaYls6-zYTzERypEi_BOcy64dkKR44xlg9KSH5gni8rRMQNyuG2wV6rjz2CJKYNt3xf52CEt4SDH8uT1muLVL2npwG_WnR0y9ESeYdClDMZTOl9Tc8o676P0vgLw1fXVqEdH3dd4tPFfey2X1Zo_Upv6q8VB9jgU3i2W27ssgYEkPHNQD3_C6cFrAIRB8HZSaq3AM6NY92j2X81XC4GRi7u9KpZQ4kTFuzJ-bMznKqpSOgBuQQ7Ag7bd7fyOE189d7z4J7Xqq5SgdgmF6yWtHwLtoJMx4QgjR_h-NcUeIN9JYUm8h23JAeB3Tzg3kz97ztewPn54ImoKmawK5rdkp8IHMvOQ", width: 2048, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109712510328853834804\">The Denizen 真寓 酒店式公寓</a>"] },
            { photoReference: "AWCwydgdrHBEPrAsEGTInZtwwjV7o2QS0H6bl6BQfX0bSWiANIWwHMAVMU61b9TYtAPX53L1BgxTJJ_V7kM-8ppSYrXPufDnq8e-DSeRowdzUdl4q-cRzLk-sZHJbaiWLhfFxzd7nAKwMItvOk83TR4TsBbJcGwQyxhghKeVoQ68OiUg1wXovRlFV34OE1V0L1LiXqD_YKJZduLLVHmmaelfDapaow4bEn35Rwpv6qFex8WYHcob28AKp99WzgTCv8-MggTBca-a8X8J3_UxsdMHiFKEsNTr7QIiAgU8aeM3tx8tLWwBXcEPdMV8AFUqZ1DqJnJqhlq7j6ZUJLFEt72kMUkKHRb_1tY7XcLtG6Icgmu1p_J23hiFb561HYnyUYbQG6YXEcb8_7SpFY3XwRbUJVQVQw-Tb8K3LdS4kuCAugzNWqRx", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109712510328853834804\">The Denizen 真寓 酒店式公寓</a>"] },
            { photoReference: "AWCwydieKPYz6gpChS4FXBWl3p-dmaAiTkI90k_38ExCgPWXk8PazfqIFU_X7wot_I0N8I1pdEHLJmW0AjwhuP2956rjaTQ_ef66vmZdHC3KR9g6dVsXvIrlruWf9nlf06vz4CFh_BIY2QJ10s6evdMpztTG5sg6aNATZx8yR2Upu-0W9A24ecHeWUsylZTch3meQj8I8O-iizEVVV6bICbs2gW94b0m-7EUtUhiDxOvT-8ZR_Ge6nHAoEGx4-7n_XCGT0LxpN5k2zktbq3NVRqM3NF-9-urpPnD_caHHnq7QJ9y3qyfiKfy_O8zAk7bY1-u2YJmr0XXtFW_HmK4gUNqjnqOYHFMHZRrzC0pgec_zlkxJZl2snIRxhRjvuaWhEC8gvcAcjtsoXe6wBgpYRz0MALJRgdJDvJRcw9AWrM8AxJy86Yv", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109712510328853834804\">The Denizen 真寓 酒店式公寓</a>"] },
            { photoReference: "AWCwydj2-w2HSgPJ03YeiIOafxhMAwQfnThzpL5HGuFQlQ8C5yQ4-hWXVITo08nDterLw_ULpnjtZOzeddZFzf0-gsi0lN9A14H78CGDqdotYb-OtgnzOi_1A_LYmP_3FheLCyVUpiKviYEfr7rR1AYizxLX6yz12xnx8PZXmuNlS9BTrgK4U3FwMHH09dyzepKOtyZ6yFSu8cRHO5Ha-SZhRhXo72Qv7AgvdN7QTkAPe-9OdqCxAyqB3q8kvQYeM9F6xf_BPLAIVhN8x4fVpEW8nFd5cHNod_zBrA833yaDa18iFu2uq9WpTCDuQRcAcrv1kXHW8gEvDleN9IU7PTnP-m430-_jh4UXy1W6Mq7v3w33QmcffSDWgvJrVELdLRziQ10J-tP380KwpBUfx26-NYmZNlJQp8JP_wYbjLc", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109712510328853834804\">The Denizen 真寓 酒店式公寓</a>"] },
            { photoReference: "AWCwydiEiry2sk_w7Ioeqd_mzNQo99ND0akGnYnFIrvMGqapmbYfn9WJcAY2PsYvLTfzWCXF9r762dkIznwWWQnGXEFIrz_Np9I1WFXaTffgKiqKyfrMc1T-MRih2L69R43n3IBd-65pxS-lLlCC4xb_KVK9bCk7IAhO4TIWMcX7ZkTeY4OIEgQNHuwprKCP1x18ZmMwt3nOurjof9S2yMF1DDcxW-gGYoVTurPSaHO876G-3jJxqgtD6huN5L28A4TN4KNkFIEKUKs4OQ7ToHR9iM_8cmm3aWYbXEjlqRFO1CSuB-WYhc7ZhzuDM5RK9i5irixWHWE7aV4YRGrz65WaW6FYVxJouDP_lZqaq2cDJfcPlUwvJUBYi389g-gj7T-fxdDxqVY9iaBlqBVhHcv7KmlETLImmpXZxdtRhGLQ6Xx-eg", width: 1365, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109712510328853834804\">The Denizen 真寓 酒店式公寓</a>"] }
        ],
        summary: "최고의 서비스와 따뜻한 환대를 경험할 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["친절하고 전문적인 스태프", "세심하고 빠른 서비스"],
        tips: ["스태프의 따뜻한 환대를 기대하세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 18號, Lane 11, Leli Rd, Fazhi Village, Da’an District, Taipei City, 대만 106" }],
        location: { landmark: "No. 18號, Lane 11, Leli Rd, Fazhi Village, Da’an District, Taipei City, 대만 106", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://thedenizentaipei.com/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=15479028819004084486", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1778212049342984250", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Denizen+%E7%9C%9F%E5%AF%93+%E9%85%92%E5%BA%97%E5%BC%8F%E5%85%AC%E5%AF%93+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "레딘 레지던스": {
        photos: [],
        placeId: "ChIJcRA7oy-rQjQRSIsCpXwru74",
        placePhotos: [
            { photoReference: "AWCwydgu01SpMn7bIUbS9PahrAuaATjcsCx-uig9PdcQ7hj6_DWg9xt7T-O65mFq1Bn0oCoUFiMHahjpBhGERTG7o7LWfMMWIG4Kz7IBFZr-hcSxF7oj1sP-L57d0XlXrbtxE2PYQdv2JJMcYTsd_l3nLaG29FSLxcgmi-Noe1eGUTP2PJn2S9-qjwlAlHaurXyuxZtS8rbBK3xOywTdC2_fOeoLZzdF6feL05ptSEom5iyO_HKTENVtPjeE-AzAOMoS8s5qAlgSZ_Z__sfn-Sh1w5x0UcchYec5RQYq6xQSi5NX0d79PgyqVf_pIQD2I-sxw5oUKUMMKZthAtFx09bRdznwY_I7YysMTc2EFqB1Efz5FtCwdKACR2P2k_VtFua4kqNpYYZfgo0ZHnmsVSJllKuPUPiJXKvYhhrxY8pv8SCAnDpQVbmlbqgshkLljQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117385707168499040868\">紅典酒店式公寓</a>"] },
            { photoReference: "AWCwydgIX0Jl4MqCgqGQmE2o7-pAi9KigC5B5EgetQTLwfIRSoa5uNM0WVZEyWhA3nwhkTrLuxLuvO4kTIoh-ZoCbRu7OhskNRzwr9WjycrBAVWlwXeJzn5N7bu2bv8Wtil-cq3QRlBCjHZrBDgV8ZsC3V39aaDNU7mSlUa1IowDFoU8TZji4G1Sepb30smVY-r7_CrkGX8MZ6hE39MmWzhjdbGlt7jFnKuzCwXK7QNd3gbSZ1i3ndtfzJ004pnDvtrRG5oRDIpCitxjg_7Jzhry8g1t4TFctAttroG21S2GbiVW7U7L3zEzVqgpig_HbaExqTwyXmpDdY2NT9j78Ze4XlmorYChP1QNy1J1Xb6CyKFoiYRcn1n8n0YhchseTvYIO9zbXS8rHHSXce6yTGEJwO2rcAljrnRiNJvUi3nttZg", width: 2606, height: 1738, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111756857233982879314\">李育萱</a>"] },
            { photoReference: "AWCwydiNjkJouGrrlNiDi7ddnL0Y2fxDMogkjKyYWsp9OEPfkWnyVTTOCriQgeUVMJxT24BYinDWkcYlTaKe6hGHgadOdzZHyBH2exxxdu8sY5meaGhfytNPwbJw7VZnvo_4pn053rUw3qjhORxxKMhg8pcXUaErUBO-tvXXWddffLF4cSxoP-1CyTaN3aCibr-IrT7aEoubfO4K_r7f1mkapXMXewV_59i7YFwDx5AxawjPXXsFpUdGKPKYNiBZ7iRV0SZnS4Yfg0PUEdqmvlLUkRZHcg96W4C3_JPeKwWlDf5eeeln7SkgHMvTjOCRYbUsNYzUNQn_vzd4WnOxPcHsfnfczM5qZM1b8cuHRtkJQjIdQt54DRqCDg1t-AHmdMrMwIwOZlru-hRwLAFhJhZExqa_gj5TcdO2E_mppT7KJVVI-qpF", width: 2435, height: 4128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111328948098261352996\">Tzou Brad</a>"] },
            { photoReference: "AWCwydj4BTxW4YktjHDO4addiOGX-xltWl9JptX-q5thWGDNTflY0N5gJGqrE_FkaKWoOgLZAvtz1UHUSdfgyao22wGXE2cdqVT1PCkvNZdGL-BEj2monOl6qQX2JlKwLmjUrEvr0VnkZU1M2G4vtuK5j62f7OVBNp-74cL-ieDvrAhkACS2dHKZySP9AQzceiXUJyuChXcpJLCoQdM5xkHk_tHY3ubfwIx-u_KSOsqIp3buO4wW-yRQLieSO1coK0ce6v4XXFBnCJNi4qgB3FRg0TrV7Ua2ghNBX8lnlWWlxv4G4T3tLCM78Zs05heXTHDKhlc8uWOMeafFaBpelHghzrMmd_m8710mnruz-5AJHZJucGl-ZzLwMOVI2gw4V_QvkYfPiEkL37nDkVwI-kqy6RUonjagZumO4taRfxqUztehzQ", width: 2606, height: 1738, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111756857233982879314\">李育萱</a>"] },
            { photoReference: "AWCwydjHuow_tZn4BD3ZlJ5cNuwKr4L3rDg6eIOao2cK4NwBjYKgGaP3VkHe_Rt-kJPTz0AJNfVU9BR1wHnKoB0qV7foH2V2dwWmHvTcquwzXaEjyTevMbvgRxRP0YAQzpgYpS8AwhYvUCPCrJ710-7oeA0gUbH2ReIYC2q73RfpjV4FmuMgc8W-PNImtVUkWhEmT3o6TLbbpWrTxa_skQPPLexY6Cgg_tB80lQmUXnJoI8JWrx5nsElhW0-w-CPnvVrl6ezcezuuXn0A8OU3z9p1rMx857107gSc7K45QtRfEHwxTP1LWdg7GDPlFi10zeXdcIcdXvGm_0gS0pC40KAOss8oykp-wgtTG-BBM5ECDsMSw3fgbI-J4EzhL6sRvsPIEGQHijvn1l-65YvIGfpZEFnO3oX02M1ZEpDnAOhGYMlGQ", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115232984655262780493\">林政宏</a>"] }
        ],
        summary: "시청역 인근의 우수한 지리적 이점을 보유함.",
        updatedAt: "2026-08-16",
        highlights: ["시청역 인근 위치", "우수한 지리적 이점"],
        tips: ["MRT 시청역과 환승역 인근 위치"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 569, Section 4, Zhongxiao E Rd, Xinren Village, Xinyi District, Taipei City, 대만 110" }],
        location: { landmark: "No. 569, Section 4, Zhongxiao E Rd, Xinren Village, Xinyi District, Taipei City, 대만 110", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://redin.red/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13743626502195546952", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Redin+Residences+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스타 호스텔 타이베이 역": {
        photos: [],
        placeId: "ChIJm6cnPG2pQjQRRNWksBUP7_w",
        placePhotos: [
            { photoReference: "AWCwydiMWSyUOr4CZbuKCgGRqG6C5XBBkVFEGmEodOJYi1DqPt7d-At1xSIw6v78iLeYeT0f67qxIo7sGMAMg8GwA6WDW9PPHg9sRHpAP00cmQVX5u_q9BfWp6vOBM8J3aHfnkgL8dtm4ouHsRWRzdqoTEA4vgyqVzOa3-6GBDcTQgJzBxy6KyaOx-0SUpN42SIFiL8eODRR_xK547mqL2g0TJQOw1HbwUEhImVPP3M1wqUbXrgJ9ATmqL1wbdMBeuL6O4tfplPKbFT5tMVv2xd1u5PsZWwFDEBwCIN3L1BOSJtnpi7J06m2M_HtINI9EC7w7RU2bagNCl6FEgXJwE9P9B7yD9tng0Px9tQNgKU103MwHy3TuBHtG3BDUnJv3WPhcILD_zBAGzE3kWJiYy8_e1-gVpRKYg1rEcv_EeviePfsLzk_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102631038159586571020\">208 4p9</a>"] },
            { photoReference: "AWCwydhErLlVL1EErGAajSrmSvO3v90WptSJgbWkqUG3Pr0NrpfZ2cJ2lOImi7Z3IiZvg_HL5IpJpi03Yrnb1zvVunnTZua7t3mKpxidjfFgQTWcB0HgJ7nOMaTm0CJdWCKfoyS6alajDozzxSEtWFNK1JU2onz_MwR4moJFIG1t7PlJAiqMOlrKWcqMKA8_xzRTZgx_PDwGcinXDH1qzMBMm_x1HBqQj2lizhQguM3NfzbjdOPKFOjcTcBRnkW1QrmlPmHCeG-MZOT925QHqvS7a-iyujXAuHlMiP6r3shvBSBhfxkV7UWdf0wrD0q9nrYYP4XRqSEb7RprtLi3SVMR35qMbPiOJP6bv4ZWvPn-Ldtfh1oDre-kCJqdTybdfOXVpyT3iaDqVAscPKDY42DJ77QGQ6rH_1mWAo3QLT_pOim0FaQL", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101697314105232253624\">LAN LIU</a>"] },
            { photoReference: "AWCwydhYBbDjHsj1E65yioWi4RKKStVjX_JrfRDjF9iwSPN-f3PeQwmW75YdTA4mU2ZACXdA67FwyWDSZqXUiEl2_VKK0Ug1UtUETC9p2e-g18ayxH1L8sh_RdWn3WDxmhBNlP2sAjbLLhll17Y_2eXIfWx7X7Cfh8RTUH-Cnlro-B6FQFWDwSSjXGWJ4Z4ysIeoeP0YFzP-eXJloO1kppeO3fKefaRIyEjTGDIV0Bmq--MVIXNMJw-nkihfC498TgsJDvdI4QrbFTkxoKBI_xAkax1cJN0lR3O5dnt9Cn9XQvD_xXSP_I5ClpwYlbh7cSnz9-vDoDxUN4zBDha04Z2bKlI-q-eeCLhby_hCPz54xZrgQApMNLGx7g4CIz8HoBtaqNkAgTeCqIfzHeXaMuCRDsMGdH0_3po0HgO1jsJIUsz9fpgFWQlSsOZddsK204P9", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104338716012871578204\">Thressa J</a>"] },
            { photoReference: "AWCwydjiL-5vjQxGGZTibDHBa6n0ouk325KRxuTekkt0KwFdSvkIwyq-8c86zV8SDaA56wl1NhRgjDY2NpensWIK8bdHg3sFpCt7dKJ7Wu8CDVHUgEG16S_bYBC0lf11J_2uK-Yt93ncASP3A6uUGs8gN696fmbRWM1i_HV72sZlZB4A1l1PAeiqz6TSzXGWDZ4YMDjM78coCfL3TOOa9yzf05_koWMnOQ6kuqEJyrO4qQpt1JBX5BlBuQIxuGKiN5B4_mzvIWMkn532WhBwz9YMA5CdKLYNP4bg0uoiA6afoVOKfT0-yOcIbLE9R0AKaHqxrUrb1dXRk0Fg0UGf3dPQWc4N3G_MktsZeXQ-HJQynHKcVtxEb8ABfLI1HB6LT5LvwkTr6ozq5tLVoYgVlfU8XGlSoyDCtfX3U0j0PchKh190vQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109869780550945110366\">B Chen in Taiwan</a>"] },
            { photoReference: "AWCwydjnzCXEwMadbJj7x2D31e6Fz_SZZWua1SPnEjhx0aSnv4-pD79SW1gXEP9xSv4bSl56mXSxpzC7ifQk1MU4hLgedSr7COhMjPSFBNSL5JeQxJd3UWD-Nw5FDUIfKyGkZycb7EOiQp1Z1kR2IEuP8-SFAqZTuEi4LesXt-xWeYWHPY7RMINf5ZfeQbayS40L4nY6JefWBHaWNoDUnjEE3NckchNT8i1QUK7duUMg84BVkTiYUVX8WV3cDuasuvepZMOUTst_MMHNlA0eVDLN9Smo_-aAdXVWJzpacgATDVl3uRHH8X8kDGYpZVEmCvlRBN8tnYLeZrJZ0qM0cQQvHi8KkgftvIt8xHuXBzYKP3M6QY2975haTpyFh0cJfwI6X2JRXANLIx9NHDhiSH76nP_ywK-6EoU2LE350xcIV1gj6Q", width: 1280, height: 854, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114451506626728664339\">信星青年旅館 Star Hostel Taipei Main Station</a>"] }
        ],
        summary: "높은 평점과 편리한 위치를 자랑합니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 조식", "편리한 라운지"],
        tips: ["주변 편의시설을 활용하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "103 대만 Taipei City, Datong District, Jianming Village, Huayin St, 50號4F" }],
        location: { landmark: "103 대만 Taipei City, Datong District, Jianming Village, Huayin St, 50號4F", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.starhostel.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18225802802824009028", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80+%ED%98%B8%EC%8A%A4%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%EC%97%AD+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스타 호스텔 타이베이 이스트": {
        photos: [],
        placeId: "ChIJIclBPsWrQjQRYSTe3UH7fwg",
        placePhotos: [
            { photoReference: "AWCwydhHPl7Ut8ClrsZDiRjMX9HSwk6ETTnRFvM6nJFUGvkQmH2ckeuPesmCaJPB8ytwPRh0g8KgTiRyFWNCJxAO6UgyI1HFoQhrf0xoxAO9ieSSb3jOZReA2ibb6QZGwa5yhge1W84zy4SiWqIlIbz9LWoUQuF6brlcHkoP3KW3cdgZi_G5wxg44Zo6mVDF9fdkinr8u8fSol8W9LYdFHYCOlN4jcCv4g9bIbxpPu-FzvuJHbjEQl4Wzvviw5PULXqYuvb2cJX7ekij-ZgbLKMJj9JgOqUcIqPB_hkOd8hu2zfgb3jpOtN3KI7YAXMmnbeB_6XaEK7gD9VMC4ZgBWhlJDRZjfgsb9kBIcl7wpMDNM0fWjxCNd9jgRv-LZb0a18zYJbTHwokIImTm2E-kVG5axW6pAZHToSQ7AhFxxc-xW8VRBM", width: 1920, height: 1278, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108101708959883996466\">Star Hostel Taipei East 合星青年旅館</a>"] },
            { photoReference: "AWCwydiL5UcfjXDQGNRxe99bgmwp9RiBzNNMVTOdW1HiKxsWaq1YqaMVvrmp8LO0Jhyw7u90Gd1wVstuSKaOy--QuUsnkyZlM6TwQrD_fheBeJIvYNvYtzrnEw_N_JzZwlwQAAs_rsPvdYpUTVRYyCa--9Gk2uKHxn7frfOO_TGxpQiJEIWKkmFwYYY_ZY_5gW7prsvdNJQz-DG_0oxXNqycn3eqN0FfHMBWhYE084893KCfLbPDMGwgnLYhflg0uyzAQFaSVKffzQisxiN0lhtXZUk_qnos0iO19wP0n_wvQXFvkL6G7W6FgH8qZqeE-rmlycD1AifXn8NZgS1IMZ5g2d2-eVSnRqgyCoWN5WCRIFA8qIsCrvjzxb99VJE0zIZVCoC7lm8khd6jiU6l4Y06xolVp0WRoJe45cWJdqW7Cppbow", width: 1920, height: 1278, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108101708959883996466\">Star Hostel Taipei East 合星青年旅館</a>"] },
            { photoReference: "AWCwydgAp5r_AyCX4hSkAbgEjaBKRb1xRsVk3rO_X3rxOrSxhUD9pB589W4YRvN1rm-SguLxGvJS9eqLw8DYiVHWc-xhf6SZOhQph3H41qVztBnq0OEM5CuF_c9n552RKk6m3wsipcsLmSbhqNJut2R81oNddC9EFF8moY6HG50EFxw3KStTYzGVnFcgLD-sEyTNd7lcz8_yaYZn8RNjp6qPr3VeW5EI_0Vb7fDK29dKvDA8v3jTkFAbRUHwMgk8eBMRe2u5BraV5-pIj2zaQYHnzK-bC4rqKix1AMP4Vj_BeSnGjmVbWMkqxrisBR1YXyd8oGsQCRUalKL2wMmt3-JfGm5iEpSzi63TNAO_xLXVbR4c3SShOgXIay3uyfvG8lbLyP2aalKA5y91KqZGXeOJyz6Kh0_VtEOjtVZD6PT7i2NAWGA", width: 1920, height: 1278, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108101708959883996466\">Star Hostel Taipei East 合星青年旅館</a>"] },
            { photoReference: "AWCwydjB2H-479PL8DcUv3dn7YjsfcSBrtUP3qVsGk8UioLyMXH2Zq1glV29IDJyX-RN7fEZOnOg0IK4MnLvomMq7-WWk0_qyoR8UYnF8_FtEqkt2xZubyt7EE6GK2jwnXmUzZkyITe3Se7ZYIPaVA1Z9dcaNCGfhsu9d9behpy-IF8awqhNyZ0GBkoWI7NA4aDVLEvmds5Apy3YyEaENh0lL9sDsEog6dE4PAh61AGXZIWarmUux6rNzShxNPlfcQt_PkgFGlTnfk6yPSNu6sqEtFAa_kfqW8qyxShM_GJnXywO3bfw48QpI3WkOSfbAwWaBRoApb6RhAS2AuPghfkllJtb1fHxtYY3smaYkui2TXwknxcLQ5bnMrt0eqBlSEgORJNoBid7WpDdi6K26GjgNLErDHc0Qg0QP4XJO4weRIYyPQ", width: 1920, height: 1278, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108101708959883996466\">Star Hostel Taipei East 合星青年旅館</a>"] },
            { photoReference: "AWCwydi2oTi6h2O_hnneo3aQVJ6vxcQVF5786Z4Lz_YwczcnW2inAykrafP1xh_fbfazHVGy-OfGg_CmjellboE4OUAB17kVHtaKNXzDcqUO6eMaBvkGpiLYud-T9nPjXk7w2I-Er3d9ASZnbI9I4mXgp8IEmNnkMwuUWM_KEF3Mf0ArkMRaUHKdKJhSs0HdKWe7dBdWfxG_sGzBT30D3l1ktxT-5v3WJRUnn1cZPp1AtAwpWDfHuoIqYt0zyCOuxZoNNMqqH9C72M6HFOqVBPTl28i4SSB0RkZTkwU4R06F3U5JVZkxm53w18L_n3AhWq7qYBK2Yx3m9JK8IeXy7oNA-y3OK4GpfJPabyFj_wnqNubCCJuMSqpWKxmSV2ieQBTHt1Qzye4FR99NYaidNhNnw-pDUVR3-UYBPwBAY389DRhHAf7q", width: 2304, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108101708959883996466\">Star Hostel Taipei East 合星青年旅館</a>"] }
        ],
        summary: "높은 평점과 조식을 제공하는 가성비 좋은 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["합리적인 가격", "조식 제공"],
        tips: ["가성비가 매우 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "106 대만 Taipei City, Da’an District, Jian'an Village, Lane 147, Section 4, Zhongxiao E Rd, 5號3樓" }],
        location: { landmark: "106 대만 Taipei City, Da’an District, Jian'an Village, Lane 147, Section 4, Zhongxiao E Rd, 5號3樓", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.starhosteleast.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=612484334659445857", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Star+Hostel+Taipei+East+%E5%90%88%E6%98%9F%E9%9D%92%E5%B9%B4%E6%97%85%E9%A4%A8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "선데일리 호스텔": {
        photos: [],
        placeId: "ChIJpT986tupQjQRfdEaymIkxzM",
        placePhotos: [
            { photoReference: "AWCwydgTQgjHEkIEuTJhYWUnY1Ts-96JvBQbp60s7urngNyLEU-sFbGNkv1lkb1CLQe8kukGWJbkZ33Iz43k_MUHTfjvWRp2PdTAVzrko0CkbulL9SjeKkYQnsu8fU8MFP3Iln_eBEjcmpoyb0xHQj9TMzDbGHk6WoVyMj0dM0GlARaYjbId0GUpPCmZNqefAAe6STYU5SfcyednLYB0Cd5JHKOxAYAhwF5TN0oLlctZHAXlkyjz4T-TzZ8x9ZtwHyzxq0oXlrhPrZAq1TIEePBaXymRFP1wgwiAVMVyNokOcTL0bh_cXreBxDw539JkZpZL7XcY_y-_c9CUegt6KrYHRiU0-dqcmVBr_-iTDzNIIyVuKkcJufkiXtC2qN2RUpOQSk4mZropvqGoHlTN9P9GpFmClebYxXk7uCgxL7Zy4Jv6o5io", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103322450266249318570\">日初青旅 Sundaily Hostel</a>"] },
            { photoReference: "AWCwydjsqXUZL4_QEQWUxFcqD-dB-mtT7BRyX27B012eKGXDsB0wpRWL2fGYv9rX4v3smrYx1rvmCSwgW8ztgOCL6y3g7cWD4Q3bE9OUEXl6t-jZu8aYDia5c_BZRgz9McoerjFCJ---kYfY51pHovJJLJegqyoSmxtK6nthiumS5RaLwZ-aQk7AStnP_Hgv72QQGrqL3tsPy2MMtcbORvN3yhDkNULVCDIzRw0T1TNKMMbH9naGNQsl2aTB5EtMpXqrA7YMqFvzhrmsvI8aWqjKOLQ57UYAsPguBFMbjj-ij9Y6Nz877CtHG00_tYsLJepCJgK2iWHu2IYGmtccOUZo48BoOuL1M4mGEEmzEU1NeaSMRgJgA7Rwlbw1A4ZTyzDZ7iynJwtLep_DgOUWfYh_76uQsXoafQeVLgszrqj0i4zxug", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103322450266249318570\">日初青旅 Sundaily Hostel</a>"] },
            { photoReference: "AWCwydhVCXa0Eq1aJKgX3t6lf2JHTGKNpFB82GXCaj8bpusDjdTqipfY1NIEa9Ku9-uidktKcW5G1bJa50-pQu2KWhae8giy_EmY8w_e-7kwbAyMMhwm2EkRnCU_2k0s4NSveKFB6VR-c4U7nNFBV4hCHRv72wFxwwr7qzzTeO7ylU60UI4h7QHIv2VIGV9UukmLB4p9hAkuycG2Hvoqm5yjDPqJQY88An9lqY77X_H6xsxCQaRotJ8GpB8U18I-FNBc9jqIAr0hUjwSgnnTn6IO1vEWCfrsGZg4mARyD_clscHqemKcNqGgrtGDMJruxAf7YZT7IavIhg7iJGKIaVAdMUNvoRiZ6o2TfHwfvHRozq2TLHtYn7KBfg-CUO3pve8BlbKLhJQUOglfX_WORgpt3g2Dimot9PWNWROuEoOEt8E", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103322450266249318570\">日初青旅 Sundaily Hostel</a>"] },
            { photoReference: "AWCwydjwXOT_58Kf8o3_OIAm8TbBs7M3IRZ52DbBzFAL51-L5qdGTOlUqbtuQFqa1EPg_vBh2-d8xdbgW3f3hV9iaAar02-hvDtAPQKgrd7N_seobTO5MO7Bj-jbooFOJgsoRZppKhr_DeVEPxkcOzwriyuC9n7AtgybV94y903oumwsKk7lefL0-9QchCgZLnJC1OAAaGSvvVBVQ22NFhXZBVblTk6szNy4MWBNH4liJqFGxCgHzruOAISZYhJ1dQCdKxSK_hJwh1W3xwZvTzqCxMAay4hlJxkEyYj4OILohkff-y2S8d6OV700swvXSGvDWWLBVLJKBz78kFKLp1qyz6z1-0CxNH14jWRESG1CkD7XPbcMTr1uhgzEAWsv3WQ9xUvL6S5rcTLknzf0UFEmBxA6e-MnYVrwh7PA1mGX_Zt9YQ", width: 1108, height: 1477, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103322450266249318570\">日初青旅 Sundaily Hostel</a>"] },
            { photoReference: "AWCwydhzoQwica1ed6yhu_tRiHfto1N1O0M7KA-YVRDb7_3vqD1GSBq01xfbU9SCiPyPc-n27HDjQRjEq8qBAhHFOHL4cO2OETe0HqtGR2ha3aV316qeYVnF_tDO_2vclqW1o6IIQpdek9xK3Hb0O7GDEWOTB9mAGy1LneMs15uAcEXl8OCzR13tHT5AtSz7M-LzsynU_HvBP9ngBQzPDfM9Xidb_GBPjzn2Ha0AFimWaL1dL9Ktq8qy7Tah0Em3kj6k-Ipr8OY4ZK58lEY3UoFM-DnjFNl7r3QjTuG9Rcljj_Dm6RycN8I50voXSuKQWcoPSUtqJO5J9nfWgPDAkuGlyvLJ2FIWi6gL6lhuql0mZ1vlf1yOsZkH9sGL5EtfDOjaaNdufgnDqB-Dc8RbVhDGHyM5ZSpUm9sJ4v9bUS9VdJo", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103322450266249318570\">日初青旅 Sundaily Hostel</a>"] }
        ],
        summary: "높은 평점과 쾌적한 침구, 편리한 위치가 특징입니다.",
        updatedAt: "2026-08-16",
        highlights: ["편안한 침대와 시원한 에어컨", "신콩 미츠코시 백화점 인근 위치"],
        tips: ["음식물 섭취 시 쓰레기 분리수거 필수"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "100003 대만 Taipei City, Zhongzheng District, Liming Village, Section 1, Chongqing S Rd, 49號9樓" }],
        location: { landmark: "100003 대만 Taipei City, Zhongzheng District, Liming Village, Section 1, Chongqing S Rd, 49號9樓", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://booking.owlting.com/sundailyhostel", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3730990823015895421", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E6%97%A5%E5%88%9D%E9%9D%92%E6%97%85+Sundaily+Hostel+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미팅 메이츠": {
        photos: [],
        placeId: "ChIJ4aoS9UipQjQRwpFPTeM7nBI",
        placePhotos: [
            { photoReference: "AWCwydgk59uiff1JkR2tyjVBL1GfcolnacLLzCIhISpUFIoPVsx2fNWSzvyb4R5Dfo1SDQ7BbMDZRoKLVITZWKFxSbArK7IA_w3b52DZNAvu_nhWt7zyE5Idcxbal-XeZOzcoufgenCo7F7WYshz4_y7XnuyJZhJ_qwhF6zMHPQBv0mChBOPqoeF3__7SN90qIyaTIV6caYBkHgorTgpWee-wVADKT4D4kYCBC3mugAth8MQykHX3TL1-ZRJw6jPN4qaWSYYZczhxHtUnLzjHQZHu_gmLe-FikUtW5gzy8tVrD3OUa_WW_-59myCvmqZk86UahNqrsOuWCIGKZZpsnrCDUlWyjOi4KS7zG8HpCOokUFDm2T7ZiLORPLF96Zd4EDqoydp66jskyTpf9VJvc8qz81WQdij4Ku4ylNGF9F3r59CZ1f2", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112932202682810260593\">寓見青旅</a>"] },
            { photoReference: "AWCwydgLDOy_jasRSgnSCG3jxxzK_QbtiE4nkpjgx1KtMfRiVkhHmzI62Wo1k0n63NQzjvKyQXgNMv6Gcedr_HTbgIzufGtLlBvdXsmDT8dl7EF9mhq91HMRgTxSi89tZcTQFu7W6Yt6XVXhwJTfw__4a-AVixAIKDuoy-FVhQRYkkfzTT8VBUZeZG1AouHGp65cIwzvWFasiVL_1P6rFmDhUj-zBerMDD7pAmzGGzCNdc0MPVAXLn6pAQ0TFhonEQUcc5VD1j_l_I4Wn6LQBcOV7gk5Ob-y2SxSwHHoHRP0f6idR_2OWEZVYJADJJdFIxZrP44obx_XHurBxVQurtEZA_a2RtMCGtonp66m6n8yztuQeybYsNIPfKtWQ3UcGF7bU7ful7ovMh8UgHL72UxucuZKvdDgLblfpILA2rEbhQc", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112932202682810260593\">寓見青旅</a>"] },
            { photoReference: "AWCwydji0lYqdpiRT3dROoYU7J3wSsk3mnpp22UeIURo_8YaQx4V19wXRbmQ2n3gAifz6858x1fiPY7BgRA65qbXmoY4qvd4vjb92vwsabI2e8kJjQP_7duaRX7LRfWszKobCjQ75eAfhXQdiDvDDHSzZ3E3D3Cokhn59cmP8UZmR4_18rO7U5JLFvkOdTO50EO1vsqHwA-i2rDypBrGXlxJkEBoeyDW5m2a4FrMBIacYFyeaZesmuQHBa95VKryNCFjgqMxKeNkKSdMforMdXwxnTEJquRwy9yO0UA0SsoIG_C0EagU_7-QblFKJ43rJMHB57PlXkyr6WHIFjMp_UsGZxrmNL6fAkljArX9YiXjEDklO4adYDZG31mSTv-bZYbDpH1OkzXvKFuuOMzYPy3BjiSdW_abhREX3zjmsFUSQ0yCMg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112932202682810260593\">寓見青旅</a>"] },
            { photoReference: "AWCwydjaxhmUYPjw0utrvcY44PmRtLIBykXmI7u6Vyqvv9z2fJCGfm3i8T4BhBrOMvvlmM7uTUMjJMAisWIyrRSrGAbIZVf-ZnVgZLbIqqCU-d8LUlZYlJknTx2M3CtJjnTy4yYrTbzJxiFeeLuYoM9_Tkn4exxox9xJupdeHVch5A2HkaUKnf8NmkaNruCn0YX6cLnKBqycCRTEfEIKle7ZDhaM0akFvLVrWSWCmD7sbLuJdcBL0VSLgymA7a81kXAMQi1owSyYpycWYzoDGtyhcoDvCosdGGFDaLDDYjCAjExpgf22zkhoEVC85KoZZSKmv3yo9OY5oB1aMuebIn-MbxEDmeOV1la8ZuVR_bWY99RW_ZEjAt6Fqd4HbJT2BUqUyjOv90Pf4DbckXw-50MMmlBEk5fR5MiX1ArQgjGzaGh4dHfm", width: 1435, height: 1081, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112932202682810260593\">寓見青旅</a>"] },
            { photoReference: "AWCwydj6rg4N9bdXX7ktWENSnOieItlsT3cYVRSEHHAFxy94kKeYArPp8nX7VsfF0l2oH_Qyd3Fg13BeVw0Wg4dCo--8dfDkugYmDtH8Vffgl5z_mhCalknDsUxLhRyvMVrO0QHLACwpYyDsPFz2Mlxu6M6YqQuLUxK8_7lUBccoOix8IpysYa4i1Cq7RrOZTk0EeEfrgzEkGoE81ka0Oal0mVo5IpNuti4oXzcHFvtRf1vISN_xVkHliZPQF4vb1_gcekhkASRpyoC2BSJL_-fSG2tAnC2_7QDZaGgL1Tk-n90WhA4sget82oUCbpPrOd1E96MfNfaDwQfy9Lb15I3qS-xvyc3-VfD0XpRAKb442NbvsGONK4FqzC523WnlzpssVvfFLs8jQUz-fbPAmTkOqkh2OG4fCfCYZDTDTbGRQwpY-w", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112932202682810260593\">寓見青旅</a>"] }
        ],
        summary: "적절한 평점을 유지하는 인기 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 검색 순위", "4.4점의 평점"],
        tips: ["주요 관광지 접근성을 확인하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 316號, Kunming St, Fuyin Village, Wanhua District, Taipei City, 대만 108014" }],
        location: { landmark: "No. 316號, Kunming St, Fuyin Village, Wanhua District, Taipei City, 대만 108014", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://reurl.cc/k1273d", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1341012636490240450", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Meeting+Mates+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "워크 인 인터내셔널": {
        photos: [],
        placeId: "ChIJVRaGU3KpQjQReWyqMDN7YSU",
        placePhotos: [
            { photoReference: "AWCwydg_ailNh7MYT6UmCYvpn9jxRrKvWpsZGjopOjSY7Ug7XfgTHOO7JU7oFW6J7pMjneb-6s9Aoe21EGcJnigdYDUswNi6TdP0uJrZGdo7wWZmt3mln26JJoHUmH5qOWJYdb_4Vzibsf62OkkWhEUYRlxyA2Fv33yxMqIbpZ3Zrg9lboURGGYCiLA1n5IguJvhZ97WX-HolEOL17JluvvQGXXNuPXigcc0YnC9BKlOxjhspxFnSbe-2p1c8WZJJ4Qb9xFyYeUS7N9rdMRZL5SshJBQgGrD49WdFhll67iSy3NzWu7n3Rv7c7fH7N4u4XRPutCaIaWjbVCbav87A5FZmUXLOpcCuBdKaIuXqJZMver9BZd51fa5yAiQZDT4_kwX8eUNEXD-uNI1NmLPW8tPYKHZOvslkmAIFjehyFaROMQYG80Fw1J4bUoaDtIE0w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116486759323300732064\">Lambert Chong</a>"] },
            { photoReference: "AWCwydjqKONqOgu1cflwwt8tliJQsODCFh1qcI1IBKINXKj-n1Mabb45Fq6GEF7p7dANN_uyvdSlhd4dWEyjotRcjRVNb5VJx8S3jjml22XktbE60VkDDoCdioGf0GRd0g9SqhIMRIwDPL9mp6IUp1UxVS6tSNV0tSakkGK4NW0G6awDriXFDjJo32UxH5TAqZQaS1427sdLzZakPOAtkKFnZjy9EQp3dFLozxq0Aq3nrFd8Aw7v3tGYnVM_N_id7wnOE1UNNJlZH4cvPC8Z4VTzcMNGrr0_xQ8COdyd8gGiSGiLhbg1bjpNfPDmvouSmUDgr6QdFTGOGUZSTX7D9aXgOCZVxR-S4ED7HymsCi1YUELGTTYp3nlYpmyYZ5MomGJPCI46shfeV56PpWEvwkiRp0uCfOqYVQWlVqNY96EGGvFfgDXkNQboMzVtf5DyYw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115789556725317963247\">黃翠文</a>"] },
            { photoReference: "AWCwydi792BgR6ULaGd-TtxurYhQAN8x8gdI8dPEG0TxhtjP6qiF2iNqqVu_7qvgiUpqcm91e-b4lcT1sOYkh1fEh4U9SKxt5gpVyAaEJgEMMFGA7d0X4EUk8t0bCjmALY2xF3i0mmG2FEJZ7PRTO4Lja15sJviJ2l4oazr6zeiqEKA0bbVrRuw8wrFvlt2SjgaC7vkAn5CHAiAEi5dAOeDoT21cPteqw4OMBnW_L2_nE2SKSfzfa8Lx1rB_h2O-O38ETzTa9ZCaVu6MlD2yegXV1TcsEly-nzMUiaAO38lB0PAgEo3qUS7eTtR3846JIk6_EOWkJLLdBMbnr2XMlGdZNfRwLXeWM7hNd7iuotuzGBvij4nOmcztoT7SLhAssvtcf5ku5RC980tEJhBgOE22h0AJjiT7o7MhVuLId-5rVZvF7w", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117412267599632412211\">Cyril Lee</a>"] },
            { photoReference: "AWCwydhTuNFKyuoIujTdWrG3fsgxm8ZZusP_r4uwUpSIeDQg8WHNCLvEiOBDM9TOljm2jRiVoIRlc047AIJuLUkwYSm8X-GZ_wUo4IVCnZMsuQ1eXk6EDDGxbRGEUvPBR7V5OccDbbDNpJYpshAIpzYaWnmwaqgQnItGh-Rb_7WXZdT2dlpujN9Y0WAzaeZiB2nzM-DCYMG5DXzw2n5lSooJGiBY0BEIQmhBtV279g5aRGNq-mVvrghXt1BAILc4nbQv5Js15W0y9-0ujtc3N7YLc46avK_hijO2_7Uc03sEoDs1XqUj4wqwlnhr7TWolHLIISKxlD1Vqpe7IwO6u0pZ8IKPiGUd5q2TP4Wg_euuJT3cPRWJ7mU53zcfHZeO8secFVGV1cvQrPeXamKGwSIscOvYNVC8LNgD7hx_EpYVoRYWXAOY", width: 820, height: 312, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108376209885427391164\">Work Inn at Taipei Main Station 北車館</a>"] },
            { photoReference: "AWCwydgxQpXPUP_ZqsG9cKqtfJGTWqenvHScDh_xOiJBtcm3X9AYscnRgZw1fEH1Ya2_RXFIwRY2NW30mJTWxBlNoJ7Ph7MriXeVc_Hqq0BDjPdxh95lRHrClH2GKd5SMYWuee9b7mveu9xyrwus5NTNpmtHxr19dvGE9MLBmxxiV13BQfQlcfnbLV9ID2q2EwiewNrHNu9VlS6TImEaVNmZZ5fQC-Zo7jrozsk70zVcxPS-GfyY5T6w1WwB8QmGLuNn3nNPBze6rqLaeH4zt4Qn2slC7diYnK8aF5OAa3UIxWvJKiLv4eYBhg9tL5YrYk8OQlu7LYwEk9wVNVZzFVUnqPt3ydeJKNqCkOucRC2j08b42kM8cfaK_39H_Wkdsu1-8RDGn4d8i5azFXqqaRXz6vWbUXhOnGgJe4eqM0ApNwBR1g", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115770371618168273996\">Charlene Wu</a>"] }
        ],
        summary: "높은 리뷰 수를 보유한 인기 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["타이베이 역 인근", "높은 리뷰 수"],
        tips: ["역 근처 숙소를 찾는 여행객에게 추천"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "100 대만 Taipei City, Zhongzheng District, 中正區 Gongyuan Rd, 13號9樓" }],
        location: { landmark: "100 대만 Taipei City, Zhongzheng District, 中正區 Gongyuan Rd, 13號9樓", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://booking.owlting.com/58fce2a4-da31-4790-baf5-1cfbe513da91?lang=zh_TW&start=2023-12-23&end=2023-12-24&adult=1&child=0&infant=0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2693569511934291065", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Work+Inn+International+Ltd.%2C+Co.+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "타이베이 디스커버 호스텔": {
        photos: [],
        placeId: "ChIJmYAuolupQjQRfxyLl_gKCYk",
        placePhotos: [
            { photoReference: "AWCwydi1SV2kmjxGAhs4XIRwGXEQAIqpbLN_PYXuguHo4N2UDL2oiDuAMhpamZsmmkOI-i_RaCXJyonCgGURqen2suYIDawRBZM3XvXWNo-E4NcF4xr1QL99G7TIsWiN_m19GxD6y2nQxwAMNWV15HQYlodMFfPKKSHQyeqVcLtA7XKa8DMj2wbDJyejrk86KtYqJe21kstNGJoDCRfzHFBcJG_9sROt9zVeSbRrr1mtzVKXLif6d2cV3SiOb-PItpObdLIIyX6hPj8rOsF98LDRrvobdEhY1jQus2Aie2JS5_1-_s17F8_iNCfukzl35qLvEtvNyG9Pec15aX5gYN0luM45eYw3k8e3eROz8oXnBcOc8PHoGnEZIoN3PDYK4B5y_327YOHbJA3iFGOuhPVCIUVfjJKzVwGkX0Ftdi1Uk5AcyijD", width: 1024, height: 576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113189032183549502634\">台北發現青年旅舍(膠囊旅店)</a>"] },
            { photoReference: "AWCwydjz77P79UY4BZEoRE5c47U17PSxsw8GoMmXpVmwQJH4iI-XvaekYiV2K5aBjAWJ5AE_2F56kTiSiMOBtdJwiV9zQr9HkpxMwLZUO4CIxI0RJfrREN5mBwuvgAGbjhmmvbBeK79U6hMFanhkAj_UkbVtJgLQMZQqOacp1jYg12bFoj5uCif4LByvKrPahvJterB6Ang-HYgM2S7VPicxke6k2S57CJ9z-LDavZucmNZAcWCbmO9hEUSshZazcX-eQLh6reRMyjJ6oQsHkg8Po4uNQlZ9bSAHUOMUAtbfUP26AOf61Ma7nh_frS704B32T_ti6uUKP93RCfc2rzyK2hZQbpQoi4H4KcD8x-mU1rs_py4o37rZ9Y2CyHbRROkHa2VqEvq_7QjMjQTbGjkJFWuysKZjk5z4novfEAXTujCaV0HD", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115843445451726370782\">跟著史丹利去旅行</a>"] },
            { photoReference: "AWCwydjSkmVEYh3h104A3_eFNdkLfooxI-rt04MP7VOG8qVgDRfCUt76rtFCgsqSRvoUMxvLY-IQwUvy2TW_8Iwl4sGXdiCOrf-AQAp52DhXeyMXRQJZ90YOLKj9qOSIUNRgdmc_ENKBDf1Xj_GUbDrhvrE0AK8Jl_uGA5SYkwislZFvsJFdYQ4D0FPysCpr3sdxCrEa_KVGbggsWpMOGxjd4ZaEpMLbAk8cUdIn3CcTbrfC45GXO27xj3Fzikh8ee8gHjpPUUObgw28Rz2wuwZkwaigKJDLYnygSR7UUaeVDU-E3uFMYJCCf5BVx_tL-8pvNj6Bys5SitwUO6BldTJx5E0YVGgaGgf1T-g-EWJWxzSgG592IjpNsDyLKRlARcsxfjAuF4xzpnLvkaEM3QyaexUk1uqEHMiZ6D-UCz4LQTqFyXoA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105026293638072808396\">HUAI en Li</a>"] },
            { photoReference: "AWCwydiXcIYzybgkr888eUWiOez_wsIyBytukkcQSqZQzRKhuTUgpGJUBKqC5GN9JjSgsgt9Ov80_7IgZStqydQY_kl7CSpLgXpSO5WIbABgw5qU2gKPzbdq-RAbJ2e3FuW9Iuy8iylmDBTUpbhHxN99Er9-Zj5pXpT-lPijffEw0UxNAjjmC0BlIFGKAXQT3HOmRc3ipVTCfTZMaocgfHjILYRbRi2mVHjH2KPrWjw1L80S_dq8jZueP-K0TS6g4RZOVBCUwQXAdcIhhWBOrjhqb-K7ZqDrWqlrAdSU5g1FtJwySwFcHLmfiu4HCnJtZagdBUzLVmiUVppezle_L8BeUWX4-121Hx1iIh1hy2Ge6u_zPWKZGHsLB4V_Gn0bWJwrU7N0rhig7WJMPpM1w0d1x6lvJK4aR21kDWyrYsEYGMY", width: 1024, height: 684, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113189032183549502634\">台北發現青年旅舍(膠囊旅店)</a>"] },
            { photoReference: "AWCwydjGJArRqPxF6zFnWW8sG0quSMQF3NK3GVvw9BzS4Swk3oNssJbDMzZcFuGv3zMvNMsqfjfJQoDmFNx-bTZkNXjpk9-XokbKAaz0TzraJLEPFl4W1vkGi9vB94t3heAa7vaJd71411fQy-yI0HOGk1dwCBVlGh2DuhOq44LMC0F24Q3BKSdInSIGL2C1D8fuaTzgB9zPEiMQJGBUZ-yApO_Gn2ObxKAEN3MIjC43BGZKGfUvEbatOEfgmAYFhCgjyDAAbfBygQ4ZmkEx7Cs_viEKu4zhUpklrqP0vn4nb2FYj5gnSOVexd76QZkIPzQblHdjbxvL7-Nw4xzKVahoLAaP3pmrUwgVKKxIiuf4Xiqe6as2NAcRH6Nk1w4Ptx5kucpd5blz19WxNnDzWPcla1MLuRvOABOlPC52LJHmJK5UoA", width: 1024, height: 684, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113189032183549502634\">台北發現青年旅舍(膠囊旅店)</a>"] }
        ],
        summary: "저렴한 가격과 효율적인 공간 설계가 특징인 숙소",
        updatedAt: "2026-08-16",
        highlights: ["합리적인 가격", "효율적인 공간 배치"],
        tips: ["대중교통 이용 시 거리가 있을 수 있음"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "10491 대만 Taipei City, Zhongshan District, Xinfu Village, Section 2, Minquan E Rd, 21號5樓" }],
        location: { landmark: "10491 대만 Taipei City, Zhongshan District, Xinfu Village, Section 2, Minquan E Rd, 21號5樓", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.discoverhostel.com/?", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9874435720797166719", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Taipei+Discover+Hostel+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "109 호스텔 타이베이": {
        photos: [],
        placeId: "ChIJm_1sLEOpQjQRCBRW5EoTJis",
        placePhotos: [
            { photoReference: "AWCwydjlhlNOSSW5gbBPpRDLNsCQIIIFW0FsYVTW7T0NAtryuP3PdFAa1GcsnWqFScUyBDa62dRerOVBza2K0cjL-UstJ6aUkJfbd0Y1TNj_lzLH0AbdXqnPhFhf0l9n35Pr04Qn9V8kNIbUv1w8L3oexkzFkV28JSWvMruvxrNHoZbNUpf83EnjZnXeS1-XN2JCeQNn8xz_fPeaVP_PsprUkkRosQ0Ut3tLn4zOlEgSjQxkFiJ62Xkwyh-xbEnj76c-X1IQc2WQPOLn3EOOT5uIQrqU_OAXp7Ea4nfoEUwOQYaWzOQbP_HnjQEUUice0XmPEMPhueJ6_59iF1e4H0Sp79UpyOBWIewWAO5PEl5TUGcYkYhYa_em23IXFTas8pjlcM0MrMkzLj97KP6OZQN-29HTdCKXDZU0bIt9KAOVITOO8Q", width: 960, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109624945402899445088\">109 Inn Taipei 台北109旅店 @109in 台北住宿首選 人氣情侶房/團體家庭房/包層包棟住宿/雙人房/單人床宿舍背包房/台北車站附近住宿</a>"] },
            { photoReference: "AWCwydgKInzUIQV3rFuNQBtARBiN6wAP__vL3ocdaon38AlrPxlJ_Lw_vQypzs_775UoddxHv-UbcP4ogxIsIFqXc0T4647t3r52elnF4dlmwSMvTptEeX-0vQ63nZjgh5HK5AWLtid1FraMDWcOSIC99BbcLSC3VO3K_NnZ4lyUX60rgJKTbvfvpPTVMeNA4Z4MQR07v1GvtBGfFTtqUZO4GsKf-0_ErAPsEXaGuKZNWK-hvcqnuWsvqyQUKAijIuP5d4dUOPvAyjMceVvWhluBilYkUlvYo2fePt5AJ3-o7JWmLjQZA8orlmznLiWtQEGq_HnXUmpfpmqFyNfKnW5qWwEr2RKm_aKqqGzHivkI8_TDcTgLbuLf2SujaKp4QECSeWZQoFYlo-ZwprfwKYlBBFTSIiQLRv5o3QUtUjPlzwxoPw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109624945402899445088\">109 Inn Taipei 台北109旅店 @109in 台北住宿首選 人氣情侶房/團體家庭房/包層包棟住宿/雙人房/單人床宿舍背包房/台北車站附近住宿</a>"] },
            { photoReference: "AWCwydgERjwcjcEzzvdEbeUNRcbMKz7VM3qvAawSbSpL5iqEog92JXNeIoJjxxeWBEsqbZJ-P7Grn4lNkrQmZlS3D0fJPkeoqfC6wfe1VU_M6uvT_hDfQ0xCLdWoeZ9ExBfeF_UR8CVDKLNBVKc3P8SXCBycDjSpA1UiKVBcoCRdU8Gayw3i3ARHloKnj-ARICdtZkWHp1ndex1U_-20IxvHTigGsnLBEsR4cCb9xutamLgXx-bVdV_uVeeZE4vTGCCTi9tN73F5dtcUP49JR6DQZQAb3Jxk3wqTnM6JIM7hBiK7CS2YDzM-FXbzhAfFXKRZW6rthJHtB-KaPq3ErWNypfY0sZhAzOllydwOpj4mNMttoNmkaCIUA808nJDZhG5MqxBieShlxF0Go7AUfKiei5HNnMdMdPCm8T0XrSJCJ56IVQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109624945402899445088\">109 Inn Taipei 台北109旅店 @109in 台北住宿首選 人氣情侶房/團體家庭房/包層包棟住宿/雙人房/單人床宿舍背包房/台北車站附近住宿</a>"] },
            { photoReference: "AWCwydjOiFca1JRZOJC_EYKb1ZM6i4SsR5zS0YaprHzl6xltyB5RImE1NSz1wE2RlLTvwQ3Y1lWW8YGLfsSZlDyIWD4j_7ih8qxhKffM1FGjs2ZP_y42TkG9IYJF5AA8nyEVWI1u6HdQ0KVbtK97qbOyd9FT9IE2bltaRCON7MwOoRwcHQeACJDdDgxjsoFhwcyt0Qum9N-mHDQTbWNKxGsK7YvwD7c_TbDNUu5NEgZto5EdiRMdF1LYIx6AAvvX_Qjg4V5dBWsLk0P48VarWm1GE8nDfLGQgudY4L_XZqAZFC3QAuByxCn7BDz7zZ85D-xaSkTblDrYwSQw43rcI3Xje9h8Cef-D_XFWF4W9gR1M8BgytyMpIuQOteq4bB0KWazrj4xFxA5k33i8IcngZyUwqKWELqtDNxB55PmfVcPSSL1_Q", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109624945402899445088\">109 Inn Taipei 台北109旅店 @109in 台北住宿首選 人氣情侶房/團體家庭房/包層包棟住宿/雙人房/單人床宿舍背包房/台北車站附近住宿</a>"] },
            { photoReference: "AWCwydihmwBDsq1PtK_No_-8afGc0FlkZ55Smrw5cuTtML6kZf-j7Lf-aqwHiZ51qQS0VzLZGEZ1FpiC48VTaqMmyqLJNmr2N5F-4uvnXhN9O9bbG5ys47GzlmdLDWCo1k535cmczWftIeSrGsQGE2kHDBBzkG02bYPK62jD8N6LAgXroBOjL-_w6f0gOrBqIe-05cSNCkW9gtH48GwuqEpRClCW4hdjV9zxvcE60SJgZZdLLD5uFbtWDF-m5ruBExJNWJSBgZVm0RlfHtyaHcHPiOGLpNQqz9zQ75tOq2Hmj6ZY_roFHadyUPI_23uu2KheO68J7fbdgCMTFj8mJZ4Oog1uUD0VLJ9X_8WtwOFNga5md6fZHokFzV15no2c-DeCGcwOqfgsy703JDH_zn7I2ZC3KPHCvoBFzaxXjzPcAV6uO1VlD5oWgwnUzJAI3pOp", width: 2500, height: 1667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109624945402899445088\">109 Inn Taipei 台北109旅店 @109in 台北住宿首選 人氣情侶房/團體家庭房/包層包棟住宿/雙人房/單人床宿舍背包房/台北車站附近住宿</a>"] }
        ],
        summary: "높은 평점과 편리한 위치를 자랑하는 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "역 근처의 편리한 위치"],
        tips: ["무료 객실 업그레이드 혜택을 확인해보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "100 대만 Taipei City, Zhongzheng District, Guangfu Village, Bo'ai Rd, 36號3樓" }],
        location: { landmark: "100 대만 Taipei City, Zhongzheng District, Guangfu Village, Bo'ai Rd, 36號3樓", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://109inn.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3109193805125260296", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=109+%ED%98%B8%EC%8A%A4%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "와우 호스텔": {
        photos: [],
        placeId: "ChIJ90uFRgmpQjQRrzrGHbg8AT8",
        placePhotos: [
            { photoReference: "AWCwydhVZlk7beM5bpqdMsw930f8CQXGppRWilLvAgXVU9yRb_5t9kzmy0rC1Ls2v_zShz3ZulW0y5aQK77V1Ne8XiT42FJrzclrbP5K1qjMZi40U-5nl2rjrxcibeh4EUtost76kaV8PIQcxdKUGOMzD-hvQylfAQDYXHmIgqqQuCJq46GDeAIa_iDIXpqBtX2NWikNxAJD6AdjPdA4Qrb-a3sfMUzeTAGO_Y2UhdEfbw9HJmAgaVBv7_Um-PSljqb9Oqb6ZtqWjFwRTcGuP6FwUjzc-yceqNRynW0nImYXrQWsUlMWpLWJEM8lZ1UP1_qolinIoDzX3wM55iSSkWQmP6HxwUDIHvHsDoCFnVwXYSeYllnlkA_8AM7U8OcZtB9ysGRkODi3lyiydmfVmapWPAqBwWmlGR-X-2JPIiOGJAFDWZCHkiBYbMN_3lwWVw", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113633009272858860289\">Annie Huang</a>"] },
            { photoReference: "AWCwydiGjZPTiyHi4gzOYLr7AjmUZt3z4Vvr694YblRjCuoPBllWSbkW17ZhVAm6WhLEb_NDz58383TTBYXjyp1xTgGinnUdnSXOf3Pn-EIIbwQGiXlR7QFYKg-Od7eHPAiTzJ2Z4MTWXzuEpKiWbZHV3rA8wTT6Awr6PCv7OkFBeVrKtpyfqyXCdx8ar9LJKEHh4MN_pD8W6iBmROAb6NFlfezAnG6sTOcWkG783xn1AGLUzhIqMEae4Y56wUKG7OqTsWer49oQ12H2XqGYzBTqUpy79Bup5F6tCMBTMKWKr8pGS1ngjjsMgyHwfMNjLj6O4kBz5mT431JEFzRhCVAm6kSueOjt2PO3H5Ovkz9fZNFEy3wtQ5CpjaxNranFVp67wZFjrW8j8nxyJAB6VfRhKTUXsDm4b-ZFvENWKWpynzQQOw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103770137452828863848\">Hsu少菲</a>"] },
            { photoReference: "AWCwydiEuvsynR_cf29LKeLmhqWgGOk--WMI51c206vhegVioRjmnw_R5drgUyE7JhSVY6MiAGZIEtR81xbV3n78yKY4UM63ocUjjTAUDH2VPywFC_nFb3B154mDxANO5oRTcDao-2kXdVvghcCUfmo5Iq_QlsVPufIOz5fU6thopueoT8eqNUaIm4eg375W2o88uUKUuFjhYzdwa4wu5JhQ1zZiTmsFCFk0AW4W-PGg8OqOUPUlj2PpcajE9eS0ovu4NutyCsgKN_jKA45zErW0yERxjwrrWAk8ZAMrs_sn7sBs99aKP2WK4xzYlwlkTjiPrx0tXwtNhk0PY2zvNWKTuHvoZxNehPeAecSvutx2ZmRR9O_pVMMv11-BZ3gBBK3Eq0BzXbyVM05lrTykdcgKmuNFLAJESZjCULh1S51PZ8pTMbI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111763007577261467471\">7fang</a>"] },
            { photoReference: "AWCwydjcLHgj7pPwqXpsbD7fxqAkreoe87FyDrJcbIJiDAbTh8pLaqrJxAUkStvpkIfgnpGyEWG5uFkQpJycKTrAY-k1_BNbjNCC8wl-G0AHmw1jBxjKDPa-LbYqAseXCbicMzIqcFoc8a7YZwx3hV7WWUpCj2nOxcnITCsFU-egqGffSXcki6ATi4Rkw6-4Xo5KzMHuVHU-Ic6PIurVSRiKZj8fCqBPypM3aLvCE0A4ZmqUTbWoUrE0xm4uNw50dev7Azkdg7kHF16PPbAQkm0LmiluYxv8GEzLyoFplKEziOmFC2fb0oFeDV1T5TBG7kw5Zpl-map-rnFACAqHe-JGci3TobQumE5M8-JilqV0tRQQtgtgzvVtVz-YmG6EyuND8sxMXy7pW8NwaMRbLVvMZSHTDmTN2GQ5Ru_M5PpycmXhytQLn4J4DM92Dns_nw", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113633009272858860289\">Annie Huang</a>"] },
            { photoReference: "AWCwydihkcRBaZYJSMMPPC8sqiA9no5j39GuA-4ikH6m58edMxCUoZizcoc8Wdp2DrM9W2IJ95DJXHnJgeStGiLrsliV5-XdJTG_F602hLIDPHQ0pgSUU3nW2I7p43KUjFmtxQUgTmdkgJzujCPKJZz-h857LGnmnlYZ7a9DiCyQn0NJRLEouwrAuRWaf74ENIJX0FmTydz6_ofnGA8Rdk6SrTrI-UDJJQKO-LCwuc1PYlZN-bvfU8mYUwJLb3uK-F7dbzoLFkxgoUqIHaiXJzmz8sUFm9DCDvVqG41_lx8MLHEW5QY9r65KBj2BuYcN4pkCG9nWE87ontJuLfBBlc8pyWX2BIOiPLObnJKR6Gm8m1PVwceajmlO87uBOpCzuLjE36dQEUxT_WDptEOGg-2G9kleBSiTe6Ez-vNbUn6LUBH7IQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111763007577261467471\">7fang</a>"] }
        ],
        summary: "사람들과 어울리기 좋고 편안하게 쉴 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["깨끗한 시설", "아늑한 분위기"],
        tips: ["사람들과 쉽게 어울릴 수 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "108 대만 Taipei City, Wanhua District, Hanzhong St, 42號8樓" }],
        location: { landmark: "108 대만 Taipei City, Wanhua District, Hanzhong St, 42號8樓", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://book-directonline.com/properties/ximenwowhosteldirect", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4539976660837350063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=WOW+HOSTEL+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "온 마이 웨이 타이베이 호스텔": {
        photos: [],
        placeId: "ChIJb2dz6FCuQjQRtZnsB4QrAL4",
        placePhotos: [
            { photoReference: "AWCwydiJEEaE1fu0kML1bPW1Jrg16iNZE0isEhsIBq1Kv33nDtWhTWFaxvpo-YpZDw9WakLyjIjnHcmnLAFD-sYqpSGDw8g_gW9vUbA-VqWYdrPEeqJr55ewDDtQneDeuiaitpZkHZl_ua-Dswths63QFaYzQ5IK9tUVoKUyP-X6wkPTWa0gHoY3o4XhiPYaoCfFmsMD_6K35snr98SFa1PQ2NSAlbaUR9Ylr_-ZKp7SFNm4voMXpmmSEaoJr73zzBxMUQwjmg5KXwvE7nKK-7-bQnYio7CSLO8tBV7m1FtVvsQW5xOTRvUq543zGCr3UxgX6AGdlzYV13-JlA5pZ8D0Y5eTWio3NCwP0DUbtSXaRBcJk5CQUG2HNKnpHPaT_Ug7ibSs9iU6MXc1K3-lsLEXdvNc18WI4N7f9AxZuqmFBQM", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118127176627336858246\">途中．台北 國際青年旅舍 背包客 On My Way．Taipei Hostel &amp; Backpacker</a>"] },
            { photoReference: "AWCwydgOW7TGKgknfwx9rpMFuSAALW_UrAM1uKdeWOHdQxrYHrXTbKJ-jjZk15HE1d10yFnUcEpH0VbgDmKk5nYABHW3pPo7YvMiHEckbBTjU8riRY0prpkZht3BIdVTfJvp_G6HPUVKTa-n65znTKVHl-b-355HojzB-16tr3DhO2dt7el3QiHcqZ-7hQpHRWnvXNY2wBLiYZzSo8olZ_PiXZGExLlAHHrptE-S_QIZsfzQny5xfyKCqXGuFqhorpGbGJRtE6SFoWdE0qAdOOrPL2EhD8zJji3uClw5lICmdthxrQ3_sF4dy1odtHNyqs6Ih-g92JSfFRjZWaM76_PPhzEp-_Aw_rexReR-tNo8OwT1KvWm3zXA7c0MSbqdGPqCl-y-nvgOvhJbLNfOog6bVXFlFm91Plv9H1rQohJUZifNCbg", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118127176627336858246\">途中．台北 國際青年旅舍 背包客 On My Way．Taipei Hostel &amp; Backpacker</a>"] },
            { photoReference: "AWCwydjFZesIsBnBemaJXLpFYOdDcrlDR9afQlUNK_nqEG7iicd2OJt8CRcFR2Jqxji06W59R2PVRXEMpsmlmiuvrkAx4grz6SZONov9di2raXe-1lNkKPp-NUjsmJpU-PsXsJRv5DiVTvK71jnQUAd5pUHAauNxUtRyUfrPFhfljaY0fMg_mdh6gWxBfnunyoPbX-ynWxp0GT6eWo7eb7ifmBRW7eSEwb4ZCzZYwKQ0APByoIkO2Pd9aNguLnr3FXgJQzpTKJJ9X5HYhMtm4dA5joEylWFeSmYPK0vxBSC3PAaCRmEwJzbgrjn6hrMYq3nLXvYks4x1VZPVbc2YQBq8ajoZr6ErLQdhfeV1ApkjFji70x1ZALDwLClAL8Vo99z4MbGPT-7Mbdlx4HBc8Sw724gwwDhhWBceJLwHOAPDHqoxhg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108235986300590462011\">M.Y Y</a>"] },
            { photoReference: "AWCwydhdZIBm2gZ4vBbEHmkMkvtQlUSNTvf4Jekut5HrbfWS8Jod3QCuZ-XOhvnEwrA-dDfhQZqbxhP5uJQKZUECazn1Uyn5UH90eFtS8eSUigcg0M7ZSmsZ9npgA2ITennSLtILeMxC3tZEK-s2eNbldnRdvmLT1D6XcPXYd3-I7-6jdQDqRAj9w7tTh17MnSJuM8NT6b-tpx8k_gvbS4uzrIU6Q74K_7h2dbNncIjeYMjzGaMFOTpgj2_Fy9uxpX2yli8HpnpEzKwnBikVlbu6xjKr8G15pVsRdcumtcMeUaOB7NRwEJGFab6PqCHMZ65iee3ZExJb0uBAUefGmdUIuudBoSb2J4hf165SietiFUr-OC8tF8Wyly6XBwAMtqbOKEUblBJvyEl9VEmj2MmFxJiqfo-BagRJqjrLt6QdwTl6vKYZ", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118127176627336858246\">途中．台北 國際青年旅舍 背包客 On My Way．Taipei Hostel &amp; Backpacker</a>"] },
            { photoReference: "AWCwydgfv5ZQVPkKAyDUR0k1LTmo4rhy6Y1wsUTLURF7fCQsDS5oMbTWBMNooiKotJxqJfKm6fenXbBCmmItaoh5oVhTD5eZKH560-3zbb9BlDiXKANzOKNbsYVMN9QleIto8rVNb9YwS0rdKJh2rRJfQ2Zs4t3dHEIxA5akTxKucyoZlGvGjRvI1mBd2jHeTSP1MRYXWjz_8Z-MzOCiLCN7dTaG_Jv1zRi3aEDOvykZPdBbI9DU-3oUp0WiNRKnTOT26aB_JlQB-S7qU9T0vPgoKCbXById9ZrJlaHkldHUkbwpjZOGisNl6WM-rxKiBiCF9juutFYuu1Tt4kYFR4Z1yQ0UDi2h86YGn-2gcg3Z4t-mkERcuZaT0FkNpW0M9Ukyyx5i1hbjJxEFvvFTNQRkecAI6lJdv8FUsOEnz5sHehYBlg", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118127176627336858246\">途中．台北 國際青年旅舍 背包客 On My Way．Taipei Hostel &amp; Backpacker</a>"] }
        ],
        summary: "위치가 매우 뛰어나며 가격 대비 만족도가 높습니다.",
        updatedAt: "2026-08-16",
        highlights: ["우수한 위치", "합리적인 가격"],
        tips: ["알레르기가 있다면 침구류를 확인하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 82號, Guangming Rd, Zhongyang Village, Beitou District, Taipei City, 대만 112" }],
        location: { landmark: "No. 82號, Guangming Rd, Zhongyang Village, Beitou District, Taipei City, 대만 112", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.onmywayhostel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13690990713274931637", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=On+My+Way%EF%BC%8ETaipei+Hostel+%26+Backpacker+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "란디스 리조트 양밍산": {
        photos: [],
        placeId: "ChIJS7ZwY--tQjQRIPrh-VE8GmU",
        placePhotos: [
            { photoReference: "AWCwydjUFuYIWaWyFB95wMZ29k0E9SDnWuz0xtt44RuPGOm2wkkVacSvLfqVd3aNOHrtJj4b6HYYhegQGiSm5rJ4oSTgbS2WcfwvUYS1ZIMVo2Ed5UKDG_PymqeIazlDkLAIg-NyDwQcLq1fBj53EKVbWaGGWJp1bSaHb7zjH3oN-Te1qhKj99lcv0gtMN9CUwVDueq3ITGszDnlJIZmlNGo7lNDFFh74zf_1mA6pfJkqGxoBd84X4CUx-RkdwkhijA5kUmcJua0l8Yqw6tzUd-AWKRj5ty110UggBX8GeZwJZKlpyfKGPPjzmFPsYOcJsKlutTTFXHha6fpR06Dn83hb-AU5EOf70SghlfzLu_uge0_vw1HJhPj8XTAbhYYD5tu79nYTMfD8x-M1iX8Kl-JS64VFj9lTuayGk4-z0Rmxwc1Fw", width: 4528, height: 3016, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109042137830436857180\">雀客藏居 - 台北陽明山溫泉飯店</a>"] },
            { photoReference: "AWCwydivWXdfXfZZzLGoTbSTPHZrzpzuyxUSjdOancNBCFsDJeqA8_vbTubKV3iZMa1l6r27sWrlsd_867keC39qDR4TKm5i2aSdaaTFsMcuTIo8fug2oLpTh0keXwg-idJgqR9mf5pnNHtHp3qUmsk3wpUduzO6gWwwS90znXNPqAURPqBDbD3YQLmzNTVArRvAaqNi3h4OWGH2yN8expk2mc5KBj6Pm0YaPO-a93JL666I3nOO2zjOpX-xzkRBj6rXdk9GDHcCyl4tZA6Wrrp9mUZF2wKANRjwdT6HLmGF-lnmakLT4mGFLNSfuEj8b4f0sK3P823rUCQfmkyGD71K1_-k3seUVYYR-8sV2DAhdLtQtWu5f5BxmZ_JSG1PFYTnTDVg_lgJAB_8A0_QRctt2gQj4Ac6Vf8-F38vBBRXpas61A", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109042137830436857180\">雀客藏居 - 台北陽明山溫泉飯店</a>"] },
            { photoReference: "AWCwydh-6MPnXRROXnVzMdjgQF-hYpnaVDG4Z-sN3SZiB4CXOFPvY1UqqIFNV8-o8t2iI5Kkc6ZajepKRnm0e7HP_nLffoypGaqeVDEfSqg3W_YduEfvndHWbMQTm7bkqC_yHAPz5lxm-1ashWS_aAsC1PudJ727seIGT0XR3Yi641ez7O-vZwUg0URFi_cMrPBd6KknuYVtMWIPJlpSBZJ_dQt3OKfkl7bCLq4HQQnLjgxsG9eywyY3bx-r4l54UFrWFo2j13EqTc9ULmKqE8MDhTGuM4AilO_TzJkgMFj4bHRUTwR6RC9bqpfvsQA6xOOm12WgBcbFTy3f_4jayduqpYn2JzfNIqTo5jnxumEqR6vg3y_DKt8Xbhb8by1X11nJaDlTAbtYN9aqS9sgf3V1p6DLul21BmHqUlobELBBf951aQ", width: 3861, height: 2574, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109042137830436857180\">雀客藏居 - 台北陽明山溫泉飯店</a>"] },
            { photoReference: "AWCwydgcGRzcJP5XN43VtCuGtk6soupDgRbi5hKA47EVD-sZM_iIWFD8r_j7uWfb_73LUAPulg3qIxpN1SdMCecCXpp1v7OkKha4URGwKSBlqAxyL6enuKFjpZ0iZe3-2F_fPpOaizlJOfwQVq_FzUnNwI6L2Q8Janjyu7hdn88dMOIg1YvIAXH0HEuovZ_reYb8BJWR2CBDbPplGuDy5NSf8pOe2MGUNf_-qGB41kuLs4TFUq46mWJ-ylN_clEq87mpycCkXp5xrmqcxvKQSja3gzCxCUyw7HQDxJ8ZXNw6IEswBFEKEfXOOedcURNEsObrMIulWTsroxnJQy0KAdO1Bfpp_ADBdjlI1RqwZ3SFK1yeopJ3FfVlLOILur2DwNnKGNVMDoh5G7CCnjuJH5gZYSIqs6t3JjtKgCtSSRK-eiSYitc", width: 1576, height: 1038, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109042137830436857180\">雀客藏居 - 台北陽明山溫泉飯店</a>"] },
            { photoReference: "AWCwydhGgP3nlgJXD6X4u2jKUKsv8bVVAFtV1ekaTD4l46To53d8ZnWcRqeKohRoUANsruf4QSq6Jut1dpE23i10NJTm8aLXm7sJ18WUVgfa6bDe1rgYkOzETLoZTNIwdVRo9ndPcEBA6NBWx1JbG0KwvkLHNtJvMQkA4DEQEn5QQxLecMNjUaM2XmS5JDP2SW0x-v9-6f586M2oNOYULLFQMW_HkWqsA5SRmVQeJORNR5sE7BIEhUrrBnLZLFo1hGR651gWk6BNJ4m6Oi69DGdT8kSIB_oy_I3QXTfaHshW0vi3ONfRCeC4w388tAoEkVDnF3xV6ThjnW-PUGOA55AE_H9DE1NI5nNPgcZwCb7CVKLNPk2fR2vYevSHv0qTRy5LBwCLHpYF_0r0sHj-GkVhEZO593Xwy_-W_jNJL5rxeNP_JQ", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109042137830436857180\">雀客藏居 - 台北陽明山溫泉飯店</a>"] }
        ],
        summary: "리뷰에 따라 시설 관리가 필요해 보입니다.",
        updatedAt: "2026-08-16",
        highlights: ["노후된 시설", "다수의 방문객"],
        tips: ["시설 상태를 미리 확인하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 237, Gezhi Rd, Yangming Village, Shilin District, Taipei City, 대만 111" }],
        location: { landmark: "No. 237, Gezhi Rd, Yangming Village, Shilin District, Taipei City, 대만 111", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.checkinn.com.tw/?page_id=7527", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7285201670007552544", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%80%EB%94%94%EC%8A%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%96%91%EB%B0%8D%EC%82%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "진 레지던스": {
        photos: [],
        placeId: "ChIJSR5HVy-pQjQROWT0bw0WBxg",
        placePhotos: [
            { photoReference: "AWCwydiMkKPAYZWMEreTH_gnMbfEq6tV8laU0EjCcf0-WsBalDPnH--9f0v-0clSrphv__VlcXh4lrY0EaLVJSePq8oNaLFcLKCyQKlnr-Lx9wczh92DmsKxpBDBgV7WH8C5vqKEsJsnHcxIOSFk0_VH1B9p11tr_KuNTJrGJ-PjkWGwKJ14OwgCGsegpj8JwoGPeMRUrcqYT1o5FDRfanV2r2pa0Bd5yHwuj6DhbxW3NS70VCO2y2rT1NnjfvTXqqokyYWIC94CUWDDmkO8XT9Z-bXkbAAt05PTiMLdCZnprA7EOCcGUJ7yBX5bUc4blD6RmN1PhxGhT3kyOwoAlp-gyS8WvWsmNPaa0_clV3C-S9VifPeaJ8Hb2fGTRqw49gKovHQkPyAG5b5I4LyXNQjlZveAN_9XnW3957yvFQ_X5q61Riy_", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108496019161556733956\">新美齊酒店式公寓 PARK 259</a>"] },
            { photoReference: "AWCwydjlPLFqgDJIY3aquE-kAIg-1EhVl7VnB5jxjlqclHURaQZ_cZxaqJdii84Nb4wZcLXKjZVh0XjrohoQ1e7lKTT3EZNPk2w_7w0yQKY2tCjcxX31QZ2mkIK5MzpL_xO_K98gqlkwMk1zufJ_VLQvOFhfT4CjfLrS0LM9fMf7Q5HaHZA8tjwxYOjGYrTUNrCWy8lL-FbP7706S3ZhsxRw7szi_ayUUHKY7wy5RKwGkpWZSuH-E3Hwvy6wKVLP-cyHJon3ZS0Sa-gRbG8g3kxSFIQaE4pNpk3U80g7OUNo7Z3vp5-S2-XZCP3MPHhSlD-2lHOwedhmaDUneALsuA2LdsnCUBWrMXeMEdw-yiY7UzBgiGCJaRsWu1mGNBFr0CK0viEyhtBrR9_IRamZVc4Ksk5F-iR6R3KUve4jsPfRKq0uNsse", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108496019161556733956\">新美齊酒店式公寓 PARK 259</a>"] },
            { photoReference: "AWCwydgn7wtVGrRX7jORcqCw9J6OBHVtmndAM0suhcgEkWws4PgLmyXqSaDvoUDH4FcrkcIbh5W4FQbuyIjfvXcF7uuu19cWmMRv-MeSqUQOeWic-MhtwRQ90gaYP3LHmym8cnE-__PdwxLRoNeqQ39PzodEkKsSoYNkYqBFlHnl2afIDW3umVyyW5tURcaqSOd8chUBkIjO8oq83N18jB8vlY08AdK9jMJBVTo0Id_wfhlA5OP6GogJjUz1r-4Y0QNYJcs9x2JelXqNfHp2QFieFjJIJPs2j03kFYLVXocuSy0JSmYRhKTHlTaB3E72h1euMHbM2zUVejN7a6sFtG-DicI75FCAfGQPOMMg_x8RE1e6JOhPdn0jCJPEFLn0y8856wlEddrhEOkzsPnOP4PRwPqE2zqT4SBi6vpKDcWnJo4-2Q", width: 4800, height: 3252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108496019161556733956\">新美齊酒店式公寓 PARK 259</a>"] },
            { photoReference: "AWCwydj2gmgaoy6Z3DGnAtyYENxEXxLrwYIWXxuTD22UK-Atjw0y0nh9wd9A6VJ1d9IbS9f2ACzRIZKfKkBQtvsI9j1_nOQbv3GGMynwCTxrShBrifnb-2kUSObmBGzw-PSNfwBxoI_e0mtNeQvC_3mP6zzBnN3KKPTLjxGknlaIYq09Th_VFhOAL3y3imGOzE3l-VQyndGt3tnMH4SUcw8GqvkMClxJukUdN9i148g8P735xRgZNl_a0NggWKPgvoNLzpmH7EjiK4Us_T3wakBOR4J7qtxzCVjjN40QqGHOCUSpBLQ0364WNQjYgsNuF5gTIAkSURe-KGRusVU2Wgsc5oKnLtJSDbXL7A2X7I1ujoScfURprARkeOUTqPoXZW-05RxUburZqufNQD_5Nlsd8xjlCk-92j7OFxCS7iFK7yNqmoOM", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108496019161556733956\">新美齊酒店式公寓 PARK 259</a>"] },
            { photoReference: "AWCwydiwS61UwYH7F4aOmVJIpSmadVvUWPVOiufHDkRcf0HnK0_llyur6jBABoJB1qKrZBAfj8IGk4TgnxqLn1BI3oJ5puvsmgkonB6N4mZ1jebPjZvouVeKOeIkGdFt1AyK45wgAYcmgrfpGd3pxkxWN6QwxWwIHZyc2igSd9lTeIqjm6qWj4_wC1h7Ee-zQqTusxH1SgyYW5V3WQpovtX9x9g37VtTOaVESF6yudKsx5ufxovT2dL_jsze-5IHi6x9j4U5EKpl8yWwKkeZ__LRpQwbWaJfrGSBhJzvw4AFPNyvpGW9hBWvyMVTqLQMO2_5PBC8MF3iZvamX1dlwbBolLTU2_PLXMmHy5TqKK-Rac9PWdno8hHXIrKMNXvQObbHC4xr9QkXcQzKIYdqJqQ3k3hyYlYsCIfz5cD6VMZF6qlWZVg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108496019161556733956\">新美齊酒店式公寓 PARK 259</a>"] }
        ],
        summary: "우수한 위치와 전문적인 서비스를 제공하는 숙소",
        updatedAt: "2026-08-16",
        highlights: ["호텔급 객실 편의시설", "친절하고 전문적인 직원"],
        tips: ["주변 교통과 편의시설이 매우 편리함"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "100 대만 Taipei City, Zhongzheng District, San'ai Village, Section 2, Xinyi Rd, 259號一樓" }],
        location: { landmark: "100 대만 Taipei City, Zhongzheng District, San'ai Village, Section 2, Xinyi Rd, 259號一樓", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.jeanresidence.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1731376828715918393", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%84+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "레오푸 레지던스": {
        photos: [],
        placeId: "ChIJBfCUy2ipQjQRX3WP85RNBSk",
        placePhotos: [
            { photoReference: "AWCwydjXJCIbF7F3Evv6iJItlXJvC8sB1cwZnQd-L5KsbA2itj2N0Y7bTlKQPb_-pl41gbuslWwQRZn-NPUmIllnD2Es4uOAB8jVYLfSWEIP5Qro1aLeXFQr67khtmJ8DSYjNbXxWvZVE42FsEuV1FgB8PsQvDcK0N9E0sznTay2_imd-ICRfLsJg-M8_eQNo3z57X-ZFSBTcgaGx2n1fMyvVCge1C7du58JQoinFYMyTHHvCUfkZTB8nW0RRQVmfx1QMiWRKuFZ7pDp3mCRpyqpMqSeGbuBA8WiKZPYMGZ3fK6rwshjA6vVFtOUy4Z4YfTmG-r28UzxFMoTliCAq3Hb0wIwloEiwinuZWrWavSvEU7tocSt2s4n2aiSCpb4yNrPb8cmBB__sfCroNOCh7b-pkVSD5nhZvldDbx8bErKgB34dbBR-s1QtFIdqwODS_jf", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113030824482984742234\">六福居公寓式酒店</a>"] },
            { photoReference: "AWCwydjGXfi6c7ftUvVuRscnsJL3_FEiM9tv5AUPKBy_xNMyGOneaNTBc0wWJVzX7msmOrEiPjStyNvXj8vhVamqmHoXQaeJZGg5SUy3NkM-2dlrYsO40fAv8dxYpKnlUKfJ7LcCQv0cdJtM6vfpZmysYg3bwTNZlYjAlRrge4BVeoLAUaCrs5HaKZAnc-KwqFEX72_eILnTfsLSdsTJVhQC_1vtQQFrTkiTLfpNrU-x3fBZ_KwXIek9sH5vNAmvwpmesL_gKW5YN2N-fPshIpf1Otip6cZx97G6US2A8xd1POxgn5EPQEXm-OIvTk1EiFdod1i_Jzol4QoI_w_sw1491Dvo3UZsUd2CJCvEdlUuXxaQUfBxoOLfXmr52KbSMArWRLOjl7En0e1JRsM1GC0H9fQGyA4A7FyLSAtWSomvkQhK-Gnz", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113030824482984742234\">六福居公寓式酒店</a>"] },
            { photoReference: "AWCwydgoBttN29FKOr45qDcBJld_Dpm0eehkeg9LSSMroVrw6Qg183tAg_41wKhSeVMiqU9BdVGtL9VmMbGBDkWJ41Zgt744rtJ4pKDegFHbP1OyYXLnq1WfkUvsCk9kB85kRy_Nm8Ll5wO90njYegrBMlaHiHXD9kjg-iUOiAEBOm_QfmhqEyKJpFnceoYWjfvki-LW4lpaeEiCDJRQ0uaYf_lBs1JoY4tpd0XXD7REjEVL6Q_-hTr-LQp5BXvuDmz8ybJMf4rdTdLqPbR9FU1dAMsr1eZNqdzwUHDiYlsqY_tI5xNH5h7GNKJLT4p8cZOmYMNXKo207PTnZ9mtDU_v0GOhJUENPrFsOnpoM-E4_SgpFK6lcmlX7Q_dVhQHmDEDd_62r_-icQDZoP5kUC7Z4U9XDNEJKVWmR1s536NWI-IikZ3F", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105409559504083728949\">林秉毅</a>"] },
            { photoReference: "AWCwydgtYtzl4w7Ulp7uWrPuBDqNQZdVBi8U2H4b37qB_XZk1VWg1K0xQ4i4Pr2XWUi41jsbLdHLqqXjmskkrvFBOF5bUAH5CuncbkMs4aF4WK_8JI6AgzWxkSYtR82jni_G1B6w6685JqMGdAaWcpVxT1kUIbzNvI_Mep_AK35NScaS4DDWNr3X3zaotT0CqAOkLqAx5f127xxlrQFHt2hnLgU_XqPktytzqtrNGGNhoX7wBkErrAxPHeDSdM0cQcToiIwaBXBotJwQ1BBKXsHIM4RsqI8b1iSahjKwUoqSXfuUlq02-dMQAksum2x__7DBtU7n1gyIfdGKoYKxQL6QRbuYSa_UfKRQwYuUeVryJbgdjLz56vcSl5gSdHHIyGFC6zKKcB4owc-5Gf8P5Ty_KICcWB5ytNKqTz_ZYOgK_EM", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113030824482984742234\">六福居公寓式酒店</a>"] },
            { photoReference: "AWCwydhvTzfO9UupJtybxwsvi_9IXeFmIaTG7IVHgm6q7xkinc1Uhe4kjcrVrLe0hR9YsRnXaiMfDAglECmRC_a9gpRa47uHO1ilmW4And7hAlmJ3_jLPes83PHUVvgjUqv2T9dWX6lRAr5fXWdhHTiTRXLrKHFhPnPsvLm2JjLCoku1xdQRCCEJagh3j3vbmmeir5HKHGpGAgv_gy6PMu1upQ5oyZeQmjDwm72bTEk0kdWHX7VrBneWEFQuxLta4bjEplbreRV54lIn7vOfLVIPXaKnE0udLaf18QltobRognwdCVKyiDwvyN6KhVkYNrcLynMDhfKvhY0SyntWQ0MWSvgEGVZqdY-xIqJsRT1nAMO8UZAuXZKNEQiiN4qdJNVfy03DNr7YTZgF7aiTigWh8JaEsDXPGMa6O36peQEbBUcC2K5a", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113030824482984742234\">六福居公寓式酒店</a>"] }
        ],
        summary: "편리한 위치를 자랑하는 에어비앤비 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["회사와 인접한 편리한 위치", "접근성이 좋은 입지"],
        tips: ["주차 시 대기 시간이 길어질 수 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 38號, Section 1, Nanjing E Rd, Zhengde Village, Zhongshan District, Taipei City, 대만 104" }],
        location: { landmark: "No. 38號, Section 1, Nanjing E Rd, Zhengde Village, Zhongshan District, Taipei City, 대만 104", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.leofooresidences.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2955854032575362399", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EC%98%A4%ED%91%B8+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "글로리아 레지던스": {
        photos: [],
        placeId: "ChIJ7d_CUl2pQjQR6qzDZLwg8KA",
        placePhotos: [
            { photoReference: "AWCwydgwLHM0_FBYv7k6C5Kr5xriD3KvQOUFw9KkS6_LSEMT-Wz9DTeX8Zn3fxAa-zfarfS3j1T4cPMjTCRcvoP_jD6tqzQS1GI-yRf71hO6YD6qGR2IbgQl_Hq1ZI2uoyypoWkwM4DaXgL3FWKr1N5uQbLYfdbAFVWnYg9JdbvoB7sn3_iRdfrFFcdaY-tKzDhgmzxoHSoY5LQOoPkyneqoYy2HMSLyDrH06EygoySjbJCszNVv2nn9_VSs4Rbq5Sr4QSZh-XrLnWa0rZtzvqnEMDHNbC15Jd1tO6F4fqbIxFHWEaCdMh_m2sNQJpRQYb4v6FIZPrZjXS8bY1t4DXjIrKXUTwxQb-__75LlEwcJl8a9Lwpw0ow-5gkc90y_ClEkdj7U1menr5X7DXK7jfNO8h_KvCFyqQSb7ge-Lndp77I", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114747388929050842108\">J C</a>"] },
            { photoReference: "AWCwydhAr1Odb054zIhkL10yDlYTrofJDkWg9V0bk_UwkpbapW7n8GpD4jomiwzfSO_UUVAtfODqfGCGOLOrn60TCw5FxPfJ4PBlXJpVAVr6cl1N8cpNLdHyoq-Xh-JHn6lJcmy-OZpj3DRnceEIfPHPpYZTApD-7d3d9jAXH0tYdZCHOMX1nFYEzAFHBpG8FvCNtH7UNVEIjMMxWK7TLYByHU3Z6EP4PxwHWunbKrQ6nZn18uE4eMht8sbKDyPCX8LPhMlL6FBoH0f5DvW4BjHiJxBbrdmNnRQ-yphHxVtvposzeJCPlPu-PMAa6X7nG905QstacoGdrGtm92krxBwshkt8hI5w72d8BkbQ-Hg6fn1TmSM_s_cpjPgx20ukparvF91gwpirTP99rMqWdfaJLK5PXeXr3rL7jKqm3OWlQj1H7g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118066936841913289800\">CHEN-YU KUO</a>"] },
            { photoReference: "AWCwydhFGCujSOj1PNnU9d4_QcbfOz7QkcDc43hIoaQZdtDTmDJRCofPf4XGohNbpuLjG2fEgCeeawn8a3kflIZNtAn2JEx4yL4tpnfVREHiWQ8j7VBdRMS6oq9pGhh5qJ8zr1Pt8EeguMDD3-xcGOJvxEuC7mmhmWvl3BBdAnLE9PXlRB1K-0-HEdkt6m2MBL0a39ooMJ2bVMozuBbKvuKqkzZEZ34oBTWW1sufLlFpPgTy9RKo8yd6Bky8RRkV_iGIAwtyPEgKqZITntENeIZWIEiRFNgAxC6VnFnc6821VdWmJMzS_Rw2vjShE8-R53KQylXrfwT4jAIUny2O6rhOf4-BC-E2Fp3iuxyAPp6LCt0PjnoCUPFC2VPTaIVeHg1RM6wO1aMO70GyikV8PhXsJ4eBWlHCo5zRWTLkvYNdoZfUZaTl", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108065290201013346482\">華泰瑞舍</a>"] },
            { photoReference: "AWCwydhgY9dJLbfUDUDcYk0ZCrGra03uF2K_Zmbei4UgRabJttV2wFP1FCbrwrGHa--2bkg5p6eJUPHXc0rEa9awQzbjnW2J1Ku-xJ4NXz8Dxt7F8xPwcrYhTuj5DqDsIphxPlM7y_Flw05QBuJt3ViXTNpDZGcPab3BwQr18ksOqhFRZNcZOpUd6aabQgdnh1tCaO_s-fctLMyTa9hT_LxkC_Fmxf3pDXSjIUXvf429Ioayu1TUxzBmBjMWHMoSPBLemEdIgsMhWP3oqvCzQRUDrDN-7tQHXrNEZYypqO52dRzJGiesMlbSRpCEs-TmVl5IcRdW8Rcr24XWDxFN1NR7SAc5OSs4VPg8_hGe3Gxdc6w14LRfdbJnvcuQ67NzS3IYSpRSkgvjad-C39AEWTUbp0-0w_OqBTU10Myz-3WcjxFnqg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114747388929050842108\">J C</a>"] },
            { photoReference: "AWCwydgeeAhZSPdZm8tIHxuG_ja7Mue9T9r1MLzG8_8uIo-i1sjy50e7p4AW_XOK3sFEZ-R4O21G-FpPHV1gQcqbmKM9OV8F3iJ2_piTeuZhq5zFkkKvuVDBcGgOZrtV55xA92Pa8jg-Uh1vdk3NYFVE1-u6LerDmI_nPjd6ytwU6eeDcjDgFyqUbzYRhau0YNV4pe_Bw-3K0nXHkar1rROBZM_mh1zdLSW4_Xt5Zy55iT7eTZxfbg5m-jnTF-SnZ-yTSSh2307NZAiKd8AQN3nk-0VgRHZW1wzW-jSAQtdW5eojJ43Moi9ZbP3_bw82kQ3I2jxgYPFw9938GGh83sI6jVf5DwmReqC1jT8OgkumOnAAxZEP8kND0CwuBrxS3pomkI6YpSy1AQhuIAcW-ckpD8rnrC7yHGViITlaTj8iVHDGPA", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108065290201013346482\">華泰瑞舍</a>"] }
        ],
        summary: "수영장과 체육관 등 다양한 부대시설을 갖춘 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["수영장 및 체육관 보유", "빠른 엘리베이터", "친절한 직원 서비스"],
        tips: ["세탁기는 통돌이형이므로 건조 기능은 기대하기 어렵습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 359號, Linsen N Rd, Heng'an Village, Zhongshan District, Taipei City, 대만 10491" }],
        location: { landmark: "No. 359號, Linsen N Rd, Heng'an Village, Zhongshan District, Taipei City, 대만 10491", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.gloriaresidence.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11596805033995513066", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%80%EB%A1%9C%EB%A6%AC%EC%95%84+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "CK 서비스 레지던스": {
        photos: [],
        placeId: "ChIJQ25E40SpQjQREvkJeIBxPQM",
        placePhotos: [
            { photoReference: "AWCwydg_DFh0q4ho6QldNcsHPqiT-YEwjd7zdG8A132EK_KGYdqhRSCIgUHCLKEUiKlEgqJqXKiT0m3QEdu1dkBQTsdQXMoPyS86rz1a_DFC-AfRQNdAh3nwwE-gHlujbFGoJkpQJr5HpLvHE_hWXzv2qN4DUkB_DWnDOQMHnB3geW3YZXqQYVPHFM0Lp1JSlU4VLpJzE7guwYE0o3mjZo-OOnWaR6pjPAsynDBDfmJiHOxZlZ_9sv2GKB_6y1TpjLOpppcTI7a4kEngblcR3PpQ4LmgFypqHiiiUNxxkuEGsy-t5DNXBKauVdZKQLFmPZOmkzwUfZ15IwyjxDILlqm1YS-Z0h1Q6wc99Y4_XtRb9KP_Ak7N2pYUIik5Og-3tz6fOCzMzV3NYalkVYU1MU8WA9fug845kAuzloBTRbusMnEnfGYR", width: 4800, height: 2891, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108093571996146560630\">謙匯國際酒店式公寓 CH Service Apartment</a>"] },
            { photoReference: "AWCwydiZtSvhxQWwZFEaFgdhBbQAe3Z_ZzQ8UgNTPx1X9ST28Z57gxBbiNFSjJNoLPJNNMpDK1yizo-_wYRyxRW87xOeOQHnW-oB53ajIQptp6Ua13hqwkVls61Ym5yHar7trympudLBWtOjlBXwj4GTGc8I0CeZXRARh6NsOXwfakoKXm2Nyw7MuRn0Z9eJrbP3kF6zR8wrZxTyGUIjD3TkYjH2V4gfiybA-4MjatzT3Mr3YGWswZwQngdplGYdkymxRgi17IYtyJGCu1QImUjJBn1OeeeTXqeksJopH80qyMjMmtRVWP9tQXSiE_wohujfWuHnw2x9CrnK7VL_YvYx2pg8xTDVm4v7Dw2-DbYS_EVJaFw3cD-hOe9wLmZsWnf9kI0VsFA8g7LXy8LYOp2PK2BgvXPR_PZpQ7ua_WYjUtO2ZQ", width: 4800, height: 3194, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108093571996146560630\">謙匯國際酒店式公寓 CH Service Apartment</a>"] },
            { photoReference: "AWCwydgcMf84ovVZGuIaMUJKoXJ-COTtYM4mqrfeANYF466sPqqK_MTgQLrnQSDVZVk91GeWwliXRI9c1bHXjFuEr003-zw7Ys2cABIdCcdHOcG1zdPdfqh7icQViQaJqoMqsTp-Zf1wHvd-HdAt-I9UXv2WUBnaQ1jAgAXSLhtaQwsFHXWU5-KaFfCC4O4LWMYFi4ww18Dlszwr0xvJ79FzZAz9uSgg4lMuhz3f5Fgw-RytRu266c7AvlFdpyr_9fKDRRTtsuoaJbCG3kShECHBTRZaoSyClqR_QNbcRX5ZdF1VDagjdmALs_OE73NQpMqfz8Kgut8qY6K5Cq2I8JU36NV_YrxIhkqbaB-bKCPEV8qU7Ep7GGWnWtNyNXjykm4mkJpE2aGRdQcTfX0hKuawxbAflQaG7yyVpnvPKzZRXcDtbN0n", width: 1500, height: 1125, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108093571996146560630\">謙匯國際酒店式公寓 CH Service Apartment</a>"] },
            { photoReference: "AWCwydhEfdvkvjXK54U0k0dl7yJSGAQ0Q9NQ5JlyVaNRTl7enShXpryvvFb2AyAokP9tTLy49JgtcM0jFoV9z643zG97yAeOmq6NNvKmL7js-CPw-VC881QlwPAkOlrr4lwDD_jiIZrdZu21FT2ivygriQj4a7hrXjngQMVkT5jX-P8KpeqBcbDAsM5g86NtdwAF3wSnDqsCnskfDYQTrA6ct76URAoloKt9_v3KJSUW4uYD2c4IJyXtJT1gRArDry5xR008s36UEsV-iVp-cApXpbSym76Sjo5inkn6SEdn60JQsqmV7V0UmrFduXVK4pbfTKnyDqA8Ga4XMfmDzBO0NNo72yL7Fj1v8WYLGFoSGu-Ac4PG683l_vnnu5TC84B4_reuGrMJYDjeqvkVXzbiDCq6j44s79aoXQeew7JkuThcfA", width: 1500, height: 1125, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108093571996146560630\">謙匯國際酒店式公寓 CH Service Apartment</a>"] },
            { photoReference: "AWCwydg9Mmit481IKivSaTGuP6bv1G7O45CiqEN20CoSGPiKQLTZ6b-KuXqSbSAfhUYpMWIIux-8EikstrMXDFNa2xMhqm9hn-PE5IL2h7Eouf_uUSpMFYV4pnBJRe-NfcHz2wcv1YKHWOdl0Fw555S-qvNiFAQMJg-C-eNNvVhrE6NX2oYRoaUzoSUWTCW1c-KyQEvn9EhPMhR1XVEEdyG8mJpTBX7OUy5Royf8qRjo_e8pqvLcgxhcQB5Eqps78qL6sEF6C_PloKbmCLuGIjge4ai3_kqZJOOjmzuaidsv72ZZ7GutNqnhxx8m51kllN-HkKxnkuUzjP8vZFq-FzQjKybJuzPE5w_Hyc_Lb1chAxqIwVkBDMeYneZcz-Lz6jIlVR11j88fEFiBXPp97WxluUKpHzRemq_powqBteypZ2n4Fg", width: 1500, height: 1125, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108093571996146560630\">謙匯國際酒店式公寓 CH Service Apartment</a>"] }
        ],
        summary: "세심한 서비스와 훌륭한 청결도를 갖춘 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["꼼꼼한 체크인 과정", "우수한 객실 청결도"],
        tips: ["방을 보러 온 순간부터 세심한 관리가 돋보입니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 6號, Nong'an St, Heng'an Village, Zhongshan District, Taipei City, 대만 104" }],
        location: { landmark: "No. 6號, Nong'an St, Heng'an Village, Zhongshan District, Taipei City, 대만 104", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://168sirius.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=233467552276805906", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=CK+%EC%84%9C%EB%B9%84%EC%8A%A4+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하이라이 레지던스": {
        photos: [],
        placeId: "ChIJn7LXoO6rQjQRu-52BEyoT9w",
        placePhotos: [
            { photoReference: "AWCwydglTszmIGheghyivThsPemfbaI6oim1cRRxG5OQ7as7K5tDzkK3zzSz-EPsA5g4AGlmgJhRm_lPwhBNBsWhC35DbObRECZgzEfGH2JfiyAfqT9YemCq3EdaRrRTI5lEm-WPS9lsZge_bfP1JdF4YqfO4AC7bCzh0rrwWSFMcKkx53HXfELkyoZZl11g41A8QUAs1GWQTYuR9GK1yvL80ujSOH2gKr311uDm3CBXnaz9ooxwkidk8JFeBN-BVr3ykyqKReXThiP888bzjuGeKqyq1d6CcNA2xw35o0CHpoftUj5eK1otzx9zdo8_Yz33h2GxWtgujybAIZEXcDmlk--Usgr9YR7CTAp_tLGv4tduUfLhFbbTYqynf0b36Wdk2Chr3sWtq4EAYLVm9HV9-BH7CEkIcEy6SpLVsijCpUaUmA", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111243682475016829734\">林淑真</a>"] },
            { photoReference: "AWCwydhbXX3VpPbhDtakBJxnetGoXzTJoU01rWwQmJLCyOwKag9OgUSm1d3KpfF9KU_Wgad9oJkB54HxtxVN8sb-bprd3eSJ6zUQBeiI-Hh8HphZEEI6OmCy0UlgjA3079XgOcuegDJ55iGwzUFvpxw_AHOJK7hYjFonz8Eou0mjEm_ZlaW7gMKQe3RzTdiLjpdptKtZksp6K4mh8L1V9LEU1R96oxX5R46HtI17NAsaJXEe5P5FoYxOVD5TRGOVEVE5MsBvRvGEe4KnRMcZVVBmeRGVHt9H7vy6_QbVUeopfikQV1X2K14g3rEduJnP2RFKqatPNScrMszM2Ko9L1ZFu6jaPGNivYHpMkqnvEs6up68FmcGhM-qLVV2y_0Z9woEDXmJV68Mm5RtdwJsf2Oz4rwrJXYDiMIFy5aRF9bIInR2uQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106593129017724916676\">AK</a>"] },
            { photoReference: "AWCwydgzqKaDWCDo-r0O8TmdxC9QNZ3nHFgEkVTgC-rRoIsdRVtTcMer2lU3XflTO-01uopLup7WGQnh1oD1gq5ebRiFxoZoCI9U-dovZ7ZsZ-k1qWSuoUspTDZzgH7FQtqC0KPYrHihBQ94h6K7M2uQkiBYxQZUxumnE_mYQnPDF1_eMN_wHPhWVclu86DZoe2tIG4ANGr_A64SbFoCijm2WAmuNnmgOtMJcT7-dvkLg5TGWAjO99iveukvs80iOf3HE9RXWi5AR2D2Q5prhGGT2FWI5qAUqCqlauwOdOkrMP-D9c0aeyBNuJnnVJLKVXsChaq55xce912ndEKlQ3csEDHMYyhy-qD3stERhA-ATQP0UQY3qsrG-XtBJpP_ebquZTDD6TYGDTXx0bHfAXcIsNhBdPL0SVGj3SwdXCavOgQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106593129017724916676\">AK</a>"] },
            { photoReference: "AWCwydh-4HmkjjuYcRdkibBsL4SEwIeGG24a6ClgY6HSG39rUxgXV1oVOGDcEGmm61phqEMvgKUJYgfUE8oX2tQnjNA3zkrCI6qPOGBjl4jLoTh4RADNV49plQz5X4BgfTIe4hN25kPqFiLFBqeeBfktH11DxdHSJQ_R0RrTWHeRxQipTzRQ_NJo72vr80A8-T62vj0tjI1aN-zBGtYhyX6pcXvsyHlNwoPeKO3vrFxL4sD0KQuf8PGJSYOjWOdIyRw3ymKTUKKWWSbWDxnrpvHf89-hli-E4wsRzkgYHJZYNomNHXPYC3fVS2EypdMNdSZftRTzMg5olIGc9DRs4Y-B8PuvOApwLVyUCmNNhM_koR5gsB1RaIYaXS6p4aL3BVNnPsHkfFGWk_TkRppB6Cj9DzEER83LvkVBuE25CkdKss-dDy-F", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116406381503884245781\">Kana Liu</a>"] },
            { photoReference: "AWCwydjIVJwcrcLBGYACHYZrfqyDITjKy9XzLKnO_b2_om4REwjwUNPBi3sNK4Vcss_8k5ZVko7lWCcU3Ws_Jqus2EDUeWMLqiQuQ2f7CCsjyu7zai1bUPQalvnohpvRbPnU_3IQiJG9HXSDQQ_iP7b4AA7es96dQUhnGnGeg8Bz6BhWeWQGfjTX3_hDYfMzDzh0b2oKEX1lJ54lzpfSjfhspf5wYI5sjQ54D2bTzf-h9oNUbOP5VsedE13HfFFvQndHov_7V_wNWbnttDvfyZ67YH-S1dyfMF1pybMR2lOjYfSYlbgqa8ngyvIJh_jstPuaz8Mj1m8JLSV20Kv_vBkM9l7uxOOb8xR8Y-ROvghDO8txCG-2fWkkW24hfEwMvK2I5oTvgyQl8OOn0t4LwO77A1ntdCDHSB2_2NK_S7FAe0gcUK4S", width: 2304, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114752030915928953288\">Jason Kao</a>"] }
        ],
        summary: "필요한 시설이 잘 갖춰진 친절한 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["사무실 인근 위치", "친절한 직원 서비스"],
        tips: ["업무 목적으로 방문 시 매우 편리합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "No. 9, Alley 15, Lane 80, Section 4, Minsheng E Rd, Dongchang Village, Songshan District, Taipei City, 대만 105" }],
        location: { landmark: "No. 9, Alley 15, Lane 80, Section 4, Minsheng E Rd, Dongchang Village, Songshan District, Taipei City, 대만 105", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://hilairesidence.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15875092255950171835", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9D%B4%EB%9D%BC%EC%9D%B4+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
