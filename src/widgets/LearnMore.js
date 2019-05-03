import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Rating from 'react-rating';
import '../css/Widgets.css';

class LearnMore extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
      <div>
        <Modal size="lg" className="athena-modal" isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader className="athena-modal-header" toggle={this.toggle}>
            <h4>{this.props.title}</h4>
            <h5>{this.props.text}</h5>
          </ModalHeader>
          <ModalBody className="athena-modal-body">
            <h4>How this Organization Supports Women in Computing.</h4>
          </ModalBody>
          <ModalFooter className="athena-modal-footer">
            <Button className="athena-primary" onClick={this.props.toggle}>→ Apply Now</Button>
            <Button className="athena-secondary" onClick={this.props.toggle}>→ Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default LearnMore;
