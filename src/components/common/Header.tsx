import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/_header.scss";
import HeaderDropdown from "./HeaderDropdown";

const Header: React.FC = () => {
  return (
    <header id="library-header" className="stick">
      <div className="super-header">
        <div className="d-flex">
          <i className="mdi mdi-color-secondary mr-1"></i>
          UTC Date Time
          <span className="ml-1"> TODO </span>
        </div>
        <div className="ml-5 d-flex">
          <i className="mdi mdi-clock mdi-color-secondary mr-1"></i>
          Sydney Date Time
          <span className="ml-1"> TODO </span>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-lg nav-container">
          <Link className="navbar-brand library-logo" to="/"></Link>
          <button
            name="humburger-menu"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse show"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item d-md-none d-lg-flex">
                <Link className="nav-link text-nowrap w-100" to="/search">
                  Advanced Search
                </Link>
              </li>
              <li className="nav-item d-md-none d-lg-flex">
                <Link className="nav-link text-nowrap w-100" to="/">
                  Home
                </Link>
              </li>

              {/* Dropdown for Books */}
              <HeaderDropdown></HeaderDropdown>

              <li className="nav-item d-md-none d-lg-flex">
                <Link className="nav-link text-nowrap w-100" to="/books">
                  Collection
                </Link>
              </li>
              <li className="nav-item d-md-none d-lg-flex">
                <Link className="nav-link text-nowrap w-100" to="/authors">
                  Authors
                </Link>
              </li>
              <li className="nav-item d-md-none d-lg-flex">
                <Link className="nav-link text-nowrap w-100" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
