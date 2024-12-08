import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="/authors">Authors</NavLink>
      {" | "}
      <NavLink to="/books">Books</NavLink>
      {" | "}
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Header;
