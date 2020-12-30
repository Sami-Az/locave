import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import NewPlace from './places/pages/NewPlace';
import UsersPage from './users/pages/Users';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UsersPage />
        </Route>
        <Route exact path="/places/new" >
          <NewPlace />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
