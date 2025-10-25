import React from "react";

function WeatherCard({ detail, color1, color2, image2, index }) {
  const hourData = detail?.forecast?.forecastday?.[0]?.hour?.[index];
  if (!hourData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          margin: "2%",
          background: `linear-gradient(45deg,${color1},${color2})`,
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <p style={{ color: "gray" }}>Loading...</p>
      </div>
    );
  }
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
            padding: "20%",
            background: `linear-gradient(45deg,${color1},${color2})`,
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            height: "15rem",
            color: "#1E1E1E",
            margin: "0",
            gap: "12px",
          }}
        >
          <li>{index}</li>
          <img
            src={hourData.condition.icon}
            style={{ maxWidth: "7rem", maxHeight: "7rem" }}
          />
          <li>{hourData.temp_c}</li>
          <img
            src={image2}
            style={{
              maxWidth: "3rem",
              maxHeight: "2rem",
              transform: `rotate(${hourData.wind_degree}deg)`,
            }}
          />
          <li>{hourData.wind_kph}</li>
        </ul>
      </div>
    </>
  );
}

export default WeatherCard;
