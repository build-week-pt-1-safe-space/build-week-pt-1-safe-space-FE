import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import axios from "axios";
<<<<<<< HEAD
import { logger } from "./logger";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./reducers";
=======
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './Reducers';
>>>>>>> d0b885f18df33c2a02d50341baa553956f1db9f3

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	rootElement,
);
