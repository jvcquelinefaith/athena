import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';
import '../css/Widgets.css';
import SmallWidget from '../widgets/SmallWidget.js';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 2,
      error: false
    };
    this.widget_props = [
      {
        name: 'Google',
        desc: 'They\'re more careful now that their stats have been published',
      },
      {
        name: 'Facebook',
        desc: 'Sheryll Sandberg did wonders for their rep lol',
      },
      {
        name: 'Apple',
        desc: 'They seem pretty neutral. Maybe they have more female designers',
      },
      {
        name: 'Amazon',
        desc: 'This place is apparently a hell-hole.',
      }
    ];
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.setState({
      limit: this.state.limit + 2
    });
  }

  renderSmallWidgets() {
    return this.widget_props.slice(0,this.state.limit).map((widget_prop)=>{
      return(
        <Col xs="6" md="6">
          <SmallWidget key={widget_prop.widget_id}{...widget_prop}/>
        </Col>
        );
    });
  }

  render() {
    return (
      <Row>
        <Col md="12" id="company-header"><h1>companies</h1></Col>
        <Row id="company-row">
          {this.renderSmallWidgets()}
          <Button id="athena-load" onClick={this.onLoadMore} className="athena-primary">View more</Button>
        </Row>
      </Row>
    );
  }
}

export default Companies;
