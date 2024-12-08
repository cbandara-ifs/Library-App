import * as actionTypes from "./actionTypes";
import * as bookApi from "../../api/bookApi";

export function createBook(book) {
  return { type: actionTypes.CREATE_BOOK, book };
}

export function loadBooksSuccess(books) {
  return { type: actionTypes.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooks() {
  return function (dispatch) {
    return bookApi
      .getbooks()
      .then(books => {
        dispatch(loadBooksSuccess(books));
      })
      .catch(error => {
        throw error;
      });
  };
}
