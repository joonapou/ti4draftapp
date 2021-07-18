import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List'
import InitPicks from './helpers/InitPicks.js'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import {useState, useReducer} from 'react'
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import {Suspense} from 'react';
import InitGame from './helpers/InitGame';
import type {Environment} from 'react-relay'
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
  commitMutation
} from 'react-relay/hooks';

// const BanScreenUserMutation = graphql`
// mutation BanScreenUserMutation($auth0id: String, $banningDone: Boolean) {
//   update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {banningDone: $banningDone}) {
//     affected_rows
//   }
// }
// `;
const PickScreenQuery = graphql`
  query PickScreenQuery {
   Faction(where: {_not: {Bans: {}}}) {
    name
    faction_id
    url
  }
  Ban(where: {banned: {_eq: false}}) {
    Faction {
      name
      faction_id
      url

    }
  }
}`;

const preloadedQuery = loadQuery(RelayEnvironment, PickScreenQuery, {
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%'
  },
  griditem: {
    height: 10,
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
function GetPicks(props) {
  const data = usePreloadedQuery(PickScreenQuery, props.preloadedQuery)
  var factions_array = data.Faction;
  var bans_array = [];
  for (var i = 0; i<data.Ban.length;++i){
    bans_array.push(data.Ban[i].Faction)
  }
  return data.Faction.concat(bans_array)
}
// function handleSubmit(e, bans, refresh) {
//     //e.preventDefault();
//     for (var a = 0; a < bans.length; ++a){
//       var element = document.getElementById(bans[a].ban_id)
//       console.log("banned", element.checked, "ban_id", element.id )
//       RunMutation(RelayEnvironment, {banId: element.id, banned: element.checked}, BanScreenMutation)
//       refresh();
//     }
//     var auth0id = localStorage.getItem('auth0:id_token:sub');
//     RunMutation(RelayEnvironment, {auth0id: auth0id, banningDone: true}, BanScreenUserMutation)
// }
function handleClick(e){
  e.preventDefault();
  InitGame();
  
}
function PickScreenChild(props, gameInfo) {
  const [value,setValue] = useState();
  //InitPicks();
  const refresh = () => {
    setValue({});
  }

  const picks = GetPicks(props);
const classes = useStyles();
console.log(picks)

return (
       // Ban Faction
       <div className={classes.root}>
       <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Select seat</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Chip label="Barbados" onDelete={() => {}} />
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Select faction</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Chip label="Barbados" onDelete={() => {}} />
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
      </div>
      )

}
export default function PickScreen(gameInfo, props){
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <PickScreenChild preloadedQuery={preloadedQuery} gameInfo={gameInfo}  />
    </Suspense>
  </RelayEnvironmentProvider>
  );
}
