import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './css/Brief.css';

class Brief extends Component {
  render() {
    return (
      <Row id="brief-row">
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }} id="text-description">
          <h2>athena's got you covered!</h2>
          <p>
            it informs your career decisions and helps you
            choose the right environments to study and work in
          </p>
        </Col>
      </Row>
    );
  }
}

export default Brief;
