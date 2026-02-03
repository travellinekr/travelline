import { useState, useEffect } from "react";
import { useMutation } from "@liveblocks/react/suspense";
import { LiveObject, LiveList } from "@liveblocks/client";
import type { Card, FlightInfo } from "@/liveblocks.config";
import { KOREAN_AIRPORTS } from "@/data/airports";
import { calculateTripDays } from "@/utils/calculateTripDays";

export function useFlightForm(
    destinationCard: Card | null | undefined,
    flightInfo: FlightInfo | null,
    addToast: (message: string, type: 'info' | 'warning') => void,
    onConfirm: (data: any) => void
) {
    // Date states
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);

    // Outbound states
    const [outboundDepartureAirport, setOutboundDepartureAirport] = useState(`${KOREAN_AIRPORTS[0].name} (${KOREAN_AIRPORTS[0].code})`);
    const [outboundArrivalAirport, setOutboundArrivalAirport] = useState('');
    const [outboundHour, setOutboundHour] = useState('');
    const [outboundMinute, setOutboundMinute] = useState('');
    const [outboundArrivalHour, setOutboundArrivalHour] = useState('');
    const [outboundArrivalMinute, setOutboundArrivalMinute] = useState('');
    const [outboundAirline, setOutboundAirline] = useState('');

    // Return states
    const [returnDepartureAirport, setReturnDepartureAirport] = useState('');
    const [returnArrivalAirport, setReturnArrivalAirport] = useState('');
    const [isReturnDepartureCustom, setIsReturnDepartureCustom] = useState(false);
    const [returnHour, setReturnHour] = useState('');
    const [returnMinute, setReturnMinute] = useState('');
    const [returnArrivalHour, setReturnArrivalHour] = useState('');
    const [returnArrivalMinute, setReturnArrivalMinute] = useState('');
    const [returnAirline, setReturnAirline] = useState('');

    // Stopover states
    const [outboundStopovers, setOutboundStopovers] = useState<Array<{
        departureAirport: string;
        arrivalAirport: string;
        hour: string;
        minute: string;
        arrivalHour: string;
        arrivalMinute: string;
        airline: string;
    }>>([]);

    const [returnStopovers, setReturnStopovers] = useState<Array<{
        departureAirport: string;
        arrivalAirport: string;
        hour: string;
        minute: string;
        arrivalHour: string;
        arrivalMinute: string;
        airline: string;
    }>>([]);

    const destinationAirports = destinationCard?.airports || [];
    const hasMultipleAirports = destinationAirports.length > 1;

    // Reset all flight form fields
    const resetFlightForm = () => {
        setDepartureDate(null);
        setArrivalDate(null);
        setOutboundHour('');
        setOutboundMinute('');
        setOutboundArrivalHour('');
        setOutboundArrivalMinute('');
        setOutboundAirline('');
        setReturnHour('');
        setReturnMinute('');
        setReturnArrivalHour('');
        setReturnArrivalMinute('');
        setReturnAirline('');
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
    useEffect(() => {
        setReturnDepartureAirport(outboundArrivalAirport);
        setReturnArrivalAirport(outboundDepartureAirport);
    }, [outboundDepartureAirport, outboundArrivalAirport]);

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

    // Create day column mutation
    const createDayColumn = useMutation(({ storage }, dayNum: number) => {
        const columns = storage.get('columns');
        const columnOrder = storage.get('columnOrder');

        if (!columns || !columnOrder) return;

        const dayId = `day${dayNum}`;

        if ((columns as any).get(dayId)) return;

        (columns as any).set(dayId, new LiveObject({
            id: dayId,
            title: `Day ${dayNum}`,
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
        setOutboundStopovers([...outboundStopovers, {
            departureAirport: '',
            arrivalAirport: '',
            hour: '',
            minute: '',
            arrivalHour: '',
            arrivalMinute: '',
            airline: ''
        }]);
    };

    const removeOutboundStopover = (index: number) => {
        setOutboundStopovers(outboundStopovers.filter((_, i) => i !== index));
    };

    const updateOutboundStopover = (index: number, field: string, value: string) => {
        const updated = [...outboundStopovers];
        (updated[index] as any)[field] = value;
        setOutboundStopovers(updated);
    };

    const addReturnStopover = () => {
        if (returnStopovers.length >= 2) {
            addToast('경유지는 최대 2개까지만 추가할 수 있습니다.', 'warning');
            return;
        }
        setReturnStopovers([...returnStopovers, {
            departureAirport: '',
            arrivalAirport: '',
            hour: '',
            minute: '',
            arrivalHour: '',
            arrivalMinute: '',
            airline: ''
        }]);
    };

    const removeReturnStopover = (index: number) => {
        setReturnStopovers(returnStopovers.filter((_, i) => i !== index));
    };

    const updateReturnStopover = (index: number, field: string, value: string) => {
        const updated = [...returnStopovers];
        (updated[index] as any)[field] = value;
        setReturnStopovers(updated);
    };

    const handleConfirm = () => {
        // Validation
        if (!departureDate || !arrivalDate ||
            !outboundDepartureAirport || !outboundArrivalAirport ||
            !outboundHour || !outboundMinute || !outboundArrivalHour || !outboundArrivalMinute || !outboundAirline ||
            !returnHour || !returnMinute || !returnArrivalHour || !returnArrivalMinute || !returnAirline) {
            addToast('모든 항공편 정보를 입력해주세요.', 'warning');
            return;
        }

        // Calculate arrival dates
        const outboundDepartureTime = parseInt(outboundHour) * 60 + parseInt(outboundMinute);
        const outboundArrivalTimeMinutes = parseInt(outboundArrivalHour) * 60 + parseInt(outboundArrivalMinute);
        const calculatedOutboundArrivalDate = new Date(departureDate);
        if (outboundArrivalTimeMinutes < outboundDepartureTime) {
            calculatedOutboundArrivalDate.setDate(calculatedOutboundArrivalDate.getDate() + 1);
        }

        const returnDepartureTime = parseInt(returnHour) * 60 + parseInt(returnMinute);
        const returnArrivalTimeMinutes = parseInt(returnArrivalHour) * 60 + parseInt(returnArrivalMinute);
        const calculatedReturnArrivalDate = new Date(arrivalDate);
        if (returnArrivalTimeMinutes < returnDepartureTime) {
            calculatedReturnArrivalDate.setDate(calculatedReturnArrivalDate.getDate() + 1);
        }

        // Save to Liveblocks
        const flightData: FlightInfo = {
            outbound: {
                date: departureDate.toISOString(),
                departureAirport: outboundDepartureAirport,
                arrivalAirport: outboundArrivalAirport,
                time: `${outboundHour}:${outboundMinute}`,
                arrivalDate: calculatedOutboundArrivalDate.toISOString(),
                arrivalTime: `${outboundArrivalHour}:${outboundArrivalMinute}`,
                airline: outboundAirline,
                stopovers: outboundStopovers.length > 0 ? outboundStopovers.map((stopover) => ({
                    departureAirport: stopover.departureAirport,
                    arrivalAirport: stopover.arrivalAirport,
                    date: departureDate.toISOString(), // TODO: Calculate proper date
                    time: `${stopover.hour}:${stopover.minute}`,
                    arrivalDate: departureDate.toISOString(), // TODO: Calculate proper date
                    arrivalTime: `${stopover.arrivalHour}:${stopover.arrivalMinute}`,
                    airline: stopover.airline
                })) : undefined
            },
            return: {
                date: arrivalDate.toISOString(),
                departureAirport: returnDepartureAirport,
                arrivalAirport: returnArrivalAirport,
                time: `${returnHour}:${returnMinute}`,
                arrivalDate: calculatedReturnArrivalDate.toISOString(),
                arrivalTime: `${returnArrivalHour}:${returnArrivalMinute}`,
                airline: returnAirline,
                stopovers: returnStopovers.length > 0 ? returnStopovers.map((stopover) => ({
                    departureAirport: stopover.departureAirport,
                    arrivalAirport: stopover.arrivalAirport,
                    date: arrivalDate.toISOString(), // TODO: Calculate proper date
                    time: `${stopover.hour}:${stopover.minute}`,
                    arrivalDate: arrivalDate.toISOString(), // TODO: Calculate proper date
                    arrivalTime: `${stopover.arrivalHour}:${stopover.arrivalMinute}`,
                    airline: stopover.airline
                })) : undefined
            }
        };

        saveFlightInfo(flightData);

        // Calculate trip days
        const dayCount = calculateTripDays(departureDate, arrivalDate, `${returnHour}:${returnMinute}`);

        // Create day columns
        for (let i = 1; i < dayCount; i++) {
            createDayColumn(i);
        }

        // Call original onConfirm
        onConfirm({
            outbound: {
                date: departureDate,
                departureAirport: outboundDepartureAirport,
                arrivalAirport: outboundArrivalAirport,
                time: `${outboundHour}:${outboundMinute}`,
                airline: outboundAirline
            },
            return: {
                date: arrivalDate,
                departureAirport: returnDepartureAirport,
                arrivalAirport: returnArrivalAirport,
                time: `${returnHour}:${returnMinute}`,
                airline: returnAirline
            }
        });

        // Scroll to top of timeline
        setTimeout(() => {
            // Select the timeline section's scrollable container
            const timelineSection = document.querySelector('section.scrollbar-trigger');
            const timelineScrollContainer = timelineSection?.querySelector('.custom-scrollbar');

            if (timelineScrollContainer) {
                timelineScrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);
    };

    // Load existing data when in edit mode
    const loadFlightData = (isEditMode: boolean) => {
        if (isEditMode && flightInfo) {
            setDepartureDate(new Date(flightInfo.outbound.date));
            setOutboundDepartureAirport(flightInfo.outbound.departureAirport);
            setOutboundArrivalAirport(flightInfo.outbound.arrivalAirport);
            const [outHour, outMin] = flightInfo.outbound.time.split(':');
            setOutboundHour(outHour);
            setOutboundMinute(outMin);
            const [outArrHour, outArrMin] = (flightInfo.outbound.arrivalTime || '00:00').split(':');
            setOutboundArrivalHour(outArrHour);
            setOutboundArrivalMinute(outArrMin);
            setOutboundAirline(flightInfo.outbound.airline);

            setArrivalDate(new Date(flightInfo.return.date));
            setReturnDepartureAirport(flightInfo.return.departureAirport);
            setReturnArrivalAirport(flightInfo.return.arrivalAirport);
            const [retHour, retMin] = flightInfo.return.time.split(':');
            setReturnHour(retHour);
            setReturnMinute(retMin);
            const [retArrHour, retArrMin] = (flightInfo.return.arrivalTime || '00:00').split(':');
            setReturnArrivalHour(retArrHour);
            setReturnArrivalMinute(retArrMin);
            setReturnAirline(flightInfo.return.airline);
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
            arrivalAirport: outboundArrivalAirport,
            hour: outboundHour,
            minute: outboundMinute,
            arrivalHour: outboundArrivalHour,
            arrivalMinute: outboundArrivalMinute,
            airline: outboundAirline,
        },
        // Return
        return: {
            departureAirport: returnDepartureAirport,
            arrivalAirport: returnArrivalAirport,
            hour: returnHour,
            minute: returnMinute,
            arrivalHour: returnArrivalHour,
            arrivalMinute: returnArrivalMinute,
            airline: returnAirline,
            isCustomDeparture: isReturnDepartureCustom,
        },
        // Setters
        setters: {
            setOutboundDepartureAirport,
            setOutboundArrivalAirport,
            setOutboundHour,
            setOutboundMinute,
            setOutboundArrivalHour,
            setOutboundArrivalMinute,
            setOutboundAirline,
            setReturnDepartureAirport,
            setReturnArrivalAirport,
            setReturnHour,
            setReturnMinute,
            setReturnArrivalHour,
            setReturnArrivalMinute,
            setReturnAirline,
            setIsReturnDepartureCustom,
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
    };
}
