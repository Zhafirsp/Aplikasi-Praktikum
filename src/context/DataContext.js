import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API } from "../config/api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Users
  const [users, setUsers] = useState([]);
  const [userLogin, setUserLogin] = useState([]);

  useEffect(() => {
    getUserLogin();
    getUsers();
  }, []);

  const getUserLogin = async () => {
    const { data } = await API().get("/profile");
    setUserLogin(data?.dataUser);
  };
  const getUsers = async () => {
    const { data: dataUser } = await API().get("/users");
    setUsers(dataUser?.users);
  };

  return (
    <>
      <DataContext.Provider
        value={{
          userLogin,
          users,
        }}
        >  
        {children}
        </DataContext.Provider>
      </>
    );
  };
  
  export { DataProvider, DataContext };
