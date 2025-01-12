import { getAxios } from "../utils/axiosUtils";

export function getbooks() {
  const { default: api } = getAxios();
  return api.get(`/api/books/`);
}

export function saveBook(book) {
  const { default: api } = getAxios();
  if (book.id) {
    return api.put(`/api/books/${book.id}`, book);
  } else {
    return api.post(`/api/books/`, book);
  }
}

export function deleteBook(bookId) {
  const { default: api } = getAxios();
  return api.delete(`/api/books/${bookId}`);
}
