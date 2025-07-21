import { Box, Stack } from "@mui/material";
import { LocationSelector } from "./LocationSelector";
import { DateSelector } from "./DateSelector";
import { TripTypeSelector } from "./TripTypeSelector";
import { PassengersSelector } from "./PassengersSelector";
import { FlightClassSelector } from "./FlightClassSelector";
import SearchButton from "./SearchButton";

const styles = {
  StackLocationDateSelectors: {
    direction: { xs: "column", md: "row" } as const,
    alignItems: "center" as const,
    spacing: 2,
    width: { xs: "100%" },
  },
  StackOptionsSeclectors: {
    direction: "row" as const,
    justifyContent: { xs: "center", sm: "center", md: "flex-start" } as const,
    alignItems: "center" as const,
    spacing: 1,
    mb: 2,
  },
  MainBox: {
    sx: { 
      width: { xs: "100%", md: "70%" },
      height: {xs: "auto", md: 160},
      position: "relative",

    },
    mx: "auto",
    borderRadius: 2,
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    padding: { xs: 1, md: 2 },
  },
  SearchButtonWrapper: {
    sx: {
      width: "fit-content",
      mx: "auto",
      mt: "-40px", 
      zIndex: 2,
      position: "relative",
    },
  },
};

export const FlightSearchForm = () => {
  return (
    <>
      <Box {...styles.MainBox}>
        <Stack {...styles.StackOptionsSeclectors}>
          <TripTypeSelector />
          <PassengersSelector />
          <FlightClassSelector />
        </Stack>
        <Stack {...styles.StackLocationDateSelectors}>
          <LocationSelector />
          <DateSelector />
        </Stack>
      </Box>
      <Box {...styles.SearchButtonWrapper}>
        <SearchButton />
      </Box>
    </>
  );
};
Box