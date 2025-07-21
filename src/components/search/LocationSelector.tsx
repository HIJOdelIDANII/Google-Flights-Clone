import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { Top50Airports } from "../../data/airports";
import { StackCommonStyles } from "./styles";
import { useSearch } from "../../hooks/useSearch";

const styles = {
  Stack: {
    ...{
      ...StackCommonStyles,
    },
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

  const handleSwap = () => {
    if (searchData.tripType === "One-way") return;

    updateSearchData({
      departureLocation: searchData.arrivationLocation,
      arrivationLocation: searchData.departureLocation,
    });
  };

  const handleDepartureChange = (event: any, newValue: string | null) => {
    if (newValue) {
      updateSearchData({ departureLocation: newValue });
    }
  };

  const handleArrivalChange = (event: any, newValue: string | null) => {
    if (newValue) {
      updateSearchData({ arrivationLocation: newValue });
    }
  };

  return (
    <Stack {...styles.Stack}>
      <Autocomplete
        {...styles.Autocomplete}
        freeSolo
        id="WhereFrom"
        disableClearable
        value={searchData.departureLocation || ""}
        onChange={handleDepartureChange}
        options={Top50Airports.map((option) => option.airport_name)}
        renderInput={(params) => (
          <TextField
            {...styles.TextFieldWhereFrom}
            {...params}
            label="Where from?"
          />
        )}
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
        disableClearable
        value={searchData.arrivationLocation || ""}
        onChange={handleArrivalChange}
        options={Top50Airports.map((option) => option.airport_name)}
        renderInput={(params) => (
          <TextField
            {...styles.TextFieldWhereTo}
            {...params}
            label="Where to?"
          />
        )}
      />
    </Stack>
  );
};
