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
                  <p>Speed of upward mobility</p>
                  <Rating initialRating={5} stop={5} readonly/>
                </td>
                <td>
                  <p>Availability of mentorship</p>
                  <Rating initialRating={4} stop={5} readonly/>
                </td>
              </tr>
              <tr>
                <td className="no-border">
                  <p>Gender-inclusive culture</p>
                  <Rating initialRating={4.5} stop={5} readonly/>
                </td>
                <td>
                  <p>Focus on diversity and inclusion</p>
                  <Rating initialRating={4} stop={5} readonly/>
                </td>
              </tr>
              <tr>
                <td className="no-border">
                  <p>Wage disparity by gender</p>
                  <Rating initialRating={4} stop={5} readonly/>
                </td>
                <td>
                  <p>Inclusive dress-code standards</p>
                  <Rating initialRating={4.5} stop={5} readonly/>
                </td>
              </tr>
              <tr>
                <td className="no-border">
                  <p>Availability of initiatives for women</p>
                  <Rating initialRating={4} stop={5} readonly/>
                </td>
                <td>
                  <p>Current population of women</p>
                  <Rating initialRating={4.5} stop={5} readonly/>
                </td>
              </tr>
            </table>
            <h4>Reviews</h4>
            <h5 className="review">"example review here. wow yeah this company is so great blah..."</h5>
          </ModalBody>
          <ModalFooter className="athena-modal-footer">
            <Button className="athena-primary" onClick={this.props.toggle}>Apply Now</Button>
            <Button className="athena-secondary" onClick={this.props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default ExpandedWidget;
