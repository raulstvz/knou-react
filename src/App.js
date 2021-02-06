import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import CreateAccountPage from './pages/CreateAccountPage';


function App() {

  return (

    <div className="App__container">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/create-account">
            <CreateAccountPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
