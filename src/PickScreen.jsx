// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link'
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionActions from '@material-ui/core/AccordionActions';
// import Alert from '@material-ui/lab/Alert';
// import Divider from '@material-ui/core/Divider';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import {useState} from 'react'
// import graphql from 'babel-plugin-relay/macro';
// import RelayEnvironment from './RelayEnvironment';
// import {Suspense} from 'react';
// import type {Environment} from 'react-relay'

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import {
//   RelayEnvironmentProvider,
//   loadQuery,
//   usePreloadedQuery,
//   commitMutation
// } from 'react-relay/hooks';

// const PickScreenUserSeatMutation = graphql`
// mutation PickScreenUserSeatMutation($auth0id: String, $seatnumber: Int) {
//   update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {seatNumber: $seatnumber}) {
//     affected_rows
//   }
// }
// `;
// const PickScreenUserFactionMutation = graphql`
// mutation PickScreenUserFactionMutation($auth0id: String, $faction_id: Int) {
//   update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {factionId: $faction_id}) {
//     affected_rows
//   }
// }
// `;
// const PickScreenQuery = graphql`
//   query PickScreenQuery {
//    Faction(where: {_not: {Bans: {}}}) {
//     name
//     faction_id
//     url
//   }
//   Ban(where: {banned: {_eq: false}}) {
//     Faction {
//       name
//       faction_id
//       url

//     }
//   }
// }`;
// function RunMutation(environment: Environment,
//   objects, mutation, callback) {
//   return commitMutation(environment, {
//     mutation: mutation,
//     variables: objects,
//     onCompleted: response => {callback()} /* Mutation completed */,
//     onError: error => {console.log(error)} /* Mutation errored */,
//   });
// }
// const preloadedQuery = loadQuery(RelayEnvironment, PickScreenQuery, {
// });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     height: '100%'
//   },
//   griditem: {
//     height: 10,
//     width: '100%'
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
//   icon: {
//     verticalAlign: 'bottom',
//     height: 20,
//     width: 20,
//   },
//   details: {
//     alignItems: 'center',
//   },
//   column: {
//     flexBasis: '33.33%',
//   },
//   helper: {
//     borderLeft: `2px solid ${theme.palette.divider}`,
//     padding: theme.spacing(1, 2),
//   },
//   link: {
//     color: theme.palette.primary.main,
//     textDecoration: 'none',
//     '&:hover': {
//       textDecoration: 'underline',
//     },
//   },
// }));
// function GetPicks(props) {
//   const data = usePreloadedQuery(PickScreenQuery, props.preloadedQuery)
//   var bans_array = [];
//   for (var i = 0; i<data.Ban.length;++i){
//     bans_array.push(data.Ban[i].Faction)
//   }
//   return data.Faction.concat(bans_array)
// }
// function GetAvailableSeats(props) {
//   const seats = props.data.data.User[0].Group.Games[0].availableSeats.split(',')
//   return seats;
// }
// function handleSeatSubmit(e, seatdata, refresh, alert) {
//     if (alert){
//       console.log("don't submit", "alert:", alert)
//     } else {
//       var auth0id = localStorage.getItem('auth0:id_token:sub');
//       RunMutation(RelayEnvironment, {auth0id: auth0id, seatnumber: seatdata}, PickScreenUserSeatMutation, refresh)
//     }
// }
// function handleFactionSubmit(e, factiondata, refresh, alert) {
//    if (alert){
//       console.log("don't submit", "alert:", alert)
//     } else {
//       var auth0id = localStorage.getItem('auth0:id_token:sub');
//       RunMutation(RelayEnvironment, {auth0id: auth0id, faction_id: factiondata.faction_id}, PickScreenUserFactionMutation, refresh)
//     }
    
// }

// function PickScreenChild(props) {
//   const [expanded, setExpanded] = useState(false);
//   const [seatData, setSeatData] = useState(null);
//   const [factionData, setFactionData] = useState(null);
//   const [factionanchorEl, setFactionAnchorEl] = React.useState(null);
//   const [seatanchorEl, setSeatAnchorEl] = useState(null);
//   const [alert, setAlert] = useState(false);
//   const seats = GetAvailableSeats(props);
//   const userSeatSelected = () => {return props.data.data.User[0].seatNumber !== null}
//   const userFactionSelected = () => {return props.data.data.User[0].Faction !== null}
//   const refresh = () => {window.location.reload()}
//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };
//   const handleClickListItemFaction = (event) => {
//     setFactionAnchorEl(event.currentTarget);
//   };
//   const handleClickListItemSeat = (event) => {
//     setSeatAnchorEl(event.currentTarget);
//   };

//   function handleMenuItemClickSeat(row) {
//     setSeatData(row)
//     setSeatAnchorEl(null);
//   };
//   function handleMenuItemClickFaction(row) {

//     setFactionData(row)
//     setFactionAnchorEl(null);
//   };

//   const handleCloseFaction = () => {
//     setFactionAnchorEl(null);
//   };
//   const handleCloseSeat = () => {
//     setSeatAnchorEl(null);
//   };
//   const factionInfoClick = (e, faction) => {
//     window.open(faction.url)
//   }
//   const picks = GetPicks(props);
//   const seatDisabled = userSeatSelected();
//   const factionDisabled = userFactionSelected();
// const classes = useStyles();

// return (
//        <div className={classes.root}>
//        <Accordion disabled={seatDisabled}expanded={expanded === 'seats'} onChange={handleChange('seats')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1c-content"
//           id="panel1c-header"
//         >
//           <div className={classes.column}>
//             <Typography className={classes.heading}>Select seat</Typography>
//           </div>
//         </AccordionSummary>
//         <AccordionDetails className={classes.details}>
//          <div className={classes.root}>
//       <List component="nav" aria-label="Device settings">
//         <ListItem
//           button
//           aria-haspopup="true"
//           aria-controls="lock-menu"
//           aria-label="when device is locked"
//           onClick={handleClickListItemSeat}
//         >
//           <ListItemText primary={seatData === null ? "Select seat" : seatData} />
//         </ListItem>
//       </List>
//       <Menu
//         id="lock-menu"
//         anchorEl={seatanchorEl}
//         keepMounted
//         open={Boolean(seatanchorEl)}
//         onClose={handleCloseSeat}
//       >
//         {seats.map((row, index) => (
//           <MenuItem
//             key={row}
//             onClick={() => {
//               handleMenuItemClickSeat(row);
//             }}
//           >
//             {row}
//           </MenuItem>
//         ))}
//       </Menu>
//       { alert===true && <Alert severity="error" onClose={() => {setAlert(false)}}>Please select a seat to continue</Alert>}
      
//     </div>
//         </AccordionDetails>
//         <Divider />
//         <AccordionActions>
//           <Button id="seatsubmit" color="secondary" fullWidth type="submit" variant="contained" onClick={(e) => {
//             if (seatData === null){
//               setAlert(true)
//             } else {
//               handleSeatSubmit(e, seatData, refresh, alert)
//             }
            
//           }}>
//                   Submit
//                 </Button>
//         </AccordionActions>
//       </Accordion>
//        <Accordion disabled={factionDisabled}expanded={expanded === 'factions'} onChange={handleChange('factions')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1c-content"
//           id="panel1c-header"
//         >
//           <div className={classes.column}>
//             <Typography className={classes.heading}>Select faction</Typography>
//           </div>
//         </AccordionSummary>
//         <AccordionDetails>
//         <div className={classes.root}>
//       <List component="nav" aria-label="Device settings">
//         <ListItem
//           button
//           aria-haspopup="true"
//           aria-controls="lock-menu"
//           aria-label="when device is locked"
//           onClick={handleClickListItemFaction}
//         >
//           <ListItemText primary={factionData === null ? "Select faction" : factionData.name} 
//           secondary={factionData === null ? "" : <Link target="_blank" component="button" onClick={(e) => factionInfoClick(e,factionData)}> Faction info </Link>

//           } />
//         </ListItem>
//       </List>
//       <Menu
//         id="lock-menu"
//         anchorEl={factionanchorEl}
//         keepMounted
//         open={Boolean(factionanchorEl)}
//         onClose={handleCloseFaction}
//       >
//         {picks.map((row, index) => (
//           <MenuItem
//             key={row.faction_id}
//             onClick={(event) => {
//               handleMenuItemClickFaction(row);
//             }}
//           >
//             {row.name}
//           </MenuItem>
//         ))}
//       </Menu>
//       { alert===true && <Alert severity="error" onClose={() => {setAlert(false)}}>Please select a seat to continue</Alert>}
//     </div>
//         </AccordionDetails>
//         <Divider />
//         <AccordionActions>
//          <Button id="factionsubmit" color="secondary" fullWidth type="submit" variant="contained" onClick={(e) => {
//             if (factionData === null){
//               setAlert(true)
//             } else {
//               handleFactionSubmit(e, factionData, refresh, alert)
//             }
            
//           }}>
//                   Submit
//                 </Button>
//         </AccordionActions>
//       </Accordion>
//       </div>
//       )

// }
// export default function PickScreen(data, props){
//   return (
//   <RelayEnvironmentProvider environment={RelayEnvironment}>
//     <Suspense fallback={'Loading...'}>
//       <PickScreenChild preloadedQuery={preloadedQuery} data={data}/>
//     </Suspense>
//   </RelayEnvironmentProvider>
//   );
// }
