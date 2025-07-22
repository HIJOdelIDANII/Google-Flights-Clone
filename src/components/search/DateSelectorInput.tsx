import React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface DateSelectorInputProps {
  setOpenCalendar: (isOpen: boolean) => void;
  openCalendar: boolean;
  dateValue: Date | null;
  onDateChange: (date: Date | null) => void;
  label: string;
  minDate?: Date;
}

export const DateSelectorInput: React.FC<DateSelectorInputProps> = ({
  setOpenCalendar,
  openCalendar,
  dateValue,
  onDateChange,
  label,
  minDate,
}) => {
  const handleDateChange = (newValue: Dayjs | null) => {
    onDateChange(newValue ? newValue.toDate() : null);
  };

  // Convert Date to Dayjs safely
  const value = dateValue ? dayjs(dateValue) : null;
  const min = minDate ? dayjs(minDate) : dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleDateChange}
        open={openCalendar}
        onOpen={() => setOpenCalendar(true)}
        onClose={() => setOpenCalendar(false)}
        minDate={min}
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: label === "Departure" ? "8px 0 0 8px" : "0 8px 8px 0",
          },
        }}
      />
    </LocalizationProvider>
  );
};
