'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, LayoutDashboard, Compass, Database, Sparkles, Image as ImageIcon, Map, Users2, Bot } from 'lucide-react';

interface MenuItem {
    href: string;
    label: string;
    icon: React.ReactNode;
    dotColor?: string; // API 그룹의 색상 표식
}

const OVERVIEW: MenuItem[] = [
    { href: '/admin', label: '개요', icon: <LayoutDashboard className="w-4 h-4" /> },
    { href: '/admin/travelline', label: 'Travelline', icon: <Compass className="w-4 h-4" /> },
];

const APIS: MenuItem[] = [
    { href: '/admin/supabase', label: 'Supabase', icon: <Database className="w-4 h-4" />, dotColor: 'bg-emerald-500' },
    { href: '/admin/gemini', label: 'Gemini', icon: <Sparkles className="w-4 h-4" />, dotColor: 'bg-blue-500' },
    { href: '/admin/unsplash', label: 'Unsplash', icon: <ImageIcon className="w-4 h-4" />, dotColor: 'bg-slate-800' },
    { href: '/admin/google-maps', label: 'Google Maps', icon: <Map className="w-4 h-4" />, dotColor: 'bg-red-500' },
    { href: '/admin/codex', label: 'Codex', icon: <Bot className="w-4 h-4" />, dotColor: 'bg-zinc-900' },
    { href: '/admin/liveblocks', label: 'Liveblocks', icon: <Users2 className="w-4 h-4" />, dotColor: 'bg-purple-500' },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const renderLink = (item: MenuItem) => {
        const active = pathname === item.href;
        return (
            <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                    active
                        ? 'bg-slate-100 text-slate-900 font-medium'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
                {item.dotColor && <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />}
                {!item.dotColor && item.icon}
                <span>{item.label}</span>
            </Link>
        );
    };

    return (
        <>
            {/* 모바일 헤더 */}
            <div className="md:hidden sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
                <span className="text-base font-semibold text-slate-900">관리자 대시보드</span>
                <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    aria-label="메뉴 열기"
                    className="p-2 rounded-md hover:bg-slate-100"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>

            {/* 모바일 오버레이 */}
            {mobileOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 bg-black/40"
                    onClick={() => setMobileOpen(false)}
                    onKeyDown={(e) => e.key === 'Escape' && setMobileOpen(false)}
                />
            )}

            {/* 사이드바 */}
            <aside
                className={`
                    fixed md:sticky top-0 z-50 md:z-auto
                    h-dvh md:h-screen w-60 shrink-0
                    border-r border-slate-200 bg-white
                    transition-transform duration-200
                    ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100">
                    <span className="text-base font-semibold text-slate-900">관리자 대시보드</span>
                    <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        aria-label="메뉴 닫기"
                        className="md:hidden p-1 rounded-md hover:bg-slate-100"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <nav className="p-3 space-y-4">
                    <div className="space-y-0.5">
                        {OVERVIEW.map(renderLink)}
                    </div>
                    <div>
                        <div className="px-3 pb-1.5 text-xs uppercase tracking-wide text-slate-400">API 현황</div>
                        <div className="space-y-0.5">
                            {APIS.map(renderLink)}
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    );
}
