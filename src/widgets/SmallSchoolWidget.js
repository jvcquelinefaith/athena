import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../css/SmallWidgets.css';

  class SmallSchoolWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundImage: "url("+this.props.image+")"
    }

    return (
      <Card className="athena-small-widget" style={style}>
        <CardBody id="card-body">
          <CardTitle><h3>{this.props.title}</h3></CardTitle>
          <CardText><p>{this.props.text}</p></CardText>
        </CardBody>
      </Card>
    );
  }
}

export default SmallSchoolWidget;
