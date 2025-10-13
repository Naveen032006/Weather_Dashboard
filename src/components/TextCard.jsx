import React from "react";

function TextCard({ image, temp, date }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10%",
        margin: "4%",
        fontSize: ".75rem",
        overflow: "auto",
      }}
    >
      <img
        src={image}
        alt="sample"
        style={{ maxWidth: "20%", height: "3rem", margin: "0" }}
      />
      <h2>{temp}</h2>
      <h2>{date}</h2>
    </div>
  );
}

export default TextCard;
