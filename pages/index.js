// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';
 import LayoutGrid from '../components/LayoutGrid.jsx'


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
      <div>
      <>
          <Link href="/login">Login</Link>
          <p>or</p>
          <Link href="/signup">Sign Up</Link>
        </>
      </div>
      )
    }
      
    }

 

// import Head from 'next/head';
// import fetch from 'isomorphic-unfetch';
// import useSWR from 'swr';
// import Link from 'next/link';
// import cookie from 'js-cookie';

// function Home() {
//   const {data, revalidate} = useSWR('/api/me', async function(args) {
//     const res = await fetch(args);
//     console.log(res)
//     return res.json();
//   });

//   if (!data) return <h1>Loading...</h1>;
//   let loggedIn = false;
//   if (data.name) {
//     loggedIn = true;
//   }
//   return (
//     <div>
//       <LayoutGrid/>
//       {loggedIn && (
//         <>
//           <p>Welcome {data.name}!</p>
//           <button
//             onClick={() => {
//               cookie.remove('token');
//               revalidate();
//             }}>
//             Logout
//           </button>
//         </>
//       )}
//       {!loggedIn && (
//         <>
//           <Link href="/login">Login</Link>
//           <p>or</p>
//           <Link href="/signup">Sign Up</Link>
//         </>
//       )}
//     </div>
//   );
// }

