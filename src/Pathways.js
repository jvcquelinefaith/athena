import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import './css/Pathways.css';
import * as ROUTES from './constants/routes.js';

class Pathways extends Component {
  constructor(props) {
    super(props);
    this.state = {
      study: false,
      company: false,
      association: false
    };
  }

  render() {
    return (
      <div id="pathways-row">
        <div id="pathways-header">
          <h1>Select your Path</h1>
          <p>the paths below have been paved
          with career-changing stones. <br/>
          Keep exploring to learn more.</p>
        </div>
        <div id="path-cards">
            <Card id="path-card-r">
              <CardImg src={require("./images/athena-assoc.svg")}/>
              <CardBody>
                <CardTitle><h3 id="underlined">Associations</h3></CardTitle>
                <CardText><p>Explore the various initiatives
                for WIC that can provide
                that boost your <br/>
                career needs!</p>
                </CardText>
                <button href={ROUTES.ASSOCIATIONS} className="athena-primary">→ Learn More</button>
              </CardBody>
            </Card>
            <Card id="path-card-r">
              <CardImg src={require("./images/athena-companies.svg")}/>
              <CardBody>
                <CardTitle><h3 id="underlined-companies">Companies</h3></CardTitle>
                <CardText><p>Explore the leading companies
                in tech that are making positive changes for WIC!</p>
                </CardText>
                <button href={ROUTES.COMPANIES} className="athena-primary">→ Learn More</button>
              </CardBody>
            </Card>
            <Card id="path-card">
              <CardImg src={require("./images/athena-schools.svg")}/>
              <CardBody>
                <CardTitle><h3 id="underlined-schools">Schools</h3></CardTitle>
                <CardText><p>Explore the schools taking radical
                strides for diversity and inclusion for WIC <br/> in CS  education!</p>
                </CardText>
                <button href={ROUTES.SCHOOLS} className="athena-primary">→ Learn More</button>
              </CardBody>
            </Card>
        </div>
      </div>
    );
  }
}

export default Pathways;
