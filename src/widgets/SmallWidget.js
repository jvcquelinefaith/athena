import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button, Badge, Modal } from 'reactstrap';
import '../css/Widgets.css';
import ExpandedWidget from './ExpandedWidget.js';

  class SmallWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
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
     modal: this.state.modal,
     toggle: this.toggle
   };
    return <ExpandedWidget {...this.props}/>;
  }

  render() {
    const style = {
      backgroundImage: "url("+this.props.image+")"
    }
    return (
      <div>
        <Card className="athena-small-widget"
              style={style}
              onMouseOver={this.setVisible}
              onMouseOut={this.setInvisible}
              onClick={this.toggle}>
          <CardBody id="card-body" hidden={this.state.hidden}>
            <Badge className="ranking-badge">#{this.props.ranking}</Badge>
            <CardTitle>
              <h3>
                {this.props.title}
              </h3>
            </CardTitle>
            <CardText><p>{this.props.text}</p></CardText>
          </CardBody>
        </Card>
        {this.renderModal()}
      </div>
    );
  }
}

export default SmallWidget;
