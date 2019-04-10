import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';
import './css/Brief.css';

class Brief extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col md="12">
          <div id="text-description">
            <h2>how athena works...</h2>
            <p>she informs your career decisions and helps you
            choose the right environments to study and work</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Brief;
