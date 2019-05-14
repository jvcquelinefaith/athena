import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';

import './css/Hero.css';
import * as ROUTES from './constants/routes.js';

class Hero extends Component {
  render() {
    return (
      <Row id="hero-row">
        <Col xs="12" md="6" id="about-h">
          <h1>Empowering <span id="underlined-h">Women</span> in Computing</h1>
          <p>a curated list of the associations,
          companies and schools that support computing women.
          </p>
          <Button href={ROUTES.ABOUT} className="athena-primary">→ Learn More</Button>
        </Col>
        <Col xs="6" md="3">
          <img id="athena-hero" src={require("./images/athena-hero.svg")}/>
        </Col>
      </Row>
    );
  }
}

export default Hero;
