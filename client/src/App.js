import { Route, Switch } from "react-router-dom";
import { UserContext, useUser } from "./context/User";

import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import WithAuthentication from "./components/hocs/WithAuthentication";
import CarId from "./pages/carId";
import Booking from "./pages/booking";
import Footer from "./components/Footer";
import Header from "./components/Header";


import "./App.css";

function App() {
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/profile">
            <WithAuthentication>
              <Profile />
            </WithAuthentication>
          </Route>

          <Route exact path="/car/:carId">
            <CarId />
          </Route>

          <Route exact path="/bookings">
            <WithAuthentication>
              <Booking />
            </WithAuthentication>
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
