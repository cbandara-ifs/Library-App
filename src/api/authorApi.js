import { getAxios } from "../utils/axiosUtils";

export function getAuthors() {
  const { default: api } = getAxios();
  return api.get(`/api/authors/`);
}
