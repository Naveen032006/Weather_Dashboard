import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import { Stack, Typography } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SpeedIcon from "@mui/icons-material/Speed";
import Brightness5Icon from "@mui/icons-material/Brightness5";
export function Iconbox() {
  return (
    <>
      <Stack spacing={3}>
        <Stack direction="row" spacing={1}>
          <Stack>
            <WaterDropIcon sx={{ fontSize: "3rem" }} />
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              2km/h
            </Typography>
            <Typography variant="caption">Humidity</Typography>
          </Stack>
          <Stack>
            <AirOutlinedIcon sx={{ fontSize: "3rem" }} />
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              2km/h
            </Typography>
            <Typography variant="caption">Wind Speed</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Stack>
            <SpeedIcon sx={{ fontSize: "3rem" }} />
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              2km/h
            </Typography>
            <Typography variant="caption">Pressure</Typography>
          </Stack>
          <Stack>
            <Brightness5Icon sx={{ fontSize: "3rem" }} />
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              2km/h
            </Typography>
            <Typography variant="caption">UV</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
