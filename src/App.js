import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './css/App.css';
import About from './About.js';
import LandingItem from './LandingItem.js';
import Brief from './Brief.js';
import Banner from './Banner.js';
import Schools from './Schools.js';
import Company from './Company.js';

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
        <Container fluid id="App">
          <header>
            <Navbar color="light" light expand="md">
              <NavbarBrand id="logo" href="/"> athena </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                  </NavItem>
                  <NavLink to="/schools">
                    schools
                  </NavLink>
                  <NavLink>
                    companies
                  </NavLink>
                  <NavLink>
                    associations
                  </NavLink>
                  <NavLink>
                    login
                  </NavLink>
                </Nav>
              </Collapse>
            </Navbar>
          </header>
          <About />
          <Brief />
          <LandingItem />
          <Banner />
      </Container>
    );
  }
}

export default App;
