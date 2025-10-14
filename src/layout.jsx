import { Box } from "@mui/material";
import { Time } from "./components/time";
import { Weather } from "./components/weather";
import Forecast from "./components/Forecast";
import { SearchBar } from "./searchbar";
  
export function Layout() {
  return (
    
    <div style={{ background: "linear-gradient(to bottom, #4f4f4fff, #d3d0d0ff)"}}>
      <SearchBar/>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
        <Time />
        <Weather />
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
        <Forecast mode="light" width="20%" id="days" />
        <Forecast mode="light" width="60%" id="hour" />
      </Box>
      </div>
    
  );
}
