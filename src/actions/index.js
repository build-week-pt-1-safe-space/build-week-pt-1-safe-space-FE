import axios from 'axios';

// export const SIGNUP_START = "SIGNUP_START";
// export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
// export const SIGNUP_FAIL = "SIGNUP_FAIL";

// export const signup = creds => dispatch => {
//   console.log(creds);
//   const user = {
//     first_name: creds.name,
//     last_name: creds.name,
//     email: creds.email,
//     password: creds.password,
//     phone: creds.phoneNumber
//   };
//   dispatch({ type: SIGNUP_START });
//   axios
//     .post(`https://safe-space-backend.herokuapp.com/api/register`, user)
//     .then(res => {
//       localStorage.setItem("token", res.data.token);
//       dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
//       console.log("response", res);
//     })
//     .catch(err => {
//       dispatch({ type: SIGNUP_FAIL, payload: err });
//     });
// };

// export const LOGIN_START = "LOGIN_START";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAIL = "LOGIN_FAIL";

// export const login = creds => dispatch => {
//   dispatch({ type: LOGIN_START });
//   axios
//     .post(`https://safe-space-backend.herokuapp.com/api/login`, creds)
//     .then(res => {
//       localStorage.setItem("token", res.data.token);
//       dispatch({ type: LOGIN_SUCCESS, payload: res.data });
//     });
// };

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';
export const baseURL='https://safe-space-api.herokuapp.com'

export const fetchMessages = userid => dispatch => {
	dispatch({ type: FETCHING_START });
	axios
		.get(`${baseURL}/api/messages/${userid}`, {
			headers: { Authorization: localStorage.getItem('token') },
		})
		.then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: FETCHING_FAIL, payload: err }));
};

export const ADDING_START = 'ADDING_START';
export const ADDED_SUCCESS = 'ADDED_SUCCESS';
export const ADDING_FAIL = 'ADDING_FAIL';

export const addMessage = creds => dispatch => {
	console.log(creds);
	dispatch({ type: ADDING_START });
	axios
		.post(`${baseURL}/api/messages`, creds, {
			headers: { Authorization: localStorage.getItem('token') },
		})
		.then(res => dispatch({ type: ADDED_SUCCESS, payload: res.data[0] }))
		.catch(err => dispatch({ type: ADDING_FAIL, payload: err }));
};

export const UPDATING_START = 'UPDATE_START';
export const UPDATED_SUCCESS = 'UPDATED_SUCCESS';
export const UPDATING_FAIL = 'UPDATING_FAIL';

export const updateMessage = message => dispatch => {
	console.log('Actions message update', message);
	dispatch({ type: UPDATING_START });
	axios
		.put(
			`${baseURL}/api/messages/${message.id}`,
			message,
			{
				headers: { Authorization: localStorage.getItem('token') },
			},
		)
		.then(res => dispatch({ type: UPDATED_SUCCESS, payload: res.data[0] }))
		.catch(err => dispatch({ type: UPDATING_FAIL, payload: err }));
};

export const DELETING_START = 'DELETING_START';
export const DELETED_SUCCESS = 'DELETED_SUCCESS';
export const DELETING_FAIL = 'DELETING_FAIL';

export const deleteMessage = id => dispatch => {
	dispatch({ type: DELETING_START });
	axios
		.delete(`${baseURL}/api/messages/${id}`, {
			headers: { Authorization: localStorage.getItem('token') },
		})
		.then(res => dispatch({ type: DELETED_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: UPDATING_FAIL, payload: err }));
};
