import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import TextCard from "./TextCard";

function Forecast({ mode, width, id }) {
  const apikey = "016692c1b92044a0b25163019251310";
  const city = "chennai";
  const [value, setvalue] = useState([]);
  const datas2 = [
    {
      image: "./src/assets/cloudy (1).png",
      temp: "27°C",
      date: " Friday,1 Sep",
    },
    {
      image: "./src/assets/sun.png",
      temp: "27°C",
      date: " Friday,1 Sep",
    },
    {
      image: "./src/assets/weather.png",
      temp: "27°C",
      date: " Friday,1 Sep",
    },
    {
      image: "./src/assets/cloudy (2).png",
      temp: "27°C",
      date: " Friday,1 Sep",
    },
    {
      image: "./src/assets/cloudy.png",
      temp: "27°C",
      date: " Friday,1 Sep",
    },
  ];
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
  const fetchdata = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setvalue(data));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(value);
  return (
    <>
      <div
        style={{
          backgroundColor: mode == "dark" ? "#1E1E1E" : "#D9D9D9",
          minWidth: width,
          height: "12%",
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
          <>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              5 Days Forecast
            </h1>
            <div>
              {datas2.map((data, index) => (
                <TextCard key={index} {...data} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>Hourly Forecast</h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: mode == "dark" ? "#1E1E1E" : "#D9D9D9",
                borderRadius: "10px",
                padding: "20px",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
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
