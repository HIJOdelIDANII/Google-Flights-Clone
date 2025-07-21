export const StackCommonStyles = {
  spacing: 0,
  sx: { width: { xs: "100%", md: "50%" } },
  alignItems: "center",
  direction: "row" as const,
};

export const passengersStyles = {
  triggerButton: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    px: 1.5,
    py: 1.25,
    backgroundColor: "#fff",
    border: "1px solid #dadce0",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#3c4043",
    fontWeight: 500,
    minWidth: "120px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      border: "1px solid #dadce0",
    },
    "& .MuiButton-endIcon": {
      ml: "auto",
      color: "#5f6368",
    },
  },
  popoverPaper: {
    mt: 0.5,
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(32,33,36,.28)",
    border: "1px solid #dadce0",
    minWidth: "280px",
    p: 2,
  },
  passengerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 1.5,
  },
  passengerInfo: {
    flex: 1,
  },
  passengerLabel: {
    fontSize: "14px",
    color: "#3c4043",
    fontWeight: 500,
    mb: 0.25,
  },
  passengerSubtext: {
    fontSize: "12px",
    color: "#5f6368",
  },
  counterContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
  },
  counterButton: {
    width: 32,
    height: 32,
    minWidth: 32,
    border: "1px solid #dadce0",
    borderRadius: "50%",
    color: "#3c4043",
    "&:hover": {
      backgroundColor: "#f8f9fa",
      border: "1px solid #dadce0",
    },
    "&:disabled": {
      opacity: 0.4,
      border: "1px solid #dadce0",
    },
  },
  counterValue: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#3c4043",
    minWidth: "20px",
    textAlign: "center",
  },
  actionsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 1.5,
    mt: 2,
    pt: 2,
  },
  cancelButton: {
    color: "#1a73e8",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#f8f9fa",
    },
  },
  doneButton: {
    backgroundColor: "#1a73e8",
    color: "white",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "none",
    px: 2,
    "&:hover": {
      backgroundColor: "#1557b0",
    },
  },
};

export const flightClassStyles = {
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
