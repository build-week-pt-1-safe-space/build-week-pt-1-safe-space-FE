import React from 'react';
import Nav from './components/Nav';
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';

<<<<<<< HEAD
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Nav isLoggedIn={this.props.isLoggedIn} />
				<Route
					exact
					path="/"
					render={props =>
						this.props.isLoggedIn === true ? (
							<Dashboard {...props} />
						) : (
							<LoginView {...props} />
						)
					}
				/>
				<Route path="/signup" component={SignUpView} />
				<Route path="/login" component={LoginView} />
				<Route path="/dashboard" component={Dashboard} />
				<Footer />
			</div>
		);
	}
=======
import "./App.css";

import MessageForm from "./components/MessageForm";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Nav isLoggedIn={this.props.isLoggedIn} />
        <Route
          exact
          path="/"
          render={props =>
            this.props.isLoggedIn === true ? (
              <Dashboard {...props} />
            ) : (
              <LoginView {...props} />
            )
          }
        />
        <Route path="/signup" component={SignUpView} />
        <Route path="/login" component={LoginView} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/MessageForm" component={MessageForm} />

        <Footer />
      </div>
    );
  }
>>>>>>> 41054b5e0f4f867b2d3c8fde08f7e380668253d2
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn,
	};
};

export default connect(
	mapStateToProps,
	{},
)(App);
