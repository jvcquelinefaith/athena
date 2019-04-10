import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';
import './css/Banner.css';

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col md="6">
          <div id="ladder-img">
            <img src={require("./images/ladder.jpg")} />
          </div>
        </Col>
        <Col md="6">
          <div id="ladder-text">
            <h1>the next step awaits you.</h1>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Banner;
