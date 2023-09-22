import apiClient from "../apiClient";
import { SEVIMA_USER_URL, USER_URL } from "../apiUrl";

export const getDataUsersApi = (params) => {
  return apiClient.get(USER_URL, { params });
};

export const getSevimaDataUsersApi = (params) => {
  return apiClient.post(SEVIMA_USER_URL, { params });
};