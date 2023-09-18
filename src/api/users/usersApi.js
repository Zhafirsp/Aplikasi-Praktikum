import apiClient from "../apiClient";
import { USER_URL } from "../apiUrl";

export const getDataUsersApi = (params) => {
  return apiClient.get(USER_URL, { params });
};
