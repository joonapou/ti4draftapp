import styles from './styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from "@material-ui/core/TableSortLabel";
import useSWR from "swr";
import RelayEnvironment from './RelayEnvironment';
import graphql from 'babel-plugin-relay/macro';
import {Suspense} from 'react';
import {
  RelayEnvironmentProvider,
 useLazyLoadQuery,
} from 'react-relay/hooks';
const PicksQuery = graphql`
  query PicksQuery ($gameId: Int) {
  GameUser(where: {Game: {game_id: {_eq: $gameId}}}) {
    pickOrder
    seatNumber
    User {
      name
    }
    Pick {
      Faction {
        name
        url
      }
    }
  }
}`;

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function PicksTable(props) {
  var game_id = props.data.data.User[0].GameUsers[0].gameId
  const data = useLazyLoadQuery(PicksQuery, {gameId: game_id});
  console.log("pickstable", data)
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell align="left">Faction</TableCell>
            <TableCell align="left">Seat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.GameUser.map((row) => (
            <TableRow key={row.user_id}>
              <TableCell component="th" scope="row">{row.User.name}</TableCell>
              <TableCell align="left">{row.Pick == null ? "No faction selected" : row.Pick.Faction.name}</TableCell>
              <TableCell align="left">{row.seatNumber == null ? "No seat selected" : row.seatNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

