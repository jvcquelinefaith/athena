import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './css/LandingItem.css';

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
      return <img src={require("./images/study.jpg")} />;
    } else if (this.state.company) {
      return <img src={require("./images/worky.jpg")} />
    } else {
      return <img src={require("./images/groupy.jpg")} />
    }
  }

  render() {
    return (
      <Row id="landing-row">
        <Col xs="6" md={{size: 5, offset: 1}} id="categories">
          <p>whether you're looking for a...</p>
          <a onMouseOver={this.handleStudyHover}>school</a>
          <br/>
          <a onMouseOver={this.handleCompanyHover}>company</a>
          <br/>
          <a onMouseOver={this.handleAssociationHover}>association</a>
        </Col>
        <Col xs="6" md="5" id="side-img">
          {this.imageRender()}
        </Col>
      </Row>
    );
  }
}

export default LandingItem;
