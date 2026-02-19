'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { useCreateBlockNote, FormattingToolbar } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { ko } from '@blocknote/core/locales';
import { useStorage, useMutation } from '../../liveblocks.config';

interface CardEditorModalProps {
    cardId: string;
    cardTitle: string;
    isOpen: boolean;
    onClose: () => void;
    canEdit?: boolean;
}

export function CardEditorModal({
    cardId,
    cardTitle,
    isOpen,
    onClose,
    canEdit = true,
}: CardEditorModalProps) {
    // LiveBlocks에서 현재 카드의 notes 가져오기
    const cardNotes = useStorage((root) => root.cards.get(cardId)?.notes);

    // 디바운스를 위한 타이머 ref
    const saveTimerRef = useRef<NodeJS.Timeout | null>(null);

    // BlockNote 에디터 생성 (초기값 설정)
    // 빈 배열이거나 유효하지 않은 형식이면 undefined로 처리
    const safeInitialContent = (() => {
        if (!cardNotes || !Array.isArray(cardNotes) || cardNotes.length === 0) return undefined;
        // 각 블록에 content가 있고 유효한지 확인
        const valid = cardNotes.every((block: any) =>
            block && block.type && Array.isArray(block.content) && block.content.length > 0
        );
        return valid ? cardNotes : undefined;
    })();

    const editor = useCreateBlockNote({
        dictionary: ko,
        initialContent: safeInitialContent,
    });

    // notes 업데이트 mutation
    const updateNotes = useMutation(({ storage }, newNotes: any) => {
        const cards = storage.get('cards');
        const card = cards.get(cardId);
        if (card) {
            // LiveObject의 .set() 메서드로 notes 필드 업데이트
            (card as any).set('notes', newNotes);
        }
    }, [cardId]);

    // 자동 저장 함수 (디바운스 500ms) - editor/owner만 저장
    const handleEditorChange = useCallback(() => {
        if (!canEdit) return; // viewer는 저장 불가
        if (saveTimerRef.current) {
            clearTimeout(saveTimerRef.current);
        }

        saveTimerRef.current = setTimeout(() => {
            const blocks = editor.document;
            updateNotes(blocks);
        }, 500);
    }, [editor, updateNotes, canEdit]);

    // 에디터 변경 감지
    useEffect(() => {
        if (!isOpen) return;

        return editor.onChange(handleEditorChange);
    }, [editor, handleEditorChange, isOpen]);

    // 키보드 높이 추적 (모바일 전용)
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        // visualViewport API가 없으면 (데스크톱) 아무것도 하지 않음
        if (!window.visualViewport) return;

        const handleResize = () => {
            // 전체 높이와 visualViewport 높이 차이로 키보드 높이 계산
            const windowHeight = window.innerHeight;
            const viewportHeight = window.visualViewport?.height || windowHeight;
            const calculatedKeyboardHeight = Math.max(0, windowHeight - viewportHeight);
            setKeyboardHeight(calculatedKeyboardHeight);
        };

        window.visualViewport.addEventListener('resize', handleResize);
        window.visualViewport.addEventListener('scroll', handleResize);

        return () => {
            window.visualViewport?.removeEventListener('resize', handleResize);
            window.visualViewport?.removeEventListener('scroll', handleResize);
        };
    }, []);

    if (!isOpen) return null;

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full h-full md:w-[90vw] md:h-[85vh] md:max-w-2xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl">
                {/* 헤더 */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">메모 & 체크리스트</h2>
                        <p className="text-sm text-gray-500 mt-1">{cardTitle}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 에디터 영역 (상단 도킹 툴바 포함) */}
                <div className="flex-1 overflow-hidden relative">
                    <style jsx global>{`
                        .editor-wrapper {
                            height: 100%;
                            position: relative;
                        }
                        .editor-wrapper .bn-container {
                            height: 100%;
                            display: flex;
                            flex-direction: column-reverse;
                        }
                        
                        /* 데스크톱: 기존 상단 고정 툴바 */
                        @media (min-width: 768px) {
                            .editor-wrapper .bn-formatting-toolbar {
                                position: sticky;
                                top: 0;
                                z-index: 10;
                                width: 100%;
                                border-bottom: 1px solid #e5e7eb;
                                background-color: #f9fafb;
                                padding: 8px 16px;
                                box-sizing: border-box;
                                margin: 0;
                                box-shadow: none !important;
                                user-select: none;
                                overflow: visible;
                            }
                            .editor-wrapper .bn-editor {
                                flex: 1;
                                overflow-y: auto;
                                padding-top: 16px;
                            }
                        }
                        
                        /* 모바일: 하단 플로팅 툴바 */
                        @media (max-width: 767px) {
                            .editor-wrapper .bn-formatting-toolbar {
                                position: fixed;
                                bottom: ${keyboardHeight}px;
                                left: 0;
                                right: 0;
                                z-index: 10;
                                width: 100%;
                                border-top: 1px solid #e5e7eb;
                                background-color: #f9fafb;
                                padding: 8px 16px;
                                box-sizing: border-box;
                                margin: 0;
                                box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
                                user-select: none;
                                overflow: visible;
                                transition: bottom 0.2s ease-out, opacity 0.2s ease-out, visibility 0.2s ease-out;
                                opacity: ${keyboardHeight > 0 ? 1 : 0};
                                visibility: ${keyboardHeight > 0 ? 'visible' : 'hidden'};
                            }
                            .editor-wrapper .bn-editor {
                                flex: 1;
                                overflow-y: auto;
                                padding-top: 16px;
                                padding-bottom: ${keyboardHeight > 0 ? '60px' : '16px'}; /* 툴바 보이면 여백 추가 */
                            }
                        }
                        
                        .editor-wrapper .bn-formatting-toolbar * {
                            user-select: none;
                        }
                        /* 이탤릭체와 밑줄 버튼 숨기기 */
                        .editor-wrapper .bn-formatting-toolbar button[aria-label*="Italic"],
                        .editor-wrapper .bn-formatting-toolbar button[aria-label*="italic"],
                        .editor-wrapper .bn-formatting-toolbar button[aria-label*="이탤릭"],
                        .editor-wrapper .bn-formatting-toolbar button[aria-label*="기울임"],
                        .editor-wrapper .bn-formatting-toolbar button[aria-label*="Underline"],
                        .editor-wrapper .bn-formatting-toolbar button[aria-label*="underline"],
                        .editor-wrapper .bn-formatting-toolbar button[aria-label*="밑줄"],
                        .editor-wrapper .bn-formatting-toolbar button[title*="Italic"],
                        .editor-wrapper .bn-formatting-toolbar button[title*="italic"],
                        .editor-wrapper .bn-formatting-toolbar button[title*="이탤릭"],
                        .editor-wrapper .bn-formatting-toolbar button[title*="기울임"],
                        .editor-wrapper .bn-formatting-toolbar button[title*="Underline"],
                        .editor-wrapper .bn-formatting-toolbar button[title*="underline"],
                        .editor-wrapper .bn-formatting-toolbar button[title*="밑줄"] {
                            display: none !important;
                        }
                        /* I, U 아이콘이 있는 버튼 직접 숨기기 */
                        .editor-wrapper .bn-formatting-toolbar button:has(svg):nth-of-type(3),
                        .editor-wrapper .bn-formatting-toolbar button:has(svg):nth-of-type(4) {
                            display: none !important;
                        }
                        /* + 버튼만 숨기기 (드래그 핸들은 유지) */
                        .editor-wrapper .bn-side-menu button[aria-label*="Add"],
                        .editor-wrapper .bn-side-menu button[aria-label*="add"],
                        .editor-wrapper .bn-side-menu button[data-test*="addBlock"] {
                            display: none !important;
                        }
                        /* + 버튼 공간 제거하여 왼쪽으로 이동 */
                        .editor-wrapper .bn-side-menu {
                            width: auto !important;
                            gap: 0 !important;
                        }
                        .editor-wrapper .bn-block-outer {
                            padding-left: 0 !important;
                        }
                        /* 핸들과 텍스트 사이 여백 최소화 */
                        .editor-wrapper .bn-block-content {
                            margin-left: 0 !important;
                            padding-left: 0 !important;
                        }
                        .editor-wrapper .bn-block {
                            margin-left: 0 !important;
                        }
                        .editor-wrapper [class*="blockContent"] {
                            margin-left: 0 !important;
                            padding-left: 0 !important;
                        }
                        .editor-wrapper .ProseMirror {
                            padding-left: 28px !important;
                        }
                    `}</style>
                    <div
                        className="editor-wrapper"
                        onMouseDown={(e) => {
                            // 툴바를 클릭해도 에디터 focus를 유지하여 키보드가 내려가지 않도록
                            const target = e.target as HTMLElement;
                            if (target.closest('.bn-formatting-toolbar')) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <BlockNoteView
                            editor={editor}
                            theme="light"
                            formattingToolbar={false}
                        >
                            <FormattingToolbar />
                        </BlockNoteView>
                    </div>
                </div>

                {/* 푸터 */}
                <div className="flex items-center justify-end gap-3 px-6 py-3 border-t border-gray-200 bg-gray-50 shrink-0">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
