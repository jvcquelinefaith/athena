import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row } from 'reactstrap';
import './LandingItem.css';

class LandingItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Row id="landing-row">
        <Col xs="12" md="4">
          <Card>
            <CardImg top height="400vw" src={require('./student.jpg')} />
            <CardBody>
              <CardText>I am in high school trying to decide what colleges and universities to apply to.</CardText>
              <Button color="primary"> I'M LOOKING FOR A SCHOOL </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card>
            <CardImg top height="400vw" src={require('./work.jpg')} />
            <CardBody>
              <CardText>I have been working and I am looking to make a change in my career.</CardText>
              <Button color="primary"> I'M LOOKING FOR A JOB </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card>
            <CardImg top height="400vw" src={require('./group-w.jpg')} />
            <CardBody>
              <CardText>I am looking for a mentor or a supportive network of women in computing.</CardText>
              <Button color="primary">I'M LOOKING FOR SUPPORT </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default LandingItem;
