import { useState, createContext, useContext, type ReactNode } from "react";
import dayjs from "dayjs";
import type { SearchDataInterface } from "../types/searchData";

export interface SearchContextType {
  searchData: SearchDataInterface;
  updateSearchData: (data: Partial<SearchDataInterface>) => void;
  resetSearchData: () => void;
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
  tripType: "One-way",
  flightClass: "Economy",
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
    setSearchData((prev) => ({
      ...prev,
      ...data,
      departureDate: data.departureDate ? dayjs(data.departureDate) : null,
      returnDate: data.returnDate ? dayjs(data.returnDate) : null,
    }));
  };
  const resetSearchData = () => {
    setSearchData(defaultSearchData);
  };
  const value: SearchContextType = {
    searchData,
    updateSearchData,
    resetSearchData,
  };
  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
};
