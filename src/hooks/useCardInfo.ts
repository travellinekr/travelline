'use client';

import { useEffect, useState } from 'react';
import { CATEGORY_TO_INFO_FILE } from '@/data/card-info-types';

// engName → slug 변환 (destinations.ts 관례)
function engNameToSlug(engName: string): string {
    return engName.toLowerCase().replace(/\s+/g, '-');
}

// 모듈 로드 결과 in-memory 캐시 (세션 동안 유지)
// key: `${slug}:${categoryFile}`, value: Record<name, InfoData>
const infoCache = new Map<string, Record<string, unknown> | null>();

/**
 * 카드 인포 데이터를 dynamic import 로 지연 로드.
 * - 초기 번들에 인포 데이터 미포함 (진입 속도 무영향)
 * - 첫 호출 시 chunk 로드 후 캐시, 재클릭 시 즉시
 */
export function useCardInfo(category: string | undefined, cityEngName: string | undefined, itemName: string | undefined) {
    const [info, setInfo] = useState<unknown | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!category || !cityEngName || !itemName) {
            setInfo(null);
            setLoading(false);
            return;
        }
        const categoryFile = CATEGORY_TO_INFO_FILE[category];
        if (!categoryFile) {
            setInfo(null);
            setLoading(false);
            return;
        }
        const slug = engNameToSlug(cityEngName);
        const cacheKey = `${slug}:${categoryFile}`;

        // 캐시 히트 → 즉시 반환
        if (infoCache.has(cacheKey)) {
            const cached = infoCache.get(cacheKey);
            setInfo(cached?.[itemName] ?? null);
            setLoading(false);
            return;
        }

        let cancelled = false;
        setLoading(true);
        // dynamic import (webpack code-splitting 발생)
        import(`@/data/cities/${slug}/info/${categoryFile}`)
            .then((module) => {
                if (cancelled) return;
                const record = (module.default ?? {}) as Record<string, unknown>;
                infoCache.set(cacheKey, record);
                setInfo(record[itemName] ?? null);
            })
            .catch(() => {
                if (cancelled) return;
                infoCache.set(cacheKey, null); // 파일 없음 캐싱 (재시도 방지)
                setInfo(null);
            })
            .finally(() => {
                if (cancelled) return;
                setLoading(false);
            });
        return () => { cancelled = true; };
    }, [category, cityEngName, itemName]);

    return { info, loading };
}
