import axios from "axios";
const { REACT_APP_LABTIF_API_HOST } = process.env;

export default axios.create({
  baseURL: REACT_APP_LABTIF_API_HOST
});

export const axiosPrivate = () => {
  const token = localStorage.getItem("token") || "";
  const callAPI = axios.create({
    baseURL: REACT_APP_LABTIF_API_HOST,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return callAPI;
};