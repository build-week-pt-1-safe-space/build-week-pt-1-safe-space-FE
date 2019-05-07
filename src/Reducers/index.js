import { combineReducers } from './node_modules/redux';
import userReducer from './userReducer';
import messageReducer from './messageReducer';

export default combineReducers({
	userReducer,
	messageReducer,
});
