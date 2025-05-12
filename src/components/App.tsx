import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import AuthorsPage from "./authors/AuthorsPage";
import BooksPage from "./books/BooksPage";
import ManageBooksPage from "./books/ManageBooksPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { configureAxios } from "../utils/axiosUtils";
import "../styles/_layout.scss";

export default function App() {
  configureAxios();
  return (
    <>
      <Header />
      <div className="page-wrapper with-notification-bar">
        <div className="container-lg mt-5 pt-4">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/authors" element={<AuthorsPage />}></Route>
            <Route path="/books" element={<BooksPage />}></Route>
            <Route path="/book/:slug?" element={<ManageBooksPage />}></Route>
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
      <ToastContainer autoClose={3000} hideProgressBar theme="colored" />
    </>
  );
}
