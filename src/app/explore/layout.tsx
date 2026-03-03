import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function ExploreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen bg-slate-50 font-sans text-slate-700 flex flex-col overflow-hidden">
            <DashboardHeader />
            <div className="flex-1 min-h-0 flex flex-col overflow-hidden">{children}</div>
        </div>
    );
}
