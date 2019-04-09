import React, { Component } from 'react';
import { Col, Card, CardText, CardBody,
  CardTitle, Button, Row } from 'reactstrap';

import Typing from 'react-typing-animation';
import './css/About.css';

class About extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Row>
        <Col md="12">
          <div id="about-row" style={{ backgroundColor: 'black' }}>
            <div id="about-text">
            <Typing speed={2}>
              <p>c:// hi, I'm athena_</p>
            </Typing>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default About;
