import React from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { FlightCard } from "./FlightCard";
import type { FlightItinerary } from "../../services/searchFlights";

interface FlightResultsProps {
  flights: FlightItinerary[];
  loading: boolean;
  error: string | null;
  totalResults: number;
}

export const FlightResults: React.FC<FlightResultsProps> = ({
  flights,
  loading,
  error,
  totalResults,
}) => {
  const handleSelectFlight = (flight: FlightItinerary) => {
    console.log("Selected flight:", flight);
    // Handle flight selection (e.g., navigate to booking page)
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 400,
          gap: 2,
        }}
      >
        <CircularProgress size={48} sx={{ color: "#1a73e8" }} />
        <Typography
          variant="body1"
          sx={{
            color: "#5f6368",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          Searching for flights...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Alert
        severity="error"
        sx={{
          my: 2,
          borderRadius: "8px",
          "& .MuiAlert-message": {
            fontSize: "14px",
          },
        }}
      >
        {error}
      </Alert>
    );
  }

  if (flights.length === 0) {
    return (
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          px: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#3c4043",
            fontSize: "20px",
            fontWeight: 400,
            mb: 1,
            fontFamily: "Google Sans, Roboto, sans-serif",
          }}
        >
          No flights found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#5f6368",
            fontSize: "14px",
            fontWeight: 400,
            maxWidth: 400,
            mx: "auto",
          }}
        >
          Try adjusting your search criteria like dates, destinations, or number
          of passengers to find more options.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          color: "#3c4043",
          fontSize: "16px",
          fontWeight: 400,
        }}
      >
        {totalResults.toLocaleString()} results
      </Typography>

      {flights.map((flight, index) => (
        <FlightCard
          key={`${flight.id}-${index}`}
          flight={flight}
          onSelect={handleSelectFlight}
        />
      ))}
    </Box>
  );
};
