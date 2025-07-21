export const StackCommonStyles = {
  spacing: 0,
  sx: { width: { xs: "100%", md: "50%" } },
  alignItems: "center",
  direction: "row" as const,
};

const commonButtonStyles = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  px: 1.5,
  py: 0.75,
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "4px",
  fontSize: "14px",
  color: "#3c4043",
  fontWeight: 400,
  height: "36px",
  textTransform: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  position: "relative",
  "&:hover": {
    backgroundColor: "#f1f3f4",
    border: "none",
  },
  "&:focus": {
    backgroundColor: "#f1f3f4",
    outline: "none",
  },
  "& .MuiButton-startIcon": {
    color: "#5f6368",
    marginRight: "6px",
  },
  "& .MuiButton-endIcon": {
    color: "#5f6368",
    marginLeft: "6px",
  },
};

export const passengersStyles = {
  triggerButton: {
    ...commonButtonStyles,
    minWidth: "50px",
    px: 1.25,
    "&.active": {
      backgroundColor: "#e8f0fe",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "80%",
        height: "2px",
        backgroundColor: "#1a73e8",
        borderRadius: "1px",
      },
    },
  },
  popoverPaper: {
    mt: 0.5,
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    border: "1px solid #e8eaed",
    minWidth: "280px",
    p: 2,
  },
  passengerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 1.25,
  },
  passengerInfo: {
    flex: 1,
  },
  passengerLabel: {
    fontSize: "16px",
    color: "#3c4043",
    fontWeight: 400,
    mb: 0.25,
  },
  passengerSubtext: {
    fontSize: "14px",
    color: "#70757a",
    fontWeight: 400,
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
    backgroundColor: "white",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#f8f9fa",
      borderColor: "#5f6368",
    },
    "&:disabled": {
      opacity: 0.38,
      backgroundColor: "#f8f9fa",
      borderColor: "#e8eaed",
      color: "#9aa0a6",
    },
  },
  counterValue: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#3c4043",
    minWidth: "20px",
    textAlign: "center",
  },
  actionsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 1.5,
    mt: 2,
    pt: 1.5,
    borderTop: "1px solid #e8eaed",
  },
  cancelButton: {
    color: "#1a73e8",
    fontSize: "14px",
    fontWeight: 400,
    textTransform: "none",
    borderRadius: "4px",
    px: 2,
    py: 0.75,
    "&:hover": {
      backgroundColor: "#f8f9fa",
    },
  },
  doneButton: {
    backgroundColor: "#1a73e8",
    color: "white",
    fontSize: "14px",
    fontWeight: 400,
    textTransform: "none",
    borderRadius: "4px",
    px: 2.5,
    py: 0.75,
    "&:hover": {
      backgroundColor: "#1557b0",
    },
  },
};

