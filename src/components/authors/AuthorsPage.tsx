import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authorActions from "../../redux/actions/authorActions";
import { RootState } from "../../redux/configureStore.dev";
import { AppDispatch } from "../../redux/configureStore.dev";

export default function AuthorsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const authors = useSelector((state: RootState) => state.authors.authors);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(authorActions.loadAuthors());
    }
  }, [dispatch, authors]);

  return (
    <>
      {authors.map(author => (
        <div key={author.firstName}>{author.firstName}</div>
      ))}
    </>
  );
}
