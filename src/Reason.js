import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import './css/Reason.css';

class Reason extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row id="reason-row">
        <Col xs="12" md="12" id="reason-header">
          <h1>Athena is your One-Stop-Shop</h1>
          <p>get started with all the tools that build a <br/> successful career in computing.</p>
        </Col>
        <Col id="stats-img-first" xs="6" md="4">
          <img src={require("./images/athena-ment.svg")}/>
          <p>Mentorship</p>
        </Col>
        <Col id="stats-img" xs="6" md="4">
          <img src={require("./images/athena-stats.svg")}/>
          <p>Community</p>
        </Col>
        <Col id="stats-img-sup" xs="6" md="4">
          <img src={require("./images/athena-sup.svg")}/>
          <p>Support</p>
        </Col>
        <Col id="stats-img" xs="6" md={{size: 4, offset:2}}>
          <img src={require("./images/athena-recs.svg")}/>
          <p>Resources</p>
        </Col>
        <Col id="stats-img" xs="6" md="4">
          <img src={require("./images/athena-opps.svg")}/>
          <p>Opportunities</p>
        </Col>
        <Col id="reason-footer" xs="12" md="12">
          <Button className="athena-primary">→ Get Started</Button>
        </Col>
      </Row>
    );
  }
}

export default Reason;
