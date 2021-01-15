import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from './pages/LandingPage';
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';

// o
function App() {
  return (
    <div className="App__container">
      <Router>
        <Header />
        <Footer />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>

    </div>
  )
};

export default App;
