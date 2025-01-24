import * as actionTypes from "./actionTypes";
import * as bookApi from "../../api/bookApi";
import { Dispatch, Action } from 'redux';
import { Book } from "../../lib/interfaces";
import { beginApiCall, apiErrorCall } from "./apiStatusAction";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore.dev";

type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

type ActionType = 
  { type: string; book: Book } |
  { type: string; books: Book[] };

export function createBook(book : Book) : ActionType {
  return { type: actionTypes.CREATE_BOOK, book };
}

export function loadBooksSuccess(books: Book[]): ActionType {
  return { type: actionTypes.LOAD_BOOKS_SUCCESS, books };
}

export function updateBooksSuccess(book : Book) : ActionType {
  return { type: actionTypes.UPDATE_BOOKS_SUCCESS, book };
}

export function createBooksSuccess(book : Book) : ActionType {
  return { type: actionTypes.CREATE_BOOKS_SUCCESS, book };
}

export function deleteBookOprimistic(book : Book) : ActionType {
  return { type: actionTypes.DELETE_BOOK_OPRIMISTIC, book };
}

export function loadBooks() : AppThunk{
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(beginApiCall());
    try{
      const res = await bookApi.getbooks();
      dispatch(loadBooksSuccess(res.data));
    }
    catch(error : unknown)
    {
      dispatch(apiErrorCall());
      throw error;
    }
  };
}

export function saveBook(book : Book) : AppThunk{
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(beginApiCall());
    try{
      const res = await bookApi.saveBook(book);
      book.id ? dispatch(updateBooksSuccess(res.data))
              : dispatch(createBooksSuccess(res.data)); 
    }
    catch(error : unknown){
      dispatch(apiErrorCall());
      throw error;
    }
  };
}

export function deleteBook(book : Book) : AppThunk{
  return (dispatch: Dispatch) => {
    dispatch(deleteBookOprimistic(book));
    try{
      bookApi.deleteBook(book.id);
    }
    catch(error : unknown){
      throw error;
    }
  };
}
