import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import SwipePage from "./pages/SwipePage";
import ChatPage from "./pages/ChatPage";
import ChatBoxPage from "./pages/ChatBoxPage";
import ChatInfoContext, { chat, setChatInfo } from "./providers/chatInfo";

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
          <Route exact path="/swipePage">
            <SwipePage />
          </Route>
          <ChatInfoContext.Provider value={chat}>
            <Route exact path="/chatsPage">
              <ChatPage />
            </Route>
            <Route exact path="/chatBoxPage">
              <ChatBoxPage />
            </Route>
          </ChatInfoContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
