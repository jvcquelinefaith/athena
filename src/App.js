import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import LandingItem from './LandingItem.js';
import About from './About.js';

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
      <div id="App">
        <Container fluid>
          <header>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/"> athena </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                  </NavItem>
                  <NavLink>
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
          <LandingItem />
        </Container>
      </div>
    );
  }
}

export default App;
