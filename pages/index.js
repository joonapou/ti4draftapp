// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Head from 'next/head';
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';
import LayoutGrid from '../components/LayoutGrid.jsx'
import Button from '@material-ui/core/Button'
import StartingPage from '../components/StartingPage.jsx'


export default function Home() {
  const {data, revalidate} = useSWR('/api/me', async function(args) {
    const res = await fetch(args);
    return res.json();
  });

  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.name) {
    loggedIn = true;
  }
    if (loggedIn){
      return (
      <LayoutGrid playername= {data.name} />
      )
    } else {
      return (
      <StartingPage/>
      )
    }
      
    }

