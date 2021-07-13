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
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
const PicksQuery = graphql`
  query PicksQuery {
  User {
    user_id
    name
    pickOrder
    user_id
    Faction {
      name
    }
  }
}
`;
const preloadedQuery = loadQuery(RelayEnvironment, PicksQuery, {
  /* query variables */
});
const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function PicksTableChild(props) {
  const data = usePreloadedQuery(PicksQuery, props.preloadedQuery);
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
          {data.User.map((row) => (
            <TableRow key={row.user_id}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.Faction == null ? "No faction selected" : row.Faction.name}</TableCell>
              <TableCell align="left">{row.seatNumber == null ? "No seat selected" : row.seatNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function PicksTable(props) {
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <PicksTableChild preloadedQuery={preloadedQuery} />
    </Suspense>
  </RelayEnvironmentProvider>
  );
}