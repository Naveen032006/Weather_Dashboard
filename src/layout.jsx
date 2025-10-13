import { Box } from "@mui/material";
import { Time } from "./components/time";
import { Weather } from "./components/weather";


export function Layout(){
    return(
        <>
        <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 4,
        p: 3,
       
        minHeight: "100vh",
      }}>
            <Time/>
            <Weather/>
            
        </Box>
        
        </>
    )
}