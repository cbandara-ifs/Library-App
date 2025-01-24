import * as types from "../actions/actionTypes";
import initialState from "./initialState";

type ACTIONTYPE =
  | { type: "BEGIN_API_CALL"}
  | { type: "API_ERROR"}
  | { type: "LOAD_BOOKS_SUCCESS"}
  | { type: "UPDATE_BOOKS_SUCCESS"}
  | { type: "CREATE_BOOKS_SUCCESS"};

function actionTypeEndsInSuccess(type : string) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action : ACTIONTYPE
) {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
}
