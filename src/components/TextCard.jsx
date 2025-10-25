import React from "react";

function TextCard({ days }) {
  console.log(days);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        margin: "30px",
        padding: "0",
        justifyContent: "center",
        fontSize: ".75rem",
        overflow: "auto",
      }}
    >
      <img
        src={days.day.condition.icon}
        alt="sample"
        style={{ maxWidth: "50px", height: "50px", margin: "0" }}
      />
      <h2 style={{ flex: 1, textAlign: "center" }}>
        {days.day.condition.text}
      </h2>
      <h2>{days.date}</h2>
    </div>
  );
}

export default TextCard;
