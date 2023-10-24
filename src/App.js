import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import React, { Component, useEffect, useState, useMemo } from "react";
// import { useSelector, connect } from "react-redux";
import jwtDecode from "jwt-decode";
import Cookies from 'js-cookie';
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/auth/Login";
import NotFound from "./pages/errors/NotFound";
import Welcome from "./pages/Home/Welcome";
import Unauthorized from "./components/Unauthorized";
import Civitas from "./pages/MahasiswaPages/Civitas";
import Mendaftar from "./pages/MahasiswaPages/caraMendaftar";
import Pendaftaran from "./pages/MahasiswaPages/pendaftaran";
import Pengumuman from "./pages/MahasiswaPages/pengumuman";
import DataUser from "./pages/LaboranPages/dataUser";
import DataLaboran from "./pages/LaboranPages/dataLaboran";
import DataAsisten from "./pages/LaboranPages/dataAsisten";
import Kehadiran from "./pages/LaboranPages/kehadiranAsisten";
import Presensi from "./pages/LaboranPages/kehadiranAsisten/presensi";
import Validasi from "./pages/LaboranPages/validasiData";
import Status from "./pages/LaboranPages/validasiData/status";
import Register from "./pages/auth/Register";
import JadwalPraktikum from "./components/table/jadwal";
import JadwalLab from "./pages/AslabPages/Jadwal";
import Sertifikat from "./pages/AslabPages/Sertifikat/sertifikat";
import Footer from "./components/footer";
import NavMhs from "./components/NavigationBar/navMhs";
import NavLaboran from "./components/NavigationBar/navLaboran";
import NavAslab from "./components/NavigationBar/navAslab";

function App() {
  // const userRole = useSelector((state) => state.user.role);
  // const isLogin = useSelector((state) => state.user.isLogin);
  // const dispatch = useDispatch();
  const existingToken = localStorage.getItem("accessToken");
  const [authTokens, setAuthTokens] = useState(existingToken);
  const [userData, setUserData] = useState();

  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isLogin = location.pathname === "/login";

 
  const setLogout = () => {
    localStorage.clear();
    setAuthTokens(null);
  };

  const setTokens = (data) => {
    localStorage.setItem("accessToken", data);
    localStorage.setItem("refresh_Token", data);
    Cookies.set("accessToken", data);
    Cookies.set("refreshToken", data);
    setAuthTokens(data);
    console.log(data);
  };

  const dataContext = useMemo(
    () => ({ authTokens, setAuthTokens: setTokens, setLogout, userData }),
    [authTokens, userData]
  );

  useEffect(() => {
    if (authTokens) {
      const accessDecode = jwtDecode(authTokens);
      const dataUser = {
        user_id: accessDecode.user_id,
        role: accessDecode.role,
        username: accessDecode.username,
      };
      setUserData(dataUser);
    }
    setIsLoading(false);
  }, [authTokens]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // console.log(checkLogin());

  return (
    <div className="App">
      {/* {!isLogin && userRole === 'Mahasiswa' && <NavMhs/> || 
      !isLogin && userRole === 'Laboran' && <NavLaboran/>} */}
      
      {/* {!isLogin && <NavMhs />} */}

      <AuthContext.Provider value={dataContext}>
        {authTokens ? (
          <>
          <header id='header'>
            {userData?.role === "Laboran" ? (
              <NavLaboran />
            ) : userData?.role === "Asisten" ? (
              <NavAslab />
            ) : (
              <NavMhs />
            )}
            </header>
            <Routes>
              {/* <Route path="/" element={<Welcome />} /> */}
              {/* <Route path="*" element={<Navigate to="/" />} /> */}

              <Route path="unauthorized" element={<Unauthorized />} />

              {/* Mahasiswa Routes */}
              {userData?.role === "Mahasiswa" && (
                <Route path="/" element={<Welcome />} />
              )}
              {userData?.role === "Mahasiswa" && (
                <Route path="/pengumuman" element={<Pengumuman />} />
              )}
              {userData?.role === "Mahasiswa" && (
                <Route path="/civitas" element={<Civitas />} />
              )}
              {userData?.role === "Mahasiswa" && (
                <Route path="/mendaftar" element={<Mendaftar />} />
              )}
              {userData?.role === "Mahasiswa" && (
                <Route path="/Pendaftaran" element={<Pendaftaran />} />
              )}

              {/* Asisten Lab Routes */}
              {/* <Route element={<RequireAuth allowedRoles={["Asisten"]} />}> */}
              {userData?.role === "Asisten" && (
                <Route path="/" element={<JadwalLab />} />
              )}
              {userData?.role === "Asisten" && (
                <Route path="/penilaian" element={<Pengumuman />} />
              )}
              {userData?.role === "Asisten" && (
                <Route path="/Penilaian-mahasiswa" element={<Civitas />} />
              )}
              {userData?.role === "Asisten" && (
                <Route path="/sertifikat" element={<Sertifikat />} />
              )}

              {/* </Route> */}

              {/* Laboran Routes */}
              {userData?.role === "Laboran" && (
                <Route path="/" element={<JadwalPraktikum />} />
              )}
              {userData?.role === "Laboran" && (
                <Route exact path="/data-user" element={<DataUser />} />
              )}
              {userData?.role === "Laboran" && (
                <Route exact path="/data-laboran" element={<DataLaboran />} />
              )}
              {userData?.role === "Laboran" && (
                <Route exact path="/data-asisten" element={<DataAsisten />} />
              )}
              {userData?.role === "Laboran" && (
                <Route exact path="/kehadiran" element={<Kehadiran />} />
              )}
              {userData?.role === "Laboran" && (
                <Route exact path="/presensi" element={<Presensi />} />
              )}
              {userData?.role === "Laboran" && (
                <Route exact path="/validasi" element={<Validasi />} />
              )}
              {userData?.role === "Laboran" && (
                <Route exact path="/status" element={<Status />} />
              )}
              {userData?.role === "Laboran" && (
                <Route exact path="/register" element={<Register />} />
              )}

              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="*" element={<Navigate to="/login" />} /> */}
          </Routes>
        )}

        <footer id="footer" className="sticky-bottom">
          <Footer />
        </footer>
      </AuthContext.Provider>
      {/* {checkLogin() && userRole === "Mahasiswa" && <NavMhs />}
      {checkLogin() && userRole === "Laboran" && <NavLaboran />}
      {checkLogin() && userRole === "Asisten" && <NavAslab />} */}
    </div>
  );
}

export default App;
