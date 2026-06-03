'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Trash2, Download, Loader2 } from 'lucide-react';
import { Confirm } from './Confirm';

interface PhotoLightboxProps {
    isOpen: boolean;
    photos: any[];
    initialIndex: number;
    canEdit?: boolean;
    onClose: () => void;
    onDelete?: (photoId: string) => void;
}

// 풀스크린 사진 뷰어 — 원본 이미지 표시, 좌우 탐색, 삭제 확인
export function PhotoLightbox({ isOpen, photos, initialIndex, canEdit = true, onClose, onDelete }: PhotoLightboxProps) {
    const [index, setIndex] = useState(initialIndex);
    const [pendingDelete, setPendingDelete] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const touchStartXRef = useRef<number | null>(null);

    // 새로 열릴 때 시작 인덱스 동기화
    useEffect(() => {
        if (isOpen) setIndex(initialIndex);
    }, [isOpen, initialIndex]);

    // 사진 배열이 줄어들었을 때 인덱스 보정 (삭제 후)
    useEffect(() => {
        if (!isOpen) return;
        if (photos.length === 0) {
            onClose();
            return;
        }
        if (index >= photos.length) {
            setIndex(Math.max(0, photos.length - 1));
        }
    }, [photos, index, isOpen, onClose]);

    // 키보드 단축키 (Esc/←/→)
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowLeft') setIndex(i => Math.max(0, i - 1));
            else if (e.key === 'ArrowRight') setIndex(i => Math.min(photos.length - 1, i + 1));
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, photos.length, onClose]);

    if (!isOpen) return null;
    if (typeof window === 'undefined') return null;

    const current = photos[index];
    if (!current) return null;

    const goPrev = () => setIndex(i => Math.max(0, i - 1));
    const goNext = () => setIndex(i => Math.min(photos.length - 1, i + 1));

    // 모바일 스와이프
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartXRef.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const start = touchStartXRef.current;
        touchStartXRef.current = null;
        if (start == null) return;
        const dx = e.changedTouches[0].clientX - start;
        if (Math.abs(dx) < 50) return;
        if (dx > 0) goPrev();
        else goNext();
    };

    const handleConfirmDelete = () => {
        if (current?.id && onDelete) onDelete(current.id);
        setPendingDelete(false);
    };

    // 원본 다운로드 — cross-origin signed URL은 download 속성이 무시되므로 blob 경유
    const handleDownload = async () => {
        if (!current?.originalUrl || isDownloading) return;
        setIsDownloading(true);
        try {
            const res = await fetch(current.originalUrl);
            if (!res.ok) throw new Error('fetch failed');
            const blob = await res.blob();
            const objectUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = objectUrl;
            a.download = `photo-${current.id || index + 1}.jpg`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(objectUrl);
        } catch (e) {
            console.error('[PhotoLightbox] download failed:', e);
        } finally {
            setIsDownloading(false);
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* 상단 바: 인덱스만 */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
                <div className="text-white text-sm font-semibold tabular-nums">
                    {index + 1} / {photos.length}
                </div>
            </div>

            {/* 좌/우 탐색 (데스크톱) */}
            {index > 0 && (
                <button
                    type="button"
                    onClick={goPrev}
                    aria-label="이전"
                    className="hidden md:flex absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}
            {index < photos.length - 1 && (
                <button
                    type="button"
                    onClick={goNext}
                    aria-label="다음"
                    className="hidden md:flex absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            )}

            {/* 메인 이미지 */}
            <img
                key={current.id || index}
                src={current.originalUrl || current.thumbnailUrl}
                alt={`photo-${index + 1}`}
                draggable={false}
                className="max-w-[95vw] max-h-[80vh] object-contain select-none"
            />

            {/* 하단 인디케이터 (점) — 액션 바 위쪽 */}
            {photos.length > 1 && (
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {photos.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setIndex(i)}
                            aria-label={`${i + 1}번 사진`}
                            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
                        />
                    ))}
                </div>
            )}

            {/* 하단 액션 바: 다운로드 / 삭제 / 닫기 */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-2 px-4 py-4 bg-gradient-to-t from-black/70 to-transparent">
                <button
                    type="button"
                    onClick={handleDownload}
                    disabled={isDownloading}
                    aria-label="원본 다운로드"
                    title="원본 다운로드"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-50 transition-colors"
                >
                    {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                </button>
                {canEdit && onDelete && (
                    <button
                        type="button"
                        onClick={() => setPendingDelete(true)}
                        aria-label="삭제"
                        title="삭제"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-red-500/80 text-white transition-colors"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                )}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="닫기"
                    title="닫기"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {pendingDelete && (
                <Confirm
                    onConfirm={handleConfirmDelete}
                    onCancel={() => setPendingDelete(false)}
                >
                    이 사진을 삭제할까요?
                </Confirm>
            )}
        </div>,
        document.body,
    );
}
