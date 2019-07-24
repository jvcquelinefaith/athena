import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './css/Footer.css';
import * as ROUTES from './constants/routes.js';

class Footer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const white = { backgroundColor: 'white' };
    const purple = { backgroundColor: '#F3EAFD' };
    let style = (this.props.background == 'purple') ? purple : white;

    return (
      <div id="footer-row" style={style}>
        <div id="mission">
          <h4>Mission</h4>
          <p>Our goal is to get the population
          of women in computing closer to 50%
          by promoting existing intiatives and interventions
          that are aligned with the interests of women in computing.
          </p>
          <p>keywords: women in computing, WIT, WIC</p>
          <p id="copyright">© All Rights Reserved. Athena. 2019.</p>
        </div>
        <div id="cols">
          <div id="pages">
            <h4>Pages</h4>
            <a href={ROUTES.ASSOCIATIONS}>associations</a><br/>
            <a href={ROUTES.COMPANIES}>companies</a><br/>
            <a href={ROUTES.SCHOOLS}>schools</a><br/>
            <a href={ROUTES.ABOUT}>about</a><br/>
            <br/>
            <p>Privacy Policy</p>
          </div>

          <div id="social">
            <h4>Social</h4>
            <a href={ROUTES.FACEBOOK}>facebook</a><br/>
            <a href={ROUTES.INSTAGRAM}>instagram</a><br/>
            <a>linkedin</a><br/>
            <a>twitter</a><br/>
            <br/>
            <p>Partnerships</p>
          </div>

          <div id="numbers">
            <h4>Numbers</h4>
            <a>60 women to date</a><br/>
            <a>10 associations</a><br/>
            <a>06 companies</a><br/>
            <a>11 schools</a><br/>
            <br/>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
