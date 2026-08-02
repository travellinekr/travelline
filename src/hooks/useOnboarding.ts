import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';

// user_metadata 저장 키. 브라우저 로컬이 아닌 계정 단위로 관리 → 새 브라우저/기기에서도 재발동 방지.
const SEEN_META_KEY = 'onboarding_seen';
// 재실행 트리거 (프로필 메뉴 "사용법 다시 보기" 등에서 dispatch)
export const ONBOARDING_START_EVENT = 'travelline:start-onboarding';

// 🚧 개발 모드: true 면 seen 플래그를 무시하고 소유자 진입 시마다 노출 (테스트용).
const ALWAYS_SHOW_IN_DEV = false;

/**
 * 보드 온보딩 코치마크 표시 상태.
 * - enabled(= 보드 로드 완료 + 소유자 + 신규 보드) 가 처음 true 이고 아직 본 적 없으면 잠깐 뒤 자동 노출(intro).
 * - finish() 시 계정 단위 seen 플래그를 Supabase user_metadata 에 저장 → 이후 어떤 보드/브라우저에서도 자동 노출 안 함.
 * - window 이벤트로 언제든 재실행 가능(replay — 종료 시 보드 초기화 안 함).
 *
 * ⚠️ 과거 버그(v1): localStorage 저장 + "신규 보드" 조건 미체크 → 소유자가 새 브라우저에서 기존 보드 진입 시
 *   인트로가 발동, 종료 후 resetBoard 로 카드/여행지가 전부 사라지는 사고. 계정 단위 저장(v2)로 해결.
 */
export function useOnboarding({ enabled }: { enabled: boolean }) {
    const [active, setActive] = useState(false);
    // 'intro' = 최초 자동 노출(종료 시 보드 초기화 대상) / 'replay' = 사용법 다시 보기(초기화 안 함)
    const modeRef = useRef<'intro' | 'replay' | null>(null);
    // 이번 세션에서 seen 조회를 이미 마쳤는지 (중복 조회 방지)
    const seenCheckedRef = useRef(false);

    const start = useCallback(() => {
        modeRef.current = 'replay';
        setActive(true);
    }, []);

    const isIntro = useCallback(() => modeRef.current === 'intro', []);

    const finish = useCallback(() => {
        setActive(false);
        modeRef.current = null;
        // 계정 metadata 에 seen 플래그 저장 (실패해도 UX 는 계속 — 다음 진입 시 재발동될 수 있음)
        supabase.auth.updateUser({ data: { [SEEN_META_KEY]: true } }).catch(() => {});
    }, []);

    // 최초 진입 자동 실행 (intro 모드) — user_metadata.onboarding_seen 조회 후 결정
    useEffect(() => {
        if (!enabled) return;
        if (seenCheckedRef.current) return;
        seenCheckedRef.current = true;

        let cancelled = false;
        let timer: ReturnType<typeof setTimeout> | null = null;

        (async () => {
            if (!ALWAYS_SHOW_IN_DEV) {
                try {
                    const { data } = await supabase.auth.getUser();
                    const seen = !!data?.user?.user_metadata?.[SEEN_META_KEY];
                    if (seen) return;
                } catch {
                    // 조회 실패 → 인트로 건너뛰기(안전한 쪽 선택). 사용자는 프로필 메뉴에서 수동 실행 가능.
                    return;
                }
            }
            if (cancelled) return;
            timer = setTimeout(() => {
                if (cancelled) return;
                modeRef.current = 'intro';
                setActive(true);
            }, 700);
        })();

        return () => {
            cancelled = true;
            if (timer) clearTimeout(timer);
        };
    }, [enabled]);

    // 재실행 이벤트 구독 (replay 모드)
    useEffect(() => {
        const handler = () => start();
        window.addEventListener(ONBOARDING_START_EVENT, handler);
        return () => window.removeEventListener(ONBOARDING_START_EVENT, handler);
    }, [start]);

    return { active, start, finish, isIntro };
}
