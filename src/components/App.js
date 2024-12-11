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

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/authors" element={<AuthorsPage />}></Route>
        <Route path="/books" element={<BooksPage />}></Route>
        <Route path="/book/:slug?" element={<ManageBooksPage />}></Route>
        <Route element={<PageNotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar theme="colored" />
    </div>
  );
}
