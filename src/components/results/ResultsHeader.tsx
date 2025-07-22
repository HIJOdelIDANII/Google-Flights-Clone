import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Breadcrumbs,
  Link,
  Chip,
  Button,
} from "@mui/material";
import { ArrowBack, Edit, SwapHoriz } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import type { SearchDataInterface } from "../../types/searchData";
import dayjs from "dayjs";

interface ResultsHeaderProps {
  searchData: SearchDataInterface;
}

export const ResultsHeader: React.FC<ResultsHeaderProps> = ({ searchData }) => {
  const navigate = useNavigate();

  const formatSearchSummary = () => {
    const departure = searchData.departureLocation || "Select departure";
    const arrival = searchData.arrivationLocation || "Select destination";
    const departureDate = searchData.departureDate
      ? dayjs(searchData.departureDate).format("ddd, MMM D")
      : "Select date";
    const returnDate = searchData.returnDate
      ? ` – ${dayjs(searchData.returnDate).format("ddd, MMM D")}`
      : "";
    const passengers =
      searchData.passengers.adults +
      searchData.passengers.children +
      searchData.passengers.infants;

    return {
      route: `${departure} to ${arrival}`,
      dates: `${departureDate}${returnDate}`,
      passengers: `${passengers} passenger${passengers > 1 ? "s" : ""}`,
      class:
        searchData.flightClass.charAt(0).toUpperCase() +
        searchData.flightClass.slice(1),
    };
  };

  const summary = formatSearchSummary();

  return (
    <Box sx={{ mb: 4 }}>
      {/* Back button and breadcrumbs */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <IconButton
          onClick={() => navigate("/")}
          size="small"
          sx={{
            color: "#5f6368",
            "&:hover": {
              backgroundColor: "#f1f3f4",
            },
          }}
        >
          <ArrowBack />
        </IconButton>
        <Breadcrumbs
          separator="›"
          sx={{
            "& .MuiBreadcrumbs-separator": {
              color: "#5f6368",
              mx: 1,
            },
          }}
        >
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/")}
            sx={{
              textDecoration: "none",
              color: "#1a73e8",
              fontSize: "14px",
              fontWeight: 400,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Flights
          </Link>
          <Typography
            variant="body2"
            sx={{
              color: "#5f6368",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Search results
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Main header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#202124",
            fontWeight: 400,
            fontSize: "32px",
            fontFamily: "Google Sans, Roboto, sans-serif",
          }}
        >
          Flights
        </Typography>
        <Button
          startIcon={<Edit />}
          onClick={() => navigate("/")}
          sx={{
            color: "#1a73e8",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#f8f9fa",
            },
          }}
        >
          Edit search
        </Button>
      </Box>

      {/* Search summary chips */}
      <Box
        sx={{ display: "flex", flexWrap: "wrap", gap: 1, alignItems: "center" }}
      >
        <Chip
          icon={<SwapHoriz sx={{ fontSize: 16 }} />}
          label={summary.route}
          variant="outlined"
          sx={{
            borderColor: "#dadce0",
            color: "#3c4043",
            fontSize: "14px",
            fontWeight: 400,
            height: 32,
            "& .MuiChip-icon": {
              color: "#5f6368",
            },
            "&:hover": {
              backgroundColor: "#f8f9fa",
            },
          }}
        />
        <Chip
          label={summary.dates}
          variant="outlined"
          sx={{
            borderColor: "#dadce0",
            color: "#3c4043",
            fontSize: "14px",
            fontWeight: 400,
            height: 32,
            "&:hover": {
              backgroundColor: "#f8f9fa",
            },
          }}
        />
        <Chip
          label={summary.passengers}
          variant="outlined"
          sx={{
            borderColor: "#dadce0",
            color: "#3c4043",
            fontSize: "14px",
            fontWeight: 400,
            height: 32,
            "&:hover": {
              backgroundColor: "#f8f9fa",
            },
          }}
        />
        <Chip
          label={summary.class}
          variant="outlined"
          sx={{
            borderColor: "#dadce0",
            color: "#3c4043",
            fontSize: "14px",
            fontWeight: 400,
            height: 32,
            "&:hover": {
              backgroundColor: "#f8f9fa",
            },
          }}
        />
      </Box>
    </Box>
  );
};
