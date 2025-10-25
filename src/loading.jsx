import React from "react";
import { Box, CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh", // center vertically
      }}
    >
      <CircularProgress size={60} thickness={4} color="primary" />
    </Box>
  );
}
