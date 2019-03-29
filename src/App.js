import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './App.css';
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
            <Row>
              <Col sm="12" md="12" lg="12">
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">athena</NavbarBrand>
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
              </Col>
            </Row>
          </header>
        </Container>
      </div>
    );
  }
}

export default App;
