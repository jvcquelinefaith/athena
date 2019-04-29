import React, { Component } from 'react';
import { Row } from 'reactstrap';

import Hero from './Hero.js';
import Pathways from './Pathways.js';
import Stats from './Stats.js';

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
      </Row>
    );
  }

}

export default Home;
