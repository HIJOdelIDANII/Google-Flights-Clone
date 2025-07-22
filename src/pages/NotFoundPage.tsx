import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "6rem",
            fontWeight: "bold",
            color: "#1976d2",
            mb: 2,
          }}
        >
          404
        </Typography>

        <Typography variant="h4" sx={{ mb: 2, color: "#333" }}>
          Page Not Found
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>

        <Button
          variant="contained"
          startIcon={<Home />}
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#1976d2",
            px: 3,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontSize: "16px",
          }}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};
