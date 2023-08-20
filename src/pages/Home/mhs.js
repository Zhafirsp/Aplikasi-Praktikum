import Welcome from "./Welcome"
import About from "../../components/about"
import "../../assets/styles/homeMhs.css";
import checkLogin from "../../utils/checkLogin";
import { Routes, Route} from 'react-router-dom'
import Civitas from '../../pages/Civitas';
import Mendaftar from '../../pages/caraMendaftar';
import NavMhs from '../../components/NavigationBar/navMhs';
import Pendaftaran from '../../pages/pendaftaran';
import Pengumuman from '../../pages/pengumuman'
import Login from '../auth/Login';
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";



export default function HomeMahasiswa () {

  // const navigate = useNavigate();
  //   const logout = useLogout();

  //   const signOut = async () => {
  //       await logout();
  //       navigate('/login');
  //   }

  return (
    <>
    <header id='header'>
      <NavMhs/>
      </header>
     {/* {checkLogin() ? null : <Login/>} */}
     <Routes>
        <Route path='/Mahasiswa' element={<Welcome/>}/>
        <Route path='/Pengumuman' element={<Pengumuman/>}/>
        <Route path='/Civitas' element={<Civitas/>}/>
        <Route path='/Mendaftar' element={<Mendaftar/>}/>
        <Route path='/Pendaftaran' element={<Pendaftaran/>}/>
      </Routes>
        {/* <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div> */}
    </>
  )
}