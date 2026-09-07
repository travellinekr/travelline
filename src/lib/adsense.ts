// AdSense 설정 한 곳 모음.
//
// 승인 전에는 환경변수가 비어 있고, 그 상태에서는 광고 대신 더미 자리가 렌더된다.
// 승인 후 Vercel 에 값만 채우면 코드 변경 없이 실제 광고로 바뀐다.
//
//   NEXT_PUBLIC_ADSENSE_CLIENT   ca-pub-0000000000000000   (게시자 ID)
//   NEXT_PUBLIC_ADSENSE_SLOT_DAY 0000000000                (일차 광고 단위 슬롯 ID)
//
// 앱(웹뷰)에서는 AdSense 를 그대로 쓰면 정책 위반이다.
// 앱 출시 시점에 WebView API for Ads 로 웹뷰를 GMA SDK 에 등록해야 이 인벤토리가 정상 처리된다.
// 그때도 이 파일의 값은 그대로 쓰고, 네이티브 쪽 설정만 추가하면 된다.

export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || '';
export const ADSENSE_SLOT_DAY = process.env.NEXT_PUBLIC_ADSENSE_SLOT_DAY?.trim() || '';

/** 실제 광고를 띄울 수 있는 상태인가 (둘 다 있어야 한다) */
export const isAdsenseConfigured = Boolean(ADSENSE_CLIENT && ADSENSE_SLOT_DAY);

// 승인 전 미리보기 스위치.
//
//   NEXT_PUBLIC_ADS_PREVIEW=1
//
// 켜면 실제 광고 대신 같은 높이의 더미가 렌더된다. 배치·드래그·레이아웃 점프를 확인할 때 쓴다.
// 로컬 .env.local 에만 넣을 것 — 프로덕션에 켜면 사용자에게 회색 박스가 보인다.
export const ADS_PREVIEW = process.env.NEXT_PUBLIC_ADS_PREVIEW === '1';

/**
 * 일차에 광고 자리를 렌더할지.
 *
 * 승인 전(환경변수 없음)에는 자리 자체를 만들지 않는다.
 * 빈 회색 박스가 보이느니 없는 편이 낫고, 나중에 값만 채우면 저절로 살아난다.
 */
export const shouldRenderAdSlot = isAdsenseConfigured || ADS_PREVIEW;
