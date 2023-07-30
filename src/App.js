import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Footer from './components/footer';
import Login from './pages/Login';
import RouteMhs from './router/routeMhs';
import RouteAdmin from './router/routeAdmin';



function App() {
  return (
    
    <div className="App">
    <header id='header'>
      </header>
      {/* <RouteMhs/> */}
      <RouteAdmin/>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
      <footer id="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
