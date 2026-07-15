// 숙소
export type AccommodationType = 'hotel' | 'resort' | 'airbnb' | 'hostel' | 'guesthouse';

export type AccommodationData = {
    name: string;
    type: AccommodationType;
    coordinates: { lat: number; lng: number };
    checkInTime: string;
    checkOutTime: string;
    city: string;
    description?: string;
    tags?: string[];
    icon?: string;
    showInInbox?: boolean;
    hasInfo?: boolean;  // true 면 cities/<slug>/info/accommodations.ts 에 상세 인포 존재
};

// 맛집
export type RestaurantType =
    | 'korean' | 'japanese' | 'chinese' | 'western' | 'italian'
    | 'french' | 'cafe' | 'street-food' | 'fusion' | 'local';

export type RestaurantData = {
    name: string;
    type: RestaurantType;
    city: string;
    coordinates?: { lat: number; lng: number };
    cuisine?: string;
    specialty?: string;
    priceRange?: string;
    michelin?: string;
    reservation?: boolean;
    openingHours?: string;
    features?: string[];
    icon?: string;
    showInInbox?: boolean;
    hasInfo?: boolean;  // true 면 cities/<slug>/info/restaurants.ts 에 상세 인포 존재
    pinTop?: boolean;   // true 면 인박스 맛집 목록에서 앵커/거리순 정렬과 무관하게 항상 최상단
};

// 쇼핑
export type ShoppingType =
    | 'department-store' | 'mall' | 'market' | 'outlet' | 'duty-free'
    | 'convenience' | 'supermarket' | 'specialty' | 'boutique' | 'souvenir';

export type ShoppingData = {
    name: string;
    type: ShoppingType;
    city: string;
    coordinates: { lat: number; lng: number };
    category?: string;
    specialItems?: string;
    priceRange?: string;
    openingHours?: string;
    taxRefund?: boolean;
    features?: string[];
    icon?: string;
    showInInbox?: boolean;
    hasInfo?: boolean;  // true 면 cities/<slug>/info/shopping.ts 에 상세 인포 존재
};

// 교통
export type TransportationType =
    | 'subway' | 'bus' | 'tram' | 'taxi' | 'ride-hailing'
    | 'rental-car' | 'shuttle' | 'airport-transfer' | 'traditional' | 'micromobility';

export type TransportationData = {
    name: string;
    type: TransportationType;
    city: string;
    description?: string;
    priceRange?: string;
    availability?: string;
    features?: string[];
    appRequired?: boolean;
    appName?: string;
    paymentMethods?: string[];
    icon?: string;
    showInInbox?: boolean;
    hasInfo?: boolean;  // true 면 cities/<slug>/info/transport.ts 에 상세 인포 존재
};

import type { TourSpaData } from '@/data/tourSpa';

export interface CityBundle {
    accommodations: AccommodationData[];
    restaurants: RestaurantData[];
    shopping: ShoppingData[];
    transport: TransportationData[];
    tourSpa?: TourSpaData[];
}

import osakaAccommodations from './osaka/accommodations';
import osakaRestaurants from './osaka/restaurants';
import osakaShopping from './osaka/shopping';
import osakaTransport from './osaka/transport';
import osakaTourSpa from './osaka/tourSpa';

import tokyoAccommodations from './tokyo/accommodations';
import tokyoRestaurants from './tokyo/restaurants';
import tokyoShopping from './tokyo/shopping';
import tokyoTransport from './tokyo/transport';
import tokyoTourSpa from './tokyo/tourSpa';

import fukuokaAccommodations from './fukuoka/accommodations';
import fukuokaRestaurants from './fukuoka/restaurants';
import fukuokaShopping from './fukuoka/shopping';
import fukuokaTransport from './fukuoka/transport';
import fukuokaTourSpa from './fukuoka/tourSpa';

import sapporoAccommodations from './sapporo/accommodations';
import sapporoRestaurants from './sapporo/restaurants';
import sapporoShopping from './sapporo/shopping';
import sapporoTransport from './sapporo/transport';
import sapporoTourSpa from './sapporo/tourSpa';

