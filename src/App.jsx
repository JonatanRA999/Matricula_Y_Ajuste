import './App.css'
import { VerCursos } from './Components/VerCursosComponents';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/NavbarComponent';
import { Calendario } from './Pages/CalendarioPage';
import { Oferta } from './Pages/OfertaPage';
import { Matricula } from './Pages/MatriculaPage';

function App() 
{
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<VerCursos/>} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/matricula" element={<Matricula/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


