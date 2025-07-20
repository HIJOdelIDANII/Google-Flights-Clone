import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import Stack from "@mui/material/Stack";
import { StackCommonStyles } from "./commonStyles";
const styles = {
  Stack: {
    ...StackCommonStyles,
  },
  DateFields: {
    sx: {
      flex: 1,
    },
  },
};

export const DateSelector = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack {...styles.Stack}>
        <DateField
          {...styles.DateFields}
          label="Departure"
          //defaultValue={dayjs()}
          format="LL"
        />
        <DateField {...styles.DateFields} label="Return" format="LL" />
      </Stack>
    </LocalizationProvider>
  );
};
