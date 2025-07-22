import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { CircularProgress, Box, Typography } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import { StackCommonStyles } from "./styles";
import { useSearch } from "../../hooks/useSearch";
import { useLocationData } from "../../hooks/useLocationData";
import { useDebounce } from "../../hooks/useDebounce";

const styles = {
  Stack: {
    ...StackCommonStyles,
  },
  Autocomplete: {
    sx: { flex: 1 },
  },
  TextFieldWhereFrom: {
    sx: {
      "& .MuiOutlinedInput-root": {
        borderRight: "none",
      },
    },
  },
  TextFieldWhereTo: {
    sx: {
      "& .MuiOutlinedInput-root": {
        borderLeft: "none",
      },
    },
  },
  IconButton: {
    disableRipple: true,
    sx: {
      zIndex: 1,
      margin: "0px",
      width: 4,
      height: 0,
      padding: "8px",
      cursor: "pointer",
    },
  },
  SwapHorizIcon: {
    sx: {
      backgroundColor: "white",
      borderRadius: "50%",
      padding: "4px",
      border: "1px solid",
      borderColor: "primary",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "#f1f3f4",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
      },
    },
  },
};

export const LocationSelector = () => {
  const { searchData, updateSearchData } = useSearch();
  const { searchLocations } = useLocationData();

  const [departureInputValue, setDepartureInputValue] = useState("");
  const [arrivalInputValue, setArrivalInputValue] = useState("");
  const [departureOptions, setDepartureOptions] = useState<any[]>([]);
  const [arrivalOptions, setArrivalOptions] = useState<any[]>([]);
  const [departureLoading, setDepartureLoading] = useState(false);
  const [arrivalLoading, setArrivalLoading] = useState(false);

  const debouncedDepartureQuery = useDebounce(departureInputValue, 300);
  const debouncedArrivalQuery = useDebounce(arrivalInputValue, 300);

  useEffect(() => {
    const searchDeparture = async () => {
      if (debouncedDepartureQuery && debouncedDepartureQuery.length >= 2) {
        setDepartureLoading(true);
        try {
          const results = await searchLocations(debouncedDepartureQuery);
          setDepartureOptions(results);
        } catch (error) {
          console.error("Error searching departure locations:", error);
          setDepartureOptions([]);
        } finally {
          setDepartureLoading(false);
        }
      } else {
        setDepartureOptions([]);
      }
    };

    searchDeparture();
  }, [debouncedDepartureQuery, searchLocations]);

  useEffect(() => {
    const searchArrival = async () => {
      if (debouncedArrivalQuery && debouncedArrivalQuery.length >= 2) {
        setArrivalLoading(true);
        try {
          const results = await searchLocations(debouncedArrivalQuery);
          setArrivalOptions(results);
        } catch (error) {
          console.error("Error searching arrival locations:", error);
          setArrivalOptions([]);
        } finally {
          setArrivalLoading(false);
        }
      } else {
        setArrivalOptions([]);
      }
    };

    searchArrival();
  }, [debouncedArrivalQuery, searchLocations]);

  const handleSwap = () => {
    if (searchData.tripType === "One-way") return;

    updateSearchData({
      departureLocation: searchData.arrivationLocation,
      arrivationLocation: searchData.departureLocation,
      departureAirportData: searchData.arrivalAirportData,
      arrivalAirportData: searchData.departureAirportData,
    });
  };

  const handleDepartureChange = (event: any, newValue: any) => {
    console.log("Departure change:", newValue);

    if (newValue) {
      const locationName =
        typeof newValue === "string"
          ? newValue
          : newValue.localizedName || newValue.label;
      updateSearchData({
        departureLocation: locationName,
        departureAirportData: typeof newValue === "object" ? newValue : null,
      });
    } else {
      updateSearchData({
        departureLocation: null,
        departureAirportData: null,
      });
    }
  };

  const handleArrivalChange = (event: any, newValue: any) => {
    console.log("Arrival change:", newValue);

    if (newValue) {
      const locationName =
        typeof newValue === "string"
          ? newValue
          : newValue.localizedName || newValue.label;
      updateSearchData({
        arrivationLocation: locationName,
        arrivalAirportData: typeof newValue === "object" ? newValue : null,
      });
    } else {
      updateSearchData({
        arrivationLocation: null,
        arrivalAirportData: null,
      });
    }
  };

  const renderOption = (props: any, option: any) => (
    <Box
      component="li"
      {...props}
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      <FlightIcon sx={{ color: "#5f6368", fontSize: 20 }} />
      <Box>
        <Typography variant="body2" sx={{ color: "#3c4043" }}>
          {option.localizedName || option.label}
        </Typography>
      </Box>
    </Box>
  );

  const getNoOptionsText = (inputValue: string, isLoading: boolean) => {
    if (isLoading) return "Searching...";
    if (!inputValue || inputValue.length < 2) {
      return "Type at least 2 characters to search";
    }
    return "No airports found";
  };

  // Get the current value for autocomplete
  const getDepartureValue = () => {
    return (
      searchData.departureAirportData || searchData.departureLocation || null
    );
  };

  const getArrivalValue = () => {
    return (
      searchData.arrivalAirportData || searchData.arrivationLocation || null
    );
  };

  return (
    <Stack {...styles.Stack}>
      <Autocomplete
        {...styles.Autocomplete}
        freeSolo
        id="WhereFrom"
        options={departureOptions}
        value={getDepartureValue()}
        onChange={handleDepartureChange}
        onInputChange={(event, newInputValue) => {
          setDepartureInputValue(newInputValue);
        }}
        getOptionLabel={(option) => {
          if (typeof option === "string") return option;
          return option.localizedName || option.label || "";
        }}
        isOptionEqualToValue={(option, value) => {
          if (!option || !value) return false;
          if (typeof option === "string" && typeof value === "string") {
            return option === value;
          }
          if (typeof option === "object" && typeof value === "object") {
            return (
              option.skyId === value.skyId && option.entityId === value.entityId
            );
          }
          return false;
        }}
        renderOption={renderOption}
        loading={departureLoading}
        renderInput={(params) => (
          <TextField
            {...styles.TextFieldWhereFrom}
            {...params}
            label="Where from?"
            placeholder="Search airports, cities..."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {departureLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        noOptionsText={getNoOptionsText(departureInputValue, departureLoading)}
      />

      <IconButton
        {...styles.IconButton}
        onClick={handleSwap}
        disabled={searchData.tripType === "One-way"}
      >
        <SwapHorizIcon {...styles.SwapHorizIcon} />
      </IconButton>

      <Autocomplete
        {...styles.Autocomplete}
        freeSolo
        id="WhereTo"
        options={arrivalOptions}
        value={getArrivalValue()}
        onChange={handleArrivalChange}
        onInputChange={(event, newInputValue) => {
          setArrivalInputValue(newInputValue);
        }}
        getOptionLabel={(option) => {
          if (typeof option === "string") return option;
          return option.localizedName || option.label || "";
        }}
        isOptionEqualToValue={(option, value) => {
          if (!option || !value) return false;
          if (typeof option === "string" && typeof value === "string") {
            return option === value;
          }
          if (typeof option === "object" && typeof value === "object") {
            return (
              option.skyId === value.skyId && option.entityId === value.entityId
            );
          }
          return false;
        }}
        renderOption={renderOption}
        loading={arrivalLoading}
        renderInput={(params) => (
          <TextField
            {...styles.TextFieldWhereTo}
            {...params}
            label="Where to?"
            placeholder="Search airports, cities..."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {arrivalLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        noOptionsText={getNoOptionsText(arrivalInputValue, arrivalLoading)}
      />
    </Stack>
  );
};
