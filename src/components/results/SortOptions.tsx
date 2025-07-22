import React from "react";
import { Box, Tabs, Tab } from "@mui/material";

const sortOptions = [
  { value: "best", label: "Best" },
  { value: "price_high", label: "Cheapest" },
  { value: "fastest", label: "Fastest" },
];

interface SortOptionsProps {
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

export const SortOptions: React.FC<SortOptionsProps> = ({
  selectedSort,
  onSortChange,
}) => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "#e8eaed",
        mb: 3,
        backgroundColor: "white",
      }}
    >
      <Tabs
        value={selectedSort}
        onChange={(_, value) => onSortChange(value)}
        sx={{
          minHeight: 48,
          "& .MuiTabs-flexContainer": {
            alignItems: "center",
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 500,
            fontSize: "14px",
            color: "#5f6368",
            minHeight: 48,
            padding: "12px 16px",
            fontFamily: "Roboto, sans-serif",
            "&.Mui-selected": {
              color: "#1a73e8",
              fontWeight: 500,
            },
            "&:hover": {
              color: "#1a73e8",
            },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#1a73e8",
            height: 3,
          },
        }}
      >
        {sortOptions.map((option) => (
          <Tab key={option.value} value={option.value} label={option.label} />
        ))}
      </Tabs>
    </Box>
  );
};
