import { Stack } from "@mui/material";
import { LocationSelector } from "./LocationSelector";
import { DateSelector } from "./DateSelector";

const styles = {
  Stack: {
    direction: { xs: "column", md: "row" } as const,
    alignItems: "center" as const,
    spacing: 2, 
  },
};

export const FlightSearchForm = () => {
  return (
    <Stack {...styles.Stack}>
      <LocationSelector />
      <DateSelector />
    </Stack>
  );
};
