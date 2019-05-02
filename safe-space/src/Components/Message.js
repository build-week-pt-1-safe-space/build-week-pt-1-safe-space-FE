import React from "./node_modules/react";
import Delete from "../assets/delete.png";
import Edit from "../assets/edit.png";
import styled from "./node_modules/styled-components";

const MessageContainer = styled.div`
  display: flex;
  margin: 20px;
  padding-top: 10px;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  height: 44px;
  width: 44px;
  cursor: pointer;
`;

const MessageText = styled.div`
  background-color: #13ce66;
  width: 90%;
  height: 95px;
  margin-left: 20px;
  font-size: 25px;
  padding: 10px;
`;

class Message extends React.Component {
  render() {
    return (
      <MessageContainer>
        <IconContainer>
          <Icon src={Delete} alt="delete message" />
          <Icon src={Edit} alt="edit message" />
        </IconContainer>
        <MessageText>This is a message.</MessageText>
      </MessageContainer>
    );
  }
}

export default Message;
