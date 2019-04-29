import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';

import Typing from 'react-typing-animation';
import './css/About.css';

class About extends Component {
  render() {
    return (
      <Row id="about-row">
        <Col md="6" id="about-h">
          <h1>Empowering Women in Computing</h1>
          <p>Ready to take the next step in your <br/>
            career ladder? Athena is here <br/>
            to help.
          </p>
          <Button>Learn More</Button>
        </Col>
        <Col md="4">
          <img id="athena-hero" src={require("./images/athena-hero.svg")}/>
        </Col>
      </Row>
    );
  }
}

export default About;
