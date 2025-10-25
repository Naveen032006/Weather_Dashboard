import WeatherCard from "./WeatherCard";
import TextCard from "./TextCard";

function Forecast({ mode, width, id, detail }) {
  console.log(detail.forecast.forecastday[1]);
  const datas2 = [0, 1, 2, 3, 4];
  const hours = [0, 8, 12, 5, 23];

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
          <>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              5 Days Forecast
            </h1>
            <div>
              {datas2.map((index) => (
                <TextCard
                  key={index}
                  days={detail.forecast.forecastday[index]}
                />
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
                maxWidth: "1000px",
                marginTop: "50px",
              }}
            >
              {hours.map((data, index) => (
                <WeatherCard
                  key={index}
                  detail={detail}
                  color1="#F88508"
                  color2="#F6FAD9"
                  image2="./src/assets/direction.png"
                  index={hours[index]}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Forecast;
