// Picker(보관함의 카테고리별 추천 카드) 카드를 day 컬럼에 추가할 때
// createCardToColumn에 넘길 payload를 카테고리별로 빌드.
// 카테고리가 hotel/transport/food/shopping/tourspa 중 하나가 아니면 null 반환.
export function buildPickerCardPayload(
    draggedCard: any,
    targetColumnId: string,
    targetIndex: number
): any | null {
    const base = { targetColumnId, targetIndex, category: draggedCard?.category };

    switch (draggedCard?.category) {
        case 'hotel':
            return {
                ...base,
                title: draggedCard.title,
                accommodationType: draggedCard.accommodationType,
                checkInTime: draggedCard.checkInTime,
                checkOutTime: draggedCard.checkOutTime,
                city: draggedCard.city,
                coordinates: draggedCard.coordinates,
                description: draggedCard.description,
                tags: draggedCard.tags,
            };
        case 'transport':
            return {
                ...base,
                text: draggedCard.text,
                title: draggedCard.title,
                transportationType: draggedCard.transportationType,
                city: draggedCard.city,
                description: draggedCard.description,
                priceRange: draggedCard.priceRange,
                availability: draggedCard.availability,
                features: draggedCard.features,
                appRequired: draggedCard.appRequired,
                appName: draggedCard.appName,
                icon: draggedCard.icon,
            };
        case 'food':
            return {
                ...base,
                title: draggedCard.title,
                restaurantType: draggedCard.restaurantType,
                city: draggedCard.city,
                coordinates: draggedCard.coordinates,
                cuisine: draggedCard.cuisine,
                specialty: draggedCard.specialty,
                priceRange: draggedCard.priceRange,
                michelin: draggedCard.michelin,
                reservation: draggedCard.reservation,
                openingHours: draggedCard.openingHours,
                features: draggedCard.features,
                icon: draggedCard.icon,
                description: draggedCard.description,
            };
        case 'shopping':
            return {
                ...base,
                title: draggedCard.title,
                shoppingType: draggedCard.shoppingType,
                city: draggedCard.city,
                coordinates: draggedCard.coordinates,
                shoppingCategory: draggedCard.shoppingCategory,
                specialItems: draggedCard.specialItems,
                priceRange: draggedCard.priceRange,
                openingHours: draggedCard.openingHours,
                taxRefund: draggedCard.taxRefund,
                features: draggedCard.features,
                icon: draggedCard.icon,
                description: draggedCard.description,
            };
        case 'tourspa':
            return {
                ...base,
                title: draggedCard.title,
                tourSpaType: draggedCard.tourSpaType,
                description: draggedCard.description,
                duration: draggedCard.duration,
                priceRange: draggedCard.priceRange,
                pickupAvailable: draggedCard.pickupAvailable,
                coordinates: draggedCard.coordinates,
                reservationRequired: draggedCard.reservationRequired,
                openingHours: draggedCard.openingHours,
                features: draggedCard.features,
                rating: draggedCard.rating,
                icon: draggedCard.icon,
            };
        default:
            return null;
    }
}
