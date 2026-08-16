import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "오사카성": {
        photos: ["/images/osaka/info/tourSpa/osaka-castle.jpg"],
        placeId: "ChIJ_TooXM3gAGARQR6hXH3QAQ8",
        placePhotos: [
            { photoReference: "AWCwydjMdZ9fOeWHTwfqCWU6MpJivCUezZ1AmZl-3HUDXHMI6dbmR9tuv6Q8jI9CLVMDQ-5O0ekKxiO8opclsbaUrOkJs6AMDi_ul1yiZEa328ENs3XAIQoetnWN6xXlnfKQnhXWRTg9fgFahzbjLljjVBc1sc2wPuWMR6frnyYw3S_nU1yeiKsEImWSS-CbaVp53ffuCBZksL0RtwUd-YB4-tTywmaJSsJplrbQv0ToENmfYQSefNnVU8h5fOmKoz2-R1VV3TZtHWdmnxi7TyWd2-sqtsKkuaVulaUZlIhXD7j2ErLJHjbBbxcc4a4J1jomIc5AQrRm3jwfJj-QgbIqTqN-xDmAMO4BiSor6uP59EsMS7nGvW0h-2njveqR8Nt3DtCehC5ASx5Q9W3T_bt8_lTvanfSBnlMgAdPtA6s83VVZCEK5AU62-GR-iCp_KCg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100789360090070523325\">Wayman HO</a>"] },
            { photoReference: "AWCwydjwEy8whLRTwhSJjLY-WSTNm5hnjZ9UokYRjjH-nv_oHThoNOcoiI9mpTXqALBimGp_cL75ibnPXoa49EHCtGFijof-HV40D6GjUA7pdSmzUJh2Tuui82k_xVw1WjgbGCi9RhatX4Oq7BQ5OBirG9ai1H3jBVnhbJsuvHkpSUEX9CmhgZdoxZ9-mfkkAjXp5Axd8eI23Pom5IGMIyq74D2G4rbHJlWfg1FbLFisOqzRGtoUNgbZBLdsb4hW0n-JZ9wgJJZ_0TBBXZUw2DXPDcIDzNDKJWClh3i6Qt9m3xJlLbUQ-HtNdK6N7_Po7svBMsxeuKXtHXAl05H3XVpxYdA6DtoTYJeai3efy59QpAjpbpjSBqY-8LriWryjJGmgSMLRpTU8yxBAcBESJeyUq5ccB0phbuzt4DbapqFnVIRLyXbI", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113682774129785888804\">Daisuke Kikuchi</a>"] },
            { photoReference: "AWCwydglD-jKG5noMVpGo3Fp_oF4ASMb6Q28pQ5N5WllXFFM-eJkz0J9jHD12giy5bxBQfF39ZEtlqDW8V23N0eo31KDYDoC6Uf6yDlGBhg3D1Zv0tEV7-PNvB0Th35ivojhm4moFJSJakdKf_rZbGaq02SVNPGF-zAtX5NIbM_1Rd2M0nLemSYQN_zhdRjh9W2J6NWxZgbGXgYD0bVbP55jOmRrCfXeYqR8M_R6lFsbUrC5G6nTZ9quKld7eoVn4muQyo-dEVqikjfDwjDjr8myKhaFqZwQIgy6Y3E1pwFkeM4xu1Kwf4qShzthkbgXCgUgSllN4_aYf0vWhNDzdY0feW09fFx95NwLKHHKnQ2IFtH93QMA2wbVSNLxvo76uW2sHN0up-32SEaClUf41ytDWt_CsYboa4hItN3cZKDCMvaV_Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112927857263272137345\">Shammika Fernando</a>"] },
            { photoReference: "AWCwydjz3nx6NhPskcZnWxCUpVXXmx4SBhajdqntJ6WbwNBYjofM8tM_Dv_o1s74o2qccXcp4mxhGwxVrxhLrW1zm7hPzepk7KBtkbPhB77FU3nAtkJcInpnYvqQoHSfJzm-2aIWUwq9RsGQ1zALn4HbYIEYORYqX9O5ZLO-bW_XrrjlGfyXu2cWV3fX4E8v83o1yFzGnz28WED75z3QN4kbmTr8epyxe34IDUmIyzYUqmvZlCRyzjvXR5mSvJQiVdLmJShhqObbvXzjKW7EvFD4VynPZ9zSE21jbJw-nxQkSadrVb12TgdHgwV93Md2LRVKfCRhMX0c-uGCxT4Kwop4y0qAVlJRFE4thWzyMcFjtCQCbTMFpXR7n8ICCRSXfzASzEUwb9FH9a1tN2x7Jr-wiG2t0A7LUiVuyff_RZPWOAQ-30Gp", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108556518202671940794\">Andrew Hovenden</a>"] },
            { photoReference: "AWCwydhrtuYFbut5dKMM20Vq8iceX0LdtLUTRV7NFhhRLibeRtRIuHY-R5VAXOUEO8zqDh7k_4wFOX6rpMjUHQcnsW1w9q9KW2IHABW1GTDeV380Po6gO1jhjvQp0cMMakAVLanY92bP1fKUTzbbtjXKrQQ-5Q8Q_oNwD4UD3QBH79cmpXBIYFY19h6ScBSdlYdZLPGOF7IlJSiaVV-bl--bBg3ubDDEIhtbEctkKeqjo0jMLRz9o7uDR-DFZ7Wd5WJH75wC_uoI3HHEKbzq9HUZbSJXggUPTIzNp8rpvqAJyGWI5WZHPGfSZKzooegzwZEv2f1ZFXiGnBEVkbBIXqSBtJvZ1Dhbg72MroE3ipgiQegKvoClEDKb4lofYRQA5X9c7CwfY69aEWxDwUj6PVYlhpOPNusZGUrABB4yCwIj-7Ye3is_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114544986637885433318\">John Durkin</a>"] }
        ],
        summary: "오사카의 역사를 상징하는 웅장한 성곽과 산책하기 좋은 넓은 공원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["천수각 전망대", "성곽 주변 산책로"],
        tips: ["해 질 녘에 방문하면 더욱 로맨틱한 분위기를 즐길 수 있어요."],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-1 Ōsakajō, Chuo Ward, Osaka, 540-0002 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.osakacastle.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4831865609044200129", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%82%AC%EC%B9%B4%EC%84%B1+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유니버설 스튜디오 재팬": {
        photos: ["/images/osaka/info/tourSpa/universal-studios-japan-osaka.jpg"],
        placeId: "ChIJXeLVg9DgAGARqlIyMCX-BTY",
        placePhotos: [
            { photoReference: "AWCwydjpH5q6SXN7xvV7f_rQ5u4pVufwyO8XYJFdiZxSqNnmf4Npeuvkb6GZtAueZwHSpUL4XR7Utfr6gDTrYXKCojTqWg63C4y5mXDBqriYGY-ovKVMZga_bs0yCqnefwA6otn9XgGCu-IJ4OOQSeSSSamiBLcIPsGrGdR6Oby6N8Jwge_hxfVFqo1CxKRWPYArLkNcg7FrBLDI9yupCEnNdvAf5WMqLMOrMdBAq3Bt6RZO5ytcAGo3DK-TIH9pHwyU2kkb1clQWEwJOtK5p9YqijmPBQaWqn_PanMBU00PLC5WzTn88NY0VZpX5gDrMoK8YxqwQA7fywS3KkmZuXkyA0ZDBSGphKmDuK5cE4aLH35OvDDZ3bYvqUStvEnuLofbK4SfK4LykgPLjogl_hpSq9CfdjfLZCHiZSlfpxC5DgH4jfo", width: 4592, height: 3448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110918989484245196392\">Daniel L</a>"] },
            { photoReference: "AWCwydiYbVCzPMhkEq2w0KbBUgncM3AB8r4xIAkBtAm4HdpSrRUP8XTxK8WpTrtCm9rN4tLRiLDjOsTq8G4GOShSRO5KCzCQjffieqlFUN_avV_LOKqlok84oB6sshc77sRhf75Zfw-EjD61RwCn2ceGNdEv5ipV_ORdne3jbsRkAPdXn3TfQ_DY-zZlnJMu60_mhLuTBO999DCuXBXh6OGY4i_OyTYnhjbH4821jGwQLXRt_RQupuHuKy94pUgLboDa-pAWD5Go6M_FeB235VSBWZmpWrAM4rweZSht8bdnRAPsvlDx9Gcsm9AmKx64jOSUK7DyLOodBJPHPRJGr1TuMphf6Bko6vs-AI2HYuaO6DqSmrknCLlWIqkKtYhOC0r1_5pu-a69dosUTLw16ZLod0E0jrbdVZq-TbxiHsWm6UK6kv0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103339197892598787171\">Tama Chang (たまちゃん)</a>"] },
            { photoReference: "AWCwydhSHTcpc1bJe7Yyxe7deprMYeiJcVakvk_D4x4d_8KXiI0ELbw9G_9S43McdT-LPSv1acJGNCVEnBo-4KYC6teC9y16p8SQsdhDA7vNldTu4_eCMZYX0Bvv_S_Ood2rU9swz8f9RiqsSX6PuEYPfhi4_0z1mQ4qo3DYGfNu4UvvLQ7yaXyJhUS0LVc_NEfKhYkVpjH6JHv2LWBcQHyrbeUQNAGRbJObzdl1d8yB-YJcxFIUy32Jh65ZGBna0ca3UYOY9KeIkiWj69fvogNuLpCRBo4qeq5l1M3ypIv6uo-LOquJvDX3YWXUWiHjcIiBnA4hZyMljKR43SKIRGiIBONap8h7UtkgGOThMi9-EGYtW6Wty8eJS3dawchKebVxXaXyTnwsWA7uUwnsQgsYS2EOJQdWKlNOJwSz_xF5lvS6364", width: 1278, height: 1278, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117389709356062758136\">__</a>"] },
            { photoReference: "AWCwydjHK3TAw_xAm2RIpTzzTcn_v18xEB7MqPr2qRWVsC77XvtOfN3TcynWSEY6vTlq6qC1Y0himU8OGVaQnzie1IpFHAGK1Y0hcd1BfHEGUSRNLlprGt9j6P_7kzrYVZ1y97akaBjBiCsvqlIiKXtUWV9rOg7HdkOVdBotQkIPvD2rP-SxvDpQooAr-droJVUShgC8EMM-0bMAHvUo3NxyYn5f5sGt_X6pUvr5nVEQCkA6MxsDmk2TaI4kCxLsmY2koii5HErCt20EEe__KI4bqYfG8uy3H2w2tbhdoYKWB-0uQd70ObtYH6Dei6P7UxYWNxgz4zFTRDMqDBEe8oVb-b67bMXN_9eajzyQMZ3CzqblrXoygbT4exdlnPhaYHQA3__ycq1C7jEHD2eG3E0j78hArOZr4SKEipopAkWL5jCPqA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106956904992303464031\">Koki Go</a>"] },
            { photoReference: "AWCwydgLbU9ATHabF5ngwCe4qIk91PhoFYXbpZsuJIgXaNdzZI4Gpyq3rOodeEVdrdv4t6oZl_cFJ6wAXj_4JYpJFXb8a-SuDijqh6_De7iRqPlhjG_h0D0A-lGaOGT_AAVhWI2hEQtaDKt1tEA70__F_PNfs0y8w_TbxxpelJUEaZaGsKlYExNSv99SY-3VyQNgvjssxG535IdleQDVbtlVDyftXX4qgtvSmB0rsk7QGyeR0008oqejveP-ARjUDNzhm6puUlZRXbD6TVXiQxDfNXQNNbbQp9otklIh3nsjMpaGmtQpan0dDcVCZbW86pGAD9wh4x_5lmVO7cWmGdYlocvavo3VA5UTlotzIlLypfWbVDqlfD3eKNdolcgPe8Addm0cYXGF607KOJinG-IquSXpPtqVM22Kanhbq-1dvCYGgf5B", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113482343908983147932\">Randolfo Santos ·</a>"] }
        ],
        summary: "닌텐도 월드와 인기 어트랙션으로 가득한 오사카 필수 테마파크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["슈퍼 닌텐도 월드", "해리포터 존"],
        tips: ["대기 시간을 줄이려면 익스프레스 패스를 미리 준비하는 것이 좋아요."],
        hours: "방문 전 확인 권장",
        duration: "하루",
        price: "날짜별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2-chōme-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.usj.co.jp/web/ja/jp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3892796888607511210", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%EB%8B%88%EB%B2%84%EC%84%A4+%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4+%EC%9E%AC%ED%8C%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도톤보리": {
        photos: ["/images/osaka/info/tourSpa/dotonbori-osaka.jpg"],
        placeId: "ChIJg2DcJhXnAGARCbeAHoZrPeQ",
        placePhotos: [
            { photoReference: "AWCwydjHMPufsDrucpoQeihJi8EHxgZuuTT2d-oshGpv-Wgro5FPTdwoHy-PAuNDFcOxOm8A3OJre2R0VakFaybynveqe3Fq0ztmUcV_GYG0eb9rWSspU31yxmbJ-yrd_nVr9jsHJUJ_2FfRlsC3On0EpgiR1Ld3W34DdsTFn34qGiUOSVgFHke1JMgZ4YTcsbKJ7IXgrJqX_8kRCvbZgXZAiAgRp6_sbtZ2tXLZAR0wBkPw_1K42VNVa2jIsWjvrLljSv5SsMWv3qy3s4kKnVzJMxOcpIBASDfr9whKPV8z5kVk9k53dWY3CwUnJ17CyeWP8rVyRXNICFLXjh8xuKeuwo4YDb04Kfp9EoWMuqoAeyH1CaME8ywBQKlhlLQqdShaqnVgte7vRR4YvTN3E0-x28ILTw8_U-HinF1LkGafYe5iTQ", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117666160343273293940\">軍事強兵</a>"] },
            { photoReference: "AWCwydiehTXiYvKiRpbMd7PLbx39nfwadc_LgZiFbTOBSmyQPo1Py8xI2YlP8WxeyZPv_yJrCeU9dcsvApRvl6FTKhBDZkQk9ea1LO-TlBjBgjHkeQ7r8fBgEK2gdW-yg5hOV1SKDihIVsc5mhLoLK0-9tFQOyfpgqbxOaO1nlxaS-Ay58QzVRJbYHJgRGa5v2szAqvJOjGZy7oaa0aFgrJX55wcCEiwsi0FPb1OcxNXfqQ9wk_-XYYUoflrNGgxUTLOP6-Qsof47fNFsPqH3Ow9ncsGQ2-x2uAYtwSIPHErNYUO_fcTcChnIeLdK29h8jq_Dh-MYcoFBld2AOIg7GaKKlyzqm15K1ophigrzL8msrvoSHEOopGGlVK7V5MqyjAIobda2kv_OgLwoRjGydc4GNtEt97kq3ITD0GGAXxDN0oJs5Bs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116075218752600993218\">Yale Kim</a>"] },
            { photoReference: "AWCwydjutOVhyf3CgTisZwStkd2Hh67wYftz5Ap0uFo6Wsb40cm1-sVT7cVRp1YMThlfC3MV0T_eM-rCRJnsRFCD5ji7gPtSMQY1eHhmEZrfpJvoZURiTbLOWrkszo23PqFDAyYgla8LDFvr4wzvInJKaYVcFqNSCcF7JHryKB1QPjLPIRwYnB6m7EMtrt1ivwWj269_BDJ4RpmIikNSoCDSk4Da_6Qnm-uHG7KR8KCsIDntrYyiETHxHUE3-ueIlojngQkFjJqiToz7yhoo75qTBoEpmaHdSNEeEPegcwgbTEzbO7GJvO8bOLFg0BRepPoVfYFSCu3d668oY9dBFVqudWB9CNgeZ9nP2s51o_glSvZkhbEb6KsiM4TIw1GRoZKmrH-D9meaYqiOOJZ5ZCu2_0OsXJNOAm4UX-4_PUlV9DE", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117666160343273293940\">軍事強兵</a>"] },
            { photoReference: "AWCwydhwh4kqz26LuGudUM1rGQH0VCu0yt4RzcQEMlzzypT85orD-KwHKnyBdJOApJmIzFJyHFpZWbzH162IITRYWpnz4Xs5wSsR92w_sm9KLQIVl_oXpMx5jSqLWg70aqaHIsa0GoqIR9ztin1yNcgz_Kzvv_HXzMAVxbpyatcSoibvJVXriFp2fxAuOh-Tim55V8tjL4ak1QgtyRpfjQKtw1OJcMhd2ne3_dkJyntf8VvfGQj0Sbu5h_pXV5hL3s6nBTeY61qPw9m-ywjZP83HV1vtSqUPYSGugg4cV3RHkwUX0e0YyWydC6NI9kipV1bxxlw2o8Vik_daJU--hHX1fvkw4IeAi7Ow2LGKMd5MYdPlhzx03ytyCpd0qEKuauXwGypni5e9jbSxTECsUtt4QVzV5fpI3r94whCdz8LxmT0C5jQ", width: 2592, height: 1944, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102089005897920212076\">James</a>"] },
            { photoReference: "AWCwydgRc1aB6IPacgqVoArnA_XQOSOIzjzwK2wqzAu-TthN5_Oz-_VowfMEMvtAjEa5lXwRLm46T3oscD0OiHCFM-rCnXC_7avaVQZvMP8q0gvJanYWViZb0VD306zFB2TN6S-d-Id09PRsp-rWKoVsiQ7OeZRQikcxhahnHj4fr45pWSktTvSuifrx7ThUJ4gPCI0h6ySL0fzA6PeM8avKGgKgueNo8fJYDCbbX2OtCs9a2Of1e0t8Vg6olOt1cKavq8PqF7Tf-TCkhnUcmik3y-c38K5BEa4wuYO4tGNfz-2NH7pqCUrdDtltzi1-L8TJ1v6-0iXbFDADNMXSX5Boox27ZN4LfL3Z0Mocvw20-khaqMs5cQLkOgEGjvk2wDxBMR1xy9k8zX_2iWVnC8d1M1GRTpcErT6MEM9sJCzYxu9ypw", width: 686, height: 490, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117377762110860852590\">SPCA663 Little B</a>"] }
        ],
        summary: "글리코상과 화려한 네온사인, 맛있는 먹거리가 가득한 오사카의 심장부입니다.",
        updatedAt: "2026-07-13",
        highlights: ["글리코상 인증샷", "길거리 음식 투어"],
        tips: ["인기 맛집은 웨이팅이 길 수 있으니 오픈 시간을 노려보세요."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒542-0071 오사카부 오사카시 주오구 도톤보리", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16446419638008461065", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우메다 스카이 빌딩": {
        photos: ["/images/osaka/info/tourSpa/umeda-sky-building-osaka.jpg"],
        placeId: "ChIJbyd0kIjmAGAR_crecCbjwlc",
        placePhotos: [
            { photoReference: "AWCwydggEjKrw4UUS8f7CJIfC1PjUv2iHipisDlXYhR3QBEGimQY_2CZzCKRz19tojdVfnYy5xkOQ6DN2LNJHkOhkt2BKeVqAK6AtqCwRAeKvcMFZiMJT6b2TOTNqFsiOzXUt-E9rrzGFfNxFapvxryYO8sInfmKJrVXoB8w8yQpvOqdsm0g201oaMvl5Pk-JNf8kSLgGjejZ2cjGWOrx6TVB5060arVli2yFynbwd4jzIHULDm8YK_Q-V_NfFLiZUEA_F-A2BRZgVQ7cz6m_iOnwTYWZImIp_waY2RdMrJSCJxKzuKPyt6eGk40hu-zlHzc4XxC2FxHjTU15oq3c0pEVPswjcb1_PTO9oaISj2zczQSx2i4GTQFDx9ui--YjFrOwLhc5BmmYD4d3HXM0gerFU-7CU7wpbrde8Zn7MjLjM5iBGlwmFetE36Kz_K5HQfz", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118277179547057547038\">Nori N</a>"] },
            { photoReference: "AWCwydgbKz_toQc7FuKQtmbfjn24B6fy5PYC-jdq8jyPkU7hdOx0P7EkUagFCd1tWfQ3DV71V2AJSKmj9EK2Bb85GdHFQJPBd31KGajVJRuoql4aDqJmjTCUqlaFg21RVf7Fx7Y2hvdHwGIk29vur3v68dH7lzBmtcSaExQsfqlWgkBjp--kaC3dAk5c4hB90WjORVufd1tnGXUYfG3Zn8bCPxcSZWDW1IVqiXvKewLLiS-gnZs8JnIR1aihyBhaE-qwqIBzGVVKgVhNvcKo6-iXd2pgKR16iTALwi4ZEMvmCT8dUdsscHEm_QhNZmAfmUz1KtBoW8K859cwgL2JnWs-DkyR-kWhK7JnAliLf7cMcgUgInRVu9St8fJDgSbUH7MN1zV5X_Lp8YeW8EOV4PrWzr_L1M6JhHyLAESDQ9tPZhQUXQ", width: 2671, height: 3562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115085264085988951646\">Grant Ellis</a>"] },
            { photoReference: "AWCwydg-4Xwbo_7j3M6iXyeWVzW4z8F-_WT5CLpBRzi-hdcjdyq9Bh4FQnOmcL3Yaf1cKwenVg_47DmBHq9BYiTLYmWqCnp6jJWk8FdwNHcOEBArIjaxqcVQHnlYp2TKD8w5cDcO2B9nySGL2SKZ-20raTojxBJ2mIGMHkhINs1iMv6KJhbRchdZX_W71jFAzeLXY49zXbW3vrSvfzrHB-e7GBhy2cXgB2WjYEERXluNzobtGuhU9LUcG_dXW7dcBlvqKjTfqekNiGDIQIPzwDH5ETk1K-kZb3Q4YWO5C7TBlOeLJKfenLLF54Bji0JHQ7QvFgFoiTWAeXz4S9K_gLCcLLAtDCLlv_1ChAUlVW2Kp5WGbDP3pqfmc1PoMAFat8HxI_26dVA5K6eLRE5dRqWwLsP5XIbADnqGzllJaUFBXgKUzw", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101516236888108945099\">Hiko Zane</a>"] },
            { photoReference: "AWCwydjwhRF8XdV_j4xb5IsjQeamYJk2iUVxOcVENZhsEn6qetcHtK-f8qLAsKokWvGcKPQI84k8YDdYGTGeCOep685_gnCYEG_iOumB587oc9saIi6HxSOCH637K4CPxEGLJ8DAyajI8tFYCBqFkxIkMRWKG96aa3udLPNKYIVnSssz-HDMT_oOOxXox5S1Nzda1_tWJ7aYG53f-EWzivJvGKT2A7g1oCz-PSbtyyfT7S5KUVmiy876C7oLfo9xhMi9VLFtZQmWfw-pDIuQ2nBT10a-6qXe_lWMsp_yKrDeoYhpGNSKU31YViiL9eWyLrX4z_V9laBD4noxL01wx7tRmSfQjo4eyYk8vRn9SlYxWyHMsysOWULdACkUzIj2Keu_FbSFOHltgGddAA1oy6MHVmAwfHrMeIelN0UwTRzinv570_s3", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100450143704473016196\">Yobo S</a>"] },
            { photoReference: "AWCwydjVYLL-sjgww1i0CYCyXf1sRXs6OtR7MF8TEgdz4Iu4oHjxIz5JUN4j9ZAhclmPs2Ni29DNeH_WsbGIrulW1hbyzuRP-EIJPQI9ENb3FXFPvH4_ET18S87h2Nn-DQDuAHOdJjGZ32mwkxwKNeD3wNMFQ9UOzDZNzCCpCwp1BMCWZLvpkPWRCacY_tjS0D2-h7W6tNxFCHIc-1nrSa8fzgs9-qcYwn1y63hy5c0uchrDWXPDuM_u7nAMgyVZzUsFF6WhPHsfSelgRIFv1vjR1fqwrpeKVsGjNDNAIzCoJZ1jLTntMvV8Fy9iSb8khsr3Soeaxzws0bhk33zDkEFuq1yhwfS0QH5SUw_p60DXEVEG1Yt6_HuKGB3W6SiTQxGKXym89PZ8VBt9NDRRa0VqiA--M--eWUbQvOfQx1AChHZ1qw", width: 1805, height: 1205, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113081978323772397643\">Gianni Zigante</a>"] }
        ],
        summary: "오사카 도심의 야경을 한눈에 담는 전망대입니다.",
        updatedAt: "2026-07-13",
        highlights: ["공중정원 전망대", "환상적인 도시 야경"],
        tips: ["해 질 녘 방문을 추천해요."],
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-chōme-1-88 Ōyodonaka, Kita Ward, Osaka, 531-6023 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.skybldg.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6323866581023509245", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%A9%94%EB%8B%A4+%EC%8A%A4%EC%B9%B4%EC%9D%B4+%EB%B9%8C%EB%94%A9+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가이유칸": {
        photos: ["/images/osaka/info/tourSpa/osaka-aquarium-kaiyukan.jpg"],
        placeId: "ChIJzakNjPToAGARzCwIriDFg28",
        placePhotos: [
            { photoReference: "AWCwydhxbdvdOrh1SPU7zq3oLPAgbPogmqUwCl13yEEulWD_Y53vNxj2_A5raUAW8biFg0-crYS8oOaKKIo-6km6Mk2gyVrlQELtZvYYR2fxmSO-05LpRM9S7MB3b0WPy1F0iD5S33o-gZuUzWCffInjDtSKttFsSwoja3zVN_hSEtUm-CqxNpiBnIwQNyK2boZBz-Kp6HuzeZ6V4Iruz7PORAYaQpSKP-fU_ybZKe7mhHdUDrsEK--GihKKQSwm2XYpMZAajxaXEfg8npL77mi8ABZGSIxMac1kmuYwxz32nOs_DV8u7-HwD_X2REkVCJNpc5vxskHXELLNwEA5AXqeHLj12LF1p9Y4R2Nplb-s4zI8QEJgkZdtM7OHO-caIw4_NEC77doJt6Nqe1sQ0SjxMnLDiDsj1lLGCmhGJSd3duNbwA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108752570503479859942\">Gloria D</a>"] },
            { photoReference: "AWCwydjJifRFVlQailMIhfD3piKtKGpUQcljMasUWL4x4G7NDEWR2kF6pNd9TyTRwp5hDA-NdnCqlPzcL_qKsMls3AB-1reyLSgsJuJAuS27vJJpAThWY44DRwKeE1Jb_--LifFMHDUfCPKMHD0XWoh_dq6X6ohBWF8HjE7Ub4EPsvwu7I_YiWrCOZQq456EUHQzLQgOxzZzJPauVr5JysrhpQ7KBPWdMfOjwQfYoLE4TcYz5DIME_fb_tNUvituc-UaUZ9mnUtobxeLTvJaSbmOte5bCb7AbeFEvNmeVYzj4DqF24HynAxCcUbF2tQS_qlVlv-stEd9TeVoRcCZV6URdIhg7JOpfv97CYIXGq6K4EGETYi30OvQ25J9TuxGiBfmQeOFLnRv8LT5rkU-WWj1aAtQUb0m8IHapY0iMMhyibYgszM", width: 736, height: 490, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101431495761220231120\">aj</a>"] },
            { photoReference: "AWCwydgujbvddEr2jT8wneZuKQhTOdE1YxMfQVeid0Uo5RY0nKgeI-_zPua4wReDF9UW4dsvzKYlH6uocTLbxgW1D_s2XicDXNTA5t58sSqaDqwyip-t2oZ2-d31gaLupZh-_zmTbsId4aNHM9GFAQG1lWvRsfmWxuP9s1yINp31ZKUTiVrORYQZAiG-aoHex_IIMT0-ByErOljZ6SnuDCxfWzU2JT7YjTjYO6ed9FV5oCP_McV_HPgv8GvgcXrAjplz9laFSpVRnLSgQlBixVMx6oRJZOnOM6FtkBi4HiLSXW0nK5DLNmuqyUvyCuI7ZSVew66hmc4vij8RWkO4NRTYTcxudJZScCOHWJbxXyoKDu_jHNe47SjUDUpPBJKjDPnrxG3kym65JOY8jswlt6YxG8nAIY81zNF5p0BtAxPd0Cg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109962831942191501763\">Josef Maxwell</a>"] },
            { photoReference: "AWCwydhQMcDIDnWaYUahkfOSKsfmmgUD6owpyu3CIBj2wBBRaUzi_GxRaCjCrWc3YLIyg7fbChqI-a0sNAOrSV1u-IHA1xhenQLpZvKHlH0rUphwo5HqJs7z7l9TMIEklyWceiNZ3_8GGXiKVrtXSdp6rh9y_IaT7LME6BBJw-KR3u3L5qrLhv5aJzxEw0YLFJMbaFASy5VjGXtGm5Y5SBpWcfgd4hv3CoX16J1g7AwM9ujyqNpNPzaiDg7c4srSqgDmIoAA4rm7Q7yb-2T7lQlmna8_vEsuQI0cm23XXtu683om_N9opdAaWgRV1kumzL0WuuNqGvYVSCKt-AhGvX5Sl-1MnGBbgb8iiBfHmTRkvFHRMEOJcHJg6QjBnzOUicP2BPIlC3N4MCW5MCjxDavV1yQF9a7qZAVKY50ZAZsLFPZd1vPUYWERhaCp9IZ-C5th", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109356341979090480236\">Teresa Kuo</a>"] },
            { photoReference: "AWCwydhhi2yTNBLMOMKACa4tWaB_3TWHk8EIuK6J9pFQS3YrGp7qTHMiHV0LPjZl-5I9ShMi5B2E5Yq2t66YIm0HMZPfbI0zBS_UgjLfqmKS-F3mMiMYAl4E4rbN3Bc14n8ZQ4ISaB6gdjHIq55i5irpLKDIEIn8Yqn1TsXGUv6z-N6ha728lzc9m8H3uv-uD8_rR4Qc8Rc3aP1iVEmkAY1mDyUOQrG1Ef1iqiLc0XVRDfy6uqRhuKc084D1mNUnER0assQDiRLXSexahnTpl5xMqNnjHYgfMrR3e9RfbXiXIhmeRqfuD71InR2_C_DWvuAoZgjei_U9rAkd_RAbL4rqHay0TtidI-0TKi6i0Qh1GbN6Pf_Dz2q-rfSSpnoDCs4hE538z423IsLmPsiG-lMHxfBN4oIKclbGbD08dWOtVDKoluQ", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111644383337241800093\">かわこもこ</a>"] }
        ],
        summary: "거대한 수조 속 해양 생물을 만날 수 있는 대형 수족관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형 수조", "다채로운 해양 생물"],
        tips: ["아이와 함께하는 가족 여행에 딱이에요."],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "2~3시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-chōme-1-10 Kaigandōri, Minato Ward, Osaka, 552-0022 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.kaiyukan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8035482904308493516", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EC%9D%B4%EC%9C%A0%EC%B9%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시텐노지": {
        photos: ["/images/osaka/info/tourSpa/shitennoji-temple-osaka.jpg"],
        placeId: "ChIJIVA6O_jdAGARLWCtv8iBqrY",
        placePhotos: [
            { photoReference: "AWCwydhVjZDsCJd3rc0Y8AOR7hBXKnXCinnZ_tYCVEyCNoaT7kqNx1g1dh7E0uGhfdhRG148BnsuVHmbUKa0mbPfv6EfnCY4uSjSCITnWZQphNKxJHgUImUJ9yJhX7QFXbHfQ0MBCMuj_UiQudBzkm2lo5CSEpyfi3FyQ2jZjtN025ETgMGmzgePV-iUpTZeIUtCwM5ppu-fWVrx1AlpG9XHcUJ4L_Y9TS2amuxwA-4YVOBccGSKirjtTUNSlegd92ogWwishbz5CsTBTIGaHauLd3ZeSBEvUiBioPXfflLt5AzkGbEaJTtP4LSNSMztSQq6ar8u_EaBcEGnCH5JciMEweR9jdiIt95fAqW8-mqaNAC6IPOT2LJY5z_8wkR7wsp83SO4T2sZq_4lCSP5rpgVgO0SWSddPmjlcHq8kEJH0hM", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108453088950483399027\">Jesse Allhands</a>"] },
            { photoReference: "AWCwydhElKl5kRrX0gH2gAgCoHGuvfEqXGkHi9nJBWF1y3SCDWoLvUNXsrZMGD9WDltRohlt4gdPuukK3_pOMVGFgr63r1pT8HeTlEDy99bjf4SLkdB-Uctgeg9tSJbFge8nFTzo6t8Ln82zrBFqRSYjX62r4s6bNx3AMq5bUtv-65ubOlFonQ7Z1jiGIXETtv4iySA-IUVnTHnXSijj-6lWusEm1QMRoKzKxVd6lyMDwKQyIJLwr2wHGpBJFVgbgnuD2-XLzxkuVeM8RlnbqeK1K1oXSkX_cgQqbYjqV5hNalCm-XPxpy1CXrF9Eh7NwcCItvfjCqZpXFmSDR8BrCCiZsry_nXhi_PUKzemiAVrpF5jge66mZF7-lUT1wMhO2EQ6N-w5gGPslSiAR5uiLlDhzHoQmD1x1PsoEocQOuzmv3w4xk", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108900043086664843250\">Cinzia L.</a>"] },
            { photoReference: "AWCwydgfoXS2zO6W2pbasRfZy3bj5dBOfM-lUNhbf_0IyWaJNuP1J_dlQ1lmtLs0gcj9rG17XG092YVStMC1hnhKkTsNPD88L0oaJLSEPHal7RF8mluepGc5DC8abLtsGLFcMEygfO9hOORqShUKCMFwzq4PnonxzrOH-kLEL1Og4BjN_8njwvp9TuMUSECI6Y1zm-sJvnTuAgWKvuqXkEYSIpWs1qN7GbJ8PIOotIhwyn6lzc5VxrqMqPfeqLzFbauMS75caoZS8OabI36M3Ix6VD76Rk9TkDtqwX8iHBfmM2pSd_2FLGMHrWTVy_z-D7vroQrWncLz1U3Mdjkt0j0k7xMAeK9Hx-4LvgARcLPbyZ5AWppCbZNz3pGRSE3f3r0NuhuOWtpPQbA0-3bkY8vGQbu4uXMsJqCD4jubvSmghgwXVg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111635506949357101880\">河内のこーちゃん</a>"] },
            { photoReference: "AWCwydi6P6pyKdjWauaiBjRP9WS0QzWGeSnxY4zgRGCzDqo1AoDd11i1oGqwZpkBydgeNiPXjWMmXIlvzeudQT_4WWr1AfVIo9ahtGaZ7L7TM8P5JK0LIBY-d6zjO1EyrPJdCe-eAigSN7ZopZXFx93PXLv9TdEOZTopC4kg4Dr83g8xhKmCQiVTBgQIHVBkfi_OSbvYfDo0C11yYzFGB4UYfD_DGE_S_FDldxh2lLyBDZ-TNcVUbloxkFXqCbCYEnXUfjx7AWxcfT1RS6c9zTNFUcllI4OyNWyF-lVcbcqml5HA7xHvvYaFVZG8P4p0CW_AelWhqpkjHuwzBuLiUhLJII972eqs6vqwPlD4kssX0Lb8Yuzq5WDK_R9gjcFk2V0GN664kUfzbaBpHgNqyFsPJzPBC4e7gSFbg1rzZjG1kLCZSxHB", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107523045322946592318\">Mou Chen</a>"] },
            { photoReference: "AWCwydgC1yFnyXfAzowu_JBswzV7_-9sN2FiLvtXWst98Rf_qV_bqfyXGxgRmUzu5kLgkCIpQnQ3BlqijNVug4hQbIkenPzzJfm2Y9RAASeRo9bwkGZqMlzAEiJrgQB7I4r0HaT30gFSxDwXGGjrvwc9fc-fsKK8F7I4AxvAtfY4NhfUFmh_LR9h22Dhc7l8QBWao3_VKeNnc4k55UHeT7Gsv4ne4JPihPcgZDVMtVw2M3FI2ZR7E4cGcHsl84Sq_Ezlio7OZr9bwlslSQO7PTRZpWvck0Rd4jc0cW7yZ0SCAx7sPbkXQVAeiYu_Gef7O08cKOoSWENS_6YKj8wU3FUSqIp9kspkCJreL-NQPdEZIwkVlt6pXZgbsjJ0yflVVQ0Jzgi-BtOtb-bizFvx8TqHzIyTHGMiirhjgqGXv25YSx9P1w", width: 810, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110865778678686677072\">Hiroshi Ito</a>"] }
        ],
        summary: "일본에서 가장 오래된 사찰 중 하나로 고즈넉한 분위기를 느낄 수 있습니다.",
        updatedAt: "2026-07-13",
        highlights: ["역사적인 사찰", "조용한 산책 코스"],
        tips: ["여유로운 문화 산책을 원하는 분들께 좋아요."],
        hours: "방문 전 확인 권장",
        duration: "1시간",
        price: "입장 구역별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-chōme-11-18 Shitennōji, Tennoji Ward, Osaka, 543-0051 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14652002837896236873", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%85%90%EB%85%B8%EC%A7%80+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아베노 하루카스 300": {
        photos: ["/images/osaka/info/tourSpa/abeno-harukas-300-osaka.jpg"],
        placeId: "ChIJ3eA7J_DdAGARil7_EwUaR_I",
        placePhotos: [
            { photoReference: "AWCwydiZ99QybYyxEoYvVBgrcwtUIBS11S8KTIc75ggtkruCVGrnIS8aRDZghThw23t6a0lsTo1Zt73yOs42AHwPGuHAPQNe0rVjXwmik7cpS07xKlb8ivKOEBb2yCxv24uN3nKQ3d2vMAXXJeicmHMyIwPzpNo3d4tWYNsuvnYcch6HDRrrG1dipEee4It_De-DOOANQ7JweyCnd3yzNCdqQ0xe_XoDAMnA8z_uTcZdmMehnOajtu9Rv1gvhZ9htw2UR2xW59V3mhYcvToHHQd3tKwqybL_kz37Yr_JjSbT7x-CqySin3WSnZPVuELaor1dgnqB04hzQDRlci07Hf_inaQkWoTzRRRZ2KZc69Tid1vLV4wtf6LVEr4w8arsuIjFDNuK6qBPhfPis5YwM60h36uWucut5Byy6BiEDhlKqSQ4XJ_T", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103218366508674602454\">風有無（ふむ）</a>"] },
            { photoReference: "AWCwydhPRI9SnLy6Pn3_C18qPz1ga1tV09dxBFevsKguYrbBxW6rPnc7ClObaBCKAeJDAIdDMCr6KO8IgR7JIkip1kax9-7QwymE5Z7cbDcsh4USBvWwZCinpXAbXD9t5g9Sv9iBEbFNdhj7EC4CDZRYtDPLU8tzGjx39QOsIG3oxLk7VxdxpnsPktVPifGr6c12knwyWrRwuPMzhbj1__gJNeMPBJ9vuVSXXMcxyGofoSRoVQLJ89bXa9ptYbG9waANJI1lX6XTVO09Ax9frEpKfGt9nF79lUuhdyTC2KUK_PJKPM_EnJV9esqejSf-5F2lc76iNzhkXKKrD7VMXRleLSfZWC70XLzqguiXIdTmp1cvywG6upFCA7NWpSw1GdY4oA_xesN39r-u5j4cEg8trHi4YwJMWXqbCMpidxfqWWZ6yhk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103772990973011875042\">t i</a>"] },
            { photoReference: "AWCwydiH9myUOddKecJwcmX2uhUH3Zyztoaa2mBsvOZ-fOl4jRgSu5olvjJTcHP4bG-x6RfSOudXwxJRYlrZm2p5DQYTq0Y8RYAZJ0hnvgwenOJXpH1f_-A0aCVJcb-_sPopO2Rg5JCmcZnQr0dnsp1MwH1hzaP79cs6GOqqNimuCpfqNFH88AM43xLpMSIsmY_LvvXeLuFJYFF5JxLf5Ob0l7IqHfSoDJjbMDlK20VFhkmv4N8CJjcJ3ieojaNvpG4suNJVT869HemqLwvj2kCh1KAkP3CKjTUCFkslKe9H1WbBdj2yb7QmarvDLskmV1eIQQBI32Z5Zh90ntW5Fv3V7ZtT-jYh5CfigwUxr73Fll8Yf-K8zjIv05zscRm1qwSF1nWWA2eaTAdh5V6ZxBIV5KAfKAvGqopKu7XBqz-f6cg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107074927152145645766\">Joyce Chiang</a>"] },
            { photoReference: "AWCwydgWcqvFq3OCpXtOGNlA5h1UKmmccWDf7vYXO2YZ27u1nyOizhhNHrylpIy0tnr4Auho3Mlz0ZdFpKIrBXKBawM0tTRCxpmZu4pbqWSosieKml-SzGaoBGWmfNBbRJdlhJJyKID86AjNnHxlLAz8X6Dc6Pact0zPL3yS-o2dJyt0h8c150pzR5lVypg0BZ1p4oZ9zfT5WOV9JZ9OZM1qda-0wQrhr_AuF5IcfeWy4cutqVXPKMLVdNfS9wnuzO_dsGzoFKhbaTKiSdYg15RcXfdQsR2czaToCQw4AWcoikVzg6FQcxX900Z8sueRrOcLIbsm4Ov09VwrSvLUufHybpy4CboRWuRCcK8J9kL13aW-482MqH7wt1oB7mD7_3XuSCsHVqARBwqjh-C4jxf3KQJJr-I2Od4gV04PbjKEv9f1NGhr", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108804762169077059714\">Jason Wu</a>"] },
            { photoReference: "AWCwydijPj1KtJtkVMtVjACdRgD_0X2cpjJQHGeK3Uzarnz7Zz2QksZ2PJ0nEBOcIIJuvHbIWkFlgxukKSRcWRZzZc47IaQe1KQAcq3TS5fU_FPUKCqyGR-v5ZfocgsUy-cpMZiJH8rpryo7E3q6s75WJErtIHmIsb_ogZw7DIVUHZWtow0Kl3Nj0f7HlS78LBLrHQXV3Fc-0MU00yzL32qMRehIoZw4CmnaXeVmrmImsRgg5RChNR8fcSQia-hDnFqjkQgF3S5ueQh9RfZg4i-iQs4BYysIiCHAfhfRp0aih7Zx9U0_n9yMvYbu2qBYSbkZYybfC5zhsKdXjnqZxqRP25dNZXIqGvSOZrcJ9o-eqt64hujrmpNOvT61Q9fLlqUovJzwVEU3i91AGysQSG3kMpA4OIwLJJUy7OB2yyDypsLzQQ", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103184840174629658125\">ふーみん</a>"] }
        ],
        summary: "오사카 시내를 한눈에 내려다볼 수 있는 압도적인 높이의 전망대입니다.",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 파노라마 뷰", "일몰과 야경 명소"],
        tips: ["해 질 녘에 맞춰 방문하면 낮과 밤의 풍경을 모두 즐길 수 있어요."],
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-chōme-1-43 Abenosuji, Abeno Ward, Osaka, 545-6016 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.abenoharukas-300.jp/observatory/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17457951089637678730", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B2%A0%EB%85%B8+%ED%95%98%EB%A3%A8%EC%B9%B4%EC%8A%A4+300+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스파월드": {
        photos: ["/images/osaka/info/tourSpa/spa-world-osaka.jpg"],
        placeId: "ChIJsR9Zt4rdAGARqlF3kRuWnMI",
        placePhotos: [
            { photoReference: "AWCwydi9eqa1OrOs28z__WaIqfFWRzNyh48NDce0RBxy7gamnYHX40cf7qXzaENsYJd2e1TAnpob8UjX3fsHB9LmIFr-ktvFCCLE9ivzH7yy0ntYrM3D7-kmMg81lBQNuDwQzUetaXF5vY05UAKAbl0_vS3IB6kPNkbpg3eYppHzNZvw2WwtNozXgfuzghv0MacTQrFxmT9b1B3s31fziex6vh9-d117xvf2Q5V6D7YTw1V99I0c2z1To7xs4mmuo7aMwtXb9MCS2tlfrKGkLtR1dPxAu2D9CRi3Pny22AiqN6eKXqafv1X-ZaVzu_UOu7z-3yMdk3sIvSQANl4vwVhdAkZu8HOfK74NtIOdlhvKJrQ-OjMFTKAHhl4WUYMQOdELMoipzf8lfMWNKWQuYbwsOUw8-NKnYnv0O09d4CMlk7UAyPhz", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105384906414026560288\">SPAWORLD HOTEL&amp;RESORT</a>"] },
            { photoReference: "AWCwydgktuHfVgsPjshCTTKYiXETVUhwHA-wECuZIqwx2NHkP0tn5c9BQ6bysxUFKd1PQAXzmWTc3EPAZZ5e8ci2PlUKvjn8fU7s6ETtfbSg6rhvqisFE6WrBQoo9oRUc66ln79mO9t_58TkQn_xL4atBz1MnvuuReU0WUJVICMZhq8baTWBjJNvtGUW0WUzuse6q-oMs2eAuQLGKHqi4dDGTjz38lXOi1mqbijj5KDirNXKVHMeYRoqGQREBc5IfmDNwx5g8pw1GBBhjwnSxex_f3TMNJ9I4nxbMGppDZIGlXMbdlNuTL9PWUhsfZiP-ruI0KAByQ27pqUyTWtvykwXQ0otyi-HQHtsp_CIhr9K4xpYU-rp60Jc-7Dr0F2Nkn7rXml4xEq8-7n5aGMOCbwj7aJk8JkIX8k597dSf7VbNBI", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102861419467072261670\">Marcus Dystrup</a>"] },
            { photoReference: "AWCwydgvwDlOvvmfFy3Nb8bMjgWhkxv-74if6N11i_MT5fKUgzIXR7NG5_qbMgMk7BoCS2uluIHFEd2XH_rdKBo-I7__upZyoYYh_GbfMER81OksUUvzkkKVh1d7QoMl3GZTMCVDAYNkS81jNe73p4n_SiZIUDq9VQzh2-P1X4NG5dWsOhGJelsDDQu358c-hyE9I75ktflB3w3G05uTRVImeZV2ZFgn6s16z3QYPCk_B83chBgZI43tll5ytGgG0rbtY1LqZEmwt9R43H6GW6rDNvwCVtDch1kmAdLWBqVsbgLYSM9KlpURTktBUZ_FIy0feB9kDgpf9tYBUoOZ0D3fLFxtgu177SOYxCrHnFus88G9cUX5kBXytfML39nL28mzYV_ZGkzC0plRyzzYk4RgR2jJIpfLdWc0Yt1Z-Lnt01IxZ6z4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109889018893979261973\">y yasushi</a>"] },
            { photoReference: "AWCwydgwBG_WkJJAR8WOyOy9ckhcJf7F9eWoFLC0Q8BwOnSaczRJNCNamwinyilGC1aX5gz2_zSTnqWQLhBkztAVhHr3dAdq6xPrZkMCoEi326xiSf7qL9XODqOwgW5LReXu6Counq82sRvJ0SwuTX3bsPjpb880A1hWtKB_R6eFsTu27qVreiWhk59ez60pHkSy0W7V8Iyp36WC2US2DnNTisXMg-GrIdpf5jNQdfib10XOmI2upgQ-e10zZRUOuaA-JzEf1838P534hNxAGu-sb6MNNAkDVYrG0ILN6H5Bu_WOEKufbfN7u1TCn_x-S6Q7lcpJ9j0V0voXvky3vxzwefv7z8y-ygClFe9RO_NfB22rroK-XgkOaYfwrxVO2KfE2Vi8Bbfb9vsE06dygpCoef6uC_s2wm7qtFPoDK3hTokp_A", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114596734883799313148\">아사리</a>"] },
            { photoReference: "AWCwydhb6Byu1Db9K-NL7eJsRDnqgi3t1pH-TXKxJ9czFASblW0wksQVd7pv2FqdJbH-cQvJsp4sAAiRlkj1I2XUmhWmIh4uVOFqOk6y7Y_aUtwSqAEA5uQE4RICDSrA4nmnLjJbfwwckJzvt71MeDzqcAL1iOUyXene814BKSUPLrBGg-2Oz8tt5ufRQnm0IdGSBpRRoGYY4u6w1F_OmunUIQr-livO4oI-JKHwbjsYO87cPLcKPw7k2CmD9R5xXilpeNbPVbKqUWXJTo_9waB3kSD4WE_deV1jvJpzIZhJFYR-THi8MvgHlPsWoye1km_9O54nAgE8ZB_865QEpxZM3Lm8iHIzW5_uTEfDagsZk3k7CMTleoh8nhevC6FzvTepvyWU5V6i8y14ZQjhtwtjf9MKffUbvs65DTpVibjwyLI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110586425334585389422\">Philip Choi</a>"] }
        ],
        summary: "신세카이 인근에서 온천과 수영장을 동시에 즐길 수 있는 대형 스파 시설입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 테마의 온천", "아이와 함께 가기 좋은 수영장"],
        tips: ["여행 중 쌓인 피로를 풀기에 최적의 장소예요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "2~4시간",
        price: "이용권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "3-chōme-4-24 Ebisuhigashi, Naniwa Ward, Osaka, 556-0002 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.spaworld.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14023248384873681322", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%8C%8C%EC%9B%94%EB%93%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팀랩 보태니컬 가든 오사카": {
        photos: ["/images/osaka/info/tourSpa/teamlab-botanical-garden-osaka.jpg"],
        placeId: "ChIJv2BBVszdAGAR-6Cjxyh-sEQ",
        placePhotos: [
            { photoReference: "AWCwydgrfmZgaHt5rmTMwXS2UKmJE_W0UrWO3igs4dwhCrrU8UCkO2N_HnmLKQwg9d6FZxXFXaOrLv2RvWs016xMQXEd4jzlwou0VRBSYVfQBZWHX8cetQNEc8-vVVI61615adFq9QYNaVFfMV-b3PYx8Y94KppKFRkEL3RErrs5g7E6btnFySPFSbmdwC8kPOh98ZBKY7I30t4QKiPGu7cezygVMmh1UkZuINUt478YIz6CKbJ0smADa73zFaz7a5zAgKw6RnAKMdam51mQAfCAG2iWW1fgs_kyg6ufmzZZtQi8RtcefIOXO5TQsbbsPPXjRW0hcbHdmXKGQGmpxVIspWhvuIysqnk6z2G-TOYyF7AexmRbhvkK3IEWtqnGujSdU0c2bbbeSblScGLokVSv5NTuuwL3HCw_RIZ0hVCmpOG-dvU0", width: 2893, height: 1739, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100678482968252112845\">チームラボ ボタニカルガーデン 大阪</a>"] },
            { photoReference: "AWCwydgFjQjDs5dBeMHml5y4cgZ206Qqb8m-o3FocNhQ3vm2jaSUNeCES161DsTPy3h5dvE63Qr9HthPhIADw7ZX_x2kpnA68mRvs_f40KF4UEd1yldRsgiUOKcxOdL-adM-79QqtakpUFpSGj1YRhHPYken4ijKEO6pKmfhUNHjvsGnoMaw2nV2JKpOSKhFg525HFIOpXQWBpRrrSPsSJ0W7plcSwfSPyzSELMfmKwQbG-RO8j8lSTH2Mc9_F1c46rbfong84pVxg6gOa41CHairtFTuh98QNSECprHrsjxPjhiKrT2hm_iaALR-smfc5ZKeshjECO6-NGLAN5d5tNci8rvkejjwLmG02vnTbKE5DMdpdfqZi14lfROlsV-qkmLjBIBu_HE_CfolRfXcZ2aPraPWxjHVTQkSMuqIzu89FWDpNbnN_kwwZofVXotio9L", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107474296876072343923\">吳浩文</a>"] },
            { photoReference: "AWCwydiEGWBfVlBJZyftePOeWaeax9cJqOT01tkId9r7k_Ua9EMKbx65VszwYcR92RII2Lje9bt7S2USe9p6TsnqTgeM3ihxr5Enzc_kV2RUkTtr1I2ilZMOO3_RejApFa5KU4Afu8sBLlFoqeQkgrztEmIg0xAeXERNoFFHmVIW0Anas_7_EjpSlznQi3X9aUiJUeutuXKCkFQ1EtPUsRDea3wuWyYkdaWnIh_8etJljaf6CjGvdpJrwMqd961gQXVPMgi_IOwbwZtQOHs2rFP2Ik-gfe_KBYYdsBKY96PyyeYElkhTJzaNar_0htmBqn_EbOIhU0akIfXockGenxpN34UqaP3GDQ7fS7RFZ2VbX674zPjiyjXj7GFoUU5C7m-d9WhzwCKAc4mvXr9hPQiEbccYtv9_rq6VZ7O0m3Iw0h5mbA50_ifuQsfwdSd9mQ", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115211090579260860675\">Joshua Lee</a>"] },
            { photoReference: "AWCwydgKOsRqzn5PkNODlqMDLr3S2_JT45NRT9LQSqS7tsg55N33ksg8XD2rrz53KqGky74rVbNikyK4VL1E_n1zlMZaxD9lUr3EreTodN1jO991Zo_hZVLRgWWTOikFhq-Osb0ROCUO0svzGweWBmz19Cx4XWn7IoOV0gdJzmH4trvn5CIHNn5C85wkNt7yI-ZQHUj5AmjJzlWY0sABCsLN4bbQ22QB9IKTTO7-egz09mhqIscOcY5ZE-_12fKN6aZqwuQekOoRlopH98zSZh-xHYaJoOrfvv8GgWy6M6w9qRa3vXx4LOK0JnXOnKVcrUAi9cR9cajV3MqS-JSqsxPzNgcHRe1GhqEDqlUDuO8TBTgUK9VC8Hr4yDqKOiJ3pZD5HnDslO1T_5F1LX1x-ypoHtvQEWbkJJmMNK21Paa7eM4dZQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111231379387058386860\">シム ゴヌク</a>"] },
            { photoReference: "AWCwydhBAM9navfbOiQcjupWKx2TmcvDCZs0yKw4Qwvo2bgtpI8JhSyCXmuU_bJA8u1n37GG8cSxhjBV2WvcyKVBcy_kO05xmEuRR6L0tQ27w5gwcJc97zjPcOaHnG2C7x53pIqMNx1-BkIkCOLv50iiXCCD3-B8Hip2Wk3Y0Dug7C0lo1pj5_SlvnpX1FRQU3W5nFcuuVFvaTfHqvqdw11A5cH9PcN_wRPypPS7oaSr-7cD9k8_uL2bJ6nV4zeMWbVZ6NQ9LUeaJAiYU9eQEF_YpUnQSddSJw1YH9R9nC85qLI_FbH8rGimJo7IknrAYZ3m4obnZKq8Y2qeAeitSKG25yhH4oyrcEpX5D5uhzS3a31jYWrwM2DCV-NJTce1rif5PhkyWOpklRzwugVQIk4AatbQZRKwUDyxigyUzxNt6h-pjqk2iE9RB2ByRjBcchQ6", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103192147506577938286\">Max Abramovich</a>"] }
        ],
        summary: "밤의 식물원을 화려한 빛으로 수놓는 환상적인 미디어아트 전시입니다.",
        updatedAt: "2026-07-13",
        highlights: ["몽환적인 야간 미디어아트", "인생샷 명소"],
        tips: ["저녁 일정으로 계획하면 동선 짜기에 좋습니다."],
        hours: "월요일: 오후 7:45~9:30; 화요일: 오후 7:45~9:30",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-23 Nagaikōen, Higashisumiyoshi Ward, Osaka, 546-0034 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.teamlab.art/jp/e/botanicalgarden/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4949594704093356283", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%80%EB%9E%A9+%EB%B3%B4%ED%83%9C%EB%8B%88%EC%BB%AC+%EA%B0%80%EB%93%A0+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나카노시마 리버 크루즈": {
        photos: ["/images/osaka/info/tourSpa/nakanoshima-river-cruise-osaka.jpg"],
        placeId: "ChIJB5u4sPXmAGARA7d07EP6WUc",
        placePhotos: [
            { photoReference: "AWCwydic_4SciUgBg7ZsV8EX0r-aeeKOR1RnWfulWzX3QaZXjgxdy4V7b62oCHYdfpGfX9HfPXSNC4VV-4GdssKl31bM_zjjfkdo5NqgxmcmjMHR-0Qzl4Lu1Qd2Z-UE4P0bCnc9j7fwdyp4LJOS2xAXjMKwDMuLkpKhZsJcnFxi_46LXMS_CpRxWqiE_g1CDpe6fI19l2snZdGMkyAC3b9xgvBV6OGNXiQ4LmoppsgcLQUgELgSlrX95OWEn3kOSv66M9pReSeGWvcns290ZXeptbUK1ZSgp52yOqHhicYsPCxZmeKcyGLnkWyEfQ2l60PfCpVbZnjcsmVK1MtEvYORsVL_T9mwDiGIE20d7hr4WdmWN1GjGjUzjmv4XTKnbnjZFYY7h8N2gjs7ceW0UNasyQuI0xpCJjliIQ1aVKjjM3US_F0", width: 1024, height: 576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105715105257209720560\">中之島リバークルーズ福島港（ほたるまち港）</a>"] },
            { photoReference: "AWCwydgQyJGRHBKnH536rO_dACW8Ohje8kJiPLnzWfwB8M4L1YHc6g5sW-LJ5qpj7RuGSW8gNvhP_C2Zy-1nNplCQKjFNsML2ICHhVwoFD0vKcGn5rhr4y0XZt3okWznw5WkKdAm-3mS9-v67REGRSyHl4NrbmFD2pho0gzEgBqedE8cAhmyKbTfXKz4nJviEKygHp_iOvtgC2UMVDTax582BJ7ZhkmcLvnOH89bPdfe1iQZaK6UgtwAof9AYBHeyGBqfk0u057rD_awx34valLTkmTWMpnxiZY56h8RqDoeruSmnfMNkabfzXnmj2RhvYR6GBWm9tVOE7TIqkFpd8ykEY8n-zGTDOYWBOP0QLGNWbwP5bCeIQBA5DeggSWf4GnBqHQk5DJ62gpa81_cGi_r-NJb6fgDCshhEAaxXv1bL-OqHQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105503210871444288187\">中尾英和</a>"] },
            { photoReference: "AWCwydh4ibrCIlBw0wMNV-SNnKcWCXWgoMdiYPR5R5kfR05KLR-eVjjDwKTeNavnkZhvOhlBZqePmcdVjBhrK2uKhnSF2PmYjuwo-XzW2ohKvXmN-rjpgFyIAYzmHmNjPfTgP6e8v4b6JGUE0YPMrOGt5nWyUzrRVzCVHWaSakAokWlj2KCULplctQ2Wdzalgj7IFZw3DJuE3uiuAhOHG5tE1inkIrdnQZTaQ9My0U7TtpQxDcyAJvpMUDhDrlYFkTq111vmc1zIYhW4RlR8oAnQKrmqprgLQCgHLwrCS2Y_BTizQ5CcKfYwOMD8Kvt9Et6H3EOIdRHTpJ_FnErvKzwElRUG_d_bWJzy36hYZJTAug_QnwzkjjeVR8iA8r2eGCasGBBjSTi-SWVDLNcxRRb3ThEV7ecKqThjeeGYh93efqwtAJdZ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102199167995442852539\">山脇孝之</a>"] },
            { photoReference: "AWCwydhNYFoylMwbdgAVlBoVD1iPC8X3HBTC9SsUqXdEBS1C7BFeUFq8eR5oSbeL42M55zYvbROSsUru4l_VPRWHLqB-cDEg2pd53lFoidXQjwNcFRRTjO-7Ed0IgCtKydyJul9-efZ3qP9OyfEsbFXn-DdJ7gx4g9jtZzW1BcRo4ivDNKHlDbRp0JEBlkUyUV-n3ryTlSAxzeBDx1SlaqZ5J7_oGiRbwBV6h8PM_qNtbg6OcUGam8bimlmWO4vDdiexRhIvjJgBxWBh9RrQYNEYC9LE9LPdDAEzf9uYxPYtT5l3U_SpNcDQJ9QkwzkZHPLO8Ubb_v0jcUTVNqDh6vdXlUSLrZS-HgH61V64IDnUGO101yCjytVffyBIrbSWgnFESHEDnysravwgFfT9ZF7yZFYzoEgLWFzR7vT4NNnVRp2bmA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116229927802285505900\">Jun Kat</a>"] },
            { photoReference: "AWCwydj9WeHa0kppnzzaagEKPd0-t1BtG93L8DZdTtdcqetkGVQs-pLs8qHQNKrNVJvw0bdf4BcPK0SwIh2xWCyoi9AJDUjuL72KC_P9k8CsY3vMAbA28rcF0o1nPFSlLBG05dnvHz9X0CHMC64W95xtm_opxawlsX6R_tXlsjlL-ZQsP4PFbO-Uqh34bjf8mUUJCvt8peU_g-1VbcCdPMB-qtB-Xq1Mmjxob8P69WntpAr7nK5FygaRyqanJZ1GwgmHpXfhqpawP86cl9t_bVpltcgbLTnDv-YM14ShuE1RUeu77KvqOv9Y1bjlRMJ50YgpUL6h1OcfhUWAu9OXkvU7IQDLDfh-erLOAp8Ibcd6gl5oTVyiNYNncHS-yacFGOcI6LqztmnSEXzDyXDa9RlGKmWR9k5-toFyxg2S-5YFzgYVoP7j", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117593935202558887278\">森正人</a>"] }
        ],
        summary: "도심 수변과 야경을 짧게 둘러보는 오사카 리버 크루즈입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도심 수변과 야경을 짧게 둘러보는 오사카 리버 크루즈입니다.", "평점 4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오후 5:00~9:00; 화요일: 오후 5:00~9:00",
        duration: "1시간 내외",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 Chome-1 Fukushima, Fukushima Ward, Osaka, 553-0003 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.ipponmatsu.co.jp/cruise/nakanoshima-river.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5141415619256956675", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%B9%B4%EB%85%B8%EC%8B%9C%EB%A7%88+%EB%A6%AC%EB%B2%84+%ED%81%AC%EB%A3%A8%EC%A6%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나라공원": {
        photos: ["/images/osaka/info/tourSpa/nara-park.jpg"],
        placeId: "ChIJYWCMvZY5AWARVnREV_OsbPk",
        placePhotos: [
            { photoReference: "AWCwydi-yb9wqp2iDfut9Di7fTWK_dxyZCacTpmnpBhYvtHfPiSTAy8Mf7bN19oUIu-gGfxOauCA2P9BLXuRSvd4mtUtdlXo4aPfbrnyrkK2ersKnWi-4kNs5bzaorbKKoldJN83fTKkAuthLqH21Qk7uC1CbdpLzqne85G7QUkLocB-9R6BcI1dWQ1mpMt_iNkrdylrb3yyCB0KrAwtn68q2OtYhO_jRTep356aN5dlddh2YTh-Lb6HHl0NwrBJly5hSHcnjwuGuW-iO6p8ZCftIIqUmIKH-tkPIwFPLY1m5VW3KHFz-ELffp1IocYoeCftqkL1ZODTwQ6p04DUv-wjN3J1xrgPTHGwSaEIuORipmymJEiz8eXggSovIXJ8Ae_p8-v5ZLdk6XGAUQpJ93vjnMixXmO_9YRJflmV_kvh2sVePeXvGAYjBZiHNEE7W4Cz", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117705360251364539285\">Ionut Bucur</a>"] },
            { photoReference: "AWCwydi7aRjewnsb4grH50YWpBYxWPZEun9BDGU06gRDwP8BynVGTzcTmyIp994iw8h-A-s7i39B4FTKm0eldBRja2bVV1MbIBa7eP4MJfK8NGbrGl9my_QEkR8xEwZfH-u88qH3YI1LIt0FYkivX1UX-Bim1uhb6W5fJsBfC8EoB_SMNHTesYo5d6sBRClLVZeFRk373llEekQG5T-aKkCTxAhZobktld0YqqxRoeEltqRXmBFJRVbtwx-ksudV9cfBHEqn4QmICWatmM8H9u504ygWkQ0OgAB_qBp_vDQGQO4tq8uyR8E5Izc0LXidRdjDMWlk9dmH0wOSkdNAr3bnjDuWDcrxOuUXto2xVBZFxgeULXPb2x7aOO7rXOhZcBq3_crH6-NuhuLlwTmXWhtqrxlhtvSczjUglKHxisargql05w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108279794256488505864\">Alex NG</a>"] },
            { photoReference: "AWCwydgymPqo4H2ed4NrUUxU6x1BDCcukkkklDQ1m2SGPjF0pxwEEmMHG8M9i8zdzMcv16gG0X2Mp8xgXQcjC06-vFy3jJLzjNT--cz-WIVzMVXn-H1iL4fcEAp6G0gmWXMHBtK-ofzD2OcNvb0TnL6-RjE6fRYKV0jEQtUm6kFA2GC_pN2mCd_RfsPb85lYIEwlzjVIuigs2dZJCG-y2h8OSvJiHJBQfBo687MUxyZVI2PJqVUW-gpbSpzVc5IjuN4UP31pKpOe2sL8y37YX5N3aDdG4tg24WTne3tk23pys27DxyssaDKAMgmDTzZwWh1cY6CyNw95yyr91xmc2tNfvJ3ZvsRHJZuimYcjx6b5czClPNv88Q-mAPcIdR4DEg8RFWQoNpOGVHmBhM277ROA1LApJP5j8R5Ibgjsc6TetW4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114079165221860988081\">青木恵子</a>"] },
            { photoReference: "AWCwydiTKIlA19Xu1utxbmWsTmq_ip8QnM2Y62jcXHXXk26zbD4eT21snI9OtiyfOj5GAO5hTZ5Mi5gj6cUImnJ-Zxj7hfhe9tCXic2w9apPRylpMVODiE-4NdJuPn2bfJsMBSBCNoJzc9_eJ78p-j_h9RS1EXk0WGcXgo4vcdcM7BNnZMwCegJ-2S06RX5n0IhdmtiLFSpwR56wEJ4ohjh0CDG7bnP03fxY-MkpnNoIDaIYJQ2NHuwVgGL7qvPN_FHQOs7CQoWQnuskOETTo5mlFHYcHICr6CKlDsRrCgld6XI6pHArPUxMNcHLsEmNmCUe3wy5_lbVsaA0ChqbC92-4PuqH7Vv2Y3Nc2Z0za-Od-R6EkbPmPfvaU9aPv-pdFA2fgJRv5kKbod8BO9PS3XF82i6pM-MEkhT2YD8T2RHQF0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107061477004477624993\">Bruno Hidek Kamikata</a>"] },
            { photoReference: "AWCwydgoAanuyQmTn9HF5lssnsY_Pbx5Ud2qJoV3PC515NTmR_-Vn51VUBR3j1Q_dkEEDn15lbV58SIu_7B3i8fV6HyUELKPIQ0QH0lVQxHqzUVq6JXGWhCSjn3EJCgD1iLYD_CPhpBw3KWeS7iBrP65JJ4BHT_C83yQ-UMhhSZ3j9mHbXcuo6Q7P1Tnd19Gbaw9IcHSXSVj0Dg9ptLg7eerVO0xmO8ewwAAGkhSIAlcumJ6aCQ_ZUromVT2JJ8PaxSjJZC7_Ax7dK58KLR3KlMNXShFkZv4ekB9QbiJm2BdmriUReDGZVXlG7ReFtMa_GYpW2BgjAKzmQSb-ER5suJQoUizas6T63maVm3hWFq1m5Pr29BbRAVlQbK-QXeAtHuLJVmEQpI-heuDNZnx_jOCNkK-ZR2vVCrNXms-fx6cFgsBIw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116375676979662624008\">A I</a>"] }
        ],
        summary: "귀여운 사슴들과 함께 산책하며 여유를 즐길 수 있는 나라의 대표 명소입니다.",
        updatedAt: "2026-07-23",
        highlights: ["귀여운 사슴과의 교감", "평화로운 산책로", "주변 역사 유적지 탐방"],
        tips: ["사슴 전용 센베를 구매해 직접 먹이를 줄 수 있습니다.", "사슴이 갑자기 달려들 수 있으니 주의하세요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "2~3시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "일본 나라현 나라시", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식/지도", url: "https://www3.pref.nara.jp/park/", type: "official", description: "공식 또는 지도 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17972930374069941334", type: "guide", description: "지도에서 위치 보기" }
        ]
    },
    "도다이지": {
        photos: ["/images/osaka/info/tourSpa/todai-ji.jpg"],
        placeId: "ChIJ3XYIepA5AWARjzzVnT-skPg",
        placePhotos: [
            { photoReference: "AWCwydjUB7HT9GRLa61qOJr3INGNKNLBBcU6BqCom4H3FNPpv20nfNR9vlLb1Wdnb2ph7OURLTaWKx1EuQ3WV7TpRFaNNgJJ7xwMZDyhIfUVYSMFoBjni-X6tRlXalxEiFNWAC_i7W7YY_wM8m3hxBcct0dqkRfD64mE_yxLuPZHxZKukyvbhbsqUwtmd_K3HoLWcHgeI4vl3hn4BfwZulFjJu179qsEWCSe6KlRuc7YWCS18M723ChG8iTwLPWBgKsaPYXFBSzdnJPdYDLldQ1q3zTHh7Db_x83sh8fvCSpt2wJXHdyowxNqZh1dapbi7nxwShliHQNMXPLlkVTu8xLsmRKcz39es-ozj43DhJ2mj2Ix4gjJX5rlQFYNubrqmVjxv-2-9SS6r1TtqcEa_KruIOkeKNMZ6OVd5coaA4wUDUCTBZn", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100507609204811558142\">Zach Holloway</a>"] },
            { photoReference: "AWCwydivvQ9_kmfOaelwtGaGT2YZnGRfUgi7EMeSau-yCIgzxo4n442RT0_1y8PYiKXcKqVVV5fIDoT5ceipnRyBiYdVYSb9nlbFnW6dRt0GXjXMkEQSKFbwTwf-dEMeI7F7_GhM5lrTe8uR8TkZahliDQdPB4GaMLWcUOv9WEBU8T7b-zdysS_zruiuSPURFTCkev3n6UB67ajI4l80YzP63zQYv4p1gCi9PLqz7bCSiDdZcJjZg_ddbmIZ-kWyPPUVotNTBFkkC5_Fxk17eJK1SkBuNOj1VHbRIroz-__VwLQymaXCuNdXe_hFR1qZ-1UzC-rm_NGPhjT0z7YykPDg_zIm-6ad7ytfXfvba3YQj7k0SnrVubonJA2yoGGnwhIuRQDVIIuWLB87Cw6sNn0oehf1_jxe3lLrx8WOLGK0Y9Y", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104856240996518630116\">もっくん</a>"] },
            { photoReference: "AWCwydgaKbzgRATy2lR2SL8lNpPRDLrsZ-4ROUF7qZYDC49flMx2sQa8d6YnSXrVjVUGdPT3zl0MMH3exjhhsDzo2s7gOBYyhHF-EcoGby4tQkhuYNlFjt7hjOLOIh4E57jVnFh5-rihYtzrq2u9qwKB9D7sM-Ps3KQR2qa7Xn99cUR-g7dn2dIFMmLRhW1hYo2IZCQ1r06VOprkXpZBmVWtXH0gUtDfC4e7NqXrNPtBAntJolpeYN6Av4ymonHZKs5Hrc5RKFioJpWt2JDxXL9kTpHEGeUiNr8j1z24Lpzd9vFlKPM3toneUSmqCCOoEkVv7tEvTuYHRPn5lRHnDQ1IYDC6PZXAL2yE88EEltGKIKjrp90jbrUOiVQKJaM1jQlMTd1_vh7PVdYoKhG-cFe49SqD2grPGhPqAGokqvvS0sScww", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106222357111238970980\">ももちきるや</a>"] },
            { photoReference: "AWCwydgqTqbSeRCn9G2prqvjo8if0tcHv5C8R0anZWMlP8lAQCXT7FKs6TzGiBvaBWk-S4cdOQ6lkL7HmbEwx6NSLX5T8ZLzNMBDvT1xqWi_XPTw8-WJ4G13WNlqDv5svQKG9ERugjRUjaAwS2GfD2VVfpPX-7t4FNTpE4nFbop_GDR8-W3tW6wG2-2lcVUOEFo60IhBcBC0BwtBUl1W4mKr0cuDXZW4uYj_2PxGoH4N4UgA2Lp938nLBEglUKPX-_8h1A8H61UII3nXBhW8uLrv-H7CfVaDY6nyukX8qjQ0ZMWMEwXPtPxZB5NBgtmgisvEpxHAE035pi8zImS6zYv0dK8BvC0slS9Wc1iBRe3SCmcdKTfpM7BUNh1oYtmM_Uj-PJKDiK25B0kgeSouXxRtTVbdaewCIQb2qqSO8ChnxHitLg", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104234940698931303596\">Raven kisses</a>"] },
            { photoReference: "AWCwydhsSDR8_hCpILgrJhrM9IkIShGogOsH6mTOboo7iwRjpHdQQfJcVGPwJ6viXLVhquA54GZ6agyGeYRHcBWyfORo8TyaDj0BZB8oTIb7a1w560Sw7hFs37rghWZFUt2Jil0WJ3sDh9dePnIodX96shgw7CvMSrLC1CO381AlzWCsEOU897cIMTgEURVZVTFnHa1t7KO72IYgZWxv-wCNbRuHw2xD9GxfP8Fo576deLKFcwDKCgPMlPEJ2mAF3WgBQ99RvGeTPhjNaH_HUtmJ-1PTbUX2CxjSceFM9mr7bpJwrfgYqVhBXQp3ccwAaBpDrNoy1gcOqUPari3dmMZCFeAxWUdcuNqkFX2Evkg25Fzy3-ji8tC2hTd2s1KdqxNRVKhxcRObsBpWIXTQZ5xfIXC55OeZeNdqNhqE2dHHyxm27A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104732073967361291998\">Ignas Ausiejus</a>"] }
        ],
        summary: "세계 최대 규모의 청동 불상이 안치된 나라의 상징적인 사찰입니다.",
        updatedAt: "2026-07-23",
        highlights: ["거대한 청동 대불", "세계 최대 목조 건축물"],
        tips: ["사찰 주변 사슴들과 교감하기", "입장권 가격은 구역별로 다를 수 있음"],
        hours: "월요일: 오전 7:30 ~ 오후 5:30; 화요일: 오전 7:30 ~ 오후 5:30",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "406-1 Zōshichō, Nara, 630-8587 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식/지도", url: "https://www.todaiji.or.jp/", type: "official", description: "공식 또는 지도 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17911005107283377295", type: "guide", description: "지도에서 위치 보기" }
        ]
    },
    "기요미즈데라": {
        photos: ["/images/osaka/info/tourSpa/kiyomizu-dera.jpg"],
        placeId: "ChIJReJA0VjnAGAROYGpLFKMkSM",
        placePhotos: [
            { photoReference: "AWCwydhL1c8tadIWECW3sYLEcwprfCU9fuXRnFZx3lVpTGVw0anWkgUgVWCYfb1st1pHIJtRFYAcuduDTidzqwhK3rS7c69wYw6GmeixzivPNxygcmZ2UncM5m8Ju9YV4lhNrx0_cZAFbHF6MeOAwbqvoq-bnrs3lPzdMPNgOr94ogTi3yFjVeadGeN18uoUsMzRi8d1LjQuRBa7HnDEAxdeMr_P7kjAnPCFkWRyKLTrs2vfoZa1SSyHMgwC4WtKGi3drUhj_HNwC5fMmvsyXtiLUrfQQSnvib1sx6nsYeevEyijWirwhTUrzMp9Nc1UNY-HAhbI3RC48W-mOh2KMUu5spVIORwcDzeUHMzXnGM-PwI3hisBN30k1ITXICKA2JyHTkWBa-FGSuBb1WJbpYwbWsNiA_GJgmG9x1fgdIb6NIs524MvqbWxZjm3gAHxAIG7", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100571625084823721935\">秋せつら</a>"] },
            { photoReference: "AWCwydgBUHQLwsXNeCLvHCEDd24No0S6PX8jux5Xgv31fZWf1VFt59sde-4X7oT2ewcTcatGX8JfzPVw_vjyc0-WCOeS2MTHTqShK67aekqcq9ahnj6AtB6R90tK8_myoZDf1B5L8uqKB4Hfr1_DOGJZTi6CioOiPUgg7Rf7V15nxer7mNV8iT1biq3gp1bqx7lhxmlm1dhGUJCAwLfcgM2ynB011KFV2q6IoWr9PGJAKL9qAJAs0mGwxNWigO2f-t-n84EfX_dTF5E2j4ov8BmdAV8tH-WrmNFr1T9MpTrk_iMw71qD6qQMO3XtYdBYImH2_yODwp6ancta8_wd8gDjZvrNoOWB1AAWBLvkSvJ7eTH8UYqLLJls-LYVxoaKpCLygl7w9-VPFMXUhtSxjhx-fdARtDvDOMOkfTuoU3zSK_PziA", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110636625711553067291\">高橋俊男</a>"] },
            { photoReference: "AWCwydhFPadJJpxVnPnXKHNJU4tWjZEmJQna8YwIqXXVerQCQtaxI-j_iZYOjJh26OsVOAzVKWFrUsrjioqvUQ02zPZuBk4Cp_MiDfsrg_lUdhmKAx151dDrsLHesRJu0z92RnIx-CNYrYbcHRtuXT3QUyY1ljRgW-3_uGmbc1Ka2FAO5HiD3xu3H9bTbM0x0XUIw7U29yuh2bQTnYdnTqkrQ6VDkFhWqLIgAhYQG7puI9oldLSjZD4MIi71bJRkdstWz4P51UAl99trqbi95WHQYobNdKdKSRDPYpWeThsZuaDPvzFBjG7ajFfNaphw9xja8cuIjjK-hNYKIwsuLOHTHUkS9qIFAnLFMGdjs5UoUGbtrMuNPZLkSpVUe9jFfXatsB8F2WfjvIlgM-ZNL3iVx9wIXQ8eeIr7F0QgnbvCc65_4s9g", width: 3464, height: 4618, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103539553180905950169\">森田正樹</a>"] },
            { photoReference: "AWCwydivEbauYagKza7yWqA3iLvX3zNyg--yPgc_Od5gIbROWiJ5EPqZVA1EcSXGE6zFyYRDZ38Eqyqlkp7xu_MNKcb-5YUpnZsrnn88CKsiu7vWdzme6TqECKBIVY7wnz55fP1OHciEoRfEc3QZ9Y__SXX7oKnuyWYzZkwcCqg0dw2ekya2CrpQq9ya5YvHzXHB5NBYfEUMrF0fjFC_kWmi2NBwd_bWNdHPVzBdMPlu3PdgS69vm0Wy7lN8NRKaCkctHOFTuC93UBDm6lQWPXPWjnJSibFk9Kp0BmF6oiDXEgcaVwgzqabs01WPa83hsdqsePafsPTG1E6g7deKRn0u6VlIHRmUDAI7lM05my323SXNMpsQc6lIHIHQwDCU7ythCMlCQE5QQbeJAtkVOmBCEOSulvEmnILlCqpcZBv5PxBXgQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115222490547074769138\">森上智央</a>"] },
            { photoReference: "AWCwydipUc6H8p7Fkqu0BwKqouWqv67BGW3mbgd2vGFETBIzMzGN5FWNSP_Ow7hSC89EQ1XHtEd29O-YSaj86jOdcppHEkzNsAkQPgW8wHELcWKCj51q5Ar2Wuny1P5ZCMaQrpTmrUAZllRNW89QGWh0VZu9mImXxV5rrvbAXFZJJCbLLCBud2bsIXLRKZ7HG9HQA8otw9yJAf1VDU_XfAPOEpXk_QmWoro4x1rQAeXTnOG48d64MJBZQj9wumfxY6CHBmLdvOLKMf6xDDXkpvhshs2iQvARuFHWe0pjv_actKe0u0jcOHujbrAFMV2Ulbu7369KTVOkK5tmwAdeRLX7-ZhkioWqWp1jP6Je9hoaPBbjcf9bO6Xs6o60JqYfRzSnbJRRb-rR5uQrC8kXO1tRf_5_FUygFHf_MsmV3QBFARecOQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115868126732933610629\">N</a>"] }
        ],
        summary: "교토 히가시야마의 상징적인 사찰로 탁 트인 전망을 자랑합니다.",
        updatedAt: "2026-07-23",
        highlights: ["탁 트인 교토 전경", "웅장한 본당 무대", "아름다운 사계절 풍경"],
        tips: ["오전 일찍 방문해야 인파를 피할 수 있습니다.", "주변 산넨자카, 니넨자카 거리와 함께 둘러보세요."],
        hours: "월요일: 오전 6:00 ~ 오후 6:00; 화요일: 오전 6:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "1-chōme-294 Kiyomizu, Higashiyama Ward, Kyoto, 605-0862 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식/지도", url: "https://www.kiyomizudera.or.jp/", type: "official", description: "공식 또는 지도 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7111013964196361402", type: "guide", description: "지도에서 위치 보기" }
        ]
    },
    "사이클 오사카": {
        photos: [],
        placeId: "ChIJDaDFLGDmAGAROENRjwutnyA",
        placePhotos: [
            { photoReference: "AWCwydhkRlUM9Gt_v-OLEG50BxXl5KlhWOwc4l1bLWc9Kr4lEEykCp2ZbjqLtiyAZIWtA_d97zEiHaz5o7dWtuHoUaZbyV-n6e5xS_IX0vJ2m_-O89cygTo-cR38mLDotCAIk4nXUA1s1M7ltj3A6-YnNq4Z6099XjGQ2V6fCo9Ntga4SBpXTZCKyFxtopVDynFa3Aa4o1BJvZi2my8hJIKPd5MqsmNk47kYAEmDPg5l5VUapOxxheTCGZwoHsKdpDGrgWahVFBGuP8SaYak1wEw6w4UAaUFAAx9XdG8FDR3Ue2TWV9mbGinJJ_sp7yamXFMlPry7N_sJYh3D9mrmH0EybNk_165vVw3IX4BaChC61QGPNvF0rQ_zlYprvPGXwJK1b3P0QwM2nMT3srXzhteq4oZHyjzPUm_7osnvPN0OAGIETPIlaUQGSq8MB-WB-MR", width: 849, height: 636, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100941376026692663944\">Cycle Osaka</a>"] },
            { photoReference: "AWCwydgqN9R-05L6cFkZTRLKHJ4djad9yQ2D-UynFQPqhlDG1kbW0BLQoh02HH3rJlNqmTZScZm2Bg6h3mwhFXcbcJnHSoIFU7RgQCnAyYK3n8PnQ7B8f7qFPB6uX4EdflynrGIu060OEoPMCJr-HGE6qp9Dc93XZp_Dv62v2RI4oxTb0l8qcJdBPBMtvIz_nuGc5VH0t2INGmqSIfDQiFNsH1UwSM9cYMp_gV8whgJOwrlmxs20v5AdmpLi9J1hm0u-b6ZAlZwGCiWX4iQhl4XQK8cYGC70X1Tr1S-lrQg_F3OrwIISWn59QO_TMcrrMo2Ts9FrCXgEagA-crqG-ESkPK8TDDC-bARfTtxC1ubD0hZbXA3cuRHO3J9j9KZgZ8xo8tCV7WOlJUxfRs0Z9-kEb14HKVV_Oz5oYPrb5nBXOgHu3U9KxpR-IFNkia_W0Znm", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103633674093473632349\">M D</a>"] },
            { photoReference: "AWCwydiQiPS8sX6RjOR4hlrkUhKl_jKEde23pUDuFHXXEuYKJm3ar4pLhpwM3HIK2CjL1LhyZhs2RIfVi1xYeEYhFsQUjGItb071NB8tS1ndUlJjJzZ8nLKSpTsiDs0S_38vAM9xSWKqtuXvo2wbh8Pm4U7X0VqL05-DKanyKKbGMKauBy_fnxbQXxLgIfwYSYnJon2qdDJctC6c7Z4iOM1gTPzAwd0MKVi1YdNe-oJxYZJRcyeK0PrL-1EHAfRlC12vCY7Do1grm7JFvU-1twt3GjUrRc0qvhy9Xn2WUEDTy_9YoNVcdLRKT3TJ1pwjHI_xH0TB1TNJl6IE7C9zGAyya_IHk8elLfU6voSJE59ATOu6OSOvrHMWWqFIjqfMatQey0aE42GW2ogKkP9F17FPiEzwQSQlgoJ_B4ybiUs2M_JLk0PlVXtsp8cWtUiy5iXW", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117718622359335852378\">Anthony Tunnell</a>"] },
            { photoReference: "AWCwydg0OwlPzAJnFv4SE2zZ9L41QfIZR_e9-4TrPypFSCGzdqjmcJEk5xb1GJmHgO-VM4EXz7QXqm0LpFVAu_YZ_-b8Fpy4mMh76N5J3opocJdo8ySpFGQ_eBLT6-84nxohK2D_z3O9iRZcLdWOtO9ncTOp-cJwg0yuHeIgjg70fFV5k_se_TWLpjn0mgG5QYkAINcvClknBpKCGMIVlvadp-pZV3ib51HMywEg8BMZWrH8kIm0ZR6R9SFFfw2p9Ws1gp-qUs0PRmb4836xN0tIrGovJgQmOGBuZ8NdfCJBkIB1iWtrz9ONdi42WlYtX1pR6FbP2GqF3tx-9h35ekJT9STuJXyUKAPlieLfJTdSwSZTuholch2ezOb6s6ytUl089lzIQnK4zwsY8e4b0DG0vyTp4wdYWXs6Ta2RfTk9pVO58g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113058279205601294557\">Kellie Perry</a>"] },
            { photoReference: "AWCwydhiMdhYeZ6r6mvMsR6KhksPHlNLlQ6xterevMycBg1RLxgSY_9oUPI-9OIZMF8v1tGIk2-v63t6VBMtFgRJ-ieC7HZAnnPKoU7QeswpWnuuPJUYqn6-5XCQGooKuW24erxQ9-48tqs7o3PjXr2xR-lYUTQr0-cP6KEE8_UTcUlQgmMYrsD2Lio9gPnfIjPW8jEWfcX2yvX1khsbSHxVHtyM-HnNoRhYq7XDrEMRjfD1ChaARBhWdsNhTVJY1r9Cojs8d_23opAyqu-RTUyp_49e68EXPntMqe53jtVPeejIMwVfdiZG5d3TlBK3gXPCTuaE415Qm-E5I8BLlDEQ4_8Fjv8Qw0fNS3KjDFbtRjjB04Pkv6U6W8RmsCU55muiCHRQRg2kUd093EaXTjGaiK_-GQRN_9MQh-HW2UZ2moO02Y0zKWXifR8WzIscLArN", width: 849, height: 636, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100941376026692663944\">Cycle Osaka</a>"] }
        ],
        summary: "열정적인 가이드와 함께 오사카의 매력을 발견하는 특별한 반나절 자전거 여행입니다.",
        updatedAt: "2026-08-16",
        highlights: ["전문 가이드의 해박한 지식", "도시 곳곳을 누비는 자전거 투어", "가족 단위 여행객에게 적합한 코스"],
        tips: ["가이드의 설명을 들으며 도시의 문화를 체험해보세요", "반나절 코스로 부담 없이 즐기기 좋습니다"],
        hours: "월요일: 오전 9:00 ~ 오후 5:30; 화요일: 오전 9:00 ~ 오후 5:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-chōme-10-7 Tenma, Kita Ward, Osaka, 530-0043 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://cycleosaka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2350787795671401272", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Cycle+Osaka+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오사카 덕투어": {
        photos: [],
        placeId: "ChIJVVWldNjmAGARD5fL-6nKn7E",
        placePhotos: [
            { photoReference: "AWCwydjwcAm8fUZBZb7MHtXwbEpjUta7CDycJDgC4lXsIR28Rfdsirdng7FKcWvu-2UXNmlmprys2ZqLIpBY1S-mvGys30wNMwyGufR9VP0RW-C-lgPAqQKU92Ibp1H6hwNoLM9Al_t64rXJCVyAoDaMUFzgzU-Flr90psOZJAQrYE2A-5wJB-b-_knfyGAt1SHMrgo2PsHiL-wZCD3qqTUeewPXeAaQz-jLo7sSs7cMFkUWemh1Qs0wRUK_T8Gf4GnezEbZqpILr1hpWuIdMrQH0UayHtFlS6ZB5YhwDZSHWgLKUtFkUpjuK94Tdc4mrorTkwwwKrBCcEfnVy0Gj64iTjyoUo6Jd4Bn9JItFOTnkOw1HpboAa8s7kXvDQAqW5ADx5M6sUZxkEYcMdF6ZqCKNq5_wFH_2H0v0OOowplI20UhpquJ", width: 2733, height: 2111, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104942736839263247384\">大阪ダックツアー</a>"] },
            { photoReference: "AWCwydiKUt8trxSNUrrr7ds2ZwVfVQehq7ZFVd4Iuwtgqd_rN7zBRP4o6jQtp2dgEfI5SoSAwNTPWoFxDsYNtApzHuKqKc0mO5Sj3H_kTxsXIgw5RfkWB8fMC-zoopzf3akDx7larVgZ-nftAzKW3Flk5d7J4NwQW8C--nCNNHRiG7d26MSw6-nHbPCsAYD46JyRush4Qk6kf6aZtVLDmilaIGlYLK635wmXY7F9w9ZAj7i2i74mhqmt6EqjAskFxiNhERTnxPziDrrpkex5evPEMu4IIH1IDQrhDDCenvaoK8TMD8GU0VWyZb1MLWKL4vlzvuUg1XEoryvWLXLcGSzyWbIVnc64TWqW3kiC5U00KwMonIM8x-bWJiJeSwEiLIblSyieTZ4ipqSrOvxxlvucLArcgqEHBh3iR1k3ds2kl_V2M2LV7zuen8mdFf_D6w", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107839370654190764904\">tk ykw</a>"] },
            { photoReference: "AWCwydgokUvoGXOfKLMTIGnwxi4fgzohhw6i-CAMQ9oCRy3M86vGKFOvnNpIbpSUYdONbhgB51KdHwBTp0L4F_oLmD716b3o5dSFlfhE5Qlg1BqrAvd6ssnfKGCwzhGiC-uiJGxc20CTCiu_cZbCO2vmnVv3r3ABBeyMYJAVcKvokaiI3X726rOqA7WlROJUln3d4KXa-qnUede3eFpD3p47Tt7FVDQNoCb0-9UWtgiGkb_VxJf3k1OqNiMDvsMNlU2NpRuWu_1pAGfG9ooZWnHQPQhYCwFO8bKCyGaUD2U_tUUq8JKAW9SPSvCzQSlHhpiIae3myJNMz1k2pn-_ysjvMc7kX6JY5uHVI1GZiYBRNU8QrB2rHwSm9juPqmiZ8iU7lK7nDMIhtOJvWiDcXy7l_48hfIFQBc7xq4ydO0P1CNm3xRN-jR77Vw0ahZuSH3r_", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116650623945576181148\">ないない</a>"] },
            { photoReference: "AWCwydgdXe7Mtvm27otN3tsaoe_jVSg3VhB9R364ttRm5zoWsIsl8IGU6fznXRLMekwvl_2d1ERg-Y-cCsEAxRkQxaUyhh3UPjmiot-dbs63qyfkGA5dgBTnETdpPOBkVmCnhe9DFBkPF1Jr09KR5fN2WzwC7dUC6qOyDkojrBbwZuJxJNtOBBcGxelPq56TcGAAdU1lf5W5I2tbk0ypD2bhgFbiYkcFdgxSZ9krIqVg8l0AkTJNy7gh0bqf8SWyUl9qBKtoT92o9nzWHL1iiAxH9_1UN37oLrk7CUxUzttCC1svC1kWQofHQ8LFGUe5hVnDoznTJSqaok80rsuQ5HuLO51ktFiSM_FFlTcqE_MOu8YXgMwNuJI2MDOVg2_zPTm0eW0yHPSiSetZDBUyLqDHw04QFqe9LEbBDm8N5C35v28HVMdlVCluKJriYCU8Sw", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118132056923098337105\">鈴木すずき</a>"] },
            { photoReference: "AWCwydhlHH88G33gFC9v6cTGMTHZNzraUzmZD1pPIa7gkZh5mjnck8Nl31IzDhLWyySmRunXxjojpHynoCdbjKeuSAOohFFIik3KeWcXhM5QfNB9iEgC6_g9O-TGo1hL93eqaQuR0fEYWr0AAuFwSadrCidTEHFg0-6wV4A2zBa75nkrjNv7y324DbAqU14LbKxPVp445wrNtmgDaqvP0SNWJe1-YLFPjtPsEoYvrDtfjcYxLyb6LoNLwdltbIm2Do4cnK_NfNsVik8YQf8yGu4EASTWIydmMPcErHCyR_-ZxQshyCs97S9I6hBDelqrgVzT1qYPH9divDaaCle-ZwzMcEXayGxzVS0CkuN6BG7bg97T3J_XLkozD35zF5n4frSG49hPmhdXNerWCdrOzCElELdHvJznf8o4oXSD7FixhtsQ7ubjq3bXdyeIwCASNylv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113681032577792714675\">Ryota Watanabe</a>"] }
        ],
        summary: "가이드의 유쾌한 토크와 함께 즐기는 수륙 양용차 투어입니다.",
        updatedAt: "2026-08-16",
        highlights: ["수륙 양용차 탑승", "유쾌한 가이드 투어", "멋진 경치 감상"],
        tips: ["가이드의 재미있는 이야기를 기대하세요", "경치를 즐기며 스릴을 만끽하세요"],
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 오전 9:30 ~ 오후 5:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-2 Kitahamahigashi, Chuo Ward, Osaka, 540-0031 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://japan-ducktour.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12799171497432946447", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%82%AC%EC%B9%B4+%EB%8D%95%ED%88%AC%EC%96%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "로컬 푸드 투어 오사카": {
        photos: [],
        placeId: "ChIJlYkTqhbnAGAR_dE54cODeJs",
        placePhotos: [
            { photoReference: "AWCwydj05uP0lRccqN0I52iPbcnpDSToJMC23m5V11LCbZ4jaEJvg3ksx7VryXtbdmOhuhWh1pMvaRmpPnHcdAzhZt5WtDQGseknbay_9WDVpCagZo18lrJuwwv9RmGVhEjz_zG7BLL2-dXO8kbtOQ13HPPqNFwiucqX6syA1ng2x1A2bAgP5WALnaMVSxRmeItnyMDIqfv1TN1-MW5EqWsgWQFkIVf2yo0pe59l1MBMHeIWsMXJjh82VrB0woT3BM8I2vXFx8DAbZA0bdWJhlIMdnxwkSFfRbDFiABuh5SXKCnfFkzxvm8akMxCjjvQM8kU9aVcYjYinI4l-AcVgE6FD7Ug0i9iDC7WSIeuKgp2WjweOIufDdbQQIAoFIge55STwErMxbhwgwXofX22visXgJrDi9d_fLl__xXEzLgEeenPI58uvx_Chzx9QDqIqQ", width: 4000, height: 2667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103848253092779174847\">Local Food Tours Osaka</a>"] },
            { photoReference: "AWCwydiGAisvr6Ud7tk9Fm0ItWZDbXPzJmWHCpyJ4K7LTte09bbAceAZdYv1GV3Ix7LUR3lkIsTanH7fZ-H6qohOti0s_3LJ2zrDa8xr9pwO5xvNDdQ0SBqHU7lKQY2qXNEi8HI8xKTl5rSIxw6erbZ4GTBvndnzhcyRM9-Jakdlk3MWx9ttnvHC_PAlJiS78iKFDOhTkCVRXcNxysK8_kpjXZG_7wB4o3gOJNiQj17JRKDpU3weIeKpRxuVhTTjxr0oTQrt_PzcQ5JThq4SEWy-sz2uHrnmOssktO0LnDbxeWB7j5plxyh0NRr_K8nCg55OIg2JGCUVBJUeG-jxcpQvU402qj_thiPLJiTsOFf9-O22bkTHWwMk51NzHhBIzcbImYl5alqKMyuEGYUTOrw5oseFdl8OX6w-w9dmc1AKzjs4GvCNQn6UcmSNVEXWJw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103848253092779174847\">Local Food Tours Osaka</a>"] },
            { photoReference: "AWCwydhkD0pV9zJF79kyuSQsBTeSdBGDnpZgcmfWtGA76KnQYsdmhf7OuajPKqPYGjkHMGZkvKcGiuZGV9XlvkYLS60HwWrWr7xGzQNjflUnh8Zq_0DLRDeVeulXTtY9qnWezkDBN9ne-QQgwOXKBb5iEGS6VpBlEiVVzPJ1UYa_x3SAFKv8UnfPQ69bXzO_0IOxU6I5njYujeLNzcZ_YQN-2TzswRKr8s-XO7BODtt36-zycQgsrFy6cmLLXhXWW3cCUc0RedtrxkAB6B8Mv529IlRDnmmFYyY2bzjJ8DICM4Ftpn78ocVi84WvGXdivYZ0KSbhp_t_TmdUh6xK6QDEwr7x__XW6tuK5YZFnWQh2wHBSz7iscVo05TQRm7V9-pD818HVzi6wgpQA9DapYgiEPVIw_XRvKOb5-EsrBQjww4nq7NpGms6Hxl823YxSw", width: 1028, height: 686, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103848253092779174847\">Local Food Tours Osaka</a>"] },
            { photoReference: "AWCwydimnEG-aNpHKeogMdgnhgJczBFvqGP8n8AhusZmjLJjL9ex-J9YaQF9CXY33e-pGQeBokiycchYeAgVMViU8_UNoYmBXbrTXgX4wSI5xv8O8mR2EY7w0GDyFvFpq2qYcXwIJW0UKhyhxxwbnnKAwhNeVD_Hn78hJ7iE0E7CPxB5fISPPP8Uzk_2qSpkM7ACU9FU_UKnRro0xoP0JrYX5cOw7aJfLg_ad70CRx75SFTOk-SCcHxme6duP6CFpyX0BhstF6uNimrDIvdnG-y6DRsmET9pCwNsTl80gvi2VvX-IqyxbjOuDnBzxAPs-Fya_nBrlNh6AJ5WMlZFWiXYs4r1Cpqj6R6k8i0Z6uR9CkgKtnL-CNtzSIkj3_34F8ZSfN7Io7WZM4tbp2VNe6TsB_n_OxP5DVbpakxvgjJetzLhN6cxcEAsS_B2e-f1Qg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103848253092779174847\">Local Food Tours Osaka</a>"] },
            { photoReference: "AWCwydggGXXBzPFD07R__zDkVpxAP3mTG5Oy6rB2zvB5nlrjvaq-T2GsYIJDycUeeIGjQCb6DokO_hpCbLk2Jgq-TL2ktV3OHG23AFQ36DG67qKGZHO5Rq_h63FPsIJqC5rEZMM_u3wY-IynoNnITAGxA5bBzR_r78casyk0xfaLWy5-JUVEOhBzbbPnBjjSnVDk4YEaIDaQdI3qIj-wQQvBV_plpjerwTrnGNnBVAUOsPRffGeLcToNKy69cVOwmqmhc5HPsvQSeYX5IcGtL8sqEiRKwpZxbxX0zIrQAY8SxO4fQyeMl21knGyhI3da-rnKg8JoqpSDof7nNIMDGZkZpMnm4tieOtcg4FPexUMUv8ZVyOL8iG6DKX1IRBiywXaiiVWLULLLi6apDN9roDSFFZzpWe-04itPGYqMGzGJUJ5upV6rIhDwM0qTNIOX", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103848253092779174847\">Local Food Tours Osaka</a>"] }
        ],
        summary: "친절한 가이드와 함께 오사카의 핵심 명소를 탐험하는 특별한 경험을 제공합니다.",
        updatedAt: "2026-08-16",
        highlights: ["오사카성 역사 탐방", "리버보트 크루즈", "현지 맛집 방문"],
        tips: ["가이드의 상세한 설명을 통해 역사적 배경을 학습하세요", "날씨에 상관없이 즐거운 투어가 가능합니다"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒530-0001 Osaka, Kita Ward, Umeda, 1-chōme−1−３ Osaka Station 3 Building, 29階", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.klook.com/en-US/activity/149852-local-bar-hopping-food-tour-in-osaka/?lang=en_US", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11202848950404633085", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Local+Food+Tours+Osaka+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "재팬 투어 어드벤처": {
        photos: [],
        placeId: "ChIJz28oMCDlAGARR4NBLN4j2-M",
        placePhotos: [
            { photoReference: "AWCwydiGAL6JK8VaCg8qzBMxtsmkkf3T6h3_S3kvwsputCdqcLww02HnvDpC1zhM_j3bozyvL1SzPgzlRQNz0sMG-tq_uGHKZcf5QdgTzjniaQZW9o1fGCy-5Agv6WxErlJVSaJ4TiulYDdTNcqC3SKywzAXcxNdAH89wY9pEYXEVdAAVMSkypheojlPsNq949Haf71jlxyxDkMreSyuyllEfhOaedDR8XHx0FW7wN8JOcqd5KJNo7SugPb3iMOfFTEweB-z7Qc1Tc7neBXbiBIWjTVXGlC7tAcPabuY2mvHjrhT4FqzHEAhLR8l8C5_ridirKfKO4d9N1VpIuXUfsXhb9mlAXtytlA6Ljzg3bLS1tlXKXB7WtN2MD_zvjiPcFVHKzz0nfCGQGcFtcUKlM_c0fLc1ai_LgwHoEeJxUtgZdRAY74", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118059101090373031753\">Japan Tour Adventure</a>"] },
            { photoReference: "AWCwydi3a0WPMbJJQS27Nvcb59LxAp1p4_EjE_e4759IjchR5VFGIWcHCZ-_7aLML0dxFQvvJ_nOGgcAojMO-lVUTSEUEYfEChLrHEQPgW1vGUL1_m2Sk9aoUza-qCk5A2Gg_7NzdCE7L7RibBO_wCDLXJnRuf3UBp7UZVp-S7jDAg5dhKRDJtwC7W9kwHasGGsk9Yf2EMwli5i0ZC2v7j1T-FleRDGf7JWr9hmQ8F3mzHlrXzRw3MgLDqkHVopz5p3cUhTQqgyIW6MrZGJ2oSTRbImG9LIbryJu1jsy7NVCIhVHMesfHjStDK1SEgy0WHalIkLXl4F6TfmTcyytJ80yKrOVh9BtUZsbslL6cvXo3TI6rV8UNqcEEA8DlanEljRN9w0LUZpW4cMqOVlIGCfCRGgds2xT_eAnIVdhWlUvjiCRTjy5jNK-lLaiq3fhk0s2", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114201673526471880809\">Tony Laffan</a>"] },
            { photoReference: "AWCwydjfiT9qCJ3hGrXNjpPxu-oRoxoDazGPTuOlLcGvWHEmh0JbI1RJCu8cbdl7cMTL8WtucokE07b4wU4l1nmbRzROkUy27Cr396v80aWd74eTNzi9EZ4PMwQ8QQ6GfHn5o3O9V2IDRy-BC-sVmnt8iAXt2vh1kzozBVXng986jUu81uOntoRLbsG8bX1-ugotcy2Ejpvt21s-hhSRUBY0xz9J-_Cd6Qu_vxOU5_zztmixIFG8bs9fFRC9LwL3vqMdB268Cz9EWsK3UKS55XLuMVMDe7ii0Svmtt103s4xg5zgc4sg2mEfsJl5sx--Vj_Cv9xMmqXmq5coXNYa-kib6ESOD8kp73UMgKSs2lSE8uUw3Tuv0FGiNHVIOyO6Cj7U-sRFfR450wSOtADl4HvhkRzTmg7sDEvbGMvdgMb2tcxn3I8HE-rZfltFlkTL2iqo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114201673526471880809\">Tony Laffan</a>"] },
            { photoReference: "AWCwydgo4OhKAvbU3_jJMMA5GgMIaog32w_LR8Mca8-vskJRLbNROvXZwB5YUAfvF7oWC5Rz9L0Ng8DmiZAUBolGa_FDNMEEIBwxhksVoIFirFAut-ZjoZJ0hn_YhJe1OhPasV5F-MecdyF5vaNEGOUer8RASGxA4jbenGHJ1917dG997yve6emYVM9QCCZ_hwOYbEAwlUpb4dp3uo9qnUlmA6KgTetPPykXvGNGq-XYlZUfkuGOnHKxrpxqiSfbhzWEy5Wzi8jORWbPL4NnqIRl1M1bqbpnsmVDRGhkfxhMqeu7N01V92pyZhQT_qoiXS01jlZw5q5f0zo_WNXjzbyfshmU0udAuhEjzF-S1gEchg5bKcMHi8ayUIKXT2AyVWr-_rxRsjm7dMlg0BYKUYYXW3Fy6jwJ8gb9ldv9C-RPWl1tKMgR", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116809077133621235258\">Yuki Fujisawa</a>"] },
            { photoReference: "AWCwydiwYpYMWW7i0gwqzTdT0enGWApO8Og0tZtCtc-IZUfIfzDQS76a4w1r8of38pET9-t9QYoXa1lgx650gRw8QSy8f1KXmkVi4e6EPEI9PcMSaSDfQDOzi8llyooaI3DamAH2lQYXZoH0dnMpT72baNa3N4sxRqp-1zqh5kC9zQsE8sZt6DxoNL102wxEOvWdYPry6E23HbM-ytHMT4PkWkV6HspU2d27-TGTdwa9Z9zuCGXqhYkOPK_1IFX3dCKNAD9rmA_3DmKXPtq-K2tnuMW-oiMs15KDH8Vs1k-Wfl0ySvRtkhfEnHhWCONCMT_bvXWsmJ26EZ6uOmue3jqM5c3N5bpsh1hIfGnsycSTwrnY9DnK1DWtEjU3kOOZs5EThOhrJWydml5RD_dAV1hbwbOIn_HWBu_1T3JlqWuvGZLDpqs1rGa93kFneYSyv7Fv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114201673526471880809\">Tony Laffan</a>"] }
        ],
        summary: "전문 가이드와 함께하는 오사카 및 교토 문화 체험 투어",
        updatedAt: "2026-08-16",
        highlights: ["대장장이의 칼 제작 과정 관람", "사카이 지역 역사 탐방", "아라시야마 대나무 숲 투어", "교토의 전통과 문화 학습"],
        tips: ["가이드의 전문적인 설명을 통해 깊이 있는 역사 학습 가능", "날씨에 상관없이 즐길 수 있는 다양한 코스 제공"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Suita-shi, ４丁目-２５-5 山手町 吹田市 大阪府 564-0073 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.japantouradventure.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16418756303641477959", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Japan+Tour+Adventure+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "매지컬 트립": {
        photos: [],
        placeId: "ChIJCzjybgznAGAR4P9QT5kRxCU",
        placePhotos: [
            { photoReference: "AWCwydi6lmYhFvQFMjZad70xW2HabWrIvrLq1hhCTi6LKhZcdzV0U0QOqLnZMABOeVDgcHgQukWOh7T_1HnL32N30vUAe8txWe-zgOuL4ipua3KpQPBsVo0j9hO_THRJbm_3RYE2Lr_yuRrRz2boa8p63Ex13qPd3THepNrn0Jl4UiJnN0ZobG60eTLXJoS_wdc5HKJoYV0Pbc_7ymXkv3l3B2mVKlVYP5IgUO61vTaSGjadG_dXfLZm2fG7ZtcRkAmqIHd3lu2FZDB5IgofCGOgIDCpoOYPwMDOLHwT7sfPMeYpqYzdOn-vG_FUtX1-KsBffmzikmdEv2eGRfFZWXdLeACT-jzuh4ORBwj9uDruKE0FuqI9TUWgKyFHzp-45L4IT3yLTuE0gelg4DFbem8WogLne2NWp0xdLzF2beO9QZhLjZk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101308949772390217572\">Yorkshireman_Dan</a>"] },
            { photoReference: "AWCwydgkFPRDxLa7T3Sn81StU8HtNik2o97kag4yIvCSahX-lMzH_mk2_VRmm_pFhWU8IQ3hsdBjpJVYR6Uzx1_hoT8xWDH0AqE8HT0ZCECp6d9Xr1OkJREfm5tEEscIHljGJJlfsaY5T1KaBi_bT0IhdARXFEbU8xZG0Cc2XZjiLLFh8uO53EF3alA9gfOj-2v_uvqy9AMS4lI_mVVAKT9bpp82u2Q3O68xsyIK7YsmuoZab9VE4mv0JG8YfJxkR7jBz8oA9suM5YCdKr8V7fkeU1lS1GIL0GkvyPGOJM5xJDlLWENOb9j1OJpPdajYIr0KDrkXsooY4pUi1mmsXNlZOuYZR479Rs5UqnmlDSO9cWNMc-SCnWNmYMQsOmz6RwTq4K_RLHmnSdnAXVgOLnNOMAfJwPdid6wsd-zy2LABn3UlwBk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101308949772390217572\">Yorkshireman_Dan</a>"] },
            { photoReference: "AWCwydh2Oly4XvfmPa5g5J82uJ95RHu22fYo4fiXxT6kKKEUuvCSf2L43SB-nHLj6Rtud4nQUJdIJsaQO8Eoz7PR2Rbf-X70eVyliDNzZ-TaJobY0PMHuBi2DyN-LOkVMxA3qfK6Be__g_vWtlzDN1gAClYaXEbvjT7mBQ9uUuqai0Lkp5Y-z-CvTg7iT1no5jPjBBdZu0VCfHbv6Eodoua1FWHQj07faZEw63I04X9mZMJxaljmmb70S1mtjaQUdZmG3yT07Ek7oMguj6n9BciYEzIm54fQXfPfgEHq6HUx5wKZHb5jyV8FXoB1XGl722iKplVN6cx9OGydKmGyu_9wetLJ22fW8iK1qY9mm0ixUvKJMR3-6ZJDPgaK6c5gYEz3CRZqTH1gO7Z4Zp8mfbBbOegj6wE0prxNZ4UKGmqEHnmqMw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101308949772390217572\">Yorkshireman_Dan</a>"] },
            { photoReference: "AWCwydipq9JxNM0nwfSptiVkQdtMAN72lx_5ilB5OSGcUHZWOQXvAWH1EpCG8o4ze2MKkAWZRlArM0YUP7cdk8bpToZBKYBpaEVP9cKHArnM9q6yy-51ej3edAX-EVJTMwVKVivHIclOhhZRB_QJDIlacBBn7nT-ZbjMPpUNLa2qP9TiRtMoFjTXL2IXE6zZpVPNmtT6wN3_jOlemUtaQGLGwtdX7tJtv4t2BxrA3y10oSVpQTZghnH7uRZ-TmhSZf2R2N5gEKT01AtnsrHft-qzOg5eG4Y_kmXQvPio0Mcw7tQ5r6EoA50pGV5hUQx65g2V0j1G3vqGRm4THYimuZPS_VucSQr8jEzWnOrFi9FlmppmVSUQ6Zx_tpDgAanawl1dwe6I9AAcmrTOUlHmDrztK7YwMsnR-lanP57cZEgq0WGqiQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101308949772390217572\">Yorkshireman_Dan</a>"] },
            { photoReference: "AWCwydg70qwgy3C7fyxy7bPcNshnvOhkOEFEnPF9NUlNvkcfjOY8Thilqm7DddnuKCxgL6i1nU87q3qodtelyyMe_w2zhCffU9BDCI8BLI2tBHi12Ui5INFP_RLGPhhBJugC0LPg5gfYGSA-m0ksCCB5IeXh-icZTVc2iOwudmbPLoXcnQBrAc-6PwmKxT-GjfzkfeF7C4gD02ehbZuHakys-RjrmsMJEFF08OtUzSgUgJ82bPLSOl6mtzJlPXZ-XIn_axU84yef2WLu3tX7xCW8gloo4Op8drws7AYn8jCAneC04Ss7DjnSznKYIqYSInDCJAB3Nq2_Oyj_5X44sylZCS-L1DYq6wmF_gigTMBDc4xi6kf_I9hqIoeAqrNxwxyePOXNSXD9xT6r9O9zIS5nkbBuy_-0Y0nx4FhhUgpjAU5ZLQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101308949772390217572\">Yorkshireman_Dan</a>"] }
        ],
        summary: "식재료 구매부터 3코스 요리 완성까지 경험하는 개인 맞춤형 요리 수업입니다.",
        updatedAt: "2026-08-16",
        highlights: ["슈퍼마켓 식재료 탐방", "3코스 요리 만들기", "개인 맞춤형 수업"],
        tips: ["4시간 코스로 진행됩니다", "직접 만든 요리를 맛볼 수 있습니다"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒556-0011 Osaka, Naniwa Ward, Nanbanaka, 2-chōme−10−７０ なんばパークスタワ 19F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.magical-trip.com/tours-japan/osaka?utm_source=mybusiness&utm_medium=googlemybusiness&utm_campaign=osaka", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2721319424996999136", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Magical+Trip+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "재팬 익스플로레이션 투어 진": {
        photos: [],
        placeId: "ChIJWTAIAc0sdiMRi4uArHbVl3E",
        placePhotos: [
            { photoReference: "AWCwydgrrZaHy52Kl2dx0lrgyHRPIhCKHWpK09Mm20cebTnrYH0bA9chXrRPtk1gt0SDI1G0ydN2K_RHdvGVwMUbAMSVgGPjML29Ab9k37ymbQHU-J8lF7A8xbAWBkOL-YHXhOgk6wn_21sem8pnoWCZe45XZG_HF9CWNZGK_QRPiKjIYm4Suz3dCfOQVNNp8auP8I2p8uKDVu5Q2NihchnIWxmgQdz3VNzD5fVgbTxbU4NSkHq1mWsqzXMvU0sE6AAsDxoPF5fJntlOeZq2RKxtZrhR1wkjVR9BaO0d2W3nc5F4eYOMwX3Ippy3J48cKnOnHgi8jR1fWxb0_-RSby7c23FsnH-jU78_xVO22A3-sP8D8lfTPBZsYyRhbV2SV1Sgg6nbyzEC3WnYNVxAFHrNjUhjDpKVMRD270A25hzKfTYTo9yGk2lW8ysx5z8jM8Ub", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111748196417151561358\">Alyssia Essig</a>"] },
            { photoReference: "AWCwydiHaHwh5BOubgkqJiA5XXCqrjRhaRjvQJTlwgfqO-AYjKfvVsF61CmR60jPtbeBNYuvtlbT9ADq_v26L879-jKbpUjz__ylwZ1hTRQ2TVF47rMq4gDK1Ahx6FjvXlGMNrn3u8DFSFGu3A4BfGQiSnIhuH1WbalK5z4l80L8tmPnJ8rfluXpBmxeTYwO_1Qn3XPvP56ZmMZCwjezMnd9PlUgxm4TXIItCr7KR9JKX_srrhjsCGiSpNrNjV7zURV1fWkf56c5UdluKWMleLSuaPQAZ46-1Wb3u9G6TQy66QfEON1dOHx-5oBh29993MBj5TcnLtnw-4Z6-OXycskMN0LZVV44B2jpYnnVl4fTHvtnthcNWqGHMr-hAgDPlPuMRLauqDNKmjm-2d590YKbhaz6_yRbtH9WLKfjBcfCXpCtbnm2wWo47DBWwnlsqgwH", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104789372680597694974\">Yael Geller</a>"] },
            { photoReference: "AWCwydipDodIsbA595ynBEgD0bYE_3gGsronZEx-yewlPbWlgnkjgbJjUNU0oJvHFf3Fha3eHIFgyWDGLi0TleJW2Di2Ob8Jit9FJQuIGVEt25ElxsSmtkogQKbmztPhHTQa3K97PeyxeEty0WyJo7Mh0HyApYEoQnqujbfSIDpl7RQEl3fnaIN5wprxZmsARAcMpLHMA9bXCDL6LxdOiBbnsS66fO2x37Gy50yBUQYtvmgvESrW3xiRz6PGJT69UTAejgLhF6DpgHCi1lQE_0YCdN5ZbPeaeZKICqhFeiBmCSH6KGadRj6okdgIk-TxJFnxC5btTU4erPgtlc_1dPDFGa99Kz0WY9b3zhIfh5lyK2yc2x7K8mDknxs_T6OKcDDdC9Hd5glsMY5FaSvGFMX5OyVw2ZRBfx8pZ-Y2lVZcLt5o0Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108690410462418772614\">David Macknish</a>"] },
            { photoReference: "AWCwydj54vzHVC167SQLIgMAJLANvXvPlWvDK2uPsnEBw41psiZVJAj6dNodcthX5xCUAntK1vfRqyIdOLV_sQNWaYHLzRNn6YyXNNMPNLOrda-wP-he8j6eyeD74N2c_SrlZafaTt6dVM-6G_HCo5yuOPSDPK7Oz8-zaq5nmtDxQxTN3dOfAffKamfbFBqeCZnMsN-eCJDUggF-PGOJM0UuthH3itIwb3I5rq0qLmkaQKynu5401rRFfjC_L2mdjowfo_ysiW0stTqYYcrNIU2rEUGnNjfFcYJxPWUXmkoT5-Eof8HngZ52scqlYEAIkVYQCq92H1BP_VL1va57kh5w5gf_W2bP_Lzo2z44KeJOQhD5PYnVNbVmTksIxRFSp0OmykPDwEgYwP5EfYx7pLVuo57RnYh3I9-3CY9YBRbGPw0V3icXvPGdWqRjbIohyw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106671339050228159012\">Lee</a>"] },
            { photoReference: "AWCwydgIuDpAcPavbDulrC50ShZuy4IxV2DeFP4jpfg9cpS_SAnnfeC9zTEhFIW6-EF4sKcu_RGvXchWlXaXg2IRePnUyUaJa_ByzrWy27_QmPcKnn8tONVeREFnqHlcSNCSBrwjioQ2KhoG6TNGF4SZOcs_wuYjenKG-GPa1pcFa5yP3vj0pZiaM9_t5pL7izxjnYJ4XDKw9Yc2N-nbZxVRfCK-WupnOHX03u9-_pZm8GH98CEYCE3fF-QgYS97oMysu8rMLjyhkObE-mg9fekJowdXbtm00geOWClRmptcH2-bVz-JMeoD4xcXDTyABwmKJ9ctRWYumv8Gx5MDuVLfEDSLDk3x1vJe8S9zr5rnBty94_nOgbjR3dyGHp3dB2loDhWR2LAdksK65Fd1jvT7XOE5pvYE1Os6nV_cMM0l93YpjuoDHQkE8PYOBCsDymnK", width: 585, height: 438, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113713502574072099525\">Juliette Scherf</a>"] }
        ],
        summary: "전문 가이드와 함께하는 안전하고 체계적인 후지산 등반 투어",
        updatedAt: "2026-08-16",
        highlights: ["숙련된 가이드의 세심한 케어", "역사적인 숙소에서의 특별한 경험", "철저한 등반 준비 및 지원"],
        tips: ["초보자는 개인 투어를 예약하는 것을 권장합니다"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒530-0027 Osaka, Kita Ward, Dōyamachō, 1−５ Sankyo Umeda Building, 7階 StartupSide梅田", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://jet-jin.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8185245553446128523", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Japan+Exploration+Tours+JIN-%E4%BB%81+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "완 스파": {
        photos: [],
        placeId: "ChIJgdiFdlfnAGARL7utlNzzwn4",
        placePhotos: [
            { photoReference: "AWCwydiPvFsaKTvb-v0KDQxaYsMc_NF-smRRN7tXUvRc4J8uVzLH7Sg9YdeNlKWUs3ZxxYcHRrmVy9dFm0_6LoeCXBjosGFFDIa376g80wdfYoIBCjOuZ0ccgcz5IMTaKokv3-6KggrpEOD5Z5UFsgNdwQwQvmYLjgYb0xzKZq-XftnjSmXYkVuEF7G0B8hx2B5nIOV6MY7oLiX0qbx02sueZKZJplxiEvNJDbQDksMBncaGpl_XVxi_OYFWOpV9hsbT1Kl1BSivoGir3gM7uw7IIxg5s0EU4hbw6VyYs7ATeamX-uL3DBJ6B29H4kdFjpOIIP-b7oONLss2rINCb96rcSKsx8daUJUEzDa8qfKGXXhphNNBVIG4Kti0k44cvp3lrvjr7WPkdwNchsKSbYr2u54tnnYy31oJIt72HkSKAtai-BY", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103285309583992327564\">WAN SPA</a>"] },
            { photoReference: "AWCwydhAK1FfJMxMDm2dV7TArT2cAWJETnSps9HG_xeZKgEgea-RNq5rNyHzw1_nhq9GR3JU3B_EKxnbQUqTaDXGMR_VX8wMCMGRtCu8XJRS86qa6KwNGSXZqDCBLYG-GK91SNjCrPAIMF4UNwEufW1Jq0W6_Asd0T2G7Hl9o9SbsFJ0jj1eztZzQYyO9HzL4IGCDv0TQ3dDC2LMgWz8-zZS6-eifbUGCDbLP9XTcGl57BuDAtWUmC_Gb1TgOa69MYpV8PM9MkElMUvXgtKMzXKcPnCkcv8owdev_I44aUKYucqLV3TK2VKjoIsMAPvapg5O7HtRVVfPJZ3hyLpf7fhRmDoOitfisWqjY2KyQDUs26R4zfGvxGOC3IF3TD__9ccgy02Sii7Tss369Ith4xK-KW5T39W16BzTEjoVOM8f9Sg", width: 1367, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103285309583992327564\">WAN SPA</a>"] },
            { photoReference: "AWCwydj9n_p3Zh1CkYDX_kW0DXorRFMKfz3f2F0YHUeAuvLFR_Jlty9TgPUlOs7SnxA7l1J9VVb2jfZZYrnltCGT-u60ucnejaXUQ08Nztl4sfdA4CE2O81aOtO635Gb-oxFDn0cAhuVACYoTkfoYvWWt8ZXtRVcTtLU2Ck923w7RjnsDwoWzhGLep-P4val9zQIjFB3xSidZZJSXm91ghYzlUFTFC_2rSiqX7Jpvq8iC5B_oQh6FsWF6GybNMMQDAbW5FkHjAQJr9yFpET6iz4z46N6ovbqap7DfEXzTUHBF5yD4E8U1PiUEJ5QjUI71Ne5cu14gjQXGduQdDaDwFFxbiu1EHxzuUo1OI-iD2g8GBYA_GOICTb4TjtbaCHOT0R6MCyW5abB2DKmuWWUoz4g1_7o5wVY6bDcaSzkVQ4QhnpUTA", width: 1290, height: 1447, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103505250412178191108\">Bianca Czarnocki</a>"] },
            { photoReference: "AWCwydiuRj30msY3cvcqSHGG0QDDubimWUGsVoTW4DYSTbv7UM21Sxzt8mpOt2xzXGEOXUWeQ3Wlc4uFi59r-xp4_IRVmIAB87Okbj-rcVj-fVxRuOHD8cINoVwhgVpoVmsKybHmuk48NmqXmR9qtJZwFUMhpF65-DlEpXWL7ITr_AsVLJE7J2Bggo4Kp-atmzSXaqyles008yYVxf4AkMwz0SJMGquILEyul0pN2t-Oa32FNRrKCBssr_o2gOehNNSKgI8AaLUf5dx83bGnAkJxCf_6NZsokyh5wVimeIHFAwSX0tIcBSjy69V1qhljnAQoGP3WhDQh5WJXa1hvQPKnilZqNf6WCRrWg6IVi_KVkCLUgV4rJW5VuWYd8bSUpEU_k9QH8bFnQO4CNq-EQfjISzXMv9bD2rJNXeGkkKOptTFDbng", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103789208786244613663\">SK</a>"] },
            { photoReference: "AWCwydi9YI_HKVQWOnCHo3yzk8aAF3BmQxET23mdjFc-Sb73CqrAp8pel9MA1KuVLtQe02ZeTSLH_jRbbawiUoE_lgmyeosYlU3sads_UfC_WF3BsXaXGiv8fRZa3QeMTF1ygrhBE64Zsa_XwArwv58AVpnttt_MCmRRRGzdjQ_XiA5B0RxgxHL3Rv3qAxGSHxDb-OAU9PTt-KyrBFi2YU8xR7pg4NbPr76Oqej2MSB3yAf5txUQSe_QJfV5KT1GYh6c10tWZ7qP4rP92X2GdcU6ABSlaLuIrzo3W7enZjvVow5AEcCuw-avuWy4vwxeF5z08nNcb0q4s5TyJzJbQWqiKAkMKaYaOGNZndpJo0ZVvaCEQ6uXawmx3GMzo8dBWlcmppRXvxJ31zY8sm1VrZd26CgbZ2pSOBO1v0UEVTG23gg", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117842128575035925188\">Alice .H</a>"] }
        ],
        summary: "높은 평점과 만족도 높은 마사지 서비스를 제공하는 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["전문적인 마사지 서비스", "친절하고 세심한 직원"],
        tips: ["발 마사지부터 전신 마사지까지 단계별 이용 가능", "바쁜 관광 일정 후 휴식 장소로 추천"],
        hours: "월요일: 오후 1:00~9:00; 화요일: 오후 1:00~9:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒542-0072 Osaka, Chuo Ward, Kōzu, 3-chōme−2−３０ ヴァンデュール日本橋ＣｉｔｙＬｉｆｅⅠ ２０１", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.wanspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9134131122973555503", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=WAN+SPA+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "메구리 스파 앤 웰니스 인터컨티넨탈 오사카": {
        photos: [],
        placeId: "ChIJnY1ICk3nAGARxWrCWJaCioA",
        placePhotos: [
            { photoReference: "AWCwydiBhMUBrh0Kp4qMWlNHM_YQGLe73nZIOqYIrZGTcXuin8XnNR8eZnA_QRIic5h3WviO3qVpNLd3XBTiWFOQOnkeSSlTwKanCuW50FS4b19X9bbrSyO8lTAVF3Sf-FjRkuxhKH71kFlugnDcqIHFomrlnZ7TA0WfPfJoZv21rc-km5TJS_oixbmiaZOCj5nxziVQe_Hqe08O7aswWqRdQxBn_479zPRySIhkZQ3xvJpFMmLHjORWxaiXZJJWVCUgqdg_yCFtqkDKSCqiEPWH8d2pfLwwIo5NAIeKH0X4kIt8FrIul2rbkvFhxoeBN-ligvh2sh4uW2YiW_ABObATPXUYv0dYSaeEDBpnXo33tZHpU_xnyC73GshmDtZC8tlrCcylCe9-lZu6Y-WQhKuT9831UQZyRg6k0gQ_8S9_ySE", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104096653344769171497\">MEGURI SPA &amp; WELLNESS | インターコンチネンタルホテル大阪</a>"] },
            { photoReference: "AWCwydhKLpHVFlH3PtOUDDef3XWGhyaUJ3DCCdOWgt8BTNKbr8ATIMSMD4xnSpFAeUPeVBzVw8sgxan5PhEktfwgCw6QKe7A3_WFCPu3zcQq36cw59gPay9LoszWbrcKrLOHczjNcOVHfEn5T42XZfEDIO_oOSj8uKGmScLP0a4hE40M-9aTMXZVor8vDWo4gfLY92YuCADbRtCc71aUupjV-fWG2eVh6C7qG8isBvyhEaOsemQIWoYLA-b6nl1MAm838xZkA90ZKWP-3QooOyHy75eSZq-bEpAF6aGuKxz5wYIOytUAB2pr7jOp5eZoCml_0qYITF2HiGpw54pFjrc-fwpJSLJc-1hC50eyoQEcgsOI_w1mqCC6q6cHInwoQLIKsAx3NlTM0ykdVZRYSsKeUds007SwBYe0_67qM3DPbkRcYg", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104096653344769171497\">MEGURI SPA &amp; WELLNESS | インターコンチネンタルホテル大阪</a>"] },
            { photoReference: "AWCwydhcaYaH5pcPJdNrnX-zN-e9RbRVRUoXZGONN8imlpwDp6hUBJI1WZWKjglmyU0QmfAtyupmReoddiyob4BjnSIPRSH-Kbk_Iw-NXqcGm7xugfwkP0DXxkCK4m5HsxYwQvMUWlzpwYnjFxAy-heRnOTFG8FuDrYpuVJkejZOlb1kC9wD40erHri9rpyIs96QF8ZwCRugEEtUBi3-UAbLyrfWR6zJHd94MWqoLiRkBc3FCsu4w62Q9JzqXElVqBinX0Zqi6jnb82RRApFhKfdc6Gjnuyv5wj_zJwv-j4tCaqPsRKSoWKC6Q0DufGc145hsoSOyFR6Es1bEwdNNTgyu8hgcwrfC1mc6PvFG6a1SlnuWHoBqVS5QDt6PKKmbKDxcMcZO8rYAKiKo8eAYdqiaEtQ9umCIxxrh_sXA8YsUAjLKU1-Z__zScsFqaMqxw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102681198264478157174\">天野一</a>"] },
            { photoReference: "AWCwydgDm74ZjboP6H1VveyBHMRY3PJC7CMDu1T4rSZwgWqL56wZir7NaO23u5-WvMAlx74TtFidaGrN4mCcRIMmsaPnjujqoRULc_P32btqPRBBHK6QYv4auCTlizrBRHrTQimqPFPCFbiulvxdqzgAQXIjyQAgG2vyzm-nyLg8cF3mUM9Ln08cewtqcqnBGDixPRKwIir8WS12P-KrDqiF3_CCiyhBhKHDsuQDu7IrAjwMK3xAddpiK7SFkyD196B6u9PqzauMhJuKggMzstnk-kF_N8ayT8RqyUVboqnjcHK-3_QTgJRD63XRiCRn6OgJcSyr9Syt5Xfr_UoNFuLdQkwT8YuCZyh78jfpagaSg6HQzJEFCaJZegzE-oHVqm8LhEP828cNbUTnJIq-00G-MNLTZIeNskT10j0hIcTfs32zr_IaPwJQaf0DCrgmKaGe", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102681198264478157174\">天野一</a>"] },
            { photoReference: "AWCwydiWwydYKNMrKSZ1GNnAnPvwzVxWzVPE_KK5rqRXUeBB8lqs57vGloexWSdkyXzm0S0Gc092F7LaIc-3lsOm4PqTk10FudLXRfT4IU9gGQvZC_nvBG7bvEm-18rsVvr0_tvEmX1bqmZ3U348dKl7Sr-p2iblq8mfiMbVKIwVVy6Tn-H1WgEO0N6EX6mb8-rAMY2ewxH2d-GDS9IOe7QOazkH2Q6xrUBeQU3iRsfCiYIDUUgxwnSY2M_1ZMEIHMwRm7GnwzyXqGyzK7T7_1WTgr3iffI-k9IzfoeGVxacSRNtp8kaEZsfB_M7rmNkMzXKUOIU_peOUmjq4CG4-p1s9P96IgbHINylIlbAd0TeyqeUFa3-Ap8ECkc8bfPscEl_mC9bAIO1VAsFrJzje10Lpevkrs3GsVtmwlv2IkFTuvVnK5QKsZ89qPVCtx29ry-s", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102681198264478157174\">天野一</a>"] }
        ],
        summary: "숙련된 테라피스트의 세심한 케어로 깊은 휴식을 선사하는 프리미엄 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["고급 호텔 내 위치", "숙련된 테라피스트의 전문적인 케어"],
        tips: ["오행 마사지나 일본식 페이셜 프로그램을 추천합니다", "심부 압력 마사지도 만족도가 높습니다"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒530-0011 Osaka, Kita Ward, Ōfukachō, 3−６０ グランフロント大阪北館タワーC 4階 MEGURI SPA & WELLNESS", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://megurispa.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9262359165886687941", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MEGURI+SPA+%26+WELLNESS+%7C+%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%B3%E3%83%81%E3%83%8D%E3%83%B3%E3%82%BF%E3%83%AB%E3%83%9B%E3%83%86%E3%83%AB%E5%A4%A7%E9%98%AA+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "소라니와온천": {
        photos: [],
        placeId: "ChIJh2z_4A3nAGARROaafpvGXBQ",
        placePhotos: [
            { photoReference: "AWCwydjSJCiGJl4pkL0UI7utiHO_kY9UWFy7NtNXgP4aU2CZ_ge7AMlJ8Kh8bxtTuToD9acQ0-yC7h3E8Vr_Td9XTQIqj75Yr46d7PB4uKeURnYePAgqaSrwGDoLeoBbh4M1K6aj0SJcRruaTYJVc639T0z-oyshvjSpWq4UWuYgW5gUxomxnfkyeb50inHAC-wARvFMABR3GAAvwI6unHBPYfhy9AfOrFdm7qASn2v2b4Tjr9UuUTlA08o-uLubUQiwBFg562OUXvq0Eo8MDxUYGU0C91lOjZYlrfKYON2utiInxZRlqq2xgZRR7hkFa66mgDnhp94H35tN3GS1NM2qMUqOjM8IGXq5GIAXl8c2qiPZVtb1hq8FZJjopxhngkSIhvi1YAqm_MpxCpgmN1Aj7EAmD9fGht2vt2ZvZidAuc4dUxCH", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101632060824017257983\">空庭温泉 OSAKA BAY TOWER</a>"] },
            { photoReference: "AWCwydjhtrWki8zbvM3gOjGKIutw1wxfsqJ-HaOrlZPmU07Stt9wAaLkMXykAd325jUGJa-Ml8samFSIDCyDmqPH_q-WEBG7nhqRqOfsVi5BZ4AabqUvGs5uILimRsMbaQxVcIaLxKjcQ-Yfk2rh5zhhJuJTpHZY0_eC9w5wqiH9RGehguYTeZ6SeCgXQe2AHuZSIOpa9OaNsW7yYA-aiFjwRt8n34zU5U5zDs-7GZhEhkOENLBCPNFJUqfF6U24rkACk8rV0BWEI4b1sCcYCrb9Bg8VwoxH8Tu2Q3q3RFJFpU3MC2m5x7fq577AZohD6y9-rMiCZmjTTpjJVsgFbsE6__c3t1jjLXaeCqGGgIa4wISDHJnxhSb7xbDfhM9ZbIfUr4gcqQyVfnVtIUzLqo6wdtru2hTyJuLbykSnn7KOOJ463i0y", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101632060824017257983\">空庭温泉 OSAKA BAY TOWER</a>"] },
            { photoReference: "AWCwydjc70GAOYVu-4CyoVS7JNWRnNm3rziqaErmo7s6dg0YRrY6G_8nYdFBl2qN4aNvHogMLbs-Zh4OlL2UKdNNdfTQB22fVFkEkXapSQq_ddzf2KRA0xGQlEsFx5B3EXtYyx3Uu_lBnDLc5bjXjfW8d1KZidy-GReQXz04GeaD-EsVfeJohsIjryBVCBYZuKkz3eX3ZqpPZXxPq4xbx1nWMifnGW8W2oDpQJA9xybQEbMZQRoATgaquCL4eZlUoRMq_09NS9iF4FDFncRRdximdHo53noIAP2PovcxXBhEDDt5kBHzQCIj-WZiawkrstI4L-WCcUPZBWzjZOcpgBJ3D1v1Rspo4zsXJjcoffCClkqdoXmzabOOgxmVASGstEkLu8VVK8Ms6DbPurjeNz_FyMFL9YkH6X04bqtxw-Bli_3ndV53jRam2ZAaXCMb1w", width: 945, height: 413, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115921096676873189430\">とわ</a>"] },
            { photoReference: "AWCwydgtd4pBAX-aXZ8TAz8qVJtDLpDNSycPGT73YEchUJtDHqtb73v6BCSup6f7_gkyMhA0iQUiu5CQ4vGtZrAOuxp2pSiJ0yZA8BlAMBAiDU-hlx9kBRoaWwOv6uKcNZuHkDbfRoJKPSZynfRUGETS7mOtLruuzcBuw2GehJOYtBbQbu6EN7cEV-PGxpHSjwWFqcdJ4XB-bhDDqGILoNXtNS2MP7g9VJf2vBTjV2acMlkqgoj2_-p-gq6M2r4vCsAFL64SsBZ84cKfR98u1-6Hdw1ailT-bL945O5UuQb87vG-FKHHMc9oxwwJb8EmZF0OqKkURQZ0_YOtP6CIZzFWjTW3m6jPZyV358uRUyCQhrxY9NjRKv6P7AuzvXPl9D_Aeu4Ez-gwxsdAhdMoZZUa8a_dj_a8nruPactaQ8rZUdK945gP", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100578446296688899129\">ysj.0704</a>"] },
            { photoReference: "AWCwydjifqfi4zjUEe-_NwNaWqXUMFNRQg_3Su2JT1uyLWbqBsnKxWxj9MK6yJxtMHu_ry3OghMgHlvvmUhvXvH2d9Dodf53xyQuD0RmZOxospHZruag9C2juuJ9Hre-nWjaMNHlDKjkgDXBIxZ4M-QpHikgTiOJrdbikEbC1RCuj0fA58d6m306o4c1DK7ISFSST4wGMy8mIQuhVXb9FeYj-2Vl7MzdeciLs3z4Jqrwv3VTNyqXrB4F0JGbIIA8KrFGyLrigH0SMjUc1pwqMMFOcxdf6evV1vyG6Ia066rhSW1niij9Mgl1nig9-frVsq7fr7iYySAWdzpmu48BQ3WkyC-xMQMSmSdR43z-L5In5kURfM20ThlOqkGYZDY0nk58_mnlm-uGyYNGXRsxC4R-4CiPxE45G90bj1me4UuhshV_-ZWxeBVGKcikl5qJUVAY", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103218687911695172886\">染Tube</a>"] }
        ],
        summary: "높은 인지도를 보유한 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["많은 리뷰 수", "대중적인 인지도"],
        tips: ["방문 전 운영 시간을 확인하세요"],
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-chōme-2-3 Benten, Minato Ward, Osaka, 552-0007 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.solaniwa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1467265949762250308", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EB%9D%BC%EB%8B%88%EC%99%80%EC%98%A8%EC%B2%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 데이 스파": {
        photos: [],
        placeId: "ChIJnXCh3d_mAGARjGTmhZG_v6Y",
        placePhotos: [
            { photoReference: "AWCwydg2sFWK7UjdVfHZ8KtrTgJdV51Wc4zouujAOOz-tVuPGcT_TnhBgYRazUqhGJTUxgaGp2y4tVp4dI3zTUTQagcgObOUuXS-FsSNKYMKNbYL2SclPFz8ZbrKmoAsOTYIQ94XI3NnRuh18t5iL6lAUo0rBffMcaZd9oh0wIX9Nba0Q4QewAHp2zhuqpgWy42bxctEG8ZwQ7LbZW22-_xlr6OIZtkRNsaL3SzuJ8chBdEJYTYGeexFuWeUanc8sFJNSTtgS9vqfVvh4zPfRWHLyHslvcFoMfPiBGoG8uO1S2MnlnGT6P4kQTIXMAWQgTmqWex0i8kwrUPilxniYyolLyEFONxNfql2S7iwcqI3jS5gqwFfJ-BTHL3cYITgrqDQdQg5OEWHX7Gzw3XH2U7jVhV9hoxIrmx_JN0XkrDOGSLUfvZEWbFQWyjxUzLiqsKS", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107122864567552229215\">The Day Spa大阪店</a>"] },
            { photoReference: "AWCwydgavebML8Q6tTHj4cE3WuZUUzMTHMql7YBcAUi25a7UYX0OX3cvvjaALtEZDq5jThwJ6Goh1ZUD6aP_eJTWQRDItjpp4L2RnmBe0AILLg_RR_uv_S1E4qREz7Ix8S_11NkFl3xRLWe3JmgP-KN_HUv04WReTO7wRuxqJxlYh7fMHnct2oZJNpd-hv--5yv9QTmCkJCkFZwPA2lwbvf6f5V2PgI6LrcrL31JaFWCW1S-NLp9QG87d_h-hI2oN_F1GEZ7tYSx98qoOsHdy4yPZBurmPBHOKAKaKRBKkLf0250PqyVm0d3Og-lUhCxC3nZzJmwwUt4vyRonDV8KdD9l4tXAwfcJsst0dBnZChqYZvKBlWYIsvN6TtKpG26Idzalev9K6NuBS00ialWelPUhYQAE-F2dHiRHxPnvOZk5x73_3Kv2ZaZ1Mz68Qr5_xzc", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107122864567552229215\">The Day Spa大阪店</a>"] },
            { photoReference: "AWCwydhZTIR4aGStNmoBM705Kx6FKndWTguGpVEOReq33HooYQv5raZG2AE49HCLbtbo8GJGF6KvFbVSYBbYfDEtS8--hfrPmyo5l4Vt0D9gsdWTvYrWseBFI1JZadtAxTr3JukObnLH13QfG01ilNpBGgrZOXm1elP2_BJPEryCl8HHACALsyG63rmaiNdyEBu6_UwiGwgxuTk_3W4FHG4kfxjZQ4EVUZR7-2UnVd9TbSVmLQZI7bTC5NeBbgkS6UPr6PqWX8CiKU3tF3AFM7_2idxHueUUHbVO6qYdmtxrxmzDDFlRDidZv3qQoSzi6hbONvZZzCAU3g_UjNDgb_8zErCIXHMVbKHOLfVgrZG-L0N4r8KMe9D4pqtgDRF-HWVfhDRyBpqq8YK3VGG9ZF0dvdTLKt6NSIWtExnPaKdvSo5ghzC6_uw2ShqhsKujhDz0", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107122864567552229215\">The Day Spa大阪店</a>"] },
            { photoReference: "AWCwydiwHhvNfDV0j78wXs2i_xxkfb-dbbtaQYPOhNDekfBgGiaQXym7IIwDYLRD5P9AQyyzqyfm-P_imdYoZQ3l6CcrtvP5mpMdzvft-xuCO_oBD6KXHmwcO3Qci58JVt9CJS3LxM3v4nFzuWLQQ5Qzk_2I7Slwh-vy1N3G1Y0HCCMc4_jVifj37S4IzRLPc5RgrCnMzKZWQRwETP64q5YpWb2UP52J8UL52pLbueNTeiTPjOWM0Esgxf0QJA0oYECgPqDUijqibEHLTNCwVSlIce2kD0mJUYZIlx1RpC9UJ8-Js4si24qHJTZZU8fML317XY1Ro5WuQHI1OOrfG9LU92h_GN1DHlF2SQW39U1xufT2jZQN_LLNBUxjysK9GkaxMVhma8jRT7j4uFhdmZmK4ZXBTS4Ob8aHwLyoYQo1NznF8kQ", width: 4500, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107122864567552229215\">The Day Spa大阪店</a>"] },
            { photoReference: "AWCwydjhvKmq5b8MA1tlxias5M5xrX1zRbemN_gA_w_zTTajyAIcX_lZGn34RK9uYiNO3sSzoSEvP3vOvoL6f9xTKUbZGM57POVTUCDua5bsQI0JRBH0TeJbztELnBNVnF2f8NiSAlbGgATlA_F7aLMPp0SQPQmU_r7bAdVLoiphedbK7HgEFIh6SXx0DZvmLSk-Dikcm5IYTSigwGPSPv184WFas4RCaGGvEfjo1WCwDvO3PjODMkePczztQ8Fdhb5SzqqYi5wIVFI5aobGQk8MnrM9QcTaJt8EepyurfIeT84lRmWoMci_KrfPthP5YkENhpPds-IL855RO6fs7kO0zb4t5MMsELfKajznCRje5G1omuVJd6IheaF8mOCDHFdgn26944K662lz68rKzR2VzecKl0V9Jlan1RzW2KM8xIMELt5qw144h5W6iNPWAl56", width: 3472, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111564961161556808776\">Hazuki Valles Vilchez</a>"] }
        ],
        summary: "여행의 피로를 풀기에 완벽한 고품격 스파",
        updatedAt: "2026-08-16",
        highlights: ["족탕과 함께 시작되는 힐링", "심신을 정돈하는 마사지 테크닉", "전문적인 페이셜 케어"],
        tips: ["여행 중 쌓인 피로와 통증 해소에 추천", "피부 타입에 맞는 맞춤형 제품 상담 가능"],
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒541-0046 Osaka, Chuo Ward, Hiranomachi, 1-chōme−8−１４ 北浜TDSビルヂング2F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.thedayspa.jp/location/tds-osaka/?utm_source=google&utm_medium=organic&utm_campaign=gbp-osaka", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12015532962585404556", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Day+Spa+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "헤드 스파 쿠 오사카 우메다": {
        photos: [],
        placeId: "ChIJ5SvRhrnnAGAR_7N8X1kjFUk",
        placePhotos: [
            { photoReference: "AWCwydi2L4b91K8St9TIPjU60L2flnUL01eeVpB1xf0t4BmyBZWCrsO_XUJxEMrEaJ_wFMMMmc7K-yJ8SjXyzM13S1mia5IDybJmsTB-ORabE7_ckAYiWqi87yJ-WULnF42XS20SPiI2VmvUzB3_F0o6y1S1_qirQ072t9uNOYdhVRwUc7HYiYeYtNundGRL_1jPagOEpvSbtRI0IOIgaMI3D1oipCQmi9bJkDjDzie0gC3s2gDO1SsD7L5rbY9p8IukbYKMPtR29TPZJMDa8eeD0f1tenrgalmGQf3c1kG4JI-vvYKwu246ypOg8Y4YCEekP94GBJoDBjoI-W56crIPiOQE6vzKUYnqfqypu--bC24-PkeI3vcs-sQ-eK1VttCzAa7EFMrPZOyaeRpMFFOsX0fY9fxMpSeyNxE0arsk0r8KTHgTkJS-yCcSddg36jXT", width: 2544, height: 1430, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104923498983630438731\">HEAD SPA Kuu 大阪梅田店</a>"] },
            { photoReference: "AWCwydhgzk5B6X8aepMuSbd-xbQV2zR54xyZ3kZEI2eTBAGESzt3CIotiImHxQDReHNrYCmnwjeWuO_fl709sF8ZMcrn7j4qhpIpL8JrLLKfZM8HMSzQSA5dKoR0EGmN__KefA27B4lWH1LxYRUxegkdwzZjar90eAucC9nJQZg54SrfAxFYJOFiy5mUqZSX_J9QN-xoQGFUxFn8DRLz01UBusVI2Djb7nF4irqRhYoLjFYj33ASHS-8uOLKFlT35qnIdPxSwdHf7BVC-OzaNVoR7uUBauAFyMxf4a_2w8UQmcyScWyRt9397oSmm8pmhhUntaVf9j_iu5MUQ2yNQZLsPpCZ6ZQ9eGRDr66uXratH4rxA7cCnE32Ai_Yjx0dVA7ineCAi2OpUPeB1GSsMT-4QPfDrAnRVZ0Ga18qx37OR5Pes6zeobJfIX8MQBXqag", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111481139114524872311\">Laura Smith</a>"] },
            { photoReference: "AWCwydgY10Zb3SyEyqkZdVep8qN3ca-dphpu1-iot6zdSXtcnb-y9KIdlXCyuhSdZkbB4CXB-MU7GTikYnvsccoxlVrXnkMt1nEf-tL5p6i1ec3YZ8Ms4mLuwxCKg6vTF2I1yHgRrnIZKEwY0Xcd2i39Ps3NF__DOAdghr1fPC-eEgKsIyxSvUMSSIP_q9L9Vo5L1fGrITaIqcCj0zMm2Melq5dhZuTSJXna1Myk_XtIaP6Egx2-_H77hLtNUa7nZixBRbM0SGZX_3TW7CYFHhcmSFMO_29ibhoDBUN8U7d5nmc4q8JrJ9hYZelL3TFFmOe43i4RHSkDTkcnwevexuu5mR3hGC6pLLChGzvb5b08-VNByJwTnzi0SrSDSJ0fxsIXLWh9L_xyckA_G6N3Z4W4hRhz-De1UFFRkY8CoghEDEfOJA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114396046207959042310\">Aydee Ng</a>"] },
            { photoReference: "AWCwydgPAUaNKOuon7TV3ehPlu4E42uu3XZgIfRqTlviafknTD6tHy7bFkq_pZq5KeErc_qzlQKMyCfdDVzc66_e8i1y5MINNCZyyCdzku2tb-ArAoqO7BTD99SXACtexDEwUEz4LnNHjWiGlTOq8LebBKIAMfVeQcmzdqSwhgpiAEObs8exfF5lej_gGdq-VrWesrSS9Pk1jFUYd42K2uFc6fQ4a5CMv2bXHPugoELc8zVFyYRlvlX3GhXpCE4p8bFNDpeDkS-O5UoGHHMbcaiCA8HOtXp703-XD5aySyXVud4QaiCCUyMEy6RpWq3PZDaRLQg-iUY4ct_4qilFTWgfJVjSfxPhHfwC9jq7CLcdC2POT9p9176Qju4UNW857YJrb4z51b44vsLXY3IMnoEReD3qKW2Un29wFtoA_j6s5fdH9w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104339720709771874474\">A Hawaiian Foodie</a>"] },
            { photoReference: "AWCwydg3gesBSyAbA4YKSXXofP9VZObDykJBAX6BSIVgGXN1IV4ylhXuJUN2FPSVga4zyTGbSFAJPjx-8ib-BAzEtJiZkoIHN9jQ2v2VxMsJVrpeJ7bcGi_XGk07szmN7Smryr3M9VUJyOiMoHKVspUF2m1CW_p5mSCp-mH4b-x0PvBWtBiRfE3QRUAn62H7Ft_S6AKDRK9ycu1ghcY0jtLpKVtzKR3FuWUrHZKXtL1y2Sz8UY41ddk6TPkk-cxo-RlUfr5lcejmKWCpXJFtss6doq6A3QJoWnl0AJc0vbmlaVFT8fOZTlAH-XtjHoyrAuUz1Z4jBmQ_k6An-wBeozzTQ39coL1PLtPkrH_b8kpr7wpMQawCMGXLQDrkV5Hz_514toqauf6-rnYUb2QQtifaZTSqan9-FomJSFXh8qkdFgUCvFFzoLut2V6TBNCS4A", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106446298648878018108\">A J</a>"] }
        ],
        summary: "삶을 변화시킬 만큼 놀랍고 특별한 경험을 선사하는 프리미엄 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["인생 최고의 경험으로 꼽히는 특별한 서비스", "전문적이고 친절한 직원들의 케어", "고급스럽고 편안한 분위기"],
        tips: ["방문 전 예약 여부를 확인하여 여유롭게 이용하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒530-0012 Osaka, Kita Ward, Shibata, 1-chōme−1−２６ Matsumoto Bldg., 8F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://osakaumeda.spa-kuu.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5266154206040732671", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=HEAD+SPA+Kuu+Osaka+Umeda+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "무통 스파 오사카 하이퍼나이프": {
        photos: [],
        placeId: "ChIJ9SouhZTmAGARm704fGVR390",
        placePhotos: [
            { photoReference: "AWCwydj1iaDBmSmrIhyHnd1x-U7a53SUafHx0cd0XdOCPsISLcNNJ_7FzGALK1uD-tZ6B07IgrncHdb4TiJlOydNa3F--X6muCAWB9RX9cI6Qad4DTlG96LvPAcoWCNAgaWhxlrZF3qMQZUfii8SqBKipKwoHkpyct4RTk7tUa9_9-3tC0qqK9yspljd6xxA4TeOIqcj6BfgoNQkj2fFV2fPupEPaRVWmq9Q-_BeolefUr5qXzWjBRVglHayOif0x9muQF3Qca1-ZgOAuwGldjWQvBmGaR8gwsthvP68WwhRzBX00G52zGvhCcoh_vIcdvjxCFL0rfC2ukdhnU3-CSn-rQaWKaP7lZeN1FINz60cvKUNcz9aCzpgt0nbGBxkqun4KSSN-GkFVKPg16zrEowBBlvg0aQ445di0dgCec5ppETyLg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106599219909346657291\">thencome</a>"] },
            { photoReference: "AWCwydgjgFn_nQjEM6R6-sGBKhrRuW16Axw6jwh1Jg3x6RCmSpuHka5rroKO67lUiC0OWUn9QciDXhDCwfDU9H69J39pmrKSBHO_i7S7he9Wh3ckmzgjl7qDvZ_y7aG8ZKzow3sRKu10vwHSuV2Jy7ZywKGsKoLWisU4JLNd4qys5Lq2g8lFxUpIxQu78f2nVetoSDJ2RTZ4amEOSsLIUqb-OaTlByv4jP-k3hvkTFTB4Pu3I1tSMcqexN6KqJ_jOEU9EFP5lMfOB3y4G9zPEDXXBpmxA5zEcddEEpOHVYoDRmXeJPWs-3UgModgqBEzi0kbmOGJ-egDnpQ8Ehct97pZwLb0wpcTsdEK8kSyrgR94tbIQuWQkGF5w-81H6HUMmOUfDRuvrvfIIAE50YaNCCYi76uMVjDj5zcO2AzKl5M0iej84E", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110154389949154559597\">Spring Lee</a>"] },
            { photoReference: "AWCwydh8yiA8dNBsF9SfBE8a2Wm1uxaQ2p_QGd3Ubqfd0yRjKgnOLOP9fJS0uZ9uIPgp7WZ-2uKRm7pWdBzQUDDnScQK8-kCrYVAZ8PbIUA5rN307yDYneUfup1aMz7yaEOng2hHI00H7oShC6UdudzOX1mt2XL1mY6UXbN8QIptMStfH2i2pVQdYjuiQNaegmXJFxce8gRqnqzY647DOJuEGV1ZXI2ZFvc9OeUz5Xz7gN8cdgDzD47gbrjLg3ejI357dEOpqfJBQuR7wjx7qCFWYBZIAwZh9Rv5QDeXvGOgZMu3wmhpImlVMX6Y4f3Dl70Q_cm2SWmReYwiw_Jdz3DwX1wNF_IgMWIgL7mHbipN2Zn1FeDIatgMGjuazDhlQ07dSWycwus0pTolIZlrnJuWSS5eZeBRJyyGif5ZbpOhgQJGhT8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111229689922432434029\">Jasonl2110</a>"] },
            { photoReference: "AWCwydi02jMujKGUJ2PZwtIynrDpUz7QCvNLHa9MWgh6UQf_adi4ETpP636UOnVALuOhn37jMBsmGIosE0Yz8pxcJC3BcoGZ2eAXDJEF6vJxN0tuJAJWkKdcV8lFApY360QDX0RsEhF7K8hCf1qWJtKqx0t1gZVfWH56TLrmERYaohd9kYusy3DbYPUZxfAXu9HJHxSpSKzjMP3uwu8JA1mN811SU3YwjhqFMtJNPwdg9UZIwYwR3kgP4eVkPoIyur45zCcVVC1gyReIZe2jX6k3fYmW0XFjE3SLSQEkEfK2o7e_I_NwsHm6zusuAvNFS7XChoE0GCLBVsqNpSXXQVAVGx18GfQCJQXSJCuIgoj6bBc0veU9VTvZi5rLOroBXfmKw2kBebvxn89QlXo-LH4naUlN9yIHBOW0xfXvRUYriVhYslIs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112665031657494187523\">潘銘峰</a>"] },
            { photoReference: "AWCwydgEHb89dnQ7gJ34ZWSsWmQ6YWx7L-c_7oMmWHSI01hWhcoVbkFsqFrKw7g2HcN6JxfdXfPLEvlwUyNdCpTlDVlyaWcwA02e-0uwVfDlk-qCSb7cBrxj43w9CTOdV5g3P3jQThioMWTQZP9CQoNXrsaA1gb3nvvE6kSHtVJHu8Vrzla5O-qQohlQEyjJzUqm0gexLN7mhS-PwOZpB9nRnn8JS5kPFgVYKmEy3dHFX91GeE-cgWX2WpoiaiAD1nW4niM394zu47AlLGPcmXEnraOPzzY3kykZnibHHXRFpjXEOh4D0ct7u3P9u3SaHapYTAZpKqQy5C1zUTAflnEFlww7lGkgF-P21slnfn59ebqYMJ5J_9GlcifBNv2sfcdjHrg95Atq9YnZORLOfJUEKPvU3M5FVwKYbWJXWbKH2brAPw", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103184955054100990800\">Andrew Liu</a>"] }
        ],
        summary: "전문적인 스태프의 대응과 뛰어난 시술로 높은 만족도를 제공하는 릴렉싱 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["고급스러운 매장 공간", "수준 높은 스태프 서비스", "강력하고 시원한 시술"],
        tips: ["아로마 마사지 입문자에게도 추천합니다", "우천 시 무료 우산 대여 서비스 이용 가능"],
        hours: "월요일: 오전 11:00 ~ 오전 12:30; 화요일: 오전 11:00 ~ 오전 12:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒530-0027 Osaka, Kita Ward, Dōyamachō, 17−８ 堂山ビル", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.spa-mouton.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15987586698506190235", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MOUTON+SPA+%E5%A4%A7%E9%98%AA+%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%8A%E3%82%A4%E3%83%95+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "뉴 재팬 우메다": {
        photos: [],
        placeId: "ChIJrwfx1JTmAGARp37L5Xv9-yA",
        placePhotos: [
            { photoReference: "AWCwydg9kZ4lja07O7eZ79AOx1x_k89SgDtrKo_G4fWB8iKpicAfDXO2FmJFzIbnPEgNGS-pLpX-qaDpQ5iiHPDtZ3giDLMLStOMDTd95M_g3oD9PxSO8W1iW_3FTy3VknccdHNWZyMg7r6lCwplzFge-BUArT6J_qa-HcgsQeFlGYHv_NtpVCS5k6mN7Dd46pSJoWi7WN79oeToMOxbkey2l7i6--tvIrt2yTF9FftfLeYOv7hvo-P-50g2dKSU2Ss69SYcH5EDcJPfGBkpK850q--zDcQXlhVtGRoO1q598qyYdWFcNSFMGCgBnH2uyoPsYoGG6kFRqXM5zi5BCbVMAbv1IQmhJcVIGCY-6MlYDu-rRGHOOdICPLEOHl_04VTNPv2OCYQ2mHEiViWWLCq0TJ_t4ij648w165ZoKfInO_hTgGJ_KkFkwclytAYuSHVG", width: 1920, height: 2881, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116503898721591970459\">NEW JAPAN / CAPSULE INN OSAKA</a>"] },
            { photoReference: "AWCwydjgAjO0bztaD1TQuZ6zxAJR4-HMJsPQOkHqf_IxJ9ukj5_6eGuJa79Ek-R8B2snhFlOugdzVEykIUne6bdmSyCHVhSWw7U63Rp8cFsb8TpiQvXMs39xfStbM2UqRnKTlxXQG6q5x9pBLElhNxK9SKeEC8Uy3lnWmdFAQn_XVp_N2sTnuPil60Hjv4l-gq81SplQY36ttgZ2FDQT6MygUnaHHWScPBMMa0TIfOZPPIekWJ4VQ63AvSehmckaSecambJb2gmkoGy_TSDvcsfqmGbMh48LG_BstCrSkctEVGCGsw_9zioAsmNv0G9l_e-rODml_lKOqOyTc8aRRaZykqXgKLXytG4rm9V4N1upPK29qJUfhlOZV5ocmKcJZks5jPg4NuesdoRlNFjZ191ayzMhQMjCyySeonX3nINUQrk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104441928982649082358\">柴田京一朗</a>"] },
            { photoReference: "AWCwydijJmHOMDwH3GvHgLhXzP-8lPYCf0m6ASFO0nmGQ9pFh6gaJ_T5S1k-ly4OmDeBJKlRe35XCensSzTpZWjXJb6jc5lI0BKMT-yEDUO45Na5efepNzqunfhCr8JS90wQV1U7bik6qnDo1QJpGRKRgK2LfAWrXgBPoLN7TdfLPCEdWTtUgoWm4_mpL1quzf4dZilKajb1z6rUfA9kk3h34CDbiePZZ0lVPBh1YYovzeJTsSx7bATEFPaAqEJErLMJsLrPJ2lXHoboutaGMAcTF-n5c45TEQVn0wtmnmfRuhY6STXQYr-WQObgEEuJtYs8Nd6QZEHmzpi7aorUpyGdH9DMCG94xTcWhHIhwXoG15aNlrdbfTqxIK89IVZzNt0LOUPtbcpRFdMcbzuRuEzQGjnnJ9btZuxYjkmWT1pioDsgjZNjgMZg1xAHUd51pcCC", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116503898721591970459\">NEW JAPAN / CAPSULE INN OSAKA</a>"] },
            { photoReference: "AWCwydhOV0AlZyib0BV1-KkmOJGE0NnpzrZJimiJCIT9_mZeJwFknJ-eB5NqkY4_3Sd-Q8p8rfym6nZOBXERY-E19KbH9Ucy2Io8OlePVNtuUCTuuDP_LvVakD-hrPhw-nIBraBDM-QN_fG1qh28kStR5e-xeboSQb5S-_dSdRfK9X76ZgHvzwzLUa1sExMAAjHwWaSor07yMyWUpliJJG0WWhvlVHzWgOGxfXt5jIbEmkvfrCL9YG4cDM3--kH4ZB7XF_RaGTR1hmO2elFOcglqJTi5HhSO-R82R98UaA3LP1YWZXNOWyR8Hn-JgHOA0mV_W5ffWLkRXLqN4h0mu_QIBOqEaEFArxM5IarEEbCCJ5QIUCciDNAF-dyPBdQ6OWuCWPuiA3154oigAoUZUK_Q4P3pGWu-21dj41Xay6T2IocZMQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103147340378067183180\">Mountain norik</a>"] },
            { photoReference: "AWCwydjo-Di3h5BiPCAkLTZda1byNBrYhkknUuzGqZ2XQg4-GFaGgRGln9N0stlXSigqzDN-Gbj8FYk13IzUTEYDW3pfrNcLj8wmPCvYZejD7FXAgCEmWNZepSqUvPkYZ9fRd6cJIIDdQsneOhLmuDZlM-auXevOHqIitU_VAjOfQ-3kMlAhcJV7hn1IrWMyD85u1Wa7kaqIA28iFsc1uTvGu-Glh_H8Nw70XCe-Yuc5wQeLddHKP7t3vlrBcBJiIcQt1zifW8knUdgTvx4Sc38LEGJfw41zsNtJq1rGdPapTDdacgC2Ok5ya7OEwEisCQThBkUMcGjaiw8ck8IHIqrkyNIdBZAM7M9gPkayZK5aak2AOOxhI6MYwSu8Xyw5jxuANd2d0CiWJwFbRpJsZlwo-3koZ3AR9l6xk1Rr0Jr_XaDlpA", width: 1024, height: 815, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105218383439156775370\">koma 02</a>"] }
        ],
        summary: "전통 사우나와 수영장을 즐길 수 있는 24시간 운영 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["전통적인 사우나", "수영장 보유"],
        tips: ["24시간 영업으로 언제든 이용 가능합니다."],
        hours: "월요일: 오전 12:00~8:00, 오후 12:00 ~ 오전 12:00; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "9-5 Dōyamachō, Kita Ward, Osaka, 530-0027 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.umedasauna-newjapan.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2376771936946192039", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4+%EC%9E%AC%ED%8C%AC+%EC%9A%B0%EB%A9%94%EB%8B%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "천연온천 나니와노유": {
        photos: [],
        placeId: "ChIJVVVV4rrmAGARQajJLFAPlFY",
        placePhotos: [
            { photoReference: "AWCwydiy8InvfFVfH-wovbtyMxB9Fk9jsAzcqhC9K5CnIt_WNTIz8eT6IXsDQ7zcIe5p9i7DL8ENmyPTAOD5K7CAF3js1x2_NgUzaULh49vc7iUe38xPrmm_FxgDTPBx7JMt9y6hCWK7swcvtFGImFKh1c6j-6fslqD7HZ_Y_wvJhHeBwIGFmEHjZeWnPez-oPOolvM6XE49ifKJu1CTEi6eYq_GQhiX2bHPb4sNqPzdCnplwIewUvtSzGmmEQpJ9pn338EBAXIAfTjCul0edISTnBeHwfimdMqCCCKuWvCLK1eMZ81yedXCI_6JlCaIqh3S5k93KeiNyR2uJbc6bz8OAsVplnrIorOkOggb788HVkOReNzREBtmqOkOQq64KMHIEdiLK2vyxYguzXy-vYSmaCyKBpFWKJO3I02y0_lw_wbzGg", width: 600, height: 400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107087654065704023309\">Heng Eric (Erihentm)</a>"] },
            { photoReference: "AWCwydjIjkpOLruWme7Ui6f4-_fkolxfIqQdJ20R19z3sWicDB62OQixMG8q1JmEY_8CKBh85ORVKzowLW8Uh-Jbq2TpmjSwOe1tvHr_J40zNwic3395zMzyLCZ_W1MJKXtrZ00rpz0fGEXny3_5_bLEKeYprbSdFLD9_1FXXDyolwjuQBzAdSGl5FCKf3Uv0LMda-sti1hxyznLiXslobZqFempAN1wWGOEOdv08YuWcfaDJesH5ObhHShVFujcu92iYirMNe4Up3S_MUJoM24Zdb1fUeseykWnSBLcauaFZuJ0uXeSrnFdNKruX0cCxBZVLs6hBzargJvlOF7fgS-phj_gfZf-posuWdJRszPrKm9EIe9mc9oFVa1a-OLKD3IflHZigLTrhizzY0gwKrVJfBE6aAeLDGD2_MxudoXCmNlRKhut", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111470706328535099225\">Eiji Nishinari</a>"] },
            { photoReference: "AWCwydg4BRIbBEXb6VZ_n-S6USefvpdyGNQv-6lF1gB37uK1x80iJg7A9VnfAwONNg9XAtlH_Z5581SGs6k8IKqz0g9yOMvM3PIhHKbj8CCEpJiOpDwc3N5WZCvAdjZ_czq17Oka5a2l75mhRKFLq8W4WsLCF_T7eMaqk1WG_BJrxcbM08EJZ6WPra_6idCATGwerdj9DhiVwQb-yss4J_uum1ga34dLBCnDZQQcIeta00_MY0LsCqK7KKCk7ysL4Z7oKFOxc23LDHNYtNlchObo6xc69bxXhL9cclVHvRkE538DoPEzZrYI7p64McFLUAdCoQWYVTj7hPKtXCwz8MdkJp1-HbIcKOKdXnv-zJZZrs9CBhWA0HxWeO8tOUWp_gOcImpr5oGUhZ0NcsJ_ww8komvcFtSvaiRvNtmDVU4vJZ5E-bI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101075523381231576045\">きりんちゃん</a>"] },
            { photoReference: "AWCwydjjIM976nz5JXCxWKsqdkF53RFqtGIR4QNGEx7SaCKokJ1-hYjn-vl7gokVIRO1psLjsM1sVPvJXM2PCWGxmsEfA9LLA0zM-P0f8_L9ViBlieDzyAMf3wO9LKJx2cE9tFdd2HwbPel41iUzrQBHPPTzhZ5LFal5upqLMXT_qvYnJkLPjtroQecSgFCx56L1iLT35a09jm3vOwV6ovbCZ2uezYUuqfnGTmQoG-8GHheVJp8WP2DzLPaowHp-xuGqMMURS7CMCQpKg7iA8Ku7fLm6OhH5mSUvww8QJgkuMqUVbb2HI1WORNiw5lfkSk7KLR63CP3OB5JqLLdLznqEgW4F0zHVBkXUcNuEmrazf7SoGsNUZMlWXUM4BnhuHnmoPOIRDUlNEs4IfSCU3cDu59PGPYse7C484Kif9oNhwDc8NozL", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101075523381231576045\">きりんちゃん</a>"] },
            { photoReference: "AWCwydjJg2TXCP3UJzx2Sbt8Ts4N_yHH-yXRaTrbDXnKvY4D1EOOVQIexJPrR1GINmSWWz9NDd7uDqsBvHTgvh5EskoFgu_V1V_s-nPC3s5LttT7a4n7CPPcbbouMuc3fHZB5Gzi2DUGqTNQyXBloS2cOagPTDUJQys4XdrGstkmLonEVwLXgaNHAcLOA23y6vn07TdDRwf8u3-5NZTI26YO-YvoyyGxliG8sPvj5qBlzOvTff0mwZ3ZoX-KNYf2NK5QUwOmhB9iUFCU2bRgUuxK69kVLZFM0r6i0Sib3YUxOdtoxwDbXJ16RlDn-ir8RWeVV_ta7TvMikYlRw43EBHjeCpHFu14aMyb8ZGNv6BstGUPXkXIJc6h1kyf7_JLu-YBbQtQPTuDoGPFowToTiTg9o8aHwWyVYIr6QklccyVNW_lcsA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116112017637425446799\">박지훈</a>"] }
        ],
        summary: "다양한 욕조와 사우나를 갖춘 넓은 규모의 온천 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["천연 유황 온천", "야외 노천탕", "다양한 욕조 시설"],
        tips: ["여행 패스 소지 시 온천 무료 이용 가능", "나체 온천이므로 수건 지참 권장"],
        hours: "월요일: 오전 10:00 ~ 오전 1:00; 화요일: 오전 10:00 ~ 오전 1:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-chōme-7-31 Nagaranishi, Kita Ward, Osaka, 531-0061 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.naniwanoyu.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6238628220838193217", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%9C%EC%97%B0%EC%98%A8%EC%B2%9C+%EB%82%98%EB%8B%88%EC%99%80%EB%85%B8%EC%9C%A0+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "레고랜드 디스커버리센터 오사카": {
        photos: [],
        placeId: "ChIJU5PSWfPoAGAR1FoZsqOtuu0",
        placePhotos: [
            { photoReference: "AWCwydiAszabfNu_VpzSMTT8xJBjxTytuLQco1a2PzA4PnLM-G-7kCVHRU_m9Q6JRZjHzidYyXdkqM7oPTFmXMV6Yq7jr9UsQ1yQZN9nBvwGgKqw8BTx9uJVSXOG4i_Ntmm07HylFsRZSJgx8fJpIzyvlBN1kCn5wv-W_oCgi2myocxXoJtkKkV1o-9L54MYqYkWPZVqqkyQ_sK_iyes_Zr5LHl5RHd_Szh7mo6lVLx3D8lP1eSp3fGtR6dBV5mtzh7gvgjgIoGjn-BPvzN8ooss2Xw95pGOpOoynfoQWHuyfy84QsSUWSrIG1tsDHwKvuIegXR31ieBmxnIQu4uIFlLXtqMwSswUBacV8dmqmTM0mg3qPFdvOjPQdSiWj-aRMcLU72OP4q1YcQd9rivYgKyOBBpQQSfyr_EpvaLAjfH944", width: 1000, height: 666, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102111664776011818750\">LEGOLAND Discovery Center Osaka</a>"] },
            { photoReference: "AWCwydgyZN5W30_zjC0q8YhVbVLd74uB5WY-SdZ3-H0LUx0IuRlNZPVu8DBcc1l8iMAlil8h21cXnuDrpJ43RdCMA-6Ixe4D0hWs4QMY_JWQ8px9jUuzVSgNy6l4uy6qxWBdPZTQPPIDQO3kVckh0ERY0iRt02yjrUacnayHGD1quL7ppzY2W0biBUgRHPt2mGBOc9DGw6WYOFihrR45DZK38bqg1ImD03Gjb_5VGQxXvOJMwjhUk22xKXzk-kq3vvzS9VJ6MuCpLwZtJyNG77zTa1fbY2nGEBwl8h5YKq-0bLa7PYstUCQFkm-fnD9gAvY5cWui4Wk1TxsM9rboe6XSATiTmpwK7mj1PxQw1jNXVwvGhuxzUV2Cpi6ksdpB2YGIeyyoVEqi3y10YRg7VdgprZCmLP3wUZpnNQ7mxLLqIkVVBg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114832394156343648223\">兀Ashley</a>"] },
            { photoReference: "AWCwydggCBuFNLJ0G31VDvOPfROsZEJzgAB7nbL8Ns0EzmDM_vjyALxtNyGrGL2IHggrJvZbT8aWWvODnWN1KyyvNpwSl1f0pOYFNKtaJSsTG7aB8xkYOfNS3DMvpipa0gQ8U9Jq4IzHclCouEfm-_YwGMs-RFIGNH49tX8AuEAZ43LxH2mOxQDFQzvwvjMgTqKXYol0u6E-5i0tZ-ZcTP3n52YZ-7XBs4qlkh1c-yfU5ktq0K_y9YbwV7v6edYrHO9e7dDSPU3k9b9_H1P5EEczXBrC3sSihnCsKAUa_es9JG-2bHAvuFyIo8HHSE7d1AwSlE29KoV5GiMaGy5uk8OsqBxMeYO74kvEZgPoZL8iOpQMnqc0CG2ZKGcncMwqZfLc8PJcaM_pbwfBaAyyFF3yVxe68pMJrqegNTBIFu1GT4bEH5NfWiHw4OW7Xz5zLbyT", width: 4095, height: 2881, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103199214710333749517\">松田優也</a>"] },
            { photoReference: "AWCwydhI9QO4XWkblJgaJYan9jOAoeoBytMVKPEb9D-CGNUEkITanq3XfcG4AV2aVH8v-WziOnw2cDQZXoR9Wd06CxpdeMAUYRjB4Rv3HmkIv5mo3weOMw5M7ZuPrJwWYjoH0TgqpTAj-_Pr6BG3eV7vF8WCLjhy0pIaYsAvjhe-4JaFIzuLXiGC1ZTC-F8pjw6a6hHA8Nm0t7PQAgf3ROf5SqYlXGBBlygX_vxx_4-Q4jicH-0a4x9Wyfis4Bu1uhIJSmmRI52dopa_UMsJuQg3K7JIuGD3w0LRzDtECMpPk_hApcZ1T0WW8o9SgIqxRwsjLYEcGeIXXb_oYMjGzvTv9WGhOy1KjnaB-6W04km5sy5lfV37PODkwuCIa-wCMkbu8kra63JQegOYS_mVKY8H1xiYIynGwa9ue2t5_2re8Og", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102264987738287587266\">R M</a>"] },
            { photoReference: "AWCwydhRDaXAb-nRVcDTkZ_JrO4X8PSyiB6DMWKHA094IDJFIsJcSjLufhH7xsy9tDoDjjaeoaxOV9nFN6iwk0kPnQXzpDy5WcLfC-H10laUVU2lexdBZxwf9NftVg5tuRJ4X5ltgmb0bfGRM2rHeL_FaWWpC1Gw4NkfIkiJFvHHA3NXhWdNqG0TZWnKr8FpqikfWQs4F_VMXb-zIL_j84PtjzHZFt1IAlKAKQsz8nZczsRz6gFznwVc730jRd3wQvqJlgH9u7i0LM5fUTQNOlD5p5eVt_eCz5p39VHMVJ0raMIUPrfkZO_rT9zyBT-nwXH9kYrX6uLTL01r2DV-PgpLCEHY0hXarjlYlrrbmTdtV0VDafkrbHP3RW2PYhw0iQm3GJCpUIG0cuDFbrjOaEPJWMi5ePVbMRik5QbW7XuThuM4ZA0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113478856861621482399\">莊千慶</a>"] }
        ],
        summary: "적당한 규모와 다양한 어트랙션을 갖추어 가족 단위 방문객이 즐기기 좋은 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["블록을 활용한 자유로운 놀이", "아이들이 즐기기 적당한 난이도의 놀이기구"],
        tips: ["사전에 티켓을 구입하면 입장이 더욱 빠르고 편리합니다."],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒552-0022 Osaka, Minato Ward, Kaigandōri, 1-chōme−1−１０ 天保山マーケットプレース 3階", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.legolanddiscoverycenter.com/osaka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17130195051236383444", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EA%B3%A0%EB%9E%9C%EB%93%9C+%EB%94%94%EC%8A%A4%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%84%BC%ED%84%B0+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미러지 오사카": {
        photos: [],
        placeId: "ChIJ7S2Iz1znAGARXG1P-TfXDPE",
        placePhotos: [
            { photoReference: "AWCwydjPhFMvJay8nJAlJT7y_IRv4yvNeYWNFIZxd4V9VMo2AfnT42xMcp_ZWH5ydv7V_IAYDLuG8jgUbnEVNkPLhBfvnwMuzJWYsnR2sAD0L5b-TQpbu75CmFWm_iuXisYG0722l8QTTO2mCOO51ovW2RJ1ZoIzQbqYiUCicUMejTyzFXf1NzkdObecayfEXJK_OBObjuz16TVy2QxBF5FMbiYrlxRZlwzkl0W5vbwiODBvPkViRxfNhYQ851m5D0dhlOsOSvwT5nlyNQwbmHYKOO_GHG9OgSmiaFvnTDvmX1BxEBh1tDrXZmzGl0UJH5eTQu_A-oiDG4UPz3aALyj8AWK5BWj2AvPiiivRpefcWIYqoTTaDemslNSQddrCdjZMygofyqagf1DQhm15uAniS9dmC2pGDGnziGFR-K_3r3yugOM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101127244909229869283\">フォトスタジオヨシオカ 写真屋</a>"] },
            { photoReference: "AWCwydiy_RuZDO9y2XgKforQ_h7yzByZINTueOMNkX1kkArkVOmYs5JsyawgqNlkqmjJRoxZMpPA_UYuQ_Km-w5v0e7U_lfgUgpsW0zSCHIPMM8Ki6CU1fK2T6bF7zRQs_8QZ2ZJccHtw723D2nFiRmHR97oVxwLWZNl0wbFS2SH8WP1sN3ws7qsnIvfIZrz4xbD1pmXjZns3aTUxYhdZhWsiCK1EMeJ-Qoal_3sH4lXHwudfumVGvckaghaYJMm0_1omY5VDK2fK64w7WO8eyiG67vWtjXFxwqQIHi6qn55HBVP1Di5fX5h4jNmlBCJUFet61xpU_2StvhunZHzRKBn_08IB1ROqkUBRD2G7sW0siciAiuTKd1ygqHznsGBF052-OTa0HiZeVHRFX9SXnDmZlNkLXsO1vOxGpPjDequfGq-jhKV", width: 3024, height: 3986, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101127244909229869283\">フォトスタジオヨシオカ 写真屋</a>"] },
            { photoReference: "AWCwydjg5jkMeQAhgmBt293tH5xO2vuHuCwq5SCiookIHNuwAuSPPRQ5s0_n6o1sGKPXf_oN15eE2Y5u2pYdaIBG4KtQPYmNMYNuthnJsQ4b5eAo9ObJElwF7P692u0grlG5mSlXM0DTNUsG9nwNj3QKfPAcO2qwGRsy3ZPwoZEJh_4qoj-VnbPN-3172wgHIY2ct1GJ3YvN2UcKL-OOqbEp4GHbq1g6uiIB0MBPiIawBsMS2CVdDjEKYLuhTSNEKLprqoBntSQ36MxN8AP9XlZTApyeRYFLZiS_V4hjmPU55eY754qO-YNLGIMSDGsDiAdRmdt7gOgwD90UxxkuQ4pJIH_am7lQTVFB7Q1S9kAJohO61ZB12_QPMGm2aJ_pdVokDI1xn5lfQu2Thh3RE34GdH9K6Bf4DyP1WY42MjoWsXxGTk1K", width: 3024, height: 3689, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101127244909229869283\">フォトスタジオヨシオカ 写真屋</a>"] },
            { photoReference: "AWCwydjMbyHdnW7fSmglaFg-wgM2qMZmB9EuLB8BvwBlLITQKfv_K3QmtXbXJbcNp3r9nPwPBEpp8NkSm5QbKmHIKwx7iO3Hd_fA7jKWlqRIxdv4UhBSg8magN2l5u2SJrdCmA3E6APVspmf4ixG2f764hZVkKjON-Zjg_pkFKvqSXdpJp5JbbgNFMtbul7jfATz1R2Ij5s9fzE-F8JTNuKNk6rJmKKUVwhW79DloiZuqIhvTD5kAHImpAizhRmDWTJn8rkoStGzF6qGMZaPElhpVQYCicR13xdaNIPpopThxeYsZaHU1sqV_2lc2a4EvD4TMzBxs6vLjWlta85q51SgI6JZbbsynSm6UIJhACO_ax2WLNxPiGkvHvoazqGh1NKzel3-al73N1SenWI9_wCRwsa5goGU9mun2wQEkWeEwlE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107517445513272236114\">Mst M</a>"] },
            { photoReference: "AWCwydj-c-bFak2PcU9Hpdpkf65TTu6x9QAaydEVZrUhGj7dmgcR6EbBEYS1Xagd8hLZ6JmhWl4q9K6giYm4UzL98aR4oYfKRaNX5D616lA0uco7JIN-J4MnT7zoe7A_qsgtljF6eRMCIo24tOefwZbZtQT2pXIOqJuf4dbHO2-1VJdDVfZjxuX71WcVx8mpKnLbqRlMQKe2ek4tHxa906IubyLfIUHi4kohTSQRMW14VGYLNS1ahSByuwlu18WBsY5_oiz0u9jKyvZ1xc4ILimqex-jbN3yVZxyhswX3LR3xuGCv_eiYy9LG6gYsP_idxJtdEWGbjgMDaELs6pQsXoLvGds_ED6C3fdmnS5qT0xtiZ0ootqA807bxm_VahVK230xG01D9G1JsOG7AbRdbcKHACLAQY8UGXmtmHZde1wTZcDBqLc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101127244909229869283\">フォトスタジオヨシオカ 写真屋</a>"] }
        ],
        summary: "친절한 서비스와 즐거움이 가득한 테마파크",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원 서비스", "즐거운 테마파크 경험"],
        tips: ["직원들의 친절한 서비스를 기대해보세요"],
        hours: "월요일: 오후 12:00~4:30; 화요일: 오후 12:00~4:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒530-0011 Osaka, Kita Ward, Ōfukachō, 5番９４ グラングリーン大阪 うめきた公園サウスパークA棟", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://mirrorge.com/osaka", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17369494498267065692", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MIRRORGE+Osaka+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "히라카타 파크": {
        photos: [],
        placeId: "ChIJ-6EttEwcAWAR8eB_Y35eQlw",
        placePhotos: [
            { photoReference: "AWCwydhqWch8_D6roqI0BS7uy6pMzJ0k1qb7VrUDpihc9Rg2a0oergc4pMgEgAPocrpkJqv86S55R_Z1m_K8Tu184V2HtEflLb3Jd4qqhxOO8MLNxz_IN8WtXXmfapiXs7y3-IFnhjyEpU4E6WHroZbOjuHlKQfqnT1qsmcqeFrIL6L5wpjHPko32TWYdPtx2oa9pAHWyhmJRETEZqLXiVQAu_bt1-o_1gTBPJksezFnXjBQrQbiY_NffOwRFBvdJzZfZJ74IB4FnWbw1PLQ2s3aB8YZvYL5F3noiiI3ndorKmGNMsHQplQZA60RTw7cnIFR5NWxIPYvjUUawexysOZflQA377YQz5E6aEdks5vp7V6gUEbBOkuK8Lq-E86lG8B29f7U6kmuz_cbwv5eefdCFVuy92H9mG4XdsMw51H2sIz1BXU", width: 852, height: 639, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118253826101763680811\">ひらかたパーク</a>"] },
            { photoReference: "AWCwydgcryqEpfej2g9qzOjT_QD8b6VWkS0LtQgRTdRGmnOxgQbiUqWpQmPddA6xB4aKN9BaQo8Dsh6_QuQBRNk65Ojy-OKecwHPIdlwnE5TIoNl7jveSG5rDC9nJfQlBlIVyk3m6AHMBPNOTUv3_Lc0mOEexU_x7wb6xJ1UpTTCsrT45wTqkz2z_GeCe2OaqHzTDpGSEk5kXdZLnP_RI0-Qs8brIda8XPFgmi5Mt-Se4DhxMfhnmRD5siDXYlVhVd_aao8Jgm8QyQYTrdeW4MF1GYBHMtAr2qQICQKxAemTQoLmdrFPChDNQvcobXSdGLqHe0iSI8VkLqf8I7tRwyC7GIp7zA5WjJ_eVIuoGM2wWbQNfVqitNDPlk_cQ2gFTA_OG4E0saTjkP23E8ZN989IjrWM80LdXavdw3QdbNdeTj64Cw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100311379270645878997\">yosi</a>"] },
            { photoReference: "AWCwydggSWwWuTw5SXKAhrYkzQ3WQn09sfY9gGV6bhzjj8uFLWtyOL_VES422rG3EvJxTdikQ1ndH6-F-nKLCrtyiybuJ_sTCoGiaUzpqPB7NregE4LA3qyW37G6uXlBudl7akjj9G252F4_8yh7jF9TBfE0-Xek6aOGHgKLZxuRhDqCsRtC1-Gd513rm-CwwvaK6R1jCzjUSXgh9aCc4_bUacmdf4UDn8H9nDf3iBngcln-GjpmBu8FRKLui4OjEF6haB3nTSaLuSALFbNPA1AujbYvagXG-ytKyewFoE9_nCTRCaiQXg2S5Lx4Ol3nw3XWm0U-uk2pVVhrBKyM1KyMhWV5TM5P6GonS1ZT0GmbzR3lFxwlfZYdlL4seiOYKb5bP0kAjTqmegGE4TdW8kLGWZcGQ_w3CFLbUxrQ4PLZesp35Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109380718547267855462\">そうちゃん</a>"] },
            { photoReference: "AWCwydjHOKtQjaU1zH4e4G-GHtehcKTaSKwNY6ykCf2wqcmLcCMDZ5aCiPGwp_gXOYvqnfIvPjSvJV6vj0OnSMujDQxaQDGTun7eZ59aeEfUO01HnGIkKhlLvB9JLR9hYvw2BVcgsKh65yGu9CZ6VeDY4y6Mhv5B0z57XJRvJxPpWOGIwE2S0nr_qHSRRhWVxJMSBjoXc09lal5SALHQ_vjdjH4bAA25hQVKeE9cQ5wpw72562-ruMRsFLZrgtT205t_6BAKgXFwM5XAiXKph4m2C-RimkpEtKXa9zWmxZRWeLMfcZTQ2uD8sh3aqz8jVxEMQKe-7nSko4uID_LK7VJLNCe5vVirzY3NzmYIqmuPY_TxwZLGHs8xEsNZN2WM0qZpGJapbikCW2IxI4zy7-MOWA1S0wcQ8_oELn9C8WQlJDTJRh14gUtGAgUBofCxL5qX", width: 1920, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101898599836733554321\">KJ浩二</a>"] },
            { photoReference: "AWCwydjORae6_1S65zBMK7XZYC5eeg8YCkjbAygUKCQZm0smGgs4-UXVEyYXUBqLx-O3CpL_SEaraJUhGyermYbFBmbvcjRFScJRcdh2ISDmbn6efpsWbCCqy8xd-JBQzKx8gG_pb6hReLMQ3LasdbHuFoXODvoyDIBGI8WDk6Jv6fJ5CagCQlKmnM1XIqtFZSgjW_8as6P0elzLWWCmbyIpt2Vb6aL0w01sS3VRNOAQ3ygXqaQIuUTy-dE6yrkvDsGo3ve-SwtLXn2CLboi6pd0V6SdXEVo6nVKlHdn4cF3oCC6WS8SHiitL4vQei0j_uCz1-PCIVlsIpbj2lvV_pEOLxcDUF062b-KL2h7ZWX2CLjbYHark-1qKEJUE-c84oYs34drr1kkPt-zuyW0hZcIvogVQi6oOr7xUOfpmlCY1K8y1xI", width: 2448, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110488504779022046627\">U M</a>"] }
        ],
        summary: "아이와 함께 방문하기 적합한 테마파크입니다.",
        updatedAt: "2026-08-16",
        highlights: ["어트랙션 이용", "스트레스 해소"],
        tips: ["평일 방문을 추천합니다", "아이와 함께 방문하기 좋습니다"],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-1 Hirakatakōenchō, Hirakata, Osaka 573-0054 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.hirakatapark.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6647979896880488689", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%88%EB%9D%BC%EC%B9%B4%ED%83%80+%ED%8C%8C%ED%81%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하베스트오카": {
        photos: [],
        placeId: "ChIJi6IHCUfRAGARnn76d-_1ksQ",
        placePhotos: [
            { photoReference: "AWCwydg1m1dHAR8OHJT5dAALNwEveBCKShtZHNub1CFlL7pF84WmKyklhhVMv-9ojlJhRYNhVojsJTbPhyMpKIk-7e-9vKzfzWHbHPk4lr3w33FvuJG1cy86oySkNePv5cKJGbFSlErXuEdiLPZruWMZ5JRIjP1SMQzJN4ZOvtyIStE7JC2W0nxwamMSwPG9wtE1YfG-XeHg9zgllA8isPTY7NnaO3BO1o0GDAwSdflLuE_ss1wLsVaFJQMVzVnR0vtp_yTx7byFwK8ldf5u5aO3wUadhAxkkc_7X45fQ-T4yW091sBBwaFfRm7JIKcA0sXHQczxwQaxY8E5vsXTsb6mJKc4aSxz4O3ONqbUWSMh_rMS0I0_g3bzMJcazfRIqpTnn_Twd3XZ6UbZGlPXfCIyZ-5_DO4KRwvYLbhQ6VmegftbQf1SiXWUnFQBRI05SgKM", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118391893286028979528\">堺・緑のミュージアム ハーベストの丘</a>"] },
            { photoReference: "AWCwydjF7lXttMghgQ6CYXWqZgx95syIpkBwjSD2DCTBUzTPF8bPWHT_7AFIgHWD-gMjMGqs1-tvY4XnVoHo2xDQ9tlo04j_DXGhrY8Do2yNI9I11rWf9pzPcB7ROTMlbAty1tCcWTvWyQx_Hb4JEU9O1Mk1oulq5gKHRv-6xjEBFvY5bBx3LJHN-Uy4ab1R2ljr7SI7BHwKsW3vsRPKELCBhtmvgYyDYhOmfrgBXQbZ3l658lUNW4khJqSK7D0n5I-RnnOL4oKtGxxz3lHoEsEYFQTf9alaFlSRvQImk5MR3dx1rgowYLzhInRlDgOoSVn5hyUauUieWBts6Zn-msMvn5vrnufgll5LK_M-IsOpgcbZ3Uskd2fYryBVpzx6xUN3cH5wttfPqBr8hMACzUNw-ldHHEkW5zluXKBmWQeEF9h2R5Pf", width: 2733, height: 3532, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102760768431820154268\">thinako1996</a>"] },
            { photoReference: "AWCwydh8PDNwwDxH0IkonJRgIgyayOfq2J6VQXikZSX8mxGBWtFB6Vw38WNEOb7U-Buhi2t3q-j12iievRCfvIM7mT_SwcL8h7h92uRc6MdzIHstiY2CRTsi8n6I94PW0Xr4TGGEQfzAzwcBFiW9tFoXXIkTycyF49XXqlkAXczWmWIjBuFRFmdLNw9NAiGdHK_LQ7WJKXOSx75dq19-_CifATz_JVwDwk-sWD4wJ0L_zmkldlkCFdkMUJgwnTYO-KJCfKqURwKmDfpRINJFsaG3an17xzOVAOsbC7iwn3crRFf1FpFJW_7oOiCrfvEDuwmSaA6rYsV0M6M7FXkt9MHnpFwNMqZW7I-7a4jRP7YVOIT5c3mAd7Aaa1eoDqIlWnF4xv7IkBbbciTJswmoTwjGiS_CfMdG4gUidsSgHeX697IsEiug", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107678366014986264092\">かるにゃん</a>"] },
            { photoReference: "AWCwydhcOzJUEeEd-NENrjwQgoEXcTtSlfiUAOr1vxpLgpbdarqsvsFiukcLfDXqjGmm7buhi22UeRs9wA4hRI5-lHlCTNd2ll56UHL43QkpfHlb2qleXwlyRGOuHipDuJa0ueIjRYtGUpOB5SFfAKOdPjM0yYKcTGs3RVRmkfJNx8-l5dy5HEqOowH7cDJJem-mQ0ktfGJWSUb0oEcKYwe8K4PA0XuiZxEtOGLnqCzLPx9NJYY_Sm-ZAR25qhiETubPhvCLKTSsclnRROPcCW2UsptPEjCzY8xa8vm7H2Na8dc-4SLXwK_Ru9eXQqlCxS6HrlW8rmBuK3YUBWsPWx4uie4xiULO3RqNk_lMxjP8ES0g1hismiGl3Fh91rV1brGHgfnOuFUJzxquYZR7GKqBgOJAkXYw_yggO6U2XnyXm3FjtA", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112472101102375744543\">Naoyuki MUTSUKURA</a>"] },
            { photoReference: "AWCwydjFsEdQUdUtJm_usXFd98LI0GPylxzpCnQ4Ujk812zuTI6KqChb-jW5pjVof2l2CZkdX8dYCeyolxPtdaRIiOs9Obd3pNU--VsE3501iNpEve2hEDnnLuQ9J7v3kWsR70ECTiAe9OcqNkWwsxSwXvwTBPemxoQiDJMz_A_E8fJnIIiNUvmhXc1Hb4NBrOyJaiQ9-HJYsHoGcO3-kElM4PzRxRPSPaJf4-uftkGRUM9SL0Q5xEHJmDkG1J4Eg22PEwKtNm0YPYe54zyuFk7mXv0HbTKABzenZtgi5cqk4uM0MEBHlihfWTTm53hgGWFMXpFEHJB2FLO7L8PJKabGltkMGD_1uUl0KycKSu0TXGMpoIuxjW6e-27VgCRn9MK4QrqszN-E2ysBqxF553FYvNNVhLbNqdFpLPN7jBLU04k", width: 3610, height: 2708, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118063856822701565542\">Golightly Hollye</a>"] }
        ],
        summary: "놀이 시설과 고퀄리티 식사를 동시에 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 놀이 시설", "높은 식사 만족도"],
        tips: ["레스토랑과 빵집의 음식 퀄리티를 확인해보세요."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2405-1 Hachigamineji, Minami Ward, Sakai, Osaka 590-0125 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.farm.or.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14164654186892525214", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%98%A4%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "노마드 카약스": {
        photos: [],
        placeId: "ChIJt_0JqtfpAGARHOk3C4kbZc0",
        placePhotos: [
            { photoReference: "AWCwydjeBo0apB9g3qglJ7fsIScBO1mYTNXZ5pUqJIIiUAgnKFmuZiFtc-XFMEXWirTP2RmB5Yrzf3qeXU_wqdYPmag7k55C3AocSh0MdIncLPOIRS7Q3f9t2DrQw5iHungxhL1qZFcydrKzjh1PfxsTfE56VySv5xLZHOxjMenF0xAPh1wnTESBd3LRFymX0Rc1jnolTfkHgkDNRNZivuuhB_Ms8UF6GaHRriZfCOlctTuEwXHE6Qe6mz4-Q4N86ysgpQ3n7nzLczk1pmMRXGDd-NoWdwMUpD_mOUthg6z8CCQldk3-6yXZX66CVQVNQ73hOi11ye5OguDEcpTVHbItN8mQ3Bw2gILHzVUsdxC-EO9cHzoRSGfNghnrMZ30uobYxLAHE90XJZagJGeuiE_X2wbn4iyv-Jg_b6RKjqYhfnw3qbCGu9Hl8UuiJNnS", width: 1440, height: 811, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106801824353162960253\">Nomad Kayaks</a>"] },
            { photoReference: "AWCwydhPOdCRXptiW5BJJZQT2Kzvw80FjhVQXRsUs9HKRbgrWc5dwGhyBZ70XTRdBq-KQTfVL4RY0FpjJn0hzvFtde6pOc6VkLAwR9-2huWU0eqejWZjE_TTvUAmeGe113zOi244IcQBL22I1bz0S3nqlDgGHS900kLJEbjxOmnundaSL13-Tth3sNSGdjYExFIOR7xEKuo4vTIMOWhY9E1LNSx8tM6t_LfjQ-uNlRylciMdyIquEj0q6R49hVgMJw0gICPxqUrqMfpi-Q9VMyFGZ-6ki7nvz8NilYMEwEa59dlTaZhIuzhpzZeAYdOaYcnqC1J_rJ_LIU8uIxszF6n0KQ4ClBij3UPuMoCRzQxeH14kYaOC16c6Jb23KTMhvBl9w1qSby4p0diDgP6p7MSelZ6wusz7Iiht9WrbpJddWZzMXozClIBi6LvEkiupUzAT", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106801824353162960253\">Nomad Kayaks</a>"] },
            { photoReference: "AWCwydiPkMvRAPUuwAP17XDSreScxxwwXB0kWyB8a8xoE_6oJO0PnOjGjkL51JxS3N3kTCijqUQlv5cFhpv808qDjkeIS3hUQV3bVZkvI5hw3b79e_cZKHs9aCsdmmX4dMg5_MtVibuflptWapmoYHizRCojFGez20Wno-0fj6WJGd0_dq8J2f23Bw_Nm_B5oc8AMk2N4Vx6R_k2EVDb5pK7s4UWziZNUo6jtSF-OHvqfY_ylmjcqmMYHolHV387o7SkKstc0Pk9ki5pDrNqrenmzAxavvclqKXvdmrdze2WqQXFjC_t5kVdXDgQ_YRBUdx4mWdwbrwhWOoNVmVBNePlYlcDmG94z_iM5CqBYRUjbHkqfyPIZJ8prXgkwRp4MuMa7VSQATyhccQAOV7g_Zw_geKFmQhSlbqcCYyP8APNA9ERIJU2qkzfz2Gh_CcAvb0e", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106801824353162960253\">Nomad Kayaks</a>"] },
            { photoReference: "AWCwydjDqK3jOWrdGaiUsQmlFoCDNsBJkfGeRwUCbeVQ89FiZ4VSoLE4C1A2sCdVE7kFbsZcs4oPuwf39YmNPD7UGVM7UJIeFEdh8WRJ71FvxZf7pcQGRqrwWGAgxzik0m6V9KyfaMVhwzGKtFHuc-XW_ScLTcMo-pzezBrpnoYezEiEKrcAz39N9b3cqhscEiudJ2ukTk_wwXzYBKZMCJ03pWNAnZIa9HQnMpZT1D_6oVkerytY_S2LYMNPbgT1xlwLPK_5ch4AYDEehU-oVs0-udBsWQOqMgpQiedk-6Un3IV9PMydY068IqIlcMyWhT7WpZVj2CO7_gmwKGGt8VpD_36rR49SI2Wjv_WJOOJv9n2qLjTfuAKVOCzT7-Axns-343sl7La_Vo2EsgYF3BCpi2w9tAAyzEyet1BThpLl7gYlE3Xf71FphMUJU09icq6p", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106801824353162960253\">Nomad Kayaks</a>"] },
            { photoReference: "AWCwydioqsRoDetRRbEX8tgjV9jLyeNkUXOsam3F_kquq73kwxeprUWxnJQ-dp9TrkckdbmRrQEdX5Rw3rRPmxjbWg7tYljp8Qf3O26zzn-ua74qidlxAu0XFppQmpnYAK5AbR0LkdVWlfOzYd64JlE_tr2oOBfL22gWTKL8Fga2IBDG4cGl3Ty4eT-dSQJPv_9MgUXtixJyRCJSSEa5rxB0Kbu7ts3aXRvkpdxS_YwTpqjhPnfqv5eiyhS4MM_1tpdMcNuE--ASYy0dPwerM3q9NzPXs3BKlUId0U_ceZlezHaxWluT7ynIqxUrC_MtyMkIxwJNXlM52jurwZBDfOG2Dsah88E9xFLoX1BuYpc_Yk_6pFZEgNeJxCdv0EFYfTXDwzQplgfnh6rmNS9eWlq9ivFpaWZ9Wd5SfIsWZ8oAyDCWzF48w2TJg7KOAwJRzqpr", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106801824353162960253\">Nomad Kayaks</a>"] }
        ],
        summary: "전문 강사와 함께하는 쾌적한 카약 및 섬 투어",
        updatedAt: "2026-08-16",
        highlights: ["전문 강사의 상세한 안내", "오사카 호텔 픽업 서비스"],
        tips: ["섬 해변에서 스노클링을 즐겨보세요"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-chōme-6-25 Torishima, Konohana Ward, Osaka, 554-0051 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://nomadkayaks.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14800266025835686172", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nomad+Kayaks+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "유카스 오사카 쿠킹 베이스": {
        photos: [],
        placeId: "ChIJO0mfgxjnAGAR9EPaU_Bj93w",
        placePhotos: [
            { photoReference: "AWCwydiqfS_yUPUkLgdQfYh9PJalygdhAAYNtgRFETh2hV7DeD3YtakBZi4vmuRdXmMJZN46qnXC6RtbNdVzjZp2ggvritxBvAhW4md8Mqq42vvNcen7sfzXEA66Bl2sIUoxO14KBlxFam6AvqnT59j_g-BhtWxPwHPJzf-QO9AbzBzU0SNhzH-pwnkWeDTkMK2K5-7cNr8v4KIDC0bjRlNPR7HF7-XneTbJw_Z_bKvw_XAP_DCCt_fdzgSS-1Eu0WBGAR_0luBLj-whGvo1CtExG0y2pLFln5Iz1z_xv4pxsm3FW_HgqJeGGSwVfefR_l_cb46r1CA0ABgTDWpbylRLWhUzaRk4UByZ_4OIu1GrAhjBjga6hiZ_C4AWfJw5v266Sv1L4NItiLzmKI-IgCaqjbPNvr9i8f3X6mgmHCdOg-tuB4oyve2aFLWcUqq8f6uz", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101987375414526277528\">Yuka&#39;s Osaka Cooking Base</a>"] },
            { photoReference: "AWCwydj99GoEkeENR8E-3wS3zKnnwAFmezQeQ2MO_NqWw4hqB36bV1zazTHFkdnhk66TmCjpwjD6mMV2LX4r92yHuWHKbRruzOI-89bg9ybpXQE6p2xlXvN3557V5jMN3hyNm3wEJTWehmuyDQv7z-plMkNg-JlQTm3ZP7mUjI9gxoIUNeXNQcCVdekXpZ5-Gu019c4SxFLvTXYRufrkdDSsdic7S2T5qkf9oxb9PhiW9pkNOByCT5KZ1Zagc9tYCIJb7Jqqmh178N92hLSWhN4G25nna11E_ExW7v8PAjJcetO5PvXuxCk-IQ1OWarvir0Oc8EwRx4Nv_obG5ZHAHFswcCCrAv2W4xONitTEuKQk3cFYFHppMPNZ-grVT6hA1p27rUzkZB5oSTTG_uh2L-ue4NrYENMTdCV-CUJCZabyS6P17qwDZS4gbnfIEyQXmJe", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103713369384740958501\">Felix D</a>"] },
            { photoReference: "AWCwydgzL6Qj6OUck7tqMSVz7lfTU26ioDeVtVgRqlK5KSccafE-0STOUHYRQKCh1QsUxKKnfVhR6oiH0tSZtLeGWIac78zeJI-qOmGcNneqJjhsH8BRU5kCfWAMvIcyfStA_K4oRH4Y7ahD21V4fGKPLovAOJT4lii_59SbN6SRbI6u2e7_A2oxN-ZtPCCWKvxVEAlhWKQtIMEP4iHXVqAoIdGFV5SZb2Yi1Wur-C05IcZhcsJCLHTfP8CO77BNj8heb-ywNEtvZUOh9QZ5EPqCwcE8sTT4EWHlXtvP8eXay72TIAVLWjJ9PVOwR3ScDu--A3X5XglW0nDNLs-fqW7W8gcTG81R-KauL0JZDJKlHDB5Fkm09NJvTQe0tmSOXOk-v8Duxm7sZPQ50jDCEGeCyR2HWTdcZHDa99xM4Fp66XhQ4IBJvaUJG43o-NSxCbbJ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100377744500725924012\">chi lan</a>"] },
            { photoReference: "AWCwydixYxHX6Hym13IDYye9pboMxPJmUvf7Wmaapgp21WsYCBNH76n4gi5LRZeaquNtGiYndqIn9E3YjiK61d07i7Ji5GnHqyI-nmhlUoL0yvsYcRGvo988aWyKDZ0zikhidj66h_Og1MQjb9bQd2cRkRUFxVydNepBOXTBa2r7mzcsvCXoQSab7RpFlhhG-XFu2hJMzSvU8aYglsQGsH4g-iq4XK99H3KGYfq4uz6IOHB-Ml-UY0XcIpLfJ0jScvRyE3Z6S9DeWWhOfvIYdGIdpAFUXe_xRoD4eGsWIRHH1PaCowxmAdTXerEePf8l6VZz29GvA0E8rTkQEWjhHFy5PO-x0xTC2JRBx0ZhYHMFjOpXvHf5zKTkmRwwVueihOYPocdbMVfd5rYsw-ugp5Mr-puN7G-FshC1r7Fa6VRZM2bkkiTu46FS1Td0ZPenpaf6", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116721869977361893946\">Lucie Gagnon</a>"] },
            { photoReference: "AWCwydgV6Kgo6_lnhaxnPBP2Dy6g5iAvh1JhsMbkB14RfQxoRnSobMVCIhMIwQilATYki-EL2epPWq-6JiliYMLPVvhbMIMmCC0v7QOy3YiIyS-h4DohWOEphp4laxQzz2t1y4sH-zGPlw4oM9TL53PzHPAEfhAV6CQO4y9-jIwS2wukLsv0xGK6lWAYBhWHiHGK1z226X0zej5rGcM4fV2YnbA98jQMvI4RAMNzur9XOtDTVZOR2kC7RfJWaapGobqru5sVJnB9tQsfX9ySrpeRFUEUv6NrHKFDnXQAX6ejCf9WUrKoB1T6k5Hz6gP502ef-K9f6bCBuDPFFcPBc2IveV6fixFqvitKTCUdIAEU9jQAeNUnzGaWDB7DAbYgzVuw-inbfw3MfTQ-BZWdCgvH6LEa0_fSZgT6gFFTm4HdZsO-f0yrkmPHpnkiGUcPrA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108359299553304123062\">Lake Hunter</a>"] }
        ],
        summary: "전통 시장 탐방과 요리 레시피를 배우는 특별한 경험",
        updatedAt: "2026-08-16",
        highlights: ["현지 시장 투어", "요리 레시피 학습"],
        tips: ["강사 유카의 친절한 설명을 경청하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 7:30; 화요일: 오전 10:00 ~ 오후 7:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-chōme-9-6 Tenjinbashi, Kita Ward, Osaka, 530-0041 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://osakacookingbase.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9004775863800710132", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Yuka%27s+Osaka+Cooking+Base+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시 메이킹 오사카 쿠킹 클래스": {
        photos: [],
        placeId: "ChIJ18MW3YnnAGARrkFI6tKO3es",
        placePhotos: [
            { photoReference: "AWCwydjNTHbA7r94jlOS_FsKZGhUKgx18MNF2UhqhAhRw6qAFRoydNOd3JxubQYkGShUXQVcVlxvc8fTPu-LijAfsl1FJ20hMwAMYIEkAVStsQ-vl275nB1Wd22NDAYx4c9cBTsSS3LTYnU6gET7xpVxq_MB98j6FXtjDZyRGJCvXunba2r0TLJCILAuTp15xoTvPBQ3-qei3GdHoIPsgsRlDEVlYzQywyD8Rbmk00piTq4WUwMmdygqaGfUQB7-60tR8kaQlKMj0TkJafy1cmPEUQw_aNx7ihFdefuuj3BgJq38OoVXgj7reBdRJN5_yC81xzrfwjMs_mz1RnErciwX9mkS7wxhgqQJZTrZCL0I7qlvqSUNcR7NNC_mc3sKsk6zUrD31sdtiNfKrco-E8X8ksvIngyddta5NxEo7dSTdzyoskouXJ7S1aqikUAkPvJI", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116189842698402349991\">Sushi Making Osaka | Cooking Class in Japan</a>"] },
            { photoReference: "AWCwydiDL6hBWM0RG2ZDsbrPwT1mL6YmEQCHyliSgR9uJX_csS0NS-_3bHo9JRyOku7-KvJBhjBxM_aqzFiuZE4mWAwkVGa4BhWlG-p5d6p8_gaiAAlNS-LFGg6ZHOVKM6qwdGF05K6qNW9ucGQWPDsIdUEJ7_wG8MQklmriczpPpVKEj-iAq44qKrnLb72qScMRWyqFUrNJANA32-Xy3q1iUtRkv3reBY7vzXw4KWK7ItzDDmyaFnaJI0kRMcA5Fr08AJbNegwJdNbNFL6J4tG4vk6sli577Rq2SupdzJo4S2eJg1hHv2H5bG_JKraFm0xhmWFVnQSfMZrSF3-DDoYB2dIuMdhs568rCdzx8XIOX-O56Q6KxUJDC6Vmj52BIC76soyJFm-LNK78TWTfniH5wZvf1_vTwVkH65TL5m8T1ZvnyINy", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112530623942723673755\">Bethany Hemsley</a>"] },
            { photoReference: "AWCwydhC8v51Pri0bBvYhUUkRzP8zN0XCXuViAVa-Rc2uc4dE-yaHXhrnn1a8fwN89uW7wMJCIZcGnT38IdTq3nibF_-tVRm-5icKtFzyKZE3d3AcdyFA8mSsjQ_jXdzQaCkhd0WZ0cln9DwAUvAfWy73cXSxBmodz9ZpRlMQolMP8lw73lveC1R5zce1l3rxbPuUYJjXpqdc3HuAhqpQVgcppQ2YFAJpsJlaNSSb6iaAzuZuEyiqtMhGS12Ek9hvljMVLV46QQxOhNQFWPObMBExxKio7etVmXtGmfMfbFGe4-Xqr3otd3askDxg6iKjRPWsJZRtSnU8FnRQ0TL60GnFZAB6gybUu14Kd3OuGpnsY436t8EnO7zJcU4q7X2E-HlwOef_HSNPse0Z7ktazZkoEwygJU_PlnGLIWi1gx2K5k3zkwTAQCMT5sIF_6sUEBQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112162264275702345182\">Eunise Anne Siy</a>"] },
            { photoReference: "AWCwydjP8k-bJCu3pFJfvyg_gKImIYOu2O9x8sR3W-TK4t_syblvnpsqbMoAiHND8U60YCG8BLxN7ek2JwGz9Tx-QdKsxXwJlbrMEtmj641v043s64xorXnY62A9_XQEUD09srq_qEZUqnH64-zDJg16_nV6pf5-07gneldQqX8ug2egBNkTAhaerF1pJ1y7OBFqscyqiIdMl0N_ZKiPtQzCULOi_YEXBCxd8GnMSk1yov0tTjTPehfmCzTxK3422MUDTHi6ppn6fQK77vdTJg39UGjIfOECD9A9EF5I6G8l8OIP-PZ7o0Q0jYcLpHBwuwpJR-svLDwZindes9NpH4E21RcMly8jmgRMknaZrNvyDpjbD-YYp9W-1r30F13M6HCyZDP0IKXBT99pHRU3rmtka9xhiYDWSYowI5QVQj2wlf-QLnSk61ybW3hKfs2_6QRd", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116189842698402349991\">Sushi Making Osaka | Cooking Class in Japan</a>"] },
            { photoReference: "AWCwydgbCdX3b1kPhoBcmFrjwL-PTK17sC7GiXicVsWYUQwdMiCRh6cvdYZEdqBNG8iHrHAjpEErx5f2FPKh6xJEiKJR9yTk3MXugkuk4ClLee_nfBc0tVaksunnSzSr5_4M4SS6ig0YfdNRZpL2DGpQ-mWDPNAFJvvOqYFM5AxECDZ44D_MmqJ_4sjgdEIhY5HaHWT_-fxVpvnsO36M8-ZQdIsPaAKEKvruD4GEraVQ6pF14E-DDUsocYd2wl9rSJiIlfARZwYpZPchGM8l23tqWH_D-0gnvW1a074tG_ohr8yh-Bn-zSameb8sXjJWzVzKwVssBZ7N92FQq0eUTqIY-4qj6F-8S0JPnXp1kYvCMR-X7Yme9A7jj4A5hS2u5Soj8tgA7FlPCSqxD7j7UZ9voSBAd3fD9fyCROFtYcltriMCRsNnUqCOp81hzl4vPxUj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112067175220773289589\">Charlie Duncan</a>"] }
        ],
        summary: "스시의 역사와 니기리, 마키롤 만드는 법을 배우는 수업",
        updatedAt: "2026-08-16",
        highlights: ["스시 역사와 재료에 대한 설명", "니기리 및 마키롤 제작 실습"],
        tips: ["가볍게 스시를 배우고 싶은 분들에게 추천"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-chōme-16-20 Higashishinsaibashi, Chuo Ward, Osaka, 542-0083 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://sushimakingjapan.com/osaka", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16995897605291000238", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sushi+Making+Osaka+%7C+Cooking+Class+in+Japan+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "말차 메이킹 오사카 쿠킹 클래스": {
        photos: [],
        placeId: "ChIJVZSWK5_nAGARBRbikHHrgbI",
        placePhotos: [
            { photoReference: "AWCwydiU8zWC90Sirj0y8t7H0OknSuzUcjRIH8ao5_5j4UTSp3gimtUtmj-c8l0BPzsUejf5hEFG8HGqD-IZzXRD5_qbAtxOA2EBRnEcifEysUXQwA84Y_5TgIpvfSsZR2N5Rigrt9dygouyAL2ceEEAx0DOu5hU0Xb2si8Y3Bqi4Owi-sP25PrIQNR7nngiRlomWwvwYeNONcvFvkg0Z6elueC06CuxMMvgKIAg4dQGX_uts2WebQFJbURztklNZB5qnCaIYhKwWzVL0ajjE9XOM2VbJQyCEhswbym9jFCoZsEBSJrzdUZbg3rOjhrgRCIVhHdFY2271bq4LCG_p64_PwYMdci7Ohj1prxsJ2v2mGBupvhxiWJDKd9q4yIwyI89Vw0Z2oFVq5p3raGO2QLXxOhq2lwpjRGKe8rpJCOMtUk_vSW-HggaN4v12vV16Zks", width: 1280, height: 905, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109135256896443011364\">Matcha Making Osaka | Cooking Class in Japan</a>"] },
            { photoReference: "AWCwydi-7dKEuoQ2A1wRNz5auaLl61Vl2PsAod_SgUwsFISa7RC-_9dvJjIM4eU8GSMYrwy-7FE4mM8k8CBXO806AmBkgHVJHe0TBGdvBuwl5xPc6HM40Ih98G7b8b1aWwd8LN6Vh1vjmPvre8KE3HfwLOPBfxCSCG4jQZRC3b1UoNOz5KEVs3RIqwX3nc_psGU7qDVdQqsBBSpgyS9rKxq4XhZIzrBQb35UnwMGe1J3WouCRu2PiYoqDu5NpFWw07V7XVRbitXw0vGikECUhuVqNmpxSZVaHzUFpE2br2hpKbYKR_agzvlK1pmykl-NLCM-cC0YMSlD60q8IvpXdKLJaf6p4wfXTvBjsc35DSkoWWsigwuqam3Jy-p7K1TW-MPGDdwAMcGXQfHGzc-mdIDBnsZj37h2SIX-jMNW64vHc5NGV2qTO1w3_auaWWR70uO6", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105743409942139210269\">akshay gulati</a>"] },
            { photoReference: "AWCwydjJqWjkFIwL0vEIovBTXg037uprK9qVVc0lFqMbHulorlYJaYqlz-Oq762Y8wlW77MVFhGzb0tJxHF8cItdOOCLX-ehez1qJujGJfhCuCeKtEU8NXnALfQjM5JzL2wBu5ZjqqlPmVzF-UeBQs9McedrH_ZGfRYO8ockdJh7eLRxX7PQYd4cODGaXH8Fm7R02P2bOs2qwOIidgO_aqD7WDAherCbIwqAnX3o1bhARdMCCmnjtRjCnqryEz8tNANWlCwquYZAJQJYD2-0NwaRRIEhyWTTIljbVFNiQqkMRRUzspvg_HgtwLG7FCH3-MuhBbP5uDzLcHqyYGke6KIExwMG1IKITeV_P0mzL1C9I18jPt5nUiInAUncVzLUAXZi6Q423mRIuMOHM-KMmGt4IJWFxNZEgHjW7S_JnDfY41Q8iOL5ePSc8KukkUvro1O4", width: 1950, height: 2598, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106962979087669537016\">Sheloa Nichols</a>"] },
            { photoReference: "AWCwydhAqV1SiBYE4lddNvLcToI7RxsUB8aDin_vKoqrvjNBkkhiQk_tAqNKZjjWNqjM0UUsK-e6QyaxsnGm4pe1bV8qnv6DuIsDbetmD25M6d6u53k7mE66JoJUwQ8VKPzaWLgz25Craw1tHdn_k44HJm3tNB2Gn5FYbs-06L6Mowj5-xbl0VArY5cxdljXefJ3A5EGtqyX7aESHhIo4Ht23JRqqARVPA_GZVGZKZPJIXV4-cjUrNuZnuunN7vUow3v4uOqgyWrgm7PxtmforI8c5uc4vronR7SJNRPveCcEpibJ23yF9qGdOAIJxtO3mleYWEOaSXPDehJVzKQMFhLsM4hByyXXvViFl1sW9DAHcUriJq-Ed1jsPgmtaAcHMtGE2Gr9N67WG3tc3j6gBBNtwt8wGdtbPK_bk6TuYkQANiRzzxw4IrUggbtQX337RIj", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109135256896443011364\">Matcha Making Osaka | Cooking Class in Japan</a>"] },
            { photoReference: "AWCwydg3ibKAGlLaIjuzxT-Xjoge9zKnxORptKEStrJg-SZAgO5P39s-yb7g4AwuinOL89vjel2wTel7fd_O1rZ2lQTyG-MzlgK7xDD2ipsK5JXcVwnyJnz74-CF1ztq6BJmX9OjssEWNLC8bgYOfZIuuk_MM91evDs-mP7NhJ3T4Gb6B_ZjQz9xzXOsfIbhYh6BHfs7FnG_IYH1TETJTAR2klF9MqJ0doinEs2Lf2DUTN_MHWtXbGzM4hEgkWS_l0pqs04LGhTmQnT1q0IMevO893M2Xx8JU2OHwCbViQ4UZGwdcr3axFAGw65GhorqJmfdJZTVrfznNbMz43LyYOn_l0vRcTEgfxqmwkv1COQS9TuR4aEXQqTq6pyZNIkswFl8TQ3qQeeqMpKeX47Pysk9pEDWVZtUhhe-wos21zs5F3n-RapYxctHqtrd0FlZT-fI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117014809914486572830\">Samuel Marsham</a>"] }
        ],
        summary: "고품질 말차와 함께하는 즐거운 말차 만들기 클래스",
        updatedAt: "2026-08-16",
        highlights: ["친절하고 유머러스한 강사진", "깊이 있는 말차 지식 습득"],
        tips: ["함께 제공되는 간식도 꼭 즐겨보세요"],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1-chōme-16-20 Higashishinsaibashi, Chuo Ward, Osaka, 542-0083 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://matchamakingjapan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12862820883741414917", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Matcha+Making+Osaka+%7C+Cooking+Class+in+Japan+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "일본 공예 체험 교실 Hashi*co 오사카": {
        photos: [],
        placeId: "ChIJxxxY2s7nAGARKyCYAeqsIaY",
        placePhotos: [
            { photoReference: "AWCwydgJ2K1AffpEu5hWV-c2cq-Qtx8_3mU-8_-1aPSS_K-NbDC0FL7nkmn2_ekoZrJdotgNXiD4xOgDaqYa-EyfWJATH4MGfufB0wXh6msg0e7pc9NNvndc7Kbf03unD35T3EezNE8j6af9RDu_aQSbFQlAXuR4zwAd3FYQ0znngmQ93PqkjAcogsomJaEL_fy1V8OMfDiIUiColwzvKNK5Ig3o3uzrHxM_O7QPO8NciI_II-ShBY_Vc9Z2fhCfRs9yLl3qJIJ3Ehxf2TSvs91LQTj8sUKcMym_NrSvD17qIXXoDvGDTeJVhGQZfY4J8v0x4RvO_zwrTvuBNzYVDK7KuuywpQvJwp8HgR7uv70GMgRJ1DSONmxep9vvycpiH9LlZufJHpE5KhOibrI9axvd6ulWdv64MFIg9CFgsdMXQvM7Yp4o4uV1rdIVWZFkeZfL", width: 1207, height: 901, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101304839023720840023\">HASHICO</a>"] },
            { photoReference: "AWCwydixEv9kHUFWQJKlkIlrkE2MSMAJ0tifrrhrPIjvU4WFyhbKuuQSEFBj-q-7M7jOvYQN07_1MdLxXGBH-3qMvyOV1aUKHhC3F1Qnf4Q_bdfW_DtTjSUL-VulxhgQ_N13KF2rpmcDhkcPvYVDmjw2dKkP-slHEvarBaS18RgOZ3DuxtVnXYX_2IOJZlweucZSrq3MY69cMRoyT44FX0W3UhXqtHe3EeK5vdfixoSRjbASw8pCbp60m5VWqntJfrUtz7KMgTqqB9xVHxhqr6Rq8_bdHyK3TPXWNUr3NVhBxZvNNZywjCgSc0uux699NuMOEAODQwT0iFMI62wCSMeR6cIutn0wFoGBBgss01GA5DnAf0QBR6PVPXzv-pX8pvIlMMZA0u2ppSblx9Gvb3mDAVt1F8WD98vh8C7pcnDSe8qucXPzG1hlhn9OYlUz8woo", width: 1206, height: 1601, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101304839023720840023\">HASHICO</a>"] },
            { photoReference: "AWCwydiATP_NmWpOnqL4ZCQ7f7z_pxO8EsB8AC4f_7sXm-Y_Dbu8R5LhWv6CYksag4HRFCuty3rj-HZPqB0fSV1YtQ96KFtgsigW_pdMlS3lss2O6BPpT-ElpQjjt_R1sjcwj554b8oWGgdARDTU-HOeTnjlaB1o_PnuwSBwXcZAjCLErQR-9e9YnM-zdwc1pFpykuNfeXW03Ep7emAPWZ7Jl3TJ4Oi1vpbX6zGw3knU79iCF94lbbhBsMRx67sGUV5W9xjNFEXzkKiWz0ztAz9AyXLJOvgCfb1IrilM3BEqywdKUHy3LPF9IeIzg_PFWA2aeihmaZZehUxmayr80knKb7rrWRYQTqvrWWtHupvS4XFHIMl7BmDA5ilEhukQ0YRVgSmGZ4JoFNECiB29sTsYMP17G6rtPmKG2YqDq2gdKOncptNEK58uqlTftNhezo3N", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116018255050463386243\">山口修</a>"] },
            { photoReference: "AWCwydgkEvwVutuLYlwRveDHi-B3NI2VB-v0rWAKZjf-a-syVQylSB7thi5Q-jzp5PcHAYcI9dMTUBq6hjhbq7ZxjzCvG_I96iSYDd54Uct8KhNRkpBaXU-70mkWKW1D9ZnJrUVO9kAQvP-QW1nyfw1c4ZhwVQn1_J3nxqC29QFG7LkfEBCxy0Lv2P0z_0IXF8oVPbgIHbtwgvNxofKA-oTQ9u6MjvIRDNXFFsQa8GHna9l1IKeM7-vuVNcXfapg8htxo19Xa-B92wn3aqpJ2MwkWup1EAljmjqCK2J2poqbHVTyys0_Oo77MGzfA89XYXCqNumHIQLE3O3xSeXemXzWoYUnE48MvwMfpcAoS3TgTfsLNlOKXwfzMBaZo2lGdswMoaRQ5v8EHseI5xT9vS3AQrxIiXe0Eed2TKHyTxJPYyzbd4Ad7Dj4IMXkd1Y52zDX", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103011202903260911328\">K H</a>"] },
            { photoReference: "AWCwydiKLjYMXT7kXzV4kF3mhITfH-NMOia8Zaz-kfdsykauaCXu-5Emp2xcjWSjgzmXnBWm9Jm1oAmba4gVZ_3yaasc72fIQPvQsMs2fpM8a_1HfcFXJLoLxRksdV5Hth4iroPIAjBv1mA1FEGqh-cdKpfktPECVL7aBa9VVgdCse6ljU78foU2byNnD8SbQhdI-o5Zoeoa_7makFkR3xkxne1MU768hqZSzkO2h5YM77d-vLxM_iltvBIOupU3Ll_23khfW71Aw-Qw00sVi7bTjgKTkfHy3kPxIgnEypA8BYDsfBJZoO5wx-tG1V13CTK3u4OnilzA9y1NCKpTNe0FZmbFzKTvqxej1tbLnVEHkt5jyuk99n5kmo9sKbPJ9oaj-Ws56cIoKuLxBXSt9Ay6Pchau4CoYWGrq36awi0hPBlllChZb2hmQCggxQXQIQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110340266522754746915\">川畑智里</a>"] }
        ],
        summary: "다다미의 역사 학습과 나만의 공예품 제작이 가능한 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다다미 역사 학습", "공예품 제작 체험"],
        tips: ["예약 없이 방문 가능하지만 미리 예약하면 편리합니다."],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒542-0081 Osaka, Chuo Ward, Minamisenba, 1-chōme−8−２ 順慶町エスアイビル 201", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://hashico.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11971039405576560683", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%BC%EB%B3%B8+%EA%B3%B5%EC%98%88+%EC%B2%B4%ED%97%98+%EA%B5%90%EC%8B%A4+Hashi%2Aco+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
