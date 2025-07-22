import { commonGetRequest, type CommonGetRequestOptions } from "./api";

interface SearchAirportQueryParams {
  query: string;
  locale: string;
}

export interface AirportSearchResult {
  skyId: string; // Changed to string to match API response
  entityId: number;
  flightPlaceType: string;
  localizedName: string;
}

const searchAiportOptions = (query: string): CommonGetRequestOptions => {
  return {
    urlEndpoint: "searchAirport",
    params: {
      query: `${query}`,
      locale: "en-US",
    } as SearchAirportQueryParams,
    version: "v1",
  };
};

export async function searchAirport(
  query: string
): Promise<AirportSearchResult[]> {
  try {
    const options = searchAiportOptions(query);
    const response = await commonGetRequest(options);
    console.log("API Response:", response);

    if (!response.data || !Array.isArray(response.data)) {
      console.warn("Invalid response structure:", response);
      return [];
    }

    const data = response.data;

    const airportResults: AirportSearchResult[] = data
      .filter((item: any) => {
        const flightParams = item.navigation?.relevantFlightParams;
        return flightParams && flightParams.flightPlaceType === "AIRPORT";
      })
      .map((item: any): AirportSearchResult => {
        const flightParams = item.navigation.relevantFlightParams;
        return {
          skyId: flightParams.skyId, // Keep as string
          entityId: parseInt(flightParams.entityId),
          flightPlaceType: flightParams.flightPlaceType,
          localizedName: flightParams.localizedName,
        };
      });

    console.log("Processed airport results:", airportResults);
    return airportResults;
  } catch (error) {
    console.error("Error in searchAirport:", error);
    throw error;
  }
}
