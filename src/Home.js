import React, { Component } from 'react';
import { Row } from 'reactstrap';

import Hero from './Hero.js';
import Pathways from './Pathways.js';
import Stats from './Stats.js';
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
        <Stats />
        <Footer />
      </Row>
    );
  }

}

export default Home;
