import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './css/App.css';
import Home from './Home.js';
import Schools from './pages/Schools.js';
import Companies from './pages/Companies.js';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';

import * as ROUTES from './constants/routes.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
        <Router>
          <Navbar id="athena-nav" sticky="top" color="light" light expand="md">
            <NavbarBrand id="logo" href="/">athena</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="navbar-text">
                  <NavLink to="/schools" href="/schools">
                    <p>schools</p>
                  </NavLink>
                </NavItem>
                <NavItem className="navbar-text">
                  <NavLink to="/companies" href="/companies">
                    <p>companies</p>
                  </NavLink>
                </NavItem>
                <NavItem className="navbar-text">
                  <NavLink>
                    <p>associations</p>
                  </NavLink>
                </NavItem>
                <NavItem className="navbar-text">
                  <NavLink to="/signup" href="/signup">
                    <p>sign up</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.SCHOOLS} component={Schools} />
          <Route path={ROUTES.COMPANIES} component={Companies} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route path={ROUTES.SIGNIN} component={SignIn} />
      </Router>
    );
  }
}

export default App;
