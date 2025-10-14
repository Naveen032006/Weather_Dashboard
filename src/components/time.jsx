import {Box, Paper, Stack, Typography} from "@mui/material"
import { useEffect, useState } from "react";

export function Time(){
    const [time,settime]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            settime(new Date())
        },1000);
        return () => clearInterval(timer);
    },[]);
    const formatTime=time.toLocaleTimeString("en-US",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:false
        

    });
    const formatDate=time.toLocaleDateString("en-US",{
        weekday:"long",
        day:"numeric",
        month:"short"
    })
     const [mainTime, period] = formatTime.split(" ");
    return(
        <>
        <Paper elevation={7} sx={{
    textAlign: "center",
    p: { xs: 3, sm: 4, md: 5 },
    width: { xs: "90%", sm: "45%", md: "20%" },
    height:"auto",
    backgroundColor: "#D9D9D9",
    borderRadius: "30px",
  }} >
            <Typography variant="h4"sx={{fontWeight:"bold",paddingBottom:"20px"}} >Athens</Typography>
            
            <Typography variant="h2" sx={{fontWeight:"bold", fontSize:"3.5rem",paddingTop:"1rem",paddingBottom:"1rem" }}>{mainTime}</Typography>
            
           
            <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>{formatDate}</Typography>
        </Paper >
        
        
          
        
        </>
    );
}