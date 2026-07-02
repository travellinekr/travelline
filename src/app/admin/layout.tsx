'use client';

import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminGuard } from '@/components/admin/AdminGuard';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminGuard>
            <div className="min-h-dvh bg-slate-50 md:flex">
                <AdminSidebar />
                <main className="flex-1 min-w-0 px-4 py-6 md:px-8 md:py-8">
                    {children}
                </main>
            </div>
        </AdminGuard>
    );
}
