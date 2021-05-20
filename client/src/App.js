import { Route, Switch } from 'react-router-dom';
import { UserContext, useUser } from './context/User';

// import Car from './pages/car';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import WithAuthentication from './components/hocs/WithAuthentication';
import CarId from './pages/carId';
import Booking from './pages/booking';

import './App.css';

function App() {
  // Usamos el hook customizado useUser
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
          <Switch>
            <Route exact path="/">
              {/* 1. Pintar la lista de coches del backend en la home */}
              <Home />
            </Route>

            <Route exact path="/profile">
              <WithAuthentication>
                <Profile />
              </WithAuthentication>
            </Route>

            <Route exact path="/car/:carId">
              {/* 2. 3. Traer un solo coche por su id y permitir crear un booking */}
              <CarId />
            </Route>

            {/* 4. Crear ruta protegida /booking que liste los bookings del user */}

            <Route exact path="/booking">
              <WithAuthentication>
                <Booking />
              </WithAuthentication>
            </Route>

            {/* 5. Añadir mejor maquetación al proyecto */}
            <Route exact path="/login">
              <Login /> 
            </Route>
          </Switch>      
      </div>
    </UserContext.Provider>
  );
}

export default App; 


