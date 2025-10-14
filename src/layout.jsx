import { Box } from "@mui/material";
import { Time } from "./components/time";
import { Weather } from "./components/weather";
import Forecast from "./components/Forecast";

export function Layout() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
        <Time />
        <Weather detail={value} />
      </Box>
      <Box
        sx={{
          margin: "20px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Forecast mode="light" width="20%" id="days" detail={value} />
        <Forecast mode="light" width="60%" id="hour" />
      </Box>
    </>
  );
}
