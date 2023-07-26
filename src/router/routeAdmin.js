import { Routes, Route} from 'react-router-dom'
import NavAdmin from '../components/NavigationBar/navAdmin';
import HomeAdmin from '../pages/Home/admin';
import User from '../pages/dataUser';

export default function RouteAdmin() {

  return (
    <>
     <header id='header'>
      <NavAdmin/>
      </header>
     <Routes>
        <Route path='/admin' element={<HomeAdmin/>}/>
        <Route path='/user' element={<User/>}/>
        {/* <Route path='/laboran' element={<dataUser/>}/> */}
        {/* <Route path='/asisten' element={<dataUser/>}/> */}
        {/* <Route path='/kehadiran' element={<dataUser/>}/> */}
        {/* <Route path='/validasi' element={<dataUser/>}/> */}
      </Routes>
    </>
  )
}
