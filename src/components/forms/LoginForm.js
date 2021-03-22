import "./Forms.css";
import { useState } from "react";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom"
import Button from "../button/Button";
import validateEmail from "../../utils/validateEmail"
import { API_ROOT } from "../../utils/hostSettings";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [errorStyle, setErrorStyle] = useState({
    'email': 'errorInvisible',
    'password': 'errorInvisible',
  });
  const body = {
    email: email,
    password: password,
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

    const validation = {
      'email': validateEmail(email) ? 'errorInvisible' : "errorVisible",
      'password': password.length > 5 ? 'errorInvisible' : "errorVisible"
    }
    setErrorStyle(validation);
    if (!Object.values(validation).find(value => value === 'errorVisible')) {
      fetch(`${API_ROOT}/api/auth/login`, options)

        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("token", json.token);
          localStorage.setItem("user", JSON.stringify(json.user));
          const profileCompleted = json.user.signup_completed
          if (profileCompleted) {
            history.replace("/swipepage");
          } else {
            history.replace("/create-account");
          }
          window.location.reload(false);
        });
    }
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
          className={errorStyle.email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email adress"
        />
        <span className={errorStyle.email}>Invalid email</span>
        <input
          className={errorStyle.password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <span className={errorStyle.password}>Invalid Password</span>
        <div className="button__container">
          <Button
            name="Sign In"
            alt="Button to Sign Up"
            style="button_dark_great"
            onClick={handleLogin}
          />
        </div>
        <p className="signupAdnsLogin_form"> Don't have an account?
        <span
            className="colorPurple"
            onClick={() => { history.push("/signup") }} > Sign up </span></p>
      </div>
    </form>
  );
};

export default LoginForm;
