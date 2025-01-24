import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import BookList from "./BookList";
import Spinner from "../common/Spinner";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState, AppDispatch } from "../../redux/configureStore.dev";
import { Author, AuthorMap, Book } from "../../lib/interfaces";

export default function BooksPage() {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const authors = useSelector((state : RootState) => state.authors);
  const authorMap = useMemo(() => {
    return authors.reduce<AuthorMap>((acc, author) => {
      acc[author.id] = author.firstName;
      return acc;
    }, {});
  }, [authors]);

  const books = useSelector((state : RootState) => {
    if (state.authors.length === 0) return [];

    // Map books with optimized author lookup
    return state.books.map((book : Book) => ({
      ...book,
      authorName: authorMap[book.authorId] || "unknown"
    }));
  });
  const apiCalls = useSelector((state : RootState) => state.apiCallsInProgress);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(authorActions.loadAuthors())
    }

    if (books.length === 0) {
      dispatch(bookActions.loadBooks())
    }
  }, [dispatch]);

  const handleOnClick = () => {
    setRedirectToAddCoursePage(true);
  };

  const handleOnDelete = async (book : Book) => {
    toast.success("Book Deleted");
    try {
      await dispatch(bookActions.deleteBook(book));
    } catch (error : unknown) {
      const errorMessage =
            error instanceof Error ? error.message : "An unexpected error occurred.";
      toast.error("Book Delete Failed" + errorMessage, { autoClose: false });
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
