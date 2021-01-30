import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import UserProfilePage from './pages/UserProfilePage';
import SwipPage from "./pages/SwipePage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LeftBar from "./components/leftBar/letfBar";


function App() {

  return (

    <div className="App__container">
      <Router>
        <Header />
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
        </Switch>
        <div className="footer_container">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
