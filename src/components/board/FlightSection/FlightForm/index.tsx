import { FlightSegmentForm } from "./FlightSegmentForm";
import type { useFlightForm } from "./useFlightForm";

type FlightFormData = ReturnType<typeof useFlightForm>;

interface FlightFormProps extends FlightFormData {
    isOver: boolean;
    onConfirmClick?: () => void;
}

export function FlightForm(props: FlightFormProps) {
    const {
        dates,
        outbound,
        return: returnFlight,
        setters,
        stopovers,
        handleDateConfirm,
        handleConfirm,
        destinationAirports,
        hasMultipleAirports,
        destinationMonth,
        isOver,
        onConfirmClick
    } = props;

    return (
        <div
            className={`min-h-[300px] rounded-xl border shadow-sm transition-all duration-200 p-6 ${isOver ? 'border-purple-500 bg-purple-50/50 ring-2 ring-purple-100' : 'bg-white border-gray-200'
                }`}
        >
            <div className="space-y-6">
                {/* 가는편 */}
                <FlightSegmentForm
                    type="outbound"
                    airports={destinationAirports}
                    hasMultipleAirports={hasMultipleAirports}
                    destinationMonth={destinationMonth}
                    values={{
                        departureAirport: outbound.departureAirport,
                        departureTerminal: outbound.departureTerminal,
                        departureDate: outbound.departureDate,
                        arrivalAirport: outbound.arrivalAirport,
                        arrivalTerminal: outbound.arrivalTerminal,
                        arrivalDate: outbound.arrivalDate,
                        hour: outbound.hour,
                        minute: outbound.minute,
                        arrivalHour: outbound.arrivalHour,
                        arrivalMinute: outbound.arrivalMinute,
                        airline: outbound.airline,
                        isCustomArrival: outbound.isCustomArrival,
                    }}
                    onChange={{
                        setDepartureAirport: setters.setOutboundDepartureAirport,
                        setDepartureTerminal: setters.setOutboundDepartureTerminal,
                        setDepartureDate: setters.setOutboundDepartureDate,
                        setArrivalAirport: setters.setOutboundArrivalAirport,
                        setArrivalTerminal: setters.setOutboundArrivalTerminal,
                        setArrivalDate: setters.setOutboundArrivalDate,
                        setHour: setters.setOutboundHour,
                        setMinute: setters.setOutboundMinute,
                        setArrivalHour: setters.setOutboundArrivalHour,
                        setArrivalMinute: setters.setOutboundArrivalMinute,
                        setAirline: setters.setOutboundAirline,
                        setIsCustomArrival: setters.setIsOutboundArrivalCustom,
                    }}
                />

                {/* 가는편 경유지 추가 버튼 */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={stopovers.addOutbound}
                        disabled={stopovers.outbound.length >= 2}
                        className="px-4 py-2 text-sm text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        + 경유지 ({stopovers.outbound.length}/2)
                    </button>
                </div>

                {/* 가는편 경유지들 */}
                {stopovers.outbound.map((stopover, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -top-2 right-2 z-10">
                            <button
                                type="button"
                                onClick={() => stopovers.removeOutbound(index)}
                                className="px-2 py-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                            >
                                삭제
                            </button>
                        </div>
                        <FlightSegmentForm
                            type="outbound"
                            airports={destinationAirports}
                            hasMultipleAirports={hasMultipleAirports}
                            isStopover={true}
                            destinationMonth={destinationMonth}
                            values={stopover}
                            onChange={{
                                setDepartureAirport: (value) => stopovers.updateOutbound(index, 'departureAirport', value),
                                setDepartureTerminal: (value) => stopovers.updateOutbound(index, 'departureTerminal', value),
                                setDepartureDate: (value) => stopovers.updateOutbound(index, 'departureDate', value),
                                setArrivalAirport: (value) => stopovers.updateOutbound(index, 'arrivalAirport', value),
                                setArrivalTerminal: (value) => stopovers.updateOutbound(index, 'arrivalTerminal', value),
                                setArrivalDate: (value) => stopovers.updateOutbound(index, 'arrivalDate', value),
                                setHour: (value) => stopovers.updateOutbound(index, 'hour', value),
                                setMinute: (value) => stopovers.updateOutbound(index, 'minute', value),
                                setArrivalHour: (value) => stopovers.updateOutbound(index, 'arrivalHour', value),
                                setArrivalMinute: (value) => stopovers.updateOutbound(index, 'arrivalMinute', value),
                                setAirline: (value) => stopovers.updateOutbound(index, 'airline', value),
                                setIsCustomArrival: (value) => stopovers.updateOutbound(index, 'isCustomArrival', value),
                            }}
                        />
                    </div>
                ))}



                {/* 오는편 */}
                <FlightSegmentForm
                    type="return"
                    airports={destinationAirports}
                    hasMultipleAirports={hasMultipleAirports}
                    destinationMonth={destinationMonth}
                    values={{
                        departureAirport: returnFlight.departureAirport,
                        departureTerminal: returnFlight.departureTerminal,
                        departureDate: returnFlight.departureDate,
                        arrivalAirport: returnFlight.arrivalAirport,
                        arrivalTerminal: returnFlight.arrivalTerminal,
                        arrivalDate: returnFlight.arrivalDate,
                        hour: returnFlight.hour,
                        minute: returnFlight.minute,
                        arrivalHour: returnFlight.arrivalHour,
                        arrivalMinute: returnFlight.arrivalMinute,
                        airline: returnFlight.airline,
                        isCustomDeparture: returnFlight.isCustomDeparture,
                        isCustomArrival: returnFlight.isCustomArrival,
                    }}
                    onChange={{
                        setDepartureAirport: setters.setReturnDepartureAirport,
                        setDepartureTerminal: setters.setReturnDepartureTerminal,
                        setDepartureDate: setters.setReturnDepartureDate,
                        setArrivalAirport: setters.setReturnArrivalAirport,
                        setArrivalTerminal: setters.setReturnArrivalTerminal,
                        setArrivalDate: setters.setReturnArrivalDate,
                        setHour: setters.setReturnHour,
                        setMinute: setters.setReturnMinute,
                        setArrivalHour: setters.setReturnArrivalHour,
                        setArrivalMinute: setters.setReturnArrivalMinute,
                        setAirline: setters.setReturnAirline,
                        setIsCustomDeparture: setters.setIsReturnDepartureCustom,
                        setIsCustomArrival: setters.setIsReturnArrivalCustom,
                    }}
                />

                {/* 오는편 경유지 추가 버튼 */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={stopovers.addReturn}
                        disabled={stopovers.return.length >= 2}
                        className="px-4 py-2 text-sm text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        + 경유지 ({stopovers.return.length}/2)
                    </button>
                </div>

                {/* 오는편 경유지들 */}
                {stopovers.return.map((stopover, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -top-2 right-2 z-10">
                            <button
                                type="button"
                                onClick={() => stopovers.removeReturn(index)}
                                className="px-2 py-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                            >
                                삭제
                            </button>
                        </div>
                        <FlightSegmentForm
                            type="return"
                            airports={destinationAirports}
                            hasMultipleAirports={hasMultipleAirports}
                            isStopover={true}
                            destinationMonth={destinationMonth}
                            values={stopover}
                            onChange={{
                                setDepartureAirport: (value) => stopovers.updateReturn(index, 'departureAirport', value),
                                setDepartureTerminal: (value) => stopovers.updateReturn(index, 'departureTerminal', value),
                                setDepartureDate: (value) => stopovers.updateReturn(index, 'departureDate', value),
                                setArrivalAirport: (value) => stopovers.updateReturn(index, 'arrivalAirport', value),
                                setArrivalTerminal: (value) => stopovers.updateReturn(index, 'arrivalTerminal', value),
                                setArrivalDate: (value) => stopovers.updateReturn(index, 'arrivalDate', value),
                                setHour: (value) => stopovers.updateReturn(index, 'hour', value),
                                setMinute: (value) => stopovers.updateReturn(index, 'minute', value),
                                setArrivalHour: (value) => stopovers.updateReturn(index, 'arrivalHour', value),
                                setArrivalMinute: (value) => stopovers.updateReturn(index, 'arrivalMinute', value),
                                setAirline: (value) => stopovers.updateReturn(index, 'airline', value),
                                setIsCustomArrival: (value) => stopovers.updateReturn(index, 'isCustomArrival', value),
                            }}
                        />
                    </div>
                ))}



                {/* 확정 버튼 */}
                <div className="flex justify-center pt-2">
                    <button
                        onClick={onConfirmClick || handleConfirm}
                        className="px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors shadow-sm"
                    >
                        확정하기
                    </button>
                </div>
            </div>
        </div>
    );
}
