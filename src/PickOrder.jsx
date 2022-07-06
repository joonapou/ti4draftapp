
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import {Suspense} from 'react';
import {
  RelayEnvironmentProvider,
  loadQuery,
  useLazyLoadQuery,
} from 'react-relay/hooks';

const PickOrderQuery = graphql`
  query PickOrderQuery ($gameId: Int) {
  Game(where: {game_id: {_eq: $gameId}}) {
    GameUsers {
      gameuser_id
      User {
        name
      }
      pickOrder
      seatNumber
      Pick {
        factionId
      }
    }
  }
}`;

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});
function HandlePickOrder (props) {
  var game_id = props.data.data.User[0].GameUsers[0].gameId
  const data = useLazyLoadQuery(PickOrderQuery, {gameId: game_id})
  var user_array = data.Game[0].GameUsers;
  var users_asc = [];
  var users_desc = [];
  var i;
  for (i = 0; i < user_array.length; i++){
    if (user_array[i].seatNumber == null || user_array[i].Pick == null){
      users_desc.push({"pickOrder": user_array[i].pickOrder, "name" : user_array[i].User.name, "seatNumber": user_array[i].seatNumber, "factionId" : -1})
      users_desc.sort(function compare(user1, user2) {
      return user1.pickOrder-user2.pickOrder
    }
      )
    }
  }
  for (i = 0; i < user_array.length; i++){
    if (user_array[i].seatNumber == null && user_array[i].Pick == null){
    users_asc.push({"pickOrder": user_array[i].pickOrder, "name" : user_array[i].User.name, "seatNumber": user_array[i].seatNumber, "factionId" : -1})
    users_asc.sort(function compare(user1, user2) {
      return user2.pickOrder-user1.pickOrder
    }
      )
  }
  }
  console.log(users_asc, users_desc)
  var sortable_users = users_asc.concat(users_desc);
  return sortable_users;
}

export default function PickOrderTableChild(props){
  const pickOrder = HandlePickOrder(props);
  const classes = useStyles();
  if (pickOrder.length > 0){
  return (
  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell align="left">Pick Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pickOrder.map((row) => (
            <TableRow key={row.user_id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.pickOrder}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
  } else {
    return (
      <Paper className={classes.paper}>Picking done!</Paper>
      )
  }
  
}
