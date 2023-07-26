import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import HomeMahasiswa from './pages/Home/mhs';
import Civitas from './pages/Civitas';
import Footer from './components/footer';
import Lab from './pages/Lab';
import Mendaftar from './pages/caraMendaftar';
import Login from './pages/Login';
import NavMhs from './components/NavigationBar/navMhs';
import NavAdmin from './components/NavigationBar/navAdmin';
import Register from './pages/Register';
import Pendaftaran from './pages/pendaftaran';
import RouteMhs from './router/routeMhs';
import RouteAdmin from './router/routeAdmin';
// import HomeAdmin from './pages/Home/admin';

function App() {
  return (
    
    <div className="App">
    <header id='header'>
      {/* <NavMhs/> */}
      </header>
      {/* <RouteMhs/> */}
      <RouteAdmin/>
      <Routes>
        
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
      <footer id="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
