import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import '../styles/shared';

import {FormInput, Button} from '../styles/shared';

const LoginContainer = styled.div`
    background-color: #2AB7A8;
    width: 60%;
    max-width: 500px;
    margin: 70px auto 0 auto;
    color: #47525E;
    padding-bottom: 20px;
`

const SignIn = styled.h2`
    font-size: 36px;
    text-align: center;
    font-family: 'Lato', sans-serif;
    padding-top: 30px;
`

const SignInText = styled.p`
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #47525E;
`

const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`

const NeedSignUp = styled(SignInText)`
    font-size: 26px;
    margin: -2px 0;
`

class Login extends React.Component{

    state={
        email: "",
        password: "",
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return(
            <LoginContainer>
                <SignIn>Sign In</SignIn>
                <SignInText>Please sign in to your account below.</SignInText>
                <SignInForm>
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
                <Link to="/signup"><SignInText>Sign Up Here</SignInText></Link>
            </LoginContainer>
        )
    }
}

export default Login;