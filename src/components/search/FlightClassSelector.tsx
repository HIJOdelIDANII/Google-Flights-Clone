import {
  Select,
  MenuItem,
  FormControl,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import CheckIcon from "@mui/icons-material/Check";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSearch } from "../../hooks/useSearch";
import { flightClassStyles } from "./commonStyles";
import type { FlightClass } from "../../types/searchData";

const flightClassOptions = [
  {
    label: "Economy",
    value: "Economy" as FlightClass,
    icon: <FlightClassIcon fontSize="small" sx={{ color: "#5f6368" }} />,
  },
  {
    label: "Premium economy",
    value: "Premium economy" as FlightClass,
    icon: (
      <AirlineSeatReclineExtraIcon fontSize="small" sx={{ color: "#5f6368" }} />
    ),
  },
  {
    label: "Business",
    value: "Business" as FlightClass,
    icon: <WorkspacePremiumIcon fontSize="small" sx={{ color: "#5f6368" }} />,
  },
  {
    label: "First",
    value: "First" as FlightClass,
    icon: <WorkspacePremiumIcon fontSize="small" sx={{ color: "#5f6368" }} />,
  },
];

export const FlightClassSelector = () => {
  const { searchData, updateSearchData } = useSearch();

  const handleChange = (value: FlightClass) => {
    updateSearchData({ flightClass: value });
  };

  return (
    <FormControl sx={flightClassStyles.formControl}>
      <Select
        value={searchData.flightClass}
        onChange={(e) => handleChange(e.target.value as FlightClass)}
        IconComponent={ArrowDropDownIcon}
        displayEmpty
        renderValue={(selected) => {
          const option = flightClassOptions.find((o) => o.value === selected);
          return (
            <Box sx={flightClassStyles.renderValueBox}>
              {option?.icon}
              <span style={flightClassStyles.renderValueText}>
                {option?.label}
              </span>
            </Box>
          );
        }}
        MenuProps={{
          PaperProps: {
            sx: flightClassStyles.menuPaper,
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
      >
        {flightClassOptions.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            selected={searchData.flightClass === option.value}
          >
            <ListItemIcon sx={flightClassStyles.listItemIcon}>
              {option.icon}
            </ListItemIcon>
            <ListItemText sx={flightClassStyles.listItemText}>
              {option.label}
            </ListItemText>
            {searchData.flightClass === option.value && (
              <CheckIcon fontSize="small" sx={flightClassStyles.checkIcon} />
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
