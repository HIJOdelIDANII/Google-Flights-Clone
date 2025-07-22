import { commonGetRequest, type CommonGetRequestOptions } from "./api";

interface SearchAirportQueryParams {
  query: string; //Name of the location where the Airport is situated.
  locale: string;
}

interface AirportSearchResult {
  skyId: number;
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
  const options = searchAiportOptions(query);
  const response = await commonGetRequest(options);
  console.log(response);
  const data = response.data;

  const airportResults: AirportSearchResult[] = data
    .filter(
      (item: any) => item.relevantFlightParams.flightPlaceType === "AIRPORT"
    )
    .map(
      (item: any): AirportSearchResult => ({
        skyId: item.relevantFlightParams.skyId,
        entityId: item.relevantFlightParams.entityId,
        flightPlaceType: item.relevantFlightParams.flightPlaceType,
        localizedName: item.relevantFlightParams.localizedName,
      })
    );

  return airportResults;
}
