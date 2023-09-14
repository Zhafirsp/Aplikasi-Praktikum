import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom'
import React, { Component, useEffect, useState, } from "react";
// import { useSelector, connect } from "react-redux";
import { API } from './api/axios';
import { useJwt } from "react-jwt";
import Login from './pages/auth/Login';
import HomeMahasiswa from './pages/Home/mhs';
import HomeAdmin from './pages/Home/laboran';
import NotFound from './pages/errors/NotFound';
import RequireAuth from './components/RequireAuth';
import Welcome from './pages/Home/Welcome';
import Unauthorized from './components/Unauthorized';
import Layout from './components/Layout';
import Civitas from './pages/MahasiswaPages/Civitas';
import Mendaftar from './pages/MahasiswaPages/caraMendaftar';
import Pendaftaran from './pages/LaboranPages/pendaftaran';
import Pengumuman from './pages/MahasiswaPages/pengumuman';
import DataUser from './pages/LaboranPages/dataUser';
import DataLaboran from './pages/LaboranPages/dataLaboran';
import DataAsisten from './pages/LaboranPages/dataAsisten';
import Kehadiran from './pages/LaboranPages/kehadiranAsisten';
import Presensi from './pages/LaboranPages/kehadiranAsisten/presensi';
import Validasi from './pages/LaboranPages/validasiData';
import Status from './pages/LaboranPages/validasiData/status';
import Register from './pages/auth/Register';
import JadwalPraktikum from './components/table/jadwal';
import JadwalLab from './pages/AslabPages/Jadwal';
import checkLogin from './utils/checkLogin';
import Sertifikat from './components/downloadSertif';
import Footer from './components/footer';
import NavMhs from './components/NavigationBar/navMhs';
import NavLaboran from './components/NavigationBar/navLaboran';
import NavAslab from './components/NavigationBar/navAslab';

