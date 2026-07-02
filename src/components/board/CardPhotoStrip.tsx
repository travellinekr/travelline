'use client';

import { useEffect, useRef, useState } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import { useRoom, useStorage } from '../../liveblocks.config';
import { useCardMutations } from '@/hooks/useCardMutations';
import { buildOriginalAndThumbnail } from '@/utils/imageResize';
import { useSessionContext, getCachedAccessToken } from '@/contexts/SessionContext';
import { PhotoActionSheet } from './PhotoActionSheet';
import { PhotoLightbox } from './PhotoLightbox';

export const MAX_PHOTOS_PER_CARD = 20;

interface CardPhotoStripProps {
    cardId: string;
    photos: any[];
    canEdit?: boolean;
    onToast?: (message: string, type?: 'info' | 'warning') => void;
    onSelectPhoto?: (index: number) => void;
}

export function CardPhotoStrip({ cardId, photos, canEdit = true, onToast, onSelectPhoto }: CardPhotoStripProps) {
    const room = useRoom();
    const { addCardPhoto, removeCardPhoto } = useCardMutations();
    const sessionCtx = useSessionContext();

    // 여행 종료일 — 사진 원본 라이프사이클 판정용 (업로드 시 photos 테이블에 함께 저장)
    // return.arrivalDate(도착일) 우선, 없으면 return.date(출발일), 둘 다 없으면 null → 크론 삭제 대상 제외
    const tripEndDate = useStorage((root) => {
        const fi = (root as any).flightInfo;
        return fi?.return?.arrivalDate || fi?.return?.date || null;
    });

    const [isUploading, setIsUploading] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const dragStateRef = useRef<{ startX: number; startScrollLeft: number; moved: boolean } | null>(null);
    const suppressClickRef = useRef(false);

    // 데스크톱: 마우스 휠 세로 입력 → 가로 스크롤 변환
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const handler = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
            if (el.scrollWidth <= el.clientWidth) return;
            e.preventDefault();
            el.scrollLeft += e.deltaY;
        };
        el.addEventListener('wheel', handler, { passive: false });
        return () => el.removeEventListener('wheel', handler);
    }, []);

    // 데스크톱: 클릭 + 드래그 = 가로 스크롤 ("grab-to-scroll")
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        if (e.button !== 0) return; // 좌클릭만
        dragStateRef.current = {
            startX: e.clientX,
            startScrollLeft: scrollRef.current.scrollLeft,
            moved: false,
        };

        const handleMove = (ev: MouseEvent) => {
            if (!dragStateRef.current || !scrollRef.current) return;
            const dx = ev.clientX - dragStateRef.current.startX;
            if (Math.abs(dx) > 5) dragStateRef.current.moved = true;
            if (dragStateRef.current.moved) {
                scrollRef.current.scrollLeft = dragStateRef.current.startScrollLeft - dx;
            }
        };
        const handleUp = () => {
            if (dragStateRef.current?.moved) {
                // 드래그가 발생했으면 직후 click 이벤트는 무시 (썸네일 선택 방지)
                suppressClickRef.current = true;
                setTimeout(() => { suppressClickRef.current = false; }, 0);
            }
            dragStateRef.current = null;
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleUp);
        };
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleUp);
    };

    const limitReached = photos.length >= MAX_PHOTOS_PER_CARD;
    const canAdd = canEdit && !isUploading && !limitReached;

    const triggerPicker = (mode: 'camera' | 'library') => {
        if (!canAdd) return;
        if (mode === 'camera') cameraInputRef.current?.click();
        else fileInputRef.current?.click();
    };

    const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        e.target.value = '';
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            onToast?.('5MB 이하 사진만 추가할 수 있어요.', 'warning');
            return;
        }
        await uploadPhoto(file);
    };

    const uploadPhoto = async (file: File) => {
        setIsUploading(true);
        try {
            const { original, thumbnail } = await buildOriginalAndThumbnail(file);
            const token = await getCachedAccessToken(sessionCtx);
            if (!token) {
                onToast?.('로그인이 필요해요.', 'warning');
                return;
            }
            const form = new FormData();
            form.append('projectId', room.id);
            form.append('cardId', cardId);
            form.append('original', original.blob, 'original.jpg');
            form.append('thumbnail', thumbnail.blob, 'thumbnail.jpg');
            // 여행 종료일 (업로드 시점) — 서버가 photos 테이블에 저장, 크론이 종료+14일 이후 원본 삭제
            if (tripEndDate) form.append('tripEndDate', tripEndDate);
            const res = await fetch('/api/photos/upload', {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
                body: form,
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                onToast?.(data?.error || '업로드에 실패했어요.', 'warning');
                return;
            }
            const photo = await res.json();
            addCardPhoto({ cardId, photo });
        } catch (e: any) {
            console.error('[CardPhotoStrip] upload error:', e);
            onToast?.(e?.message || '업로드 중 오류가 발생했어요.', 'warning');
        } finally {
            setIsUploading(false);
        }
    };

    const handleThumbnailClick = (idx: number) => {
        if (suppressClickRef.current) return; // 드래그 후 click 억제
        setLightboxIndex(idx);
        onSelectPhoto?.(idx);
    };

    const handleDeleteFromLightbox = (photoId: string) => {
        removeCardPhoto({ cardId, photoId });
    };

    return (
        <div className="bg-slate-50/50 border-t border-slate-100 px-3 py-2">
            <div className="flex items-center gap-2">
                {/* + 버튼 (왼쪽 고정, 스크롤 영향 안 받음) */}
                {canEdit && (
                    <button
                        type="button"
                        onClick={() => setIsSheetOpen(true)}
                        disabled={!canAdd}
                        title={limitReached ? `최대 ${MAX_PHOTOS_PER_CARD}장까지 첨부 가능` : '사진 추가'}
                        className={`shrink-0 w-16 h-16 rounded-lg border-2 border-dashed flex flex-col items-center justify-center transition-colors ${canAdd
                            ? 'border-orange-300 text-orange-500 hover:bg-orange-50 hover:border-orange-400'
                            : 'border-slate-200 text-slate-300 cursor-not-allowed'
                            }`}
                    >
                        {isUploading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <Plus className="w-5 h-5" />
                                <span className="text-[10px] font-semibold mt-0.5">사진</span>
                            </>
                        )}
                    </button>
                )}

                {/* 썸네일 영역 — 가로 스크롤 (드래그-스크롤 지원, 최신순) */}
                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    className="flex-1 min-w-0 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none"
                >
                    <div className="flex items-center gap-2">
                        {photos.map((p, idx) => (
                            <button
                                key={p?.id ?? idx}
                                type="button"
                                onClick={() => handleThumbnailClick(idx)}
                                className="shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 hover:border-orange-400 transition-colors"
                            >
                                {p?.thumbnailUrl && (
                                    <img
                                        src={p.thumbnailUrl}
                                        alt={`photo-${idx}`}
                                        loading="lazy"
                                        draggable={false}
                                        className="w-full h-full object-cover pointer-events-none"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                    />
                                )}
                            </button>
                        ))}
                        {photos.length === 0 && !canEdit && (
                            <div className="text-xs text-slate-400 italic px-2">사진 없음</div>
                        )}
                    </div>
                </div>
            </div>

            {/* 한도 표시 */}
            {canEdit && photos.length > 0 && (
                <div className="text-[10px] text-slate-400 mt-1 px-1">
                    {photos.length} / {MAX_PHOTOS_PER_CARD}
                </div>
            )}

            {/* hidden file inputs */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
            />
            <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFile}
                className="hidden"
            />

            <PhotoActionSheet
                isOpen={isSheetOpen}
                onClose={() => setIsSheetOpen(false)}
                onPick={triggerPicker}
            />

            <PhotoLightbox
                isOpen={lightboxIndex !== null}
                photos={photos}
                initialIndex={lightboxIndex ?? 0}
                canEdit={canEdit}
                tripEndDate={tripEndDate}
                onClose={() => setLightboxIndex(null)}
                onDelete={handleDeleteFromLightbox}
            />
        </div>
    );
}
