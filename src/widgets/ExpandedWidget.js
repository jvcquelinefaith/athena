import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Rating from 'react-rating';
import '../css/Widgets.css';

class ExpandedWidget extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
      <div>
        <Modal size="lg" className="athena-modal" isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader tag="h3" className="athena-modal-header" toggle={this.toggle}>
            {this.props.title + " #" + this.props.ranking}
          </ModalHeader>
          <ModalBody className="athena-modal-body">
            <h5>{this.props.text}</h5>
            <table className="modal-table">
              <tr>
                <td className="no-border">
                  <p>Speed of upward mobility<Rating initialRating={5} stop={5} readonly/></p>
                </td>
                <td>
                  <p>Availability of mentorship<Rating initialRating={4} stop={5} readonly/></p>
                </td>
              </tr>
              <tr>
                <td className="no-border">
                  <p>Gender-inclusive culture<Rating initialRating={4.5} stop={5} readonly/></p>
                </td>
                <td>
                  <p>Focus on diversity and inclusion<Rating initialRating={4} stop={5} readonly/></p>
                </td>
              </tr>
              <tr>
                <td className="no-border">
                  <p>Wage disparity by gender<Rating initialRating={4} stop={5} readonly/></p>
                </td>
                <td>
                  <p>Inclusive dress-code standards<Rating initialRating={4.5} stop={5} readonly/></p>
                </td>
              </tr>
              <tr>
                <td className="no-border">
                  <p>Availability of initiatives for women<Rating initialRating={4} stop={5} readonly/></p>
                </td>
                <td>
                  <p>Current population of women<Rating initialRating={4.5} stop={5} readonly/></p>
                </td>
              </tr>
            </table>
            <h4>Reviews</h4>
            <h5 className="review">"example review here. wow yeah this company is so great blah..."</h5>
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


export default ExpandedWidget;
