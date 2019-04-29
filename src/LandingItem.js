import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './css/LandingItem.css';
import * as ROUTES from './constants/routes.js';

class LandingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      study: false,
      company: false,
      association: false
    };
    this.imageRender = this.imageRender.bind(this);
    this.handleStudyHover = this.handleStudyHover.bind(this);
    this.handleCompanyHover = this.handleCompanyHover.bind(this);
    this.handleAssociationHover = this.handleAssociationHover.bind(this);
  }

  handleStudyHover() {
    this.setState({study: true, company: false, association: false});
  }

  handleCompanyHover() {
    this.setState({study: false, company: true, association: false});
  }

  handleAssociationHover() {
    this.setState({study: false, company: false, association: true});
  }

  imageRender() {
    if (this.state.study) {
      return <img src={require("./images/female-graduate-student.png")} />;
    } else if (this.state.company) {
      return <img src={require("./images/groupy.jpg")} />
    } else {
      return <img src={require("./images/collaboration.png")} />
    }
  }

  render() {
    return (
      <Row id="landing-row">
        <Col xs={{size: 5, offset: 1}} md={{size: 5, offset: 1}} id="categories">
          <p>whether you're looking for a...</p>
          <a onMouseOver={this.handleStudyHover} href={ROUTES.SCHOOLS}>school</a>
          <br/>
          <a onMouseOver={this.handleCompanyHover} href={ROUTES.COMPANIES}>company</a>
          <br/>
          <a onMouseOver={this.handleAssociationHover}>association</a>
        </Col>
        <Col xs="4" md="5" id="side-img">
          {this.imageRender()}
        </Col>
      </Row>
    );
  }
}

export default LandingItem;
