import React, {Component} from 'react';
import { Col, Row } from 'reactstrap';
import Footer from '../Footer.js';
import '../css/Widgets.css';
import '../css/About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Row>
        <Col id="about-header" md="12">
          <h1>about</h1>
        </Col>
        <Row id="about-row">
          <img id="athena-about" src={require("../images/athena-about.svg")}/>
        </Row>
        <Footer background={'purple'}/>
      </Row>
    );
  }

}

export default About;
