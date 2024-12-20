import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/books/";

export function getbooks() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveBook(book) {
  return fetch(baseUrl + (book.id || ""), {
    method: book.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(book)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBook(bookId) {
  return fetch(baseUrl + bookId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
