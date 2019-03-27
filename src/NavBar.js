import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './NavBar.css';
import Schools from './Schools.js';
import Companies from './Companies.js';
import Associations from './Associations.js';

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div className="Navbar">
          <span className="home">
            <p>athena</p>
          </span>
          <span className="tabs">
            <Link to="/schools"> <p>schools</p> </Link>
            <Link to="/companies"> <p>companies</p> </Link>
            <Link to="/associations"> <p>associations</p> </Link>
            <Link to="/login"> <p>login</p> <img className="loginIcon" src={require('./login_icon.svg')} /> </Link>
          </span>
            <Route exact path="/schools" component={Schools} />
            <Route path="/companies" component={Companies} />
            <Route path="/associations" component={Associations} />
        </div>
      </Router>
    );
  }
}

export default NavBar;
