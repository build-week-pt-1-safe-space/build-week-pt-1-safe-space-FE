import { combineReducers } from "redux";
import userReducer from "./userReducer";
import messageReducer from "./messageReducer";

export default combineReducers({
  userReducer,
  messageReducer
});
