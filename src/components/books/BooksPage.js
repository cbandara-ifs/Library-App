import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import BookList from "./BookList";
import Spinner from "../common/Spinner";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function BooksPage() {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors);
  const books = useSelector(state =>
    state.authors.length === 0
      ? []
      : state.books.map(book => ({
          ...book,
          authorName:
            state.authors.find(a => a.id === book.authorId)?.firstName ||
            "unknown"
        }))
  );
  const apiCalls = useSelector(state => state.apiCallsInProgress);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(authorActions.loadAuthors()).catch(error => {
        alert("Loading authors failed" + error);
      });
    }

    if (books.length === 0) {
      dispatch(bookActions.loadBooks()).catch(error => {
        alert("Load books failed" + error);
      });
    }
  }, [dispatch]);

  const handleOnClick = () => {
    setRedirectToAddCoursePage(true);
  };

  const handleOnDelete = async book => {
    toast.success("Book Deleted");
    try {
      await dispatch(bookActions.deleteBook(book));
    } catch (error) {
      toast.error("Book Delete Failed" + error.message, { autoClose: false });
    }
  };

  return (
    <>
      {redirectToAddCoursePage && <Navigate to="/book" />}
      <h2>Books</h2>
      {apiCalls > 0 ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-book"
            onClick={handleOnClick}
          >
            Add Book
          </button>
          <BookList onDeleteClick={handleOnDelete} books={books}></BookList>
        </>
      )}
    </>
  );
}
