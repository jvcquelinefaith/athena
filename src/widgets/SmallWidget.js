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
        {/** TODO: version 2 <Card className="athena-small-widget" onClick={this.toggle}>*/}
        <Card className="athena-small-widget">
          <CardBody className="card-body" hidden={this.state.hidden}>
            <h3>
              {this.props.name}
            </h3>
            <img id="separator" src={require("../images/separator.svg")}/>
            <p id="desc">{this.props.desc}</p>
            <img id="yellow-separator" src={require("../images/yellow-separator.svg")}/>
            <div className="tag-list">
              <Badge>{this.props.tags && this.props.tags[0]}</Badge>
              <Badge>{this.props.tags && this.props.tags[1]}</Badge>
              <Badge>{this.props.tags && this.props.tags[2]}</Badge>
            </div>
          </CardBody>
        </Card>
        {this.renderModal()}
      </div>
    );
  }
}

export default SmallWidget;
