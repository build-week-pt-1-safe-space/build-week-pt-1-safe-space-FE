import React, { Component } from "react";
import Delete from "../assets/delete.png";
import Edit from "../assets/edit.png";
import styled from "styled-components";

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

  @media (max-width: 500px) {
    width: 35px;
    height: 35px;
  }
`;

const EditForm = styled.form`
  min-width: 100%;
`;

const MessageTextInput = styled.input`
  background-color: #13ce66;
  width: 90%;
  min-height: 95px;
  margin-left: 20px;
  font-size: 25px;
  padding: 10px;
  border: none;
  @media (max-width: 500px) {
    margin-left: 10px;
    min-height: 75px;
    font-size: 18px;
  }
`;

const MessageText = styled.div`
  background-color: #13ce66;
  width: 90%;
  min-height: 95px;
  margin-left: 20px;
  font-size: 25px;
  padding: 10px;

  @media (max-width: 500px) {
    margin-left: 10px;
    min-height: 75px;
    font-size: 18px;
  }
`;

class Message extends Component {
  state = {
    editing: false,
    updatedMessage: ""
  };

  submit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEdit = e => {
    this.setState({ editing: !this.state.editing });
  };

  handleUpdatedMessage = (e, message) => {
    e.preventDefault();
    let updateMessage = {
      id: message.id,
      user_id: message.user_id,
      body: this.state.updatedMessage
    };
    this.props.update(updateMessage);
    this.setState({
      ...this.state,
      updatedMessage: "",
      editing: false
    });
  };

  render() {
    return (
      <MessageContainer>
        <IconContainer>
          <Icon
            onClick={() => this.props.delete(this.props.message.id)}
            src={Delete}
            alt="delete message"
          />
          <Icon onClick={this.toggleEdit} src={Edit} alt="edit message" />
        </IconContainer>
        {this.state.editing ? (
          <EditForm
            onSubmit={e => this.handleUpdatedMessage(e, this.props.message)}
          >
            <MessageTextInput
              value={this.state.message}
              name="updatedMessage"
              onChange={this.handleChanges}
            />
          </EditForm>
        ) : (
          <MessageText>{this.props.message.body}</MessageText>
        )}
      </MessageContainer>
    );
  }
}

export default Message;
