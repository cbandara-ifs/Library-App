import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Book, BookListProps } from "../../lib/interfaces";

const BookList: React.FC<BookListProps> = ({ onDeleteClick, books }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {books.map((book : Book) => {
        return (
          <tr key={book.id}>
            <td>
              <Link to={"/book/" + book.slug}>{book.slug}</Link>
            </td>
            <td key={book.authorName}>{book.authorName}</td>
            <td>{book.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(book)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default BookList;
