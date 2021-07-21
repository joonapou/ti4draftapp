// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import Link from '@material-ui/core/Link'
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Typography from '@material-ui/core/Typography';
// import Checkbox from '@material-ui/core/Checkbox';
// import graphql from 'babel-plugin-relay/macro';
// import RelayEnvironment from './RelayEnvironment';
// import {Suspense} from 'react';
// import type {Environment} from 'react-relay'
// import {
//   RelayEnvironmentProvider,
//   loadQuery,
//   usePreloadedQuery,
//   useLazyLoadQuery,
//   commitMutation
// } from 'react-relay/hooks';

// const BanScreenUserMutation = graphql`
// mutation BanScreenUserMutation($auth0id: String, $banningDone: Boolean) {
//   update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {banningDone: $banningDone}) {
//     affected_rows
//   }
// }
// `;
// const BanScreenInfoQuery = graphql`
//   query BanScreenInfoQuery ($auth0Id: String) {
//   Game(where: {GameUser: {User: {auth0_id: {_eq: $auth0Id}}}}) {
//     bansLower
//     bansUpper
//   }
// }`;
// const BanScreenQuery = graphql`
//   query BanScreenQuery($auth0Id: String) {
//   Ban(where: {GameUser: {User: {auth0_id: {_eq: $auth0Id}}}}) {
//     banned
//     ban_id
//     Faction {
//       faction_id
//       name
//       url
//     }
//   }
//   GameUser(where: {User: {auth0_id: {_eq: $auth0Id}}}) {
//     banningDone
//     gameuser_id
//     User {
//       name
//     }
//   }
// }
// `;
// const BanScreenMutation = graphql`
//   mutation BanScreenMutation($banId: Int, $banned: Boolean) {
//   update_Ban(_set: {banned: $banned}, where: {ban_id: {_eq: $banId}}) {
//     returning {
//       ban_id
//       banned
//     }
//   }
// }
// `
// function RunMutation(environment: Environment,
//   objects, mutation, callback) {
//   return commitMutation(environment, {
//     mutation: mutation,
//     variables: objects,
//     onCompleted: response => {callback()} /* Mutation completed */,
//     onError: error => {console.log(error)} /* Mutation errored */,
//   });
// }

// const preloadedQuery = loadQuery(RelayEnvironment, BanScreenQuery, {
//   auth0id: localStorage.getItem('auth0:id_token:sub')
// });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   formControl: {
//     margin: theme.spacing(3),
//   },
//   grid: {
//     direction: 'column',
//     alignContent: 'stretch'
//   }
// }));

// function handleSubmit(e, bans, refresh) {
//     for (var a = 0; a < bans.length; ++a){
//       var element = document.getElementById(bans[a].ban_id)
//       console.log("banned", element.checked, "ban_id", element.id )
//       RunMutation(RelayEnvironment, {banId: element.id, banned: element.checked}, BanScreenMutation, refresh)
      
//     }

//     var auth0id = localStorage.getItem('auth0:id_token:sub');
//     RunMutation(RelayEnvironment, {auth0id: auth0id, banningDone: true}, BanScreenUserMutation)
//     refresh();
// }
// function handleClick(e, row){
//   e.preventDefault();
//   console.log(row.Faction)
//   window.open(row.Faction.url)
// }
// function BanScreenChild(props, gameInfo) {
//   const refresh = () => {window.location.reload()}
//   const data = usePreloadedQuery(BanScreenQuery, props.preloadedQuery)
//   const banInfo = useLazyLoadQuery(BanScreenInfoQuery);
//   const classes = useStyles();
// //InitGame();
//   if (data.User[0].banningDone === false){
// return (
//        // Ban Faction
//       <Container className={classes.container} maxWidth="xs">
//       <Grid container>

//        <form classes={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e, data.Ban, refresh)}>
//           <Grid item>
//             <FormControl component="fieldset" className={classes.formControl}>
//             <FormGroup id="banform">
//             <Typography variant="h6" className={classes.title}>
//                 Ban {banInfo.Game[0].bansLower} factions
//               </Typography>
//               <Typography variant="h6" className={classes.title}>
//               </Typography>
//               {data.Ban.map((row) => (
//                 <span>
//            <FormControlLabel
//             control={<Checkbox id={row.ban_id} value={row.Faction.name}/>}
//             label={row.Faction.name}/>
//             <Link target="_blank" component="button" onClick={(e) => handleClick(e,row)}> Faction info </Link>
//           </span>
//           ))}
//             </FormGroup>
//             <Button color="secondary" fullWidth type="submit" variant="contained">
//                   Submit
//                 </Button>
//           </FormControl>
//           </Grid>
//           </form>
//           </Grid>
//         </Container>
//       )
//   } else {
//     return(
//     <Paper>Waiting for others to finish bans</Paper>
//     )
//   }
// }
// export default function BanScreen(gameInfo, props){
//   return (
//   <RelayEnvironmentProvider environment={RelayEnvironment}>
//     <Suspense fallback={'Loading...'}>
//       <BanScreenChild preloadedQuery={preloadedQuery} gameInfo={gameInfo}  />
//     </Suspense>
//   </RelayEnvironmentProvider>
//   );
// }
