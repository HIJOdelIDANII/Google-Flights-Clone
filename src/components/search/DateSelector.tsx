import Stack from "@mui/material/Stack";
import { StackCommonStyles } from "./commonStyles";

import { DateSelectorInput } from "./DateSelectorInput";
import { useSearch } from "../../hooks/useSearch";
import { useState } from "react";
const styles = {
  Stack: {
    ...StackCommonStyles,
  },
};

export const DateSelector = () => {
  const { searchData } = useSearch();
  const [openCalendar, setOpenCalendar] = useState<
    "departure" | "return" | null
  >(null);

  return (
    <Stack {...styles.Stack}>
      <DateSelectorInput
        setOpenCalendar={(isOpen) =>
          setOpenCalendar(isOpen ? "departure" : null)
        }
        openCalendar={openCalendar === "departure"}
        dateValue={searchData.departureDate}
        label="Departure"
      />
      <DateSelectorInput
        setOpenCalendar={(isOpen) => setOpenCalendar(isOpen ? "return" : null)}
        openCalendar={openCalendar === "return"}
        dateValue={searchData.returnDate}
        label="Return"
      />
    </Stack>
  );
};
