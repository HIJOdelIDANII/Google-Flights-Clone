import React, { useState, useEffect } from "react";
import { Alert, Collapse, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

interface MockDataNotificationProps {
  show: boolean;
  message?: string;
}

export const MockDataNotification: React.FC<MockDataNotificationProps> = ({
  show,
  message = "Using sample data for demonstration purposes",
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (show) {
      setOpen(true);
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <Collapse in={open}>
      <Alert
        severity="info"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setOpen(false)}
          >
            <Close fontSize="inherit" />
          </IconButton>
        }
        sx={{
          mb: 2,
          borderRadius: "8px",
          backgroundColor: "#e3f2fd",
          "& .MuiAlert-message": {
            fontSize: "14px",
          },
        }}
      >
        {message}
      </Alert>
    </Collapse>
  );
};
