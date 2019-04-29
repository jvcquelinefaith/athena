import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
  Container, Col, Form, FormFeedback,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { withFirebase } from '../firebase';
import * as ROUTES from '../constants/routes.js';
import '../css/Login.css';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.USER_ENTRY);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Col md={{ size: 6, offset: 3 }} className="sign-in">
        <h2>Sign In</h2>
        <h5>if you dont't have an account yet, click "<a href={ROUTES.SIGN_UP}>sign up</a>"</h5>
        <Form className="form" onSubmit={this.onSubmit}>
          {error && <p>{error.message}</p>}
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </FormGroup>
          </Col>
          <Button disabled={isInvalid} className="athena-primary" type="submit">
            Sign In
          </Button>
        </Form>
      </Col>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInForm;
