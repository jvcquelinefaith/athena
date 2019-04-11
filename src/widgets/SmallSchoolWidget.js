import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button, Badge } from 'reactstrap';
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
          <Badge className="ranking-badge">#{this.props.ranking}</Badge>
          <CardTitle>
            <h3>
              {this.props.title}
            </h3>
          </CardTitle>
          <CardText><p>{this.props.text}</p></CardText>
        </CardBody>
      </Card>
    );
  }
}

export default SmallSchoolWidget;
