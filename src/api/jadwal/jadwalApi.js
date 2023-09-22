import apiClient from "../apiClient";
import { JADWAL_URL } from "../apiUrl";

export const getJadwalApi = (params) => {
  return apiClient.get(JADWAL_URL, { params });
};
