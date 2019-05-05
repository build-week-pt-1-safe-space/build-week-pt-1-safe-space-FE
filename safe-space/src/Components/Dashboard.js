import React from 'react';
import Message from './Message';
import styled from 'styled-components';
import {connect} from 'react-redux';

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
	render() {
		return (
			<div>
				<WelcomeText>{this.props.name}!</WelcomeText>
				<NewMessage>Add New Message</NewMessage>
				<MessagesContainer>
					<Message />
				</MessagesContainer>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return{
        name: state.name
    }
}

export default connect(mapStateToProps, {})(Dashboard);