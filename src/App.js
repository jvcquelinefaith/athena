import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './css/App.css';
import Home from './Home.js';
import Schools from './pages/Schools.js';
import Companies from './pages/Companies.js';
import Login from './pages/Login.js';

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
          <Container fluid id="App">
            <header>
              <Navbar color="light" light expand="md">
                <NavbarBrand id="logo" href="/"> athena </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                    </NavItem>
                    <NavLink to="/schools" href="/schools">
                      schools
                    </NavLink>
                    <NavLink to="/companies" href="/companies">
                      companies
                    </NavLink>
                    <NavLink>
                      associations
                    </NavLink>
                    <NavLink to="/login" href="/login">
                      login
                    </NavLink>
                  </Nav>
                </Collapse>
              </Navbar>
            </header>
            <Route path="/" exact component={Home} />
            <Route path="/schools" component={Schools} />
            <Route path="/companies" component={Companies} />
            <Route path="/login" component={Login} />
        </Container>
      </Router>
    );
  }
}

export default App;
