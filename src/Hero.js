import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';

import Typing from 'react-typing-animation';
import './css/Hero.css';

class Hero extends Component {
  render() {
    return (
      <Row id="about-row">
        <Col md="6" id="about-h">
          <h1>Empowering <span id="underlined-h">Women</span> in Computing</h1>
          <p>a curated list of the associations,
          companies and schools that support computing women.
          </p>
          <Button className="athena-primary">→ Learn More</Button>
        </Col>
        <Col md="3">
          <img id="athena-hero" src={require("./images/athena-hero.svg")}/>
        </Col>
      </Row>
    );
  }
}

export default Hero;
