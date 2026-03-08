"use client";

import { useState, useEffect } from "react";
import { MapPin, Users, Clock, Plane } from "lucide-react";
import TravellineLogo from "@/components/TravellineLogo";

// ─── 카운트다운 훅 ────────────────────────────────────────
function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  // SSR 불일치 방지: 초기값을 null로 두고 마운트 후에만 계산
  const [time, setTime] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  useEffect(() => {
    setTime(calc());
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

// ─── 플로팅 아이콘 ────────────────────────────────────────
function FloatingIcon({ icon, className }: { icon: string; className: string }) {
  return (
    <div className={`absolute text-2xl opacity-20 animate-bounce select-none pointer-events-none ${className}`}>
      {icon}
    </div>
  );
}

// ─── 카운트다운 블록 ──────────────────────────────────────
function CountBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center shadow-lg">
        <span className="text-2xl sm:text-3xl font-black text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-semibold text-white/60 uppercase tracking-wider">{label}</span>
    </div>
  );
}

// ─── 메인 커밍순 페이지 ───────────────────────────────────
export default function ComingSoonPage() {
  const target = new Date("2026-06-01T00:00:00+09:00");
  const time = useCountdown(target);
  const { days, hours, minutes, seconds } = time ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />
      </div>

      {/* 플로팅 이모지 */}
      <FloatingIcon icon="✈️" className="top-[8%] left-[10%] animation-delay-0" />
      <FloatingIcon icon="🗺️" className="top-[15%] right-[12%] animation-delay-500" />
      <FloatingIcon icon="🏨" className="bottom-[20%] left-[8%] animation-delay-1000" />
      <FloatingIcon icon="🍜" className="bottom-[15%] right-[10%] animation-delay-700" />
      <FloatingIcon icon="📅" className="top-[45%] left-[4%] animation-delay-300" />
      <FloatingIcon icon="🌏" className="top-[40%] right-[5%] animation-delay-900" />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full gap-8 pt-16 pb-8">

        {/* 로고 */}
        <div className="flex items-center gap-3">
          <TravellineLogo size={36} />
          <span className="text-2xl font-black text-white tracking-tight">Travelline</span>
        </div>

        {/* 배지 */}
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm">
          <Clock className="w-3.5 h-3.5" />
          2026년 6월 정식 오픈 예정
        </div>

        {/* 타이틀 */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            여행을{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
              타임라인
            </span>
            으로<br className="hidden sm:block" />
            함께 계획하세요
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            드래그&드롭 일정 관리 · 실시간 협업 · 지도 연동<br className="hidden sm:block" />
            여행의 모든 순간을 Travelline으로 완성하세요.
          </p>
        </div>

        {/* 피처 3개 */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-md">
          {[
            { icon: <MapPin className="w-4 h-4" />, text: "드래그 타임라인" },
            { icon: <Users className="w-4 h-4" />, text: "실시간 협업" },
            { icon: <Plane className="w-4 h-4" />, text: "지도 연동" },
          ].map((f) => (
            <div
              key={f.text}
              className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-3 py-4 backdrop-blur-sm"
            >
              <div className="w-8 h-8 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                {f.icon}
              </div>
              <span className="text-white/70 text-xs font-semibold text-center leading-tight">{f.text}</span>
            </div>
          ))}
        </div>

        {/* 카운트다운 */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">오픈까지 남은 시간</p>
          <div className="flex items-start gap-3">
            <CountBlock value={days} label="일" />
            <span className="text-white/40 text-2xl font-black mt-3">:</span>
            <CountBlock value={hours} label="시" />
            <span className="text-white/40 text-2xl font-black mt-3">:</span>
            <CountBlock value={minutes} label="분" />
            <span className="text-white/40 text-2xl font-black mt-3">:</span>
            <CountBlock value={seconds} label="초" />
          </div>
        </div>

        {/* 하단 카피 */}
        <p className="text-slate-700 text-xs">
          © 2026 YoonTech (윤테크). All rights reserved.
        </p>
      </div>
    </div>
  );
}