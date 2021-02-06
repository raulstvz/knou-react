import "./Forms.css";
import { useState } from "react";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom"
import Button from "../button/Button";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const body = {
    account: {
      email: email,
      password: password,
    }
  };

  console.log(body);

  const handleLogin = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:3001/api/auth/login", options)
      .then((response) => response.json())
      .then((json) => {
        /* .then(json => console.log('token', json)); */
        localStorage.setItem("token", json.token);
        localStorage.setItem("user", JSON.stringify(json.user)); // history.push(swippage)
        history.replace("/user"); // I don't understand this synatxis
        window.location.reload(false);
      });
  };

  const goToSignUp = () => {
    history.push("/signup")
  }

  return (
    <form className="sideform__container">
      <div className="sideform__subcontainer">
        <div className="form__logo__button">
          <Logo />
          <Button name="Sign up" style="button_white_small" onClick={goToSignUp} />
        </div>
        <span className="form__span">WELCOME BACK</span>
        <h2>Login into your account</h2>
        <input
          className="form__input"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email adress"
        />
        <input
          className="form__input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="button__container">
          <Button
            name="Sign In"
            alt="Button to Sign Up"
            style="button_dark_great"
            onClick={handleLogin}
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
