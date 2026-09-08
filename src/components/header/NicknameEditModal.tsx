'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useMemberDisplayName, MAX_DISPLAY_NAME } from '@/hooks/useMemberDisplayName';

// 이 보드에서 쓰는 별칭을 고치는 작은 팝업.
//
// 별칭은 보드마다 따로다(project_members.display_name).
// 여기서 바꾸면 같은 보드에 있는 사람들 화면에도 바로 반영된다(presence).
//
// 저장은 기다리지 않는다. presence 가 즉시 바뀌므로 화면은 이미 새 이름이고,
// 서버 왕복은 뒤에서 끝난다. 실패하면 훅이 이름을 되돌리고 onError 로 알린다.
//
// 아바타 메뉴 자체가 z-999999 로 떠 있어 그보다 위에 얹는다.

export function NicknameEditModal({
    roomId,
    onClose,
    onSaved,
    onError,
}: {
    roomId: string;
    onClose: () => void;
    onSaved?: (name: string) => void;
    onError?: (message: string) => void;
}) {
    const { name, save } = useMemberDisplayName(roomId);
    const [value, setValue] = useState(name);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);
    useEffect(() => { setValue(name); }, [name]);
    useEffect(() => {
        // 바로 고칠 수 있게 열자마자 전체 선택 상태로 둔다
        const t = setTimeout(() => inputRef.current?.select(), 50);
        return () => clearTimeout(t);
    }, []);

    const submit = (e?: React.FormEvent) => {
        e?.preventDefault();
        setError(null);

        // 길이처럼 서버에 묻지 않아도 아는 건 여기서 걸러 팝업을 열어둔 채 알린다.
        if (value.trim().length > MAX_DISPLAY_NAME) {
            setError(`별칭은 ${MAX_DISPLAY_NAME}자까지 쓸 수 있어요.`);
            return;
        }

        onClose();
        save(value)
            .then((saved) => onSaved?.(saved))
            .catch((err: any) => onError?.(err?.message || '별칭을 저장하지 못했어요.'));
    };

    if (!mounted) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[1000000] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <form
                onSubmit={submit}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-xs bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <h2 className="text-sm font-bold text-gray-800">별칭 변경</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="닫기"
                    >
                        <X className="w-4 h-4 text-gray-500" />
                    </button>
                </div>

                <div className="px-4 py-4 space-y-2">
                    <input
                        ref={inputRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        maxLength={MAX_DISPLAY_NAME}
                        placeholder="이 보드에서 쓸 이름"
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    />
                    <div className="flex items-center justify-between">
                        <p className="text-[11px] text-slate-400">
                            이 여행보드에서만 쓰는 이름이에요.
                        </p>
                        <span className="text-[11px] text-slate-300 tabular-nums shrink-0">
                            {value.trim().length}/{MAX_DISPLAY_NAME}
                        </span>
                    </div>
                    {/* 비우면 서버가 NULL 로 저장 → 계정 이름으로 돌아간다 */}
                    <p className="text-[11px] text-slate-400">
                        비워두면 계정 이름으로 돌아갑니다.
                    </p>
                    {error && <p className="text-xs text-rose-500">{error}</p>}
                </div>

                <div className="flex gap-2 px-4 pb-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 py-2 text-sm font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                        취소
                    </button>
                    <button
                        type="submit"
                        className="flex-1 py-2 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors"
                    >
                        저장
                    </button>
                </div>
            </form>
        </div>,
        document.body,
    );
}
