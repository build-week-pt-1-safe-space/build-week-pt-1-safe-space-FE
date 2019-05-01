import React from "react";
import Nav from "./Components/Nav";
import SignUpView from "./Views/SignUpView";
import LoginView from "./Views/LoginView";
import { Route } from "react-router-dom";
// import { BrowserRouter as Router, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/signup" component={SignUpView} />
      <Route path="/login" component={LoginView} />
    </div>
  );
}

export default App;
