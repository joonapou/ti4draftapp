// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import Button from '@material-ui/core/Button';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Checkbox from '@material-ui/core/Checkbox';
// import useSWR from "swr";
// import styles from './styles/Home.module.css'
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import BanScreen from './BanScreen.jsx'
// import Paper from '@material-ui/core/Paper';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   formControl: {
//     margin: theme.spacing(3),
//   },
// }));



// export default function PickButton(gameinfo, {gameInfoError}) {
//   const classes = useStyles();
//   if (gameInfoError) return <div>failed to load</div>
//   if (!gameInfo ) return <div>loading...</div>
//   if (gameInfo.game[0].draftStarted === true){
//     if (gameInfo.game[0].bansDone === true){
//       if (gameInfo.game[0].picksDone === true){
//         return (
//           // Draft done!
//           <Container className={classes.container} maxWidth="xs">
//             <Grid>
//               <Typography variant="h6" className={classes.title}>
//                 Draft done!
//               </Typography>
//                 <FormControl component="fieldset" className={classes.formControl}>
//                   <FormGroup>
//                     {/*<FormControlLabel
//                       control={<Checkbox checked={data} name="gilad" />}
//                       label="Gilad Gray"
//                     />*/}
//                     {/*<FormControlLabel
//                       control={<Checkbox checked={jason} name="jason" />}
//                       label="Jason Killian"
//                     />
//                     <FormControlLabel
//                       control={<Checkbox checked={antoine} name="antoine" />}
//                       label="Antoine Llorca"
//                     />*/}
//                   </FormGroup>
//                   <Button color="secondary" fullWidth type="submit" variant="contained" onSubmit={handleSubmit}>
//                         Submit
//                       </Button>
//                 </FormControl>
//             </Grid>
//           </Container>
//         );
//       } else {
//         return (
//         // Pick faction
//       <Container className={classes.container} maxWidth="xs">
//           <Grid>
//             <Typography variant="h6" className={classes.title}>
//               Pick screen
//             </Typography>
//           </Grid>
//         </Container>
//       )
//       }
//     } else {
//       return(
//       <BanScreen bans={bans}/>
//      ) 
//     }
//   } else {
//     return(
//       // Waiting for draft to start
//     <Container className={classes.container} maxWidth="xs">
//           <Grid>
//             <Typography variant="h6" className={classes.title}>
//               {gameInfo.game[0].id}
//             </Typography>
//           </Grid>
//         </Container>
//     )
//   }
// }