export const flightClassStyles = {
  formControl: {
    minWidth: 100,
    height: "36px",
    "& .MuiOutlinedInput-root": {
      ...commonButtonStyles,
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
      "&.Mui-focused": {
        backgroundColor: "#e8f0fe",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "2px",
          backgroundColor: "#1a73e8",
          borderRadius: "1px",
        },
      },
    },
    "& .MuiSelect-select": {
      padding: "8px 12px",
      display: "flex",
      alignItems: "center",
      height: "20px",
      fontSize: "14px",
      color: "#3c4043",
      fontWeight: 400,
    },
    "& .MuiSelect-icon": {
      color: "#5f6368",
      right: "8px",
    },
  },
  menuPaper: {
    mt: 0.5,
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    border: "1px solid #e8eaed",
    minWidth: "160px",
    "& .MuiMenuItem-root": {
      padding: "10px 16px",
      fontSize: "14px",
      color: "#3c4043",
      fontWeight: 400,
      transition: "background-color 0.2s ease",
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
  listItemText: {
    "& .MuiListItemText-primary": {
      fontSize: "14px",
      color: "#3c4043",
      fontWeight: 400,
    },
  },
  checkIcon: {
    ml: "auto",
    color: "#1a73e8",
    fontSize: "18px",
  },
  renderValueText: {
    fontSize: "14px",
    color: "#3c4043",
    fontWeight: 400,
  },
};

export const tripTypeSelectorStyles = {
  formControl: {
    minWidth: 110,
    height: "36px",
    "& .MuiOutlinedInput-root": {
      ...commonButtonStyles,
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
      "&.Mui-focused": {
        backgroundColor: "#e8f0fe",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "2px",
          backgroundColor: "#1a73e8",
          borderRadius: "1px",
        },
      },
    },
    "& .MuiSelect-select": {
      padding: "8px 12px",
      display: "flex",
      alignItems: "center",
      gap: 0.75,
      height: "20px",
      fontSize: "14px",
      color: "#3c4043",
      fontWeight: 400,
    },
    "& .MuiSelect-icon": {
      color: "#5f6368",
      right: "8px",
    },
  },
  menuPaper: {
    mt: 0.5,
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    border: "1px solid #e8eaed",
    minWidth: "160px",
    "& .MuiMenuItem-root": {
      padding: "10px 16px",
      fontSize: "14px",
      color: "#3c4043",
      fontWeight: 400,
      transition: "background-color 0.2s ease",
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
      fontWeight: 400,
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
    fontWeight: 400,
  },
};

export const dateSelectorStyles = {
  DateField: {
    sx: {
      flex: 1,
      "& .MuiOutlinedInput-root": {
        backgroundColor: "white",
        border: "1px solid #dadce0",
        borderRadius: "8px",
        color: "#3c4043",
        fontWeight: 400,
        minHeight: "56px",
        padding: "12px 16px",
        transition: "all 0.2s ease",
        cursor: "pointer",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        "&:hover": {
          borderColor: "#5f6368",
          boxShadow: "0 1px 6px rgba(32,33,36,0.28)",
        },
        "&.Mui-focused": {
          borderColor: "#1a73e8",
          boxShadow: "0 1px 6px rgba(32,33,36,0.28)",
        },
        "& fieldset": {
          border: "none",
        },
        "&:hover fieldset": {
          border: "none",
        },
        "&.Mui-focused fieldset": {
          border: "none",
        },
      },
      "& .MuiInputLabel-root": {
        color: "#5f6368",
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        transform: "translate(16px, 16px) scale(1)",
        "&.MuiInputLabel-shrink": {
          transform: "translate(16px, 6px) scale(0.75)",
          color: "#5f6368",
        },
        "&.Mui-focused": {
          color: "#5f6368",
        },
      },
      "& .MuiInputBase-input": {
        padding: "16px 0 16px 0",
        color: "#3c4043",
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        "&::placeholder": {
          color: "#9aa0a6",
          opacity: 1,
        },
      },
    },
  },
  popper: (isMobile: boolean, theme: any) => ({
    width: isMobile ? "100vw" : "auto",
    left: isMobile ? "0 !important" : "auto",
    zIndex: theme.zIndex.modal,
  }),
  popperContent: (isMobile: boolean) => ({
    width: isMobile ? "100vw" : "auto",
    backgroundColor: "white",
    boxShadow: "0 8px 28px rgba(0,0,0,0.28)",
    borderRadius: isMobile ? 0 : 8,
    border: "1px solid #e8eaed",
    marginTop: "4px",
  }),
  calendar: {
    width: "100%",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    "& .MuiPickersDay-root": {
      fontSize: "14px",
      fontWeight: 400,
      color: "#3c4043",
      "&:hover": {
        backgroundColor: "#f1f3f4",
      },
      "&.Mui-selected": {
        backgroundColor: "#1a73e8",
        color: "white",
        "&:hover": {
          backgroundColor: "#1557b0",
        },
      },
    },
    "& .MuiPickersCalendarHeader-root": {
      paddingLeft: "16px",
      paddingRight: "16px",
    },
    "& .MuiPickersCalendarHeader-label": {
      fontSize: "16px",
      fontWeight: 400,
      color: "#3c4043",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    "& .MuiDayCalendar-weekDayLabel": {
      fontSize: "12px",
      fontWeight: 400,
      color: "#5f6368",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
};
