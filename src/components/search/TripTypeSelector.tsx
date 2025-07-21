import {
  Select,
  MenuItem,
  FormControl,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CheckIcon from "@mui/icons-material/Check";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSearch } from "../../hooks/useSearch";
import { tripTypeSelectorStyles } from "./styles";
import type { TripType } from "../../types/searchData";

const tripOptions = [
  {
    label: "Round trip",
    value: "Round-trip" as TripType,
    icon: <SwapHorizIcon fontSize="small" sx={{ color: "#5f6368" }} />,
  },
  {
    label: "One way",
    value: "One-way" as TripType,
    icon: <FlightTakeoffIcon fontSize="small" sx={{ color: "#5f6368" }} />,
  },
  {
    label: "Multi-city",
    value: "Multi-city" as TripType,
    icon: <TravelExploreIcon fontSize="small" sx={{ color: "#5f6368" }} />,
  },
];

export const TripTypeSelector = () => {
  const { searchData, updateSearchData } = useSearch();

  const handleChange = (value: TripType) => {
    updateSearchData({ tripType: value });
  };

  return (
    <FormControl sx={tripTypeSelectorStyles.formControl}>
      <Select
        value={searchData.tripType}
        onChange={(e) => handleChange(e.target.value as TripType)}
        IconComponent={ArrowDropDownIcon}
        displayEmpty
        renderValue={(selected) => {
          const option = tripOptions.find((o) => o.value === selected);
          return (
            <Box sx={tripTypeSelectorStyles.renderValueBox}>
              {option?.icon}
              <span style={tripTypeSelectorStyles.renderValueText}>
                {option?.label}
              </span>
            </Box>
          );
        }}
        MenuProps={{
          PaperProps: {
            sx: tripTypeSelectorStyles.menuPaper,
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
        {tripOptions.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            selected={searchData.tripType === option.value}
          >
            <ListItemIcon sx={tripTypeSelectorStyles.listItemIcon}>
              {option.icon}
            </ListItemIcon>
            <ListItemText sx={tripTypeSelectorStyles.listItemText}>
              {option.label}
            </ListItemText>
            {searchData.tripType === option.value && (
              <CheckIcon
                fontSize="small"
                sx={tripTypeSelectorStyles.checkIcon}
              />
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
