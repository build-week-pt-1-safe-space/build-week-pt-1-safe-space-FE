import axios from 'axios';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

const url = 'https://safe-space-backend.herokuapp.com';

export const signup = creds => dispatch => {
	console.log(creds);
	// let names = creds
	const user = {
		first_name: creds.name,
		last_name: creds.name,
		email: creds.email,
		password: creds.password,
		phone: creds.phoneNumber,
	};
	dispatch({ type: SIGNUP_START });
	axios
		.post(`${url}/api/register`, user)
		.then(res => {
			console.log('response', res);
			localStorage.setItem('token', res.data.payload);
			dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
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
	axios.post(`${url}/api/login`, creds).then(res => {
		dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
	});
};

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';

export const fetchMessages = (userid, creds) => dispatch => {
	dispatch({ type: FETCHING_START });
	axios
		.get(`${url}/api/messages/${userid}`, creds, {
			headers: { Authorization: localStorage.getItem('token') },
		})
		.then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: FETCHING_FAIL, payload: err }));
};

export const ADDING_START = 'ADDING_START';
export const ADDED_SUCCESS = 'ADDED_SUCCES';
export const ADDING_FAIL = 'ADDING_FAIL';

export const addMessage = (userid, creds) => dispatch => {
	dispatch({ type: ADDING_START });
	axios
		.post(`${url}/api/messages`, creds, {
			headers: { Authorization: localStorage.getItem('token') },
		})
		.then(res => dispatch({ type: ADDED_SUCCESS, payload: res.data }))
		.then(() => fetchMessages(userid, creds)(dispatch))
		.catch(err => dispatch({ type: ADDING_FAIL, payload: err }));
};

export const UPDATING_START = 'UPDATE_START';
export const UPDATED_SUCCESS = 'UPDATED_SUCCESS';
export const UPDATING_FAIL = 'UPDATING_FAIL';

export const updateMessage = (userid, creds) => dispatch => {
	dispatch({ type: UPDATING_START });
	axios
		.put(`${url}/api/users/${userid}/messages`, creds, {
			headers: { Authorization: localStorage.getItem('token') },
		})
		.then(res => dispatch({ type: UPDATED_SUCCESS, payload: res.data }))
		.then(() => fetchMessages(creds, userid)(dispatch))
		.catch(err => dispatch({ type: UPDATING_FAIL, payload: err }));
};

export const DELETING_START = 'DELETING_START';
export const DELETED_SUCCESS = 'DELETED_SUCCESS';
export const DELETING_FAIL = 'DELETING_FAIL';

export const deleteMessage = (userid, creds) => dispatch => {
	dispatch({ type: DELETING_START });
	axios
		.delete(`${url}/api/users/${userid}/messages`, creds, {
			headers: { Authorization: localStorage.getItem('token') },
		})
		.then(res => dispatch({ type: DELETED_SUCCESS, payload: res.data }))
		.then(() => fetchMessages(creds, userid)(dispatch))
		.catch(err => dispatch({ type: UPDATING_FAIL, payload: err }));
};
