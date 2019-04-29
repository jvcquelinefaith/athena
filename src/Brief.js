import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './css/Brief.css';

class Brief extends Component {
  render() {
    return (
        <Col md="12" id="text-description">
          <h2>athena's got you covered!</h2>
          <p>
            she informs your career decisions and helps you
            choose the right environments to study and work in
          </p>
        </Col>
    );
  }
}

export default Brief;
