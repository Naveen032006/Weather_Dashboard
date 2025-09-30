import { Grid } from "@mui/material";
import { Iconbox } from "./iconbox";

export function Iconwrap(){
    return(
        <Grid container rowSpacing={2} columnSpacing={2}>
  <Grid item xs={12} sm={6}>
    <Iconbox />
  </Grid>
  <Grid item xs={12} sm={6}>
    <Iconbox />
  </Grid>
  <Grid item xs={12} sm={6}>
    <Iconbox />
  </Grid>
  <Grid item xs={12} sm={6}>
    <Iconbox />
  </Grid>
</Grid>

    );
}