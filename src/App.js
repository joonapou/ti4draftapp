// import useSWR from 'swr';
// import cookie from 'js-cookie';
// import LayoutGrid from './LayoutGrid.jsx'
// import Button from '@material-ui/core/Button'
// import StartingPage from './StartingPage.jsx'


// export default function App() {
//   const {data, revalidate} = useSWR('/api/me', async function(args) {
//     const res = await fetch(args);
//     return res.json();
//   });

//   if (!data) return <h1>Loading...</h1>;
//   let loggedIn = false;
//   if (data.name) {
//     loggedIn = true;
//   }
//     if (loggedIn){
//       return (
//       <LayoutGrid playername= {data.name} />
//       )
//     } else {
//       return (
//       <StartingPage/>
//       )
//     }
      
//     }
// your-app-name/src/App.js
// import React from 'react';
// import './App.css';
// import fetchGraphQL from './fetchGraphQL';
// import graphql from 'babel-plugin-relay/macro';
// import {
//   RelayEnvironmentProvider,
//   loadQuery,
//   usePreloadedQuery,
// } from 'react-relay/hooks';
// import RelayEnvironment from './RelayEnvironment';

// const { Suspense } = React;

// // Define a query
// const RepositoryNameQuery = graphql`
//   query AppRepositoryNameQuery {
//   Faction {
//     name
//     url
//   }
// }
// `;

// // Immediately load the query as our app starts. For a real app, we'd move this
// // into our routing configuration, preloading data as we transition to new routes.
// const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
//   /* query variables */
// });

// // Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// // This works as follows:
// // - If the query has completed, it returns the results of the query.
// // - If the query is still pending, it "suspends" (indicates to React that the
// //   component isn't ready to render yet). This will show the nearest <Suspense>
// //   fallback.
// // - If the query failed, it throws the failure error. For simplicity we aren't
// //   handling the failure case here.
// function App(props) {
//   const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
//   console.log(data.Faction)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{data.Faction[0].name}</p>
//       </header>
//     </div>
//   );
// }

// // The above component needs to know how to access the Relay environment, and we
// // need to specify a fallback in case it suspends:
// // - <RelayEnvironmentProvider> tells child components how to talk to the current
// //   Relay Environment instance
// // - <Suspense> specifies a fallback in case a child suspends.
// function AppRoot(props) {
//   return (
//     <RelayEnvironmentProvider environment={RelayEnvironment}>
//       <Suspense fallback={'Loading...'}>
//         <App preloadedQuery={preloadedQuery} />
//       </Suspense>
//     </RelayEnvironmentProvider>
//   );
// }


// export default AppRoot;
import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './App.css';
import LayoutGrid from './LayoutGrid.jsx'



export class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      //this.props.history.push('/game');
      //return (<Redirect to='/game' />)
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    if (!this.props.auth.isAuthenticated()) {
      console.log("1", this.props.auth.isAuthenticated())
    return (
      <div className="appdiv">

       <Navbar fluid="true">
           {/* <Button
              bsstyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'test')}
            >
              Home
            </Button>*/}
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsstyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
           {
              isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsstyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log out
                  </Button>
                )
            }
        </Navbar>
      </div>
    );
  }
  else {
    console.log("2", this.props.auth.isAuthenticated())
    return (
    <LayoutGrid/>
)
  }

}
}
export default App;