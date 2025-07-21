import { Box, Typography } from "@mui/material";
import { FlightSearchForm } from "../components/search/FlightSearchForm";

export const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "250px", md: "300px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundImage: `url('https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          mb: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", md: "3.5rem" },
            fontWeight: 400,
            color: "#292c2eff",
            textAlign: "center",
            fontFamily: '"Google Sans", "Roboto", sans-serif',
            letterSpacing: "-0.02em",
            zIndex: 1,
            position: "absolute",
            bottom: 32,
            left: 0,
            right: 0,
          }}
        >
          Flights
        </Typography>
      </Box>

      {/* Search Form */}
      <Box sx={{ width: "100%" }}>
        <FlightSearchForm />
      </Box>
    </Box>
  );
};
