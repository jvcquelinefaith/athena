import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="Navbar">
        <span className="home"> <p>athena</p> </span>
        <span className="tabs">
          <p> schools </p>
          <p> companies </p>
          <p> associations </p>
          <p> login <img className="loginIcon" src={require('./login_icon.svg')} /> </p>
        </span>
      </div>
    );
  }
}

export default NavBar;
