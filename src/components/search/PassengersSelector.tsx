import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  IconButton,
  Popover,
  Divider,
} from "@mui/material";
import {
  PersonOutline,
  KeyboardArrowDown,
  Remove,
  Add,
} from "@mui/icons-material";
import { useSearch } from "../../hooks/useSearch";
import type { PassengersDataInterface } from "../../types/searchData";
import { passengersStyles } from "./commonStyles";

const passengerTypes = [
  {
    key: "adults" as keyof PassengersDataInterface,
    label: "Adults",
    subtext: "",
    min: 1,
    max: 9,
  },
  {
    key: "children" as keyof PassengersDataInterface,
    label: "Children",
    subtext: "Aged 2–11",
    min: 0,
    max: 8,
  },
  {
    key: "infants" as keyof PassengersDataInterface,
    label: "Infants",
    subtext: "Under 2",
    min: 0,
    max: 8,
  },
];

export const PassengersSelector = () => {
  const { searchData, updateSearchData } = useSearch();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [tempPassengers, setTempPassengers] = useState(searchData.passengers);

  const isOpen = Boolean(anchorEl);

  const getTotalPassengers = () => {
    const { adults, children, infants } = searchData.passengers;
    return adults + children + infants;
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setTempPassengers(searchData.passengers);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setTempPassengers(searchData.passengers);
  };

  const updateTempCounter = (
    type: keyof PassengersDataInterface,
    value: number
  ) => {
    setTempPassengers((prev) => ({
      ...prev,
      [type]: Math.max(
        passengerTypes.find((p) => p.key === type)?.min || 0,
        value
      ),
    }));
  };

  const handleDone = () => {
    updateSearchData({ passengers: tempPassengers });
    setAnchorEl(null);
  };

  const Counter = ({
    value,
    onChange,
    min = 0,
    max = 9,
  }: {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
  }) => (
    <Box sx={passengersStyles.counterContainer}>
      <IconButton
        sx={passengersStyles.counterButton}
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        size="small"
      >
        <Remove fontSize="small" />
      </IconButton>

      <Typography sx={passengersStyles.counterValue}>{value}</Typography>

      <IconButton
        sx={passengersStyles.counterButton}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        size="small"
      >
        <Add fontSize="small" />
      </IconButton>
    </Box>
  );

  return (
    <>
      <Button
        onClick={handleClick}
        sx={passengersStyles.triggerButton}
        startIcon={<PersonOutline />}
        endIcon={<KeyboardArrowDown />}
      >
        {getTotalPassengers()}
      </Button>

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          sx: passengersStyles.popoverPaper,
        }}
      >
        <Box>
          {passengerTypes.map((type, index) => (
            <Box key={type.key}>
              <Box sx={passengersStyles.passengerRow}>
                <Box sx={passengersStyles.passengerInfo}>
                  <Typography sx={passengersStyles.passengerLabel}>
                    {type.label}
                  </Typography>
                  {type.subtext && (
                    <Typography sx={passengersStyles.passengerSubtext}>
                      {type.subtext}
                    </Typography>
                  )}
                </Box>

                <Counter
                  value={tempPassengers[type.key]}
                  onChange={(value) => updateTempCounter(type.key, value)}
                  min={type.min}
                  max={type.max}
                />
              </Box>
              {index < passengerTypes.length - 1 && (
                <Divider sx={{ borderColor: "#f1f3f4" }} />
              )}
            </Box>
          ))}

          <Divider sx={{ borderColor: "#f1f3f4" }} />

          <Box sx={passengersStyles.actionsContainer}>
            <Button onClick={handleClose} sx={passengersStyles.cancelButton}>
              Cancel
            </Button>
            <Button onClick={handleDone} sx={passengersStyles.doneButton}>
              Done
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};
