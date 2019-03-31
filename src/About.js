import React, { Component } from 'react';
import { Col, Card, CardText, CardBody,
  CardTitle, Button, Row } from 'reactstrap';

import Typing from 'react-typing-animation';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Row>
        <Col md="12">
          <Card id="landing-row" style={{ backgroundColor: '#333', opacity: 0.8 }}>
            <CardBody>
              <CardText id="intro">
                <Typing speed={1}>
                  <p>Hi there, I'm Athena!</p>
                  <Typing.Delay ms={500} />
                  <p>I'm glad to know you're interested in the field of computing.</p>
                  <Typing.Delay ms={500} />
                  <p>It is my duty to provide you with all the information you need to
                  make the right career decisions!</p>
                  <Typing.Delay ms={500} />
                  <p>I provide information like how conducive the learning or
                  working environments are, and the availability of mentorship
                  and support organisations at these institutions!</p>
                  <Typing.Delay ms={500} />
                  <p>This is all to help you navigate the known obstacles in the computing
                  industry, and ensure that you reach your maximum potential!</p>
                  <Typing.Delay ms={500} />
                  <p>Keep exploring the site to find out more!</p>
                </Typing>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default About;
