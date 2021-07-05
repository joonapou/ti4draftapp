import styles from './styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());


const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function PickOrderTable() {
  const classes = useStyles();
  const { data, error }  = useSWR('api/pickorder', fetcher)
  if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
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
          {data.pick_order.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row[1]}
              </TableCell>
              <TableCell align="left">{row[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}