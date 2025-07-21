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
import { useState } from "react";

const styles = {
  container: {
    p: 3,
    backgroundColor: "#f5f5f5",
  },
  formControl: {
    minWidth: 140,
    borderRadius: "4px",
    backgroundColor: "#fff",
    border: "1px solid #dadce0",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      gap: 0.75,
      padding: "10px 12px",
      fontSize: "14px",
      color: "#3c4043",
      fontWeight: 500,
    },
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    "& .MuiSelect-icon": {
      color: "#5f6368",
      right: "8px",
    },
  },
  menuPaper: {
    mt: 0.5,
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(32,33,36,.28)",
    border: "1px solid #dadce0",
    minWidth: "160px",
    "& .MuiMenuItem-root": {
      padding: "8px 16px",
      fontSize: "14px",
      color: "#3c4043",
      "&:hover": {
        backgroundColor: "#f8f9fa",
      },
      "&.Mui-selected": {
        backgroundColor: "#e8f0fe",
        "&:hover": {
          backgroundColor: "#e8f0fe",
        },
      },
    },
  },
  listItemIcon: {
    minWidth: "28px",
  },
  listItemText: {
    "& .MuiListItemText-primary": {
      fontSize: "14px",
      color: "#3c4043",
    },
  },
  checkIcon: {
    ml: "auto",
    color: "#1a73e8",
    fontSize: "18px",
  },
  renderValueBox: {
    display: "flex",
    alignItems: "center",
    gap: 0.75,
  },
  renderValueText: {
    fontSize: "14px",
    color: "#3c4043",
  },
};

const tripOptions = [
  {
    label: "Round trip",
    value: "Round-trip",
    icon: <SwapHorizIcon fontSize="small" sx={{ color: "#5f6368" }} />,
  },
  {
    label: "One-way",
    value: "One-way",
    icon: <FlightTakeoffIcon fontSize="small" sx={{ color: "#5f6368" }} />,
  },
  {
    label: "Multi-city",
    value: "Multi-city",
    icon: <TravelExploreIcon fontSize="small" sx={{ color: "#5f6368" }} />,
  },
];

export const TripTypeSelector = () => {
  const [tripType, setTripType] = useState("Multi-city");

  return (
    
      <FormControl sx={styles.formControl}>
        <Select
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          IconComponent={ArrowDropDownIcon}
          displayEmpty
          renderValue={(selected) => {
            const option = tripOptions.find((o) => o.value === selected);
            return (
              <Box sx={styles.renderValueBox}>
                {option?.icon}
                <span style={styles.renderValueText}>{option?.label}</span>
              </Box>
            );
          }}
          MenuProps={{
            PaperProps: {
              sx: styles.menuPaper,
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
              selected={tripType === option.value}
            >
              <ListItemIcon sx={styles.listItemIcon}>
                {option.icon}
              </ListItemIcon>
              <ListItemText sx={styles.listItemText}>
                {option.label}
              </ListItemText>
              {tripType === option.value && (
                <CheckIcon fontSize="small" sx={styles.checkIcon} />
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    
  );
};
