import React, {Component} from 'react';
import { Col, Row } from 'reactstrap';
import Footer from '../Footer.js';
import '../css/Widgets.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Row>
        <div id="about-header"><h1>about</h1></div>
        <Row id="about-row">

        </Row>
        <Footer background={'purple'}/>
      </Row>
    );
  }

}

export default About;
