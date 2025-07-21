import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { useState } from "react";
import Popper from "@mui/material/Popper";
import { DateCalendar } from "@mui/x-date-pickers";
import { useSearch } from "../../hooks/useSearch";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useMediaQuery, useTheme } from "@mui/material";
import { dateSelectorStyles } from "./styles";

interface DateSelectorInputProps {
  dateValue: Dayjs | null;
  label: string;
  setOpenCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  openCalendar: boolean;
}

export const DateSelectorInput = (props: DateSelectorInputProps) => {
  const { updateSearchData } = useSearch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    props.setOpenCalendar(true);
  };

  const handleChangeCalendar = (newValue: Dayjs | null) => {
    if (newValue) {
      updateSearchData(
        props.label === "Departure"
          ? { departureDate: newValue }
          : { returnDate: newValue }
      );
      props.setOpenCalendar(false);
      setAnchorEl(null);
    }
  };

  const handleClickAway = () => {
    props.setOpenCalendar(false);
    setAnchorEl(null);
  };

  const canBeOpen = props.openCalendar && Boolean(anchorEl);
  const id = canBeOpen ? `transition-popper-${props.label}` : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        {...dateSelectorStyles.DateField}
        onClick={handleClick}
        label={props.label}
        format="LL"
        value={props.dateValue}
        onChange={() => {}}
      />

      <Popper
        id={id}
        open={props.openCalendar}
        anchorEl={anchorEl}
        placement={isMobile ? "bottom-start" : "bottom"}
        sx={dateSelectorStyles.popper(isMobile, theme)}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <div style={dateSelectorStyles.popperContent(isMobile)}>
            <DateCalendar
              sx={dateSelectorStyles.calendar}
              value={props.dateValue}
              onChange={(value) => handleChangeCalendar(value)}
            />
          </div>
        </ClickAwayListener>
      </Popper>
    </LocalizationProvider>
  );
};
