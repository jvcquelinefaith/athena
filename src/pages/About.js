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
        <div id="about-header"><h1>about</h1></div>
        <Row id="about-row">
          <div id="what-img">
            <img src={require("./../images/what-img.svg")}/>
          </div>
          <div id="what">
            <h3>What Athena Is</h3>
            <img id="what-separator" src={require("./../images/what-separator.svg")}/>
              <p>Athena is an online repository with all the relevant initiatives and resources for women in computing.</p>
              <p>It is available, accessible and highly visible to all women at every career level: from high school to the C-suite.</p>
              <p>It provides information about every institute for higher education with positive learning environments for women.</p>
          </div>

          <div id="how">
            <h3>How Athena Works</h3>
            <img id="how-separator" src={require("./../images/how-separator.svg")}/>
            <p>
              <strong>Athena informs decision-making.</strong><br/>
               It is built to equip women with the info the need to
              make confident career decisions
            </p>
            <p>
              <strong>Athena is user-centered.</strong><br/>
               It is built to satisfy research-backed user needs
            </p>
            <p>
              <strong>Athena is innovative.</strong><br/>
              It is the first platform of its kind with such
              functionality
            </p>
            <p>
              <strong>Athena aggregates key factors.</strong><br/>
               It gives a holistic picture of the factors affecting
              career success in computing
            </p>
            <p>
              <strong>Athena is a one-stop-shop.</strong><br/>
               It stores valuable information about associations,
              companies as well as schools all in one place
            </p>
            <p>
              <strong>Athena is examplary.</strong><br/>
               It strives to make companies conscious of steps
              they could take for larger WIC impact
            </p>
          </div>
          <div id="how-img">
            <img src={require("./../images/how-img.svg")}/>
          </div>

          <div id="why">
            <h3>Why Athena Works</h3>
            <img id="why-separator" src={require("./../images/why-separator.svg")}/>
            <p>
              A qualitative survey of women in the computing industry in the United States
              revealed that their biggest advantages are having supportive networks to
              encourage them, and progressive environments to thrive in.
            </p>
            <p>
              This survey was conducted as part of larger research that highlighted the biggest
              factors affecting women’s success in computing to be:
              <strong> Mentorship, Encouragement and Positive Representation.</strong>
            </p>
            <p>
              Athena is here to promote everyone who's doing things right!
            </p>
          </div>
        </Row>
        <Footer background={'purple'}/>
      </Row>
    );
  }

}

export default About;
