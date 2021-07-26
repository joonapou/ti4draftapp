import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import  Loading  from "./components/loading.js";
import  Home  from "./Home/Home.js";
import LayoutGrid from './LayoutGrid.jsx'
import ProtectedRoute from "./auth/protected-route.js";

import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/game" component={LayoutGrid} />
        </Switch>
      </div>
    </div>
  );
};

export default App;