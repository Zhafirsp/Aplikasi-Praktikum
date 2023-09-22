import apiClient from "../apiClient";
import { LABORAN_URL } from "../apiUrl";

export const getDataLaboransApi = (params) => {
  return apiClient.get(LABORAN_URL, { params });
};
