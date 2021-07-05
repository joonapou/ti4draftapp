// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import React, {Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import Button from '@material-ui/core/Button';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Typography from '@material-ui/core/Typography';
// import Checkbox from '@material-ui/core/Checkbox';
// import useSWR from "swr";
// import {useState, useReducer} from 'react'
// const fetcher = (url) => fetch(url).then((r) => r.json())


// const GetData = (endpoint) => {
//   const { data, error } = useSWR(endpoint, fetcher,  {
//   revalidateOnFocus: false,
//   revalidateOnMount:false,
//   revalidateOnReconnect: false,
//   refreshWhenOffline: false,
//   refreshWhenHidden: false,
//   refreshInterval: 0
// })
//   return { data: data, error: error }

// }
// function getBanData() {
//   console.log("getBanData")
//   return getData('api/ban');
// }
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   formControl: {
//     margin: theme.spacing(3),
//   },
// }));

// class BanScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     const { data: bans, error: bansError }  = getBanData();
//     this.state = {factionbans: bans.bans}
//   }
//   render() {
//   if (!bans ) return <div>loading...</div>
//   const [factionbans, dispatch] = useReducer((state, action) => {
//       switch (action.type) {
//         case 'add':
//           return [
//       ...state,
//         {
//           factionName: action.factionName,
//           banId: action.banId,
//           banned: action.banned
          
//         }
//       ];
//       case "UPDATE_ROW":
//       console.log("updating", action.factionName);
//       return {...state, factionsbans:state.rows.map((row) =>
//         row._id === action.payload._id
//           ? {
//               ...action.payload
//             }
//           : row
//       )};
//       default:
//         return state;
//       }
//     }, bans.bans);
    
  
//  function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Submitted")
//     fetch('/api/ban', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         factionbans
//       }),
//     })
// }
//   const classes = useStyles();

// function handleClick(e, row){
//   dispatch({
//     type: 'add',
//     factionName: row.factionName,
//     banned: e.target.checked,
//     banId: row.banId
//   })
// }

// return (

//         // Ban Faction
//       <Container className={classes.container} maxWidth="xs">
//        <form classes={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
//           <Grid>
//             <FormControl component="fieldset" className={classes.formControl}>
//             <FormGroup>
//             <Typography variant="h6" className={classes.title}>
//                 Ban {bans.ban_info.ban_lower} factions
//               </Typography>
//               <Typography variant="h6" className={classes.title}>
//               </Typography>
//               {bans.bans.map((row) => (
//            <FormControlLabel
//             control={<Checkbox name={row.banId} onChange={e=> handleClick(e, row)} value={row.factionName}/>}
//             label={row.factionName}
//           />
//           ))}
//             </FormGroup>
//             <Button color="secondary" fullWidth type="submit" variant="contained">
//                   Submit
//                 </Button>
//           </FormControl>
//           </Grid>
//           </form>
//         </Container>
//       )

// }
// }

// export default BanScreen;