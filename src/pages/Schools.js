import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';
import SmallWidget from '../widgets/SmallWidget.js';
import '../css/Widgets.css';

class Schools extends Component {
  constructor(props) {
    super(props);
  }

  renderSmallWidgets() {
    this.props = [
      {
        title: 'Rochester Institute of Technology',
        text: 'Yeah, super bad example of inclusion',
        image: require("../images/rit.png"),
        ranking: 1
      },
      {
        title: 'Harvard University',
        text: 'Kinda okay example of inclusion',
        image: require("../images/harvard.png"),
        ranking: 2
      },
      {
        title: 'University of Southern California',
        text: 'Maybe but I really have no idea',
        image: require("../images/usc.png"),
        ranking: 3
      },
      {
        title: 'Pennsylvania State University',
        text: 'Way too bro for my taste personally',
        image: require("../images/penn.png"),
        ranking: 4
      }
    ];

    let widgets = [];
    for (var i = 0; i < this.props.length; i ++) {
      widgets.push (
        <Col xs="6" md="3">
          <SmallWidget {...this.props[i]}/>
        </Col>
      );
    };
    return widgets;
  }

  render() {
    return (
      <Row>
        <Col md="12" id="school-header"><h1>schools</h1></Col>
        <Row id="school-row">{this.renderSmallWidgets()}</Row>
      </Row>

    );
  }
}

export default Schools;
