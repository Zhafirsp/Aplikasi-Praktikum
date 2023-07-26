import { Routes, Route} from 'react-router-dom'
import HomeMahasiswa from '../pages/Home/mhs';
import Civitas from '../pages/Civitas';
import Mendaftar from '../pages/caraMendaftar';
import NavMhs from '../components/NavigationBar/navMhs';
import Pendaftaran from '../pages/pendaftaran';
import Pengumuman from '../pages/pengumuman';

export default function RouteMhs() {

  return (
    <>
     <header id='header'>
      <NavMhs/>
      </header>
     <Routes>
        <Route path='/Mahasiswa' element={<HomeMahasiswa/>}/>
        <Route path='/pengumuman' element={<Pengumuman/>}/>
        <Route path='/civitas' element={<Civitas/>}/>
        <Route path='/mendaftar' element={<Mendaftar/>}/>
        <Route exact path='/pendaftaran' element={<Pendaftaran/>}/>
      </Routes>
    </>
  )
}
