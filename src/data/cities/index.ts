// 숙소
export type AccommodationData = {
    name: string;
    type: 'hotel' | 'resort';
    coordinates: { lat: number; lng: number };
    checkInTime: string;
    checkOutTime: string;
    city: string;
    description?: string;
    tags?: string[];
    showInInbox?: boolean;
};

// 맛집
export type RestaurantType =
    | 'korean' | 'japanese' | 'chinese' | 'western' | 'italian'
    | 'french' | 'cafe' | 'street-food' | 'fusion' | 'local';

export type RestaurantData = {
    name: string;
    type: RestaurantType;
    city: string;
    coordinates: { lat: number; lng: number };
    cuisine?: string;
    specialty?: string;
    priceRange?: string;
    michelin?: string;
    reservation?: boolean;
    openingHours?: string;
    features?: string[];
    icon?: string;
    showInInbox?: boolean;
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
};


export interface CityBundle {
    accommodations: AccommodationData[];
    restaurants: RestaurantData[];
    shopping: ShoppingData[];
    transport: TransportationData[];
}

import osakaAccommodations from './osaka/accommodations';
import osakaRestaurants from './osaka/restaurants';
import osakaShopping from './osaka/shopping';
import osakaTransport from './osaka/transport';

import tokyoAccommodations from './tokyo/accommodations';
import tokyoRestaurants from './tokyo/restaurants';
import tokyoShopping from './tokyo/shopping';
import tokyoTransport from './tokyo/transport';

import fukuokaAccommodations from './fukuoka/accommodations';
import fukuokaRestaurants from './fukuoka/restaurants';
import fukuokaShopping from './fukuoka/shopping';
import fukuokaTransport from './fukuoka/transport';

import sapporoAccommodations from './sapporo/accommodations';
import sapporoRestaurants from './sapporo/restaurants';
import sapporoShopping from './sapporo/shopping';
import sapporoTransport from './sapporo/transport';

import okinawaAccommodations from './okinawa/accommodations';
import okinawaRestaurants from './okinawa/restaurants';
import okinawaShopping from './okinawa/shopping';
import okinawaTransport from './okinawa/transport';

import taipeiAccommodations from './taipei/accommodations';
import taipeiRestaurants from './taipei/restaurants';
import taipeiShopping from './taipei/shopping';
import taipeiTransport from './taipei/transport';

import shanghaiAccommodations from './shanghai/accommodations';
import shanghaiRestaurants from './shanghai/restaurants';
import shanghaiShopping from './shanghai/shopping';
import shanghaiTransport from './shanghai/transport';

import dalianAccommodations from './dalian/accommodations';
import dalianRestaurants from './dalian/restaurants';
import dalianShopping from './dalian/shopping';
import dalianTransport from './dalian/transport';

import danangAccommodations from './da-nang/accommodations';
import danangRestaurants from './da-nang/restaurants';
import danangShopping from './da-nang/shopping';
import danangTransport from './da-nang/transport';

import bangkokAccommodations from './bangkok/accommodations';
import bangkokRestaurants from './bangkok/restaurants';
import bangkokShopping from './bangkok/shopping';
import bangkokTransport from './bangkok/transport';

import nhatrangAccommodations from './nha-trang/accommodations';
import nhatrangRestaurants from './nha-trang/restaurants';
import nhatrangShopping from './nha-trang/shopping';
import nhatrangTransport from './nha-trang/transport';

import baliAccommodations from './bali/accommodations';
import baliRestaurants from './bali/restaurants';
import baliShopping from './bali/shopping';
import baliTransport from './bali/transport';

import cebuAccommodations from './cebu/accommodations';
import cebuRestaurants from './cebu/restaurants';
import cebuShopping from './cebu/shopping';
import cebuTransport from './cebu/transport';

import chiangmaiAccommodations from './chiang-mai/accommodations';
import chiangmaiRestaurants from './chiang-mai/restaurants';
import chiangmaiShopping from './chiang-mai/shopping';
import chiangmaiTransport from './chiang-mai/transport';

import dalatAccommodations from './da-lat/accommodations';
import dalatRestaurants from './da-lat/restaurants';
import dalatShopping from './da-lat/shopping';
import dalatTransport from './da-lat/transport';

import guamAccommodations from './guam/accommodations';
import guamRestaurants from './guam/restaurants';
import guamShopping from './guam/shopping';
import guamTransport from './guam/transport';

import ulaanbaatarAccommodations from './ulaanbaatar/accommodations';
import ulaanbaatarRestaurants from './ulaanbaatar/restaurants';
import ulaanbaatarShopping from './ulaanbaatar/shopping';
import ulaanbaatarTransport from './ulaanbaatar/transport';

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
    },
    "Tokyo": {
        accommodations: tokyoAccommodations,
        restaurants: tokyoRestaurants,
        shopping: tokyoShopping,
        transport: tokyoTransport,
    },
    "Fukuoka": {
        accommodations: fukuokaAccommodations,
        restaurants: fukuokaRestaurants,
        shopping: fukuokaShopping,
        transport: fukuokaTransport,
    },
    "Sapporo": {
        accommodations: sapporoAccommodations,
        restaurants: sapporoRestaurants,
        shopping: sapporoShopping,
        transport: sapporoTransport,
    },
    "Okinawa": {
        accommodations: okinawaAccommodations,
        restaurants: okinawaRestaurants,
        shopping: okinawaShopping,
        transport: okinawaTransport,
    },
    "Taipei": {
        accommodations: taipeiAccommodations,
        restaurants: taipeiRestaurants,
        shopping: taipeiShopping,
        transport: taipeiTransport,
    },
    "Shanghai": {
        accommodations: shanghaiAccommodations,
        restaurants: shanghaiRestaurants,
        shopping: shanghaiShopping,
        transport: shanghaiTransport,
    },
    "Dalian": {
        accommodations: dalianAccommodations,
        restaurants: dalianRestaurants,
        shopping: dalianShopping,
        transport: dalianTransport,
    },
    "Da Nang": {
        accommodations: danangAccommodations,
        restaurants: danangRestaurants,
        shopping: danangShopping,
        transport: danangTransport,
    },
    "Bangkok": {
        accommodations: bangkokAccommodations,
        restaurants: bangkokRestaurants,
        shopping: bangkokShopping,
        transport: bangkokTransport,
    },
    "Nha Trang": {
        accommodations: nhatrangAccommodations,
        restaurants: nhatrangRestaurants,
        shopping: nhatrangShopping,
        transport: nhatrangTransport,
    },
    "Bali": {
        accommodations: baliAccommodations,
        restaurants: baliRestaurants,
        shopping: baliShopping,
        transport: baliTransport,
    },
    "Cebu": {
        accommodations: cebuAccommodations,
        restaurants: cebuRestaurants,
        shopping: cebuShopping,
        transport: cebuTransport,
    },
    "Chiang Mai": {
        accommodations: chiangmaiAccommodations,
        restaurants: chiangmaiRestaurants,
        shopping: chiangmaiShopping,
        transport: chiangmaiTransport,
    },
    "Da Lat": {
        accommodations: dalatAccommodations,
        restaurants: dalatRestaurants,
        shopping: dalatShopping,
        transport: dalatTransport,
    },
    "Guam": {
        accommodations: guamAccommodations,
        restaurants: guamRestaurants,
        shopping: guamShopping,
        transport: guamTransport,
    },
    "Ulaanbaatar": {
        accommodations: ulaanbaatarAccommodations,
        restaurants: ulaanbaatarRestaurants,
        shopping: ulaanbaatarShopping,
        transport: ulaanbaatarTransport,
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
