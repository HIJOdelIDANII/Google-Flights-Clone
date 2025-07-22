import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Slider,
  Chip,
  FormGroup,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface FlightFiltersProps {
  filterStats: any;
  onFiltersChange: (filters: any) => void;
}

export const FlightFilters: React.FC<FlightFiltersProps> = ({
  filterStats,
  onFiltersChange,
}) => {
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);
  const [durationRange, setDurationRange] = useState<number[]>([0, 1440]);

  if (!filterStats) {
    return (
      <Box sx={{ width: 280, pr: 2 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, color: "#202124", fontWeight: 400 }}
        >
          Filters
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Loading filters...
        </Typography>
      </Box>
    );
  }

  const handleStopsChange = (stopType: string, checked: boolean) => {
    const newSelected = checked
      ? [...selectedStops, stopType]
      : selectedStops.filter((s) => s !== stopType);
    setSelectedStops(newSelected);
    onFiltersChange({ stops: newSelected });
  };

  const handleAirlineChange = (airlineId: string, checked: boolean) => {
    const newSelected = checked
      ? [...selectedAirlines, airlineId]
      : selectedAirlines.filter((a) => a !== airlineId);
    setSelectedAirlines(newSelected);
    onFiltersChange({ airlines: newSelected });
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <Box sx={{ width: 280, pr: 2 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          color: "#202124",
          fontWeight: 400,
          fontSize: "20px",
          fontFamily: "Google Sans, Roboto, sans-serif",
        }}
      >
        Filters
      </Typography>

      {/* Stops Filter */}
      <Accordion
        defaultExpanded
        sx={{
          boxShadow: "none",
          border: "none",
          "&:before": { display: "none" },
          mb: 1,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            px: 0,
            minHeight: 48,
            "& .MuiAccordionSummary-content": {
              margin: "12px 0",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#3c4043",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Stops
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {filterStats.stopPrices?.direct && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedStops.includes("direct")}
                    onChange={(e) =>
                      handleStopsChange("direct", e.target.checked)
                    }
                    sx={{
                      color: "#5f6368",
                      "&.Mui-checked": {
                        color: "#1a73e8",
                      },
                    }}
                  />
                }
                label={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#3c4043", fontSize: "14px" }}
                    >
                      Nonstop
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#5f6368", fontSize: "14px", ml: "auto" }}
                    >
                      {filterStats.stopPrices.direct.formattedPrice}
                    </Typography>
                  </Box>
                }
                sx={{
                  width: "100%",
                  m: 0,
                  py: 0.5,
                  "& .MuiFormControlLabel-label": {
                    width: "100%",
                  },
                }}
              />
            )}
            {filterStats.stopPrices?.one && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedStops.includes("one")}
                    onChange={(e) => handleStopsChange("one", e.target.checked)}
                    sx={{
                      color: "#5f6368",
                      "&.Mui-checked": {
                        color: "#1a73e8",
                      },
                    }}
                  />
                }
                label={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#3c4043", fontSize: "14px" }}
                    >
                      1 stop
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#5f6368", fontSize: "14px", ml: "auto" }}
                    >
                      {filterStats.stopPrices.one.formattedPrice}
                    </Typography>
                  </Box>
                }
                sx={{
                  width: "100%",
                  m: 0,
                  py: 0.5,
                  "& .MuiFormControlLabel-label": {
                    width: "100%",
                  },
                }}
              />
            )}
            {filterStats.stopPrices?.twoOrMore && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedStops.includes("twoOrMore")}
                    onChange={(e) =>
                      handleStopsChange("twoOrMore", e.target.checked)
                    }
                    sx={{
                      color: "#5f6368",
                      "&.Mui-checked": {
                        color: "#1a73e8",
                      },
                    }}
                  />
                }
                label={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#3c4043", fontSize: "14px" }}
                    >
                      2+ stops
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#5f6368", fontSize: "14px", ml: "auto" }}
                    >
                      {filterStats.stopPrices.twoOrMore.formattedPrice}
                    </Typography>
                  </Box>
                }
                sx={{
                  width: "100%",
                  m: 0,
                  py: 0.5,
                  "& .MuiFormControlLabel-label": {
                    width: "100%",
                  },
                }}
              />
            )}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Divider sx={{ my: 2, borderColor: "#e8eaed" }} />

      {/* Price Filter */}
      <Accordion
        defaultExpanded
        sx={{
          boxShadow: "none",
          border: "none",
          "&:before": { display: "none" },
          mb: 1,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            px: 0,
            minHeight: 48,
            "& .MuiAccordionSummary-content": {
              margin: "12px 0",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#3c4043",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <Box sx={{ px: 1 }}>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => {
                setPriceRange(newValue as number[]);
                onFiltersChange({ priceRange: newValue });
              }}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `$${value}`}
              min={0}
              max={5000}
              step={50}
              sx={{
                color: "#1a73e8",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#1a73e8",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#1a73e8",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#dadce0",
                },
              }}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#5f6368", fontSize: "12px" }}
              >
                ${priceRange[0]}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#5f6368", fontSize: "12px" }}
              >
                ${priceRange[1]}
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Divider sx={{ my: 2, borderColor: "#e8eaed" }} />

      {/* Airlines Filter */}
      {filterStats.carriers && filterStats.carriers.length > 0 && (
        <>
          <Accordion
            sx={{
              boxShadow: "none",
              border: "none",
              "&:before": { display: "none" },
              mb: 1,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                px: 0,
                minHeight: 48,
                "& .MuiAccordionSummary-content": {
                  margin: "12px 0",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#3c4043",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Airlines
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pt: 0 }}>
              <List sx={{ p: 0 }}>
                {filterStats.carriers.slice(0, 8).map((carrier: any) => (
                  <ListItem
                    key={carrier.id}
                    sx={{
                      px: 0,
                      py: 0.5,
                      minHeight: 40,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedAirlines.includes(
                            carrier.id.toString()
                          )}
                          onChange={(e) =>
                            handleAirlineChange(
                              carrier.id.toString(),
                              e.target.checked
                            )
                          }
                          sx={{
                            color: "#5f6368",
                            "&.Mui-checked": {
                              color: "#1a73e8",
                            },
                            p: 1,
                          }}
                        />
                      }
                      label={
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Avatar
                            src={carrier.logoUrl}
                            sx={{
                              width: 20,
                              height: 20,
                              mr: 1.5,
                              fontSize: "10px",
                            }}
                          >
                            {carrier.alternateId}
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#3c4043",
                                fontSize: "14px",
                                lineHeight: 1.2,
                              }}
                            >
                              {carrier.name}
                            </Typography>
                            {carrier.minPrice && (
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#5f6368",
                                  fontSize: "12px",
                                }}
                              >
                                from {carrier.minPrice}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      }
                      sx={{
                        width: "100%",
                        m: 0,
                        "& .MuiFormControlLabel-label": {
                          width: "100%",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 2, borderColor: "#e8eaed" }} />
        </>
      )}

      {/* Duration Filter */}
      {filterStats.duration && (
        <Accordion
          sx={{
            boxShadow: "none",
            border: "none",
            "&:before": { display: "none" },
            mb: 1,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              px: 0,
              minHeight: 48,
              "& .MuiAccordionSummary-content": {
                margin: "12px 0",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#3c4043",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Duration
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0, pt: 0 }}>
            <Box sx={{ px: 1 }}>
              <Slider
                value={durationRange}
                onChange={(e, newValue) => {
                  setDurationRange(newValue as number[]);
                  onFiltersChange({ durationRange: newValue });
                }}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => formatTime(value)}
                min={filterStats.duration.min}
                max={filterStats.duration.max}
                step={30}
                sx={{
                  color: "#1a73e8",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#1a73e8",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#1a73e8",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#dadce0",
                  },
                }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5f6368", fontSize: "12px" }}
                >
                  {formatTime(durationRange[0])}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#5f6368", fontSize: "12px" }}
                >
                  {formatTime(durationRange[1])}
                </Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
};
