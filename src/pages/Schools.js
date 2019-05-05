import React, { Component } from 'react';
import { Col, Button, Row } from 'reactstrap';
import SmallWidget from '../widgets/SmallWidget.js';
import '../css/Widgets.css';

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 2,
      error: false
    };
    this.widget_props = [
      {
        name: 'Rochester Institute of Technology',
        desc: 'Yeah, super bad example of inclusion',
      },
      {
        name: 'Harvard University',
        desc: 'Kinda okay example of inclusion',
      },
      {
        name: 'University of Southern California',
        desc: 'Maybe but I really have no idea',
      },
      {
        name: 'Pennsylvania State University',
        desc: 'Way too bro for my taste personally',
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
        <Col md="12" id="school-header"><h1>schools</h1></Col>
        <Row id="school-row">
          {this.renderSmallWidgets()}
          <Button id="athena-load" onClick={this.onLoadMore} className="athena-primary">View more</Button>
        </Row>
      </Row>

    );
  }
}

export default Schools;
