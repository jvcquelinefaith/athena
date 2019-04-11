import React, { Component } from 'react';
import { Row } from 'reactstrap';

import About from './About.js';
import LandingItem from './LandingItem.js';
import Brief from './Brief.js';
import Banner from './Banner.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <About />
        <LandingItem />
        <Brief />
        <Banner />
      </Row>
    );
  }

}

export default Home;
