import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import ProfileFormPage from './pages/ProfileFormPage';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PreferencesFormPage from "./components/preferencesForm/PreferencesForm"


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
            <LoginPage/>
          </Route>
           
          <Route exact path="/signup">
            <SignupPage />
          </Route>
           
          
          <Route exact path="/profileform">
            <ProfileFormPage />
          </Route>
          
          <Route exact path="/preferencesform">
            <PreferencesFormPage />
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
