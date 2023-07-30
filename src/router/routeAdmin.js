import { Routes, Route} from 'react-router-dom'
import HomeAdmin from '../pages/Home/admin';
import User from '../pages/dataUser';
import Laboran from '../pages/dataLaboran';
import Asisten from '../pages/dataAsisten';
import Kehadiran from '../pages/kehadiranAsisten';
import Presensi from '../pages/kehadiranAsisten/presensi';
import Validasi from '../pages/validasiData';
import Status from '../pages/validasiData/status';
import Register from '../pages/Register';
import NavAdmin from '../components/NavigationBar/navAdmin';

export default function RouteAdmin() {

  return (
    <>
    <header id='header'>
     <NavAdmin/>
     </header>
     <Routes>
        <Route path='/admin' element={<HomeAdmin/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/laboran' element={<Laboran/>}/>
        <Route path='/asisten' element={<Asisten/>}/>
        <Route path='/kehadiran' element={<Kehadiran/>}/>
        <Route path='/presensi' element={<Presensi/>}/>
        <Route path='/validasi' element={<Validasi/>}/>
        <Route path='/status' element={<Status/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}
