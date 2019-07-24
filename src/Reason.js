import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './css/Reason.css';
import * as ROUTES from './constants/routes.js';


class Reason extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="reason-row">
        <div id="reason-header">
          <h1>The One-Stop-Shop</h1>
          <p>Athena equips you with all the tools that build a <br/> successful career in computing.</p>
        </div>
        <div id="top-row">
          <div id="stats-img-1">
            <img src={require("./images/athena-ment.svg")}/>
            <p>Mentorship</p>
          </div>
          <div id="stats-img-2">
            <img src={require("./images/athena-stats.svg")}/>
            <p>Community</p>
          </div>
          <div id="stats-img-3">
            <img id="img-3" src={require("./images/athena-sup.svg")}/>
            <p id="p3">Support</p>
          </div>
          <div id="stats-img-4">
            <img id="img-4" src={require("./images/athena-recs.svg")}/>
            <p id="p4">Resources</p>
          </div>
        </div>
      <div id="reason-footer">
        <Button href={ROUTES.ABOUT} className="athena-primary">→ Get Started</Button>
      </div>
    </div>
    );
  }
}

export default Reason;
