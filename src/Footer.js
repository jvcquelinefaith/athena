import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <Row id="footer-row">
        <Col md="4">
          <h4>Mission</h4>
          <p>Our goal is to get the population
          of women in computing closer to 50%
          by promoting existing intiatives and interventions
          that are aligned with the interests of women in computing.
          </p>
          <p>keywords: women in computing, WIT, WIC</p>
          <p id="copyright">© All Rights Reserved. Athena. 2019.</p>
        </Col>

        <Col md={{size: 2, offset: 1}}>
          <h4>Pages</h4>
          <p>associations<br/>
          companies<br/>
          schools<br/>
          about</p>
          <br/>
          <p>Privacy Policy</p>
        </Col>

        <Col md="2">
          <h4>Social</h4>
          <p>facebook<br/>
          instagram<br/>
          linkedin<br/>
          twitter</p>
          <br/>
          <p>Partnerships</p>
        </Col>

        <Col md="2">
          <h4>Numbers</h4>
          <p>145 women to date<br/>
          14 associations<br/>
          12 companies<br/>
          11 schools</p>
          <br/>
          <p>Privacy Policy</p>
        </Col>
      </Row>
    )
  }
}

export default Footer;