import './Styles/App.css';
import './Styles/Style.css';


import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Ingresar } from './Pages/IngresarPage';
import {Inicio} from './Pages/InicioPage';
import {Calendario} from './Pages/CalendarioPage';
import {Matricula} from './Pages/MatriculaPage';
import {Oferta} from './Pages/OfertaPage';
import {PublicoLayout} from './Layouts/PublicoLayout';
import {PrivadoLayout} from './Layouts/PrivadoLayout';
import {LoginLayout} from './Layouts/LoginLayout';

import {InicioMatricula } from './Pages/InicioMatriculaPage';
import { IdUser } from './Context/idUsuario';
import { Constancia } from './Pages/ConstanciaPage';



function App() 
{
  const [id ,setId] = useState("");

  useEffect(()=>{
    console.log("Tu ide es ", id);
  },[id])


import { Ingresar } from './Pages/IngresarPages';
import {Inicio} from './Pages/InicioPage';
import {Calendario} from './Pages/CalendarioPage';
import {Matricula} from './Pages/MatriculaPage';
import {Oferta} from './Pages/OfertaPage';
import {PublicoLayout} from './Layouts/PublicoLayout';
import {PrivadoLayout} from './Layouts/PrivadoLayout';
import {LoginLayout} from './Layouts/LoginLayout';

import {Index } from './Pages/IndexPages'



function App() 
{
  return (
    <div id='app'>



    <IdUser.Provider value={{id, setId}}>


    <Router>
      <Routes>
        <Route path='/' element={<PublicoLayout />}>
          <Route index element={<Inicio />} />
        </Route>
        <Route path='/ingresar' element={<LoginLayout />}>
          <Route index element={<Ingresar />} />
        </Route>
        <Route path='/calendario' element={<PrivadoLayout />}>
          <Route index element={<Calendario />} />
        </Route>
        <Route path='/matricula' element={<PrivadoLayout />}>
          <Route index element={<Matricula />} />
        </Route>
        <Route path='/oferta' element={<PrivadoLayout />}>
          <Route index element={<Oferta />} />
        </Route>

        <Route path='/constancia' element={<PrivadoLayout />}>
          <Route index element={<Constancia />} />
        </Route>

        <Route path='/inicio' element={<PrivadoLayout />}>
          <Route index element={<InicioMatricula />} />
        </Route>
      </Routes>
    </Router>

    </IdUser.Provider>
    

  </div>

  )
}

export default App;


