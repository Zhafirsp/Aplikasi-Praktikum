import NavAdmin from '../../components/NavigationBar/navAdmin';
import Jadwal from '../../components/table/jadwal';
import checkLogin from "../../utils/checkLogin";
import { Routes, Route} from 'react-router-dom'
import User from '../../pages/dataUser';
import Laboran from '../../pages/dataLaboran';
import Asisten from '../../pages/dataAsisten';
import Kehadiran from '../../pages/kehadiranAsisten';
import Presensi from '../../pages/kehadiranAsisten/presensi';
import Validasi from '../../pages/validasiData';
import Status from '../../pages/validasiData/status';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

export default function HomeAdmin () {

  const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

  return (
    <>
    <header id='header'>
     <NavAdmin/>
     </header>
     {checkLogin() ? null : <Login/>}
     <Routes>
        <Route path='/admin' element={<Jadwal/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/laboran' element={<Laboran/>}/>
        <Route path='/asisten' element={<Asisten/>}/>
        <Route path='/kehadiran' element={<Kehadiran/>}/>
        <Route path='/presensi' element={<Presensi/>}/>
        <Route path='/validasi' element={<Validasi/>}/>
        <Route path='/status' element={<Status/>}/>
        <Route path='/register' element={<Register/>}/>
          <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
      </Routes>

    </>
  )
}

