import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';
import './css/Banner.css';

class Banner extends Component {
  constructor(props) {
    super(props);
  }

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
