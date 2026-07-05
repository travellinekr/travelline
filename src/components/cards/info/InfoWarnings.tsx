// 인포 팝업 노란 경고 박스 리스트. 빈 배열/undefined 면 아무것도 렌더 안 함.
export function InfoWarnings({ warnings }: { warnings?: string[] }) {
    if (!warnings || warnings.length === 0) return null;
    return (
        <div className="space-y-2">
            {warnings.map((w, i) => (
                <div key={i} className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 text-sm text-amber-800 font-medium">
                    {w}
                </div>
            ))}
        </div>
    );
}
