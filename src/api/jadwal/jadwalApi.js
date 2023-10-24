import apiClient from "../apiClient";
import { JADWAL_URL } from "../apiUrl";

const dataToSend = {
  periode : "20231",
  kurikulum :"221",
  limit : 6000,
};

const token = localStorage.getItem("accessToken");

export const getJadwalApi = () => {
  return apiClient.post(JADWAL_URL, { 
    dataToSend,
    crossDomain: true,
    headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
      }
   });
};
