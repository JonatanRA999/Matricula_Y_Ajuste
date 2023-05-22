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
    <div id='app'>
     <Router>
        <Switch>
          
          <Route path={['/calendario','/oferta','/matricula']}>
              <PrivadoLayout>
                <Switch>
                  <Route path='/calendario'> <Calendario/> </Route>
                  <Route path='/oferta'> <Oferta/> </Route>
                  <Route path='/matricula'> <Matricula/> </Route>
                </Switch>
              </PrivadoLayout>            
          </Route>
          
          <Route path={['/ingresar']}>
            <LoginLayout>
              <Switch>
                <Route path='/'> <Ingresar/> </Route>
              </Switch>
            </LoginLayout>
          </Route>

          <Route path={['/']}>
            <PublicoLayout>
              <Switch>
                <Route path='/'> <Inicio/> </Route>
              </Switch>
            </PublicoLayout>
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App;


