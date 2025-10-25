import { Typography } from "@mui/material";

 export  function Loading(){
    return(
        
    <Typography variant="h4" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#555'
    }}>
      Loading...
    </Typography>
  
    );
}