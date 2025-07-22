import { useState } from "react";
import Stack from "@mui/material/Stack";
import { StackCommonStyles } from "./styles";
import { DateSelectorInput } from "./DateSelectorInput";
import { useSearch } from "../../hooks/useSearch";

const styles = {
  Stack: {
    ...StackCommonStyles,
  },
};

export const DateSelector = () => {
  const { searchData, updateSearchData } = useSearch();
  const [openCalendar, setOpenCalendar] = useState<
    "departure" | "return" | null
  >(null);

  const isRoundTrip = searchData.tripType === "Round-trip";

  const handleDepartureChange = (date: Date | null) => {
    updateSearchData({ departureDate: date });
  };

  const handleReturnChange = (date: Date | null) => {
    updateSearchData({ returnDate: date });
  };

  return (
    <Stack {...styles.Stack}>
      <DateSelectorInput
        setOpenCalendar={(isOpen) =>
          setOpenCalendar(isOpen ? "departure" : null)
        }
        openCalendar={openCalendar === "departure"}
        dateValue={searchData.departureDate}
        onDateChange={handleDepartureChange}
        label="Departure"
        minDate={new Date()}
      />
      {isRoundTrip && (
        <DateSelectorInput
          setOpenCalendar={(isOpen) =>
            setOpenCalendar(isOpen ? "return" : null)
          }
          openCalendar={openCalendar === "return"}
          dateValue={searchData.returnDate}
          onDateChange={handleReturnChange}
          label="Return"
          minDate={searchData.departureDate || new Date()}
        />
      )}
    </Stack>
  );
};
