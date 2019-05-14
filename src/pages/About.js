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
        <Col id="about-row" md="12">
          <h3>Overview</h3>
          <p>
            Athena is an online repository with all the relevant initiatives
            and resources for women in computing.
            <br/>
            It is available, accessible and highly visible to all women at every career level: from high school to the C-suite.
            <br/>
            It provides information about every institute for higher education with positive learning environments for women.
          </p>
          <h3>Athena informs decision-making</h3>
          <p> It is built to equip women with the info the need to make confident career decisions</p>
          <h3>Athena is user-centered</h3>
          <p> It is built to satisfy research-backed user needs</p>
          <h3>Athena is innovative</h3>
          <p> It is the first platform of its kind with such functionality</p>
          <h3>Athena aggregates key factors</h3>
          <p> It gives a holistic picture of the factors affecting career success in computing</p>
          <h3>Athena is a one-stop-shop</h3>
          <p> It stores valuable information about associations, companies as well as schools all in one place</p>
          <h3>Athena is examplary</h3>
          <p> It strives to make companies conscious of steps they could take for larger WIC impact</p>
        </Col>
        <Footer background={'purple'}/>
      </Row>
    );
  }

}

export default About;
