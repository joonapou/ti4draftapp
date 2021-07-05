import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

function StartingPage() {
  const classes = useStyles();

  return (
      <Container className={classes.container} maxWidth="xs">
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button color="primary" fullWidth variant="contained" href='/login'>Log in</Button>
                </Grid>
        
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" fullWidth type="submit" variant="contained" href='/signup'>Sign up</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
};
export default StartingPage;