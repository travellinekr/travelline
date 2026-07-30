# iOS 앱 빌드 & 테스트 가이드 (Travelline)

> 맥북에어 등 **새 Mac에서 iOS 앱을 빌드/테스트**하기 위한 단계별 문서.
> Android는 APK 파일을 받아 바로 설치하지만, **iOS는 반드시 Xcode 또는 TestFlight를 거쳐야** 한다(애플 정책, .ipa 직접 설치 불가).

---

## 0. 앱 개요 (미리 알아둘 것)

| 항목 | 값 |
|---|---|
| 방식 | **Capacitor WebView 래퍼** — `https://www.travelline.co.kr` (라이브 사이트)를 앱으로 감쌈 |
| appId / 번들ID | `kr.travelline.app` |
| appName | `Travelline` |
| Capacitor | **8.4.1**, iOS는 **SPM 방식** (CocoaPods 불필요) |
| Apple Team ID | `BZCD9M96UX` |
| 네이티브 플러그인 | `@capacitor/app`(딥링크), `camera`(사진), `push-notifications`, `browser`(구글 OAuth) |

**중요**: 앱은 라이브 사이트를 로드하므로 **웹 코드 변경은 Vercel 배포 후 앱에 반영**된다. 네이티브(권한/딥링크/플러그인/아이콘)만 앱 빌드가 필요.

---

## 1. 사전 준비물

1. **macOS + Xcode** (Mac App Store에서 설치, ~15GB). iOS는 이게 필수.
2. **Node.js + npm** (프로젝트 빌드용). 기존 개발 환경과 동일 버전 권장.
3. **Apple 개발자 계정**
   - 내 아이폰에서만 테스트 → **무료 Apple ID**로도 가능(단, 7일마다 재설치 필요)
   - TestFlight 배포 / 다른 사람 테스트 → **유료 Apple Developer Program($99/년)** 필요 (Team ID `BZCD9M96UX`가 이미 있으니 가입돼 있을 가능성 높음)
4. **실제 아이폰** — 카메라·푸시·딥링크·OAuth는 시뮬레이터에서 제대로 안 됨 → 실기기 필요.

---

## 2. 새 Mac에서 첫 셋업 (⚠️ 가장 중요)

### 2-1. 레포 클론 + Node 의존성
```bash
git clone <레포 URL> travelline
cd travelline
npm install --legacy-peer-deps
```

### 2-2. ⚠️ Capacitor 의존성 복원 (필수 — 안 하면 iOS 빌드 불가)
Capacitor npm 의존성은 **의도적으로 git에 커밋하지 않는다**(`package.json`이 `skip-worktree` 처리됨 → Vercel 웹 배포가 capacitor를 설치하려다 깨지는 것 방지). 그래서 **새 머신에서는 직접 재설치**해야 한다:

```bash
# 코어 + iOS 플랫폼 + CLI (버전 고정)
npm i -E @capacitor/core@8.4.1 @capacitor/ios@8.4.1
npm i -D -E @capacitor/cli@8.4.1

# 네이티브 플러그인 (Capacitor 8 호환)
npm i @capacitor/app@8 @capacitor/camera@8 @capacitor/push-notifications@8 @capacitor/browser@8

# 웹 배포 보호: package.json / lock 을 다시 skip-worktree (안 하면 capacitor가 커밋돼 Vercel 깨짐)
git update-index --skip-worktree package.json package-lock.json
```

> Android도 같이 할 거면 `@capacitor/android@8.4.1`도 추가. iOS만이면 불필요.

### 2-3. 네이티브 프로젝트 동기화
```bash
npx cap sync ios
```
이게 `ios/App/CapApp-SPM/Package.swift`에 `../node_modules/@capacitor/*` 경로를 다시 써넣고 웹 자산을 복사한다. **2-2를 안 하면 여기서 경로가 비어 실패**한다.

확인:
```bash
npx cap doctor    # iOS "looking great" 나오면 OK
```

---

## 3. Xcode에서 열기 + 서명

```bash
npx cap open ios
```
→ Xcode로 `ios/App` 프로젝트가 열린다.

Xcode에서:
1. 좌측 네비게이터에서 **App** 타겟 선택 → **Signing & Capabilities** 탭
2. **Team** = `BZCD9M96UX` (본인 개발자 계정) 선택
3. **Bundle Identifier** = `kr.travelline.app` 확인
4. **Automatically manage signing** 체크
5. 서명 오류 나면 Apple ID가 Xcode에 로그인돼 있는지 확인 (Xcode → Settings → Accounts)

---

## 4. 방법 A — 내 아이폰에 직접 설치 (테스트용)

> **아이폰을 이 Mac에 USB로 연결**해야 한다. 원격(화면공유) 중이고 아이폰이 다른 곳에 있으면 이 방법은 불가 → **방법 B(TestFlight)** 사용.

