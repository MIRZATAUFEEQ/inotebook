import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Notestate from './Context/Note/Notestate';
import Alert from './Components/Alert';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useState } from 'react';
function App() {

  const [alert, setAlert] = useState(null)
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <Notestate>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home showalert={showalert} />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/login' element={<Login showalert={showalert} />} />
              <Route exact path='/signup' element={<Signup showalert={showalert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Notestate>
    </>
  );
}

export default App;