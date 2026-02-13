'use client';

import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { useCreateBlockNote, FormattingToolbar } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { ko } from '@blocknote/core/locales';

interface CardEditorModalProps {
    cardId: string;
    cardTitle: string;
    isOpen: boolean;
    onClose: () => void;
}

export function CardEditorModal({
    cardId,
    cardTitle,
    isOpen,
    onClose,
}: CardEditorModalProps) {
    // BlockNote 에디터 생성
    const editor = useCreateBlockNote({
        dictionary: ko,
    });

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
                        .editor-wrapper .bn-formatting-toolbar * {
                            user-select: none;
                        }
                        .editor-wrapper .bn-editor {
                            flex: 1;
                            overflow-y: auto;
                            padding-top: 16px;
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
                    <div className="editor-wrapper">
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
                        className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors font-medium text-sm"
                    >
                        취소
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
                    >
                        저장
                    </button>
                </div>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
