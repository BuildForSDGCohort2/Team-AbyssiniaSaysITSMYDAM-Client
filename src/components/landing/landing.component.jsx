import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import useStyles from './landing.styles';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';


const Landing = () =>{
    const classes = useStyles();
    return (
        
        <Grid className={classes.topGrid}   direction="column"
        justify="center"
        alignItems="center" container>
            <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          timeout= {1000} 
        >
                  <Grid item>
                  <Typography className={classes.mainText}>
                  Navigate through the 
                  varieties of 
                  </Typography>
                  
                  </Grid>
                  </Grow>
                  <Divider  />
                  <Grow in={true}>
               <Grid item >
               <Typography className={classes.secondText}>
                  Ethiopian Products
                  </Typography>
               </Grid>
               </Grow>
                  <Grid  className={classes.topButtons} justify="center"
        alignItems="center" container>
                      <Grid className={classes.buttonContainer}>
                      <Button  variant="outlined" size="large" color="primary" >Learn More</Button>
                      </Grid>
                      <Grid ><Button variant="outlined" size="large" color="secondary">Products Offered</Button></Grid>
                  </Grid>
      
              </Grid>
    )


}
        
export default Landing;