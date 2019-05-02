import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAIL,
  ADDING_START,
  ADDED_SUCCESS,
  ADDING_FAIL,
  UPDATING_START,
  UPDATED_SUCCESS,
  UPDATING_FAIL,
  DELETING_START,
  DELETED_SUCCESS,
  DELETING_FAIL
} from "../actions";

const initialState = {
  name: "",
  isLoggedIn: false,
  isLoading: false,
  userid: "",
  token: localStorage.getItem("token"),
  messages: [],
  error: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        name: action.payload.name,
        token: action.payload.token,
        userid: action.payload.id,
        error: ""
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload
      };
    case SIGNUP_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: ""
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case FETCHING_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: action.payload,
        error: ""
      };
    case FETCHING_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADDING_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case ADDED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    case ADDING_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETING_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case DELETED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    case DELETING_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case UPDATING_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case UPDATED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    case UPDATING_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
