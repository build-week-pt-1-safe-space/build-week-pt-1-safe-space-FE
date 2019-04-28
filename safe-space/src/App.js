import React from 'react';
import Nav from './components/Nav';
import SignUpView from './views/SignUpView';
import {Route} from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route path="/signup" component={SignUpView} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
