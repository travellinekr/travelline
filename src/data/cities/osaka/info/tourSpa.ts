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
    }
};

export default info;
