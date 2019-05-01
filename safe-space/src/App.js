<<<<<<< HEAD
import React from 'react';
import Nav from './components/Nav';
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView'
import Footer from './components/Footer';
import {Route} from 'react-router-dom';
=======
import React from "react";
import Nav from "./Components/Nav";
import SignUpView from "./Views/SignUpView";
import LoginView from "./Views/LoginView";
import { Route } from "react-router-dom";
// import { BrowserRouter as Router, Link } from "react-router-dom";
>>>>>>> 0487e535e7afb54b6107ac5a3621670f806af152

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/signup" component={SignUpView} />
      <Route path="/login" component={LoginView} />
      <Footer />
    </div>
  );
}

export default App;
