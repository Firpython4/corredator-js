import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect,
  Link
} from "react-router-dom";
import routes from "routes.js"

const defaultPage = "/";
//Da pra botar um 404 aqui dps

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Fazer Login</Link>
              </li>
              <li>
                <Link to="/submit">Enviar Redação</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {routes.map((route, index) => {
              return route.accessProvider() ? (<Route path={route.path} render={route.component} key={index} exact={route.isPathExact}/>)
                  : (<Redirect to={defaultPage}/>)

            })}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
