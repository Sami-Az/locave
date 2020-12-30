import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/navigation/MainNavigation';
import UsersPage from './users/pages/Users';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/">
            <UsersPage />
          </Route>
          <Route exact path="/places/new" >
            <NewPlace />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
