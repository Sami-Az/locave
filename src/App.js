import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

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
          <Route exact path="/places/:placeId" >
            <UpdatePlace />
          </Route>
          <Route exact path="/:userId/places">
            <UserPlaces />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
