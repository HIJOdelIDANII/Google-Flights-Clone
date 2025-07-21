import React from "react";
import { Button, Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const ExploreButton: React.FC = () => {
  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        sx={{
          backgroundColor: "#1976d2", 
          color: "white",
          borderRadius: "25px",
          paddingX: 3,
          paddingY: 1.5,
          fontSize: "16px",
          fontWeight: 500,
          textTransform: "none", 
          boxShadow: "0 2px 8px rgba(25, 118, 210, 0.3)",
          "&:hover": {
            backgroundColor: "#1565c0",
            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
          },
          "&:active": {
            backgroundColor: "#0d47a1",
          },
        }}
        onClick={() => console.log("Explore clicked!")}
      >
        Explore
      </Button>
    </Box>
  );
};

export default ExploreButton;
