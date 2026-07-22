import { useState, useEffect, useCallback, useRef } from 'react';

// 사용자(브라우저) 단위 "온보딩 본 적 있음" 플래그. 한 번 본 사람은 다른 새 보드에서도 안 뜸.
const SEEN_KEY = 'travelline:onboarding:seen';
// 재실행 트리거 (프로필 메뉴 "사용법 다시 보기" 등에서 dispatch)
export const ONBOARDING_START_EVENT = 'travelline:start-onboarding';

// 🚧 개발 모드: true 면 seen 플래그를 무시하고 소유자 진입 시마다 노출 (테스트용).
const ALWAYS_SHOW_IN_DEV = false;

/**
 * 보드 온보딩 코치마크 표시 상태.
 * - enabled(= 보드 로드 완료 + 소유자) 가 처음 true 이고 아직 본 적 없으면 잠깐 뒤 자동 노출(intro).
 * - finish() 시 사용자 단위 seen 플래그 저장 → 이후 어떤 보드에서도 자동 노출 안 함.
 * - window 이벤트로 언제든 재실행 가능(replay — 종료 시 보드 초기화 안 함).
 *
 * "누구에게"(소유자) 판단은 호출부 enabled 가, "한 번만"은 seen 플래그가 담당한다.
 * ⚠️ StrictMode(dev) 이중 마운트 안전: ref 가드 없이 effect cleanup 으로만 타이머 관리.
 */
export function useOnboarding({ enabled }: { enabled: boolean }) {
    const [active, setActive] = useState(false);
    // 'intro' = 최초 자동 노출(종료 시 보드 초기화 대상) / 'replay' = 사용법 다시 보기(초기화 안 함)
    const modeRef = useRef<'intro' | 'replay' | null>(null);

    const start = useCallback(() => {
        modeRef.current = 'replay';
        setActive(true);
    }, []);

    const isIntro = useCallback(() => modeRef.current === 'intro', []);

    const finish = useCallback(() => {
        setActive(false);
        modeRef.current = null;
        try {
            localStorage.setItem(SEEN_KEY, '1');
        } catch {
            /* private 모드 등 storage 불가 — 무시 */
        }
    }, []);

    // 최초 진입 자동 실행 (intro 모드)
    useEffect(() => {
        if (!enabled) return;

        if (!ALWAYS_SHOW_IN_DEV) {
            let seen = false;
            try {
                seen = !!localStorage.getItem(SEEN_KEY);
            } catch {
                seen = false;
            }
            if (seen) return;
        }

        const t = setTimeout(() => {
            modeRef.current = 'intro';
            setActive(true);
        }, 700);
        return () => clearTimeout(t);
    }, [enabled]);

    // 재실행 이벤트 구독 (replay 모드)
    useEffect(() => {
        const handler = () => start();
        window.addEventListener(ONBOARDING_START_EVENT, handler);
        return () => window.removeEventListener(ONBOARDING_START_EVENT, handler);
    }, [start]);

    return { active, start, finish, isIntro };
}
