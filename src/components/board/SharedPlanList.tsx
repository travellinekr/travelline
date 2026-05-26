'use client';

import { useEffect, useState } from 'react';
import { Share2 } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { PickerHeader } from './PickerHeader';
import { SharedPlanDetail } from './SharedPlanDetail';

interface SharedPlanItem {
  id: string;
  title: string;
  city: string;
  duration_nights: number;
  duration_days: number;
  created_at: string;
  owner_id: string;
}

interface SharedPlanListProps {
  city: string;
}

export function SharedPlanList({ city }: SharedPlanListProps) {
  const [items, setItems] = useState<SharedPlanItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/shared-plans?city=${encodeURIComponent(city)}`);
        if (!res.ok) throw new Error('공유플랜을 불러오지 못했어요.');
        const data = await res.json();
        if (!cancelled) setItems(Array.isArray(data?.items) ? data.items : []);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || '오류가 발생했어요.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [city]);

  if (selectedPlanId) {
    return (
      <SharedPlanDetail
        planId={selectedPlanId}
        onBack={() => setSelectedPlanId(null)}
      />
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <PickerHeader
        title="공유플랜"
        icon={Share2}
        color="orange"
        count={items.length}
      />

      <div className="pt-2 space-y-2">
        {loading ? (
          [0, 1, 2].map((i) => (
            <div key={i} className="h-[58px] md:h-[72px] bg-slate-100 rounded-xl animate-pulse" />
          ))
        ) : error ? (
          <div className="py-6 text-center text-sm text-red-500">{error}</div>
        ) : items.length === 0 ? (
          <EmptyState icon="🧳" title="아직 공유된 플랜이 없어요" size="md" />
        ) : (
          items.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlanId(plan.id)}
              className="w-full h-[58px] md:h-[72px] rounded-xl border border-orange-100 bg-white hover:border-orange-300 hover:bg-orange-50/40 transition-colors flex items-center gap-3 px-3 text-left"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                <Share2 className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-slate-800 truncate">{plan.title}</div>
                <div className="text-xs text-slate-500 truncate">
                  {plan.duration_nights > 0
                    ? `${plan.duration_nights}박 ${plan.duration_days}일 · ${plan.city}`
                    : plan.city}
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
