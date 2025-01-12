import * as actionTypes from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiErrorCall } from "./apiStatusAction";

export function createAuthor(author) {
  return { type: actionTypes.CREATE_AUTHOR, author };
}

export function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then(res => {
        dispatch(loadAuthorsSuccess(res.data));
      })
      .catch(error => {
        dispatch(apiErrorCall(error));
        throw error;
      });
  };
}
