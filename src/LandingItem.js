import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row } from 'reactstrap';
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
        <Col md="6">
          <div id="categories">
            <p>help whether you're looking for a...</p>
            <a onMouseOver={this.handleStudyHover}>school</a>
            <br/>
            <a onMouseOver={this.handleCompanyHover}>company</a>
            <br/>
            <a onMouseOver={this.handleAssociationHover}>association</a>
          </div>
        </Col>
        <Col md="6">
          <div id="side-img">
            {this.imageRender()}
          </div>
        </Col>
      </Row>
    );
  }
}

export default LandingItem;
