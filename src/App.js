
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import AddEvent from './Component/AddEvent/AddEvent';
import AdminBody from './Component/AdminBody/AdminBody';
import ClientEvents from './Component/ClientEvents/ClientEvents';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import VolunteerRegistrationList from './Component/VolunteerRegistrationList/VolunteerRegistrationList';

export const UserContext = createContext();
function App() {
  const [eventInfo, setEventInfo] = useState([{}]);
  return (

    <UserContext.Provider value={[eventInfo, setEventInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/register/:eventName">
            <Register />
          </PrivateRoute>
          <Route path="/clientEvents">
            <ClientEvents />
          </Route>
          <Route path="/volunteerRegisterList">
            <VolunteerRegistrationList />
          </Route>
          <Route path="/addEvent">
            <AddEvent />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
