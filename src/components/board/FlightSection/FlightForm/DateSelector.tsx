import { Calendar } from "lucide-react";
import { DateRangePicker } from "../../DateRangePicker";

interface DateSelectorProps {
    departureDate: Date | null;
    arrivalDate: Date | null;
    showDatePicker: boolean;
    onShowDatePicker: () => void;
    onConfirm: (start: Date, end: Date) => void;
    onClose: () => void;
}

export function DateSelector({
    departureDate,
    arrivalDate,
    showDatePicker,
    onShowDatePicker,
    onConfirm,
    onClose
}: DateSelectorProps) {
    return (
        <>
            <div>
                <label className="block text-xs text-slate-500 mb-2">여행 기간</label>
                <button
                    onClick={onShowDatePicker}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-left hover:border-purple-500 transition-colors flex items-center gap-3"
                >
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <div className="flex-1">
                        {departureDate && arrivalDate ? (
                            <span className="text-sm font-medium text-slate-700">
                                {departureDate.toLocaleDateString('ko-KR')} ~ {arrivalDate.toLocaleDateString('ko-KR')}
                            </span>
                        ) : (
                            <span className="text-sm text-slate-400">날짜를 선택하세요</span>
                        )}
                    </div>
                </button>
            </div>

            {showDatePicker && (
                <DateRangePicker
                    onConfirm={onConfirm}
                    onClose={onClose}
                />
            )}
        </>
    );
}
