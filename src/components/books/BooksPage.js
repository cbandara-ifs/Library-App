import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import BookList from "./BookList";

export default function BooksPage() {
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

  const [book, setBook] = useState({
    title: ""
  });

  useEffect(() => {
    const loadBooks = async () => {
      try {
        await dispatch(bookActions.loadBooks());
      } catch (error) {
        alert("loading failed");
      }
    };

    const loadAuthors = async () => {
      try {
        await dispatch(authorActions.loadAuthors());
      } catch (error) {
        alert("loading failed");
      }
    };

    if (books.length === 0) {
      loadBooks();
    }
    if (authors.length === 0) {
      loadAuthors();
    }
  }, [dispatch]);

  const handleChange = event => {
    setBook({ ...book, title: event.target.value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    dispatch(bookActions.createBook(book));
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <h2>Books</h2>
        <h3>Add Book</h3>
        <input type="text" onChange={handleChange} value={book.title} />
        <input type="submit" value="Save" />
      </form>
      <BookList books={books}></BookList>
    </>
  );
}
