import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import Stack from "@mui/material/Stack";
const styles = {};

export const DateSelector = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack>
        <DateField
          label="Departure"
          //defaultValue={dayjs()}
          format="LL"
        />
        <DateField
          label="Return"
          format="LL"
        />
      </Stack>
    </LocalizationProvider>
  );
};
