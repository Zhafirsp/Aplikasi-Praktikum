import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  Routes, 
  Route,
  Navigate,
  Outlet } from 'react-router-dom'
import Footer from './components/footer';
import Login from './pages/auth/Login';
import HomeMahasiswa from './pages/Home/mhs';
import HomeAdmin from './pages/Home/admin';
import React, { Component } from "react";
import { useSelector, connect } from "react-redux";
import NotFound from './pages/errors/NotFound';
import RequireAuth from './components/RequireAuth';

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

// const RoleAccess = ({ roles = [] }) => {
//   const user = JSON.parse(localStorage.getItem("role"));
//   return !roles.length || roles.includes(user?.role)
//     ? <Outlet />
//     : <Navigate to="/admin" replace />;
// };

const ROLES = {
  'Mahasiswa': 2001,
  'Asisten': 1984,
  'Admin': 5150
}

function App() {
  return (
    
    <div className="App">
    <header id='header'>
      </header>
      <Routes>
      <Route path="login" element={<Login />}/>
        <Route element={<RequireAuth allowedRoles={[ROLES.Mahasiswa]} />}>
          <Route path="/mahasiswa" element={<HomeMahasiswa />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin" element={<HomeAdmin />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <footer id="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;