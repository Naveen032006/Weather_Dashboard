 import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import { Stack, Typography } from '@mui/material';
 export function Iconbox() {
    return (
        <>
            <Stack>
                <AirOutlinedIcon sx={{ fontSize: "60px" }} />
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>2km/h</Typography>
                <Typography variant="caption" >Wind Speed</Typography>
            </Stack>
        </>
    );
}