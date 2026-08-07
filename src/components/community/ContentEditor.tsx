'use client';

import { useEffect, useRef } from 'react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { useCreateBlockNote, FormattingToolbar } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { ko } from '@blocknote/core/locales';
import { useState } from 'react';

interface ContentEditorProps {
    // JSON.stringify 된 BlockNote 블록 배열. 없으면 빈 문서로 시작.
    initialContent?: string;
    // 편집 모드에서만 사용. 변경 시마다 최신 JSON 문자열 전달.
    onChange?: (jsonString: string) => void;
    // 읽기 전용 모드 (상세 페이지)
    readonly?: boolean;
}

// 여행카드 메모(CardEditorModal)와 동일한 툴바를 가진 재사용 BlockNote 에디터.
// Liveblocks 저장 로직 제거 → onChange 콜백으로 부모가 저장 시점 결정.
export default function ContentEditor({ initialContent, onChange, readonly = false }: ContentEditorProps) {
    const isEditorReady = useRef(false);
    const saveTimerRef = useRef<NodeJS.Timeout | null>(null);
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    const safeInitialContent = (() => {
        if (!initialContent) return undefined;
        try {
            const parsed = JSON.parse(initialContent);
            if (!Array.isArray(parsed) || parsed.length === 0) return undefined;
            return parsed.every((block: any) => block && block.type) ? parsed : undefined;
        } catch {
            return undefined;
        }
    })();

    const editor = useCreateBlockNote({
        dictionary: ko,
        initialContent: safeInitialContent,
    });

    // 편집 모드: 변경 감지 → 디바운스 300ms 후 부모에 전달
    useEffect(() => {
        if (readonly) return;
        isEditorReady.current = false;
        const readyTimer = setTimeout(() => { isEditorReady.current = true; }, 100);
        const unsub = editor.onChange(() => {
            if (!isEditorReady.current) return;
            if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
            saveTimerRef.current = setTimeout(() => {
                onChange?.(JSON.stringify(editor.document));
            }, 300);
        });
        return () => {
            clearTimeout(readyTimer);
            if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
            isEditorReady.current = false;
            unsub();
        };
    }, [editor, onChange, readonly]);

    // 모바일 키보드 높이 추적 (편집 모드에서만 유의)
    useEffect(() => {
        if (readonly || !window.visualViewport) return;
        const handleResize = () => {
            const windowHeight = window.innerHeight;
            const viewportHeight = window.visualViewport?.height || windowHeight;
            setKeyboardHeight(Math.max(0, windowHeight - viewportHeight));
        };
        window.visualViewport.addEventListener('resize', handleResize);
        window.visualViewport.addEventListener('scroll', handleResize);
        return () => {
            window.visualViewport?.removeEventListener('resize', handleResize);
            window.visualViewport?.removeEventListener('scroll', handleResize);
        };
    }, [readonly]);

    return (
        <>
            <style jsx global>{`
                .community-editor-wrapper {
                    position: relative;
                }
                .community-editor-wrapper .bn-container {
                    display: flex;
                    flex-direction: column-reverse;
                }
                @media (min-width: 768px) {
                    .community-editor-wrapper .bn-formatting-toolbar {
                        position: sticky;
                        top: 0;
                        z-index: 10;
                        width: 100%;
                        border-bottom: 1px solid #e5e7eb;
                        background-color: #f9fafb;
                        padding: 8px 12px;
                        box-sizing: border-box;
                        margin: 0;
                        box-shadow: none !important;
                        user-select: none;
                        overflow: visible;
                    }
                    .community-editor-wrapper .bn-editor {
                        overflow-y: auto;
                        padding-top: 12px;
                    }
                }
                @media (max-width: 767px) {
                    .community-editor-wrapper .bn-formatting-toolbar {
                        position: fixed;
                        bottom: ${keyboardHeight}px;
                        left: 0;
                        right: 0;
                        z-index: 10;
                        width: 100%;
                        border-top: 1px solid #e5e7eb;
                        background-color: #f9fafb;
                        padding: 8px 12px;
                        box-sizing: border-box;
                        margin: 0;
                        box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
                        user-select: none;
                        overflow: visible;
                        transition: bottom 0.2s ease-out, opacity 0.2s ease-out, visibility 0.2s ease-out;
                        opacity: ${keyboardHeight > 0 ? 1 : 0};
                        visibility: ${keyboardHeight > 0 ? 'visible' : 'hidden'};
                    }
                }
                .community-editor-wrapper .bn-formatting-toolbar * {
                    user-select: none;
                }
                /* 이탤릭·밑줄 버튼 숨김 (카드 메모와 동일) */
                .community-editor-wrapper .bn-formatting-toolbar button[aria-label*="Italic"],
                .community-editor-wrapper .bn-formatting-toolbar button[aria-label*="italic"],
                .community-editor-wrapper .bn-formatting-toolbar button[aria-label*="이탤릭"],
                .community-editor-wrapper .bn-formatting-toolbar button[aria-label*="기울임"],
                .community-editor-wrapper .bn-formatting-toolbar button[aria-label*="Underline"],
                .community-editor-wrapper .bn-formatting-toolbar button[aria-label*="underline"],
                .community-editor-wrapper .bn-formatting-toolbar button[aria-label*="밑줄"] {
                    display: none !important;
                }
                .community-editor-wrapper .bn-side-menu button[aria-label*="Add"],
                .community-editor-wrapper .bn-side-menu button[aria-label*="add"],
                .community-editor-wrapper .bn-side-menu button[data-test*="addBlock"] {
                    display: none !important;
                }
                .community-editor-wrapper .bn-side-menu {
                    width: auto !important;
                    gap: 0 !important;
                }
                .community-editor-wrapper .bn-block-outer {
                    padding-left: 0 !important;
                }
                .community-editor-wrapper .bn-block-content {
                    margin-left: 0 !important;
                    padding-left: 0 !important;
                }
                .community-editor-wrapper .bn-block {
                    margin-left: 0 !important;
                }
                .community-editor-wrapper .ProseMirror {
                    padding-left: 28px !important;
                    padding-right: 8px !important;
                    min-height: 200px;
                }
                .community-editor-wrapper.readonly .ProseMirror {
                    padding-left: 6px !important;
                    padding-right: 6px !important;
                    min-height: 0;
                }
                .community-editor-wrapper.readonly .bn-editor {
                    padding-top: 0;
                }
                /* 읽기 화면: 표만 BlockNote 기본 여백으로 안쪽에 밀리지 않게 본문 폭에 맞춘다. */
                .community-editor-wrapper.readonly .tableWrapper {
                    width: 100% !important;
                    padding: 0 !important;
                    box-sizing: border-box;
                }
                .community-editor-wrapper.readonly .tableWrapper-inner,
                .community-editor-wrapper.readonly table {
                    width: 100% !important;
                    max-width: 100% !important;
                }
                .community-editor-wrapper.readonly table {
                    table-layout: fixed;
                }
                .community-editor-wrapper.readonly td,
                .community-editor-wrapper.readonly th {
                    overflow-wrap: anywhere;
                    word-break: break-word;
                }
                /* 안전정보 2열 표: 구분은 약 6글자 폭, 내용은 나머지 폭을 사용한다. */
                .community-editor-wrapper.readonly table tr > :first-child {
                    width: 6em;
                    min-width: 6em;
                    max-width: 6em;
                }
                .community-editor-wrapper.readonly table tr > :nth-child(2) {
                    width: auto;
                }
                .community-editor-wrapper.readonly table tr:first-child td,
                .community-editor-wrapper.readonly table tr:first-child th {
                    background-color: #f0fdf4 !important;
                    color: #166534 !important;
                    font-weight: 700 !important;
                }
            `}</style>
            <div
                className={`community-editor-wrapper${readonly ? ' readonly' : ''}`}
                onMouseDown={(e) => {
                    const target = e.target as HTMLElement;
                    if (target.closest('.bn-formatting-toolbar')) e.preventDefault();
                }}
            >
                <BlockNoteView
                    editor={editor}
                    theme="light"
                    editable={!readonly}
                    formattingToolbar={false}
                >
                    {!readonly && <FormattingToolbar />}
                </BlockNoteView>
            </div>
        </>
    );
}
