import apiClient from "../apiClient";
import { LOGIN_URL } from "../apiUrl";

export const postLoginApi = (data) => {
  return apiClient.post(LOGIN_URL, data);
};
