import React from 'react';
import styled from 'styled-components';

import {BlueText, FormInput, Button} from '../styles/shared'

const SignUpContainer = styled.div`
    color: white;
    font-family: 'Montserrat', sans-serif;
    padding-bottom: 10px;
`

const MainHeading = styled.h1`
    font-size: 50px;
    padding-top: 20px;
    text-align: center;
`

const SecondHeading = styled.h3`
    font-size: 22px;
    text-align: center;
`

const ThirdHeading = styled.h4`
    font-size: 24px;
    text-align: center;
`

const SignUpForm = styled.form`
    margin: 10px auto;
    background-color: #2AB7A8;
    width: 60%;
    height: 300px;
`

const FormHeading = styled.h2`
    font-size: 35px;
    text-align: center;
    padding-top: 30px;
`


const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

class SignUp extends React.Component{

    state = {
        name: "",
        phoneNumber: "",
        email: "",
        password: ""
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return(
            <SignUpContainer>
                <MainHeading>Safe <BlueText>Space</BlueText></MainHeading>
                <SecondHeading>You're already <BlueText>Beautiful.</BlueText></SecondHeading>
                <ThirdHeading>Your new <BlueText>Journey</BlueText> begins here.</ThirdHeading>
                <SignUpForm>
                    <FormHeading>Getting Better Begins Now</FormHeading>
                    <FormContainer>
                    <FormInput 
                        onChange={this.handleChanges} 
                        value={this.state.name} 
                        placeholder="Name" 
                        name="name"
                        type="text"
                    />
                    <FormInput 
                        onChange={this.handleChanges}
                        value={this.state.phoneNumber}
                        placeholder="Phone Number"
                        name="phoneNumber"
                        type="tel"
                    />
                    <FormInput 
                        onChange={this.handleChanges}
                        value={this.state.email}
                        placeholder="Email"
                        name="email"
                        type="email"
                    />
                    <FormInput 
                        onChange={this.handleChanges}
                        value={this.state.password}
                        placeholder="Password"
                        name="password"
                        type="password"
                    />
                    </FormContainer>
                    <Button>Sign Up</Button>
                </SignUpForm>
            </SignUpContainer>
        )
    }
}

export default SignUp;