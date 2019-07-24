import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './css/Hero.css';
import * as ROUTES from './constants/routes.js';

class Hero extends Component {
  render() {
    return (
      <div id="hero-row">
        <div id="about-h">
          <h1>Empowering <span id="underlined-h">Women</span> in Computing</h1>
          <p>a curated list of the associations,
          companies and schools that support computing women.
          </p>
          <Button href={ROUTES.ABOUT} className="athena-primary">→ Learn More</Button>
        </div>
        <div id="athena-hero">
          <img src={require("./images/athena-hero.svg")}/>
        </div>
      </div>
    );
  }
}

export default Hero;
