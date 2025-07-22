import { useState, createContext, type ReactNode } from "react";
import type { SearchDataInterface } from "../types/searchData";

export interface SearchContextType {
  searchData: SearchDataInterface;
  updateSearchData: (data: Partial<SearchDataInterface>) => void;
}

const defaultSearchData: SearchDataInterface = {
  departureDate: null,
  returnDate: null,
  departureLocation: null,
  arrivationLocation: null,
  passengers: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  tripType: "Round-trip",
  flightClass: "economy",
  departureAirportData: null,
  arrivalAirportData: null,
};

interface SearchProviderProps {
  children: ReactNode;
}

export const searchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchData, setSearchData] =
    useState<SearchDataInterface>(defaultSearchData);

  const updateSearchData = (data: Partial<SearchDataInterface>) => {
    setSearchData((prev) => ({ ...prev, ...data }));
  };

  return (
    <searchContext.Provider value={{ searchData, updateSearchData }}>
      {children}
    </searchContext.Provider>
  );
};
