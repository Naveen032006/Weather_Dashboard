import {Box, Paper, Stack, Typography} from "@mui/material"

export function Time(){
    return(
        <>
        <Paper elevation={7} sx={{textAlign:"center",padding:"50px",paddingLeft:"70px",paddingRight:"70px",backgroundColor:"#D9D9D9",borderRadius:"30px", height: "100%"}} >
            <Typography variant="h4"sx={{fontWeight:"bold",paddingBottom:"20px"}} >Athens</Typography>
            <Typography variant="h2" sx={{fontWeight:"bold"}}>04:30</Typography>
            <Typography variant="subtitle2" sx={{fontWeight:"bold"}}>Thursday,31 Aug</Typography>
        </Paper >
        
        
          
        
        </>
    );
}