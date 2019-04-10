import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';
import './css/Banner.css';

class Schools extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col md="12">
          <h2>schools</h2>
        </Col>
      </Row>
    );
  }
}

export default Schools;
