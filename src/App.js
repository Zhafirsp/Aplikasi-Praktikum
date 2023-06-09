import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Civitas from './pages/Civitas';
import Footer from './components/footer';
import Lab from './pages/Lab';
import Mendaftar from './pages/Mendaftar';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    
    <div className="App">
    <header id='header'>
      <NavigationBar/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/lab' element={<Lab/>}/>
        <Route path='/civitas' element={<Civitas/>}/>
        <Route path='/mendaftar' element={<Mendaftar/>}/>
        <Route path='/masuk' element={<Mendaftar/>}/>
        <Route path='/daftar' element={<Mendaftar/>}/>
      </Routes>
      <footer id="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
