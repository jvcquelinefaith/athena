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
      <Row id="about-row">
        <Col md="12">
          <div id="about-text">
            <Typing speed={2}>
              <p>c:// hi, I'm athena_</p>
            </Typing>
          </div>
        </Col>
        <Col md={{size:4, offset:3}} id="small-descriptor">
          <p>
            athena is practical solution to increase
            the number of women in computing by empowering
            the existing population and making the field
            more attractive to, and conducive for diversity.
          </p>
        </Col>
        <Col md="3" id="second-small-descriptor">
          <Button className="athena-primary-white"> Learn More </Button>
        </Col>
      </Row>
    );
  }
}

export default About;
