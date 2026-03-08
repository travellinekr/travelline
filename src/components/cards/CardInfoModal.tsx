'use client';

import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { ko } from '@blocknote/core/locales';
import { getEntryCardBlocks } from '@/data/entryCardGuide';

interface CardInfoModalProps {
    card: any;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Info 버튼 클릭 시 표시되는 읽기 전용 모달
 * CardEditorModal과 동일한 구조, editable=false 적용
 */
export function CardInfoModal({ card, isOpen, onClose }: CardInfoModalProps) {
    // 입국심사 카드의 Info 컨텐츠를 블록 배열로 생성
    const infoBlocks = (() => {
        if (!card?.isEntryCard) return undefined;
        const city = card.city || card.destinationCity || '';
        const blocks = getEntryCardBlocks(city);
        return blocks.length > 0 ? blocks : undefined;
    })();

    const editor = useCreateBlockNote({
        dictionary: ko,
        initialContent: infoBlocks,
    });

    // 입국심사 카드가 아니거나, 표시할 정보가 없으면 null
    if (!card?.isEntryCard) return null;
    if (!isOpen) return null;

    const cardTitle = card.text || card.title || '입국심사&필요사항';
    const city = card.city || card.destinationCity || '';

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full h-full md:w-[90vw] md:h-[85vh] md:max-w-2xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl">
                {/* 헤더 */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">입국 정보</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            {cardTitle}{city ? ` · ${city}` : ''}
                            <span className="ml-2 text-[11px] text-indigo-400 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full">읽기 전용</span>
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 에디터 영역 - 읽기 전용 */}
                <div className="flex-1 overflow-hidden relative">
                    <style jsx global>{`
                        .info-editor-wrapper {
                            height: 100%;
                            position: relative;
                        }
                        .info-editor-wrapper .bn-container {
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                        }
                        .info-editor-wrapper .bn-editor {
                            flex: 1;
                            overflow-y: auto;
                            padding-top: 16px;
                        }
                        /* 읽기 전용: 편집 UI 숨기기 */
                        .info-editor-wrapper .bn-side-menu,
                        .info-editor-wrapper .bn-formatting-toolbar,
                        .info-editor-wrapper .bn-slash-menu {
                            display: none !important;
                        }
                        .info-editor-wrapper .ProseMirror {
                            padding-left: 28px !important;
                            padding-right: 16px !important;
                            pointer-events: none;
                            user-select: text;
                        }
                        .info-editor-wrapper .bn-block-outer {
                            padding-left: 0 !important;
                        }
                        .info-editor-wrapper .bn-block-content {
                            margin-left: 0 !important;
                            padding-left: 0 !important;
                        }
                    `}</style>
                    <div className="info-editor-wrapper">
                        <BlockNoteView
                            editor={editor}
                            theme="light"
                            editable={false}
                            formattingToolbar={false}
                        />
                    </div>
                </div>

                {/* 푸터 */}
                <div className="flex items-center justify-between gap-3 px-6 py-3 border-t border-gray-200 bg-gray-50 shrink-0">
                    <p className="text-xs text-gray-400">📅 실제 여행 전 최신 정보를 반드시 확인하세요</p>
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
