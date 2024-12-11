import * as actionTypes from "./actionTypes";
import * as bookApi from "../../api/bookApi";
import { beginApiCall, apiErrorCall } from "./apiStatusAction";

export function createBook(book) {
  return { type: actionTypes.CREATE_BOOK, book };
}

export function loadBooksSuccess(books) {
  return { type: actionTypes.LOAD_BOOKS_SUCCESS, books };
}

export function updateBooksSuccess(book) {
  return { type: actionTypes.UPDATE_BOOKS_SUCCESS, book };
}

export function createBooksSuccess(book) {
  return { type: actionTypes.CREATE_BOOKS_SUCCESS, book };
}

export function deleteBookOprimistic(book) {
  return { type: actionTypes.DELETE_BOOK_OPRIMISTIC, book };
}

export function loadBooks() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return bookApi
      .getbooks()
      .then(books => {
        dispatch(loadBooksSuccess(books));
      })
      .catch(error => {
        dispatch(apiErrorCall(error));
        throw error;
      });
  };
}

export function saveBook(book) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return bookApi
      .saveBook(book)
      .then(savedBook => {
        book.id
          ? dispatch(updateBooksSuccess(savedBook))
          : dispatch(createBooksSuccess(savedBook));
      })
      .catch(error => {
        dispatch(apiErrorCall(error));
        throw error;
      });
  };
}

export function deleteBook(book) {
  return function (dispatch) {
    dispatch(deleteBookOprimistic(book));
    return bookApi.deleteBook(book.id);
  };
}
