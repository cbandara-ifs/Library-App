import * as actionTypes from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { Dispatch, Action } from "redux";
import { Author } from "../../lib/interfaces";
import { beginApiCall, apiErrorCall } from "./apiStatusAction";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore.dev";
import { createAuthor, loadAuthorsSuccess } from "../slices/authorSlice";

type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export function loadAuthors(): AppThunk {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(beginApiCall());
    try {
      const res = await authorApi.getAuthors();
      dispatch(loadAuthorsSuccess(res.data));
    } catch (error: unknown) {
      dispatch(apiErrorCall());
      throw error;
    }
  };
}
