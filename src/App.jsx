import './Styles/App.css';
import './Styles/Style.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { Ingresar } from './Pages/IngresarPages';

function App() 
{
  return (
    <div >
      <Router>
        <Switch>
          <Route paht="/ingresar">
            <Ingresar/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;


