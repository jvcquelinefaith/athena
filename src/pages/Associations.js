import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';
import '../css/Widgets.css';
import SmallWidget from '../widgets/SmallWidget.js';

class Associations extends Component {
  constructor(props) {
    super(props);
  }

  renderSmallWidgets() {
    this.props = [
      {
        title: 'Google',
        text: 'They\'re more careful now that their stats have been published',
        image: require("../images/google.png"),
        ranking: 1
      },
      {
        title: 'Facebook',
        text: 'Sheryll Sandberg did wonders for their rep lol',
        image: require("../images/facebook.png"),
        ranking: 2
      },
      {
        title: 'Apple',
        text: 'They seem pretty neutral. Maybe they have more female designers',
        image: require("../images/apple.png"),
        ranking: 3
      },
      {
        title: 'Amazon',
        text: 'This place is apparently a hell-hole.',
        image: require("../images/amazon.jpg"),
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
        <Col md="12" id="association-header"><h1>associations</h1></Col>
        <Row id="association-row">{this.renderSmallWidgets()}</Row>
      </Row>
    );
  }
}

export default Associations;
