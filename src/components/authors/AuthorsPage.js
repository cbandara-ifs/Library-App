import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authorActions from "../../redux/actions/authorActions";

export default function AuthorsPage() {
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(authorActions.loadAuthors()).catch(error => {
        alert("loading courses failed " + error);
      });
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
