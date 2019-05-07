import React from "react";
import Nav from "./Components/Nav";
import SignUpView from "./views/SignUpView";
import LoginView from "./views/LoginView";
import Footer from "./Components/Footer";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Components/Dashboard";
import { login } from "./actions/userActions";
import { fetchMessages } from "./actions/index";

import "./App.css";

import MessageForm from "./Components/MessageForm";

class App extends React.Component {
  componentDidMount() {
    this.props.login({ email: this.props.email, password: "scamm" });
    this.props.fetchMessages(this.props.id);
  }

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
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { login, fetchMessages }
)(App);
