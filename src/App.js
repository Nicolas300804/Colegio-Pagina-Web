//import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import  Slideout  from './Components/Slideout/Slideout';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/familia' element={<Slideout/>} />
      </Routes>


    </div>
  );
}

export default App;
