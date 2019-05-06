import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage } from "../actions";

class MessageForm extends Component {
  state = {
    message: {
      body: "",
      user_id: ""
    }
  };

  //   addMessage = e => {
  //     e.preventDefault();
  //     this.props.addMessage({ text: this.state.text });
  //     this.setState({
  //       ...this.state,
  //       text: ""
  //     });
  //   };

  componentDidMount() {
    this.setState({
      message: {
        user_id: this.props.userId
      }
    });
  }

  handleAddMessage = e => {
    e.preventDefault();
    this.props.addMessage(this.state.message);
    this.setState({
      message: ""
    });
    this.props.history.push("/dashboard");
  };

  handleInputChange = e => {
    this.setState({
      message: {
        ...this.state.message,
        body: e.target.value
      }
    });
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleAddMessage} className="">
            <input
              type="text"
              value={this.state.message.body}
              onChange={this.handleInputChange}
              name="message"
            />
            <button type="submit" className="formButton">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
    token: state.serverToken,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addMessage }
)(MessageForm);