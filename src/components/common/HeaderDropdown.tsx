import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../../styles/_headerDropdown.scss";

const HeaderDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="nav-item dropdown d-none d-md-flex d-lg-none">
      <button
        className="nav-link dropdown-toggle"
        id="bookingNavbarDropdown"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        Books
      </button>

      {/* CSSTransition for animation */}
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="dropdown"
        unmountOnExit
      >
        <div
          className="dropdown-menu show"
          aria-labelledby="bookingNavbarDropdown"
        >
          <Link
            className="dropdown-item"
            to="/search"
            onClick={() => setIsOpen(!isOpen)}
          >
            Advanced Search
          </Link>
          <Link
            className="dropdown-item"
            to="/books"
            onClick={() => setIsOpen(!isOpen)}
          >
            Collection
          </Link>
        </div>
      </CSSTransition>
    </li>
  );
};

export default HeaderDropdown;
