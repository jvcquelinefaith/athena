import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './css/Stats.css';

class Stats extends Component {
  render() {
    return (
      <Row id="stats-row">
        <Col md="12" id="stats-header">
          <h1>against the odds</h1>
          <p>despite the declining population of women
          in computing <br/> in certain countries,
          there’s stll hope.</p>
        </Col>
        <Col>
          <img id="stats-img" src={require("./images/athena-stats.svg")}/>
        </Col>
        <Col>
          <div id="stats"></div>
        </Col>
      </Row>
    );
  }
}

export default Stats;
