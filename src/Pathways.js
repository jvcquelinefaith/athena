import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
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
                for women in computing that can provide that boost your career needs!</p>
                </CardText>
                <Button href={ROUTES.ASSOCIATIONS} className="athena-primary">→ Learn More</Button>
              </CardBody>
            </Card>
            <Card id="path-card-r">
              <CardImg src={require("./images/athena-companies.svg")}/>
              <CardBody>
                <CardTitle><h3 id="underlined-companies">Companies</h3></CardTitle>
                <CardText><p>Explore the leading companies
                in tech that are making positive changes for women in computing!</p>
                </CardText>
                <Button href={ROUTES.COMPANIES} className="athena-primary">→ Learn More</Button>
              </CardBody>
            </Card>
            <Card id="path-card">
              <CardImg src={require("./images/athena-schools.svg")}/>
              <CardBody>
                <CardTitle><h3 id="underlined-schools">Schools</h3></CardTitle>
                <CardText><p>Explore the schools taking radical
                strides for diversity and inclusion for women in computing in CS education!</p>
                </CardText>
                <Button href={ROUTES.SCHOOLS} className="athena-primary">→ Learn More</Button>
              </CardBody>
            </Card>
        </div>
      </div>
    );
  }
}

export default Pathways;
