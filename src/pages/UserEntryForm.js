import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Rating from 'react-rating';
import {
  Container, Col, Form, FormFeedback,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import * as ROUTES from '../constants/routes.js';
import { withFirebase } from '../firebase';
import '../css/UserEntryForm.css';

const INITIAL_STATE = {
  first: '',
  last: '',
  status: '',
  school: '',
  company: '',
  review: '',
  rating: {
    population: '',
    initiatives: '',
    dress: '',
    wage: '',
    diversity: '',
    inclusive: '',
    mentorship: '',
    mobility: ''
  },
  error: null
};

class UserEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    this.props.firebase
    .writeProfileData(this.state)
    .then(() => {
      alert("Your profile has been saved! Thank you!");
    })
    .then(() => {
     this.setState({ ...INITIAL_STATE });
     this.props.history.push(ROUTES.HOME);
    })
    .catch(error => {
      this.setState({ error });
    });
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOptionChange = changeEvent => {
  this.setState({
    selectedOption: changeEvent.target.value
  });
  this.onChange(changeEvent);
  };

  handleRatingChange = (rating, name) => {
    var mock_Rating = {...this.state.rating}
    mock_Rating[name] = rating;
    this.setState({
      rating: mock_Rating
    });
  };

  renderDynamicFormParts(option) {
    let {label, name, review} = '';
    if (option === " " || option === "unemployed") {
      return;
    } else if (option === "student") {
      name = "school";
      label = "School Name"
    } else if (option === "part-time") {
      name = "company";
      label = "Company Name";
    } else if (option === "full-time") {
      name = "company";
      label = "Company Name";
    }
    return (
      <div>
        <Col>
          <FormGroup>
            <Label className="athena-question">{label}</Label>
            <Input
              type="text"
              name={name}
              onChange={this.onChange}
              id={name}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label className="athena-question">How would you rate their: </Label>
            <table className="rating-table">
              <tr>
                <td><Label id="mobility">Speed of upward mobility:</Label></td>
                <td>
                  <Rating
                  initialRating={this.state.rating.mobility}
                  onChange={rate => this.handleRatingChange(rate, "mobility")}
                  stop={5}
                  value={this.state.rating.mobility}
                  />
                </td>
              </tr>
              <tr>
                <td><Label id="mentorship">Availability of mentorship:</Label></td>
                <td>
                  <Rating
                  stop={5}
                  initialRating={this.state.rating.mentorship}
                  onChange={rate => this.handleRatingChange(rate, "mentorship")}
                  value={this.state.rating.mentorship}/>
                </td>
              </tr>
              <tr>
                <td><Label id="inclusive">Gender-inclusive culture:</Label></td>
                <td>
                  <Rating
                  stop={5}
                  initialRating={this.state.rating.inclusive}
                  onChange={rate => this.handleRatingChange(rate, "inclusive")}
                  value={this.state.rating.inclusive}/>
                </td>
              </tr>
              <tr>
                <td><Label id="diversity">Focus on diversity and inclusion:</Label></td>
                <td>
                  <Rating
                  stop={5}
                  initialRating={this.state.rating.diversity}
                  onChange={rate => this.handleRatingChange(rate, "diversity")}
                  value={this.state.rating.diversity}/>
                </td>
              </tr>
              <tr>
                <td><Label id="wage">Wage disparity by gender:</Label></td>
                <td>
                  <Rating
                  stop={5}
                  initialRating={this.state.rating.wage}
                  onChange={rate => this.handleRatingChange(rate, "wage")}
                  value={this.state.rating.wage}/>
                </td>
              </tr>
              <tr>
                <td><Label id="dress">Inclusive dress-code standards:</Label></td>
                <td>
                  <Rating
                  stop={5}
                  initialRating={this.state.rating.dress}
                  onChange={rate => this.handleRatingChange(rate, "dress")}
                  value={this.state.rating.dress}/>
                </td>
              </tr>
              <tr>
                <td><Label id="initiatives">Availability of initiatives for women:</Label></td>
                <td>
                  <Rating
                  stop={5}
                  initialRating={this.state.rating.initiatives}
                  onChange={rate => this.handleRatingChange(rate, "initiatives")}
                  value={this.state.rating.initiatives}/>
                </td>
              </tr>
              <tr>
                <td><Label id="population">Current population of women:</Label></td>
                <td>
                  <Rating
                  stop={5}
                  initialRating={this.state.rating.population}
                  onChange={rate => this.handleRatingChange(rate, "population")}
                  value={this.state.rating.population}/>
                </td>
              </tr>
            </table>
          </FormGroup>
        </Col>
        <Col>
        <FormGroup>
          <Label className="athena-question">Review</Label>
          <Input
            type="textarea"
            name="review"
            onChange={this.onChange}
            placeholder={'anything you\'d like to share...'}
            id="review" />
        </FormGroup>
        </Col>
      </div>
      );
  }

  render() {
    const {
      first,
      last,
      status,
      school,
      review,
      error
    } = this.state;

    const props = this.props;

    return (
      <div className="athena-form-page">
        <h3 className="page-title">create your profile</h3>
        <Col md={{ size: 8, offset: 2 }}>
          <Form className="form-check athena-form" onSubmit={this.onSubmit}>
            {error && <p invalid id="errorMessage">{error.message}</p>}
            <Col>
              <FormGroup>
                <Label className="athena-question">First Name</Label>
                <Input
                  type="text"
                  name="first"
                  onChange={this.onChange}
                  value={first}
                  id="first"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="athena-question">Last Name</Label>
                <Input
                  type="text"
                  name="last"
                  onChange={this.onChange}
                  value={last}
                  id="last"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="athena-question">Current Status</Label><br/>
                <Label className="athena-radio" check>
                  <Input
                  type="radio"
                   name="status"
                   value="student"
                   checked={this.state.selectedOption === "student"}
                   onChange={this.handleOptionChange}
                   className="form-check-input"
                  />
                  Student
                </Label>
                <Label className="athena-radio" check>
                  <Input
                  type="radio"
                   name="status"
                   value="full-time"
                   checked={this.state.selectedOption === "full-time"}
                   onChange={this.handleOptionChange}
                   className="form-check-input"
                  />
                  Working Full Time
                </Label>
                <Label className="athena-radio" check>
                  <Input
                  type="radio"
                   name="status"
                   value="part-time"
                   checked={this.state.selectedOption === "part-time"}
                   onChange={this.handleOptionChange}
                   className="form-check-input"
                  />
                  Working Part Time
                </Label>
                <Label className="athena-radio" check>
                  <Input
                  type="radio"
                   name="status"
                   value="unemployed"
                   checked={this.state.selectedOption === "unemployed"}
                   onChange={this.handleOptionChange}
                   className="form-check-input"
                  />
                  Unemployed
                </Label>
              </FormGroup>
            </Col>
            {status && this.renderDynamicFormParts(this.state.selectedOption)}
            <Button type="submit" className="athena-primary">Save & Continue</Button>
          </Form>
        </Col>
      </div>
    );
  }
}

const UserEntryForm = compose(
  withRouter,
  withFirebase,
)(UserEntry);

export default UserEntryForm;
