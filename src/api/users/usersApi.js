import axios, { Axios } from "axios";
import apiClient from "../apiClient";
import { SEVIMA_USER_URL, USER_URL } from "../apiUrl";
import Cookies from 'js-cookie';


const token = localStorage.getItem("accessToken");
const refreshToken = Cookies.get("refresh_Token");

export const getDataUsersApi = async () => {
  return apiClient.get(USER_URL, 
    {   
      crossDomain: true,
      headers: {
      Authorization: `Bearer ${token, refreshToken}`,
    }, 
  });
};

export const getSevimaDataUsersApi = (dataMhs) => {
  return apiClient.post(SEVIMA_USER_URL, {
    dataMhs: {
      periode_masuk: "20191",
      limit: 200,
      ...dataMhs,
    },
  }, {
    grant_type: "client_credentials",
    client_id: "unpas",
    client_secret: "gM5S5N%4",
    crossDomain: true,
    headers: {
      Authorization: `Bearer ${token, refreshToken}`,
      "Content-Type": "application/json",
    },
  });
};