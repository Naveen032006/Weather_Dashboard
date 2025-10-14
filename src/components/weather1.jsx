import { Stack, Typography } from "@mui/material";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SpeedIcon from "@mui/icons-material/Speed";
import Brightness5Icon from "@mui/icons-material/Brightness5";

export function Iconbox1({ humidity, windspeed, pressure, uv, mode }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <Stack sx={{ alignItems: "center" }}>
          <WaterDropIcon
            sx={{
              fontSize: "3rem",
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          >
            {humidity}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          >
            Humidity
          </Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <AirOutlinedIcon
            sx={{
              fontSize: "3rem",
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          >
            {windspeed}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          >
            Wind Speed
          </Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <SpeedIcon
            sx={{
              fontSize: "3rem",
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          >
            {pressure}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          >
            Pressure
          </Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <Brightness5Icon
            sx={{
              fontSize: "3rem",
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          >
            {uv}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: mode === "dark" ? "whitesmoke" : "black",
            }}
          >
            UV
          </Typography>
        </Stack>
      </div>
    </>
  );
}
