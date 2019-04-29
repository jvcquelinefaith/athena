import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './css/Navigation.css';
import Home from './Home.js';
import Schools from './pages/Schools.js';
import Companies from './pages/Companies.js';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';
import UserEntryForm from './pages/UserEntryForm.js';

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
          <Navbar id="athena-nav" expand="md">
            <NavbarBrand id="logo" href="/">athena</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink>
                  about
                </NavLink>
                <NavLink>
                  associations
                </NavLink>
                <NavLink to="/companies" href="/companies">
                  companies
                </NavLink>
                <NavLink to="/schools" href="/schools">
                  schools
                </NavLink>
                <NavLink to="/signup" href="/signup">
                  sign up
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.SCHOOLS} component={Schools} />
          <Route path={ROUTES.COMPANIES} component={Companies} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.USER_ENTRY} component={UserEntryForm} />
        </Router>
    );
  }
}

export default App;
