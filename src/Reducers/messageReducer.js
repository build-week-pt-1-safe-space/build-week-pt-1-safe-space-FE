import {
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
  token: null,
  messages: [],
  error: ""
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
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
        messages: [...state.messages, action.payload],
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
        messages: [
          ...state.messages.filter(message =>
            message.id === action.payload.id ? action.payload : message
          )
        ],
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
export default messageReducer;
