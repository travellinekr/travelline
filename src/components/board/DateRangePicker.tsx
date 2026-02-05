import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface DateRangePickerProps {
    onConfirm: (startDate: Date, endDate: Date) => void;
    onClose: () => void;
    singleDateMode?: boolean;  // 단일 날짜 선택 모드
    initialMonth?: Date;  // 초기 표시 월 (destination 카드의 month 기반)
}

export function DateRangePicker({ onConfirm, onClose, singleDateMode = false, initialMonth }: DateRangePickerProps) {
    const [currentMonth, setCurrentMonth] = useState(initialMonth || new Date());
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

    const handleDateClick = (date: Date) => {
        if (singleDateMode) {
            // 단일 날짜 모드: 클릭 즉시 선택하고 확인
            setStartDate(date);
            setEndDate(date);
            onConfirm(date, date);
            onClose();
        } else {
            // 범위 선택 모드
            if (!startDate || (startDate && endDate)) {
                // 시작 날짜 선택
                setStartDate(date);
                setEndDate(null);
            } else if (date >= startDate) {
                // 종료 날짜 선택
                setEndDate(date);
            } else {
                // 시작 날짜보다 이전 날짜 클릭 시 새로 시작
                setStartDate(date);
                setEndDate(null);
            }
        }
    };

    const handleConfirm = () => {
        if (startDate && endDate) {
            onConfirm(startDate, endDate);
            onClose();
        }
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const isInRange = (date: Date) => {
        if (!startDate || !endDate) return false;
        return date >= startDate && date <= endDate;
    };

    const isStartDate = (date: Date) => {
        if (!startDate) return false;
        return date.getTime() === startDate.getTime();
    };

    const isEndDate = (date: Date) => {
        if (!endDate) return false;
        return date.getTime() === endDate.getTime();
    };

    const isPastDate = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const renderMonth = (monthOffset: number) => {
        const targetMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + monthOffset);
        const daysInMonth = new Date(targetMonth.getFullYear(), targetMonth.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(targetMonth.getFullYear(), targetMonth.getMonth(), 1).getDay();

        const days = [];

        // 빈 칸 채우기
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="h-10" />);
        }

        // 날짜 렌더링
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(targetMonth.getFullYear(), targetMonth.getMonth(), day);
            const inRange = isInRange(date);
            const isStart = isStartDate(date);
            const isEnd = isEndDate(date);
            const isPast = isPastDate(date);

            days.push(
                <button
                    key={day}
                    onClick={() => !isPast && handleDateClick(date)}
                    disabled={isPast}
                    className={`h-10 md:h-12 flex items-center justify-center rounded-lg text-sm md:text-base transition-colors ${isPast
                        ? 'text-slate-300 cursor-not-allowed'
                        : isStart || isEnd
                            ? 'bg-blue-600 text-white font-semibold hover:bg-blue-700'
                            : inRange
                                ? 'bg-blue-50 text-blue-700'
                                : 'hover:bg-gray-100 text-slate-700'
                        }`}
                >
                    {day}
                </button>
            );
        }

        return (
            <div className="flex-1 min-w-0">
                {/* Month Header */}
                <h4 className="font-semibold text-slate-800 mb-4">
                    {targetMonth.getFullYear()}년 {monthNames[targetMonth.getMonth()]}
                </h4>

                {/* Day Names */}
                <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2">
                    {dayNames.map(name => (
                        <div key={name} className="h-8 md:h-10 flex items-center justify-center text-xs md:text-sm font-medium text-slate-500">
                            {name}
                        </div>
                    ))}
                </div>

                {/* Days */}
                <div className="grid grid-cols-7 gap-1 md:gap-2">
                    {days}
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            {/* Calendar - 모바일: 하단 시트, 데스크톱: 중앙 모달 */}
            <div className="relative bg-white w-full md:max-w-4xl md:rounded-2xl shadow-2xl max-h-[85vh] overflow-auto rounded-t-3xl md:rounded-b-2xl pb-20 md:pb-0">
                {/* Header */}
                <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-4 md:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                                <ChevronLeft className="w-5 h-5 text-slate-600" />
                            </button>
                            <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                                <ChevronRight className="w-5 h-5 text-slate-600" />
                            </button>
                        </div>

                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
                            <X className="w-5 h-5 text-slate-500" />
                        </button>
                    </div>

                    {/* Selected Dates Display */}
                    {!singleDateMode && (
                        <div className="flex gap-4 mt-4 text-sm">
                            <div className="flex-1">
                                <span className="text-slate-500 block mb-1">출발</span>
                                <div className="px-3 py-2 border border-blue-500 rounded-lg bg-blue-50">
                                    <span className="font-semibold text-blue-700">
                                        {startDate ? startDate.toLocaleDateString('ko-KR') : '날짜 선택'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <span className="text-slate-500 block mb-1">귀국</span>
                                <div className="px-3 py-2 border border-gray-300 rounded-lg">
                                    <span className="font-semibold text-slate-800">
                                        {endDate ? endDate.toLocaleDateString('ko-KR') : '날짜 선택'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Calendar Grid - 2개월 표시 */}
                <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        {renderMonth(0)}
                        {renderMonth(1)}
                    </div>
                </div>

                {/* Footer Buttons - 단일 날짜 모드에서는 숨김 */}
                {!singleDateMode && (
                    <div className="sticky bottom-0 bg-white border-t border-gray-200 flex gap-3 px-4 md:px-6 py-4">
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-slate-700 font-medium hover:bg-gray-50 transition-colors"
                        >
                            취소
                        </button>
                        <button
                            onClick={handleConfirm}
                            disabled={!startDate || !endDate}
                            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            확인
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
