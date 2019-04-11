import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './css/Banner.css';

class Banner extends Component {
  render() {
    return (
      <Row id="banner-row">
        <Col xs="4" md="6">
          <img id="ladder-img" src={require("./images/business-and-finance.png")} />
        </Col>
        <Col xs="6" md="6" id="ladder-text">
          <h1>the next step awaits.</h1>
        </Col>
      </Row>
    );
  }
}

export default Banner;
