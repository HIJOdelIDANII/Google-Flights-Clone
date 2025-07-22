import { commonGetRequest, type CommonGetRequestOptions } from "./api";
import dayjs from "dayjs";
import type { SearchDataInterface } from "../types/searchData";

export interface FlightItinerary {
  id: string;
  price: {
    raw: number;
    formatted: string;
  };
  legs: FlightLeg[];
  carriers: Carrier[];
  duration: number;
  stops: number;
  departure: {
    time: string;
    airport: string;
    city: string;
  };
  arrival: {
    time: string;
    airport: string;
    city: string;
  };
}

export interface FlightLeg {
  id: string;
  origin: Airport;
  destination: Airport;
  departure: string;
  arrival: string;
  duration: number;
  carriers: Carrier[];
  aircraft: string;
}

export interface Airport {
  id: string;
  name: string;
  city: string;
  country: string;
}

export interface Carrier {
  id: number;
  name: string;
  logoUrl: string;
  alternateId: string;
}

export interface SearchFlightsResponse {
  status: boolean;
  data: {
    context: {
      status: string;
      sessionId: string;
      totalResults: number;
    };
    itineraries: FlightItinerary[];
    filterStats: {
      duration: {
        min: number;
        max: number;
      };
      carriers: Carrier[];
      airports: any[];
      stopPrices: {
        direct?: { formattedPrice: string; rawPrice: number };
        one?: { formattedPrice: string; rawPrice: number };
      };
    };
  };
}

interface SearchFlightsQueryParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  returnDate?: string;
  cabinClass: string;
  adults: number;
  childrens: number;
  infants: number;
  sortBy?: string;
  limit?: number;
  currency?: string;
  market?: string;
  countryCode?: string;
}

const searchFlightsOptions = (
  params: SearchFlightsQueryParams
): CommonGetRequestOptions => {
  return {
    urlEndpoint: "searchFlights",
    params: params,
    version: "v2",
  };
};

export async function searchFlights(
  searchData: SearchDataInterface,
  originData: { skyId: string; entityId: number },
  destinationData: { skyId: string; entityId: number }
): Promise<SearchFlightsResponse> {
  try {
    const params: SearchFlightsQueryParams = {
      originSkyId: originData.skyId,
      destinationSkyId: destinationData.skyId,
      originEntityId: originData.entityId.toString(),
      destinationEntityId: destinationData.entityId.toString(),
      date: searchData.departureDate
        ? dayjs(searchData.departureDate).format("YYYY-MM-DD")
        : "",
      ...(searchData.returnDate && {
        returnDate: dayjs(searchData.returnDate).format("YYYY-MM-DD"),
      }),
      cabinClass: searchData.flightClass,
      adults: searchData.passengers.adults,
      childrens: searchData.passengers.children,
      infants: searchData.passengers.infants,
      sortBy: "best",
      limit: 50,
      currency: "USD",
      market: "en-US",
      countryCode: "US",
    };

    console.log("Search flights params:", params);

    const options = searchFlightsOptions(params);
    const response = await commonGetRequest(options);

    console.log("Search flights response:", response);

    return response;
  } catch (error) {
    console.error("Error searching flights:", error);
    throw error;
  }
}
