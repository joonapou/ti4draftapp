import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BanScreen from './BanScreen.jsx'
import PickScreen from './PickScreen.jsx'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));



export default function PickButton({data}) {
  const classes = useStyles();
  const gameInfo = data.User[0].Group.Games[0];
  if (gameInfo.draftStarted === true){
    if (gameInfo.bansDone === true){
      if (gameInfo.picksDone === true){
        return (
          // Draft done!
          <Container className={classes.container} maxWidth="xs">
            <Grid>
              <Typography variant="h6" className={classes.title}>
                Draft done!
              </Typography>
            </Grid>
          </Container>
        );
      } else {
        if (data.User[0].user_id === data.User[0].Group.Games[0].userPicking){
          if (data.User[0].seatNumber === null || data.User[0].Faction === null){
             return (
            // Pick faction
            <PickScreen data={data}/>
            )
          } else {
            return(
          <Typography variant="h6" className={classes.title}>
              Gongratulations, you have done your picks! Waiting for others to finish the draft
            </Typography>)
          }
         
        } else {
          return(
          <Typography variant="h6" className={classes.title}>
              Not your turn yet, waiting for {data.User[0].Group.Games[0].User.name} to pick
            </Typography>)
        }
        
      }
    } else {
      return(
      <BanScreen/>
     ) 
    }
  } else {
    return(
      // Waiting for draft to start
    <Container className={classes.container} maxWidth="xs">
          <Grid>
            <Typography variant="h6" className={classes.title}>
              Waiting for draft to start
            </Typography>
          </Grid>
        </Container>
    )
  }
}