import okinawaAccommodations from './okinawa/accommodations';
import okinawaRestaurants from './okinawa/restaurants';
import okinawaShopping from './okinawa/shopping';
import okinawaTransport from './okinawa/transport';
import okinawaTourSpa from './okinawa/tourSpa';

import taipeiAccommodations from './taipei/accommodations';
import taipeiRestaurants from './taipei/restaurants';
import taipeiShopping from './taipei/shopping';
import taipeiTransport from './taipei/transport';
import taipeiTourSpa from './taipei/tourSpa';

import shanghaiAccommodations from './shanghai/accommodations';
import shanghaiRestaurants from './shanghai/restaurants';
import shanghaiShopping from './shanghai/shopping';
import shanghaiTransport from './shanghai/transport';
import shanghaiTourSpa from './shanghai/tourSpa';

import dalianAccommodations from './dalian/accommodations';
import dalianRestaurants from './dalian/restaurants';
import dalianShopping from './dalian/shopping';
import dalianTransport from './dalian/transport';
import dalianTourSpa from './dalian/tourSpa';

import hongkongAccommodations from './hong-kong/accommodations';
import hongkongRestaurants from './hong-kong/restaurants';
import hongkongShopping from './hong-kong/shopping';
import hongkongTransport from './hong-kong/transport';
import hongkongTourSpa from './hong-kong/tourSpa';

import danangAccommodations from './da-nang/accommodations';
import danangRestaurants from './da-nang/restaurants';
import danangShopping from './da-nang/shopping';
import danangTransport from './da-nang/transport';
import danangTourSpa from './da-nang/tourSpa';

import bangkokAccommodations from './bangkok/accommodations';
import bangkokRestaurants from './bangkok/restaurants';
import bangkokShopping from './bangkok/shopping';
import bangkokTransport from './bangkok/transport';
import bangkokTourSpa from './bangkok/tourSpa';

import nhatrangAccommodations from './nha-trang/accommodations';
import nhatrangRestaurants from './nha-trang/restaurants';
import nhatrangShopping from './nha-trang/shopping';
import nhatrangTransport from './nha-trang/transport';
import nhatrangTourSpa from './nha-trang/tourSpa';

import baliAccommodations from './bali/accommodations';
import baliRestaurants from './bali/restaurants';
import baliShopping from './bali/shopping';
import baliTransport from './bali/transport';
import baliTourSpa from './bali/tourSpa';

import cebuAccommodations from './cebu/accommodations';
import cebuRestaurants from './cebu/restaurants';
import cebuShopping from './cebu/shopping';
import cebuTransport from './cebu/transport';
import cebuTourSpa from './cebu/tourSpa';

import chiangmaiAccommodations from './chiang-mai/accommodations';
import chiangmaiRestaurants from './chiang-mai/restaurants';
import chiangmaiShopping from './chiang-mai/shopping';
import chiangmaiTransport from './chiang-mai/transport';
import chiangmaiTourSpa from './chiang-mai/tourSpa';

import dalatAccommodations from './da-lat/accommodations';
import dalatRestaurants from './da-lat/restaurants';
import dalatShopping from './da-lat/shopping';
import dalatTransport from './da-lat/transport';
import dalatTourSpa from './da-lat/tourSpa';

import phuquocAccommodations from './phu-quoc/accommodations';
import phuquocRestaurants from './phu-quoc/restaurants';
import phuquocShopping from './phu-quoc/shopping';
import phuquocTransport from './phu-quoc/transport';
import phuquocTourSpa from './phu-quoc/tourSpa';

import kotakinabaluAccommodations from './kota-kinabalu/accommodations';
import kotakinabaluRestaurants from './kota-kinabalu/restaurants';
import kotakinabaluShopping from './kota-kinabalu/shopping';
import kotakinabaluTransport from './kota-kinabalu/transport';
import kotakinabaluTourSpa from './kota-kinabalu/tourSpa';

import singaporeAccommodations from './singapore/accommodations';
import singaporeRestaurants from './singapore/restaurants';
import singaporeShopping from './singapore/shopping';
import singaporeTransport from './singapore/transport';
import singaporeTourSpa from './singapore/tourSpa';

