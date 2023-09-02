import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  Routes, 
  Route,
  Navigate,
  Outlet, useLocation } from 'react-router-dom'
import Footer from './components/footer';
import Login from './pages/auth/Login';
import HomeMahasiswa from './pages/Home/mhs';
import HomeAdmin from './pages/Home/laboran';
import React, { Component, useEffect, useState } from "react";
// import { useSelector, connect } from "react-redux";
import NotFound from './pages/errors/NotFound';
import RequireAuth from './components/RequireAuth';
import Welcome from './pages/Home/Welcome';
import Unauthorized from './components/Unauthorized';
import Layout from './components/Layout';
import axios from './api/axios';
import Civitas from './pages/Civitas';
import Mendaftar from './pages/caraMendaftar';
import Pendaftaran from './pages/pendaftaran';
import Pengumuman from './pages/pengumuman';
import DataUser from './pages/dataUser';
import DataLaboran from './pages/dataLaboran';
import DataAsisten from './pages/dataAsisten';
import Kehadiran from './pages/kehadiranAsisten';
import Presensi from './pages/kehadiranAsisten/presensi';
import Validasi from './pages/validasiData';
import Status from './pages/validasiData/status';
import Register from './pages/auth/Register';
import JadwalPraktikum from './components/table/jadwal';
import NavMhs from './components/NavigationBar/navMhs';

// const Authorization = (WrappedComponent, allowedRoles) => {
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
//   }, []);


function App() {
  
  const location = useLocation();

  const isLogin = location.pathname === "/login";


  return (
    
    <div className="App">
    <header id='header'>
      {!isLogin && <NavMhs />}
      </header>
      <Routes>

        {/* Public Routes */}
        <Route exact path="/" element={<Layout  />} />
        <Route path="/login" element={<Login />}/>
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* Mahasiswa Routes */}
          {/* <Route element={<RequireAuth allowedRoles={["Mahasiswa"]} />}> */}
            <Route path='/mahasiswa' element={<Welcome/>}/>
            <Route path='/pengumuman' element={<Pengumuman/>}/>
            <Route path='/civitas' element={<Civitas/>}/>
            <Route path='/mendaftar' element={<Mendaftar/>}/>
            <Route path='/pendaftaran' element={<Pendaftaran/>}/>
          {/* </Route> */}

          {/* Laboran Routes */}
          {/* <Route element={<RequireAuth allowedRoles={["Laboran"]} />}> */}
            <Route exact path='/laboran' element={<JadwalPraktikum/>}/>
            <Route exact path='/user' element={<DataUser/>}/>
            <Route exact path='/laboran' element={<DataLaboran/>}/>
            <Route exact path='/asisten' element={<DataAsisten/>}/>
            <Route exact path='/kehadiran' element={<Kehadiran/>}/>
            <Route exact path='/presensi' element={<Presensi/>}/>
            <Route exact path='/validasi' element={<Validasi/>}/>
            <Route exact path='/status' element={<Status/>}/>
            <Route exact path='/register' element={<Register/>}/>
          {/* </Route> */}
          <Route path="*" element={<NotFound/>} />
      </Routes>
      <footer id="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;