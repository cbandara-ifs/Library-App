import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Author } from "../../lib/interfaces";

interface AuthorState {
  authors: Author[];
}

const initialState: AuthorState = {
  authors: []
};

const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    createAuthor(state, action: PayloadAction<Author>) {
      state.authors.push(action.payload);
    },
    loadAuthorsSuccess(state, action: PayloadAction<Author[]>) {
      state.authors = action.payload;
    }
  }
});

export const { createAuthor, loadAuthorsSuccess } = authorSlice.actions;
export default authorSlice.reducer;
