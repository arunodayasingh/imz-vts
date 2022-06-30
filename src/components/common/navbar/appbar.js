import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Grid, Typography} from '@mui/material';



const AppBaar = () => {
  return (
    <React.Fragment>
              
      <AppBar style={{background:"linear-gradient(90deg, rgba(83,63,208,1) 0%, rgba(130,18,183,1) 100%)",zIndex:-1}}>
      {/* <AppBar style={{background:"transparent",color:"#000"}}> */}
        <Toolbar>
          <Grid container item xs={12}>

                <Grid xs={3}>
                  Logo

                </Grid>

                <Grid xs={2}>
                  

                </Grid>

                <Grid container sx={5}>
                    <Grid xs={4}>
                        <Typography>Demo</Typography>
                    </Grid>

                    <Grid xs={4}>
                        <Typography>Home</Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Typography>Login</Typography>
                    </Grid>

                </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
      
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  )
}

export default AppBaar;