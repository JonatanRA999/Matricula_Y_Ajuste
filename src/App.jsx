import './App.css'
import { VerCursos } from './Components/VerCursosComponents';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/NavbarComponent';

function App() 
{
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<VerCursos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


