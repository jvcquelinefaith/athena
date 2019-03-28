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
        <div id="Navbar" className="row">
          <span id="home" className=".col-md-4">
            <Link to="/"><p>athena</p></Link>
          </span>
          <span id="tabs" className=".col-md-8 col-md-offset-4">
            <Link className=".col-md-2" to="/schools"> <p>schools</p> </Link>
            <Link className=".col-md-2" to="/companies"> <p>companies</p> </Link>
            <Link className=".col-md-2" to="/associations"> <p>associations</p> </Link>
            <Link className=".col-md-2" to="/login"> <p>login</p> <img className="loginIcon" src={require('./login_icon.svg')} /> </Link>
          </span>
            <Route path="/" />
            <Route path="/schools" component={Schools} />
            <Route path="/companies" component={Companies} />
            <Route path="/associations" component={Associations} />
        </div>
      </Router>
    );
  }
}

export default NavBar;
