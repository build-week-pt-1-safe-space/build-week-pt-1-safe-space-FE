import React from 'react';
import Message from './Message';
import styled from 'styled-components';
// import MessageForm from "./MessageForm";
import {
	addMessage,
	updateMessage,
	deleteMessage,
	fetchMessages,
} from '../actions';
import { login } from '../actions/userActions';

import { connect } from 'react-redux';

const WelcomeText = styled.h2`
	color: #2ab7a8;
	font-size: 40px;
	text-align: center;
	font-weight: bold;
	font-family: 'Lato', sans-serif;
	margin-bottom: 25px;
`;

const NewMessage = styled.button`
	background-color: #13ce66;
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

	@media (max-width: 500px) {
		width: 200px;
		height: 50px;
		font-size: 18px;
	}
`;

const MessagesContainer = styled.div`
	background-color: rgba(42, 183, 168, 0.64);
	border-radius: 70px;
	max-width: 800px;
	width: 80%;
	margin: 0 auto;
	padding: 20px 0;
	@media (max-width: 500px) {
		width: 90%;
		padding: 10px 0;
		border-radius: 50px;
	}
`;

class Dashboard extends React.Component {
	state = {
		message: { content: '' },
	};

	addMessage = e => {
		e.preventDefault();
		this.props.addMessage(this.state.message);
	};

	//   addMessage = e => {
	//     e.preventDefault();
	//     this.props.addMessage({ text: this.state.text });
	//     this.setState({
	//       ...this.state,
	//       text: ""
	//     });
	//   };

	deleteMessage = (e, id) => {
		e.preventDefault();
		this.props.deleteMessage(id, this.props.id, this.props.token);
	};

	updateMessage = (id, e) => {
		this.props.updateMessage(id, this.props.id, e, this.props.token);
	};
	render() {
		return (
			<div>
				<WelcomeText>{this.props.name && this.props.name}</WelcomeText>
				<NewMessage onClick={() => this.props.history.push('/MessageForm')}>
					Add New Message
				</NewMessage>
				<MessagesContainer>
					{this.props.messages &&
						this.props.messages.map(message => (
							<Message
								update={this.props.updateMessage}
								delete={this.props.deleteMessage}
								key={message.id}
								message={message}
							/>
						))}
				</MessagesContainer>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		messages: state.messageReducer.messages,
		error: state.error,
		userId: state.userReducer.user && state.userReducer.user.user_id,
		token: state.userReducer.user && state.userReducer.user.token,
		name: state.userReducer.user && state.userReducer.user.message,
		email: state.userReducer.user && state.userReducer.user.email,
	};
};

export default connect(
	mapStateToProps,
	{ addMessage, updateMessage, deleteMessage, fetchMessages, login },
)(Dashboard);
