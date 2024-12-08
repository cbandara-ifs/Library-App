import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";
import { newBook } from "../../../tools/mockData";
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import { useParams } from "react-router-dom";
import { loadBooks } from "../../redux/actions/bookActions";

export default function ManageBooksPage() {
  const [book, setBook] = useState(newBook);
  const authors = useSelector(state => state.authors);
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(loadBooks()).catch(error => {
        alert("Load books failed" + error);
      });
    } else if (slug) {
      setBook(books.find(book => book.slug === slug) || newBook);
    }
  }, [books, slug]);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(loadAuthors()).catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [authors]);

  const handleChange = event => {
    const [name, value] = event.target;
    setBook(prevBook => ({
      ...prevBook,
      [name]: name === "aurthorId" ? parseInt(value, 10) : value
    }));
  };

  return (
    <BookForm
      authors={authors}
      book={book}
      onChange={handleChange}
      onSave={() => {}}
    />
  );
}
