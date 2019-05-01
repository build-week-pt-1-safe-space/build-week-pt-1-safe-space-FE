import React from 'react';
import Nav from './components/Nav';
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView'
import Footer from './components/Footer';
import {Route} from 'react-router-dom';
import { connect } from "react-redux";
import Dashboard from './components/Dashboard'

import "./App.css";

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Nav isLoggedIn={this.props.isLoggedIn}/>
      <Route exact path='/' render={props =>(
          this.props.loggedIn === true 
          ? <Dashboard {...props}/>
          : <LoginView {...props}/>
        )} />
      <Route path="/signup" component={SignUpView} />
      <Route path="/login" component={LoginView} />
      <Route path="/dashboard" component={Dashboard} />
      <Footer />
    </div>
  )}
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(
  mapStateToProps,
  {  }
)(App);

