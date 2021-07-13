import React, { Component } from 'react';
import LayoutGrid from '../LayoutGrid.jsx';
import PickOrder from '../PickOrder.jsx'

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    console.log("home")
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <h4>
          You are not logged in! Please{' '}
          <a
            style={{ cursor: 'pointer' }}
            onClick={this.login.bind(this)}
          >
            Log In
          </a>
          {' '}to continue.
        </h4>
      </div>
    );
  

}
}
export default Home;