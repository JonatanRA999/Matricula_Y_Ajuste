import './Styles/App.css';
import './Styles/Style.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { Ingresar } from './Pages/IngresarPages';
import {Inicio} from './Pages/InicioPage';
import {Calendario} from './Pages/CalendarioPage';
import {Matricula} from './Pages/MatriculaPage';
import {Oferta} from './Pages/OfertaPage';
import {PublicoLayout} from './Layouts/PublicoLayout';
import {PrivadoLayout} from './Layouts/PrivadoLayout';
import {LoginLayout} from './Layouts/LoginLayout';


function App() 
{
  return (
    <div >
     <Router>
        <Switch>
          <Route paht={['/ingresar']}>
            <PublicoLayout>
              <Switch>
                <Route paht='/ingresar'> <Ingresar/> </Route>
              </Switch>
              
            </PublicoLayout>
          </Route>
          <Route paht={['/calendario','/oferta','/matricula']}>
            <PrivadoLayout>
              <Switch>
                <Route paht='/calendario'> <Calendario/> </Route>
                <Route paht='/oferta'> <Oferta/> </Route>
                <Route paht='/matricula'> <Matricula/> </Route>
              </Switch>
            </PrivadoLayout>
          </Route>
          <Route paht={['/']}>
            <LoginLayout>
              <Switch>
                <Route paht='/'> <Inicio/> </Route>
              </Switch>
            </LoginLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;


