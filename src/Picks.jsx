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


const fetcher = (url) => fetch(url).then((r) => r.json())


const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function PicksTable() {
  const classes = useStyles();
  const { data, error }  = useSWR('api/picks', fetcher)

  if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
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
          {data.picks.map((row) => (
            <TableRow key={row[0]}>
              <TableCell component="th" scope="row">{row[0]}</TableCell>
              <TableCell align="left">{row[1]}</TableCell>
              <TableCell align="left">{row[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PicksTable;