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
            <h4>{this.props.name}</h4>
          </ModalHeader>
          <ModalBody className="athena-modal-body">
            <h4>About this Organization.</h4>
            <h5>{this.props.desc}</h5>
            <h4>Organization Quick Facts.</h4>
            {this.props.tags.map(function(tag){
                  return <h5>{tag}</h5>
                })}
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
