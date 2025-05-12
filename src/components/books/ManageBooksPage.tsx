import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import { useNavigate, useParams } from "react-router-dom";
import { loadBooks, saveBook } from "../../redux/actions/bookActions";
import { toast } from "react-toastify";
import { AppDispatch, RootState } from "../../redux/configureStore.dev";
import { Book } from "../../lib/interfaces";

export default function ManageBooksPage() {
  const newBook: Book = {
    id: 1,
    title: "",
    authorId: 1,
    category: ""
  };
  const [book, setBook] = useState(newBook);
  const authors = useSelector((state: RootState) => state.authors.authors);
  const books = useSelector((state: RootState) => state.books);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(loadBooks());
    } else if (slug) {
      setBook(books.find(book => book.slug === slug) || newBook);
    }
  }, [books, slug]);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(loadAuthors());
    }
  }, [authors]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setBook((prevBook: Book) => ({
      ...prevBook,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  };

  function formValidation() {
    const { title, authorId, category } = book;
    const errors = {};

    // if (!title) errors.title = "Title is required";
    // if (!authorId) errors.authorId = "Author is required";
    // if (!category) errors.category = "Category is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }
  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formValidation()) return;
    setSaving(true);
    try {
      await dispatch(saveBook(book));
      toast.success("Book Saved");
      navigate("/books");
    } catch (error: unknown) {
      setSaving(false);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      setErrors({ onSave: errorMessage });
    }
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
