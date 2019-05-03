import React, { Component } from 'react';
import { Row } from 'reactstrap';

import Hero from './Hero.js';
import Pathways from './Pathways.js';
import Reason from './Reason.js';
import Footer from './Footer.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Hero />
        <Pathways />
        <Reason />
        <Footer />
      </Row>
    );
  }

}

export default Home;
