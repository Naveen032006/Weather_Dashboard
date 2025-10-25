import { Box } from "@mui/material";
import { Time } from "./components/time";
import { Weather } from "./components/weather";
import Forecast from "./components/Forecast";
import React, { useState, useEffect } from "react";
import { SearchBar } from "./searchbar";
import { Loading } from "./loading";

export function Layout() {
  const [theme, setTheme] = useState("dark");
  const apikey = "016692c1b92044a0b25163019251310";
  const [location, setLocation] = useState("Chennai");
  const city = location;
  const [error, setError] = useState(null);
  const [value, setvalue] = useState(null);
  const fetchdata = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=5&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => setvalue(data))
      .catch((error) => setError(error));
  };
  useEffect(() => {
    fetchdata();
  }, [location]);
  console.log(location);
  console.log(value);
  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  } else {
    return value ? (
      <>
        <div
          style={{
            background: "linear-gradient(to bottom, #4f4f4fff, #d3d0d0ff)",
          }}
        >
          <SearchBar
            setLocation={setLocation}
            theme={theme}
            setTheme={setTheme}
          />
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            <Time detail={value} mode={theme} />
            <Weather mode={theme} detail={value} />
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
            <Forecast mode={theme} width="30%" id="days" detail={value} />
            <Forecast mode={theme} width="50%" id="hour" detail={value} />
          </Box>
        </div>
      </>
    ) : (
      <Loading />
    );
  }
}
