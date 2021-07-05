import useSWR from 'swr';
import cookie from 'js-cookie';
import LayoutGrid from './LayoutGrid.jsx'
import Button from '@material-ui/core/Button'
import StartingPage from './StartingPage.jsx'


export default function App() {
  // const {data, revalidate} = useSWR('/api/me', async function(args) {
  //   const res = await fetch(args);
  //   return res.json();
  // });

  // if (!data) return <h1>Loading...</h1>;
  // let loggedIn = false;
  // if (data.name) {
  //   loggedIn = true;
  // }
  //   if (loggedIn){
  //     return (
  //     <LayoutGrid playername= {data.name} />
  //     )
  //   } else {
      return (
      <StartingPage/>
      )
    // }
      
    }
