import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import './css/Reason.css';

class Reason extends Component {
  render() {
    return (
      <Row id="reason-row">
        <Col md="12" id="reason-header">
          <h1>Athena is your One-Stop-Shop</h1>
          <p>get started with all the tools that build a <br/> successful career in computing.</p>
        </Col>
        <Col id="top-row" xs="12" md="12">
          <Col id="stats-img" xs="6" md="4">
            <img src={require("./images/athena-stats.svg")}/>
            <p>Mentorship</p>
          </Col>
          <Col id="stats-img" xs="6" md="4">
            <img src={require("./images/athena-stats.svg")}/>
            <p>Community</p>
          </Col>
          <Col id="stats-img-sup" xs="6" md="4">
            <img src={require("./images/athena-stats.svg")}/>
            <p>Support</p>
          </Col>
        </Col>
        <Col id="bottom-row" md="12">
          <Col id="stats-img" xs="6" md={{size: 4, offset:2}}>
            <img src={require("./images/athena-stats.svg")}/>
            <p>Resources</p>
          </Col>
          <Col id="stats-img" xs="6" md="4">
            <img src={require("./images/athena-stats.svg")}/>
            <p>Opportunities</p>
          </Col>
        </Col>
        <Col id="reason-footer" md="12">
          <Button className="athena-primary">→ Get Started</Button>
        </Col>
      </Row>
    );
  }
}

export default Reason;