import hanoiAccommodations from './hanoi/accommodations';
import hanoiRestaurants from './hanoi/restaurants';
import hanoiShopping from './hanoi/shopping';
import hanoiTransport from './hanoi/transport';
import hanoiTourSpa from './hanoi/tourSpa';

import hochiminhAccommodations from './ho-chi-minh/accommodations';
import hochiminhRestaurants from './ho-chi-minh/restaurants';
import hochiminhShopping from './ho-chi-minh/shopping';
import hochiminhTransport from './ho-chi-minh/transport';
import hochiminhTourSpa from './ho-chi-minh/tourSpa';

import boracayAccommodations from './boracay/accommodations';
import boracayRestaurants from './boracay/restaurants';
import boracayShopping from './boracay/shopping';
import boracayTransport from './boracay/transport';
import boracayTourSpa from './boracay/tourSpa';

import pattayaAccommodations from './pattaya/accommodations';
import pattayaRestaurants from './pattaya/restaurants';
import pattayaShopping from './pattaya/shopping';
import pattayaTransport from './pattaya/transport';
import pattayaTourSpa from './pattaya/tourSpa';

import guamAccommodations from './guam/accommodations';
import guamRestaurants from './guam/restaurants';
import guamShopping from './guam/shopping';
import guamTransport from './guam/transport';
import guamTourSpa from './guam/tourSpa';

import ulaanbaatarAccommodations from './ulaanbaatar/accommodations';
import ulaanbaatarRestaurants from './ulaanbaatar/restaurants';
import ulaanbaatarShopping from './ulaanbaatar/shopping';
import ulaanbaatarTransport from './ulaanbaatar/transport';
import ulaanbaatarTourSpa from './ulaanbaatar/tourSpa';

import parisAccommodations from './paris/accommodations';
import parisRestaurants from './paris/restaurants';
import parisShopping from './paris/shopping';
import parisTransport from './paris/transport';

import mallorcaAccommodations from './mallorca/accommodations';
import mallorcaRestaurants from './mallorca/restaurants';
import mallorcaShopping from './mallorca/shopping';
import mallorcaTransport from './mallorca/transport';

