import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import type { FlightItinerary } from "../../services/searchFlights";
import dayjs from "dayjs";

interface FlightCardProps {
  flight: FlightItinerary;
  onSelect: (flight: FlightItinerary) => void;
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight, onSelect }) => {
  const formatTime = (dateTime: string) => {
    return dayjs(dateTime).format("h:mm A");
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getStopsText = (stops: number) => {
    if (stops === 0) return "Nonstop";
    if (stops === 1) return "1 stop";
    return `${stops} stops`;
  };

  const getStopsColor = (stops: number) => {
    if (stops === 0) return "#137333"; // Green for nonstop
    if (stops === 1) return "#ea8600"; // Orange for 1 stop
    return "#d93025"; // Red for 2+ stops
  };

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        border: "1px solid #dadce0",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.12)",
          borderColor: "#1a73e8",
        },
      }}
    >
      <CardContent sx={{ p: "20px 24px" }}>
        {/* Header with airline and price */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              src={flight.carriers[0]?.logoUrl}
              sx={{ width: 24, height: 24 }}
            >
              {flight.carriers[0]?.alternateId}
            </Avatar>
            <Typography
              variant="body2"
              sx={{
                color: "#5f6368",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {flight.carriers[0]?.name}
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="h6"
              sx={{
                color: "#137333",
                fontWeight: 500,
                fontSize: "22px",
                lineHeight: 1.2,
                fontFamily: "Google Sans, Roboto, sans-serif",
              }}
            >
              {flight.price.formatted}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#5f6368",
                fontSize: "12px",
                display: "block",
              }}
            >
              per person
            </Typography>
          </Box>
        </Box>

        {/* Flight route and times */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          {/* Departure */}
          <Box sx={{ textAlign: "left", minWidth: "80px" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#202124",
                lineHeight: 1.2,
              }}
            >
              {formatTime(flight.departure.time)}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#5f6368",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {flight.departure.airport}
            </Typography>
          </Box>

          {/* Flight path */}
          <Box
            sx={{
              flex: 1,
              mx: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#5f6368",
                fontSize: "12px",
                mb: 0.5,
              }}
            >
              {formatDuration(flight.duration)}
            </Typography>

            {/* Flight line */}
            <Box
              sx={{
                width: "100%",
                height: 2,
                backgroundColor: "#dadce0",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: -3,
                  top: -3,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#5f6368",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  right: -3,
                  top: -3,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#5f6368",
                },
              }}
            />

            <Chip
              label={getStopsText(flight.stops)}
              size="small"
              sx={{
                mt: 0.5,
                height: 20,
                fontSize: "11px",
                fontWeight: 500,
                color: getStopsColor(flight.stops),
                backgroundColor: "transparent",
                border: "none",
                "& .MuiChip-label": {
                  px: 0,
                },
              }}
            />
          </Box>

          {/* Arrival */}
          <Box sx={{ textAlign: "right", minWidth: "80px" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#202124",
                lineHeight: 1.2,
              }}
            >
              {formatTime(flight.arrival.time)}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#5f6368",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {flight.arrival.airport}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2, borderColor: "#e8eaed" }} />

        {/* Action button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            onClick={() => onSelect(flight)}
            sx={{
              borderColor: "#1a73e8",
              color: "#1a73e8",
              borderRadius: "4px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#f8f9fa",
                borderColor: "#1a73e8",
              },
            }}
          >
            Select
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
