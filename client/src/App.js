import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';

import Car from './pages/car';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import WithAuthentication from './components/hocs/WithAuthentication';

import './App.css';

function App() {
  // Usamos el hook customizado useUser
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/profile">
              <WithAuthentication>
                <Profile />
              </WithAuthentication>
            </Route>

            <Route exact path="/car/:id">
              <Car />
            </Route>

            <Route exact path="/login">
              <Login /> 
            </Route>
          </Switch>      
      </div>
    </UserContext.Provider>
  );
}

export default App; 


