import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
