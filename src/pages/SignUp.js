import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
  Container, Col, Form, FormFeedback,
  FormGroup, Label, Input,
  Button
} from 'reactstrap';
import * as ROUTES from '../constants/routes.js';
import { withFirebase } from '../firebase';
import '../css/Login.css';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  userId: '',
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password } = this.state;

    this.props.firebase
     .doCreateUserWithEmailAndPassword(email, password)
     .then(authUser => {
       this.setState({ ...INITIAL_STATE });
       this.setState({ userId: authUser })
       return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email
          });
     })
     .then(() => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push(ROUTES.USER_ENTRY);
     })
     .catch(error => {
       this.setState({ error });
     });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      password,
      error
    } = this.state;

    const props = this.props;

    return (
      <Col md={{ size: 6, offset: 3 }} className="sign-up">
        <h2>Sign Up</h2>
        <h5>if you already have an account with us, click "<a href={ROUTES.SIGN_IN}>sign in</a>"</h5>
        <Form className="form" onSubmit={this.onSubmit}>
          {error && <p invalid id="errorMessage">{error.message}</p>}
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                onChange={this.onChange}
                value={username}
                id="username"
                placeholder="athenagirl95"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                onChange={this.onChange}
                value={email}
                id="exampleEmail"
                placeholder="athena_girl@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={this.onChange}
                value={password}
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button type="submit" className="athena-primary">Sign Up</Button>
        </Form>
      </Col>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpForm;
