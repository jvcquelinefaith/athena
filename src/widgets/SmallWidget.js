import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button, Badge, Modal } from 'reactstrap';
import '../css/Widgets.css';
import LearnMore from './LearnMore.js';

  class SmallWidget extends Component {
  constructor(props) {
    super(props);
    let widgetProps = props;
    this.state = {
      hidden: false,
      modal: false
    };
    this.setVisible = this.setVisible.bind(this);
    this.setInvisible = this.setInvisible.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  setVisible() {
    this.setState({
      hidden: false
    })
  }

  setInvisible() {
    this.setState({
      hidden: true
    })
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  renderModal() {
    this.props = {
    ...this.props,
     modal: this.state.modal,
     toggle: this.toggle
   };
    return <LearnMore {...this.props}/>;
  }

  render() {
    return (
      <div>
        <Card className="athena-small-widget" onClick={this.toggle}>
          <CardBody className="card-body" hidden={this.state.hidden}>
            <CardTitle>
              <h3>
                {this.props.name}
              </h3>
            </CardTitle>
            <CardText><p>{this.props.desc}</p></CardText>
            <Button className="athena-primary">→ Learn More</Button>
            <div className="tag-list">
              <Badge>Mentorship</Badge>
              <Badge>Networking</Badge>
              <Badge>Large org</Badge>
            </div>
          </CardBody>
        </Card>
        {this.renderModal()}
      </div>
    );
  }
}

export default SmallWidget;
