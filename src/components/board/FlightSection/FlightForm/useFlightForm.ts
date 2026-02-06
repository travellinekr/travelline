import { useState, useEffect } from "react";
import { useMutation } from "@liveblocks/react/suspense";
import { LiveObject, LiveList } from "@liveblocks/client";
import type { Card, FlightInfo } from "@/liveblocks.config";
import { KOREAN_AIRPORTS } from "@/data/airports";
import { calculateTripDays, calculateTripDaysFromFlightInfo } from "@/utils/calculateTripDays";
import { useCardMutations } from "@/hooks/useCardMutations";

export function useFlightForm(
    destinationCard: Card | null | undefined,
    flightInfo: FlightInfo | null,
    addToast: (message: string, type: 'info' | 'warning') => void,
    onConfirm: (data: any) => void
) {
    // Card mutations for creating flight cards
    const { createCardToColumn } = useCardMutations();
    // Date states
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);

    // Outbound states
    const [outboundDepartureAirport, setOutboundDepartureAirport] = useState(`${KOREAN_AIRPORTS[0].name} (${KOREAN_AIRPORTS[0].code})`);
    const [outboundDepartureTerminal, setOutboundDepartureTerminal] = useState('');
    const [outboundDepartureDate, setOutboundDepartureDate] = useState('');
    const [outboundArrivalAirport, setOutboundArrivalAirport] = useState('');
    const [outboundArrivalTerminal, setOutboundArrivalTerminal] = useState('');
    const [outboundArrivalDate, setOutboundArrivalDate] = useState('');
    const [outboundHour, setOutboundHour] = useState('');
    const [outboundMinute, setOutboundMinute] = useState('');
    const [outboundArrivalHour, setOutboundArrivalHour] = useState('');
    const [outboundArrivalMinute, setOutboundArrivalMinute] = useState('');
    const [outboundAirline, setOutboundAirline] = useState('');
    const [isOutboundArrivalCustom, setIsOutboundArrivalCustom] = useState(false);

    // Return states
    const [returnDepartureAirport, setReturnDepartureAirport] = useState('');
    const [returnDepartureTerminal, setReturnDepartureTerminal] = useState('');
    const [returnDepartureDate, setReturnDepartureDate] = useState('');
    const [returnArrivalAirport, setReturnArrivalAirport] = useState('');
    const [returnArrivalTerminal, setReturnArrivalTerminal] = useState('');
    const [returnArrivalDate, setReturnArrivalDate] = useState('');
    const [isReturnDepartureCustom, setIsReturnDepartureCustom] = useState(false);
    const [isReturnArrivalCustom, setIsReturnArrivalCustom] = useState(false);
    const [returnHour, setReturnHour] = useState('');
    const [returnMinute, setReturnMinute] = useState('');
    const [returnArrivalHour, setReturnArrivalHour] = useState('');
    const [returnArrivalMinute, setReturnArrivalMinute] = useState('');
    const [returnAirline, setReturnAirline] = useState('');

    // Stopover states
    const [outboundStopovers, setOutboundStopovers] = useState<Array<{
        departureAirport: string;
        departureTerminal: string;
        departureDate: string;
        arrivalAirport: string;
        arrivalTerminal: string;
        arrivalDate: string;
        hour: string;
        minute: string;
        arrivalHour: string;
        arrivalMinute: string;
        airline: string;
        isCustomArrival?: boolean;
    }>>([]);

    const [returnStopovers, setReturnStopovers] = useState<Array<{
        departureAirport: string;
        departureTerminal: string;
        departureDate: string;
        arrivalAirport: string;
        arrivalTerminal: string;
        arrivalDate: string;
        hour: string;
        minute: string;
        arrivalHour: string;
        arrivalMinute: string;
        airline: string;
        isCustomArrival?: boolean;
    }>>([]);

    const destinationAirports = destinationCard?.airports || [];
    const hasMultipleAirports = destinationAirports.length > 1;

    // Reset all flight form fields
    const resetFlightForm = () => {
        // Dates
        setDepartureDate(null);
        setArrivalDate(null);

        // Outbound flight
        setOutboundDepartureAirport(`${KOREAN_AIRPORTS[0].name} (${KOREAN_AIRPORTS[0].code})`);
        setOutboundDepartureTerminal('');
        setOutboundDepartureDate('');
        setOutboundArrivalAirport('');
        setOutboundArrivalTerminal('');
        setOutboundArrivalDate('');
        setOutboundHour('');
        setOutboundMinute('');
        setOutboundArrivalHour('');
        setOutboundArrivalMinute('');
        setOutboundAirline('');
        setIsOutboundArrivalCustom(false);

        // Return flight
        setReturnDepartureAirport('');
        setReturnDepartureTerminal('');
        setReturnDepartureDate('');
        setReturnArrivalAirport('');
        setReturnArrivalTerminal('');
        setReturnArrivalDate('');
        setReturnHour('');
        setReturnMinute('');
        setReturnArrivalHour('');
        setReturnArrivalMinute('');
        setReturnAirline('');
        setIsReturnDepartureCustom(false);
        setIsReturnArrivalCustom(false);

        // Stopovers
        setOutboundStopovers([]);
        setReturnStopovers([]);
    };

    // Auto-fill arrival airport if only one option
    useEffect(() => {
        // Reset form when destination changes
        resetFlightForm();

        if (destinationAirports.length === 1) {
            const autoValue = `${destinationAirports[0].name} (${destinationAirports[0].code})`;
            setOutboundArrivalAirport(autoValue);
        } else if (destinationAirports.length === 0) {
            setOutboundArrivalAirport('');
        }
    }, [destinationCard?.id, destinationAirports.length]);

    // Auto-update return airports based on outbound
    // ⚠️ DISABLED: This causes UI/state sync issues when airports are not in the dropdown list
    // Users should manually select return airports
    // useEffect(() => {
    //     setReturnDepartureAirport(outboundArrivalAirport);
    //     setReturnArrivalAirport(outboundDepartureAirport);
    // }, [outboundDepartureAirport, outboundArrivalAirport, flightInfo]);

    // Auto-connect segments: outbound → stopovers → return
    useEffect(() => {
        // Connect outbound arrival to first stopover departure
        if (outboundStopovers.length > 0 && outboundArrivalAirport) {
            const updated = [...outboundStopovers];
            if (updated[0].departureAirport !== outboundArrivalAirport) {
                updated[0].departureAirport = outboundArrivalAirport;
                setOutboundStopovers(updated);
            }
        }
    }, [outboundArrivalAirport]);

    useEffect(() => {
        // Connect stopovers: stopover1 arrival → stopover2 departure
        if (outboundStopovers.length >= 2) {
            const updated = [...outboundStopovers];
            let changed = false;
            for (let i = 0; i < outboundStopovers.length - 1; i++) {
                if (updated[i].arrivalAirport && updated[i + 1].departureAirport !== updated[i].arrivalAirport) {
                    updated[i + 1].departureAirport = updated[i].arrivalAirport;
                    changed = true;
                }
            }
            if (changed) setOutboundStopovers(updated);
        }
    }, [outboundStopovers.map(s => s.arrivalAirport).join(',')]);

    // Same for return stopovers
    useEffect(() => {
        if (returnStopovers.length > 0 && returnDepartureAirport) {
            const updated = [...returnStopovers];
            if (updated[0].departureAirport !== returnDepartureAirport) {
                updated[0].departureAirport = returnDepartureAirport;
                setReturnStopovers(updated);
            }
        }
    }, [returnDepartureAirport]);

    useEffect(() => {
        if (returnStopovers.length >= 2) {
            const updated = [...returnStopovers];
            let changed = false;
            for (let i = 0; i < returnStopovers.length - 1; i++) {
                if (updated[i].arrivalAirport && updated[i + 1].departureAirport !== updated[i].arrivalAirport) {
                    updated[i + 1].departureAirport = updated[i].arrivalAirport;
                    changed = true;
                }
            }
            if (changed) setReturnStopovers(updated);
        }
    }, [returnStopovers.map(s => s.arrivalAirport).join(',')]);


    // Save flight info mutation
    const saveFlightInfo = useMutation(({ storage }, flightData: FlightInfo) => {
        storage.set('flightInfo', new LiveObject(flightData));
    }, []);

    // Delete all existing flight cards mutation
    const deleteAllFlightCards = useMutation(({ storage }) => {
        const cards = storage.get('cards');
        const columns = storage.get('columns');

        if (!cards || !columns) return;

        // Find all flight cards
        const flightCardIds: string[] = [];
        for (const [cardId, card] of (cards as any).entries()) {
            if (card.get('category') === 'flight') {
                flightCardIds.push(cardId);
            }
        }

        // Remove flight cards from all columns
        for (const column of (columns as any).values()) {
            const cardIds = column.get('cardIds');
            if (!cardIds) continue;

            // Remove all flight card IDs from this column
            for (let i = cardIds.length - 1; i >= 0; i--) {
                if (flightCardIds.includes(cardIds.get(i))) {
                    cardIds.delete(i);
                }
            }
        }

        // Delete flight cards from storage
        for (const cardId of flightCardIds) {
            (cards as any).delete(cardId);
        }
    }, []);

    // Create day column mutation
    const createDayColumn = useMutation(({ storage }, dayNum: number) => {
        const columns = storage.get('columns');
        const columnOrder = storage.get('columnOrder');

        if (!columns || !columnOrder) return;

        const dayId = `day${dayNum}`;

        if ((columns as any).get(dayId)) return;

        // Sidebar와 동일한 라벨 사용
        const title = dayNum === 0 ? '준비' : `${dayNum}일차`;

        (columns as any).set(dayId, new LiveObject({
            id: dayId,
            title: title,
            cardIds: new LiveList([])
        }));

        const orderArray = (columnOrder as any).toArray();
        const day0Index = orderArray.indexOf('day0');

        if (day0Index !== -1) {
            const insertIndex = day0Index + dayNum;
            (columnOrder as any).insert(dayId, insertIndex);
        } else {
            (columnOrder as any).push(dayId);
        }
    }, []);

    const handleDateConfirm = (start: Date, end: Date) => {
        setDepartureDate(start);
        setArrivalDate(end);
    };

    // Stopover handlers
    const addOutboundStopover = () => {
        if (outboundStopovers.length >= 2) {
            addToast('경유지는 최대 2개까지만 추가할 수 있습니다.', 'warning');
            return;
        }

        // 이전 구간 정보 가져오기
        const previousSegment = outboundStopovers.length === 0
            ? {
                arrivalAirport: outboundArrivalAirport,
                arrivalTerminal: outboundArrivalTerminal,
                arrivalDate: outboundArrivalDate,
                arrivalHour: outboundArrivalHour,
                arrivalMinute: outboundArrivalMinute
            }
            : outboundStopovers[outboundStopovers.length - 1];

        console.log('🔍 경유지 추가 - 이전 도착공항:', previousSegment.arrivalAirport);
        console.log('🔍 outboundArrivalAirport:', outboundArrivalAirport);

        setOutboundStopovers([...outboundStopovers, {
            departureAirport: previousSegment.arrivalAirport,      // 자동 설정
            departureTerminal: previousSegment.arrivalTerminal,    // 자동 설정
            departureDate: previousSegment.arrivalDate,            // 자동 설정
            arrivalAirport: '',
            arrivalTerminal: '',
            arrivalDate: '',
            hour: previousSegment.arrivalHour,                     // 자동 설정
            minute: previousSegment.arrivalMinute,                 // 자동 설정
            arrivalHour: '',
            arrivalMinute: '',
            airline: '',
            isCustomArrival: false
        }]);
    };

    const removeOutboundStopover = (index: number) => {
        setOutboundStopovers(outboundStopovers.filter((_, i) => i !== index));
    };

    const updateOutboundStopover = (index: number, field: string, value: any) => {
        const updated = [...outboundStopovers];
        (updated[index] as any)[field] = value;
        setOutboundStopovers(updated);
    };

    const addReturnStopover = () => {
        if (returnStopovers.length >= 2) {
            addToast('경유지는 최대 2개까지만 추가할 수 있습니다.', 'warning');
            return;
        }

        // 이전 구간 정보 가져오기
        const previousSegment = returnStopovers.length === 0
            ? {
                arrivalAirport: returnArrivalAirport,
                arrivalTerminal: returnArrivalTerminal,
                arrivalDate: returnArrivalDate,
                arrivalHour: returnArrivalHour,
                arrivalMinute: returnArrivalMinute
            }
            : returnStopovers[returnStopovers.length - 1];

        setReturnStopovers([...returnStopovers, {
            departureAirport: previousSegment.arrivalAirport,      // 자동 설정
            departureTerminal: previousSegment.arrivalTerminal,    // 자동 설정
            departureDate: previousSegment.arrivalDate,            // 자동 설정
            arrivalAirport: '',
            arrivalTerminal: '',
            arrivalDate: '',
            hour: previousSegment.arrivalHour,                     // 자동 설정
            minute: previousSegment.arrivalMinute,                 // 자동 설정
            arrivalHour: '',
            arrivalMinute: '',
            airline: '',
            isCustomArrival: false
        }]);
    };

    const removeReturnStopover = (index: number) => {
        setReturnStopovers(returnStopovers.filter((_, i) => i !== index));
    };

    const updateReturnStopover = (index: number, field: string, value: any) => {
        const updated = [...returnStopovers];
        (updated[index] as any)[field] = value;
        setReturnStopovers(updated);
    };

    // Helper function to focus on invalid field
    const focusField = (fieldName: string) => {
        setTimeout(() => {
            // Try to find the field by various selectors
            const selectors = [
                `input[name="${fieldName}"]`,
                `select[name="${fieldName}"]`,
                `input[placeholder*="${fieldName}"]`,
                `select`,
                `input[type="text"]`,
            ];

            for (const selector of selectors) {
                const element = document.querySelector(selector) as HTMLElement;
                if (element) {
                    element.focus();
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    break;
                }
            }
        }, 100);
    };

    const handleConfirm = (): boolean => {
        // ========================================
        // 항공편 정보 validation (터미널은 선택사항)
        // ========================================


        // 2. 가는편(outbound) 체크
        if (!outboundDepartureAirport) {
            addToast('가는편 출발 공항을 입력해주세요.', 'warning');
            focusField('출발 공항');
            return false;
        }
        if (!outboundDepartureDate) {
            addToast('가는편 출발 날짜를 입력해주세요.', 'warning');
            focusField('출발 날짜');
            return false;
        }
        if (!outboundArrivalAirport) {
            addToast('가는편 도착 공항을 입력해주세요.', 'warning');
            focusField('도착 공항');
            return false;
        }
        if (!outboundArrivalDate) {
            addToast('가는편 도착 날짜를 입력해주세요.', 'warning');
            focusField('도착 날짜');
            return false;
        }
        if (!outboundHour || !outboundMinute) {
            addToast('가는편 출발 시간을 입력해주세요.', 'warning');
            focusField('출발 시간');
            return false;
        }
        if (!outboundArrivalHour || !outboundArrivalMinute) {
            addToast('가는편 도착 시간을 입력해주세요.', 'warning');
            focusField('도착 시간');
            return false;
        }
        if (!outboundAirline) {
            addToast('가는편 항공사를 입력해주세요.', 'warning');
            focusField('항공사');
            return false;
        }

        // 3. 오는편(return) 체크
        if (!returnDepartureAirport) {
            addToast('오는편 출발 공항을 입력해주세요.', 'warning');
            focusField('출발 공항');
            return false;
        }
        if (!returnDepartureDate) {
            addToast('오는편 출발 날짜를 입력해주세요.', 'warning');
            focusField('출발 날짜');
            return false;
        }
        if (!returnArrivalAirport) {
            addToast('오는편 도착 공항을 입력해주세요.', 'warning');
            focusField('도착 공항');
            return false;
        }
        if (!returnArrivalDate) {
            addToast('오는편 도착 날짜를 입력해주세요.', 'warning');
            focusField('도착 날짜');
            return false;
        }
        if (!returnHour || !returnMinute) {
            addToast('오는편 출발 시간을 입력해주세요.', 'warning');
            focusField('출발 시간');
            return false;
        }
        if (!returnArrivalHour || !returnArrivalMinute) {
            addToast('오는편 도착 시간을 입력해주세요.', 'warning');
            focusField('도착 시간');
            return false;
        }
        if (!returnAirline) {
            addToast('오는편 항공사를 입력해주세요.', 'warning');
            focusField('항공사');
            return false;
        }

        // 4. 가는편 경유지 체크
        for (let i = 0; i < outboundStopovers.length; i++) {
            const stopover = outboundStopovers[i];
            if (!stopover.departureAirport) {
                addToast(`가는편 경유지 ${i + 1} 출발 공항을 입력해주세요.`, 'warning');
                focusField('출발 공항');
                return false;
            }
            if (!stopover.departureDate) {
                addToast(`가는편 경유지 ${i + 1} 출발 날짜를 입력해주세요.`, 'warning');
                focusField('출발 날짜');
                return false;
            }
            if (!stopover.arrivalAirport) {
                addToast(`가는편 경유지 ${i + 1} 도착 공항을 입력해주세요.`, 'warning');
                focusField('도착 공항');
                return false;
            }
            if (!stopover.arrivalDate) {
                addToast(`가는편 경유지 ${i + 1} 도착 날짜를 입력해주세요.`, 'warning');
                focusField('도착 날짜');
                return false;
            }
            if (!stopover.hour || !stopover.minute) {
                addToast(`가는편 경유지 ${i + 1} 출발 시간을 입력해주세요.`, 'warning');
                focusField('출발 시간');
                return false;
            }
            if (!stopover.arrivalHour || !stopover.arrivalMinute) {
                addToast(`가는편 경유지 ${i + 1} 도착 시간을 입력해주세요.`, 'warning');
                focusField('도착 시간');
                return false;
            }
            if (!stopover.airline) {
                addToast(`가는편 경유지 ${i + 1} 항공사를 입력해주세요.`, 'warning');
                focusField('항공사');
                return false;
            }
        }

        // 5. 오는편 경유지 체크
        for (let i = 0; i < returnStopovers.length; i++) {
            const stopover = returnStopovers[i];
            if (!stopover.departureAirport) {
                addToast(`오는편 경유지 ${i + 1} 출발 공항을 입력해주세요.`, 'warning');
                focusField('출발 공항');
                return false;
            }
            if (!stopover.departureDate) {
                addToast(`오는편 경유지 ${i + 1} 출발 날짜를 입력해주세요.`, 'warning');
                focusField('출발 날짜');
                return false;
            }
            if (!stopover.arrivalAirport) {
                addToast(`오는편 경유지 ${i + 1} 도착 공항을 입력해주세요.`, 'warning');
                focusField('도착 공항');
                return false;
            }
            if (!stopover.arrivalDate) {
                addToast(`오는편 경유지 ${i + 1} 도착 날짜를 입력해주세요.`, 'warning');
                focusField('도착 날짜');
                return false;
            }
            if (!stopover.hour || !stopover.minute) {
                addToast(`오는편 경유지 ${i + 1} 출발 시간을 입력해주세요.`, 'warning');
                focusField('출발 시간');
                return false;
            }
            if (!stopover.arrivalHour || !stopover.arrivalMinute) {
                addToast(`오는편 경유지 ${i + 1} 도착 시간을 입력해주세요.`, 'warning');
                focusField('도착 시간');
                return false;
            }
            if (!stopover.airline) {
                addToast(`오는편 경유지 ${i + 1} 항공사를 입력해주세요.`, 'warning');
                focusField('항공사');
                return false;
            }
        }


        // ========================================
        // 날짜 파싱 및 계산 (segment 날짜 사용)
        // ========================================

        // outboundDepartureDate와 returnDepartureDate에서 Date 객체 생성
        const parsedDepartureDate = outboundDepartureDate ? new Date(outboundDepartureDate) : null;
        const parsedReturnDepartureDate = returnDepartureDate ? new Date(returnDepartureDate) : null;

        if (!parsedDepartureDate || !parsedReturnDepartureDate) {
            addToast('출발 날짜를 입력해주세요.', 'warning');
            return false;
        }

        // Calculate arrival dates
        const outboundDepartureTime = parseInt(outboundHour) * 60 + parseInt(outboundMinute);
        const outboundArrivalTimeMinutes = parseInt(outboundArrivalHour) * 60 + parseInt(outboundArrivalMinute);
        const calculatedOutboundArrivalDate = new Date(parsedDepartureDate);
        if (outboundArrivalTimeMinutes < outboundDepartureTime) {
            calculatedOutboundArrivalDate.setDate(calculatedOutboundArrivalDate.getDate() + 1);
        }

        const returnDepartureTime = parseInt(returnHour) * 60 + parseInt(returnMinute);
        const returnArrivalTimeMinutes = parseInt(returnArrivalHour) * 60 + parseInt(returnArrivalMinute);
        const calculatedReturnArrivalDate = new Date(parsedReturnDepartureDate);
        if (returnArrivalTimeMinutes < returnDepartureTime) {
            calculatedReturnArrivalDate.setDate(calculatedReturnArrivalDate.getDate() + 1);
        }

        // Save to Liveblocks
        const flightData: FlightInfo = {
            outbound: {
                date: parsedDepartureDate.toISOString(),
                departureAirport: outboundDepartureAirport,
                departureTerminal: outboundDepartureTerminal || undefined,
                arrivalAirport: outboundArrivalAirport,
                arrivalTerminal: outboundArrivalTerminal || undefined,
                time: `${outboundHour}:${outboundMinute}`,
                arrivalDate: calculatedOutboundArrivalDate.toISOString(),
                arrivalTime: `${outboundArrivalHour}:${outboundArrivalMinute}`,
                airline: outboundAirline,
                stopovers: outboundStopovers.length > 0 ? outboundStopovers.map((stopover) => ({
                    departureAirport: stopover.departureAirport,
                    departureTerminal: stopover.departureTerminal || undefined,
                    arrivalAirport: stopover.arrivalAirport,
                    arrivalTerminal: stopover.arrivalTerminal || undefined,
                    date: stopover.departureDate,
                    time: `${stopover.hour}:${stopover.minute}`,
                    arrivalDate: stopover.arrivalDate,
                    arrivalTime: `${stopover.arrivalHour}:${stopover.arrivalMinute}`,
                    airline: stopover.airline
                })) : undefined
            },
            return: {
                date: parsedReturnDepartureDate.toISOString(),
                departureAirport: returnDepartureAirport,
                departureTerminal: returnDepartureTerminal || undefined,
                arrivalAirport: returnArrivalAirport,
                arrivalTerminal: returnArrivalTerminal || undefined,
                time: `${returnHour}:${returnMinute}`,
                arrivalDate: calculatedReturnArrivalDate.toISOString(),
                arrivalTime: `${returnArrivalHour}:${returnArrivalMinute}`,
                airline: returnAirline,
                stopovers: returnStopovers.length > 0 ? returnStopovers.map((stopover) => ({
                    departureAirport: stopover.departureAirport,
                    departureTerminal: stopover.departureTerminal || undefined,
                    arrivalAirport: stopover.arrivalAirport,
                    arrivalTerminal: stopover.arrivalTerminal || undefined,
                    date: stopover.departureDate,
                    time: `${stopover.hour}:${stopover.minute}`,
                    arrivalDate: stopover.arrivalDate,
                    arrivalTime: `${stopover.arrivalHour}:${stopover.arrivalMinute}`,
                    airline: stopover.airline
                })) : undefined
            }
        };

        saveFlightInfo(flightData);

        // Calculate trip days using the same logic as Sidebar
        const dayCount = calculateTripDaysFromFlightInfo(flightData);

        // Create day columns (day0는 초기 storage에 이미 존재, 1부터 생성)
        // 🔥 dayCount까지 생성 (i <= dayCount로 수정)
        for (let i = 1; i <= dayCount; i++) {
            createDayColumn(i);
        }

        // Call original onConfirm
        onConfirm({
            outbound: {
                date: parsedDepartureDate,
                departureAirport: outboundDepartureAirport,
                arrivalAirport: outboundArrivalAirport,
                time: `${outboundHour}:${outboundMinute}`,
                airline: outboundAirline
            },
            return: {
                date: parsedReturnDepartureDate,
                departureAirport: returnDepartureAirport,
                arrivalAirport: returnArrivalAirport,
                time: `${returnHour}:${returnMinute}`,
                airline: returnAirline
            }
        });

        // ========================================
        // 항공편 카드 자동 생성
        // ========================================

        // 🔥 먼저 기존 항공 카드 모두 삭제
        deleteAllFlightCards();

        // 여행 시작일 계산 (가는편 출발일)
        const tripStartDate = new Date(parsedDepartureDate);
        tripStartDate.setHours(0, 0, 0, 0);

        // Helper: 날짜로부터 Day 번호 계산 (1-based)
        const getDayNumber = (dateStr: string): number => {
            const date = new Date(dateStr);
            date.setHours(0, 0, 0, 0);
            const diffInMs = date.getTime() - tripStartDate.getTime();
            const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            return diffInDays + 1;
        };

        // Helper: 카드 생성 함수
        const createFlightCard = (
            type: 'departure' | 'arrival',
            airport: string,
            terminal: string | undefined,
            dateStr: string,
            time: string,
            airline: string,
            isOutbound: boolean // 가는편 여부
        ) => {
            const dayNum = getDayNumber(dateStr);
            const columnId = `day${dayNum}`;

            // 공항명에서 "(코드)" 제거
            const airportName = airport.replace(/\s*\([^)]*\)\s*$/, '');

            const emoji = type === 'departure' ? '✈️' : '🛬';
            const action = type === 'departure' ? '출발' : '도착';
            const title = `${emoji} ${airportName} ${action}`;

            // 상세 정보 구성
            const terminalInfo = terminal ? ` T${terminal}` : '';
            const description = `${airportName}${terminalInfo}\n${time} ${action}\n${airline}`;

            // 🎯 가는편은 맨 위(0), 오는편은 맨 아래(undefined)
            const targetIndex = isOutbound ? 0 : undefined;

            createCardToColumn({
                title,
                category: 'flight' as const,
                type: 'travel' as const,
                description,
                date: dateStr,
                imageUrl: '',
                targetColumnId: columnId,
                targetIndex
            });
        };

        // ========================================
        // 🎯 가는편 카드 생성 (시간 순서대로)
        // ========================================

        // 1-1. 가는편 첫 출발
        createFlightCard('departure', outboundDepartureAirport, outboundDepartureTerminal, flightData.outbound.date, flightData.outbound.time, outboundAirline, true);

        // 1-2. 가는편 경유지들
        if (flightData.outbound.stopovers && flightData.outbound.stopovers.length > 0) {
            flightData.outbound.stopovers.forEach((stopover) => {
                // 경유지 도착 (arrivalAirport = 경유지 공항)
                createFlightCard('arrival', stopover.arrivalAirport, stopover.arrivalTerminal, stopover.arrivalDate, stopover.arrivalTime, stopover.airline, true);
                // 경유지 출발 (departureAirport = 경유지 공항)
                createFlightCard('departure', stopover.departureAirport, stopover.departureTerminal, stopover.date, stopover.time, stopover.airline, true);
            });
        }

        // 1-3. 가는편 최종 도착
        createFlightCard('arrival', outboundArrivalAirport, outboundArrivalTerminal, flightData.outbound.arrivalDate, flightData.outbound.arrivalTime, outboundAirline, true);

        // ========================================
        // 🎯 오는편 카드 생성 (시간 순서대로)
        // ========================================

        // 2-1. 오는편 첫 출발
        createFlightCard('departure', returnDepartureAirport, returnDepartureTerminal, flightData.return.date, flightData.return.time, returnAirline, false);

        // 2-2. 오는편 경유지들
        if (flightData.return.stopovers && flightData.return.stopovers.length > 0) {
            flightData.return.stopovers.forEach((stopover) => {
                // 경유지 도착 (arrivalAirport = 경유지 공항)
                createFlightCard('arrival', stopover.arrivalAirport, stopover.arrivalTerminal, stopover.arrivalDate, stopover.arrivalTime, stopover.airline, false);
                // 경유지 출발 (departureAirport = 경유지 공항)
                createFlightCard('departure', stopover.departureAirport, stopover.departureTerminal, stopover.date, stopover.time, stopover.airline, false);
            });
        }

        // 2-3. 오는편 최종 도착
        createFlightCard('arrival', returnArrivalAirport, returnArrivalTerminal, flightData.return.arrivalDate, flightData.return.arrivalTime, returnAirline, false);

        // Scroll to top of timeline
        setTimeout(() => {
            // Select the timeline section's scrollable container
            const timelineSection = document.querySelector('section.scrollbar-trigger');
            const timelineScrollContainer = timelineSection?.querySelector('.custom-scrollbar');

            if (timelineScrollContainer) {
                timelineScrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);

        // ✅ Validation 성공
        return true;
    };

    // Load existing data when in edit mode
    const loadFlightData = (isEditMode: boolean) => {
        if (isEditMode && flightInfo) {
            // 전역 날짜 설정
            setDepartureDate(new Date(flightInfo.outbound.date));
            setArrivalDate(new Date(flightInfo.return.date));

            // ========================================
            // 가는편 (Outbound)
            // ========================================
            setOutboundDepartureAirport(flightInfo.outbound.departureAirport);
            setOutboundDepartureDate(flightInfo.outbound.date);
            setOutboundDepartureTerminal(flightInfo.outbound.departureTerminal || '');

            setOutboundArrivalAirport(flightInfo.outbound.arrivalAirport);
            setOutboundArrivalDate(flightInfo.outbound.arrivalDate);
            setOutboundArrivalTerminal(flightInfo.outbound.arrivalTerminal || '');

            const [outHour, outMin] = flightInfo.outbound.time.split(':');
            setOutboundHour(outHour);
            setOutboundMinute(outMin);

            const [outArrHour, outArrMin] = (flightInfo.outbound.arrivalTime || '00:00').split(':');
            setOutboundArrivalHour(outArrHour);
            setOutboundArrivalMinute(outArrMin);

            setOutboundAirline(flightInfo.outbound.airline);

            // Check if arrival airport is in destination list, else use custom mode
            const isArrivalInDestinations = destinationAirports.some(
                airport => `${airport.name} (${airport.code})` === flightInfo.outbound.arrivalAirport
            );
            setIsOutboundArrivalCustom(!isArrivalInDestinations);

            // ========================================
            // 오는편 (Return)
            // ========================================
            setReturnDepartureAirport(flightInfo.return.departureAirport);
            setReturnDepartureDate(flightInfo.return.date);
            setReturnDepartureTerminal(flightInfo.return.departureTerminal || '');

            setReturnArrivalAirport(flightInfo.return.arrivalAirport);
            setReturnArrivalDate(flightInfo.return.arrivalDate);
            setReturnArrivalTerminal(flightInfo.return.arrivalTerminal || '');

            const [retHour, retMin] = flightInfo.return.time.split(':');
            setReturnHour(retHour);
            setReturnMinute(retMin);

            const [retArrHour, retArrMin] = (flightInfo.return.arrivalTime || '00:00').split(':');
            setReturnArrivalHour(retArrHour);
            setReturnArrivalMinute(retArrMin);

            setReturnAirline(flightInfo.return.airline);

            // Check if departure airport is in destination list, else use custom mode
            const isDepartureInDestinations = destinationAirports.some(
                airport => `${airport.name} (${airport.code})` === flightInfo.return.departureAirport
            );
            setIsReturnDepartureCustom(!isDepartureInDestinations);

            // Check if arrival airport is KOREAN airport, else use custom mode  
            const isArrivalKorean = KOREAN_AIRPORTS.some(
                airport => `${airport.name} (${airport.code})` === flightInfo.return.arrivalAirport
            );
            setIsReturnArrivalCustom(!isArrivalKorean);

            // ========================================
            // 가는편 경유지 (Outbound Stopovers)
            // ========================================
            if (flightInfo.outbound.stopovers && flightInfo.outbound.stopovers.length > 0) {
                const loadedOutboundStopovers = flightInfo.outbound.stopovers.map(stopover => {
                    const [hour, minute] = stopover.time.split(':');
                    const [arrivalHour, arrivalMinute] = (stopover.arrivalTime || '00:00').split(':');
                    return {
                        departureAirport: stopover.departureAirport,
                        departureTerminal: stopover.departureTerminal || '',
                        departureDate: stopover.date,
                        arrivalAirport: stopover.arrivalAirport,
                        arrivalTerminal: stopover.arrivalTerminal || '',
                        arrivalDate: stopover.arrivalDate,
                        hour,
                        minute,
                        arrivalHour,
                        arrivalMinute,
                        airline: stopover.airline,
                        isCustomArrival: false
                    };
                });
                setOutboundStopovers(loadedOutboundStopovers);
            }

            // ========================================
            // 오는편 경유지 (Return Stopovers)
            // ========================================
            if (flightInfo.return.stopovers && flightInfo.return.stopovers.length > 0) {
                const loadedReturnStopovers = flightInfo.return.stopovers.map(stopover => {
                    const [hour, minute] = stopover.time.split(':');
                    const [arrivalHour, arrivalMinute] = (stopover.arrivalTime || '00:00').split(':');
                    return {
                        departureAirport: stopover.departureAirport,
                        departureTerminal: stopover.departureTerminal || '',
                        departureDate: stopover.date,
                        arrivalAirport: stopover.arrivalAirport,
                        arrivalTerminal: stopover.arrivalTerminal || '',
                        arrivalDate: stopover.arrivalDate,
                        hour,
                        minute,
                        arrivalHour,
                        arrivalMinute,
                        airline: stopover.airline,
                        isCustomArrival: false
                    };
                });
                setReturnStopovers(loadedReturnStopovers);
            }
        }
    };

    return {
        // Date
        dates: {
            showDatePicker,
            setShowDatePicker,
            departureDate,
            arrivalDate,
        },
        // Outbound
        outbound: {
            departureAirport: outboundDepartureAirport,
            departureTerminal: outboundDepartureTerminal,
            departureDate: outboundDepartureDate,
            arrivalAirport: outboundArrivalAirport,
            arrivalTerminal: outboundArrivalTerminal,
            arrivalDate: outboundArrivalDate,
            hour: outboundHour,
            minute: outboundMinute,
            arrivalHour: outboundArrivalHour,
            arrivalMinute: outboundArrivalMinute,
            airline: outboundAirline,
            isCustomArrival: isOutboundArrivalCustom,
        },
        // Return
        return: {
            departureAirport: returnDepartureAirport,
            departureTerminal: returnDepartureTerminal,
            departureDate: returnDepartureDate,
            arrivalAirport: returnArrivalAirport,
            arrivalTerminal: returnArrivalTerminal,
            arrivalDate: returnArrivalDate,
            hour: returnHour,
            minute: returnMinute,
            arrivalHour: returnArrivalHour,
            arrivalMinute: returnArrivalMinute,
            airline: returnAirline,
            isCustomDeparture: isReturnDepartureCustom,
            isCustomArrival: isReturnArrivalCustom,
        },
        // Setters
        setters: {
            setOutboundDepartureAirport,
            setOutboundDepartureTerminal,
            setOutboundDepartureDate,
            setOutboundArrivalAirport,
            setOutboundArrivalTerminal,
            setOutboundArrivalDate,
            setOutboundHour,
            setOutboundMinute,
            setOutboundArrivalHour,
            setOutboundArrivalMinute,
            setOutboundAirline,
            setReturnDepartureAirport,
            setReturnDepartureTerminal,
            setReturnDepartureDate,
            setReturnArrivalAirport,
            setReturnArrivalTerminal,
            setReturnArrivalDate,
            setReturnHour,
            setReturnMinute,
            setReturnArrivalHour,
            setReturnArrivalMinute,
            setReturnAirline,
            setIsReturnDepartureCustom,
            setIsOutboundArrivalCustom,
            setIsReturnArrivalCustom,
        },
        // Stopovers
        stopovers: {
            outbound: outboundStopovers,
            return: returnStopovers,
            addOutbound: addOutboundStopover,
            removeOutbound: removeOutboundStopover,
            updateOutbound: updateOutboundStopover,
            addReturn: addReturnStopover,
            removeReturn: removeReturnStopover,
            updateReturn: updateReturnStopover,
        },
        // Handlers
        handleDateConfirm,
        handleConfirm,
        loadFlightData,
        // Meta
        destinationAirports,
        hasMultipleAirports,
        destinationMonth: destinationCard?.month,
    };
}
