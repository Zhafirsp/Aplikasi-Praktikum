import Welcome from "./Welcome"
import About from "../../components/about"
import "../../assets/styles/homeMhs.css";
import checkLogin from "../../utils/checkLogin";
import { Routes, Route, useLocation } from 'react-router-dom'
import Civitas from '../../pages/Civitas';
import Mendaftar from '../../pages/caraMendaftar';
import NavMhs from '../../components/NavigationBar/navMhs';
import Pendaftaran from '../../pages/pendaftaran';
import Pengumuman from '../../pages/pengumuman'



export default function HomeMahasiswa () {

  const location = useLocation();

  const isLogin = location.pathname === "/login";


  return (
    <>
    {/* <header id='header'>
      <NavMhs/>
      </header> */}
     {/* {checkLogin() ? null : <Login/>} */}
     {!isLogin && <NavMhs />}
     <Routes>
      
      </Routes>
        {/* <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div> */}
    </>
  )
}