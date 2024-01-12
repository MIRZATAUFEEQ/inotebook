import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Notestate from './Context/Note/Notestate';
import Alert from './Components/Alert';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
function App() {
  return (
    <>
      <Notestate>
        <BrowserRouter>
          <Navbar />
          <Alert message="this is amazing react app"/>
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/signup' element={<Signup/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </Notestate>
    </>
  );
}

export default App;