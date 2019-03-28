import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Container>
          <Row>
            <NavBar />
          </Row>
          <Row id="App-header" className="row">
            <Col md="4"> <img id="sideCircle" src={require('./circle.png')}/> </Col>
            <Col md="8"> <img id="backgoundImg" src={require('./WIC.png')}/> </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
