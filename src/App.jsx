import './Styles/App.css';
import './Styles/Style.css';

import { VerCursos } from './Components/VerCursosComponents';
import {Route, Switch, Router } from 'react-router-dom';
import { Navbar } from './Components/NavbarComponent';
import { Calendario } from './Pages/CalendarioPage';
import { Oferta } from './Pages/OfertaPage';
import { Matricula } from './Pages/MatriculaPage';
import { Ingresar } from './Pages/IngresarPages';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';



function App() 
{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route paht="">

          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;


