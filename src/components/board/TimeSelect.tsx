interface TimeSelectProps {
    hour: string;
    minute: string;
    onHourChange: (value: string) => void;
    onMinuteChange: (value: string) => void;
    label: string;
}

export function TimeSelect({ hour, minute, onHourChange, onMinuteChange, label }: TimeSelectProps) {
    const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    const minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

    return (
        <div>
            <label className="block text-xs text-slate-500 mb-1">{label}</label>
            <div className="flex gap-1 sm:gap-2">
                <select
                    value={hour}
                    onChange={(e) => onHourChange(e.target.value)}
                    className="flex-1 px-2 sm:px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                >
                    <option value="">시</option>
                    {hours.map(h => (
                        <option key={h} value={h}>
                            {h}
                        </option>
                    ))}
                </select>
                <span className="flex items-center text-slate-500 px-0.5">:</span>
                <select
                    value={minute}
                    onChange={(e) => onMinuteChange(e.target.value)}
                    className="flex-1 px-2 sm:px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                >
                    <option value="">분</option>
                    {minutes.map(m => (
                        <option key={m} value={m}>
                            {m}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
