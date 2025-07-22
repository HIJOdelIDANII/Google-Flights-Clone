import { useState, useCallback } from "react";
import { searchAirport } from "../services/searchAirport";

interface AirportOption {
  skyId: string; // Changed to string
  entityId: number;
  flightPlaceType: string;
  localizedName: string;
  label: string;
}

// Simple in-memory cache
const cache = new Map<string, AirportOption[]>();
const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes
const cacheTimestamps = new Map<string, number>();

export const useLocationData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchLocations = useCallback(
    async (query: string): Promise<AirportOption[]> => {
      if (!query || query.length < 2) {
        return [];
      }

      const cacheKey = query.toLowerCase();
      const now = Date.now();

      // Check cache first
      if (cache.has(cacheKey)) {
        const timestamp = cacheTimestamps.get(cacheKey);
        if (timestamp && now - timestamp < CACHE_EXPIRY) {
          console.log("Cache hit for:", query);
          return cache.get(cacheKey) || [];
        }
      }

      setLoading(true);
      setError(null);

      try {
        const results = await searchAirport(query);
        const formattedOptions: AirportOption[] = results.map((result) => ({
          ...result,
          label: result.localizedName,
        }));

        // Update cache
        cache.set(cacheKey, formattedOptions);
        cacheTimestamps.set(cacheKey, now);
        console.log("Results cached for:", query, formattedOptions);

        return formattedOptions;
      } catch (err: any) {
        console.error("Airport search error:", err);

        if (err.response?.status === 429) {
          setError("Rate limit exceeded. Please try again later.");
        } else {
          setError("Failed to search airports");
        }

        return [];
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const clearCache = useCallback(() => {
    cache.clear();
    cacheTimestamps.clear();
  }, []);

  return {
    loading,
    error,
    searchLocations,
    clearCache,
  };
};
