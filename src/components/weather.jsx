import { Box, Paper, Stack, Typography } from "@mui/material";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Iconbox1 } from "./weather1";

export function Weather({ detail }) {
  return (
    <Paper
      elevation={7}
      sx={{
        textAlign: "center",
        p: { xs: 3, sm: 4, md: 4 },
        width: { xs: "100%", sm: "70%", md: "50%" },
        backgroundColor: "#D9D9D9",
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
                background: "linear-gradient(to bottom, #333, #aaa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {detail.current.temp_c}°C
            </Typography>
            <Stack spacing={0.5} direction="row">
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "600", color: "#464545ff" }}
              >
                Feels like:
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                {detail.current.feelslike_c}°C
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={1} direction="row">
            <Stack spacing={0}>
              <ArrowUpwardIcon />
              <WbTwilightOutlinedIcon />
            </Stack>
            <Stack>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                Sunrise
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
                {detail.forecast.forecastday[0].astro.sunrise}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={1} direction="row">
            <Stack spacing={0}>
              <ArrowDownwardIcon />
              <WbTwilightOutlinedIcon />
            </Stack>
            <Stack>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                Sunset
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
                {detail.forecast.forecastday[0].astro.sunset}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{ padding: "1rem" }}>
          <Stack spacing={1}>
            <img src={detail.current.condition.icon} width={150} height={150} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", textAlign: "center", padding: "1rem" }}
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
          />
        </Stack>
      </Box>
    </Paper>
  );
}
