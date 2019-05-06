import React from 'react';
import Delete from '../assets/delete.png';
import Edit from '../assets/edit.png';
import styled from 'styled-components';

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

const EditForm = styled.form`
	min-width: 100%;
`

class Message extends React.Component {

	state={
		editing: false,
		message: "test message"
	}

	handleChanges = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	toggleEdit = e => {
		this.setState({editing: !this.state.editing})
	}

	render() {
		return (
			<MessageContainer>
				<IconContainer>
					<Icon src={Delete} alt="delete message" />
					<Icon src={Edit} alt="edit message" onClick={this.toggleEdit} />
				</IconContainer>
				{this.state.editing ? <EditForm onSubmit={this.toggleEdit}><MessageTextInput value={this.state.message} name="message" onChange={this.handleChanges}/></EditForm> : <MessageText>{this.state.message}</MessageText>}
				
				
			</MessageContainer>
		);
	}
}

export default Message;