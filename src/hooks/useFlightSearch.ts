import { useState } from "react";
import {
  searchFlights,
  type FlightItinerary,
} from "../services/searchFlights";
import type { SearchDataInterface } from "../types/searchData";
import { mockFlightResults } from "../data/mockData";

interface FlightSearchState {
  loading: boolean;
  results: FlightItinerary[];
  error: string | null;
  filterStats: any;
  totalResults: number;
}

export const useFlightSearch = () => {
  const [state, setState] = useState<FlightSearchState>({
    loading: false,
    results: [],
    error: null,
    filterStats: null,
    totalResults: 0,
  });

  const search = async (
    searchData: SearchDataInterface,
    originData: { skyId: string; entityId: number },
    destinationData: { skyId: string; entityId: number }
  ) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      console.log("Attempting API search...");
      const response = await searchFlights(
        searchData,
        originData,
        destinationData
      );

      setState({
        loading: false,
        results: response.data.itineraries || [],
        error: null,
        filterStats: response.data.filterStats,
        totalResults: response.data.context.totalResults,
      });

      console.log("API search successful");
      return response;
    } catch (error: any) {
      console.warn(
        "API search failed, falling back to mock data:",
        error.message
      );
      setState({
        loading: false,
        results: mockFlightResults.flights.map((flight: any) => ({
          ...flight,
          legs: flight.legs ?? [flight], 
        })),
        error: null, 
        filterStats: mockFlightResults.filterStats,
        totalResults: mockFlightResults.totalResults,
      });

      
      console.info("Using mock flight data due to API unavailability");

      return {
        data: {
          itineraries: mockFlightResults.flights,
          filterStats: mockFlightResults.filterStats,
          context: { totalResults: mockFlightResults.totalResults },
        },
      };
    }
  };

  const clearResults = () => {
    setState({
      loading: false,
      results: [],
      error: null,
      filterStats: null,
      totalResults: 0,
    });
  };

  return {
    ...state,
    search,
    clearResults,
  };
};
