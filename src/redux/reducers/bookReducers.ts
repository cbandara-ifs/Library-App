import { Book } from "../../lib/interfaces";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

type ACTIONTYPE =
  | { type: "CREATE_BOOK"; book: Book }
  | { type: "LOAD_BOOKS_SUCCESS"; books: Book[] }
  | { type: "UPDATE_BOOKS_SUCCESS"; book: Book }
  | { type: "CREATE_BOOKS_SUCCESS"; book: Book }
  | { type: "DELETE_BOOK_OPRIMISTIC"; book: Book };
  
export default function bookReducer(state = initialState.books, action : ACTIONTYPE) {
  switch (action.type) {
    case types.CREATE_BOOK:
      return [...state, { ...action.book }];
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;
    case types.UPDATE_BOOKS_SUCCESS:
      return state.map((book : Book) =>
        book.id === action.book.id ? action.book : book
      );
    case types.CREATE_BOOKS_SUCCESS:
      return [...state, { ...action.book }];
    case types.DELETE_BOOK_OPRIMISTIC:
      return state.filter((book : Book) => book.id !== action.book.id);
    default:
      return state;
  }
}
