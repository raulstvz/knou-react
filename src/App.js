import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SignUpPage from "./pages/SignUpPage";
import ProfileFormPage from "./pages/ProfileFormPage";

function App() {
  return (
    <div className="App__container">
      <div className="body_container">
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
              <SignUpPage />
            </Route>
            <Route exact path="/profileform">
              <ProfileFormPage />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
