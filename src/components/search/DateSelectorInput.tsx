import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { useState } from "react";
import Popper from "@mui/material/Popper";
import { DateCalendar } from "@mui/x-date-pickers";


export const DateSelectorInput = () => {
  const [openCalendard, setOpenCalendar] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [valueCalendar, setValueCalendar] = useState<Dayjs | null>(dayjs());
  const [dateValue, setDateValue] = useState<Dayjs>(dayjs());
  const handleClickDeparture = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenCalendar(true);
  };
  const handleChangeCalendar = (newValue: Dayjs | null) => {
    setValueCalendar(newValue);
    if (newValue) {
      const formattedDate2 = newValue.format("M/D/YYYY");
      console.log(formattedDate2);
      setDateValue(newValue);
      setOpenCalendar(false);
      setAnchorEl(null);
    }
  };
  const canBeOpenDeparture = openCalendard && Boolean(anchorEl);
  const idDeparture = canBeOpenDeparture ? "transition-popper" : undefined;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DateField
          onClick={handleClickDeparture}
          label="Departure"
          format="LL"
          value={dateValue}
          onChange={() => {}}
        />
        <DateField  label="Return" format="LL" />
     
      <Popper id={idDeparture} open={openCalendard} anchorEl={anchorEl}>
        <DateCalendar
          value={valueCalendar}
          onChange={(value) => handleChangeCalendar(value)}
        />
      </Popper>
    </LocalizationProvider>
  );
};
