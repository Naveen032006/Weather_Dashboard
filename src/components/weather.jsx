import { Box, Paper, Stack, Typography } from "@mui/material";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Iconbox1 } from "./weather1";

export function Weather({ mode, detail }) {
  return (
    <Paper
      elevation={7}
      sx={{
        textAlign: "center",
        p: { xs: 3, sm: 4, md: 4 },
        width: { xs: "100%", sm: "70%", md: "50%" },
        backgroundColor: mode == "light" ? "#D9D9D9" : "#1E1E1E",
        borderRadius: "30px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
        <Stack spacing={1}>
          <Stack>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "800",
                background:
                  mode == "light"
                    ? "linear-gradient(45deg, #615f5fff, #b1b1b1ff)"
                    : "linear-gradient(45deg, #b1b1b1ff, #615f5fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {detail.current.temp_c}°C
            </Typography>
            <Stack spacing={0.5} direction="row">
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              >
                Feels like:
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              >
                {detail.current.feelslike_c}°C
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={1} direction="row">
            <Stack spacing={0}>
              <ArrowUpwardIcon
                sx={{
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              />
              <WbTwilightOutlinedIcon
                sx={{
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              >
                Sunrise
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "600",
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              >
                {detail.forecast.forecastday[0].astro.sunrise}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={1} direction="row">
            <Stack spacing={0}>
              <ArrowDownwardIcon
                sx={{
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              />
              <WbTwilightOutlinedIcon
                sx={{
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              >
                Sunset
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "600",
                  color: mode == "dark" ? "whitesmoke" : "black",
                }}
              >
                {detail.forecast.forecastday[0].astro.sunset}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{ padding: "1rem" }}>
          <Stack spacing={1}>
            <img
              src={detail.current.condition.icon}
              width={150}
              height={150}
              style={{
                border:
                  mode == "light" ? "4px solid #1E1E1E" : "4px solid #D9D9D9",
                borderRadius: "50%",
                padding: "4px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                textAlign: "center",
                padding: "1rem",
                color: mode == "dark" ? "whitesmoke" : "black",
              }}
            >
              {detail.current.condition.text}
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Iconbox1
            humidity={`${detail.current.humidity}%`}
            windspeed={`${detail.current.wind_kph}Km/h`}
            pressure={`${detail.current.pressure_mb}hpa`}
            uv={`${detail.current.uv}`}
            mode={mode}
          />
        </Stack>
      </Box>
    </Paper>
  );
}
