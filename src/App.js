import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import ProfileFormPage from './pages/ProfileFormPage';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SignUpPage from "./pages/SignUpPage";
import ProfileFormPage from "./pages/ProfileFormPage";

function App() {
  return (
    <div className="App__container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
          <Route exact path="/login">
            <LandingPage />
          </Route>
            <LoginPage />
          <Route exact path="/signup">
          </Route>
            <SignupPage />
          </Route>
          <Route exact path="/profileform">
            <ProfileFormPage />
          </Route>
        </Switch>
      </Router>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
