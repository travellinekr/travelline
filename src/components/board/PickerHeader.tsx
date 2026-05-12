'use client';

import Link from 'next/link';
import { Map, ShoppingBag, type LucideIcon } from 'lucide-react';
import { useAnchor } from '@/contexts/AnchorContext';
import { citySlugFromName, findCityByName, findCityByEngSlug } from '@/data/destinations';
import { useExploreOverlay } from '@/contexts/ExploreOverlayContext';

type PickerColor = 'orange' | 'rose' | 'purple' | 'cyan' | 'indigo' | 'blue' | 'amber';
type PickerCategory = 'food' | 'hotel' | 'shopping' | 'tourspa';

// Tailwind purge 위해 정적 매핑
const COLOR_CLASSES: Record<PickerColor, { iconText: string; btnText: string; btnHoverBg: string }> = {
    orange: { iconText: 'text-orange-500', btnText: 'text-orange-500', btnHoverBg: 'hover:bg-orange-50' },
    rose: { iconText: 'text-rose-500', btnText: 'text-rose-500', btnHoverBg: 'hover:bg-rose-50' },
    purple: { iconText: 'text-purple-500', btnText: 'text-purple-500', btnHoverBg: 'hover:bg-purple-50' },
    cyan: { iconText: 'text-cyan-500', btnText: 'text-cyan-500', btnHoverBg: 'hover:bg-cyan-50' },
    indigo: { iconText: 'text-indigo-500', btnText: 'text-indigo-500', btnHoverBg: 'hover:bg-indigo-50' },
    blue: { iconText: 'text-blue-400', btnText: 'text-blue-400', btnHoverBg: 'hover:bg-blue-50' },
    amber: { iconText: 'text-amber-500', btnText: 'text-amber-500', btnHoverBg: 'hover:bg-amber-50' },
};

interface PickerHeaderProps {
    title: string;
    icon: LucideIcon;
    color: PickerColor;
    count: number;
    // 지도/쇼핑 버튼은 4개 picker(food/hotel/shopping/tourspa)에서만 사용
    destinationCity?: string;
    roomId?: string;
    category?: PickerCategory;
    onMapClick?: () => void;
    mapDisabled?: boolean;
}

export function PickerHeader({
    title,
    icon: Icon,
    color,
    count,
    destinationCity,
    roomId,
    category,
    onMapClick,
    mapDisabled,
}: PickerHeaderProps) {
    const { anchorCard } = useAnchor();
    const overlay = useExploreOverlay();
    const palette = COLOR_CLASSES[color];
    const showButtons = !!category && !!onMapClick;

    const slug = destinationCity ? citySlugFromName(destinationCity) : null;
    let shopHref = '#';
    if (slug && category) {
        const params = new URLSearchParams();
        params.set('city', slug);
        params.set('category', category);
        if (roomId) params.set('from', roomId);
        if (anchorCard?.coordinates) {
            params.set('anchorLat', String(anchorCard.coordinates.lat));
            params.set('anchorLng', String(anchorCard.coordinates.lng));
            params.set('anchorTitle', anchorCard.text || anchorCard.title || '');
        }
        shopHref = `/explore?${params.toString()}`;
    }

    // 룸 안 (overlay context 존재) 에서는 클릭 시 모달 오버레이로 띄움 (URL 변경 X)
    const handleShopClick = (e: React.MouseEvent) => {
        if (!slug) { e.preventDefault(); return; }
        if (!overlay || !category) return; // fallback: Link 동작
        // city/region 정보 lookup
        const found = destinationCity
            ? (findCityByName(destinationCity) ?? findCityByEngSlug(slug))
            : findCityByEngSlug(slug);
        if (!found) return; // fallback
        e.preventDefault();
        overlay.open({
            city: found.city,
            region: found.region,
            category,
            anchorCard,
        });
    };

    const activeBtnCls = `${palette.btnText} ${palette.btnHoverBg}`;
    const disabledBtnCls = 'text-slate-300 cursor-not-allowed';

    return (
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2 min-w-0">
                <Icon className={`w-5 h-5 ${palette.iconText} shrink-0`} />
                <h3 className="font-bold text-slate-800 truncate">
                    {title}
                    <span className="text-xs text-slate-500 font-medium ml-0.5">({count}개)</span>
                </h3>
            </div>
            {showButtons && (
                <div className="flex items-center gap-1 shrink-0">
                    <button
                        type="button"
                        onClick={onMapClick}
                        disabled={mapDisabled}
                        title={!mapDisabled ? '지도에서 보기' : '표시할 위치 없음'}
                        className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold transition-colors ${!mapDisabled ? activeBtnCls : disabledBtnCls}`}
                    >
                        <Map className="w-4 h-4" />
                        지도
                    </button>
                    <Link
                        href={shopHref}
                        onClick={handleShopClick}
                        title={slug ? '여행쇼핑에서 보기' : '여행쇼핑에서 볼 수 없는 도시'}
                        className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold transition-colors ${slug ? activeBtnCls : disabledBtnCls}`}
                        aria-disabled={!slug}
                    >
                        <ShoppingBag className="w-4 h-4" />
                        쇼핑
                    </Link>
                </div>
            )}
        </div>
    );
}