export const CITY_DATA: Record<string, CityBundle> = {
    "Osaka": {
        accommodations: osakaAccommodations,
        restaurants: osakaRestaurants,
        shopping: osakaShopping,
        transport: osakaTransport,
        tourSpa: osakaTourSpa,
    },
    "Tokyo": {
        accommodations: tokyoAccommodations,
        restaurants: tokyoRestaurants,
        shopping: tokyoShopping,
        transport: tokyoTransport,
        tourSpa: tokyoTourSpa,
    },
    "Fukuoka": {
        accommodations: fukuokaAccommodations,
        restaurants: fukuokaRestaurants,
        shopping: fukuokaShopping,
        transport: fukuokaTransport,
        tourSpa: fukuokaTourSpa,
    },
    "Sapporo": {
        accommodations: sapporoAccommodations,
        restaurants: sapporoRestaurants,
        shopping: sapporoShopping,
        transport: sapporoTransport,
        tourSpa: sapporoTourSpa,
    },
    "Okinawa": {
        accommodations: okinawaAccommodations,
        restaurants: okinawaRestaurants,
        shopping: okinawaShopping,
        transport: okinawaTransport,
        tourSpa: okinawaTourSpa,
    },
    "Taipei": {
        accommodations: taipeiAccommodations,
        restaurants: taipeiRestaurants,
        shopping: taipeiShopping,
        transport: taipeiTransport,
        tourSpa: taipeiTourSpa,
    },
    "Shanghai": {
        accommodations: shanghaiAccommodations,
        restaurants: shanghaiRestaurants,
        shopping: shanghaiShopping,
        transport: shanghaiTransport,
        tourSpa: shanghaiTourSpa,
    },
    "Dalian": {
        accommodations: dalianAccommodations,
        restaurants: dalianRestaurants,
        shopping: dalianShopping,
        transport: dalianTransport,
        tourSpa: dalianTourSpa,
    },
    "Hong Kong": {
        accommodations: hongkongAccommodations,
        restaurants: hongkongRestaurants,
        shopping: hongkongShopping,
        transport: hongkongTransport,
        tourSpa: hongkongTourSpa,
    },
    "Da Nang": {
        accommodations: danangAccommodations,
        restaurants: danangRestaurants,
        shopping: danangShopping,
        transport: danangTransport,
        tourSpa: danangTourSpa,
    },
    "Bangkok": {
        accommodations: bangkokAccommodations,
        restaurants: bangkokRestaurants,
        shopping: bangkokShopping,
        transport: bangkokTransport,
        tourSpa: bangkokTourSpa,
    },
    "Nha Trang": {
        accommodations: nhatrangAccommodations,
        restaurants: nhatrangRestaurants,
        shopping: nhatrangShopping,
        transport: nhatrangTransport,
        tourSpa: nhatrangTourSpa,
    },
    "Bali": {
        accommodations: baliAccommodations,
        restaurants: baliRestaurants,
        shopping: baliShopping,
        transport: baliTransport,
        tourSpa: baliTourSpa,
    },
    "Cebu": {
        accommodations: cebuAccommodations,
        restaurants: cebuRestaurants,
        shopping: cebuShopping,
        transport: cebuTransport,
        tourSpa: cebuTourSpa,
    },
    "Chiang Mai": {
        accommodations: chiangmaiAccommodations,
        restaurants: chiangmaiRestaurants,
        shopping: chiangmaiShopping,
        transport: chiangmaiTransport,
        tourSpa: chiangmaiTourSpa,
    },
    "Da Lat": {
        accommodations: dalatAccommodations,
        restaurants: dalatRestaurants,
        shopping: dalatShopping,
        transport: dalatTransport,
        tourSpa: dalatTourSpa,
    },
    "Phu Quoc": {
        accommodations: phuquocAccommodations,
        restaurants: phuquocRestaurants,
        shopping: phuquocShopping,
        transport: phuquocTransport,
        tourSpa: phuquocTourSpa,
    },
    "Kota Kinabalu": {
        accommodations: kotakinabaluAccommodations,
        restaurants: kotakinabaluRestaurants,
        shopping: kotakinabaluShopping,
        transport: kotakinabaluTransport,
        tourSpa: kotakinabaluTourSpa,
    },
    "Singapore": {
        accommodations: singaporeAccommodations,
        restaurants: singaporeRestaurants,
        shopping: singaporeShopping,
        transport: singaporeTransport,
        tourSpa: singaporeTourSpa,
    },
    "Hanoi": {
        accommodations: hanoiAccommodations,
        restaurants: hanoiRestaurants,
        shopping: hanoiShopping,
        transport: hanoiTransport,
        tourSpa: hanoiTourSpa,
    },
    "Ho Chi Minh": {
        accommodations: hochiminhAccommodations,
        restaurants: hochiminhRestaurants,
        shopping: hochiminhShopping,
        transport: hochiminhTransport,
        tourSpa: hochiminhTourSpa,
    },
    "Boracay": {
        accommodations: boracayAccommodations,
        restaurants: boracayRestaurants,
        shopping: boracayShopping,
        transport: boracayTransport,
        tourSpa: boracayTourSpa,
    },
    "Pattaya": {
        accommodations: pattayaAccommodations,
        restaurants: pattayaRestaurants,
        shopping: pattayaShopping,
        transport: pattayaTransport,
        tourSpa: pattayaTourSpa,
    },
    "Guam": {
        accommodations: guamAccommodations,
        restaurants: guamRestaurants,
        shopping: guamShopping,
        transport: guamTransport,
        tourSpa: guamTourSpa,
    },
    "Ulaanbaatar": {
        accommodations: ulaanbaatarAccommodations,
        restaurants: ulaanbaatarRestaurants,
        shopping: ulaanbaatarShopping,
        transport: ulaanbaatarTransport,
        tourSpa: ulaanbaatarTourSpa,
    },
    "Paris": {
        accommodations: parisAccommodations,
        restaurants: parisRestaurants,
        shopping: parisShopping,
        transport: parisTransport,
    },
    "Mallorca": {
        accommodations: mallorcaAccommodations,
        restaurants: mallorcaRestaurants,
        shopping: mallorcaShopping,
        transport: mallorcaTransport,
    },
};
