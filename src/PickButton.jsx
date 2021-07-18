import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './styles/Home.module.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import BanScreen from './BanScreen.jsx'
import Paper from '@material-ui/core/Paper';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import PickScreen from './PickScreen.jsx'
import {Suspense} from 'react';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';

const PickButtonQuery = graphql`
  query PickButtonQuery {
  Game {
    game_id
    amountOfBans
    bansDone
    draftStarted
    picksDone
    userPicking
  }
}
`;
const preloadedQuery = loadQuery(RelayEnvironment, PickButtonQuery, {
  /* query variables */
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));



function PickButtonChild(props) {
  const classes = useStyles();
  const gameInfo = usePreloadedQuery(PickButtonQuery, props.preloadedQuery);
  console.log(gameInfo.Game[0])
  if (gameInfo.Game[0].draftStarted === true){
    if (gameInfo.Game[0].bansDone === true){
      if (gameInfo.Game[0].picksDone === true){
        return (
          // Draft done!
          <Container className={classes.container} maxWidth="xs">
            <Grid>
              <Typography variant="h6" className={classes.title}>
                Draft done!
              </Typography>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormGroup>
                    {/*<FormControlLabel
                      control={<Checkbox checked={data} name="gilad" />}
                      label="Gilad Gray"
                    />*/}
                    {/*<FormControlLabel
                      control={<Checkbox checked={jason} name="jason" />}
                      label="Jason Killian"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={antoine} name="antoine" />}
                      label="Antoine Llorca"
                    />*/}
                  </FormGroup>
                  <Button color="secondary" fullWidth type="submit" variant="contained" >
                        Submit
                      </Button>
                </FormControl>
            </Grid>
          </Container>
        );
      } else {
        return (
        // Pick faction
            <PickScreen/>

      )
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
export default function PickButton (props) {
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <PickButtonChild preloadedQuery={preloadedQuery} />
    </Suspense>
  </RelayEnvironmentProvider>
  );
}