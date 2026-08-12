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
    }
};

export default info;
