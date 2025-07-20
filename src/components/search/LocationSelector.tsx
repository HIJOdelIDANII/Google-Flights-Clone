import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { Top50Airports } from "../../data/airports";

const styles = {

  Stack: {
    spacing: 0,
    sx: { width: { xs: "100%", md: "50%" } },
    alignItems: "center",
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
      width: 8,
      padding: "0px",
    },
  },
  SwapHorizIcon: {
    sx: {
      backgroundColor: "white",
      borderRadius: "50%",
      padding: "4px",
      border: "1px solid",
      borderColor: "primary", 
    },
  },
};

export const LocationSelector = () => {
  return (
    <Stack {...styles.Stack} direction="row">
      <Autocomplete
        {...styles.Autocomplete}
        freeSolo
        id="WhereFrom"
        disableClearable
        options={Top50Airports.map((option) => option.airport_name)}
        renderInput={(params) => (
          <TextField
            {...styles.TextFieldWhereFrom}
            {...params}
            label="Where from?"
          />
        )}
      />
      <IconButton {...styles.IconButton}>
        <SwapHorizIcon {...styles.SwapHorizIcon} />
      </IconButton>
      <Autocomplete
        {...styles.Autocomplete}
        freeSolo
        id="WhereTo"
        disableClearable
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