function App() {
// const userRole = useSelector((state) => state.user.role);
  // const isLogin = useSelector((state) => state.user.isLogin);
  // const dispatch = useDispatch();
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  // useEffect(() => {
  //   const getRole = async () => {
  //     try {
  //       const response = await API().get(`v1/users`, {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         credentials: "include", // Mengaktifkan kredensial (cookies)
  //       });
  //       console.log(JSON.stringify(response?.data));
  //       const role = response?.data?.role;
  //       dispatch(setRole(role));
  //       dispatch(setIsLogin(true));
  //     } catch (err) {
  //       console.log('Error fetching user profile:', err);
  //     }
  //   }
  //   getRole();
  // }, []);

  {/* // const Authorization = (WrappedComponent, allowedRoles) => {
//   class WithAuthorization extends Component {
//     render() {
//       const userType  = this.props.userType;
//       if (allowedRoles.includes(userType)) {
//         return <WrappedComponent {...this.props} />;
//       } else {
//         return <h1>You are not allowed to view this page!</h1>;
//       }
//     }
//   }
//   const mapStateToProps = state => ({ user: state.login.userName, userType: state.login.userType })
//   return connect(mapStateToProps)(WithAuthorization);
// };

// const AdminRoute = ({ component: Component, ...rest }) => {
//   const userRole = useSelector((state) => state.user.role);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         userRole === 'laboran' ? <Component {...props} /> : <Navigate to="/unauthorized" />
//       }
//     />
//   );
// };

// const UserRoute = ({ component: Component, ...rest }) => {
//   const userRole = useSelector((state) => state.user.role); // Ambil role pengguna dari state (Redux)

//   // Pengecekan role dilakukan di komponen render (route render function)
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         userRole === 'mahasiswa' ? <Component {...props} /> : <Navigate to="/unauthorized" />
//       }
//     />
//   );
// };

// const Unauthorized = () => {
//   return <h3>Anda tidak diizinkan mengakses halaman ini!</h3>;
// };

// const getRole = () => {
//   const role = JSON.parse(localStorage.getItem("role"));
//   return role?.role;
// };

// const RoleAccess = ({ roles = [] }) => {
//   const user = JSON.parse(getRole);
//   return !roles.length || roles.includes(user?.role)
//     ? <Outlet />
//     : <Navigate to="/*" replace />;

// const [userRole, setUserRole] = useState('');
//   const [isLogin, setIsLogin] = useState(false);

//   useEffect(() => {
//     const getRole = async () => {
//       try {
//         const response = await axios.get(`v1/users`, {
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           credentials: "include", // Mengaktifkan kredensial (cookies)
//         });
//         console.log(JSON.stringify(response?.data));
//         const role = response?.data?.role;
//         setUserRole(role);
//         setIsLogin(true);
//       } catch (err) {
//           console.log('Error fetching user profile:', err);
//       }
//     }
//     getRole();
//   }, []); */}

  useEffect(() => {
    // Ambil token akses dari local storage (atau tempat penyimpanan lainnya)
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      // Dekode token akses untuk mendapatkan informasi role
      // const decodedToken = decode(accessToken);
      // const userRole = decodedToken.role;
      const decodedToken = useJwt.decode(accessToken);
      const userRole = decodedToken.role;
      // Simpan role dalam state
      setUserRole(userRole);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="App">
      {/* {!isLogin && userRole === 'Mahasiswa' && <NavMhs/> || 
      !isLogin && userRole === 'Laboran' && <NavLaboran/>} */}
{/* <header id='header'>
      {!isLogin && <NavMhs />}
      </header> */}
      {checkLogin() && userRole === 'Mahasiswa' && <NavMhs/>} 
        {checkLogin() && userRole === 'Laboran' && <NavLaboran/>}
       {checkLogin() && userRole === 'Asisten' && <NavAslab/>}
        

      <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />} />
      <Route
        exact
        path="/login"
        render={(props) => {
          if (localStorage.getItem('accessToken')) {
            return <Navigate to="/" />;
          } else {
            return <Login {...props} />;

          }
        } 
      } element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* Mahasiswa Routes */}
          {userRole === 'Mahasiswa' && (
            <Route path='/mahasiswa' element={<Welcome/>}/>)}
            {userRole === 'Mahasiswa' && (
            <Route path='/pengumuman' element={<Pengumuman/>}/>)}
            {userRole === 'Mahasiswa' && (
            <Route path='/civitas' element={<Civitas/>}/>)}
            {userRole === 'Mahasiswa' && (
            <Route path='/mendaftar' element={<Mendaftar/>}/>)}
            {userRole === 'Mahasiswa' && (
            <Route path='/pendaftaran' element={<Pendaftaran/>}/>)}

        {/* Asisten Lab Routes */}
          {/* <Route element={<RequireAuth allowedRoles={["Asisten"]} />}> */}
          <Route path='/asisten' element={<JadwalLab/>}/>
            <Route path='/penilaian' element={<Pengumuman/>}/>
            <Route path='/Penilaian-mahasiswa' element={<Civitas/>}/>
            <Route path='/sertifikat' element={<Sertifikat/>}/>
          {/* </Route> */}

          {/* Laboran Routes */}
          {userRole === 'Laboran' && (
            <Route path='/laboran' element={<JadwalPraktikum/>}/>)}
          {userRole === 'Laboran' && (
            <Route exact path='/data-user' element={<DataUser/>}/>)}
          {userRole === 'Laboran' && (
            <Route exact path='/data-laboran' element={<DataLaboran/>}/>)}
          {userRole === 'Laboran' && (
            <Route exact path='/data-asisten' element={<DataAsisten/>}/>)}
          {userRole === 'Laboran' && (
            <Route exact path='/kehadiran' element={<Kehadiran/>}/>)}
          {userRole === 'Laboran' && (
            <Route exact path='/presensi' element={<Presensi/>}/>)}
          {userRole === 'Laboran' && (
            <Route exact path='/validasi' element={<Validasi/>}/>)}
          {userRole === 'Laboran' && (
            <Route exact path='/status' element={<Status/>}/>)}
          {userRole === 'Laboran' && (
            <Route exact path='/register' element={<Register/>}/>)}

          <Route path="*" element={<NotFound/>} /> 
          
      </Routes>
        <footer id="footer">
          <Footer/>
        </footer>
    </div>
  );
}

export default App;