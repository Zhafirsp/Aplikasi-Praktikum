import { Routes, Route} from 'react-router-dom'
import Civitas from '../pages/Civitas';
import Lab from '../pages/Lab';
import Mendaftar from '../pages/caraMendaftar';
import Pendaftaran from '../pages/pendaftaran';
import NavAdmin from '../components/NavigationBar/navAdmin';
import HomeAdmin from '../pages/Home/admin';

export default function RouteAdmin() {

  return (
    <>
     <header id='header'>
      <NavAdmin/>
      </header>
     <Routes>
        <Route path='/admin' element={<HomeAdmin/>}/>
        <Route path='/user' element={<Lab/>}/>
        <Route path='/laboran' element={<Civitas/>}/>
        <Route path='/asisten' element={<Mendaftar/>}/>
        <Route path='/kehadiran' element={<Pendaftaran/>}/>
        <Route path='/validasi' element={<Pendaftaran/>}/>
      </Routes>
    </>
  )
}
