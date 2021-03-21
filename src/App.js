import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RiderDetail from "./components/RiderDetail/RiderDetail";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserInfo from "./components/UserInfo/UserInfo";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    error: '',
    photo: '',
    password: '',
    confirmPassword: '',
    isLoggedIn: false
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/userInfo">
            <UserInfo />
          </PrivateRoute>
          <PrivateRoute path="/rider/:name">
            <RiderDetail />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
