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
    spacing: 1, // Reduced spacing between buttons like Google
    mb: 2, // Add margin bottom
  },
};

export const FlightSearchForm = () => {
  return (
    <Box>
      <Stack {...styles.StackOptionsSeclectors}>
        <TripTypeSelector />
        <PassengersSelector />
        <FlightClassSelector />
      </Stack>
      <Stack {...styles.StackLocationDateSelectors}>
        <LocationSelector />
        <DateSelector />
      </Stack>
      <SearchButton />
    </Box>
  );
};
