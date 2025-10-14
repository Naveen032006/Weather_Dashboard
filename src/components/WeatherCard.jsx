import React from "react";

function WeatherCard({ detail, color1, color2, image2, index }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1%",
          margin: "2%",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: "10%",
            background: `linear-gradient(45deg,${color1},${color2})`,
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            height: "12rem",
            margin: "0",
          }}
        >
          <li>{index}</li>
          <img
            src={detail.forecast.forecastday[0].hour[index].condition.icon}
            style={{ maxWidth: "7rem", maxHeight: "7rem" }}
          />
          <li>{detail.forecast.forecastday[0].hour[index].temp_c}</li>
          <img src={image2} style={{ maxWidth: "3rem", maxHeight: "2rem" }} />
          <li>{detail.forecast.forecastday[0].hour[index].wind_kph}</li>
        </ul>
      </div>
    </>
  );
}

export default WeatherCard;
