import { combineReducers } from "redux";
import authors from "./authorReducer";
import books from "./bookReducers";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  authors,
  books,
  apiCallsInProgress
});

export default rootReducer;
