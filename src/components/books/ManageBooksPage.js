import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";
import { newBook } from "../../../tools/mockData";
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import { useNavigate, useParams } from "react-router-dom";
import { loadBooks, saveBook } from "../../redux/actions/bookActions";
import { toast } from "react-toastify";

export default function ManageBooksPage() {
  const [book, setBook] = useState(newBook);
  const authors = useSelector(state => state.authors);
  const books = useSelector(state => state.books);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});
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
    const { name, value } = event.target;
    setBook(prevBook => ({
      ...prevBook,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  };

  function formValidation() {
    const { title, authorId, category } = book;
    const errors = {};

    if (!title) errors.title = "Title is required";
    if (!authorId) errors.authorId = "Author is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }
  const handleSave = event => {
    event.preventDefault();
    if (!formValidation()) return;
    setSaving(true);
    dispatch(saveBook(book))
      .then(() => {
        toast.success("Book Saved");
        navigate("/books");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  };
  return (
    <BookForm
      authors={authors}
      book={book}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
      errors={errors}
    />
  );
}
