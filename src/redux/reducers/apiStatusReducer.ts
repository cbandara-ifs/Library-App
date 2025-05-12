import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type: string) {
  return type.endsWith("_SUCCESS") || type.endsWith("Success");
}

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action: { type: string }
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
