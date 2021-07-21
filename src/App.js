import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import LayoutGrid from './LayoutGrid.jsx'
import CreateGame from './CreateGame.js'


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