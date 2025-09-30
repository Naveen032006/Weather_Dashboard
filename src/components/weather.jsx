    import { Box, Paper, Stack, Typography } from "@mui/material";
    import WbSunnyIcon from '@mui/icons-material/WbSunny';
    import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
    import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
    import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
    import { Iconbox } from "./iconbox";
    import { Iconwrap } from "./iconwrap";

    export function Weather() {
        return (
            <Paper  elevation={7} sx={{textAlign:"center",padding:"33px",backgroundColor:"#D9D9D9",borderRadius:"30px", height: "100%"}}>
                <Box sx={{ display:"flex",justifyContent:"space-between",gap:4}}>
                    <Stack spacing={1}>
                        <Stack>
                            <Typography variant="h3" sx={{ fontWeight: "800", background: "linear-gradient(to bottom, #333, #aaa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>24°C</Typography>
                            <Stack spacing={0.5} direction="row">
                                <Typography variant="subtitle1" sx={{ fontWeight: "600", color: "#464545ff" }}>Feels like:</Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>22°C</Typography>
                            </Stack>
                        </Stack>

                        <Stack spacing={1} direction="row">
                            <Stack spacing={0}>
                                <ArrowUpwardIcon />
                                <WbTwilightOutlinedIcon />
                            </Stack>
                            <Stack>
                                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>Sunrise</Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>06:20 AM</Typography>
                            </Stack>
                        </Stack>
                        <Stack spacing={1} direction="row">
                            <Stack spacing={0}>
                                <ArrowDownwardIcon />
                                <WbTwilightOutlinedIcon />
                            </Stack>
                            <Stack>
                                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>Sunrise</Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>06:20 AM</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack sx={{padding:"10px"}} >
                        <Stack spacing={3}>
                            <WbSunnyIcon sx={{fontSize:"100px" ,color:"#EDC43E"}}/>
                            <Typography variant="h5" sx={{fontWeight: "600",textAlign:"center",padding:"10px"}}>Sunny</Typography>
                        </Stack>
                    </Stack>
                    <Iconwrap/>
                
                </Box>
            </Paper>

        );
    }