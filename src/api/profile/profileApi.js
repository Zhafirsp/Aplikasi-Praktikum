import apiClient from "../apiClient";
import { PROFILE_URL } from "../apiUrl";

export const getProfileApi = (params) => {
  return apiClient.get(PROFILE_URL, { params });
};