1. 아이폰 USB 연결 → Xcode 상단 기기 목록에서 **내 아이폰** 선택
2. **▶ Run** (Cmd+R)
3. 아이폰에서 최초 1회:
   **설정 → 일반 → VPN 및 기기 관리 → 개발자 앱 → 신뢰**
4. 앱 실행 → 로그인·사진·딥링크 테스트

무선 디버깅(선택): 최초 USB 페어링 후 Xcode에서 "Connect via network" 체크 → 같은 Wi-Fi면 무선 실행 가능.

---

## 5. 방법 B — TestFlight 배포 (원격/여러 명 테스트, 권장)

물리 연결 불필요. 안드로이드 "APK 나눠주기"의 iOS 버전.

1. **App Store Connect**(appstoreconnect.apple.com)에서 앱 레코드 생성 (Bundle ID `kr.travelline.app`)
2. Xcode: 상단 기기 → **Any iOS Device (arm64)** 선택
3. 메뉴 **Product → Archive** (아카이브 빌드)
4. Organizer 창 → **Distribute App → App Store Connect → Upload**
5. 업로드 후 App Store Connect → **TestFlight** 탭에서 빌드 처리 대기(수 분~수십 분)
6. 테스터를 **Internal Testing**에 추가 → 테스터는 아이폰 **TestFlight 앱**으로 설치

> 유료 Apple Developer Program 필요.

---

## 6. iOS 설정 현황 (이미 되어 있는 것 — 참고)

| 기능 | 상태 | 파일 |
|---|---|---|
| **카메라/사진 권한** | ✅ 설명문구까지 세팅됨 | `ios/App/App/Info.plist` (NSCamera/NSPhotoLibrary…UsageDescription) |
| **딥링크(Universal Links)** | ✅ entitlement에 `applinks:www.travelline.co.kr` + `applinks:travelline.co.kr` | `ios/App/App/App.entitlements` |
| AASA 서빙 | ✅ `www`에서 200 서빙, paths `/room/*`, `/auth/callback*` | `public/.well-known/apple-app-site-association` |
| **구글 로그인** | ✅ Custom Tabs(SFSafariViewController) + `/auth/callback` 딥링크 복귀 | `LoginPageContent.tsx`, `useAppUrlOpen.ts` |
| **푸시 알림** | ⛔ **비활성** (Firebase 미설정). `NEXT_PUBLIC_ENABLE_PUSH=true` + `GoogleService-Info.plist` 추가해야 켜짐 | `pushNotifications.ts` |
| 세이프에어리어(노치) | ✅ `.cap-native .pt-safe`로 앱에서만 상단 여백 | `globals.css`, `NativeAppClass.tsx` |

### 알려진 iOS 이슈
- **apex 308 리다이렉트**: `travelline.co.kr`가 `www`로 308됨. Apple은 AASA 페치 시 리다이렉트를 안 따라가므로, 엔타이틀먼트에 **www를 포함**시켜 대응함. 그래도 apex 기반 링크가 문제면 Vercel에서 `/.well-known/*` 리다이렉트 예외 처리 필요.
- **Supabase Redirect URLs**에 `https://www.travelline.co.kr/auth/callback`이 등록돼 있어야 구글 로그인 복귀가 됨(웹이 www로 동작하므로 대개 이미 등록됨).

---

## 7. 자주 겪는 문제 (Troubleshooting)

| 증상 | 원인 / 해결 |
|---|---|
| `npx cap sync` 에서 `@capacitor/*` 경로 없음 | **2-2 미실행**. capacitor 의존성 재설치 후 다시 sync |
| Xcode 서명 오류 (Signing) | Team 미선택 / Apple ID 미로그인. Signing & Capabilities에서 Team 지정 |
| "Untrusted Developer" (기기) | 설정 → 일반 → VPN 및 기기 관리 → 개발자 신뢰 |
| 웹 코드 수정이 앱에 반영 안 됨 | 앱은 라이브 사이트 로드 → **Vercel 배포 후 앱 재실행** 필요 (재빌드 아님) |
| 카메라/딥링크가 시뮬레이터에서 안 됨 | **실기기**에서 테스트 (시뮬레이터 한계) |
| 구글 로그인 후 앱 복귀 안 됨 | Supabase Redirect URLs에 www `/auth/callback` 확인, AASA 배포 확인 |

---

## 8. 요약 체크리스트 (맥북에어에서)

- [ ] Xcode 설치 (Mac App Store)
- [ ] `git clone` + `npm install --legacy-peer-deps`
- [ ] **Capacitor 의존성 재설치 + skip-worktree** (§2-2) ← 잊기 쉬움
- [ ] `npx cap sync ios` → `npx cap doctor` OK
- [ ] `npx cap open ios` → Team 서명
- [ ] 방법 A(아이폰 USB) 또는 방법 B(TestFlight)로 실행
- [ ] 실기기에서 로그인·사진·딥링크·세이프에어리어 확인
