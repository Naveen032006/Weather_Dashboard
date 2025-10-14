import { Box } from "@mui/material";
import { Time } from "./components/time";
import { Weather } from "./components/weather";
import Forecast from "./components/Forecast";
import { useState, useEffect } from "react";
import { SearchBar } from "./searchbar";

export function Layout() {
  const apikey = "016692c1b92044a0b25163019251310";
  const city = "Chennai";
  const [value, setvalue] = useState(null);
  const fetchdata = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setvalue(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(value?.current);
  return value ? (
    <>
      <div
        style={{
          background: "linear-gradient(to bottom, #4f4f4fff, #d3d0d0ff)",
        }}
      >
        <SearchBar />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          <Time detail={value}/>
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
          <Forecast mode="light" width="60%" id="hour" detail={value} />
        </Box>
      </div>
    </>
  ) : (
    <h1>Data retrieving</h1>
  );
}
