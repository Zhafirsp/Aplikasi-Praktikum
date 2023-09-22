import apiClient from "../apiClient";
import { ASISTEN_URL } from "../apiUrl";

export const getDataAsistensApi = (params) => {
  return apiClient.get(ASISTEN_URL, { params });
};
