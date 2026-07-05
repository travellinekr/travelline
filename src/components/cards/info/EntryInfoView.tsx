'use client';

import { getEntryCardInfo } from '@/data/entryCardGuide';
import { InfoModalShell } from './InfoModalShell';
import { InfoWarnings } from './InfoWarnings';
import { InfoLinksList } from './InfoLinksList';

interface EntryInfoViewProps {
    card: any;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * 입국 정보 팝업 (preparation 카드).
 * 기존 CardInfoModal 내부 렌더 로직을 그대로 이관 — pixel-perfect 유지.
 * entryCardGuide.ts 의 EntryCardInfo 스키마를 5개 섹션으로 정형 렌더.
 */
export function EntryInfoView({ card, isOpen, onClose }: EntryInfoViewProps) {
    const city = card?.city || card?.destinationCity || '';
    const cardTitle = card?.text || card?.title || '입국심사&필요사항';
    const info = getEntryCardInfo(city);

    const subtitle = `${cardTitle}${city ? ` · ${city}` : ''}`;

    return (
        <InfoModalShell
            isOpen={isOpen}
            title="입국 정보"
            subtitle={subtitle}
            onClose={onClose}
        >
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
                    <InfoWarnings warnings={info.warnings} />

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
                    <InfoLinksList links={info.links} />
                </>
            )}
        </InfoModalShell>
    );
}
