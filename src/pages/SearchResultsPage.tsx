import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ResultsHeader } from "../components/results/ResultsHeader";
import { SortOptions } from "../components/results/SortOptions";
import { FlightFilters } from "../components/results/FlightFilters";
import { FlightResults } from "../components/results/FlightResults";
import { MockDataNotification } from "../components/common/MockDataNotification";
import { useFlightSearch } from "../hooks/useFlightSearch";

export const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { search, loading, results, error, filterStats, totalResults } =
    useFlightSearch();
  const [selectedSort, setSelectedSort] = useState("best");
  const [showMockNotification, setShowMockNotification] = useState(false);

  const { searchData, originData, destinationData } = location.state || {};

  useEffect(() => {
    if (!searchData || !originData || !destinationData) {
      navigate("/");
      return;
    }

    const performSearch = async () => {
      try {
        await search(searchData, originData, destinationData);
      } catch (err) {
        setShowMockNotification(true);
      }
    };

    performSearch();
  }, [searchData, originData, destinationData, navigate, search]);

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
    console.log("Sort changed to:", sort);
  };

  const handleFiltersChange = (filters: any) => {
    console.log("Filters changed:", filters);
  };

  if (!searchData) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <ResultsHeader searchData={searchData} />

      <MockDataNotification
        show={showMockNotification}
        message="API limit reached. Showing sample flight data for demonstration."
      />

      <SortOptions
        selectedSort={selectedSort}
        onSortChange={handleSortChange}
      />

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "280px" },
            flexShrink: 0,
          }}
        >
          <FlightFilters
            filterStats={filterStats}
            onFiltersChange={handleFiltersChange}
          />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <FlightResults
            flights={results}
            loading={loading}
            error={error}
            totalResults={totalResults}
          />
        </Box>
      </Box>
    </Container>
  );
};
