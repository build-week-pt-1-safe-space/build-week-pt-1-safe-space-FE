import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";

import "../styles/shared";

import { FormInput, Button } from "../styles/shared";

const LoginContainer = styled.div`
  background-color: #2ab7a8;
  width: 60%;
  max-width: 500px;
  margin: 70px auto 0 auto;
  color: #47525e;
  padding-bottom: 20px;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const SignIn = styled.h2`
  font-size: 36px;
  text-align: center;
  font-family: "Lato", sans-serif;
  padding-top: 30px;
`;

const SignInText = styled.p`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #47525e;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const NeedSignUp = styled(SignInText)`
  font-size: 26px;
  margin: -2px 0;
`;

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    isLoading: false
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <LoginContainer>
        <SignIn>Sign In</SignIn>
        <SignInText>Please sign in to your account below.</SignInText>
        <SignInForm onSubmit={this.login}>
          <FormInput
            onChange={this.handleChanges}
            value={this.state.email}
            placeholder="Email"
            type="email"
            name="email"
          />
          <FormInput
            onChange={this.handleChanges}
            value={this.state.password}
            placeholder="Password"
            type="password"
            name="password"
          />
          <Button>Sign In</Button>
        </SignInForm>
        <SignInText>Forgot your password?</SignInText>
        <NeedSignUp>Don't Have An Account?</NeedSignUp>
        <Link to="/signup">
          <SignInText>Sign Up Here</SignInText>
        </Link>
      </LoginContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    isLoading: state.isLoading,
    error: state.error,
    isLoggedIn: state.isLoggedIn
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);
