import React, { useState } from "react";
import { Button, Box, CircularProgress, Alert } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import { useFlightSearch } from "../../hooks/useFlightSearch";

const SearchButton: React.FC = () => {
  const navigate = useNavigate();
  const { searchData } = useSearch();
  const { search, loading, error } = useFlightSearch();
  const [searchError, setSearchError] = useState<string | null>(null);

  const validateSearch = () => {
    if (!searchData.departureLocation) {
      return "Please select a departure location";
    }
    if (!searchData.arrivationLocation) {
      return "Please select a destination";
    }
    if (!searchData.departureDate) {
      return "Please select a departure date";
    }
    if (searchData.tripType === "Round-trip" && !searchData.returnDate) {
      return "Please select a return date";
    }
    return null;
  };

  const handleSearch = async () => {
    setSearchError(null);

    const validationError = validateSearch();
    if (validationError) {
      setSearchError(validationError);
      return;
    }

    try {
      const departureAirport = searchData.departureAirportData;
      const arrivalAirport = searchData.arrivalAirportData;

      if (!departureAirport || !arrivalAirport) {
        setSearchError("Please select valid airports from the dropdown");
        return;
      }

      const originData = {
        skyId: departureAirport.skyId,
        entityId: departureAirport.entityId,
      };
      const destinationData = {
        skyId: arrivalAirport.skyId,
        entityId: arrivalAirport.entityId,
      };

      console.log("Search with:", { searchData, originData, destinationData });

      await search(searchData, originData, destinationData);

      navigate("/results", {
        state: {
          searchData,
          originData,
          destinationData,
        },
      });
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {searchError && (
        <Alert severity="error" sx={{ mb: 2, maxWidth: 400 }}>
          {searchError}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2, maxWidth: 400 }}>
          {error}
        </Alert>
      )}
      <Button
        variant="contained"
        startIcon={
          loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <SearchIcon />
          )
        }
        disabled={loading}
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          borderRadius: "25px",
          paddingX: 3,
          paddingY: 1.5,
          height: 48,
          minHeight: 48,
          fontSize: "16px",
          fontWeight: 500,
          textTransform: "none",
          boxShadow: "0 2px 8px rgba(25, 118, 210, 0.3)",
          "&:hover": {
            backgroundColor: "#1565c0",
            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
          },
          "&:active": {
            backgroundColor: "#0d47a1",
          },
          "&:disabled": {
            backgroundColor: "#bbbbbb",
          },
        }}
        onClick={handleSearch}
      >
        {loading ? "Searching..." : "Search"}
      </Button>
    </Box>
  );
};

export default SearchButton;
