import './Styles/App.css';
import './Styles/Style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path='/inicio' element={<PrivadoLayout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </Router>
  </div>
  )
}

export default App;


