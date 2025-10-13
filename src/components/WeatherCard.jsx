import React from "react";

function WeatherCard({ time, image1, image2, temp, speed, color1, color2 }) {
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
          <li>{time}</li>
          <img src={image1} style={{ maxWidth: "7rem", maxHeight: "7rem" }} />
          <li>{temp}</li>
          <img src={image2} style={{ maxWidth: "3rem", maxHeight: "2rem" }} />
          <li>{speed}</li>
        </ul>
      </div>
    </>
  );
}

export default WeatherCard;
