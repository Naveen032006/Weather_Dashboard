import React from "react";
import WeatherCard from "./WeatherCard";

function Forecast({ mode, width, id }) {
  const datas = [
    {
      time: "12:00",
      image1: "./src/assets/cloudy.png",
      image2: "./src/assets/direction.png",
      temp: "27°C",
      speed: "3Km/h",
      color1: "#F88508",
      color2: "#F6FAD9",
    },
    {
      time: "12:00",
      image1: "./src/assets/cloudy (1).png",
      image2: "./src/assets/direction.png",
      temp: "27°C",
      speed: "3Km/h",
      color1: "#443D64",
      color2: "#6582C6",
    },
    {
      time: "12:00",
      image1: "./src/assets/cloudy (2).png",
      image2: "./src/assets/direction.png",
      temp: "27°C",
      speed: "3Km/h",
      color1: "#F88508",
      color2: "#F6FAD9",
    },
    {
      time: "12:00",
      image1: "./src/assets/sun.png",
      image2: "./src/assets/direction.png",
      temp: "27°C",
      speed: "3Km/h",
      color1: "#443D64",
      color2: "#6582C6",
    },
    {
      time: "12:00",
      image1: "./src/assets/weather.png",
      image2: "./src/assets/direction.png",
      temp: "27°C",
      speed: "3Km/h",
      color1: "#F88508",
      color2: "#F6FAD9",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundColor: mode == "dark" ? "#1E1E1E" : "#D9D9D9",
          minWidth: width,
          color: mode == "dark" ? "whitesmoke" : "black",
          borderRadius: "20px",
          overflow: "auto",
          boxShadow:
            mode == "light"
              ? "0px 4px 10px rgba(0,0,0,0.2)"
              : "0px 4px 10px rgba(255, 255, 255, 0.2)",
        }}
      >
        {id == "days" ? (
          <h1
            style={{
              textAlign: "center",
            }}
          >
            5 Days Forecast
          </h1>
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>Hourly Forecast</h1>
            <div style={{ display: "flex" }}>
              {datas.map((data, index) => (
                <WeatherCard key={index} {...data} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Forecast;
