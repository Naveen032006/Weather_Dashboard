import { Stack, Typography } from "@mui/material";
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SpeedIcon from "@mui/icons-material/Speed";
import Brightness5Icon from '@mui/icons-material/Brightness5';

export function Iconbox1({humidity,windspeed,pressure,uv}) {
    

    return (<>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", alignItems: "center" }}>
            <Stack sx={{ alignItems: "center" }}>
                <WaterDropIcon sx={{ fontSize: "3rem" }} />
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>{humidity}</Typography>
                <Typography variant="caption" >Humidity</Typography>
            </Stack>
            <Stack sx={{ alignItems: "center" }}>
                <AirOutlinedIcon sx={{ fontSize: "3rem" }} />
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>{windspeed}</Typography>
                <Typography variant="caption" >Wind Speed</Typography>
            </Stack>
            <Stack sx={{ alignItems: "center" }}>
                <SpeedIcon sx={{ fontSize: "3rem" }} />
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>{pressure}</Typography>
                <Typography variant="caption" >Pressure</Typography>
            </Stack>
            <Stack sx={{ alignItems: "center" }}>
                <Brightness5Icon sx={{ fontSize: "3rem" }} />
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>{uv}</Typography>
                <Typography variant="caption" >UV</Typography>
            </Stack>

        </div>
    </>)
}