import { useState } from 'react'
import './App.css'
import { VerCursos } from './Components/VerCursosComponents';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() 
{
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <nav >
            <ul >
              <li >
                <Link to="/about">Matricula</Link>
              </li>
            </ul>
          </nav>
      </header>
        
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<VerCursos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


