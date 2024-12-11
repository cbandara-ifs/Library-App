import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function bookReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.CREATE_BOOK:
      return [...state, { ...action.book }];
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;
    case types.UPDATE_BOOKS_SUCCESS:
      return state.map(book =>
        book.id === action.book.id ? action.book : book
      );
    case types.CREATE_BOOKS_SUCCESS:
      return [...state, { ...action.book }];
    case types.DELETE_BOOK_OPRIMISTIC:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
}
