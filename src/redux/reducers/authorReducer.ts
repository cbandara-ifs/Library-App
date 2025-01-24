import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { Author } from "../../lib/interfaces";

type ACTIONTYPE =
  | { type: "CREATE_AUTHOR"; author: Author }
  | { type: "LOAD_AUTHORS_SUCCESS"; authors: Author[] };

export default function authorReducer(state = initialState.authors, action : ACTIONTYPE) {
  switch (action.type) {
    case types.CREATE_AUTHOR:
      return [...state, { ...action.author }];
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
