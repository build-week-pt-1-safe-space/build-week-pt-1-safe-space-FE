import React from 'react';
import Message from './Message';
import styled from 'styled-components';

const WelcomeText = styled.h2`
    color: #2AB7A8;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    font-family: "Lato", sans-serif;
    margin-bottom: 25px;
`

const NewMessage = styled.button`
    background-color: #13CE66;
    border-radius: 37px;
    width: 279px;
    height: 70px;
    border: none;
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin: 0 auto 25px auto;
    display: block;
    cursor: pointer;
`

const MessagesContainer = styled.div`
    background-color: rgba(42, 183, 168, 0.64);
    border-radius: 70px;
    max-width: 800px;
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
`

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <WelcomeText>Welcome User!</WelcomeText>
                <NewMessage>Add New Message</NewMessage>
                <MessagesContainer>
                    <Message />
                </MessagesContainer>
            </div>
        )
    }
}

export default Dashboard;