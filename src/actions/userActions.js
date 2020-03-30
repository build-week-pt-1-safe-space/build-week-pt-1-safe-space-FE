import axios from 'axios';

import {baseURL} from './index';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const signup = creds => dispatch => {
	const user = {
		first_name: creds.name,
		last_name: creds.name,
		email: creds.email,
		password: creds.password,
		phone: creds.phoneNumber,
	};
	dispatch({ type: SIGNUP_START });
	axios
		.post(`${baseURL}/api/auth/register`, user)
		.then(res => {
			localStorage.setItem('token', res.data.token);
			dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
			console.log('response', res);
		})
		.catch(err => {
			dispatch({ type: SIGNUP_FAIL, payload: err });
		});
};

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	axios
		.post(`${baseURL}/api/auth/login`, creds)
		.then(res => {
			localStorage.setItem('token', res.data.token);
			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		});
};

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';
