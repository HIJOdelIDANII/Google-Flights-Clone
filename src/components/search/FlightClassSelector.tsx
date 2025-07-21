import { Select, MenuItem, FormControl, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSearch } from "../../hooks/useSearch";
import { flightClassStyles } from "./styles";
import type { FlightClass } from "../../types/searchData";

const flightClassOptions = [
  {
    label: "Economy",
    value: "Economy" as FlightClass,
  },
  {
    label: "Premium economy",
    value: "Premium economy" as FlightClass,
  },
  {
    label: "Business",
    value: "Business" as FlightClass,
  },
  {
    label: "First",
    value: "First" as FlightClass,
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
            <span style={flightClassStyles.renderValueText}>
              {option?.label}
            </span>
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
