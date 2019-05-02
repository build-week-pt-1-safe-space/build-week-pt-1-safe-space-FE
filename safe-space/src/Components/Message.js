import React from 'react';
import Delete from '../assets/delete.png';
import Edit from '../assets/edit.png';
import styled from 'styled-components';

const MessageContainer = styled.div`
    display: flex;
    margin: 20px;
    padding-top: 10px;
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Icon = styled.img`
    height: 44px;
    width: 44px;
    cursor: pointer;
    
    @media(max-width: 500px){
        width: 35px;
        height: 35px;
    }
`

const MessageText = styled.div`
    background-color: #13CE66;
    width: 90%;
    min-height: 95px;
    margin-left: 20px;
    font-size: 25px;
    padding: 10px;

    @media(max-width: 500px){
        margin-left: 10px;
        min-height: 75px;
        font-size: 18px;
    }
`

class Message extends React.Component{
    render(){
        return(
            <MessageContainer>
                <IconContainer>
                <Icon src={Delete} alt="delete message" />
                <Icon src={Edit} alt="edit message" />
                </IconContainer>
                <MessageText>This is a message.</MessageText>
            </MessageContainer>
        )
    }
}

export default Message;