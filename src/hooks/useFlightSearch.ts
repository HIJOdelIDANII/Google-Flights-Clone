import { useState } from "react";
import {
  searchFlights,
  type SearchFlightsResponse,
  type FlightItinerary,
} from "../services/searchFlights";
import type { SearchDataInterface } from "../types/searchData";

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

      return response;
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error:
          error.response?.status === 429
            ? "Rate limit exceeded. Please try again later."
            : "Failed to search flights. Please try again.",
      }));
      throw error;
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
