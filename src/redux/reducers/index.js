import { combineReducers } from "redux";
import authors from "./authorReducer";
import books from "./bookReducers";

const rootReducer = combineReducers({
  authors,
  books
});

export default rootReducer;
