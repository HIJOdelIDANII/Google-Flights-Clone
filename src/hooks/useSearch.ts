import { useContext } from "react";
import { searchContext, type SearchContextType } from "../context/SearchContext";

export const useSearch = (): SearchContextType=> {
  const context = useContext(searchContext);

  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
};
