import { Box } from "@mui/material";
import { Time } from "./components/time";
import { Weather } from "./components/weather";

export function Layout(){
    return(
        <>
        <Box sx={{display:"flex",justifyContent:"center",gap:4}}>
            <Time/>
            <Weather/>
        </Box>
        
        </>
    )
}