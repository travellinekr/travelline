'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface EtcAddModalProps {
    onClose: () => void;
    onCreate: (data: any) => void;
}

export function EtcAddModal({ onClose, onCreate }: EtcAddModalProps) {
    const [title, setTitle] = useState('');
    const [item, setItem] = useState('');

    const handleConfirm = () => {
        if (!title.trim()) {
            alert('제목을 입력해주세요');
            return;
        }

        const cardData = {
            title: title.trim(),
            text: title.trim(),
            category: 'other',
            etcItem: item.trim(),
            isUserCreated: true,
        };

        onCreate(cardData);
        onClose();
    };

    const modalContent = (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white w-full max-w-md rounded-2xl flex flex-col overflow-hidden shadow-2xl">
                {/* 헤더 */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-slate-800">기타 항목 추가하기</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* 본문 */}
                <div className="p-6 space-y-5">
                    {/* 제목 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            제목 <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="예: 여행자 보험 가입"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
                            onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
                            autoFocus
                        />
                    </div>

                    {/* 항목 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            항목
                        </label>
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            placeholder="예: 준비물 챙기기"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
                            onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
                        />
                    </div>
                </div>

                {/* 푸터 */}
                <div className="flex justify-end gap-3 px-6 pb-6">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        취소
                    </button>
                    <button
                        onClick={handleConfirm}
                        disabled={!title.trim()}
                        className="px-6 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        추가하기
                    </button>
                </div>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
