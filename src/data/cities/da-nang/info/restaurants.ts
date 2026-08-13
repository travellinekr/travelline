import type { RestaurantInfo } from '@/data/card-info-types';

const info: Record<string, RestaurantInfo> = {
    "벱헨": {
        photos: ["/images/da-nang/info/restaurants/b-p-h-n.jpg"],
        placeId: "ChIJhZF4LwLzaS4RRIoAhtrW1yQ",
        placePhotos: [
            { photoReference: "AWCwydj5BWjWTbF2-C9HVAhUEoCoSieOZh0TS4wCUGu6bKQr4xpr5kymZPGQjLmFKCdX2-7WZfTHAUdNqybbR7EtlkDsYrGjc8yvTfa9Qgg004pAi736TphFjkDyUaFI_ZGfw_Rbl6FjkIdxa9JLC-qVU02VwswiL5sB2X_reBQ5_3jwR2cT7pEh36V-_qVyzNyNSaeNQJ9pMT1APCnkBYpIf9impDUwahHfkI8JXWZwQD_wyZFLXal74_mo6RnWrkUmAgNyRCRfB1A5_j-SG_RY_3d_tjaWcMXJ5c27p1nBaNJWTpqnn1bZZtjXsC9aFJ9iZCCZ-IIR_WVHeMUmYEMoSdDtJXvkSj5g2CD7hRLaQbz2hjiiJeFHJ8EC_Xqsvo3QS36s08XakrBQqtDXXVigkr_mg8xFgF8j7h5dalH2unN25DbeVQ9YHFzKd9Cy8Xbb", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116604802429601100268\">RM A</a>"] },
            { photoReference: "AWCwydgNwGwxYwV_hCeIca7BGcDIaxrkOmN69Cb7DaXjfRrBjQlhFciSqb4JVOa4JFXui0Z7yzdbnxg6fn81rw9o4KHDPI1CU2xPrq5uktvP9JJdf2ejI8hf5HSKxxT5cBTqUIZM_wIkGL5G6CA3bqr2RjPJ7T7nEhaQXhkwLUwyXb-njGOf-p8MoXj8g7KJoe4JAXucCTi-hAFN0JGck7ZbY6ndGZVRhs_oKc0RCY1Z2HzZlYUYxiNGjRHvPHd3MdK8PB47T2cApuxGsAIfp7TGKlkOQItXqCHJ6gMFrzNlLqumrJC2CjIKASiA0MOxdGZmnp05eJ3Vw30UJNJ45Q5JPUdtXhXinPb0Rbl-MPg0ffzkAA7GZeDoFda3Xb7RlGl6GME8OHxApREX19Q-2-vHcvQcvOy5XsOZly4WpIU_WUebKw", width: 2992, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105187685944767429042\">Wulan</a>"] },
            { photoReference: "AWCwydh140QyBY2IqzlobmtpDyA8h0M0b6lvZyD6uQ_HDCT16Fgo9l8SiP2jUsgVZdVq9KSLOQO301H9FmOAKZL0I9i5S-KhZJmobPa7XsSAHzMLk5k4VPNSY_k1VcdgqxBfvU9lWeoGlH3_Pz4tRVnmq2jzWhdZ4FuuuQRAcXUbqX9ZPNrYD1TNfwbKOoswxa2OqgPU8AlsvIOoHSrFPise3YqpyWExBHgntYs8Cd8vXOLLFOcpA_4rG_6YGm2AFsT1wmGABPIQ6cpenWzDnszY2vMMdgLtOqrjdM7dSAJctu77sVpZvYm4n1PPgF6Amh7GhWQZiT-2yygkgIyEGiTONgRmWAOftea7dY-73_cfxSwsCUQw0EIXk1GlSr8Bw8l6Mmam0fqJGeIdvZ83xd6QtoU8OrDZ5DakOi2hPljGuM0Cew", width: 4032, height: 1816, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102461787256453466005\">Dwi Febrianty</a>"] },
            { photoReference: "AWCwydh-PHM60ZaJUiUeNsGrqDeEdEXa3asWU3uJafV-uVQ94akSDs67Wo2EqSQe0bIUnhRzKw7q1Z2wN4eRjiijS-Bp4XZBXxNgtuuVavInSvqmAmwnwMynbY95Cb0pNC51Utxx7_nOqksHeTK1Wi5HBis46e9ia9pFZ1LdV-FCTDWGX3TdO1MQx-RGaeZk-vsVQoBZ7sx50v0VULoZgXUja3dlSX5nnF3xyBGCp5r5KP9PNuVCyFpEcLHGZu7h35Nb4w6w3DAYKAsOFV5a2fDQUmQrp5iGqIYvSdbbCrZZ957h6nSvgSTkJ-A1Qpojg4_KgnB48yxAWvGww6PqdQ4dTpBd8byHGPOMK59povzWnOMbiObVAcRw5S9lyl0ZFErOE3OZDjkOROQMBXKtubOC_nUr3nPCOpa8serQUup8vEf6S4UN", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117066651325157761166\">Brigitha Vita</a>"] },
            { photoReference: "AWCwydgPBQ957qrAj-xIR-9U5yHqT06IBBe3JXCjmR6yod8TqmM618FXkCUERt9zpEuUdtCJQBWBwnZfvMPhXGYuPIYLFIISYxIBbSFeTt5Fo8cpzLk4Z2ZaSoMffQXxHDigc6oWuWFgFjlPpaE7BK-6nHHB8-3OKbWGZFe7QMR7XlmvJ_pJWaD5B5Z_vRXfY_3cMSAgGo70pY844HIs1AGpXExfeJ5HPt0LsypLJZSD_pS2LJyHUHuOj8jIDr4_0-QGPSx9O_yiKlJKvj4Py1Kt3mfz07hwIP26jILoav1oGvR4k9DStuidVYUr07hzn7CFNwO0gCR2P2hLTeA8ZPMFeMWCmzpl8BP2K8qwu2Gvdtkc-ERToZoqywyLy-0a30Wl0-I4ImSixnJxmqpCmo9zAuhqwNOPh8oBrqGPjY-AFnyP334A", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101208368679880030819\">Astronaut Eridanus</a>"] }
        ],
        summary: "다낭 현지의 맛을 느낄 수 있는 높은 평점의 로컬 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["현지 스타일의 정갈한 음식", "높은 사용자 만족도"],
        tips: ["점심과 저녁 사이 브레이크 타임이 있으니 방문 전 시간 확인 필수"],
        menu: { signature: "현지 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 10:00 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5308597685978446312", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bep+Hen+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분짜까 히엔": {
        photos: ["/images/da-nang/info/restaurants/b-n-ch-c-h-n.jpg"],
        placeId: "ChIJyWFmArX3QTERon6tUT6re4Q",
        placePhotos: [
            { photoReference: "AWCwydg4_-GzsfrtxjNAq9Ozb3qDpdl77pY08XZAWlNX4qNQkBSkv4hEq2WhiqXczPilMl5byGdS8stWSNvt9NX7SB8-_CxHT2NTvi-AdGD0iDL7DP_bLucZC2nFITjKJHNe5Qp1jkxg3JV81Bgc4oM-WJCrDDsdhB0qwGyoz4Kw2YeudiyYmhNj4VcyZBNcfEcphmyY9Byc5SJXAbpZOYf99oDCpVVOw-mdI8HCHF2rZV2PAM4ucboBiEacTvID_Rn7wa-QZaJOOzvJmURXsnyFgusdkYl8313Qtl2EuYVp1yrGwMuSGGu7Aa1U3msYTwa1pxuvxXYi_RtB-XjKgcr5Te_8gKnfOl51MUYHrIOYSZjMeM1c4VSqzP0VtOzfMTVg_Rhsjsrga3OBLw_0jN1uVyzqAcgsM-zVWzHEQ6ChqRfb0wod", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109312972899103200575\">翔任（TAKO）</a>"] },
            { photoReference: "AWCwydgggDcQXMSBtMp9FecGiSi4pIFrPHsT2hhEwgcqZvER7441DSsHzpvWBmjGmX_2ZfQ4H8wblpQhKGZ29XMuip4jppzyIyunQVcIHf3XFKjl-jZ4bh-HMbCjcxERthcJshddj8iHTy7ENRzHKKpkKZcaoLsJQ0-EJvm6VNHGsjMVvH_Xqj6e_ZJ-duD4QlAnqXGwSqZ-bbDFC2yRobZdIO1jkT4L32P5AMNAKVoof62COSyDBVWnIU6xu4xfva8tdH-a-zcFinVA0lg5QXvoinIpExXw5L6KiLgazGNsxtIm5codYdsNMG44wOxBGMCmM4sYncVO4oFb1squv0Xmk9h574LP14-ge7gcGFmDCb-04brx3MnG_dwsAhYPG5iOlvS4Vo0iTtV7MoOn2M0PqS1rvjkcsoSBHY-3arCR3UUtJQ47CFMMhevNTgPHjYjb", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106577606141164057598\">Liz Pham</a>"] },
            { photoReference: "AWCwydhnRVfI81RubRT63tS-qypTAXKa3u_wKX-SldQrGUTC7CNqoY_DAj2aVYu07Q079a6gZ1jGBb_-_Cd2GkI1Kkm3bb8WFlto4zk3cSmiBn3JtyToF8CGxv0Crtsg_wZdj6HGxtb3bmaPld54bok_SAv_Tj0rtVla1gDniqN2Yx6ldJStP5TXUBpeSkJI3uUnsX6jf2w546jDHldQX3QFNPz4buBxf2GQqrV9vanNqnXk1UabZXYtWVqB3e69_OxKrFljdS0S1CE_HPsHXQBld2T0chioI2Ne_deJZgdD5EHu33p2fdKZ2_Lrksa0nlokVe-U3mMvaQ5tRCXkBVyfkjiLL-knLUENOFmx73iAW6fVOynR-7p3xxSBACn6aMF1BEejeUfpaCFihl3JzcI6nVPTKJl6xyQgHE146PAEOQ_vsdA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101251444186133371801\">Bạch Hoàng Travel</a>"] },
            { photoReference: "AWCwydh6Xui_3GaAGjmvU9C7448CWPSDFZ3_vqetFMEfdefkhOqWcbWjbZpD43xDLDEWaYb0m2kpqvJ9kyd08bhaXBJCoViiFK01t26qdvVpiMpcvrCfDj-4fPz24NNGQ2uKM8hokEOjtHxgOVeu9UuObSb_IGLXAXIvJXLiHcIiBrpzVAltBmMB128nF4DrB_P-LUu6kV2GGRib3hbajGAlQmsXzNY3Ko4lWzRoJIdBChtWvOi2pb6B7Vw2GZbfO2YxuJ2SpG-9OSs7HfO7AOcLsLXXfA54VZpbLHpZ4PB8MDxZWAoe0rb71NHsZ4XdCZMUZwW2wk4kiF5trp0TSRQwvdTGJjWUr9d74LeWQOjr9leURRs3jo3XEOSZIy7rZwGyaqsuOC9T--92P9XV5WIyf-y0FmO33gdLHrsJArKLH-nqdtv6pUQYhv82rYSbGBgX", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100024598890102451617\">Duy Nguyen</a>"] },
            { photoReference: "AWCwydj_72RXreJUyO2UL1aVnaWcp1KIObViNfb55X1HUv4ky5W4QgGA4r2IRYUc5JKDN_mZp7lC3tVd5OyGozef3AFygKRmTimevQK3vMOkyDCutfFgxmniixUzRpkNujj2VjK0-gtmuB6r7KIG2eBrvT7QRCNBSbmf5RtJ23Koryy2i_8-7ugelgrz7dqzY5aCq_FZ9anwtmMO_Ts4yHRD37zqSLOMiMSpbEGozzRbVZ_uA8WdIPNC47e_C6Iud07vgLxoBeHMpFqt1Oj4ycAnMsZitFWHBTXWoDfTmRkcFelYgal_aq5UNPTmFFcEXJiIeH4UoQGpdqvSD6jgtKGB4ZmnTCSK0OWV5sVwG88el2uhrAQZND1uPTh7iaFSQ3sUEFZ1-Ei_Ul69Rpv6Tpc2p2LtTFC3hlXYH9zfw7Xy2uEmCwbGmxplZX6QTS2wew", width: 1983, height: 2684, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110274109939713565022\">Steve Carroll</a>"] }
        ],
        summary: "다낭식 어묵 국수인 분짜까를 전문으로 하는 인기 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["신선한 어묵 국수", "현지 분위기의 맛집"],
        tips: ["오전과 오후 운영 시간이 나뉘어 있으니 시간 맞춰 방문하세요"],
        menu: { signature: "어묵 국수", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00~10:30, 오후 3:00~8:00; 화요일: 오전 6:00~10:30, 오후 3:00~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11929535624356975781", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bun+Cha+Ca+Hon+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미꽝 바무아": {
        photos: ["/images/da-nang/info/restaurants/m-qu-ng-b-mua.jpg"],
        placeId: "ChIJ2eEwIrEZQjERmUcku_xN6pw",
        placePhotos: [
            { photoReference: "AWCwydh9BTFZokipL2aLkSzL3OLexAwk3ShrQEQE-B_2P5fESEmLJi3WIyUNWWQXHTzO3c7j97dElAmRvqypJze14KInJqeI2Hx8z8kwHvVMTxZ5P8EudxwcDBg3NLKAO2QRQMRg87MLItEnHVzK4KF4SHifr4Kp8l14rSyfh9zJlh4hnm1Q5ol5xUDOeJ7lzcnZw-6AEYwAIsq5Xp-bjTUuw7kDfOLr0YXvYGHLb_31CpHftQcwvXBJnctG1GKInHwcb0BYEvzYG0oAE960YuqOk3H_unq1muXaUXyhTRMKaLKFRMbz2YhpOp8WD9K1z9kb_dlzAFR5N6gvuIoNKfuozhY-E5ElcnJeePJvkOYSy_sFdFy5KwYhfKmQQ6LYf1LxWfRbUx8BEL_lHVDujMPQz0B6VtooogUfWE9BW3q1A70fa2Dy", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108993200009133131240\">Mỳ Quảng Bà Mua - 95A Nguyễn Tri Phương</a>"] },
            { photoReference: "AWCwydhhfZS3mMRAjxiVCziOS_wlWD5x4edxn_TMlBfbGxgY7uQx9S295GcXvBpQR0Bz0R5JYv96IFJQuXZoTfTKDJvqF1Zl-Tq6TYiY5c0Jlp6SP1dGlRdIMQeyzwxcxs0Z-fT7_nIiDOtU99fpTYDd6l0FhSxWd6STcptSI8dglTsPza4c_DFf6OEfZouzzKBxctupgF-IOuOPpG2_AlEbJnUO67SJG01SlN37OiviX2vzP_eYPSXwyAFgD5SdMGeek3KJxOB9erz9a23y9L2XvWf6tfDo3ChqiPVXYygeUEXHBOTzFIYrSh16ccYmum4fdObssoaLAaONqgppzWVVYPi71ZDVOHs-_GCwRqF8_Llx6QEd6jBbx9Tb_9oWv6dS_YOzBinzq870qOJIna2Qn_tLMfK6b2HHG5v-BxOo1oIOcQ", width: 801, height: 801, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108993200009133131240\">Mỳ Quảng Bà Mua - 95A Nguyễn Tri Phương</a>"] },
            { photoReference: "AWCwydj02ae7FRM0291AgZOLfdxfAUkd0oGMuS-FTZOX3yQUnXxvLjBPbvto8AFsTMm7VuSiUKF0dZKiyhGcXB_9c03wh8x09_qfhrFNzoCopIxy__UtHRl9pyBDa0YQ7TuujaN7cRr8E3lGtDVAvfwsfFObT5H4GQy1lSPXpxajnEFIkByU9eu4Mujp-5v6gFlsh8RpsTJQE0g7zsce-ld-g7i4EdcC96JqsqQEWa2KRNl8RHE365bhHJ7Xdg4RxVZachDjCXlsu1NQqg3Z4lFMxhKyVu-SVjafVlRqyHHHCSMA74HxyYHOnbpNnG-5pu77qBCVIREnMvEY-51ToYxmutFynPHRwQc-5rYvUh9EybNrAnLqxmkAUP5xHX2sSnZW5Mo6fV4NKLoPw52bNkshzCgzF45bkRm_yj1dw_UkQ0lk-qNNertC_9UhR8Ib9Yuy", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112837897221396379331\">Minh Nguyễn Hùng</a>"] },
            { photoReference: "AWCwydhu92W8nbDHvSe_TcLxCF7JZtjFei6RFHUKy3kcUoRDmKcFEf8A4cVZi_3NSs3kjyN938x3h3amVA9MwUhhQ3J9K4M60bNE0Q2YPjqdD0lT5u3oU_mwBkYaMO65__4mel971z1QViub2NMnmUHWu8k9Lxt8W23njiOVqKvEaUC83v4atYvQcecCDj-G6aBmTbHQx4u_6HLRAV7t1qxs6ixaKlTnSxN1izGZSNdZaJfhOUmU8uOdBIWMSEOCwijNTd4JRTyTXantxdM1mbQll42Byny35womAWGbMpENb2gbYzygD-BFffCzCF17i0VR4QxNZ4XlpSn3VusRD8TeSkPCMdo3xRENHrFDMLE0no8CELws_jIZ5G5LOIm6zg3RBMjwSvDXgj4Kd97K8A0aohQZEDYkchpUzzlmU2cO_s-GmpouH-Zxst8h0n0YfSk0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111106767271910572334\">Đạt Trần</a>"] },
            { photoReference: "AWCwydguHhlQihM1DT3CZWqjlDxCtACkOgGTZDIPgcqYg39qmOo1n1ZY_hTEcnm6dy0szLnNd5L0pFh9ADQLiCI9cEJNzSkZA92fFS8OcpcE_O4rdXQy5oKJAyPx6e3sVD6QSgybhkjdi5DrA1sFN-ZuxQod39Z4bHz-QsVQ4-9VzG9uk18Mna-tTfBf6fMd18_XNNFtvtSWnAa-Xgbch0C29ERXRvtvaXFjrB_DBOYWpmj8GImUegppjCwuTORZUOIv3YBIs6QPllgxEJBKe4_EIhOoglGOy7QByKpz4hywYxFugOa84JufBW858Y3Mpy8Gm8WzBKgFHiSqdImTW2ssPIOcIWtQlh49XCAExP7sSYHHFo6Dcxo6b_UukAqMEofzCFj0RTFQJt9993WnGMGm6jZ-_pKFtR1IQFORIRwY_vJ864xZ6oDWKe3Gz6bofkVA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102379898616245928592\">lai nguyễn tấn</a>"] }
        ],
        summary: "다낭 현지식 미꽝을 맛볼 수 있는 로컬 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["현지 스타일의 다양한 미꽝 메뉴", "가성비 좋은 로컬 분위기"],
        tips: ["오전 6시부터 영업하여 아침 식사로 방문하기 좋습니다."],
        menu: { signature: "미꽝 전문점", items: [{ name: "대표 메뉴", price: "₫50,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13962565705902010185", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mi+Quang+Ba+Mua+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "넨 레스토랑": {
        photos: ["/images/da-nang/info/restaurants/n-n-restaurant.jpg"],
        placeId: "ChIJ8QPkSI8XQjERpb_q7VVX14k",
        placePhotos: [
            { photoReference: "AWCwydiSf9107wQGjTWGrpnyn2bTmynEnXtS3w-SoVoeJYfFqMB51I4ViUql13xuKYX7h8YLPUs64pxY7BYXDxNMrAMAOHXvzqBsDnkGKPPYeNVP_v22bnNC9WW3eyXgUf_iQaTV2C6MvGbUn8Gg3ChOBLGrT9gMtITc6I_C6ULDmo7xsWCmAr18ntDd466Ok9eGlLaey7QDZcnOJn_rU3eqSPZ4Ezba86i3LPmzuxhe0LxwNrnDFU_esXClcyQXS9NrzSGMm5uarRkCMk_-513IrnhqiewoOOqm8jZEJm5EKpQmBtycPygX-OiKqrE6-f2nHgZExFv548llXtJj_KAqOhEpcYrNqM4p9OOXI05_hHKv7at4Fi_h02tTobE7K-dJ-iDjDahDi4XZJFlERnLLqZkW1Ji39pjqCZoNmtmgr2v0-1jsTcBcBGfemTYUyg", width: 1108, height: 625, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103134673256979576371\">NGON DA NANG - VIETNAMESE CUISINE RESTAURANT</a>"] },
            { photoReference: "AWCwydhYIp-zUoZjzDtDTAxnTOogECLKAjZvBbnY6Mzm6EFAlt_EAkmkv2cDcisD-e6CFISsyfUw5mpb-T-_lTwmYasFQgZi4haBw9gLoi8vPaefWV-doUIJAq-GByLlVrmvhAGxAc7ZHZZKvH7i7SfLnCW35rb7rWdi4Oof7_MVFn1R-PjyVpdAv2e4FS8NERoyasC-ouISwQTcb33FWNrZGjOgFRTtn5B2VIq-m36IaFK1HJXGy_Tc28BfcIzJ3aJ46hT7XcieNdcN2ZFzm4TeN39wlnk4Dj9cdlYQ1nRHApybDLDZR4NrmpQ3UZLnRovMiZlz0HIbf-fuhV4FeDgNPyCHmgtUuEgyk-RK5bmia0Eq0J1sUcBMQ7vBG3LP_6CBrvoAD8bLz2k2KQ2aJRzBozoWd9BFXngAKzW5C6X8DNByMp3oJdVx9qObwM22jeLS", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100952048481889890927\">Revie Aguirre Masirag</a>"] },
            { photoReference: "AWCwydggruxy0jvK-k89MuOQwU6g6g3lcRA3rdZ-G3dlc1qk4hjQrYbGmrK0Lp0nkA3xnsaA-y31i4B1tNSI2tJC5EB7Jj5POIBRm7gnc0PC62kE4GQ1vAccjjtDV7jJLqC9ax1RoSnQkIpfNZpqXziSFMZykToaXexvCILZjC2umM-iYku499fko5gTPK37pAAxCDupHV1l4f84_wGJC2NrNnKxv-MJyESKcFVISMpt6sxf1joYYppzmIrUaj3cyws0fHJFZtukgug343-VCK2-qHV3nmb7YnM9B_7sjdkxILyjFMzLVZ5xwI3KRFOdhgLQf9CG46IcwfbfZFLTTTi8Yx7NoWIJ8VagI0IALwY50Zrg0RXdG4Fpl4FRrnNkO13C6TZ1dsDdRLhRGdVsZhw_FtgK6mXHLVMEhtfkvjyxOxL92mAc-WCqdgM6HZ-yhnYN", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103134673256979576371\">NGON DA NANG - VIETNAMESE CUISINE RESTAURANT</a>"] },
            { photoReference: "AWCwydgGEl2fnOiWlCUdGioz1ByJeokV__rmA99GrOxMDVj8z7qpIETxXf-nG2fYzydQyTYRVoxJsiVFTdjrCW25_nraoqLIfXmMjsIf5dQplyxDK9cdMz2rJPGC6NIgI5kv3Z_kVxbkQYtMl6CwEE_W5blomiLLjxtQJYTmqWVstHTuqZwQue2gcklpcz7horqnPvNhEOou0Le6RYww9nTEjCU606o1exB9DINtYMigDZw39wLEfmI8NIY72ZixbTyJtJqIrMetisuY5A0ag9bwdNwD0b40T4taB2yZHcqO4FLZSE5jrD8YQecTUl_rKg9TnXOy8IyKS29NdX6zDC5JKsJ9z4TUNhy9Y3CNOjvBFgg9EoCbecIlVBObK0mhkuNvzSJfp8nhQGkGsEgthUPDYXtEq3vxF3IJ2RTLEzoUGh65EEJPjV2PGxE-sur3D8ZW", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104662605985839897346\">Lee Hana</a>"] },
            { photoReference: "AWCwydhWkUd2OenA-cXk8etyNiPw9SEq7zlGaCc1kkLkdM9AOQadZu-4j9K6SR56OxLpR-0ijjNj116a2AMtcs5MrVBqjFjtGORoPpZvCto4BI0x6ZlxzDMy8Z5gRFZp2_LR0IarK0wOFj2-MJXGwL5EyV53OveUSZ7gyPiuXUAqlayUlSNlWowlQGCENf50GqYID3fjAew54ow3z2xmMFcG7sas4QCBtSMHg-izS09clPLFF8-4GHowjqEhkjE9Sxp6M4WCiC572ACBSlFZTwD46LiKuGoN6wTObBcZ1xOMnDjf5AQA41qxoEjipte78MU1tYhNvdJmmPdTIkG9izH8bBr43GvyRAmjLyp4gpENTgsZxDzjIyaqWQHd1k-J0q660giYSkYDTtmyKk1WOMilT77ounsVajmUsKsok50FJjusVJwmoCyxDZ3--u11FgXy", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110159996307656547266\">Алиса Литвиненко</a>"] }
        ],
        summary: "다낭에서 즐기는 수준 높은 파인 다이닝",
        updatedAt: "2026-07-13",
        highlights: ["창의적인 메뉴 구성", "고급스러운 분위기"],
        tips: ["저녁 시간 방문 시 예약 권장", "요일별 영업시간 확인 필수"],
        menu: { signature: "모던 베트남 요리", items: [{ name: "대표 메뉴", price: "₫200,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 2:00, 오후 5:30~8:45; 화요일: 오후 5:30~8:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.restaurantnen.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8551481328389375797", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nen+Restaurant+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베만 씨푸드": {
        photos: ["/images/da-nang/info/restaurants/b-m-n-seafood.png"],
        placeId: "ChIJRbc3I34XQjERVJhz7jDCiRQ",
        placePhotos: [
            { photoReference: "AWCwydh7Fp3mz3tUHiWNlIkZVHEzYFrELrTySAczQZL325bqRzhbUj-Y4b_VIj_lL-NBPq8MJQaFWWP2jf62lsDS7oh2cnRynubH0ufaERlj3wJrsKKSH1XHlAQ5zx-82jsLe1Gh2SQVIgMpbODR_iG5MRkcacjj9QIyEHvzRc4Oohqdqz5kDncZNUhoVNEIz_bFEOeAOzTPsYIUHdP0G3iO7uXtCu-RGJlzgOhxIj0M6a-kLYQQv3QhBW7FRqrFgz9nmuBCjkAZP7fH-VyVZxdSv6I1z_Ktq6FpB2PzIEOWgrJfPeXrduVvly8-FH9OBBcF-8aO7YB9CKal1veG9-NFur92Rdjo2oXBAfe_eQGOtI_Ds3u52i8qxvzLZzGYHs01L2nmX4tBP_SHIKPQkcO2skL2WN9azi8Pe_hRwTF1itxPkQ", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105274095714894672657\">Quán Bé Mặn</a>"] },
            { photoReference: "AWCwydibrVZrgKq0XXKpOO6ZfcfwVTDmrxPPcCu1ILTzteB84SbXydEHzdqUUs4q3vsa62CklPZ7vy_DUI7N-dvO796ePPhJagZlIvALeD4gjwapqct3J_W7GknLPkkYdzslX819vhOWMtx2lsIAD6tDZdphPfYpr4x1yMiO2Tk28XTMQvOfcFv5NlVgvfgPsUhb9xG0sFgWydThMmSFzuirgsCYELP_-bOzoDOqtR5H41pq-H4affs9CxhyKj0Pt_Qq8k0oaxufEX7mb3_1Bo17W6jInsg4QZdOsEkWK7cBBnty4aNQCD2GJIEtC7DnL8NcAyTp7X9ooVAZRM17temsX2v7TqoZrLyAeO6NOAE-c123LuimKmyvS_Pgube1iuarvyUDga9W5kj8uwRysqoj7UBRDWTqUNyQ4imbjK43Bu8jRa1qWRPHZ86gFFDKFbwa", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102178898599904973884\">NEERAJ ARAVIND</a>"] },
            { photoReference: "AWCwydhdygQWA0CJX0kdxN9_YAXhMWfGMCbtEjp1tWdKkhIDI7TQTv9SJA9tsskjG55_pVOBgBazaA8ZPj4E8rpYzs_yYXKawiGketiRH5gltEKIz-F2JVPf-4huE6NCxmexT97lmzCW9NiW_qcRyP06KnCfaODR9kQoPh4ew71Z0w0xW_OXw0VqozqJo8I2lREu0ERv73Xg5jw7Lexsrx10qN5PHZgOOmixBZ86rdwlnJtHZKkFx55FTy0WKnuhQiLXZeEYZNrx3zy_xYD2lsemjmGt0lIDIDvL1-p_lxm5pWJNgvsyEiCV7YrdFJvnCZVcoMfP7_xsAM6hcIKx97wGir-jvvvtYrN5XeDiTh2y0TJvWEjLUTX3nXKI-W5vWNJW1uciB6lq0XB5a5u9R4PRZ_xsHHZa0eb12M30HutEPesSSfhMwW1WNOQFhh8m42TD", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106005270501903086077\">Andy Pham</a>"] },
            { photoReference: "AWCwydjsrcuQNRKCnr5tyC0fEqizPbIJU8op0GGx_YMjKuO07-yBvqxXvwyl8n1VnOtOikxiCycE0pN8Jwx69IAHnZABHC8ycBLCn39jIOPA9HTdgVwhuUzS69s682nDHLB50f5IL0ZYpW7vp6Ljrg1VE95kFVCfSevjY47f-z2j1aY8--16REY6WafMQLW2BNMa3_a3xoMaG2gergDkokxtHHZqY0v9a3ILVKgCPu0zrLOx7mLAXb0rReGxf6_hzHN2S4UelhAXFJiKnQ63uO7ixorbAh10DbKq94TNnSP0jPp9QJ1bTozI8e2zEXlOZihH0elrm5YvJKsx6SId7VnxyUXmSEb09DygIjjKy1fSFFnBmrNZsjRvGSfLh-KwYxJA1GiPxq2xMCDUI_3hK501rFfHdKvnC0wM7kYhQMfMA9m_OLEg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116512380803308070061\">하정우</a>"] },
            { photoReference: "AWCwydj6FkDMRwpAktfhcOVqAvJZNBXdtuOsquW2NfKzemAzkhJyCo9JB5B-xS50OSm8xOMr043P9ECl7e123UJ0-MnTzYeTgtcANGKspBZPhpueED7YpVz1eKQeO5OfP__8zSeRHxrARIaPPjCqpi_VE5kKBykfUxBZFbCn_Mpi1SUEfUDY1Zt43snkRnx6e1w5-Mq4NFex-5QlU3R4wJcAi_MZRXe9C68aaPMnXKPHTfhvkbIwvHGPQEVRFg54w3BaVCO82W6M9kX_eHUaFgUi1MUzisZLy9xMCPvzY5QwiWcNu-otZxc9vrgh44HBIt_unAxerJ6h0SkF8gZT_SXbaCQP1tGbzFCIvZ4zddaVQmfHfHf_bZCrixNnw0idw6HCggFO8zZq3PwmJwdIBpZ-RqF2fnOGgdqixx3yhcCZaFv6TgNKodclXoBXueOOU8uy", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102178898599904973884\">NEERAJ ARAVIND</a>"] }
        ],
        summary: "신선한 해산물을 즐길 수 있는 다낭의 유명 맛집",
        updatedAt: "2026-07-13",
        highlights: ["다양한 제철 해산물", "활기찬 현지 분위기"],
        tips: ["피크 타임에는 대기가 발생할 수 있음", "가족 단위 방문객에게 추천"],
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1479927467982690388", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Be+Man+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "남단 씨푸드": {
        photos: ["/images/da-nang/info/restaurants/n-m-nh-seafood.jpg"],
        placeId: "ChIJkYkOmOMXQjEREz4KLKpwAOE",
        placePhotos: [
            { photoReference: "AWCwydi4vlhV-FaScmeJpTQiRSzOdAvwAnQ32_OMLaIfvJw5kpGbXtliFMUQFQHL0nDHmGGdIUvzL2SaCwfE4MlLkOHIJbcVftwRbDHcgATXVuADgigmn7OmeTdDYMh1a2xMByiN3I5HJa6YVpap9yxy7dFyHNEFp1jI1y64Ob7S_PlDHI_v9jXq_9m6OmF3Spni4eVnu5j3ehXt4d_YgxbQVp0RkXQEOmuFUzCvVW_5EcAO8AyP0iBDX1jSQ_2KtSDmISM57s2e_OT1y8iifwcqKU1nn6wmPeKiCcZGaZHUawLrlelxSzOOu2XEdhubnf7K20UluIAssz3jci5cYcvxyFYYsU8aYworneq7GW64JYzkYaZVQRSn4zHDQfpl49v01M3Zn9X7EVLc_NCuE7DPEWjpYPebGhEO_S-WkhsB2ixdwiaVImPmDsJSVQ6ZdP4u", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116305823907257224756\">Hà Nhi Nguyễn (Nguyên Linh)</a>"] },
            { photoReference: "AWCwydgrY7A7l4pwwliAFm6jVGqZsSnU3oxfnUoxPSDmJCYmLceP-8I4qZED169UT0pbQWNdxZdIYQqsu1JHlw1I0mW0eczS1P5qSN13nVd0voUm-0elXKnrmUr4srTaIuAV6wxfXYhkFGfJueoyP7sfztlgrcY1YaZd_Z_YAoHAZzxtyArnKaOf9Z3hnYVvTFcgvjbHaJgZqOH9k6o_ITVLp7etYdr5-698-kUIwhdwU7DwncUpdhCijdSozHGL_ucIROOQNdZ7hpTS-HLI_v90kdQSqvn8rJx4l5XAO4MmpNA39su3e3cOvlfH5Nx__KirV2jiyWaFAmtD8NXuZRx8NOp1L7k8zHMWzqIseg6tHi_XvbEpL6WkIsZ8_O9x65K-xSV6lDDmZE2rF_NrTRvsOnqio2n_fNMZn0d8EAg8Xz8yq1hGLhKyNw5MlpnYSj6F", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105048347498915906494\">우리집즐거운부동산</a>"] },
            { photoReference: "AWCwydiJCDlFFBV9Uh5d_0LLJ5-8NnXc_deBBJn7ZRqpfN7yJLZNWu6O3cLRRf2cRbmkOlec7UNjoMEw5QQIv6k03Ea6NG_Ouc7nCpJBHHTlZ-SNYjJKVygdEAnKnbJK9QB9J9HKs6CvieoDqNByj2bEIoiiw-HS5G5rKlcpn4SSu0oS5UqwSp0PFdIIXY9Hgk9VWS6PB7v9oZ8p_aRWN5xrTVWDvtTh4iSa51Sl8C0jp002-V3bUYJwVEbrVACGhN1A0rzrKW-D01HPbjTs_SI2MYy0Kc1f3x7s4n2YDJaSUUSw1JhHiMwWUx91AQrbMPna-FqGgfrgTK5MQBz66kTPIDxewYUFc9moq-ZuqJoBw9qQLT_suQntvsZbZ1d8ddAEbBbCePasP-mAT_jPzNilfuAa1-GvdTsMHJhIbqAmwJtdPYaUOtx1gcguOxgy9gBm", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111465009596190235872\">Angelo Wan</a>"] },
            { photoReference: "AWCwydgH1okWjM1j22km--fQ6iuFqd2fJMoAxWjMCIe_Fk79kiwd5YuHawsprk1hHsPbsQ7gP0MMxeeKal2T0xgq5Iyx8-yipi_xETXO3n5MFJTLDMzMe-9oDBOBWb6IOEWld-84nc0MeBO_PowBh1e3LIibT1qQDfKO2gzVi0ZyDn3zDJbrSToQCk8WkJ155koe0M9ZrvuL8zn6w7FJArT8s6jSEh4NC20YTaPnZgv9QoazMxHhMHKk6V409xp0afC7w2C1Qo3FcCwWj2RXxHNmOOYmQoBXydMPr6mMg6OL0XPT7yxXJWmSmjMSPsFIrHaCacuXFNHuuL-AShkYCLC2nRKM6oElUOEODMWdVdevrUqy9T0s6Vain6KAHbBb9w-_gXiNx4TKK5jjXVClV-0gFY0Az140fRqXr7ys28qtvNjs9ZXbs1273HP5zwmP3A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111465009596190235872\">Angelo Wan</a>"] },
            { photoReference: "AWCwydjkSicjBFLvOqtD8dVNznX8C6tULTdi-7ELGY3zcPRelK4WjN0XTf8J9-eXdjEruXz42rytV1ZZxNezqR2KLuwT3GyHfExKhowIKtidgQlKhA1_zSDW58CJigmzW5e5m9WA80HmMDI_pd2Pnsnom80XDwpg7Y_BZzWpe9vrv5_63qCqhIP_Wmk8xK6sLOSHmYdaqTB2NA81yXV_SjdEPU2ma2y7duXyF6VwH9MxKSF8s35kA4rkv43FdghoeIJrcIaZxhyLBTFnGJYn7DIOiT6dj-dH4rw7myg-a61_UmamrzYCXBcJt-BBbL_EuQALvg11XRtV_JgHS-gebizcrn46mvjcUp615X2rGcghUdirbNZR5g4EGzYKj-5xwrTrtcHw2SDeJzeW49VI7kDBcxqGhlzB5-moVleuNPFXZySvYDQmqby-ogLPgSTMjyMd", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111465009596190235872\">Angelo Wan</a>"] }
        ],
        summary: "신선한 해산물을 현지 분위기 속에서 합리적인 가격으로 즐길 수 있는 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["제철 해산물 요리", "가성비 좋은 메뉴 구성", "로컬 스타일의 맛"],
        tips: ["저녁 피크 시간대에는 방문객이 많을 수 있으니 여유 있게 방문하세요."],
        menu: { signature: "신선한 해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100063806033043", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3819754365879535270", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nam+Danh+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미한 씨푸드": {
        photos: ["/images/da-nang/info/restaurants/m-h-nh-seafood.jpg"],
        placeId: "ChIJudsANu4XQjERbLKxjXDLHtU",
        placePhotos: [
            { photoReference: "AWCwydi-fQ7AMPYFl3pSeIIr3RTWIrjm7iWQDYga3SwWFGC3mbq4R0YyRB2aGDffuvItPWAt9gWNK2iy3mH-0-1oqQL8VFGye_sitHP1AfDJrm8iVR3RU8QuwyVLJKreY7cTrqNaP_HM3qXDqqdUYTs272_RdYklHUKYcgakGNzQzUxcSGVviawLh48vht8PQloHq4_TOU7FW4YwhMzod6fz5KX-HMJXwu1GuWnEie53JU2g7MMs5HVILPc4MPCT60pIfNQ-UrgZRy_m7dvmYfDDlqiIHfj2x9HuCxI6esJmChjUGHQkYupL46f_LeqiKDVtqSPfe4azWB2r2GQn74AxxosxDUjjCmf8yHCtG_rycht4JEv7YvR3RRJqfv0eNVsEWPE0PrjD9GOGgJzxtqEq3oqGbCPUCbEw3whZN020UYUxpvGT0ybN7MPXFkhLgLHS", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115508086144446998815\">nam hoàng</a>"] },
            { photoReference: "AWCwydgnSM_ivuuzBbCbGeKlBrjO7PMhULBtCLlP09WXucjzfQIhTPCfe8nk8cuOkTMRgzg8BxJY2WbFt39bpKXHS-hGxoA8qOdamX-VJGW2lT6pnsSckqfX8FwiTrbeQMWqWFqeJfakeR2z9BUJO2LNiZiK52WYFPGOUKj72VFCk18BZ4-tfRrEH48J_2IT2ZDkotlE-Yo7ctMVNHrMIDBzIEEHCg9Nl2i5x1hJXlspaB3YimFhE-hXGPS-0QcmVgVSZVqdv5qhd0FrW_O_2UMTQ3f-mTvrT_Ec6jpPvBaxfrJKr5X99LL5OJrhsRkusdgIpYteIYlCLP3ZVE19c5t1HUCBY4AOh3nSNLSBLxjochMGBsHUlMhNl_cU15ZyUHwjMUOxLcFX_db7yjW8GfLE1H_4v84IFDqhnHAb88-RN7vaKXqdPodGU1zel9ZjdgRI", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101399812193053101622\">С С</a>"] },
            { photoReference: "AWCwydij7NAsyBYR6ObxZuMHYLz8XkG63nI_3iDT_dhMmJ9i9NqbbjlOryacsnLc7M10WXwnc6RhznLAMyQWocJZ-VJTSTo0Dxz7ZQ5FueXj3Ffq6ztumdpAxbwtpcjWuWN0SAtFmsEq_v7CH4EMDAriMYmD4S8V6VCafhbMGCTa5NDamAWi4Pm_lSXS_XYpKulGbBfM9FgJzaWIhVhOdbRoCUJ2v_c212qdC0dpi1VwUXqcnFodCDLztUHeIw6AtSRV5Rpenuw9BuZnOjTgBM5HI8-LqK8IJoaz21x7WmmNpKJsESjb0DHOM6sI_jm1aN50j94zfoNrf9xqcmlW5Q0aPps59lTuHd3cwSKzDyqoLTbEB8_i9MUSvb3wqmaXLLTJ9Oc19mFpJGMjMbxToxaQjpWbJwBjsUEQ8eI_o5jqXtBUzG3auKzreNr5yFD4KV5v", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103393076147674960475\">홍금희</a>"] },
            { photoReference: "AWCwydheKURyl2mAdJMTuTjKLT07qyBT1p9UcITiwkbR77xJEY1VQDWNn1PwVj1kHrL-TqyuwlfSyT3fLBmh3bVFHID-1bQPQcGB-fif_pXrH1OycvpANbY4zHsPrPo-IC5GPFJoP8KCenC8sg91ejmW_KqLBniueImSKuPi9PTjjLeZe2CMccpLnuulO_FdQuiDYw34ddM9g2C1jRnA_VpFfc1udBdQzp-sz-FD0Oh3fRU-YVSjr4AB8-p1BOMUYmw_8RQ4Mc6g-b07s1odTJQa-A29kRvm3bPhtHCDhiqnpywfJRkSaoBkzTNPJWDy8qTBts7fBGd2R9X-ySzGq-O68tvrrMEuVYl-vFZaZX2xSL7X-iqC2FYBoce12XeQrYsnm-HuXhs9HA5u2BDjoPEVJxCubu468KPvpWEbifwypS6OdKoMg7C6rdc-6P_IYVYf", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112292788317906576303\">Nguyễn Thị Ngọc Thi</a>"] },
            { photoReference: "AWCwydg4aPPfgI_4yuICYQ9zRM_-11y-NJHUF47efMyl2m-4w5UEqWwbSxFikEEm0dO3VjkIWE1KYKKyu7Js2txWn8es66lyyHxggHZXCMmsEGXVHB20YV4jzas6Lw-X2rKyVDJpY__Nsc4ijsMsa2op2mmxkJJ6YPbi6OFD5t_XLuE3bEI3Ujb6NCWtFqXAz9CHIQtXORvC6LHQlvEfug4shtcMX6oxaPUkWAyf02FfE6tJ7nLdPzIrCC2EH1fWvKOLSoMxzOVJc_OykW9Y3MCr9tIkqobGVGaw0Lv7e7emSQc1wJw5w0rB3hwtlzU7KdhTi7gzi-Ik8olIVKK0Y4U8vh0A6QJWGprNjd9lXNJk53kX4i10ToBU7_4MxnuoFupkhV7tVo0omIdzhpe5U6sd0X_XpFZm97w_wG5Xc0xfUHyJLy8wOa064Jfkl0XtEFLE", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103393076147674960475\">홍금희</a>"] }
        ],
        summary: "방대한 리뷰와 높은 평점으로 검증된 다낭의 대표적인 해산물 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 풍성한 해산물 메뉴", "검증된 맛과 품질", "쾌적한 식사 환경"],
        tips: ["인기가 매우 높아 대기 시간이 발생할 수 있으므로 이른 방문이나 예약을 권장합니다."],
        menu: { signature: "프리미엄 해산물", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://myhanhseafood.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15356935463653978732", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=My+Hanh+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "목 씨푸드": {
        photos: ["/images/da-nang/info/restaurants/m-c-seafood.jpg"],
        placeId: "ChIJx6-KGnIXQjER7x-T0zeOlBw",
        placePhotos: [
            { photoReference: "AWCwydjPiBPL0O3Ii8kygiHL1Le5FuGWgMegHtQrOHpM0bSpzID_aWQyUvakd2KrbaXHCmfMCX_3G3w4IvnR00RvMIh4U8TK5wk2U1jHqPGIq4KN7Ufffzu0sNN-64q0GmzHWI9Qsx48gpfkJDUPIpBTMx7ZpwXdO-eYwyvcJeDF2SVdv8eCDmlJFwyu74IlakzOE7MToI2Bi9vajl3mhdM1oatCzBXLUdHCAN_UkKqrbeLXUoTTWNjBvApTvMjWfYpUN7yZKhjVnkJzxIRFL2-VwEWUv0Jwn72VJfZNaj2oZjRMns6wXytC8N4WFJlm736FUgeNT9MtZUTfRIIJDg4Tm_e4ymI2E7KX7svw4e4I8HnzW4_14LfZnI-8mAPId_Ngqlf95EAhkeypXMVk3D4l8S9WbM7NNN35-8KVeYxIAktNG_-X", width: 2560, height: 1922, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106484236994945853927\">Mộc quán Seafood Đà Nẵng</a>"] },
            { photoReference: "AWCwydj4mvscSqR36dXIseWDL7aiBkSbnqQZcVzYcgqOVTLGBaqvsnb8cFmYStbWT1FRSD0VkVgpV0dyL2rDO19ld5PTFuh3kmNNfFdBofsW2aEXShMWCt5PPfFgw5PkOy9iLWB3SBmPVL9SUlYGLw1vxqefdCxDN2s7RdYchT603CycYTfmsCoPZC-Kn-f0xyRPk8Jho8Y8TtKh-duqLJPui-6Ti6P7hG7wykD865S83UdJsVZmmwCMFIuPh5B3lftfE-ekxT4cPeBBYLjOG-W7qCusex27nqzZCrnl7pSynlNinuRkKs8iXseDNeUBiwTFezdKvXiyMAr8USgnZFjJlr3dS1viNmZHzhTR3cKnaidj0enUf5Gi_Fr8sATijNnXNea3hW1O5ngZ7rjLE6RZ5vNUed_DawCnIOvJvCfT3vdh_g", width: 999, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106484236994945853927\">Mộc quán Seafood Đà Nẵng</a>"] },
            { photoReference: "AWCwydig9NnDK50kyJ_0ukip7xmfZ2NJYQO-88tVVkZ4VGXTMPEQ5GiC7AZ1uykvJCmcm834zVI-AAY9EiIlLA-pq3a9uJNhZLjLnyM9TZmoN2_SpuXew4jRLhQ00yzvslMOCFFsMVWBwikBLTqN8aiW2AcRqinVg0tLsx7x52c90In5h-D_LBSCCfBJnhiJXuoh2zE4zsBybfJNDF97MZ9N3CjMiq0O-03qZqZ6dDcr5a0FjKyNTcGuLctejpdEwbDBu19zJxbHAs64u6ddVAAp67tjM74gBdoEb7OayH6Pm1tL4R27Iuq-bRJU9PI5Eml4v5E-mOCJByhBt997nS_pIHcSQGKX8a-eWNTwjiN994DNgAx_p6bZEgk-1Cmgp-PPWOZWb6GxCgw5s0PdE_jTI3Vp0avs30rJt2wFM1ucMjfX9-4T5MzUmMxSIN8LXin1", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112905422226298393464\">Maru B</a>"] },
            { photoReference: "AWCwydhiyZC-CAqZM7bG456z0R7OqyzOEWYw7X4Xlada2Dh63ORlKwuoKxEnyRrGqsnGhzm7w2C7C2JJHzcBsEtfDo5s1fQmxO6X4owpn2OOxEK1un9uy-r7PZjC9nunpoKLlzns9KFVifCEEMJDXRf9Jc1dbyQeD9PiB6pF578GipPBq1aOpYMuAITeYnGu7R2ew1OGvALXQFAQoFRLBeU8daaEHv4Hud2Z7YJ4225B5CH1F2ParDtzDDoVj--s_B3rz4e0GtcU7pL_viDBRbOLzwHWJqW4BhjIPZfWcWjehnx9r2jkg7gScUagq9f96mFNgitDWEzod8TbItm21Szb8uaefBrjpFrsMoBasrqVXGtef9EXg6KSfq0Z5_xsTet8IYkKnUcpSyByUIN21roSnhGp2sanZf7Ybp5UM2158ThHoA", width: 1200, height: 672, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106484236994945853927\">Mộc quán Seafood Đà Nẵng</a>"] },
            { photoReference: "AWCwydjOGQ1MYV_KGo39Dwns6g6tFwYu6NFByS8An2zCKqR8ABINtUCjbU837oee46aoOOrmQXg0232BpCvXwAI-f7lu4qRK0vqRXvv-_UmO31wKNzcPa6_AsjP-UM0GXJlyuGpxgktU4Od8C8XRDaAkMp5BSPk9-OrlAkKTV9fa_Zr8p1jUcXrVxHgcES8kXjbNTqXVGrsyVDPH-GyiEp2U5nMeIUCkbpxrNrXCiGKivDKdWpk0GgnYYgh2KuVCbxC-R6mohVg8QlXF4i2qObalH1yJYED45CN-Dk8tWr7M411Saip0syggCY8975BQ0Rp8GroinQlCvDGHBVGIDC0w0c7Maj6sffYsVSa4EIlafJEH04jPXqyQUrhofAxupk93ZwZ9XusDfg0I6QK8235rOnegwprBQWqKyyjOAPKEA0CXERg6LrvF4rP1rsS4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108787695661856778864\">Hao Vu</a>"] }
        ],
        summary: "신선한 해산물을 즐길 수 있는 다낭의 대표적인 로컬 해산물 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 신선한 해산물 요리", "가족 및 단체 방문에 적합한 분위기"],
        tips: ["방문객이 매우 많으므로 피크 시간대에는 대기가 발생할 수 있습니다."],
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 10:30; 화요일: 오전 10:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mocseafood.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2059427300039139311", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Moc+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콴웃 분보후에": {
        photos: ["/images/da-nang/info/restaurants/qu-n-c-m-hu-ngon.jpg"],
        placeId: "ChIJRVXGdAAZQjERoO8zniVf05c",
        placePhotos: [
            { photoReference: "AWCwydj4ekCCyLToi3vcZ2vK5GSz0xAUHZOTmR5HQF7-cDqoWZ3dnWzNkGe16Xtfl9qv61ed7gOesuLV6fWp28xQsw2nBwuyQIyw89Z0lO9YNSSHz6NGnIHh5FE5K_uumraWGIx0BiJr7EyQDxuGTMJ1j2zNSNALK7wvTw50FWgAwMUOg5MV9x2WfjMvsyqdALiVPK1CTlIxSoqY02Z06JCAaEzcDz4u1IOzgJxq9gIf5kef11zaO0hoF-SkiwGKPxdY1dGgbTRZ7ySJSNXer6xdVXs7-62mgm56sbis2Qrw8rudG7MOjBnvxBukx3t9xNa_f3voIh3vDEHd5ZC8R8sn1iAM346qcGS5HscZ9pIek7in1NwzuiCmU0onXna7UAAsr-LPl1WjV63AG9kvUQWxbGKerWCncmGqtrGIHg0CqXP8_-Bep-RT7TdqzasE1ivq", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118260435686149110948\">Trâm Nguyễn</a>"] },
            { photoReference: "AWCwydizyfjnPV4ziymbocmbhEdf9QRzOwTlZIazYhCrKpEIQmtQWp3QeH5wPujpU2Nv4DzuAPRPPxfyCtKLV8tSchTrbDJdjP673F3gsfachETYZqEBJsTAJqfCLeiOEMROWUY_D5i3pRYbup_O9ZjqXEPHcOyLAMKPgm1wpoJRV7nn4k6h0EDbm5EOOKGppXkcScAOBrFxK4YdYp5YFU9Pg4kcw9iHuEn3jCOhggTz_g2FRqmi4JboHulAvQjDJd4rp5TL7lWAEyY6fsVU__qJl1yW733NhtNf3PAoDHe_1vdYCBdbE65vKW-ouaW40BiO5c_Zz5Ut_ibhxKB9ew-cuzsCySFsPrmusqphYoCGGdtoQ9qmy4syq31PK2UlTxM3gehaBn3yST-b7GniF32YCzVVqc51rPQXlFChXr0eDdXFJVjmXlx9gPRsJPhTlQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118260435686149110948\">Trâm Nguyễn</a>"] },
            { photoReference: "AWCwydjgPPZ5tncXqmT1AX17J9W6jULXoBkwLUEt_yZ0jp0U84dQ8ijU8ItcOwygL7tgGTp2aDSM8bPruggRfaXmCEqNln6Nl_hh8asukzzQtCiSfcuqstgPhQvY7rjIHRyzQfiXwkGO42z833BibO7Jve9MYRriKYJDNI2KcDSy_U6I7G35UoNoJmTOplwhI40d3132IbL0vnbi0JtS3333h4NRdjBcv65-VDOYIL1FPT0uE19ECzXYFTRkOg8LYlYj5eRvLeWH4FQA5Ml6cv5Laka2ME4UV1-_-vFInGuMQr0VWBTJLhDc1xBHx0_qq6TDx43NBzJTlmmyXIUcXuWkP6Ri3PukuNA6PSfF7yPmzJZFLvLfaFI0mCHnbsXZgYqhjrDx-xvGrK7abXFFndMBGw54ri73Jc7HW9414FSejSaVQeniltqyVcPwNuy46xtC", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108989193231631091132\">Tri Pham</a>"] },
            { photoReference: "AWCwydipYF5LFZBjNWvycHk5-mqEd5LfUfz6VTcmzdOIBqYX0W7ySjZe15QacjHE7al3fAbH90L5s0-GtaG_j3DNKxliOPFuh1B6eQLovxxzjw503oelJl3a1nS25EQ9Fal_3ttX5qkE_OG_kC4fcNluXkGWadPmVighklXC8t8eRKFbD4nL8chYcy3HRqY1DY0FnGWol-87OzRsuKEN-db0ZO5tFPqr-5qRq0wxwRjWSD95icZJUFuax08iV6W_IzTu5XBpxamTwaGTl34SmKwBglru2_kwQEk-OnHKg7Pg_7WGZKYzV6jmzL2B4eEOvwDr6t-BTapwtCkY-4glVnag8tUEhDqVS2pPpCKyGcjEZmripk9jBLekouBBAr50q4ERQ0ja3SzyOGmMqchZnegZN1dcdW-PrbrtxTtxShqGaikKChp-veaW6apNtseIhm7x", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102507647606030487626\">Yami An</a>"] },
            { photoReference: "AWCwydiqdcQ-i7dX54lXEFcIMrZXbjJ5gmhwBY_WUZPtdOrqb267FxVdMJpC2Yno-hMKrfUtpcsr0SUKWw0ghY6NDsy5GS2OhNPgXnvAlhMRlIjt160dstuiCkkU6MmTIi0Hjnj5ocauwQWl7-J5_K5sgKRQH0YRvDizoBsA8pKqnkuQhKtGr55Zd5eHos3ifnL87-yKzmo9Hsh0C0eEnxcP_8sHiJQZ0SNDjEHSfbbjDEbZcdSLN_Yng8E9w3oVKpVfHWX_o8lKoyttrRGLfsGtxBsOkSX0J3eIMqxBSKPDGufCsM2pz1I7rXIZjPEgWO43jAk1pg4_cj9XoM2iYzwEdDrOnSm9v3vXMexb-PU3-WXCkwMjuJcci15xsLTK1d_c-M4UjmKbMCFfA9R_a_MTg6jv2FHHeVPyeSW2QDEMCoZjj8lM42i7dRMjlQeEwA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114146177465052677514\">Frank Inspireme</a>"] }
        ],
        summary: "현지의 맛을 느낄 수 있는 정통 분보후에(베트남식 소고기 국수) 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깊고 진한 국물 맛의 분보후에", "로컬 분위기의 담백한 식사"],
        tips: ["오전과 점심 시간대에만 운영하므로 방문 시간을 꼭 확인하세요."],
        menu: { signature: "분보후에", items: [{ name: "대표 메뉴", price: "₫50,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 1:30; 화요일: 오전 6:00 ~ 오후 1:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17827027116273242288", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Quan+Com+Hue+Ngon+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바흐엉 반짱꾸온": {
        photos: ["/images/da-nang/info/restaurants/b-nh-tr-ng-cu-n-th-t-heo-tr-n.jpg"],
        placeId: "ChIJGfeVz-gZQjERqjhPqcbuaV0",
        placePhotos: [
            { photoReference: "AWCwydhbLNhZrq_xjhe93vWoil6Y98RPJY0WMfxh1z06emCSBiNx9_PfdMHZ98L7obvU8ltb2RaQiSE1k-3sVRtWC3hMrCaszMuzVCg0G7g0JWFg6mqX1ppY3UBrmms8LnE-Hy_Hy3c6FVtkCABZiKCpeGetKcj9sWNWcgGr0bWVPUSj7cDIP4QWEkGyC3aPMgRvf8UCL1jmtmXUGZrBA_1-mTim58c143N19-p-1L13ah7MQWOmyBiK8SJcaGj7kRY7DdCvtvAvwPThm_gFYx8GCMKIHuyFc52THaHq3m4kXsUrISnT4UGWroVrHlI1M0xHpzcaEfig8zM0Sv8U5zl7r8Uc8pNTz0cPTr9Q8lLf2RoXVI0aryI9TVNwKUifh0azJFONA8kvlEBo1y6ywW0KAn2LngtpoEK0_MoYre6xml6lRYhZKLHz5HOqTnRGqg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111149598978142171595\">VY NGỌC</a>"] },
            { photoReference: "AWCwydj6-C0zuH_QIiPDkszWzDiSb58nefSXceqB6121ngJ_9-_qk2cjsSfFjSK9YEYdzZlzO8tNIpTwuLQ-_4ZkRJqAPTD5EUedRWIE9JlwgAKUkhdrD2fv4vxgpLcNMsZkk8CONEmdBS8K2sR3v4mRsxJXQpjSUTpXrHmf_e6f-dWI1DeSnFP_WDFlD-OhWf_HCAddoM5wxDR7DstbRRKlGbAz5Rocpy7qAFl6JfFm86lqnB_H7lloxcHct4sHybdPLDe9Fhl0ykmNYuFM5FIKD0aCkLnZyrpFqgcRb0j8rnpX54ppadU1pZiNuvO0bdTr-PecTTOQJ2aCNae8KD5hrDRIkesY8v7JTH6gBWRolCRNaOISkRYo2-BkqShON3bgMfRp5kVaTh9I5lAJ17OhzD-_eVLrcrmxmBDsUOwN-w4uk3cWithouLdihKC-aw", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101994342035329918825\">Alex Nguyen</a>"] },
            { photoReference: "AWCwydg5uRr5sZkjfjbuufCdPT2GFKtaBeZOAYY53NJm9wJmAw9vJLt0V-0m-3s-E-SIPg44mNsf5QliKYO74PQhADZgQdqG5eXbSAwiCyJssW49Otr1X8TNf5nUHOwRkvMUfWbH91Tu_mY3aEfO9apH8iK0DmEzApHffaBDml8JtA7DiV5lg8OG1qCWQnyNxdaQicMXFv0CEKjaZYIKRWTb1ML6olIEqr3mpZPRhnFV0dulfjUnzd6zIRjijQEN4vTcpkIY6GdocvzGTAutPBD-yo_mqpG5m_BbfPoTpyaSEt3DyYLSCjxB_8G9Va2Uf9KBXFDCokKilDVkYSeGbaAg-0dUKfZEQ5rQxi0wptiAcLkSC-Nmg7XwaEz5hoxpLkDEnXj3Fyhh22yMcc0F9-pnceeXU62q7E7Btc2Uiq5gkHyL1hxv", width: 1050, height: 615, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107322426462072979886\">Nguyên Thảo</a>"] },
            { photoReference: "AWCwydjMh8K8MwqB3lEFs2ta6UDS-rREUzJwsEPoU6nqDVZV0Tu3Qt_n3l2wP5NrCJ6dL_WUSo7NyQMp42_PsHRqOvMsj961waGG9vHjM6tGDt4XhavtV1dJ3GOO8ciLjHDCIe2ZFo_6l2ja8eyEWj0TqN7_K-lT2UYwMD99JpEyGD04un2hNoqfuMkDGit133JGjcdRYs79BfBg9J9kUZdc-dEAQOWACH9hfeV7JFYjyaKsI12LEBBUsjNeYHLoNVlhGlCD0BdDIOAFWZf7hCOCkPwn8PLGm6JD5hYVU9eNOm-Ms_6eJxJrRLiiW8Pzb3F1JwZGS70asemZ24-RwX4siaxcCtseKZCKPaUZDCgKebqwmVqwpdLShilPThSrEUon3PCtJ3lfOjfrvDnIjSgDcWe72ZChdTSKMMzyIprfKkvAZvbTtp5Aj2JEQsUBuQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101994342035329918825\">Alex Nguyen</a>"] },
            { photoReference: "AWCwydh9yldO9-3ow3oK6-2Dhu5XnZtATNd79gqskZnWeE184-eiGOnIRowFXa4eLzCWe3pB7dpD8aLmxi3f0YOiIRj9s-wxv9piM03OXDslJJ30a2X3i6H1el_NpDtcHmMXCyXNdwoW6FfV9nA5EmXp2zUCkHLXk6OqKqPcGLXbA5DaqH5np7iA1iugwApnXWStGTcoCvw7KYwYMDPfTHxaC_tSiALqF7J_0a7G8gorMQTJdYndes0NlTGO1gBjihU2bVhP6akzKzEVKH2pSwp4uCXnY1tIfCcrBHoPQ4xk4up12e-GSVihwzp5BKe9eILyMQhCH-qTswW6tY1Q3SzCk4EinyeIsrSlRDAtWEeWAmAwE3iOfbGgQDcvABYLbVOBykeRsXQF-xrPG5LEm1XjutErQoVe1RTZ0paiWpPE3bp8p7K1shMCT2pBMMjl2A", width: 4680, height: 3510, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110233238863329306184\">Huy Danh Nguyễn</a>"] }
        ],
        summary: "신선한 돼지고기 수육과 라이스페이퍼 롤을 맛볼 수 있는 다낭의 대표 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["특제 소스와 조화로운 돼지고기 수육", "현지 스타일의 정통 메뉴"],
        tips: ["인기가 많아 피크 타임에는 대기가 발생할 수 있습니다."],
        menu: { signature: "반짱꾸온", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6731173655093393578", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Banh+Trang+Cuon+Thit+Heo+Tran+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "껌냐린": {
        photos: ["/images/da-nang/info/restaurants/c-m-nh-linh.png"],
        placeId: "ChIJkToVUDMYQjER-ZFawI7x_ow",
        placePhotos: [
            { photoReference: "AWCwydiGqf_BNq2Yv-mWe9vVecfimr6mqur0i9hkPV5qcdZSSGNC-UR373l7FlLBECtIJt7fIdEUHuykE4tGJAEy6yY-JXwIY_F20MobniEXTNJK_7Zuxvl-eEnvGpw1O2776bvOtH_qJZNj2Nz4dc1OaSmOJAFfuQzoLZwfp-1szC0qscEkp5L22fttyqS7LzKBlLADp74W77ZBDQWXhEmlkwxHGUxkMihzCL4---5TLDoMjtyjyi24vzagGclBmMnQTf3G3m8V1hT3XnRKOoDQplhoRt-qO1JfiykoI1NqcmM5QiG7Wokpu9iubK5wdqgPAdejeOmjmbaFxPNc1dwFfcgv44z7qg6H8zbMnUpnmYXjrRpvmfsGwQUq9EZiK0Dr7JDutcz50qh2C0eyVWvEmd0AXVBdKokd0Lrd8dGlb268tw", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114661036701748847599\">杨荔云</a>"] },
            { photoReference: "AWCwydgQX0kJQMWNIHvoYI7jDFTS9pvoUQ0vwJ5L77eZuhXbbPcWnUvygYmgB4dBsDQ-i2R9Ha5C8ShyfM7OY2TAyt2okiXHLcp96oqMK2wqa1SDfKaMkT5Tk24uw6Hr3n1LQDmm8gPCVinM5M6M2XeWWu0_5TP_yzs9uabORjFE_zSbIb-2AN6Y3DPxknGwCoqy9d430-S8UGdfgS1UslUJzLhOo_Or4U1FpIBvjjQZUlh-rp5sFTye-SsFHoZCSuEkGrB1tNJ7lllnjRvtNFifKwJCh236s5u_vxQ3JIPD5m_g0Bx6Kon3MDFTUNerGfSYRyJnoJpyBxi5IfE6eshsxz-ulbFEChs3sJw6nA6BvyYbe-4F8n15WkvCrRlgxkeRVV8UxfmYcRiJVOev10NH96P8XAVFMmj2-0LnZ4qTYGjn_g", width: 1024, height: 683, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117441514936307341537\">Khách sạn Nhật Linh194 Nguyễn Chí Thanh</a>"] },
            { photoReference: "AWCwydhHC4OYSrTDM-8h6irlCBwrMo3Sy0WjGPEqSGJfZvnr68SiEO7p8_QVvU9eamw3Yz708lF3ql8_TRhG7IBzMlM21rAWDzB9y2tUjyW_9fQHzM5_xNOf7du4GigmwWNG5Q-pEaoFIE9p09MSvHY5o5Sc6-AArR0b_MHU84kWXa0lDmRg-xTSMaQDdcr_fRAlUt3XYFdYB1A8yec3qY2mDDK111fyCswuN4EZJYdr383ifJlN5lXoi6iw9Ex5Bt0WhFcKfRV1Ocj5fJ9o1bQUItzVoNrFwe8izOqIDTNVzPpvxRHb8D303jGhBw0JTlF7LpqO8uYm39_9ZwL6GHmo-GgHekuVAYDvZdCWNUYOt9MlAUiAvve6a42NTE9V0sp9liUqRQ80nS9Q0XJcTI6fBb_BzDG1E_nMNgxzL2tBbMNOQA", width: 1024, height: 580, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117441514936307341537\">Khách sạn Nhật Linh194 Nguyễn Chí Thanh</a>"] },
            { photoReference: "AWCwydiFjzRk6XNPQ6Qg_OEtN6J9GSKwSJwJJhAU2V22EafawQKFMjgqAivXXyGMKht6A8FfUv30BsyYFc94-DrmdZxb29Wir3m2BR_iF3U3N9oelPXovslWwGluSPzzY9AK_2NhxlwA4DoTiqyVMdSuAZhQdP-y7Pr2ktl_CSGah1Edm_ZpGon0pgdZedLcDdNUIwbcx5GhTNcfzaOeNzDYbLDlG_kNY339fAl3sqNYpmnErqPYaBWCQOCWgSfnRu0_VONiAWF7asis6yvuXMjoqUaKbnzVgV4eS301vv087YrifmFMeCsCo_OUDSVLxGZKI2DNZBFSn9Wk7kiQx4osJBD9u8ceKES4C4FxsAj3o016VsxwuWOgWACVekesi6EhUd9rRumigJWMNeTp133Gcm3Y8UMruCSUw0cOl-K7bv6atZ1L", width: 1024, height: 683, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117441514936307341537\">Khách sạn Nhật Linh194 Nguyễn Chí Thanh</a>"] },
            { photoReference: "AWCwydgv_l4ifpFdO-6_JMJDSiRbPMCmE-uTyblC3o4Rx1VP9cHTBdS2UvTR1Un4TVue58iQxx42RyarsEuLVJdlXW62SEJtugVc1Vhf3M9uGJ6tWB4maIjnJ78tkxoGhNkXB0uqBcmJPD00RXSEVCqLKALgD3vPYiT4LrUI71DoVqu90wRcqS9LiC3rD_J5_kdJxIshmvKUjfBY1IjeT9Z8nLHjnADNexj83WZJeEC7pRDoT-fMEi-vdkceUNQmBvdFyzl8ALonNkLYuJWCCoFKyJC2WA4twLbZUJkmjv-2Onx5mp_bG_lsjxxCFJsv6h6tqWNUmpbiOUtvb6yjDMkAYpbbCv0n76QwUPrkYZMpducHQ5zNrfvjT3LRQ7dmfJft03YXaosVeV4gJ6-KEUqD7b89U5jL4Cx0SJZ54JM6QwQwZzJRGTTH7bInrgZSNExu", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109171149863451955132\">블루스카이</a>"] }
        ],
        summary: "정갈하고 깔끔한 베트남 가정식을 즐길 수 있는 높은 평점의 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["정성 가득한 베트남식 가정식", "높은 음식 품질과 만족도"],
        tips: ["인기가 매우 높으므로 여유로운 방문을 권장합니다."],
        menu: { signature: "베트남 가정식", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.comnhalinh.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1849423580128850801", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Com+Nha+Linh+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피자 4P's": {
        photos: ["/images/da-nang/info/restaurants/pizza-4ps-hoang-van-thu.jpg"],
        placeId: "ChIJqUAP38wZQjERRq1t5kQSTdI",
        placePhotos: [
            { photoReference: "AWCwydgEWvNgyzozjVWwYE0nh7amvA0AKuZZyrUVb2_VjcUZyn2dFTfKnpZn-rI_UJ6qi3GhEElc_Bv6sM_3geloEJoz6mACxr_zRFk-Er-p5TLwEtC-NlDPJ6qklHxDwCnkyw-ouR1YOkPbBu42NDfmL4kd30s7b6WvmqVFFmuke45aTQg6JQ3W1cCCCSPndbphDWXYGVhKuqA6vfAlynWYxPy2in5RyXfaDq_MRPZS0248X7JIldeFQAdNe4rtsQ0z1B7Qv1ZgpngFJLqGCsjtaPbg_-6s8OQaez60iX6-pefJHKvomwhVQi1J2pi275Epjd-8DN7wnUcbI1zjlGWNu1tyjlbr_5Ap_NSXs3hoXVtnySOGnv_i12hV8FbVjPjcewbHGK4VS2CHpNz_Saxggu4xS0hR3AxfgBjdeXgdeU9l55s0wQiPLOOgdeTXOAgo", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105769221135547352668\">Pizza 4P&#39;s Hoang Van Thu</a>"] },
            { photoReference: "AWCwydjLT7ta6yr9Z53TrZ8e5HLW3jMFyS9cDrFnwZjTfuu--VwCsuKlpXEwFDPaOViOMq0q_NcVivHommVhFGdIfL0Frdqli0Pat9vNUiWbWkr75lVBYUuoyy6-5kUWQeN6tpm1QE6xr4b7q1MJI_xPeiE1QJ5dIFj0ykcHuvFVjYJnZiSLqLh4z3l5YikQssh9SqecLrxvLsTruUm4qBaxdfzcD8bVEV1yM38F1I1MDS1dN34ZLmmhJbvwt8JyQq5nV-zoqpgipZAtgs2ky0jnkbUpjFPiGnHN-d191PVP9ICYf3iHyVwGN4-jHAez_kAg603h7k1ZFk-H6wEAER6XwXoAD4rtd5k2l0fiNufchpMrQRDo7UnkTNaeznLIiFjzI1PhIpEcs9-Tfo8_NEdIHFRf1Wy7G1JsObONpZ_5EuM", width: 3988, height: 3988, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105769221135547352668\">Pizza 4P&#39;s Hoang Van Thu</a>"] },
            { photoReference: "AWCwydgrMGFmNrfyRhU8pRcECoLWYgn3zlGJAXb68Arm4vWpQh22Kib7xX0jjpK0IrkPzMkB9rFze3MD9pbK5wY77jwZ2OBh7onqOfOGG6wMVPt-l7O-tmJEtd23_CE2GhoFnHe-pBneRgIQflou2nE1HP4CY_LoA4UUkaV_eZpi734HKOUvjivOTY6D5APSpOmRPElfO0JVBMRE21FoDEaRhutT8UDh38PpbefrJjQN8dVQYgCJgnjyrTXQ0zpTUGhMlrk2HvcsRFTrZNTSAJOwF_i0eA5hiIkf6KIU-ZglWulUkdLWNLY1IYdbv4EdmJ2sSPoiq0_uq7IiaRlhaTuPi410SBrBYG5fgHX27tuFgl5-vnG3aotgD_4GaO3-K3SPiymeJ8BF1HNQwi9EkKDJVycA67_hpbkB7pjrBX6MOG0x7iJ2xCxQB38yFnSjHI_a", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115418546658615219526\">yuki miyai</a>"] },
            { photoReference: "AWCwydgWu0nMy-y800_oF2uw8KQg5kwN2zYfbeieOquMJ84_ZJIFdQb3b_Arl-KUYk6XmPP0bmKxQB3nD5Zt7FzUfygAfFSCKYnImEv--DC_iid_DTjB2uDnEI2rMaM-JNBRKt-vyBYpxxpqGQG581HqLZo59e7MX4jFkin7U08D0CcAzpNimSKM2heoo6zgYNfju4cKo64Rqba_keGTmhRAnGFiRW0FCFbP5RBS0fN9L5GdeJIr8Qo7zq1JT-JEb8dhH1LMVT2dOiaBIjwlZjnROpjZ1otAX0ISbdMhbOPowIhURvtJtCy5RbBUHuiEXlJ1hS5rKo22iKeTAibkwIgdvIDSBYgqP6a0pseCBKCnQXKWkfiEgc41CTEDXXAiLrJThEOwJtflRCJHfAEf2JnJjM7hZH97K0Xk67DdqI4WiAzQsyp_FKGQpRPxIYzMUpiF", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105769221135547352668\">Pizza 4P&#39;s Hoang Van Thu</a>"] },
            { photoReference: "AWCwydiZfTRPN0CnK85nOUBDCVlW-ufsKQasApYghNpwSWWTYFwKqo3jjbimi4YieT3o3fuxDSGJoUGFP-4uFCneowM6c2vVQmuhw-eBWZO4gGxdWR2N3GJrMBFK0slq_HtNALj0-4rmiD1WqLHyfc3iClHTfiMVvpbkcK1nQnXOLe_J4ssGCEz1scpmdN-EBYydWrwwJ_-klMRgqp6uHjyXArlhdT8b0fxGIphL7jtgQSfhdmcVf8U2RprKNKlXIWIdLGRSvtV-iKner_Jk1hLOK4NfN0g02-D4TvR-g-Qwh3ApZc9j9a8S-foxbGbaXgE_kUm99Q1LuoHhu84AfJJml2Z0nmtFzRfGZrC7I7bAJWr5gN9Cmp4th3sBKQ4yFLEfuZVjL7mOZRPZfhteqy6ANWLgDniwyHGPePQD7jELBLNp8SdSiLBpnmChOKxcYvxR", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115418546658615219526\">yuki miyai</a>"] }
        ],
        summary: "신선한 부라타 치즈와 화덕 피자로 유명한 다낭 최고의 인기 레스토랑입니다.",
        updatedAt: "2026-07-13",
        highlights: ["부라타 치즈 피자", "고급스러운 분위기", "신선한 식재료 사용"],
        tips: ["인기가 매우 많아 사전 예약 권장", "저녁 시간대 웨이팅 주의"],
        menu: { signature: "Pizza", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://pizza4ps.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8006025648679338542", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Pizza+4P%E2%80%99s+Hoang+Van+Thu+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "버거 브로스": {
        photos: ["/images/da-nang/info/restaurants/burger-bros.png"],
        placeId: "ChIJ8e6C4WQXQjERTiBQjWBv5dY",
        placePhotos: [
            { photoReference: "AWCwydhRgDRSmlUkwVsEDDPXTIGHRHAAD1Yec9xUh9PATFB9r-kemslRsJD9_Sb7-V6kP28dqn7X6Ym8vo6nTPT5C-e2nPYR1ITpwe37tf4Fb5RAYirA_lDWy5nyBd13S0uz8SBVkwM8-08ZhFPTYvIEd1jC7GrOHtB0VrILjaA6-DUAdtLkQUPUjRi2wCm9YcrYjCi1NrW6pMAxousCqE0vS_7mKELoxxCGhrBToJV1hpJ52oJB-NR4j2QrwIQd_6bGWjGDJwSfrbhDeCjtKSxXpGJsNsi6qDR6TdLQAcD191UNlwNilJnLz_5DNy31p3KumV3vFBo-YA9MtLTQ8_sohcpek2C_k9VC_-DnCe1ljJ5RetuUYGGOoXJj4Cq2BHFUPZKaZUEeQsqV0GlG4IgBkNJhFrqtZN__-Vs_geXtYM7wJDUE", width: 2952, height: 1661, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117855552723879562955\">BurgerBros</a>"] },
            { photoReference: "AWCwydhmBFRQVr6UUpGD2dS4ZwsFPHN1bF2WspxZVBfHVXeuemVxoSy8jVO0aqd_haWa4r4Axe77E0EPnVxpQUiNHxej41GbjPbGUbvjBZfRBRx21qjVRXKQNyNFml_DznPr82-Fa1TqWaJAEn9QteOM0FisUjd-fBGCNR-QZ_XYrerGcTi8GUqEXfEKeBYuEz-WwUyBasmM9zCtVGUBdfWY4_z4Bln0cJAqZzF3to_XHEfZoITo7eib0lC5O67bJ1a37B0n1oEytb6eR04TZ9VnEXGnKLVICx1ZZfEt7JYLqfuQ8cwks-aMWdD87cgeyniZjuRLUXra2zVjtzMTNjlxfb7tuyKGXzyoXaQeAXVkMFUNp2qrjj-vL04p0HE0GqPDIXfqdgpOeOGhUzuCouOavKgW_cbvIRnrY4FdKH4HZOBkDng", width: 1440, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117855552723879562955\">BurgerBros</a>"] },
            { photoReference: "AWCwydg6EBYKd6XwhtD_E3vv-hyJ4Y69jVzvHVja0PrGsZjllzw3De8y3_-NT4yx5obhqWQszAV6XABV4Pxl7RTe6ng3OgX2wOk3MinaOzYaX3b3zoUNGG3wB1I2BGpaT0DC8N3086P9bGgzwJX0PY728wzjb9EI1_-LNovUEjm69PHvp1RpwkKXeVhJIEBSwJkfn5W4gta1feTTFbSe5pVe6i_9WbI1bkrGt3MTobe4ybcTWQ2W7q6tOvBBCjMcHXKEmQWE-wGeuEf3Q8USKvWJFUH4bB5j00r_p39UM0oZlKQZxEwJDSKU4KBKNSChNGST7MvPB6zD3kExsG1fQqjvdoceXFbFCHZrr8RBuAvbZRVb-FuOggJOki1zFmc84M3jSyXGLxRD8Z-IDxXztrQ4DhBBSWn8J7x-MILQqpe0_esE7C3UyGifcZGGkfvm1Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100078200816812760640\">DO TA</a>"] },
            { photoReference: "AWCwydjg_NrXybasnd7__BgzUO0HkOOpMOKSxAZtkPmx_aKJTKg8x36FUOSTWENDw3giNBteen15PQ06DmFDbT8I7xHSODpKhmwUCxmV3SmcHZfmD-zgH2gk0B55JSLjOT4hbV-OIZijj6NLNUjRiu8FDrhxV997VKC2uvXtu-Cs8K5x9VGmTUrwzfCPctx0MM-A42hJ-f-kpENPD9EnMbP6acE0Dq1-f5N3sI-b3N8yE4RZIkSJkzu0DMlnS6PLBWHl8mgwOgiQhICP16DOj-A7PjdDnbrw1nNOg99Vqeh-hyL2e9X9F7_1EH3PqkQdjJxBwIQVaVhFjrUmvAelH4ESlpIOIDjAEbrkUpk0gHK41d-vxPoybswgF3mWF_7Vqf7ti1ALqDaYLBIxwUeSX0YV6R3wDBiuElvaEyfatEDnmiFWiRDL6-2FkRcji72t0w", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106777165929562187131\">Lulu Nguyen</a>"] },
            { photoReference: "AWCwydgO8fn4bJu1LTCZXtfYpBleITuIRC9t2EhovjPfj2EJeBnLr-ilLyFkM-iGtm1zE8i9rLeOv1LQOIYairGIyzf4T63WsYYj3OXHxowxgNdKJLzRjk8_y1OoQRYHqgU3xeOeIQN4awBO6A8Qpvv8C7Yxs0cLl8KVU4NKRvZ88XcqW1UNBQP5tIgjGBye8XGANp_t0AquOeblv8F9szGnwDxNEjYJcWLk8wQNJBXfWdCTBuatssO7CSe9YxaezIe2TPtQJLMP27j01njNyW3jYN07aTRQhFnPwFzi4zYo4aBQ6vWpIZQn2yf1gpYphhauXkxiP0ElZCtSt6vN8CX1WutrSnE7HDN0dVDuKa6gWphzaBOq4DEY77vQ1ihvfoZOmP4Sw9YCItqONg-hh1u0xVOvgbQMos_QuwTOk4BpoT5Ls4DgihwB1jNB77OU7Spf", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116425647947472915854\">tak</a>"] }
        ],
        summary: "육즙 가득한 패티와 신선한 재료가 특징인 정통 스타일의 수제 버거 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수제 버거", "풍부한 육즙", "캐주얼한 분위기"],
        tips: ["브레이크 타임(14:00~17:00) 확인 필수", "가벼운 식사로 추천"],
        menu: { signature: "Burger", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:30; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/burgerbros.danang", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15484905354261700686", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Burger+Bros+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 컵스 커피 다낭": {
        photos: ["/images/da-nang/info/restaurants/the-cups-coffee.jpg"],
        placeId: "ChIJhRHxyd4XQjERPVL2Kw_eqdw",
        placePhotos: [
            { photoReference: "AWCwydjoyj82E6ef2hppa7e33UD9O_gsimys1AVBGBqZSu7Giy6POaA6ksBP-HUuZZbWN1cH61RQkOQUABxg20CMT5ex9EYp61m_pmAFuEtQtUTcG6QIUSJu2lEKVP0m8NXnHQXn-NSRKyQokHVi_5MwZPzv0VhH-IgUewzcMVJJTSyiLhBD93JvtFKOJYT1l4vTySKPEjuphOQ8bmEMaGqyPD8O9zvOA-uYfgfewzBmJB0BuQgbh2pNT72SekmSVtlFa9LCzedjzq-OfYKKhcNjhQWADREXVlchoAWPo9KWCMN-WrakPTrak3ZLpShuEHt2AxIDwkD0-h954giHdgPAlhMuwaXXRcnTB1NJpmfoOZ30QniAGJ81IzooveFV-bWRI0CCX3MGWbgEW3goNO-ampfGMsUPq_n5xft9izzmwIuqGQ", width: 1360, height: 907, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102363137622152166931\">The Cups Coffee Roastery</a>"] },
            { photoReference: "AWCwydjitWvArd98Wj0L10kp2JKSDdhngTdVNonmoZKiuh3t_0EyapV90qtzjIaFGyWABlutEbOfm3bQOoJftqSastjhbHpWRhD7HcasPO2O6320uNb9DzSTvLNJlGw85J_wRJfPDgQ_Q71mV_sQ0Z_0GQ8cT2gsbNYf8nGChJkCGFBCkvTVL2Qm8xTHhQn8CKov2nuBO276aIixOPPV_UB3u_dDz6BTdAVCGRlt4rYRnKYoOajxM2ZwuMNLVSOsc12D24f_fHi15yN6qygTl4Igvg-ZG-iHTXeD470dqX4T7nb-4d0cL8hH7a875mzskPun0X-FVBRW5zlf9mS4bMQUomh1w8s3VWnizoQl9y1lVOESrPAjiM1FIdNlQ810ux-ZmqTbKzk3trziZI_cUPupeXCjwCa_9bf_h8rgC_2n0doHiIdm2hDs4AlwLTH1NymS", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104669637590378187994\">Margaret Macasiray</a>"] },
            { photoReference: "AWCwydjinw7Msqolf_giNiZbaHcKVMfsp1Y74vYmTMQzPJ-T_J0Achn4W3nyqxRK0tVAoPs4qxC38TJkikgyUTI-U0LZZgoF6_DMS0KJt-SHnm4IzCW4HMZqQwgRfujqL_SgUhlsa4DFgE1KqzGjQOz6tuCx1lPnpJLSHgZNeiDXT8-jW5yAVzouwXmeb5xkORgejQ7zBvx7CIafOCtp8NXXkiWn1TDNM2RaTI9Rl5ocn8v7VedYtZLH3xLn3dh2dgE-22eZ9tQqzSJiZiBQmuMW9LuO8iH3Mw9J_4FkNVwbkeEn8OZ5nLbEIixJZGALXHHuR0EO_NuHUgJynLsNE7YDsOB05VaiQSbKp18j7ujrmCcGKwZ0qpapp64n38iOmANR_6FKPmh8b3qhSrl5qtCAeW05xE5t1DAU5iGcKpT_v55IF3F6", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102363137622152166931\">The Cups Coffee Roastery</a>"] },
            { photoReference: "AWCwydjBCRRG3YxviZGwr-aDWzF6EXqJaQ3QabBjbxlGoI1l99dbVGDg8JRZpMId9Z16QOH1EDOnyk88qRCPaXa2u3lTAx-rzaK-F32vKBA2WiCcCOugiGP1116bKjp9hwGtuoGdslzrHCY5RDRdYYwdj_29LZj90sps33txvd-Up653fsj9VamXpUZ-uwoWA6F5t4rROqUT3gFaKxvEeAAs_T_F5yW2ZcgN_IcXmmMawkyQR8ozL4z6usXo4WSifUCXOVXC-NQCB9n4NNsjtYF8e20bTmsqNbWuiRdmJFSR-DYxxSap1CgB0BTkcmcwOZHNr0ZXKQ65z2N0aFMfTi_EuNnOVXEoNWTQS_3yUvHdy98Ccd2oR5JTe62-eJVyZCQfgRCzy8RihdmxpQEw1oIWpWcerR6D5bJFq1MR-wNO6VZn4ofHqH9HzbGwSmT7cQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107334023085000410632\">HCB</a>"] },
            { photoReference: "AWCwydiKAg9yDjsC3dTHm6SJv0dAy9YH7BAp_AIaChxWwsUVdFwlGE7opaZoKphwSO5t4u2uUKrqznkUc8thcgw2Ql5-Er7HBYTaDJa-1uqyATRAudkW0_HcBxSIV816h-wiT-t3XtrlNITpf7LqDvRplfjM8W6jNrrWz87mh4oLEs1z9xwNdHNjbnFtw5lLtV3C9PCO9eMunePCU6kNauVSlX73xiP9tuq9IoxKfINkYHUudl_43gOjwZKyTaA2sVcX5lVdNSAT0eVg81Er7QBjp_YPij_2MqIhiahCgviLZM457vbCCfeUiylUdJOgBcqDxfWXga4ZFQq8fMiEPsowLlSyYp7um-TAOBfIbBZkakXF5Q29Job_jOqfibi7gJ2zv6iyHsAc0yTDPOKLynkeMdj7X7UfL5TnZps4r7F-VRDfC0rvgCCUbj-V3bn7yZ9s", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113487478379862508771\">Максим Матвеевич</a>"] }
        ],
        summary: "직접 로스팅한 신선한 원두를 사용하여 깊은 풍미를 자랑하는 프리미엄 로스터리 카페입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고품질의 자체 로스팅 원두", "깔끔하고 모던한 매장 분위기"],
        tips: ["커피 본연의 맛을 즐기는 분들께 추천하며, 아침 일찍 방문하기 좋습니다."],
        menu: { signature: "로스터리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15900484116151685693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Cups+Coffee+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꾸아 도 레스토랑 다낭": {
        photos: ["/images/da-nang/info/restaurants/cua-do-restaurant.jpg"],
        placeId: "ChIJKY0CquAXQjER3o26D2HDtIg",
        placePhotos: [
            { photoReference: "AWCwydgwMApMZfsCTLYG0fQJTuvo5soUKVXy8TR-b8BZa_69PuAlLX2SVVDnaauJo3wuGOr_t-SBBMkWy_0pe_BXSzNp_DMKZaqijbTdKZsDivtDvCAmFa0zeEhBkYtQjstvAvchoo6_GXcwXXDS24MdP21EvmQhQbb0QvbwEkTaruom8F_czeNpq8lsCJ1E8o7R25Yp2Xz0fqVJmzrWgcrXnHSjfZxhhOzPuOXW6pf6zt_6Aw_EAcYh-UQnBxZx8cHAJ2a6OmY7r0lyTYueYDyFjV64W-mHd9TRY7R6GbHJ3SZylSYu1gffHcEmYh1fEy0uG71M6wAYfRLymA5QGjunOMLmxsFNPwZCl2rb5iWCcp7e7h090YR4yJKC1z1XXj8D7kCt9g3CiW9JqHjb_YKE0mD6xiISajqIz2VJr6mW8Ma1vjDCob8Ta0FrVulWRwp9", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107119213531088224059\">Nhà hàng hải sản Cua đỏ</a>"] },
            { photoReference: "AWCwydjbnLVuUtyJYGAjN7v8tvku26f4aLej7RbyuXCh0dcO_RneB-6bAgefGCOQN4MgX2br-cG4sNRtgSjv3qbw-l1q4MhZHqVH_JRU5MVnDBu5HDFSiyPzukwNrnRs7lGcaVvPExVh2R6lpwAylSL4HLLEiSJU3-1_LpAmUXHuvlNm8hD4jXSf-Up4R0Sucl5dXicZcX30vcOad1_iHVlgwMSy-odGT1SYSLFITv0LI5HcMXoJaU4vHNl4cOGuojx4U5c1AzkXskz_Bbs2eYSz8e-UgAlY9nVKWdbR6pr0-SYNBdZtYHUF5BQosvVkJc_J8Y_ww3cd1czBfy4ZZTzWsuDyUbBbifPD1mFuWQqU_zFTR21AFH22hOKzjbzubFMWxV-4w3RjOH8qQdfTRqHM6tCEWnjKMmLmwRjXc8jJ9t34eVd7", width: 4248, height: 2327, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107119213531088224059\">Nhà hàng hải sản Cua đỏ</a>"] },
            { photoReference: "AWCwydiUOw7j3xeN2ZWyxl1c1jNdxpQfS1dM9RifargwXaXzxkGwKR4DjcuEEpe9zeAP2JIJNPtkffIxR-N6_vhcvNssZZtj8qcko9FYqM9G3xPXRrUaybNlCf5tzXqXBWMWYNskQu-g-_pqkTjQK8s702OTsjhtRRIXtWRGyPbk5rhOdCXdsGX_4cnnCUv3DdL06TwqGZX0wFG87BhB0zAEKMeULYkxHzHMrGWamXkbrDoo0rcfzi4um5qPEM0ff2jxbJvowtU4OWCsSuNbM0iXlEj896VBYZfA4h4VZQQUlw9ArFS1K5_YdzdpimYx7dbXDSMpuL0DDPX-VNGatR-beLCJQbHmq52c5aGBpmbZUmgq-FL_fKj8SmBcso6eavJeRwc94SUp7mZoTobLeTm7YG5PnRx5_vMcJHk-eZZzXtAoKfHcLjOFfcOdumyqqu6B", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104485721495786312773\">Totoro E. T.</a>"] },
            { photoReference: "AWCwydiSf_oiYyTRbWtuXsrgbQxo1xMRYh5ARRNshdSBVSHIvosl3dTiiZpe5FbSzODrVzESN8mYYG8Q0KPIUhyIFacwthNOGtskwsApnfEeCKAsRmke_h5TDsR0-aynPNBd9Ob6mvRhpktXOT4zExVQs_ZlzHXaghPNk0IsdhsGarGpWlYJ1Mv3vyq1dSuPyIAxXU-5TJWCqA3KDegSExUqfLnhmsjcONM_JUtimFh4NuhCElhi_D0L5bO6wnQz8Gg27WiISJ3b9sb4Mz4G3Q8CywwvxYz942aN0fP5qU7TYJ6uvHBF1ScQuyjrlUqL0-hotxTggVqeKy7WobuwOY0dgvMiyEDwEfG5Ypu66HggDMQoFAgJNxF11aQy3K1UtvUtce75UAhA-USUG_g7YoK9Z_I0C8Et95i_9wlr_MWRpTbMzHiN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111557156030265308848\">Sabbir Alam</a>"] },
            { photoReference: "AWCwydgo-bZz_7GSq2wJ_53O1nDZw9rd3r6DeFogxYyONUIEUissfgbBuUKmfP-22HMY6otcetZ4OmwcvsCH6rPai4leQi2MYGBRkIkO4GjxHHWTEDtEbcCgtQ1hFUnfSqXJwUN1gBiAuhhL0LIX4vsrRHyQ4GAPz0dGode7insrXCgL8cR5tUXJKL_HOU2EWkiJrTd1Nbfe62GYSMrKR8C6tGtYMiDLYVadezy42DACaVQxXjxPW05xc7ltjPi5-ktULo8U-scTgPFih__fFsCIYZfQ-pKXLkDgNLfPTVOlp9CBAPIdxjqxPjGmhsEc1ONeFWsvbDSEXByLM2SVPSTQCnDLm0LhErNbZEbjT5UMJybLtuY8l5vQe2jNQiKNctLnV8eN3Cc8SoF95wwRhvm47kzotkawnpcxCVlGe-5uVLTE1FiWPASMvfNY1jZ7yJUI", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105942452699261361884\">서정욱</a>"] }
        ],
        summary: "신선한 해산물을 즐길 수 있는 다낭의 인기 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 신선한 해산물 요리", "높은 평점과 많은 방문객 리뷰"],
        tips: ["저녁 시간대에는 방문객이 많을 수 있습니다."],
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:30 ~ 오후 11:00; 화요일: 오전 11:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8013225540093100889", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Cua+Do+Restaurant+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하이 산 포 다낭": {
        photos: ["/images/da-nang/info/restaurants/h-i-s-n-ph.jpg"],
        placeId: "ChIJWfOB5DsYQjER5uDd6bTLIhk",
        placePhotos: [
            { photoReference: "AWCwydhehAGTXK8WPtK_eGyYX5CTPBaUqdonIETARam_D-Zh0sFDjWQiXeAPbUujPsphjGgj10MV2HbaHuBcbU86S7kUyI0VEcrtNJIWEtFP69fSif-9LSFkogGCdOBi_WdAA9x1-C7JaXfaFJ_v5XxlAILyDMRq226l_eyOnK-jVbiwW6L7WyuG0qvweFIHr48FJnPRwJgiLbv6I4pmaNmtabto-BAce-AwYnxygcJI3fNP-FHJ_OwgEaGzEDGF1vTDC4qjvXEIEHdC61EptMaIR5_GgNY9RS4nV0nbyQbF2dGbR7v9BLIgei2MCLRMWTXIuRcj6vuo1fluSYbu15Riqp-HNhdMGUMoJIZGHqD_6P6rHJh6b9kFD6Qdg6r3Z4a4G1HNN5EV4L4l7lOqjjI7YrYOWUXLWy7MQlGH_5kGox2JP-kw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111662567922588967897\">H.I.S. ダナン支店</a>"] },
            { photoReference: "AWCwydhAF3xqmaTjfpEdIPNl41EVGNg5n8sHnpPc7DiWPcJkvr7T6EM7V_FyAXhREMxjTwwnkrFxaIcyO9bDGqzW0rqhYa9AESB2QHAf5EppcxSmiCYd1j6_zY-TDhYH8aWccSFcG4I2vN6BGOACcVSckiyhOCxERHuPGk-oiNsO-332v3NsRZjiJVixlUOvTD43XmCcNvvbMhtjEFr3MTQagFRnVQqKBhQD2D_Znyt2SLex70sNpiStGjdYyhEMiOfojWQeDNxyhecUntQwaIGTb2VdRKDxqK_Hjl9GT7PzKh2tCUjW9KYijopKpnzFFVHrvAIw1KFN5lfpOwOePo14MLbz7mnJ4Jt270uF7w6w7pGxoWAdLLb7_mI2E_qnY6AG7aH8DKFjaUQYLDKFSLCGf5HwiI-niSmXA62kpf15hZU", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111662567922588967897\">H.I.S. ダナン支店</a>"] },
            { photoReference: "AWCwydjtNgOFpNR5HnVuEIz9ZFlJikxvCSUI2SCvm5M_rvgD47rUmyFthEs49fA6WtSbBu9V7CLsMNuUCp63QxJs4jA7sM42br0KRJxijQ8-NJ5lAa99xl51Ogo4V4NAilmxs971hbI8RwfufnntMPVpz7A6B-60wWiPYmAd1-3HKSt1fPg4Cf5-hazGmvrAlcEUvZlGP-ece6z-bUZdrui4p1DAifONvEthEpSUhdn4-beT28b9S6vbSy9jKzLPEbpjDi83RO-xGXEOigHkqm6b-qXVfUl-1TOHQzu8Q9yYKcnrYL_2Gg6n9XVehXkFUvgPPSkcMg6x2q-KnThkpm4hZnHpAOGDG5AqzNXMmNaOEYD0pr13zJORaT3YveBlusY1CA32jmIm0mANeZFxU8no7U5-zSlzOWYCjultfb6B1h8", width: 1824, height: 2554, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111662567922588967897\">H.I.S. ダナン支店</a>"] },
            { photoReference: "AWCwydhTRh05gmC0DkjtqaS2jWEkmxAOdiGr-AOBeDMJPPm8ITxp2jVPCSa-q_8JYFikVJyUDn2ho9w8_uCFeo2dFvqn_YxzdwVO8NENGV3KaDIT7SF9FJAIieQc_YpdbH0nq56PRWiuhdlBSgZLGPcTR2Ry0TdDf2_gXZiPXoTGQrGlphHC0WE5VRBQSCKBKLbm8uFBXy3Y4C3gY7QlmZHXd-b5ZTZWOm5ocHctogn_dkPAin7KGoiXhbDh8HhU0O-g6CJzv3OWJbMCN88KxD2LPWH87trpqHvNu0FpuqLC7MlVFzvwXM3bynxCTLJAkeErMsjVzW9bOjTkBDoDwYmUrMaNX-uBQ7Pi3VyC4LSTwSTDLkwwvME4jODjtR2x0gAhCPl7hRoo5ywRC_tJ_Jh3BNs6nqskCkzNLfP-ch6Y_6CtVotZ", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109625381474750682354\">Phan Quốc Tuấn</a>"] },
            { photoReference: "AWCwydiQ1Us8O4b-WL51erVmXRgTaTsnTG_NAeiVM8sEDWCnqjrtGttwFqQPcQYJVZwGe5WTtr9Vz1hM15QutSrDBt_eXgsC-aRfq4YQp235N48j3Pgf27fVp-65aWAGjy-SUAYk-bcca8bTsviVzx1RyXZWEzK73hWtKMezj28aSBvOovMsu70JPyAu8UNJQ7RNmpL3WwSK-OqrG--ILAHD6AuJ82zH9Eb8jZEM6sCo1-A622DUG3ou36uGE88NGEpJXK34xWZy6kQooE0o2CAt5XFpw0xUWtE4QFJCY5YH2BcZzq--8bUjfF3vDeKvmRQfl84pYsSR_PacpFysts2YATBxaC1NV9jYC8iKeUJndagMRxxSHtjony51XamdDmiUFnQ0YjLaGCaK3ad2jZPzGcGKSYesdSYmTeXXuNkCZQxUINYyeitq7HbLrh4AnA", width: 1200, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111662567922588967897\">H.I.S. ダナン支店</a>"] }
        ],
        summary: "신선한 해산물을 맛볼 수 있는 현지 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["신선한 해산물 메뉴", "높은 사용자 평점"],
        tips: ["영업 시간이 오전 위주이므로 방문 전 운영 시간을 꼭 확인하세요."],
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12778015086387447613", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Hai+San+Pho+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포박하이": {
        photos: ["/images/da-nang/info/restaurants/ph-b-c-h-i.jpg"],
        placeId: "ChIJQYGTw4MZQjER9-WZcXZUfAM",
        placePhotos: [
            { photoReference: "AWCwydhHAfOh0yoEJ7am1OZsiwFhsQRF-Ll5JuRwU5wT8yYXoK_LrY6DYG-Yc283w_UimVCJxeKzvK5r2u_L0mTjg17pXGp5jox7m8FAk0ecls9YTIYy0IRWmAC-ltZiQCyfzBwegbmvALZpF1S57xWqPPwLfTHIOZsm6qsuQ5Q9Lm_sFcjv8flG1WWhAAWsjb9yiLnruBekiBnx_AtvrARLP_s6ex9OR4aEFhrsyVrOfqo0wwy6T33TJ8rjoH3OlVGbix-cTMKXw76Ng7fjbEiGAyc2r_kdWjFMXk-oj7Nd1ulXg2DDSX5PmHsPb-YN8IJRH0g4q9ayOkwWmR2VEo0FboiJ1ECSuCwFJEgzTfguN3dFNlEksWcCr5zfYLSRj9aP_wWc9CC9HQjOXS6GqMenpAyPnHlbU-kI9b2Q5RApxSGrfPA9ILSSYcn7iB0TkHSV", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114309995329779511663\">Cô Ba Phở bò</a>"] },
            { photoReference: "AWCwydgv4BXB1At-npKBVLXrnj1t-lSpxsrps6jDmmkYaRowqIrepll7gC1d_zendlwNBdY8U1eMFajp7kzzaLNH83uHIlZtYVVuMApBedN2PzbMIAm2zm8PdiIDjBgJ5gdfcSfRMAkpUEN7Yv_zMC6hviH3DGktpmSYRwpWPl2-mcLV6fpr64bZnebGur_jXw0x0XbeX5q-5wZSfkuk8jVpwSyOyB3O0MqDDT5epw1ZYLmRHMuSk0liqB-rObKwChoyiCFxUuQLnb_zmE9urHLcWB5GjhNX1KmajlVQELi6gTfbY_Zj6BXZ3Goa8QRCtQlhZ5XBLNkt9DtlSOywQOCDln-YmHr4hUU1s7KmlErn12tXZa4Y7Zp07pzXTH2o1Qd-BCppwS6WivXSftGQmtPHoU3acYIPNnOtjwan609F-2skNyho", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114309995329779511663\">Cô Ba Phở bò</a>"] },
            { photoReference: "AWCwydgJiz906WQ3AxxpmnLs6gV4kuvVyvuQg5fD25ajRfCVp8ugDnkALoVaGoSY4vkkiBQwkdKl-Srx_kO2CJ7qnjCwml7DqivZI7rLqvrgPIRkX5w9Ioi4gY4ZC4i-Yqi2H8av9fKG6EldwBBIsWs8oPUosEfjHfhC1RiBeYpezzP6Pu8a0WsXxhkReej7LY-JIPQG9q_iVK-w_-62htLGMdjo67dsOv5PwksAprvcRG2-ZUAADmpOyLYBeaz_hFlzO-h0D28ksi9FjRvo1gB5h8qYYXw-nY2VHYSjfazZeRqu4G_t_OXugAikRp-W-mwlTb5JxMfFG_xDzb6pTyT32QEYUG7ULhWIf29mayN9bzHwevLI-KZX0iaUOnBiIUChzUz2N1qAcHHUV2hbUsnOa7XpnlKnB4T0Wifm7uwqw5orY7B6UP5htnQXYOpaJQ", width: 4000, height: 2128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112986627016889405089\">솜사탕</a>"] },
            { photoReference: "AWCwydj0e64GH28OPXESZG1uDXAyo7837ONjSc3viPf4AM240BMDoL4-RXQl0CvDujyDIBW33u1pEZ2uRuDz7ytVeGESB0u2GYQBgtG9N9WQmw5ppD_RecF03Sc9JCu3MODgDDSbWtafMYQIiXaPBS7SygdqV54YLJLjXdmqXOJdf0dQB9v8ESO5clu6V1gNZ28n3NMrbxvm9YsHdE6KQp0ZkxLyhqVgNLocdrMrh5q1j0T-DpH-bHyPlmUkBwbEXsy2jfn-S2ZZPIE6JUOAwAkJOKjW7CdOSDrUD8EP33-F6KmFR3xQqgtgpWjTYyRcOIbnOJnJdcxe0uqq3E4SpGCywecsJaWe93-llR0T_SsKrYKJF5OonTFt0L7nHSS8F1917WioljuSSnegDbbZWWHgE9qtupOHvbQC6hRRYRtiBEZ8GOJRtLCIHIAoKSRLCw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112111144457867443678\">Gemma Ko (Jemma)</a>"] },
            { photoReference: "AWCwydhdRiKMMp7pTmaHvZVsVVmJer1tU_ufN08viT0vT-Bl8-QIh_4m0Gfc-jlz2LgwHS13JnfTAShxjgrMaT_ogeVnJt9xI1o_roDEywbr-CV4UvmEatCLzGCHF-F2T04wTFCVVnlNLS_1565dmCW5OVNxRAgzKGCBvZrGuEDv1mw01BnOK27h2Jab2nG0ujn96sKZBggAKjqcB25cOgjHHcAkflE_urNzawEYXGHxJqKuamYgSrq6384rwXP6BjF26mZ0o7gVL9g3dzJdMmJFx3ng3UdZSeuzklH8j-vcwGTcoTVZYcv5JszxaaB_dclLhIewTCUWzqoKjptqXYRdWXqiUNV3m3Lw7--TRyQmpVhBhzML2AnkacXyyy9oHqFyl5ClDzjILykODAgCNkSnJi-oLrG5MMLVN4HeILVvCIex4IRHGcdK0__k7aFi5vQm", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117539565103788775750\">김진숙</a>"] }
        ],
        summary: "현지 분위기를 물씬 느낄 수 있는 24시간 운영 쌀국수 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깊고 진한 국물 맛이 일품인 정통 쌀국수", "언제든 방문 가능한 24시간 영업"],
        tips: ["현지인들이 즐겨 찾는 곳으로 피크 타임에는 약간의 대기가 있을 수 있습니다."],
        menu: { signature: "쌀국수", items: [{ name: "대표 메뉴", price: "₫50,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10466735399884916731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Pho+Bac+Hai+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바토이 해산물": {
        photos: ["/images/da-nang/info/restaurants/b-th-i-seafood.jpg"],
        placeId: "ChIJySI1VxkXQjERUSItJZQgxBE",
        placePhotos: [
            { photoReference: "AWCwydj59jKS0nJ95XGx0-iYoc0zedue4Nx1hKgDwMbrI1diZqDaLxmQzX8KNWSlOXtaw3paQaDhKEbHVWBznONPPNDfK8BH5wAMJzs69F9pfhpd6k2wmDO55vVxpGclIof_WknBvcs_Yxgwsy6rXrkK4SAVQ8gNUDMCoo7m_sI3aeEpUHpyN49U79h3yRfgSn0Y9lw5dNcVEtFHNEe_h3NfjrztBtaaUTszUynj6AfvbRwe0wpaENssCUJgZCK8iuxVXtntzLBlibsS5wwrxazfbZwPFm1ghvrKrK7P-P6VLPkZUHYaK0DOFRombd3ijHMVWEqzijZmCEVv8ekm2Akf_7U3dlD7T-mUNaNLGbZ9zWm5kGMVjIlqglEc-qCeLoY-Z_kW2IOn7TDwKtbDJm1CQ5K-X-cRb1rkqoaY8n5RC0fpMR8", width: 1072, height: 632, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106405514099291147997\">Bé Ni 2</a>"] },
            { photoReference: "AWCwydh1d14iLVeHz3WoMjk_kkiHs76qky3NLRcxEWvAYzPrn5fOw_6qhL6qQ16_cOlm16t5dyiNAA65xcCTvWAYyLyvbC-qHCM_Pt9DOFxywpvxDy-yYAU8fdTgGArnFyWsCxE_kDbq3OTMc5PGsCu-b9FsqWK0ZmsvIj25VFb01GFfxLivmt-3c-wcn8adUxSWj_M15_nLIh7qus0Lo8yWd2pzJo26ZQ0sz-aroH_4jKxl-rpUjsU78rIzKhsvWv8Z-sQamfkye5m43TuXojuG4y6cC9EktlIH7QkpZTDejdVE0I8oA8opXo26JPxAnS_JWcpJFCDZ5nO6UR9mzn20sNrFexRE4VEy5fTogQI4CiZz3D0TvTzwTYFB4pycwHlBrdmo-w8dIkq1JWbMrWnKWVdMwfn3XLakQMzEfSYjSYNzaw", width: 1221, height: 830, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106405514099291147997\">Bé Ni 2</a>"] },
            { photoReference: "AWCwydgVNTg5Z5_JjyXupzatE0A3w5zBlPVV89Wz0rzoOW20sj2b9b5TS9qsFAYCWNg9p_O1__uHybkMIp7kOOul2WYet8Lag4MG0TyDWSAvahsVxpmGLTJnx3FsK-AMIbHLi1ykX2Cf8dt3qUXg8v-UZgcR5Qcb3fVJ7Se28Z2TBUAUfNnqz45GBPE1l7XE73kLtL_TTKbCgy-77BSGIjyxMXfMp1f9tBuzyPXviaPWS4gCtCyUTj_peAcYcb7QUVdlM_JbN-tmf9MJETymgqd6Z3GdWDk78o_cj-7_mKxvyN5Ntcpa08NHuVLhVl4ae_KE1hYnW0-6RZ63hSMkGRjNSVMiUHLskxshVqRsBwtYwhbSxPz1oeaVsHHxwbfa7kRDw1M58KAqveOq7VZkEgT1XzvxCKzHmfO94ieE-LQJB2CH6i889p0nlTH2A-QSW_N6", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101620282528454209380\">엄지윤</a>"] },
            { photoReference: "AWCwydiHVYJ4KuurYJm4kZKQqKkGXwSLDwSUxzutiOGAgtktsQncb4-8_jMT8dsxo0BptOTDbRO92H0iZpeC9JY5Zj-eA8gDhgySE9vCGSEEN2A-sV9ayqUN7JH1Cz6z5WnZ7LsrXJO61UI0Cmdi-f-wO5Oufst0ZrvaqDGuvk9buBiatLGHgLwWbrt1YlZca8uSs8o4qZ32MwrOWwJYh0HM2st2SLOrnNWfVW4fLtbtcnkMDt_CU6-FdhV84Bnhvnwp63s7ivTB0z31ew6nmlBqSzMN_ZWCiVHfDVOMHpkpSCfZZXAd7i42MaOgRUDllNCujhaodjoB2pKxMXNUiqE2ZrQuut2jKfEqWLe_sENaK0dtpadAwMec2I-2LJI-ePmsArYB3Cnwa8j88SjKmFsN9afc6kudWUmGQmukjc9XacIXFsQO-hA4HC4UNkyOLQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117403450373123487128\">Khaosza</a>"] },
            { photoReference: "AWCwydg2lwIIVKibv_m3oxwBGjKkSbov6VeOmTSkmhgqk2k4NrU0-v3vB-Od_rsEDOAJ-RtKjzVAjREfZugSlXYPZ_gzmltS6HcDB3icFsdu1wFvdAmCzq_74O4th8qcnntf8fyJwcxhGtDrr183PqDD987vpB6KoqEq_YllhAq0959_0FFHH3_QjtFp2F8XREX8j_7cHNPJxAptkG53mHWlTnppX4Ibj6RB73zEcBBAEHRumRyAii6oIIhY4XBzdM82gSwbfphCJJEaCvXnp770DBFzgtZXSRIJrsCNscllt6LHeKXO9dmCaHQBh4LXOv1xqpG-fnGpd-pvdUJmxIXJCrcOF70nC54xd8z7J58aUNcfm02R0SFJjUTq-XQdviox69-5gYS9MQ6uDS86pYrMpAhrG7qdJxAfjhrAMrgPRZxn3kMVWWOVHh6w-SFVtOD4", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105429719570256488152\">BENZTUBE -</a>"] }
        ],
        summary: "신선한 해산물을 합리적인 가격에 맛볼 수 있는 로컬 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 신선한 종류의 해산물 요리", "가성비 좋은 다낭 로컬 맛집"],
        tips: ["저녁 시간대에는 방문객이 많을 수 있으니 여유 있게 방문하는 것을 추천합니다."],
        menu: { signature: "신선한 해산물", items: [{ name: "대표 메뉴", price: "₫200,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.foody.vn/da-nang/hai-san-ba-thoi-le-dinh-duong", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8655960273268658815", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Ba+Thoi+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마담 란": {
        photos: ["/images/da-nang/info/restaurants/nh-h-ng-madame-l-n-n-ng.jpg"],
        placeId: "ChIJe0VNzjEYQjERImNbpnRF9cI",
        placePhotos: [
            { photoReference: "AWCwydhyuNK5SBSfjY8ZiFjKwMTYkCNwzPJfUMPSmAV6hE6rEKpQfNwHhcEc-zsjjlKN9l05hriJLpq7W7QPajbhY6LSD6sJadCzRmws0yQImLfalGy6IfXE1zaMwMcKbaSuII_cBtHA9dM_8bYRLptFS1UphnUkZYrP-8SRA9fesMPUWkjpNV50JSMTxC3igYmX1rM3rm5wcoMaQhk9q2SKOnMleVvfN45emLE6MEnp0kxbgVj5NNo3Gyk-5Y9PDLPpf1V0bML-x6iGCkbLpvR2rjHV5i9UDb43jIEjDpgaFXSgNoLYWwmxUeX6-UXCwQiFjc09IVYbGzSK21a6c2fFfFb_EPMfjJeHXl9406wKrpcYMeR5i4xba9Ssnd002N_pNJ8HrEQrzo74CMckRp2b6TsKw6aVyT_LjHSCohyd8782ZC53", width: 1800, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110407577368996551829\">Nhà hàng Madame Lân</a>"] },
            { photoReference: "AWCwydhmL0taFFzOWe424nAEvrGzFC3OH4npcj3mxrjey4N9N7tvYrI4uFUcS9nYJ70QOLoSsTFexpjPMtct-KTzumZxxbttOw1amNaPi0dZVgagoJfEWzW27hUP9O3he3U8qIrdL-1bE0b6LUnBrhFcsPDOrSvLxrcoJrLtFQJjWYD7lNlmGOzT7zBeCsTPpFP3V4f0lBEGwPCaJ7hjJ1TEbZYHqRVh93eaEq8X-hvHP9bs7OzBBzvt7p97wc2S70qkFloWEvw46MQu00GAnoy5BNbC2xX5LmO7SPPROMfa9Gek--17f-ZCTW_JlqhRiyXlB6IPHTRhBTLgOjgjbPH5YccxOWE1uozTF9SsSagCbXvePGtcFvakVKM9ELYfk8TDNGkXZdwsHC7iDxoOE5on7OBxDLi_5YrMFOLWyJ1Q6qCPtZBa", width: 3428, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110407577368996551829\">Nhà hàng Madame Lân</a>"] },
            { photoReference: "AWCwydi8ZOMpHgSr-cYev6jNRfNEse7XWaJbHE6CfqVhK2VLSkT3CU7yCZYapulSbYeqpquqxis35S211xbvVlLBpWrl5o59iPoSEN6gOt5qxM0aQ1o9Ub51x50-zw-vCO9gJqUXkdqkoO6O5vlTRNNkWmNCsR13WDFs8sC6nMiZ6gziXnYyiUZ2KnGOM9YI-arsgCrbgnJTR9WmZ9VwJfTjZsDdYluNLmTu1pHGgyQg63FibApdPzWSY7pdtVyoaHgPYLqi98uLLjCXGb7VV4Ik5aZnWeoO8mtYvDTTbWYPxiXjfhXg1dlIKnDJV7lvcFjGSp7vYcEgCaPZpiz2j-pC9DbtOtqxHHnbf72yHaPayjYooDZFrSMq2nd1F6S_ADEENRgBQ8ab42blxAcRfQlTWpyZJUsDmmREPHjgYA8OqXmpdm5usdUH_P7XFt-xNg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117110123032487228510\">Yuji MIYATA</a>"] },
            { photoReference: "AWCwydi_fenAEl6GQGrj-bUQKWPf_HRebVDU4z2_XkOg9ZzpzZ70aHAkIvnGwCn_pzaEbrcfXq5HzuWf8w0DMhC6Dhd8Gh8rYeAlwKez3YuLKOLD7ugSHbvg2E6zL_62WTX1v-kZdg3p7sJQmPw1CiTGcZILcpLk1QZCFwwJTZM6UfbCWl66tGjQlcyw4r11X6Nu7qUsJJIc4oEQdqQBAkGxzahEIgh0AHwakhV5XnO3dvfkVlfxGBRVDYJ54KK-MDUX6gpSLKk3areO-yYa1ya3H2wp66GX0IjZtvhKY4RZu6KnlGnOUD8uCgPGmZ9MsEfHhJ4QRds6K4W0eLdaR0kXCVdn6LjNEYeouEe2bVqwGwp_20dOX8fseRsgDttj-kLeYtq6tSt0t_cuJ4Iusfp2lG-gXMDclLu5yJ3PKGN-yGaXeqmIpgyOmzZ4b7lyF33z", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100262678888494956545\">Hoàng Long</a>"] },
            { photoReference: "AWCwydhL8WG1LUyPU94iPyCINEu7bIZouRr-yRA2sENoto6NC7IccYc1Mf0Ulw2Hvyx50zYAh4uGPcxOqKA2CaJbyawd152s86jEytWHeACTtRBYNmlIHoufkuO65lOrlaTZEvzElnuCJ9_dB16-qJZtt0aaW2CJ_asfB8IMPwXC1NEA2RZO66-f2zzjoMjRiY_B1E1nMdrYdBnTKgPMsXypJpQiPp_64AKn3uhnelfxyJRuSLxcOtu_prCi3YWnouAgiORpK0ccW4CmbU6JOGZ1GlwaRkXtHEbyDApF9-UNpI9wB-gu7-5luwQC_0A1PEffLjMpfhI64g6t_mItyPtjPUirv4dbk28PGj0ATPbViENoPRzlgayoXiflzmTd15JSrGv5QM_uo3GoaZb5ivG7-FV6CpfQ0839QsGCEXo8jGC1aybW3RlP6e8bsFOGXQ-u", width: 3095, height: 2659, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101780886962961044985\">やまもと（ぽん理事長）</a>"] }
        ],
        summary: "다낭 시내 대표 베트남 음식점으로 다낭 일정에 넣기 좋은 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다낭 시내 위치", "베트남 현지식", "여행자 동선에 맞추기 좋음"],
        tips: ["방문 전 영업시간을 확인하세요.", "피크타임에는 대기 가능성이 있습니다."],
        menu: { signature: "베트남 현지식", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:30 ~ 오후 9:30; 화요일: 오전 6:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://madamelan.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14048210979961660194", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%8B%B4+%EB%9E%80+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다낭 벱꾸온": {
        photos: ["/images/da-nang/info/restaurants/b-p-cu-n-n-ng.jpg"],
        placeId: "ChIJ-UgnY_QXQjERJTTHpNvcFNw",
        placePhotos: [
            { photoReference: "AWCwydiSmnhQ-5QMOQwyLJhhyBIZQvprzQXjfMGQYXav3ZocU6e4z_5C4ML9yzVgF8gLiFwY0sM4UoOR0yAYwppXxROMk-YrwgFY7A4FS4k7bXrpXXkOUavA15qMbrPgyvXqUheWtzA7xhxznaWOHsbO0JMNY6C1WnsAEFLNi1RZfZSOzXGtS3oO2Ew0VbRh0g4b_eGdFE8IjuNj0_h60Xm5zaasaVnym0OBExkSopuen2IKYwdwaqQISMs8TyXh2q81z9bW7qZe-Y66KtUKapjcKfZikazipXt_U73rpa4wiVMREu3BfW7AsNV_3wjoiP-xG7epI76zzz85ZMhWIvQj33eBUkAzsvU9ISKK38kb9LbK9GAe6MqbjRl_mfmivDqgj0KfWCp7pWzrV2aZNH9BybqT2efqpthK86_jft241lj8GA", width: 960, height: 640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105280559726805004894\">Bếp Cuốn Đà Nẵng - Michelin Selected 2025-2026</a>"] },
            { photoReference: "AWCwydheYuYMUCYu3Tgx030e8jpJtB8BmCkqGa_oGaFCyoUsQavlzaPIwbPfK_pF4vCrnB8I9OwKHrd4K9RNtkzkOrUdv1mrHAvCTWR5bLpPL57b6QGz07Az69Sya0S2QrsomrjPcBVHy70pjfqVb6q86exWwrCHH1I9bqRGd8qFaIRHOh6ptwJUyddVbQLz9X-iOZXdscYkvxXbtp9OLys9yjmfrsMtEvpDOgMgRg_NyE9Yzsv6syiMRLeTtuPBQ_WDgc28md3R0KdgP54awtPi4JLTqbhWQidcMDKbgC3sgIdIWE_YKPocfRFCt_K-5tPvUUR5sjvbK7vyZQaIlWn2IpXd_cZC7sY4vaePF618BbU1wupjJ3Ve0dlmBVJOmvk2gHUSeWY8Tr57n75FAEJQwZJuaU_f2GXSryiwJAuU1rbcy_YYIL17-DZh-gvsPw6s", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102192344115758840428\">Caesar小陳</a>"] },
            { photoReference: "AWCwydg22mbTmRpqHWig6OTvjCUA7SHJTOgHkAEXwDdcCQCMs5U-Dnwx0w_gVpmRvjyRRvXTiT2t_NUtx0LuorwTWX3d62xC2kdq0hYImyCaq254KMZCeju-fYY_vX3n3u2sr2i5y9zRgG_RfnzrbruUo4-hMTecYfGaN1JU6FfCxhth1e3CjQRhIvfrQn99taQwW8h0S0CP43EFl0eo9A0cVEOFpQ041yTg-iu_GxxtFKQBtB9e933Yh3YlV1j4-8FDoK9xC9rjvQc_J5yuZdCe54aAlQfmJEOr2-D19GYTkqstpCEfIWbDH-Wc-GHQUDDaXdiyFRpQ7yMS6S5fviMxY8t0fa-nvZFKzWkUR0NQJWx0AOohIB5cDlx-Ybe69DXG1oGdL8qVXa3MAdamFo0Fmw-UBLFx_4oXFtlqnYlV5ZEeLg-HhN6hs4ceYeNLDteq", width: 2560, height: 1706, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105280559726805004894\">Bếp Cuốn Đà Nẵng - Michelin Selected 2025-2026</a>"] },
            { photoReference: "AWCwydjuYF4LwvaPjRg_TiecQDqYiPU6rE-D1jD_y1AC4GxQRCtUWD5w_nZovOybm02aVGm_yE34HebDfuE0WMYQPYNRoQEZgaHhXTsdnrHdT-7-zSq3L7Xfz7Aj53r3asQ1O2VlP4Z6xtQqzAQltB9OfgTl0gIl7bzoaxpu9BY7dzJgOAN2XaTij3KUb8SHFXB1Dd09qWdz-GNYMnclcSggu7E2R12tJv8nMr0EdqSvK1OGd4PMgPjLYUX0VQB20WWT3ltYudLzPAvOk2fru2aCf8PAcc7RCz-zQvOCE4HU6OrnDqoBFps_ZoCMxbQjATCiDqd-wFxtVc_p5vezp7IKMdOc5PmutGAThOOrhpcoaWRGbKSYlGm9kaqaovMSpU2z3u8Yy3p6jbEQ98ML6oBUbKR783E0uQNtZr6_YmihkamAa_6FKxBpL5wSeQ6EBvNK", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109710432923158460862\">JiHye Shin</a>"] },
            { photoReference: "AWCwydjH7VcRlSPARS4zXIINoFTBEDWvYG4cqOnPo-KONlGFsxMEEvudWUfCS5C2dhyjL2GizWSv-tB87q8yfvKSlJ96ad19jOdjThsmffoYL9qw4Rro175GODiL6wTroFNWJRnzOl3r1SdMuHnoBpcQbCUqZSciJAw2R_DrC_MvuogKKMDmgOEBGn5yhfZlKiU6MnASZSnhLBIebyvS_v4L9Wen3-wWo-W3t5nyec2U8op2Et3QexXkHq-7_eeVf1fMaQKktrPbl4bK9sUtYqcVehWC8mDJXhVOId7CbpocsifYFrzp2CH6yL_cR0r_5dYUh9svI-ptZ_oR5bnfXlk8Vz4bzN7KGA6deSizmW1QZ3IUptBS32VB7g_wGDNmGvXqTjq327Ci1GsXNiYkPb_sHrNpnNi_hHxSLxhBsUu459LC8ns-jHeQE2m8Xf_fDNyz", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113256685682121541165\">mstk A</a>"] }
        ],
        summary: "미케비치권 베트남 롤/현지식 맛집으로 다낭 일정에 넣기 좋은 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다낭 시내 위치", "베트남 현지식", "여행자 동선에 맞추기 좋음"],
        tips: ["방문 전 영업시간을 확인하세요.", "피크타임에는 대기 가능성이 있습니다."],
        menu: { signature: "베트남 현지식", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 9:00; 화요일: 오전 10:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/DINNER.LUNCH.BEPCUON/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15858543023798826021", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%82%AD+%EB%B2%B1%EA%BE%B8%EC%98%A8+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콩카페 다낭": {
        photos: ["/images/da-nang/info/restaurants/cong-caphe-da-nang.jpg"],
        placeId: "ChIJi0bpGjIYQjERRodYRF89PH8",
        placePhotos: [
            { photoReference: "AWCwydjNSv8ZWcr5Kom_cZRPpDK52_nxidFbbqOafd3_J1P6Eh-Azk3rkhQyo6zR2_vgfibx92ewrQanrdwh5ChIpXnQGAUh-WdQff3q_E01oeeMJgnxh_eUtbHNk0rjNtaZgJvyDaQoKHQcrlVKpVzSKR0tLyuwYX-kyInCueCuk-xocXsZ9J1_5nl_uyllQbaa57mGspbztj0a36cR9gJIxOxAeZquUFDRKRfmPi12qCmkxYVNU9qYewqlFqNKrTZsLQcNtUhuk8lhWMnhHU2WbfUMDt0mJY9PRsi2GqWdQxD1AYs7-7s61Pntcqdc8ZWquT5WxbtN2OgRwQxwf74cj1FXSuOnGPSdbXRzMexZqNZdu2KNYr6b0IG3nrc1sw6UxOFGQA1nHrT5BkXGRgoMFHRTVgAxWgAqwYhwvJhFI1IAdQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102088778261123464907\">Cộng Cà Phê</a>"] },
            { photoReference: "AWCwydihWddLkCkzrsIB8HyTwekINHVZMfGirdMUe3Ba1pbTfIs7Mh7fnGbClbZB9y6i5sj4OaeXOVkXpWGR4ZtA951o6ZPTNVoERHbfb4okV3YxR41Aj2HFRw28M8cMC-dCBfpDbARcMHpnVH3cjvukPP-2UE3CRlwkgXrmz2tSuzteZVQO2q_XxM289aKmPnYHQqfQzJ9MlJYy7tZ5jR3DnWlXndL6c6GKx9qHT8RI82KdbkyLi25H0_3Ja-X-hTGnjon3DsbC9F16SNMIZ49SRitRVHCE9yYhUx8VJuLZpf78nL2kDHaCl3XZH3nl2BN0bdtYFO-eU5A6U-LnbSJvjomBJUa4mdN_VgROK6RoV3zSn3YGucEsdOphMcft_kAdvct8MT2j_ct-oOX8C-SzIIoWBI25mAIebBB-PJSvO8B2oA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102088778261123464907\">Cộng Cà Phê</a>"] },
            { photoReference: "AWCwydgwhrdtskbrICEWsdpvi6nFsHnphEHcChg5oOiqKcIX1DVEw9f8jdDEdhSuoJfOgjslL27eMcIaINYLkgHkQBPpk0M3c7Puwk5KfRfD6QJ5C35DO1mzOrB5YhpM1YQ724FukyS_LdYf-uAWAD_6u-ukYHTdoTulYR96QVJA0Of42vidGBNzOnpRgGORdgr4DN9vQaTPw-KKHSpdKewv4_Pzp-GGKVK0hoWCH8XRHFqENkRPZYXXl_Xn7liGA4zY0olQvtMyDWzwyaYEyk1l4OWhufE1CcOqFC1_2mmE-akZDwTC7kcBFThICJJoVgR4zweohlOZaC6KAsl5TZEoyD4i0X_8V54tI_fhLAC9M8y98n-QQzi2RAahyJQLLomQBazBdnS-w3dC7VV1c9FxJCWLDPkIGhRtl5zVsxyOxAWmtLoY5mHYCv_2zBfE-oFW", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111443140714005917359\">JH LEE</a>"] },
            { photoReference: "AWCwydinVWiSN8ugLDmme0Qtxj-27Z41cpXYSh_MSBcG8lKdjjmzRiaiF2HJSszyNqDgtCas_7PlXzI_p4pPnpzebWJgCZkYrkDGqCnmeSAp55IUoGamd6Z_vVq87JCCG6Avq40INMfjtf5ynBU0o3oytnS_tAuazBPpNOW-0G1PjwPAE3Z6ise03cevRni-8_lafUL22lgw61mYEuyr2lcPQDbvAPt-FGYYKfkmAbzg2yEtG5ZR4mEfi55e13Q7xpVZ1zRTbkxa1vTuZfmzE6sI7IGvBHDEkCdvhL6fQCh8kUw-DleyYOXWG3b2qL0nRrQChZAQUSaMdyRDyTZu4wzvRyakDp-Qh9jreZgu_EeXsrq1M8QOzO-FHTg7WrANL8kDWPfcy6ebzVF4-8SSl9IK6yfWu9SdaNmBAmjfEq_BPwNf1206w2WT8gXllcichTwe", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117680961004880493466\">BJ Koo</a>"] },
            { photoReference: "AWCwydic1r7pM1m-SrejzzqAhDXEU5W6tPKWhW64uZnVRDA-_S_3k_Lpl3ToevlO_l90itMvlz3wsOYLqAhJM1_AyGtAxFCxlzT0IFJL6ne33WfAFHIa2FPXexrB2FOVvzd_4l-o9SlcwvlgkC2Wt2B1U68GcUrpTUiDtsSEuXdndh7or9DJfO9B8uH0udmCPDVhpZ-pqTzcItPzbwyyabDjKBSqMD5wBnGIMhg2PuloJY35jO0ZbesJwJPQhJ0Q_7lVUw1O9n-4eU6Ht_Hca1jXpuBq2l1Z18MeknqHg9m147FNPL1Xit5XyNXCQZBOxS0s0rlJ49zSRHczccmBN8IkmAb6byqImGLMlU3bjl8MdreuMlZcq_oeIAXtYcIn_MnrlNp8PAAeRdSb0w6kQeHnANvS0-bI_8C7VW4UoxHM4omu9mGbRQoaSOuUVTxzg7Is", width: 1932, height: 2576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113375903018754413372\">므하하하하</a>"] }
        ],
        summary: "다낭 여행 중 꼭 들러야 할 필수 코스, 달콤하고 시원한 코코넛 스무디 커피를 즐길 수 있는 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["시그니처 코코넛 커피", "빈티지한 매력의 인테리어"],
        tips: ["피크 타임에는 웨이팅이 있을 수 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코코넛 스무디 커피", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 7:00 AM – 11:30 PM; Tuesday: 7:00 AM – 11:30 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=16.0690486,108.2248767&query_place_id=ChIJi0bpGjIYQjERRodYRF89PH8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%A9%EC%B9%B4%ED%8E%98%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "Korea BBQ restaurant.다낭 한국가든": {
        photos: [],
        placeId: "ChIJRaHks2wXQjERVMrWhffmRXw",
        placePhotos: [
            { photoReference: "AWCwydh4nfK78cwKyHS0M0aOnCdE87i89u3rIQ_iLkocrl1GAqLPHWiiUCkos3RSlnfZPbJUa74bRvroOyFKtEkfWlX7qd5fZC9G0_f5VjdAls3sPOq32EhLiCzTaarAsSVUoxDFw8Gnov208Pjzsl0tV_IJgmXIXyRVA_Eam5mQ5abY9Qqf29eI-jrSqoiZmE0hcdiO_3AKIH9UrPnKX71BziV8eS8HzSuJyDpUxKkUEaSxpq8rv-Il3qH-Hp9y4Suf0OIXR5FsapIEAhQBgOTaqUoD4LAeArXSvNAPWiCPdkmfDDn1lOU0GHeRoCafFFWh8HYpnIamXraoqsE2XXd_hxTCPZvY7gnzVteirZJgtJUaiJVZ2KE29n778X2BRHaJkSCUXCH0L96refo3Rzd-inYSqpRjtsR12XCGDJxztA9sqHDbJ04zjEBLqkduUk8v", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112152931171683797847\">3000 yam</a>"] },
            { photoReference: "AWCwydh1sORVD0UKMF4WpB8sAGGWkPI1Y86__uCW5C2nhNiqFLdvlEx5y4TJIsBUmVSuagOkeF29KHPfP6kb85FgDNG0DLBIU61pUxi3EjQe7TS0yNSBMiwMopJm7-e__s97FwAZwb6ydiVxaosOIssIdPFsJ9EMiZYV3yHkG7-ddupmd6ojh5axf0DsYkRwtsgOs1axMg0VKTHzlS0JYjXTmE42i-k1T2EzmV1rXBoJHio4czWG3QGgu0mFNn9KlZDLEmLwkTAYZhiZQrS2kEeqk0WsRgkGIAafthE1ybtIsJPG2a7cvOFlNkirnpcFaELR2dQ52UN06gu-NIQwaPUmwrXBLCSpdywWKcTMAZk_34sPQj6PGbWenyU36W5FZaI8HcKm8huxSPwg6IvDN5rN7hhdysBrHcGcL52BaLAk1bkptQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106396427764130084881\">Korea BBQ restaurant.다낭 한국가든</a>"] },
            { photoReference: "AWCwydiu8sWwuOrt2IyJktxEr-urcYhoLvacuZtk_GC7jnwu0k0Lrsd_xQ8aAslrLVvRDhlo9ai9pUwCojF1R-GSAKkX5RtRoiclFUGz9Opl4LYceI3f9h0iYz7eA0oCZj5kWlcQNF_FpDvXunVY2H_d2lCXshctoXfVxrhM9Bu7dVCxoPzOUZro06wMh9kvk-jsmtQh_6JH657Jw_bv6pTmTa6rrU2RPgSb0K-sYKvGJRWc2h_xPwexNYnyUrwM1O8hGeauygY9aIZqfrIFbbedBhOkN73qDo8m58ZedW_y2cau2wu39DmSIz42FNLmoh8Bg038soWnhrkUu6-SDjWi9WhXQ7qMS0zi5awSjCYt7q0E-aI9ieJtZndt6JkZAhaB5Np6fXOCpjGVjnsDgH3R9RjkE7uGlHKPf_rA6Qaq9gWbu8kRXQOyp8LqcVxpqPG5", width: 2142, height: 1067, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106899039225394350812\">Mr. K</a>"] },
            { photoReference: "AWCwydg1iF9Pm-8UKUSF69we0JQYDJenn9agJztivyNwlDvUiEo01whZzCt-l90jeITNMRW4aw1JlAYauQ7TqWTy_NY_y6e2DwR_iGaUfKSCDDknqc9Q-NVM-fgdBYb3K43iK59UAlg-zVhMO4sTYmeECZcBNuE2upS5GkDNpCcg8EskVLbabYbneLqRXnNz91Kz4e4GH8bgkJ7ycdcZ1phn6QDS_db7KcwEnBzXvQQNvoXgXalOWm6u1HxFjwfr72ambWqqLqXH_CnajDFvuO2YOw9WF0HcT810Rs1CRLv_IW_rHfTPIQPRERP3MUQkkxIkpNZtgtdYrc0MoOU1IGamAhV2OZE-PlPOhAhWV_BX7hthfUG-v14TwsxHEcK8DrJNZBLnrtl0ma2LwL0M6zK_eRBLBrusvzSK1eKsyS-tzwUIcnNTJIQyL_wqyz1VYian", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108301647804497519909\">kangjie</a>"] },
            { photoReference: "AWCwydjIcsclZI6kHtl3YeO8ssFl3wj8oS9TKFKZSsGo6u2H_Sgeclmfb_gwIhbRhaeo43BLKUqHZeee7qz6Q7BA_l4OjWQ9sovWi8kWdl3pXird9ybGWnsGWkVSJoKeBWHyqfuJRFUHqICFskMII2zp6qSqoydwBm56CR3eMgFovvrYoBzPObzHe9TBuGLgDX0i6HXLEfj4l5C-8rHerikUTElhUZ-GHH4l3b51lweXl40fJt26WhRtk43DS2KQKylyMXNiW7e8v3UvctPgOlOSVLBoBxCNIdbSkDtevWG_BbzohK-l48Vw3OrRo3iqv2YEGG3KDtHLVar9UoqC6t3leYZk0IG-CsfYWtqjKvCrWmC7YJ-HHSgl9dYIqkdXQWA_Ho-MVTCSI4sGcsEjvFVrw4QPHxokAzCHFMs3lMvkuMJi2dYNocCKKMDtWjJGIirk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106692004570009567239\">석고은</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰가 증명하는 다낭의 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선하고 맛있는 고기 요리", "친절한 서비스와 좋은 분위기"],
        tips: ["삼겹살 메뉴를 추천합니다", "가족 단위 방문객에게 적합합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 11:00; 화요일: 오전 10:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://koreagarden.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8954817384872856148", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Korea+BBQ+restaurant.%EB%8B%A4%EB%82%AD+%ED%95%9C%EA%B5%AD%EA%B0%80%EB%93%A0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "굽고 GUPGO Korea BBQ Restaurant": {
        photos: [],
        placeId: "ChIJYSmNUwoXQjER1Z7iZ9zoUL4",
        placePhotos: [
            { photoReference: "AWCwydhJ_DWA7QP-B7IMyNAd2uVeWozlSfHrNHT8reRFbqBIztXfB4rza-KBUr2FKUK4CsRmbopjUC1lk_Iif0xJMS_5KAemL2e37RwH31vs6AOBkp_IXl4UAh-x8esPHduvoFOaMiJ3H32RyLTakkm9qUE9lQAuh1mKnTIZfmPYrj8c-viIGikesHrrmQ89ay0qKM6gdldRmKVV1rSXtO8NuJZ6DWilnTxXTKQeketQXfdmCPv_vgtvtsIocCAkGFf1xSagixOEZUrJTGIOa0knPSfk1qfKeR_dLfzSGWGFqAovAGrlcq4ghQSj4FJKjQZnNBHXYGc2JQQB9VQnsVv_u2gEby9EArYlis1AcU1M6ZLKTGq2fKffH5fuqnPfMQrRPk7IuZmqPtHABd7cB-XK53B1JRXG9p4k3mdgVq_7gyGISw", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117646701212404071358\">굽고 GUPGO Korea BBQ Restaurant</a>"] },
            { photoReference: "AWCwydhdIv529WrQZIkTHgmfBdPzEmnW-brbBjq9hOawffxNrQzlmzRiVxkuxeKnYU1XtBNL4y0OaB876CJuyrX8mC8Fy1MjYgcxoxcXPfkepDeN9DbCXZqAxK0FkVvoRK5Z-OxCHFyySlUX6xZUnxfyUJ3VHYno4DOUvmee9xNARrrLYQ-vwqrUqyx_3WXK7ammrsVdf2PYXNjb_XuJ5zy8LRr2LltpmIEWDDcHRt3jhtcZKgHV35828TKamc6bnQkGAapgLz3-Di2NNy1LYs90EL8qbFGzQL_lr5Y54qa7RT0MwCjtJZGgvvDuMnBeI3q-llgurLb1QnfxMhVOU-l5-IVGGFnngWvasEwS3_o4MoZZ_qfFY5cx7LuPLnNEFB1U2Cx7-ZdUsY9dahKO5bRb6LfLyP7WqxaDLe6qyZ4zx2owMUQTyfDJpR0t9syRxgIg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101408908868955297228\">Phúc Lê</a>"] },
            { photoReference: "AWCwydgrp3DM7dq6ErZiHMjIkJkUuCakOOebVV1CAtdYfLEDEWYMiyEvPehrk1n8c6KXGxByRIOanyYYxp3wR4kgw6o4i4SfVbqTD9qLkYPv32Sng472LUJyANY5n0TxTTJi9LFCuNtaeNXuV0d0DgPkvor917vahDNA0nUawY2YIx01hnXVT-TAdtGJ5-5aVuCyz0DM0kSJ8NgVolsh8gS7O2Zj5A2Hzf7u1Q88RdNjKE4AeW2fvgermmVSgRFIrA0oZLVOldLLSuCAUbw7BXJRADI1cNzTXPQvQuXXvZdUHysCwuw6AuGOQMT0W3wuEUpagmb56pcw_85J-aom_e96sl0Agn7W2HUR2I7xgA7E6ow10Vg9IsYdzWJly0e9u6s-zxkHRU6HU9fyf8aL32QQWqltKKpgNKnBpVhRqTiFaiQ", width: 3648, height: 2432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117646701212404071358\">굽고 GUPGO Korea BBQ Restaurant</a>"] },
            { photoReference: "AWCwydg-6Aqz5oW-mD48mVArYmfClvBoAzHoY1QwTRukZY6ARh8CrYm_ufXnPyWWj5nZN_g6ZRLk1BQN-SJTLh-O-9lICJiege4wsO12YsNroggbAnZtIe-Xi_NCecnf5n_BXeCc4wvCnCl_OJ6SAlkC0eC3wEX6cwxLHxK0JV_7Xbo-anAhs2vUCi0NHNoC1PIPxBG9BEjUS-PCtbG6FyUCjzYUHHgcv_UW0Xu056_6oDw6I2Dq8XtMeO7tYH1BVPNeBoZCt56sLttAQnKtiLaBNZN_okGi66FSNktOJSTHs0i3aDkmJSpLrhMKvY1zWeaptc6xOSSXQ186LPB_ACVDL-T5ZhSAP11gDC-5vzl-LKBkLmS51kM3Je5Ipp6L8I_V02k-ECDhvViuJOTuroK4l9X-N9LussTvx8v6kmHQ5Zexwnyzx_MIIUopbVeCSnrC", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113306750929111336898\">Akhat Nurlanov</a>"] },
            { photoReference: "AWCwydhlqNeRkQDpvjlHG29z_3N0wYgy8uLCrxtoKfb8xHlynqJiMK5FSPLcla3SpAxp0JgyyKds6E5ejvbpjHC8wzC9tdX0U_4hB4gilJCibcDXhboBB5Rfku3ZWhHF8jOOhvAHBQXN04uqWwjjo-JstT4r8QAtNIHL2miz8MfYN4xlNRHSyhSsaOHHm_JFit5Q6RuskzBkkB8qdzReNyBN1HB6XOkcljsPjs7nXkdNgtKg_wffni5JFsuYE0X94Yq7ehEtNaplimOqjnBF7mc7Gr9MRl250scLjGdOTm67MUCU077OOKVjwMrvFrTDsCriX9Sl8Z-IJYBe_K0GxIBkt9nMMTD-VUnzk-fhPQvKYlh3DSb5Skx8IzRYCnEHNrZzM5uqMfO2ctfjuYUo5UcCYIsvl53SI6njzRdOlTf-HP5SWWLcx0r36MHnYfuGk8F7", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110192351829658265058\">밤토리</a>"] }
        ],
        summary: "직원이 고기를 직접 구워주는 서비스를 제공하는 검증된 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["직원이 직접 고기를 구워주는 서비스", "주문 시 제공되는 별미 안주"],
        tips: ["고기를 주문하면 함께 제공되는 안주를 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "고기 구이", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:30; 화요일: 오전 11:30 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://goldspadanang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13713716898676514517", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%BD%EA%B3%A0+GUPGO+Korea+BBQ+Restaurant+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "목구멍 다낭점 Moggumeong danang(Korean BBQ)": {
        photos: [],
        placeId: "ChIJdakQZwEZQjERLpRFPUtdY_0",
        placePhotos: [
            { photoReference: "AWCwydiA4Dtk54PZdH4m_KLtOH9UCexE0OZqmXBB2E-MI32M3m4f440-5TaISUg6TpoCoJ4IiUYE6fbhtBqsY8IoF4DKhokgeSNEifh61Ibcl6mZaCsQC-lIt8DoM76mWBuLrNQiI-cIJyUe0fFJp6tiAnWRlk5V5y_GJNqbMk_Oqkq_jEh6O-l_zACeNQy1vXGPxolm3EJg3nc3TlIuxk1Kw7BgaQ6M5I00_oBTwRYeVJgWkClTjfUjDE1WiILl3jqOrgsH9NsXkegJV8RFIGtJmvVyQvMW2YUofG2zdXy_3BXhD6uNyag2iCemPN8oYXHV8m1yZKMV1RP_KiL4ZiPfwQM2rvjkaGbBTzQqdtmfGVPfN_H10YW5O0xUaF6esV-bg9_XyossTnasx4K_IB2BhUuyi90fU1HStHdJQI8lpvTaQva0ZVrI385iMTivmTf1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109826278112123694553\">Kawasaki.N</a>"] },
            { photoReference: "AWCwydj5hOysuxn9JtfzGBN9kRQx6coohLf9_cCLXHCF3Y3m7gyovOO92BZXekTi2gOYjbpxl9_hW8l2KWlMo3ZM9SWWDjDo3wb0mupcVCWUhrQ9rs2VP_Vpo1iroSejVHQwKRGRJyG-46ZLpeusLq2bOWNbm5RheJ2ZvKMFe8V4E9xkBPIkITzlSQHrWZO-wacZP54RmmabUNaQhFD37Ybb5vmkqk8jgsbDhZgVHhRvtspISs29u96zXbRpPQSPnsDFpWW_2b3My8LN0mApmK_dfj_ddq_KSqied7Cro6Sj5tdmG06XFPZZqip7N8xyas7h1wtuGYWM5Svzu72P-lh-vuyeb97dqKbb_46hXYs35vBWDzOQ0wRuNQKornPrg34vCva-WxQHRFFRGzMGtRSBh4iFRiqgCsNQWHeW_rjii0Sf2g", width: 900, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102601904860115526832\">목구멍 다낭점 Moggumeong danang(Korean BBQ)</a>"] },
            { photoReference: "AWCwydjvE3RrWrpFc25VYu5VWqh7XE4X_ccaPZFRoZ3urrfASGadwkMRbPNhlpxJUYPMhVFBf-86Z7tvx4o1u96HLYHwqVYfseiX-IVKbIcsLueYqg5gyEdV91fEkMPH3ziHev9Cs26QEmDxxvWgVvdWwkLm7pWF0AEr4iua0ufTycNf66-hra4zNuiYvCb-Ok3S5yTkHcccUYh0lLpAtR2FCBib1mGmIAIsCAUsQvSueJKTbJbn_7e6elBxUwWZ-jbU5bbCddfXwk8Fm_pfM1D-zU3ksN7epFCqOl_4Thd-nne0xMDfjPIFCqEvOGUARTKqzTCLv4XJQ3JXmbkvkyeBbL6zi97I1cGXiI01zzJ1Lho6nb3GVgMcuKzbY_lqE9zHZ_L4JMmNK8aTlY8qTThZ6BkJcTrCJ7vtSKrb3rYtU02jwbRf8CDebsQyhdgr6QPl", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100719713542879349792\">Leon Hunter</a>"] },
            { photoReference: "AWCwydjbcgQWpBk2Ks0ucnFa_nk42myXe5kCpUB2SBM55ZgIxE-pafR6PDrSoXOytBN90LRnIaMBpAOOZTngd6Drwd30i3sRhblrtnLToTQoau54Zomtfouj7UXzFuCQ6JwAGB99ql__O-RIS2hXVx8_zxvxalnNw7mFnhgiLhGegIUmQvQeH42WlJ88fiSKfcxMS9MLJcl5CSuTZvVhzcCUrXpvmT1Lb8uKYtm4q2PvXDOeL6xM86rK14szZ9D0z5Wt0FW9Cco4CedzyZvReruGKktCAxdg6w3_O3701kPX-md0D7xoWZnq2iRFjxOIT4W6Ih2dINCZwS31Q5PoGwKrwYU6AYOJtuWaAEBGEHA24C-cimaL107BzXwxICGRd4SN5aWe3Bei1Fr2kPyesAsFiuAErSqUnz0yyV_Xp5jXl1l6BQ", width: 900, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102601904860115526832\">목구멍 다낭점 Moggumeong danang(Korean BBQ)</a>"] },
            { photoReference: "AWCwydiA3gllenAQ-0nWSqSQnV829TVitGiLttzvAXwA7R17RL3NlTSTWFhrKMv5D3g4juQgTCDBSNqHZ-zs8ntK7fsd6wxZw15aTZGgw9GcRN2VuQATS9aHXA3ePNaFINL2f8LthP4BnMurt2ljfvHJbsbxidYuNGdtPvVJCdR2BNaz8w71snf_eXrCOh-skimUP5cVWBqz0G9SrYckKmmmyGISBpCTHHKjLC8EVBvzsPStYhVquI41rmPXAfH29SXou9G4KsguH_Ao0Fkpt_1SS7K17F_84lh5eHVnrcpYvyUkX1d5asHFiTKvUKmzz1y2qxFgvx76--kCzI8BzwDpsnetrWfqxWNGJQlQseI6TL0Q2OD-P3Zq0_iYT-gVfmwnt9YwNGXNn30fq9qEAOTnLQBAPHYzVxGkulAEZ2mK3CJKMQkOz8Z1_wS-G_tJig", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100719713542879349792\">Leon Hunter</a>"] }
        ],
        summary: "압도적인 리뷰 수와 높은 평점을 자랑하는 검증된 고기 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["바삭한 식감의 고기", "훌륭한 서비스"],
        tips: ["구운 김치와 냉면을 함께 즐겨보세요", "구운 마늘과 숙주나물을 곁들이는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "구운 고기", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00 ~ 오전 1:00; 화요일: 오후 12:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.moggumung.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18258539892022023214", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A9%EA%B5%AC%EB%A9%8D+%EB%8B%A4%EB%82%AD%EC%A0%90+Moggumeong+danang%28Korean+BBQ%29+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "GAINN KOREAN BBQ RESTAURANT": {
        photos: [],
        placeId: "ChIJ2b1fr_EXQjERD72SdP-w0r8",
        placePhotos: [
            { photoReference: "AWCwydhk8iIODTw7UUsn8dpBBFR27QxfUqzjLVe6w8IEWS0KfdJwSZmJxtj3sWAxZcQDFV_soC30ucNc6hVwIyL8t2Z2JaUznutQ-rdKE6EFLuHuwOwqTyFqCh5AMysYeCD0qq1iX0EQz1pTnLxlzh5RFPqD2l4BzHaO0NdG0ycdMJaE6FYYJAsudoDiFITupOqNLOWrVyTCOthUUKR7-ZLm51GXOMGuPdylWoCYXE9PWi7jt3TPyACB-5IqqQYGnwcgh0ixJnN-yqv8FRkCgrJReKPPAeWU_PaZToE98-Ellji1Z1C4IF3KzIjpw4SEW4ZqLxfCxPRm9cHzZlo3iyYN64Nf3paQyydkFIylVT3hzrbxX3H-IH9qzZpn4tkDLuP_UoqeFxZReb9IuZHZglpAIn5MwHPOg73HMbmqOUMG-C48ZA", width: 1280, height: 622, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112868413716784552141\">GAINN KOREAN BBQ RESTAURANT</a>"] },
            { photoReference: "AWCwydigHtTH6NiEVbJsOc4onR5oY-exsM0aTXJZnYMV3N_5vcHu9--rO06p8DFq2hIj4Setb2KTJsKwIjhE9LK42NX-sSWYKzedbMc4qHdcRth0HhPxdd03FmIIzmojjlppGntG3iTnwv9tpHcHWL4wjeUOZj9AFDmVUjh7ZsJTcqU8CqMbUEoY2jZiwd94TOT0Y9Xxt8Rqii-AHAUP4LWjiJ5wH6uaqFfh75xLmKb05FnyR20DvuFTkRmIWK9t-unDSuZk5UTie44r4g1-sNhPr-OllMnSVOOsZ0JZYoWrbAO_rYUqAhNyokTfl-G6CZzjDiFpwxnTg2Nut4JrxbZ4NZYcHsSbWMlZLfuqjykRrrEmfiDquTAH79_Mt2vz2UDhBsS4LmKr0Dw-o-qEiJJfMJ5c2tD7FkwQJJCnD3FmswVACqTKKmnpAMbGWwTjvQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107426909555649603339\">gleam</a>"] },
            { photoReference: "AWCwydi2AV9Pa4F0_7gBPDAoLHeR3348bfONuu2nIxzyHlOmJ9Ejjo53zHo5Pf5yD_zEB3VSTjMMve88aZrEoLRg_xL95oIkVhoN2pNat9rm1bY4EivNwcaBaMsvEJtBpzUp-xcBtNM3yHhCNbopqkRoucCNYo_Zuzywcuf2BA3azW0soCoDoD6f6rvDU5AlAphbYGevJ7tadmr5cTRYNa4HuyeScnYfYMgyrg4jkp57vJim_NWGG3IwpfPH7HfF-3BHlptRCR_i4Je12c8TyNvyeBQcQkh1756Mocc90vbOu6l4ewQRmhXf04Bpb7QEzcPFcHNeSPy_EmEbawsJ6I7_1m6HibPz7_hKmspi9Sm-riSO7YI8Z8XfV3pZ-3DXPLWPrFqQ1eyznL3pDKsx7f1ADnHrQtqEyj_tHbV2tK4tCEoCix6EpooyyNP4bjJVGuHF", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104268749636241250203\">Ly Khánh</a>"] },
            { photoReference: "AWCwydiu2b5GIpQ-jFKkT_mYYzyCGyIwB3tdJjf-wBXThaFuGMmACPm4zTi64hhx4I45fPAl9JlmCdJDwKsUTTeAWo-jwD0ngbGTL2Q5HCQZzJ2_vzkHtBtC6BgCTe7tj18uuuibT0_4PTGM01RMQXE5yF_S6t0t6ZU7L2we_ats9i6HfXZwg_Zg0bwakeanQbIiabKDbb81URz58rJrU2DetGvwNaiYNs1bfllwBalVooXXD76jUGvlToqCkOGkM6mnpsXAO9UOaygyaiBFsWQPEVQ_I1nE97Yhw4D4e5H8z558BIfw2U4KUHCIGPmFhbmUSyhdReBbQQAkgSHsASDYwv3YLnOZwS4hG_dJ9MfhuLXAS_mskbWJiDPvROuZgzKFagBDxOKHitdEpSEXcm5VSYXVlZhSRgGkd-0WbC7CH845k0au6ZcW_WxYSskRDoq4", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107704813491122300100\">정ji rlo</a>"] },
            { photoReference: "AWCwydhgZYtNBafBE0srBdH2_v2qEgxxRu2J7QQfYBgg0-ZqbcEUtPyanuUR7kZZwfKENbOkh0ld_LX2bFU1luO_YSTiz-r8qsgJ1gUzQ4gGHm73stQbLn7yRxEzi4Pc70xlnPV0hTJFml6ixjlrnOy_eix7ui54O5F1vqMwii3QaiKe75SFV-ldfDK-wZgjD_fUZtSdU3FwMEzRgs6NWPUeYzq9Hz5l_j5Sp48EB--qMcSVeZE2bErRx6WZy4rR0GUjW-rIZFrnOJLl0QYHl8vadPQdbVoJTsQDGKpc47PvFxg8XXpJspLkajt8F_JSRzrhs67m0QzUQuWR_YLqLY3RcpkGZWUEXWmhRtoOcAJwMYBEdSC-4ZX412Ls1AZXSB1BPOmek3EjkSdQ37ZZUT1kK5kWsrBBr9AZfDFN8j5sG94WvB0ceQ2-QgpCLWquKnOg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107612324782413059950\">hyeon ju</a>"] }
        ],
        summary: "직접 구워주는 맛있는 삼겹살과 정성 가득한 반찬을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["직원이 직접 구워주는 삼겹살", "정성이 담긴 다양한 밑반찬", "신선한 고기 품질"],
        tips: ["마지막에 해물라면으로 마무리하는 것을 추천합니다", "아이와 함께 방문하기에도 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "삼겹살", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/share/19jemxgXwT/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13822304817572396303", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=GAINN+KOREAN+BBQ+RESTAURANT+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Nhà Hàng Hàn Quốc Gogubnam Đà Nẵng": {
        photos: [],
        placeId: "ChIJ47gOej0ZQjER9xhSAiNHpXg",
        placePhotos: [
            { photoReference: "AWCwydj2KebzO94MDqey_vGilOS0L4aFpTXzf_BAWALwrXiFWGtWWWLmApRHiKUt3HZWgZkEbs6YBLdjSHKwHplYGJOZ1i7o2soyD3gMujf9mDz2uzUdu0iV-4hPfDhqv9g2wwCRcztjGWQzEbZEpnuGwnnL0O6RiIxGoiizY2-T0u3WnYIa3XhObzLNEv0eHl1HLnssRVVlZJ4HHtB0Yedy7Nq-afHQvixW7sPBzvAPxxP8fU-Vfs6xK-PNhJR6jSGnzgaFIn4gWboPopzx8Gvlxb-w8t0t7IcT4jnhKWyCzzqt0jeeIQorRuS-QUhHYczYSWcLw-w-gBOZ4cEpkmc5cJ3heGzDaYjBtVHU4hMNPVkmJtNFvMLKiGjwDhGEBbclG1vQGDUaO7HsWb2W5wvPMxb2OYRf9w1m-PXywX3v9NJFYLoZtA6VnyhWEQQcA5CQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113457240615658986327\">다낭식객 현덕</a>"] },
            { photoReference: "AWCwydiqqkSCXgFhgdgFcVrFfn_imSAPlGYdBTg1kkQlZ0aTpDyk5FgA0RAKOj1s-zIzGy8kKhKVNhZDaurofJyPNvl8iSunXzO7tpZPs1fpw_34a4WjOZorgGsSDjS4LjVpBbdKeI9sIe9T9YLPghFvSzyGjKPUl1oItImuZLQ-nfm5Pl_ueOW_Se7ImXd4QABNTu6TtESIUboG_JgO2I2x3D11j4Yy4pqE7THQBko81jV_Zo4nbRRcEO4MLe4AkzK8COmuc1ZD5a_u3AJcuifSsvJwcbZvyxMMxL1LPZVYvF3EMfMGYXlJj4_lVAE-g549-ON3aIHDClFdx53ATCVY_2Hqt1PKJ7dzrlWSmMihb-75-AsDlTNLgMy6YV1ntet-nBjyq4xv4oCtrF1KvHe3yOAHj0npmlk5sJA7Z4-nQNg", width: 2048, height: 1260, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102543871653309358772\">Nhà Hàng Hàn Quốc Gogubnam Đà Nẵng</a>"] },
            { photoReference: "AWCwydjkTObzqZ8-Jn6eJ5WtUU-LLO-gmjKu8yGQ6jep0EcpfmnwN0zwRgyzKxYThSlINI-DgHwKpkHNrk1vAGpWSQIO-M0j3WdBwG7aN5Ati3yVBeeJc_kbpHOdEdmw1ZmDh40m9z0IB-lfWWmZhX7VQMFAVodgMD6s0rLwvEsDpfxNRwAvBnhAoXr_QsOA26el6bo1H-1sH7yMJDZxbZW2IA55BWznYHvsbX9vCghnjnM-AYZ1VLZXoD6OhwpfEDSWkH3XhHzEqRWEiD4LLtcNeHqNGPn6FNwyGugAn9slZDuTVZmkvtYiii60uD9aujL05IX11HrBlSdmAmmag1_nhobQij2TrWfPEvbDaqsc1G3N8-xmvl0pzRuCvDuaTUqeocDU-p6SYIqs-xbT0Dym0qhFMwSzeeFUXh_5xyJIASIxUEBBcuOm09UXOAnaseZ_", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117756097697450954767\">Kim Khanh Tran</a>"] },
            { photoReference: "AWCwydhpRfdGshbkQrTgK6xa-wXHjwnn3r_v08bBu7aCHtLl_krNTkzy9o3q6S0wHGYmI_73yTPE9U3WPtc88cNar_l6G_Q_-iyo8wk82vJ4BkTF30efEY66DGNGsyy7GBlqDtBqRNGCp1EJJbhwBfFrHooAWtL5-z0Z8tltJLUUDee-aJS66qq1b1ejAp7UZDZ6zXp3n4JljowSfxQsvlmUzkvOHvkRCuC09b9Xloinb9rYHDm4wTsl7P-AzUUiAZ1jNF1oL6bQr48pZ5-UjtMHwZ2LjNF6ifoBcqnNYcGM6CUan-rPsLmJgQVqWK-tfef0lDiAz83EDsjyxf1m934pcs7SLPUfg7hcOjoUFd0I9wy0q9wfLPZf_02Ix9US2t2btaPPsjug_yLzVUbCJEvBwn_ZqSIgs5noXDenEmY_NoqDeEz2wWyKFgLLw1AOJw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111425353249773390511\">Linh Chi Ngô</a>"] },
            { photoReference: "AWCwydhWQsEK9_uepjJVwqBf07gyKLYMnhqndN8PQxaBG2wcV0ipaMhlMtCfc15ZgaQt0KYXwkxThzVWKJryYjpdIq5wvGiJJ3fV_mP0zXVJcxy5V_BTvCdsSEQjw3bvV_4XhjUEoQscWXhSTpA2MiXVTv8zChdulk_u8eBzt5ewaipyKVsBX3_WHIMWw6YHxe0QqLJKNFHr3qnL_-PhG-hNyApJR3nDtuS2lj1ESNBIzgmveB0UjxseZwda-W5I2gtEFmxUPHICe7gA9B6mhVvpjsvJXWTQUCuhMVoUMnuirtzpU-hKMGE4gmkIau1Lwx28b3hwYKsRK8BpYiVXRumX5iFjcnCbGLCHqp8rjvuuWmGFYMd1TZMVkRcD7nYQN6dWCkY1x8ml-4QA2SBufndaAiNrJLSwptQUolmyVLDKF2ajGkl-vPyBBODnVQrLbpjc", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100342437789961142797\">서희승</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 음식", "빠른 서비스", "친절한 직원", "쾌적한 공간"],
        tips: ["넓고 쾌적한 공간에서 식사 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "korean", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 4:30~11:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 4:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8693432871396972791", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nh%C3%A0+H%C3%A0ng+H%C3%A0n+Qu%E1%BB%91c+Gogubnam+%C4%90%C3%A0+N%E1%BA%B5ng+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Kanpai Izakaya & Sushi": {
        photos: [],
        placeId: "ChIJ_SeXbcUXQjERo3FyOGp4vQM",
        placePhotos: [
            { photoReference: "AWCwydgoqNzYwMwShkDiwtsQ3SF7hreNaBfzS1kC5soiumAbpcrEeS6uNe7ebQpddexFDRN0UoEphvsjsmgk6bSIvnpgKVf6dUo6bL6GT1OXanoL-ReueW7Ef_nQH7ywAd7SRcu1TiGmvRCDSCa31uVLFMedTybGFM40FXe4FPX7wcqm1ZPjLBx4pT4S2VAH4cwsh23nECtcgxCm9m2xh1A2nZPLvqDmZY-MboJOx5K8i5S-ujnrk3uClTMQwZqLa3F01g1MSHCkDMNbTx2mUro8rbc3utc7eFL1XLHaRi5PT-Ny8hs2OYqztZRxwVyw-Z_xpY5Zy4U8sYrB7gW2DQljfI1t4GPIZEKEO8FT_Uo_0LbyC-ML6WnJlaNQzbBTIlqlbMcTr_55V2htwJl6kIGAmT3VDnhUkGtvc-uvbObYKQywM5oc4q54v6ogHNoD7YMA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117716513852484533483\">Kanpai Izakaya &amp; Sushi</a>"] },
            { photoReference: "AWCwydhsSX_lqMp_EMedcU2HTMw1aypRMXidYTmLCW-TYsRHQSNsYsfpEbIAyBs3hnwinrSTgksOnQaNUGD484Fi5MOFHRQSvY88etKB9qME-iM8rn34vLQ8rNycN-CVv2nLhOSkL9oSk_FjDYqBo00h1GPosZEVxFljzmDsAWf4LrV0X4ac5-tQxnZbdwIo9j6LfMSF6bT4WCZ-LUa_xCiev3bJDIUBy1lFUUda3SUXwgqI228cRb7yFZYMuP4S_pdUam9tKMFdFAs7kcbver-iwtqNeIXHY3UMdGg1RitrM-K2KzLr-U_SljVdPJ58an5VKgYkDSm0JoOCrPu5vyQ58SkX2FfqAoi_cJHTzoO_lG2h2Llr1FSBXwMPpZ4NZXpaPrH90dvyzQVDB5XBhhtn-na5vOKZfQ-mnnu4f_2po0tH2DHGpxT8Q1OHw3aRxBSp", width: 1734, height: 2303, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117874454942848554738\">D. Scott Amberg</a>"] },
            { photoReference: "AWCwydhfPBS_RWINSCI7m8JJZGfZp-kwKOfSoxhep9BgY9pIIVUob2eGcDQ9091ZR54yf53ObIPs1_IvDcOXhiesEWxEr77vNBl4nnc-JO1cBX9rwWB43KeR_0wnlQT2gseJwYABN2jtSp6XH4-wz8SHi6cBMKCDPlDMHBd11MuNObJhvHmLIqQH00LciWT7P_WxLmL2UWFB7qFngg_QMAgntBcCqLHekl3LptjKpp2oiVOgT-pjrGgzuyCFyN9ov2r7pglsQbS4D8kzVgv2s1uWESKi3YNVwmWW_J9p2Bb3xTEU6m5qjvmoZnaRun72JrO3CQ4O2Hw6iXrhibCwacJrNdUg5-brWMZ6lWzc4O3K5NTjSuBOsvaRcV9FXG-Mub8sBBEBEnrtdZkXtaLInxFMW1d9Rw2T5c7kRIrY29YIHdQUmmVbg8fpYlfetGiUDl8x", width: 2560, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117716513852484533483\">Kanpai Izakaya &amp; Sushi</a>"] },
            { photoReference: "AWCwydgT4_-9DhCe5qchPgNaE30upytO1X7cWxa9SmUxykaVa3NsACdDukfDv-77GGQhfwBZ4I4mC1rofGMpuBheCXfgYuo13lns90elDOVqe86ABBmBrhfDq1e98MGfxtgeTjD3vH1NFGyOtkfcfl0ljqrfH6uAAC4SWfb5YUc891_85GV0MkJe13-q-PcJRLzFudbCTz88VHaqSKi51g31dJvIHfvM9wf6vn9cAouSLDtVIbwAoUqaZDi-d4BnjitpZMxHK_IItm1OwXGc4gWCS_TthWOdOi0nhKWQaytXBr1B3oYZxxMOPcnbVWfTCgeO9mP-6P5e5hP-xYs2UgDWTIBX-1v8FZSOdRLs2-cBlaRmwkbChZlGao8OeRMbMCX2S_BohJoEq5lpGJJFpWXtQx4A_Jgxne6b2guctq99JyeR5txvMGLXieELYAJQXY7B", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100342437789961142797\">서희승</a>"] },
            { photoReference: "AWCwydhBRNNeXyOl_yaAOj8EegshhCFEQIH1VljAzVpEvGk0eZKhI7nzl2YVQiYhH5822heykTfkHooOqqR35RejQHhXBEO7tLneUxUUAr9-xTAvePeZKYfCxcQ-LbKaJL4Z4JYTf5m9WalHMQ4PbGi4jfHI3iR7No3Ti3Ga6RvWOkGI53nKUvQI7FNRFnw3xtGoEFpK7u3MZjP3uWkHAyif9Ql91Tyn5ikTjitbCDQWGHXncmAU9Gu70lSJbNM201COGUWpbwYBbNDIXjkk-ziUWTIEusSU-vvrXPYQxf-bgWidYkX0-QnE_B0X-f-pyF-l5CTFl9wL8envQd4Ti47y8fOH6cT-n0Tom1-5GWuqQEVbEVuYupWAhRl5xUVz2psqt0Y8cAYfYskTg5rCXAjRCBQ6EnUq_0DaAtCwPcSbmla7jN1n0OzOX7abGEIEzWaK", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106804872108570617956\">Giang Pham</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 검증된 초밥 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["카운터에서 직접 만드는 조리 과정 관람 가능", "입에서 녹는 부드러운 새우 및 고기 튀김", "신선하고 맛있는 다양한 종류의 롤"],
        tips: ["카운터석에 앉아 셰프의 조리 과정을 직접 확인해보세요", "주문 시 개인적인 취향을 요청하면 세심하게 반영해줍니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "초밥 및 튀김", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 4:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kanpaidanang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=269503950320988579", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kanpai+Izakaya+%26+Sushi+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Kiiro Sushi Đà Nẵng": {
        photos: [],
        placeId: "ChIJyUcgH9kZQjERtfxF9iGcCHY",
        placePhotos: [
            { photoReference: "AWCwydgGbAhjttf5D0FPpQCWVR-CkHlcRDAcBc2dFWe82fScepf6QNAbuWIgi6DJzVKA_rJknn-0XkGsyJd4rCTy8z_lhtV_AsI077Iyc4JnJm42vSNx4qwYFxA9pKPlLQgTTNSy8lxtx2fAa4nEP1sN1OjzepK4UVs-QESoeCnJzaYGxlyNAd5K6pGYhbtUFJf7ngKM6_BRdpJpGo-wFEF4HwHXmSEpROYVYASCpLDwU6rqTYWyaRqWAxiwIgjNcbhHQ-IAyqYCNVtYwFGUJd_CanvHru2DN2_lNxND6B-G7ySbSKx4ozMRKhyUtw7a6d2pynzjRrkXIhf8o7BSD4JDNvzXq91nso8yrYqlFXcyDPMn8l_fRV_fVSmChNFktsG7ILeQop3W_fdnHcju7tQ2li3-7PtBSGNYRDO3BdvDjvC3OOom", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102701661232313915902\">Kiiro Sushi Đà Nẵng</a>"] },
            { photoReference: "AWCwydhQvwbBu70Z1CameaZx9D78jFiNpklbvsARp0gIzhuIcVtu4vxls19smRJ7dtWyGFRXqO1B-LMwTZv4G6G5DC_9S-mWMH4kASxfyMFTNJw_T_mc6y1zZp6XoWenXXFUEVxxetPEdiR1uaabXNB4WgUzwvVmTnsrwpL34l-ZjQOGi4f88aaXVqaWkHPWzZxcbnjqeEZN3GXdPPPXK9bs7fUqP7KOj8dcAZrDvxb7lUPpk6-IRaAoyjF_rhX6f5wa03rdsE1R-WLpsP4Z8KK1a3C24YrnuEpZuSTWHglZXg1Ee68iNcfhgyfDpD5gQ7yH5giZqum1K1ANTJLcTJLQeTVVlb8U2s6GEETnELsC6Rg4y3TyylwlYGWYBsymP8RuWKBwhd5MbsXxO0dP0RkF_axWF_5A7-bj7buRo8z4eDZRKhJxu45F5ln2_eCfEgGQ", width: 2000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102701661232313915902\">Kiiro Sushi Đà Nẵng</a>"] },
            { photoReference: "AWCwydi2bgJUNpxoJKz9C4F0E_N-czOgmrsCbrX3V1D7JEBeki_Hkq5wH97uxOM2cb0iVfFFnSC--LuGdmzgaDd8oAS_gOMO2MxVevZpUgFKhg4j9UEmBG8Rg3OEvGQztb6qA7wkw1S_1t_ZAB18PT-Fn83xzmKCPDj2yVrPLf6l6jtIeyOoteK-YmGrcWUD7Y15-ZK57VyLKto__-vEPjAqLw3tOa5SIXjjj5ObXSkhrO71zt9Xw048_V0huULbPwoVV8ohQ_kpdgaIi_80u7C-nUb8dioE3M1dTVFZI3FHpsQual5wTGYlNBZdzsoqIyhHZBBXkw40s9gJ8drCo45rMKmRhq5b_C1qV3LYOlX06Kx2GfsZzIGqCkv_42_z0ODxCEe41AXLaBUCcMT9hsHpXt_Qiaez75VW-54eJygkM-LNj9XTPmk1sJHYdSXjTgAN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107082946878283512937\">Hồng Ngọc</a>"] },
            { photoReference: "AWCwydijskAXPHNYRCScyGgyIGckzSVb32hTScM9bdum-oTLYglqw0kyMyceoRVocpcUpuFZfz-kUUSyl1N_p_c25JPFUDwrbaOgzbkgnOmMJ40KRzMq7rNUAyyFKz-3ZXZxvGSn92YqeS_oRs-33ok-9A2_UUnCNLpNcVKh-swteUXbdv-OoWa7YxOUkSVl-ek6XSwp-k9uF1ni2hqZpNQJ-EKkQJDdiakLK-nEl08RZpfdda2ckJY4a7ils9dpirS_GLN_DsBru1h6JMISK7t125xxu6wFP8fbx9Xhy_m7AGhtvYbSZFkjGkPPXMAqCH8rQB2XaCvo3XbaZyahShUxe1JW8RHvSSNzA0Pv0_tQcwas17vZtIc7elDB5PUPXWeiB_57zpJm7MT9RE_EXRwo0nBVx7JEPPnCOEU9846E7wj0KhsLdqkgd32UZiFxnwQR", width: 1086, height: 1448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102701661232313915902\">Kiiro Sushi Đà Nẵng</a>"] },
            { photoReference: "AWCwydgYOScfxCiVcFUqRoTnPSL2woCe_u2j8XL3KeJsJU4-2GoLFS1NpJ0ZFDebE5MAiAel1btvby-iQwGUUFyq9iaCqXI6eTgjlG4lrlH2zbhFUY7G25dzwwQcJsG0PqOordWwvU35lOl4_UbRObHgmw7xkEQRes12GCDBTVBJMW_nY-U43jDHIbPkE3DaDq0iY3iAjXOKPFUJMVxK8d6CYd7Ld4AetZ2dWssLmHNIdpNeUPm7mHcjVANK7ZWD8RQYkApx0S7cCvxwP4DbEsoo26nP0uJqNAHFynp_ADVQs6EsTsVs0X23uQQOc8MlW-T8q8jK-SjqPwZ2S-89DZIUlgOisuX75TaD3heBocRNrBcH63zM3Gre7c99_x6-4rtIRslGlJKPb_zmYNGaSpw0Zgxcbx5aoX20B9EHIvNTpuMLhP1H2dqMVkHpf7Of-M2Z", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111011252386602681696\">Oanh Hoang</a>"] }
        ],
        summary: "다낭에서 즐기는 고품격 일본 요리 전문점",
        updatedAt: "2026-08-12",
        highlights: ["평점 4.9의 높은 만족도", "다낭 내 인기 일본식 레스토랑"],
        tips: ["친구들과 함께 방문하기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8505219565968817333", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kiiro+Sushi+%C4%90%C3%A0+N%E1%BA%B5ng+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Yen Yakiniku & Izakaya – Buffet Nướng Nhật Bản tại Đà Nẵng 38 Trần Quốc Toản": {
        photos: [],
        placeId: "ChIJZSsvT9QZQjERf-oLnsT1C3Y",
        placePhotos: [
            { photoReference: "AWCwydjL-ciO5Rfq6NygWY1jWsVnCREDxpT0wPKR49XlGYKJAgxYK7DX75T5sNXmaqIepjs4d82pgoT5NPYajdyfBe6iNC20oVSK0mitvrhCs7C_6umsWuWgxhEFaQJzK17ywxX8fyy4cj1HijvynKbZofjqu7KVlkbiq3mPY-6JCB7B2Uipu0_fUjBR1MKQa3VSQHGpc78dPdFcCtDCOW6CjywaSqePGF8O5kC1LDMNi49dnHW0M6t7-x06JL4yxP3BWKJVnhuj_7HxFBWnbQH-Lh4VuH5TZmfHTTsrDlVn4OX5bSTy3PJ6dRmaUNjE-rCIIwYsTNaBbkIX3XfjFfJj0DSdGNk2SRfiX3yPUtu3rv8rFPk32yLQtV7ER0sntOesowyPXPzgdXIdejx-yuYl4yOZ0G6h-IR8pQiijvdRdVJo_IbwZ7FKej9LCqlBcw", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115339122782031255487\">Yen Yakiniku &amp; Izakaya – Buffet Nướng Nhật Bản tại Đà Nẵng 38 Trần Quốc Toản</a>"] },
            { photoReference: "AWCwydj1eLkOrO6u57qxuzrQrktKSmrQ69j7aarCDp1KPo3Eprfw-ROHa9G8EMVAzuMPyOFhrdMYtcW0JYomjQgwEB_0VmodSzpFEQAJ1tf9-GserN0iRL_9w3OtOOvtsfuqvV3I6YLL8Ip96dNgliprAdNyWF8YoRJBGt8eh4bGdshHr-xTOb2N64_hssRsXjDZnYqXEiN8L2Dkh9hOJsSiR8tROEx-LqXlA1TaSI09LqhB8m1qaJuF3g306g49wJtETZfbbnr-ZaULWkWmrAT5s5NTf8-WoHtmQVfYvv6W_RsOc_4MxmlM7oJmxuMvxNrieiWWtKwlQ4Xxb_JygrcRWU2iCj3CJhdH7GF0Bzsvz2SmhP345FzH6U3YieVH2GG2nugFkalpRdBWGv6H4l1OqA4Sg_nwhpFZYWSdvckrhUw0Y-9UdseuulupoI5Uzg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108732044904996201724\">Vy Nguyễn</a>"] },
            { photoReference: "AWCwydg9-JFqMGwrh5RGWolm_oVgfHW7kHJVgCXanOf8z80QPzRWJ9G1vo5k55_tT-S94RZbG8dqLeBCFkVUqd3ruu6gDJSYaY7POsI1UVhYoVh7dQawK7hd5HotpPM6ib4zWfIzpO3FecwjMF_Wor4QrhSpM_-0Mc_-8Wi5KF2VPivFyiV2_6K_RYIitq4ji8o4vbJOGkltA2fFPS531kIcmphLzxAYFtGcfOWPYWmt2XcoibCKSusu_jH02zPWOZrzY2drWDBy0UjuPvJ9AuVsgTeUoTY7NwLCKkR1x1BCTcnxaTEVtvP1UnYplqvaqy-CeZ9R0OZGik9YdKkEu9PuoT82HalklbQl7gjvOQ3Z4fgkq6qx23I-eiJsnHHVl8aMT4JJxATseVJZqyG-uWqliNbYIRioTsOO8idWejykFB9xPUF4J8Lzmc-RaINkcw", width: 3840, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115339122782031255487\">Yen Yakiniku &amp; Izakaya – Buffet Nướng Nhật Bản tại Đà Nẵng 38 Trần Quốc Toản</a>"] },
            { photoReference: "AWCwydjsrEB9_O82OL1Ogx98EFlBNnfwyn0nKASb3ttbDKxEGSbAds-NhM-qXQ53GXoQYMNYvfGA_KaEjCYLRABrdLetuAshU-SEexnBVP_QDxiBSFVZF8fP7kcaFbRxQbXevy2C9dIJCSGzgifbw5rZ3sYMYvzZfddGPujfSUEqVJK4KRrXCoYY5nVWqQHjVuvipT7SggfK1JNDAOJ5quMF7lVA0XR_b1tkm1zMpeRYbknLWerC9TxxPFAOTPyJoAjJZoVU4FUBReM1ym8l1ps7CIsg_fS9wZC-MpZJdcuNtggW0yUk5uunEc17VCbHxHUpzg_7Pcu2XnwaicthyGEjNycC-U2_EZWAMIo2quW_LPV680gKY0myMReoXFoCPUsJUE16bZQV-pURGI0fUCpkd4PvfgSCOHwlTQE3txjArWHN2S_DjQLo4YnEq5QK02Ys", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107364190340157725743\">Huyền Trịnh Thanh</a>"] },
            { photoReference: "AWCwydiqdsPLxZpTRafvGfuogP-W3SJY_b5RURlE4Z0tfv0MR-oI_3Wd9wc2C7JjyM20EW8MwSuZ8gDv9ErjFjy9pPEaRDK1vxQ3SFA2nHRacyW2D3do8BLiNrRv2JyOI1_ffoC1-NS6CwtYwPQgqnNZtSRBXmhM5jwZSR9VoyYPW45U86ufSnorjlHax7mCZixyge7GBdWwnSg8PY3DGKbq5f766UUPK9T5N5bHT99GrC9oqqcDVBj7lSOzT4kjcJOYgcjwwLIYN3KKGVthFhApWSI4I3swuzaCsdD-nbTcW3zVg71LPIHDf6Sb4TZasAuzRgF7TT_Z-9U7VUEBlwGi6lqiZfkY_tK2-npl-2pkY8X3x18raNcB7Mz_mCeOKgyxMT4Oezz7oKeR5RZkKpZpi4Kp1fejBpW3aJwYn8qhbfDWJk7IOp1oS1IXaVoU0A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117414985528665348128\">Thu Thu</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스, 깨끗한 공간을 제공하는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["높은 평점 4.8", "많은 리뷰 3,202건"],
        tips: ["깨끗한 공간에서 식사 가능", "친절한 직원 서비스"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:30; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://yenyakiniku.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8506162546033289855", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Yen+Yakiniku+%26+Izakaya+%E2%80%93+Buffet+N%C6%B0%E1%BB%9Bng+Nh%E1%BA%ADt+B%E1%BA%A3n+t%E1%BA%A1i+%C4%90%C3%A0+N%E1%BA%B5ng+38+Tr%E1%BA%A7n+Qu%E1%BB%91c+To%E1%BA%A3n+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Mikado Sushi Indochina Riverside Da Nang": {
        photos: [],
        placeId: "ChIJu0MjQwAZQjER6D4wxqkxTJA",
        placePhotos: [
            { photoReference: "AWCwydjQQaUOmyU5VHfnqezJxLfBtGebV8EgKaUODTM6E_cOOOoeM7nwssEU3dRMtdIVSXBdEULCEtAqTEBegFab2Q6CsKr5XwjZ3nMCbfpC1srRL6JqRq0BQMfVwdiJPKv2whq5_mOvClKpmzeSYWUL2HoHeosrnI-t4LtJEYOUlYXv7fq7owbN1dNmh07XzeGBBB9uy5Xw7Vu6yO0BClTej6Fj_eP9MZ5Tt30g8g-iUQvTtndIo3mAqtUl-ClV-4NjsVUAQAaxJ866Qq8kKIarM6jFIiq2autbVvUUPPeq9H-t0mpqd-ga_ZNpPdlHW7rbu3D8k5e9C9DVKzq2KQhCLvzmsDVKuwqtGIXGr1m-cFf--JNJ0276BjQebC3GzGB30at5c7HVlbMqp2nErVrklJuChNDw9OHK6i7HoOFgNhh4ee9PIRa4qCKCj_iX-bEZ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115810280350643866130\">Teddy Nguyen</a>"] },
            { photoReference: "AWCwydgGLAOGstBgsR-OpiPwy8T6RgXVzMozCrE_xiMR7g8cRYz4_txVFEZ6Skf0J3e_zziPP3-Ry_JmdidZfXHGpZtPMHzWgjgT5QYxZbD8FcD0Foz08HZbNL4jG30Vc3Gg3a1t_U74jW1RW8tVfHKdgfvvy0N-hXBr7eZdaFbPHUbi2I07gwtPhFquO-jXF2IXVTV_qEjhza5iLiczm8h2qKhq5m_khx67qb3atSvIjWSwbHhSqaLoA1_DSCq7eGiQopQRAR9CEYnDRE1fObtg1WB3C8H6VROSJh33UqnpCyo71pjIEdac9527x1Bodn21PiEJty9BAgNtf3VekCapKOuozrFHTv658KICes9rbkdFPN26H58knSDAuoHbHd3IiUrghaH06si4QTsuu70SnYtP6KcdljETwS93W3f2Hs2F7QESWLfmvAyjQMd9XQlg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111303576729032367758\">Kayla Le</a>"] },
            { photoReference: "AWCwydiJIueXnyiEC_dmTVJQkGngJ51-qp3AgD-NNPtt617ESjpKZTZoJwDEvDTdhDY-8ALCsU6e7QMtS6mNrciI2DWaZsf3VVnmJsMM92E-XBI3L3zavGCjcchNH521EThADeczbLFdyxZvKnA_cH775Z-v9-q_Cc-trZE8Hq1dHYZt3QzGwKFl6MWWDhzSF-aj_oLV9wc4lN4GUqBbN3oG5ni7ZqD-7artsgWH30TY2wG-lWaHGCMM8V8spZQBAn00K6qoWKmrtvtuXNxH1-_d4NABPWl0jsh6vZOx2UMuTgrucPCzA88_Hh57ixZBcV9EWQx-YxQ3CIm6eMyo6GU-T1sr3Br5G_tzpRZJfP9vtFf-Ad1A2Hrr1kYSImY8fhhxfYrCsU5a7E_1xoh-MnL0SNNBlKNOLZIuqbVNPjhn9m8", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107175720186871286649\">정봄</a>"] },
            { photoReference: "AWCwydjpoRPyDEufjMnRE3H56r1GTSFcIsezvZV4NizQ-L3Er0z7UJ8wZ906yDw0mT3LirY12HAL-ie1ThVagC-yh93pm7mwRA1il5-m7gIJ_YvyybLgNRgL5dsVI27IaqXl3EOMW920saqgg02UAgk9AT-1ymzeztXfX1AOC5lVN7M0NFfp1GpQ7aVleni9I5-OcsJ_feuKgfAXi_HH0g764EIo1GAWGXv0OUnP-D3eMaahdxje7tHMp3D7fDk7MSLWwfgt9qH__wclmR2GmoIqw_y4jxvc5ry97yPO1XxrVl5exP-uMXNd1_W8_q43icoIrb4B7Egh9ruKIT50KuAi-JTnS39Glte1G7BAPwuy1bOd2C_HwnZEh9Nf1P-jz2MgBm8su8qW3X0yaBTr2zvedYprf6LRHe9OgbuHYOcQnikxflGyncZmJXzrq5oS4FIU", width: 1020, height: 1020, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115592230160549671143\">Ngọc Ánh</a>"] },
            { photoReference: "AWCwydiU9PctEnXoi3_UpjVEtu5OwGXTtSmBJ3ZJqbTUYi3bjTaOLylD_fWS9by22w5ExOEkWk3fANJj5OuTFRWMTQHycbrFgPOARQz9Mnf0t1fkFxsPhLr0qlV3CvIqRZypFyVXJ3TaTBIAwKMLjQPv3A_ROYNwQe18Mx8dVhow1x1z29G1SkOpvsw0WZMvy0Ui_GWgfnDdPfTbQJST4NWuzp1xRfIwqITfFv20HJuDS21MJSBAte8YXxDAGi3zaaf3coyj3jodJyGSbV1X3EPaqrfBbuegm21xBdNwagEYFrbZgi992-h2r4oCPsk1KQcuy8ZRj2wozY2mQTm9YnYroWX1S7SGqc8mYDF0dlcBrnepJTUSNLHopsaz3mVxSa8N8YLG38suvXO_SEbj68XKaBS-VJQMfTsE8u2vYXTSas0w9LRipSD-ctTH0Ezx5A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104188924486431618719\">Timmy</a>"] }
        ],
        summary: "높은 평점과 훌륭한 서비스를 자랑하는 검증된 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["4.9의 높은 평점", "4,006건의 방대한 리뷰", "훌륭한 서비스"],
        tips: ["음식의 맛과 서비스 모두 만족도가 높습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10397740244935917288", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mikado+Sushi+Indochina+Riverside+Da+Nang+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Yen Yakiniku - Buffet Nướng Nhật Bản Đà Nẵng": {
        photos: [],
        placeId: "ChIJLxsngwYZQjERQsAzq6F1he8",
        placePhotos: [
            { photoReference: "AWCwydjNrdI7e6CPc7aEYxKPASQc-wRHav_c_LeJJ389OSVuMcyTpaqzCESsTb-Vk-jQA0bLjr7hj1D0gR8JoGopmEaG607q2WCzPShtVRkGM6HYdNZjrrYg6ANnGHYBcjeW7jDV72riyYukQjsaXKB4OQmV7-DIGyrb_jk6kvcS8Ulc61TOdP7C7EMb98ACdIqBql_gZ9LU0HZuzElO5Y8YQqo6FCvMV6UaR3dXJOv03Yw4nUu_AxdpBeff0q1E-xCtGqCiavWQ9zcc9A1qLe-R_t-OZbgLZMyNupQT3RA_2lXU_wsmH0TzCd7ufLj2eR6NV0SYJsGMB01TKzWqsJhsBJpcbaqU5Jecq-G2mprieqOf24gVwyKMO9qsN_YB4eSWEIUFetwWrwbJy6BLuoD5gqAG-8DTP7eUi2pUxID5WGaTyyX9Bzomo3Zd8mtNeg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107197116752409600047\">Yen Yakiniku - Buffet Nướng Nhật Bản Đà Nẵng</a>"] },
            { photoReference: "AWCwydiZPNm8PCGPav4RU8tOiZFgQ1JEc0A-eMDbDcuQq-IGqzw41JMZQf-q2IyTcBDsmI_vElIk-ljubG8gX4TIheemfAQ31KS4alpxqxAC9BFl2qmFYxjVMlNP7CMVgAlKuvmADi75N50o8CYVnEalGxnuIPTh1PIROWraIvl7VAkbVEuQdv_62BDAbsBH17HsGpXrLPqJehKddxDPCikoGOPKURiNSKmIzoeeOL-c4avaegq3GzvfZ7iSEm_dYqB3MOIykhYDzGoQGz9HIy_MQaYXyd8GDIj0UWgvnGC73mh69dbDwSmoLufWt4kAfzDEYAye8iN2jMffx-6akfzBK8XaiE_M2uM2Q9axUELA-vntljtTuYq3LVuG7F7W9x3qenfFZb5H-F1FUmBsJ9rfmMY_K8jo7lYy70clEN7tY_nex-Zmal2T0vd7XCVeAQ", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102758341683501373607\">Diệu My Phan</a>"] },
            { photoReference: "AWCwydhx43yiXDADsjlxUwP6BZr2DWv9hyO1P7efagYOdg6IJ8Y3fVQGHcRC2_UG4IEY8PhUiWO8-zwccdHpvoEXCITZSxAIv-eH_J2a1Yc_1y35GhCqWWb3dyHsBH59-bA6MdShmnf3oA4TJSsJTG97EYIUpQitMO5yr1LjeCELYjRJHDJ8oeQ02uQh8X69730JwF2Zo4K5CHo65bWqjIVHAoUl1XTthVL5aPCMGV-oOuIKrPHkPebd2Yrdx8Yw0pqSp7MRETTzH9LTI1Gus_S_bb-qkJW0rmMt1UxTvBN7ly4Z4xAMCNUaCTHWk2yY6Rtl2HZ5Qb7aVyuL9KLol4jgbK0ZA-hAfBU29I-n9AnqX47yAEPWjMXeTavdQ7lWVkrCPpbJda55iiVc45XG0Ixv2SN7s4TR4MRRN3Bu7nTqq1E3r1K55oV8ppHft9Fexmb6", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107197116752409600047\">Yen Yakiniku - Buffet Nướng Nhật Bản Đà Nẵng</a>"] },
            { photoReference: "AWCwydiEpOKj-VCtAPlJAPifzLgynrWl0lg5BPCcMnIwAIN98Cs3-dgl6DIIgH2NiTp3fh4DAA_jGTuZUaZeTj8dQAn10eiZ0FdRWbDc0eNJzx1hPXogC9kIdMDx_7l1Lk1hVycLpc8Pr_Tjk9c_i7yfTlL-Go6wKW-SOfZxuLuJ-sUTQbSyiehIbfLoMubqaN8YZ5RvFjwtFoVOygh9r1YTkdFnafwEmAGzzdieXEEvv4LgcIgF_f0HXKp8hWYenmwy8E8TAeMmND1HVGSdM0X_Ey7UnHpBsIlSYc3Rk0n1JCFcKBW-_XgFY9KDmBIrBEifE7pyGjgtbpKtGg9asnAFI-vCRnvqDNkwI2FvaYBpsOnPNBJIkoejIdc-SRn-Vfb6wzGQKuc7hbZSl4kBolvu4WwdnJRgd3XkTQHQyUwTlCwBKmVaoGSQ_uAy0ThgFR-l", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109510636429967372413\">Duy Khánh</a>"] },
            { photoReference: "AWCwydio5mRYal91Up67JOzb6EKlhn98hWXdMAuqXDhaXIwTQVfSLjW3p4Z_Ac7yP_S4-jGR4Axftt8ApugWdqbhbjdw0MbmiPqDwkSs3ie8pMVssJhEeOqDmjZaNtPDLC_VWKBbUFXxdSbjb3TnqMe8y3eter2_ewNC5a2ty7tF_lO7lBeKyFNGCxUMqViTGqr_kc-F_7wGA2_VVvvscpuV32pkR9z8Sq7Lpj-CeB61F6UylkaTEDzwgW_xg6fBuZWP1rNeU4BSt607jlc_0NX8WGPLDV-oBSj9dovnXj0o_kHNkXLd1mmz6jXblWaWgVM91sv3v0eHjPEeeZXNfl-xaIbNdkF304P31LVrCYunVRr7JQ-YQlgweVPrT-LKh68rHj9kl2XISsUdXRC2MWvQpNWJHX6DrAOTtVJDsTKS_AXle_O-2s-8bkskkHxYJcwB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116190983428983594592\">Quốc Cường Nguyễn</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 검증된 일본식 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["4.8점의 높은 평점", "5,346건의 방대한 리뷰"],
        tips: ["영업시간을 미리 확인하고 방문하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:30; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://yenyakiniku.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17259330484189773890", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Yen+Yakiniku+-+Buffet+N%C6%B0%E1%BB%9Bng+Nh%E1%BA%ADt+B%E1%BA%A3n+%C4%90%C3%A0+N%E1%BA%B5ng+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "비스티카 이탈리안 레스토랑": {
        photos: [],
        placeId: "ChIJL7rM6W0ZQjERU-TJeBfMM3I",
        placePhotos: [
            { photoReference: "AWCwydg6LbrHiuZCS8LH-P3q0-9GvWKTNfL5lNkDMs4pqxX_ceRevv_ug9TRS5-dD7TuaE1D3yMpyxld2s7I7LROg5vQ3YfJnIVY-qKRCd7LPfBWNL2bEsVetUdnpgFBq6iPn-xpmIXNGiriIepNdZf1fE8DWajxqF8-Pl5rtKr10-uhdvuA9_EQZKLcr7IInYV_KC-tMtQRvw5yencodoWZuBXFjYagcFDkMIUdDQa8I6ztUhZrQtKEFrWb4FSJVGpPG2uv4BaDMCzJOvhil7AOaMhjxqvWo2kZf8y-HtiTgnN_9D-XPfqNg_YU09ZWDIiAIqtKoHmE6LOlDB9X-uoCDAmCN_CLoCvzEWcvVLCtHxoJHTABPjCkcqWJkvx9InQkSAsMSHd8AKVROYSNQWYw_VjU8TXjsqVnz5F1hm9Lvxc7Yg", width: 2560, height: 1707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111658442915332465032\">Bistecca - Italian Restaurant in Da Nang</a>"] },
            { photoReference: "AWCwydgOh5qWZhbU19ObEA_YGvvupApZATSplJwRXTSB2PXjGJgFXMLp2-D1deXZvLVFfKxprIFlSnHTaiKYqQRedAUelMAUIotoJ3RrHCIMTbbaq4h0xVOGM3toSphuotTXIlPSenCSk-OFT9AYt_yeIJ6mOz8JdAam76c3yhspBzl3jzstxTYGBZcULwsS6F63et_Z-z2Hxry0BPkbLS96H-Kft-rQCbf0YU0XcQEch-VOMugL_PASl7-AbM6bSXxiW8c0tMZe0bwnzbsbMVeD6OZM2XUJmbYFlG1SyQnzVDwCW-bE1UCGS-yT__npi_k0W2VFpmQiT-acwbvCU8uNq8lJVazckFEkRQqr7KPhOrM9cXtda8ervyriM7qpzj5iyuazAeXNrYbayxebp6TsQQHMTs1L6xIgDn959l2aFJwoYqe9T-EcrUBfsMwc_L9H", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111658442915332465032\">Bistecca - Italian Restaurant in Da Nang</a>"] },
            { photoReference: "AWCwydivHN8MNiNaiweUne-t_dQ5OlSfkgk5wG9q3odKeda1yqm-n-mHgxO7d4swWNM0ra1-PPIHsOQtQmmokS3RIIEdhiMNi4I6D3MyDkfncr1Ahs5itizulI9SBVWfu2LSlozkNELumhRyiC2U_4JGrdflOi6P58Jaqb_hRQOWd-ezQSu8LKUk9OwJz_vZBbePbZtvwvshqExAP9y6ZFYAVAZBodyIiN9rncjY--Kap18_7hh863oeUXgcWo0XG59VedssxTbWEJNYwIVtOpvbYKq9t0VGNSDI-j49P2XhfFTeBrfyLs32MpZDkCqU1LHxsCKoDrJMTLezMkgxbJdvcGXgv5P_JHkAID0yNB3xrGdI4qwLydMCQ3o99WLjKu9J2QUJ8UsCFA_00AqYEatHFl8P2tMRXpop5NZZcJ6wiylH2zTw0QtMEfAGsI0H_zp_", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104649813363154441374\">ラピ</a>"] },
            { photoReference: "AWCwydigSMPMPBsQ_Z746fIrkwACED_b-vmZ4fQrcX6mKW2MtlS0-AJNPCYqbq7Tpadcj2lAgpvmAcH4YJsURgjmhRi-NIGVKPv2wEiPXLdNzi1Qx3PBf0VoSFTm6qpUcNOppR6rRN_2l4b0PphHJ5mpWlPmsKsCITen6v2LL0GncYkJvFEv6Vnjpn7WOxFsKDbBdb4LCFLrIi2zpwr5H_24du4tyAp5FRitFyQ5n73QJmjElNkbzPSvwYwUc82mDEWaRdi3IbvuZVcqsIeuxIFH8R6Yylf-yxg_6JazQI9RXdlenwNw_Fdi1_lXiK2_FYj6HIAuwfCD4sq0zwstaQhSXfCSSAkwaAbmNnAdcbrcXU21EoLcC-r4_3yIp7VH8GI8RU6fWJDFyK0kNhn8fOzkVEzxcRnzb-a2PvIn6wx0XtLBP30zAfgY-woqAG6xVa-M", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104144224509895573771\">Son Nguyen Hoai</a>"] },
            { photoReference: "AWCwydjIkWwqYrzSQGp-SJo_VIi25sFq3YJo2_ZBBp4l__lt11CcqtBaSKGIz2AIuzKz58ok4MUYl37dr1UEt8WC94rxE8_CuC6H9szx_g1w2sGb1UwyQ40yK9xwKf_eFDXY0WnQSHlt03YFQheYdje8bAQUV4Dnz0RCqfmq7lv8Gbd34sfj_MHBVjdK7tl079ksHjWz4bt9Ll0ngIpAYgDAv1n1WRzdLHRvZinrCmDgExcSarQ5FDnVnTIPqOzwH4mPw_p3KLm02y9HSte9uGkvR6f_SGiwuLG6RR305Ps8DGkCDjxXwEEPKPKWrXMCnme-6oxr-SPUKJHVYVnK7Q1zaL6wP8RP24ZK57JWQ5kpf3z4yWVAdCpPLxdgr28oUSwk4Hgic_ak-7RX12Bjq6UhOZ1dcymuoKT1JG4O8g9F3ECSZ2fYpN3qcn1FvoJapQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107545787901674434335\">유자</a>"] }
        ],
        summary: "높은 평점과 다양한 메뉴를 자랑하는 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["정중하고 친절한 서비스", "다양한 메뉴 구성", "청결한 매장 환경"],
        tips: ["조식 메뉴가 다양하여 아침 식사로 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:00~11:00, 오후 4:00~10:00; 화요일: 오전 6:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://neworienthoteldanang.com/nha-hang-bistecca/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8229145345318839379", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%8A%A4%ED%8B%B0%EC%B9%B4+%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%88+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Cucina Luca": {
        photos: [],
        placeId: "ChIJW_ilwg0XQjERQbqRXGggIFE",
        placePhotos: [
            { photoReference: "AWCwydjOKWrN0Q8Cc4WcHzGelHMPqTlc8CkP7vw6Q5i7tVSEBaoWbYD9pj6kNHnBSDgq5kMfi8jApb4Q_5D0zvXDmPboKtADISIKICNtsc5PWvcchAoCq_YoG4D7zQCsZA4zQhCkm2xhkWSdkK3IOYl57W6Swnj-Mz4t4ylaXf8B0cRyiyHUlmryE-cDbUaKihSDuC63tNcGs4K4UhkSZ0JTESsQbjZGdmjXkn9Idt8w9167TLaHd7eqgd_lOXioCXIaYZHFD3FhecpZoQk18I4LPnA0umkrV01pnZ1RWakaYYl4NcQ9P0-58UtXp257hCqDJzxv0ll75WReyzIhhkB_mssrENUdU-5FRcs434c6t_-6MqQjzDmVVM4OBM2oK-wn6IWZlk7-R9FfR84alFkZ1BM3kHgfGFPJ84OM6AKAI_jYkhVMSQNkdS0b1hwnhj7j", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108489151389656766985\">Cucina Luca</a>"] },
            { photoReference: "AWCwydjmvzF49mnhh1BTZT7FUNqBDbqRchPMdaVVJ-zbcnfT9nixePLpirTjSrS3XmqPdmOl4BmgVUBABLhrf9aIol0uzHwqGaNYFhLbWz13upTguExt-AZYIU9s6yVvlClb1WCtZ7nRjnPE6JHyIk0j7orKtyP3sZOlUmG88PiRG5PN4ZitBdXhzLC7PdxMqdaYnr54XOjIO7lYzFK9CGb_yVHzY8T109_KfascFUu0h3lx55kAqjDvtjmG_bVdcEeMDTWcyIVax5Bx97pJ7nYcd0Qu4PP0E_aDF3faUHFyPfGKSfN9sp8xz8iEUYxCzzEhHP-MEDIzrkltZs68i6metfizuhJCPK4XCAEMuN2FrHvrpeVLac39YEj-0XRQshpRdQWkPOLjpJPABrUy3hGPqn-SOLdwEHhNSikWmOdi0HvK8xin8pj74VfGT739W0bW", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108489151389656766985\">Cucina Luca</a>"] },
            { photoReference: "AWCwydhAs0rc4PWmrJ-uUj2s5yBroj09Dl9LKaZGtFthGvVAoM9OBG00potYNKu8bUMna675OVUbe42akXK3ifI8lFEcP_ZOVLbn_xByCZqQa5XzmGWAbT9BZvcxOWMU2E38K0v1o2ebwSLoYnl9_gn7B8u0Ii3U6mQoiwWbz3ff2Df4WUJE2qc3u64abaN-vTBxK1LvC9oFb7GdeSgk9g3fJkJ4e1oucwDnUeN7UlKCbfklJCJMR9V8h9L8lnze79hdSNy3xU_hoba2KkjrcB_TLvzOUyyg31E_xHVl-g3CNEgkY9yQ7FAOnNAtIdNSJCEv85if7QH5ao4hoqyx8dCd9cOvhQaadjMqslOdtWmX3HieHknBDsFJJd0HiMvlK8P1sj9u8xOswJOv8Tla2pHZv_dE4_QWtMBR45u-CsjeVdCTEA4vDL_55fzqhnEe6X0g", width: 2986, height: 2792, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107343365529235653742\">Евгения Шишкина</a>"] },
            { photoReference: "AWCwydhTcKUEQOEWAa5SZ_1z7j4WbgTsF1H6zCR9CuDBSGwfBkHtId8TGqOqjY9rVlM8nyk3F9ha4pXwRkHYFNEISqaZYK9yFK9VYr-FQDKMcY6mEkBmUTsCFqbr3WqEbAUXMTapEMWRRvBaeE0VS8cN6tOMI4g74PO_C3xyIDmTld7cd2LlxCA2s5CbThNCO4iI9Rza993tT3cdshmSX0Dq-_tqnm_5aiqZGtkPI8NfUpDWmdT4p0mUPVnTdD_dwjZZAYOdD1mzJXshueKru6SzmRKjSiV9R2YWznllzeCUpDV3IXq6OHODEJI2ykKDKC9DbzG_E7FhiuRk68s7pZfbsKh6wdljeaQh-kKowy8bVvlfduAuppSLE7VX6fDAsd9amMwEmgOuY2ig6aEoIBrHWCMQGP73MJLj_2nLKkDUB9rgwzZHiT6-Khr3GsJe3OJL", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116289543566930754687\">H K</a>"] },
            { photoReference: "AWCwydhabcUJyq-zepQi2DTkuHPOR-5yHStIiiH5_JZMkWT6VwFcOpn0Cr243UeVu_rlTKnsqWCyINFIC3PW4YgqRiosWAt_0_fY0bl30c_UbSQUiamCU6-SZSqFK6chyroBmBdN4GVIPXtl5uI_SoQSBp4HvkyBlaVzu6HJ_AIT_wQ2NvOS6JCDj9HNs11n25_byuiOuGykfmQ9dZRHytrMeKZWnWuUtEzGt0FlKMJdW_YqL9Hm5e7K9DW8d3_xnVABB7O3wMPHE0YN5r9QBomnw9I4EIqLgvSnm5n9C5cGW1-UrjzDya-d51Tt_uvPKr9b7xQtsSpYLNHijLB2rPZn_SgjpGZ_NDxCiXhwBDqZWm3wRrUuXA-SHTw_64ep3yo5KPH2_xuVvMIH_CjZi0GSutoCwQ8icF19J3x0UvJS-81VuiDzoIOIb4W9nNrEaASv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114584063471377662397\">Ofri Maoz</a>"] }
        ],
        summary: "높은 평점을 자랑하는 이탈리안 요리 전문점으로 신선한 해산물 파스타와 라자냐가 일품입니다.",
        updatedAt: "2026-08-12",
        highlights: ["최고급 식재료 사용", "변화하는 메뉴 구성", "뛰어난 해산물 파스타", "인생 라자냐 맛집"],
        tips: ["메뉴가 주기적으로 변경되니 방문할 때마다 새로운 요리를 즐겨보세요", "해산물 파스타를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리안 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 2:00, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cucinaluca.vn/?utm_source=google&utm_medium=organic&utm_campaign=gbp-listing", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5845707948928645697", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Cucina+Luca+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Le Petit Bistro Da Nang": {
        photos: [],
        placeId: "ChIJAUj2PAAXQjERAUtPInj-438",
        placePhotos: [
            { photoReference: "AWCwydhfByuqOz9PMRFPG4D8dIh1LsNMEJuHFO2iy9u-0QGZE8Ij19mq3hPlDfGufoxch92iFVCI8KZo2rhVMITsjDc_WEKcNM8DZBT245ms0jhOguVGXnhEoq21GjHlEkxDutUPLrIOwl25UmAUtG-A3czsh40K63ovB_AZiROjYGlmhM2Wm_bnqWk1ybBsJf2-mA3Bjm4eZInaXmN5KtY02Nlm4kFF9aFmxMJpUQqhAmcsIAAUQJWlxurnXlG5W3621fRqH9P_NW6LKRtqlqy_vnZOoWIXoLJzKotzQyA5IJORquHK4eI-hUUOXdFHMqdGGoRobmRK5sjsInTXiUrIhrxuzAFoBgtjFazvuC2Xdkuz4AoxaZFYiNBi3-HOuTU5lwyBubgeQVVvKfDYv6P522rIIYsuALowvBC6Pj0RDfdMng", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110010133976904576393\">Le Petit Bistro Da Nang</a>"] },
            { photoReference: "AWCwydgiLFv7huOIH8AY5wZ8APdI0NGUY2YL2fIbR1epcTW-Z2cxofuUonkW9gDlJEHtMGk9HgO_K4rim8xWBxPLd7ja6UBNSPAgQxLlFboIDLuQSx4y-96tcRLt-aoESyn92fWpVGUn-h0yXiLswvvrMxNcso4Ilx4_tNbcC26pgE7exIFxI4WPSxA3GZjqO7DoevCi9UzHR8ugR13_wjkoZTTcP5fZl3Y79dDUPbhHkeVXtSRdj_w04xzKWiwEM6z4nSqedpYQWE-OOmU3iqmHnFkKgBtriZ3bqGzM1mOmTY8Ei0BymsGtmgAKB_phX876Q4O2ZHiR4cwzON3tAnFAfk7f2ZYQAP-RVuAs_dRynRF7Mo_yA9ssyLveutfCZdvzMR5GTjQS_xKrC5dTS2D1wY2-Be7A0ZZBEMnGwCvazpotcriI", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110010133976904576393\">Le Petit Bistro Da Nang</a>"] },
            { photoReference: "AWCwydh5WV-NCn2mg9cjYs7l4otm1nKywskvL9eKw7ve6qGrAZjaw2epLKENtKUdB1HZHJ_UAWd9PdAdNq_dbpTDtWCrmr4ciZZtPwTl7duS1n0cocTk63MBGuRriCm7o3vQcAGqzpINxciSQy_IzgErx9X9nGyjaAy_SpybO9_MnJ31aUzY7Ealw2iGfbkYR_0IXdxaOdVmdohM7TG3c2kQ1hzfQaflAb2fFFxRqVFtEPZjA3AWFRkmJ8d8jHxuQNzVSqFG0oHssWlgriXueriEsY9fj6q0ESihjtZ2mfQEJNGoe0v9Q-gTwp9woGfb7iQGB-0mzQnL8pxYr031kA_uEu_eaD69EX8AQ6jz_dAwbnZenuR5kK9yxW71Cyo4ldCG6WtQQPkpgnTxEFokHpuEdKnh7Q1tvJvutJQgkNXouoODXEKMYMBaZYOfvU4CGM8t", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110283551834484960018\">Ka1d11</a>"] },
            { photoReference: "AWCwydg02k0CjDaVK8y9H9Ca0YPzIzdd5RT4u8CG97tFeVUhuW4WgPRPDwbt55IfF3M6CRCp7xfT75Fis1-WNxzmnA63T7jm3DmSVhGKQqXLhInb889vL7r9Jt8Xs6ZAPZQ7nEbhX10dCboi7L4eqvwDv9BND135zNAr56WXdWrmitlwXP_XuAxXyX2tV76Ns0KZcVpqbnHVVT63YJhyy5-UApAkPPE3I3J26sVuckRtkXmIIBaP7NKaSZXFcuh3UGJaEq17XAfoxhRafOWLCQWysjTnvH0JuIvg6KCAN_U_JitfXBj-MXtLRPg6kYz-exq50w4PykB2UXH45y7cdfg3APCSXaLMdD2cUC9_9AW42-kL6ibqss6QYACB1JjyQ9qtFa0m1Nl5ROz9Qde7hsO40PSildAis4o3cgseBk6N_4y7ZKVu196S1PTBgK-btGMB", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110010133976904576393\">Le Petit Bistro Da Nang</a>"] },
            { photoReference: "AWCwydhfTeB7hqe-OWzwGcIzs2wj1_3gtozdA7U0D7AUUfzuCj5d3YQLv61SYk0aMe6wjPj7t9F_kDjCgRbau-3bTfzuGo_g2tn2dPb7BYcqGgpUVFVoj2ha8dX-UOp6sCBmEISkPlrzATTM8GOM__YyHYib6TygoWn9osMzt9bRXbYotwUqDPZrJF0KS1GgEbmw5YaLdQo9RPit0jJ_6LnrwwxK68z9yVU-7_3sbCyZGLfo62mRitvXAD-FBbt8CVmVJ42q9yjxaM8NCKeMjlmRFqSHv_PnCmenrUpcz04vvoikDQMw9E8ZENu873u9lCMcnLC8Uon1o1jBGLHh6Wb9qWpvuNjBbv7iMzd8Z4b3dos-t-kheJcI--fK2POsDSr3E47i1POTvYIsE39zaAu-4rDTxIzD7z4IwTdcg4G5RrLRFEYpinN5KCSNpk2Fu6nO", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106719165614408914280\">kit ha</a>"] }
        ],
        summary: "프랑스 셰프가 선보이는 수준 높은 프랑스 요리를 합리적인 가격에 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 수입 식재료 사용", "프랑스 현지 셰프의 요리", "푸짐한 양과 깊은 풍미"],
        tips: ["시저 샐러드와 양파 수프를 먼저 맛보세요", "오리 다리 구이와 파스타가 인기 메뉴입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프랑스 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.lepetitbistrodanang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9215489054455319297", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Le+Petit+Bistro+Da+Nang+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Gụ Wine Bistro": {
        photos: [],
        placeId: "ChIJD_mpZQAXQjERY4tDxq1THOI",
        placePhotos: [
            { photoReference: "AWCwydjTV5B_rvxvDxp5cDSXHTDcIxPhQA9qAa1S2-Nzq4FGycP9LtFc8YUbeXDHjp565SgaKBoXgh9m4nHLqXCMQ7YENK_z3XphC_WyM_DJn-5pYR3N_6ttVQp_5C5nG2ee-m7YiRPxVEFJRfVOAgVVFxKxnf7DiqkOwdybzzmtpcPTOymd0v7KqDZF_c-YiTlHaWzE81D-lQl7T05b1XT0hQ91N8DtGTg-z6MIBMYLe5e-YWK8yCysl_YoENSxeQ6li0cC3338X3SVBrZS-nn0JQyUgkB_ux59Ee9nXqgQptxddlQQKtkJ3_oVMzP6pf-HjfyEji-2tNImQKody8rJ72ZCiObp1TERjeBUBDHFlI0Q_XW2sponynuYHZkrKHJcXP6SplinZUZp5NtoQbhVuZxHyMace0ojLOEY80blxre23PUXQpqhEG1qGLGarWgg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115450528320076575822\">Світлана Коваленко</a>"] },
            { photoReference: "AWCwydjEbOuGpxBUStHcGagnOy5lwrbXyfIBS6UPqiwGdJKOmUOwqGQGckZHnHce84Pjg3vO-VGFoVTaq2czxUgfNaN15nKxhSOgDtyI3NBigF_EL1OHh20IRZpps6N3ze3Kquv2cngUSiC2ujudI8q5tMCO8mgHfXQST4IE-CT0jloPasa70JULrbac4kRISXlvlCKLY8j3nXNde1NZUSbur0jlitGGG2W0k7qJ29lleYjMkkUBlhtlEDnIddB-wgsUhAda1avrsdnMlw99vSo-vjlA7LL7KJsEzkzVndvIPhHSAkXTY6tlenMns4mPZLJRU-KvTHJUcZroDqqk8Hok9z-UMEj-uwZe4Ku1Gu4GZUP7YoW6i41w7t_5QRCGROHvo6yKeixzTo0thbZXHXAagVhj9RL1GPTyNlDGXoCMsFN0BmmyGx52a4Q8HRWgig", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107291448302319404853\">Gụ Wine Bistro</a>"] },
            { photoReference: "AWCwydh4JtD5qXq1YGVAwE8VL-OXojIeO9T1-N4zb4cR0fClwKw35P54onVjnNyKTf5Fgt1DK1TqIDTPvX59rPY9AXYrwkbiP9jlW9rZceRN1GB3N3GaZ6kwJFggEFy5FsrBmG5G48C1qswAdP0LOfL6E96V-Aj6CraQ-AqCoOxiHdljW8GvUr0_aO1nBzQghWmLIA3MpfKB6ZLeTUpnkwRAyABty-eySkHDk2Bf_Lg5KMKdPNRjxAy1rRYvxX99LKUrX2G5F9SecTbQdBYSZJLsHtzlOHEfaWVuTalMmnna7GaZz2RhOFUeLaFDHIhbVs0XMUYLKd-3qRQ1dz0ojK9zxA_34JjFkQDLtDaWAXw9LaVMBwHNq7FlSKOVmAuZEbJtcATFtJezSWF7KZmRqpoCXiobX90IUmOwy5W3K5S6m1H-ahVAf_fPKGFXZJ3DLEBK", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112127824203008867519\">慧傳慧</a>"] },
            { photoReference: "AWCwydgvI1l3RDbM1RABccUBx9s60CL3NWHtjATN-nPlCbLxydJVNHBfIt8X_wR9le-I7Mv5rxkUwSwNV0XurALDnttBXZc4qe-nGalYg8iz78EOs9AF5nJcjM7p0KjoTiN2wavj5-2JkArcq7cEN04NM3cjf0vhHJvjdSAnnpzYY3smqGGs3V2FBX5DT-cRqWXbXzRBjS8mp0gaYJ_gpZWDHTdVj3JsR3lxIStDIo5m841TKFiHUzu0d-5NFSDVt6UkWt6MfU4DEuqRigYK8-h8vKUr-D1Sx1H2zBFjXflXE5dns_6p2DWkW5xPBu0LKN3n7f1TUCbyUGkQIFLCTTOJ7UxjK3l3s_SBQJqU0-CfIvNVXTTbf1MNfiO29cQgZObmgeeFyLTaYY27rYBlliYwYSINYMh-lCbDVCG3FqtHh85iieDXo8GcXMkWPElkzA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117530602383695305779\">Liam</a>"] },
            { photoReference: "AWCwydgsQ-OyrXWMfrhlUe5oVWRI5DNm2hy_nkXyUU3GG6FWFqB7MM7S78rvxfFnpklWxI0_FO-Rol8cmJH2801H0yhF6cdRXdnnJl1eT91YaLb6tW2QdbACjajKmNlnLAKX8LFBX5gY5yW9ZTsldGYh96DKXktVNQpf2B1mbQWhT46Dt9pGRxxFayxVZJcdwHlkEeyoIk1UcO9Jwh7orBNPELKiSvy9rtfUaBuzNInwDGe9u9WtJsDmQ40gUDGVfFaVePC2nwDHTR1ssyR5_MMsvYZXDhNu7bD0gXEVye-8TixAqLtUpvrQpRMfKTXtVSyBzOTt8-jiRDvkR4OcV6k8E3NYiGQ5rMOtpbhnt15MYCO_WpZ-m83BuBLdIDuyApEPW0iu9U-6N7USVjVPU_MKxw_iFlZ9uP_IbE4pJo8VE2jLzrRrRBxAlYl3Lk4nvULL", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100450237053745761703\">Carlo Lorusso</a>"] }
        ],
        summary: "세심한 서비스와 훌륭한 음식 맛을 자랑하는 고품격 프랑스 레스토랑입니다.",
        updatedAt: "2026-08-12",
        highlights: ["감각적인 인테리어와 아늑한 분위기", "신선한 비프 타르타르와 생선 요리", "세심하고 친절한 서비스"],
        tips: ["계란과 고등어 샐러드를 꼭 드셔보세요", "화이트 와인이나 가벼운 맥주를 곁들이면 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프랑스 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:30; 화요일: 오전 11:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.guwinebistro.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp-listing", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16292989557740374883", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=G%E1%BB%A5+Wine+Bistro+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Gypsy Rooftop Restaurant & Bar": {
        photos: [],
        placeId: "ChIJ76XtSwwZQjERJapWgs-OVhQ",
        placePhotos: [
            { photoReference: "AWCwydj2BauJpHFJ0vp4ntwuyIwgzu_lCL0Hd8HkovDBwaMXOnPUNTRhbKaQD_hjkWDruF-fIRC9eoR09vUlozHBdZ1IReibMLJ9k9AXpwk5Fu3ugRrTRFLAuULuCYVquaUvBYc5TFKISH3uv_AS1vrEl4kNYFUCvVuJ98KDmyunpbzzn93CcsigbnCQkoSEzGHFnRKYlNoeh6ZASDR974kSExbAl84aZyfPRe-bNwDuhLb-QoWuT6abmN0PAABO6MxV6iuQS-VyHtb-M6mB5iXds--fXAEvSsg9Kmz7jS1y9q6vFJVCxiOz8ozPAo3umCPovPdMx0IVQZSGE0c_DkrPkbfsT6qhC7meYQ7D_-gR-CnbchAE7pApJm2_LxZs8HKSjuRMniTDgjIITpRizJMDGlL6n7Jonw-rkFQSqPSpN9BIlMKdGwd1kSG6arkEyg", width: 2560, height: 1441, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110447108749969517016\">The Gypsy Rooftop Restaurant &amp; Bar Da Nang</a>"] },
            { photoReference: "AWCwydiy6sZKprME-t6t6rBgRUrUTSJYkvepL3ibuX-CVEe0BoXRGDmGBHYZN4hfhZW9j73qQa6l8tn_PkEW5BhZExH5D0c-yoPHGi9B0ey6mIRpMlv7BBCWxPUV8IjOUfYzD7WRFv5uX36j7fqYKygUehjWoczqK8cTGpnhs82HVBzDb7dW-4KZmMroa0OMOeaj3cj5jQ6fiewHxZoOYyR3JqHkUEOlFRxOyej-9H0Ic72brD2wC6iWhwGFHljWfy30IeJdDCLrek0D4Hj9bCWDi4zwQHOP9YkOQNGjczKkgenZmTfTsejenI8aADxDMY88_jgAcEFQ--CvsT4FFxWjQGLqXs03J15UxkJWBf7MRiWv_XLhR64MIiRzLWSgucTrz73jT1-cfDmG33M7Df-jv-7WVMGczNI6x1RtTZaIejIQBJ9MraK_B7EaZy1Xc6KF", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106785856465727395275\">Kelvin LEE</a>"] },
            { photoReference: "AWCwydimZSE_WukLQr3b6CFrJOccNGqULWShl9GBQUJhqOml3B5QYpFjwyAW5W4QmHPXUaCMlHTY9d-b2nnPHYWJbfsY1mV0Y_VvLnx-AcTVtcWDEqd_cex4jMAyFvmPNoLLWHgEzX55by8_HoPrMk9Y50q5r5KL-zoKoQBuPE-Qtg_kdBhHwQTMFtsVUaTguFa1ODUfsQo6uVrHGkSOE-m66KEJJo344J-UT3IwZKAzHKfGQaEJqmtiNTSFXM5OgsfSXDO-k9GtdHD7RHu8ZgxfKVqqaDB12H5AVBo833I9Hd6r_Rz2xyRkJaNsEIFSmJdwRekKxOC6DHw01Jm7nmLH8uqzvab_69nuFo5PuLWle3bbyYJxV-NqYWtA-HgZ6JDJFTuievcaCigxyJjWWRn_hgjZ6ZGFy2lThKecmwACQx8uvcUY", width: 1365, height: 769, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110447108749969517016\">The Gypsy Rooftop Restaurant &amp; Bar Da Nang</a>"] },
            { photoReference: "AWCwydjiD6hv4YgIxde2FVga0vi4sjZ3q_zz3Zn_jXW2zvR6pdGNDUCqlqdBMcV-jGfozgkSFNT-hUd7EEXlViUplIv95szzYycsUNnqAxxwKZRCdxMrdC6PAuH6eUSp6d3UNJmTRZ9uLNjmiAtcWI53_cNanPQDWnrfDhBJZHClCkbPt97a2vky1-3N1B7VZgGd-N3kO-JDOS9cgen5Img5Cdu8noGp051KkFzCFcwsnWCy5delanbB8aELl4bhNjVozYHzuu3asS0hSiwMQoDUMUSZLxeL5n0ziwdB16zbSPGXl8M9JDeYC1w3o0PtbP46MXc3vSC5TplVeamW1SZAVMXeTX19YX7_Bg8oKKDUMSNLObZabMW2MUiqZgJq2t1rroLSD_veyPeWz9-lQCBystR6W6VYnM_003mznG8ogQHQ5AlGgUA5U8xgnayj2Q", width: 4800, height: 3198, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101338006308094769232\">Phùng Hoài Thương</a>"] },
            { photoReference: "AWCwydguHSe2mm-54JMfjXrkjNF_ds0GU5L_wvYoilPaDWsOZnEkFRuBgowMvNkxbmPhfAOHcQLKslvxlhz8CpRA3mQUkv20mh4F7XmK_JtMj__a2xwsa30xn7vgxtc09g5ymfkAVkZDG1HPySG75kFksmUbG6SAlShhcSw3bhZ3bwtUqzqrNPjAZf6KjcKT-mqjD90QuChEqMy82e90dgnI518oS-DMoiAu0lJO5nyJUoLKpyx2tGnai9UfnCZ7pruGmX1TLSi9AoqK6NpZvOjfbgOhj1_qrYd0A8M5mjfXkKLSXmsFQZtqxyQ5iIeQ6LVvM5umi4_UjJjWw5JfardJY9y0yx4FFqJ7kelqgM8oZmLFpd6f2oGa1h8PL4El5kiFRBuNRc1Y5zUBYE0iBfA9iO3uhDzb8xcFbp3pw3rjpweI_k9sEzmAeLtpNy-IQO1d", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112019799160259226200\">홍은혜</a>"] }
        ],
        summary: "훌륭한 음식과 서비스, 분위기를 모두 갖춘 특별한 루프탑 레스토랑입니다.",
        updatedAt: "2026-08-12",
        highlights: ["최고의 서비스와 세심한 응대", "아름다운 분위기", "기념일에 방문하기 좋은 장소"],
        tips: ["기념일 등 특별한 날에 방문하는 것을 추천합니다", "세심한 서비스를 제공하는 직원이 상주하고 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "루프탑 다이닝", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:30; 화요일: 오후 5:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thegypsydng.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1465515750651767333", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Gypsy+Rooftop+Restaurant+%26+Bar+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "XLIII Specialty Coffee": {
        photos: [],
        placeId: "ChIJ7xtm7rMXQjER7ye2fxPfbFE",
        placePhotos: [
            { photoReference: "AWCwydiGPes7sopQb5iE4H2lMw5NULh7DATNepRhSYfSaebICGd1h7C2fVYPZab9cm45WGwXtn3tiZkOLK6FAuss_eH9d0g5W1yUNs2o3ZJ9DGU2X-iTfO-zDPjnaMFwce7ZySepRbnJHx7XYz30-CJGEmsZmiKXux9IpGZdxzFqGrbBWgy5gfF7IYrgXAeXn9C4mPMNmbKDJdOcNIkkSEDZVng0nJJIU2-KlDrFn-ush1iiz1_AtEErSjvRgrIOIsaq15W-ts0v2kLA7wiMZB3VxxCOTV3KRzGASU7a-Jo_zOrQLp5LR2Kp-u5TpNN-8MtbP7jjh7102nsrGwWSqi2uhdf4hRbvMqsfaI22-MrulZb4lwRRYThk2714WaaY3PDW0OnZvbcx7oyI4doZkvJ5BZpBZxdz2_3QC5i2kJdCxSDDtOr_", width: 1800, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107160498142553271861\">XLIII Specialty Coffee</a>"] },
            { photoReference: "AWCwydgDiPlJtYqf5TEKLjfU5G7tKaGsDY9EjRtCWGPNh9iHBTcV-Y5Sa6oU914uRdfby-gMn-lV3CWkpvS6CCicHiTY3cgjOtp4zDR0sglHCWzy0lDgXtDrt5Rwb-uCRAqzpntsVGcKI3x8bfa1vAApiYG-2qmAomX5AkZWgO8KZ4wYNLewgXmXayO-vAkvWjxqBhXnYl2xJmTNNWY36z-z7gyf8_DK3G4bHROoVShJuLsYfsiRaGwhwkvSZIxJHrSV6G4Aap1QUz_TeOJvyi0o37UjeO1EArZ2480k8IafF6HPJjZF04BERpGIML3U-XGQxHYdgCfPCxHR5PvWThzbYQwqzvpJXMmIqKELfCLSBPjODoYeCdscS7D1vtXgBL0V5grPvVzakoEcaDHV_Hrn5TCB1CRXtLPo8xAi9LYQbXQ", width: 3780, height: 2562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107160498142553271861\">XLIII Specialty Coffee</a>"] },
            { photoReference: "AWCwydg4Wj4-JRqptiwX7MZ4PWGyFhLF4rrf6KAUQORK8g7_FQPNwNy7CipUqzg1LohlckmLJMrN81ERElIOBd9FnqEWSDthxeH09gsf7sXm5-dpR_fSSiToqcaBz0BMSvnqEXEr2fwJzoBbl5ZNUZERp_Tlkm8vdv4MhctaW3i8mYL6c-XCCbhkY5gj2Aw1ail_g6Fm506GaKqyFsk2N9M7bI6TxVMW023sBm3Cb5-Y61UFgEqEs4g9jNHnaW4vqRwAoh24xV2JU_9CQk3UgHKkqYr2im1OAR_PDVo41wDPl2S_XGgHCUtZ7GRoE8EIX_tgDP-QCB6Sf12ZSFc1AfwU5lnn-S_IAU8lOx0dgKN0nevOxjO4K16gZhj3_9DuKD5oAeSq1O2at3G4aMBwHRvnm4mr2mwY1qBmD80R4kz3ElbePhKL9EvbeY4sJB-wWHZL", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112960071841378919773\">Suphot Bhisittrakulporn</a>"] },
            { photoReference: "AWCwydjhydSOHweeZZzqxY7O4DtIg3NjRExnTtSo0VAetVUO0HaFvNKStjk_6YztbkLBSeGMNGaUbNcQdZHVJCbryS07whOGCeU7rggwaELpfrTC944FJ6Q_Im_gzhPr3rYFgGPNmoPlOgak170vpcULg1qjjsgXp3wNiI8HDycWEjjDRlxj4zfQbu9rSjzeu3sbuyzofixrPHHTWQIfLwVwJuoDU6j2uWXLS17PT225DzOY466wSlTUz78TLIZT9meNrBIW9CQbjJYPgIQXsRmrREMwnrGHqvrxc-dHXx-OjK7Ndfx4wjdHonCw9yw_XTS2Pd_sfIr9xOfCrjb75dfBpp5b87PagQX47fB_iX6v0bLuOcyjPb4vuoINeCdeMJlKAnR37nE8Kp5PcMzWSvGEqqz7wZ67sCYfxdemGI1Dtg35Vw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107160498142553271861\">XLIII Specialty Coffee</a>"] },
            { photoReference: "AWCwydgLyeXbK8oUtQzW8R8_ZSjzD5xB4qCEhtltgGcW9BLrjuSq3ESvkycy-rDOvQRpeYCb23j9QkVKXJy3nuHMznkhRja99uTPCO2QiQJCYN-bdoe1IJvxWx7uuiGJbnyUqM-9qjtEGb_X4JFTUoyti-q-EgPfNQr2hkd5amNoF42Bd-E-MzGO4AP_uZ98CM2z_EriCHVPRU1a13fsMk3yy7O8Z57CLS1vRdOmtjuMTdVk2UH7hzhBs__7EX3CZcXv1Myomtm5YS4IHgb_JA776OfLhHLdDzQxxFvn8H2z_U3Br687hfdBzwXPktWvFVMf-3r6EDYM-dbsZB1S6cvJi3S8mmyhp37gTYbc8b-pt8adoprbSoOvc4YSxndQF1Up-HSv8SVlPI3SxqKlkYkWWukqBnHVnU_tDi7ep2rS_WcDATXp2pM4WSgNYI3cz2ZG", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115927919315689699226\">Clarence Lopez- Dee</a>"] }
        ],
        summary: "품질 높은 스페셜티 커피를 즐길 수 있는 인기 카페입니다.",
        updatedAt: "2026-08-12",
        highlights: ["스페셜티 커피", "넓고 아름다운 분위기"],
        tips: ["매일 오전 6시 30분부터 오후 10시 30분까지 운영합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://xliiicoffee.com/location/xliii-coffee-da-nang/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5867309689396930543", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=XLIII+Specialty+Coffee+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "찐 카페": {
        photos: [],
        placeId: "ChIJ2eFWbrcXQjERkMR0z_5VhM0",
        placePhotos: [
            { photoReference: "AWCwydhroYPBBVHS2CYqjx3MRSB3KgWDkTKh9EeGxSZU5C5TI_x0kLBYb6cHQNWPMQtGAB-a6IbJ4fTW_3IrMV9fA6yQWgEQdHHELPfDAb-s08-DWskZJ6dz3nzZjz1o6Hjxrsb95OeWz-Vl3PKgiXxuVyn-QPMfoa09BXMkUvN82dxiou2gmelQpCFmNRM9Ts-vGEg5iY3UrZ1nkYMDCiWWc1wfz-_6UnpHC8U4DXlF14b8Gf0UejftLsIpTIu852ZmX2RG8Mc6oRrsDVJprL6IqqstrHfmu6qMfpak3noambVqMpC7QLtlelIOWiiJWw6JviGXe8i4WCSGEz1emcDnM-p5QKVdwH4Z5GOnoXrm6KV5n3PkpLSIORwhA7h7uOvrQlRfjCHqQoCm1G_MtOtjU--1RNw6qjkiZYggEUb10Cg", width: 2488, height: 1619, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106839796565607702057\">Trình cà phê</a>"] },
            { photoReference: "AWCwydiN2t4ztaFkhVe6dZgEepURD1eszCubauyjH7AZMs7qnBdAPQvbBHt4v2qn6xx7zQfXZweSVCRVGsELivRrKgsHLnX__rxB2u5HqBuyRW_esaiCdgcFEiIGosce14AibESCo9BSM7snLu6iS0lDMJB0RaIwQB9XzjcAiIO-OoPEk80SRtd4wNW0hldybRdzuRKgeDX8QBmKQ02mrGWHy9IBptdwS9tEkQp3-qRUXB-lEkOjUo7ab2dxdzl3HX16vIJA9PF2m8ek9WF-N2dZq6t5yN1-6oGMEkZixGOsCDN_SVz1O2yVW83J37vj8kI35mjW7tZmu9jDkk00-PA19dNIDojiHRRaPLyhWsxYt_Owys9MmMVFxIlclWZvngGoIV0ILbLk1NBFsDD_JW-jD2m3D7udNhSjmdKHexlaRRRBw1VQ5QPavIMIkNvCyVam", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100810169153257968494\">Phairoj Laviroj</a>"] },
            { photoReference: "AWCwydj9SrxzMuNRznItlPI3Uegir2-SNT33SXvYjP-jBTnSOywFqwmWrcZSO7VYvaigfoBw_EYnrQhStE1BOnswBMQiaC2-S-FPJG9_rudL69pkyC1mqLI-R53ew2oGccigr8PwiYX8RsfPzI_0I7AFgasEQEBkyODdb54pL4W_sbx_efpkmldEFyztffkaZtkWeKs7gQdi4NSK7eueCDbP4cCfvp6-yUD-0hsAuOUMqrL3nPwH1ZxSXFwp-gerOmsrZNf7O5c_1ZEgtzCyP_2c2vva0jwQLQQ0n09QWDtu4sedw_qtFWHQCx-F4Ymj7lpTNrrM5ro6v1VH2-ySFdA9UsgFcg9zGmyIvnrSIpHAVauXzP8li9km23VM-HUtE15-ytH2-kXlJKBgTIPvMsAoiKUM29Q4Jg4on3CPehvNh_pr2iph", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106839796565607702057\">Trình cà phê</a>"] },
            { photoReference: "AWCwydjrpQdV1WMftNHrMd1jjK-7rWZeUwE-unWrRi4pgMDKCFcYMgLXVFVHSC1ask8KIVAmUgP0eXo-eUk0bf_f17_q1lABdc-MAK34sz4hjO2JlDV_juyGBltN0flNE86FFrxBxRdF2GMuUgzzGfVLEcRN6GnVvLWqAsJ1gNd_o420KEcQDxFsYZyH201srYy8-jAfbBWux9F2xxjyDP2mfHtAas6i7JcyxVzAa59_P_lJABUSMsYjutObtJVKiIpMIMt-4xYJAqPBHJUhVm-HaYak--qTBL2f2Cd5P41cqw--rM677S_07oBAuqE9qc6EaUhlsK5OKUtFwlwqh0RFhf9GIU_p26ohyuTolsG0gt7lKyhAnmYQfupwRqWI3cdpKCV5oinwQI_I7Y4eyVfWR63YTfhPl_x1tx9m0B1KLDq-kGsSBbR9QyuUf3ETi-Sy", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102086369724016689569\">콩순히</a>"] },
            { photoReference: "AWCwydhxfnYLUG9S8Utc_4chmMZ-7Y2m2d-9nb9ZkyNsscRcDZnPbPFAAgDhO6evV2IEPHMDn5XijwciXlpo8QWS_aixsLei2sSqiOLQOI0lxu8vJRrLfUTVlDnqfHabcSncGeuc3WS4TvTBZPf4vypqpi5PxMJ1OdwmSas_xq_56zx5yx18Yza_oD8N5tceGIQU0Dg_AE5AB9jXx1QeG27CiCqNFQ5Ratg_QKWmdKkCdsF30xqUAMrnlispwc6pZBfBRqjNQq7NHweJTMytgaVwT5y6WqU_ApogpJ597C3f9otHctYmWAK9rMVw432bcmgPvybboJ1vE5vQVrsu8VDL4sD3UWFdxKHMMJy9uxZyCfHbaQG5uJVBYOCEREp10NV9PCkKvA4kAm2uG3ZhUfPM3ndDINz9aW62oXTTQWFIwrtm4TKp5xVXWyCybx_ruc2N", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111282196880160897764\">Thị Tâm Lê</a>"] }
        ],
        summary: "아보카도 커피와 망고 스무디가 유명한 다낭의 인기 카페입니다.",
        updatedAt: "2026-08-12",
        highlights: ["아보카도 커피", "망고 스무디"],
        tips: ["아보카도와 코코넛 아이스로 더위를 식혀보세요", "매장이 넓어 개방감이 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아보카도 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:30 ~ 오후 11:30; 화요일: 오전 6:30 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/trinhcaphedn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14809056027591623824", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%90+%EC%B9%B4%ED%8E%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "남하우스 카페": {
        photos: [],
        placeId: "ChIJTahQxcwZQjERrNKa5emQFC4",
        placePhotos: [
            { photoReference: "AWCwydj5gY0VT8YMQGTL7PZFhL669e1S39valuMhZNg3i3JNZW3cK0F1A8ycabNqowQt0kys5bQ97jJ1BGZ2301eFsSDYoiAfk8zh7K1w_BblNRecM2G9nJOOLG5O6dwioJu1ka9lgpUWAz3nd5hr3SDvE4zZyWmJpM29kk30MOQkd2Wc4dghhdzPWtLzq_847gIu2fEqbL895pVx7LpM6utjqgEzFHtSKvJDoV7VNx0LeqWxUodotEzJWAjegHmEwT1Cdbdlg9mrGd7ePJMgUWNRdu537pZ29YSJg8ntm9_K-1KS0TKzYcVeJ9s7CixnVA3itf4P_uXmNKTksX_zf8b4L00uuIPYOzpQJsb8rfmavgbm2hXWFTkSkNyCtxMxCZ2vRWpoKlo4eNwrEh_V1qwE0yiFP-0XCAFcD0UFBmqeuHNOA", width: 960, height: 541, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105335778159153865756\">NAM house Cafe</a>"] },
            { photoReference: "AWCwydgyeDDdv7tXHA4MOtqiOmQogI4Yuqijj3YYWWhIyGJaJHwPvN61Jzk6_o2kIz3GKbGpjIAM5PcidJFGa5eDQtU3jghM8eUkKcpoXYTEXiS7k5W4Sg0jB8XTTShfpi-cEGn_lvcaYHPitjeNQbaAQsjEihr-cnTXxH-rry2Mi0trNqJf0WLs9Nxdc5kAsUuFQmmi9PiLqynkGZRAKDtZEsHcTz9AVp86XttbkXmXN773CUbBiT4EMiZInluhrk_BVdA-sRVsXeaZQpF_1mDRYxn14H2zIUbiW5imBsGJJT4AtLwuQZ74jm3eQNR9yrlFX_4dlfEBOHOSroHeVXfoGCP0hmMv-5LYrAHwX_SsUq0dvvNBtHKA3Nvv0ZJ8NYM23iAscqjdQWjsd1FAZV3gwf9mFcoMNmo-Y9o7m7xe1TQBtIhF29mOB448HRVdtctm", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105335778159153865756\">NAM house Cafe</a>"] },
            { photoReference: "AWCwydhlF3mBPEirf7r2n2sf168OtEaIiTdgNDhYeuV00gz0oBF5LEr7J_Sjnbkvx_zT8g-u9Cj3KR_AMmIvB9WiaxHMhI62JY06YZWf3YLmJH514AJSzUAYBF2ECr9Kr7MnxT6O5Wx-p5nry05mc_eWTjkmrZFbvhITjtBsMzD5BFtgSk6JoICEjVJPdIklAte6Dw1PCcSS-joEdCZ81P2_u5WPoe7Wg7Bq7vtE38zsLgnGEXwbCxweNE6LUVY8zpG2u09kpZaWuJG5ATBctYjACCcyZzjg2YN-w2Ba2n1T5zAY0HtHIOh91Wl70KkR51mcl1GdIsjwtS_hCPvGHQZp6WFjEBlVpSE71cl5OWkFakis4SifhvpJpUWl6AywbOrl0wEn5Lmt6pjlfv2gX-TlOlGEHgnJlc-_jsA_BLdyI9U", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105335778159153865756\">NAM house Cafe</a>"] },
            { photoReference: "AWCwydh4LctjspA_2XHC9g3lDSCYdM-N7jNjOI5Z5qGSSoXuSQJVFlRLl8_zgRDv3czsZ7PWBdDDIDxdRjEPUENJIPeejgNiPvroQdn6btlwY79SaVWjwNpK9ErfyG5pfrDFBUprWj0auPK9KcWup0fWX0kmGScCnOXPUvhYTuEr5se1KztjoX3eJPva96tx_6QJ7PC0Xcnzv8ik_XXBa0sCq4sVIsHqNlqvDRnkuwyuifbXuCUNLJtM8e3logN8omjSpfto1jo1Bd0nGZ_vOW-tXOhxPwqTAYHn6tjjzfUKJMsv9KhO4LgPQp4KWPFh9gMDABQqXhcjyH7ICnnlQgc3JVSPSn1OlGiYo-fKC5iOqJR8B9GPJo9JbxH4gi05cxNazaAMqOiv6X3F1TcxBEEIFjvJzwAsaK2p0RUVVSUDavMTCpxOgfUcOVh-24WEtC3T", width: 2853, height: 3890, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111803872009174340612\">Sophie Bellin</a>"] },
            { photoReference: "AWCwydg7Xu_OS8OCWHavX8TB-hfn4X7zSL-s9wlTkvW1jsyh3Dpv96TgtGENX7kHTtKFVxqzVBbclrmGrHq7T1qjBt6CmSV-O6uwLTMTiG3r-d61SHcMVw8P8fmsUCJuQMTNAbFH4gqIuvNq4Vb3kSgY_rsCiIW1iuJdT5Q7Agos-emNaBg66FnXrvIba6Du3RsOs3V2NdVPQYB4ju_Vv0LoJZ8NTWemnnd58wY76b3zoDPUtVaPdNViIE7uhtA89EekXOEAMJQxTwPOxN9VWxqNj0CIK-2Sc1BMpllB5bVja2kYzDuZfJCufw1LqGmMwpwFpZKIuMyRsJZ-5ZKeGwXAnRy3USIsMxG7qmzjpWl0igd92ggx5ZILHRyPeae3iDga9cFrBP-792_L1KA0rmRcr2x8TtFI__bUA84LwbIMxWyPSx0rrGmaiYVNgL_vdw", width: 3464, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105335778159153865756\">NAM house Cafe</a>"] }
        ],
        summary: "매력적인 데코와 맛있는 베트남식 커피를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["빈티지한 인테리어와 벽화", "90년대 및 2000년대 음악", "커피 주문 시 무료 차 제공"],
        tips: ["피넛 커피는 이곳의 특별 메뉴로 추천합니다.", "단체 방문 시 좌석이 부족할 수 있으니 참고하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "피넛 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:00 ~ 오후 11:00; 화요일: 오전 6:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/NAMhouseCoffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3320438159532806828", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%A8%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%B9%B4%ED%8E%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "크리스탈 제이드 키친": {
        photos: [],
        placeId: "ChIJNZfA3S4YQjER8KrcK91rmsc",
        placePhotos: [
            { photoReference: "AWCwydhy6HPg7K0pR5Rwh3RDtoAyp74C1EzhMopBYMLuyFJdcU8Q1t3Bojya19Io2WatSx9HtPUquyjrjbxmrJzQ0hGL_L1MOCZQWXU6aYiiT7f9D-GtCFHvzhMp74CeQl45bwevxxWQz73JbdqHAv3hF8-QzVcoEH-mwSQ-zYxW2s4KHz_mDY2SXyb42BG_UF33lyPz-rz-qSjHOvC0fKJs0DcaiWIibbzgPs6CUZ9vCEuCwiFosFyDNrn3RLTEt7rYOhfCKdE-BjOdMbc-TpoHofzowYSkECzGQ5jrmD9IpMowg9LHsXQkz-D_AaH_IZ9ft4faB3x5B3jQJl67e2LWlY6nIt-GROIhSxt82u1KJj087nzWxxp0ZFvpRaqS4FPQ6degeH3oyyB1of6eBzrEpYAUIqOtFLJvS99MJBl4_vqsbMoTjVDhmspSDbe4pTH-", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107225915107030229273\">Mutya Valenzuela</a>"] },
            { photoReference: "AWCwydif98YwmlR0zsiNqgJ-qROS6RvvRZHOgVeohHhCrbeJjMf1JyxerBjUuRBRqjFiyZwhF5QvLDNZvOTVvKF1hAQyb1uK6LkxlX1p-Y9WxItJ6AtROOPmLRJ6R4Az6UkeA1eU4-h5xC-Vpd2ozpYqMOsuJn_pPfyE7VBHGZQmLqsDFlCE_2FWH_bCSBPbesnr-IXhionmuKQqZzppY5qPwNxV7V1sXD_dju9ut9ub3KmvYqdFwPOjBv6dxKK9Bdm6XcGnfClpW4Z7F4geRESkuc83J-HOTeCa8KS10SGDCGhwfY44DsVxfhVRN0Cn1Ej2thacHo-RPNrqozzo6zh-iy_wk7-6xVaQxGRHUoOpuN5Tv7P_67OXyXq-sDf_9c_3Z5s4BtMB_9Rg-ra9-602V9qjsnw8UlbdzlvDa2zAO41ot-pbbi_g07g0bn_fLD-G", width: 4030, height: 3022, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112344450866161716353\">Châu Ngô Thị Kim</a>"] },
            { photoReference: "AWCwydjDCyaIjb2U49DVoVZv6fN75LOTR3JyABcD2HN9irEnJmumzGRjXz4nYbxx0QrumEK1NM9jumYpPt00IZbWbtliikQ-kyXwj6TFft9U7ukXgCv9ZmZ3rimIO9osHBOKauv-XbRUcr0ud18IWJfyDd9nRsjFW2krymme37iB1oyjXf_n4vgS0eFrR4k2ZCFwrF9ojXRoP0qCHCW7FAKIPeEel4lgh3G-8XR5M0jCkjDkq9e5xhGuKUy6LFEGi6-pVKyMSdhP5YCrX1xNY473I7QQYDUwQbWiPIYGio8MmDCnV_GAIaOo_v33oN_wGie0dWdqhnoY3ziS95cuhBPL9NptzRtqi9p7PLn1YMp7eQdjDK1Yk0bzhJQcEdKsIaB4V1uhKwVotat8lTATmIPF2jRTUGkc5qjvgou6__nce_M4hb4PZMD85dDNkhGWzQ", width: 588, height: 441, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107313034041080278298\">lộc phan</a>"] },
            { photoReference: "AWCwydimB-Smx30U1ynoxT0yriZ3tYDN6q1huYlCdCFM2Cl2QvPGXWiaasNR-0mikW69faEjFnBt1KhVU8vLamr79ynY4XyPoHFNOg7VpKNfV93kHob_0NOILdbLFbLClvcFMJUV4b3JBS3EMdLzk8ggn_V6xhiAbIh9ZVj2hS_CgjLa-cvTae270ZHM8gFSM5gSX7szY7ZXPjvrymb-sBFxWqIYou2lEXzRVseBLT2xtlpOmLAAfDvkE-HYB_qsshLZaxQz_jS21vpMpnS7UGe2vhnmyX7_Ct_aZznMwf_U_TYE57hAOUrrh5kjnsn0wKBYTmN4NvILiQ6nCJ0PRXK-OtkRcREfi6GU9O902UWZ0x-vYfdtNK3hRM3NkOHoeS5627764x_YPK7c7MKeRIIg4fK2F9hOAbcnNU8suR38hsU-3R_La9th-85EW_PfDQeU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105579260665139826532\">Wilson Trang</a>"] },
            { photoReference: "AWCwydgjO5TnT5ctixibaPPFJDMLnjL2wQ-HwkbG0i7ugitnSFcE0QQHIhlsnPPQMaO0VxGRTsvBbnVuFXHc-Yc90X5r5d4Kd4LO9krnE3NDVUdIozQV3OPYvlIO2syo9CFKs9W3UKbF4lt1dhHXOQ5OVeGqQ5dxGvwD2NPElMJMNqNnLpB_m_3l2MKeOehDIm-a-0Vf5VCGEnQow_VTIU0O1-Cv4n1g--QKPqPYd0qGacr8kHQ52IVZqgdiZoKpHWjH55z7vEglHR7PJsuaZhDeivcNsmC_TccIy0HVSJ3hDs8KTftZDFXvUwt_OvBmJnYvijwQ3VY_Ag85tYuAlEsjgCaa-Vb0WbIzZycM42e0y99PRZldYiKjLUtf7A-IYZv1h3rj4VKtLVZKAszRVF2yIbXemUpZFf9pnXMjJbJjyEGq7Ivrqk3JYA-6yZtEdZix", width: 3928, height: 2381, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114638571191884059286\">Susan Zoe Felix</a>"] }
        ],
        summary: "빠르고 맛있는 음식을 제공하는 세심한 서비스의 중국 요리 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["열정적인 직원들의 서비스", "빠른 음식 제공", "훌륭한 음식 맛"],
        tips: ["직원들이 매우 세심하고 열정적입니다", "음식이 빠르게 제공됩니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14382926957628926704", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88+%EC%A0%9C%EC%9D%B4%EB%93%9C+%ED%82%A4%EC%B9%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Phi Lu 1 Restaurant": {
        photos: [],
        placeId: "ChIJw-zBdzMYQjERNlbwU3SwOdc",
        placePhotos: [
            { photoReference: "AWCwydjTZA497C6kf9quZYrbLg2pFZlLfdr1JXY56lEwv6WiTnjROmYBoPZtsYdNzP8Ngd7ash4fiMUq6qutjxDHfJF1HjDNGxML2_X7AUTa_z1lJzHTkRaCzTCudKWCo4wJ9g4Q-SgxOLRTN-LUeD-oo2KnQG6ezM3EmJtfEEwNxMeaT8V1GrESAWH7mGiLaSc1MXJ4Lu6iumFZGOrfC4QFH2Deq6yoo5iZmTZq_v5LSEh5sEDB0DOB_nGRYxZwB-Sa3-r8BLUicBKNZ9A_aqAXUuvDb3eXplbTKbdn8d33lhOStZEpsKumO0ifBAwCT2HXmFlyY_fZiC8gjbQK6X-OubgD_7vY1cpvgtWG8yEVVt1RX56qtzWVcCaM1t5bFyiP4UoXGq9S1yIJ3FoY_s1M1fj0kL5Ztu5_srF87EXp4ak", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117546265785559946408\">Nhà Hàng Phì Lũ 1</a>"] },
            { photoReference: "AWCwydgxblEOpAa_gz5x-xGUhxXeR1ty5Fiv34KvA3apK4Wag5cVktcAAXt7Er5LVDq7DR7n62-V6GFil24dlu7wxt_pciuVeKZqSLqbJDmVASgexnHyqvJ6vbC6sxFtJ4dbGyKC9F5zeVoTvg0tnYj7Rcttp5Xs1Pxa-GWPRu06NJIXp-pic9ndqsl0vuaCF976619-VB4aINA_5wG8sbg_CxOdY7g_d6Hl-aXy4SeGyFxdRnzzrTx_qc4BRTpa0hop1WDXF0ysqgOyY_kojMpHQd4JodRqdmX34IsOFwNq-5O37AGxx5qxF-b0E3Za-wXBwYAscTyZ69X3mweddOnUUwocDMXOB7gGXvx7G54YonRj9ZhCm4FxepWLtwIRwth8XBI7c1TodP-8DpGVnC76-PhF_FcENzpj4lStXK581JjgpP0", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112085940940792069161\">Tung Ha</a>"] },
            { photoReference: "AWCwydgiwBO19zKgPby2tl-7VT6HPNuN7SvQI_68ccdRsbsd2P3csmI3N14DQrytctKlycgANnlKcqcXFDNKeA0tTwehcxuzzZEmH18JU8-GLHYqTMlqNELTp6ZaLfjJieWlJblKENDW5n6FLeLjqpxee2tOvpIuRjpENt4zJHS5Yvrqe459Fi6jF_eCzSyL8_9P3yCHFo3DHwZRtxuTcOfPpANEh1cAXfYGSKwJwQ6K3-VQG96DsJxRtWgJRCzqrH46Zf8lDPoLjdaMRLHUsg5X-96M8L0JZ-IF2b1uz90J8y041_91hQxcSkmjKzSqAc_2vUJNY6n7JAFHs1PF29shwo8BdteL3iZvuJNIhqu0PBK4MHCj6h8bwE34fGU5iEKiSijBQ-dBuczCnEor-BcJ97Y17ky5_jfQ1UqJjGEIiwkIr4dZiBCjZswawK0uog", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104238499293246040439\">Junheon kim</a>"] },
            { photoReference: "AWCwydg-FsGD1nqzNE7hqIIBLcC-0LDXZH-G5z7Ou4OmQq-MyL04IaLX3h_4cXAjzM7S7saHFHwl2chR2Yi3lNqapdIagpPrNVvUD6emRz8yIGaeeSC1jwA2lXtFl-n0Unly3L1WcY_Uez3cOIRDzUOA8S-D6F2NUDRjj_uJAW--b0mlPj-wMcKZGIx89s7MZi5aGS12PNdx2tB94Ufe7v4SQywr-BwuiwUm6_PdHBeGxfHT_oSg4JbQ_B5A9y9WFmP2fdpKwdzxh4TpT3f9lLn1-WZrdmxImmy8Up9dmZ1B_k9ZKW7nTvln0JfmvkSdGkSMhOStVflusQe9-7xHkV5smGpDfUguW3vim6bJwQsC62hU3KpBexHy9ZhYX1_4Lfant-EMM3tms8HwriIwis8LaL51_2y18-wKbMVjDTsm-rOGbr0", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117546265785559946408\">Nhà Hàng Phì Lũ 1</a>"] },
            { photoReference: "AWCwydjPeJwDV81qSaxL7wlt0tlKISQd79C5y2R0c8AWYi2Hu-sB6ubGqIQdF8eQhax_vmBbIz2rTlCv_dNeo4NJnA0LmL79ZckLHjLs93U_CsjWZ_cq9_b_QQEXHD-yYLRuhr84oBQ0xwwTjUYoi3L1fLcTrde2RhERpsWvWpSy51DuGuiMgQJ2okPhNR5M0-5y3ViE6NghBk9dGQEP7zArlSkaRjpsEyaJ-MHRjGowudTWCo6DNFb8YbsscevRma7UsdXyBsQNo4jy7mDn4cFbqIBnKvuSEHAlMzKAw-rm6liOSQoBh7fLD2GWoHUeKb12JMsMxxIbAgEEy_Ery_zCvMWjP_Lnw4Pg2-iHdA0_dXaDR9tcpoNJnJ6GCtXNs-TWIY0moJUUODplzAEdeoN2ADibDNa8QBILuB77WqmMZMJWaKACUX8cWfDSXQw55O8Y", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104238499293246040439\">Junheon kim</a>"] }
        ],
        summary: "높은 평점과 긍정적인 리뷰를 보유한 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 음식", "친절한 서비스"],
        tips: ["직원들의 헌신적인 서비스", "꼭 방문해야 할 맛집"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.philu.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15508620805497968182", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Phi+Lu+1+Restaurant+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "C.Tao - Chinese Restaurant": {
        photos: [],
        placeId: "ChIJzbeIESoZQjERrRjZlUpA9YU",
        placePhotos: [
            { photoReference: "AWCwydgHsgs2E5z0IOE8or7c53Jce7cl1kDbkf55lZOdWO-T0ft6oRF7YlVULCVjjJG6Quj3iWZvwO30qoOHsQM4KfCxTZUQNobIgZv6-dzGishCP3jxYNyfRlEAmXCAuSXJbM1cXrdRiFTNNk4kXBBdue--FJ2GxMqTjwpT4KVeOl0kRPKTY75f5euIXJ_q_htIjFjYjrY2N0pdFvOryxqm8BB9aPqEgJYYqbnw5Ey1rlC2GXWIe5-w-uvS5VweTtWXAAHQfBbeIPXuPrwrqpPAK11c9uy6SX405ApIi4SZxAVd38A6txcrYJUV0ZPYDnKwIwTlVI7Mnq1RAdqxLSDTRLQOUjleAymwmIX8jebnUzPGWgaCa12yePjdncViJVAty0SWsbTfFQNUsQg450XYBigxIZzrRzUYYb5N0uakxTW-Oj4-", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103663221551976291060\">이병훈</a>"] },
            { photoReference: "AWCwydimMci27AIqxIWmrS2CUcu2qOsPKB2ziNY4NAnQS60fg4lfRPTsPx184TEYXZbUUPQXL8ZUzBSF0eUBVM96vv_PyGARjXfHNz2qRaFR0JYs5qOjKQ4hWErSy3PcAADvWEYJW6YCENjh0-p0IJcRje5YqukqSJOIEYjBGnnW1jnlnYqer0qqcLhiZm3RtGA9kWappJ5vh-0is1CUZe1mXqLJcDfGxc6eaS-_SFMaA1z40qxeLNyTMYP042mbwq2nJnf3thUu-j12lsHBH9tohGTggj3hOANrsjOJ5wTDpK-v8SLNSHvY95mPcJngjrtiX_o15XCm03j7crJNqxFUYUdbFl8GxjhEOV0bDsehIAvgTdTB8FMexyZ84AuV7Z39kIn6HLGL3guNfu4mqYiv7D12kXnbDl7k96ZDf3NIy8n3cMW-", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112174377523492130597\">C.Tao Chinese Restaurant - Đà Nẵng</a>"] },
            { photoReference: "AWCwydhaJvP-BNzweCid8Ee5fYlv-hJzk-EIcrkHiXewL3TC5ordTmJVqSww6n1WlFiUmlIyM92_VnXZesCRqOosw_Souv40rykXC9WVqvEwGsQ5ak3w5wki4aX8_5VXbDFGg4WwzDD_gR3sKeno4TFIuH-NspgXq6Omy0RymJ7yO_xkvezyG6jaCG-I2_3kJxisuchZnqqKZwhhIMRk5WOlHLoAwA-bro5e2PtLuGnbi2-NJaC40WfQfSfhKrlgBkMFRPFt2pfJWlibTiFKLVWRzqik7YyXzMWe2I8jPsvJSUbt3l2tu9EHjtpzJRfSWS7ZGXvj4VU3-pYt1rZ_FmQ6tKkjPdLmoWk1fgcSdMGGXJYyfqDnKP8E9cLUr_FYn25pTizdDB2dw1p9JGYkCMFpTE5HVB7yJBCESDH4LuQ3meE-qS0CQB-i0EiT6QqpswFJ", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103476857204650116585\">Su Marie</a>"] },
            { photoReference: "AWCwydgPeT8HmsWDSR3mtD6oT8BQuL44hpk5hmx1rMHBAr5nyZIykLwzQErV2x4WJwpuqO_Rl0_oBI5JCoAzlfj-NkLs5bmod3ZlG_KN_hZt4DDF7Oy3GwXGrLkeSthnZHyeFR-HjvhzN340SsnWYA4Qa-1fOkNPx2Oef-grsi3txPbD72LEK2zhG9OqqRuaGAGfjscDfX6SFaRiHepfOJCoCqj7R_dj85NuQ0XJvecKCBL-yuPx7Sy3PL2S31T0YhLMP0vWMk_OGzGIauWAWTI94beqTGk-WAFGH186G6yuuW-g1KPPFF-AUWxeOKlwXc19Zonetv1-xNDuW6Kb8REn4zA968Ma2YzdR05Z_-wSKY3O1NAaKDtOA33CaLV9lZU8BUegmFfNAMhSjOIlJKOW_lC1z_y0OiRaBrQwjLthyyihPEN9XDCDoA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113889355534334290543\">Hoang Jking</a>"] },
            { photoReference: "AWCwydibk63gWp9-bYlGn6f0TuxhiISu2YMS_G48UohMcqwXu4bJHJvEe2jWRvxEpAOt_dRJz0pxnq9Oka_crL1NClShxpRr4NSJBYUWVvAkyGxT_HLX2juARTe4IAWCL2aOIKtn0etjSK9sCRH0AR1bFy6HCbxcGIsOv74p_XztgoSPA_W0Q9JwU8ApLvgqrEUrBd4Xbp8C1K9demMtf3xvSlBQmiMCP6MrxNmQaNz2rs63THQoG5z2Ew_60iCD3pE7s4kMZnwPdHIVQPiKyibWhF3mJ9t6kI2EdiG7jluQiGXL9uzfkJudxKI5-iLP9hcmwoIGAWLXNBNfAogrBXJ2YdBdFXNauoarofynU-dQKt590DoBxze6sYIeNyPciBhnu41cOj7UER-OZOinqf7--o0_lhVbqfQBGiRkf3-6MOpO0grGqaolJPdQrZg9aGr0", width: 4800, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100791362936695331188\">Hoàng Uyên</a>"] }
        ],
        summary: "높은 평점과 긍정적인 리뷰를 보유한 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["가족 외식에 적합", "뛰어난 음식 맛"],
        tips: ["가족과 함께 방문하여 즐거운 저녁 식사를 즐겨보세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 10:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ctao.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9652692065424316589", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=C.Tao+-+Chinese+Restaurant+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 골든 드래곤": {
        photos: [],
        placeId: "ChIJAUPrsN8ZQjERqgHLRXnVrtI",
        placePhotos: [
            { photoReference: "AWCwydgUgZYuqhS0R3AqBRf9Stzx37uNIPG5h6-hC3v-O6zzTFruduTlTo0f4Re8sFSQQNbBDsVZc5iBF1sdjJzT-_smq8RQ7motvORfRz5Wv2a-7oA1uQQcr1jGwGxu_MX-y8uZOzvJ_PKIN3SLmGL_Bq-CSkFehao4tA4gfoHgB7CWXRLzSEHImaW8TOrpT7m5GibMZN8xv0iZOpkDfIt-gbK2QmAZZ5PMRLpEz-v80JgzJS7EOPIl0G4HQx0pJ6MT4Jywz75DL15FWRsopUgopz0CoblN327c1GRPuVJDUOoz0ACgWIOPMjzADdMm1POMNE3knucXOWLHCN6bjTt4TOJHGQhDlDsbJ6EzulNKz_a0_Ty3gvu6lzumi6i4vM_PaLhfqujRnVjVmxYf93LZUsB6Rpuue60hcFx-3tz05J9TfA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112472446030638640453\">The Golden Dragon</a>"] },
            { photoReference: "AWCwydhBY9-Xbkzro1pyjtNt86CsNxZoceQLhQ_SAfcmIWg8hvsHaGtex3gprBBPPQyJZMGbbCzoZD8K0GxOCbtXC3AOv4aaMIz4eVDSSADntEulTVde_cPez7Uy7fPprjF3rzgGqKum9gLGQUBWAXLq12MjQ9SAy_do6XYDiAVoBXZ86xJza1Kl0dEdGZpuzydgGZYr-LAyIo0XH112xqSaszBay3hLOVQUBbzv8XC2RJl8pgICWzPrJAEyIOu39DRr_XE0Oc96fFk5OKx6H-aOsmDvd9vFnCOyBdFVYU8TXcVQi6FPw2EI8Zh2IQAaTQBryUlrjbYeDsVPxpOLjuXFOnptGVCUdVMM3ggAd7FluwR53tYk3jZ5E_iXsovjF0Isos6_TjBLfoWhkSzsmGG_czaKpGbRvRF1oSaKxfKHQT5X6RSbX1jA5HqnbMHpyodP", width: 4624, height: 2600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118405580402153964798\">김이루</a>"] },
            { photoReference: "AWCwydhg-BqRixf_ZCC4cqq0wG6GgxG1lkJEufxoZccIBHkVcVchc7W71hXjt9Xwiw4iUbEY9qPY7zH5DSjbJ4DWPDxeC6rN8QP_b4RxvO-YDc7-SBG33dv2gFzL6xINIFzcpVVMvCk5iiP0Al1JfyLIFjYXoMLDZK0u2WFV6MCJD0FjcMjoss07VAMqc-JGGgUg6zb6IRGRlplydBRRY0lkkV7OCff0LwavgTNRqg7sS9se_eun_H1a0MxsqZ2YdwOu7p0iZ93ELs2Hyl8kLQBrfsBp-fKaYyLmW3PxNuq-URtY4ho8MV3QQ_qLXqo5nYyBkE1alJL4e_Hh-GJRD2MZTCfDbNd5m9vnJbDQq7dPUaQzuIWhk8sRITxmE5zxCalXWtLqoWw-34Adfl5ICo1YO79a06SLKfx1r5GvHgJckNK7xUDUK5k-TjLN6YpllQ", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103834263688397028658\">Daniel Oppa</a>"] },
            { photoReference: "AWCwydilk9XrlEic54n5fPDbpqsA2SBwbnSJfkDhfWJhkOOsmLeV_LmVcPszTeDhsM0ER6pMOXF7nPatKp_zsv98bElPdaQidKnnucyweFGgQfVS0_FLxjaTpe2adtA_PZuEaMw7tcv7rXrlky_ozXpf0-2cIlcq4O8HgObISB0Zok8h_FHMcbSAP9TrLM9CguCvKEoFIr2zoYiIteZgk_u5nrd-iz14AJFCpibPHO_XsOp7SkbyMByxd87sNuYGzGQzLT3RH_cFhumfPP8yBdh5paYjXWIsjIaAvenEm2x6RFaAGdVLfdIxeJpgmhHH5JLNlEXZJCmTULpU7CaHtO6k7NSCKSHwJ4VRKj1TE7rguuUirW0M0BOXYx20luptRrvxdkcFcwExnE_2edOYdojc4j092Tzfw701H0WQTrNTEen76emVwcXRYAtqwB5EXg", width: 2316, height: 3088, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105352189433961341838\">L S</a>"] },
            { photoReference: "AWCwydincDb-lC_gX_MWh9czaaGqy1wHe1fYyVbuoF_j-gVBclI_22YCpqk9Nc3emDIP4XR-EtpAMv5X3Te0jhZOb_eScQF3Uv8EduM3QM15Dsy8-kQj_dsMJwAnRT-wKH9zNkDOcwPiAdNwkIUmCd8BHu5TrUOuUbe_XbB_R7I9_TRHHcnxUoHfowb3cBP4M4Q_20tIMJ4ys4cCodkX2peFYNBG9UTdYC36Gy7y230HKkhWMSMsnMr8yzxO6fmAsnNy6-p3V2Et4057xZoZYJhSRCcajE36c7DWYcQBLMkje2a2-8-rWK4XEtvbWsc2U3s2yUZL23YIlZYO8LtUlYtDHxob81-jyrZVjLWYP240riaLnbNI6Aq_Zhk6lqlKbzZ3uGwVfoi24BsJFAgfRFvcOnIc_ucDUjJWfP0af7A5Ss_MOejIyk2dCutK6KQeRRIL", width: 1768, height: 2380, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109146624629875520256\">miles Yeh</a>"] }
        ],
        summary: "주문 즉시 조리되는 고품질의 딤섬과 다양한 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["아이패드를 이용한 편리한 주문 시스템", "주문 즉시 조리되어 제공되는 신선한 음식"],
        tips: ["그랜드 머큐어 다낭 호텔 투숙객은 할인 혜택을 받을 수 있습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "딤섬 및 퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://grandmercuredanang.com/restaurants-bars/the-golden-dragon/?utm_source=google&utm_medium=organic&utm_campaign=gbp-listing", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15181306110751211946", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EA%B3%A8%EB%93%A0+%EB%93%9C%EB%9E%98%EA%B3%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Dao Niu Guo - Lẩu Bò Tươi Triều Châu": {
        photos: [],
        placeId: "ChIJXaOtawAZQjERg4TYJPU_Bmo",
        placePhotos: [
            { photoReference: "AWCwydhSLvyUP1UIT7lbby1LOfre7nwq0UmpgDQzR9aK5uaAkhUui8_z8z68qI1by8RcWtNRTrau6LMgOyB8eilOrFqxf3lx7k2_8nR_KkuJbobkpgobaR27wUU7Qz6pesHPJCivb2uM38SlPuObgdfWcKjaZqX2su0bje7f70PAi93PTL-baGIKwMGAUS6SdA1fBLxuosb0xkxiHhUgx45MTyK8iOeNn4FdHHZ9o5hAHYSdiTtpJ8mqlb7TlHv8w4Gv0pyiaE9BCbCFv5uhjgLuhoHuSiVI9tqulTD-GFxV05fG4Fj-Nd83P3ato5S_T6QX4ezf6P8J3HbFGHE5C4lbBMxVlfygr-pV9-_H2iwaxkjzdsFZVqReUgBpRxaiuIg3RmMYxtebDBPovzWbVNMW62C47H88yulGNPRUB8gYz8sRJwi4Jkp_kmGmiSQA-URP", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108057131650669883927\">Dao Niu Guo - Lẩu Bò Tươi Triều Châu</a>"] },
            { photoReference: "AWCwydi037LrO5-LMEwPBoDR0-0Kqb6buHf38ZiFY3AE7vzrhkaqZo6kxh7pHnyT10vG4NIQ73P_Fk5mVxxeePisjGp-hxEVc4c9-2A7W62o9Aui-NMfOq5IMPYMbI4CwCyEcrKavjhNy_rb7K4uoYK-rDFfXcE7ifuxSQf7A4pw8AeahmqBaKNqqb8dD65ijJWlqppnjvN-YxRiUI7wFBUbQsLjSlxx5KltdKkrvnmMSUoviqg0hqaDGrhCl74pQHlGZnjlDZHy7ZG4GlpuyZPz4YmCji3mHUooTSZ1rssvW8j8b_Nzmr3nlCt0RuQ30o8SB7GDvM9qXgU1Y_3SNe513y5VvnJPRqO98j2qse4cCK5HVe6JZnI8WSokTyFk3_va5kKXRjESLF6eXWzh9v9D0lGpKOX7jCqdiObI5g5RzyiwgrX_lnzPIw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104769834715512352451\">Giang Nguyen</a>"] },
            { photoReference: "AWCwydhLXigvB6IdpuhO8yA1eRPYMqyNZ3CfGzy2sY5rhalTBus6PRLk6fZ-xK8DrgGi3SkL5UEbgsmiBH0IxPkwxRq6RbGd-Ydfmv7WBzJXzk8_MSjdsuKFd-4N0ZL0XoUV6a6ztRwJwtJTxaWHckpCVXAzq0g--yJVuLQefTB9BKK8LVPJiUf6Yy_EraDbwI8nQT9T_M21fnukKBuQf4InPDH4oINjxlrE4EUjGlY2D9Cokmfugj5989lYLAEJRitOy5zaJ7Q1LR0c1yCJsnVqDfc-WdsyB9ImIoKjaggZF2BLKYKP_z-jMVOj6NHIMfci1Z2tOxdjOCWR6wYViPVsEXbPGPkaxF3GSz8mskq9HhiyIhWaOD1nCPJwU1xWs3g1QRSZ-Gkp_GyksnWUkR6XNKp6fVykGKBh0pWVry3BPUE6JqnEmQXPo3ONpMV4uwdu", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108057131650669883927\">Dao Niu Guo - Lẩu Bò Tươi Triều Châu</a>"] },
            { photoReference: "AWCwydjIpiUr6GZ9PnmIyLuXDAMt9LZrfZsYeo228ndBbTeT4rjr29xvjEkVmY9Mv-yVR2XfNr_5RyHqJz7jXaFXyrZ3unSGpTRydev3Z0YjfGJFeBkfbqDAO98Sx6eiqEHTqxU12vPYQxK40-4SdwQg_LXNZxygzVS5nZf6Y8Ofit4Cvat0hqG82znHpNIgYoT4yz6dptzVv3Stqtz8fr1gTntkPZBO9j_2vsOmpHCYzIy2bCrJmWCDyutG_gDRhCyS8rPC8f6Q_rjBcM9ZGz64JLPuPldCC8k5-Vy0UfJwdHr5AXyWUvWRNsKj77yIEUrdUlezgyWDwsWfg6rN4R4kj8HgfsoEqnpHeQTT8XRAbRCquesYxbU6xFAD7Tcg2Rvkj59MLByoTDKiI6vap0rWE5u7XMdyekqIZxSuvrKqYThIZg9N6eRV6T5S9UGt6cBN", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112234261516289213496\">My</a>"] },
            { photoReference: "AWCwydgGL2pq0dbcAhx-eiGY9HGTA69_38cluEHfyZTgXliEVyIrW6Uq2hC1P9ep5xVspIYHlywQ5AfU7Dn9Mz2S3XLQrUXLaLSAF4PhgtRVkp6kkeEZlCz0WLyfEE2r9gv-uqj5PHevhGfHPJ8xFGesa_-jkqkYXJxZ5rnD1xxChJjFSNXN6XpUo0crtAtXcDwnKOzJxnsVnKUP7qN8jv_o6A6i1aBmf60Lf7PlXk0v2ngs1ASse-eNNIyZXCO_FqycBwc5OhyvPPwb04DWVt7xbejZBtITsApMNd9zrrWPqdkRQfTqxXu7-kJHSKI0V9wV8ziXlkRzZoS0aZwDzDe2P2DGEZ42TC2-6PT-Lk59DOwF-0wW_8q47dr2Bj4AfKMi9piK01Stn2XBDFTYl0wd-4KXtooJA1-GWC2z2nf6F2KVmf3DRi8h_GwLYBydwg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104814877043531200961\">Samson H</a>"] }
        ],
        summary: "높은 평점을 자랑하는 맛있는 건강식 퓨전 요리 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있고 건강한 음식", "열정적인 직원 서비스"],
        tips: ["건강한 식단을 원할 때 방문하기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://daoniuguo.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7639864139998332035", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Dao+Niu+Guo+-+L%E1%BA%A9u+B%C3%B2+T%C6%B0%C6%A1i+Tri%E1%BB%81u+Ch%C3%A2u+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "템 하이산": {
        photos: [],
        placeId: "ChIJN84BNSQXQjERyy7N3rDXisc",
        placePhotos: [
            { photoReference: "AWCwydiJhVcmpuq3gDrrM4en1jGMN3c5C9DhLlhKvubOjDx-PGT3soE5wWVhfT7pqDJ0A78G3oCe6tVbbC9qgRGOP4oObI6EVxk4mgWRj-ZVIyIyiAQQ-siW5VuoFHpzbb0J0n9Hm77KL2fGhO0IMqXsgeuE5uv0QYZjouG97Qop9lKGOD95CExeIp9JJRFEOUX_SraZIWuVbXfQVIwOmLFcNYuU9xWksFtQcf9ivksrB7rEfIuBOKYGdkqYqaTs8cz-2bMYuzBPCMnPf7fuwarClKwgansQEXycdKnqL4h-b7aqw6tnGHvIb-amYkP0PBHoWu2yNhYgCsqskPG2aaIl4m0F4uE9KltOQg6SfUMLqzxDYl9kQfzAiNGCYk0QsN6v-dpbRq-8LDG7b7eJNFwoMBE1i_g7jdlrqz6bK961fQhNNw", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103291030878420299194\">박막례</a>"] },
            { photoReference: "AWCwydiVESPMJWo72rFgDnm4zmn3W8EAPHjYGVlv4kz7XrSiYcVMqZv-gjnQ8o-88aXdOwdiqUbnGVEJRU8gqKnsAF_ul04SyimpW8bKFaP6yronMEcSd87Ky2YNrU9j_jgHd6gOEa3HfpRvvbadLL9_exSalSq1U05d8Hopq4oHQtm-jUh5pCTttW1IWQP0z_km1Eh9x-_gTyin5eDr_yQI_2qUdubz-lVeOEvgg-eJivrXTvsmsV8ibPI1ZC2gb6tRCmJfnzm4jRFl6hXeXzQfAUlG4k7Q2x8SJ237GHPK_DTt1JFGUeu1TGlUG_EnNBo4Ggof1tPaZ3CDF4SNgEcWq5lo6bdvyg_na8NmsyyOWUQUGTwVqcvTl7p52KM2XmdhJEyFwhWFUTAmWTzSqAE4TJWXfXB7tciimla9t8bFRD-cTQ", width: 1701, height: 3011, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107333946508976910532\">Thèm Hải Sản</a>"] },
            { photoReference: "AWCwydiDg0GDEBeweD9O89K0W-Wz2dOEHs9AZFHcsPmSuqxC4OfZW-8OsYLiv1r6NJgD4w8pJaW8ycIDuVCxRR48Rzx5ar6jXhlzMxGbd86doSL3pusXGuIGuKe-zGBGGqfBnPj7AlfJBiO5zUnc4v19kM3jmAVC_f--t3Qoqa9uF0a_BL3ri812h3xPN9FGpF3IM9qd5y7t31-KWBV0FJDPhR45kpML50n_8HEFMjrqG9fP-2_pn8QJDuD6tCo_-ByZgg6MVp0VUnS2gO9WQ5vD1nxAxksJIakfuTlYRlsjB-ZBrHPL9_iKDZ-sTOyP_FgVNS_bXfaykmd3n6KAsY1YY3OXP4m4xj-Bcqyh9CfculfVh7gKZ3cqifYm0I0mUuWJrd8VxAXMEhmgdBAXEI4bsppUfkrSfV4ugCCCzgRGNrqp3rP1DTsoHMk74kfrog", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105271797569331706822\">Monica M</a>"] },
            { photoReference: "AWCwydiCwShEHexHFQmlGhKJlFTcVMlwhKC-xzBDnMdTz0ywR6ZcKJ-81UNxhtxUa7OqtcLWMSLMd0g0zjsQ0S27IlQQPuJLKsigNhoJU0Op4tidJJ1r5XrBm2oouXsaPLbwfwAGUeg1PJTN88uLY4o9P0toeVdxzPTlsJVsRiH_C5RgtJfmYxMYyLJ_k-1nwQqByZvyjKkq2I0-r3R88l9DLn3BmPCg5i_Zqwpr-n3q4ZqLmXt-Yf0Hqge770IYCzS3LUbBAPPC8_XAX2PYBxgAfSSg9zzyQfRSBGqPYX_JleVy2enlNjANxxFtIoKm5BwRbcBZcipPyDh0FwA8MxcCcf1vyaNFJQF2amctToG0rtwv4zGMBM34cFLmxxYzIg-_OiTMg8an3fnZg_6G5-fB57COgoM6WcvLnbBYebUUNfhsjA", width: 900, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107333946508976910532\">Thèm Hải Sản</a>"] },
            { photoReference: "AWCwydhNDOV2YP0bLoTH0_Lb9tTBhpjypW_L-rkTlAMVpBfTXrM8ecujj65YeEdT1Lw5PtXcScAiNopcUgDmTI63qCUhMTuCNMASWWW7Gj9KsirHIj68DnWawH9sAv9_dzpa_VvKjenNgmNd-A5NTtFWsM5eCzPoE6wsnkbrTZURZ1QdzABVts-B7qmWa5X32iZn7Q3kbhsX1WwF97w3D8Wo-wVxRSqZJ37b8SB-lvmMyPL3i-C0UCzIeFWJ_fl5LxSQIt7ifh-8xMCxaMDklq6tJdPm3a-ufFe5V3HiPvSR_80DoWqT7LJJ-SEHZwuu8tE2YVUZI_skR9UCLcJ-OgAD05KXdFHi0M-Yu4zSpdzCAKxBWE2FGwb4-7jWFe7IWcgosnxx3dB-apJtUf_IEGVhN26BvyMKXoxDVNTBk-Z7y1u7hdD3Ral86jLWndFDjSbV", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101345171118030930787\">박다은</a>"] }
        ],
        summary: "많은 방문객이 극찬하는 검증된 해산물 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["4.8점의 높은 평점", "10,498건의 방대한 리뷰", "뛰어난 맛과 서비스"],
        tips: ["방문 전 리뷰를 확인하여 메뉴를 선택하세요", "재방문 의사가 높은 인기 식당입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://themhaisandn.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14378541914985934539", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%9C+%ED%95%98%EC%9D%B4%EC%82%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오 키아 레스토랑": {
        photos: [],
        placeId: "ChIJfb2A754ZQjERwntwhqY2_nQ",
        placePhotos: [
            { photoReference: "AWCwydjJo8JnpXncURsSw0qWUo5VWCqxaPBzN3N7pzwTbTT0pYOtMhZDJ04ktLuCc7oNMh7BOaevENOfe3aEJGT2aviROExyYw_EO8q-8acjmXrQd8tPYTbi4DCKhbsTAwV5VTAI3no_3CDm3SPx_lgFKoEVWeC5XHGXt9zplNU116jLvS-PhG9OHJUcUJ-zfrCoxk9mCp-xRMVS47V0K7U2EYXAK8HC8KFSAQLrhk6BOjvGVCaTyKDNTtrDz99J_AvIb7kJq3ycPa9WBIyLrwXCaSautpsYUwsiQWUF6DRFiiUjVoEJ5T8eKwg6JaQhykCpERWWAijt2-ptxaLH7Ug1W0pSDBd7Tf94q7VnazQ3OJSxyyQ2Njozo_fGgs_nvFG2XPBPxsh5aJO17OhTonoqa0iz2tauiIZUGPx-MBKsER6LkQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104415077134143467408\">정이</a>"] },
            { photoReference: "AWCwydjk6Bibm-4SY5P7AU8AihDdG_bPweqCwkgMXluc9ektLCaabto4uzpJW8y9MBp4MNpNbTqWZ7ok27V1eHTVW2bpHSKYc5escY7WOWxVxUdfFEnU97kxRLEychX81K5Jee-ykwVC-QC8kM5U_XSyZK-HNO0bwdkcsPzQWhxLhMHthgCmXI90WK9Q9zrsKpkGvscaZR0NkbN__1lgBUhZaRY3znnLSwqHH50okth0_07mMbNl7bqaVESV804C42_fqPDXuLTpUD-NVsu1byzhRlAnYvQNp_wVJ6jPPpWmx6Bh7St8PNZl_G_4N-V9judUc5h3d4RfjnCwDEP2isA4YGPpYyT6cgTFQdL2T_eFJg41ueZgCZAB6emnVVM2fbQCmhxIfkk0B7ho8wkWX81o2TaEcf7V_bg_lEdmSME82eTQfySH6If5CDcdeTBS0g", width: 1326, height: 1317, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115059295532305634201\">Nhà Hàng Hải Sản - Ơ Kìa</a>"] },
            { photoReference: "AWCwydj8HazeHXkyCOyRrSP9cW_piOnvX9P-w5Ic1QBsE-CMZOlUBC039zm0lO5A-k9dJzJBeSd5W22fEj1IvzasIecbmh7MIi72sL9VOfn8y8XqQ5jtap8jlpgPYSzs6j8ZOYTP5bsP95LzZd4LDmv_GCq9djHvr7Q3zdCGtucN3_9e78yMewD-kXgokF8TF-AoferUyOCQAiyO2MnfgNPmuoZNroKblWwnqRCIZi2n_mvVqCCqVMMA9kkG4EzprPGoOwHy1Z2YOFHTASn4QcN49RsJDX5kfdznKahxCGIzZQ6BDhCzL5CaR9_p246DHdkoacwMYYRqizAehUxy12q6qj690YvOSoJQm4xNpEWrzLroaYBqeBCSdKDhZRfP05PwZtOC3Ix7oBNDqhwrsE7EFBZyatEuFvmbV1lfFUt9EXnO6EdvWoxash3i4huTLupw", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118332520918846541574\">한원주</a>"] },
            { photoReference: "AWCwydiBmexuosGyDRVZPruxX9qWyYEzBjqN4aMSaLuFKVp5n31ZLoqlxZLV8j_mvDPhropxlEpYu8lx0fcYye1myjjVkzekw4iRmugra2auAbMB-jBSaiUIUfifLq5Z9m5DYu6bbdzVqIhZwDKYbAZGUqhWj6pZZ-okuIonwtEGN_tzB8dWY7rlMQxumYgmnNbCFtfJk5d9rYJqe8ZU-At6CXgtX4gtCqZ49cBiC7pXBj2nlZ_wZn9FgbTrQ8xWjGwnEOMgLhoujBBKg09AcvPv9FrmmBr9HtpO4xLioY1-dVYqdlUGfSjr3ifdtAlFUq-k1UvsPLxch8kCD1794u0-wWyqpecgIIh8SIKrVYTnV4lkyrRgBeBmyDCS5A6pVndRHk85YHZQPOc6irVj5nUgSffsuCzEgNuOt676_qsPEFDLdZdzFVNGQBiVmoQxf77e", width: 1280, height: 854, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115059295532305634201\">Nhà Hàng Hải Sản - Ơ Kìa</a>"] },
            { photoReference: "AWCwydjwfADQtVhnZv-fdZXMfBMsf9hc0MIFgdJ4mEnXbTo-5StePf3aqKZSiwXi_Ae2SluF2T0WNQVPzxf1puATJHR3KcchstHfT4ABUwqtJiug39Sfa1QGyVkYg772cOZHBSOtRJ-RS2v0Uf1fscfj6_foL91gR_B0ZqML7OFDPfpItSHrPcSCEOyYomR-r1RbStSeEHrQOHsDup6WDwM7DUq2Jd9i1vZnL6QsQJqYJYdHojqk28gLhHuPcwQpnnPOZ10y5NdHV1-AfvdS3b00qefOHLIwN_j2n6dgsTOkXZwg-Tbw5hIX62DdeR4p4DvgiXE5fcPzxWRN8IW3oFnSktE3rmAqXKCBPy4Gl4mT4l8040NzpSuvwbFFfQcpJvcYe-1v0jHxeSjn7YRL81GVmkSM3oSi2N1euE0im15tTTaP2RE4PqxHdyvjmQ28Cg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109800691962736669442\">이지은</a>"] }
        ],
        summary: "풍부한 리뷰가 증명하는 고평점 해산물 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["4.8점의 높은 평점", "3,100건 이상의 방대한 리뷰", "매일 오전 6시부터 영업"],
        tips: ["이른 아침부터 영업하여 아침 식사가 가능합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:00 ~ 오후 11:00; 화요일: 오전 6:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nhahangokia.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8430235641332136898", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4+%ED%82%A4%EC%95%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "BLUE SEAFOOD restaurant (블루씨푸드)": {
        photos: [],
        placeId: "ChIJqWeuWAAZQjERyhWIrPmmmig",
        placePhotos: [
            { photoReference: "AWCwydjQ7s8zzHfUmc2vnV8lRp_YWZaEuQCmNS5Y3utiSEK01ybPWyMt-UvI0fkuqHx3gRkRVuTwg7tXKzAYoARH6aWLirceoz1Fhi9nPflzBaGrwRqNi50H-0mKN9wmHwR7nswiUCzhXbcBGYJaNSKMd1X1cx8NB9BA-n2wEQ0lWz6mccqnsFhr1_d8yvjTQwszTMMsq7UJVwLNBfiWLqOiYvsKv-wGCgzPXytM-L-DZHifbM-FUNjmLIy3FhPAvXKVHLNx8AZYnndQvGq0CXmlnpwAXtyZOCW_shrCrvcmtmcEjFM0twX0f5nZ1N-QHYMCc_0trsfMOJLHRUYrX8erfaUafTrI8LMYazWd1EfsOh9XL6TO9nbTNR8mYrRw0aybS2bPH9pFE4okvCINLbrnopJ5OsU1s2HQ64FDMdGEmIFMDCI9v73Jlfa4_4B-D5I8", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100367400824926852836\">Huynh Hang</a>"] },
            { photoReference: "AWCwydgcAFuyhElcQz4ZivE5dLfbJ-JszYoVM2mH_0eZQ5i7obIo1gve7hDCNbkyQuByUW13l6Zk4_Lu6mW8tvKLS-V_tOecBnLqLL3kD3jp_mh4ATDnbE-DyMrE4UjDijtfjhdDHhZkdDOlGrc9mZ23Jw0Hvjli4VEKd10Fp5zW-n0A88k-AKzQIx_QIz6DWYHxkPOyjq5HLEJJG-ZgcGnWJwZ6o3DihhRiHbVuwgTuwF9xnh46kknGDnJkvA8bwQevkGmkb9krhXNivKmXA2IKNFK0CFgB9TShnxL5qeY0O2yTf40NSwNY65hmuIB9i8R7RRUucUEaI_EXoel__tdYRRIDBtp-F00kAh5psEHuUchPdV_839r3-S5bnUfox3d76A42yg6Jnp3i03_rlkEOCewTxfa6CxfE5HADEuFGq7AZbXQDxP2-HkhHgw4n566O", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117848476662226627352\">BLUE SEAFOOD restaurant (블루씨푸드)</a>"] },
            { photoReference: "AWCwydjdyV2UilIHSzZECyb_06X7-c7fZvQegVOHO1j4NY_7AfgUNOf4Gh4qaV3gtQGNqW7oEcvJK12vr-TLW1rdykc3r-1jbpiRtiryfB06TC7KEoq1HfFL9x2xbfrY29BYPlohPjd8ax5Q5QLbFwzxEHmd4xuFcgLfmyBaYbpn4_hD-JDTaVj3zxKCsZHCudRDoTfRJSt8xNrWogzEdh2Ev-bHsBt4DOp7HV3WMWaurGWA4WnbkL44cth0OEHoCU3sByH6-U9GkVBkTiZrP2T8wBnF-jhlY7lnhcWv1ih02Bf2vzwz972hn5FEPHVrl_z89I8Wtyr42UBmioHMNOsnCrxnxiCnmJM63t6sr-lnbEwzA1sB7mQBcC8BlDehsBSQHKFcML6zhxGyDYp4VOQMDsN0dZXSTyncHvcxtWt16Q-EtTky5bVLGgropXr1Jg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115828733969144904708\">윤지훈</a>"] },
            { photoReference: "AWCwydibRfur4RMYVKoJPDjmQm9HRzbuyyvyhtyx1_ozB6uaiEH5UCC10R4Ds7mamt1R5odHww1rdZ5t4skPeHEmOlvAzUTMKa7UJ8AeFWyfZ79Ko-JTkplmjy6Q6qaobWKWShSYFbRrVHQaBgmdUxvHBOjiJqerkiiM4DBJZd9_QXIMx4X243XZcU6Fr7OxDB3V5YtpJuap44CKPCE8CUEqeXe4vILJAnxGUDpdOIr_qPnoyxzBfHiIP98qM_GdqiFOc1yY5ZARPGNzcS2pYdBR3n3FlK8CST9OOKFq9RHbZKxqxXSEFlaTY4LKxFZHXjkXupv-zWtG9iFVTEFpnbzyX4LgkjVtyXm3b7VM5fW7C-Qo8DUkxeSFo4KCUZBhCBlLZyhPoQDCqoM_rshyCwwPVx5HFOarXNl4KYSnQR0fw-wkrh27HoGJM5q7A9j5g9L-", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111123182563796816365\">홍윤지</a>"] },
            { photoReference: "AWCwydhhDm0--zws2T5n0WIrpNqRaxUMNAS5J7OTfbVy1BhXn82cuv7QJlprodqOIkHbAaocOe1BGCVjQUGzhRsBCBVy6CKKwvqLW-43X4Lsu0_XADtGWWOra6ikQHuytsKKG58luTigI-K48g5LUd-cuEGpIwZzj85BFiVleJOBohwDbuAKB1Qs2OZpG_juQMCOiBQVWgkLFbIaN9rhy5x-qEFzNk8ay2igcQ4P-eDjUVJv3_WV-oyCoHN4ZBa1_6L6vHsdjQCdfr1jXdIpBaV5F_DVR6p3lgDcwqDH7YH5puB2ZsW1jozPQXanvrJe4dX81EqlsBJR5h9uRUqZHg2XgE6oF4an7HHNl_0Meb1r5bjgdDMHmXXxpatM75N69B2vuGj_9qJoNMDoRET9iSt750Y0wrhttaHyHK8kk9PEOXCrniAHLhCWTmb98hqO0eZ2", width: 2868, height: 1449, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117105398301204873454\">juhyun choi</a>"] }
        ],
        summary: "높은 평점과 친절한 영어 소통이 가능한 신선한 해산물 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 해산물 요리", "친절하고 유창한 영어 서비스", "깔끔하고 쾌적한 매장", "합리적인 가격대"],
        tips: ["회보다는 익힌 요리를 추천합니다", "해물라면을 꼭 드셔보세요", "픽업 서비스를 이용하면 편리합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:00; 화요일: 오전 11:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2925834499202225610", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=BLUE+SEAFOOD+restaurant+%28%EB%B8%94%EB%A3%A8%EC%94%A8%ED%91%B8%EB%93%9C%29+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Nhà Hàng Hải Sản Sóng Biển - 송비엔 다낭": {
        photos: [],
        placeId: "ChIJxU3FGYsXQjEREBFTWPCP6hU",
        placePhotos: [
            { photoReference: "AWCwydjF4bJYHnMMagq5xNl9RZSm4F_2zFAvhL7FaMES7yrW7XBLF4wwRzAPkbqIHpI3nJNtOl1ZTbOzNZi_xznwg5e2SPLAf5lYS5g_Fq3zA4yMIxJdyzayoFGG1YUqis8SHb6AG_C9uIlDUM3YMuAAilqFrIZ8_o5Nnd-6kciNDkYwSgxVKdl9ohWvO_EN0RgNXpCZqaK45LD96eezxEinR3bLEhqYrBFiVnUw4ve0_ggg5WNXX0xPACUck5yS1fqbqw6V7QfK-HuFad_vF414hk8mz5nqh4Cjb_vPQX567HBAE4Khonk2LDj10CX2AOgBJFPJRgQJe8YwSjn0C15fA87S0shUUYNrsFQVCzMkYZnOP1Hb7sCG9vAsPlOdpKAYIPylT0hCEkwLo6D1mjwgNJldDr382jPk-4tPdYoNKrGKWGFaFf-Fc-8WOBlBisHL", width: 1536, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115393229170198501821\">Nhà Hàng Hải Sản Sóng Biển - 송비엔 다낭</a>"] },
            { photoReference: "AWCwydgmYWyX3dIwnznCbB5DyJKuNb3pBrBH0L8Iodra4Wa11Uza_j3hpioAdPb0JImrwaogEHcOe0QB2S5gAL0RUj4MVIAm6bl6pjAzEcVhgh3JH5Ej-xvu6r1CTkNeK-NdOqAdBGau9AKoKm0bWiV7zP3C2Lmeqru5SZ85Cgdn39Lv_RNxRbwKMuS0EzQTib7IIBVFdtxhXsNgkc0FCstoWhmBDSXGuflAC_dcJzkBLmHhW0JN9lFv5FzymfXuRrIwi8u-aNvYboDWJZCjZyrvS-H-VGDjF23M5JT83UJ9_LiEMOaojL4ves4u9OUgxzUh8f4JXceoFcxNT-LL7sGZa_JRZMZNtMYMbxx2I2cmT1oO1PN9bXteA7jMUY-WadjPAMCppe9HN9hPq3jGEAue-_FwTQeGvMvWQq1CPlKtE8VnSHs2fpzvsVdLmtCHein4", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111229129137705551863\">Jj Lee</a>"] },
            { photoReference: "AWCwydhMCXfZJi-0f8OzMvCyPbJhy3mPSCcXuUmAW53YIXa0ZrvgWkD3QL_Yebz0Bk1BAqZqwijT28Nn5CLWJItEewD73j10tRswF7pkOgAr72CFkVD8AhuvFotwlFoodULzqi51oypRCknRtvcXiWack9qMpby4gtYOAnaAPVTy7RUNq_aG0nmVqOX5LCnMqyR-PorJ9aG5MOMbuejovG9w3Im_bLA2TkbhfIlBXrEAW9Ly7Lh7n4a72C0ASpkXUl47239F9W5mJ8lu3oYIKW4kTzyAyolmr6JcO9SLGgU3KteA2tFnO9zg9ViFKc6-0u0hQfMUfBtvRjAvlNFQl8jVwwvO8AHm42di0cJuVdg3X9Klh1Ze0S5UtwtOvu43hVbT4BeoBos5WGOcoSsTxrJgKzf5adKRiSTxG0HuyLCM7CJixSazSHKE4jI7hY3CeA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105667220165961545659\">Jay Lee</a>"] },
            { photoReference: "AWCwydjXeCf7GtDnLX1W31eKnBLdB-hb_lXWsL0oIfJAjMt-ucYOuf7NMnorLjMyXv0tDkFih8RcSXtpfqMKy5JzkfnNQVv_S7RVCPljbuvMjwIKsqTYAlu_nHTc41nO3Nfcwa0XeU5jbAV5k35_MGyESkHdHdtxnWJf8WKnGsfM20SvqyM6ATNMg3LJP9Ng3UPLmULqWCw52n-8NPIgyC2IOnOErxjj7HXAL_Y1wmusXHZeTYMpL92rC1neLaOGrM2uv8ncowlO61Digv7AYVx1Ms1s5oBHRkXcvI5D2-aVrt6WiS7vJ3adWD3j1fmW1LUjGti-5VpK47rc4zrZ3KbfE16TnQ6jNc1opPKJff7gRFR90AflDRUioh8KQzHLXuYyKobrb4rxqZ2pbnz58-PuPwXKgsMiy1Kw8gR9Y9PJ9EjcSwLZlMLsyqyoGrXCMTdq", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102045590216923271841\">ahyoung go</a>"] },
            { photoReference: "AWCwydjpEsjZ_qBVpOT9GTE76OeNsfu3BW1cnMVBYpwtPFsQGs1CyBQK-tiSGI3kHN1R2PgVrF0oSB51MkJXmIjOm456HvjhV0AJ9ToGI8JrnaDR4ZDNsyfRRj-U1G72-GcosToJj51vrJduRdYskycNqky4YvFnL-R83plNWya1_QWBQuKHrgzudNd1X_XIcwrwpLdTh1Cz5B3JFUNgPIB1f6HyMrQmjml32d04Dzq9WiRCQaRhBKcM11p-eGlmgjMLnhFPTiQfk6diq4Jy5qNelK5-7RVxA05bbdUPxw6fKbcwCKJtoX0xxgewcKjvozRCw7OoX0YCK_DvSI5bEEamqAVT9YnDxVghsCq9CJIj5vwy14bqu9CiYj0cCihqe4Y9PWG4JUtxRncDVuhk9LYUk_eIht1qL4dt5K-I7C885BnycZEGma8Wpwa4RrvCGg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104380999417110295207\">오혜정</a>"] }
        ],
        summary: "신선한 해산물 요리와 친절한 서비스가 돋보이는 다낭 필수 맛집",
        updatedAt: "2026-08-12",
        highlights: ["수조에서 직접 고르는 신선한 랍스터와 게", "중독성 있는 소스 요리", "쾌적하고 깔끔한 매장 환경"],
        tips: ["게 요리 소스에 볶음밥을 비벼 드셔보세요", "향신료 조절이 가능합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/songbien_seafood?igsh=ZXhjanIydDY3eWIy", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1579232881783542032", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nh%C3%A0+H%C3%A0ng+H%E1%BA%A3i+S%E1%BA%A3n+S%C3%B3ng+Bi%E1%BB%83n+-+%EC%86%A1%EB%B9%84%EC%97%94+%EB%8B%A4%EB%82%AD+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Hải Sản Ku Tom Đà Nẵng": {
        photos: [],
        placeId: "ChIJy0rCqNkXQjERksI84rfTy5k",
        placePhotos: [
            { photoReference: "AWCwydhzB43J-8Q_phesAkGSLio0iHyadSzgwgBvSFf4vH4Gc-CnczaCMUJvT0G5HkiQx3VYD9lpy9ALAX-visLSR68v_ZY5qKUYCWR3BFrrXYR1pttSkLveXs1iFPnavLpLImRzU3l5ZiqrJZe-1_SMre3cmUQ0KUnNQ8O9bW_EMoFUPvSStHtz2q6nQuW7vFP8NGmxPf-XM1wL6FQuC5-GFErpHWib-3dljEiZ67zjtv5FW3kH2HF7uCdjN9OXlClFBd72eMaFikiBJNfA09ucegfVaY90yJJxJst27yo1xN8uBzGGq-MqEjUI7NsFuma6DWGeE7dLj7WPQDILLYTj4CXk4KIK_P76ZePXqZnyDOntIOPAp75p-D4Rl2lqwnbW_99jDLTCoo1dT8r0IpicN9qbUhU00Ar5FS8JTZIPmZC3N2JG5OAlsZm2bspJ40gY", width: 2560, height: 1706, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104143381347088470279\">Hải Sản Ku Tom Đà Nẵng</a>"] },
            { photoReference: "AWCwydjDRb97letZlWcAHttslaDOeCYf_ovrOB7zBOQjToAlgZ9wf_MIFYMiiJTaYz6WCNoh6wspOPBGzoeJEh1HHwXtwzdX4yinR8YfJw0bW5lLZl6aka7iXykiv_oCYp5oUIZfkb3Al_D8agb73ZBUcrI7tmtzacqP64h7LGxPuep_MVf3pk6ywGRXeQfWkaqxoUcDi64ho_Alpf_BPvtn1eXqWBVLRZKzSeQmpijzIt_gS1en2p4UEr5Zpa2Vryt-HWfYoo3sGCB_vuD8yDKUxJAxR-0Gt1gKzCyGSNorUJ3GyrhvZOBtAOR2kQQQKof1Gsk2Xvhes4b7hKp4tow18pYf4MG3Qio2RT669c-leIJR-llKIgabeLru33VPIMDTIvUa3q0Le9HIX1bd_ToZVKRNddG2ouPma_rb_rf-NbRYLxixk-yeq50IuIx96A", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100588768490657724196\">Vvv Cg</a>"] },
            { photoReference: "AWCwydjAGRp-GnsDcr1hMr1gOqwhYt3TjZ-MW0NDvyrRqSmzTLw9cBN3Hwj9_XLIDDzXEC8FXetjZE5fPPYz3SzBECZBMAtIxTnfqhIAyxy_Sb3F7d-I9mH_-HHWwgV3r5P7JweuXP4h_xxbQfiE_62V2VW-hQe0jsBGEc-T-FMIUWyCXmAM8wvo77jMHtqWdzXXi9JiKxfcZO7eT3UgPauGfVH7upQJymoSC3DBhi0na7Se7H4kNRLdT5M9Hm0BYk4t01FYDSuQhR6gKUzxO_o1vyLIYhsWezTEjQ0VeAhB440OQLdno-gWVP4HMxAG3z_bar80bUpmfNY1kOfiK0vQ-AxsM-V8yxTXGvgORq3Eg7X2m1FNLxFD1qXxAhNMOiLfilI633BqMgbsihhbn2nJ_rArdX67-UYgUU84ytWJ1iu-4pXyt9cks5h6fqm0_x93", width: 3430, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104143381347088470279\">Hải Sản Ku Tom Đà Nẵng</a>"] },
            { photoReference: "AWCwydj_6j7Zi27zEWqIHlBoDuULhK8BEgfM-azLfue4gmAmeZtou-53NId3KBFUpe6Zhq2Soov-Y8piAyi0AQ8oAQeX6QacFVk4tonzlTAVssejktBRgBs4Rb8ueNE6-pRjUc-q_Wf1h0CrRDi1aWXu-Dn1WwV3AnV5y7xi_0cDNhZHLmJzUSaMiTULydCSwdDXIGp8NtvrKAs6tRCZICmkMOhqPVkgjgTuwtix9_Rw8lM58g8351Mokhfk-Moa6pGTB7s1chO39QuiGNZbP-3frAqNo_2FMC8Jtq2xNbOoDQROaLOuRnA65J7CYsq8MmSnvluAEdKmrHxJ8hgftSTwl30To-avzP-hVC_lj7o_Tvz7xqMJqiI-uNOf1kTl6XeZaXDKkj8FX-YrRI_kLnww-4wsqC93eCIiCJCcDCYRSzzhWgpVp5TVZTa48ZTF62i9", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107217375831106077500\">Uma Vandekerkhove</a>"] },
            { photoReference: "AWCwydg8ul_CizLxcTOvKRQddGb78mJqzwI04taktb8eJIzlSWu-kUP9n6oZvPfCr_gfzpS_oQLueMFUvrSQ-w6AloefoUOOhlpIMFTEnT-Wgebpzzcz2o8t-O2l12OMZdHZOlfQb2D9ASZHB2OxggS5U9ynPt7ScdwssEW6IqoupNXgqu45Mgqqi8gmkXyaNCKmCOfoLxrgoEqKupKqoF7TASTxuimNSplTa4QmgoJlApXKAXv1dms-myZ0EAtsjhivIyfhHeVOgX23lu41dEy6nWMAWMjNrEv4zXfvbUFhbCgv2Zx2as6-HSu8B4hmu1LJw0lL0B_zxy9f-92ik9-nGFY7CyMy0KAU7CT_3t3fRY25gyuxRHeGIDS29aN08icHXtBQnFEvDbWmaK6xZNq8WGZpKlsbVFee6FpCZBAMd-7i1_t2M_f1GlKEW5O3v4Lg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101555501767519137038\">Linh Lục</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스가 돋보이는 신선한 해산물 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 해산물", "열정적인 서비스", "청결한 매장 환경"],
        tips: ["사장님의 열정적인 서비스를 경험해보세요", "신선한 재료를 사용한 음식을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오전 2:00; 화요일: 오전 10:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/haisantuoisongkutomdanang", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11082184094803346066", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=H%E1%BA%A3i+S%E1%BA%A3n+Ku+Tom+%C4%90%C3%A0+N%E1%BA%B5ng+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
