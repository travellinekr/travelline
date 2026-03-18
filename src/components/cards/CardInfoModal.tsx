'use client';

import { X, ExternalLink, BookOpen, Globe } from 'lucide-react';
import { createPortal } from 'react-dom';
import { getEntryCardInfo, EntryLink } from '@/data/entryCardGuide';

interface CardInfoModalProps {
    card: any;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * 링크 타입별 아이콘 & 스타일
 */
function LinkIcon({ type }: { type: EntryLink['type'] }) {
    if (type === 'official') return <Globe className="w-3.5 h-3.5 shrink-0" />;
    if (type === 'blog') return <BookOpen className="w-3.5 h-3.5 shrink-0" />;
    return <ExternalLink className="w-3.5 h-3.5 shrink-0" />;
}

function linkStyle(type: EntryLink['type']) {
    if (type === 'official') return 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100';
    if (type === 'blog') return 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100';
    return 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100';
}

function linkTypeBadge(type: EntryLink['type']) {
    if (type === 'official') return '공식';
    if (type === 'blog') return '블로그';
    return '가이드';
}

/**
 * 링크 클릭 핸들러: 데스크탑 → 새 탭, 모바일 → 기본 브라우저 앱
 */
function handleLinkOpen(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Info 버튼 클릭 시 표시되는 읽기 전용 모달
 * entryCardGuide의 데이터를 직접 렌더링 (BlockNote 미사용)
 */
export function CardInfoModal({ card, isOpen, onClose }: CardInfoModalProps) {
    if (!card?.isEntryCard) return null;
    if (!isOpen) return null;

    const city = card.city || card.destinationCity || '';
    const cardTitle = card.text || card.title || '입국심사&필요사항';
    const info = getEntryCardInfo(city);

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
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 본문 스크롤 영역 */}
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                    {!info ? (
                        <p className="text-sm text-gray-400 text-center mt-10">
                            {city}의 입국 정보를 찾을 수 없습니다.<br />
                            여행 전 해당 국가 대사관 또는 공식 사이트를 확인해주세요.
                        </p>
                    ) : (
                        <>
                            {/* 상태 배지 */}
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{info.statusEmoji}</span>
                                <span className="text-base font-bold text-gray-800">{info.status}</span>
                                {info.updatedAt && (
                                    <span className="ml-auto text-[10px] text-gray-400 shrink-0">
                                        {info.updatedAt} 기준
                                    </span>
                                )}
                            </div>

                            {/* 경고 메시지 */}
                            {info.warnings.length > 0 && (
                                <div className="space-y-2">
                                    {info.warnings.map((w, i) => (
                                        <div key={i} className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 text-sm text-amber-800 font-medium">
                                            {w}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* 상세 정보 */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">입국 요건</h3>
                                <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                                    {info.details.map((d, i) => (
                                        <div key={i} className="flex items-start gap-3 px-4 py-3">
                                            <span className="text-xs font-bold text-gray-500 w-24 shrink-0 pt-0.5">{d.label}</span>
                                            <span className="text-sm text-gray-700 flex-1">{d.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 신청 절차 */}
                            {info.process && info.process.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">신청 절차</h3>
                                    <div className="space-y-2">
                                        {info.process.map((p) => (
                                            <div key={p.step} className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                                    {p.step}
                                                </span>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-800">{p.title}</p>
                                                    <p className="text-xs text-gray-500 mt-0.5">{p.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 유용한 링크 */}
                            {info.links && info.links.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">유용한 링크</h3>
                                    <div className="space-y-2">
                                        {info.links.map((link, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleLinkOpen(link.url)}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-colors ${linkStyle(link.type)}`}
                                            >
                                                <LinkIcon type={link.type} />
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-semibold truncate">{link.label}</span>
                                                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/60 shrink-0">
                                                            {linkTypeBadge(link.type)}
                                                        </span>
                                                    </div>
                                                    {link.description && (
                                                        <p className="text-xs opacity-70 mt-0.5 truncate">{link.description}</p>
                                                    )}
                                                </div>
                                                <ExternalLink className="w-3.5 h-3.5 opacity-50 shrink-0" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
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
