import { useState, useCallback } from "react";
import { searchAirport } from "../services/searchAirport";
import { searchMockLocations } from "../data/mockData";

interface AirportOption {
  skyId: string;
  entityId: number;
  localizedName: string;
  label: string;
}

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
        console.log("Attempting API location search for:", query);
        const results = await searchAirport(query);
        const formattedOptions: AirportOption[] = results.map((result) => ({
          ...result,
          label: result.localizedName,
        }));

        // Update cache
        cache.set(cacheKey, formattedOptions);
        cacheTimestamps.set(cacheKey, now);
        console.log("API search successful, results cached for:", query);

        return formattedOptions;
      } catch (err: any) {
        console.warn(
          "API location search failed, falling back to mock data:",
          err.message
        );

        // Fall back to mock data
        const mockResults = searchMockLocations(query);
        const formattedMockOptions: AirportOption[] = mockResults.map(
          (result) => ({
            ...result,
            label: result.localizedName,
          })
        );

        // Cache mock results too
        cache.set(cacheKey, formattedMockOptions);
        cacheTimestamps.set(cacheKey, now);

        console.info("Using mock location data for:", query);
        setError(null); // Don't show error since we have fallback data

        return formattedMockOptions;
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
